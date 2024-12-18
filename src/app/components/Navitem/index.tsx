interface NavItemProps {
  label: string
  isActive: boolean
  index: number
  setActiveLink: (index: number) => void
}

function NavItem(props: NavItemProps) {
  const { label, isActive, index, setActiveLink } = props

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

export default NavItem
