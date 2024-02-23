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

#### 20/02/2024

@03-Passando informações com props

@@01
Projeto da aula anterior

Caso deseje, você pode baixar o projeto da aula anterior ou visualizar os arquivos no GitHub.
Bons estudos!

https://github.com/alura-cursos/cookin-up/archive/refs/heads/aula-2.zip

https://github.com/alura-cursos/cookin-up/tree/aula-2

@@02
Personalizando cards com props

Já estamos conseguindo exibir os nomes das categorias na tela. Porém, temos que continuar a codificar essa parte. Se observarmos o Figma, temos muitos mais estilos para adicionar ao card. Então, vamos ao VS Code fazer isso!
Organizando o código
Vamos acessar SelecionarIngredientes.vue. Dentro da <li>, por enquanto, estamos imprimindo apenas categoria.nome.

<ul class="categorias">
  <li v-for="categoria in categorias" :key="categoria.nome">
      {{ categoria.nome }}
    </li>
 </ul> 
COPIAR CÓDIGO
Vamos recortar essa parte com o comando "Ctrl + X". Sabendo que ela envolve mais HTML e CSS, e com a intenção de seguir nossos princípios de organização, vamos criar um novo componente para separar este código.

Então, na pasta de "components", vamos criar um novo arquivo chamado CardCategoria.vue . Ele terá um <template> e, dentro deste template, podemos colar o que recortamos anteriormente: categoria.nome.

<template>
  {{ categoria.nome }}
</template> 
COPIAR CÓDIGO
Entretanto, há um problema: não temos mais acesso à variável categoria que foi disponibilizada no arquivo Selecionaringredientes.vue.

Comunicação entre componentes
Esse é um problema clássico de comunicação entre componentes. Vamos passar <CardCategoria /> e perceberemos que CardCategoria foi importado com sucesso no script. Em seguida, vamos usar o atalho "Alt + Shift + F" para formatar o documento.

Precisamos passar a variável categoria para o componente filho CardCategoria. Para isso, no arquivo CardCategoria.vue, criaremos uma <script> e definiremos lang="ts". Depois, escreveremos export default, abriremos o objeto e utilizaremos uma nova opção chamada props:.

<script lang="ts">
export default {
  props:
}
</script>

<template>
   {{ categoria.nome }}
 </template>
COPIAR CÓDIGO
Implementando as Props
O objeto props terá uma propriedade chamada categoria, que será disponibilizada para o nosso template. O valor será do tipo Object, já que a variável é um objeto com propriedades.

<script lang="ts">
export default {
  props: {
      categoria: Object
}
</script>

<template>
   {{ categoria.nome }}
 </template>
COPIAR CÓDIGO
Vamos salvar arquivo e retornar para SelecionarIngredientes.vue, em cardCategoria. Aqui, vamos escrever como se fosse um atributo e pressionar "Ctrl + espaço". Aparecerá :categoria como sugestão, que é a propriedade que criamos no outro arquivo.

Poderíamos escrever categoria= e adicionar algum valor, mas se não utilizarmos os "dois pontos (:)", que é o v-bind, passaríamos um texto estático.

Como queremos passar a variável disponibilizada pelo v-for, precisamos usar o v-bind. Então, inserimos os dois pontos e, entre aspas, escrevemos categoria.

<ul class="categorias">
  <li v-for="categoria in categorias" :key="categoria.nome">
      <CardCategoria :categoria="categoria" />
     </li>
    </ul>
COPIAR CÓDIGO
Com isso, estamos passando o valor da variável categoria para a propriedade categoria à esquerda do sinal de igual. Será que vai funcionar?

Vamos salvar o arquivo e voltar para o navegador, onde acessaremos o projeto. Ele continua funcionando corretamente. Agora, retornaremos ao VS Code, porque o TypeScript está sinalizando que a propriedade categoria é possivelmente indefinida.

Para resolver isso, basta alterar a sintaxe da categoria. Em vez de entregar um objeto simples, especificaremos que seu valor é uma propriedade chamada type.

script lang="ts">
export default {
  props: {
       categoria: { type: Object}
    }
}

// Código omitido. 
COPIAR CÓDIGO
Com essa sintaxe, podemos adicionar outra propriedade a esse objeto chamada required, que significa "requerido" ou "obrigatório". Seu valor será true. Assim, definimos que essa propriedade deve ser passada quando um componente for consumir o CardCategoria.

script lang="ts">
export default {
  props: {
       categoria: { type: Object, required: true}
    }
}

// Código omitido. 
COPIAR CÓDIGO
Dessa forma, estamos instruindo ao TypeScript que, com certeza, a propriedade categoria está definida e o sublinhado em vermelho que sinaliza o problema desaparecerá. Por fim, salvaremos este arquivo.

Agora, vamos retornar ao navegador. Para nos certificarmos de que realmente conseguimos acessar mais propriedades dessa categoria, retornaremos ao arquivo CardCategoria.vue e apertaremos "Enter" logo após categoria.nome.

O próximo passo é abrir a sintaxe de interpolação e escrever categoria.imagem.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
   {{ categoria.nome }}
     {{ categoria.imagem }}
  </template>
COPIAR CÓDIGO
Salvando o arquivo e retornando ao projeto no navegador, é possível conferir que realmente está aparecendo na primeira categoria, por exemplo, "Laticínios e Ovos" seguido dos do nome da imagem laticinios..e..ovos.png.

Portanto, estamos conseguindo acessar com sucesso as informações que estão vindo de outro componente. Isso significa que o componente de CardCategoria.vue, onde estamos reutilizando o código HTML, torna-se mais personalizável.

Significa que podemos passar um valor específico para a propriedade, dependendo de onde vamos utilizar o CardCategoria.vue, tornando-o mais reutilizável. É um recurso bastante útil!

Tipagem e Segurança com TypeScript
Para encerrar o vídeo, observe que quando escrevemos categoria.imagem, não obtivemos o autocomplete. Isso é meio estranho para quem está utilizando TypeScript.

Se escrevermos o nome da propriedade incorretamente, por exemplo, imagemm (a palavra "imagem" com "m" duas vezes), salvarmos o arquivo e abrirmos o navegador, já não vai aparecer. Nós não queremos correr esse tipo de risco.

Para obtermos mais segurança, o que podemos fazer? Na sintaxe da propriedade, em Object, vamos tornar o type mais específico, porque ele está dizendo que aceitamos receber qualquer objeto.

No entanto, para utilizar, por exemplo, a interface e categoria.ts, que já é um modelo que define como o objeto deve ser, podemos escrever Object as PropType. O PropType será importado do pacote vue, conforme a sugestão do VS Code.

script lang="ts">
export default {
  props: {
     categoria: { type: Object as PropType, required: true}
  }
}
</script>

<template>
   {{ categoria.nome }}
     {{ categoria.imagemm }}
  </template>
COPIAR CÓDIGO
Com o PropType importado, vamos passar a generics: <>. Dentro dela, informamos qual é o tipo específico que desejamos: a propriedade categoria. Então, o tipo é justamente o <ICategoria>, que também será importado das interfaces que criamos anteriormente.

script lang="ts">
export default {
  props: {
     categoria: { type: Object as PropType<ICategoria>, required: true}
  }
}
</script>

<template>
   {{ categoria.nome }}
     {{ categoria.imagemm }}
  </template>
COPIAR CÓDIGO
Importamos e um erro foi sinalizado, informando que a propriedade imagemm não existe no tipo ICategoria. Então, vamos corrigir para imagem, salvar o arquivo e voltar ao navegador. Tudo está funcionando perfeitamente.

Agora, para compreendermos um pouco melhor o que fizemos, vamos retornar ao VS Code. O props deriva de property em inglês ou "propriedade" em português. Ele é usado em um contexto bastante específico, onde temos uma propriedade passando de um componente para outro.

O propType foi obtido do pacote vue e é um tipo utilitário fornecido para que seja possível realizar uma conversão mais explícita, já que o tipo Object do Javascript é muito genérico e os tipos do TypeScript são um pouco mais específicos.

Próximos passos
Portanto, já apreendemos como passar a informação de um componente para outro. No próximo vídeo, continuar a codificar o CardCategoria.vue.

Até mais!!

@@03
Preparando o ambiente: pasta de imagens e CSS do CardCategoria

Para o próximo vídeo, faça o download de uma nova pasta imagens.
Também utilizaremos o seguinte código CSS:

.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}


https://caelum-online-public.s3.amazonaws.com/3397-vue/public.zip

@@04
Importando imagens dinamicamente

Criamos uma prop para personalizar o componente de CardCategoria.vue. Até agora, conseguimos passar informações de uma categoria, como o nome e a imagem exibidos na tela. Contudo, precisamos ajustar o card segundo a nossa lista no Figma. Vamos fazer isso no VS Code!
Refinando o Componente CardCategoria.vue:
No VS Code, acessaremos o componente de CardCategoria.vue que está na pasta "components".

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
   {{ categoria.nome }}
     {{ categoria.imagem }}
  </template>
COPIAR CÓDIGO
Dentro do template, vamos apagar o que está escrito e passar article, com a classe "categoria". Dentro dele, teremos um header com a classe categoria__cabecalho. Dentro dele, vamos usar a imagem, que é referenciada pela própria categoria, img.

Essa imagem terá uma classe .categoria__imagem.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          img.categoria__imagem
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Sobre o src, precisamos refletir um pouco. Cada imagem tem seu próprio nome e precisaríamos usar v-bind no src para utilizarmos a informação da categoria, que é uma informação em JavaScript. Mas, para compreendermos a diferença entre usar v-bind no src ou não, vamos, primeiro, importar uma imagem qualquer que está no projeto.

Então, passaremos "../assets/imagens/logo.svg".

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="../assets/imagens/logo.svg" alt=""
            class="categoria__imagem">
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Se fizermos isso, salvarmos o arquivo e voltarmos ao navegador, veremos o logotipo do site impresso 12 vezes.

Agora, vamos observar o que acontece se adicionarmos o v-bind (isto é, :) no src e envolvermos esse mesmo caminho em aspas simples para evitar conflito com as aspas duplas da tag.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img :src="'../assets/imagens/logo.svg'" alt=""
            class="categoria__imagem">
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Integração Dinâmica de Imagens com o Vite
Salvamos o arquivo, retornamos ao navegador, atualizamos a página para não pegarmos as imagens do cache e as imagens desapareceram. Isto mostra que, na verdade, o v-bind não funciona exatamente junto com o src.

Há um processo de compilação do Vite em que ele interpretará de maneira diferente quando usamos uma expressão JavaScript para o src. Assim, não consegue resolver da mesma forma que resolveria ao passar o caminho exato da imagem, depois do processo de compilação do vue, ao pegar o código e mostrar no navegador.

Portanto, vamos usar o comando "Ctrl + Z" para recuperarmos o código anterior e deixaremos o src vazio, como estava antes.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="" alt="" class="categoria__imagem">
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Vamos usar outro recurso fornecido pelo Vite, que nos permite referenciar diretamente a pasta "public" que está na raiz do projeto. Antes, é necessário selecionar uma pasta com várias imagens (já disponível para você baixar) e arrastá-la até a pasta "public".

Agora "public" tem uma pasta "imagens". Dentro da pasta "imagens", existem mais duas pastas: "ícones". Em "ícones", há outra pasta chamada "categorias ingredientes".

É a pasta "categorias ingredientes" que utilizaremos. Ela é composta por 12 imagens PNG com os nomes referenciados pela interface da nossa categoria. Portanto, precisamos encontrar uma forma de referenciar essa pasta "public".

Vamos fechar o explorar o retornar ao src da imagem. Colocaremos um bind no src, :, uma template string (par de crases), que é uma expressão válida do JavaScript, e uma barra, /. O caminho vai ficar absoluto e a barra vai referenciar a pasta "public". A partir dessa pasta, acessaremos "imagens > icones > categorias_ingredientes".

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="`/imagens/icones/categorias_ingredientes/`" alt="" class="categoria__imagem">
        </header>
     </article>
  </template>
COPIAR CÓDIGO
O próximo passo é referenciar uma das imagens, a depender da propriedade que estamos recebendo. Então, utilizaremos as classes de interpolação, adicionando cifrão, $, abrindo chaves, {}, e, por fim, inserindo categoria.imagem.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Será que isso funcionará? Vamos salvar o arquivo, retornar ao navegador E atualizar a página com o atalho "F5". Conseguimos exibir as duas imagens referentes às categorias!

É assim que fazemos uma importação dinâmica de imagens, utilizando o recurso do Vite, que nos permite importar um arquivo diretamente da pasta "public".

Superada essa parte, vamos fechar o explorador e continuar a codificação. Depois de imagem, ainda dentro do header, vamos escrever um h2 com a classe parágrafo-lg e mais uma classe chamada categoria__nome.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome"></h2>
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Nesse h2, vamos inserir uma interpolação com categoria.nome, isto é, {{ categoria.nome }}.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
     </article>
  </template>
COPIAR CÓDIGO
Fora de header e dentro do article, vamos adicionar uma lista para imprimir a lista de ingredientes referentes a essa categoria. A ul terá uma classe chamada categoria__ingredientes. Dentro da ul, teremos mais uma <li> com um v-for.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
        
        <ul class="categoria__ingredientes">
          <li v-for"">
     </article>
  </template>
COPIAR CÓDIGO
No v-for, teremos um ingrediente in categoria.ingredientes, referente à lista presente na categoria.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
        
        <ul class="categoria__ingredientes">
          <li v-for="ingrediente in categoria.ingredientes">
          </ul>
     </article>
  </template>
COPIAR CÓDIGO
Seguindo a boa prática, também vamos adicionar :key="" e fornecer uma chave única para cada li. A chave única será o próprio ingrediente, já que ele é uma string e será um identificador único.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
        
        <ul class="categoria__ingredientes">
          <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
            
         </li>
        </ul>
     </article>
  </template>
COPIAR CÓDIGO
Por fim, dentro da li, podemos usar novamente a interpolação e inserir o ingrediente em si, {{ ingrediente }}.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
        
        <ul class="categoria__ingredientes">
          <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
              {{ ingrediente }}
         </li>
        </ul>
     </article>
  </template>
COPIAR CÓDIGO
Agora, vamos testar! Salvaremos o arquivo e retornaremos ao navegador. O conteúdo está aparecendo corretamente, só falta a estilização.

Voltando ao código, vamos abrir uma tag style, scoped.

script lang="ts">
export default {
  props: {
     categoria: { type: Object, required: true}
  }
}
</script>

<template>
  <article class="categoria">
      <header class="categoria__cabecalho">
          <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
        
         <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>
        
        <ul class="categoria__ingredientes">
          <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
              {{ ingrediente }}
         </li>
        </ul>
     </article>
  </template>
    
    </style scoped>
    
    </style>
