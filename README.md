# React to Vite

## 1. Initial Environment

### React Project (Manual Build-up)

```bash
$ node -v
v16.20.2
```

```json
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^16.8"
},
"devDependencies": {
    "react-scripts": "4.0.3",
    "typescript": "4.3.5"
},
```

## 2. Convert to Vite project

> `NOTE` _vite@4 runs under node@16_
```bash
$ yarn add vite@4.5.2
$ yarn add @vitejs/plugin-react
```
```json
"scripts": {
    "start": "vite",
    "build": "tsc && vite build"
},
```
```html
<div id="root"></div>
<script type="module" src="/src/index.tsx"></script>
```
```bash
$ mv public/index.html .
```
```bash
$ touch vite.config.ts
```

### Use existing env vars

```bash
$ yarn add vite-plugin-env-compatible
```
```ts
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [..., envCompatible()],
  define: {
    'process.env': process.env,
  },
  ...
});
```

## 3. Library migration

### ✅ crypto-js

```bash
$ yarn add crypto-js
$ yarn add -D @types/crypto-js
```