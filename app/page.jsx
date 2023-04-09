import Users from '@/components/Users';
import React from 'react';

const fetchUsers = async () => {
  const resp = await fetch('https://reqres.in/api/users');
  const data = await resp.json();
  return data.data;
};

async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>IndexPage</h1>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
