import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  // @ViewChild('cardRef1', {read: ElementRef})
  // card1: ElementRef;

  // @ViewChild('courseImg')
  // courseImg: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // )
    // // console.log("courseImg", this.courseImg);
    // console.log(this.cards.changes);
    console.log(this.cards);
  }

  onCourseSelected(course: Course) {
    // console.log("containerDiv", this.card1);

  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      },
      
    )
  }
}
