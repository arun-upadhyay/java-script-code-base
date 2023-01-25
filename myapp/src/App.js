import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [users, setUsers] = useState([]);
    const [intialState, setInitialState] = useState([]);

    useEffect(() => {
        const fetchApi = () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(response => {
                    setUsers(response)
                    setInitialState(response);
                })
                .catch(error => console.log('error', error));
        }
        fetchApi();

    }, [])

    function changeEvent(evt) {
        let filterValue = [];
        let searchValue = evt.currentTarget.value;
        intialState.forEach((user) => {
            if (user.name.toLowerCase().includes(searchValue.toLowerCase())) {
                filterValue.push(user)
            }
        })
        setUsers(filterValue)
    }

    function getUsers() {
        let arr = []
        if (users.length > 0) {
            arr.push(<tr>
                <td>ID</td>
                <td>Username</td>
                <td>Name</td>
                <td>Email</td>
            </tr>)
        }
        users.forEach((user) => {
            arr.push(<tr>
                <td> {user.id} </td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)
        });

        return arr;
    }

    return (
        <>
            <div className="App">
                <h1> Search(By name) </h1>
                <input type="text" onChange={changeEvent}/>
            </div>
            <div>
                <table>
                    {getUsers()}
                </table>

            </div>
        </>
    );
}

export default App;
