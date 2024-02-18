#### 18/02/2024

Curso de Vue 3: entendendo componentes, diretivas e reatividade no framework

```
npx json-server db.json
npm i 
npm run serve
```

@01-Entendendo componentes 

@@01
Apresentação

Olá, boas-vindas a este curso de Vue.js. Meu nome é Antônio Evaldo e serei seu instrutor.
Audiodescrição: Antônio Evaldo é um homem branco de olhos castanhos, cabelos pretos encarracolados atualmente amarrados para trás. Tem bigode e cavanhaque. Usa óculos com armação arredondada e um moletom azul-escuro com o logotipo da Alura. Ao fundo, uma parede com gradiente de cor azul para rosa.
Conhecendo o projeto
Neste curso, utilizaremos o Vue para desenvolver um projeto muito interessante, o Cookin'UP. O protótipo deste projeto no Figma foi desenvolvido especialmente para nós e já posso adiantar que está incrível.

Mas, já vamos mostrar como ele funciona no navegador que está aberto em outra aba.

Site Cooking'UP. Banner verde-escuro com o logotipo do projeto. A esquerda, título "Um banquete de ideias para despertar o chef que há em você!" e subtítulo "Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance". A direita, fotografia de pessoa de cabelos cacheados cozinhando rodeada de ilustrações de frutas e legumes.

A ideia do projeto é a seguinte: você está em casa, não possui muitas ideias de receitas para preparar, portanto, pode utilizar este site para selecionar os ingredientes que possui em sua casa.

Para simular essa situação, vamos selecionar alguns ingredientes nos cards de categoria que serão: azeite de oliva, alho, orégano, ovos, queijo e leite.

À medida que selecionamos os ingredientes, eles aparecem na lista que está na parte superior da seção de ingredientes intitulada "Sua lista". Podemos remover esses ingredientes, caso não queiramos utilizá-los. Basta desselecioná-los.

Ao final da página, clicamos no botão "Buscar receitas". Feito isso, aparecem as receitas que podem ser feitas com os ingredientes selecionados. Caso queira, podemos clicar no botão "Editar lista" e realizar uma nova busca.

O que vamos aprender?
Ao construir este projeto, você aprenderá muitos conceitos específicos do Vue, além de outros conteúdos mais gerais de frameworks de front-end, aplicáveis em outros, como o React e o Angular.

Neste curso, você aprenderá a criar um projeto Vue do zero, criará os primeiros componentes, entenderá o que são, para que servem e como podem nos auxiliar.

Vamos também conhecer várias diretivas do Vue que resolvem problemas comuns de HTML e CSS, muitas vezes relacionados à repetição de código. Além disso, abordaremos o que é estado e reatividade, um dos conceitos fundamentais de frameworks de front-end.

Aplicaremos comunicação entre componentes, utilizando props e eventos. Estes são problemas muito específicos que surgem quando estamos trabalhando com frameworks de front-end.

Por fim, vamos explorar os métodos de ciclo de vida do Vue, pois utilizaremos um deles, o Created.

Ao final deste curso, você terá muito mais produtividade ao desenvolver outros projetos de front-end, pois é isso que os frameworks de front-end nos proporcionam, além de uma melhor experiência de desenvolvimento.

O Vue é uma das ferramentas mais utilizadas no mercado atualmente, portanto, surgirão diversas oportunidades após aprender a utilizá-lo.

Pré-requisitos
Para realizar este curso, é fundamental que você tenha conhecimentos básicos de HTML e CSS. No entanto, não vamos concentrar muito nisso, pois nosso foco será nos conceitos do Vue.

Além disso, você também precisa de familiaridade com JavaScript, pelo menos até conceitos intermediários, como requisições HTTP ou consumo de APIs. Por fim, conhecimentos básicos de TypeScript são necessários, pois também vamos utilizá-lo em conjunto com o Vue.

Em caso de dúvidas, você pode acessar o fórum da Alura. Nós responderemos o mais rápido possível. Você pode também acessar o Discord da Alura para esclarecer dúvidas com outras pessoas estudantes.
Te esperamos no curso. Vamos começar a aprender!

@@02
Preparando o ambiente: ferramentas do curso
PRÓXIMA ATIVIDADE

Link do Figma
Acesse o design do projeto no Figma.

Visual Studio Code
Para realizar o curso, você pode utilizar o editor de código de sua preferência, mas recomendamos que você utilize o Visual Studio Code (ou VSCode, ou VSC) para utilizar os mesmos recursos que a pessoa instrutora utiliza.

Node.js
Vamos precisar do Node.js (ou Node) durante todo o curso. Caso você já tenha feito algum curso de JavaScript, talvez o Node já esteja instalado. Se você não tiver certeza, é possível conferir com os seguintes passos:

Abra uma janela do terminal do seu computador de acordo com seu sistema operacional:
Windows: no campo de busca do menu Iniciar, pesquise pelo programa “Prompt de Comando” ou pelo programa “Windows Powershell” e selecione um deles.
MacOs: acesse o terminal disponível no menu de Aplicações, dentro da pasta de Utilitários.
Linux (Ubuntu): acesse o terminal disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.
No terminal que abrir, digite node --version ou node -v e pressione Enter. Caso retorne um número de versão, como por exemplo v18.0.0, significa que o Node já está instalado.
Caso o Node não esteja instalado, você pode seguir o passo a passo do artigo Como instalar o Node.js no Windows, Linux e macOS!

Este curso foi desenvolvido utilizando a versão 18.17.0 do Node. Recomenda-se que você utilize a versão LTS mais recente e que seja no mínimo a versão 18. Não utilize a versão Current, pois apesar de ser mais recente, ela pode conter alguns bugs.

https://www.figma.com/file/0YlJl7HQ7flDoEZZ8tB88A/Cookin'UP-%7C-Vue-1?type=design&node-id=1901%3A2&mode=dev

https://code.visualstudio.com/

https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?_gl=1*kd6v50*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwODI1NTc5NS4yMDIuMS4xNzA4MjU4NDYzLjAuMC4w*_fplc*JTJCblBhWTFFNlRQbE1RblVvdjFhTTE1aVozYmY1Mm9WSTdCRlpQYVY1dUVRR1FqZUk3RDhFSEdkajhtR2ZSazd0S0FFRlFTblFVZ2FubndOSUolMkJ2Yk54bzltcnB6aFJuVyUyRmFvOCUyRnZYZWgxQjFvalBLTmFGb0JhNUFMUTVkYXclM0QlM0Q.

@@03
Criando projeto Vue

Para começarmos a desenvolver efetivamente com o Cookin'UP, necessitamos de uma série de configurações. Existe um pacote disponibilizado pela própria equipe do Vue, que nos permite realizar tais configurações de maneira manual. O Vue requer uma gama de ferramentas auxiliares para funcionar corretamente.
Criando projeto Vue
Para utilizar esse pacote, vamos abrir o terminal. Neste caso, vamos abrir o terminal PowerShell, já que estamos utilizando o Windows. Caso você não esteja usando o Windows, basta abrir o terminal do seu sistema operacional.

