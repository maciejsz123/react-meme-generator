import React ,{Component} from "react";

class GenerateMeme extends Component {
  constructor() {
    super();
    this.state={
      firstPart:"",
      secondPart:"",
      meme: {}
    };
    this.onChange = this.onChange.bind(this);
    this.generate = this.generate.bind(this);
  }

  onChange(event) {
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    );
  }

  generate() {
    const randNumber = Math.floor(Math.random()*99);
    fetch("https://api.imgflip.com/get_memes")
      .then(link => link.json())
      .then(data => this.setState({meme: data.data.memes[randNumber]}))
  }

  componentDidMount() {
    this.generate();
  }

  render() {
    return(
      <div style={divStyle}>
        <form>
          <input
            type="text"
            name="firstPart"
            onChange={this.onChange}
            value={this.state.firstPart}
            placeholder="First part of text">
          </input>
          <input
            type="text"
            name="secondPart"
            onChange={this.onChange}
            value={this.state.secondPart}
            placeholder="First part of text">
          </input>
          <button type="button" className="btn btn-info" onClick={this.generate}>Generate</button>
        </form>
        <div style={divStyle}>
          <img style={imgStyle} src={this.state.meme.url} alt="meme loading"/>
          <div style={imgTopText}>{this.state.firstPart}</div>
          <div style={imgBotText}>{this.state.secondPart}</div>
        </div>
      </div>
    );
  }
}

export default GenerateMeme;

const divStyle = {
  position: "relative",
  textAlign: "center",
  margin: "3%",
};
const imgStyle = {
  width: "40%",
  height: "40%"
};
const imgTopText = {
  position: "absolute",
  left: "50%",
  top: "10%",
  color: "white",
  fontFamily: "Impact",
  fontSize: "50px",
  transform: 'translate(-50%, -50%)',
  textShadow: "-2px -2px black, 2px -2px black, 2px 2px black, -2px 2px black"
};
const imgBotText = {
  position: "absolute",
  left: "50%",
  top: "90%",
  color: "white",
  fontFamily: "Impact",
  fontSize: "50px",
  transform: 'translate(-50%, -50%)',
  textShadow: "-2px -2px black, 2px -2px black, 2px 2px black, -2px 2px black"
};
