import { Outlet } from "react-router-dom"
import Tabs from "./components/Tabs"

function FeedPage() {
  return (
    <>
      <Tabs/>
      <Outlet/>
    </>
  )
}

export default FeedPage
