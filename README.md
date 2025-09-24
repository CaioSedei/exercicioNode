# exercicioNode

iniciar projeto 

npm init
npm i express

adicionar no package.json abaixo da main == ("type": "module",)


para atualizar o servidor automaticamente

npm i nodemon 

dps adicionar no package.json abaixo de scripts == ("dev": "npx nodemon index.js",) dps so rodar npm dev run

para fazer rodar nativamente o npm dev run sem baixar lib colocar no "scripts" "dev": "node --watch index.js"