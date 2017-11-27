import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './actions/index'
import './trending-list.css';


class TrendingList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTrending())
  }
  render() {
    const trending = this.props.trending.map((product, index) => <li className="items-list" 
      key={index}>
      <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
      <div>${product.salePrice}</div>
      <div>{product.name}</div>
      <button type="button" className="addButton">Add to Portfolio</button>
    
    </li>);
    // const images = this.props.trending.map((product, index) =>
    //    <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>);
    
    console.log(this.props)
    return (
        <div className="container">
            <h2>Walmart Trending Products</h2>
             <ul className='items'>{trending}</ul>
                  {/* {images} */}
          </div>
     
    );
  }
}

const mapStateToProps = (state, props) => ({
  trending: state.trending.data
})
export default connect(mapStateToProps)(TrendingList);
