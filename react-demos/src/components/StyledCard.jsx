const StyledCard = ({children}) => {
  return (
    <div style={{
      backgroundColor: "lightblue",
      padding: "20px",
      borderRadius: "10px",
      color: "darkblue",
    }}>{children}</div>
  )
}

export default StyledCard