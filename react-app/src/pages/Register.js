// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Container } from 'reactstrap'

import * as Yup from 'yup'

// Core components
import PageWrapper from 'components/PageWrapper'
import { Field, Form, Submit } from '../components/form'
import AuthWrapper from '../components/AuthWrapper'

const Register = () => {
  return (
    <AuthWrapper>
      <PageWrapper>
        <Container fluid>
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <h1 className="text-center mt-4">
                Kayimit<span className="text-muted">Exchange</span>
              </h1>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form
                validationSchema={ValidationSchema}
                initialValues={{
                  username: '',
                  firstName: '',
                  middleName: '',
                  lastName: '',
                  password: '',
                  img: '',
                }}
                onSubmit={(e, v) => {
                  console.log({ e, v })
                }}
              >
                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-hat-3"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="Username"
                  name="username"
                  type="text"
                />
                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-hat-3"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                />

                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-hat-3"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                />
                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-email-83"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="Email"
                  name="email"
                  type="text"
                />
                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-lock-circle-open"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <Field
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="ni ni-lock-circle-open"
                  keyboardType="email-address"
                  textContentType="text"
                  placeholder="Establishment"
                  name="establishments"
                  type="text"
                />

                <div className=""></div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">Make an Admin</span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <Submit title="Create new user" />
              </Form>
            </CardBody>
          </Card>
        </Container>
      </PageWrapper>
    </AuthWrapper>
  )
}

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label('Email/UserName'),
  firstName: Yup.string().required().min(2).label('Email/UserName'),
  middleName: Yup.string().required().min(2).label('Email/UserName'),
  lastName: Yup.string().required().min(2).label('Email/UserName'),
  password: Yup.string().required().min(4).label('password'),
  img: Yup.string().url().label('Image'),
})
export default Register
