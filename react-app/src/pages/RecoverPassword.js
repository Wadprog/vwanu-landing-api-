import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from 'reactstrap'

// Core components that
import routes from '../config'
import PageWrapper from '../components/PageWrapper'
import { Field, Form, Submit } from '../components/form'
import AuthWrapper from '../components/AuthWrapper'

function RecoverPassword() {
  const handleLogin = (credentials) => console.log()
  return (
    <AuthWrapper>
      <PageWrapper>
        <Col lg="5" md="7">
          <Card className="bg-secondary border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <p className="text-center">
                You are only one step a way from your new password, recover your
                password now.
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
                <Field
                  autoCapitalize="none"
                  autoCorrect="false"
                  icon="ni ni-lock-circle-open"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="new-email"
                />

                <Submit title="Change password" block />
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

export default RecoverPassword

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label('Email/UserName'),
  password: Yup.string().required().min(4).label('password'),
  establishment: Yup.string().required().label('Establishment'),
})
