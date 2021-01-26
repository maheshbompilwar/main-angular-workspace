import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Spring Boot JPA APP';

  constructor( private router: Router, private formBuilder: FormBuilder) { }

 
  ngOnInit(): void {

    
      this.router.navigate(['/']);
   
  }

}
