

const Container = ({children, className}) => {
  return (
    
    <div className={`${className} max-w-container mx-auto`}>{children}</div>
  )
}

export default Container
