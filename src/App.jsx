import Button from "./assets/Button"
import Count from "./assets/Count"
import Reusable from "./assets/Reusable"



const App = () => {
  return (
    <>
      {/* <Error/> */}
      {/* <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <TodoInput/>
      <TodoList /> */}
      {/* </div> */}
      {/* <Stopwatch/> */}
      {/* <Count/> */}
      {/* <div>
        <h2>Reusable</h2>
        <Reusable
        label="enter a password"
        placeholder="type here.."
        />

        <Reusable
        label="confirm password"
        placeholder="Re-type password"/>
      </div> */}

      <Button label="click Me" onClick={()=> alert("Button Clicked")}/>
      <Button label="Delete" onClick={()=> alert("delet the content")} className="bg-red-500 ml-2"/>
    </>
  )
}

export default App