Com o terminal aberto, vamos digitar o seguinte comando:

npm create vue@3.7.3
COPIAR CÓDIGO
Este comando pode ser encontrado também na documentação do Vue. Adicionamos o @ 3.7.3 para instalar exatamente essa versão, garantindo que você não tenha diferenças de projeto em relação ao nosso.

Após digitar o comando, pressionamos "Enter". Para pessoas que estiverem executando este comando pela primeira vez em seus computadores, será solicitada a instalação do pacote Create Vue. Trata-se de uma operação normal, portanto pode autorizar a instalação.

No nosso caso, a execução já retornou de maneira interativa e solicitou o nome do projeto. Vamos nomeá-lo como cookin-up

As próximas perguntas estão em inglês, então vamos traduzir enquanto respondemos. Para alternar as opções de sim (yes) e não (no), utilizamos as setas de navegação do teclado e confirmamos a escolha com o "Enter".

Adicionar TypeScript ao projeto? Sim.
Adicionar suporte JSX? Não.
Adicionar Vue Router para desenvolvimento de aplicação de página única? Não.
Adicionar Pinha para gerenciamento de estado? Não.
Adicionar Vitest para teste de unidade? Não.
Adicionar solução para teste de ponta a ponta? Não.
Adicionar ESLint para qualidade de código? Não.
De todas as opções, utilizaremos apenas o TypeScript.

Com essas respostas, o terminal retorna uma sequência de passos que devemos seguir. Vamos começar com o cd cookin-up, este comando nos direciona para a pasta do projeto recém-criado.

cd cookin-up
COPIAR CÓDIGO
Antes de executar o próximo comando, vamos abrir nosso editor de código utilizando o comando code . e pressionando "Enter". Neste caso, será aberto o Visual Studio Code, que é editor de texto padrão desse computador.

code .
COPIAR CÓDIGO
O projeto já inclui uma série de arquivos necessários para rodar um projeto Vue, que logo mais exploraremos juntos.

Uma janela pop-up apareceu no canto inferior direito do VSCode, perguntando se desejamos instalar as configurações recomendadas de extensões para o Vue nesse repositório. Vamos clicar no botão de "Mostrar as recomendações" para analisá-las.

São abertas duas abas com as recomendações. A primeira extensão recomendada é a Vue Language Features (Volar). Vamos instalá-la clicando no botão de "Instalar." A segunda extensão é TypeScript Vue Plugin (Volar), que também será instalada da mesma maneira.

Essas extensões são essenciais para o desenvolvimento, proporcionando uma colorização de código e uma melhor experiência de desenvolvimento.

Com as extensões instaladas, vamos voltar ao explorador de arquivos do projeto ("Ctrl + Shift + E") e abrir o arquivo que está na raiz, chamado package.json. Este arquivo é padrão para qualquer projeto Node. Caso não tenha muita familiaridade com Node, deixaremos um material auxiliar para entender melhor a respeito.

Nesse arquivo, queremos te mostrar que, a partir da linha 12, temos uma lista de dependências na qual a única listada nessa parte é a vue, um pacote da própria Vue que executa todas as configurações necessárias.

A partir da linha 15, temos as devDependencies, que listam outras ferramentas de terceiros que Vue também utiliza para conseguir executar o projeto. No entanto, essas devDependencies não serão instaladas se o site for para produção, ou seja, se for ser um site ativo.

package.json:
"dependencies": {
    "vue": "^3.3.4"
},
"devDependencies": {
    "@tsconfig/node18": "^18.2.0",
    "@types/node": "^18.17.5",
    "@vitejs/plugin-vue": "^4.3.1",
    "@vue/tsconfig": "^0.4.0",
    "npm-run-all": "^4.1.5",
    "typescript": "~5.1.6",
    "vite": "^4.4.9",
    "vue-tsc": "^1.8.8"
}
COPIAR CÓDIGO
Isso tem relação com nosso próximo comando que é o npm install, seguido de npm rundev. Vamos retornar ao VSCode e abrir o terminal integrado, o qual vamos usar a partir de agora. Abrindo com "Ctrl + J", vamos digitar npm install ou simplesmente npm i, são equivalentes.

npm install
COPIAR CÓDIGO
Ao pressionar "Enter", ele instalará todas as dependências do package.json diretamente da internet. Esse processo pode levar algum tempo.

added 145 packages, and audited 146 packages in 25s
Ele instalou 145 pacotes em 25 segundos, mas esse tempo pode variar. Se quiser conferir, eles estão agora dentro de uma pasta chamada "node_modules", que não estava antes no projeto. Algumas dependências vão chamar outras, é por isso que temos tantos pacotes instalados.

Agora, o próximo passo é executar o outro comando que o terminal nos forneceu.

npm run dev
COPIAR CÓDIGO
Para entender esse comando, voltamos ao package.json. Na parte de scripts, existem um chamado dev.

package.json:
"scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false"
},
COPIAR CÓDIGO
Estamos pedindo para o projeto executar esse script, que é basicamente um comando chamado vite. O vite é uma das ferramentas que o Vue utiliza para conseguir rodar um servidor local, que nos disponibiliza uma página web.

Retornando ao terminal integrado, vamos executar o comando npm run dev.

Vite v4.4.9 ready in 1379 ms
Após alguns segundos, um link será disponibilizado: http://localhost:5173. Você pode digitar esse link no seu navegador, ou simplesmente segurar "Ctrl" e clicar nele, que vai abri-lo automaticamente.

O primeiro carregamento pode demorar um pouco. Apareceu o esqueleto do projeto que vem por padrão em inglês, dizendo que conseguimos rodar esse projeto Vite + Vue 3 e algumas possibilidades de desenvolvimento.

Assim, já temos a infraestrutura necessária para começar a codificar, e é isso que faremos no próximo vídeo. Te espero lá!

@@04
Preparando o ambiente: configurações do Cookin’ Up
PRÓXIMA ATIVIDADE

O projeto Vue que instalamos traz vários componentes, estilos e arquivos por padrão. A estrutura de pastas e arquivos do projeto vem assim:
│   .gitignore
│   env.d.ts
│   index.html
│   package.json
│   README.md
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───.vscode
│       extensions.json
│
├───public
│       favicon.ico
│
└───src
    │   App.vue
    │   main.ts
    │
    ├───assets
    │       base.css
    │       logo.svg
    │       main.css
    │
    └───components
        │   HelloWorld.vue
        │   TheWelcome.vue
        │   WelcomeItem.vue
        │
        └───icons
                IconCommunity.vue
                IconDocumentation.vue
                IconEcosystem.vue
                IconSupport.vue
                IconTooling.vue
