import { connect } from "react-redux"
import { Fragment} from 'react'

import FilterBlock from "./FilterBlock"


const FilterBlockContainer = ({ category,
    isOpenFilter,
    togglingFilter,
    filter, products,
    handler,
    prices,
    colors,
    brands,
    sizes,
    activeBrand,
    activeColor,
    activePrice,
    activeSize

}) => {




    return (
        <Fragment>
            <FilterBlock
                prices={prices}
                colors={colors}
                brands={brands}
                sizes={sizes}
                isOpenFilter={isOpenFilter}
                filter={filter}
                activeColor={activeColor}
                activeSize={activeSize}
                activeBrand={activeBrand}
                activePrice={activePrice}
                handler={handler}
            />
        </Fragment>
    )
}

const mapsStateToProps = (state, ownProps) => {
    return {
        filter: state.filter,
        products: ownProps.products,
        category: ownProps.category,
        options: ownProps.options,
        isOpen: ownProps.isOpen,
        toggling: ownProps.toggling,
        handleClickOption: ownProps.handleClickOption,
        selectedOption: ownProps.selectedOption,
        isOpenFilter: ownProps.isOpenFilter,
        togglingFilter: ownProps.togglingFilter,
    }
}

// const mapsDispatchToProps = () => {
//     return function (dispatch) {
//         dispatch(selectColors())
//         dispatch(selectSizes())
//         dispatch(selectPrices())
//         dispatch(resetFilters())
//         dispatch(selectBrands())
//         dispatch(setItemsFound())
//     }
// }

export default connect(mapsStateToProps)(FilterBlockContainer)