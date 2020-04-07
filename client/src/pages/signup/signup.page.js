import React from 'react';
import { Link } from 'react-router-dom';

import SignupForm from '../../components/signup-form/signup-form.comp';

export default function SigninPage() {
  return (
    <div className='auth-container'>
      <h1 className='auth-header'>
        <Link to='/'>ArticleTask: sign up</Link>
      </h1>
      <SignupForm />
    </div>
  );
}
