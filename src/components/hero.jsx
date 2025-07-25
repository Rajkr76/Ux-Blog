import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons'


function Hero() {
  return (
    <main>
      <nav className='flex  justify-between px-4  sm:px-8 py-3'>
        <h1 className='font-mono font-medium lg:text-xl sm:text-[12px]'>BLOG PAGE</h1>
         <h1 className='font-sans font-medium text-base'>	&#9679; Menu</h1>
      </nav>
      <section className='flex justify-center px-2 sm:px-0'>
        <div className='relative hidden sm:block '>
          <img src="https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home image" className=' h-[90vh] w-[96vw] px-2 py-2 object-cover object-center ' />

      {/* font awesome icon for left right scrolling */}
      
          {/* <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} size="2xl" className='z-10 absolute top-[36rem] left-[1400px] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]'/>
          <FontAwesomeIcon icon={faWindowMinimize} style={{color: "#ffffff", transform: "rotate(90deg)"}} size="2xl" className='z-10 absolute top-[36rem] left-[1380px] '/>
           <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff", transform: "rotate(180deg)"}} size="2xl" className='z-10 absolute top-[36rem] left-[1340px]'/> */}

          
        </div>
      </section>
    </main>
  )
}

export default Hero
