import "../css/Login.css";
import title from "../image/title.png";
import hello from "../image/hello.png";
import login from "../image/connect.png";
import help from "../image/help.png";
import insta from "../image/insta.svg";
import git from "../image/git.png";
import facebook from "../image/facebook.svg";
import tel from "../image/tel.svg";
import email from "../image/email.svg";
import { Link } from "react-router-dom";

// Web3-react
import { useWeb3React } from "@web3-react/core";
import { injected } from "../lib/connectors";
import { isNoEthereumObject } from "../lib/errors";
//

function App() {
    const { active, activate } = useWeb3React();
    const connect = (event) => {
        //event.preventDefault(); // Link 비활성화
        if (active) {
            event.preventDefault();
            activate(injected, (error) => {
                if (isNoEthereumObject(error)) {
                    window.open("https://metamask.io/download.html");
                }
            });
            console.log("실패")
        } else {
            activate(injected, (error) => {
                if (isNoEthereumObject(error)) {
                    window.open("https://metamask.io/download.html");
                }
            });
            console.log("성공")
        }
        console.log(active)
    };
    return (
        <div className="App">
            <header id="head-container">
                <img id="logo" src={title} alt="logo"></img>
            </header>
            <nav id="navi-bar">
                <ul className="list-inline1">
                    <li>
                        <img id="hello" src={hello} alt="hello"></img>
                    </li>
                    <li>
                        <Link
                            // style={{ display: `none` }}
                            to="/signed"
                            onClick={connect}
                        >
                            <img id="login" src={login} alt="login"></img>
                        </Link>
                    </li>
                    <li>
                        <label htmlFor="help_id">
                            <img id="help" src={help} alt="help"></img>
                        </label>
                        <input
                            type="button"
                            name="help"
                            id="help_id"
                            style={{ display: `none` }}
                            onClick={() => {
                                window.open(
                                    "https://luxuriant-creature-127.notion.site/2022-dApp-770c7a3eabe14ca89555782fb77db244",
                                    "_blank"
                                );
                            }}
                        ></input>
                    </li>
                </ul>
            </nav>
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
export default App;
