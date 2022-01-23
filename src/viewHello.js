import React from 'react'

function ViewHello(props) {
  return (
    <div id="content_hello" style={{opacity: props.opacity}}>
      <div id="content_hello_blank_first" className="blank_one"></div>
      <div id="content_hello_content">
        <div id="content_hello_content_blank_first" className="blank_one"></div>
          <div id="content_hello_content_content">
            <h1 id="content_hello_welcome">Welcome!!</h1>
            <h3 id="content_hello_name">s20024's</h3>
            <h2 id="content_hello_portfolio">Portfolio</h2>
            <h2 id="content_hello_please">Please scroll down.</h2>
          </div>
        <div id="content_hello_content_blank_second" className="blank_one"></div>
      </div>
      <div id="content_hello_blank_second" className="blank_one"></div>
    </div>
  )
}

export default ViewHello
