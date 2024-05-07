
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navcontainer'>
        <div className='Iconcontainer'>
        <div>
        <img 
        src='https://www.creativefabrica.com/wp-content/uploads/2021/11/16/Chef-hat-icon-cartoon-illustration-Graphics-20266678-1.jpg'
        className='icon'/> 

        </div>
        <h3>COOKBOOK COMPANION</h3>
        </div>
       <div>
    <nav>
        <NavLink to={'/'}  className='navbar' >HOME </NavLink>
    </nav>
    </div>
    </div>
    
  )
}

export default Navbar