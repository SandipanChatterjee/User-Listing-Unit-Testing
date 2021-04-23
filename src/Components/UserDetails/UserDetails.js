import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>{user.id}</p>
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
