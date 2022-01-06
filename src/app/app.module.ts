import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeStructureModule } from './tree-structure/tree-structure.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TreeStructureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
