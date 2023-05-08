import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/LoginPage/Login';
import PathNotFound from './components/Error/PathNotFound';
import Header from './components/DashBoard/header';
import DashBoard from './components/DashBoard/Dashboard';
import Footer from './components/Footeer/footer';

function App() {
  return (
    <>
   
<BrowserRouter>
<Header/>
    <Routes>
      <Route path='' element={<DashBoard/>}/>
      <Route path='/l' element={<Login/>} />
      <Route path='/r' element={<Registration/>}/>
      <Route path='*' element={<PathNotFound/>}/>
    </Routes>
</BrowserRouter>
<Footer/>
    </>
  );
}

export default App;
