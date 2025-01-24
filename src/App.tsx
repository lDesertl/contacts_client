import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.scss";
import Auth from "./pages/Auth/Auth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Contacts from "./pages/Contacts/Contacts";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import DeleteContact from "./components/DeleteContact/DeleteContact";
import Settings from "./components/Settings/Settings";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
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
          <Route path="edit/:id" element={<EditContact />} />
          <Route path="delete/:id" element={<DeleteContact />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
