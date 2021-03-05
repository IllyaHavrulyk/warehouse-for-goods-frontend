import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getGoods } from '../../redux/viewReducer';
import View from './View'

class ViewContainer extends React.Component {

    componentDidMount() {
        let goodsId = this.props.match.params.goodsId;
        this.props.getGoods(goodsId);
    }

    render() {
        if (!this.props.goods) {
            return <div></div>
        }
        return (
            <div>
                <View {...this.props} />
            </div>
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        goods: state.view.goods
    }
}

export default compose(
    connect(mapDispatchToProps, { getGoods }),
    withRouter
)(ViewContainer)



