import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: "10px",
    fonrWeight: "bold",
  };

  //   constructor() {
  //     super();
  //     // this will return a new instance of the handleIncrement function
  //     // and in that function this is always referencing the current function
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   you can also bind event handlers by using this instead of creating a constructor
  handleIncrement = () => {
    console.log("Increment clicked");
  };

  // we need to bing this event to 'this' look inside the constructor
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  // nice method that return a statement or the tags!
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    /*render dynamically and get each tag to map to a list item*/
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //div wraps it up as a component
    return (
      <div>
        {/*class name is basically some and style makes it bold*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* handle the button*/}

        <button
          onClick={this.handleIncrement()}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* prints a statemnt if there are no tags in addition to the renderTags() method 
        {this.state.tags.length === 0 && "Plese add some tags!"}
        {this.renderTags()}
        */}
      </div>
    );
  }
  // we want to make the zero button blue or yellow depending on the count; yellow for zero
  // determine the class for our <span> label
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    // return 'zero' if count is = to 0 or the value of count otherwise
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
