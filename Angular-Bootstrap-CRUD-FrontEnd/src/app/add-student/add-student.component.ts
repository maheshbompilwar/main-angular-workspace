import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../_model/student';
import { StudentService } from '../_services/student.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router, private formBuilder: FormBuilder) { }

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    rollNo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {

  }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe(data => {

      console.log(data);
      if (data.flag) {
        this.goToStudentList();
      }else{
        return;
      }
    },
      error => console.log(error));
  }

  goToStudentList() {

    this.router.navigate(['/getStudents']);
  }
  onSubmit() {
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
   
    console.log(this.student);
    this.addStudent();
  }
  onReset() {
    this.registerForm.reset();
  }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get rollNo() { return this.registerForm.get('rollNo'); }
 
}
