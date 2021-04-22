import React, { Component } from "react";
import axios from "axios";
class UserListing extends Component {
  state = {
    userList: [],
  };

  getUserList = async () => {
    try {
      const userList = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return userList.data;
    } catch (e) {
      console.error(e);
    }
  };

  async componentDidMount() {
    const userList = await this.getUserList();
    this.setState({
      userList,
    });
  }

  render() {
    const { userList } = this.state;
    return (
      <div data-test="component-user">
        <table>
          <tr>
            <th>USER NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
          </tr>
          {userList.length > 0 ? (
            userList.map((user) => {
              return (
                <tr data-test="user-rows">
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })
          ) : (
            <span data-test="loader">user data is loading..</span>
          )}
        </table>
      </div>
    );
  }
}

export default UserListing;
