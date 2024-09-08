import React, { useEffect } from 'react';
import './App.css';
import { fetchUsersAsync } from './features/users/usersSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "./store/store";
import UserList from "./components/UsersList";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Users List</h1>
      <UserList users={users.users} />
    </div>
  );
}

export default App;
