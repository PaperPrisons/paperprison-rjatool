import React from "react";
import styled, { keyframes } from "styled-components";

const motion = (props) => keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const DefaultSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${(p) => `${p.size}${p.sizeUnit}`};
  height: ${(p) => `${p.size}${p.sizeUnit}`};

  div {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${(p) => p.color};
    animation: ${(p) => motion(p)} 1.2s linear infinite;
  }

  div:nth-child(1) {
    top: 0px;
    left: -1px;
    animation-delay: 0s;
  }
  div:nth-child(2) {
    top: 0px;
    left: 22px;
    animation-delay: -0.4s;
  }
  div:nth-child(3) {
    top: 0px;
    left: 45px;
    animation-delay: -0.8s;
  }
  div:nth-child(4) {
    top: 22px;
    left: -1px;
    animation-delay: -0.4s;
  }
  div:nth-child(5) {
    top: 22px;
    left: 22px;
    animation-delay: -0.8s;
  }
  div:nth-child(6) {
    top: 22px;
    left: 45px;
    animation-delay: -1.2s;
  }
  div:nth-child(7) {
    top: 44px;
    left: -1px;
    animation-delay: -0.8s;
  }
  div:nth-child(8) {
    top: 44px;
    left: 22px;
    animation-delay: -1.2s;
  }
  div:nth-child(9) {
    top: 44px;
    left: 45px;
    animation-delay: -1.6s;
  }
`;

const Default = ({ color, size, sizeUnit }) => (
  <DefaultSpinner color={color} size={size} sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </DefaultSpinner>
);

Default.defaultProps = {
  size: 64, // overriding this prop changes alignment, but not size. a bug inherited from open source library
  color: "#9dbcdb",
  sizeUnit: "px",
};

export default Default;