import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import TransparentLine from "./image(s)/image001.png";
import Line from "./image(s)/image003.png";
const OhNoPageError = () => {
  return (
    // the main container
    <Error>
      {/* The 404 and the brown wavy lines */}
      <FourZeroFour>
        <h1>404</h1>
        <div>
          {/* The wavy lines */}
          <LineOne src={TransparentLine} alt="" />
          <LineTwo src={TransparentLine} alt="" />

          {/* the Whisker like image */}
          <LineThree src={Line} alt="" />
        </div>
      </FourZeroFour>

      {/* the info details */}
      <Info>
        <h3>Oh no!</h3>
        <p>The page you're looking for is not available</p>
      </Info>

      {/* The take me home button and the arrow facing right */}
      <HomeLink href="/">
        Take me home <ArrowFacingRight />
      </HomeLink>
    </Error>
  );
};

export default OhNoPageError;

// The main container
const Error = styled.section`
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  display: grid;
  place-content: center;
  gap: 1rem;
`;

// The info Styles
const Info = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
  h3 {
    font-size: 24px;
    color: #111111;
    text-align: center;
  }
  p {
    font-family: "Helvetica Neue";
    font-size: 16px;
    color: #7c7c7c;
  }
`;

// The take me home link
const HomeLink = styled.a`
  display: flex;
  align-items: center;
  font-family: "Helvetica Neue";
  font-size: 16px;
  color: #7c7c7c;
  gap: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transform: translateY(50%);
  color: #fff;
  padding: 1rem 2.5rem;
  background-color: #c03e21;
  width: max-content;
  border-radius: 8px;
  margin: 0 auto;
`;

// The arrow facing right
const ArrowFacingRight = styled(IoIosArrowRoundForward)`
  fill: #fff;
  font-size: 1.5rem;
`;

// The 404 styles
const FourZeroFour = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
  h1 {
    font-size: 15rem;
    color: #cdcccc66;
    font-family: "Helvetica Neue";
    font-weight: 500;
    @media (max-width: 450px) {
      font-size: 12rem;
    }
  }

  /* The container holding the wavy lines and the whisker thingy */
  /* Maybe most sensible people would have downloaded 
  the image, but i chose to explore creativity by 
  designing the lines and the whiskers with micrsoft word 
  and exported it as a PNG */
  div {
    transform: rotate(-9deg);
    position: absolute;
    right: 12rem;
    top: 5rem;
    @media (max-width: 450px) {
      right: 10rem;
      top: 4rem;
    }
  }
`;

// the wavy line (the one on the right)
const LineOne = styled.img`
  position: absolute;
  width: 10rem;
  @media (max-width: 450px) {
    width: 8rem;
  }
`;

// the wavy line (the one on the left)
const LineTwo = styled.img`
  position: absolute;
  transform: rotate(-180deg);
  width: 10rem;
  left: -12rem;
  top: 6rem;
  @media (max-width: 450px) {
    width: 8rem;
    left: -10rem;
    top: 5rem;
  }
`;

// the whiskers
const LineThree = styled.img`
  position: absolute;
  transform: rotate(15deg);
  width: 20rem;
  left: -11rem;
  top: -4rem;
  @media (max-width: 450px) {
    left: -11rem;
    top: -5rem;
  }
`;
