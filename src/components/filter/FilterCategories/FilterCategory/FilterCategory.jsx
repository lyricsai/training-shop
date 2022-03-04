


const FilterCategory = ({ parameter, id, type }) => {

    return (
        <li>
            <input type={type} name={parameter} id={parameter + id} />
        </li>
    )
}

export default FilterCategory