import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Route path="/profile" component={Header} />
        <Route path="/profile" component={Banner} />
        <Route path="/profile" component={About} />
        <Route path="/profile" component={Services} />
      </Router>
    </div>
  );
}

export default App;
