import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'roll_no', 'name', 'email', 'actions'];

  students: Student[];

  constructor(private studentServicce: StudentService, private router: Router) { }

  ngOnInit(): void {
    console.log("Here ngOnInit");
    this.getStudents();
  }

  private getStudents() {
    this.studentServicce.getStudentsList().subscribe(data => {
      this.students = data;
      console.log("set data to aray---");

    });
  }

  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentServicce.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }
}
