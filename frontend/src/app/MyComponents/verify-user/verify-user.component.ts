import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,Router} from '@angular/router';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-user',
  standalone: true,
  imports: [CommonModule,RouterLink, ReactiveFormsModule],
  templateUrl: './verify-user.component.html',
  styleUrl: './verify-user.component.css'
})
export class VerifyUserComponent {
  constructor(private router: Router){

  }
  otp = new FormGroup({
    otp: new FormControl(''),
   
  });
onSubmit(data:any){
  this.router.navigateByUrl('login')}
}
