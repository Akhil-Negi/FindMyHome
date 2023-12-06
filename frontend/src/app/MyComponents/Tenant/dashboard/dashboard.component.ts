import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  name:any=localStorage.getItem("name")
  // constructor(){}
  token=localStorage.getItem("token")
  check=false
  // if(this.token!=""){
  //   this.check=true
  // }
  // else{

  // }
constructor(){

}
}
