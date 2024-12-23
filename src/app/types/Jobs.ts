import Tags from './Tags'

export default interface Job {
  yearRange: string
  description: string
  position: string
  tags: Tags[]
  link: string
}
