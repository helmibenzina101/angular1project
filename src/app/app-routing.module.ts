import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberformComponent } from './memberform/memberform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
 { path : '' , pathMatch:'full', component : MemberComponent },
 { path : 'create' , pathMatch:'full',component : MemberformComponent }, 
 { path : 'edit/:id' , pathMatch:'full',component : MemberformComponent },
 { path : 'dashboard' , pathMatch:'full',component : DashboardComponent },
 { path : 'tools' , pathMatch:'full',component : ToolComponent },
 { path : 'events' , pathMatch:'full',component : EventComponent },
 { path : 'articles' , pathMatch:'full',component : ArticleComponent },


 { path:'**' , component: MemberComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