COPIAR CÓDIGO
E copiaremos mais uma vez o CSS que já está pronto e colaremos dentro da tag style. Salvaremos o arquivo, retornaremos ao navegador e, agora, os nossos cards de categorias já estão bem estilizados. Está bem legal! Só está faltando a estilização dos próprios ingredientes.

Próximos passos
A partir do próximo vídeo, aprenderemos a reutilizar os estilos que já estamos usando nos ingredientes. Até mais!!

@@05
Reutilizando CSS com componentes

Estamos quase finalizando os cards de categoria, falta apenas estilizarmos os ingredientes.
Reutilizando estilos
Se observarmos o Figma, notaremos que os ingredientes possuem uma estilização muito semelhante, às vezes até igual, aos ingredientes da lista, que já fizemos na parte superior da tela. Então, seria interessante se existisse uma forma de reaproveitar esses estilos.

Você pode pensar: e se usássemos classes CSS globais? Inclusive, já estamos utilizando no nosso projeto para tipografia. Porém, conheceremos uma solução que vai deixar o nosso código um pouco mais legível.

Nessa situação específica, em que temos alguns poucos estilos que queremos reutilizar em um componente que ainda será criado, essa solução será mais adequada, vai permitir que o código seja mais fluido.

Além disso, utilizar os CSS globais nessa situação dificultaria referenciar as classes que estamos criando. Eles acabam não se integrando tão bem com os componentes.

Então, vamos criar um novo componente que reutilizará os estilos. Já sabemos que os componentes reutilizam HTML, CSS e, às vezes, até lógica, portanto, vamos fazer isso agora.

No VS Code, acessaremos a pasta "components" e criaremos um novo componente chamado Tag.vue. Esse nome, inclusive, vem do Figma, por ser exatamente o mesmo nome do componente.

Por enquanto, a Tag.vue terá um <template> com <span>, pois sempre vamos receber um texto. Logo, abriremos uma sintaxe de interpolação e adicionaremos um texto, porque precisamos deixar esse componente personalizado, passando um texto específico.

Vamos voltar ao Figma. Anteriormente, comentamos que os estilos são praticamente os mesmos, só que o texto interno sempre muda. Assim, também vamos criar uma propriedade para personalizar o conteúdo.

Então, vamos criar uma tag <script> com lang="ts". Em seguida, passamos export default, abrimos chaves e escrevemos props, que será um objeto com propriedade texto.

<script lang="ts">
export default {
  props: {
      texto:
    }
}
</script>

<template>
  <span>
      {{ texto }}
    </span>
 </template> 
COPIAR CÓDIGO
No texto, vamos abrir uma sintaxe de objeto para a propriedade e indicar que ela é do tipo String. Essa especificação já é suficiente, não precisaremos da ajuda do TypeScript.

<script lang="ts">
export default {
  props: {
      texto: { type: String }
    }
}
</script>

<template>
  <span>
      {{ texto }}
    </span>
 </template> 
COPIAR CÓDIGO
Seguindo, adicionaremos outra propriedade chamada required, com o valor true, para afirmar que ela é obrigatória. Devemos sempre passá-la se o componente de tag for consumido.

<script lang="ts">
export default {
  props: {
      texto: { type: String, required: true }
    }
}
</script>

<template>
  <span>
      {{ texto }}
    </span>
 </template> 
COPIAR CÓDIGO
Após salvar o arquivo, vamos acessar conteudoPrincipal.vue, que é onde estamos utilizando o ingrediente. Note que a <li> tem uma classe que se chama ingrediente.

<ul v-if="ingredientes.length" class="ingredientes-sua-lista">
  <li v-for="ingrediente in ingredientes" :key="ingrediente"
    class="ingrediente">
      {{ ingrediente}}
    </li>
 </ul>
COPIAR CÓDIGO
Na tag style, em ingrediente que está na linha 64, encontraremos exatamente os estilos que queremos reutilizar para, tornar, por exemplo, o fundo laranja, a cor de fonte branca, e adicionar alguns espaçamentos internos.

.ingrediente 
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
COPIAR CÓDIGO
Vamos selecionar esses estilos com o atalho "Ctrl + X", voltar para a li, retirar apagar a classe. No lugar da interpolação em que inserimos o ingrediente, vamos chamar o componente Tag. Ele não está aparecendo, mas basta apertar "Esc" e "Ctrl + espaço" para ativar o autocompletamento do VS Code.

Feito isso, basta apertar "Ente" na sugestão e fechar a tag.

<ul v-if="ingredientes.length" class="ingredientes-sua-lista">
  <li v-for="ingrediente in ingredientes" :key="ingrediente"
     <Tag />
    </li>
 </ul>
COPIAR CÓDIGO
Também temos que passar a propriedade texto e o texto vai ser o ingrediente em si. Por fim, usaremos o atalho "Alt + shift + F" para formatar o documento e salvaremos o arquivo.

<ul v-if="ingredientes.length" class="ingredientes-sua-lista">
  <li v-for="ingrediente in ingredientes" :key="ingrediente"
     <Tag :texto="ingrediente" />
    </li>
 </ul>
COPIAR CÓDIGO
Será que está funcionando? Vamos testar!

Vamos retornar ao navegador, abrir o projeto e ele continua funcionando da mesma forma que antes, exceto a lista, que não está com as utilizações, porque utilizamos o comando "Ctrl + X" e não inserimos no componente. Vamos resolver isso agora!

Abriremos a Tag.vue, criaremos uma nova tag style scoped, colaremos a classe .ingrediente, que copiamos anteriormente, e precisamos referenciá-la no span. Então, no span, vamos passar class="tag".

O nome escolhido para a classe foi tag, porque ela ficará um pouco mais genérica, o que é apropriado para o componente.

</script>

<template>
  <span class="tag">
      {{ texto }}
     </span>
    </template>

<style scoped> 
.ingrediente 
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
COPIAR CÓDIGO
Quando quisermos utilizar esse componente de tag, nem sempre será para mostrar o ingrediente. Logo, esse nome ficará mais genérico e, para isso, também precisamos mudar o nome da minha classe no style. Portanto, ao invés de ingrediente será tag.

</script>

<template>
  <span class="tag">
      {{ texto }}
     </span>
    </template>

<style scoped> 
.tag {
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
COPIAR CÓDIGO
Agora sim! Salvaremos o arquivo, voltaremos ao navegador e a área em que utilizamos a tag no conteúdo principal já está atualizada e já trouxe os estilos do componente Tag. Podemos reutilizar esse componente nas categorias.

Então, retornaremos ao VS Code e localizaremos o componente CardCategoria.vue. Dentro da tag li, onde estamos exibindo o ingrediente, vamos chamar o componente Tag e passar outra vez o texto="ingrediente".

<ul class="categoria__ingredientes">
          <li v-for"ingrediente in categoria.ingredientes" :key="ingrediente">
           <Tag :texto="ingrediente" />
         </li>
        </lu>
     </article>
  </template>
    
    </style scoped>
    
    </style>
COPIAR CÓDIGO
Próximos passos
O próximo passo é formatar o documento, salvar e retornar ao navegador. Já conseguimos reutilizar os estilos, porém, existe um novo problema: todos os ingredientes estão laranjas. Observando o Figma, notamos que o estado inicial deles começa como cinza.

Esse é um problema que vamos explorar melhor no próximo vídeo e também aprenderemos como resolvê-lo. Até mais!!

@@06
Personalizando estilos

Transcrição

Criamos um componente Tag que encapsula os estilos CSS e reutiliza-os. No entanto, acabamos reutilizando muitos estilos e todas as tags se tornaram laranjas.
Nossa intenção é que somente as tags que estão na parte de cima da tela fiquem laranjas. Abaixo, queremos ter um controle melhor sobre quando aplicar ou não esses estilos.

Inclusive, isso já estava previsto no Figma. Os estilos iniciais são a letra do ingrediente preta e o fundo cinza. Vamos ao VS Code implementar uma solução.

Personalizando os estilos
No VS Code, abriremos o componente Tag.vue. Os estilos referentes à cor branca, ao fundo laranja e ao peso de fonte 700 — quando a tag é laranja, a fonte fica mais forte, bold (negrito) — são os três a seguir:

  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
COPIAR CÓDIGO
Esses são os três estilos que devem ser aplicados apenas se a tag estiver em estado ativo. Isso também está documentado no Figma. Vamos recortar esses três estilos, selecionando-os e apertando o comando "Ctrl + X".

Se salvarmos o arquivo e retornarmos ao navegador, no projeto, tudo estará sem os três estilos removidos. Para ajustar, vamos adicionar novos estilos, que serão os novos padrões.

Vamos definir uma propriedade color, que será a variável --cinza.

</script>

<template>
  <span class="tag">
      {{ texto }}
     </span>
    </template>

<style scoped> 
.tag {
   display: inline-block;
   border-radius: 0.5rem;
   min-width: 4.25rem;
   padding: 0.5rem;
   text-align: center;
   transition: 0.2s;
   color: var(--cinza);
 }
 </style>
COPIAR CÓDIGO
Teremos também um background com a variável --cinza-claro.

</script>

<template>
  <span class="tag">
      {{ texto }}
     </span>
    </template>

<style scoped> 
.tag {
   display: inline-block;
   border-radius: 0.5rem;
   min-width: 4.25rem;
   padding: 0.5rem;
   text-align: center;
   transition: 0.2s;
   color: var(--cinza);
     background: var(--cinza-claro);
 }
 </style>
COPIAR CÓDIGO
E o font-weight será 400, que é o normal.

</script>

<template>
  <span class="tag">
      {{ texto }}
     </span>
    </template>

<style scoped> 
.tag {
   display: inline-block;
   border-radius: 0.5rem;
   min-width: 4.25rem;
   padding: 0.5rem;
   text-align: center;
   transition: 0.2s;
   color: var(--cinza);
     background: var(--cinza-claro);
     font-weight: 400;
 }
 </style>
COPIAR CÓDIGO
Salvando esse arquivo e abrindo o navegador, todas as tags agora estão cinzas e com a fonte em cinza-escuro.

Agora, vamos tentar aplicar os estilos que removemos de maneira condicional. No código, começaremos referenciando .tag e, se ela estiver com uma classe chamada .ativa, então, aplicaremos os estilos que foram retirados anteriormente.

.tag.ativa {
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}
</style>
COPIAR CÓDIGO
Esse seletor não vai fazer nada por si só, porque ainda não definimos como queremos aplicar a classe. Se fôssemos aplicá-la de maneira estática, seria assim: na classe, colocaríamos, por exemplo class="tag ativa". Porém, se fizermos isso, todas as tags ficarão laranjas.

<template>
  <span class="tag ativa">
      {{ texto }}
    </span>
 </template>
COPIAR CÓDIGO
Como podemos aplicar essa classe ativa de maneira condicional? Vamos criar uma propriedade que personaliza a adição ou não dessa classe. Assim como criamos propriedades para personalizar o conteúdo, faremos o mesmo agora, mas, deixaremos o conteúdo do atributo class condicionado.

Então, aparemos ativa, criaremos uma nova propriedade, que também se chamará ativa, e ela receberá um valor booleano. Poderíamos colocar Type e dizer que é Boolean. Sobre o valor padrão, em vez de deixá-lo obrigatório, poderíamos colocar default (que significa padrão) e definí-lo como false.

<script lang="ts">
export default {
  props: {
      texto: { type: String, required: true }
        ativa: { type: Boolean, default }
    }
}
</script
COPIAR CÓDIGO
Há uma peculiaridade quando se trabalha com valores booleanos para propriedades: o padrão já é falso, logo, não precisamos colocar default false. Mesmo assim, é importante saber que ele existe, para utilizá-lo quando necessário.

<script lang="ts">
export default {
  props: {
      texto: { type: String, required: true }
        ativa: { type: Boolean }
    }
}
</script
COPIAR CÓDIGO
A sintaxe ficou mais curta, estamos especificando apenas o tipo da propriedade, então, podemos definir uma sintaxe mais simples, que é apagando o objeto type e deixando apenas Boolean.

<script lang="ts">
export default {
  props: {
      texto: { type: String, required: true },
        ativa: Boolean
    }
}
</script
COPIAR CÓDIGO
Agora que nosso componente pode receber uma propriedade chamada ativa, no span, podemos adicionar outro atributo, class. Porém, nesse caso, ele será usado com v-bind, representado pelos dois pontos :.

A sintaxe que utilizaremos é específica para o atributo class quando usado em conjunto com v-bind: abrir um objeto e designar que uma classe será aplicada de maneira condicional.

Nomearemos esta classe de ativa, que representa uma classe CSS. Se o valor atribuído a ela for true, por exemplo, todas as tags ficarão ativas.

<template> 
  <span class="tag" :class="{ ativa: true }">
      {{ texto }}
    </span>
 </template> 
COPIAR CÓDIGO
Após salvar o arquivo e retornar ao navegador, notaremos que todas as tags ficaram ativas. Ou seja, passando o tipo booleano true para aquele objeto, este passará a aplicar a classe ativa. Caso o valor booleano passado seja false, a classe não é aplicada.

Agora, vamos retornar ao VS Code, localizar o componente que está consumindo a tag, especificar a propriedade "ativa" como true, por exemplo e observar o que acontece.

Para isso, vamos até o ConteudoPrincipal.vue e, na linha 24, onde estamos utilizando a Tag, definiremos ativa como true.

  <ul v-if="ingredientes.length" class="ingredientes-sua-lista"> 
  <1i v-for="ingrediente in ingredientes" :key="ingrediente"> 
    <Tag :texto="ingrediente" :ativa="true" /> 
  </li>
 </ul>
COPIAR CÓDIGO
Ao salvar esse arquivo e retornar ao navegador, apenas a tag no topo da lista ficará laranja, e as demais seguem com o estilo padrão.

Portanto, é possível utilizar props para personalizar os estilos de um componente, dependendo de onde ele está sendo consumido. Isso torna nosso código bastante limpo.

Examinando o código, percebemos que estamos chamando a Tag, especificando seu texto e dizendo se ela está ativa ou não. Isso deixa o código muito mais limpo do que se estivéssemos utilizando classes CSS globais. Esta abordagem está mais integrada com Vue.

Ainda falando sobre o código, quando temos uma prop que é booleana e queremos que o valor dela seja true, como é o nosso caso, podemos simplificar e deixar apenas ativa. O resultado será o mesmo.

Últimos ajustes
Pensando nos últimos ajustes do nosso código, um detalhe é que quando temos uma propriedade booleana e queremos que seu valor serja true, exatamente o nosso caso, podemos simplesmente apagar o =true e tirar o v-bind, deixando apenas ativa.

  <ul v-if="ingredientes.length" class="ingredientes-sua-lista"> 
  <1i v-for="ingrediente in ingredientes" :key="ingrediente"> 
    <Tag :texto="ingrediente" ativa /> 
  </li>
 </ul>
COPIAR CÓDIGO
Podemos salvar o arquivo e tudo continuará funcionando da mesma maneira no navegador.

Agora, voltando ao componente Tag.vue, notamos que a diretiva class poderia ter apenas ativa entre chaves, porque o nome da propriedade é igual ao valor dela.

<template> 
  <span class="tag" :class="{ ativa }">
      {{ texto }}
    </span>
 </template>
COPIAR CÓDIGO
No entanto, há outra sintaxe que pode ser utilizada, em que removemos a diretiva class junto ao v-bind. O próximo passo é inserir v-bind no class que já está sendo usado para adicionar a classe "tag", tornar seu valor uma lista e manter o tag como uma string estática. Por fim, adicionaremos um novo item, que será o objeto ativa.

<template> 
  <span class="['tag', { ativa }]">
      {{ texto }}
    </span>
 </template>
COPIAR CÓDIGO
O vue também permite essa sintaxe, onde passamos uma lista de classes. Quando é um texto estático, ele será aplicado, e quando é um objeto, terá a mesma lógica de adicionar a classe se o valor booleano passado for true.

Ao salvar o arquivo e retornar ao navegador, o resultado continua o mesmo. Para garantir, recarregaremos a página com o comando "F5". tudo continua funcionando conforme o esperado.

Próximos passos
Na próxima aula, aprenderemos como adicionar comportamento para os ingredinetes que estão na parte inferior, uma vez que até agora só trabalhamos com a parte estática e os estilos.

Também deixarei um desafio para você!

Desafio: componentizar esta parte da sua lista. Acredito que você já adquiriu os conhecimentos necessários para implementar isso, certo?
No próximo vídeo, já terei implementado este desafio no meu projeto. Então, aguardo você lá!

@@07
Mão na massa: criando componente SuaLista

Atualmente, dentro do componente ConteudoPrincipal, temos o seguinte código no script e no template:
<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import Tag from './Tag.vue';

export default {
  data() {
    return {
      ingredientes: ['Alho', 'Manteiga', 'Orégano']
    };
  },
  components: { SelecionarIngredientes, Tag }
}
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto">
        Sua lista:
      </span>

      <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
        <li v-for="ingrediente in ingredientes" :key="ingrediente">
          <Tag :texto="ingrediente" ativa />
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
COPIAR CÓDIGO
Note que a seção de SelecionarIngredientes já está componentizada, mas a seção da “Sua lista” não está.

Essa seção parece ser um ótimo bloco de código para ser componentizado. Até agora viemos referenciando essa parte do projeto como ”Sua lista”, o que indica que essa seção até já possui um nome pelo qual pode ser chamada, o que é um bom indicativo para a criação de um componente.

Dessa forma, crie um componente chamado SuaLista que encapsula essa <section>. Isso trará algumas vantagens:

Se essa seção estiver em um componente próprio, ficará até mais fácil de localizar seu arquivo pelo nome SuaLista, se um dia quisermos modificar o código dessa seção;
As lógicas referentes à lista ficam encapsuladas, como por exemplo o controle de exibição da própria lista com as diretivas v-if e v-else. Encapsular código significa agrupar lógicas que fazem sentido de estarem juntas e deixá-las em um arquivo separado (no nosso caso, um componente). Assim, o componente abstrai toda a lógica referente a essa seção, “escondendo” dos outros componentes a sua complexidade, o que nos leva à próxima vantagem;
O código do componente ConteudoPrincipal ficará mais simples e legível. Ele terá apenas a responsabilidade de exibir os componentes SuaLista e SelecionarIngredientes, e talvez fornecer informações relevantes para eles (por meio de props).
Um ponto de atenção: mantenha o estado ingredientes no componente ConteudoPrincipal e passe essa informação como prop para a SuaLista. Isso porque, já olhando para o futuro da aplicação, esse estado também precisará ser acessado pelo SelecionarIngredientes. Assim, os ingredientes precisam ficar em um componente que seja um pai comum ao SuaLista e ao SelecionarIngredientes. Lembre-se de usar o TypeScript para fornecer uma boa tipagem para a prop!

Boa prática!

Você também pode conferir as mudanças nesse commit do GitHub.
Dentro da pasta de componentes, crie um arquivo SuaLista.vue com o código abaixo:

<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },
}
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">
      Sua lista:
    </span>

    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <Tag :texto="ingrediente" ativa />
      </li>
    </ul>

    <p v-else class="paragrafo lista-vazia">
      <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style scoped>
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

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>
COPIAR CÓDIGO
É o mesmo template e CSS referentes à seção da “Sua Lista”, que estavam em ConteudoPrincipal, mas também criamos uma prop chamada ingredientes. Note a tipagem Array as PropType<string[]> para essa prop: usamos a classe Array do JavaScript para especificar que é um array, mas usamos o tipo utilitário PropType<string[]> para especificar o tipo de dado carregado por esse array.

