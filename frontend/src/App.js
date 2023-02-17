import { useState } from "react";

const list = [
  { id: 1, title: "Complete William Vincent Django Todo App", body: "-" },
  { id: 2, title: "Take a lunch break.", body: "-" },
  { id: 3, title: "Do some third task, idk.", body: "-" },
];

function App() {
  const [todos, setTodos] = useState(list);

  return (
    <div>
      {list.map((item, index) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
