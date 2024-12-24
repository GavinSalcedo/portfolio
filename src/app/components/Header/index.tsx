'use client'
import React, { useState, useEffect } from 'react'
import NavItem from '../Navitem'
import Image from 'next/image'

function Header() {
  const [activeLink, setActiveLink] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY)
    }
  }, [])

  useEffect(() => {
    const viewportHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (offset >= 0 && offset + viewportHeight < documentHeight - 50) {
      setActiveLink(0)
    }

    if (offset >= 400 && offset + viewportHeight < documentHeight - 50) {
      setActiveLink(1)
    }

    if (offset + viewportHeight >= documentHeight - 50) {
      setActiveLink(2) // Example: Trigger action for bottom scroll
    }
  }, [offset])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold">Gavilan Salcedo</h1>
        <h2 className="mt-3 text-lg">Frontend Engineer</h2>
        <p className="mt-4 max-w-xs text-slate-500">
          I write and copy code from the internet and somehow it works.
        </p>

        <nav className="mt-16">
          <ul>
            <NavItem
              label="About"
              isActive={activeLink === 0}
              index={0}
              setActiveLink={setActiveLink}
            />
            <NavItem
              label="Experience"
              isActive={activeLink === 1}
              index={1}
              setActiveLink={setActiveLink}
            />
            <NavItem
              label="Blogs"
              isActive={activeLink === 2}
              index={2}
              setActiveLink={setActiveLink}
            />
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li
          className="mr-5 shrink-0 text-xs cursor-pointer"
          onClick={() =>
            window.location.replace('https://github.com/GavinSalcedo')
          }
        >
          <Image alt="Github" src="/icons/github.png" width={24} height={24} />
        </li>
        <li
          className="cursor-pointer"
          onClick={() =>
            window.location.replace('https://www.linkedin.com/in/goodguygavi/')
          }
        >
          <Image
            alt="LinkedIn"
            src="/icons/linkedin.png"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </header>
  )
}

export default Header
