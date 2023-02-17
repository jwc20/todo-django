import { useState, useEffect } from "react";
import axios from "axios";

// const list = [
//   { id: 1, title: "Complete William Vincent Django Todo App", body: "-" },
//   { id: 2, title: "Take a lunch break.", body: "-" },
//   { id: 3, title: "Do some third task, idk.", body: "-" },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = "http://127.0.0.1:8000/api/";



  const getAllTodos = async () => {
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        const allTodos = response.data;
        console.log(allTodos)
        setTodos(allTodos);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true); 
        console.log(error);
      });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }


  return (
    <div>
      {todos && todos.map((item, index) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default App;
