import { useState } from "react"

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "John Doe",
    age: 30
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileInfo({
      ...profileInfo,
      name: e.target.name.value,
      age: Number.parseInt(e.target.age.value)
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <br/>
        <input type="number" name="age"/>
        <br/>
        <input type="submit" value="Change profile info" />
      </form>
      <div className="info">
        <p>Name: {profileInfo.name}</p>
        <p>Age: {profileInfo.age}</p>
      </div>
    </>
  )
}

export default Profile