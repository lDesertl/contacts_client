import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Auth from "./pages/Auth/Auth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
