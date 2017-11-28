import React, { Component } from 'react';

const Menu = () => {
    return (
        <div class='menu'>
            <div class='item'>
                <ul>
                    <li>
                        <div class="list"><i class="fa fa-home" aria-hidden="true"></i>首頁</div>
                    </li>
                    <li>
                        <div class="list"><i class="fa fa-fire" aria-hidden="true"></i>發燒影片</div>
                    </li>
                    <hr color='#ebebeb' />
                    <li>
                        <div class="title">影片精選</div>
                    </li>
                    <li>
                        <div class="list icon"><i class="fa fa-music" aria-hidden="true"></i>音樂</div>
                    </li>
                    <li>
                        <div class="list icon"><i class="fa fa-futbol-o" aria-hidden="true"></i>運動</div>
                    </li>
                    <li>
                        <div class="list icon"><i class="fa fa-gamepad" aria-hidden="true"></i>遊戲</div>
                    </li>
                    <li>
                        <div class="list icon"><i class="fa fa-newspaper-o" aria-hidden="true"></i>新聞</div>
                    </li>
                    <li>
                        <div class="list icon"><i class="fa fa-podcast" aria-hidden="true"></i>直播</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;