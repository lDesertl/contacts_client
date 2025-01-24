import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Auth from "./pages/Auth/Auth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Contacts from "./pages/Contacts/Contacts";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import DeleteContact from "./components/DeleteContact/DeleteContact";

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
          <Route path="add" element={<AddContact />} />
          <Route path="edit" element={<EditContact />} />
          <Route path="delete" element={<DeleteContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
