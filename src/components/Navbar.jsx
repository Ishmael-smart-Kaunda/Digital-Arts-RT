import {Link} from "react-router-dom";
import Logo from "../assets/Logo.png"
import { useState } from "react";

export default function Navbar() {
    const NavLinks=[
        {id:1, linkName:"Home", linkTo: "/"},
        {id:2, linkName:"Courses", linkTo: "/Courses"},
        {id:3, linkName:"Team", linkTo: "/Team"},
        {id:4, linkName:"Contact", linkTo: "/Contact"}
    ]
    const Links=NavLinks.map(link => <Link key={link.id} to={link.linkTo}>
                                      <a onClick={()=>setOpen(false)} className="text-sm hover:text-indigo-600" >{link.linkName}</a>
                                    </Link>
                              )
    const [open, setOpen]=useState(false)
    return(
            <>
                <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm shadow-sm">
                    <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
                        <a href="index.html" className="flex items-center gap-3">
                            <img src={Logo} alt="Digital Arts Academy MW logo" className="w-10 h-10 rounded-md object-contain ring-2 ring-black/10 bg-white"></img>
                            <div>
                            <h1 className="text-lg font-bold">Digital Arts Academy <span className="text-sm font-semibold text-slate-500">MW</span></h1>
                            <p className="text-xs text-slate-500 -mt-1">Create • Learn • Shine</p>
                            </div>
                        </a>
                        {/* Navigation on wider screen */}
                        <nav className="hidden md:flex items-center gap-4">
                              {Links}
                        </nav>

                        {/* navigation menu for mobile devices */}
                        {open && (
                            <nav className="md:hidden flex flex-col items-center gap-4 absolute top-15 left-0 transition px-5 py-4 space-y-2 bg-white/60 backdrop-blur-sm shadow-sm w-full">
                              {Links}
                            </nav>
                          )
                        }

                        <button id="dark-toggle" className="hidden md:flex items-center justify-center w-10 h-10 rounded-md ring-1 ring-slate-200 hover:bg-slate-100 transition-colors" aria-label="Toggle dark mode">
                            <svg id="dark-icon" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                            <svg id="light-icon" className="w-5 h-5 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </button>

                        <div class="md:hidden flex items-center gap-2">
                            <button id="dark-toggle-mobile" className="p-2 rounded-md ring-1 ring-slate-200" aria-label="Toggle dark mode">
                                <svg id="dark-icon-mobile" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                </svg>
                                <svg id="light-icon-mobile" className="w-5 h-5 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </button>
                            <button id="mobile-menu-btn" onClick={()=>setOpen(!open)} className="p-2 rounded-md ring-1 ring-slate-200">Menu</button>
                        </div>
                    </div>
                    
                </header>
            
            </>

    )
}