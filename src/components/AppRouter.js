import React, {useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../routes'
import {ALL_ROUTES, CHAT_ROUTE, LOGIN_ROUTE} from '../utils/consts'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../index'

const AppRouter = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return user ?
    (
      <Routes>
        {privateRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={Component}/>
        )}
        <Route path={ALL_ROUTES} element={<Navigate replace to={CHAT_ROUTE} />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={Component}/>
        )}
        <Route path={ALL_ROUTES} element={<Navigate replace to={LOGIN_ROUTE} />} />
      </Routes>
    )
}

export default AppRouter
