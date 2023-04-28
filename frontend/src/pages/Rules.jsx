
import "./rules.css"
import Topbar from "../components/Topbar";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";

export default function Rules() {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    
    return (
        <>
            <Topbar/>
        <div className="ruleContainer">
        <div className="ruleTable">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead >
                        <TableRow selected={true}>
                                <TableCell align="center">Code</TableCell>
                                <TableCell align="center">Rules</TableCell>
                                <TableCell align="center">Fine</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow selected={true}>
                                <TableCell align="center">021</TableCell>
                                <TableCell align="center">Driving without a helmet</TableCell>
                                <TableCell align="center">500</TableCell>
                        </TableRow>
                        <TableRow selected={true}>
                                <TableCell align="center">022</TableCell>
                                <TableCell align="center">Over speeding</TableCell>
                                <TableCell align="center">1000</TableCell>
                        </TableRow>
                        <TableRow selected={true}>
                                <TableCell align="center">023</TableCell>
                                <TableCell align="center">Jumping traffic signals</TableCell>
                                <TableCell align="center">1000</TableCell>
                        </TableRow>
                        <TableRow selected={true}>
                                <TableCell align="center">024</TableCell>
                                <TableCell align="center">Parking in No Parking Zones</TableCell>
                                <TableCell align="center">500</TableCell>
                        </TableRow>
                        <TableRow selected={true}>
                                <TableCell align="center">025</TableCell>
                                <TableCell align="center">Violating the One-Way Rule</TableCell>
                                <TableCell align="center">1000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={5}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            </div>
            </div>
        </>
    )
}