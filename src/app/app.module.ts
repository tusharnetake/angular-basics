import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { PipeComponent } from './pipe/pipe.component';
import { RestDemoComponent } from './rest-demo/rest-demo.component';
import { TruncatePipe } from './truncate.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventComponent } from './event/event.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './logging.service';
import { TestLogServiceComponent } from './test-log-service/test-log-service.component'
 
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgModelComponent,
    ServiceDemoComponent,
    PipeComponent,
    RestDemoComponent,
    TruncatePipe,
    PageNotFoundComponent,
    EventComponent,
    NgForExampleComponent,
    TestLogServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoggingService,TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
