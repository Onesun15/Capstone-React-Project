import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './actions/index'
import './trending-list.css';


class TrendingList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTrending())
  }
  render() {
    const trending = this.props.trending.map((product, index) => <div class="items" 
      key={index}>
      <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
      <div>${product.salePrice}</div>
      <div>{product.name}</div>
      <button type="button" class="addButton">Add to Portfolio</button>
    
    </div>);
    // const images = this.props.trending.map((product, index) =>
    //    <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>);
    
    console.log(this.props)
    return (
          <div>
            <h2>Walmart Trending Products</h2>
             <ul>{trending}</ul>
                  {/* {images} */}
          </div>
     
    );
  }
}

const mapStateToProps = (state, props) => ({
  trending: state.trending.data
})
export default connect(mapStateToProps)(TrendingList);
