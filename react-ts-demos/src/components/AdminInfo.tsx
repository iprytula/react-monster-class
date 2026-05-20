import type { AdminInfo } from "../interfaces";

const AdminInfo = ({ id, name, email, role }: AdminInfo) => {
  return <div className="user-card user-card-admin">
    <h2>{name} (Admin)</h2>
    <p>ID: {id}</p>
    <p>Email: {email}</p>
    <p>Role: {role}</p>
  </div>;
};

export default AdminInfo;
