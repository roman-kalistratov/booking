import { Home, Profile, Users, Destinations, Tours, Login } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './index.scss';
function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route path="login" element={<Login />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route exact path="/users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
          </Route>



          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/tours" element={<Tours />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
