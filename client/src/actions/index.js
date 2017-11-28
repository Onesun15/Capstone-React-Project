import {API_BASE_URL} from '../config';


export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS';
export const fetchTrendingSuccess = trending => ({
  type: FETCH_TRENDING_SUCCESS,
  trending
});

export const FETCH_TRENDING_REQUEST = 'FETCH_TRENDING_REQUEST';
export const fetchTrendingRequest = trending => ({
  type: FETCH_TRENDING_REQUEST
});

export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR';
export const fetchTrendingError = error => ({
  type: FETCH_TRENDING_ERROR,
  error
});
export const fetchTrending = () => dispatch => {
  dispatch(fetchTrendingRequest());
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/trends?apiKey=btbth79qwypgtfubhamzjc4u&format=json`,
    { 'x-requested-with': 'xhr' }
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => dispatch(fetchTrendingSuccess(data.items)))
    .catch(err => dispatch(fetchTrendingError(err)));
};
//${process.env.PORT || 8080}
export const fetchAddItem = itemId => dispatch => {
  return fetch(`${API_BASE_URL}/users/5a1c39e3734d1d3ed22f4382`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      itemId
    })
  });
};
