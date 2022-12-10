import { Home, Profile, Users, Destinations, Tours } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/destinations" element={<Destinations />} />
        <Route exact path="/tours" element={<Tours />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
