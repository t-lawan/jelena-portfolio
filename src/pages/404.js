import * as React from "react"

import Layout from "../components/layout/layout"
import { navigate } from "gatsby";

const NotFoundPage = () => {
  React.useEffect(() => {
    // Redirect to the home page
    navigate('/');
}, []);

  return (
    <Layout title="Page Not Found">
      <p>Sorry, I can't find the page you're looking for </p>
    </Layout>
  )
}

export default NotFoundPage
