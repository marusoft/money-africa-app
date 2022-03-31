import React from "react";
import styled from "styled-components";
import { BsFillCloudFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const ErrorPage = () => {
  return (
    <Error>
      {/* The badge contains the circle, the elipse and the cloud thingy */}
      <Badge>
        {/* the circle */}
        <Circle className="circle">
          <h3>M</h3>
        </Circle>

        <Cloud_Eclipse>
          {/* the elipse */}
          <Eclipse></Eclipse>

          {/* the cloud */}
          <Cloud />
        </Cloud_Eclipse>
      </Badge>

      {/* The info details */}
      <Info>
        <h3>Page not found</h3>
        <p>The page you're looking for is not available</p>
      </Info>

      {/* The Take me home button */}
      <HomeLink href="/">
        Take me home <ArrowFacingRight />
      </HomeLink>
    </Error>
  );
};

export default ErrorPage;

// The main container
const Error = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  gap: 2rem;
`;

// The Badge styles``
const Badge = styled.div`
  position: relative;
  display: grid;
  place-content: center;
`;

//The circle styles
const Circle = styled.div`
  display: grid;
  place-content: center;
  height: 8rem;
  min-width: 8rem;
  border-radius: 50%;
  background-color: #f6b56d;
  border: 12px solid #ffd39a;
  box-shadow: 0px 0px 1px 6px #f6b56d;

  /* The letter "M" in the circle */
  h3 {
    font-family: var(--helvetica-primary);
    font-size: 5rem;
    color: #ffd39a;
    font-weight: var(--helvetica-font-weight-medium);
  }
`;

// The cloud and the eclipse container styles
const Cloud_Eclipse = styled.div`
  display: grid;
  position: absolute;
  top: -2.5rem;
  right: 8rem;
  place-content: center;
  z-index: -1;
`;

// The cloud styles
const Cloud = styled(BsFillCloudFill)`
  position: absolute;
  top: 0.5rem;
  left: 0.6rem;
  font-size: 4rem;
  fill: #fff;
`;

//The eclipse styles
const Eclipse = styled.div`
  position: absolute;
  top: 0.5rem;
  height: 2.4rem;
  width: 2.4rem;
  background: rgb(223, 120, 0);
  background: radial-gradient(
    circle,
    rgba(223, 120, 0, 1) 2%,
    rgba(255, 247, 44, 1) 70%
  );
  border-radius: 50%;
`;

// The info details styles
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

// The take me home styles
const HomeLink = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: "Helvetica Neue";
  font-size: 16px;
  color: #7c7c7c;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  padding: 1rem 2.5rem;
  background-color: #c03e21;
  width: max-content;
  border-radius: 8px;
  margin: 0 auto;
`;

//The arrow inside the take me home button
const ArrowFacingRight = styled(IoIosArrowRoundForward)`
  fill: #fff;
  font-size: 1.5rem;
`;
