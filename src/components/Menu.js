import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectMenu: 'main'
        }
    }

    menuLinkClick(e){
        this.setState({
            selectMenu: e.target.id
        });
    };

    render(){
        return (
            <div className='menu'>
                <div className='item'>
                    <ul>
                        <li>
                            <Link to='/'><div id='main' className={`list ${this.state.selectMenu === 'main' ? 'active' : ''}`} onClick={this.menuLinkClick.bind(this)}><i className="fa fa-home" aria-hidden="true"></i>首頁</div></Link>
                        </li>
                        <li>
                            <Link to='/hot'><div id='hot' className={`list ${this.state.selectMenu === 'hot' ? 'active' : ''}`} onClick={this.menuLinkClick.bind(this)}><i className="fa fa-fire" aria-hidden="true"></i>發燒影片</div></Link>
                        </li>
                        <li>
                            <div className="title">影片精選</div>
                        </li>
                        <li>
                            <div className="list icon"><i className="fa fa-music" aria-hidden="true"></i>音樂</div>
                        </li>
                        <li>
                            <div className="list icon"><i className="fa fa-futbol-o" aria-hidden="true"></i>運動</div>
                        </li>
                        <li>
                            <div className="list icon"><i className="fa fa-gamepad" aria-hidden="true"></i>遊戲</div>
                        </li>
                        <li>
                            <div className="list icon"><i className="fa fa-newspaper-o" aria-hidden="true"></i>新聞</div>
                        </li>
                        <li>
                            <div className="list icon"><i className="fa fa-podcast" aria-hidden="true"></i>直播</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;