import { useState, useEffect } from "react";
import axios from "axios";

// const list = [
//   { id: 1, title: "Complete William Vincent Django Todo App", body: "-" },
//   { id: 2, title: "Take a lunch break.", body: "-" },
//   { id: 3, title: "Do some third task, idk.", body: "-" },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const url = "http://127.0.0.1:8000/api/";

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    axios
      .get(url)
      .then((response) => {
        const allTodos = response.data;
        setTodos(allTodos);
      })
      .catch((error) => console.error(error));
  };



  return (
    <div>
      {todos.map((item, index) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
