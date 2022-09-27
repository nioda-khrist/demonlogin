import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '@/firebase/firebase';
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
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email Inválido').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
  });

  const onSubmit = ({ email, password }, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
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
    <div className='register'>
      <Title
        heading='ようこそ!'
        img='/src/assets/neko-mask.png'
        text='Bem-vindo(a)!'
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log('FORMIK', formik);
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
              <FormikControl
                control='input'
                type='password'
                label='Confirmar Senha'
                name='confirmPassword'
                onChange={formik.handleChange}
                errors={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? formik.errors.confirmPassword
                    : ''
                }
                value={formik.values.confirmPassword}
              />
              <button type='submit' className='submit'>
                Registrar
              </button>
            </Form>
          );
        }}
      </Formik>

      <Social
        title='Ou se registre com'
        text='Já é membro?'
        link='Faça Login'
        toggleLogin={toggleLogin}
      />
    </div>
  );
};

export default index;
