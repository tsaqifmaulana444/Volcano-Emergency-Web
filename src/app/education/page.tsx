"use client"

import Footer from "../components/frontend/Footer"
import VolcanoProcess from "../components/frontend/education/VolcanoProcess"
import Religious from "../components/frontend/education/Religious"
import Benefit from "../components/frontend/education/Benefit"
import Damage from "../components/frontend/education/Damage"
import Sidebar from "../components/frontend/education/Sidebar"
import Navbar from "../components/frontend/Navbar"

export default function EducationPage() {
  return (
    <>
      <Navbar/>
      <div className="flex px-[5.4%] pt-5">
        <Sidebar/>
        <div className="w-[100%]">
          <VolcanoProcess />
          <Religious />
          <Benefit />
          <Damage />
        </div>
      </div>
      <Footer />
    </>
  )
}
