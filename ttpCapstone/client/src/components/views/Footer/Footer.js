import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', fontFamily: 'Comic-Sans'
        }}>
           <p> HAPPY MOVIE WATCHING  <img src="https://static.thenounproject.com/png/1319743-200.png" height="30" width="35"/></p>
        </div>
    )
}

export default Footer
