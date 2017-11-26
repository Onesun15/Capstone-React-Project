import * as trendingActions from '../actions/index'

const initialState = {
  data: [],
  loading: false,
  error: null
}

const trending = (state = initialState, action) => {
  if(action.type === trendingActions.FETCH_TRENDING_REQUEST) {
     return Object.assign({}, state, {
         loading: true
      })
  }

  else if (action.type === trendingActions.FETCH_TRENDING_SUCCESS){
    return Object.assign({}, state, {
      data: action.trending,
      loading: false, 
      error: null
    })
  }
  else if (action.type === trendingActions.FETCH_TRENDING_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state
};

export default trending