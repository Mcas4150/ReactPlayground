class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  updateName(name){
  this.setState({ name });
   };

  render() {
    return (
      <div className="main">
        <h3>
          Hey, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
           Say:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        </div>




    );
  }
}
