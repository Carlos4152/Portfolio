import React from 'react'

import CSS from "./images/css.png"
import HTML from "./images/html.png"
import Tailwind from "./images/tailwind.png"
import Bootstrap from "./images/bootstrap.png"
import Figma from "./images/figma.png"
import Git from "./images/git.png"
import Github from "./images/github.png"
import Javascript from "./images/js.png"
import react from "./images/react.png"
import Case from "./images/Case-simulator.png"
import Maintenance from "./images/Maintenance.png"
import Portfolioweb from "./images/portfolio_project.png"



const projects = [
  {
    id: 1,
    image: Case,
    name: 'CASE CENTER',
    description: 'I designed and built this case simulator with the main purpose of improving my JavaScript and React skills. This case simulator allows you to register each case or interaction with customers, follow up, search and delete them.',
    skill: [Git, Github, HTML, Tailwind, Javascript, react],
    view: 'https://carlos4152.github.io/Case-Simulator/',
    github: 'https://github.com/Carlos4152/Case-Simulator'
  },
  {
    id: 2,
    image: Maintenance,
    name: 'MAINTENANCE ONE',
    description: 'Maintenance one is a website that already exists, but the design is completely different. I decided to re-design the home page of the website to practice Bootstrap v5.3 and responsive design.',
    skill: [Git, Github, HTML, CSS, Bootstrap, Javascript],
    view: 'https://carlos4152.github.io/Maintenance-One/',
    github: 'https://github.com/Carlos4152/Maintenance-One'
  },
  {
    id: 3,
    image: Portfolioweb,
    name: 'PORTFOLIO WEB',
    description: 'Decided to build my own portfolio using React.',
    skill: [Git, Github, HTML, CSS,Javascript, react],
    view: 'https://carlos4152.github.io/Maintenance-One/',
    github: 'https://github.com/Carlos4152/Maintenance-One'
  }
]

export default projects;