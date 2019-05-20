import { Node } from '../models/types';
import { newNode } from './new-node';

export function insert(node: Node | null, data: number): Node {
  if (node === null) return(newNode(data));
  if (data <= node.data) node.left = insert(node.left, data);
  node.right = insert(node.right, data);
  return node;
}
