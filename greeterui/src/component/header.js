import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function Header () {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    useEffect(() => {
        let userInfo = sessionStorage.getItem('userInfo');
        if(userInfo != null) {
            setLogin(true);
            // navigate('/dashboard');
        }
    }, []);

    const goLogin = () => {

    }

    const showLogin = () => {
        if(login) {
            let userInfo = sessionStorage.getItem('userInfo');
            return(
                <a href="#" className="item mob">{userInfo.name}</a>
            )
        }else {
            return(
                <Link to="/signin" className="item mob">login</Link>
            )
            
        }
    }
    return(
        <div>
            <div className="ui right sidebar inverted vertical menu">
                <a className="item gamertoken" href="index.html#main">GAME Token</a>
                <a className="item" href="index.html#gamertoken-prototypes">Prototypes</a>
                <a className="item" href="index.html#what-is-gamertoken">What is GAME Token</a>
                <a className="item" href="index.html#ecosystem">GAME Token Ecosystem</a>
                <a className="item" href="index.html#benefits">Benefits</a>
                <a className="item" href="index.html#roadmap">Roadmap</a>
                <a href="#" className="item wpd">White Paper</a>
                <a href="#" className="item opd">One Pager</a> 			
            </div>
            <div id="menu" className="ui fixed">
                <div className="ui container">
                    <div className="ui text menu">
                        <img className="first" src="ggp/gamertoken/logo.png" alt=""/>
                        <div className="right item">
                            <a className="toc right item">
                                <i className="fa fa-bars"></i>
                            </a>
                            <div className="ui right dropdown mob item ladd" tabIndex="0">
                                
                                <div className="menu transition hidden" tabIndex="-1"></div>
                            </div>
                            <a className="mob btn-round-white-gradient whitepaper wpd"><span className="blue-green-gradient">White Paper</span></a>
                                            
                            <a href="https://t.me/Fletcherboby" target="_blank" className="item mob"><i className="fa fa-medium"></i></a>
                            <a href="https://t.me/Fletcherboby" target="_blank" className="item mob"><i className="fa fa-telegram"></i></a>
                            {showLogin()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}