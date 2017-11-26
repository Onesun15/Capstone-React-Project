import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './actions/index'


class TrendingList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTrending())
  }
  render() {
    const trending = this.props.trending.map((product, index) => <li key={index}>{product.name}</li>);
    const images = this.props.trending.map((product, index) =>
       <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>);
    
    console.log(this.props)
    return (
          <div>
             <ul>{trending}</ul>
                  {images}
          </div>
     
    );
  }
}

const mapStateToProps = (state, props) => ({
  trending: state.trending.data
})
export default connect(mapStateToProps)(TrendingList);
