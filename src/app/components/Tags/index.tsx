import React from 'react'

interface TagsProps {
  label: string
}

function Tags(props: TagsProps) {
  const { label } = props
  return (
    <li className="w-auto rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {label}
    </li>
  )
}

export default Tags