Agora, em ConteudoPrincipal, modifique o código para chamar a SuaLista, passando o estado ingredientes para a prop ingredientes. O script e o template ficarão assim:

<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

export default {
  data() {
    return {
      ingredientes: ['Alho', 'Manteiga', 'Orégano']
    };
  },
  components: { SelecionarIngredientes, SuaLista }
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <SelecionarIngredientes />
  </main>
</template>
COPIAR CÓDIGO
Com isso, você componentizou a SuaLista, organizando melhor o projeto e facilitando sua manutenção!

https://github.com/alura-cursos/cookin-up/commit/d906db6274aae19a41769b9d88b1048394aed92b

@@08
Personalizando cards

Suponha que você está trabalhando em um projeto Vue que lista os filmes favoritos da pessoa usuária. Você decidiu criar um componente CardFilme para exibir as informações de um filme. Porém, você aprendeu que, para que um mesmo componente possa ser personalizado com diferentes informações, ele deve receber props.
Para isso, você começou criando a opção props dentro do <script> do componente, que por enquanto é apenas um objeto vazio:

<script lang="ts">
export default {
  props: {
    
  },
}
</script>
COPIAR CÓDIGO
Quais próximas ações você deve realizar para criar uma prop que recebe as informações de um filme?

Adicionar uma propriedade no objeto props para criar uma nova prop, que pode se chamar filme, por exemplo. O valor da propriedade filme pode ser um objeto que irá configurar a prop, como o seu tipo esperado.
 
Essa é uma das sintaxes corretas para definir uma prop em um componente. Você pode explorar variações dessa sintaxe na documentação.
Alternativa correta
Criar a seguinte interface para tipar a prop:
    export default interface IFilme {
      nome: number;
        dataLancamento: Date;
      avaliacao: number;
    }
 
Alternativa correta
Utilizar o tipo utilitário PropType do Vue para fornecer uma rigidez maior ao tipo da prop.
 
O PropType recebe como generics um tipo do TypeScript, que pode ser utilizado para especificar melhor o tipo da prop. Exemplo de uso no objeto da prop, utilizando uma interface: type: Object as PropType<IFilme>.
Alternativa correta
Informar que a prop não é obrigatória.

@@09
Faça como eu fiz: personalizando conteúdo e estilos

Agora é a sua vez de colocar a mão na massa! Crie um componente CardCategoria e personalize as informações de cada card, utilizando props. Além disso, crie um componente Tag para reutilizar o visual das Tags de ingredientes e utilize props para personalizar seus estilos também.

No componente SelecionarIngredientes, altere a <ul> de categorias para utilizar o componente CardCategoria, o qual ainda vamos criar:
<ul class="categorias">
  <li v-for="categoria in categorias" :key="categoria.nome">
    <CardCategoria :categoria="categoria" />
  </li>
</ul>
COPIAR CÓDIGO
Agora, na pasta de componentes, crie um arquivo CardCategoria.vue com o seguinte código:

<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

export default {
  props: {
    categoria: { type: Object as PropType<ICategoria>, required: true }
  }
}
</script>

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" :alt="`Ícone de ${categoria.nome}`" class="categoria__imagem">

      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        {{ ingrediente }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
COPIAR CÓDIGO
Com isso, cada card já consegue ser personalizado de acordo com a prop categoria. Mas ainda falta criarmos um componente Tag para reaproveitar os estilos dos ingredientes.

Para isso, crie um componente Tag.vue com o código:

<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
    ativa: Boolean
  }
}
</script>

<template>
  <span :class="['tag', { ativa }]">
    {{ texto }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
    transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}

.tag.ativa {
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}
</style>
COPIAR CÓDIGO
Em seguida, no componente SuaLista, use esse componente na <ul> de ingredientes, passando a prop ativa:

<ul v-if="ingredientes.length" class="ingredientes-sua-lista">
  <li v-for="ingrediente in ingredientes" :key="ingrediente">
    <Tag :texto="ingrediente" ativa />
  </li>
</ul>
COPIAR CÓDIGO
E agora, no CardCategoria, você também pode utilizá-lo na <ul> de ingredientes:

<ul class="categoria__ingredientes">
  <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
    <Tag :texto="ingrediente" />
  </li>
</ul>
COPIAR CÓDIGO
Dessa forma, reutilizamos a estrutura HTML e código CSS da Tag, além de poder personalizar seus estilos com a prop ativa!

@@10
O que aprendemos?

Nessa aula, você aprendeu a:
Personalizar as informações dos cards de categorias com props:
Utilizamos a opção props de um componente para receber informações do componente pai;
É possível tipar essa prop com classes do JavaScript, como String, Number, Array, Object, etc;
É possível deixar seu tipo mais rígido com o tipo utilitário PropType;
Importar imagens dinamicamente utilizando caminhos absolutos:
Ao utilizar o v-bind no src de uma imagem, não conseguimos mais utilizar caminhos relativos. Assim, podemos utilizar caminhos absolutos, iniciando com uma barra (/), e assim iremos referenciar a pasta public;
Utilizar props para personalizar estilos de um componente:
Criamos uma prop booleana ativa e a utilizamos em conjunto com uma sintaxe especial que o Vue fornece quando utilizamos o atributo class com o v-bind:
:class="{ 'nome-da-classe': valorBooleano }";
Uma variação dessa sintaxe é passar uma lista:
:class="['classe-estatica', { 'classe-dinamica': valorBooleano }]".

#### 21/02/2024

@04-Emitindo eventos

@@01
Projeto da aula anterior

Caso deseje, você pode baixar o projeto da aula anterior ou visualizar os arquivos no GitHub.
Bons estudos!

https://github.com/alura-cursos/cookin-up/archive/refs/heads/aula-3.zip

https://github.com/alura-cursos/cookin-up/tree/aula-3

@@02
Controlando visual com estado

Já conseguimos personalizar o estilo da tag dependendo de onde ela é utilizada. O projeto está aberto no navegador e percebemos o uso da cor cinza na parte de seleção de ingredientes, enquanto a parte da lista, no topo, permanece laranja.
Além disso, já implementamos o desafio que propusemos para você no código: a componentização da parte da lista. E agora, qual o próximo passo?

Ao consultar o Figma, identificamos que ainda falta implementar a funcionalidade dos ingredientes que estão na parte dos cartões de categoria.

Qual é a funcionalidade esperada? Quando um ingrediente que não está selecionado for clicado, ele deve ficar selecionado, exibir a cor laranja e ser adicionado à nossa lista. Conforme clicamos em cada ingrediente, eles vão sendo adicionados. E se clicarmos em um ingrediente que já está na lista, ele deve ser removido e voltar à cor cinza.

Implementando a Seleção de Ingredientes
Vamos quebrar esse problema em duas partes. A primeira delas será mudar a cor dos ingredientes quando clicarmos neles. Portanto, ao clicar, ele deve mudar para laranja e ao clicar novamente, deve retornar à sua cor original, o cinza.

Vamos analisar no código como podemos alcançar essa solução. No VS Code, no explorador lateral, vamos para o local onde a tag do ingrediente está sendo utilizada: no componente de cartão de categoria (CardCategoria.vue).

Em seu interior, temos um comando <ul> que repete várias <li> e cada <li> chama um componente de tag. Para ter aquela dinâmica de clicar em um desses ingredientes e mudar o visual, precisaremos criar um estado.

Sempre que há uma mudança dinâmica na tela de acordo com alguma ação, isso sugere potencialmente a criação de um estado, certo? Além disso, vamos precisar de um estado para cada ingrediente, mostrando se está selecionado ou não. Por exemplo, poderíamos nomear esse estado como "selecionado".

Para fazer isso, precisaremos criar um novo arquivo de componente. Não podemos criar um estado dentro do comando <li>, por exemplo, porque esse estado depende de cada um dos ingredientes.

No VS Code, vemos que já estamos utilizando a tag para criar os ingredientes. Então, criaremos um novo componente que se baseia nessa tag. Vamos cortar com "Ctrl+X" a linha dessa tag localizada no <template>, vista abaixo.

<template>
  // Código omitido
        <Tag :texto="ingrediente" />
  // Código omitido
</template>
COPIAR CÓDIGO
Pelo explorador lateral, criaremos um novo componente na pasta "components", chamado IngredienteSelecionavel.vue. Ao criar esse arquivo, nos preocupamos em dar um nome bem semântico, porque trataremos de ingredientes selecionáveis.

Em seu interior, escreveremos um template e colaremos com "Ctrl+V" a tag que cortamos antes. Precisamos importar essa tag. Portanto, criaremos uma tag script no início do arquivo, com lang igual a ts.

<script lang="ts">

</script>

<template>
    <Tag: texto="ingrediente" />
</template>
COPIAR CÓDIGO
Vamos clicar no componente Tag, usar o atalho "Ctrl+Espaço" e pressionar "Enter" na opção "TagVue". Notaremos que ele importou dentro do script, mas não completou a parte do export default {}, então escreveremos isso manualmente.

<script lang="ts">
import Tag from './Tag.vue';

export default {

}
</script>

<template>
    <Tag: texto="ingrediente" />
</template>
COPIAR CÓDIGO
Vamos tentar mais uma vez conseguir um auxílio do VS Code. Pressionaremos "Ctrl+Espaço" em Tag mais uma vez, aceitaremos a sugestão "TagVue" do VS Code e conseguiremos adicionar manualmente a estrutura do export default {}. Por fim, excluiremos a linha import Tag from './Tag.vue' duplicada.

O resultado se encontra abaixo.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag }
}
</script>

<template>
    <Tag: texto="ingrediente" />
</template>
COPIAR CÓDIGO
Ele também precisa ter acesso ao ingrediente. Para isso, precisamos criar uma prop, para passar a informação de ingrediente publicada pelo v-for em CardCategoria e receber aqui pelo IngredienteSelecionavel.

