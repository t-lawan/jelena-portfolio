import { NavbarLink } from "./models/NavbarLink"
import { Project } from "./models/Project"

export class Convert {
  static toProject = contentfulModel => {
    console.log("contentfulModel", contentfulModel)
    return new Project(
        contentfulModel.contentful_id,
        contentfulModel.title,
        contentfulModel.slug,
        contentfulModel.seoDescriptions.seoDescriptions,
        contentfulModel.contentList
    )
  }


  static toNavbarLink = contentfulModel => {
    const project = Convert.toProject(contentfulModel.project);

    return new NavbarLink(
      contentfulModel.contentful_id,
      contentfulModel.title,
      project
    )
  }

  static toNavbarLinkList = data => {
    let navbar_links = []

    data.forEach(navbar => {
      let nv = Convert.toNavbarLink(navbar)
      navbar_links.push(nv)
    })

    return navbar_links
  }

  static toModelArray = (query, modelConverter) => {
    const modelArray = []
    query.edges.forEach(contentfulModel => {
      let model = modelConverter(contentfulModel.node)
      modelArray.push(model)
    })
    return modelArray
  }
}
