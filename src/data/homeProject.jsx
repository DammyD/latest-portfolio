import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";


const homeProject = [
  {
    id: 1,
    title: "Gallery",
    image: project2,
    tag: ["React", "Styled Components"],
    shortDescription: `A gallery website that showcases a collection of images in a visually appealing way. Upon logging in, authenticated users gain access to an interactive Drag-and-Drop feature, allowing for effortless image selection and rearrangement, enhancing your gallery experience. `,
    codeLink: "https://github.com/HNG-Tasks/Stage-three-task",
    liveDemoLink: "https://hng-gallery-app-task.netlify.app/",
  },

  {
    id: 2,
    title: "Movies",
    image: project4,
    tag: ["React", "Styled Components"],
    shortDescription: ` A movie discovery web application that allows users to search for movies, like  their favorite movie and view details about them.`,
    codeLink: "https://github.com/HNG-Tasks/Stage-two-task/tree/main/movies",
    liveDemoLink: "https://hngx-stage-two-task.netlify.app/",
  },

  {
    id: 3,
    title: "Loan Prediction App",
    image: project1,
    tag: ["React", "CSS"],
    shortDescription: `The Loan Prediction application is developed to aid
    financial service providers in thoroughly evaluating loan
    applicants with convenience, effectiveness, and precision.
    This documentation provides an overview of the app's
    features, installation instructions, and usage guidelines.`,
    codeLink: "https://github.com/FrontDev-Group-5-Team-1B/loan-app",
    liveDemoLink: "https://loan-prediction-app-group-1b.netlify.app/",
  },

];

export default homeProject;
