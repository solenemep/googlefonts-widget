const Header = (props) => {
  const { darkMode, children } = props
  return (
    <header className={darkMode ? "p-5 bg-danger text-dark text-center" : "p-5 bg-danger text-white text-center"}>
      {children}
    </header>
  )
}
export default Header