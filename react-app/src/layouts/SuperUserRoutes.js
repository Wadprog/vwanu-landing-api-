import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../store/auth';


const SuperUserRoutes = ({ component: Component, ...rest }) => {
  console.log('Super Routes ');
  const auth = useSelector(getCurrentUser);

  return (
    <>
      {
        auth?.data.user ? (
          <Route {...rest} render={(props) => <Component {...props} />} />
        ) : null
      
      }
    </>
  );
};

export default SuperUserRoutes;
