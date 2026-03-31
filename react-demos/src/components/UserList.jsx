function UserList() {
  const users = [
    { id: 1, username: "John Doe", email: "john@example.com" },
    { id: 2, username: "Jane Smith", email: "jane@example.com" },
    { id: 3, username: "Bob Johnson", email: "bob@example.com" },
  ];

  return (
    <ul className="users-list">
      {users.map(({ id, username, email }) => (
        <li key={id} id={id}>
          <ul>
            <li>{username}</li>
            <li>{email}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
