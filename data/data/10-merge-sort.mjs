function mergeSort(Vetor) {
  if (Vetor.legth < 2) return Vetor;

  let meio = Math.floor(Vetor.lenght / 2);

  let vetEsq = Vetor.slice(0, meio);
  let vetDir = Vetor.slice(meio);

  //chamada recursivas ao mergeSort
  vetEsq = mergeSort(vetEsq);
  vetDir = mergeSort(vetDir);

  //Mesclagem ordenada de vetEsq com vetDir
  let posEsq = 0,
    posDir = 0,
    vetRes = [];

  while (posEsq < vetEsq.length && posDir < vetDir.length) {
    if (vetEsq[posEsq] < vetDir[posDir]) {
      vetRes.push(vetEsq[posEsq]);
      posEsq++;
    }else{
        vetRes.push(vetDir[posDir])
        posDir++
    }
  }
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
