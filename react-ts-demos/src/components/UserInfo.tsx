import type { Info } from "../interfaces";

const UserInfo = ({ id, name, email }: Info) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