COPIAR CÓDIGO
A título de curiosidade: para gerar a estrutura acima em forma de texto, basta executar o comando tree no terminal, dentro da pasta do projeto. No Windows, é necessário executar tree /f para mostrar os nomes dos arquivos também.
Vamos remover o que não precisamos e preparar o terreno para codificarmos o Cookin’ Up! Siga os seguintes passos:

Você também pode conferir essas mudanças nesse commit do Github.
1 - Apague o conteúdo da pasta src/components (incluindo a pasta icons). A pasta ficará vazia;

2 - Na pasta src/assets:

a) Apague os arquivos logo.svg e base.css;
b) Faça o download da pasta “imagens”. Essa pasta vem com algumas imagens PNG e uma pasta chamada icones com um SVG;
c) Apague o conteúdo do arquivo main.css e cole o seguinte CSS no lugar:
:root {
  --ocre: #D1451E;
  --coral: #F0633C;
  --coral-claro: #FFDBD1;
  --creme: #FFFAF3;
  --verde-escuro: #263A29;
  --verde-medio: #3D6D4A;
  --cinza: #444444;
  --cinza-claro: #EFEFEF;
  --branco: #FFF;

  --font-family-padrao: Nunito Sans, sans-serif;
  --cabecalhos: Paytone One, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul, li {
  list-style: none;
}

button {
  border: 0;
  background-color: inherit;
  font: inherit;
}

body {
  min-height: 100vh;
  color: var(--creme);
  font-family: var(--font-family-padrao);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  background: url('./imagens/fundo-banner.png'), var(--verde-escuro, #263A29);
}

.cabecalho-lg {
  font-family: var(--cabecalhos);
  font-size: 3.35625em;
  line-height: 120%; /* 4.0275em */
}

.cabecalho {
  font-family: var(--cabecalhos);
  font-size: 2.75em;
  line-height: 120%; /* 3.3em */
}

.subtitulo-lg {
  font-size: 1.9375em;
  line-height: 150%; /* 2.90625em */
}

.paragrafo-lg {
  font-size: 1.375em;
  line-height: 150%; /* 2.90625em */
}

.paragrafo {
  font-size: 1.125em;
  line-height: 150%; /* 1.6875em */
}

@media only screen and (max-width: 767px) {
  .cabecalho-lg {
    font-size: 2.75em;
  }

  .cabecalho {
    font-size: 2.3125em;
  }

  .subtitulo-lg {
    font-size: 1.625em;
  }
}
COPIAR CÓDIGO
3 - No arquivo index.html:

a) Adicionar dentro da tag <head> o seguinte código para importar as fontes do Google, que são especificadas no Figma:
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,700&family=Paytone+One&display=swap" rel="stylesheet">
COPIAR CÓDIGO
b) Alterar o conteúdo da tag <title> de “Vite App” para “Cookin’ Up!”.
4 - Por fim, apague o conteúdo do arquivo src/App.vue e insira o seguinte no lugar:

    <template>
      <h1>Meu primeiro projeto Vue!</h1>
    </template>
COPIAR CÓDIGO
A estrutura do projeto agora deve ficar assim:

│   .gitignore
│   env.d.ts
│   index.html (modificado)
│   package.json
│   README.md
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───.vscode
│       extensions.json
│
├───public
│       favicon.ico (substituído)
│
└───src
    │   App.vue (modificado)
    │   main.ts
    │
    ├───assets
    │   │   main.css (modificado)
    │   │
    │   └───imagens (adicionado)
    │       │   foto-banner.png
    │       │   fundo-banner.png
    │       │   logo.svg
    │       │   sem-receitas.png
    │       │
    │       └───icones
    │               lista-vazia.svg
    │
    └───components
COPIAR CÓDIGO
Habilitando o modo Takeover
Você pode realizar mais uma etapa para otimizar a performance do seu VSCode, que é habilitar o modo Takeover da extensão Volar. Essa etapa é recomendada pelo Vue quando estamos trabalhando em um projeto Vue com TypeScript. Para habilitar esse modo, basta seguir os passos da seção Volar Takeover Mode da documentação.

Deixarei os links da documentação em inglês do Vue, mas ela também está disponível em outros idiomas para a maioria das páginas. Basta selecionar o idioma de sua preferência no canto superior direito do site.

@@05
Preparando o ambiente: CSS do banner
PRÓXIMA ATIVIDADE

Para o próximo vídeo, utilizaremos o seguinte código CSS:
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.frase-cabecalho {
  margin-bottom: 2rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .foto-banner {
    width: min(100%, 21.25rem);
  }
}

@@06
Criando o primeiro componente

Já conseguimos rodar o projeto Vue pela primeira vez. Além disso, deixamos uma atividade para você fazer algumas configurações no projeto, para prepará-lo para começarmos a codificar o Cookin'UP.
No estado atual, o projeto está basicamente com o texto: "Meu primeiro projeto Vue!" em fundo verde. Para continuar a codificação do projeto, vamos primeiro entender como esse texto é exibido na tela. Quais são os pontos que o Vue conecta no projeto? Compreender isso vai nos auxiliar no desenvolvimento.

O que é um componente
Vamos abrir o VS Code. Na pasta raiz, temos o index.html. Todo o projeto Vue terá, pelo menos, um arquivo HTML como esse.

No index.html, encontramos uma tag <head> com algumas configurações que também já deixamos na atividade. Temos a parte do <body> com uma <div> com id app. Esta <div> está atualmente vazia. E temos um <script> do tipo module com o src para /src/main.ts.

index.html:
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="vueport" content="width=device-width, initial-scale=1.0">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,700&family=Paytone+One&display=swap"
    rel="stylesheet">

  <title>Cookin' Up</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>
COPIAR CÓDIGO
Note que o HTML não tem conteúdo algum. Então, como ele está mostrando o texto "Meu primeiro projeto Vue!" na tela? Isso acontece porque o Vue utiliza o JavaScript para inserir o texto dinamicamente.

Vamos seguir um caminho até encontrar aquele texto. Portanto, seguindo essa parte do /src/main.ts, podemos olhar na estrutura do projeto, abrindo o "src" e entrando em main.ts.

Esse arquivo tem o import de ./assets/main.css. Também são declarados alguns estilos globais, que também são importados.

Em seguida, também importamos uma função chamada createApp do pacote vue. Uma função muito importante para montar o projeto pela primeira vez. Além disso, na linha 4, importamos o App com "A" maiúsculo de um arquivo que está na mesma pasta, que se chama App.vue.

Na última linha, chamamos o createApp(), passando o App como parâmetro, e finalmente, dando o mount() com uma string que é o #app. Essa string #app é um seletor CSS que faz referência àquela <div> com o id app do index.html.

main.ts:
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
COPIAR CÓDIGO
Desta forma, o Vue irá inserir dinamicamente o conteúdo. A partir deste componente, componente chamado App. Agora vamos entender o que é um componente.

Vamos primeiro abrir o arquivo App.vue. Já o modificamos, mas por enquanto só tem uma tag <template>. Dentro dela, tem uma tag <h1> com o texto "Meu primeiro projeto Vue!". Assim, é como as coisas se conectam.

