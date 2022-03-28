import chalk from 'chalk';
import * as fs from 'fs';


function pegaArquivo(caminhoDoArquivo) {

    const enconding = 'utf8';
    fs.readFile(caminhoDoArquivo, enconding, (_, texto) => {
        console.log(chalk.green(texto));
    })  
}

pegaArquivo('./arquivos/texto1.md');

