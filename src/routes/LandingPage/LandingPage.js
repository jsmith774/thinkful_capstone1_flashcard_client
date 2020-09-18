import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
        <h2>CyberCard - A web based flashcard application</h2>

        <h3>Live Demo:</h3>
        <p>
          Demo login credentials are included below in the 'User Roles' section.
          <br />
          <br />
          <span className="important">
            Click the Login button in the top menu bar to begin.
          </span>
        </p>
        <h3>Summary</h3>
        <p>
          This project is an online flashcard app. It is an electronic version
          of traditional physical flashcards commonly used in classrooms.
          Whereas traditional flashcards required a teacher and a student/class
          to be in physical proximity in a face-to-face environment, this
          application removes the physical proximity constraint. The application
          provides a familiar flashcard format that can be utilized remotely and
          lends itself to distance learning environments. This initial "Minimum
          Viable Product" release will allow students to drill/self-assess
          during the formative learning stage. A future enhancement is to add a
          summative assessment mode that Educators can use to test/grade
          Students
        </p>
        <p>
          There are two primary User Roles in the system. A user may be an
          Educator or a Student. Students/Educators will NOT self-register.
          Students and Educator accounts will be pre-loaded.
        </p>
        <p>
          For initial release, flashcards will also be pre-loaded. This initial
          MVP version of the application will focus on the creation of Decks,
          adding select cards to the deck, and granting deck access to select
          student users.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/jsmith774/thinkful_capstone1_flashcard_client/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client README
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jsmith774/thinkful_capstone1_flashcard_server/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server README
            </a>
          </li>
        </ul>

        <h3>User Roles</h3>
        <ul>
          <li>
            <span className="important">EDUCATOR:</span> Educators can create
            new decks and link cards/students to the deck at creation time.
            <br />
            <span className="important">SAMPLE EDUCATOR LOGIN:</span>
            <br />
            Username: <span className="important">mrssmith</span>
            <br />
            Password: <span className="important">mrssmith</span>
            <br />
          </li>
          <li>
            <span className="important">STUDENT:</span> Students see a list of
            decks they have been given access to and can select a deck to go
            through the cards and self-score to assess their performance.
            <br />
            <span className="important">SAMPLE STUDENT LOGIN:</span>
            <br />
            Username: <span className="important">plainjane</span>
            <br />
            Password: <span className="important">plainjane</span>
            <br />
          </li>
        </ul>
        <h3>Deployments</h3>
        <ul>
          <li>
            <a href="https://client-eta-cyan.vercel.app">
              Web Client on Vercel
            </a>{' '}
            NOTE: You are currently viewing a Client deployment if you're seeing
            this page
          </li>
          <li>
            <a
              href=" https://dry-scrubland-36737.herokuapp.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Server on Heroku
            </a>
          </li>
        </ul>

        <h3>Source Code</h3>
        <ul>
          <li>
            <a
              href="https://github.com/jsmith774/thinkful_capstone1_flashcard_server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Source Repo
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jsmith774/thinkful_capstone1_flashcard_client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Source Repo
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