App.vue:
<template>
    <h1>Meu primeiro projeto Vue!</h1>
</template>
COPIAR CÓDIGO
E, podemos dizer que esse App.vue é o componente raiz da nossa aplicação. Um componente do Vue é basicamente qualquer arquivo que termina com a extensão .vue. E ele pode ser constituído por:

lógica com JavaScript;
HTML** a partir da tag <template>;
e também estilos, como a tag <style>.
Como criar um componente
Agora que entendemos como ele conecta esses pontos, podemos começar a desenvolver dentro desse <template> e codificar o Cookin'UP.

Para entender o que vamos codificar, vamos abrir o Figma no navegador. A primeira parte que iremos fazer é a parte de cima, o banner, que possui o logo do Cookin'UP, um texto de introdução e uma imagem.

Voltando no arquivo App.vue no VS Code, vamos apagar o <h1> e colocaremos um <header> com uma classe banner. Dentro desse <header>, teremos uma <div> com uma classe chamada apresentacao. Dentro dessa <div>, teremos uma imagem com a classe logo.

E para referenciar uma imagem no Vue, o VS Code já nos ajudou a escrever a tag. No src, vamos colocar ./assets/imagens/logo.svg, referenciando a imagem que está exatamente no caminho dentro de "src". No alt, vamos colocar o texto alternativo "Logo do Cookin'UP".

App.vue:
<template>
  <header class="banner">
    <div class="apresentacao">
      <img src="./assets/imagens/logo.svg" alt="Logo do Cookin' Up" class="logo">
  </header>
</template>
COPIAR CÓDIGO
Ainda no <header>, abaixo dessa imagem, teremos um parágrafo com a classe cabecalho-lg, uma classe global que já configuramos. E outra classe também chamada frase-cabecalho. Nesse parágrafo, teremos uma tag <span> com a classe texto-verde.

Agora, podemos copiar texto direto do Figma, ativando o modo desenvolvedor do Figma no botão superior direito (ou "Shift + D"). Depois, clicamos em "Copy" para copiar o texto da seção de "Content" no painel de inspecionar à direita. Vamos voltar ao VS Code e dar um "Ctrl + V" dentro da tag <span>.

Desse texto, vamos recortar apenas a parte de "despertar o chefe que há em você!", pois que ficará fora do <span>.

<p class="cabecalho-lg frase-cabecalho">
    <span class="texto-verde">Um banquete de ideias para</span>
    despertar o chef que há em você!
</p>
COPIAR CÓDIGO
Após esse parágrafo, teremos outro <p> com a classe subtitulo-lg. Faremos o mesmo processo, voltando ao Figma para copiar o texto "Explore novas receitas" de volta ao VS Code com "Ctrl + V".

Agora, vamos sair da <div> ainda dentro do <header>, vamos inserir uma nova imagem que tem a classe foto-banner. O src dela será ./assets/imagens/foto-banner.png. E a descrição em alt será "Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando o celular entre o rosto e o ombro". Inserimos essa descrição para acessibilidade.

<p class="subtitulo-lg">
    Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
</p>
</div>

<img src="./assets/imagens/foto-banner.png" alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando um celular entre seu rosto e ombro." class="foto-banner">
COPIAR CÓDIGO
Pronto, o conteúdo já está pronto.

Ao salvar esse arquivo e abri-lo no navegador, já podemos visualizar o conteúdo sendo exibido na tela. Note que ele é atualizado automaticamente, graças ao servidor Vue. Apesar de ter o conteúdo, ainda não temos os estilos e posicionamentos corretos. Então, vamos voltar para o VS Code.

Para adicionar estilos, nós os inserimos no mesmo arquivo. Portanto, vamos adicionar uma tag <style> fora do <template>. Na tag de abertura de <style>, vamos adicionar um atributo chamado scoped, cuja funcionalidade vamos explicar posteriormente.

Dentro dele, vamos copiar e colar os estilos CSS que disponibilizamos na atividade anterior.

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.frase-cabecalho {
  margin-bottom: 2rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .foto-banner {
    width: min(100%, 21.25rem);
  }
}
</style>
COPIAR CÓDIGO
Lembre-se, o foco deste curso não é o CSS, portanto, não vamos passar muito tempo explicando. O foco é o Vue. Ao salvar esse arquivo e voltar ao navegador, os estilos já estão corretos.

Uma informação adicional: repare que colocamos tanto o template quanto o CSS no componente Vue. Isso é o que chamamos de Single File Component (componente de arquivo único).
É basicamente um padrão que o Vue segue e traz benefícios que vamos ver ao longo do tempo.

Um desses benefícios é resolver um problema que começa a aparecer à medida que desenvolvemos projetos maiores. Repare que no componente principal, o App.vue, o código já está grande e fizemos apenas o banner. Ainda temos muito mais código do Figma para escrever. Isso pode tornar os arquivos muito grandes e de difícil manutenção.

Agora, vamos utilizar um recurso do Vue para começar a otimizar esse código. Dentro da pasta de "components", que atualmente está vazia, vamos criar um novo arquivo chamado Banner.vue com B maiúsculo, seguindo a convenção chamada PascalCase onde iniciamos todas as palavras com letras maiúsculas.

Após criar essa arquivo, vamos retornar a App.vue e dar um "Ctrl + X" no <header>, ou seja, em todo o conteúdo do <template>. Voltamos para Banner.vue, criamos um novo <template> e usaremos o atalho "Ctrl + V" para colar o código.

Também vamos criar uma nova tag de estilo, o <style scoped> e recortaremos todo o conteúdo CSS que estava no arquivo App.vue. Depois vamos salvar esse arquivo, retornar para Banner.vue e aplicar um "Ctrl + V" dentro de <style scoped>.

Confira como ficou o código completo de Banner.vue
Se salvamos esse novo arquivo e retornamos ao navegador, o conteúdo desaparecerá. Por quê? Deixamos esse conteúdo todo num arquivo separado, todavia, não informamos ao Vue como esse conteúdo deveria ser utilizado. Portanto, faremos isso agora.

Vamos voltar para App.vue e, dentro do <template>, devemos chamar o Banner, o novo componente que criamos. Para isso, é preciso usar a mesma sintaxe utilizada para as tags do HTML. Isto é, usamos o sinal de "menor que" para abrir a tag e escrevemos Banner e fechamos a tag com a barra e o sinal de "maior que".

No entanto, isso ainda não é suficiente. Precisamos informar melhor sobre como desejamos importar esse Banner. Faremos isso com uma nova tag, que será o <script>, colocado no início do arquivo.

Inclusive, vamos dizer que este <script> tem um atributo denominado lang igual a ts, para indicar que quero utilizar a linguagem TypeScript.

Em seguida, vamos escrever import Banner. Até apareceu uma sugestão do VS Code para BannerVue. Se aceitamos essa sugestão, o caminho será completado automaticamente. E agora, para finalizar essa importação de forma que o Vue entenda que precisa utilizar esse componente, precisamos escrever export default ainda no <script>.

