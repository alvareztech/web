import React, { Component } from 'react'

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let script = document.createElement('script')
    script.setAttribute('src', "https://giscus.app/client.js")
    script.setAttribute('data-repo', "alvareztech/web")
    script.setAttribute('data-repo-id', "R_kgDOGv9Tkg")
    script.setAttribute('data-category', "Announcements")
    script.setAttribute('data-category-id', "DIC_kwDOGv9Tks4CRPkE")
    script.setAttribute('data-mapping', "pathname")
    script.setAttribute('data-strict', "0")
    script.setAttribute('data-reactions-enabled', "1")
    script.setAttribute('data-emit-metadata', "0")
    script.setAttribute('data-input-position', "bottom")
    script.setAttribute('data-theme', "preferred_color_scheme")
    script.setAttribute('data-lang', "en")
    script.setAttribute('crossorigin', "anonymous")
    script.setAttribute('async', '')
    console.log(script)
    this.commentBox.current.appendChild(script)
  }

  render() {
    return (
      <div className='giscus mt-4'>
        <div ref={this.commentBox}></div>
      </div>
    )
  }
}

/*
export default function Comments() {
  return (
    <>
      <Script
        id='giscus'
        strategy='lazyOnload'
        src="https://giscus.app/client.js"
        data-repo="alvareztech/web"
        data-repo-id="R_kgDOGv9Tkg"
        data-category="Announcements"
        data-category-id="DIC_kwDOGv9Tks4CRPkE"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async
      >
      </Script>
      <div className='giscus mt-4'></div>
    </>
  )
}*/
