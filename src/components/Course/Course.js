import React from 'react';
import "rbx/index.css";
import { Button } from "rbx";
import { buttonState, getCourseNumber, getCourseTerm, hasConflict } from './times.js';
  
const Course = ({ course, state }) => (
  <Button
      data-cy="course"
      color={ buttonState(state.selected.includes(course)) }
      onClick={ () => state.toggle(course) }
      disabled={ hasConflict(course, state.selected) }
      >
      { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </Button>
);

export default Course;