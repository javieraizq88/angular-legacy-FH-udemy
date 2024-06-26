import './style.css'
// import './topics/01-basic-types'
import './topics/02-object-interface'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p class="read-the-docs">
     hola mundo
    </p>
  </div>
`

console.log("desde main")

