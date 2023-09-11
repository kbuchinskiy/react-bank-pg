import React from 'react';
import style from './style.css';
import { useSelector } from 'react-redux';
import User from './components/User';

const App = () => {
  const count = useSelector((state) => state.bankReducer.count);

  const users = [{ name: 'user 1' }, { name: 'user 2' }, { name: 'user 3' }];

  return (
    <div className="app">
      <div className="count">
        bank balance: <strong>{count}</strong>
      </div>
      <div className="user-list">
        {users.map((user, index) => (
          <User key={index} name={user.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
