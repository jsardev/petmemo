# petmemo

A showcase application built with Vite and React. Powered by [The Cats API](https://thecatapi.com/).

[Live demo](https://petmemo-sarneeh.vercel.app/)

## How to run

### Run in development mode

```
pnpm install
pnpm dev
```

### Run in production mode

```
pnpm build
pnpm preview
```

## Technology

Following libraries and technologies were used in this project:

- [React](https://github.com/facebook/react) - UI Library
- [React Router](https://github.com/remix-run/react-router) - Routing
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- [UnoCSS](https://github.com/unocss/unocss) - CSS Framework
- [Ky](https://github.com/sindresorhus/ky) - HTTP Client

### Rationale

#### Zustand

I heard a lot about Zustand and it's simplicity. As I never had the opportunity to work with it, I decided to check out its capabilities in this project. What I was looking for in a state management for this project was high React integration (e.g. state selector hooks out of the box), strategies for preventing rerenders and easy nested state updates (e.g. [integration with immer](https://github.com/pmndrs/zustand#sick-of-reducers-and-changing-nested-states-use-immer)).

#### UnoCSS

I love the Utility CSS approach and found out that it's very effective in prototyping and generally fast development. It gives a lot of performance benefits out of the box as you only fetch the CSS you use in your markup, and the reusability level is very high. I did choose UnoCSS over [Tailwind](https://tailwindcss.com/) as it is a lot faster (vs Tailwind's JIT), more customizable, and gives some cool features out of the box like e.g. [pure css icons](https://antfu.me/posts/icons-in-pure-css).

## Assets

Icons have been taken from an open-source project called [Lucide](https://lucide.dev/). Integrated easily with the brilliant [UnoCSS icons preset](https://unocss.dev/presets/icons).

## Architecture

For a detailed description and overview of the architecture, check [this document](https://www.craft.me/s/Qb7mtyIAi6s62S).