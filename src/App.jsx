import { useState } from 'react'
import './App.css'


function App() {
const[color , setColor] = useState('violet')

  return (
    <>
        
           <div className='w-full h-screen absolute flex justify-center' 
           
           style={{backgroundColor:color}}>

            <div className='w-[80vw] h-24 relative top-[80%] bg-white rounded-full flex justify-center '>
                  <div className='flex justify-center items-center gap-8'>

              <button className='bg-red-600 w-28 h-9 rounded-xl text-white'
              
              onClick={ () =>{ setColor('red')}}>red </button>

              <button className='bg-orange-600 w-28 h-9 rounded-xl text-white'
              onClick={ () =>{
                setColor('orange')
              }}>orange </button>

              <button className='bg-yellow-600 w-28 h-9 rounded-xl text-white' 
              onClick={ () =>{ setColor('yellow')}}>yellow </button>

              {/* <button className='bg-green-600 w-28 h-9 rounded-xl text-white' onClick={() =>{setColor('green')}}>green </button> */}
              <button className='bg-blue-600 w-28 h-9 rounded-xl text-white' onClick={ () =>{ setColor('blue')}}>blue </button>
              <button className='bg-indigo-600 w-28 h-9 rounded-xl text-white' onClick={() =>setColor('#ff0066')}>indigo</button>
              <button className='bg-gray-100 w-28 h-9 rounded-xl text-black' onClick={() =>{ setColor('white')}}>Light</button>
              <button className='bg-gray-900 w-28 h-9 rounded-xl text-white' onClick={() =>{ setColor('#1a1a1a')}}>DarkMode</button>

              <button id='wow' onClick={ () => {setColor()}}> wow </button>

           
                  </div>

               
               </div>
           </div>
    </>
  )
}

export default App
