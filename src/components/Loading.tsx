// eslint-disable-next-line
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import '../styles/Loading.css';

const Loading: React.FunctionComponent = (): JSX.Element => (
  <div className="loading">
    <CircularProgress size={80} />
  </div>
);

export default Loading;
