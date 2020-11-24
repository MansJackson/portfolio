// eslint-disable-next-line
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as ProjectsTitle } from '../assets/projects_title.svg';
import vinyl from '../assets/vinyl.png';
import covid from '../assets/covid.png';
import chat from '../assets/chat.png';
import todo from '../assets/todo.png';
import foodmap from '../assets/foodmap.png';
import '../styles/Projects.css';

const Projects: React.FunctionComponent = (): JSX.Element => (
  <section className="projects" id="timeline">
    <ProjectsTitle className="projects_title" />
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)' }}
      >
        <h3 className="vertical-timeline-element-title project_title">Salt project - Vinyl Catalog</h3>
        <img alt="overview" className="project_img" src={vinyl} />
        <div className="project_footer">
          <a target="_blank" rel="noopener noreferrer" href="https://mansjackson.com/" className="project_button">LIVE</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/MansJackson/gislaro" className="project_button">SOURCE</a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title project_title">Salt project - Covid</h3>
        <img alt="overview" className="project_img" src={covid} />
        <div className="project_footer">
          <a target="_blank" rel="noopener noreferrer" href="https://mansjackson.com/" className="project_button">LIVE</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/MansJackson/gislaro" className="project_button">SOURCE</a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title project_title">Final Project Salt - FoodMap</h3>
        <img alt="overview" className="project_img" src={foodmap} />
        <div className="project_footer">
          <button className="project_button disabled">LIVE</button>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnyka/Food-Map" className="project_button">SOURCE</a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title project_title">Codetest Ubiquiti - ChatApp</h3>
        <img alt="overview" className="project_img" src={chat} />
        <div className="project_footer">
          <a target="_blank" rel="noopener noreferrer" href="http://chat.mansjackson.com/" className="project_button">LIVE</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/MansJackson/Chat-app" className="project_button">SOURCE</a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title project_title">Codetest Ubiquiti - Todo</h3>
        <img alt="overview" className="project_img" src={todo} />
        <div className="project_footer">
          <a target="_blank" rel="noopener noreferrer" href="https://mj-todo-client.herokuapp.com/" className="project_button">LIVE</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/MansJackson/todo-adv.client" className="project_button">SOURCE</a>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </section>
);

export default Projects;
