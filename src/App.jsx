import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import UsersList from './pages/UsersList/UsersList.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';
import NotFound from './pages/404/404.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;