import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <p class="read-the-docs">
     hola mundo
    </p>
  </div>
`

console.log("hola mundo")

