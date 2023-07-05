import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { history } from './_helpers';
import {  Alert, PrivateRoute } from './_components';
import { Home } from './pages/Home';
import Error404 from "./pages/Errors";

import Footer from "./containers/Footer";

import "./App.scss";
import MyAccount from "./pages/Account/MyAccount";
import Nav from './containers/Nav';





function App() {
    history.navigate = useNavigate();
    history.location = useLocation();
  return (
    <>
      <header>
        <Nav />
        <Alert />
      </header>
      <Routes>
          {/* private */}
          <Route element={<PrivateRoute />}>
                        <Route path="my-account" element={<MyAccount />} />
                    </Route>
          {/* public */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
     
      <Footer />
    </>
  );
}

export default App;
