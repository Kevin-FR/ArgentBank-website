import Page from "./pages/Home";
import Error404 from "./pages/Errors";

import Menu from "./containers/Menu";
import Footer from "./containers/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import SignIn from "./pages/Auth/SignIn";

function App() {
  return (
    <Router>
      <header>
        <Menu />
      </header>
    
      <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/apropos" element={<Page />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;
