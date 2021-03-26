import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Route path="/profile" component={Header} />
        <Route path="/profile" component={Banner} />
        <Route path="/profile" component={About} />
      </Router>
    </div>
  );
}

export default App;
