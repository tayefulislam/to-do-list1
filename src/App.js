
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Header from './Pages/Header';
import RequireAuth from './Pages/RequireAuth';

function App() {









  return (
    <div className="App">

      <Header></Header>


      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<SignUp></SignUp>}></Route>
      </Routes>







    </div>
  );
}

export default App;
