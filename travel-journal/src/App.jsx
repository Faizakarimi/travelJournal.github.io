
import Card from "./components/Cards.jsx"
import './App.css'
import data from "./data.js"
import NavBar from "./components/NavBar.jsx"
// console.log(data)

function App() {
  const items = data.map((item, index) => {
    return (
      <Card
        key={index}
        {...item}
      />
    )
  })

  return (
    <div className="container">

      <NavBar />
      {items}

    </div>
  )
}

export default App
