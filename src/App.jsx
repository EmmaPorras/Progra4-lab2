import { useState } from 'react' 
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
 import { Counter } from './Components/counter'
 
 function App() {
   const [count, setCount] = useState(0) 
 
   //  número favorito
   function numeroFavorito() {
     if (count === 9) {
       return <p>El 9 es mi número favorito</p>
     }
     return null
   }
 
   return (
     <>
       <div>
         <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
 
       
       <Counter count={count} setCount={setCount} />
 
       {/* Mostrar mensaje cuando sea 9 */}
       {numeroFavorito()}
 
       <p className="read-the-docs">
         Emmanuel Porras Castro
       </p>
     </>
   )
 }
 
 export default App