
export const fetchPosts = (dispatch) => {
    

     dispatch({type: "START_FETCHING_POSTS"})

     fetch("http://localhost:3001/posts")
     .then(resp => resp.json())
     .then(posts => dispatch({type: "ADDING_POSTS", posts}))


} 