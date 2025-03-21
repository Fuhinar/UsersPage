import React from 'react';
import { Link } from 'react-router-dom';

function Card({ user }) {
  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"> 
      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Аватар" className="rounded-full w-24 h-24 mx-auto mb-4" />
      <h2 className="text-lg font-semibold">{user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1)}{' '} {user.name.lastname.charAt(0).toUpperCase() + user.name.lastname.slice(1)}</h2>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">Адрес: {user.address.city}, {user.address.street}</p>
      <Link to={`/users/${user.id}`} className="mt-2 text-blue-500 hover:underline">Подробнее</Link>
    </div>
  );
}

export default Card;