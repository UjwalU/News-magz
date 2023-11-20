import { useState } from "react"
import Navbar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App