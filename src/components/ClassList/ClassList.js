import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  render() {
    const mappedStudents = this.state.students.map((student, id) => {
      return <Link to={`/student/${student.id}`} key={id}>
        <h3>
        {student.first_name} {student.last_name}
        </h3>
        </Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        <div>{mappedStudents}</div>
      </div>
    );
  }
}
