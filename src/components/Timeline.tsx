import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';

const Timeline: React.FunctionComponent = (props): JSX.Element => {
  return (
    <section className="timeline">

    </section>
  );
}

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Timeline);