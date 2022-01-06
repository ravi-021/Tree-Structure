import { Component, OnInit } from '@angular/core';
import { NodeModel } from '../models/tree-structure.model';

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss']
})
export class TreeStructureComponent implements OnInit {
  public list: NodeModel[] = [];
  

  constructor() {}

  ngOnInit() {}

  addRootFolder() {
    this.list.push({
      name: '',
      type: 'folder',
      children: [],
      id: this.generateUniqueId(),
    });
    this.list[this.list.length - 1]['isEditable'] = true;
  }


  onClickNode(item: any) {
    item.isEditable = true;
  }


   updateTreeNode(item: any, name: any) {
    if (name) {
      item.name = name;
      item.isEditable = false;
    } else {
      this.removeTreeNode(this.list, item.id);
    }
  }


  removeTreeNode(listArray: any, nodeId: any) {
    for (const [i, e] of listArray.entries()) {
      if (e.id === nodeId) {
        listArray.splice(i, 1);
        continue;
      }
      if (e.children) {
        this.removeTreeNode(e.children, nodeId);
      }
    }
    return listArray;
  }


  insertTreeNode(item: any) {
    item.children.push({
      name: '',
      type: 'unset',
      children: [],
    });
  }


  addFileFolderTreeNode(item: any, type: string) {
    item.type = type;
    item.name = '';
    item.isEditable = true;
    (item.children = []), (item.id = this.generateUniqueId());
  }


  generateUniqueId() {
    return Date.now().toString(20) + Math.random().toString(20)
  }

}
