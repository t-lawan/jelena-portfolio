export class Project {
    id;
    title;
    slug;
    seo_description;
    content;
    constructor(id, title, slug, seo_description, content = []) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.seo_description = seo_description;
        this.content = content;
    }

}