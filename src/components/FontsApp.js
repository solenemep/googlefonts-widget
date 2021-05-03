import Display from "./componentsFontsApp/Display"
import Settings from "./componentsFontsApp/Settings"

const FontsApp = (props) => {
  const { } = props
  return (
    <div className="row my-5">
      <Settings />
      <Display />
    </div>
  )
}
export default FontsApp