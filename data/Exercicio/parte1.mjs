import { BinarySearchTree } from "./BinarySearchTree.mjs";

console.log("=== PARTE 1: PERCURSOS E FORMA DA ÁRVORE ==_\n");

// Exercício 1
console.log("--- Exercício 1 ---");
const bst1 = new BinarySearchTree();
const valores1 = [50, 30, 70, 20, 40, 60, 80];
valores1.forEach((v) => bst1.insert(v));

let inOrder1 = [];
bst1.inOrderTraverse((v) => inOrder1.push(v));
console.log(`Em-ordem: ${inOrder1.join(", ")}`);

let preOrder1 = [];
bst1.preOrderTraverse((v) => preOrder1.push(v));
console.log(`Pré-ordem: ${preOrder1.join(", ")}`);

let postOrder1 = [];
bst1.postOrderTraverse((v) => postOrder1.push(v));
console.log(`Pós-ordem: ${postOrder1.join(", ")}`);

/*
  Explicação do Em-ordem em ordem crescente:
  O percurso em-ordem visita recursivamente a subárvore esquerda, depois a raiz e por fim 
  a subárvore direita. Como a Árvore Binária de Busca (ABB) garante por definição que todos 
  os elementos à esquerda de um nó são menores que ele, e todos os elementos à direita são maiores, 
  o algoritmo naturalmente processa os elementos do menor para o maior (em ordem crescente).
*/

// Exercício 2
console.log("\n--- Exercício 2 ---");
const bst2 = new BinarySearchTree();
const valores2 = [8, 3, 10, 1, 6, 14, 4, 7, 13];
valores2.forEach((v) => bst2.insert(v));

let inOrder2 = [],
  preOrder2 = [],
  postOrder2 = [];
bst2.inOrderTraverse((v) => inOrder2.push(v));
bst2.preOrderTraverse((v) => preOrder2.push(v));
bst2.postOrderTraverse((v) => postOrder2.push(v));

console.log(`Em-ordem: ${inOrder2.join(", ")}`);
console.log(`Pré-ordem: ${preOrder2.join(", ")}`);
console.log(`Pós-ordem: ${postOrder2.join(", ")}`);
console.log(`Altura: ${bst2.height()}`);
console.log(`Número de folhas: ${bst2.countLeaves()}`);

// Exercício 3
console.log("\n--- Exercício 3 ---");

// (a) Inserção sequencial crescente
const bst3a = new BinarySearchTree();
[1, 2, 3, 4, 5].forEach((v) => bst3a.insert(v));
console.log(`(a) Altura com inserção 1, 2, 3, 4, 5: ${bst3a.height()}`);
/*
  Explicação de por que essa forma é ruim para a busca:
  A árvore degenera em uma estrutura linear semelhante a uma Lista Encadeada (skewed tree). 
  A complexidade de busca que deveria ser O(log n) cai para O(n), pois obrigatoriamente 
  percorremos todos os nós um a um.
*/

// (b) Outra ordem gerando a mesma árvore ou não
const bst3b = new BinarySearchTree();
[50, 70, 30, 60, 80, 20, 40].forEach((v) => bst3b.insert(v));
let preOrder3b = [];
bst3b.preOrderTraverse((v) => preOrder3b.push(v));
console.log(
  `(b) Pré-ordem com [50, 70, 30, 60, 80, 20, 40]: ${preOrder3b.join(", ")}`,
);
console.log(
  `A árvore ficou igual à do Exercício 1? ${preOrder1.join() === preOrder3b.join() ? "Sim" : "Não"}`,
);

// (c) Outra ordem gerando árvore diferente
const bst3c = new BinarySearchTree();
[50, 20, 30, 40, 70, 60, 80].forEach((v) => bst3c.insert(v));
let preOrder3c = [];
bst3c.preOrderTraverse((v) => preOrder3c.push(v));
console.log(
  `(c) Pré-ordem com ordem alternativa [50, 20, 30, 40, 70, 60, 80]: ${preOrder3c.join(", ")}`,
);
console.log(
  "Como a pré-ordem é diferente, comprova-se que a estrutura da árvore gerada é diferente.",
);
