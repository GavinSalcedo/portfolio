import React from 'react'
import CardContainer from '../CardContainer'
import TagsComponent from '../Tags'
import Link from 'next/link'
import Tags from '@/app/types/Tags'

interface JobCardsProps {
  dateRange: string
  jobPosition: string
  body: string
  tags: Tags[]
  link?: string
}

function JobCards(props: JobCardsProps) {
  const { dateRange, jobPosition, body, tags, link } = props

  return (
    <Link href={link ? link : '#'}>
      <CardContainer>
        <div className="flex gap-10">
          <label className="w-3/4 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">
            {dateRange}
          </label>
          <div className="flex flex-col gap-3">
            <label className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
              {jobPosition}
            </label>
            <p className="text-slate-500">{body}</p>
            <ul className="w-fit flex gap-2 flex-wrap">
              {tags?.map((tag, idx) => (
                <TagsComponent key={`${tag}_${idx}`} label={tag.name} />
              ))}
            </ul>
          </div>
        </div>
      </CardContainer>
    </Link>
  )
}

export default JobCards
