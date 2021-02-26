import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* will take any props from parent comp and will pass it to child  */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});

export default Main;
