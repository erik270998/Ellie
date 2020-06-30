import * as React from 'react'
import styled from 'styled-components'
import { Box, Heading } from 'rebass/styled-components'
import MastheadSVG from '@assets/svg/masthead-circles.svg'

interface IGreetingMastheadProps {
  className: string
}

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({
  className,
}) => {
  return (
    <section className={className}>
      <Box mb={4}>
        <Heading variant="label" textAlign="right" mb={2}>
          Lorem ipsum
        </Heading>
        <Heading fontSize={[3, 4, 7]} textAlign="right">
          Lorem ipsum ✌️
          <br />
          Lorem ipsum
          <br />
          &amp; Lorem ipsum 💭
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading variant="label" textAlign="right">
          Lorem ipsum
        </Heading>
        <Heading fontSize={[2, 3, 5]} textAlign="right">
          Lorem ipsum
          <br />
          Lorem ipsum
        </Heading>
      </Box>
    </section>
  )
}

const StyledGreetingMasthead = styled(GreetingMasthead)`
  padding: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};

  background-image: url(${MastheadSVG});
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.white};

  color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.mediaQueries.mobile} {
    background-size: 150%;
    background-position: 30% 30%;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    background-size: 75%;
    background-position: -30% 30%;
  }
`

export default StyledGreetingMasthead
