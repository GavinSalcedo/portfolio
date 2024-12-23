import JobCards from './components/JobCards'
import Link from 'next/link'
import Header from './components/Header'
import Job from './types/Jobs'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const jobData = await fetch(
    'https://portfolio-cms-gules.vercel.app/api/jobs',
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  )
  const JOBS = await jobData.json()
  console.log(JOBS) // Check the fetched data here

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

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
              {JOBS.docs.map((job: Job, idx: number) => (
                <JobCards
                  key={`job_${idx}`}
                  dateRange={job.yearRange}
                  body={job.description}
                  jobPosition={job.position}
                  tags={job.tags}
                  link={job.link}
                />
              ))}
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
