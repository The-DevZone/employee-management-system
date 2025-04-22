import './App.css'
import Login from './components/Auth/Login.jsx'
import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'

function App() {
  // const [count, setCount] = useState(0)
  // localStorage.clear()
  return (
    <>
      {/* <Login /> */}
      <EmployeeDashboard />
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
