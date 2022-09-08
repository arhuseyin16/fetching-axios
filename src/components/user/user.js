import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        /*fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()
                .then(userList=> {
                    setUsers(userList);
                })).catch((err) => console.log(err))
            .finally(() => setIsLoading(false));*/
        axios("https://jsonplaceholder.typicode.com/users").then(response => {
            setUsers(response.data)
        }).catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, []);

    // fetch ve axios farkları axios bir module ve projeye kurmak lazım npm i axios
    // fetch de response json() cevirmek lazım, axiosta girek yok
    // axios bir response geri dönüş modeline sahip res.data şeklinde çagrılır.
    // fetch tarayıcı destegı sınırlı, axios sınırsız.
    return (
        <div>
            <div style={{color: "red", textDecorationLine: "underline", textAlign: "left"}}>User List</div>
            {isLoading && <div>Loading...</div>}
            {
                users?.length > 0 && users.map((row, index) => (
                    <div style={{textAlign: "left"}} key={row.id}>
                        {index+1}-{row.name}
                    </div>
                ))
            }
        </div>
    )
}

export default User;