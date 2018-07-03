import axios from 'axios';

export function userRequest() {
  return (dispatch) => {
    axios
      .get('dist/datasource/dummy_online.json')
      .then(function(result) {
        dispatch({
          type: 'USER_DATA',
          payload: result.data,
        });
      });
  };
}


