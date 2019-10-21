import React, { useState } from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { UIComponents } from '@layouts/Theme'
import theme from "prism-react-renderer/themes/nightOwlLight"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Box } from 'rebass/styled-components'

const CodeBlockBox = styled(Box)`
  border:1px solid ${(props) => props.theme.colors.black}; 

  & pre {
    margin:0;
    overflow-x: auto;
  }
`

interface Props {
  
}

export const CodeBlock: React.FC<Props> = ({ children, className, live }) => {
  const [copyStatus, setCopyStatus] = useState(false)
  const [codeVisibility, setCodeVisibility] = useState(false)
  const copyCode = () => {
    setCopyStatus(true)
    setTimeout(() => setCopyStatus(false), 3000)
  }
  const showCode = () => {
    setCodeVisibility(!codeVisibility)
  }
  const language = className && className.replace(/language-/, "")
  if (live) {
    return (
      <CodeBlockBox my={3}>
        <LiveProvider code={children} scope={UIComponents} theme={theme}>
            <LivePreview />
            <div class="ui top attached label">
              Example{" "}
              <button
                type="button"
                onClick={showCode}
                title={`${codeVisibility ? "Hide" : "Show"} code`}
              >
                {codeVisibility ? (
                  <i
                    data-content="Hide code"
                    aria-label="Hide code"
                    class="up icon"
                  ></i>
                ) : (
                    <i
                      data-content="Show code"
                      aria-label="Show code"
                      class="down icon"
                    ></i>
                  )}
              </button>
              <CopyToClipboard text={children} onCopy={copyCode}>
                <i
                  data-content="Copy code"
                  aria-label="Copy code"
                  class="clipboard icon"
                ></i>
              </CopyToClipboard>
            </div>
          </div>
          <div hidden={codeVisibility} animation="fade" duration={500}>
            <div className="ui instructive bottom attached segment">
              <LiveEditor />
            </div>
          </div>
          <LiveError />
        </LiveProvider>
      </CodeBlockBox>
    )
  }
  return (
    <CodeBlockBox my={3}>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: "20px" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeBlockBox>
  )
}

export default CodeBlock