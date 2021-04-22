import React, { Component } from "react";
import { fetchUserData } from "../../store/actions/index";
import { userListingApi } from "../../apiCall/userListing";
import { connect } from "react-redux";
class UserListing extends Component {
  state = {
    userList: [],
    error: null,
  };

  /*getUserList = async () => {
    try {
      const userList = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return userList.data;
    } catch (e) {
      console.error(e);
    }
  };*/

  async componentDidMount() {
    const userRes = await userListingApi();
    if (userRes.success) {
      this.setState({ userList: userRes.userData });
    } else {
      this.setState({
        error: userRes.errorMessage,
      });
    }
  }

  render() {
    const { userList, error } = this.state;

    return (
      <div data-test="component-user">
        <table>
          <thead>
            <tr>
              <th>USER NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {error !== null ? (
              <tr>
                <td>{error}</td>
              </tr>
            ) : userList.length > 0 ? (
              userList.map((user, ind) => {
                return (
                  <tr
                    style={{
                      cursor: "pointer",
                      background: "yellow",
                      border: "1px solid black",
                    }}
                    data-test="user-rows"
                    key={ind}
                    onClick={() => this.props.getUserData(user.id)}
                  >
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td data-test="loader">user data is loading..</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (id) => dispatch(fetchUserData(id)),
  };
};

export default connect(null, mapDispatchToProps)(UserListing);
