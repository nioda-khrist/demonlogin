import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '@/firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/userSlice';
import Title from '@/components/Sections/Title';
import Social from '@/components/Sections/Social';
import * as Yup from 'yup';
import FormikControl from '@/components/forms/FormikControl';
import { Form, Formik } from 'formik';

const index = ({ toggleLogin }) => {
  const dispatch = useDispatch();

  /* start of formik */
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email Inválido').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = ({ email, password }, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  /* end of formik */

  return (
    <div className='login'>
      <Title
        heading='ひさしぶり!'
        img='/src/assets/mask.png'
        text='Olá, sentimos sua falta!'
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
                onChange={formik.handleChange}
                errors={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : ''
                }
                value={formik.values.email}
              />
              <FormikControl
                control='input'
                type='password'
                label='Senha'
                name='password'
                onChange={formik.handleChange}
                errors={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : ''
                }
                value={formik.values.password}
              />
              <p>Esqueci a senha</p>
              <button type='submit' className='submit'>
                Login
              </button>
            </Form>
          );
        }}
      </Formik>

      <Social
        title='Usar Login Social'
        text='Não tem conta?'
        link='Registre-se'
        toggleLogin={toggleLogin}
      />
    </div>
  );
};

export default index;
