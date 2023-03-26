import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Notes } from '../notes/notes'
import Authentication from '../Signup/signup'
export const Allroutes = () => {
  return (
    <Routes>
      <Route path='/notes'element={<Notes/>}></Route>
      <Route path='/auth' element={<Authentication/>}></Route>
    </Routes>
  )
}
