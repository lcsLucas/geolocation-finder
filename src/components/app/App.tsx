import App from ".";
import Map from "../map";

export interface IAppProps {}

export default () => {
  return (
    <App.Styled.Container>
      <Map />
    </App.Styled.Container>
  );
};
