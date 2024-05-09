
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
    <nav className='nav'>
   <div className='ButtonsDiv'>
      <div className='Navbutton'>
        <NavLink to={'/'}  className='navbar' >
          <button className="btn btn-secondary">HOME</button>
           </NavLink>
       </div>
       <div className='Navbutton'>
        <NavLink to={'/dishes'}  className='navbar' >
          <button className="btn btn-secondary">DISHES</button>
           </NavLink>
       </div>
      
      </div>
    </nav>
    </div>
    </div>
    
  )
}

export default Navbar