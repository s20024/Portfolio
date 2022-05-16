import React from 'react'

function ViewThank(props) {
  return (
    <div id="content_thank" style={{opacity: props.opacity}}>
      <div id="content_thank_blank_first" className="blank_one"></div>
      <div id="content_thank_content">
        <div id="content_thank_content_blank_first" className="blank_one"></div>
          <div id="content_thank_content_content">
            <h1 id="content_thank_title">Thank you for visiting!!</h1>
          </div>
        <div id="content_thank_content_blank_second" className="blank_one"></div>
      </div>
      <div id="content_thank_blank_second" className="blank_one"></div>
    </div>
  )
}

export default ViewThank
