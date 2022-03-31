import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import ProfileImg from "./image(s)/profile-image.avif";

const NavBar = () => {
  const [close, setClose] = useState(false);
  const [navReveal, setNavReveal] = useState(false);

  return (
    //The Nav bar
    <Nav_Bar>
      <div className="container">
        {/* The Nav content */}
        <NavContent>
          <SearchContainer
            style={!close ? null : customStyling.revealSearchBar}
          >
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="What do you want to learn"
              />
              <button>
                <BiSearch />
              </button>
            </form>
            <VscChromeClose
              style={IconStyles.close}
              onClick={() => {
                setClose(!close);
              }}
            />
          </SearchContainer>

          {/* I used this method to check the screen size and based on the screen
          size the search icon will appear or disappear. Media query would have solved this too, but just playing around... */}
          {/* The search icon on mobile view */}
          <SearchIcon
            onClick={() => {
              setClose(!close);
            }}
          />

          {/* The MoneyAfrica Logo */}
          <Logo href="/">MoneyAfrica</Logo>

          {/* The Nav links */}
          <Navlinks style={!navReveal ? null : customStyling.navlink}>
            <div className="links">
              <li>
                <Links href="/OhNoPageError">Explore</Links>
              </li>
              <li>
                <Links href="/ErrorPage">Articles</Links>
              </li>
              <li>
                <Links href="/OhNoPageError">Videos</Links>
              </li>
              <li>
                <Links href="/ErrorPage">Calculator</Links>
              </li>
              <li>
                <Links href="/OhNoPageError">My learning</Links>
              </li>
            </div>

            {/* The right-most part of the Nav Bar */}
            <OtherNotifications>
              <Upgrade>upgrade</Upgrade>
              <Bookmark />
              <div>
                <Bell />
                <Redball></Redball>
              </div>
              <div className="profile__items">
                <ProfileImage src={ProfileImg} />
                <IoIosArrowDown style={IconStyles.downArrow} />
              </div>
            </OtherNotifications>
          </Navlinks>

          {/* Only visible when on mobile */}
          {/* The three dashes that appear at the top right corner in mobile view */}
          <Burger
            onClick={() => {
              setNavReveal(!navReveal);
            }}
          >
            {/* Using conditional rendering to animate the three dashes based on the boolean value of the navReveal state */}
            <span
              style={!navReveal ? null : customStyling.animateSpanFirstChild}
            ></span>
            <span
              style={!navReveal ? null : customStyling.animateSpanSecondChild}
            ></span>
            <span
              style={!navReveal ? null : customStyling.animateSpanLastChild}
            ></span>
          </Burger>
        </NavContent>
      </div>
    </Nav_Bar>
  );
};

export default NavBar;

// The navbar styles
const Nav_Bar = styled.nav`
  position: relative;
  width: 100%;
  position: fixed;
  padding: 1rem 0;
  z-index: 10000;
  display: flex;
  align-items: center;
`;

//I decided to customize this icon this way just to show another method of styling the react-icons
const Bell = styled(IoMdNotificationsOutline)`
  position: relative;
  cursor: pointer;
  font-size: 22px;
  margin-top: 0.2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Bookmark = styled(BsBookmark)`
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SearchIcon = styled(BiSearch)`
  display: none;
  flex: 0.4;
  font-size: 24px;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Redball = styled.span`
  position: absolute;
  height: 9px;
  width: 9px;
  top: 0.2rem;
  border: 1px solid #fff;
  background-color: red;
  border-radius: 50%;
  right: 0.2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  /* This var() values are coming from the globalstyles */
  color: var(--primary-color);
  font-weight: var(--font-weight);
  font-size: 20px;
  margin: auto 0;
  z-index: 1500;
  cursor: pointer;
  text-decoration: none;
  flex: 0.8;

  /* media queries */
  @media (max-width: 1024px) {
    /* Transformed the logo a bit to center in the middle */
    transform: translateX(-4%);

    /* Flex of 3 gives the logo(MoneyAfrica) more width in mobile view */
    flex: 3;
    text-align: center;
  }
