import React from 'react';
import './App.css';
import UserList from "./components/UsersList";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Users List</h1>
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;
