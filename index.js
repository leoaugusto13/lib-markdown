import chalk from 'chalk';
import * as fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não existe arquivo a ser lido'));
}

/*
function pegaArquivo(caminhoDoArquivo) {

    const enconding = 'utf8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

/*
function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf8';
    fs.promises
    .readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))
} */

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('Operação concluída'));
    }
   }

pegaArquivo('./arquivos/texto1.md');

