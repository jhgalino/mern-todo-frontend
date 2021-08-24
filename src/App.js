import TodoBox from "./components/TodoBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App container mx-auto flex flex-col items-center gap-y-2">
        <h2 className="text-center text-5xl font-sans">To-Do List</h2>
        <TodoBox></TodoBox>
        <TodoList></TodoList>
    </div>
  );
}

export default App;
