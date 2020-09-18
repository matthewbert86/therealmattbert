import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Nav from "./nav";
import MobileMenu from "./menu";
import matt from "../images/matt.jpg";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <MobileMenu />
        <MainImage>
          <img src={matt} alt="Logo" />
        </MainImage>
        <Description>{state.frontity.description}</Description>
      </Container>
      <Nav />
      <Icons>
        <a href="https://twitter.com/therealmattbert/">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/therealmattbert/">
          <FaInstagram />
        </a>
        <a href="https://github.com/matthewbert86/">
          <FaGithub />
        </a>
      </Icons>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const MainImage = styled.div`
  margin: 0 auto;
  padding: 10px;
  img {
    width: 200px;
    border-radius: 50%;
  }

  @media screen and (max-width: 800px) {
    & {
    }
  }
`;

const Description = styled.h4`
  margin: 0 auto;
  padding: 10px 2px;
  letter-spacing: 1.3px;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icons = styled.nav`
  font-size: 35px;
  padding: 30px 0 0 40px;
  display: flex;

  a:hover {
    color: white;
  }

  svg {
    padding-right: 10px;
  }
  @media screen and (max-width: 1087px) {
    display: none;
  }
`;
