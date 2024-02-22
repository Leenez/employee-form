import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminForm from './components/AdminForm'
import EmployeeForm from './components/EmployeeForm'
import ReceivedForms from './components/ReceivedForms'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element= {<AdminForm />} />
        <Route path="received-forms" element={<ReceivedForms/>} />
        <Route path="employee-form" element={<EmployeeForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
