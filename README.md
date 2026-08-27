# Portfólio Profissional — Murilo Mendes

Site de portfólio pessoal desenvolvido em **HTML, CSS e JavaScript puros**, sem frameworks nem dependências de build. É uma landing page de página única que apresenta serviços de desenvolvimento web sob medida para pequenas empresas, com foco em conversão de contato via WhatsApp.

🔗 **Repositório:** [Portifolio_Profissional](https://github.com/muriloomendesedts-dev/Portifolio_Profissional)

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Seções da página](#seções-da-página)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Sistema de design](#sistema-de-design)
- [Responsividade](#responsividade)
- [Como executar](#como-executar)
- [Como personalizar](#como-personalizar)

---

## Sobre o projeto

A página funciona como cartão de visitas profissional. A proposta é apresentar serviços organizados por **segmento de mercado** — e-commerce, clínicas, indústria, restaurantes, salões e advocacia — em vez de listar tecnologias soltas, deixando claro para o visitante qual problema do negócio dele o serviço resolve.

Toda a navegação é interna, por âncoras, com rolagem suave. O objetivo final de cada seção é levar o visitante ao contato direto.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica (`header`, `main`, `section`, `article`, `footer`) |
| **CSS3** | Variáveis CSS, Grid, Flexbox, `clamp()`, gradientes, `backdrop-filter`, animações |
| **JavaScript (ES6+)** | Menu mobile, animações de scroll, geração dinâmica dos projetos |
| **Google Fonts** | `Sora` para títulos e `Inter` para o corpo do texto |

Nenhuma biblioteca externa, nenhum bundler, nenhuma etapa de build.

---

## Estrutura de arquivos

```
Portifolio_Profissional/
├── index.html     # Toda a estrutura e o conteúdo da página
├── style.css      # Estilos, variáveis de design e media queries
├── script.js      # Interatividade e renderização dos projetos
└── .gitignore
```

---

## Seções da página

| Seção | ID | Conteúdo |
|---|---|---|
| **Header** | `#nav` | Navegação fixa (sticky) com logo, links internos, CTA e botão hambúrguer |
| **Hero** | `#top` | Foto de perfil, título com destaque em gradiente, subtítulo, botões de ação e tags de nicho |
| **Sobre** | `#sobre` | Texto de apresentação e três cards de destaque (Full Stack, Automação, Sob medida) |
| **Serviços** | `#servicos` | Seis cards, um por segmento de mercado atendido |
| **Stack** | `#stack` | Sete tecnologias em formato *pill*, cada uma com um ponto colorido na cor oficial da linguagem |
| **Projetos** | `#projetos` | Grade de cards gerada por JavaScript, com link para cada repositório |
| **Contato** | `#contato` | Quatro cards: WhatsApp, e-mail, LinkedIn e GitHub |
| **Footer** | — | Ano atualizado automaticamente e assinatura |

---

## Funcionalidades JavaScript

O `script.js` concentra cinco comportamentos:

### 1. Ano dinâmico no rodapé

```js
document.getElementById('year').textContent = new Date().getFullYear();
```

O ano de copyright nunca fica desatualizado.

### 2. Sombra na navegação ao rolar

Um listener de `scroll` adiciona a classe `.scrolled` à navbar quando a página passa de 10px. A classe aumenta a opacidade do fundo e revela a borda inferior, separando o menu do conteúdo.

### 3. Menu mobile

O botão hambúrguer alterna a classe `.open` na lista de links e atualiza o atributo `aria-expanded`, mantendo a acessibilidade correta. Clicar em qualquer link fecha o menu automaticamente.

### 4. Animação de entrada com IntersectionObserver

Todos os elementos com a classe `.reveal` começam invisíveis e deslocados 24px para baixo. Quando **15% do elemento** entra na viewport, a classe `.in-view` é aplicada e o elemento sobe suavemente até a posição final.

```js
const observer = new IntersectionObserver((entries) => { /* ... */ }, { threshold: 0.15 });
```

Cada elemento é observado **uma única vez** (`observer.unobserve`), então a animação não se repete ao rolar de volta — o que evita o efeito cansativo de conteúdo piscando na tela.

### 5. Renderização dinâmica dos projetos

Os projetos ficam em um array de objetos, e não escritos à mão no HTML:

```js
const projects = [
  { name: 'projeto-refrigerantes', title: 'Distribuidora de Refrigerantes', desc: '...', tag: 'Indústria', lang: 'CSS / JS' },
  // ...
];
```

O array é mapeado para HTML e injetado na grade `#projects`. Cada card recebe um `transition-delay` progressivo de **60ms multiplicado pelo índice**, criando um efeito de entrada em cascata. Depois de criados, os cards são re-observados pelo IntersectionObserver para também receberem a animação.

**Adicionar um projeto novo é adicionar um objeto ao array** — nenhuma alteração no HTML é necessária.

---

## Sistema de design

O tema é escuro, definido por variáveis CSS no `:root`:

| Variável | Valor | Papel |
|---|---|---|
| `--bg` | `#0b0d14` | Fundo principal |
| `--surface` | `#161a26` | Fundo dos cards |
| `--border` | `#262b3a` | Bordas |
| `--text` | `#eef0f6` | Texto principal |
| `--text-dim` | `#a3a9bd` | Texto secundário |
| `--accent` | `#7c6cff` | Roxo — cor primária |
| `--accent-2` | `#33d6c0` | Turquesa — cor secundária |
| `--accent-3` | `#ff6b9d` | Rosa — cor de apoio |
| `--radius` | `16px` | Arredondamento padrão |
| `--maxw` | `1100px` | Largura máxima do conteúdo |

### Detalhes visuais

- **Blobs de luz no fundo:** duas esferas fixas com `filter: blur(120px)` e animações `float1`/`float2` de 18s e 22s, criando um movimento lento e contínuo atrás do conteúdo.
- **Navbar com vidro fosco:** `backdrop-filter: blur(14px)` sobre fundo semitransparente.
- **Texto em gradiente:** a classe `.text-gradient` usa `background-clip: text` para aplicar o degradê roxo→turquesa ao trecho destacado do título.
- **Tipografia fluida:** `clamp()` nos títulos faz o tamanho da fonte escalar com a viewport sem media queries.
- **Hover consistente:** cards e botões sobem de 2 a 6px e mudam a cor da borda para o accent.

---

## Responsividade

Três breakpoints ajustam o layout:

| Largura | Ajustes |
|---|---|
| **≤ 860px** | Seção "Sobre" e grade de serviços passam para 1 coluna; contatos vão para 2 colunas |
| **≤ 720px** | Menu vira sobreposição vertical acionada pelo hambúrguer; CTA do topo é ocultado; hero ganha menos padding |
| **≤ 480px** | Cards de contato passam para 1 coluna |

A grade de projetos é naturalmente fluida via `repeat(auto-fit, minmax(260px, 1fr))` e se adapta sem precisar de media query.

---

## Como executar

Não há dependências nem build. Basta abrir o arquivo:

```bash
git clone https://github.com/muriloomendesedts-dev/Portifolio_Profissional.git
cd Portifolio_Profissional
```

Depois abra o `index.html` no navegador.

Para um servidor local (recomendado, evita restrições de origem):

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

E acesse `http://localhost:8000`.

---

## Como personalizar

| O que mudar | Onde |
|---|---|
| Cores do tema | Variáveis em `:root` no `style.css` |
| Textos, serviços e contatos | Diretamente no `index.html` |
| Lista de projetos | Array `projects` no `script.js` |
| Fontes | Tag `<link>` do Google Fonts no `<head>` e as regras de `font-family` |
| Foto de perfil | Atributo `src` de `.hero__avatar` no `index.html` |

---

## Contato

- **WhatsApp:** [+55 83 98175-9803](https://wa.me/5583981759803)
- **E-mail:** muriloomendesedts@gmail.com
- **LinkedIn:** [murilo-mendes-dev-frontend](https://www.linkedin.com/in/murilo-mendes-dev-frontend)
- **GitHub:** [muriloomendesedts-dev](https://github.com/muriloomendesedts-dev)
