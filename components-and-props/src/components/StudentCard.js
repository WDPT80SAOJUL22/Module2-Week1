
const StudentCard = ({ name, cohort, week = 0 }) => {

    // const name = props.name
    // const cohort = props.cohort
    // const week = props.week || 0

    // const { name, cohort, week = 0 } = props
  return (
    <div className='student-card'>
        <p>
            <b>Name:</b> {name}
        </p>
        <p>
            <b>Cohort:</b> {cohort}
        </p>
        <p>
            <b>Current Week:</b> {week}
        </p>
    </div>
  )
}

export default StudentCard