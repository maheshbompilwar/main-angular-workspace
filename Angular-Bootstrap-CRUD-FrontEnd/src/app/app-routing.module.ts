import { NgModule } from '@angular/core';
import { Routes, RouterModule, ɵEmptyOutletComponent } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: 'getStudents', component: StudentListComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: '', redirectTo: 'getStudents', pathMatch:'full'},
  {path: 'updateStudent/:id', component: UpdateStudentComponent},
  {path: 'getStudent/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
