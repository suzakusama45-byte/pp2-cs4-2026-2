//Classe que representa a unidade de informação da árvore binária de busca
class Node {
  constructor(val) {
    this.data = val; // armazena a informação da árvore binária de busca
    this.left = null; // ponteiro para a subárvore esquerda
    this.right = null; // ponteiro para a subárvore direita
  }
}

//Classe que implementta a árvore binária de busca
export default class BinarySearchTree {
  #root; //raiz da árvore

  constructor() {
    this.#root = null;
  }

  //método para efetuar inserção ABB
  insert(val) {
    const inserted = new Node(val);

    //1º caso: árvore vazia
    //o primeiro nodo fica sendo a raiz da árvore
    if (this.#root === null) this.#root = inserted;
    //2º caso: inserção recursiva, percorrendo a árvore recursivamente
    else this.#insertNode(inserted, this.#root);
  }
  //método PRIVADO que insere um novo nodo na árvore
  #insertNode(inserted, root) {
    // 1: valor a ser inserido é MENOR que o valor de raiz
    // inserção ocorre a ESQUERDA da raiz
    if (inserted.data < root.data) {
      // Se a posição à esquerda da raiz esta desocupada, fez a inserção
      if (root.left === null) {
        root.left = inserted;
        // Senão, reinicia o processo da inserção, recursivamente, com a subárvore esquerda como raiz
      } else {
        this.#insertNode(inserted, root.left);
      }
      // 2 caso: valor a ser inserido é MAIOR que o valor da raiz
      // inserção ocorre a DIREITA da raiz
    } else if (inserted.data > root.data) {
      if (root.right === null) {
        root.right = inserted;
      }
      // Senão, reinicia o processo da inserção, recursivamente, com a subárvore direita como raiz
      else {
        this.#insertNode(inserted, root.right);
      }
      // 3 caso: o valor a ser inserido é IGUAL ao valor da raiz;
      // Senão, reinicia o processo da inserção, recursivamente, com a subárvore direita como raiz
    } else {
      this.#insertNode(inserted, root.left);
    }
  }
  /*
    PERCURSOS
    Metodo que executa o percuso em-ordem (in-order Traversal) na arvore
    ordem do percuso:
    1 ~> percorre recusivamente em-ordem a subárvore esquerda
    2 ~> visita o nodo raiz
    3 ~> percorre recusivamente em em-ordem a subárvore direita
  */
  inOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.inOrderTraversal(fnCallback, root.left); // 1
      fnCallback(root.data); // 2
      this.inOrderTraversal(fnCallback, root.right); // 3
    }
  }
  /*
    Método que executa o percuso em pré-ordem (pre-order Traversal) na arvore
    ordem do percuso:
    1 ~> visita o nodo raiz
    2 ~> percorre recusivamente em pré-ordem a subárvore esquerda
    3 ~> percorre recusivamente em pré-ordem a subárvore direita
  */
  preOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      fnCallback(root.data); // 1
      this.preOrderTraversal(fnCallback, root.left); // 2
      this.preOrderTraversal(fnCallback, root.right); // 3
    }
  }
}
