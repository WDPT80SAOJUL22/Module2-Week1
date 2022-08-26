import './StudentList.css'

const StudentsList = (props) => {
  return (
    <div className='student-list'>
        <h2>Student List</h2>
        {props.children}
    </div>
  )
}

export default StudentsList