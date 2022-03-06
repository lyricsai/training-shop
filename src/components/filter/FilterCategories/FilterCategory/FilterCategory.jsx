import { Link } from "react-router-dom"



const FilterCategory = ({ parameter, id, type , key}) => {

    return (
        <li key={key}>
            <Link to={'#'}> <input type={type} name={parameter} id={parameter + id} /></Link>
        </li>
    )
}

export default FilterCategory