import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input()
  cardIndex: number;

  @Output()
// Specify we emit an instance of Course
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  // Configuration of the ng-class, to tell which card takes conditional style
  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
    // second way: return {
    //   'beginner': this.course.category === 'BEGINNER',
    // };
  }

  // Customized events:
  onCourseViewed(course: Course) {
    console.log('hey button is clicked!');
    this.courseSelected.emit(this.course);
  }

  // Customlize style with ng-Style:
  cardStyle() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
