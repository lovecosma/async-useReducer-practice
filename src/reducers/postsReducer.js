
const postsReducer = (state = {posts: [], requesting: true}, action) => {
    switch(action.type){
        case "START_FETCHING_POSTS":
            return {
                ...state,
                requesting: true
            }
        case "ADDING_POSTS":
            return {
                ...state,
                posts: [...action.posts],
                requesting: false
            }
        default:
            return state
    }
}

export default postsReducer