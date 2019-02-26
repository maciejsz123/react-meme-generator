import React, {Component} from "react";
import NavBar from "./navBar";
import GenerateMeme from "./memeGenerator.jsx";

class App extends Component {

  render() {
    return(
      <div>
        <NavBar />
        <GenerateMeme />
      </div>
    );
  }
}

export default App;
