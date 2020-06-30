import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, Text, Heading, Image } from 'rebass/styled-components'

import Layout from '../layouts/BaseLayout'
import SEO from '@components/SEO/SEO'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Skills from '../components/Skills/Skills'
import Newsletter from '../components/Newsletter/Newsletter'
import PostLoop from '../components/PostLoop/PostLoop'
import Contact from '../components/Contact/Contact'

import BombEmoji from '../assets/img/emoji/bomb.png'
import RyosukePortrait from '../assets/img/self-portrait-blue-w-text.jpg'

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`

export default class Frontpage extends Component {
  render() {
    let { data } = this.props
    const skip = false

    return (
      <Layout className="About pt2">
        <SEO key="seo-about" title="About" url="about" />
        <Box
          bg="white"
          px={3}
          py={5}
          sx={{
            borderBottom: '1px solid black',
            borderColor: 'black',
          }}
        >
          <Heading color="black" fontSize={[1, 2, 3]}>
            Lorem ipsum dolor sit amet.
          </Heading>
          <Heading color="black" fontSize={[4, 5, 6]}>
            Lorem ipsum dolor sit amet.
          </Heading>
        </Box>
        <Flex
          bg="white"
          sx={{
            borderBottom: '1px solid black',
            borderColor: 'black',
          }}
          flexWrap="wrap"
        >
          <Box
            as="figure"
            width={[1, 1, 2 / 3]}
            minHeight={6}
            textAlign="center"
            sx={{
              backgroundImage: `url(${RyosukePortrait})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />

          <Box width={[1, 1, 1 / 3]} px={3} py={5}>
            <Text color="black" variant="paragraph" px={5} mt={4} mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus luctus hendrerit. In vitae fringilla neque. Nulla luctus mi metus, sit amet iaculis nisl finibus a. Integer luctus dignissim elementum.
            </Text>
            <Text color="black" variant="paragraph" px={5}>
            Vestibulum eu turpis quis lectus interdum auctor. Integer non neque ligula. Fusce a quam congue mauris dictum consequat nec vitae est. Aliquam sed dignissim tortor. Sed eu consequat nibh. Quisque lobortis elit eget varius egestas.
            </Text>
          </Box>
        </Flex>

        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query AboutQuery {
    projects: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      filter: { frontmatter: { section: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
