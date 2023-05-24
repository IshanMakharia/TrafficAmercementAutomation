import "./mysearch.css"
import { useEffect, useState } from "react";
import MainTable from "../components/MainTable";
import Topbar from "../components/Topbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";

export default function MySearch() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/fine/mysearch?q=${query}`);
          console.log(res.data);
          setData(res.data);
        };
        //if (query.length === 0 || query.length > 2) 
        fetchData();
    }, [query]);
    const getSearch = (req)=>{
        setQuery(req);
        console.log(query);
        return (
                <MySearch data={data}/>
        )
    }

    return (
        <>
            <Topbar/>
            <div className="usersContainer">
                <div className="space">
                <div className="mysearchbar">
                    <Search className="mysearchIcon"/>
                    <input placeholder="Search for users" className="mysearchInput" 
                        onChange={(e) => getSearch(e.target.value.toLowerCase())}
                        />
                </div>
                </div>
                <MainTable rows={data}/>
            </div>
        </>
    )
}