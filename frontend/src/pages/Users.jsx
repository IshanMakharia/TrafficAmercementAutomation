import "./users.css"
import Topbar from "../components/Topbar";
import MainTable from "../components/MainTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {

    const [rows, setRows] = useState([]);

    useEffect(()=>{
        const getAll = async ()=>{
            try {
                const data = await axios.get("/users/all");
                //console.log(data);
                setRows(data.data);
            } catch(err) {
                console.log(err);
            }
        }
        getAll();
    }, []);


    return (
        <>
            <Topbar/>
            <div className="usersContainer">
                <MainTable rows={rows}/>
            </div>
        </>
    )
}