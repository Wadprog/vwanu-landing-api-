import env from './config'
// components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login.js'
import ForgotPassword from './pages/ForgotPassword'
import RecoverPassword from './pages/RecoverPassword'
import HomePage from './pages/Home'
const paths = env.endpoints
const { layouts } = env
var routes = [
  {
    path: paths.DASHBOARD,
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Dashboard,
    layout: layouts.ADMIN,
    supervisorAccess: true,
  },

  {
    path: paths.AuthIN,
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: HomePage,
    layout: layouts.AUTH,
    supervisorAccess: true,
  },

  {
    path: paths.LOGIN,
    name: 'Login',
    icon: 'ni ni-tv-2 text-primary',
    component: Login,
    layout: layouts.AUTH,
  },

  {
    path: paths.FORGOT_PASSWORD,
    name: 'Forgot Password',
    icon: 'ni ni-tv-2 text-primary',
    component: ForgotPassword,
    layout: layouts.AUTH,
  },
  {
    path: paths.RECOVER_PASSWORD,
    name: 'Recover Password',
    icon: 'ni ni-tv-2 text-primary',
    component: RecoverPassword,
    layout: layouts.AUTH,
  },
]
export default routes
