import { useDispatch } from 'react-redux';
import { Title } from '../Title'
import './style.scss'
import { useState } from 'react';
import { signIn } from '../../store/action_creators';


const SignIn = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e: any, name: string) => {
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };

  return (
    <div className='container-SignIn'>
      <div className='block-form'>
        <div className='flex-box'>
          <Title title='Вход' />
          <label>
            Электронная почта
            <input
              type='text'
              name='Email'
              placeholder='example@mail.ru'
              value={input.email}
              onChange={(v) => handleInput(v ,'email')} 
              />
          </label>
          <label>
            Пароль
            <input
              type='password' 
              name='Password'
              placeholder='******'
              value={input.password}
              onChange={(v) => handleInput(v ,'password')} 
              />
          </label>
          <button
            onClick={() => dispatch(signIn(input))}
          >Войти</button>
        </div>
      </div>
    </div>
  )
}

export { SignIn }