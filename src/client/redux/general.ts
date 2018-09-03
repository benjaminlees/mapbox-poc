import { createActions, handleActions } from 'redux-actions';
import { Action } from '@client/types/action';

interface RootState {
  done: boolean;
}

const DO_SOMETHING = 'general/do-something';

type Actions = {
  doSomething?: Action<undefined>;
};

const initialState = {
  done: false,
};
/*
{
  general: {
    doSomething: () => { TYPE: 'SOMETHING' },
  }
}
*/

export const { general: actions }: any = createActions({
  [DO_SOMETHING]: null,
});

export default handleActions({
  [DO_SOMETHING]: () => ({
    done: true
  }),
}, initialState);

export const selectors = {
  getDone: (state: RootState) => state.done,
};

