import { AlunosABB } from "./AlunosABB.mjs";

const tree = new AlunosABB();

console.log("=== PARTE 2: CADASTRO DE ALUNOS EM ABB ===\n");

const dadosAlunos = [
  { ra: 2026050, nome: "Ana Beatriz Souza", media: 8.5 },
  { ra: 2026020, nome: "João Silva", media: 7.0 },
  { ra: 2026080, nome: "Mariana Lopes", media: 9.0 },
  { ra: 2026010, nome: "Pedro Henrique Alves", media: 6.5 },
  { ra: 2026030, nome: "João Silva", media: 8.0 },
  { ra: 2026070, nome: "Camila Ferreira", media: 7.5 },
  { ra: 2026090, nome: "Rafael Costa", media: 5.5 },
  { ra: 2026025, nome: "Luiza Martins", media: 9.5 },
  { ra: 2026075, nome: "Bruno Carvalho", media: 6.0 },
  { ra: 2026095, nome: "Fernanda Ribeiro", media: 8.0 },
];

console.log("--- 1. INSERINDO OS 10 ALUNOS ---");
dadosAlunos.forEach((aluno) => {
  tree.insert(aluno);
});

console.log("\n--- Tentando inserir RA repetido (2026030) ---");
const tentativaDuplicada = tree.insert({
  ra: 2026030,
  nome: "Carlos Mendes",
  media: 4.0,
});
if (!tentativaDuplicada) {
  console.log("RA já cadastrado");
}

console.log("\n--- 2. RELATÓRIO APÓS INSERÇÕES ---");
console.log("Em-ordem (RA):");
let rAs = [];
tree.inOrderTraverse((s) => rAs.push(s.ra));
console.log(rAs.join(", "));

console.log(
  `count = ${tree.count()} height = ${tree.height()} folhas = ${tree.countLeaves()} média = ${tree.averageGrade().toFixed(2).replace(".", ",")}`,
);

console.log("\n--- 3. TESTANDO BUSCAS ---");
const buscaExiste = tree.searchStudent(2026075);
if (buscaExiste) {
  console.log(
    `Aluno encontrado: RA: ${buscaExiste.ra}, Nome: ${buscaExiste.nome}, Média: ${buscaExiste.media}`,
  );
} else {
  console.log("RA não encontrado");
}

const buscaNaoExiste = tree.searchStudent(2026099);
if (buscaNaoExiste) {
  console.log(
    `Aluno encontrado: RA: ${buscaNaoExiste.ra}, Nome: ${buscaNaoExiste.nome}, Média: ${buscaNaoExiste.media}`,
  );
} else {
  console.log("RA não encontrado");
}

console.log("\n--- 4. REMOÇÕES ---");
// Remover nó folha (2026025)
console.log("Removendo folha 2026025:");
tree.remove(2026025);
rAs = [];
tree.inOrderTraverse((s) => rAs.push(s.ra));
console.log("Em-ordem (RA): " + rAs.join(", "));

// Remover nó de grau 1 (2026090)
console.log("Removendo grau 1 (2026090):");
tree.remove(2026090);
rAs = [];
tree.inOrderTraverse((s) => rAs.push(s.ra));
console.log("Em-ordem (RA): " + rAs.join(", "));

// Remover raiz - grau 2 (2026050)
console.log("Removendo raiz - grau 2 (2026050):");
tree.remove(2026050);
rAs = [];
tree.inOrderTraverse((s) => rAs.push(s.ra));
console.log("Em-ordem (RA): " + rAs.join(", "));

console.log("\n--- 5. ÁRVORE FINAL ---");
let preRAs = [];
tree.preOrderTraverse((s) => preRAs.push(s.ra));
console.log("Pré-ordem (RA) da árvore final:");
console.log(preRAs.join(", "));
console.log(`count = ${tree.count()} height = ${tree.height()}`);
