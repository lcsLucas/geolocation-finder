import styled, { css } from "styled-components";

export default {
  SVG: styled.svg<{
    animation?: string;
  }>`
    ${props =>
      css`
        ${props.animation}
      ` ?? null}
  `,
};
