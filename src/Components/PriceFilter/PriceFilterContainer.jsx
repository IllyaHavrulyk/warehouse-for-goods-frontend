import React from 'react'
import { connect } from 'react-redux';
import { filterPrice } from '../../redux/goodsReducer';
import PriceFilter from './PriceFilter';

const PriceFilterContainer = (props) => {
    return (
        <PriceFilter {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { filterPrice })(PriceFilterContainer);