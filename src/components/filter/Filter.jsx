import './Filter.css'

const Filter = () => {
    return (
        <div className="container">
            <div className='filter'>
                <div className="filter__controls">
                    <i className='icon-filter'></i>
                    <span>Filter</span>
                </div>
                <div className="filter__view">
                    <i className='icon-menu-def'></i>
                    <i className='icon-view-grid-selected'></i>
                </div>
                <label htmlFor="select" className="select__label" >Bestsellers <span className='icon'><i className="icon-arrow"></i></span>
                    <select className="filter__select" id="select">
                        <option value="bestsellers">New Arrivals</option>
                        <option value="bestsellers">Specials</option>
                        <option value="bestsellers" defaultValue>Bestsellers</option>
                        <option value="bestsellers">Most Viewed</option>
                        <option value="bestsellers">Featured Products</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default Filter