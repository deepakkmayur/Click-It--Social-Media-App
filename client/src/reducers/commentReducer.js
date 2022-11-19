
const commentReducer = (
   state = { comments:[], loading: false, error: false },
   action     
 ) => {
   switch (action.type) {
 





  case "COMMENT_START":
   return { ...state, loading: true, error: false };
 case "COMMENT_Success":
   // return { ...state, comments:action.data, loading: false, error: false };
   return { ...state, comments:[...state.comments,action.data], loading: false, error: false };
   // return  [...state.comments,];
 case "COMMENT_FAILED":
   return { ...state, loading: false, error: true };



   default:
      return state;
  }
};

export default commentReducer;
