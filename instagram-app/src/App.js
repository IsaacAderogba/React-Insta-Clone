import React from "react";

import PostsPage from "./components/PostContainer/PostsPage";
import { dataWithIds } from "./dummy-data";

class App extends React.Component {
  render() {
      return (
        <PostsPage dataWithIds={dataWithIds} />
      )
    }
}

export default App;
