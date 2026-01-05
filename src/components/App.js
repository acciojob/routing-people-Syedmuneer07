import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
