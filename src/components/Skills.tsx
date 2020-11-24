// eslint-disable-next-line
import React from 'react';
import '../styles/Skills.css';
import bootstrapLogo from '../images/logos/bootstrap.png';
import reactLogo from '../images/logos/react.png';
import reduxLogo from '../images/logos/redux.png';
import handlebarsLogo from '../images/logos/handlebars.png';
import { ReactComponent as PugLogo } from '../images/logos/pug.svg';
import nodejsLogo from '../images/logos/nodejs.png';
import expressLogo from '../images/logos/express.png';
import { ReactComponent as PostGreSQL } from '../images/logos/postgresql.svg';
import mysqlLogo from '../images/logos/mysql.png';
import { ReactComponent as Graphql } from '../images/logos/graphql.svg';
import mongodbLogo from '../images/logos/mongodb.png';
import html5Logo from '../images/logos/html5.png';
import css3Logo from '../images/logos/css3.png';
import javascriptLogo from '../images/logos/javascript.png';
import typescriptLogo from '../images/logos/typescript.png';
import javaLogo from '../images/logos/java.png';
import gitLogo from '../images/logos/git.png';
import vscodeLogo from '../images/logos/vscode.png';
import { ReactComponent as Mocha } from '../images/logos/mocha.svg';
import jestLogo from '../images/logos/jest.png';

const Skills: React.FunctionComponent = (): JSX.Element => (
  <div className="skills">
    <div className="skills_wrapper">
      <div className="skills_content">
        <div className="card frontend">
          <h1>Frontend</h1>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={bootstrapLogo} />
            {' '}
            <p>Bootstrap</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={reactLogo} />
            <p>React</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={reactLogo} />
            <p>React Native</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={reduxLogo} />
            <p>Redux</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={handlebarsLogo} />
            <p>Handlebars</p>
          </div>
          <div className="card_item">
            <PugLogo className="card_logo" />
            <p>Pug</p>
          </div>
        </div>
        <div className="card backend">
          <h1>Backend</h1>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={nodejsLogo} />
            <p>Node.js</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={expressLogo} />
            <p>Express</p>
          </div>
          <div className="card_item">
            <PostGreSQL className="card_logo" />
            <p>PostgreSQL</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={mysqlLogo} />
            <p>MySQL</p>
          </div>
          <div className="card_item">
            <Graphql className="card_logo" />
            <p>GraphQL</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={mongodbLogo} />
            <p>MongoDB</p>
          </div>
        </div>
        <div className="card languages">
          <h1>Languages</h1>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={html5Logo} />
            <p>HTML5</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={css3Logo} />
            <p>CSS3</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={javascriptLogo} />
            <p>Javascript</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={typescriptLogo} />
            <p>Typescript</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={javaLogo} />
            <p>Java</p>
          </div>
        </div>
        <div className="card other">
          <h1>Other</h1>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={gitLogo} />
            <p>Git</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={vscodeLogo} />
            <p>Visual Studio Code</p>
          </div>
          <div className="card_item">
            <Mocha className="card_logo" />
            <p>Mocha</p>
          </div>
          <div className="card_item">
            <img alt="logo" className="card_logo" src={jestLogo} />
            <p>Jest</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
