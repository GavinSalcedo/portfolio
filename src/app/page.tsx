'use client'
import { useState } from 'react'
import JobCards from './components/JobCards'
import NavItem from './components/Navitem'
import Link from 'next/link'

export default function Home() {
  const [activeLink, setActiveLink] = useState(0)

  return (
    <div className="flex justify-evenly gap-24">
      <header className="sticky top-0 self-start py-6">
        <h1 className="text-5xl font-bold">Gavilan Salcedo</h1>
        <h2 className="mt-3 text-lg">Frontend Engineer</h2>
        <p className="mt-4 max-w-xs text-slate-500">
          I build pixel-perfect, engaging and accessible digital experiences.
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
      </header>

      <main className="w-3/6 lg:pb-24">
        <section>
          <div className="font-semibold text-slate-500 text-justify">
            <p className="mb-4">
              I’m a developer who loves turning ideas into clean, functional,
              and user-friendly web experiences. Most of my work revolves around{' '}
              <a className="text-slate-200 hover:text-teal-300">React.js </a>
              and <a className="text-slate-200 hover:text-teal-300">Next.js</a>,
              where I build stuff that’s not just nice to look at but also fast,
              accessible, and easy to use. I’ve worked with teams across the
              USA, Canada, and Australia, solving real problems and helping
              businesses connect with their users.
            </p>
            <p className="mb-4">
              Lately, I’ve been diving into the backend world{' '}
              <a className="text-slate-200">Node.js</a> and{' '}
              <a className="text-slate-200">PostgreSQL</a>, challenging myself
              to grow into a full-stack role. Basically, I enjoy learning new
              things and finding better ways to build.
            </p>
            <p className="mb-16">
              When I’m not coding, you’ll probably find me at the gym ,
              tinkering with side projects (like a URL shortener app or wedding
              invites for friends), or geeking out over Next.js and{' '}
              <a className="text-slate-200">TypeScript</a> . I’m always up for a
              challenge, whether it’s figuring out a tricky CI/CD pipeline or
              optimizing some gnarly piece of UI.
            </p>
          </div>
        </section>

        <section>
          <JobCards
            dateRange="Sep - Nov 2024"
            jobPosition="Freelance Team Lead"
            body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
            tags={['JavaScript', 'TypeScript', 'Code Review', 'Node.js']}
          />

          <JobCards
            dateRange="Aug 2023 - Aug 2024"
            jobPosition="Frontend Developer | Next.js Developer"
            body="Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility."
            tags={['JavaScript', 'TypeScript', 'Storybook', 'GraphQL', 'Jest']}
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
  )
}
