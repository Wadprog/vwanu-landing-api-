const environment = {
  development: {
    BASE_URL: 'http://localhost:4000',
    EXPECTED_HEADER: 'x-auth-token',
    endpoints: {
      DASHBOARD: '/dashboard',
      USER_PROFILE: '/user-profile',
      LOGIN: '/login',
      REGISTER: '/register',
      CREATE_NEW_USER: '/user',
      RATE: '/rates',
      TRANSACTIONS: '/transactions',
      CUSTOMERS: '/customers',
      USER: '/user',
      ESTABLISHMENT: '/establishments',
      ACCOUNT: '/account',
      INVOICE: '/invoice',
      CURRENCIES: '/currencies',
      FORGOT_PASSWORD: '/forgotPassword',
      RECOVER_PASSWORD: '/recoverPassword',
      SETUP: '/setup',
      AuthIN: '/i',
    },
    layouts: {
      ADMIN: '/admin',
      AUTH: '/a',
    },
    idsTypes: ['ID', 'Passport', 'License'],
  },
  staging: {
    BASE_URL: 'YOUR_BASE_URL',
    endpoints: {
      DASHBOARD: '/dashboard',
      USER_PROFILE: '/user-profile',
      LOGIN: '/login',
      REGISTER: '/register',
      NEW_TRANSACTION: '/newtransaction',
      CREATE_NEW_USER: '/user',
      TRANSACTIONS: '/transactions',
      CUSTOMERS: '/customers',
      USER: '/user',
      RATE: '/rates',
      ESTABLISHMENT: '/establishments',
      ACCOUNT: '/account',
      INVOICE: '/invoice',
      CURRENCIES: '/currencies',
      FORGOT_PASSWORD: '/forgotPassword',
      RECOVER_PASSWORD: '/recoverPassword',
      SETUP: '/setup',
      AuthIN: '/index',
    },
    layouts: {
      ADMIN: '/admin',
      AUTH: '/auth',
    },
    idsTypes: ['ID', 'Passport', 'License'],
  },
  production: {},
}
const getEnvironment = () => {
  return environment.development
}

export default getEnvironment()
