const prompt = require("prompt-sync")();

let alunos = [];
let limite = 0;

function cadastrarAlunos() {
  if (limite === 0) {
    limite = Number(prompt("Digite o limite máximo de alunos: "));
  }

  if (alunos.length >= limite) {
    console.log("\nLimite de alunos atingido!");
    return;
  }

  let nome = prompt("Nome: ");
  let ra = Number(prompt("RA: "));
  let idade = Number(prompt("Idade: "));
  let sexo = prompt("Sexo: ");
  let media = Number(prompt("Média: "));

  let resultado;

  if (media >= 6) {
    resultado = "Aprovado";
  } else {
    resultado = "Reprovado";
  }

  let aluno = {
    nome: nome,
    ra: ra,
    idade: idade,
    sexo: sexo,
    media: media,
    resultado: resultado,
  };

  alunos.push(aluno);

  console.log("\nAluno cadastrado com sucesso!");
}

function mostrarAluno(aluno) {
  console.log(
    "Nome: " +
      aluno.nome +
      " | RA: " +
      aluno.ra +
      " | Idade: " +
      aluno.idade +
      " | Sexo: " +
      aluno.sexo +
      " | Média: " +
      aluno.media +
      " | Resultado: " +
      aluno.resultado,
  );
}

function bubbleSortNome(vetor) {
  let copia = [];

  for (let i = 0; i < vetor.length; i++) {
    copia.push(vetor[i]);
  }

  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j].nome.toLowerCase() > copia[j + 1].nome.toLowerCase()) {
        let aux = copia[j];

        copia[j] = copia[j + 1];

        copia[j + 1] = aux;
      }
    }
  }

  return copia;
}

function selectionSortRA(vetor) {
  let copia = [];

  for (let i = 0; i < vetor.length; i++) {
    copia.push(vetor[i]);
  }

  for (let i = 0; i < copia.length - 1; i++) {
    let maior = i;

    for (let j = i + 1; j < copia.length; j++) {
      if (copia[j].ra > copia[maior].ra) {
        maior = j;
      }
    }

    let aux = copia[i];

    copia[i] = copia[maior];

    copia[maior] = aux;
  }

  return copia;
}

function mergeSortNome(vetor) {
  if (vetor.length <= 1) {
    return vetor;
  }

  let meio = Math.floor(vetor.length / 2);

  let esquerda = vetor.slice(0, meio);

  let direita = vetor.slice(meio);

  esquerda = mergeSortNome(esquerda);

  direita = mergeSortNome(direita);

  return merge(esquerda, direita);
}

function merge(esquerda, direita) {
  let resultado = [];

  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i].nome.toLowerCase() <= direita[j].nome.toLowerCase()) {
      resultado.push(esquerda[i]);

      i++;
    } else {
      resultado.push(direita[j]);

      j++;
    }
  }

  while (i < esquerda.length) {
    resultado.push(esquerda[i]);

    i++;
  }

  while (j < direita.length) {
    resultado.push(direita[j]);

    j++;
  }

  return resultado;
}

function buscaSequencialRA(ra) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].ra === ra) {
      return alunos[i];
    }
  }

  return null;
}

function buscaBinariaRA(vetor, ra, inicio, fim) {
  if (inicio > fim) {
    return -1;
  }

  let meio = Math.floor((inicio + fim) / 2);

  if (vetor[meio].ra === ra) {
    return meio;
  }

  if (ra < vetor[meio].ra) {
    return buscaBinariaRA(vetor, ra, inicio, meio - 1);
  } else {
    return buscaBinariaRA(vetor, ra, meio + 1, fim);
  }
}

function relatorioNome() {
  if (alunos.length === 0) {
    console.log("\nNenhum aluno cadastrado!");

    return;
  }

  let ordenados = bubbleSortNome(alunos);

  console.log("\n===== ALUNOS POR NOME =====");

  for (let i = 0; i < ordenados.length; i++) {
    mostrarAluno(ordenados[i]);
  }
}

// ==========================================
// RELATÓRIO POR RA
// ==========================================

function relatorioRA() {
  if (alunos.length === 0) {
    console.log("\nNenhum aluno cadastrado!");

    return;
  }

  let ordenados = selectionSortRA(alunos);

  console.log("\n===== ALUNOS POR RA =====");

  for (let i = 0; i < ordenados.length; i++) {
    mostrarAluno(ordenados[i]);
  }
}

// =======
// RELATÓRIO DOS APROVADOS
// =======

function relatorioAprovados() {
  if (alunos.length === 0) {
    console.log("\nNenhum aluno cadastrado!");

    return;
  }

  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].resultado === "Aprovado") {
      aprovados.push(alunos[i]);
    }
  }

  let ordenados = mergeSortNome(aprovados);

  console.log("\n===== APROVADOS POR NOME =====");

  if (ordenados.length === 0) {
    console.log("Nenhum aluno aprovado.");

    return;
  }

  for (let i = 0; i < ordenados.length; i++) {
    mostrarAluno(ordenados[i]);
  }
}

// =========
// MENU
// =========

let opcao;

do {
  console.log("\n=======");
  console.log("       CADASTRO DE ALUNOS");
  console.log("=========");

  console.log("1 - Cadastrar Alunos");
  console.log("2 - Relatório por Nome");
  console.log("3 - Relatório por RA");
  console.log("4 - Aprovados por Nome");
  console.log("5 - Busca Sequencial por RA");
  console.log("6 - Busca Binária por RA");
  console.log("0 - Sair");

  opcao = Number(prompt("\nDigite uma opção: "));

  switch (opcao) {
    case 1:
      cadastrarAlunos();
      break;

    case 2:
      relatorioNome();
      break;

    case 3:
      relatorioRA();
      break;

    case 4:
      relatorioAprovados();
      break;

    case 5:
      let raBusca = Number(prompt("Digite o RA: "));

      let alunoEncontrado = buscaSequencialRA(raBusca);

      if (alunoEncontrado !== null) {
        console.log("\nAluno encontrado:");

        mostrarAluno(alunoEncontrado);
      } else {
        console.log("\nAluno não encontrado.");
      }

      break;

    case 6:
      let raBinario = Number(prompt("Digite o RA: "));

      // Primeiro ordena por RA crescente
      let vetorRA = [];

      for (let i = 0; i < alunos.length; i++) {
        vetorRA.push(alunos[i]);
      }

      // Ordenação crescente por RA
      for (let i = 0; i < vetorRA.length - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < vetorRA.length; j++) {
          if (vetorRA[j].ra < vetorRA[menor].ra) {
            menor = j;
          }
        }

        let aux = vetorRA[i];

        vetorRA[i] = vetorRA[menor];

        vetorRA[menor] = aux;
      }

      let posicao = buscaBinariaRA(vetorRA, raBinario, 0, vetorRA.length - 1);

      if (posicao !== -1) {
        console.log("\nAluno encontrado:");

        mostrarAluno(vetorRA[posicao]);
      } else {
        console.log("\nAluno não encontrado.");
      }

      break;

    case 0:
      console.log("\nPrograma encerrado!");
      break;

    default:
      console.log("\nOpção invalida! ");
  }
} while (opcao !== 0);
