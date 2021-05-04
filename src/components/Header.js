const Header = (props) => {
  const { darkMode, children } = props
  return (
    <header className={darkMode ? "p-5 bg-custom text-dark text-center" : "p-5 bg-custom text-white text-center"}>
      {children}
    </header>
  )
}
export default Header