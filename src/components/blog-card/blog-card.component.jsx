import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import {
    CollectiveTitle,
    PersonalList,
    Item
} from './../section-card/collective-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const BlogLink = styled(Link)`
  text-decoration: none;
`
const PostTitle = styled.h2`
  margin-bottom: 7px;
  color: #333;
  font-size: 22px;
`

const PostDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 7px;
`

const PostSnippet = styled.p`
  margin-bottom: 20px;
`

const BlogCard = ({ data }) => {
  return (
    <>
      <CollectiveTitle><CustomEmoji label='blog' emoji='🎞' /> The Journal</CollectiveTitle>
      <PersonalList>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </BlogLink>
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostSnippet>{node.excerpt}</PostSnippet>
            </div>
          ))
        }
      </PersonalList>
      <BlogLink to='/journal'>see all on the journal</BlogLink>
		</>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
export default BlogCard