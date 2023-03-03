import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card component - button clicked ....");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
    // return {
    //   "beginner": this.course.category == 'BEGINNER',
    // }
  }

  // cardStyles() {
  //   return {
  //     'text-decoration': 'underline'
  //   }
  // }

}
