import { Link } from 'react-router-dom'
import { NavbarBrand, Navbar, Container } from 'reactstrap'

const AuthNavBar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <span>
              <i class="fas fa-arrow-left mr-2"></i>
            </span>
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  )
}

export default AuthNavBar
