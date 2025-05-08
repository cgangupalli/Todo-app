import TodoList from './TaskManager/TodoList';
import TaskProvider from './TaskManager/TaskProvider';
import './App.css'

function App() {
 return(
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
}
  
  export default App;