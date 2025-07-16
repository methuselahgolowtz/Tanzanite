import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='container'>


 <div className='navigation-bar bg-violet-950 w-screen h-25 fixed top-0 p- right-0 left-0'>
 <ul className='text-blue-100 w-screen  p-4 flex justify-center  h-20 items-center'>
  <div className='h-10 w-15 m-6 bendera' ></div>
 <div className='text-xl font-cabinet'>
  
  <h1 className='md:text-2xl lg:text-4xl'>
  Tanzanite Skills Accademy
  </h1>
  <p className='text-sm mx-5 text-yellow-200'>jifunze leo badilisha maisha yako</p>
  
  </div>
 </ul>
 </div>

{/* this is for main body*/ }
</div>


<div className='w-full h-80 bg-amber-100 mt-20 picha scroll-smooth flex items-center justify-center font-cabinet'>

  <p className='text-white font-extrabold lg:text-5xl p-4 neno'>
    Increase your skills with 
      Tanzanite skills Accademy
    </p>
  
</div>

<div className='main-body flex flex-col font-cabinet w-screen  h-screen items-center'>

  <div className='text-amber-200 mt-10'>
  <div className='bg-blue-950 w-100 md:w-150 lg:w-200 p-10 h-50 cursor-pointer justify-center flex flex-col items-center'>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Explicabo natus et voluptatem porro, similique dolores 
   eligendi veniam facilis, earum sequi repellat 
  accusamus minima corrupti harum velit repellendus 
  dolor illum ab.</p>

  <button className='bg-amber-300 text-blue-950 p-2 px-5 m-2  batani'>start learning</button>
    
  </div>
  </div>

<div className='mt-20 '>
  <p className='text-4xl border-b-2 border-amber-400 text-blue-100 p-3'>services</p>

</div>

<div className='flex flex-col items-center lg:flex-row my-4 lg:flex-wrap lg:items-center lg:justify-center'>

  <div className='w-120 h-70 service cursor-pointer bg-blue-950 m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>personal development</p>
    <label htmlFor="words" className='p-7 text-white'> Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Autem numquam ut iure necessitatibus molestiae 
      vero delectus libero tempore ad quibusdam, natus illum 
      voluptatem architecto reprehenderit soluta, ex quas iusto inventore.</label>

  </div>
 
  <div className='w-120 h-70 service bg-blue-950 cursor-pointer m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>personal finance management</p>
    <label htmlFor="words" className='p-7 text-white'> Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Autem numquam ut iure necessitatibus molestiae 
      vero delectus libero tempore ad quibusdam, natus illum 
      voluptatem architecto reprehenderit soluta, ex quas iusto inventore.</label>

  </div>

 
  <div className='w-120 cursor-pointer h-70 service bg-blue-950 m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>Career Development</p>
    <label htmlFor="words" className='p-7 text-white'> Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Autem numquam ut iure necessitatibus molestiae 
      vero delectus libero tempore ad quibusdam, natus illum 
      voluptatem architecto reprehenderit soluta, ex quas iusto inventore.</label>

  </div>

 
  <div className='w-120 h-70 cursor-pointer service bg-blue-950 m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>Technological Development</p>
    <label htmlFor="words" className='p-7 text-white'> Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Autem numquam ut iure necessitatibus molestiae 
      vero delectus libero tempore ad quibusdam, natus illum 
      voluptatem architecto reprehenderit soluta, ex quas iusto inventore.</label>

  </div>

  <div className='w-120 h-70 cursor-pointer service bg-blue-950 m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>Business development</p>
    <label htmlFor="words" className='p-7 text-white'> Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Autem numquam ut iure necessitatibus molestiae 
      vero delectus libero tempore ad quibusdam, natus illum 
      voluptatem architecto reprehenderit soluta, ex quas iusto inventore.</label>

  </div>
</div>


  <div>
<p className='text-5xl border-amber-50 text-amber-200 border-b-2  p-4'>For more info</p>

  </div>
<div className='m-5 h-100 text-blue-100 lg:flex lg:flex-row'>

  <div className='w-120 h-70  m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>contacts</p>
    <label htmlFor="words" className='p-7 text-white'> 
      <ul>
        <li>+255749722722</li>
        <li>+255749722722</li>
         <li>+255749722722</li>
        <li>+255749722722</li>
      
      </ul>
      </label>

  </div>

    <div className='w-120 h-70  m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>social links</p>
    <label htmlFor="words" className='p-7 text-white'>
      <ul>
        <li>Tanzaniteskills.ac.tz</li>
        <li>Tanzaniteskill.google.com</li>
        <li>Tanzaniteskill.fb.com</li>
      </ul>
     
     </label>

  </div>

     <div className='w-120 h-70  m-10 flex flex-col items-center justify-center'>
    <p className='text-2xl text-amber-200 border-white border-b-2 p-3'>emails</p>
    <label htmlFor="words" className='p-7 text-white'> 
<ul>
  <li>info@Tanzaniteskill.ac.tz</li>
  <li>methuselahenock783@gmail.com</li>
  <li>methuselahenock030@gmail.com</li>
</ul>

    </label>

  </div>
</div>

</div>





    </>
  )
}

export default App
