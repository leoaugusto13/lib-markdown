import chalk from 'chalk';
import * as fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}


function pegaArquivo(caminhoDoArquivo) {

    const enconding = 'utf8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md');

