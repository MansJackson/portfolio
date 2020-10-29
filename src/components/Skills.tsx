import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';
import '../styles/Skills.css';
import { ReactComponent as Title } from '../assets/skills_title.svg';

const Skills: React.FunctionComponent = (props): JSX.Element => {
  return (
    <div id="skills" className="skills">
      <div className="skills_header">
        <Title className="skills_title" />
      </div>
      <div className="skills_content">
        <div className="card frontend">
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>HTML5</p>
          <p>HTML5</p>
        </div>
        <div className="card backend">

        </div>
        <div className="card databases">

        </div>
        <div className="card languages">

        </div>
        <div className="card version_control">

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Skills);