import Login from "./components/Login/Login";
import Register from "./components/RegisterForm/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
