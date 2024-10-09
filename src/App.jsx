import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  // this will run when the component renders
  useEffect(() => {
    fetch(('https://66c2e608d057009ee9be3fd7.mockapi.io/posts'))
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // this will run when the component renders and whenever there is a state change in posts
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    console.log('Component rendered');
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>

  )
}

export default App;