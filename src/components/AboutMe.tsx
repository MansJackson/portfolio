import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';
import '../styles/AboutMe.css';
import profileImg from '../assets/profilbild.jpg'

const AboutMe: React.FunctionComponent = (props): JSX.Element => {
  return (
    <section id="about_me" className="about_me">
      <div className="about_me_image">
        <img src={profileImg} />
      </div>
      <div className="about_me_text">
        <p>
          My name is Måns Jackson. I've worked as a waiter and a bartender for 7 years at some of the best restaurants in Stockholm.
          I am ambitious, charismatic and I perform well under pressure.
        </p>
        <br />
        <p>
          Ever since I was a kid I have loved logical problems, whether it was mathematics, physics or pussles, and when I was 16 I discovered the world of programming.
          I spent most of my free hours after school teaching myself everything I could but it was mostly a hobby. 
        </p>
        <br />
        <p>
          A few years later I found out about a web development bootcamp provided by School of Applied Technology, I applied immediately and a few weeks later I found out I had gotten a spot.
          After 3 months and 500 coding hours I could officially call myself a professional web developer,
        </p>
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(AboutMe);