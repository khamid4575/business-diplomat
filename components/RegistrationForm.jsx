"use client"

import { useState } from "react"
import { Bebas_Neue } from "next/font/google"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    currentActivity: "",
    projectGoals: "",
    position: "",
    employees: "",
    countries: "",
    government: "",
    certification: "",
  })

  const handleInputChange = () => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto border border-dashed border-[#FF7A00] rounded-2xl p-8">
        {/* Form Title */}
        <h2
          className={`${bebasNeue.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 text-center mb-12 tracking-wide font-normal`}
        >
          BUSINESS DIPLOMAT 1.2 - ISHTIROK UCHUN
          <br />
          QABUL BOSHLADI
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="To'liq ism-sharifingizni kiriting*"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="+998 99-999-9999"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Emailingizni kiriting*"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Age */}
          <div>
            <input
              type="number"
              name="age"
              placeholder="Necha yoshdasiz*"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Current Activity */}
          <div>
            <textarea
              name="currentActivity"
              placeholder="Bugungi kunda siz istiqomat qiladigan shahar yoki viloyatni kiriting:"
              value={formData.currentActivity}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500 resize-none"
            />
          </div>

          {/* Project Goals */}
          <div>
            <textarea
              name="projectGoals"
              placeholder="Loyihada ishtirok etishingizdan asosiy maqsadingiz bilan bo'lishingiz. Sizning kutuvlaringiz nimalardan iborat*"
              value={formData.projectGoals}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500 resize-none"
              required
            />
          </div>

          {/* Position and Company */}
          <div>
            <input
              type="text"
              name="position"
              placeholder="Lavozimingiz, Korxonangiz nomi va Manzili*"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Number of Employees */}
          <div>
            <input
              type="text"
              name="employees"
              placeholder="Qo'lingizda necha nafar xodim ishlaydi*"
              value={formData.employees}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Countries Visited */}
          <div>
            <input
              type="text"
              name="countries"
              placeholder="Oxirgi 10 yil ichida safar qilgan Davlatlaringiz ro'yxati*"
              value={formData.countries}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Government Connections */}
          <div>
            <div className="text-gray-700 mb-2 px-2">
              Business Diplomat "Level One" Sertifikatini qo'lga kiritganmisiz?
            </div>
            <select
              name="certification"
              value={formData.certification}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 bg-white"
              required
            >
              <option value="">Ha, kiritganman</option>
              <option value="yes">Ha, kiritganman</option>
              <option value="no">Yo'q, kiritmaganman</option>
              <option value="process">Jarayonda</option>
            </select>
          </div>

          {/* Government Response */}
          <div>
            <textarea
              name="government"
              placeholder="Biror davlat Visasiga murojaat qilgan bo'lsangiz, Rad javobini (Otkaz) olganmisiz? Agar Ha bo'lsa, davlat nomi va Olingan sanani ko'rsating"
              value={formData.government}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-500 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              MA'LUMOTLARNI YUBORISH
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
