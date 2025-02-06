import React from "react";
class Footer extends React.Component {
  constructor(props) {
    super(props); // learn why super is needed

    // local state variants
    this.state = {
      countIncrease: 0,
      countDecrease: 1,
    };
  }

  render() {
    return (
      <>
        <div>Count Increase: {this.state.countIncrease}</div>
        <button
          onClick={() =>
            this.setState({
              countIncrease: this.state.countIncrease + 1,
            })
          }
        >
          Increase Count
        </button>

        <div>Count Decrease: {this.state.countDecrease}</div>
        <button
          onClick={() =>
            this.setState({
              countDecrease: this.state.countDecrease - 1,
            })
          }
        >
          Decrease Count
        </button>
      </>
    );
  }
}

export default Footer;
