'use client'
import { About } from "@/components/home/About"
import { Focus } from "@/components/home/Focus"
import { Footer } from "@/components/home/Footer"
import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { Team } from "@/components/home/Team"
import { Navbar } from "@/components/Navbar"
import { useApp } from "@/context/AppContext"

export const  HomeView = () => {
    
    return(
    <div className="w-[100%] text-black ">
        <Navbar/>
        <Hero/>
        <Services/>
        <About />
        <Focus />
        <Team/>
        <Footer />
    </div>
)
}