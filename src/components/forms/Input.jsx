import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Input = (props) => {
  const { label, name, type, errors, ...rest } = props;

  return (
    <div className='form-item'>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${errors ? 'invalid-item' : ''}`}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
