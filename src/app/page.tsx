'use client'
import { useState } from 'react'
import CardContainer from './components/CardContainer'
import Tags from './components/Tags'

export default function Home() {
  const [activeLink, setActiveLink] = useState(0)

  function NavItem({
    label,
    isActive,
    index,
  }: {
    label: string
    isActive: boolean
    index: number
  }) {
    return (
      <li onClick={() => setActiveLink(index)}>
        <a
          className={`group flex items-center py-3 cursor-pointer hover:text-slate-200 ${
            isActive ? 'text-slate-200' : 'text-slate-500'
          }`}
        >
          <span
            className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-20 group-hover:bg-slate-200 
    ${isActive ? '!w-20 !bg-slate-200' : ''} motion-reduce:transition-none`}
          />

          <span>{label}</span>
        </a>
      </li>
    )
  }

  return (
    <div className="flex justify-evenly gap-24">
      <header>
        <h1 className="text-5xl font-bold">Gavilan Salcedo</h1>
        <h2 className="mt-3 text-lg">Frontend Engineer</h2>
        <p className="mt-4 max-w-xs text-slate-500">
          I build pixel-perfect, engaging and accessible digital experiences.
        </p>

        <nav className="mt-16">
          <ul>
            <NavItem label="About" isActive={activeLink === 0} index={0} />
            <NavItem label="Experience" isActive={activeLink === 1} index={1} />
            <NavItem label="Projects" isActive={activeLink === 2} index={2} />
          </ul>
        </nav>
      </header>

      <main className="w-3/6 lg:pb-24">
        <section>
          <div className="font-semibold text-slate-500 text-justify">
            <p className="mb-4">
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an{' '}
              <a className="text-slate-200 hover:text-teal-300">
                advertising agency
              </a>
              , a <a className="text-slate-200 hover:text-teal-300">start-up</a>{' '}
              , a{' '}
              <a className="text-slate-200 hover:text-teal-300">
                huge corporation
              </a>
              , and a{' '}
              <a className="text-slate-200 hover:text-teal-300">
                digital product studio
              </a>
              .
            </p>
            <p className="mb-4">
              My main focus these days is building accessible user interfaces
              for our customers at Klaviyo. I most enjoy building software in
              the sweet spot where design and engineering meet — things that
              look good but are also built well under the hood. In my free time,
              I{`'`}ve also released an online video course that covers
              everything you need to know to build a web app with the Spotify
              API.
            </p>
            <p className="mb-4">
              When I’m not at the computer, I’m usually rock climbing, reading,
              hanging out with my wife and two cats, or running around Hyrule
              searching for Korok seeds.
            </p>
          </div>
        </section>

        <section>
          <CardContainer>
            <div className="flex gap-10">
              <label className="w-3/4 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">
                Aug 2023 - Aug 2024
              </label>
              <div className="flex flex-col gap-3">
                <label className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                  Next.js Developer | Frontend Engineer
                </label>
                <p className="text-slate-500">
                  Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility.
                </p>
                <ul className="w-fit flex gap-2 flex-wrap">
                  <Tags label="JavaScript" />
                  <Tags label="TypeScript" />
                  <Tags label="Storybook" />
                  <Tags label="GraphQL" />
                  <Tags label="Jest" />
                </ul>
              </div>
            </div>
          </CardContainer>
        </section>
      </main>
    </div>
  )
}
