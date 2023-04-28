import "./App.css";
import Project from "./components/Project";

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function smoothScroll() {
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <>
      <header>
        <div className="navbar">
          <label className="name">alonkopilov.</label>
          <label className="date">{getTodayDate()}</label>
        </div>
      </header>
      <div className="bg-container">
        <div>
          <div className="info">
            <h1 className="info-title">Hi, My name is Alon</h1>
            <p className="info-paragraph">
              I’m a software developer living in Israel.{" "}
            </p>
            <p className="info-paragraph">
              I Graduated from the National “Magshimim” 3-year Cyber Program,
              coded many personal projects at home, and have work experience as
              a DevOps Engineer & QA in a startup company for over 1.5 years.
            </p>
            <p className="info-paragraph">
              Studied 10-point Computer Science at school.
            </p>
          </div>
          <div className="socials">
            <a href="https://t.me/alonkopilov">
              <img src="src/assets/telegram.svg"></img>
            </a>
            <a href="https://github.com/Alonkopilov">
              <img src="src/assets/github.svg"></img>
            </a>
            <a href="https://www.instagram.com/alonkopilov_/">
              <img src="src/assets/instagram.svg"></img>
            </a>
            <a href="mailto:alonkop12@gmail.com">
              <img src="src/assets/google.svg"></img>
            </a>
            <a href="https://www.behance.net/Low_Poly_alonkopilov">
              <img src="src/assets/behance.svg"></img>
            </a>
          </div>
          <div>
            <img src="src/assets/Profile.png" className="profile"></img>
          </div>
        </div>

        <div>
          <a onClick={smoothScroll}>
            <span></span>
          </a>
        </div>
      </div>
      <div id="portfolio" className="portfolio">
        <h1 className="portfolio-title">Personal Projects...</h1>
        <p className="portfolio-para">
          Here are a few past practice projects I've worked on. Want to see
          more? <a href="mailto:alonkop12@gmail.com">Email me</a>.
        </p>
        <div className="all-projects-container">
          <Project
            cover="src/assets/project-sudoku.png"
            title="Qt/C++ Sudoku Logic Solver"
            info={
              <p>
                A logic-based Sudoku solver written in Qt C++.
                <br /> I built this project to test and practice my C++ skills,
                <br /> while trying to learn to build desktop applications with
                a pretty GUI.
                <br />I intentionally made the solver use human solving
                strategies instead of brute-forcing, in order to challenge
                myself and see how it would look to “humanly” solve a sudoku,
                with inhuman speed.
              </p>
            }
            link="https://github.com/Alonkopilov/qt-sudoku-logic-solver"
          ></Project>
          <Project
            cover="src/assets/project-dotfiles.png"
            title="My Linux workflow .dotfiles"
            info={
              <p>
                My current Linux desktop workflow. You can check my repository
                for configuration files and shell scripts. Here are the tools I
                use:
                <br />
                i3 - A tiling window manager.
                <br />
                Picom - A compositor that can provide
                <br />
                window animations and blurring.
                <br />
                Polybar - A taskbar as you can see at the top
                <br />
                Rofi - Provides a pretty application launcher
                <br />
              </p>
            }
            link="https://github.com/Alonkopilov/dotfiles"
          ></Project>
          <Project
            cover="src/assets/project-whohasmyemail.png"
            title="WhoHasMyEmail? for Android"
            info={
              <p>
                An Email monitoring app for checking websites that use your
                email address. Written in Java with Android Studio.
                <br /> The app takes advantage the Gmail API for java, and uses
                Google’s API with the OAuth 2.0 protocol for authentication and
                authorization. The app is presented to the end user with a
                clear, beautiful and intuitive UI.
              </p>
            }
            link="https://github.com/Alonkopilov/who-has-my-email"
          ></Project>
        </div>
      </div>
      <footer>
        <h2 className="footer-title">~ Designed and Coded by Alon Kopilov</h2>
      </footer>
    </>
  );
}

export default App;
