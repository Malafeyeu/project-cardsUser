import { useDispatch } from 'react-redux'
import './style.scss'
import { setUser } from '../../../store/action_creators'

const HeaderPageWithCards = () => {
const dispatch = useDispatch()
  return (
    <div className='container-HeaderPageWithCards'>
      <div className="block-w">
        <div 
          className="box-w-logOut" 
          onClick={() => {
            return dispatch(setUser(null)),
            window.location.pathname = '/signIn'
          }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M18.79 24.29C19.18 24.68 19.81 24.68 20.2 24.29L23.79 20.7C23.8827 20.6075 23.9563 20.4976 24.0064 20.3766C24.0566 20.2557 24.0824 20.126 24.0824 19.995C24.0824 19.864 24.0566 19.7343 24.0064 19.6134C23.9563 19.4924 23.8827 19.3825 23.79 19.29L20.2 15.7C20.013 15.513 19.7594 15.408 19.495 15.408C19.2306 15.408 18.977 15.513 18.79 15.7C18.603 15.887 18.498 16.1406 18.498 16.405C18.498 16.6694 18.603 16.923 18.79 17.11L20.67 19H12C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21H20.67L18.79 22.88C18.4 23.27 18.41 23.91 18.79 24.29ZM27 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V14C13 13.45 13.45 13 14 13H26C26.55 13 27 13.45 27 14V26C27 26.55 26.55 27 26 27H14C13.45 27 13 26.55 13 26V24C13 23.45 12.55 23 12 23C11.45 23 11 23.45 11 24V27C11 28.1 11.9 29 13 29H27C28.1 29 29 28.1 29 27V13C29 11.9 28.1 11 27 11Z" fill="#F8F8F8"/>
          </svg>
        </div>
        <div className='block-w-info'>
          <h1 className='block-w-info__title'>Наша команда</h1>
          <p className='block-w-info__description'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
        </div>
        <button 
          onClick={() => {
            return dispatch(setUser(null)),
            localStorage.removeItem('access'),
            window.location.pathname = '/signIn'
          }}
        >Выход</button>
      </div>
    </div>
  )
}

export { HeaderPageWithCards }