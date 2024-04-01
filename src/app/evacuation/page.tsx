"use client"

import Footer from "../components/frontend/Footer"
import Evacuation from "../components/frontend/evacuation/Evacuation"
import Dont from "../components/frontend/evacuation/Dont"
import Status from "../components/frontend/evacuation/Status"
import Contact from "../components/frontend/evacuation/Contact"
import Sidebar from "../components/frontend/evacuation/Sidebar"
import Navbar from "../components/frontend/Navbar"

export default function EducationPage() {
  return (
    <>
      <Navbar/>
      <div className="flex px-[5.4%] pt-5">
        <Sidebar/>
        <div className="w-[100%]">
          <Evacuation />
          <Dont />
          <Status />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}
