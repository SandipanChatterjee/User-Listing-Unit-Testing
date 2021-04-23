import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    console.log("user##", user);
    return (
      <div>
        <img src={user.avatar} width="100px" height="100px" />
        <h3>
          {user.first_name} {user.last_name}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.singleUser.userData,
  };
};

export default connect(mapStateToProps)(UserDetails);
