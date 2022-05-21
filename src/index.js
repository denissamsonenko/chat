import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

firebase.initializeApp(  {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROJECT_ID
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CssBaseline>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
        <App/>
      </Context.Provider>
    </CssBaseline>
  </React.StrictMode>,
)
