import { Component, OnInit } from '@angular/core';
import { NodeModel } from '../models/tree-structure.model';

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss'],
})
export class TreeStructureComponent implements OnInit {
  public treeList: NodeModel[] = [];

  constructor() {}

  ngOnInit() {}

  /**
   * On click of add root level node, new node will be created and pushed in treeList array
   */

  insertRootNode() {
    this.treeList.push({
      name: '',
      type: 'folder',
      children: [],
      id: this.generateUniqueId(),
    });
    this.treeList[this.treeList.length - 1]['isEditable'] = true;
  }

  /**
   * On click of node, input tag will be activated
   * @param node : node object
   */
  editNode(node: any) {
    node.isEditable = true;
  }

  /**
   * On click of file or folder button, correct node type will be set
   * @param node : node object
   * @param type : 'file': 'folder'
   */
  addFileOrFolderToTreeNode(node: any, type: string) {
    node.type = type;
    node.name = '';
    node.isEditable = true;
    (node.children = []), (node.id = this.generateUniqueId());
  }

  /**
   * On click of plus icon, new empty node will be added as child node
   * @param node : node
   */

  insertNodeIntoTree(node: any) {
    node.children.push({
      name: '',
      type: 'unset',
      children: [],
    });
  }

  /**
   * To update the name of tree node with new name, if name will be empty then that node will be removed
   * @param node : node object
   * @param name : current value of input tag
   */
  updateTreeNodeName(node: any, name: any) {
    if (name) {
      node.name = name;
      node.isEditable = false;
    } else {
      this.removeNodeFromTree(this.treeList, node.id);
    }
  }

  /**
   * To remove any particular node from tree
   * @param treeListArray : Tree List array
   * @param nodeId : Unique id of particular node
   * @returns
   */
  removeNodeFromTree(treeListArray: any, nodeId: any) {
    console.log('list array', JSON.parse(JSON.stringify(treeListArray)));
    for (const [i, e] of treeListArray.entries()) {
      if (e.id === nodeId) {
        treeListArray.splice(i, 1);
        continue;
      }
      if (e.children) {
        this.removeNodeFromTree(e.children, nodeId);
      }
    }
    return treeListArray;
  }

  /**
   * To create unique id for each node
   * @returns : unique id
   */
  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
