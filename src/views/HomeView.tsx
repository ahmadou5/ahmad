'use client'
import { About } from "@/components/home/About"
import { Focus } from "@/components/home/Focus"
import { Footer } from "@/components/home/Footer"
import { Hero } from "@/components/home/Hero"
import LandingPage from "@/components/home/newView"
import { Services } from "@/components/home/Services"
import { Team } from "@/components/home/Team"
import { Navbar } from "@/components/Navbar"
import { useApp } from "@/context/AppContext"

export const  HomeView = () => {
  const {burger, setBurger} = useApp();

  const toggleModal = () => {
    setBurger(!burger);
  };
    return(
    <div className="w-[100%] text-black ">
      <LandingPage />
      {burger && (
        <div className="absolute top-0 right-0 z-10 w-full h-full overflow-y-auto bg-black bg-opacity-75">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="bg-white mb-[390px] ml-auto mr-2 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Hamburger Menu</h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">Home Service</a>
                </li>
              </ul>
              <button onClick={toggleModal} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
)
}