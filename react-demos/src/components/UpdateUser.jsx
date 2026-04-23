import { useContext } from 'react'
import { UserContext } from './UserContext';

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.elements.name.value;
      updateUser({name});
    }}>
      <input type="text" name="name" placeholder="Enter new name" />
      <button type="submit">Update User</button>
    </form>
  )
}

export default UpdateUser