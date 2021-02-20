import './App.css';
import Header from './components/Header';
import Education from './pages/Education';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Me from './pages/Me';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const educationList = [
    {
      title: "Master of Technology",
      subTitle: 'Indian Institute Technology Kanpur',
      info: 'Computer Science & Engineering',
      src: 'iitk-logo.png',
      links: []
    },
    {
      title: "Bachelor of Technology",
      subTitle: 'Ambedkar Institute Of Advanced Communication Technologies & Research',
      info: 'Computer Science & Engineering',
      src: 'aiactr-logo.jpg',
      links: []
    },
    {
      title: "Senior Secondary",
      subTitle: 'Kendriya Vidyalaya, Vigyan Vihar',
      info: '',
      src: 'kvs-logo.png',
      links: []
    },
    {
      title: "Secondary",
      subTitle: 'Kendriya Vidyalaya, Vigyan Vihar',
      info: '',
      src: 'kvs-logo.png',
      links: []
    }
  ];

  const skillsList = [
    {
      catogery: "App Development",
      skills: [
        {
          text:'Java',
          src: 'react-logo.png'
        },
        {
          text:'C#',
          src: 'react-logo.png'
        },
        {
          text:'Python',
          src: 'react-logo.png'
        },
        {
          text:'TkInter',
          src: 'react-logo.png'
        }
      ]
    },
    {
      catogery: "System",
      skills: [
        {
          text:'C',
          src: 'react-logo.png'
        },
        {
          text:'C++',
          src: 'react-logo.png'
        }
      ]
    },
    {
      catogery: "Web Development",
      skills: [
        {
          text:'HTML/CSS',
          src: 'react-logo.png'
        },
        {
          text:'JavaScript',
          src: 'react-logo.png'
        },
        {
          text:'React',
          src: 'react-logo.png'
        },
        {
          text:'Nodejs',
          src: 'react-logo.png'
        }
      ]
    },
    {
      catogery: "Data Science",
      skills: [
        {
          text:'Python',
          src: 'react-logo.png'
        },
        {
          text:'Pandas',
          src: 'react-logo.png'
        },
        {
          text:'Matplotlib',
          src: 'react-logo.png'
        }
      ]
    },/*
    {
      catogery: "Research Interests",
      skills: [
        {
          text:'Programming Language & Semantics',
          src: 'react-logo.png'
        },
        {
          text:'Algorithms & Data Structure',
          src: 'react-logo.png'
        },
        {
          text:'Compiler Design',
          src: 'react-logo.png'
        }
      ]
    }*/
  ];

  const projectList = [
    {
      project: "Memory Allocation Simulator",
      points: ['Contiguous Memory Allocation Simulation for Comparing standard Memory Allocation Algorithms.',
        'Modified Worst Fit Memory Allocation Algorithm and Implemented it along with First Fit and Worst Fit Algorithm.'],
      techStack: ['C++'],
      src: "search_engine.gif",
      link: "https://www.github.com"
    },
    {
      project: "Plane Buster",
      points: ['Focused Crawler with searching functionality like a Search Engine.',
        'Implemented Fish Search Algorithm for Crawling and Web Indexing.'],
      techStack: ['Python', 'Pygame'],
      src: "plane.gif",
      link: "https://www.github.com"
    },
    {
      project: "Focused Crawler",
      points: ['Focused Crawler with searching functionality like a Search Engine.',
        'Implemented Fish Search Algorithm for Crawling and Web Indexing.'],
      techStack: ['Python', 'BeautifulSoup', 'SQL', 'TkInter'],
      src: "crawler.gif",
      link: "https://www.github.com"
    },
    {
      project: "Semantic Parser",
      points: ['Semantic Parser based on LR Parsing Scheme to Parse and extract the meaning of an Input string.',
        'Validates the Syntax of string according to the given Grammar and gives its meaning.'],
      techStack: ['Java', 'SQL', 'JDBC'],
      src: "parser.gif",
      link: "https://www.github.com"
    },
    {
      project: "Maryo Game",
      points: ['Focused Crawler with searching functionality like a Search Engine.',
        'Implemented Fish Search Algorithm for Crawling and Web Indexing.'],
      techStack: ['Python', 'Pygame'],
      src: "maryo.gif",
      link: "https://www.github.com"
    },
    {
      project: "Online Shopping Application",
      points: ['Developed an Online Shopping Application as a Java Project at CMS IT Institute.',
        'Used Java Core and OOPs concepts to build a Shopping Application integrated with database using JDBC.'],
      techStack: ['Java', 'SQL', 'JDBC'],
      src: "buykart.gif",
      link: "https://www.github.com"
    }
  ];

  const activities = [
    {
      title: "ACM ICPC",
      subTitle: '',
      info: 'Qualify for the ACM-ICPC Asia Amritapuri Onsite Regional',
      src: "react-logo.png",
      links:[
        {
        text: 'ACM ICPC 2018',
        link: 'https://www.codechef.com/certificates/public/8f7a3da'
        }
      ]
    },
    {
      title: "SNACKDOWN",
      subTitle: '',
      info: 'Qualify to 1B Round of CodeChef\'s Global Programming Competition, SnackDown 2019.',
      src: "react-logo.png",
      links:[
        {
          text:'SnackDown 2019',
          link:'https://www.codechef.com/certificates/public/8f7a3da'
        }
      ]
    },
    {
      title: "Competitive Programming",
      subTitle: '',
      info: 'HackerRank @tushargautamk21, CodeChef @tushark21',
      src: "react-logo.png",
      links:[
        {
          text:'HackerRank',
          link:'https://www.hackerrank.com/tushargautamk21?hr_r=1'
        },
        {
          text:'CodeChef',
          link:'https://www.codechef.com/users/tushark21'
        }
      ]
    },
    {
      title: "Open Source",
      subTitle: '',
      info: 'Contribute to Open Source in free time.',
      src: "react-logo.png",
      links:[
        {
          text:'@OpenGenus',
          link:'https://github.com/OpenGenus/cosmos'
        }
      ]
    }
  ];

  const meObject={
      profiles:[
        {
          text: 'GitHub',
          link: 'https://github.com/Tushark21'
        },
        {
          text: 'LinkedIn',
          link: 'https://www.linkedin.com/in/tushar-gautam-9363a9202/'
        },
        {
          text: 'Medium',
          link: 'https://github.com/Tushark21'
        }
      ],
      blogs:[
        {
          title: 'Dijkstra\'s Algorithm',
          src: 'euclidean-gcd-algorithm.jpeg',
          link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
        },
        {
          title: 'Sieve of Eratosthenes',
          src: 'sieve-of-eratosthenes.jpeg',
          link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
        },
        {
          title: 'Fast Exponentiation',
          src: 'fast-exponentiation.jpeg',
          link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
        },
        {
          title: 'Euclidean\'s GCD Algorithm',
          src: 'euclidean-gcd-algorithm.jpeg',
          link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
        },
        {
          title: 'Dijkstra\'s Algorithm',
          src: 'euclidean-gcd-algorithm.jpeg',
          link: 'https://www.manishsundriyal.com/dijkstra-algorithm'
        }
      ]
    };
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Me dataList={meObject}/>} />
          <Route path="/education" exact component={() => <Education dataList={educationList} />} />
          <Route path="/skills" exact component={() => <Skills dataList={skillsList} />} />
          <Route path="/projects" exact component={() => <Projects dataList={projectList} />} />
          <Route path="/activities" exact component={() => <Activities dataList={activities} />} />
        </Switch>
      </Router>

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