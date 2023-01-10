import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./App.css";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="../auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="../home" /> : <Auth />}
          />
          <Route
            path="/profile/:id"
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
