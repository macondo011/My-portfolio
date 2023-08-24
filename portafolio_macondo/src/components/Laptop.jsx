
// eslint-disable-next-line react/prop-types
export  function Laptop({imageSrc}) {
    
  return (
    <section>
    <div className='mx-auto w-80 h-auto border-x-2 border-t-4 border-0 border-slate-400 border-t-slate-500 rounded-t-lg md:w-96'>
        <div className='border-solid  border-8 border-black rounded-t  h-52 w-auto md:w-[23.7rem]'>
            <img src={imageSrc} alt="image of project"  className='object-cover w-full  h-[12rem]'/>
        </div>
        </div>
        <div className=' flex justify-center w-80 h-2 bg-slate-400 mx-auto rounded-b-lg md:w-96'>
        <div className='w-12 h-1 bg-slate-500 mx-16 rounded-b-lg'></div>
        </div>
        <div className='w-72 bg-slate-500 mx-auto rounded-b-lg md:w-[22rem] h-2'></div>

    </section>
  )
}


