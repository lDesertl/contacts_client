import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Auth from "./pages/Auth/Auth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Contacts from "./pages/Contacts/Contacts";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/homepage"
          element={
            <>
              <Header />
              <Contacts />
            </>
          }
        >
          {/* <Route path="contacts" element={<Contacts />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
