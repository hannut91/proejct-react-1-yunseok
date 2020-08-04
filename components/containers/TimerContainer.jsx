import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Timer from '../presentational/Timer';

import { startPomo, stopPomo } from '../../store/slice';

export default function TimerContainer() {
  const dispatch = useDispatch();

  const { currentSeconds } = useSelector((state) => state);

  useEffect(() => {
    dispatch(startPomo());

    return () => {
      dispatch(stopPomo(window.clearInterval));
    }
  }, []);

  return (
    <Timer currentSeconds={currentSeconds} />
  );
}
