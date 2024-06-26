import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  python,
  classroomChat,
  mangaReader,
  timewise,
  spotifyClone,
  pereine,
  payby
} from '../assets/index.ts'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Mobile Developer',
    icon: backend
  },
  {
    title: 'Software Engineer',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'python',
    icon: python
  }
]

const experiences = [
  {
    title: 'FullStack Developer',
    company_name: 'pereine assur',
    icon: pereine,
    iconBg: '#383E56',
    date: 'June 2022 - July 2022',
    points: [
      'Developing a web application using React.js, NodeJs, and Mysql.',
      'Collaborating with the product manager, to translate the project needs to features.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'FullStack Developer',
    company_name: 'PAYBY',
    icon: payby,
    iconBg: '#E6DEDD',
    date: 'April 2023 - May 2023',
    points: [
      'Developing an end-to-end web application using AngularJs, Selenium, Robot Framework and Spring boot.',
      'Collaborating with the development team, product manager to implement required features.',
      'Implementation of a secure authentication system using Keycloak.',
      'Implementing robust error handling mechanisms.',
      'Generating detaitled reports for test results.'
    ]
  }
]

const projects = [
  {
    name: 'Classroom Chat',
    description:
      'Web-based platform that allows my class friends to connect to a shared room and chat in real-time.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'firebase',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: classroomChat,
    source_code_link: 'https://github.com/gri-ffin/classroom-chat'
  },
  {
    name: 'MySpotify',
    description:
      'Minimalist web application that allows me to connect to my spotify account and listen to my playlists.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'spotifyapi',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: spotifyClone,
    source_code_link: 'https://github.com/gri-ffin/spotify-clone'
  },
  {
    name: 'TimeWise',
    description:
      'A simple minimal web application that allows people to track their todos.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'chakraui',
        color: 'green-text-gradient'
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient'
      }
    ],
    image: timewise,
    source_code_link: 'https://github.com/gri-ffin/timewise'
  },
  {
    name: 'Manga Reader',
    description:
      'A simple minimalist website that enables people to read their favorite manga.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'chakraui',
        color: 'green-text-gradient'
      },
      {
        name: 'mangadexapi',
        color: 'pink-text-gradient'
      }
    ],
    image: mangaReader,
    source_code_link: 'https://github.com/gri-ffin/manga-reader'
  }
]

export { services, technologies, experiences, projects }
