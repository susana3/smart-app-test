import React, { useEffect } from 'react';
import './App.css';
import { fetchUsersAsync } from './features/users/usersSlice';
import { useDispatch } from 'react-redux';
import {AppDispatch} from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="App">
      :)
    </div>
  );
}

export default App;
