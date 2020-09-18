import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Profile from "./profile";
import Contact from "./contact";
import Portfolio from "./portfolio";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@therealmattbert" />
        <meta name="twitter:creator" content="@therealmattbert" />
        <meta name="twitter:title" content="The Real Matt Bert" />
        <meta name="twitter:description" content="The Real Matt Bert" />
        <meta
          name="twitter:image"
          content="https://matthewbert-60854f.ingress-comporellon.easywp.com/wp-content/uploads/2020/09/website.png"
        />

        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Profile when={data.isPostType && state.router.link == "/profile/"} />
          <Contact when={data.isPostType && state.router.link == "/contact/"} />
          <Portfolio
            when={data.isPostType && state.router.link == "/portfolio/"}
          />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 270px;
  background-color: #8ccbfc;
  position: fixed;
  height: 100%;
  @media screen and (max-width: 900px) {
    & {
      width: 100%;
      height: auto;
      position: relative;
    }
  }
`;

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 900px) {
    & {
      width: 100%;
    }
  }
`;
