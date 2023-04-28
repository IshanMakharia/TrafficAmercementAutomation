import "./fine.css"
import Topbar from "../components/Topbar";
import MainTable from "../components/MainTable";

// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Fine() {

    
    const [rows, setRows] = useState([]);

    useEffect(()=>{
        const getAll = async ()=>{
            try {
                const data = await axios.get("/fine/all");
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
            <div className="fineContainer">
                <MainTable rows={rows}/>
            </div>
        </>
    )
}