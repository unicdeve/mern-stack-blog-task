import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { useForm } from '../../utils/hooks';
import isEmpty from '../../utils/isEmpty';
import authTypes from '../../redux/auth/auth.types';

import FormField from '../form-field/form-field.comp';
import CustomButton from '../custom-button/custom-button.comp';
import { selectIsAuthenticated } from '../../redux/auth/auth.selector';
import { createArticle } from '../../redux/article/article.action';
import {
  selectArticleLoading,
  selectArticleErrors
} from '../../redux/article/articles.selector';

function ArticleForm(props) {
  const imgRef = React.createRef();

  const {
    history,
    dispatch,
    errors: dataErrors,
    isAuthenticated,
    loading
  } = props;

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
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

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
    <form noValidate onSubmit={handleSubmit} className='auth-form'>
      <div className='img-wrapper'>
        {imagePreview ? (
          <img
            src={
              imagePreview ||
              `http://127.0.0.1:4000/api/v1/article/${_id}/image/`
            }
            width='100'
            height='100'
            alt='upload-imgage'
            onClick={handleEditImage}
          />
        ) : (
          <i
            className='fas fa-image fa-7x'
            title='upload image'
            onClick={handleEditImage}
          />
        )}

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
      <FormField
        name='title'
        placeholder='title'
        value={title}
        error={errors.title}
        onChange={handleChange}
      />

      <FormField
        type='textarea'
        name='description'
        placeholder='Body'
        value={description}
        error={errors.description}
        onChange={handleChange}
      />

      <CustomButton authBtn loading={loading} type='submit'>
        Post
      </CustomButton>
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
  loading: selectArticleLoading,
  errors: selectArticleErrors
});

export default connect(mapStateToProps)(withRouter(ArticleForm));
