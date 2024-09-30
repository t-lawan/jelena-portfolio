import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <p>
        {" "}
        Jelena Viskovic is an artist born in 1989 in Zagreb, Yugoslavia, raised
        in Belgrade, Serbia, currently living and working in London. Her
        background is in software engineering and game development. Her work
        explores the role of gesture and play in relation to the creation and
        preservation of techno-scientific, political and historical narratives.
        Her sculptures and moving image works incorporate playful, animated,
        talking objects that make their way into technologically deterministic,
        seemingly inanimate systems. Borrowing from a cartoonish, carnivalesque
        logic, these worlds become rebellious but approachable, attempting to
        resist the rigid environments of institutions, archives, libraries and
        databases. Jelena’s work has been shown in HDLU, Zagreb (2024), VO
        Curations, Lon- don (2023), U10, Belgrade (2023), MGLC, Ljubljana
        (2022), HKW, Berlin (2021) and AQB, Budapest (2021). She has an MA in
        Design Interactions from Royal College of Art (2016). She is a lecturer
        in game design at University College London since 2021.
      </p>

      <p> instagram: @jelovix </p>
      <p> email: jelena.viskovic@gmail.com </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Jelena" description="Jelan" />
