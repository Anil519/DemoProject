import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/LoginPage/Login';
import PathNotFound from './components/Error/PathNotFound';
import Layout from './components/Layout/layout';
import Dash from './components/Layout/Dashboard';
import HomePage from './components/Layout/Home';
// import Footer from './components/Footeer/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='' element={<Layout />} >
              <Route path='/d' element={<Dash/>} />
              <Route path='/l' element={<Login />} />
              <Route path='/r' element={<Registration />} />
              <Route path='*' element={<PathNotFound />} />
          </Route>
          <Route path='/Home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
