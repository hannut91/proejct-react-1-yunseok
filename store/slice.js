import { createSlice, current } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    currentSeconds: 25 * 60 * 1000,
    intervalInstance: null,
  },
  reducers: {
    setCurrentSeconds(state, { payload: currentSeconds }) {
      return {
        ...state,
        currentSeconds,
      }
    },
    setIntervalInstance(state, { payload: intervalInstance }) {
      return {
        ...state,
        intervalInstance,
      }
    }
  },
});

export const {
  setCurrentSeconds,
  setIntervalInstance,
} = actions;

export const startPomo = () => (dispatch, getState) => {
  const interval = setInterval(() => {
    const { currentSeconds } = getState();

    dispatch(setCurrentSeconds(currentSeconds - 1000));
  }, 1000);

  dispatch(setIntervalInstance(interval));
}

export const stopPomo = (cleaner) => (dispatch, getState) => {
  const { intervalInstance } = getState();

  cleaner(intervalInstance);
}

export default reducer;
