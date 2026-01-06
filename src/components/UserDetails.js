import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'regenerator-runtime/runtime'

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    }

    
setTimeout(()=>{
fetchUser();
},1000)
  }, [id]);
if (!user) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
