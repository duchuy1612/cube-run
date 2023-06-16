import './Sidebar.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { Link } from 'react-router-dom'

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const logoutHandler = () => {
    console.log('hello')
    dispatch(logout())
    nav("/login")
  }
  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title flex-col'>
        <img src="/cube-run.png" className="object-scale-down items-center h-36"></img>
        <div className='flex flex-row items-center justify-center'>
          <img src="/Group 103.png" className="object-scale-down items-center h-9"></img>
          <img src="/CUBE RUN.png" className="object-scale-down items-center h-30"></img>
        </div>
        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        ></i>
      </div>

      <div className='sidebar__menu'>
      <div className='sidebar__link active_menu_link'>
          <i className='fa fa-home'></i>
          <Link className='linked' to='/home'>
            Home
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-home'></i>
          <Link className='linked' to='/accounts'>
            Accounts
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-male' aria-hidden='true'></i>
          <Link className='linked' to='/events'>
            Event Management
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-coins'></i>
          <Link className='linked' to='/logs'>
            Logs
          </Link>
        </div>
        <div className='sidebar__logout'>
          <i className='fa fa-power-off'></i>
          <Link className='linked' onClick={logoutHandler} to='/login'>
            Log out
          </Link>
        </div>
      </div>
    </div>
  )
}