Vamos adicionar uma nova função chamada props, que será um objeto, abaixo de components. Entre suas chaves, escreveremos uma propriedade chamada ingrediente, abriremos um objeto para o valor dela, dentro do qual definimos o tipo String (com S maiúsculo) e diremos que é required (ou seja, obrigatório). Portanto, required com o valor true.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    }
}
</script>

<template>
    <Tag: texto="ingrediente" />
</template>
COPIAR CÓDIGO
Perfeito. Os erros desapareceram. Formataremos o arquivo com "Ctrl+Shift+F" e o salvaremos.

Em CardCategoria, buscaremos a <li> do ingrediente, na qual removemos a linha <Tag: texto="ingrediente" />. Em seu interior, chamaremos o IngredienteSelecionavel como uma tag única — ou seja, fechada em si mesma.

Precisamos passar a prop, então, faremos "Ctrl+Espaço" antes do fechamento da tag e passaremos o :ingrediente="ingrediente".

<template>
  <article class="categoria">
    // Código omitido

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel :ingrediente="ingrediente" />
      </li>
    </ul>
  </article>
</template>
COPIAR CÓDIGO
O código já deve estar funcionando como antes. Vamos salvar o arquivo, voltar ao navegador e ver o projeto. Parece que não há nenhum problema.

Agora temos a infraestrutura correta para criarmos um estado para esse IngredienteSelecionavel, que dirá se a tag está selecionada ou não.

Voltando ao IngredienteSelecionavel.vue abaixo do objeto props, adicionaremos a opção data() com um bloco de chaves. Entre essas chaves, retornamos um objeto onde cada propriedade será um estado.

Chamaremos o estado de selecionado. Diremos que seu valor inicial será false, pois na parte inferior dos cartões de categorias, cada ingrediente começa como não selecionado. É só depois que vamos alterar seu valor.

E aí está a jogada. Descendo o código até a tag do template, à direita de :texto="ingrediente", colocaremos a prop de ativa (ou seja, :ativa) com o valor do estado selecionado entre aspas duplas.

É interessante que possamos definir o valor de uma prop a partir de um estado. Isso significa que, se o estado selecionado mudar de false para true, a prop ficará ativa e a tag terá o visual de ativa.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <Tag: texto="ingrediente" :ativa="selecionado" />
</template>
COPIAR CÓDIGO
Para finalizar alguns detalhes deste componente, colocaremos um botão ao redor dessa tag por meio de um <button>. Faz sentido semanticamente que seja um botão.

Para testarmos se essa prop vai mudar de visual, precisamos ser capazes de testar esse botão. Teclaremos "Enter" duas vezes à esquerda do sinal de maior no final da tag de abertura desse <button> e adicionaremos uma class (classe) de ingrediente nele.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>
COPIAR CÓDIGO
Abaixo dessa classe, implementaremos uma nova sintaxe, que será v-on:click. Esta é uma diretiva do Vue que permite escutar eventos do DOM. Queremos escutar o evento click nesse botão e executar algo quando esse evento for disparado.

À direita de "click", adicionaremos um = e abrir aspas duplas, entre as quais podemos colocar alguma instrução do JavaScript.

A instrução que queremos fazer é que o estado selecionado receba o inverso dele. Portanto, se estiver false, muda para true e vice-versa. Então, selecionado receberá !selecionado.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
        v-on:click="selecionado = !selecionado"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>
COPIAR CÓDIGO
Vamos testar isso. Salvaremos esse arquivo e voltaremos ao navegador. Se clicarmos em "Farinha de trigo", a cor de preenchimento deste ingrediente muda sua cor de cinza para laranja.

Já conseguimos adicionar um comportamento dinâmico a esses ingredientes dos cartões de categorias. Isso não afetou os ingredientes que estão na nossa lista, porque se trata de um componente separado.

Voltando ao código, precisamoso fazer alguns ajustes finais. Abaixo de <template> adicionaremos um estilo com a tag <style scoped>. Entre sua abertura e seu fechamento, adicionaremos a classe .ingrediente com um par de chaves.

Entre estas, colocaremos também o cursor: pointer.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
        v-on:click="selecionado = !selecionado"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
COPIAR CÓDIGO
Salvaremos o arquivo e voltaremos ao navegador. Veremos que o cursor se transforma em uma "mãozinha" quando passamos sobre algum ingrediente na aplicação. Então, já está funcionando.

Há apenas mais um recurso no VSCode que devemos adicionar, relacionado à acessibilidade. Dentro do <template>, abaixo do v-on, vamos inserir :aria-pressed, e definir o estado como "selecionado".

Isso é uma boa prática do HTML: um atributo que nós inserimos em botões para indicar visualmente se estão selecionados ou não, que é o significado de pressed (pressionado).

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
        v-on:click="selecionado = !selecionado"
        :aria-pressed="selecionado"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
COPIAR CÓDIGO
Dessa forma, concluímos o conteúdo do componente.

É interessante ver essa estratégia de criar um novo componente a partir de um que já existia, que era o Tag. Dessa forma, conseguimos personalizar ainda mais o HTML. Adicionamos um botão na Tag, inserimos um novo estilo CSS, o cursor: pointer, e mais importante, adicionamos a lógica para selecionar ou não esse ingrediente.

Para finalizar: a diretivav-on, que permite escutar eventos do DOM, é muito comum. Logo, existe um atalho para essa sintaxe de v-on:. Nós podemos substituí-la por um arroba (@).

Isso torna o código @click, mantendo a instrução que já tínhamos escrito.

<script lang="ts">
    // Código omitido
</script>

<template>
    <button
        class="ingrediente"
        @click="selecionado = !selecionado"
        :aria-pressed="selecionado"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
COPIAR CÓDIGO
Após salvar esse arquivo e voltar ao navegador, vamos conferir se tudo está funcionando como antes. Vamos clicar nos ingredientes, e eles serão selecionados. Ao clicar novamente, eles serão desselecionados.

Resolvemos a primeira parte do problema. No próximo vídeo, vamos implementar a adição ou remoção desses ingredientes na lista, de acordo com a seleção ou não deles. Te esperamos lá.

https://www.figma.com/file/0YlJl7HQ7flDoEZZ8tB88A/Cookin'UP-%7C-Vue-1?node-id=1901%3A2&mode=dev

@@03
Adicionando ingredientes na lista

Temos um novo componente chamado IngredienteSelecionavel, utilizado para os cartões. Ele encapsula a lógica de selecionar e desselecionar quando clicamos nele. Isso já está funcionando, mas ainda falta a parte de adicionar ou remover esse ingrediente na lista, dependendo de qual ingrediente estamos clicando.
Implementando a Comunicação entre Componentes
Vamos dar uma olhada em como podemos implementar isso no VS Code. Ao abri-lo, vamos acessar o arquivo do componente ConteudoPrincipal, que é onde a lista de ingredientes reside, dentro do data().

Agora, nós sabemos que é um estado. Portanto, se conseguirmos adicionar um ingrediente nesta lista, ele será renderizado na tela apropriadamente.

Mas, de onde vai partir essa mudança? Será do nosso IngredienteSelecionavel, o componente que criamos no vídeo anterior. Vamos acessá-lo.

Mas existe todo um caminho para essa comunicação acontecer. Queremos que o IngredienteSelecionavel altere o estado de um componente que é seu pai. Se olharmos o caminho feito no <template> de ConteudoPrincipal.vue, ele vai consumir SelecionarIngredientes.

Vamos abrir também uma guia com esse arquivo SelecionarIngredientes.vue. Esse componente consome o CardCategoria, portanto, vamos abrir uma guia com este também.

Por fim, o CardCategoria consome o IngredienteSelecionavel que já está aberto. Depois disso, vamos fechar o explorador e verificar que temos quatro guias abertas:

ConteudoPrincipal.vue
SelecionarIngredientes.vue
CardCategoria.vue
IngredienteSelecionavel.vue
Esse é o caminho a ser feito para a comunicação. Já vimos que as Props são uma forma de passar informações do componente pai para o filho, inclusive conseguimos passar estados por meio delas. Este é o meio padrão de comunicação nos Frameworks front-end.

Mas, o que acontece com o componente filho que quer alterar o estado de um componente pai? No nosso caso, será de um componente bem ancestral, na verdade, será o pai do pai do seu pai.

Para fazer isso, vamos acessar o arquivo IngredienteSelecionavel.vue e implementar o código para entender melhor.

Queremos que a mudança desse estado aconteça quando clicarmos no botão do IngredienteSelecionavel. Então, vamos ter que adicionar mais algumas instruções dentro do @click, criado anteriormente.

Para organizar o código, vamos criar um método separado, dentro do objeto export default. Abaixo das chaves do data(), adicionaremos a opção methods. Esta é um objeto, dentro do qual vamos chamar a função aoClicar(), em CamelCase (ou seja, com o "C" maiúsculo), e um bloco de chaves.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
        
        }
    }
}
</script>

// Código omitido
COPIAR CÓDIGO
Em seguida, vamos recortar o código selecionado = !selecionado (selecionado recebe o inverso de selecionado) que havíamos escrito no @click.

selecionado = !selecionado
COPIAR CÓDIGO
No lugar dessa instrução, escreveremos aoClicar(). Aqui, podemos passar os parênteses ou não. Podemos passar uma instrução, mas o Vue também aceita passarmos uma função de callback sem os parênteses. Vamos deixá-los sem parênteses porque torna o código mais sucinto.

Vamos colar o código copiado entre as chaves de aoClicar(), dentro da função methods. Precisaremos fazer um ajuste nele, pois, quando estamos no <script>, precisamos adicionar this antes da informação para referenciar dados do próprio script. Então ficará: this.selecionado = !this.selecionado.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
        @click="aoClicar"
        :aria-pressed="selecionado"
    >
        <Tag: texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
COPIAR CÓDIGO
Salvaremos o arquivo, voltaremos ao navegador e veremos que continua funcionando perfeitamente. Voltaremos no código, vamos implementar a passagem da informação para o componente pai.

Para fazer isso, vamos escrever if(this.selecionado) e um bloco de chaves em aoClicar(), abaixo da linha this.selecionado = !this.selecionado. Com isso, queremos emitir um evento ao clicar no botão e selecionar o ingrediente. Entre as chaves escreveremos this.$emit(). Vamos utilizar essa função especial disponibilizada pelo componente.

Entre os seus parênteses, vamos passar uma string entre aspas simples, chamada adicionarIngrediente, e o segundo parâmetro será o dado que este evento pode carregar. Então, escreveremos this.ingrediente, que já é uma informação disponível pela prop.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado
            
            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            }
        }
    }
}
</script>

// Código omitido
COPIAR CÓDIGO
Vamos entender melhor esse código?

Com essa sintaxe, estamos emitindo um evento personalizado. Ele funciona de uma maneira bastante similar aos eventos do DOM, como um evento de clique, por exemplo, mas este é um evento ao qual atribuímos um nome personalizado. Ele vai se chamar adicionarIngrediente e poderemos escutar esse evento do componente pai que está consumindo o ingrediente selecionado. Veremos como isso acontece em breve.

O segundo parâmetro this.ingrediente é o dado que o evento pode carregar. Ele pode carregar praticamente qualquer tipo de dado do JavaScript — neste caso, estamos passando o próprio ingrediente, que é uma string. Agora, teremos que capturar esse dado de alguma forma no componente que está consumindo este evento.

Salvaremos o arquivo e antes de dispararmos o evento no outro componente, vamos implementar uma boa prática ao utilizar eventos personalizados no Vue. Faremos isso adicionando mais uma opção ao export default, abaixo das chaves de methods.

Ela se chama emits e recebe uma lista declarando os eventos personalizados que este componente é capaz de emitir. Dentro dessa lista, vamos incluir uma string com o nome adicionarIngrediente.

É uma boa prática fazer uma cópia do nome com 'Ctrl+C" e colar com "Ctrl+V" para garantir a consistência. Ao fazer isso, temos uma grande ajuda do TypeScript. Se tentarmos usar o this.$emit passando o nome de um evento não previsto, ele apontará erros, com linhas vermelhas aparecendo, o que é muito útil para prevenir erros.

<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado
            
            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente']
}
</script>

// Código omitido
COPIAR CÓDIGO
Salvaremos esse arquivo também e vamos acessar o componente CardCategoria que está consumindo, o qual deixamos aberto em outra aba. Dentro da <li> do seu <template>, ele está chamando IngredienteSelecionavel. Então, o que faremos?

Vamos pressionar "Enter" para separar a tag <IngredienteSelecionavel /> para que fique com a formatação abaixo.

    <IngredienteSelecionavel
        :ingrediente="ingrediente"
        
    />
COPIAR CÓDIGO
Na linha vazia abaixo de :ingrediente="ingrediente", adicionaremos um @adicionar. Com isso, o nome do evento @adicionar-ingrediente que emitimos no componente filho está aparecendo na lista de sugestões.

Vamos pressionar "Enter" para adicionar essa sugestão do VS Code. Observaremos que essa referência usa aquela sintaxe que já vimos anteriormente, equivalente ao v-on:. Ou seja, essa sintaxe para escutar um evento serve não apenas para eventos do DOM, mas também para eventos personalizados que criamos.

    <IngredienteSelecionavel
        :ingrediente="ingrediente"
        @adicionar-ingrediente=""
    />
COPIAR CÓDIGO
Dentro das aspas duplas, adicionaremos a ação desejada. Como ainda precisamos alterar o estado de ConteudoPrincipal e incluir mais alguns ingredientes, vamos reemitir esse evento. A maneira de fazer isso é escrevendo $emit(). No caso do <template>, não precisamos colocar o this., podemos ir diretamente para $emit. Entre os parênteses, vamos reemitir um evento chamado adicionarIngrediente entre aspas simples, mais uma vez.

O segundo parâmetro tem que ser o ingrediente que vem junto com o evento emitido pelo componente filho. Para acessar esses dados de evento podemos utilizar outra sintaxe: $event. Essa é uma das formas de acessar o dado. Esse $event é o ingrediente que está sendo carregado pelo evento.

// Código omitido

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel
            :ingrediente="ingrediente"
            @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
        />
      </li>
    </ul>
  </article>
</template>

// Código omitido
COPIAR CÓDIGO
Por fim, com boa prática, vamos acessar o <script> na linha abaixo de components e colocar um emits passando um arranjo com o nome adicionarIngrediente entre aspas simples. Com isso, teremos a sugestão do VS Code no arquivo de selecionar ingredientes.

<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import Tag from './Tag.vue';
import IngredienteSelecionavel from './IngredienteSelecionavel.vue';

