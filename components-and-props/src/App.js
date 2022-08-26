
// Class Component

// class App extends React.Component {
  //   render() {
    //     return (
      //       <div className="App">
      //         <h1>Hi</h1>
      //       </div>
      //     )
      //   }
      // }
      
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';
import StudentsList from './components/StudentsList';
import StudentCard from './components/StudentCard'
import ClassGreetings from './components/ClassGreetings'
import ReactPlayer from 'react-player';

const App = () => {
  const color = 'blue'
  return (
    <div className="App">
      <NavBar color={color}/>

      <Greeting name='Lena' age={25}/>
      <Greeting name='Ana' age={25}/>
      <Greeting name='Matheus' age={25}/>
      <ClassGreetings name='Amanda' age={22}/>

      <StudentsList>
        <StudentCard name='Ana' cohort='WDPT80' week={2} />
        <StudentCard name='Juliana' cohort='WDPT80'/>
      </StudentsList>

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing volume='0.3'/>
    </div>
  );
}




export default App;



