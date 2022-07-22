import React from "react";

const FilterColor = (props) => {
    // const [filterColor, setFilterColor] = useState(" ");
    const handleFilter = (event) => {
        props.showColor(event.target.value);
      }
    return (
        <div>
            <input value={props.filterValue} type="text" placeholder="Filter Color..." onChange={handleFilter} />
        </div>
    )
}
export default FilterColor