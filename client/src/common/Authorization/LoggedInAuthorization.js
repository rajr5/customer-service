// import React from 'react'
import { inject, observer } from 'mobx-react'

/**
 * Component will render children when user is logged in.
 *
 * @param {any} props
 * @param {any} props.authStore Auth store
 * @param {any[]} props.children React children
 */
const LoggedInAuthorization = ({ authStore, children }) => {
  if (!authStore.isLoggedIn) {
    return null
  }

  return children
}

export default inject('authStore')(observer(LoggedInAuthorization))
