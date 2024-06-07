import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          // onclick method always takes an function and agar hum setColor() it will give return value which onclick doesn't takes 
          // soo hum call back lengy or yha hmare pass option bhi ni hai kyuki parameter pass krna hai
          style={{backgroundColor:"red"}}>red</button>
          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>green</button>
          <button
          onClick={()=>setColor("pink")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>pink</button>
          <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button 
          onClick={()=>setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}>olive</button>
        </div>
        </div>
    </div>
  );
}

export default App;

// function App() {
//   const [color, setColor] = useState("blue");
//   return (
//     <div
//       style={{ width: "100%", height: "100vh", backgroundColor: color }}
//     >
//     </div>
//   );
// }


