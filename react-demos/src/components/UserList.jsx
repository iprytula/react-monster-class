import User from "./User";

function UserList() {
  const usersList = [
    {
      id: 1,
      fullName: "John Smith",
      email: "john.smith@example.com",
      avatarSrc: "https://i.pravatar.cc/150?img=1",
      age: 28,
      isMarried: false,
      hobbies: ["gaming", "reading"],
    },
    {
      id: 2,
      fullName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatarSrc: "https://i.pravatar.cc/150?img=2",
      age: 34,
      isMarried: true,
      hobbies: ["yoga", "painting"],
    },
    {
      id: 3,
      fullName: "Michael Brown",
      email: "michael.brown@example.com",
      avatarSrc: "https://i.pravatar.cc/150?img=3",
      age: 45,
      isMarried: true,
      hobbies: ["hiking", "cooking"],
    },
    {
      id: 4,
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      avatarSrc: "https://i.pravatar.cc/150?img=4",
      age: 26,
      isMarried: false,
      hobbies: ["photography", "dancing"],
    },
    {
      id: 5,
      fullName: "David Wilson",
      email: "david.wilson@example.com",
      avatarSrc: "https://i.pravatar.cc/150?img=5",
      age: 31,
      isMarried: false,
      hobbies: ["swimming", "coding"],
    },
  ];

  return (
    <ul className="users-list">
      {usersList.map(
        ({ id, fullName, email, avatarSrc, age, isMarried, hobbies }) => (
          <li key={id} id={id}>
            <User
              id={id}
              fullName={fullName}
              email={email}
              avatarSrc={avatarSrc}
              age={age}
              isMarried={isMarried}
              hobbies={hobbies}
            />
          </li>
        ),
      )}
    </ul>
  );
}

export default UserList;
