const User = ({ id, fullName, age, email, avatarSrc, hobbies, isMarried }) => {
  return (
    <div className="user" id={id}>
      <div className="name-age">{fullName} {age}</div>
      <div className="email">{email}</div>
      <div className="avatar-container">
        <img src={avatarSrc} alt={fullName + " avatar"} />
      </div>
      <ul className="hobbies">
        {hobbies.map((hobbie) => (
          <li key={id}>{hobbie}</li>
        ))}
      </ul>
      <div className="is-married">{isMarried ? "Married" : "Single"}</div>
    </div>
  );
};

export default User;
