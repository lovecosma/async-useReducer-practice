import './App.css';
import { useEffect, useReducer } from "react"
import postsReducer from "./reducers/postsReducer"
import { fetchPosts } from "./actions/posts"

function App() {

  const [{posts, requesting}, dispatch] = useReducer(postsReducer, {posts: [], requesting: true})

  useEffect(() => {
    fetchPosts(dispatch)
  }, [])

  return (
    <div>
      {requesting ? 
      <h3>Loading...</h3> :
      posts.map(post => {
        return (
          <div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
