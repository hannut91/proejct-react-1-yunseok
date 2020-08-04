import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import dayjs from 'dayjs';

const styles = {
  counter: {
    fontSize: '7rem',
    textAlign: 'center',
  },
  progress: {
    '&.CircularProgressbar': {
      width: '100%',
      verticalAlign: 'middle',
      '.CircularProgressbar-trail': {
        stroke: '#d6d6d6',
        strokeLinecap: 'round',
      },
      '.CircularProgressbar-path': {
        stroke: '#3e98c7',
        strokeLinecap: 'round',
        transition: 'stroke-dashoffset 0.5s ease 0s',
      },
      '.CircularProgressbar-text': {
        fill: '#3e98c7',
        fontSize: '20px',
        dominantBaseline: 'middle',
        textAnchor: 'middle',
      },
    },
  }
}

export default function Timer({ currentSeconds }) {
  return (
    <>
      <CircularProgressbar
        minValue={0}
        MaxValue={25 * 60 * 1000}
        css={styles.progress}
        value={currentSeconds / (25 * 60 * 1000) * 100}
        text={dayjs(currentSeconds).format('mm:ss')}
      />
    </>
  )
}
