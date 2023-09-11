const defaultState = {
  count: 0
};

export const DEPOSIT = 'INCREMENT';
export const WITHDRAW = 'DECREMENT';
export const WITHDRAW_ALL = 'DECREMENT_ALL';

export default function bankReducer(state = defaultState, action) {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, count: state.count + 1 };
    case WITHDRAW:
      return { ...state, count: state.count - 1 > 0 ? state.count - 1 : 0 };
    case WITHDRAW_ALL:
      return { ...state, count: state.count - action.payload };
  }
  return state;
}

export const makeDepositAction = () => ({ type: DEPOSIT });
export const withdrawAction = () => ({ type: WITHDRAW });
export const withdrawAllAction = (payload) => ({ type: WITHDRAW_ALL, payload });
