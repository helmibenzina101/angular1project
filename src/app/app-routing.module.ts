import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberformComponent } from './memberform/memberform.component';

const routes: Routes = [
 { path : '' , pathMatch:'full', component : MemberComponent }
 ,{ path : 'create' , pathMatch:'full',component : MemberformComponent }, 
 { path : 'edit/:id' , pathMatch:'full',component : MemberformComponent }

,{path:'**' , component: MemberComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
