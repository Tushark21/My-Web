import './App.css';
import Header from './components/Header';
import Education from './pages/Education';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Me from './pages/Me';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  const educationList = [
    {
      key: 1,
      title: "Master of Technology",
      subTitle: 'Indian Institute Technology Kanpur',
      info: 'Computer Science & Engineering',
      src: 'iitk-logo.png',
      links: []
    },
    {
      key: 2,
      title: "Bachelor of Technology",
      subTitle: 'Ambedkar Institute Of Advanced Communication Technologies & Research',
      info: 'Computer Science & Engineering',
      src: 'aiactr-logo.jpg',
      links: []
    },
    {
      key: 3,
      title: "Senior Secondary",
      subTitle: 'Kendriya Vidyalaya, Vigyan Vihar',
      info: '',
      src: 'kvs-logo.png',
      links: []
    },
    {
      key: 4,
      title: "Secondary",
      subTitle: 'Kendriya Vidyalaya, Vigyan Vihar',
      info: '',
      src: 'kvs-logo.png',
      links: []
    }
  ];

  const skillsList = [
    {
      key: 1,
      catogery: "App Development",
      skills: [
        {
          key: 1,
          text: 'Java',
          src: 'react-logo.png'
        },
        {
          key: 2,
          text: 'C#',
          src: 'react-logo.png'
        },
        {
          key: 3,
          text: 'Python',
          src: 'react-logo.png'
        },
        {
          key: 4,
          text: 'TkInter',
          src: 'react-logo.png'
        }
      ]
    },
    {
      key: 2,
      catogery: "System",
      skills: [
        {
          key: 1,
          text: 'C',
          src: 'react-logo.png'
        },
        {
          key: 2,
          text: 'C++',
          src: 'react-logo.png'
        }
      ]
    },
    {
      key: 3,
      catogery: "Web Development",
      skills: [
        {
          key: 1,
          text: 'HTML/CSS',
          src: 'react-logo.png'
        },
        {
          key: 2,
          text: 'JavaScript',
          src: 'react-logo.png'
        },
        {
          key: 3,
          text: 'React',
          src: 'react-logo.png'
        },
        {
          key: 4,
          text: 'Nodejs',
          src: 'react-logo.png'
        }
      ]
    },
    {
      key: 4,
      catogery: "Data Science",
      skills: [
        {
          key: 1,
          text: 'Python',
          src: 'react-logo.png'
        },
        {
          key: 2,
          text: 'Pandas',
          src: 'react-logo.png'
        },
        {
          key: 3,
          text: 'Matplotlib',
          src: 'react-logo.png'
        }
      ]
    },/*
    {
      key: 5,
      catogery: "Research Interests",
      skills: [
        {
          key: 1,
          text:'Programming Language & Semantics',
          src: 'react-logo.png'
        },
        {
          key: 2,
          text:'Algorithms & Data Structure',
          src: 'react-logo.png'
        },
        {
          key: 3,
          text:'Compiler Design',
          src: 'react-logo.png'
        }
      ]
    }*/
  ];

  const projectList = [
    {
      key: 1,
      project: "Memory Allocation Simulator",
      points: [
        {
          key: 1,
          text: 'Contiguous Memory Allocation Simulation for Comparing standard Memory Allocation Algorithms.'
        },
        {
          key: 2,
          text: 'Modified Worst Fit Memory Allocation Algorithm and Implemented it along with First Fit and Worst Fit Algorithm.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'C++'
        },
        {
          key: 2,
          text: 'STL'
        }
      ],
      src: "memory-simulator.gif",
      link: "https://github.com/Tushark21/Simple-C-/blob/master/Memory%20Allocation%20Simulation.cpp"
    },
    {
      key: 2,
      project: "Plane Buster",
      points: [
        {
          key: 1,
          text: 'Build 2D Plane Buster game.'
        },
        {
          key: 2,
          text: 'Implemented using pygame package in python.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Python'
        },
        {key: 2,
          text: 'Pygame'
        }
      ],
      src: "plane.gif",
      link: "https://github.com/Tushark21/Games/tree/master/Play%20Python/Plane%20Buster"
    },
    {
      key: 3,
      project: "Focused Crawler",
      points: [
        {
          key: 1,
          text: 'Focused Crawler with searching functionality like a Search Engine.'
        },
        {
          key: 2,
          text: 'Implemented Fish Search Algorithm for Crawling and Web Indexing.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Python'
        },
        {
          key: 2,
          text: 'BeautifulSoup'
        },
        {
          key: 3,
          text: 'SQL'
        },
        {
          key: 4,
          text: 'TkInter'
        }
      ],
      src: "crawler.gif",
      link: "https://github.com/Tushark21/Focused-Crawler"
    },
    {
      key: 4,
      project: "Semantic Parser",
      points: [
        {
          key: 1,
          text: 'Semantic Parser based on LR Parsing Scheme to Parse and extract the meaning of an Input string.'
        },
        {
          key: 2,
          text: 'Validates the Syntax of string according to the given Grammar and gives its meaning.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Java'
        },
        {
          key: 2,
          text: 'SQL'
        },
        {
          key: 3,
          text: 'JDBC'
        }
      ],
      src: "parser.gif",
      link: "https://github.com/Tushark21/Semantic-Parser"
    },
    {
      key: 5,
      project: "Typing Software",
      points: [
        {
          key: 1,
          text: 'Build Typing software in java.'
        },
        {
          key: 2,
          text: 'Used Swing and Keyboard events in java.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Java'
        },
        {
          key: 2,
          text: 'Swing'
        }
      ],
      src: "typing.gif",
      link: "https://github.com/Tushark21/Typing-Software"
    },
    {
      key: 6,
      project: "Maryo Game",
      points: [
        {
          key: 1,
          text: 'Implemented a game similar to Mario.'
        },
        {
          key: 2,
          text: 'Build using pygame package in python.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Python'
        },
        {
          key: 2,
          text: 'Pygame'
        }
      ],
      src: "maryo.gif",
      link: "https://github.com/Tushark21/Games/tree/master/Play%20Python/Mario"
    },
    {
      key: 7,
      project: "Online Shopping Application",
      points: [
        {
          key: 1,
          text: 'Developed an Online Shopping Application as a Java Project at CMS IT Institute.'
        },
        {
          key: 2,
          text: 'Used Java Core and OOPs concepts to build a Shopping Application integrated with database using JDBC.'
        }
      ],
      techStack: [
        {
          key: 1,
          text: 'Java'
        },
        {
          key: 2,
          text: 'SQL'
        },
        {
          key: 3,
          text: 'JDBC'
        }
      ],
      src: "buykart.gif",
      link: "https://github.com/Tushark21/Online-Shopping-Application"
    }
  ];

  const activities = [
    {
      key: 1,
      title: "ACM ICPC",
      subTitle: '',
      info: 'Qualify for the ACM-ICPC Asia Amritapuri Onsite Regional',
      src: "gold-coin.png",
      links: [
        {
          key: 1,
          text: 'ACM ICPC 2018',
          link: 'https://drive.google.com/drive/my-drive'
        }
      ]
    },
    {
      key: 2,
      title: "SNACKDOWN",
      subTitle: '',
      info: 'Qualify to 1B Round of CodeChef\'s Global Programming Competition, SnackDown 2019.',
      src: "gold-coin.png",
      links: [
        {
          key: 1,
          text: 'SnackDown 2019',
          link: 'https://www.codechef.com/certificates/public/8f7a3da'
        }
      ]
    },
    {
      key: 3,
      title: "Competitive Programming",
      subTitle: '',
      info: 'HackerRank @tushargautamk21, CodeChef @tushark21',
      src: "heart.png",
      links: [
        {
          key: 1,
          text: 'HackerRank',
          link: 'https://www.hackerrank.com/tushargautamk21?hr_r=1'
        },
        {
          key: 2,
          text: 'CodeChef',
          link: 'https://www.codechef.com/users/tushark21'
        }
      ]
    },
    {
      key: 4,
      title: "Open Source",
      subTitle: '',
      info: 'Contribute to Open Source in free time.',
      src: "heart.png",
      links: [
        {
          key: 1,
          text: '@OpenGenus',
          link: 'https://github.com/OpenGenus/cosmos'
        }
      ]
    }
  ];

  const meObject = {
    profiles: [
      {
        key: 1,
        text: 'GitHub',
        link: 'https://github.com/Tushark21'
      },
      {
        key: 2,
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/tushar-gautam-9363a9202/'
      },
      {
        key: 3,
        text: 'Medium',
        link: 'https://medium.com/@tushargautamk21'
      }
    ],
    blogs: [
      {
        key: 1,
        title: 'Dijkstra\'s Algorithm',
        src: 'https://www.manishsundriyal.com/static/b25ed62fb304d89ddf4ec6cb8d561632/c64b3/dijkstra-algorithm.webp',
        link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
      },
      {
        key: 2,
        title: 'Sieve of Eratosthenes',
        src: 'https://www.manishsundriyal.com/static/e1248839933d4f0af364cad7a3680436/c64b3/asymptotic-notations.webp',
        link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
      },
      {
        key: 3,
        title: 'Fast Exponentiation',
        src: 'https://www.manishsundriyal.com/static/e1248839933d4f0af364cad7a3680436/c64b3/asymptotic-notations.webp',
        link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
      },
      {
        key: 4,
        title: 'Euclidean\'s GCD Algorithm',
        src: 'https://www.manishsundriyal.com/static/e1248839933d4f0af364cad7a3680436/c64b3/asymptotic-notations.webp',
        link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
      }
    ]
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Me dataList={meObject} />} />
          <Route path="/education" exact component={() => <Education dataList={educationList} />} />
          <Route path="/skills" exact component={() => <Skills dataList={skillsList} />} />
          <Route path="/projects" exact component={() => <Projects dataList={projectList} />} />
          <Route path="/activities" exact component={() => <Activities dataList={activities} />} />
        </Switch>
      </Router>
      <Footer dataList={meObject}/>

    </div>
  );
}

export default App;

/*
<Education dataList={educationList} />
<Skills dataList={skillsList} />
<Projects dataList={projectList} />
<Activities dataList={activities} />
<Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
        background: url('./assets/bg.png');
  background-size: cover;
  background-position: center;
*/
/*
.ticket_class{
  font-size: 18px;
  color:white;
  background-color: #0099e6;
  border-radius: 20px;
  padding: 4px;
  margin: 5px;
  white-space: nowrap;
  border: 0px;
  -webkit-box-shadow: 0px 0px 12px rgb(37, 36, 36);
        box-shadow: 0px 0px 12px rgb(37, 36, 36);
}

.ticket_class:hover{
  color: black;
  background-color: #00aaff;
  -webkit-box-shadow: 0px 0px 15px #000;
        box-shadow: 0px 0px 15px #000;
}



@font-face {
  font-family: 'GlacialIndifference-Regular';
  src: local('GlacialIndifference-Regular'), url(./assets/fonts/GlacialIndifference-Regular.otf) format('woff');
}

*/