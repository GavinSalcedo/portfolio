'use client'
import { useState, useEffect } from 'react'
import JobCards from './components/JobCards'
import NavItem from './components/Navitem'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [activeLink, setActiveLink] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY)
    }
  }, [])

  useEffect(() => {
    if (offset >= 0) {
      setActiveLink(0)
    }

    if (offset >= 400) {
      setActiveLink(1)
    }
  }, [offset])

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
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
                    label="Projects"
                    isActive={activeLink === 2}
                    index={2}
                    setActiveLink={setActiveLink}
                  />
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5 shrink-0 text-xs">
                <Image
                  alt="Github"
                  src="/icons/github.png"
                  width={24}
                  height={24}
                />
              </li>
              <li>
                <Image
                  alt="LinkedIn"
                  src="/icons/linkedin.png"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </header>

          <main className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="font-semibold text-slate-500 text-justify">
                <p className="mb-4">
                  I’m a developer who loves turning ideas into clean,
                  functional, and user-friendly web experiences. Most of my work
                  revolves around{' '}
                  <a className="text-slate-200 hover:text-teal-300">
                    React.js{' '}
                  </a>
                  and{' '}
                  <a className="text-slate-200 hover:text-teal-300">Next.js</a>,
                  where I build stuff that’s not just nice to look at but also
                  fast, accessible, and easy to use. I’ve worked with teams
                  across the USA, Canada, and Australia, solving real problems
                  and helping businesses connect with their users.
                </p>
                <p className="mb-4">
                  Lately, I’ve been diving into the backend world{' '}
                  <a className="text-slate-200">Node.js</a> and{' '}
                  <a className="text-slate-200">PostgreSQL</a>, challenging
                  myself to grow into a full-stack role. Basically, I enjoy
                  learning new things and finding better ways to build.
                </p>
                <p className="mb-16">
                  When I’m not coding, you’ll probably find me at the gym ,
                  tinkering with side projects (like a URL shortener app or
                  wedding invites for friends), or geeking out over Next.js and{' '}
                  <a className="text-slate-200">TypeScript</a> . I’m always up
                  for a challenge, whether it’s figuring out a tricky CI/CD
                  pipeline or optimizing some gnarly piece of UI.
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <JobCards
                dateRange="Sep - Nov 2024"
                jobPosition="Freelance Team Lead"
                body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
                tags={['JavaScript', 'TypeScript', 'Code Review', 'Node.js']}
                link="https://www.projectneo.dev/"
              />

              <JobCards
                dateRange="Aug 2023 - Aug 2024"
                jobPosition="Frontend Developer | Next.js Developer"
                body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
                tags={[
                  'JavaScript',
                  'TypeScript',
                  'Storybook',
                  'GraphQL',
                  'Jest',
                ]}
                link="https://www.accelo.com/"
              />

              <JobCards
                dateRange="Jan 2021 - Aug 2023"
                jobPosition="Frontend Developer | Software Engineer"
                body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
                tags={[
                  'JavaScript',
                  'TypeScript',
                  'Storybook',
                  'GraphQL',
                  'Styled Components',
                ]}
                link="https://stratpoint.com/"
              />

              <JobCards
                dateRange="Jan 2020 - Jan 2021 "
                jobPosition="Junior Frontend Developer"
                body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
                tags={[
                  'JavaScript',
                  'TypeScript',
                  'Storybook',
                  'GraphQL',
                  'MongoDB',
                  'Figma',
                ]}
                link="https://fasttrackph.com/"
              />
              <JobCards
                dateRange="Jul 2019 - Oct 2019"
                jobPosition="Marketing Intern | Support Associate"
                body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
                tags={[
                  'Facebook',
                  'Instagram',
                  'Twitter',
                  'Admin Task',
                  'Chat Support',
                ]}
                link="https://fasttrackph.com/"
              />
            </section>
            <div>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >
                View My Resume
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
