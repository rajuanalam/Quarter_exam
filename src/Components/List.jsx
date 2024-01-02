
const List = ({text, href, className}) => {
  return (

    <li className={`${className}`}><a href={href} className={`${className} `}>{text}</a></li>
  )
}

export default List