Devemos abrir um objeto e escrever components. Essa propriedade de componentes é um objeto e vamos declarar que uma propriedade se chama Banner e seu valor é o Banner que importamos na linha 2.

App.vue:
<script lang="ts">
import Banner from './components/Banner.vue';

export default {
  components: { Banner: Banner }
}
</script>

<template>
  <Banner />
</template>
COPIAR CÓDIGO
Contudo, temos uma sintaxe que o JavaScript nos oferece, a qual é muito útil quando o nome da propriedade é igual ao seu valor. Nesse caso, podemos apagar o valor e deixar apenas o nome da propriedade. Então, temos apenas Banner entre chaves.

Isso até ajudou a colorir o <Banner /> que estamos usando no <template> e vai funcionar do mesmo jeito.

export default {
  components: { Banner }
}
COPIAR CÓDIGO
Vamos testar se isso funciona. Após salvar o arquivo, retornamos ao navegador. Os textos com seus estilos já aparecem, porém, as imagens não estão sendo importadas corretamente.

Como mudamos de arquivo, precisamos apenas alterar o caminho das imagens. Então, vamos retornar na tag <template> do Banner.vue. No src de cada imagem, ao invés de ./assets, usarei ../assets. Faremos essa alteração nas duas imagens, pois vamos subir uma pasta e entrar em "assets".

Salvamos o arquivo, retornamos ao navegador e já está funcionando novamente.

Conclusão
Vamos voltar ao VS Code para entender melhor o que foi feito. Essa é uma sintaxe muito interessante que ajuda a deixar nosso código muito mais conciso. Conseguimos separar diferentes partes do código em diferentes componentes e chamamos esses componentes apenas quando necessário.

Quando temos uma estrutura em que App.vue está chamando Banner.vue, dizemos que App.vue é o componente-pai de Banner.vue. E o Banner, por sua vez, é filho de App.vue. É importante que você entenda esses termos porque eles serão utilizados durante o curso.

Com isso, criamos nosso primeiro componente no Vue e o utilizamos com sucesso. No próximo vídeo, vamos explicar um pouco melhor como funciona a <style scoped>. Espero você lá.

@@07
Para saber mais: Node.js no front-end, pacotes e package.json
PRÓXIMA ATIVIDADE

Você conferiu que um projeto Vue é feito com o auxílio de diversas ferramentas, algo muito comum quando começamos a trabalhar com frameworks.
Essas ferramentas precisam realizar operações locais, ou seja, operações dentro do nosso computador, como: leitura e escrita de arquivos, compilações, pré-processamentos de linguagens, criação de servidores, entre outros processos automatizados. Tudo isso é necessário para que a sintaxe do Vue seja transformada em HTML, CSS e JavaScript “puros”, afinal, são apenas essas três linguagens que os navegadores são capazes de entender.

Essas operações locais só podem ser realizadas por ambientes que conseguem manipular arquivos do nosso computador. No front-end, um dos ambientes mais utilizados para esse fim é o Node.js, que permite a manipulação de arquivos e automatização de processos, tudo isso utilizando a linguagem JavaScript.

Caso ainda não tenha conferido, você pode acessar o vídeo O que é NodeJS?, o artigo Node.JS: definição, características, vantagens e usos possíveis e o Alura+ Node.js: o que é e como funciona, que fornecem detalhes super completos sobre esse tema!
Pacotes do Node
Com o Node, é possível criar pacotes, que são códigos JavaScript prontos criados e disponibilizados pela comunidade dev para que utilizemos soluções que ajudam no nosso desenvolvimento. Alguns desses pacotes, como o Vite, facilitam a criação de servidores que auxiliam o nosso desenvolvimento.

O Vite consegue disponibilizar um servidor local em poucos segundos, além de atualizar o navegador automaticamente quando salvamos um arquivo do projeto, melhorando bastante a experiência de desenvolvimento. Além disso, ele fornece vários outros recursos que você pode conferir em sua documentação, alguns dos quais utilizaremos durante o curso.
Todos os pacotes criados no Node podem ser conferidos no site NPM (Node Package Manager, ou Gerenciador de pacotes do Node, em português). O NPM também é um programa que vem instalado junto com o Node e é capaz de instalar qualquer pacote via linha de comando.

O próprio vue é um pacote do NPM, mas para instalá-lo junto com vários outros pacotes necessários para rodar uma aplicação Vue, utilizamos o pacote auxiliar create-vue, também criado pela própria equipe do Vue. Utilizamos esse pacote quando executamos o comando npm create vue@3.7.3, que disponibizou um terminal interativo para a criação automática do projeto base.

Esse comando pode ser conferido na sessão Quick Start da documentação do Vue. Você pode usar o comando npm create vue@latest para usar a versão mais recente do pacote create-vue, mas é recomendado que você utilize a mesma versão que o instrutor (3.7.3) para que não haja nenhuma diferença no projeto.
Em seguida, a estrutura padrão do projeto Vue foi criada e pudemos conferir que um dos arquivos do projeto é o package.json. Esse é o arquivo base de qualquer projeto Node. Vamos conhecê-lo melhor?

O arquivo package.json
Depois de responder todas as perguntas do terminal, o projeto Vue base criado pelo pacote create-vue ainda não instalou de fato todos os pacotes necessários para rodar a aplicação, mas já documentou o que deve ser instalado. Podemos verificar essa documentação no arquivo package.json. No caso do projeto Vue, ele vem assim:

{
  "name": "cookin-up",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false"
  },
  "dependencies": {
    "vue": "^3.3.4"
  },
  "devDependencies": {
    "@tsconfig/node18": "^18.2.0",
    "@types/node": "^18.17.5",
    "@vitejs/plugin-vue": "^4.3.1",
    "@vue/tsconfig": "^0.4.0",
    "npm-run-all": "^4.1.5",
    "typescript": "~5.1.6",
    "vite": "^4.4.9",
    "vue-tsc": "^1.8.8"
  }
}
COPIAR CÓDIGO
Caso você não saiba o que é ou não tem familiaridade com o formato de arquivo JSON, sugiro a leitura do artigo Saiba o que é JSON e como utilizar.
Vamos entender os atributos desse JSON:

