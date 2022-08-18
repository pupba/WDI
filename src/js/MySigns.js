import "../css/Search.css";
import title from "../image/title.png";
import bck from "../image/back.png";
import insta from "../image/insta.svg";
import git from "../image/git.png";
import facebook from "../image/facebook.svg";
import tel from "../image/tel.svg";
import email from "../image/email.svg";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
function MySigns() {
    const createData = (name, depart, time, filepath, block_addr) => {
        return { name, depart, time, filepath, block_addr };
    };
    var rows = [
        createData(
            "정광원",
            "개발",
            "2022. 8.6. 오후 5:14:28",
            "C:\fakepathcat2.png",
            "https://ipfs.io/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA"
        ),
        createData(
            "정광원",
            "개발",
            "2022. 8.6. 오후 5:14:28",
            "C:\fakepathcat2.png",
            "https://ipfs.io/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA"
        ),
        createData(
            "정광원",
            "개발",
            "2022. 8.6. 오후 5:14:28",
            "C:\fakepathcat2.png",
            "https://ipfs.io/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA"
        ),
    ];
    return (
        <div className="App">
            <header id="head-container">
                <img id="logo" src={title} alt="logo"></img>
            </header>
            <section id="container">
                <Link to="/signed">
                    <img id="search" src={bck} alt="search"></img>
                </Link>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>이름</TableCell>
                                <TableCell align="center">부서</TableCell>
                                <TableCell align="center">수정 날짜</TableCell>
                                <TableCell align="center">파일 위치</TableCell>
                                <TableCell align="center">블록 주소</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.depart}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.filepath}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.block_addr}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
            <footer>
                <div className="container-footer">
                    <ul className="list-inline2">
                        <li>
                            <a href="https://www.instagram.com/s_hine2/">
                                <img
                                    className="instagram"
                                    alt="instagram"
                                    src={insta}
                                    width="48px"
                                ></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/pupba">
                                <img
                                    className="github"
                                    alt="git"
                                    src={git}
                                    width="48px"
                                ></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100003204780607">
                                <img
                                    className="facebook"
                                    alt="facebook"
                                    src={facebook}
                                    width="48px"
                                ></img>
                            </a>
                        </li>
                    </ul>
                    <div className="email">
                        <img alt="email" src={email} width="18px"></img>
                        rhdk5148@gmail.com
                    </div>
                    <div className="tel">
                        <img alt="tel" src={tel} width="18px"></img>{" "}
                        010-2094-7805
                    </div>
                    <p className="copyright">Made by Pupbani © 2022</p>
                </div>
            </footer>
        </div>
    );
}
export default MySigns;
