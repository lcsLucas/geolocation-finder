import styled, { css } from "styled-components";

export default {
  Pulse: styled.div<{
    backgroundColor?: string;
    shadowColor?: string;
    scale?: number;
  }>`
    background: ${props => props.backgroundColor ?? "rgba(0, 0, 0, 0.2)"};
    border-radius: 50%;
    height: 14px;
    width: 14px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotateX(55deg)
      ${props => (props.scale ? `scale(${props.scale})` : null)};
    z-index: -2;

    &::after {
      content: "";
      border-radius: 50%;
      height: 40px;
      width: 40px;
      position: absolute;
      margin: -13px 0 0 -13px;
      animation: pulsate 1s ease-out;
      animation-iteration-count: infinite;
      opacity: 0;
      box-shadow: 0 0 1px 2px
        ${props => props.shadowColor ?? "rgba(0, 0, 0, 0.2)"};
    }

    ${css`
      @-webkit-keyframes pulsate {
        0% {
          -webkit-transform: scale(0.1, 0.1);
          transform: scale(0.1, 0.1);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1.2, 1.2);
          transform: scale(1.2, 1.2);
        }
      }
    `}

    ${css`
      @-webkit-keyframes bounce {
        0% {
          -webkit-transform: translateY(-2000px) rotate(-45deg);
        }
        60% {
          -webkit-transform: translateY(30px) rotate(-45deg);
        }
        80% {
          -webkit-transform: translateY(-10px) rotate(-45deg);
        }
        100% {
          -webkit-transform: translateY(0) rotate(-45deg);
        }
      }
    `}
  `,
};
