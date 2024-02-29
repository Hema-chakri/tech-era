import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import CourseItem from '../CourseItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourses()
  }

  getCoursesApiUrl = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const coursesData = await response.json()
      const updatedData = coursesData.courses.map(course => ({
        id: course.id,
        logoUrl: course.logo_url,
        name: course.name,
      }))

      this.setState({
        coursesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getCourses = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const coursesData = await response.json()
      const updatedData = coursesData.courses.map(course => ({
        id: course.id,
        logoUrl: course.logo_url,
        name: course.name,
      }))
      console.log(updatedData)
      this.setState({
        coursesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={this.getCoursesApiUrl}>
        Retry
      </button>
    </div>
  )

  renderCoursesListView = () => {
    const {coursesList} = this.state
    const shouldShowCoursesList = coursesList.length > 0
    return shouldShowCoursesList ? (
      <div>
        <h1>Courses</h1>
        <ul className="list-items">
          {coursesList.map(eachCourse => (
            <CourseItem courses={eachCourse} key={eachCourse.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <h1>No Course found</h1>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="courses-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllCourses = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {coursesList} = this.state

    return (
      <>
        <Header />
        {this.renderAllCourses()}
      </>
    )
  }
}

export default Home
