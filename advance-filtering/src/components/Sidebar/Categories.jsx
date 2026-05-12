import Radio from "../inputs/Radio"

const Categories = ({ onChangeHandler }) => {
  return (
    <section className="sidebar-section">
      <h2>Categories</h2>
      <ul>
        <li><Radio name={"category"} value={"all"} label={"All"} onChange={onChangeHandler} checked={true}/></li>
        <li><Radio name={"category"} value={"sneakers"} label={"Sneakers"} onChange={onChangeHandler} /></li>
        <li><Radio name={"category"} value={"flats"} label={"Flats"} onChange={onChangeHandler} /></li>
        <li><Radio name={"category"} value={"sandals"} label={"Sandals"} onChange={onChangeHandler} /></li>
        <li><Radio name={"category"} value={"heels"} label={"Heels"} onChange={onChangeHandler} /></li>
      </ul>
    </section>
  )
}

export default Categories