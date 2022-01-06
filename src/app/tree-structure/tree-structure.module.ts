import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeStructureComponent } from './tree-structure.component';



@NgModule({
  declarations: [
    TreeStructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TreeStructureComponent
  ]
})
export class TreeStructureModule { }
