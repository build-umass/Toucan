import Nav from './Nav'
import '../node_modules/antd/dist/antd.css'

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}