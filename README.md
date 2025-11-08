# 2048 

Um jogo classico feito com `React` + `Typescript`.

---

## Demonstração

**Acesse o jogo online:** [https://kauan-13.github.io/2048/](https://kauan-13.github.io/2048/)

---

## 🧩 Regras do Jogo

- Use as setas do teclado ou as teclas `W`, `A`, `S`, `D` para mover os blocos.  
- Combine blocos de mesmo número até criar o bloco 2048
- Após cada movimento, um novo bloco aparece em uma posição aleatória.
- O jogo termina quando não há mais movimentos possíveis.
- Todos os blocos deslizam na direção escolhida até baterem em outro bloco ou na borda.

---

## 🛠️ Tecnologias Utilizadas

- **React** — Interface dinâmica e reativa  
- **CSS Modules** — Estilos isolados e limpos  
- **TypeScript** — Tipagem estática e segurança no código  

---

## Rodar Localmente

Siga as instruções abaixo para clonar e rodar o projeto na sua máquina

### 1 Clonar o repositório
```
git clone https://github.com/Kauan-13/2048.git
```

### 2 Entrar na pasta do projeto

```
cd 2048
```

### 3 Instalar as dependências

```
npm ci
```

### 4 Rodar o projeto

```
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173)

---

## Estrutura do Projeto

```
src/
│   App.css
│   App.tsx
│   index.css
│   main.tsx
├───components
│   ├───Block
│   │       index.tsx
│   │       style.module.css
│   ├───Board
│   │       index.tsx
│   │       style.module.css
│   ├───Control
│   │       index.tsx
│   │       style.module.css
│   │
│   └───Tutorial
│           index.tsx
│           style.module.css
├───hooks
│       useGame.ts
├───logic
│       game.ts
├───styles
│       fonts.module.css
└───types
        board.ts
```

---