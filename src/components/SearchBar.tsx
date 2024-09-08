import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { updateFilters } from '../features/filters/filtersSlice';
import './SearchBar.css';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: any) => state.filters);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(updateFilters({ ...filters, [name]: value }));
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="search"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <input
        type="search"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Search by username"
      />
      <input
        type="search"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Search by email"
      />
      <input
        type="search"
        name="phone"
        value={phone}
        onChange={handleInputChange}
        placeholder="Search by phone"
      />
    </div>
  );
};

export default SearchBar;