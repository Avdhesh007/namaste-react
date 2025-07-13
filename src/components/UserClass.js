import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2> Name: {this.props.name}</h2>
        {/** From Context */}
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <div className="font-bold">LoggedIn User- {loggedInUser}</div>
            )}
          </UserContext.Consumer>
        </div>
        <h3>Location: Pune</h3>
        <h4>Contact: avdhesh0076@gmail.com</h4>
        <h4>Count: {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count+
        </button>
      </div>
    );
  }
}

export default UserClass;
