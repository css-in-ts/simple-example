import React, { FC } from "react";
import styled from "styled-components";

import chariotLogo from "../assets/chariot-solutions-logo.png";
import {
  makeColor,
  makeFont,
  makeInset,
  makeSize
} from "../design-system/utils";

const StyledSlideContainer = styled.div`
  ${makeInset({ top: 160 })};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: ${makeSize({ custom: 100 })};
    width: 100%;
    background: ${makeColor({ fixed: "dark" })};
  }

  & > * {
    ${makeInset({ horizontal: 60 })};
    width: 100%;
  }
`;

const StyledSlideHeader = styled.header`
  ${makeFont({
    fontSize: "h1",
    fontColor: { scalable: { color: "gray", scale: 0 } },
    fontFamily: "system",
    fontWeight: "bold"
  })}
`;

const StyledSlideContent = styled.section`
  ${makeInset({ vertical: 60, horizontal: 60 })};
  flex: 1;
`;

const StyledSlideFooter = styled.footer`
  ${makeInset({ horizontal: 20 })};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledSlideLogo = styled.div`
  width: ${makeSize({ custom: 200 })};

  & > img {
    width: inherit;
  }
`;

export const ChariotSlide: FC<{ title: string }> = ({ title, children }) => (
  <StyledSlideContainer>
    <StyledSlideHeader>{title}</StyledSlideHeader>
    <StyledSlideContent>{children}</StyledSlideContent>
    <StyledSlideFooter>
      <StyledSlideLogo>
        <img src={chariotLogo} alt="chariot-solutions-logo" />
      </StyledSlideLogo>
    </StyledSlideFooter>
  </StyledSlideContainer>
);
