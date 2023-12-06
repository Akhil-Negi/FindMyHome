import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  otp:any=""
  title="akhil"
  constructor(private userService: UserServiceService,private router: Router) {}

  userDetails = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    cnfpassword: new FormControl(''),
  });

  onSubmit(data: FormGroup) {
    
    this.userService
      .addUser(data.value)
      .subscribe((data:any) => {

        if(data.sucess==true)
        {alert("Registration Succesfull.....Please check your email")
        this.router.navigateByUrl('verifyuser')}
        else if(data.sucess==false)
        {
          alert("registration failed")
        }
        else{
          alert("unknown error")
        }

        
        
      });
  }
}