export default {
  props: {
    categoria: { type: Object as PropType<ICategoria>, required: true }
  },
  components: { Tag, IngredienteSelecionavel },
  emits: ['adicionarIngrediente']
}
</script>

// Código omitido
COPIAR CÓDIGO
Só falta escutarmos esse evento em SelecionarIngredientes. Após salvar o arquivo atual, acessaremos o SelecionarIngredientes.vue, no qual vamos fazer o mesmo processo.

Vamos formatar a tag CardCategoria e colocar @adicionar-ingrediente abaixo da linha :categoria="categoria".

Precisaremos reemitir mais uma vez. Em breve falaremos um pouco sobre esse problema de repetição de código, mas nós temos que fazer isso por enquanto. O @adicionar-ingrediente receberá $emit(), em cujos parênteses passaremos novamente adicionarIngrediente entre aspas simples, e usaremos $event para repassar o ingrediente que está vindo pelo evento.

// Código omitido
<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria
          :categoria="categoria"
          @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
        />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <BotaoPrincipal texto="Buscar receitas!" />
  </section>
</template>
COPIAR CÓDIGO
No export default, abaixo da linha components vamos colocar um emits mais uma vez e passar o arranjo com adicionar ingrediente entre aspas simples.

<script lang="ts">
// Código omitido

export default {
  data() {
    return {
      categorias: [] as ICategoria[]
    };
  },
  async created() {
    this.categorias = await obterCategorias();
  },
  components: { CardCategoria },
  emits: ['adicionarIngrediente']
}
</script>

// Código omitido
COPIAR CÓDIGO
Finalmente, salvaremos esse arquivo e iremos para o arquivo ConteudoPrincipal.vue, no qual está de fato o estado de ingredientes. Descendo até a tag <SelecionarIngredientes> dentro do <template> adicionaremos o @adicionar-ingrediente.

Desta vez, não vamos reemitir, pois tudo o que queremos fazer é modificar o estado de ingredientes. Para isso, adicionaremos mais um.

Portanto, @adicionar-ingrediente receberá ingredientes.push(), o método JavaScript para adicionar um item na lista. Entre os parênteses, vamos colocar o $event, que teoricamente é o mesmo ingrediente que está vindo do componente mais baixo.

// Código omitido

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <SelecionarIngredientes
      @adicionar-ingrediente="ingredientes.push($event)"
    />
  </main>
</template>

// Código omitido
COPIAR CÓDIGO
Vamos verificar se essa conexão inteira vai funcionar. Salvaremos o arquivo e retornaremos ao navegador. Ao clicar em "ovos" ele aparecerá na nossa lista e será colorido de laranja. Podemos constatar que a comunicação funcionou mesmo. Se clicarmos em "queijo", "leite" ou "manteiga", tudo está sendo adicionado corretamente.

Retornando ao VS Code, vamos fazer um ajuste. Queremos que a lista de ingredientes comece vazia, pois isso é o que o Figma nos orienta a fazer.

No export default, esvaziaremos a lista de ingredientes.

export default {
  data() {
    return {
      ingredientes: []
    };
  },
  // Código omitido
}
COPIAR CÓDIGO
Com isso, está aparecendo uma linha vermelha no $event de ingredientes.push($event), indicando que não é possível adicionar ingredientes. Isso só está acontecendo porque precisamos tipar o estado, pois agora é uma lista vazia e o JavaScript não pode inferir os dados que essa lista irá receber.

Portanto, escreveremos as string[] após o arranjo vazio.

export default {
  data() {
    return {
      ingredientes: [] as string[]
    };
  },
  // Código omitido
}
COPIAR CÓDIGO
Salvaremos o arquivo. Ainda há mais uma alteração que quero fazer neste componente: adicionar um methods abaixo de components, com uma função chamada adicionarIngrediente entre suas chaves. Para melhor organizar essa parte de adição, abriremos um bloco de parênteses e chaves.

Em seguida, recortaremos o ingredientes.push($event) com um "Ctrl+X". Em seu lugar, invocaremos o método adicionarIngrediente, ainda entre aspas duplas.

// Código omitido

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <SelecionarIngredientes
      @adicionar-ingrediente="adicionarIngrediente"
    />
  </main>
</template>

// Código omitido
COPIAR CÓDIGO
Dentro das chaves desse método, no export default, colaremos com "Ctrl+V" o código recortado. Contudo, em vez de ingredientes, teremos this.ingredientes, e em vez de passar $event entre parênteses, vamos deletá-lo.

Quando estamos utilizando uma função no methods, podemos obter o dado do evento por meio dos parâmetros. Portanto, adicionaremos um parâmetro entre os parênteses de adicionarIngrediente() nomeando-o como ingrediente para tornar o código mais legível. Vamos declarar que ingrediente é uma string.

Em seguida, vamos colocar essa string ingrediente entre os parênteses do push().

export default {
  data() {
    return {
      ingredientes: [] as string[]
    };
  },
  components: { SelecionarIngredientes, Tag, SuaLista },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
  }
}
COPIAR CÓDIGO
Isso deve fazer com que a função funcione da mesma forma. Após salvar o arquivo e retornar ao navegador, atualizaremos a página para garantir. Agora, a lista se inicia vazia e, quando algum ingrediente é clicado, ele é adicionado com sucesso.

Repetição de Códigos
Sobre a repetição de códigos no VS Code, como, por exemplo, ficar reemitindo o evento, de fato existe uma solução que resolve este problema. No entanto, isso está um pouco fora do escopo do nosso curso, porque já começa a adentrar na esfera de gerenciamento de estado global. Você terá a oportunidade de explorar essa questão em cursos futuros, tudo bem?

Desafios
Voltando para o nosso projeto, conseguimos implementar a adição do ingrediente quando clicamos nele. No entanto, se clicarmos em um ingrediente que já selecionamos, ele não é removido da lista. Deixaremos essa implementação como desafio para você, que já possui os conhecimentos necessários para realizar essa tarefa.

Além disso, desafiamos você a finalizar a página. Se observarmos o Figma, precisamos implementar a parte de buscar as receitas e também de incluir o rodapé. Basta criar alguns componentes para isso.

Em seguida, com esses desafios implementados no código, iniciaremos nosso aprendizado sobre como transitar desta primeira tela para a segunda. Será um conteúdo muito interessante, então aguardamos você lá.

@@04
Mão na massa: removendo ingrediente

Seu desafio agora é finalizar a funcionalidade dos ingredientes selecionáveis! Já implementamos a adição de um ingrediente selecionado na SuaLista com ajuda dos eventos personalizados.
Usando a mesma estratégia, escreva um código que cumpra os requisitos a seguir:

Quando um ingrediente já selecionado for clicado novamente, emita um evento personalizado chamado 'removerIngrediente', que deve chegar até a SuaLista;
Na SuaLista, escute esse evento e remova o ingrediente do estado ingredientes.
Boa prática!

Você também pode conferir as mudanças nesse commit do GitHub.
Em IngredienteSelecionavel, altere as opções methods e emits de acordo com o código abaixo:

methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente)
      } else {
        this.$emit('removerIngrediente', this.ingrediente);
      }
    }
  },
  emits: ['adicionarIngrediente', 'removerIngrediente']
COPIAR CÓDIGO
O evento 'removerIngrediente' será emitido apenas quando o ingrediente for clicado e quando seu novo estado selecionado for false.

Em seguida, em CardCategoria, escute o evento e o re-emita:

<IngredienteSelecionavel
  :ingrediente="ingrediente"
  @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
  @remover-ingrediente="$emit('removerIngrediente', $event)"
/>
COPIAR CÓDIGO
Faça o mesmo em SelecionarIngredientes:

<CardCategoria
  :categoria="categoria"
  @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
  @remover-ingrediente="$emit('removerIngrediente', $event)"
/>
COPIAR CÓDIGO
Nos dois componentes CardCategoria e SelecionarIngredientes, não esqueça de adicionar o evento 'removerIngrediente' na opção emits.
Por fim, em ConteudoPrincipal, escute o evento pela última vez e registre uma função chamada removerIngrediente(), que ainda será criada:

<SelecionarIngredientes
  @adicionar-ingrediente="adicionarIngrediente"
  @remover-ingrediente="removerIngrediente"
/>
COPIAR CÓDIGO
Agora só falta criar a função removerIngrediente() no methods do ConteudoPrincipal:

removerIngrediente(ingrediente: string) {
  this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
},
COPIAR CÓDIGO
Pronto! O IngredienteSelecionavel agora consegue adicionar e remover ingredientes da SuaLista. Finalizamos suas funcionalidades.

https://github.com/alura-cursos/cookin-up/commit/aff16f64a6cc24ad9cb8c7d2462e893a900533f1

@@05
Mão na massa: finalizando a primeira página

Agora falta finalizarmos a primeira página do Cookin’ Up!
Implemente o botão de “Buscar receitas!” e o Rodapé do final da página. Você pode criar novos componentes chamados BotaoPrincipal e Rodape. Implemente apenas o visual do botão, e não sua funcionalidade.

Boa prática!

https://caelum-online-public.s3.amazonaws.com/3397-vue/Aula4-img1.png

Você também pode conferir as mudanças nesse commit do GitHub.
Primeiro, crie um componente BotaoPrincipal com o seguinte código:

<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
  }
}
</script>

<template>
  <button class="paragrafo-lg botao-principal">
    {{ texto }}
  </button>
</template>

<style scoped>
.botao-principal {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

.botao-principal:hover {
  background: var(--ocre-hover, #D1451E);
}
</style>
COPIAR CÓDIGO
Note que passamos uma prop texto para poder personalizar seu texto.

Em seguida, use esse componente em SelecionarIngredientes, no final da <section>:

<!-- código omitido... -->

  <p class="paragrafo dica">
    *Atenção: consideramos que você tem em casa sal, pimenta e água.
  </p>

  <BotaoPrincipal texto="Buscar receitas!" />
</section>

<!-- código omitido... -->
COPIAR CÓDIGO
Não esqueça de importá-lo no <script>.
Na sequência, crie um componente Rodape:

<template>
  <footer class="rodape paragrafo">
    Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais.
  </footer>
</template>

<style scoped>
.rodape {
  background: var(--verde-escuro, #263A29);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>
COPIAR CÓDIGO
Por fim, utilize-o em App.vue:

<template>
  <Banner />
  <ConteudoPrincipal />
  <Rodape /> <!-- Adicionado -->
</template>
COPIAR CÓDIGO
Com isso, você finalizou a primeira página do projeto!

https://github.com/alura-cursos/cookin-up/commit/a011834838e281635e39604d89aa83ca0fdae254

@@06
Para saber mais: Options API e Composition API

Sabia que, até agora, nós estivemos utilizando um dos dois estilos possíveis de desenvolvimento no Vue?
O estilo de API que estamos usando se chama Options API (API de Opções, em português), e nela nós usamos opções para definir a lógica de um componente, como data(), methods, props, created(), entre outras.

Porém, existe um outro estilo de API que também é usado no Vue, que se chama Composition API (API de Composição, em português). Esse estilo é um recurso nativo no Vue 3 e no Vue 2.7.

Vamos entender um pouco a diferença entre esses dois estilos? Vamos usar o código atual do <script> do ConteudoPrincipal como exemplo:

<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

export default {
  data() {
    return {
      ingredientes: [] as string[]
    };
  },
  components: { SelecionarIngredientes, SuaLista },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
    },
  }
}
</script>
COPIAR CÓDIGO
Para usar a Composition API em um componente, o ponto de entrada é o método chamado setup(), disponível como uma das propriedades do objeto do componente (o objeto do export default). Enquanto as propriedades que viemos usando até agora fazem parte da Options API, o setup() é o único método que faz parte da Composition API.

Vamos conferir o equivalente ao código acima usando a Composition API:

<script lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

export default {
  setup() {
    const ingredientes = ref<string[]>([]);

    function adicionarIngrediente(ingrediente: string) {
      ingredientes.value.push(ingrediente)
    }
    function removerIngrediente(ingrediente: string) {
      ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
    }

    return {
      ingredientes,
      adicionarIngrediente,
      removerIngrediente
    }
  },
  components: { SelecionarIngredientes, SuaLista },
}
</script>
COPIAR CÓDIGO
Vamos passar pelos seguintes pontos para conferir as diferenças de código:

Quase todas as opções do objeto foram removidas, com exceção de components. No lugar delas, foi adicionado o método setup(), o ponto de entrada da Composition API;
O estado ingredientes agora foi definido com o código const ingredientes = ref<string[]>([]). Note que a função ref() foi importada do pacote vue. Esse método cria uma variável reativa, da mesma forma que as propriedades retornadas no data() também eram reativas. Além disso, note que é possível definir a tipagem do estado usando generics no método;
As funções antes declaradas nos methods agora são funções normais declaradas dentro de setup();
Para acessar ou modificar o valor do estado ingredientes, agora é necessário escrever ingredientes.value em vez de this.ingredientes;
Por fim, o estado e as funções são retornados para o setup() dentro de um objeto. Isso vai expor essas informações para o template do componente.
Leia a seção Why Refs? para entender por que é necessário escrever .value para acessar o valor de variáveis reativas.
E com isso, o código acima já utiliza perfeitamente a Composition API e funciona exatamente igual a antes! Quando você já entende conceitos do Vue como estado, props, eventos, entre outros, a transição de um estilo para o outro é mais suave e facilitada.

Vantagens e desvantagens
Mas Evaldo, quais as vantagens de se usar a Composition API? Existem desvantagens em relação à Options API?
A Options API é considerada mais fácil de entender e de se desenvolver para quem está iniciando os estudos em Vue ou em frameworks front-end no geral, pois já possui opções reservadas para diferentes funcionalidades, o que torna o código legível e bem documentado.

A Composition API não possui esses blocos de separação, deixando todo o código dentro do setup(). É um estilo diferente de codificação, e pode ser preferido ou não, dependendo de quem está desenvolvendo.

No entanto, um fato é que a Composition API dá mais liberdade para uso dos recursos do Vue, aumentando suas possibilidades de uso, e por esse motivo ela é mais recomendada para projetos de maior porte.

Além disso, a Composition API se integra melhor com o TypeScript, além de tornar o código mais sucinto na maioria dos casos, como veremos logo abaixo.

Contudo, é importante frisar que não há planos da equipe do Vue para descontinuar a Options API! No mercado, diferentes empresas usam diferentes estilos. A Options API consegue fazer praticamente tudo que a Composition API faz, salvo casos de uso muito incomuns onde realmente é necessário recorrer à Composition API.

A documentação do Vue ensina todos os seus conceitos das duas formas. Uma vez que você tenha aprendido um conceito em um dos estilos, basta revisitar a página da documentação referente a esse conceito e alternar o estilo de API para aprendê-lo com outra sintaxe.

Acesse a seção API Styles e a página Composition API FAQ da documentação para conferir em detalhes as diferenças entres os dois estilos.
Além disso, da mesma forma que a documentação possui uma página ensinando a usar TypeScript com Options API, ela também possui uma que ensina a usar TypeScript com Composition API.
Usando <script setup>
Talvez você não tenha notado uma diferença significativa ao migrar o código da Options API para a Composition API. Na verdade, ele ficou até com algumas linhas extras!

Justamente para evitar muito código repetido, a Composition API é comumente utilizada com um recurso que a deixa mais sucinta e melhora a experiência de desenvolvimento. Esse recurso é o atributo setup que pode ser adicionado no <script>.

Com isso, algumas mudanças podem ser feitas no código. Confira ele reescrito:

<script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

const ingredientes = ref<string[]>([]);

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
}
</script>
COPIAR CÓDIGO
E olha só! Como mágica, o código ficou bem menor e sucinto. Vamos conferir as mudanças?

Com a adição do atributo setup, não é mais necessário realizar o export default e nem escrever o método setup(). É como se agora todo o código do <script> já estivesse dentro do setup(), por baixo dos panos.
A grande vantagem do <script setup> é não precisar mais retornar um objeto com as informações que queremos expor ao template do componente. Ao invés disso, todas as variáveis declaradas e importadas estão automaticamente disponíveis para o template, como o estado ingredientes, as funções e até mesmo os componentes!
Note que, como os componentes agora estão disponíveis para o template, também não precisamos mais da opção components que estávamos usando até agora.
O Vue recomenda fortemente utilizar o <script setup> ao se desenvolver com a Composition API, por tornar o código mais simples e direto. Por esse motivo, as páginas da documentação em Composition API ensinam os conceitos usando principalmente o <script setup>, mas também ensinam sem o setup quando necessário.

@@07
Adicionando pratos no pedido

Ariana está implementando um projeto Vue que simula um site de pedidos de comida.
O projeto possui um componente Pedido com um estado chamado pratosSelecionados, que é uma lista de strings. Esse componente está consumindo outro chamado CardPrato, que possui uma prop chamada prato.

O código do CardPrato está assim:

<script lang="ts">
export default {
  props: {
    prato: { type: String, required: true }
  },
}
</script>

<template>
  <section>
    {{ prato }}
  </section>
</template>
COPIAR CÓDIGO
Ariana quer que, quando a <section> for clicada, a prop prato seja adicionada na lista pratosSelecionados, que é o estado do componente pai Pedido.

Quais ações ela pode tomar para alcançar esse objetivo?

Selecione 2 alternativas

No CardPrato, adicionar o código @click="$emit('adicionarPrato', prato) na <section>;
No Pedido, adicionar @adicionar-prato="pratosSelecionados.push($event)" na tag do CardPrato.
 
O componente filho está emitindo o evento junto com a prop prato e o componente pai está escutando o evento e adicionando o prato corretamente.
Alternativa correta
No CardPrato, adicionar o código v-on:click="$emit('adicionarPrato, prato') na <section>;
No Pedido, adicionar v-on:adicionar-prato="pratosSelecionados.push($event)" na tag do CardPrato.
 
A sintaxe v-on:click é equivalente a @click. O componente filho está emitindo o evento junto com a prop prato e o componente pai está escutando o evento e adicionando o prato corretamente.
Alternativa correta
No CardPrato, adicionar o código @click="$emit('adicionarPrato') na <section>;
No Pedido, adicionar @adicionar-prato="pratosSelecionados.push($event)" na tag do CardPrato.
 
Alternativa correta
No CardPrato, adicionar o código @click="this.$emit('adicionarPrato', prato) na <section>;
No Pedido, adicionar @adicionar-prato="pratosSelecionados.push($event)" na tag do CardPrato.

@@08
Faça como eu fiz: implementando ingredientes selecionáveis

Agora é a sua vez de colocar a mão na massa, caso ainda não tenha feito!
Crie um componente IngredienteSelecionavel com um estado selecionado que controla o visual do componente quando ele é clicado. Além disso, quando um ingrediente for clicado, adicione-o na lista de ingredientes da SuaLista; da mesma forma, caso ele seja clicado novamente, remova-o da SuaLista.

Crie o componente IngredienteSelecionavel:
<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingrediente: { type: String, required: true }
  },
  data() {
    return {
      selecionado: false
    }
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente)
      } else {
        this.$emit('removerIngrediente', this.ingrediente);
      }
    }
  },
  emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
  <button
    class="ingrediente"
    @click="aoClicar"
    :aria-pressed="selecionado"
  >
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
COPIAR CÓDIGO
Em seguida, na <ul> de ingredientes do CardCategoria, use o IngredienteSelecionavel em vez da Tag, escuta os eventos e os re-emita:

