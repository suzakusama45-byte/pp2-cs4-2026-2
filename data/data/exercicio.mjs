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

  console.log("\n===== Alunos Por Nome====");

  for (let i = 0; i < ordenados.length; i++) {
    mostrarAluno(ordenados[i]);
  }
}

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
}
