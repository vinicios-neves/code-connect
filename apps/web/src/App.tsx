import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './components/pages/LoginPage/LoginPage'
import { SignupPage } from './components/pages/SignupPage/SignupPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
