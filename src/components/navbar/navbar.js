import React, { useState } from "react"
import styled from "@emotion/styled"
import { InternalLink, size } from "../../index.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Convert } from "../../utils/convert"

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  /* background-color: white; */
  padding: 1rem;

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
  }
`

const NavbarLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
    /* justify-content: center;
    align-items: center; */
  }
`
const Navbar = () => {
  //   console.log("***", JSON.stringify(NavbarLinks));
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(
    graphql`
      {
        allContentfulNavbarLink {
          edges {
            node {
              title
              project {
                contentful_id
                slug
                title
                seoDescriptions {
                  seoDescriptions
                }
              }
            }
          }
        }
      }
    `
  )

  const allContentfulNavbarLink = data.allContentfulNavbarLink
  const navbarLinks = Convert.toModelArray(
    allContentfulNavbarLink,
    Convert.toNavbarLink
  )
  console.log("allContentfulNavbarLink", navbarLinks)

  return (
    <NavbarWrapper>
      <NavbarLinksWrapper>
      <InternalLink
            activeClassName="underline"
            to={`/`}
          >
            [jelena viskovic]
          </InternalLink>
        {navbarLinks.map((navbarLink, index) => (
          <InternalLink
            activeClassName="underline"
            key={index}
            to={`/${navbarLink.project.slug}`}
          >
            [{navbarLink.title}]
          </InternalLink>
        ))}
      </NavbarLinksWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
