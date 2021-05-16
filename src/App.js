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
import educationList from './my-info/myeducation';
import activities from './my-info/myactivities';
import meObject from './my-info/myinfo';
import projectList from './my-info/myprojects';
import skillsList from './my-info/myskills';

function App() {
  
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