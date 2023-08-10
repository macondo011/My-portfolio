export function About(){
    return(
        
            <div className='flex flex-col justify-center items-center text-center bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 mx-2 py-1 md:py-12 gap-8 '>
             <section className=' bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto '>
                <div className='flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg '>
                    <div className='w-4 h-4 bg-red-600 rounded-full py-2'></div>
                    <div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                </div >
                <article className='text-left text-lg font-montserrat sm:text-2xl py-8 px-8'>
                    <p>
                        <span className='text-green-400'>marcosbautista $</span> cat aboutmarcos <br/> 
                    </p>
                    <p className='py-2'>
                        <span className='text-green-400' >aboutmarcos (main) $</span> Hello! I'm Marcos.  
                        I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long 
                        walks on the beach, and I believe artificial intelligence will inevitably rule 
                        us all one day. You should hire me!. <b className='animate-ping'>_</b>
                    </p>
                </article>
             </section>
             <section className='bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto '>
                <div className='flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg '>
                    <div className='w-4 h-4 bg-red-600 rounded-full py-2'></div>
                    <div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                </div >
                <article className='w-auto text-left text-lg font-montserrat sm:text-2xl py-8 px-8'>
                    <p>
                        <span className='text-green-400'>marcosbautista $</span> cd skills/tools<br/> 
                    </p>
                    <p className='py-2'>
                        <span className='text-green-400' >skills/tools (main) $</span> ls <br/>
                    </p>
                    <p className='text-green-400 pb-4'>Proficient With</p>
                    <ul className='grid grid-cols-2 gap-4'>
                        <li className='flex hover:-translate-y-1 hover:scale-100 gap-1'>
                           <img className='h-4 sm:h-8' src="js.png" alt="logo javascript" /> JavaScript
                        </li>
                        <li className='flex hover:-translate-y-1 hover:scale-100'>
                          <img src=" git.png" alt="logo de git"/>  git
                        </li>
                        <li className='flex hover:-translate-y-1 hover:scale-100'>
                           <img className='h-6 sm:h-8'/> React
                        </li>
                        <li className=' flex hover:-translate-y-1 hover:scale-100'>
                           <img className='h-6 sm:h-10' src="github.png" alt="logo de github"/> GitHub
                        </li>
                        <li className='hover:-translate-y-1 hover:scale-100'>Tailwind</li>
                        <li className='flex hover:-translate-y-1 hover:scale-100'>
                           <img className='h-6 sm:h-10' src="html.png" alt="logo de html" /> Html5
                        </li>
                        <li className='flex hover:-translate-y-1 hover:scale-100'>
                          <img src="css-3.png" alt="logo de css"/>  Css3
                        </li>
                        <li className='hover:-translate-y-1 hover:scale-100'>
                            Nodejs <b className='animate-ping'>_</b>
                        </li>
                    </ul>
                </article>
             </section>
             <section className='bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto '>
                <div className='flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg '>
                    <div className='w-4 h-4 bg-red-600 rounded-full py-2'></div>
                    <div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                </div >
                <article className='text-left text-lg font-montserrat sm:text-2xl py-8 px-8'>
                    <p>
                        <span className='text-green-400'>marcosbautista $</span> cd hobbies/interests<br/> 
                    </p>
                    <p className='py-2'>
                        <span className='text-green-400' >hobbies/interests (main) $</span> ls <br/>
                    </p>
                    
                    <ul className='gap-4'> 
                        <li className='py-1 hover:-translate-y-1 hover:scale-100'>📖 reading</li>
                        <li className='py-1 hover:-translate-y-1 hover:scale-100'>🎦 movies</li>
                        <li className='py-1 hover:-translate-y-1 hover:scale-100'>♟️ chess</li>
                        <li className='py-1 hover:-translate-y-1 hover:scale-100'>🎵 music <b className='animate-ping'>_</b></li>
                        
                    </ul>
                </article>
             </section>
            </div>
 
       
    )
}