import React, { useState } from 'react';
import { withdrawAllAction, withdrawAction, makeDepositAction } from '../store/bankReducer';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const User = ({ name }) => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);

  const makeDeposit = () => {
    setBalance(balance + 1);
    dispatch(makeDepositAction());
  };

  const isBalanceLow = () => {
    return balance === 0;
  };

  const withdraw = () => {
    if (balance - 1 < 0) {
      return;
    }
    setBalance(balance - 1);
    dispatch(withdrawAction());
  };
  const withdrawAll = () => {
    dispatch(withdrawAllAction(balance));
    setBalance(0);
  };

  return (
    <div className={'user'}>
      <div className={'title'}>{name}</div>

      <div className="balance">
        balance: <strong>{balance}</strong>
      </div>

      <div className="actions">
        <button onClick={makeDeposit}>+</button>
        <button onClick={withdraw} disabled={isBalanceLow()}>
          -
        </button>
        <button onClick={withdrawAll} disabled={isBalanceLow()}>
          withdraw all
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string
};

export default User;
