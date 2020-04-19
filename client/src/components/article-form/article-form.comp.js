import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import MyImage from '../../assets/img/me.jpg';
import { useForm } from '../../utils/hooks';
import isEmpty from '../../utils/isEmpty';
import authTypes from '../../redux/auth/auth.types';

import FormField from '../form-field/form-field.comp';
import CustomButton from '../custom-button/custom-button.comp';
import { createArticle } from '../../redux/article/article.action';
import {
  selectArticleLoading,
  selectArticleErrors
} from '../../redux/article/articles.selector';

import {
  FormWrapper,
  FormFooter,
  UploadIcon,
  UserImageWrapper,
  ImagePreview
} from './article-form.styled';
import UserImage from '../user-image/user-image.comp';
import { selectCurrentUser } from '../../redux/auth/auth.selector';

function ArticleForm(props) {
  const imgRef = React.createRef();

  const { history, dispatch, errors: dataErrors, loading, currentUser } = props;

  const initialState = {
    email: '',
    title: '',
    description: '',
    image: '',
    imagePreview: '',
    _id: ''
  };

  const {
    values,
    setValues,
    handleChange,
    handleSubmit,
    errors,
    setErrors
  } = useForm(handleSubmitCallback, onChangeCallback, initialState);

  const { title, description, imagePreview, image, _id } = values;

  function handleSubmitCallback() {
    submitForm();
  }

  function onChangeCallback() {
    dispatch({
      type: authTypes.CLEAR_ERROR
    });
  }

  const submitForm = () => {
    let formData = new FormData();

    if (_id) formData.append('articleId', _id);

    if (image && image.name) {
      formData.append('image', image, image.name);
    }
    formData.append('title', title);
    formData.append('description', description);

    dispatch(createArticle(formData, history));
  };

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setValues({
        ...values,
        image: e.target.files[0],
        imagePreview: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleEditImage = () => {
    imgRef.current.click();
  };

  useEffect(() => {
    if (!isEmpty(dataErrors)) {
      setErrors(dataErrors);
    }
  }, [dataErrors, setErrors]);

  const { article } = props;

  useEffect(() => {
    if (!isEmpty(article)) {
      setValues({ ...article });
    }
  }, [article, setValues]);

  return (
    <FormWrapper>
      <UserImageWrapper>
        <UserImage image={MyImage} userId={currentUser._id} />
      </UserImageWrapper>

      <form noValidate onSubmit={handleSubmit} className='auth-form'>
        <div className='img-wrapper'>
          <FormField
            type='textarea'
            name='description'
            placeholder="What's happening?"
            value={description}
            error={errors.description}
            onChange={handleChange}
          />

          {imagePreview || _id ? (
            <ImagePreview
              src={
                imagePreview ||
                `http://127.0.0.1:4000/api/v1/article/${_id}/image/`
              }
              alt='upload-imgage'
              onClick={handleEditImage}
            />
          ) : null}

          {errors.image && <div className='error-feedback'>{errors.image}</div>}

          <input
            id='image'
            type='file'
            name='image'
            accept='image/**'
            hidden='hidden'
            onChange={handleImageChange}
            ref={imgRef}
          />
        </div>

        <FormFooter>
          <UploadIcon
            className='fas fa-image'
            title='upload image'
            onClick={handleEditImage}
          />

          <CustomButton loading={loading} type='submit'>
            Post
          </CustomButton>
        </FormFooter>
      </form>
    </FormWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: selectArticleLoading,
  errors: selectArticleErrors,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(withRouter(ArticleForm));
