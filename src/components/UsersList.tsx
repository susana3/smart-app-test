import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {fetchUsersAsync} from "../features/users/usersSlice";
import "./UsersList.css"


interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchUsersAsync(filters));
  }, [dispatch, filters]);

  return (
    <div className='user-list'>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {users.users.map((user) => (
          <tr key={user.id}>
            <td data-label='Name'>{user.name}</td>
            <td data-label='Username'>{user.username}</td>
            <td data-label='Email'>{user.email}</td>
            <td data-label='Phone'>{user.phone}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;