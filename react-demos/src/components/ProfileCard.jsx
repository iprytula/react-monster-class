const ProfileCard = ({children}) => {
  const style = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
    marginTop: "20px",
  }

  return (
    <div style={style}>{children}</div>
  )
}

export default ProfileCard;