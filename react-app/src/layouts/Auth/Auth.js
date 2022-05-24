import { useEffect, useRef } from 'react'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'

// core components
import routes from '../../routes'
import config from '../../config'

const { layouts } = config

const Auth = () => {
  const mainContent = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.body.classList.add('bg-default')
    return () => document.body.classList.remove('bg-default')
  }, [])

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContent.current.scrollTop = 0
  }, [location])

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Switch>
          {routes
            .map((prop, key) => {
              if (prop.layout === layouts.AUTH) {
                return (
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={'routes-' + key}
                  />
                )
              }
            })
            .filter((filter) => filter)}

          <Redirect
            exact
            path="/"
            to={`${layouts.AUTH}${config.endpoints.AuthIN}`}
          />
        </Switch>
      </div>
    </>
  )
}

export default Auth
