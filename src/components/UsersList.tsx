import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {fetchUsersAsync} from "../features/users/usersSlice";


interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchUsersAsync(filters));
  }, [dispatch, filters]);

  return (
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
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default UserList;