import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import AuthWrapper from '../components/AuthWrapper'
// Core components
import routes from '../config'
import PageWrapper from '../components/PageWrapper'
import { getCurrentUser, Login } from '../store/auth'
import { Field, Form, Submit } from '../components/form'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const auth = useSelector(getCurrentUser)
  const handleLogin = (credentials) => dispatch(Login(credentials))

  return (
    <AuthWrapper>
      <PageWrapper isLoading={auth.loading}>
        <Col lg="5" md="7">
          <Card className="bg-secondary border-0">
            <CardHeader className="bg-transparent pb-5">
              <h1 className="mt-3 text-center">
                Vwanu<span className="text-muted">Dashboard</span>
              </h1>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form
                validationSchema={ValidationSchema}
                initialValues={{
                  username: '',
                  password: '',
                }}
                onSubmit={handleLogin}
              >
                <Field
                  autoCapitalize="none"
                  icon="fas fa-user"
                  placeholder="Username"
                  name="username"
                  type="text"
                />
                <Field
                  autoCapitalize="none"
                  autoCorrect="false"
                  icon="ni ni-lock-circle-open"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="new-email"
                />

                <Submit title="Login" />
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link
                className="text-light"
                to={`${routes.layouts.AUTH}${routes.endpoints.FORGOT_PASSWORD}`}
              >
                <small>Forgot password?</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </PageWrapper>
    </AuthWrapper>
  )
}

export default LoginScreen

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label('Email/UserName'),
  password: Yup.string().required().min(4).label('password'),
})
