import React from 'react'
import CardContainer from '../CardContainer'
import Image from 'next/image'

interface BlogCardsProps {
  blogPhoto: string
  date: string
  title: string
}

function BlogCards(props: BlogCardsProps) {
  const { blogPhoto, date, title } = props

  return (
    <CardContainer>
      <div className="flex gap-4">
        <Image alt="hello" src={blogPhoto} height={88} width={88} />
        <div className="flex-col content-center">
          <p className="text-sm font-semibold leading-6 text-gray-400">
            {date}
          </p>
          <h3 className=" inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
            {title}
          </h3>
        </div>
      </div>
    </CardContainer>
  )
}

export default BlogCards