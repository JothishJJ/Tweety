// Components
import App from './App/App.tsx'
import LoginPage from './App/Login/LoginPage.tsx'

import {createBrowserRouter, createRoutesFromElements ,Route} from "react-router-dom"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<LoginPage />} />
    </>
  )
)

