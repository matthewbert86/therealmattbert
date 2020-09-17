const settings = {
  name: "starter-theme",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "The Real Matt Bert",
      description: "Web Developer. Mental Health Advocate. Geek."
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["About", "/about/"],
            ["Blog", "/blog/"],
            ["Portfolio", "/portfolio/"],
            ["Mental Health", "/mental-health/"],
            ["Contact", "/contact/"],
            ["Home", "/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          },
          autoPrefetch: "hover"
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://matthewbert-60854f.ingress-comporellon.easywp.com/wp-json",
          homepage: "/profile/",
          postsPage: "/blog/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
