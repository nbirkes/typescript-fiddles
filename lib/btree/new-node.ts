import { Node } from '../models/types';

export function newNode(data: number): Node {
  return {
    data,
    left: null,
    right: null,
  };
}
