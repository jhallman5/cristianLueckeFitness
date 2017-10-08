export default function reducer(state = {
  exercises: ['lunges', 'benchpress', 'deadlift'],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_EXERCISES' : {
      return {
        ...state,
        fetching: true,
        customer: action.payload,
      };
    }
    case 'FETCH_EXERCISES_FULFILLED' : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        customer: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
