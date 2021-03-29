import TodoList from "./Component/TodoList";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
]
const App  = () => {
  return (
    <TodoList data={data}/>
  )
}

export default App;