<IngredienteSelecionavel
  :ingrediente="ingrediente"
  @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
  @remover-ingrediente="$emit('removerIngrediente', $event)"
/>
COPIAR CÓDIGO
Agora, em SelecionarIngredientes, também escute e re-emita os eventos:

<CardCategoria
  :categoria="categoria"
  @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
  @remover-ingrediente="$emit('removerIngrediente', $event)"
/>
COPIAR CÓDIGO
Nos dois componentes CardCategoria e SelecionarIngredientes, não esqueça de adicionar a opção emits: ['adicionarIngrediente', 'removerIngrediente'].
Por fim, em ConteudoPrincipal, escute os eventos pela última vez execute as funções correspondentes:

<SelecionarIngredientes
  @adicionar-ingrediente="adicionarIngrediente"
  @remover-ingrediente="removerIngrediente"
/>
COPIAR CÓDIGO
Agora crie as funções no methods do ConteudoPrincipal:

methods: {
  adicionarIngrediente(ingrediente: string) {
    this.ingredientes.push(ingrediente)
  },
  removerIngrediente(ingrediente: string) {
    this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
  },
}
COPIAR CÓDIGO
Pronto! O IngredienteSelecionavel agora possui um estado próprio para controlar seu visual quando clicado, além de conseguir adicionar e remover ingredientes da SuaLista. Finalizamos suas funcionalidades!

@@09
O que aprendemos?

Nessa aula, você aprendeu a:
Controlar o visual de um componente usando estado e props:
Criamos o componente IngredienteSelecionavel com o estado booleano selecionado. Com ele, conseguimos saber quando o ingrediente está selecionado ou não;
Cada ingrediente selecionável possui seu próprio estado: podemos mudar o valor do estado de um sem interferir no estado dos outros;
Podemos passar um estado como prop: o estado selecionado foi definido como o valor da prop ativa da Tag. Dessa forma, caso o estado mude, a prop ativa também muda e o visual da Tag irá mudar de acordo;
Emitir e escutar eventos personalizados:
Usamos $emit (no template) ou this.$emits (no script) para emitir um evento personalizado. O primeiro parâmetro é o nome do evento, e o segundo parâmetro (e consecutivos) é um dado JavaScript que o evento pode carregar;
É uma boa prática definir os eventos na opção emits do componente;
É possível escutar o evento diretamente no componente pai, escrevendo v-on:nome-do-evento (ou @nome-do-evento) no consumo do componente filho;
É possível acessar o dado do evento por meio do $event ou, caso seja escrita uma função callback para o ouvinte do evento, podemos acessar o dado nos parâmetros dessa função. Nesse último caso, temos a vantagem de nomear e de tipar o dado do evento.

#### 23/02/2024

@05-Alternando telas

@@01
Projeto da aula anterior

Caso deseje, você pode baixar o projeto da aula anterior ou visualizar os arquivos no GitHub.
Bons estudos!

https://github.com/alura-cursos/cookin-up/archive/refs/heads/aula-4.zip

https://github.com/alura-cursos/cookin-up/tree/aula-4

@@02
Controlando exibição de componentes

Finalizamos a primeira página do Cooking Up!
No projeto, deixamos implementado o código dos desafios, incluindo a funcionalidade de remoção de ingredientes e o botão de buscar receitas, além do rodapé. Quando adicionamos os ingredientes, algo que realizamos juntos, podemos clicar neles novamente e são removidos com sucesso. No final da página, foi incluído um componente do botão principal de buscar receitas e também o componente do rodapé.

Voltando para o Figma, próximo passo será começar a trabalhar em como transitar de uma página para a outra. Ou seja, ao clicar no botão de buscar receitas, queremos ser direcionados para a segunda página. Inicialmente, nós podemos criar um estado que controla o que será ou não exibido. Podemos até utilizar o v-if ou v-else para isso. Faremos isso diretamente no código.

No VSCode, vamos ConteudoPrincipal.vue, que é o componente que exibe toda essa parte principal. Por enquanto, ele é uma tag main, que mostra o componente SuaLista e o componente SelecionarIngredientes. É exatamente este último componente que precisamos verificar se será exibido ou não. Na verdade, exibiremos ele ou algum outro componente correspondente à segunda página.

Para a segunda página, podemos até criar outro componente chamado MostrarReceitas, por exemplo. Vamos fazer isso.

Na pasta components, criaremos um arquivo chamado MostrarReceitas.vue. Por enquanto, ele será apenas um template com o texto "Mostrando Receitas", apenas para testarmos:

<template>
    Mostrando receitas...
<template>
COPIAR CÓDIGO
Feito isso, salvamos esse arquivo e retornamos para ConteudoPrincipal.vue, onde criaremos um estado no export default do objeto. No data() do objeto, adicionaremos uma nova propriedade chamada conteudo, que será uma string. Essa string se chamará SelecionarIngredientes. Poderia ser qualquer valor, mas manteremos o mesmo nome do componente para uma melhor identificação do conteúdo.

Podemos tipar esse estado. Ele poderá ter apenas dois tipos possíveis, que serão o próprio SelecionarIngredientes ou MostrarReceitas. Para organizar melhor, manteremos esses tipos salvos em um tipo do TypeScript. Para isso, recortamos essas duas strings possíveis, criamos um tipo chamado Pagina e passamos as strings.

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Pagina
    };
},
COPIAR CÓDIGO
Depois vamos até SelecionarIngredientes, por volta da linha 32, e colocamos um v-if="conteudo === 'SelecionarIngredientes'". Se o conteúdo for igual a SelecionarIngredientes, renderizamos esse componente. Notem que podemos utilizar o v-if juntamente com componentes, além dos elementos HTML. Isso geralmente é verdade para a maioria das diretivas do Vue.

<SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
    @adicionar-ingrediente="adicionar Ingrediente" 
    @remover-ingrediente="remover Ingrediente"
/>
COPIAR CÓDIGO
Abaixo de SelecionarIngredientes, chamaremos MostrarReceitas. Ao usar o atalho "Enter" para completar, pode ser que ele apareça como MostrarReceitas.vue, mas deixaremos somente MostrarReceitas, e corrigiremos as importações também removendo o vue.

Adicionaremos um v-else-if porque queremos exibir MostrarReceitas somente se o conteúdo for igual a MostrarReceitas.

<MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'" />
COPIAR CÓDIGO
Essa é a lógica, vamos testar se funciona. Assumindo que o valor inicial do conteúdo seja SelecionarIngredientes, queremos que ele mostre do modo em que estava antes do nosso projeto, exibindo a parte referente a SelecionarIngredientes.

Salvamos esse arquivo, retornamos ao navegador e atualizamos a página apenas. Note que continua igual a antes. Contudo, se formos ao código e trocarmos SelecionarIngredientes por MostrarReceitas, deverá exibir o componente que criamos:

export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'MostrarReceitas' as Pagina
    };
},
COPIAR CÓDIGO
Salvamos o arquivo e voltamos ao navegador. Veja como está exibindo o texto "Mostrando receitas...". Então a lógica já está funcionando, mas vamos retornar o conteúdo ao modo em que estava antes, isto é, SelecionarIngredientes.

export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Pagina
    };
},
COPIAR CÓDIGO
O próximo passo, analisando o projeto, é: quando clicar em "Buscar Receitas!", queremos que altere para a segunda página. O que podemos fazer então é alterar o estado do conteúdo, o texto dele, ao clicarmos nesse botão. Vamos fazer isso diretamente no código.

Vamos ao arquivo SelecionarIngredientes.vue, que está utilizando o botão principal por volta da linha 43, escreveremos @click.

Vale ressaltar que também conseguimos utilizar o V1 diretamente nos componentes. Neste caso, o comportamento será que o V1 será aplicado ali no elemento raiz do botão principal. Disponibilizaremos uma atividade descrevendo isso de forma mais completa

Após o @click emitiremos um evento. Ao emitir o evento, podemos notificar o ConteudoPrincipal.vue de que queremos alterar o estado dele. Escreveremos $emit(), passando o nome do evento, que será buscarReceitas.

<BotaoPrincipal texto="Buscar receitas!" @click="$emit(' buscarReceitas')" />
COPIAR CÓDIGO
Vamos adicionar ao array de emits, para ter um autocomplete:

emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
COPIAR CÓDIGO
Não precisamos carregar nenhum dado, então não é necessário um segundo parâmetro. Vamos salvar esse arquivo, voltar ao conteúdo principal, ir até a parte que estamos consumindo, SelecionarIngredientes, e adicionar @buscar-receitas, passando "conteudo = 'MostrarReceitas'". Depois, é só salvar.

<SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
    @adicionar-ingrediente="adicionar Ingrediente" 
    @remover-ingrediente="remover Ingrediente"
    @buscar-receitas="conteudo = 'MostrarReceitas'"
/>
COPIAR CÓDIGO
Teoricamente, ao clicar no botão, ouviremos esse evento, alteraremos o estado, e ele irá renderizar novamente o componente que deve ser exibido.

De volta ao navegador, vamos verificar se funciona. Clicamos em "Buscar Receitas!" e ele muda de página.

Finalmente, para encerrar, retornaremos ao VS Code para separar a parte de alterar, reatribuir o estado de conteúdo em um método à parte. Recortamos a instrução do evento @buscar-receitas e chamamos uma função que será nomeada como navegar(). Como parâmetro, passamos qual é a página que queremos navegar, ou seja, MostrarReceitas.

<SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
    @adicionar-ingrediente="adicionar Ingrediente" 
    @remover-ingrediente="remover Ingrediente"
    @buscar-receitas="navegar('MostrarReceitas')"
/>
COPIAR CÓDIGO
Em methods, por volta da linha 24, criaremos essa função, navegar(), que recebe a página como parâmetro, e dizemos que é do tipo Pagina, que já havíamos criado. Dentro dela, passamos a instrução que havíamos recortado e alteramos para this.conteudo. Em vez de passar de forma estática, uma string chamada MostrarReceitas, passaremos o parâmetro pagina.

