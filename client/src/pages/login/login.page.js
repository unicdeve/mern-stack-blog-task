import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/login-form/login-form.comp';

export default function LoginPage() {
  return (
    <div className='auth-container'>
      <h1 className='auth-header'>
        <Link to='/'>ArticleTask</Link>
      </h1>
      <LoginForm />
    </div>
  );
}
