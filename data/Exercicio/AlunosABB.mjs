import { BinarySearchTree } from "./BinarySearchTree.mjs";

export class AlunosABB extends BinarySearchTree {
  constructor() {
    super((a, b) => a.ra - b.ra);
  }

  searchStudent(ra) {
    return this.search(ra);
  }

  averageGrade() {
    let sum = 0;
    let total = this.count();
    if (total === 0) return 0;

    this.inOrderTraverse((student) => {
      sum += student.media;
    });
    return sum / total;
  }
}
