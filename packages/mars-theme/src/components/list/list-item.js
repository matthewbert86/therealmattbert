import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import ListImage from "../list-image";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <StyledArticle>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}

      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <Link link={item.link}>
        {state.theme.featured.showOnList && (
          <ListImage id={item.featured_media} />
        )}
      </Link>

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}

      {/* If the post has an author, we render a clickable author text. */}
      {author && (
        <StyledLink link={author.link}>
          <AuthorName>
            By <b>{author.name}</b>
          </AuthorName>
        </StyledLink>
      )}
      <PublishDate>
        {" "}
        on <b>{date.toDateString()}</b>
      </PublishDate>
    </StyledArticle>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const StyledArticle = styled.article`
  padding: 0 0px 50px 100px;
  margin: 0 auto;
  width: 55%;
  @media screen and (max-width: 800px) {
    & {
      width: 90%;
      display: block;
      margin-bottom: 20px;
      padding: 0 0 30px 0;
      height: 200px;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dae2ec;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  border-bottom: 1px solid #dae2ec;
  margin-bottom: 10px;
`;
