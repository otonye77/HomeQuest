import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import HomeCardDetails from './components/HomeCardDetails/HomeCardDetails';
import EditHouse from './pages/EditPage/EditPage';


function App() {

  return (
    <div>
       <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homedetails/:id" element={<HomeCardDetails />} />
        <Route path="/edit-house/:id" element={<EditHouse />} /> 
      </Routes>
    </div>
  )
}

export default App
