#### 18/02/2024

Curso de Vue 3: entendendo componentes, diretivas e reatividade no framework

```
npx json-server db.json
npm i 
npm run serve
npm run dev
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

Você aprendeu sobre o <style scoped>, mas sabia que existem mais recursos do CSS que o Vue disponibiliza? Confira a sessão SFC CSS Features da documentação para ler mais sobre!

@@10
Vantagens dos componentes

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

#### 19/02/2024

@02-Utilizando diretivas

@@01
Projeto da aula anterior

Caso deseje, você pode baixar o projeto da aula anterior ou visualizar os arquivos no GitHub.
Bons estudos!

https://github.com/alura-cursos/cookin-up/archive/refs/heads/aula-1.zip

https://github.com/alura-cursos/cookin-up/tree/aula-1

@@02
Preparando o ambiente: CSS do ConteudoPrincipal

Para o próximo vídeo, utilizaremos o seguinte código CSS:

.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingrediente {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
    transition: 0.2s;
    color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}

@@03
Repetindo itens com v-for

Já implementamos a parte do banner da Cookin'UP, utilizando o Figma. Agora vamos voltar ao VS Code para continuar a codificação da parte "Sua lista".
Criando o componente ConteudoPrincipal
Começaremos criando um novo componente chamado ConteudoPrincipal. Este componente engloba toda a seção branca que encontramos no Figma. Posteriormente, iremos organizar também a parte do rodapé para que tudo fique bem estruturado.

Para começar, precisamos abrir o projeto no VS Code. Como havíamos fechado anteriormente, ao abrir novamente, precisamos executar o comando npm run dev para servir a página web no navegador. Para isso, abrimos o terminal integrado no VS Code com o atalho "Ctrl + J" e executamos o comando abaixo:

npm run dev
COPIAR CÓDIGO
Precisamos fazer esse passo sempre que quisermos disponibilizar a página. Após a execução do comando, abriremos novamente a aplicação através do link local na máquina. O banner que já tínhamos incluído deve aparecer corretamente.

No próximo passo, vamos criar um componente dentro da pasta "components". Esse componente será chamado ConteudoPrincipal, seguindo a convenção Pascal Case, ou seja, com as iniciais de cada palavra em maiúsculo. Adicionaremos a extensão .vue para indicar que é um componente Vue.js.

Vamos iniciar a codificação deste componente com um bloco <script>, onde exportamos o componente criado. Inserimos também o atributo lang="ts" e fazemos a exportação padrão (export default) de um objeto vazio ({}).

ConteudoPrincipal.vue:
<script lang="ts">
export default {}
</script>
COPIAR CÓDIGO
Se salvarmos esse arquivo e retornarmos a App.vue, após <Banner /> na linha 10, podemos abrir a tag <ConteudoPrincipal />. Quando fazemos o export default de um objeto vazio, o VS Code identifica mais facilmente a exportação do componente e ele sugerirá automaticamente a inserção do componente.

App.vue:
<template>
  <Banner />
  <ConteudoPrincipal />
</template>
COPIAR CÓDIGO
Após salvar o arquivo, ao retornar ao arquivo ConteudoPrincipal.vue, podemos abrir a tag <template> e começar a escrever o conteúdo. Para testar se a importação do componente funcionou corretamente, simplesmente colocamos o texto "Conteúdo principal" dentro da tag <template> e salvamos o arquivo.

ConteudoPrincipal.vue:
<script lang="ts">
export default {}
</script>

<template>
  Conteúdo principal
</template>
COPIAR CÓDIGO
Ao retornar ao navegador, o texto "Conteúdo principal" já aparece na tela, confirmando que a importação foi bem-sucedida. Agora, vamos trabalhar na implementação correta do HTML para esse componente.

Começaremos com uma tag <main> com a classe: conteudo-principal. Dentro dessa tag <main>, temos uma <section> que representará a parte da lista de ingredientes selecionados pela pessoa usuária.

Na tag <section>, criaremos um elemento <span> com as classes subtitulo-lg e sua-lista-texto. Este <span> terá o texto "Sua Lista:". Logo abaixo da <span>, criaremos uma <ul> com a classe ingredientes-sua-lista.

Esse elemento <ul> representa a lista não-ordenada de ingredientes selecionados pela pessoa usuária, como demonstrado no Figma. Cada <li> dentro dessa <ul> representa um ingrediente.

Inicialmente, vamos codificar essa parte de forma estática, ou seja, sem adicionar ou remover ingredientes dinamicamente. Faremos essa parte posteriormente, mas nessa etapa, já conheceremos algumas funcionalidades interessantes do Vue.
Agora, vamos codificar o primeiro elemento <li> da lista, que terá a classe ingrediente e conterá o texto "Alho". Para incluir os outros ingredientes, faremos a cópia dessa estrutura de <li> e alteraremos o texto para "Manteiga" e "Orégano".

<!-- código omitido -->

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto">
        Sua lista:
      </span>

      <ul class="ingredientes-sua-lista">
        <li class="ingrediente">
          Alho
        </li>
        <li class="ingrediente">
          Manteiga
        </li>
        <li class="ingrediente">
          Orégano
        </li>
      </ul>
    </section>
  </main>
</template>
COPIAR CÓDIGO
Ao salvar o arquivo e abrir no navegador, o conteúdo já estará visível, porém, sem a formatação correta de uma lista. Vamos adicionar os estilos necessários ao nosso projeto. É fácil encontrar esses estilos, porque já os colocamos em um guia de consulta, que está disponível para você em uma atividade.

Copiaremos os estilos, retornaremos ao VS Code, e adicionaremos uma tag <style> após </template>, contendo o atributo scoped. Dentro dessa tag, colaremos os estilos utilizando o atalho "Ctrl + V".

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingrediente {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
    transition: 0.2s;
    color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
COPIAR CÓDIGO
Em seguida, salvaremos novamente o arquivo e, ao retornar para o navegador, já é possível verificar a lista com os três ingredientes, alho, manteiga e orégano, de forma organizada e bonita.

O problema é que, ao analisar o código que nós escrevemos, percebemos que houve uma repetição na parte das tags <li>. Essa repetição de código no HTML pode se tornar um problema, especialmente quando pensamos na manutenção do código.

Por exemplo, se quisermos alterar a estrutura de um ingrediente, que sempre está em uma tag <li> com a classe ingrediente, teríamos um trabalho a mais. Apesar de ser uma estrutura simples, existem muitas outras situações onde teríamos bastante repetição de código HTML. O ideal seria ter um único local com um modelo dessa estrutura. Assim, no dia que precisarmos alterar essa estrutura, alteraríamos em apenas um local.

Felizmente, o Vue fornece um recurso bastante útil para evitar essa repetição de código HTML. Evidentemente, ele usará JavaScript nos bastidores, porém, de uma forma facilitada. Se você quisesse evitar essa repetição com JavaScript puro, também conseguiria, embora manualmente ficasse um pouco trabalhoso.

Repetindo itens com v-for
O recurso do Vue que mostraremos agora funciona da seguinte forma: vamos apagar a segunda e a terceira tags <li>, e na primeira tag <li>, vamos escrever como se fosse um atributo chamado v-for.

O VS Code até oferece uma sugestão para este comando; ele adiciona um igual e abre aspas de abertura e fechamento.
O v-for segue a mesma sintaxe de um atributo do HTML, porém, este atributo é especial e nós chamamos de diretiva. Uma diretiva do Vue é basicamente um atributo que sempre começa com v-. Entre as aspas, podemos utilizar uma sintaxe especial; vamos escrever ingrediente in ['Alho', 'Manteiga', 'Orégano']. São os mesmos itens que já tínhamos antes.

<li v-for="ingrediente in ['Alho', 'Manteiga', 'Orégano']" class="ingrediente">
  Alho
</li>
COPIAR CÓDIGO
Vamos verificar o que esse v-for vai fazer? Após salvar o arquivo e voltar ao navegador, agora temos três ingredientes, porém, todos são chamados "Alho".

Isso é interessante, porque ao retornar para o código, percebemos que o v-for é como o for do JavaScript: ele vai repetir a tag <li> onde foi aplicado o v-for, e imprimir "Alho" três vezes, reutilizando a mesma estrutura do HTML. Assim, nós já eliminamos o problema de repetição de código.

Porém, ainda não conseguimos personalizar o texto apresentado. É para isso que serve a variável chamada ingrediente que escrevemos antes de in. Nós podemos utilizar essa variável que o Vue permite criar dentro de <template>.

Sendo assim, em vez de escrever "Alho", podemos utilizar uma variável do JavaScript. Para isso, existe outra sintaxe fornecida pelo Vue, que são as chaves. São duas chaves de abertura e duas chaves de fechamento ({{ }}). Dentro dessas chaves, conseguimos obter a variável do JavaScript, que é ingrediente.

<li v-for="ingrediente in ['Alho', 'Manteiga', 'Orégano']" class="ingrediente">
  {{ ingrediente }}
</li>
COPIAR CÓDIGO
Ao salvar o arquivo novamente e retornar ao navegador, é possível verificar que funcionou corretamente. Aparece "Alho", "Manteiga" e "Orégano", perfeitamente organizados na lista.

Vamos modificar um detalhe no código. Ao voltarmos para o VS Code, percebemos que não é muito comum colocar uma lista diretamente no v-for, principalmente uma lista literal. Idealmente, as informações devem estar mais estruturadas e organizadas. Portanto, existe uma maneira de enviar essa lista para o JavaScript na tag <script>.

O procedimento é o seguinte: recortamos a lista com "Ctrl + X", e podemos prever o nome da lista, que vamos chamar de ingredientes. Esta lista ainda não existe, por isso ficará sublinhada em vermelho.

<li v-for="ingrediente in ingredientes" class="ingrediente">
  {{ ingrediente }}
</li>
COPIAR CÓDIGO
Agora, vamos criar a lista na tag <script>. No entanto, saiba que no Vue, não podemos simplesmente escrever const ingredientes e atribuir a lista diretamente para o template do componente. Nós precisamos de alguns passos a mais.

Para realmente disponibilizar uma informação do JavaScript para o Vue, nós vamos entrar no export default e adicionar uma propriedade chamada data(). Ela é uma função, então abrimos parênteses e chaves e, entre chaves, retornamos um objeto.

Este objeto terá uma propriedade chamada ingredientes, cujo valor será a lista que copiamos anteriormente.

<script lang="ts">
export default {
    data() {
        return {
            ingredientes: ['Alho', 'Manteiga', 'Orégano']
        };
    },
}
</script>

<!-- código omitido -->
COPIAR CÓDIGO
Feito isso, o sublinhado vermelho desaparece do código. Ao salvar o arquivo e retornar ao navegador, vemos que todos os ingredientes aparecem conforme esperado.

Conclusão
Assim, aprendemos três coisas novas:

Como realizar uma iteração HTML com v-for;
A sintaxe de interpolação, que são as duplas chaves ({{ }});
E o uso de data para disponibilizar informações do JavaScript para serem utilizadas no template do componente.
Essa opção de data é capaz de fazer mais coisas, mas vamos aprender mais sobre isso futuramente no curso.

No próximo vídeo, vamos aplicar uma boa prática quando usamos v-for para renderizar listas no Vue. Esperamos você lá!

@@04
Vinculando dados com v-bind

Nós conseguimos renderizar de forma dinâmica uma lista de ingredientes no nosso projeto com sucesso. Colocando o código em prática, realizamos isso com a diretiva v-for, uma citação especial que nos permite fazer uma iteração, ou um loop, em código HTML. Porém, o Vue recomenda uma boa prática para não haver erros na hora de renderizar o conteúdo desta lista.
Vinculando dados com v-bind
Essa prática consiste em adicionar um atributo especial fornecido pelo Vue, chamado key (chave, em inglês), após o v-for. Este atributo requer um identificador único, que servirá para cada item da lista de ingredientes.

Isso ajuda a renderizar os itens da lista de ingredientes da maneira mais eficaz possível, especialmente em situações onde utilizaremos recursos mais avançados. Embora não estejamos enfrentando problemas de renderização agora, é essencial começar a implementar essa prática para evitar esquecimentos futuros quando utilizarmos v-for novamente.

Você pode se perguntar: "O que passar como identificador único?". O Vue sugere sempre adicionar um valor primitivo do JavaScript (como uma string ou um número). No caso do ingrediente, nós podemos passar o próprio valor do ingrediente, porque é uma string e o número do ingrediente será único para cada um deles.

No entanto, nos deparamos com outro problema: como escrever a variável ingrediente dentro do atributo key? Não conseguimos usar a sintaxe de chaves duplas, por exemplo, porque ela serve apenas para o conteúdo de tags HTML. Nos atributos HTML, para capturar informações do JavaScript, a sintaxe é um pouco diferente.

Para resolver isso, antes do key, vamos escrever outra diretiva chamada v-bind:, que permitirá a escrita de código JavaScript entre as aspas. Então, escreveremos a variável ingrediente em seguida.

ConteudoPrincipal.vue:
<li v-for="ingrediente in ingredientes" v-bind:key="ingrediente" class="ingrediente">
  {{ ingrediente }}
</li>
COPIAR CÓDIGO
Ao salvar esse arquivo e voltar ao navegador, veremos que tudo continua funcionando da mesma forma. Essa é, definitivamente, a melhor prática para renderizar listas utilizando v-for no Vue.

Contudo, a situação de pegar um valor do JavaScript nos atributos do HTML é tão comum que o Vue fornece um atalho para essa sintaxe. Portanto, em vez de escrever v-bind: toda vez que quisermos fazer isso, podemos apagar o v-bind e manter apenas os dois pontos (:) antecedendo o nome do atributo.

<li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
  {{ ingrediente }}
</li>
COPIAR CÓDIGO
Após salvar o arquivo e voltar ao navegador, continua funcionando normalmente.

Mesmo removendo o v-bind, podemos manter o termo em mente quando enxergamos os dois pontos. Portanto, ao mencionar v-bind no futuro, estaremos nos referindo a essa diretiva.
Conclusão
Dessa forma, mantivemos as boas práticas de renderização de listas com v-for. No próximo vídeo, faremos a finalização da lista de ingredientes, tratando o caso quando ela estiver vazia. Esperamos você por lá!

@@05
Renderizando condicionalmente

Nós já implementamos uma boa prática para renderizar listas no Vue, utilizando o atributo especial key. No entanto, há outra situação que precisamos resolver para finalizar esta parte relacionada às listas.
Renderizando condicionalmente
Analisando o Figma, há uma situação que ocorre quando a lista está vazia. Se olharmos na parte direita do Figma, temos uma demonstração dessa situação: quando a lista está vazia, exibimos uma imagem de uma lupa e a frase "Sua lista está vazia, selecione ingredientes para iniciar". Agora, vamos implementar isso no código.

Retornando ao VS Code, a maneira de fazer isso será com outra diretiva do Vue.

Na estrutura de lista <ul>, usaremos uma diretiva chamada v-if que segue uma sintaxe específica: v-if="{condição}". Dentro dessas chaves, podemos colocar uma condição do JavaScript que, se avaliada como verdadeira, renderiza essa lista. Já se for avaliada como falsa, o Vue não vai exibir a lista na tela. Vamos verificar se funciona?

Para a condição, precisamos levar em conta que a lista não deve estar vazia. Portanto, vamos escrever a condição da seguinte maneira: ingredientes.length. Temos acesso à variável ingredientes, que está disponível no código JavaScript. Se o tamanho da lista for diferente de zero, o valor será avaliado como verdadeiro para o v-if e a lista será renderizada.

ConteudoPrincipal.vue:
<ul v-if="ingredientes.length" class="ingredientes-sua-lista">
  <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
    {{ ingrediente }}
  </li>
</ul>
COPIAR CÓDIGO
Ao salvar o arquivo e retornar ao navegador, a lista continua aparecendo, pois ela não está vazia. Porém, se removermos todos os itens da lista ingredientes na linha 5 e salvarmos o arquivo novamente, a lista desaparece, porque está vazia.

Se olharmos o DevTools e inspecionarmos a parte da lista, veremos que a estrutura <ul> também sumiu, já que aplicamos o v-if a esta estrutura.
Isso já é um avanço, mas para atender ao design do Figma, precisamos mostrar a pequena imagem e o texto que indica que a lista está vazia, caso ela realmente esteja. Para isso, vamos retornar ao VS Code e usar outra diretiva que complementa o v-if.

Depois da estrutura da lista, exibiremos a estrutura que corresponde ao que foi descrito no Figma: um parágrafo (<p<) com as classes paragrafo e lista-vazia. Estas classes já foram previamente definidas na parte do <style scoped>.

Dentro do parágrafo, vamos inserir uma imagem (<img>) com o seguinte caminho (src): "../assets/imagens/icones/lista-vazia.svg". No atributo alt, adicionamos a descrição "Ícone de pesquisa".

Após a imagem, inserimos o texto que podemos copiar diretamente do Figma para economizar tempo.

<p class="paragrafo lista-vazia">
  <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
  Sua lista está vazia, selecione ingredientes para iniciar.
</p>
</section>
COPIAR CÓDIGO
Feito isso, salvamos o arquivo e voltamos para o navegador. A imagem e o texto que desejamos exibir já aparecem.

No entanto, se retornarmos a lista de ingredientes para o estado anterior, precisamos garantir que a lista de ingredientes aparece, sem mostrar a frase de lista vazia. Para isso, precisamos definir a condição para exibir a frase de lista vazia.

Retornando ao VS Code, vamos inserir a diretiva v-else na tag <p>. Essa diretiva que inserimos no parágrafo deve ser posicionada em um elemento que está imediatamente após um elemento que possua um v-if. Se a estrutura não for essa, não funcionará corretamente. Então, teoricamente, da forma que fizemos abaixo, deve funcionar.

<p v-else class="paragrafo lista-vazia">
  <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
  Sua lista está vazia, selecione ingredientes para iniciar.
</p>
</section>
COPIAR CÓDIGO
Ao salvar o arquivo e voltar ao navegador, o parágrafo deverá ter desaparecido.

Conclusão
Com isso, concluímos a parte da lista, com todos os detalhes que precisamos tratar. No próximo vídeo, começaremos a codificar a parte de seleção de ingredientes, que podemos conferir no Figma. Esperamos você por lá!

@@06
Preparando o ambiente: lista de categorias e CSS do SelecionarIngredientes

Para o próximo vídeo, utilizaremos o seguinte código CSS:
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
COPIAR CÓDIGO
Também usaremos a seguinte lista de objetos no JS:

[
  {
    "nome": "Laticínios e Ovos",
    "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
    "rotulo": "laticinios_e_ovos"
  },
  {
    "nome": "Farinhas e Fermentos",
    "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
    "rotulo": "farinhas_e_fermentos"
  }
]

@@07
Importando dados

Finalizamos a codificação da lista de ingredientes de acordo com o Figma, e o próximo passo é programar a parte de seleção de ingredientes, que inicia com o título "Ingredientes". Vamos ao VS Code para fazer isso?
Importando dados
Vamos abrir o arquivo ConteudoPrincipal.vue, pois ainda faz parte dessa seção no Figma. No código, dentro da tag <template>, temos uma <main> que contém uma <section>. Essa <section> é a parte da lista que já codificamos, e poderíamos, por exemplo, criar um componente para isso. Porém, vamos deixar essa parte um pouco para depois, pois envolverá alguns conceitos que ainda vamos aprender. Por enquanto, vamos deixar o HTML direto em ConteudoPrincipal.vue.

Criando o componente SelecionarIngredientes
Abaixo de </section>, vamos programar a parte de seleção de ingredientes. Criaremos um novo componente na pasta "components", com o nome SelecionarIngredientes.vue. Dentro desse arquivo, vamos escrever um <script> com o atributo lang = ts, e exportar o padrão (export default) para facilitar o uso do autocomplete ao chamar esse componente.

SelecionarIngredientes.vue:
<script lang="ts">
export default {}
</script>
COPIAR CÓDIGO
Após salvar esse arquivo, voltamos para o arquivo ConteudoPrincipal.vue, onde vamos chamar <SelecionarIngredientes />. Se olharmos na parte superior, o VS Code terá importado automaticamente para nós o componente SelecionarIngredientes e colocado ele em components. Essa é uma funcionalidade do VS Code que facilita nosso trabalho.

ConteudoPrincipal.vue:
    <!-- código omitido -->

    <SelecionarIngredientes />
  </main>
</template>
COPIAR CÓDIGO
<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';

export default {
    data() {
        return {
            ingredientes: ['Alho', 'Manteiga', 'Orégano']
        };
    },
    components: { SelecionarIngredientes }
}
</script>
COPIAR CÓDIGO
Uma vez salvo este arquivo, voltamos para o arquivo SelecionarIngredientes.vue e começamos a escrever o <template>. Novamente, faremos apenas um teste para verificar se está tudo certo.

SelecionarIngredientes.vue:
<!-- código omitido -->

<template>
  Selecionar...
</template>
COPIAR CÓDIGO
Ao salvar o arquivo e abrir o navegador para verificar, já aparece o texto "Selecionar…".

Agora vamos codificar de fato. De volta ao VS Code, vamos apagar o texto "Selecionar…" e adicionar uma <section> com a classe selecionar-ingredientes. Dentro dela, colocaremos uma tag <h1> com as classes cabecalho e titulo-ingredientes, cujo texto será "Ingredientes", o mesmo que mostramos no Figma.

Depois do <h1>, inserimos um parágrafo (<p>) com a classe paragrafo-lg e outra classe chamada instrucoes. No Figma, copiaremos o texto "Selecione abaixo os ingredientes que você quer usar nesta receita:" e colaremos dentro de <p>.

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
  </section>
</template>
COPIAR CÓDIGO
Após o parágrafo, adicionamos uma <ul> de classe categorias, que será a lista que mostrará todas os cartões de categorias. Por enquanto, vamos deixá-la vazia, e em breve iremos completá-la.

Após a <ul>, vamos adicionar um novo <p> com a classe paragrafo e outra classe chamada dicas. No Figma, copiamos o conteúdo do parágrafo ("*Atenção: consideramos que você tem em casa sal, pimenta e água.") e colamos no HTML.

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">

    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>
</template>
COPIAR CÓDIGO
Feito isso, podemos salvar o arquivo e ir ao navegador para visualizar o resultado. O conteúdo do projeto já aparece corretamente, porém, faltam os estilos, que serão copiados da cola e que também estão disponíveis para você em uma atividade. Então, copiamos o CSS, voltamos para o VS Code, e colamos abaixo de </template>.

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
COPIAR CÓDIGO
Conferindo no navegador, já está tudo certo. Falta apenas a parte dos cartões de ingredientes.

Vamos retornar ao VS Code, e na seção de elementos <ul> de categorias que está vazia, queremos fazer mais uma vez um loop, um v-for, para que cada uma das categorias seja exibida utilizando um elemento <li>. Portanto, escreveremos <li> contendo o v-for em que precisamos fazer um loop sobre uma lista que disponibiliza todas as informações das categorias.

Idealmente, analisando o template no Figma, é necessário ter uma lista de objetos e cada objeto terá as informações das categorias, como título, ingredientes que ela possui e até mesmo o nome das categorias. Por enquanto, vamos apenas escrever a forma final do v-for, mas nós ainda veremos como obter essa fonte de dados referente às categorias.

Portanto, no v-for vamos escrever categoria in categorias, e vamos aproveitar para adicionar também uma chave usando :key, que é um identificador único. Podemos colocar, por exemplo, categoria.nome, presumindo que categoria será um objeto. Vale lembrar que ainda vamos implementar a lista chamada categorias.

<ul class="categorias">
  <li v-for="categoria in categorias" :key="categoria.nome">
    
  </li>
</ul>
COPIAR CÓDIGO
Em busca de organização do código, vamos disponibilizar a lista no <script> em export default. Portanto, mais uma vez, escreveremos a função data(), e dentro desta função, retornamos um objeto que terá uma propriedade chamada categorias.

<script lang="ts">
export default {
  data() {
    return {
      categorias: []
    }
  }
}
</script>
COPIAR CÓDIGO
Conforme dito anteriormente, precisamos de uma lista de objetos com as informações das categorias. Para deixar nosso projeto ainda mais organizado, vamos manter em um arquivo separado essa obtenção de dados.

Isso é bom porque dividimos mais as responsabilidades, e se um dia quisermos fazer a obtenção de uma URL, por exemplo, ou de uma API, será mais fácil fazer manutenção desse código.

Por enquanto, vamos deixar uma lista vazia ([]) na propriedade categorias, mas já vamos criar uma pasta dentro de "src". Esta pasta será chamada "http", pois futuramente faremos uma requisição HTTP, e criaremos nessa pasta o arquivo index.ts.

Criando o arquivo index.ts
Neste arquivo, vamos exportar uma função chamada obterCategorias(), que retornará uma lista de objetos.

index.ts:
export function obterCategorias() {
  return [
    {
      "nome": "Laticínios e Ovos",
      "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
      "rotulo": "laticinios_e_ovos"
    },
    {
      "nome": "Farinhas e Fermentos",
      "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
      "rotulo": "farinhas_e_fermentos"
    }
  ]
}
COPIAR CÓDIGO
Esta é uma lista de objetos em que cada um possui três propriedades. A primeira se chama nome, que será o nome da categoria, por exemplo, "Laticínios e Ovos". A segunda propriedade se chama ingredientes, cujo valor é uma lista de strings que são os ingredientes que pertencem àquela categoria.

Por fim, temos a terceira propriedade chamada rótulo, que neste primeiro caso, será "laticinios_e_ovos". É apenas um nome padronizado que usaremos para referenciar a imagem que corresponde à categoria. Por enquanto, temos apenas duas categorias de exemplo, mas já será suficiente para testarmos nosso código e posteriormente aprimorá-lo.

Feito isso, salvamos o arquivo e retornamos para SelecionarIngredientes.vue. Agora, em vez de passar uma lista vazia na propriedade categorias, vamos escrever obterCategorias().

Em seguida, vamos importar obterCategorias manualmente no início do <script>. Para isso, escrevemos import, abrimos e fechamos chaves contendo obterCategorias, e depois escrevemos from ''.

Vamos usar um atalho interessante que podemos aplicar nos import do Vue: o @/http/index. Essa arroba faz referência à pasta "src". Assim, a partir dela, conseguimos navegar até "http" e até "index". Isso é feito pelo Vite, servidor que consegue resolver esses caminhos e essas importações, sendo uma ferramenta que o Vue utiliza.

SelecionarIngredientes.vue:
<script lang="ts">
import { obterCategorias } from '@/http/index';

export default {
  data() {
    return {
      categorias: obterCategorias()
    }
  }
}
</script>
COPIAR CÓDIGO
Nesse momento, pode ser que apareça um erro na importação, mas vamos resolver isso em breve.
Após salvar este arquivo e ir para o navegador, não visualizaremos nada novo ainda, porque não foi requisitado que nada fosse exibido. Se voltarmos para o VS Code, devemos colocar código na tag <li>, mas por enquanto ela está vazia.

Então, precisamos colocar a sintaxe de interpolação com duas chaves ({{ }}), e em seguida vamos inserir categoria.nome, referindo-se à propriedade que vimos no index.ts.

<ul class="categorias">
  <li v-for="categoria in categorias" :key="categoria.nome">
    {{ categoria.nome }}
  </li>
</ul>
COPIAR CÓDIGO
Salvando esse arquivo e retornando ao navegador, já podemos visualizar o nome das duas categorias que definimos no arquivo index.ts. Agora, vamos voltar ao VS Code para resolver o erro de importação que o TypeScript aponta.

Embora funcione no navegador, o erro ainda aparece no VS Code. Ele ocorre porque o TypeScript não reconheceu a importação que fizemos, pois precisamos adicionar uma configuração no arquivo tsconfig.app.json, que está na raiz do projeto.

Vamos abrir esse arquivo e, na linha 3, onde temos uma lista para a propriedade include, vamos adicionar um novo item que seguirá um padrão muito parecido com os outros itens já presentes na lista. Vamos inserir src/**/*.ts, para fazer com que o TypeScript reconheça os arquivos que estão neste padrão de caminho.

tsconfig.app.json:
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "src/**/*.ts"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
COPIAR CÓDIGO
Após salvar o arquivo e voltar para SelecionarIngredientes.vue, basta recarregar o VS Code para desaparecer o erro. Para isso, vamos usar o atalho "Ctrl + Shift + P", escrever "reload" e selecionar a opção "Reload Window" ("Recarregar a Janela"). Após esperar um pouco, o erro deverá desaparecer.

Conclusão
Com essa etapa concluída, já conseguimos separar a lógica de obtenção das categorias, o que facilitará a manutenção do código. No próximo vídeo, nós vamos evoluir essa lógica de obtenção, pegando de uma URL de verdade e fazendo uma requisição HTTP. Te esperamos lá!

@@08
Preparando o ambiente: link das categorias

Usaremos no próximo vídeo a seguinte URL para obter um JSON de categorias:
https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json

@@09
Re-renderizando a tela com estado

Nós já conseguimos exibir as informações de apenas duas categorias de forma estática em nosso projeto, que por enquanto são as categorias de "Laticínios e Ovos" e "Farinhas e Fermentos". Mas o que realmente precisamos é obter informações de várias das categorias que estão no Figma.
Ao observarmos o template, temos, na verdade, 12 categorias, e já deixamos um JSON preparado em um arquivo na web. Neste arquivo, temos a mesma estrutura: uma lista de objetos que representa as categorias. Porém, agora estão todas as informações que precisamos para exibir do Figma.

Entenderemos como lidar com isso no Vue, como consultar um link da web usando uma requisição HTTP. Essa é uma situação muito comum no mercado, pois sempre lidamos com consultas e interação com APIs, por exemplo.

Re-renderizando a tela com estado
Vamos começar a inserir o código no VS Code. No arquivo SelecionarIngredientes.vue, temos uma propriedade chamada categorias que chama a função obterCategorias() do arquivo index.ts, que deixamos na pasta "http". No arquivo index.ts, vamos mudar a lógica dessa função que atualmente retorna uma lista estática, a qual vamos apagar.

Antes do return, vamos escrever a lógica para realmente fazer uma requisição HTTP.

index.ts:
export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');

  const categorias = await resposta.json();

  return categorias;
}
COPIAR CÓDIGO
Neste código, const resposta recebe um await fetch(), para usar a Fetch API do JavaScript. Para poder utilizar o await, a função precisa ser assíncrona. Então, escrevemos async antes de function. Em fetch(), inserimos como string a URL que já mostramos no navegador. Assim, por padrão, faremos uma requisição GET para essa URL.

Com a resposta em mãos, escrevemos const categorias recebendo await resposta.json(). Isso também é assíncrono, então precisamos colocar await antes de resposta.json(). Finalmente, retornamos categorias.

Feito isso, salvamos o arquivo. Porém, como a função é assíncrona, ocorre um erro em SelecionarIngredientes.vue. Surge um problema ao acessar categoria.nome na tag <li>, justamente porque a função obterCategorias(), agora sendo assíncrona, precisa aguardar a execução do código.

A forma indicada de fazer isso no Vue não é dentro de data(). Existe um método mais adequado para realizar essa operação assíncrona, que trará benefícios até para lidar com os diferentes estados em que a propriedade categorias pode estar. Afinal, ela pode ficar vazia em um primeiro momento, sendo uma lista vazia, e só depois de um tempo, o que pode levar, por exemplo, alguns segundos, vamos obter as informações que queremos da URL.

Para fazer isso, vamos apagar obterCategorias() da linha 7, deixar um estado inicial de lista vazia ([]) para a propriedade categorias, e adicionar uma nova propriedade nesse objeto de export default chamada created().

created() é uma função, então abrimos e fechamos parênteses e chaves. O código será executado apenas após algumas configurações desse componente serem definidas. Como, por exemplo, as próprias propriedades disponibilizadas no data.

Esse created() é o que chamamos de método de ciclo de vida. O Vue tem vários desses métodos que são executados em diferentes momentos. Alguns deles são executados só depois que o componente é renderizado na tela. O created() é executado depois que as propriedades de data já tiverem sido definidas. Assim, temos acesso à propriedade categorias.

Para isso, faremos uma atribuição. Vamos escrever que this.categorias recebe await obterCategorias(). Note que ainda não podemos usar o await, mas podemos definir que created() é uma função assíncrona.

SelecionarIngredientes.vue:
export default {
  data() {
    return {
      categorias: []
    }
  },
  async created() {
    this.categorias = await obterCategorias();
  }
}
COPIAR CÓDIGO
Recapitulando: a lista de categorias vai iniciar vazia, nós vamos aguardar a obtenção das categorias, porque é uma requisição HTTP e pode levar um tempo. Quando estiver disponível, vamos pegar o retorno da função e reatribuir às categorias.

Vamos verificar o que acontece se fizermos isso. Uma vez salvo o arquivo, voltamos ao projeto no navegador. Houve uma leve demora, mas já são exibidos os nomes de todas as 12 categorias do JSON, o que já é muito interessante.

Agora, vamos voltar para rever o código. Queremos explicar melhor como ocorre a reatribuição à propriedade categorias.

Para isso, vamos forçar uma espera de 3 segundos a mais para a requisição ser feita no arquivo index.ts. Usaremos um código de exemplo que você não precisa copiar, é apenas para propósito de demonstração.

index.ts:
await new Promise((resolver) => {
  setTimeout(resolver, 3000);
})
COPIAR CÓDIGO
Esse código basicamente aguarda uma promessa (Promise()) que criamos do zero e só vamos resolver essa promessa após 3 segundos. Colocamos no código um valor de 3000 milissegundos.

Agora iremos forçar as informações a serem retornadas após 3 segundos. Com o arquivo salvo, atualizamos a página no navegador. A princípio, não haverá nada exibido na parte de categorias, mas após os 3 segundos, a página é atualizada e mostra as 12 categorias.

Se prestarmos atenção, em SelecionarIngredientes.vue, a lista inicial está vazia, por isso não era mostrado nada. Por 3 segundos, o Vue aguardou a obtenção das categorias e reatribuiu à propriedade categorias.

Porém, quando a reatribuição aconteceu, a tela foi atualizada automaticamente. Não precisamos fazer isso manualmente com JavaScript, não precisamos fazer um innerHTML, porque o Vue faz isso de forma automática.

Essa é uma característica muito importante de frameworks front-end. As propriedades no data() são reativas por padrão. Isso significa que, quando alteramos o valor delas, a interface do componente é atualizada de acordo com o novo valor dessas propriedades. Essa característica se chama reatividade.

Outra forma de chamar essas propriedades reativas, que também é um termo comum, é estado. Portanto, podemos chamar as categorias em data() de estados. Qualquer propriedade que criarmos dentro de data(), podemos chamar de estado.

Esse é um dos conceitos fundamentais de frameworks front-end, presente não apenas no Vue, mas também em frameworks como React e Angular. Vamos revisitar esse conceito mais vezes durante o curso, em outros contextos.
Para finalizar, vamos apagar o código em que forçamos os 3 segundos, apenas para visualizar melhor a re-renderização na tela. Feito isso, precisamos apenas corrigir um erro de TypeScript. Em categoria.nome, na <li> da linha 26, se passarmos o cursor por cima, é indicado que a propriedade nome é desconhecida.

Isso acontece porque quando consultamos de uma API, o TypeScript não consegue saber exatamente qual é o tipo de estrutura que obtemos da resposta. Nós sabemos que é uma lista de objetos, mas o TypeScript não sabe. Então, precisamos informar para ele essa estrutura.

Para começar, criaremos uma nova pasta dentro de "src" chamada "interfaces". Dentro dela, criaremos um arquivo chamado ICategoria.ts. Os caracteres "I" e "C" são maiúsculas. Esta é uma convenção utilizada para criar uma nova interface.

No arquivo, escreveremos export default interface e a chamaremos de ICategoria, seguindo a mesma nomenclatura.

Dentro dela, definiremos o formato do objeto de categoria. Há uma propriedade chamada nome, que é do tipo string; outra chamada ingredientes, que é uma lista de strings (string[]); e outra propriedade chamada imagem, que também é uma string. Após esses passos, salvamos o arquivo.

ICategoria.ts:
export default interface ICategoria {
  nome: string;
  ingredientes: string[];
  imagem: string;
}
COPIAR CÓDIGO
Agora, podemos ir para o arquivo index.ts e, na linha 4, inserir um tipo para a constante categorias, colocando : ICategoria[]. Especificamos que é uma lista de categoria usando [], ou seja, uma lista de objetos que seguem este formato.

Agora só precisamos importar a interface. Se a sugestão de importação não aparecer automaticamente, a importaremos manualmente. Para isso, escrevemos import type ICategoria from '' e utilizamos o atalho @/interfaces/ICategoria.

index.ts:
import type ICategoria from '@/interfaces/ICategoria';

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}
COPIAR CÓDIGO
É possível que haja uma linha sublinhada em vermelho no caminho adicionado na importação, mas se isso acontecer, basta reiniciar o VS Code. Às vezes, o TypeScript não reconhece os import corretamente.
Após salvar o arquivo, retornamos a SelecionarIngredientes.vue, que agora apresenta um erro diferente. Ele indica que o estado categorias não tem um tipo. Para "tipar" um estado no Vue, podemos inserir o tipo na declaração de categorias, após a lista vazia, adicionando as ICategoria[]. O editor fornece uma sugestão de importação, adicionada ao início do arquivo.

SelecionarIngredientes.vue:
<script lang="ts">
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';

export default {
  data() {
    return {
      categorias: [] as ICategoria[]
    }
  },
  async created() {
    this.categorias = await obterCategorias();
  }
}
</script>
COPIAR CÓDIGO
Revisando o que fizemos, temos um estado que começa com uma lista vazia, tipado como ICategoria, e depois conseguimos reatribuir conforme definido em index.ts, utilizando a interface ICategoria que funciona como um modelo de objeto, com a ajuda do TypeScript.

Conclusão
Foram muitos conceitos novos, mas conseguimos importar com sucesso a informação de uma URL no Vue. Na próxima aula, continuaremos a codificar a página e concluiremos a parte dos cartões de categorias. Esperamos você lá!

@@10
Para saber mais: Gists do GitHub

A URL que utilizamos para obter o JSON de categorias foi disponibilizada a partir de um Gist do GitHub.
Um Gist é basicamente um ou mais blocos de códigos, escritos em qualquer linguagem, que você pode criar no site GitHub Gist. Basta ter uma conta no GitHub, acessar o site e você poderá criar seus próprios Gists!

Para compartilhar um Gist com quem você quiser, antes de criá-lo, basta alterar a opção “Create secret gist” para “Create public gist”, assim ele se tornará público. Depois de criá-lo, você terá um link como o seguinte:

https://gist.github.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964
Cada bloco de código do Gist possui um botão chamado “Raw”, que levará a uma URL para aquele bloco de código específico, que mostra na tela seu código-fonte. Os dois blocos de código do meu gist acima possuem essas URLs:

https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json
https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json
Bacana, não é? Essa é uma forma muito simples de criar URLs e praticar requisições GET nos seus projetos!

@@11
Para saber mais: métodos de ciclo de vida

No vídeo anterior, você aprendeu sobre o created(), um dos métodos de ciclo de vida do Vue. A Angela Caldas preparou o artigo VueJS: ciclo de vida dos componentes para você se aprofundar mais nesse tema!

https://www.alura.com.br/artigos/vuejs-ciclo-vida-componentes?_gl=1*9589g5*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwODM4MDE0Ny4yMDMuMS4xNzA4Mzg1MjMwLjAuMC4w*_fplc*WkxZb2ZacEh5bDFTNnp1WXYlMkJhcGZoSHMzWlhSTFNUaXpYWWpDd01BUlJGS3FseXJQUzkyWXR3JTJGVlB2Rm92VnZNUVdqMkNFaHR2dnFQWlRsU2tzMFZXQlY0WDRWWTZSWGw2YkZlb0lXODM4R25OTlpRRDE0MiUyRlBCTzg0NyUyRlElM0QlM0Q.

@@12
Melhorando o código com diretivas

Victor está começando seus estudos em Vue e pediu para você analisar o código de um de seus componentes, que está atualmente assim:
<script lang="ts">
export default {
  data() {
    return {
      animes: ['Attack on Titan', 'Hunter x Hunter', 'One Piece']
    };
  }
}
</script>

<template>
  <section>
    <h1>Animes topzera:</h1>

    <ul>
      <li>{{ animes[0] }}</li>
      <li>{{ animes[1] }}</li>
      <li>{{ animes[2] }}</li>
    </ul>

    <p>
      Nenhum anime na lista :(
    </p>
  </section>
</template>
COPIAR CÓDIGO
Victor ainda não conhece as diretivas do Vue e não sabe uma forma mais dinâmica de renderizar a lista de <li>'s em seu código. Além disso, ele quer que o parágrafo <p> apareça somente se a lista de animes estiver vazia.

Qual dos códigos abaixo melhor reescreve o código de Victor?

<template>
  <section>
    <h1>Animes topzera:</h1>

    <ul v-if="animes">
      <li v-for="anime in animes" :key="anime">
        {{ anime }}
      </li>
    </ul>

    <p v-else>
      Nenhum anime na lista :(
    </p>
  </section>
</template>
 
Alternativa correta
<template>
  <section>
    <h1>Animes topzera:</h1>

    <ul v-if="animes.length">
      <li v-for="anime in animes" :key="anime">
        {{ anime }}
      </li>
    </ul>

    <p v-else>
      Nenhum anime na lista :(
    </p>
  </section>
</template>
 
As diretivas v-if e v-else estão sendo utilizadas para renderizar a lista ou o parágrafo de forma condicional. Além disso, o v-for e o atributo key estão sendo utilizados corretamente.
Alternativa correta
<template>
  <section>
    <h1>Animes topzera:</h1>

    <ul v-if="animes.length">
      <li v-for="anime in animes">
        {{ anime }}
      </li>
    </ul>

    <p v-else>
      Nenhum anime na lista :(
    </p>
  </section>
</template>

@@13
Faça como eu fiz: renderizando lista e obtendo categorias

Agora é sua vez de colocar a mão na massa! Crie um componente ConteudoPrincipal que contém a seção “Sua lista” com uma lista com alguns ingredientes. Dentro desse componente, crie também um chamado SelecionarIngredientes, que contém o início da seção de seleção e, por enquanto, mostra apenas os nomes das categorias.

Altere o código de App.vue para utilizar o ConteudoPrincipal:
<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';

export default {
  components: { Banner, ConteudoPrincipal }
}
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
</template>
COPIAR CÓDIGO
Mas falta criarmos esse componente! Dentro da pasta src/components, crie o arquivo ConteudoPrincipal.vue:

<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';

export default {
  data() {
    return {
      ingredientes: ['Alho', 'Manteiga', 'Orégano']
    };
  },
  components: { SelecionarIngredientes }
}
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto">
        Sua lista:
      </span>

      <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
        <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
          {{ ingrediente }}
        </li>
      </ul>

      <p v-else class="paragrafo lista-vazia">
        <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>

    <SelecionarIngredientes />
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingrediente {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
COPIAR CÓDIGO
Esse componente também está utilizando o SelecionarIngredientes, que também falta criarmos. Na pasta de componentes, crie o arquivo SelecionarIngredientes.vue:

<script lang="ts">
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';

export default {
  data() {
    return {
      categorias: [] as ICategoria[]
    }
  },
  async created() {
    this.categorias = await obterCategorias();
  }
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        {{ categoria.nome }}
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>


@@14
O que aprendemos?

Nessa aula, você aprendeu a:
Repetir código HTML dinamicamente com a diretiva v-for:
A sintaxe é v-for="item in lista". A lista pode ser disponibilizada no <script> do componente, por meio da opção data(), por exemplo;
Com essa diretiva, mantemos em um único local do código o HTML que será o “modelo” para a renderização da lista;
Inserir dados do JavaScript no conteúdo de tags HTML com a sintaxe de interpolação {{ }};
Inserir dados do JavaScript nos atributos do HTML com a diretiva v-bind: (ou simplesmente :);
Utilizar o atributo :key como boa prática na renderização de listas:
Esse é um atributo especial fornecido pelo Vue e que o ajuda a identificar cada item da lista e renderizá-los corretamente;
O valor desse atributo deve ser um tipo primitivo do JavaScript (número, string ou Symbol) e deve ser único para cada item da lista;
Renderizar HTML condicionalmente com as diretivas v-if e v-else;
Utilizar o método de ciclo de vida created() para lidar com código assíncrono;
Esse método é executado após as propriedades de data() terem sido definidas, sendo assim possível acessá-las e modificá-las.
Aplicar reatividade na prática:
Você descobriu o que é uma variável reativa (ou estado). Quando seu valor é alterado, o componente reage a essa mudança e o Vue o re-renderiza automaticamente, de acordo com o novo valor do estado;
As propriedades do objeto retornado no data() são estados.