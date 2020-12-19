import React from "react";
import Log from "../../utils/decorators";

class Other extends React.Component {
  state = {
    sum: 0,
  };
  @Log
  add(str) {
    console.log("xxxx", str);
  }
  render() {
    const { sum } = this.state;
    return (
      <div
        onClick={() => {
          this.add("sum");
        }}
      >
        zzzzzzzzzzzzzzzz{sum}
      </div>
    );
  }
}
export default Other;
