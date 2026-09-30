import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="contact-us" element={<Contact />} />

      <Route path="user/:id" element={<User />} />

      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
      />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)