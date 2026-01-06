import {Link} from "react-router-dom";
import Logo from "../assets/Logo.png"


export default function Navbar() {
    return(
            <>
                <header class="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm shadow-sm">
                    <div class="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
                        <a href="index.html" class="flex items-center gap-3">
                            <img src={Logo} alt="Digital Arts Academy MW logo" class="w-10 h-10 rounded-md object-contain ring-2 ring-black/10 bg-white"></img>
                            <div>
                            <h1 class="text-lg font-bold">Digital Arts Academy <span class="text-sm font-semibold text-slate-500">MW</span></h1>
                            <p class="text-xs text-slate-500 -mt-1">Create • Learn • Shine</p>
                            </div>
                        </a>

                        <nav class="hidden md:flex items-center gap-4">
                            <Link to="/">
                                <a class="text-sm hover:text-indigo-600">Home</a>
                            </Link>
                            <Link to="/Courses">
                                <a class="text-sm hover:text-indigo-600">Courses</a>
                            </Link>
                            <Link to="/Team">
                                <a class="text-sm hover:text-indigo-600">Team</a>
                            </Link>
                            <Link to="/Contact">
                                <a class="text-sm hover:text-indigo-600">Contact</a>
                            </Link>
                        </nav>

                        <button id="dark-toggle" class="hidden md:flex items-center justify-center w-10 h-10 rounded-md ring-1 ring-slate-200 hover:bg-slate-100 transition-colors" aria-label="Toggle dark mode">
                            <svg id="dark-icon" class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                            <svg id="light-icon" class="w-5 h-5 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </button>

                        <div class="md:hidden flex items-center gap-2">
                            <button id="dark-toggle-mobile" class="p-2 rounded-md ring-1 ring-slate-200" aria-label="Toggle dark mode">
                            <svg id="dark-icon-mobile" class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                            <svg id="light-icon-mobile" class="w-5 h-5 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            </button>
                            <button id="mobile-menu-btn" class="p-2 rounded-md ring-1 ring-slate-200">Menu</button>
                        </div>
                    </div>
                    
                        <div id="mobile-nav" class="hidden md:hidden bg-white/90 border-t">
                            <div class="px-5 py-4 flex flex-col gap-2">
                                <a href="#courses" class="text-slate-700">Courses</a>
                                <a href="team.html" class="text-slate-700">Team</a>
                                <a href="#showcase" class="text-slate-700">Showcase</a>
                                <a href="contact.html" class="text-slate-700">Contact</a>
                            </div>
                        </div>
                </header>
            
            </>

    )
}