`;

const Navlinks = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  /* Flex of 3 gives the NavLinks more width in Desktop view */
  flex: 3;

  .links {
    display: flex;
    gap: 1.5rem;
  }
  li {
    height: inherit;
  }

  /* The media query */
  @media (max-width: 1024px) {
    position: absolute;
    height: 100vh;

    /* Transform keeps the Navlinks outside of the mobile view until the burger is clicked */
    transform: translateX(-110vw);

    display: grid;
    align-content: flex-start;
    gap: 2rem;
    background-color: #fff;
    padding: 10%;
    padding-top: 5rem;
    top: 0;
    left: 0;
    right: 0;

    /* This gives the transitioning of the Navlinks a smooth effect */
    transition: all 0.4s ease-in-out;

    .links {
      flex: 0.5;
      flex-flow: column;
    }
  }
`;

const Links = styled.a`
  position: relative;
  text-decoration: none;
  cursor: pointer;

  /* the values for the variables are coming from the globalstyles */
  color: var(--links-color);
  font-size: var(--links-font-size);
  font-weight: var(--helvetica-font-weight-medium);
  font-family: var(--helvetica-primary);

  /* for smooth transitioning */
  transition: all 0.2s ease-in-out;

  /* the little red dot beneath the links when hovered */
  &::after {
    opacity: 0;
    position: absolute;
    bottom: -0.5rem;
    content: "";
    height: 5px;
    width: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #c03e21;
    transition: all 0.2s ease-in-out;
  }

  /* the  pseudo effects */
  &:hover {
    color: #c03e21;
  }
  &:hover::after {
    opacity: 1;
  }
  &:active::after {
    opacity: 1;
  }
  &:focus::after {
    opacity: 1;
  }
`;

const OtherNotifications = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  flex: 0.9;

  /* The div container i used here is just to make sure that the red ball 
  on the bell persists in its current position */
  div {
    position: relative;
  }

  /* the image and the down arrow container */
  .profile__items {
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
const Upgrade = styled(Links)`
  text-transform: uppercase;
  border: 1px solid #111111;
  font-size: 14px;
  font-family: var(--helvetica-secondary);
  font-weight: var(--helvetica-font-weight-bold);
  padding: 0.5rem 1rem;
  border-radius: 7px;
`;
const ProfileImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Burger = styled.div`
  display: none;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  /* To keep the burger at the very top of all other elements on the page */
  z-index: 1000;

  gap: 0.3rem;

  /* The dashes in the burger */
  span {
    height: 3px;
    width: 2rem;
    background-color: #7c7c7c;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;

// Custom styles
const customStyling = {
  //Styling to reveal the search bar
  revealSearchBar: {
    opacity: 1,
    transform: "translateY(0)",
    pointerEvents: "visible",
  },

  //Styling to reveal the Navlink
  navlink: {
    transform: "translateX(0)",
  },

  //Animation style for the dashes
  animateSpanFirstChild: {
    width: "1.5rem",
    transform: "translateY(8px) rotate(45deg)",
  },
  animateSpanSecondChild: {
    opacity: "0",
  },
  animateSpanLastChild: {
    width: "1.5rem",
    transform: "translateY(-8px) rotate(-45deg)",
  },
};

//Styling for the react-icons
const IconStyles = {
  downArrow: {
    fontSize: "20px",
    cursor: "pointer",
  },

  searchTwo: {
    display: "block",
    flex: 0.4,
    fontSize: "24px",
  },

  close: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    fill: "#7c7c7c",
    fontSize: "24px",
  },
};

const SearchContainer = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  padding: 0 1rem;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  z-index: 1500;

  @media (max-width: 1024px) {
    display: flex;
  }

  form {
    display: flex;
    align-items: center;
    position: fixed;
    width: 300px;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    border-radius: 30px;
    border: 2px solid #7c7c7c;

    input {
      background-color: transparent;
      color: #7c7c7c;
      border: none;
      height: 1.5rem;
      padding: 0.3rem;
      font-size: 1rem;
      font-family: "Helvetica Neue";
      outline: none;
      width: 100%;

      &::placeholder {
        font-weight: 300;
        font-size: 0.9rem;
        letter-spacing: 1px;
        color: #7c7c7c;
        font-family: "Helvetica Neue";
      }
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.5rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    /* targeting the icon inside the button */
    button > * {
      font-size: 1.2rem;
      fill: #7c7c7c;
    }
  }
`;
