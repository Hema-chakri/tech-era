import {Component} from 'react'

class CourseDetail extends Component {
  state = {image: '', alt: ''}

  componentDidMount() {
    this.getCourseDetail()
  }

  getCourseDetail = async () => {
    const url = 'https://apis.ccbp.in/te/courses/:id'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const jsonData = response.json()
    }
  }

  render() {
    return <div>{}</div>
  }
}

export default CourseDetail
