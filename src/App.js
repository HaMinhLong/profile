import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";

function App() {
  return (
    <div>
      <Router>
        <Route path="/profile" component={Header} />
        <Route path="/profile" component={Banner} />
      </Router>
    </div>
  );
}

export default App;
