import React, { useState } from "react"
import styled from "@emotion/styled"
import { InternalLink, size } from "../../index.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Convert } from "../../utils/convert"
import Hamburger from "hamburger-react"

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  @media only screen and (max-width: ${size.tablet}) {
    height: fit-content;
    height: 100%;
    padding: 0.5rem 1rem;
    border-bottom: 1px dotted blue;
  }
`

const StyledInternalLink = styled(InternalLink)`
  /* font-weight: bold; */
  font-style: italic;
`

const HiddableInternalLink = styled(InternalLink)`
    margin-bottom: 1rem;
  @media only screen and (max-width: ${size.tablet}) {
    display: ${props => (props.isopen ? "none" : "inherit")};
    margin: 0;
  }
`

const MobileNavbarWrapper = styled.div`
  display: none;
  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const HamburgerWrapper = styled.div`
  display: none;
  @media only screen and (max-width: ${size.tablet}) {
    transform: skewY(-5deg);
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 3.5rem;
  }
`

const NavbarLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
    display: ${props => (props.isopen ? "flex" : "none")};
  }
`
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const closeNavbar = () => setIsOpen(false)

  const data = useStaticQuery(
    graphql`
      {
        contentfulSite {
          title
          description
          navbarLinks {
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
    `
  )

  const navbarLinks = data.contentfulSite.navbarLinks.map(navbarLink => {
    return Convert.toNavbarLink(navbarLink)
  });

  return (
    <NavbarWrapper>
      <MobileNavbarWrapper>
        <StyledInternalLink activeClassName="underline" to={`/`}>
          Jelena Visković
        </StyledInternalLink>
        <HamburgerWrapper>
          <Hamburger
            animateOnMount={true}
            size={12}
            color="blue"
            toggled={isOpen ? 1 : 0}
            toggle={setIsOpen}
          />
        </HamburgerWrapper>
      </MobileNavbarWrapper>
      <NavbarLinksWrapper isopen={isOpen ? 1 : 0}>
        <HiddableInternalLink
          isopen={isOpen ? 1 : 0}
          activeClassName="underline"
          to={`/`}
        >
          Jelena Visković
        </HiddableInternalLink>
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
