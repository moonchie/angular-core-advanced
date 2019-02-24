import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { COURSES } from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  // Use ElementRef to elect native element in the template
  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  constructor() {
    // the viewChild is not populated if the view is not finished:
    console.log('containerDiv', this.containerDiv);
  }

  // Implement the AfterViewInit lifecycle hook:
  ngAfterViewInit() {
    console.log('containerDiv', this.containerDiv);
  }

  onCourseSelected(course: Course) {
    // console.log('containerDiv', this.containerDiv);
  console.log('card1', this.card1);
  }
}
