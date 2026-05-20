import { useRef, useState } from 'react'
import type { SubmitEventHandler } from 'react'
import type { UserProfile } from '../interfaces';

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    id: 1,
    name: 'John Doe',
    email: 'user@example.com',
    role: 'User'
  });

  const nameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const roleInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = {
      name: nameInput.current!.value,
      email: emailInput.current!.value,
      role: roleInput.current!.value
    }
    const randomId = Math.floor(Math.random() * 1000);

    setProfile({
      id: randomId,
      ...formData
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Provide your name" type="text" name="name" ref={nameInput} />
        <input placeholder="Provide your email" type="email" name="email" ref={emailInput} />
        <input placeholder="Provide your role" type="text" name="role" ref={roleInput} />
        <button type="submit">Submit</button>
      </form>
      <div className="user-profile">
        <h2>{profile.name}</h2>
        <p>ID: {profile.id}</p>
        <p>Email: {profile.email}</p>
        {profile.role && <p>Role: {profile.role}</p>}
      </div>
    </div>
  );
}

export default UserProfile