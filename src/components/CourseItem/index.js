import './index.css'

const CourseItem = props => {
  const {courses} = props
  const {logoUrl, name} = courses

  const getCourseDetails = () => {}

  return (
    <li className="list-item">
      <button type="button" className="butn-element" onClick={getCourseDetails}>
        <img src={logoUrl} alt={name} className="logo-image" />
        <p className="name">{name}</p>
      </button>
    </li>
  )
}

export default CourseItem
