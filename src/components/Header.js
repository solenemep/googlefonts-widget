const Header = (props) => {
  const { darkMode, children } = props
  return (
    <header className="p-5 bg-danger text-white text-center">
      {children}
    </header>
  )
}
export default Header