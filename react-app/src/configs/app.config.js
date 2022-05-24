const environment = {
  development: {
    endpoints: {
      DASHBOARD: '/dashboard',
      LOGIN: '/login',
      REGISTER: '/register',
      CREATE_NEW_USER: '/user',
      MARKET: '/market',
      CUSTOMERS: '/customers',
      ACCOUNT: '/account',
      FORGOT_PASSWORD: '/forgotPassword',
      RECOVER_PASSWORD: '/recoverPassword',
      SETUP: '/setup',
      AuthIN: '/index',
      LANDING: '/landing',
    },
    profileImageSettings: {
      FILE_SIZE: 160 * 1024,
      SUPPORTED_FORMATS: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'],
    },
    layouts: {
      ADMIN: '/admin',
      AUTH: '/auth',
      VENDOR: '/vendor',
    },
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
      VENDOR: '/vendor',
    },
  },
  production: {},
}
const getEnvironment = () => {
  return environment.development
}

export default getEnvironment()
