import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

function ViewContents(props){
  const len = props.data.contents.length
  return(
    <div id="content_contents" style={{opacity: props.opacity}}>
      <div id="content_contents_blank_first" className="blank_one"></div>
      <div id="content_contents_content">

        <div id="content_contents_content_blank_first" className="blank_one">
          <ViewHandleLeft handleLeft={props.handleLeft} num={props.num} len={len} />
        </div>

        <div id="content_contents_content_content">

          <div id="content_contents_body_first">
            <div id="content_contents_body_first_blank_first" className="blank_one">
              <ViewLanguage list={props.data.language} num={props.num}/>
            </div>
            <div id="content_contents_body_first_contents">
              <h1 id="content_contents_title">{props.data.contents[props.num].title}</h1>
              <h1 id="content_contents_sub_title">{props.data.contents[props.num].sub_title}</h1>
            </div>
            <div id="content_contents_body_first_blank_second" className="blank_one">
              <ViewDevelopment list={props.data.development} num={props.num}/>
            </div>
          </div>


          <div id="content_contents_body_second">
            <div id="content_contents_body_second_blank_first" className="blank_one">
              <div className="blank_one"></div>
              <div id="content_contents_text_first">
                <p>
                  <ViewJoin str={props.data.contents[props.num].text_first} />
                </p>
              </div>
              <div className="blank_one"></div>
            </div>
            <div id="content_contents_body_second_contents">
              <div className="blank_two"></div>
              <img src={props.data.contents[props.num].img} id="content_contents_img" alt=""/>
              <div className="blank_two"></div>
            </div>
            <div id="content_contents_body_second_blank_second" className="blank_one">
              <div className="blank_one"></div>
              <div id="content_contents_text_second">
                <p>
                  {props.data.contents[props.num].text_second}
                </p>
              </div>
              <div className="blank_one"></div>
            </div>
          </div>


          <div id="content_contents_body_last">
            <div id="content_contents_body_last_blank_first" className="blank_one"></div>
            <div id="content_contents_body_last_contents">
              <div className="blank_one" ></div>
              <ViewSite site={props.data.contents[props.num].site} />
              <div className="blank_one" ></div>
              <ViewCode code={props.data.contents[props.num].code} />
              <div className="blank_one" ></div>
            </div>
            <div id="content_contents_body_last_blank_first" className="blank_one"></div>
          </div>

        </div>

        <div id="content_contents_content_blank_second" className="blank_one">
          <ViewHandleRight handleRight={props.handleRight} num={props.num} len={len} />
        </div>

      </div>
      <div id="content_contents_blank_second" className="blank_one"></div>
    </div>
  )
}

const ViewHandleLeft = (props) => {
  if(props.num === 0) {
    return (<></>)
  }

  return (
    <>
      <div id="content_handle_left">
        <div className="blank_one"></div>
          <div id="content_handle_left_content" >
            <div id="left">
              <div id="left_content" onClick={() => {
                props.handleLeft()
             }} >
                <ChevronLeftIcon id="left_icon" sx={{fontSize: "10vw", color: "black"}}/>
              </div>
            </div>
          </div>
        <div className="blank_one"></div>
      </div>
      <div className="blank_one"></div>
    </>
  )
}

const ViewHandleRight = (props) => {
  if (props.num === props.len - 1) {
    return (<></>)
  }

  return (
    <>
      <div className="blank_one"></div>
      <div id="content_handle_right">
        <div className="blank_one"></div>
          <div id="content_handle_right_content" >
            <div id="right">
              <div id="right_content" onClick={() => {
                props.handleRight()
              }} >
                <ChevronRightIcon id="right_icon" sx={{fontSize: "10vw", color: "black"}}/>
              </div>
            </div>
          </div>
        <div className="blank_one"></div>
      </div>
    </>
  )
}

const ViewLanguage = (props) => {
  if (props.num !== 0) {
    return (<></>)
  }
  return (
    <>
      <div class="blank_one"></div>
      <div id="content_contents_language">
        <div class="blank_one"></div>
          <div id="content_contents_language_contents">
            <h2>Language</h2>
            <ViewList list={props.list} />
          </div>
        <div class="blank_one"></div>
      </div>
      <div class="blank_one"></div>
    </>
  )
}

const ViewDevelopment = (props) => {
  if (props.num !== 0) {
    return (<></>)
  }
  return (
    <>
      <div class="blank_one"></div>
      <div id="content_contents_development">
        <div class="blank_one"></div>
          <div id="content_contents_development_contents">
            <h2>Development</h2>
            <ViewList list={props.list} />
          </div>
        <div class="blank_one"></div>
      </div>
      <div class="blank_one"></div>
    </>
  )
}

const ViewList = (props) => {
  return props.list.map(v => {
    return (<li>{v}</li>)
  })
}

const ViewJoin = (props) => {
  // return props.str.replace('/\n/g', '<br>')
  return props.str.split('\n').map((v, i) => {
    return v
  })
}

const ViewSite = (props) => {
  if (props.site !== "") {
    return (
      <a href={props.site} target="_blank" rel="noreferrer">
        <div id="site">
          <DirectionsRunIcon id="run_icon" sx={{fontSize: 50, color: "black"}}/>
          <h3>GoSite</h3>
        </div>
      </a>
    )
  } else {
    return(<div />)
  }
}

const ViewCode = (props) => {
  if (props.code !== "") {
    return (
      <a href={props.code} target="_blank" rel="noreferrer">
        <div id="code">
          <CodeIcon id="code_icon" sx={{fontSize: 50, color: "black"}}/>
          <h3>GoCode</h3>
        </div>
      </a>
    )
  } else {
    return(<div />)
  }
}

export default ViewContents
