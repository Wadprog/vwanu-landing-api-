import { Container, Row } from 'reactstrap'

// core components
import AuthNavbar from './Navbars/AuthNavbar.js'

import '../assets/css/react.min.css'
const AuthWrapper = ({ children }) => {
  return (
    <>
      <Row className="mt-2 mr-2">
        <div className="col-md-3 offset-md-10 mr-2"></div>
      </Row>
      <AuthNavbar />
      <div className="header bg-gradient-info py-7 py-lg-8">
        <div className="separator separator-bottom separator-skew zindex-100"></div>
      </div>
      {/* Page content */}
      <Container className="mt--8 pb-5">
        {/* {children} */}
        <Row className="justify-content-center">{children}</Row>
      </Container>
    </>
  )
}

export default AuthWrapper
