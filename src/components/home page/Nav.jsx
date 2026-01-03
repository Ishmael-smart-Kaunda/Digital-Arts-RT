import { useState } from "react";

const links=[
  {name:'Courses', to: '/Courses'},
  {name:'Team', to: '#'},
  { name:'Showcase', to: '#'},
  { name:'Contact', to: 'Contact'},
]




function Navigation({onPageChange}){

  const pages=[
       {name:'home'},
       {name:'courses'},
       {name: 'team'},
       {name:'contact'}
  ]
  const[open, setOpen]=useState(false);
  

  const pageNames =pages.map((page)=>( <li key={page.name} className="list-none  py-0.45"> 
                                       <button onClick={()=>onPageChange(page.name)} >{page.name} </button></li> 
                  ))

    

     const openMenu=<span className='text-white-900' >Menu</span>
     const closeMenu=<span className='text-white-900' >Close</span>

  return(
         <nav className='flex flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white backdrop-blur-sm shadow-sm h-15 w-full px-15 md:px-5 py-8 border-b-0.7'>
              <Logo /> 

              {/* Desktop Links */}
              <ul className='hidden md:flex space-x-5 '>
                 {pageNames}
              </ul>

            {/*Mobile Menu links */}
            {open &&(
               <ul className='md:hidden w-full bg-slate-900 text-white-600 absolute top-15 left-0 transition px-5 py-4 space-y-2'>
                    {pageNames}
               </ul>
               )
            }

            {/*Menu button for Mobile  */} 

             <div className='md:hidden '>
              <button onClick={()=>setOpen(!open)} className=" toggle-btn border-white bg-blue">
                {open ? closeMenu: openMenu}
              </button>
             </div>
            <ToggleTheme/>
         </nav>
  )}

  function Logo(){

        return(
               <>
                  <div className=" flex items-center justify-between py-3">
                    <a href="index.html" className="flex items-center gap-3">
                      <img src='src/assets/images/Logo/MalawiFlag.png' alt='Digital Arts Academy MW logo' className="w-10 h-10 rounded-md object-contain ring-2 ring-black/10 bg-white"/>
                      <div>
                        <h1 className="text-lg text-white dark:text-white font-bold">Digital Arts Academy <span className="text-sm font-semibold text-slate-300">MW</span></h1>
                        <p className="text-xs text-slate-300 -mt-1">Create • Learn • Shine</p>
                      </div>
                    </a>
                  </div>
               </>
              )
}

function ToggleTheme(){
        const [theme, setTheme] = useState('dark')
        
        function toggleThem(){
            if(theme==='dark'){
              setTheme('light')
            }
            else{
              setTheme('dark')
            } 

        }
        return(
          <>
              <button onClick={toggleThem} className="border-white p-4" >{theme}</button>
          </>
        )

}
  export default Navigation