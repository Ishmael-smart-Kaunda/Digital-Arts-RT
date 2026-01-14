import { FaFacebook,FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
export default function () {
    return (
        <footer class="bg-[#020617] text-white border-t border-white/10">
            <div class="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                <h4 class="font-bold">Digital Arts Academy MW</h4>
                <p class="mt-2 text-sm text-slate-300">Creating opportunities for Malawian creatives.</p>
                <div class="mt-3 text-xs text-slate-400">Habakkuk 2:2 • Philippians 4:13</div>
               
                  <article className="mt-5 py-2" >
                    <h5 className="font-semibold">Follow Us</h5>
                    <div  className="mt-3 flex flex-row items-center gap-4">
                        <a href="https://web.facebook.com/profile.php?id=61586510541142" >
                           <FaFacebook className="h-[24px] w-[24px] transition-transform  hover:scale-110" />
                        </a>
                       < a href="https://www.instagram.com/digitalartacademymw/">
                           <FaInstagram className="h-[24px] w-[24px] transition-transform hover:scale-110" />
                       </a>
                       <a href="https://www.tiktok.com/@digitalartsacademy.mw?lang=en">
                        <SiTiktok className="h-[23px] w-[23px] transition-transform  hover:scale-110"  />
                       </a>
                           
                        <a href="https://www.youtube.com/channel/UC-tcfLP7qf_sDgAmStUSjWw">
                           <FaYoutube className="h-[25px] w-[25px] hover:scale-110"  />
                        </a>
                    </div>
                </article>
                </div>

               

                <div>
                <h5 class="font-semibold">Quick links</h5>
                <ul class="w-1/2 md:w-[fit-content] mt-3 text-sm text-slate-300 space-y-2">
                    <li className="hover:text-indigo-300 "><a href="#courses">Courses</a></li>
                    <li className="hover:text-indigo-300 " ><a href="team.html">Team</a></li>
                    <li className="hover:text-indigo-300 " ><a href="contact.html">Contact</a></li>
                </ul>
                </div>

                <div>
                <h5 class="font-semibold">Contact</h5>
                <p class="mt-2 text-sm text-slate-300">Email: hello@digitalartsmw.example</p>
                 
                 
                </div>
            </div>

            <div class="text-center text-xs text-slate-500 py-4">© <span id="year"></span> Digital Arts Academy MW — All rights reserved</div>
        </footer>
    )
}