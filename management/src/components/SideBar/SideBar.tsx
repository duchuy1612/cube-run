import './Sidebar.css'
import { useDispatch } from 'react-redux'

import { logout } from '../../actions/userActions'
import { Link } from 'react-router-dom'

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    console.log('hello')
    dispatch(logout())
  }
  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
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
          <Link className='linked' to='/'>
            Account Management
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-male' aria-hidden='true'></i>
          <Link className='linked' to='/student-register'>
            Event Management
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-coins'></i>
          <Link className='linked' to='/student-fee'>
            Logs
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fas fa-info'></i>
          <Link className='linked' to='/student_details'>
            Student Details
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