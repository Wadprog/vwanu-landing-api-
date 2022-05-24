import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from 'reactstrap'

// Core components that
import routes from '../config'
import PageWrapper from '../components/PageWrapper'
import { Field, Form, Submit } from '../components/form'
import AuthWrapper from '../components/AuthWrapper'
function ForgotPassword() {
  const handleLogin = (credentials) => console.log()
  return (
    <AuthWrapper>
      <PageWrapper>
        <Col lg="5" md="7">
          <Card className="bg-secondary border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <p className="text-center">
                You forgot your password? Here you can easily retrieve a new
                password.
              </p>
              <Form
                validationSchema={ValidationSchema}
                initialValues={{
                  username: '',
                  password: '',
                  establishment: '',
                }}
                onSubmit={handleLogin}
              >
                <Field
                  autoCapitalize="none"
                  autoCorrect="false"
                  icon="fas fa-user"
                  placeholder="username"
                  name="password"
                  type="text"
                  autoComplete="new-email"
                />

                <Submit title="Request new Password" block />
              </Form>
              <Link
                className="text-success"
                to={`${routes.layouts.AUTH}${routes.endpoints.LOGIN}`}
              >
                <small>
                  <span>
                    <i class="fas fa-arrow-left mr-2"></i>
                  </span>
                  <span>Login</span>
                </small>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </PageWrapper>
    </AuthWrapper>
  )
}

export default ForgotPassword

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label('Email/UserName'),
  password: Yup.string().required().min(4).label('password'),
  establishment: Yup.string().required().label('Establishment'),
})
