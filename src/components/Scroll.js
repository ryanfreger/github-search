import React from 'react'

//Component used to wrap child components to enable scrolling within
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: 800 }}>
            {props.children}
        </div>
    )
}

export default Scroll;