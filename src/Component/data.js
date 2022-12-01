import my1 from "../img/programmer1.png";
import my2 from "../img/programmer2.jpg";
// import my3 from "../img/programmer3.jpg";
import my4 from "../img/programmer4.jpg";
import my5 from "../img/programmer5.jpg";
import forkfy from "../img/forkfy1.PNG";
import bankapp from "../img/bankapp.jpg";
import cocktail from "../img/cocktail1.PNG";
import sideNav from "../img/sideNav.jpg";
import grocery from "../img/grocery.PNG";

const images = [my1, my2, my4, my5];

export default images;

export const myProject = [
  {
    id: 1,
    img: forkfy,
    type: "js",
    name: "forkfy",
    link: "https://subash-first-project.netlify.app/",
  },
  {
    id: 2,
    img: sideNav,
    type: "react",
    name: "sidNav",
    link: "#",
  },
  {
    id: 3,
    img: grocery,
    type: "js",
    name: "grocery",
    link: "https://store-copy.netlify.app/",
  },
  {
    id: 4,
    img: cocktail,
    type: "react",
    name: "cocktail",
    link: "https://subash-second-project.netlify.app/",
  },
];
