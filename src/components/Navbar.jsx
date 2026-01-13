import {Link} from "react-router-dom";
import Logo from "../assets/Logo.png"
import { useState } from "react";


import { FiMenu, FiX , FiSun, FiMoon} from "react-icons/fi";

export default function Navbar() {
    const NavLinks=[
        {id:1, linkName:"Home", linkTo: "/"},
        {id:2, linkName:"Courses", linkTo: "/Courses"},
        {id:3, linkName:"Team", linkTo: "/Team"},
        {id:4, linkName:"Contact", linkTo: "/Contact"}
    ]
    const Links=NavLinks.map(link => <Link key={link.id} to={link.linkTo}>
                                      <a onClick={()=>setOpen(false)} className="text-sm text-primaryText hover:text-indigo-400" >{link.linkName}</a>
                                    </Link>
                            )
    const [open, setOpen]=useState(false)

    const [dark,setDark]=useState(false)

    function toggleTheme(){
        setDark(!dark)
        document.documentElement.classList.toggle('dark')
        
    }
    return(
            <>
                <header className={`fixed top-0 left-0 right-0 z-50 bg-bgPrimary backdrop-blur-sm shadow-sm ${dark? 'border-b border-white/10': ''}`}>
                    <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
                        <a href="index.html" className="flex items-center gap-3">
                            <img src={Logo} alt="Digital Arts Academy MW logo" className="w-10 h-10 rounded-md object-contain ring-2 ring-black/10 bg-white"></img>
                            <div>
                             <h1 className="text-lg text-primaryText font-bold">Digital Arts Academy <span className="text-sm font-semibold text-slate-500">MW</span></h1>
                             <p className="text-xs text-slate-500 -mt-1">Create • Learn • Shine</p>
                            </div>
                        </a>
                        {/* Navigation on wider screen */}
                        <nav className="hidden md:flex items-center gap-4">
                              {Links}
                        </nav>

                        {/* navigation menu for mobile devices */}
                        {open && (
                            <nav className={`md:hidden flex flex-col items-center gap-1 absolute ${dark? 'border-b border-white/10': ''} top-15 left-0 transition px-5 py-4 space-y-2 bg-bgPrimary backdrop-blur-sm shadow-sm w-full`}>
                              {Links}
                            </nav>
                          )
                        }

                        <button onClick={toggleTheme} id="dark-toggle" className={`hidden md:flex items-center justify-center w-10 h-10 rounded-md ring-1 ring-slate-600 ${dark ?'hover:bg-slate-700 ring-slate-100':''} hover:bg-slate-100 transition-colors`} aria-label="Toggle dark mode">
                           { dark ?<FiSun className="text-white"/>:<FiMoon /> }
                      </button>

                        <div class="md:hidden flex items-center gap-2">
                            <button onClick={toggleTheme} id="dark-toggle-mobile" className={`p-2 rounded-md ring-1 ring-slate-600 ${dark ?'hover:bg-slate-700 ring-slate-100':''} hover:bg-slate-100 transition-colors`} aria-label="Toggle dark mode">
                              { dark ?<FiSun className="text-white" /> :<FiMoon/>}
                            </button>
                            <button id="mobile-menu-btn" onClick={()=>setOpen(!open)} className={`p-2 rounded-md ring-1 ring-slate-200 ${dark?'hover:bg-slate-700':''} hover:bg-slate-100 transition-colors`}>
                                {open ? (<FiX className={`${dark?'text-white':''} hover:text-red-700`}/>) : <FiMenu className={`${dark?'text-white hover:text-white':''} hover:text-gray-700`}/>}
                          </button>
                        </div>
                    </div>
                    
                </header>
            
            </>

    )
}