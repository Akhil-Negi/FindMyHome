import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../user-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  
  constructor(private userService: UserServiceService,private router: Router) {}
  check:Boolean=false
  userDetails = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // ngOnInit(){
  //   this.getUserData();
  // }
  onSubmit(data: FormGroup,) {
    this.userService
        .loginUser(data.value)
        .subscribe((data:any) => {
          console.log( data)
          localStorage.setItem("name", data.userDetails.name);
          localStorage.setItem("email", data.userDetails.email);
          localStorage.setItem("mobile", data.userDetails.mobile);
          localStorage.setItem("role", data.userDetails.role);
          localStorage.setItem("status", data.userDetails.status);
          localStorage.setItem("token", data.userDetails.token);
          localStorage.setItem("_id", data.userDetails._id);
          if(data.userDetails.role=="user")
          this.router.navigateByUrl('tenanthome')
        else if(data.userDetails.role=="mess-owner")
        this.router.navigateByUrl('messownerhome')
          else
          this.router.navigateByUrl('landlordhome')


        
        });
  }
 
}