"name" (nome): o nome do pacote (ou projeto) Node.js.
"version" (versão): a versão atual do pacote. O NPM utiliza o chamado versionamento semântico (SemVer). Você pode ler mais sobre versionamento e como ele é utilizado neste artigo.
"private" (privado): define se o seu pacote será privado ou se ele estará disponível para que outras pessoas da comunidade possam utilizá-lo.
"scripts": essa sessão tem alguns scripts pré-definidos, mas você também pode definir os seus personalizados. Leia sobre scripts na documentação do npm para mais informações.
"dependencies" (dependências): define a lista de pacotes necessários para executar seu projeto num ambiente de produção.
"devDependencies" (dependências de desenvolvimento): define a lista de pacotes necessários para executar o projeto em um ambiente de desenvolvimento e de testes.
Existem outras configurações que podem existir nesse arquivo, como o repositório do Git, homepage, peerDependencies, entre outras que podem ser visualizadas na documentação oficial do NPM.
Para instalarmos todas as dependências do projeto (tanto as dependencies quanto as devDependencies), ou seja, todos os pacotes do Node necessários para rodar a aplicação localmente, utilizamos o comando npm install (ou o atalho npm i). Uma nova pasta chamada node_modules será criada na raiz do projeto com todos os pacotes instalados.

Com isso, o projeto já poderá ser disponibilizado por um servidor Vite por meio do comando npm run dev!

Resumo
Aprendemos muito, não foi? Aqui vai um resumo do que foi passado:

O Node é um ambiente/programa que lê e executa código JavaScript localmente, sendo capaz de utilizar essa linguagem para realizar operações como manipulação de arquivos, processos automatizados, criação de servidores, etc. Com esses recursos, um projeto Vue pode ser trasnformado em arquivos HTML, CSS e JS puros para que os navegadores consigam renderizar a nossa aplicação.
Um projeto escrito em Node pode ser disponibilizado para a comunidade dev em forma de pacote.
O NPM é o gerenciador de pacotes do Node. Com ele, podemos instalar soluções feitas pela comunidade, como o próprio Vue e todos os pacotes auxiliares que ele utiliza.
O arquivo package.json é o arquivo base de qualquer projeto Node e documenta informações importantes sobre o projeto, como a lista de dependências que devem ser instaladas.
Em suma, utilizamos o NPM em conjunto com o Node para instalar todas as ferramentas e soluções necessárias para o nosso desenvolvimento em Vue.
Apesar do Node ter sido criado inicialmente para construir aplicações no back-end, ele se tornou muito útil também no desenvolvimento front-end. Você não precisa se especializar no seu uso, mas é importante entender pelo menos o básico de como ele funciona, pois é uma ferramenta essencial no desenvolvimento front-end atualmente.

https://www.hipsters.tech/o-que-e-node-js/

https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos?_gl=1*1fy6y31*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwODI1NTc5NS4yMDIuMS4xNzA4MjU5ODgwLjAuMC4w*_fplc*JTJCblBhWTFFNlRQbE1RblVvdjFhTTE1aVozYmY1Mm9WSTdCRlpQYVY1dUVRR1FqZUk3RDhFSEdkajhtR2ZSazd0S0FFRlFTblFVZ2FubndOSUolMkJ2Yk54bzltcnB6aFJuVyUyRmFvOCUyRnZYZWgxQjFvalBLTmFGb0JhNUFMUTVkYXclM0QlM0Q.

https://cursos.alura.com.br/extra/alura-mais/nodejs-o-que-e-e-como-funciona-c1414

https://vitejs.dev/

https://vitejs.dev/guide/features.html

https://www.npmjs.com/

Já criamos o nosso primeiro componente, denominado Banner, e já o importamos no App.vue. Observamos como isso otimiza bastante o nosso código. Mas como funciona a tag <style> com o atributo scoped, presente tanto no App.vue quanto no Banner.vue?
CSS com Escopo
Para explicar melhor, faremos o seguinte demonstrativo no App.vue: abaixo do banner, escrevemos a abreviação Emmet h1.titulo para adicionar um <h1> com a classe titulo. Também vamos preencher este h1 com o "Texto do App.vue"

Assim sendo, dentro do <style scoped>, referenciaremos esta classe .titulo passando a propriedade color com valor red - um clássico teste de CSS.

App.vue
<template>
    <Banner />
    
    <h1 class="titulo">
        Texto do App.vue
    </h1>
</template>

<style scoped>
.titulo {
    color: red;
}
</style>
COPIAR CÓDIGO
Ao salvar este arquivo e abrir o navegador, aparece "Texto do App.vue" em vermelho no canto inferior esquerdo do banner

Agora, faremos o mesmo no banner. Dentro do <header>, adicionaremos um <h1> com a mesma classe titulo, preenchido com o texto "Texto do Banner.vue".

Banner.vue:
<template>
    <header class="banner">
        <!-- código omitido -->
        
        <h1 class="titulo">
        Texto do App.vue
        </h1>
    </header>
</template>
COPIAR CÓDIGO
Será que este <h1> que está com mesma classe influenciado pela classe que declaramos no App.vue, com o estilo de cor vermelha? Novamente, salvamos o arquivo e vamos verificar no navegador.

O "Texto do Banner.vue" é exibido, porém, não está vermelho. Portanto, o estilo que inserimos no App.vue, que deveria colorir de vermelho qualquer elemento com a classe titulo, não está afetando o componente do banner. Essa é a explicação do que significa o scoped (ou "com escopo" em português).

Este atributo indica que os estilos afetam apenas o escopo do arquivo atual, não vazando para outros componentes. Isso é um grande benefício para evitar problemas de conflitos CSS no front-end.
Portanto, é padrão utilizar o <style scoped>, pois auxilia bastante no nosso desenvolvimento.

Mas como realmente funciona internamente? Vamos abrir o navegador e inspecionar o elemento "Texo do App.vue", que está vermelho. Podemos usar a tecla "F12" para abrir o DevTools ou usar as teclas "Ctrl + Shift + C "e passar o cursor por cima de "Texto do App.vue".

<h1 data-v-7a7a37b1 class="titulo"> Texto do App.vue</h1>
COPIAR CÓDIGO
No DevTools, podemos visualizar que a tag <h1> está com um atributo chamado data, acompanhado de uma sequência de caracteres. Abaixo, o estilo de cor vermelha está associado à classe titulo e, ao mesmo tempo, identificando este atributo data.

.titulo[data-v-7a7a37b1] {
    color:red;
}
COPIAR CÓDIGO
Ao analisar o "texto do Banner.vue", dentro do <header>, podemos verificar que ele também possui um atributo data, mas com um identificador diferente.

<h1 class="titulo" data-v-3587acbb > Texto do Banner.vue</h1>
COPIAR CÓDIGO
Isso ocorre porque, quando inserimos o atributo scoped na tag <style> de um componente, o Vue.js adiciona atributos com identificadores únicos para cada componente. Desta forma, todos os elementos do Banner.vue terão o mesmo identificador e não serão afetados pelo estilo de cor vermelha dos elementos do arquivo App.vue.

O Vue.js se utiliza de uma ferramenta chamada PostCSS para aplicar essa diferenciação e evitar conflitos entre os estilos.

Além dos estilos scoped, também temos a possibilidade de declarar um estilo global, se assim desejarmos, no mesmo componente. Para isso, vamos voltar para o VS Code e remover o scoped se quisermos que nossa classe titulo afete qualquer outro componente da nossa aplicação.

