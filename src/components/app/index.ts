import InternalApp from "./App";
import AppStyled from "./App.Styled";

type TypeInternalApp = typeof InternalApp;

type CompoundedComponent = TypeInternalApp & {
  Styled: typeof AppStyled;
};

const App = InternalApp as CompoundedComponent;

App.Styled = AppStyled;

export default App;