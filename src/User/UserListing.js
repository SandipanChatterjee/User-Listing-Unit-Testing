import React, { Component } from "react";
import axios from "axios";
import { userListingApi } from "../apiCall/userListing";
class UserListing extends Component {
  state = {
    userList: [],
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

  componentDidMount() {
    const userList = userListingApi();
    this.setState({
      userList,
    });
  }

  render() {
    const { userList } = this.state;
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
            {userList.length > 0 ? (
              userList.map((user, ind) => {
                return (
                  <tr data-test="user-rows" key={ind}>
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

export default UserListing;
