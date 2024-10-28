import "./App.css";
import Index from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
