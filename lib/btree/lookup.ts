import { Node } from '../models/types';

export function lookup(node: Node | null, target: number): boolean {
  if (node === null) return false;
  if (node.data === target) return true;
  if (target < node.data) return (lookup(node.left, target));
  return (lookup(node.right, target));
}
