import "../css/Signed.css";
import title from "../image/title.png";
import my_sign from "../image/my_sign.png";
import search from "../image/search.png";
import logout from "../image/logout.png";
import subMit from "../image/submit.png";
import check_input from "../image/check_input.png";
import AD from "../image/ad.svg";
import insta from "../image/insta.svg";
import git from "../image/git.png";
import facebook from "../image/facebook.svg";
import tel from "../image/tel.svg";
import email from "../image/email.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// Web3-react
import { useWeb3React } from "@web3-react/core";
import { Mycontract } from "../lib/mycontract";
//
function Signed() {
    // Web3-react
    const { account, active, deactivate } = useWeb3React();
    // 금액 결재 가능한 지갑 생성
    //
    const [disabled, setDisable] = useState(true);
    let date = new Date();
    let now = date.toLocaleString();
    const [block_, setBlock] = useState({
        name: "",
        depart: "",
        time: "",
        fname: "",
        path: "",
    });

    const changeBtn = () => {
        const label1 = document.getElementById("submit");
        const label2 = document.getElementById("check");
        label1.setAttribute("style", "display:block");
        label2.setAttribute("style", "display:none");
    };
    const allInputCheck = () => {
        const container = {
            name: document.getElementsByClassName("usr")[0].value,
            depart: document.getElementsByClassName("dp")[0].value,
            time: now,
            // C:\fakepath\파일 이형태로 항상 나옴, 브라우저 보안때문
            fname: document
                .getElementsByClassName("target_file")[0]
                .value.split("\\")[2],
            path: document.getElementsByClassName("filepath")[0].value,
        };
        if (
            container.name === "" ||
            container.fname === undefined ||
            container.path === ""
        ) {
            alert("입력을 모두 입력해주세요!!");
            document.getElementsByClassName("usr")[0].value = "";
            document.getElementsByClassName("dp")[0].value = "생산";
            document.getElementsByClassName("target_file")[0].value = "";
            document.getElementsByClassName("filepath")[0].value = "";
        } else {
            setDisable(false);
            changeBtn();
            setBlock({
                name: container.name,
                depart: container.depart,
                time: container.time,
                fname: container.fname,
                path: container.path,
            });
        }
    };
    const makeSigned = () => {
        // block_ 값을 전달.
        var s = `Block!\nname : ${block_.name}\ndepart : ${block_.depart}\ntime : ${block_.time}\nfname : ${block_.fname}\npath : ${block_.path}`;
        alert(s);
        document.getElementsByClassName("usr")[0].value = "";
        document.getElementsByClassName("dp")[0].value = "생산";
        document.getElementsByClassName("target_file")[0].value = "";
        document.getElementsByClassName("filepath")[0].value = "";
        Mycontract.methods
            .makeBlock(
                String(block_.name),
                String(block_.time),
                String(block_.depart),
                String(block_.fname),
                String(block_.path)
            )
            .send({ from: account, gas: 300000 });

        alert("서명완료!!");
    };
    return (
        <div className="App">
            <header id="head-container">
                <img id="logo" src={title} alt="logo"></img>
            </header>
            <nav id="navi-bar">
                <ul className="list-inline1">
                    <li>
                        <p>{`접속한 지갑 주소 --> ${account}`}</p>
                    </li>
                    <br />
                    <li>
                        <Link to="/mysigns">
                            <img id="my-sign" src={my_sign} alt="my-sign"></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <img id="search" src={search} alt="search"></img>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                if (active) {
                                    deactivate();
                                    alert("로그아웃!!");
                                    return;
                                }
                            }}
                        >
                            <img id="logout" src={logout} alt="logout"></img>
                        </Link>
                    </li>
                </ul>
            </nav>
            <section id="container" className="main_box">
                <table>
                    <thead>
                        <tr>
                            <th>서명하기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                이름:{" "}
                                <input
                                    id="table_input"
                                    className="usr"
                                    type="text"
                                    placeholder="작업자의 이름을 입력해주세요."
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                부서:{" "}
                                <select
                                    className="dp"
                                    id="table_input"
                                    name="kind"
                                >
                                    <option value="생산">생산</option>
                                    <option value="개발">개발</option>
                                    <option value="홍보">홍보</option>
                                    <option value="관리">관리</option>
                                    <option value="경영">경영</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                시간:{" "}
                                <input
                                    id="table_input"
                                    className="time"
                                    type="text"
                                    placeholder={now}
                                    readOnly
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                파일을 올려주세요:{" "}
                                <input
                                    id="file_"
                                    className="target_file"
                                    type="file"
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                파일 위치:{" "}
                                <input
                                    id="table_input"
                                    className="filepath"
                                    type="text"
                                    placeholder="ex) C:/User/바탕화면/2022.08.18.xlsx"
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label
                                    id="submit"
                                    htmlFor="submit_id"
                                    style={{ display: `none` }}
                                >
                                    <img
                                        id="logout_s"
                                        src={subMit}
                                        alt="submit"
                                    ></img>
                                </label>
                                <input
                                    id="submit_id"
                                    name="submit"
                                    className="btn_s"
                                    type="button"
                                    style={{ display: `none` }}
                                    disabled={disabled}
                                    onClick={makeSigned}
                                ></input>
                                <label id="check" htmlFor="check_id">
                                    <img
                                        id="logout_c"
                                        src={check_input}
                                        alt="submit"
                                    ></img>
                                </label>
                                <input
                                    id="check_id"
                                    name="check"
                                    className="btn_c"
                                    type="button"
                                    style={{ display: `none` }}
                                    onClick={allInputCheck}
                                ></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <aside id="ad-bar">
                <span>
                    <img src={AD} alt="광고" width="10%"></img>
                </span>
            </aside>
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
export default Signed;
