import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Work from "./components/Work/Work";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div>
      <Router>
        <Route path="/profile" component={Header} />
        <Route path="/profile" component={Banner} />
        <Route path="/profile" component={About} />
        <Route path="/profile" component={Services} />
        <Route path="/profile" component={Stats} />
        <Route path="/profile" component={Work} />
        <Route path="/profile" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
