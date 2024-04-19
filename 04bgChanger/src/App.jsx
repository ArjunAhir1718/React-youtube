import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed bottom-12 justify-center flex flex-wrap inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: 'red'}}>
          Red</button>
          <button 
           onClick={() => setColor('grey')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: 'grey'}}>
          Grey</button>
          <button 
           onClick={() => setColor('#4949bb')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: ' #4949bb'}}>
          Blue</button>
           
          <button
           onClick={() => setColor('white')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg text-xl" 
          style={{backgroundColor: 'white'}}>
          White</button>
          <button 
           onClick={() => setColor(' #480254')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: ' #3a0145'}}>
          Purple</button>
          <button
           onClick={() => setColor('#FF8C00')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: '#FF8C00'}}>
          Orange</button>
          <button 
           onClick={() => setColor('#964B00')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: ' #964B00'}}>
          Brown</button>
          <button
           onClick={() => setColor('green')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: 'Green'}}>
          Green</button>
          <button
           onClick={() => setColor('#FFB6C1')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: '#FFB6C1'}}>
          Pink</button>
          <button
           onClick={() => setColor('black')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-xl" 
          style={{backgroundColor: 'black'}}>
          Black</button>
        </div>
      </div>
    </div>
  )
}

  export default App
