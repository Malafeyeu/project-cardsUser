import { useState } from "react"
import { Title } from "../Title"
import { useDispatch } from "react-redux"
import { signUp } from "../../store/action_creators"
import "./style.scss"
import { Link } from "react-router-dom"

const SignUp = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {userName, confirmPassword, ...newInput} = input;
  
  const handleInput = (name: string) => (e: any) => {
    setInput({...input,
      [name]: e.target.value
    });
    handleError(name, e.target.value);
  }

  const handleError = (name: string, value: string) => {
    switch (name) {
      case 'userName':
        const r = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/; 
        !r.test(String(value).toLowerCase()) ? setError({...error, userName: 'Ошибка'}) : setError({...error, userName: ''});
        break;
      case 'email':
        const re = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
        !re.test(String(value).toLowerCase()) ? setError({
          ...error, email: 'Ошибка'}) : setError({...error, email: ''});
        break;
      case 'password':
        const req = /^[A-Za-z]\w$/;
        req.test(String(value).toLowerCase()) ? setError({
          ...error, password: 'Ошибка'}) : setError({...error, password: ''});
        break;
      case 'confirmPassword':
        input.password !== value ? setError({
          ...error, confirmPassword: 'Ошибка'}) : setError({...error, confirmPassword: ''});
        break;
      default:
        break;
    }
  }

  return (
    <div className='container-SignUp'>
      <div className='block-form'>
        <div className='flex-box'>
          <Title title='Регистрация' />
          <label>
            Имя
            <input
              type='text'
              name='User Name'
              placeholder='Арутр'
              value={input.userName}
              onChange={handleInput('userName')} />
          </label>
            {error && <div className='error'>{error.userName}</div>}
          <label>
            Электронная почта
            <input
              type='text'
              name='Email'
              placeholder='example@mail.ru'
              value={input.email}
              onChange={handleInput('email')} />
          </label>
            {error && <div className='error'>{error.email}</div>}
          <label>
            Пароль
            <input
              type='password' 
              name='Password'
              placeholder='******'
              value={input.password}
              onChange={handleInput('password')} />
          </label>
            {error && <div className='error'>{error.password}</div>}
          <label>
            Подтвердите пароль
            <input 
              type='password'
              name='ConfirmPassword'
              placeholder='******'
              value={input.confirmPassword}
              onChange={handleInput('confirmPassword')} />
          </label>
            {error && <div className='error'>{error.confirmPassword}</div>}
          <Link className='flex-box__link-signIn' to={'/signIn'}>Уже есть аккаунт</Link>
          <button
            onClick={() => dispatch(signUp(newInput))}
          >Зарегистрироваться</button>
        </div>
      </div>
    </div>
  )
}

export { SignUp }