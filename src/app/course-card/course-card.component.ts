import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  // Parse in an object with a data model:
  course: Course;

  constructor() { }

  ngOnInit() {
  }

}
