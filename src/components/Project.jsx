import "../App.css";
import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <a href={this.props.link}>
          <div className="p-img-container">
            <img className="p-img" src={this.props.cover}></img>

            <div className="middle">
              <img src="src/assets/github-link.svg"></img>
            </div>
          </div>
        </a>

        <h1 className="p-title">{this.props.title}</h1>
        <p className="p-info">{this.props.info}</p>
        <div className="p-link-container">
          <img src="src/assets/github-link.svg"></img>
          <a href={this.props.link}>
            <p className="p-link">{this.props.link}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
