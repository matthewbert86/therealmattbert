import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const MenuModal = ({ state, actions }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}

        <Icons>
          <a href="https://twitter.com/therealmattbert/">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/therealmattbert/">
            <FaInstagram />
          </a>
        </Icons>
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #8ccbfc;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  @media screen and (min-width: 800px) {
    & {
    }
  }
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const Icons = styled.nav`
  font-size: 35px;
  padding: 30px 0 0 10px;
  display: flex;
  justify-content: center;
  color: black;

  a:hover {
    color: white;
  }

  svg {
    padding-right: 10px;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
