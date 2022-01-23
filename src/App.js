import React from 'react'
import "./App.css"
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'
import ViewHello from './viewHello'
import ViewThank from './viewThank'
import ViewContents from './viewContents'

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      width: 0,
      window_height: 0,
      window_width: 0,
      data_len: 0,
      contents_len: 0,
      data_num: 0,
      old_data_num: 0,
      contents_num: 0,
      x: 0,
      y: 0,
      propotion: 0,
      data: []
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), {passive: true})
    // document.body.style.minHeight = `${(this.state.data_len + 1) * 100}vh`
    // this.setState({height: window.innerHeight * this.state.data_len, window_height: window.innerHeight})
    this.getData()
  }

  async getData() {
    const url = "https://raw.githubusercontent.com/s20024/portfoliofile/main/portfolio.json"
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let contents_len = 0
        res.forEach(v => {
          if (contents_len <= v.contents.length) {
            contents_len = v.contents.length
          }
        })
        document.body.style.minHeight = `${(res.length + 2) * 100}vh`
        document.body.style.minWidth = `${(contents_len) * 100}vw`
        this.setState({
          height: window.innerHeight * (res.length + 1),
          width: window.innerWidth * (contents_len + 1),
          window_height: window.innerHeight,
          window_width: window.innerWidth,
          data: res,
          data_len: res.length + 2,
          contents_len: contents_len
        })
      })
  }

  componentDidUpdate() {
    if(this.state.data_num !== this.state.old_data_num) {
      this.setState({old_data_num: this.state.data_num, contents_num: 0})
      console.log("change")
    }
  }

  handleScroll() {
    this.setState({
      x: window.scrollX,
      y: window.scrollY,
      propotion: (window.scrollY / this.state.height * 100),
      data_num: Math.floor(window.scrollY / this.state.window_height),
    })
  }

  handleRight() {
    this.setState({contents_num: this.state.contents_num + 1})
  }

  handleLeft() {
    this.setState({contents_num: this.state.contents_num - 1})
  }

  render() {
    return (
      <div className="container">
        <Line propotion={this.state.propotion} id={"lt_line"} num={25} first={-10} last={-32.0} />
        <Line propotion={this.state.propotion} id={"rt_line"} num={-30} first={-15} last={-30} />
        <Line propotion={this.state.propotion} id={"lu_line"} num={-70} first={77.5} last={85.5} />
        <Line propotion={this.state.propotion} id={"ru_line"} num={65} first={75} last={81.5} />
      
        <div id="header">
          <div id="title">
            <h2 id="title_name">s20024's</h2>
            <h2 id="title_portfolio">Portfolio</h2>
          </div>
          <div id="title_blank"></div>
          <div id="menu">
            <div id="menu_blank_first"></div>
            <ul id="list_view">
              <ListView data={this.state.data} window_height={this.state.window_height}/>
            </ul>
            <div id="menu_blank_second"></div>
          </div>
        </div>

        <div id="content">
          <SwitchContent
            y={this.state.y}
            x={this.state.x}
            height={this.state.height}
            width={this.state.width}
            window_height={this.state.window_height}
            window_width={this.state.window_width}
            data_len={this.state.data_len}
            contents_len={this.state.contents_len}
            data_num={this.state.data_num}
            contents_num={this.state.contents_num}
            data={this.state.data}
            handleRight={this.handleRight.bind(this)}
            handleLeft={this.handleLeft.bind(this)}
          />
        </div>

        <div id="footer">
          <div id="footer_blank_first" style={{flex: (700 - this.state.propotion * 7) / 100}}></div>
          <div id="footer_contents">
            <div id="footer_contents_blank_first" ></div>
            <div id="footer_contents_item">
              <div id="footer_contents_item_blank_first" ></div>
              <a href="https://github.com/s20024" target="_blank" rel="noreferrer" >
                <div id="github">
                  <GitHubIcon id="github_icon" sx={{fontSize: 50, color: "white"}}/>
                  <h3 id="github_name">GitHub</h3>
                </div>
              </a>
              <div id="footer_contents_item_blank_second" ></div>
              <a href="mailto:s20024@std.it-college.ac.jp">
                <div id="mail">
                  <MailIcon id="mail_icon" sx={{fontSize: 50, color: "white"}}/>
                  <h3 id="mail_name">Mail</h3>
                </div>
              </a>
              <div id="footer_contents_item_blank_third" ></div>
            </div>
            <div id="footer_contents_blank_second" ></div>
          </div>
        </div>
      </div>
    )
  } }

const SwitchContent = (props) => {
  // window.scrollTo({left: 0})

  let opacity = 1

  if (props.window_height * props.data_num <= props.y && props.y <= props.window_height * props.data_num + 100) {
    opacity = (props.y - props.window_height * props.data_num) / 100
  } else if (props.window_height * (props.data_num + 1) - 100 < props.y && props.y < props.window_height * (props.data_num + 1)) {
    opacity = -(props.y - props.window_height * (props.data_num + 1)) / 100
  }

  if (props.data_num === 0) {
    if (props.y <= 100) {
      opacity = 1
    }
    return(<ViewHello opacity={opacity}/>)
  } else if (props.data_len - 1 <= props.data_num) {
    if (props.height - 100 <= props.y) {
      opacity = 1
    }
    return(<ViewThank opacity={opacity}/>)
  } else {
    let contents_num = props.contents_num
    if (props.data[props.data_num - 1].contents.length - 1 < contents_num) {
      contents_num = props.data[props.data_num - 1].contents.length - 1
    }
    return (<ViewContents opacity={opacity} data={props.data[props.data_num - 1]} num={contents_num} handleRight={props.handleRight} handleLeft={props.handleLeft} />)
  }
}

const ListView = (props) => {
  return props.data.map((content, i) => {
    return (
      <li>
        <div onClick={() => {
          window.scrollTo({top: props.window_height * (i + 1) + 200, left: 0, behavior: 'smooth'})
        }}>
          {content.title}
        </div>
      </li>
    )
  })
}

const Line = (props) => {
  return (
    <div id={props.id} className="line"
      style={{
        transform:`rotate(${(props.propotion / 100 * props.num) - props.num}deg)`,
        marginTop: `${props.first + (props.last - props.first) / 100 * props.propotion}vh`
      }}
    ></div>
  )
}

export default App
