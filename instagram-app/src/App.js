import React from "react";

import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import { dataWithIds } from "./dummy-data";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate dataWithIds={dataWithIds} />;
  }
}

export default App;
