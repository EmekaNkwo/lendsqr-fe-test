import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Main, Login, User, UserDetails, Dashboard } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
