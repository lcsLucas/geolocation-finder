import styled, { css } from "styled-components";

export default {
  SVG: styled.svg<{
    animation?: string;
  }>`
    transform: translateY(0);
    ${props =>
      css`
        ${props.animation}
      ` ?? null}
  `,
};
