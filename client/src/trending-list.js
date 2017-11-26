import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './actions/index'


class TrendingList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTrending())
  }
  render() {
    const trending = this.props.trending.trending.map((product, index) => <li key={index}>{product.name}</li>);
    console.log(this.props)
    return (
     <ul>{trending}</ul>
    );
  }
}

const mapStateToProps = (state, props) => ({
  trending: state.trending
})
export default connect(mapStateToProps)(TrendingList);