# Teste Front-End Econverse

Implementação do teste técnico para a vaga de Desenvolvedor Front-End da Econverse, construída a partir do layout no Figma: header, hero, categorias, navegação por marcas, vitrine de produtos e modal.

## Tecnologias

- [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como bundler e servidor de desenvolvimento
- [Sass](https://sass-lang.com/) (SCSS) para estilização, sem bibliotecas de UI
- [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) para testes

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm 10 ou superior (já vem com o Node.js)
- [Git](https://git-scm.com/)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/GabrielMorozini/teste-front-end.git

# 2. Entre na pasta do projeto
cd teste-front-end

# 3. Instale as dependências
npm install
```

## Como rodar

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite inicia o servidor com hot reload. Acesse [http://localhost:5173](http://localhost:5173).

### Build de produção

```bash
npm run build
```

Executa a checagem de tipos do TypeScript e gera os arquivos otimizados na pasta `dist/`.

### Pré-visualizar o build

```bash
npm run preview
```

Serve o conteúdo de `dist/` localmente (por padrão em [http://localhost:4173](http://localhost:4173)), simulando o ambiente de produção.

## Como testar

```bash
# Executa todos os testes uma vez
npm run test

# Modo watch (reexecuta ao salvar arquivos)
npm run test -- --watch

# Relatório de cobertura
npm run test -- --coverage
```

## Qualidade de código

```bash
# Verifica problemas de lint
npm run lint
```

## Scripts disponíveis

| Script                | Descrição                                        |
| --------------------- | ------------------------------------------------ |
| `npm run dev`         | Inicia o servidor de desenvolvimento             |
| `npm run build`       | Checa os tipos e gera o build de produção        |
| `npm run preview`     | Serve o build de produção localmente             |
| `npm run test`        | Executa os testes                                |
| `npm run lint`        | Executa o linter                                 |

## Estrutura do projeto

```text
src/
├── components/     # Componentes (header, hero, brands, etc.), cada um com seu .tsx e .scss
├── services/
│   └── api.ts      # Acesso à API de produtos
├── styles/
│   ├── _variables.scss   # Variáveis (cores, espaçamentos)
│   └── global.scss       # Estilos globais e reset
└── types/
    └── product.ts  # Tipagens compartilhadas
```

## Decisões de projeto

- **HTML semântico**: uso de landmarks (`header`, `main`, `section`, `footer`), hierarquia correta de títulos e listas (`ul`/`li`) para conjuntos de itens.
- **Acessibilidade**: textos alternativos nas imagens, `aria-labelledby` nas seções, indicador de foco visível para navegação por teclado.
- **SEO**: estrutura semântica, títulos hierárquicos, `alt` descritivo e `loading="lazy"` em imagens abaixo da dobra.
- **Estilos**: toda a estilização fica em arquivos `.scss`, seguindo a convenção BEM, sem CSS inline.

## Solução de problemas

- **Porta em uso**: se a `5173` estiver ocupada, o Vite sobe automaticamente na próxima porta livre e mostra o endereço no terminal.
- **Erros estranhos após atualizar dependências**: apague `node_modules` e `package-lock.json` e rode `npm install` novamente.
- **Imagens ou dados não carregam**: confira sua conexão e se a API configurada em `src/services/api.ts` está acessível.