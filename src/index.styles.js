import * as React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const InternalLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: blue;
`

export const ExternalLink = styled.a`
  display: block;
  color: blue;
`

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1500px",
}

export const DropdownText = styled.p`
  text-decoration: underline;
  cursor: pointer;
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

const styles = css`
  @font-face {
    font-family: "Sora";
    font-weight: 100 900;
    font-style: normal;
    src: url(/fonts/Sora.ttf) format("truetype");
  }

  @import url("https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap");
  *,
  body {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "Sora", serif;
    font-weight: 400;
    font-display: block;
    font-style: normal;
    background: white;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: inherit;
  }
  a {
    text-decoration: underline;
    color: blue;
  }
  h1 {
    margin-bottom: 1.45rem;
    font-size: 2rem;
    line-height: 1.1;
  }
  h2 {
    margin-bottom: 1.45rem;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-bottom: 1.45rem;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    margin-bottom: 1.45rem;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin-bottom: 1.45rem;
    font-size: 0.78405rem;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p,
  a {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0.5rem;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    font-size: 0.9rem;
  }

  li {
    list-style-type: lower-roman;
  }

  .is_active {
    animation: shadow 1s linear infinite alternate;
  }

  .underline {
    text-decoration: underline;
    color: purple !important;
    animation: rainbow 2s linear infinite alternate;
    font-style: italic;
  }

  @keyframes rainbow {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes shadow {
    0% {
      filter: drop-shadow(-5px 0px 4px #fff);
    }
    100% {
      filter: drop-shadow(5px 0px 4px #ffffed);
    }
  }

  @keyframes long-shadow {
    0% {
      filter: drop-shadow(-5px 0px 4px #fff);
    }
    100% {
      filter: drop-shadow(20px 0px 4px #ffffed);
    }
  }

  @keyframes moveBackground {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`

export const GlobalStyles = props => <Global styles={styles} />
