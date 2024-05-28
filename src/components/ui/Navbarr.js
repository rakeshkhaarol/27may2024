import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



function Navbarr() {
  return (
    <Nav variant="pills" defaultActiveKey="/" >
      <Nav.Item>
        <Link to={'/'} className='nav-link text-white'>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/register"} className='nav-link text-white' >Register</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={'/login'} className='nav-link text-white'>Login</Link>
      </Nav.Item>
    </Nav>

  );
}

export default Navbarr;