import { Routes } from '@angular/router';
import { RegisterComponent } from './MyComponents/register/register.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { ForgotPasswordComponent } from './MyComponents/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './MyComponents/reset-password/reset-password.component';
import { VerifyUserComponent } from './MyComponents/verify-user/verify-user.component';
import  TenantDashboard  from './MyComponents/Tenant/dashboard/dashboard.component';
import  MessOwnerDashboard  from './MyComponents/MessOwner/dashboard/dashboard.component';
import  LandLordDashboard  from './MyComponents/LandLord/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"forgotpassword", component:ForgotPasswordComponent},
    {path:"resetpassword", component:ResetPasswordComponent},
    {path:"verifyuser", component:VerifyUserComponent},
    {path:"tenanthome", component:TenantDashboard},
    {path:"messownerhome", component:MessOwnerDashboard},
    {path:"landlordhome", component:LandLordDashboard},
];
