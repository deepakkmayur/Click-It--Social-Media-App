const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action     
) => {
  switch (action.type) {


    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };   
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAILED":
      return { ...state, uploading: false, error: true };



    case "TIMELINE_RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "TIMELINE_RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "TIMELINE_RETREIVING_FAIL":
      return { ...state, loading: false, error: true };


    case "DELETE_START":
      return { ...state, loading: true, error: false };
    case "DELETE_SUCCESS":
      console.log("action data",action.data);    
      return { ...state, posts: state.posts.filter((post) => post._id !== action.data._id), loading: false, error: false };
    case "DELETE_FAILED":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