App.vue:
<style>
 .titulo {
    color: red;
}
</style>
COPIAR CÓDIGO
Se salvamos o arquivo e retornamos ao navegador, os dois textos que inserimos estarão coloridos de vermelho.

Além disso, é possível ter uma tag style normal e uma tag style scoped no mesmo componente.
Ademais, outra maneira de usar estilos globais é a que nós já estamos empregando neste projeto. Em "src > assets > main.css", já preparamos alguns estilos globais, como cabeçalhos, por exemplo.

Essa é outra maneira de utilizar estilos globais, uma forma um pouco mais clássica. Portanto, nós temos mais de uma possibilidade. Dependendo do caso de uso, uma pode ser mais adequada do que a outra.

Vamos apenas excluir as modificações do <style> que fizemos recentemente, pois não serão necessárias para o projeto. Ou seja, excluir os estilos e o <h1> tanto do App.vue quanto do Banner.vue. Depois de salvar os arquivos, tudo voltará ao normal quando visualizado no navegador.

Dessa forma, exploramos um pouco mais sobre como os componentes funcionam no Vue e seus estilos. Na próxima aula, vamos continuar a codificação a partir do Figma. Aguardamos você na próxima aula.

https://www.npmjs.com/package/vue

https://www.npmjs.com/package/create-vue

https://vuejs.org/guide/quick-start.html

https://www.alura.com.br/artigos/o-que-e-json?_gl=1*1ra5wub*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwODI1NTc5NS4yMDIuMS4xNzA4MjU5ODgwLjAuMC4w*_fplc*JTJCblBhWTFFNlRQbE1RblVvdjFhTTE1aVozYmY1Mm9WSTdCRlpQYVY1dUVRR1FqZUk3RDhFSEdkajhtR2ZSazd0S0FFRlFTblFVZ2FubndOSUolMkJ2Yk54bzltcnB6aFJuVyUyRmFvOCUyRnZYZWgxQjFvalBLTmFGb0JhNUFMUTVkYXclM0QlM0Q.

https://www.alura.com.br/artigos/versionamento-semantico-breve-introducao?_gl=1*1ra5wub*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwODI1NTc5NS4yMDIuMS4xNzA4MjU5ODgwLjAuMC4w*_fplc*JTJCblBhWTFFNlRQbE1RblVvdjFhTTE1aVozYmY1Mm9WSTdCRlpQYVY1dUVRR1FqZUk3RDhFSEdkajhtR2ZSazd0S0FFRlFTblFVZ2FubndOSUolMkJ2Yk54bzltcnB6aFJuVyUyRmFvOCUyRnZYZWgxQjFvalBLTmFGb0JhNUFMUTVkYXclM0QlM0Q.

https://docs.npmjs.com/cli/v8/using-npm/scripts

https://docs.npmjs.com/cli/v8/configuring-npm/package-json

@@08
Entendendo estilos ''escopados''

Já criamos o nosso primeiro componente, denominado Banner, e já o importamos no App.vue. Observamos como isso otimiza bastante o nosso código. Mas como funciona a tag <style> com o atributo scoped, presente tanto no App.vue quanto no Banner.vue?
CSS com Escopo
Para explicar melhor, faremos o seguinte demonstrativo no App.vue: abaixo do banner, escrevemos a abreviação Emmet h1.titulo para adicionar um <h1> com a classe titulo. Também vamos preencher este h1 com o "Texto do App.vue"

Assim sendo, dentro do <style scoped>, referenciaremos esta classe .titulo passando a propriedade color com valor red - um clássico teste de CSS.

App.vue
<template>
    <Banner />
    
    <h1 class="titulo">
        Texto do App.vue
    </h1>
</template>

<style scoped>
.titulo {
    color: red;
}
</style>
COPIAR CÓDIGO
Ao salvar este arquivo e abrir o navegador, aparece "Texto do App.vue" em vermelho no canto inferior esquerdo do banner

Agora, faremos o mesmo no banner. Dentro do <header>, adicionaremos um <h1> com a mesma classe titulo, preenchido com o texto "Texto do Banner.vue".

Banner.vue:
<template>
    <header class="banner">
        <!-- código omitido -->
        
        <h1 class="titulo">
        Texto do App.vue
        </h1>
    </header>
</template>
COPIAR CÓDIGO
Será que este <h1> que está com mesma classe influenciado pela classe que declaramos no App.vue, com o estilo de cor vermelha? Novamente, salvamos o arquivo e vamos verificar no navegador.

O "Texto do Banner.vue" é exibido, porém, não está vermelho. Portanto, o estilo que inserimos no App.vue, que deveria colorir de vermelho qualquer elemento com a classe titulo, não está afetando o componente do banner. Essa é a explicação do que significa o scoped (ou "com escopo" em português).

Este atributo indica que os estilos afetam apenas o escopo do arquivo atual, não vazando para outros componentes. Isso é um grande benefício para evitar problemas de conflitos CSS no front-end.
Portanto, é padrão utilizar o <style scoped>, pois auxilia bastante no nosso desenvolvimento.

Mas como realmente funciona internamente? Vamos abrir o navegador e inspecionar o elemento "Texo do App.vue", que está vermelho. Podemos usar a tecla "F12" para abrir o DevTools ou usar as teclas "Ctrl + Shift + C "e passar o cursor por cima de "Texto do App.vue".

<h1 data-v-7a7a37b1 class="titulo"> Texto do App.vue</h1>
COPIAR CÓDIGO
No DevTools, podemos visualizar que a tag <h1> está com um atributo chamado data, acompanhado de uma sequência de caracteres. Abaixo, o estilo de cor vermelha está associado à classe titulo e, ao mesmo tempo, identificando este atributo data.

.titulo[data-v-7a7a37b1] {
    color:red;
}
COPIAR CÓDIGO
Ao analisar o "texto do Banner.vue", dentro do <header>, podemos verificar que ele também possui um atributo data, mas com um identificador diferente.

<h1 class="titulo" data-v-3587acbb > Texto do Banner.vue</h1>
COPIAR CÓDIGO
Isso ocorre porque, quando inserimos o atributo scoped na tag <style> de um componente, o Vue.js adiciona atributos com identificadores únicos para cada componente. Desta forma, todos os elementos do Banner.vue terão o mesmo identificador e não serão afetados pelo estilo de cor vermelha dos elementos do arquivo App.vue.

O Vue.js se utiliza de uma ferramenta chamada PostCSS para aplicar essa diferenciação e evitar conflitos entre os estilos.

Além dos estilos scoped, também temos a possibilidade de declarar um estilo global, se assim desejarmos, no mesmo componente. Para isso, vamos voltar para o VS Code e remover o scoped se quisermos que nossa classe titulo afete qualquer outro componente da nossa aplicação.

App.vue:
<style>
 .titulo {
    color: red;
}
</style>
COPIAR CÓDIGO
Se salvamos o arquivo e retornamos ao navegador, os dois textos que inserimos estarão coloridos de vermelho.

