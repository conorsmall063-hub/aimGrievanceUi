
// import axios from 'axios';
// import { useState, useEffect } from "react"

// type User = {
//   id: number;
//   name: string;
// };

// function UserList() {
//   const [data, setData] = useState<User[]>([]);
  
//   useEffect(() => {
//     // Axios automatically parses JSON, accessible via response.data [1]
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
// }