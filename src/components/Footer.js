const Footer = (props) => {
  const { children } = props
  return (
    <footer className="p-3 text-center bg-dark text-white">{children}</footer>
  )
}
export default Footer