import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import {  requestStats } from '../../redux/statsReducer';
import Stats from "./Stats";
 class StatsContainer extends React.Component {
     componentDidMount(){
         this.props.requestStats()
     }
    render() {
        return (
            <Stats 
              stats={this.props.stats}

            />                
        )
    }
 }

 const mapDispatchToProps = (state) => {
    return {
        stats: state.stats.stats,
    }
}

 export default compose(connect(mapDispatchToProps, {requestStats}), withRouter, withAuthRedirect)(StatsContainer);
