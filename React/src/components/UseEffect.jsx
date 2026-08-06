import { useEffect, useState } from "react";
import axios from "axios";

//timer example
export function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prev => prev + 1);
        },1000);

        return ()=> clearInterval(interval);
    },[]);

    return <div>{seconds}</div>
};


//Fetching the data
export function UserList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
               const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            }catch(error){
                console.error('Error fetching data', error);
            }finally{
                setLoading(false);
            }
        };

        fetchData();

    },[]);

    if(loading){
        return <div>Loading ....</div>
    }

    return(
        <>
            <ul>
                {users.map(user => (
                    <li key = {user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
};