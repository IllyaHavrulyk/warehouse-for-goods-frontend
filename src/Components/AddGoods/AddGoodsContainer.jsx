import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addGoods, setIsPutGoods } from '../../redux/goodsReducer';
import AddGoods from './AddGoods';

class AddGoodsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsPutGoods(false);
    }
    render() {
        return (
            <AddGoods {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isPutGoods: state.goods.isPutGoods
    };
}

export default compose(
    connect(mapStateToProps, { addGoods, setIsPutGoods }),
    withRouter
)(AddGoodsContainer);

//export default connect(mapStateToProps, { addGoods, setIsPutGoods })(withRouter(AddGoodsContainer));


