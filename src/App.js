import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
      <Register />
    </Router>
  );
}

export default App;
