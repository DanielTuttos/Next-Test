async function getUser(id) {
  try {
    const resp = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await resp.json();
    return data.data;
  } catch (error) {
    console.log('error: ', { error });
  }
}

async function UsersPages({ params }) {
  const { id } = params;
  const user = await getUser(id);
  console.log(id);
  return (
    <div>
      <h1>user details</h1>
      <img
        src={user.avatar}
        alt={user.email}
      />
      <div>
        <h3>
          {user.id} {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UsersPages;
