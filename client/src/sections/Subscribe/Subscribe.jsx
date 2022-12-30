import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import './subscribe.scss';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('email is required'),
}).required();

const Subscribe = () => {
  const { register, reset, formState, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '' });
    }
  }, [formState, reset]);

  const onSubmit = data => {
    console.log('Form data', data);
  }

  return (
    <div className='subscribe'>
      <h2 className='subscribe__title'>Save time, save money!</h2>
      <h3 className='subscribe__subtitle'>Sign up and we'll send the best deals to you</h3>

      <div className="container">
        <form className='subscribe__form' onSubmit={handleSubmit(onSubmit)}>
          <label className='subscribe__label'>
            <input className='subscribe__input' type="email" placeholder=' Your email' {...register("email")} />
            <button className='subscribe__submit btn'>Subscribe</button>
          </label>
          <span className='subscribe__error'>{errors.email?.message}</span>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
