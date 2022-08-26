import './App.css';
import Header from './components/Header'



const students = [
  'lena',
  'swami',
  'stefano',
  'anneliese',
  'deny',
  'lena',
  'swami',
  'stefano',
  'anneliese',
  'deny',
  'lena',
  'swami',
  'stefano',
  'anneliese',
  'deny'
]

const student = {
  firstName: 'ana',
  lastName: 'martinez'
}

const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <h3>
        Hi, {student.firstName} {student.lastName}
      </h3>
      <h3>
        Hi, {student.firstName.toUpperCase()} {capitalizeFirstLetter(student.lastName)}
      </h3>
      <ul>
        {students.map(student => <li>{capitalizeFirstLetter(student)}</li>)}
      </ul>
    </div>
  );
}

export default App;