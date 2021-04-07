import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { addWarehouse, deleteWarehouse, requestWarehouses } from '../../redux/warehouseReducer';
import Warehouses from './Warehouses';

class WarehousesContainer extends React.Component {

    componentDidMount() {
        this.props.requestWarehouses();
    }

    render() {
        return (
            <Warehouses
                warehouses={this.props.warehouses}
                addWarehouse={this.props.addWarehouse}
                deleteWarehouse={this.props.deleteWarehouse}
            />
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        warehouses: state.warehouse.warehouses,
    }
}
export default compose(
    connect(mapDispatchToProps, { requestWarehouses, addWarehouse, deleteWarehouse }),
    withRouter,
    withAuthRedirect
)(WarehousesContainer)