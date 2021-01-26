import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  loading = false;

  student = new Student();

  get ff() { return this.firstFormGroup.controls; }
  get sf() { return this.secondFormGroup.controls; }
  get tf() { return this.thirdFormGroup.controls; }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({

      rollNo: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({

      name: ['', Validators.required],

    });
    this.thirdFormGroup = this._formBuilder.group({

      email: ['', [Validators.required, Validators.email]]

    });
  }

  onSubmit() {
    this.submitted = true;

    console.log("in onSubmit....");

    // stop here if form is invalid
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid || this.thirdFormGroup.invalid) {

      const invalid = [];
      const f_controls = this.firstFormGroup.controls;
      for (const name in f_controls) {
        if (f_controls[name].invalid) {
          invalid.push(name);
        }
      }

      const s_controls = this.secondFormGroup.controls;
      for (const name in s_controls) {
        if (s_controls[name].invalid) {
          invalid.push(name);
        }
      }

      const t_controls = this.thirdFormGroup.controls;
      for (const name in t_controls) {
        if (t_controls[name].invalid) {
          invalid.push(name);
        }
      }

      console.log("Invalid Controls====...." + invalid);

      console.log("=================================");

      console.log("firstFormGroup...." + this.firstFormGroup.status);
      console.log("secondFormGroup...." + this.secondFormGroup.status);
      console.log("thirdFormGroup...." + this.thirdFormGroup.status);

      console.log("Roll No...." + this.ff.rollNo.value);

      console.log("Name...." + this.sf.name.value);

      console.log("Email...." + this.tf.email.value);


      console.log("=================================");

      return;

    }

    console.log("========= valid ===========");

    console.log("=================================");

    console.log("Roll No...." + this.ff.rollNo.value);

    console.log("Name...." + this.sf.name.value);

    console.log("Email...." + this.tf.email.value);

    console.log("=================================");


    this.loading = true;

    this.student.rollNo = this.ff.rollNo.value;

    this.student.name = this.sf.name.value;

    this.student.email = this.tf.email.value;

    this.addStudent();

  }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe(data => {

      console.log(data);
      if (data.flag) {
        console.log("Student Added Successfully.....");
        this.router.navigate(['/']);

      } else {
        return;
      }
    },
      error => console.log(error));
  }
}