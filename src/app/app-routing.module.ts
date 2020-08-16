import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { PipeComponent } from './pipe/pipe.component';
import { RestDemoComponent } from './rest-demo/rest-demo.component';
import { EventComponent } from './event/event.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestLogServiceComponent } from './test-log-service/test-log-service.component'

const routes: Route[] = [
 {path:'',redirectTo:'/data-binding',pathMatch:'full'},
  {path:'data-binding',component:DataBindingComponent},
  {path:'ngmodel',component:NgModelComponent},
  {path:'service',component:TestLogServiceComponent},
  {path:'pipe',component:PipeComponent},
  {path:'rest',component:RestDemoComponent},
  {path:'event',component:EventComponent},
  {path:'ngfor',component:NgForExampleComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
