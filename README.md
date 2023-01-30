# Beecrowd

Repositório para códigos dos desafios do Beecrowd

## Descrição

- Os desafios estão separados por pastas nomeadas no formato `[número do desafio] - [nome do desafio]`
- Para cada um dos desafios existe um arquivo chamado *description.md* que descreve o desafio, entradas e saídas esperadas
- Cada solução utiliza um único arquivo, nomeado `Main.[linguagem]`
- Todos os comandos listados abaixo devem ser executados dentro da pasta do desafio

## Versões utilizadas

- Java 17.0.3
- Python 3.9.6
- Node 18.12.1

## Linguagens utilizadas

### Java

Antes de executar os programas em Java, primeiro é necessário **compilar**. Para isto, rode o seguinte comando:

`javac Main.java`

Este comando cria os arquivos *.class* necessários para a execução do programa. Com os arquivos criados, para executar o programa em Java basta rodar o seguinte comando:

`java Main`

O console ficará aguardando as entradas e apresentará as saídas especificadas no arquivo *description.md*

### Python

Para executar os programas em Python, basta rodar o seguinte comando:

`py Main.py` - para sistemas operacionais Windows

`python3 Main.py` - para sistemas operacionais Linux

O console ficará aguardando as entradas e apresentará as saídas especificadas no arquivo *description.md*

### Javascript

No Beecrowd os programas Javascript utilizam o arquivo `/dev/stdin` como entrada. Para manter o padrão utilizado no site, localmente foi criado o arquivo `./dev/stdin` com a entrada especificada no arquivo *description.md*. Para testar entradas diferentes, basta alterar este arquivo, mantendo sempre o mesmo formato especificado no arquivo *description.md*. Desta forma, para que a solução seja aceita no site, a linha:

`var input = require('fs').readFileSync('./dev/stdin', 'utf8');`

Deve ser substituída por:

`var input = require('fs').readFileSync('/dev/stdin', 'utf8');`

Para executar os programas em Javascript, basta rodar o seguinte comando:

`node Main.js`

O programa utilizará as entradas em `./dev/stdin` e apresentará as saídas no console conforme especificado no arquivo *description.md*
