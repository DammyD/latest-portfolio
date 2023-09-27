import project1 from '../assets/project1.png'
import article3 from '../assets/article3.png'
import project2 from '../assets/project2.png'
import project4 from '../assets/project4.png'
import project7 from '../assets/project7.png'

const projectData = [
        {
          id: 1,
          title: 'GALLERY',
          imageSrc: project2,
          content: 'A gallery app',
          tags: ['React', 'Styled Components'],
          site: 'https://hng-gallery-app-task.netlify.app/'
        },

        {
          id: 2,
          title: 'MOVIES',
          imageSrc: project4,
          content: 'A movie website',
          tags: ['React', 'Styled Components'],
          site: 'https://hngx-stage-two-task.netlify.app/'
        },

        {
          id: 3,
          title: 'NO DEBT',
          imageSrc: project1,
          content: 'A loan prediction app',
          tags: ['React', 'CSS'],
          site: 'https://loan-prediction-app-group-1b.netlify.app/'
        },

        {
          id: 4,
          title: 'KLINIK',
          imageSrc: article3,
          content: 'A web application for providing efficient patient record',
          tags: ['React', 'Styled Components'],
          site: 'https://klinik-demo.netlify.app/'
        },

        {
          id: 5,
          title: 'STARWARS',
          imageSrc: project7,
          content: 'A clone of Starwars landing page',
          tags: ['React', 'CSS'],
          site: 'https://star-wars-react-router.netlify.app/'
        },
]

export default projectData;

