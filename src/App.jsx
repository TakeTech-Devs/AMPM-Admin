import { useEffect } from "react";
import "./App.css";
import Index from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadAdmin } from "./Actions/AdminAction";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadAdmin());
  }, [dispatch]);

  
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
