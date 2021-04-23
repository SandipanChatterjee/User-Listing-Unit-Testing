import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../store/actions/index";
class UserDetails extends Component {
  componentDidMount() {
    const id = localStorage.getItem("UserListing.userID");
    if (id) {
      this.props.getUserData(id);
    }
  }

  render() {
    const { user } = this.props;
    if (Object.keys(user).length == 0) return null;
    return (
      <div data-test="component-userdetails">
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (id) => dispatch(fetchUserData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
