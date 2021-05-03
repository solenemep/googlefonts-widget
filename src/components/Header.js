const Header = (props) => {
  const { children } = props
  return (
    <header className="p-5 bg-danger text-white text-center">{children}</header>
  )
}
export default Header