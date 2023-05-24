
import "./topbar.css"
import {Search} from "@mui/icons-material"
import {Link} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';



const theme = createTheme({
    palette: {
      neutral: {
        main: '#e3f2fd',
        contrastText: '#fff',
      },
    },
});

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}


export default function Topbar() {



    return (
        <div className="topbarContainer">
                <div>

                <Link to="/" style={{textDecoration:"none"}}>
                    <ThemeProvider theme={theme}>
                    <Box sx={{'& > :not(style)': {m: 2,},}}>
                        <HomeIcon color="neutral" fontSize="large"/>
                    </Box>
                    </ThemeProvider>
                </Link>  
                </div>
            
            <div className="topbarLeft">
                    <span className="logo">E-Challan</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Link to="/mysearch" style={{textDecoration:"none"}}>
                    <Search className="searchIcon"/>
                    <input placeholder="Search for users" className="searchInput"
                        readOnly="true" 
                        // onChange={(e) => getSearch(e.target.value.toLowerCase())}
                    />
                    </Link>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <ThemeProvider theme={theme}>
                    <Stack spacing={2} direction="row">
                    <Link to="/users" style={{textDecoration:"none"}}>
                        <Button variant="outlined" color="neutral">Users</Button>
                    </Link>
                    <Link to="/fine" style={{textDecoration:"none"}}>
                        <Button variant="outlined" color="neutral">Fines</Button>
                    </Link>
                    <Link to="/rules" style={{textDecoration:"none"}}>
                        <Button variant="outlined" color="warning">Rules</Button>
                    </Link>
                    </Stack>
                </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