navegar(pagina: Pagina) {
    this.conteudo = pagina;
}
COPIAR CÓDIGO
Vamos salvar esse arquivo e conferir se está igual. Abrimos o navegador na primeira página. Se clicarmos em "Buscar Receitas!", veremos que está funcionando corretamente.

O próximo passo agora é codificar a segunda página. No entanto, isso será um desafio para você! A página já está disponível no Figma, mas te incentivo a tentar implementá-la por conta própria, seguindo uma sequência de passos que disponibilizaremos para auxiliar neste processo.

No próximo vídeo, já teremos implementado o desafio no código, então espero vê-lo lá para continuarmos o projeto.

@@03
Para saber mais: Falltrought Attributes

No vídeo anterior, utilizamos a diretiva v-on diretamente em um componente, o BotaoPrincipal:
<BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')" />
COPIAR CÓDIGO
Nós já tínhamos aprendido a utilizar o v-on para escutar eventos personalizados emitidos por componentes filhos. No entanto, no código acima, estamos escutando um evento do DOM, o click. Como o Vue lida com isso?

Para explicar, vamos dar uma olhada no código do BotaoPrincipal:

<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
  }
}
</script>

<template>
  <button class="paragrafo-lg botao-principal">
    {{ texto }}
  </button>
</template>

<!-- Tag <style> omitida -->
COPIAR CÓDIGO
Quando utilizamos o v-on no consumo de um componente, é como se estivéssemos aplicando o v-on diretamente no elemento raiz desse componente. O elemento raiz é o elemento mais externo do <template> do componente, ou seja, nesse caso, é o elemento <button>.

Esse recurso é chamado de Fallthrough Attribute. Uma tradução um pouco ruim para essa expressão seria “atributo que cai adentro”. Você pode pensar que é como se o atributo v-on que estamos aplicando no BotaoPrincipal “caísse para dentro” do componente e fosse aplicado diretamente no elemento raiz!

O bacana desse recurso é que ele não se limita ao v-on; ele também se integra muito bem com atributos como class e style.

Ou seja, ao consumir um componente, não é necessário que ele declare props para poder receber classes ou estilos do componente pai, ou declarar eventos personalizados para re-emitir eventos nativos, como o click do botão.

Os fallthrough attributes possuem vários detalhes que precisam ser conferidos com atenção em casos mais avançados (por exemplo, quando você não quer aplicar o atributo automaticamente no elemento raiz ou quando o componente possui múltiplos elementos raízes). Para se aprofundar mais nesse assunto, acesse a documentação!

@@04
Mão na massa: implementando página de receitas

Agora você precisa implementar o visual da segunda página!
No entanto, você fará mais algumas coisas além de apenas o visual, mas nada que não tenha sido abordado antes. Você tem as seguintes tarefas:

1 - Codificar o visual abaixo. As imagens locais já estão na pasta public/imagens/receitas. Você pode usar uma lista de objetos para listar as receitas num primeiro momento, ou realizar a próxima etapa para já obter todas as informações prontas. Não é necessário implementar a lógica de filtragem de receitas ainda! (isto é, exibir apenas as receitas possíveis de serem feitas com os ingredientes selecionados);

Recorte de tela do Figma, mostrando o conteúdo da página de receitas. Todo o conteúdo está centralizado. Há o título “Receitas”, abaixo dele há o texto “Resultado encontrados: 8”. Logo abaixo há outro texto: “Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!”. Logo abaixo, há oito cards de receitas, cada um mostra a imagem de uma receita diferente o nome dela, como “Pasta de alho assado” e “Patê de alho assado”. Por fim, abaixo das receitas, há um botão com o texto “Editar lista”. (Aula5-img1.png)

2 - Obtenha as informações dessa URL para exibir as receitas, fazendo uma requisição HTTP. Faça o que já fizemos antes: crie um estado que inicia como uma lista de receitas vazia e reatribua o valor desse estado depois que a requisição HTTP for bem sucedida;

3 - O botão de “Editar Lista” deve retornar para a primeira página;

4 - Codifique o visual abaixo para o caso em que a lista de receitas estiver vazia. A imagem já está em src/assets/imagens/sem-receitas.png.

Recorte de tela do Figma, mostrando o conteúdo da página de receitas, mas agora sem nenhuma receita ter sido encontrada. O título e a primeira frase são iguais, mas agora o número de resultados encontrados é 0. Logo abaixo, agora há um texto “Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?”. Logo abaixo, há a imagem de um ovo quebrado. Por fim, abaixo da imagem, o botão de “Editar lista” permanece igual. (Aula5-img2.png)

Boa prática!

Você também pode conferir as mudanças nesse commit do GitHub.
O componente MostrarReceitas ficará assim:

<script lang="ts">
import { obterReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceita';
import BotaoPrincipal from './BotaoPrincipal.vue';
import CardReceita from './CardReceita.vue';

export default {
  data() {
    return {
      receitasEncontradas: [] as IReceita[]
    };
  },
  async created() {
    const receitas = await obterReceitas();

    this.receitasEncontradas = receitas.slice(0, 8);
  },
  components: { BotaoPrincipal, CardReceita },
  emits: ['editarReceitas']
}
</script>

<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ receitasEncontradas.length }}
    </p>

    <div v-if="receitasEncontradas.length" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="receitas">
        <li v-for="receita of receitasEncontradas" :key="receita.nome">
          <CardReceita :receita="receita" />
        </li>
      </ul>
    </div>

    <div v-else class="receitas-nao-encontradas">
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <img src="../assets/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
    </div>

    <BotaoPrincipal texto="Editar lista" @click="$emit('editarReceitas')" />
  </section>
</template>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
COPIAR CÓDIGO
Note que há uma nova interface sendo utilizada: IReceita. Na pasta src/interfaces, foi criado um arquivo IReceita.ts:

export default interface IReceita {
  nome: string;
  ingredientes: string[];
  imagem: string;
}
COPIAR CÓDIGO
Também há uma nova função obterReceitas vindo do arquivo src/http/index.ts. O arquivo agora está assim:

import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}
COPIAR CÓDIGO
O código foi reescrito para aproveitar a estrutura de requisição HTTP da Fetch API. A função obterDadosURL() recebe como parâmetro uma url de requisição, além de receber também uma generics T que indica o tipo de retorno que a requisição deve retornar.

E agora também há um novo componente CardReceita, que possui o seguinte código:

<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
  props: {
    receita: { type: Object as PropType<IReceita>, required: true }
  }
}
</script>

<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img class="receita__imagem" :src="`/imagens/receitas/${receita.imagem}`" :alt="`Foto de ${receita.nome}`">
    </header>

    <section class="receita__corpo">
      <h2 class="paragrafo receita__nome">
        {{ receita.nome }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
COPIAR CÓDIGO
Por fim, o BotaoPrincipal que está sendo utilizado no MostrarReceitas está emitindo um evento 'editarReceitas' ao ser clicado. Escute esse evento no pai direto, em ConteudoPrincipal, para navegar de volta para a primeira página quando o botão “Editar lista” for clicado:

<MostrarReceitas
  v-else-if="conteudo === 'MostrarReceitas'"
  @editar-receitas="navegar('SelecionarIngredientes')"
/>
COPIAR CÓDIGO
Com isso, todos os passos foram concluídos!

https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json

https://github.com/alura-cursos/cookin-up/commit/5704f05f89c52d1e1bd4de06c3eeb6ea18d10e06

@@05
Mantendo um componente vivo

A resolução do desafio já está implementada no projeto. Se tratava, basicamente, de implementar o visual da segunda página com alguns estados.
Com o projeto aberto no navegador, vamos selecionar alguns ingredientes aleatórios, como ovos, queijo e leite. Então, iremos até o final da página e clicamos no botão de buscar receitas. Feito isso, teremos o visual da segunda página.

Porém, estamos exibindo apenas estaticamente essas oito receitas. Inclusive, já estamos buscando através de uma URL da web, e está até contando os resultados de acordo com o número de cards. Mas nós ainda não implementamos a lógica de busca, de fato, dessas receitas. Pelo menos não de acordo com a nossa lista de ingredientes selecionados.

Mas isso nós faremos em outro momento, porque antes precisamos corrigir um bug, que é o seguinte: selecionamos três ingredientes, mas se clicarmos no botão de editar lista, que também já está funcionando, voltamos para a primeira página e os ovos, queijo e leite que havíamos selecionado, não estão mais selecionados.

Isso ocorre basicamente porque o view não vai preservar o estado dos componentes que são removidos da tela. Isso foi feito por conta do v-if e do v-else-if que estamos fazendo para controlar qual componente é exibido em tela: SelecionarIngredientes ou MostrarReceitas. No momento que o SelecionarIngredientes for removido de tela, o estado daqueles três ingredientes se perde. E quando voltamos para a primeira página, o estado é reinicializado para o seu valor original.

O view fornece uma solução bem interessante para resolver este problema, então voltemos ao VS Code e abrimos o componente ConteudoPrincipal.vue, que é onde controlamos a exibição dos componentes. Nele, basta fazermos o seguinte: escreveremos um novo componente que se chama KeepAlive e não precisa ser importado. Dentro dele, colocamos SelecionarIngredientes e MostrarReceitas.

<KeepAlive>
    <Selecionar Ingredientes v-if="conteudo === 'Selecionar Ingredientes""
        @adicionar-ingrediente="adicionar Ingrediente"
        @remover-ingrediente="remover Ingrediente"
        @buscar-receitas="navegar ('MostrarReceitas')"
    />

    <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'
        @editar-receitas="navegar ('Selecionar Ingredientes')"
    />
</KeepAlive>
COPIAR CÓDIGO
Agora, vamos salvar o arquivo, voltar ao navegador e atualizar a página para reinicializar a lista. Em seguida, selecionamos quaisquer ingredientes e clicamos em "Buscar Receitas". Na segunda página, clicamos em "Editar lista" para retornar à primeira página. Ao fazer isso, os ingredientes continuaram selecionados, então os estados realmente foram preservados.

Mas então como funciona o componente KeepAlive? Em tradução livre, ele significa basicamente "manter vivo". Esse é um componente nativo do Vue, que serve justamente para preservar o estado dos componentes que colocamos dentro dele. Ele funciona bem com o v-if e v-else, além de alguns outros casos.

A forma que ele preserva o estado é basicamente guardando os componentes em um lugar da memória chamado cache, então ele vai "cachear" (armazenar) os componentes mesmo que eles sejam removidos da tela. Quando pedirmos para serem mostrados na tela novamente, ele vai apenas recuperar esse local da memória, que é um local de rápido acesso.

Por este mesmo motivo, é importante dizermos quais são os componentes que é relevante armazenar. Nós podemos dizer para o KeepAlive exatamente os componentes que queremos cachear, assim não precisamos colocar no cache componentes desnecessários, como, por exemplo, o MostrarReceitas.

Diremos para ele que queremos guardar apenas o SelecionarIngredientes, que é o componente no qual estamos preocupados em preservar o estado. Para fazer isso, vamos ao KeepAlive, assinamos um atributo chamado include ("incluir", em inglês), e colocamos exatamente o nome do componente: SelecionarIngredientes.

<KeepAlive include="SelecionarIngredientes">
    <Selecionar Ingredientes v-if="conteudo === 'Selecionar Ingredientes""
        @adicionar-ingrediente="adicionar Ingrediente"
        @remover-ingrediente="remover Ingrediente"
        @buscar-receitas="navegar ('MostrarReceitas')"
    />

    <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'
        @editar-receitas="navegar ('Selecionar Ingredientes')"
    />
</KeepAlive>
COPIAR CÓDIGO
Isso, por si só, não funcionará, pois para que o Keep Alive consiga identificar que esse nome se refere ao componente SelecionarIngredientes, precisamos modificar o arquivo desse componente. Então, vamos ao arquivo SelecionarIngredientes.vue, navegamos até export default e adicionamos uma opção chamada name, que será o nome do componente. O name desse componente será a string 'SelecionarIngredientes'. Se continuar funcionando, significa que deu certo.

export default {
    name: 'SelecionarIngredientes',
COPIAR CÓDIGO
Então, salvamos os dois arquivos, pois quando utilizamos o include, realmente só inserimos o componente especificado. Ele não armazenará mais o componente MostrarReceitas.

Agora, voltamos ao navegador para verificar se continua funcionando. Atualizamos a página, selecionamos alguns ingredientes, clicamos em "Buscar Receitas" e, em seguida, "Editar Lista". Note que continua funcionando, então aparentemente, deu certo.

Agora, sim, estamos preparados para resolver o último problema do nosso projeto, que é de fato implementar a lógica de busca de receitas de acordo com os ingredientes selecionados. Nos vemos no próximo vídeo!

@@06
Buscando receitas

Já resolvemos o problema de preservação de estado com a ajuda do componente nativo KeepAlive. Assim, mesmo alterando as páginas, os ingredientes que selecionamos permanecem selecionados. O que falta implementar é a lógica de busca de receitas, realmente uma filtragem de acordo com os ingredientes que selecionamos.
Para desenvolver essa lógica, voltemos ao VS Code, especificamente ao arquivo MostrarReceitas.vue. No export efault, temos o dado de receitasEncontradas, que inicia como uma lista vazia. Há também o método de ciclo de vida created(), que busca as receitas de uma função chamada obterReceitas. Se verificarmos a documentação dessa função, vemos que ela obtém as receitas de um link da web. São todas as receitas que o nosso site está buscando. É a partir dessas que precisamos realizar a filtragem, selecionando as receitas que desejamos mostrar, de acordo com os ingredientes que selecionamos.

Ainda dentro do método created(), a única coisa que estamos fazendo, por enquanto, é uma atribuição estática. Pegamos de todas as receitas apenas as oito primeiras e atribuímos a esse estado de receitas encontradas. O restante da tela é renderizado, como, por exemplo, o tamanho, a quantidade de receitas e os recursos de receitas de acordo com cada uma delas.

Agora precisamos alterar essa lógica de atribuição estática, que é o receitas.slice(). Então apagaremos essa parte. Mas o que iremos fazer? Queremos realizar uma filtragem, então podemos iniciar escrevendo receitas.filter. Esse filter recebe uma função callback que passa como parâmetro cada uma das receitas.

this.receitasEncontradas = receitas.filter((receita) => {

})
COPIAR CÓDIGO
Dentro do filter, precisamos definir a lógica de filtragem. Basicamente, para cada receita que desejamos apresentar na tela e guardar no array receitasEncontradas, precisamos retornar o valor true se quisermos que essa receita seja mostrada. Assim, qual será a lógica para mostrar uma receita?

Vamos escrever em forma de comentário para tentar prever a lógica antes de realmente implementar o código. A lógica é a seguinte: todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes.

Por exemplo, se uma receita pede alho e azeite de oliva, precisamos ter pelo menos esses dois ingredientes na lista. Resumindo, todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes selecionados. Se esse for o caso, devemos retornar true para essa função do filter.

this.receitasEncontradas = receitas.filter((receita) => {
    // Lógica que verifica se posso fazer receita:
    // Todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
    // Se sim, devemos retornar `true`
})
COPIAR CÓDIGO
Agora, podemos começar a escrever o código que traduz essa lógica. Criaremos uma constante chamada possoFazerReceita que receberá uma função que ainda implementaremos.

Essa função se chamará itensDeLista1EstaoEmLista2, justamente porque queremos verificar se os ingredientes de uma receita estão inclusos na lista de ingredientes. Podemos usar uma função auxiliar para isso.

O que vamos verificar é justamente se os ingredientes necessários (receita.ingredientes) estão inclusos na segunda lista, que será this.ingredientes.

this.receitasEncontradas = receitas.filter((receita) => {
    // Lógica que verifica se posso fazer receita:
    // Todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
    // Se sim, devemos retornar `true`
    
    const possoFazerReceita = itensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes)
    })
},
COPIAR CÓDIGO
No entanto, ainda não temos acesso a this.ingredientes, então precisamos passá-lo como props. Antes de fazer isso, vamos retornar possoFazerReceita no final da função, valor que será verdadeiro ou falso.

