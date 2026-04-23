import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
    </div>
  )
}

export default UserProfile