import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Unlock from "./pages/Unlock";

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/analytics/:id"
                element={<Analytics />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
            <Route
                path="/unlock/:shortCode"
                element={<Unlock />}
            />
            

        </Routes>
    );
}

export default App;