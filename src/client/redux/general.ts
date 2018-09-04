import { createActions, handleActions } from 'redux-actions';

interface IRootState {
  done: boolean;
}

const DO_SOMETHING = 'general/do-something';

const initialState = {
  done: false,
};

export const { general: actions }: any = createActions({
  [DO_SOMETHING]: null,
});

export default handleActions(
  {
    [DO_SOMETHING]: () => ({
      done: true,
    }),
  },
  initialState,
);

export const selectors = {
  getDone: (state: IRootState) => state.done,
};
