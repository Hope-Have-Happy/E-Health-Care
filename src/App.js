import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Support from './components/Support/Support';
import About from './components/About/About';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import DetailsOfService from './components/DetailsOfService/DetailsOfService';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* Navbar */}
          <Navbar></Navbar>

          <Switch>

            {/* Home */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* Home */}
            <Route exact path="/home">
              <Home />
            </Route>

            {/* Serivces */}
            <PrivateRoute exact path="/services">
              <Services />
            </PrivateRoute>

            {/*Single Serivce */}
            <PrivateRoute exact path="/services/:serviceId">
              <DetailsOfService />
            </PrivateRoute>

            {/* Support */}
            <Route exact path="/support">
              <Support />
            </Route>

            {/* About */}
            <Route exact path="/about">
              <About />
            </Route>

            {/* Contact */}
            <Route exact path="/contact">
              <Contact />
            </Route>

            {/* Login */}
            <Route exact path="/login">
              <Login />
            </Route>

            {/* Register */}
            <Route exact path="/register">
              <Register />
            </Route>

            {/* 404 Error */}
            <Route exact path="*">
              <Error />
            </Route>

          </Switch>

          <Footer />

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
