export default `
  animation-name: pin;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes pin {
    0% {
      transform: translateY(0) scale(1);
    }

    50% {
      transform: translateY(-1rem) scale(1.1);
    }

    100% {
      transform: translateY(0) scale(1);
    }
  }
`;
