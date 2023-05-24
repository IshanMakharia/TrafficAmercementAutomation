import "./fine.css"
import Topbar from "../components/Topbar";
import MainTable from "../components/MainTable";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MyCircular from "../components/MyCircular";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";




export default function Fine() {

    const navigate = useNavigate();    
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const updateAll = async ()=>{
        try {
            setLoading(true);
            const data = await axios.get("/fine/updateAll");
            // await axios.put("/fine/updateAll");
            setRows(data.data);
            setLoading(false);
            navigate("/fine");
        } catch(err) {
            console.log(err);
        }
   }


    return (
        <>
            <Topbar/>
            <div className="fineContainer">
                <div className="fineButton">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={updateAll}>
                        {loading ? <div className="updating"><MyCircular/><span className="textUpdating">Updating</span></div> : "Update"}
                        </Button>
                    </Stack>
                </div>
                <MainTable rows={rows}/>
            </div>
        </>
    )
}