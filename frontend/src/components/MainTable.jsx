import "./mainTable.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";

export default function MainTable({rows}) {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log(rows.length);
    return (
        <div className="MainTableContainer">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead >
                        <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone Number</TableCell>
                                <TableCell align="center">Rule Violated</TableCell>
                                <TableCell align="center">Place</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Payment Link Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.ph}</TableCell>
                                        <TableCell align="center">{row.rule}</TableCell>
                                        <TableCell align="center">{row.place}</TableCell>
                                        <TableCell align="center">{/*new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(row.createdAt)*/}
                                        {row.createdAt}</TableCell>
                                        <TableCell align="center">{row.paymentRef}</TableCell>
                                    </TableRow>
                                );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
            </div>
    )
}