Além disso, é possível ter uma tag style normal e uma tag style scoped no mesmo componente.
Ademais, outra maneira de usar estilos globais é a que nós já estamos empregando neste projeto. Em "src > assets > main.css", já preparamos alguns estilos globais, como cabeçalhos, por exemplo.

Essa é outra maneira de utilizar estilos globais, uma forma um pouco mais clássica. Portanto, nós temos mais de uma possibilidade. Dependendo do caso de uso, uma pode ser mais adequada do que a outra.

Vamos apenas excluir as modificações do <style> que fizemos recentemente, pois não serão necessárias para o projeto. Ou seja, excluir os estilos e o <h1> tanto do App.vue quanto do Banner.vue. Depois de salvar os arquivos, tudo voltará ao normal quando visualizado no navegador.

Dessa forma, exploramos um pouco mais sobre como os componentes funcionam no Vue e seus estilos. Na próxima aula, vamos continuar a codificação a partir do Figma. Aguardamos você na próxima aula.

@@09
Para saber mais: recursos CSS do Vue
PRÓXIMA ATIVIDADE

Você aprendeu sobre o <style scoped>, mas sabia que existem mais recursos do CSS que o Vue disponibiliza? Confira a sessão SFC CSS Features da documentação para ler mais sobre!

@@10
Vantagens dos componentes
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos o que são componentes no Vue e como eles podem melhorar nosso desenvolvimento no front-end.
Digamos que você criou um novo projeto Vue e está com o seguinte código inicial no arquivo App.vue:

<template>
  <header class="cabecalho">
    Cabeçalho do site...
  </header>

  <main class="conteudo-principal">
    Conteúdo principal...
  </main>

  <footer class="rodape">
    Rodapé do site...
  </footer>
</template>

<style scoped>
.cabecalho {
  /* Estilos do cabeçalho */
}

.conteudo-principal {
  /* Estilos do conteúdo principal */
}

.rodape {
  /* Estilos do rodapé */
}
</style>
COPIAR CÓDIGO
Você sabe que os códigos HTML e CSS das 3 partes do site (cabeçalho, conteúdo principal e rodapé) terão um tamanho considerável. Se essas partes permanecerem todas em App.vue, esse arquivo ficará muito grande, o que pode dificultar a manutenção do projeto e a localizar pontos específicos do sistema.

Quais ações você pode tomar para prevenir esse problema?



Criar um componente para cada uma dessas partes, chamados Cabecalho.html, ConteudoPrincipal.html e Rodape.html. Cada classe CSS deve ir para o seu respectivo arquivo e inserido dentro de novas tags <style scoped>.
 
Alternativa correta
Criar um componente para cada uma dessas partes, chamados Cabecalho.vue, ConteudoPrincipal.vue e Rodape.vue. Cada classe CSS deve ir para o seu respectivo arquivo e inserido dentro de novas tags <style scoped>.
 
Cada componente no Vue terá suas prórpias tags <script>, <template> e <style>. Essa estrutura é chamada de SFC (Single-File Component). Isso ajuda a modularizar o código e aumentar a organização do projeto, facilitando a manutenção. Além disso, com o atributo scoped na tag <style>, evitamos conflitos de código CSS entre diferentes componentes.
Alternativa correta
Criar um componente para cada uma dessas partes, chamados Cabecalho.vue, ConteudoPrincipal.vue e Rodape.vue. As três classes acima podem permanecer em App.vue, pois elas serão aplicadas nos outros arquivos.

@@11
Faça como eu fiz: criando o Cookin’ Up!
PRÓXIMA ATIVIDADE

Agora é sua vez de colocar a mão na massa! Está na hora de você criar o projeto do Cookin’ Up utilizando o pacote create-vue. Em seguida, instale as dependências do projeto e abra a aplicação no navegador.
Depois, você irá criar seu primeiro componente Banner para encapsular código HTML e CSS. Certifique-se de importar esse componente corretamente em App.vue.

Abra o terminal do seu computador e execute o seguinte comando:
npm create vue@3.7.3
COPIAR CÓDIGO
O terminal executará o pacote create-vue e se tornará interativo, fazendo várias perguntas para você configurar o projeto. Digite o nome do projeto cookin-up e selecione as ferramentas que você quer utilizar, como o TypeScript.

Em seguida, abra o projeto no VSC com code . e instale as extensões recomendadas pelo Vue:

Vue Language Features (Volar)
TypeScript Vue Plugin (Volar)
O próximo passo é instalar as dependências do projeto com npm install ou npm i. Ao finalizar, execute o comando npm run dev para rodar um servidor local que irá disponibilizar a página web do projeto no seu navegador. Esse último comando deve ser executado sempre que você abrir o projeto no VSC e quiser visualizá-lo no navegador.

Vamos criar o nosso primeiro componente! Dentro da pasta src/components, crie um arquivo Banner.vue com o seguinte código:

<template>
  <header class="banner">
    <div class="apresentacao">
      <img src="../assets/imagens/logo.svg" alt="Logo do Cookin' Up" class="logo">

      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">Um banquete de ideias para</span>
        despertar o chef que há em você!
      </p>

      <p class="subtitulo-lg">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
      </p>
    </div>

    <img src="../assets/imagens/foto-banner.png" alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando um celular entre seu rosto e ombro." class="foto-banner">
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.frase-cabecalho {
  margin-bottom: 2rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .foto-banner {
    width: min(100%, 21.25rem);
  }
}
</style>
COPIAR CÓDIGO
E agora chame o Banner no arquivo src/App.vue:

<script lang="ts">
import Banner from './components/Banner.vue';

export default {
  components: { Banner }
}
</script>

<template>
  <Banner />
</template>
COPIAR CÓDIGO
Com isso, você criou seu primeiro projeto Vue e o seu primeiro componente!

@@12
O que aprendemos?
PRÓXIMA ATIVIDADE

Nessa aula, você aprendeu a:
Criar um projeto Vue do zero pela linha de comando:
Utilizamos o comando npm create vue@3.7.3 (ou o npm create vue@latest), que executa o pacote create-vue para nos ajudar com as configurações iniciais do projeto.
Identificar as dependências de um projeto Node e instalá-las:
As dependências são listadas no arquivo package.json e devemos instalá-las com o comando npm install.
Criar o seu primeiro componente e entender suas vantagens:
Os componentes do Vue são arquivos com a extensão .vue e que seguem uma estrutura chamada SFC (Single-File Component, ou Componente de arquivo único, em português).
Cada componente encapsula seu conteúdo (<template>), estilos (<style>) e lógica (<script>) em um único arquivo, aumentando a organização do projeto.
Diferenciar estilos “escopados” de estilos normais:
Ao utilizar o atributo scoped em uma tag <style>, os estilos se limitam ao escopo do arquivo atual. Isso quer dizer que eles não vão afetar outros componentes, evitando conflitos de código CSS.
Ainda é possível utilizar tags <style> normais, o que fará com que seus estilos sejam globais.