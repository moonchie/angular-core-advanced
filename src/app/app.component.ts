import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2019, 0, 21)

  onCourseSelected(course: Course) {
    console.log('You trigged the click event...', course);
  }
}
