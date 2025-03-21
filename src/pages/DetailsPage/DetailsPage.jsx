import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Details from '../../components/Details/Details.jsx';

function DetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <div className="container mx-auto p-4 text-center">Загрузка...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Details user={user} />
      <Link to="/users" className="mt-4 text-blue-500 hover:underline">Назад к списку пользователей</Link>
    </div>
  );
}

export default DetailsPage;