import React from 'react'

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return
        }

        const scriptElement = document.createElement('script')
        scriptElement.src = 'https://utteranc.es/client.js'
        scriptElement.async = true
        scriptElement.setAttribute('repo', '2scent/vercel-blog-fc')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('theme', 'github-dark-orange')
        scriptElement.crossorigin = 'anonymous'
        elem.appendChild(scriptElement)
      }}
    ></section>
  )
}

export default React.memo(Utterances)
