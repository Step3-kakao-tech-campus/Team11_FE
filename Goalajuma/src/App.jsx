import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from './pages/login/LoginPage'
import SignUpPage from './pages/signup/SignupPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