this.receitasEncontradas = receitas.filter((receita) => {
    // Lógica que verifica se posso fazer receita:
    // Todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
    // Se sim, devemos retornar `true`
    
    const possoFazerReceita = itensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes)
    
    return possoFazerReceita;
    })
},
COPIAR CÓDIGO
Agora, sim, vamos passar esses ingredientes como props.

No início do export default, escrevemos props que será um objeto. Ele terá um campo chamado ingredientes, que será um objeto do tipo array. Vamos refinar a definição deste array utilizando as PropType e importá-lo manualmente do Vue no início do script com: import type { PropType } from 'vue'.

No PropType, vamos especificar que o tipo desse array será uma lista de strings. Em seguida, ainda no objeto, escreveremos required: true, indicando que essa propriedade é obrigatória.

export default {
    props: {
        ingredientes: { type: Array as PropType<string[]>, required: true }
    },
COPIAR CÓDIGO
Agora, em ConteudoPrincipal.vue, vamos passar essa propriedade de ingredientes. Então, abriremos este componente do conteúdo principal, e em MostrarReceitas, passamos a propriedade ingredientes, cujo valor será simplesmente ingredientes - não precisamos usar this aqui no template.

<MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"
    :ingredientes="ingredientes"
    @editar-receitas="navegar('SelecionarIngredientes')"
/>
COPIAR CÓDIGO
Feito isso, salvamos esse arquivo.

Agora, vamos implementar a função itensDeLista1EstaoEmLista2, que será um trecho de código lógico. Faremos isso em um arquivo separado.

Dentro do diretório src, criaremos uma nova pasta chamada operacoes. Nela, criaremos um arquivo chamado listas.ts. Este será um arquivo utilitário para operações envolvendo listas em JavaScript.

A lógica será a seguinte: escreveremos export functionporque podemos ter outras funções neste arquivo, então não precisa ser default. Em seguida, colocamos o nome da função itensDeLista1EstaoEmLista2 e abrimos chaves {}.

export function itensDeLista1EstaoEmLista2() {

}
COPIAR CÓDIGO
Essa função receberá dois parâmetros, cada um será uma das listas. A primeira lista será chamada lista1, do tipo unknown[]. A segunda será lista2, também do tipo unknown[].

A palavra unknown, em inglês, significa desconhecido. Dessa forma, não precisamos nem saber qual o tipo de dado que essas listas carregam. Ainda assim, conseguiremos fazer algumas verificações com elas, por isso essa tipagem é a ideal neste caso.

Agora, vamos para a lógica. O que temos que retornar para essa função é um valor booleano para dizer se todos os itens da lista1 estão na lista2. Logo, passaremos lista1.every() como valor de retorno.

Se todos os itens da lista1 estiverem inclusos na lista2, a função callback irá retornar verdadeiro. Isso acontecendo, a função every() também retorna verdadeiro para a função externa.

export function itensDeLista1EstaoEmLista2(lista1: unknown [], lista2: unknown[]) { 
    return lista1.every ((itemLista1) => lista2.includes (itemLista1)); 
}
COPIAR CÓDIGO
Feito isso, salvamos o arquivo e voltamos para MostrarReceitas.vue. A função itensDeLista1EstaoEmLista2 ainda deve estar acusando erro, pois não a importamos. Para isso, adicionar o seguinte comando de importação no início do script:

import { itensDeLista1EstaoEmLista2 } from '@/operacoes/listas';
COPIAR CÓDIGO
Caso ainda esteja aparecendo um sublinhado vermelho indicando erro, podemos reiniciar o VS Code para ver se ele some. Como mencionado, o TypeScript às vezes demora para reconhecer algumas importações. Então, usaremos o atalho "Ctrl + Shift + P", escrevemos "reload" e selecionamos a opção "Reload window" (recarregar janela).

Ao fazer isso, o erro deve sumir, então agora podemos testar. Vamos salvar esse arquivo e conferir com "Ctrl + J" no terminal se o servidor está rodando corretamente. Em seguida, voltamos ao navegador para conferir se realmente a lógica está funcionando.

Vamos acessar a URL que exibe todas as receitas. Inclusive, estamos fazendo a solicitação em nosso projeto. As receitas pasta de alho assado e patê de alho assado precisam de alho e azeite de oliva. Já a receita de alho assado, além do alho e do azeite de oliva, também requer orégano.

No Cooking Up, selecionaremos os ingredientes azeite de oliva, que está no quarto card, e alho, que está no quinto card, além de mais alguns ingredientes como ovos e queijo. Então, se selecionamos alho e azeite de oliva, as receitas que citamos devem aparecer.

Selecionamos os ingredientes, clicaremos no botão "Buscar Receitas". Ao fazer isso, nos são retornadas as receitas "Pasta de alho assado" e "Patê de alho assado". Para confirmar o funcionamento, vamos em "Editar lista" e selecionamos o ingrediente orégano, que está no terceiro card. Fazendo isso e clicando em "Buscar Receitas", a receita "Alho Assado" aparece junto das outras duas.

A lógica está funcionando! Com isso, finalizamos as funcionalidades do projeto.

Se quiser, você pode inserir suas próprias receitas. Adicionamos algumas como exemplos, mas você pode fazer, por exemplo, seu próprio git no GitHub. Há uma atividade falando um pouco sobre isso, mas você pode criar o seu e incluir sua URL para adicionar suas próprias receitas.

Além disso, você pode desenvolver um projeto que use essa mesma lógica. Digamos que goste de um jogo em que os itens podem ser obtidos apenas com recursos específicos. Essa lógica também se aplica a esse tipo de projeto. Fica aí a ideia para você aplicar!

Finalizamos o projeto, então nos vemos no último vídeo do curso!

@@07
Exibindo contadores

Carla está trabalhando em um projeto Vue e criou um componente chamado Contador. Esse componente é um botão que possui um estado interno e que mostra na tela quantas vezes ele foi clicado.
Em App.vue, há o seguinte código:

<script lang="ts">
import Contador from './components/Contador.vue';

export default {
  components: { Contador },
  data() {
    return {
      contador: 'A' as 'A' | 'B' | null
    }
  }
}
</script>

<template>
  <div>
    <KeepAlive>
      <Contador v-if="contador === 'A'" />
      <Contador v-else-if="contador === 'B'" />
      <p v-else-if="contador === null">Nenhum contador sendo exibido.</p>
    </KeepAlive>
  </div>

  <button @click="contador = 'A'">Mostrar Contador A</button>
  <button @click="contador = 'B'">Mostrar Contador B</button>
  <button @click="contador = null">Remover contador</button>
</template>
COPIAR CÓDIGO
Com esse código, Carla consegue exibir dois contadores diferentes, cada um com seu próprio estado. Mesmo quando um contador é removido da tela, seu estado é preservado.

Marque as alternativas que explicam o comportamento do código de Carla:

Selecione 2 alternativas

Não é necessário usar v-if / v-else-if nos componentes filhos do <KeepAlive>, pois ele consegue escolher qual dos componentes filhos exibir por vez.
 
Alternativa correta
O componente <KeepAlive> guarda no cache os componentes que estão dentro dele, e por isso seus estados são preservados.
 
Os componentes filhos do <KeepAlive> não são totalmente eliminados, senão seu estado também seria. Em vez disso, eles são guardados no cache.
Alternativa correta
Se Carla quiser que apenas o estado dos contadores seja preservado, sem guardar o estado de outros componentes, a opção name do Contador deve ser definida e, em seguida, referenciada no atributo include do KeepAlive.
 
Se o name do Contador for definido como 'Contador', por exemplo, Carla adicionaria include="Contador" no <KeepAlive>.
Alternativa correta
Se Contador tiver outros componentes filhos, esses filhos não terão o estado preservado. Isso porque o <KeepAlive> preserva o estado apenas dos componentes que estão diretamente dentro dele.

@@08
Faça como eu fiz

Agora é a sua vez de colocar a mão na massa, caso ainda não tenha feito!
Crie um estado para alternar a exibição das páginas do projeto. Além disso, os estados dos ingredientes selecionados deve ser preservado ao mudar de página. Por fim, implemente a lógica de busca de receitas na segunda página!

Em ConteudoPrincipal, adicione o estado conteudo:
data() {
  return {
    ingredientes: [] as string[],
    conteudo: 'SelecionarIngredientes' as Pagina  /* Adicionado */
  };
},
COPIAR CÓDIGO
Crie o tipo Pagina no mesmo arquivo:

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';
COPIAR CÓDIGO
Em seguida, altere o template para o seguinte:

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente"
        @buscar-receitas="navegar('MostrarReceitas')"
      />
  
      <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"
        :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')"
      />
    </KeepAlive>
  </main>
</template>
COPIAR CÓDIGO
Agora, em SelecionarIngrediente, adicione a opção name no componente:

name: 'SelecionarIngredientes',
COPIAR CÓDIGO
No mesmo componente, adicione a emissão do evento 'buscarReceitas' no clique do botão “Buscar receitas!”:

<BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')" />
COPIAR CÓDIGO
Por fim, para implementar a lógica de busca de receitas, vá em MostrarReceitas (já implementada no Desafio). Adicione a prop ingredientes:

props: {
  ingredientes: { type: Array as PropType<string[]>, required: true }
},
COPIAR CÓDIGO
E o método created agora ficará assim:

async created() {
  const receitas = await obterReceitas();

  this.receitasEncontradas = receitas.filter((receita) => {
    // Lógica que verifica se posso fazer receita:
    // Todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
    // Se sim, devemos retornar `true`

    const possoFazerReceita = itensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes);

    return possoFazerReceita;
  })
},
COPIAR CÓDIGO
Por fim, implemente a função itensDeLista1EstaoEmLista2 em um novo arquivo src/operacoes/listas.ts:

export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
  return lista1.every((itemLista1) => lista2.includes(itemLista1));
}
COPIAR CÓDIGO
Com isso, o projeto foi finalizado!

@@09
Projeto final

Você pode baixar ou acessar os arquivos no GitHub do projeto final.
Aproveite para explorá-lo e revisar pontos importantes do curso.

Bons estudos!

https://github.com/alura-cursos/cookin-up/archive/refs/heads/aula-5.zip

https://github.com/alura-cursos/cookin-up/tree/aula-5

@@10
O que aprendemos?

Nessa aula, você aprendeu a:
Controlar a exibição de componentes utilizando estado:
Combinamos as diretivas v-if e v-else-if com o estado conteudo para alternar o que era exibido em tela;
Utilizar o <KeepAlive> para cachear os componentes que saíam de tela:
Os estados dos componentes filhos do <KeepAlive> são preservados, bem como os estados dos componentes mais filhos deles;
É possível dizer quais componentes queremos cachear com o atributo include. Para isso, o componente a ser cacheado deve ter sua opção name definida (veja mais variações da sintaxe do include na documentação).

@@11
Recados finais

Parabéns, você chegou ao fim do nosso curso. Tenho certeza que esse mergulho foi de muito aprendizado.
Após os créditos finais do curso, você será redirecionado para uma tela na qual poderá deixar seu feedback e avaliação do curso. Sua opinião é muito importante para nós.

Aproveite para conhecer a nossa comunidade no Discord da Alura e se conectar com outras pessoas com quem pode conversar, aprender e aumentar seu networking.

Continue mergulhando com a gente.

@@12
Conclusão

Parabéns por finalizar o curso de Vue!
Vimos muitos conceitos, construímos um projeto incrível e espero que tenha agregado bastante ao seu conhecimento.

Vamos recapitular nosso aprendizado? Começamos aprendendo sobre componentes. Inicialmente, construímos o componente do banner. Então, vimos as vantagens disso como, por exemplo, a melhor organização do nosso código.

Em seguida, aprendemos sobre as diretivas do Vue, como o v-for, que ajuda a renderizar estruturas semelhantes de forma dinâmica. Isso centraliza a renderização em um único local. Também estudamos as diretivas v-if e v-else para exibir condicionalmente elementos na tela.

Estudamos um conceito fundamental, que é o estado e a reatividade. Isso se encaixa perfeitamente com a parte de clicar nos ingredientes, alterando o visual. Com isso, temos uma interação, e a tela é renderizada novamente de acordo com essa interação.

Após selecionar os ingredientes e clicar no botão para buscar receitas, há um breve delay para exibir as receitas, porque também estamos utilizando requisições HTTP. Nós estudamos essa parte em conjunto com os métodos de ciclo de vida do Vue. Descobrimos que é uma boa prática realizar essas requisições HTTP ao reatribuir o estado.

A segunda página do projeto foi deixada como um desafio para que você pudesse praticar de forma autônoma. Com esses conhecimentos, você será capaz de construir outras aplicações web front-end com muito mais produtividade e até uma melhor experiência como pessoa desenvolvedora, graças aos benefícios que esses frameworks trazem.

Não podemos esquecer que o Vue é um dos frameworks mais utilizados do mercado front-end, ao lado do React e do Angular!

Em caso de dúvidas, fique à vontade para recorrer ao fórum, responderemos assim que possível. Além disso, há também o Discord da nossa comunidade, onde é possível interagir com outras pessoas estudantes e até com instrutores, além de fazer networking. Neste canal, muitos eventos são disponibilizados para que você possa participar!

Caso queira, fique à vontade para compartilhar esse projeto no LinkedIn. Você pode me marcar, Antônio Valdo, e marcar a Alura. Ficaremos muito felizes em ver o seu progresso nos estudos e interagir com você!

Até a próxima!

