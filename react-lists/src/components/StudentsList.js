const students = [
    'Anneliese',
    'Lena',
    'Amanda',
    'Stefano',
    'Deny',
    'Anneliese'
]
const StudentsList = () => {
    const newStudentArr = students.map(student => <li>{student}</li>)
    console.log(newStudentArr);
  return (
    <div>
        <h1>StudentsList</h1>
        {students.map((student, index) => <li key={index}>{student}</li>)}
    </div>
  )
}

export default StudentsList