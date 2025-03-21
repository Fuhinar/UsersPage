import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-sky-950 text-white p-4">
      <nav className="container mx-auto flex justify-center items-center">
        <div>
          <Link to="/users" className="mr-4 hover:text-gray-300">Список пользователей</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;