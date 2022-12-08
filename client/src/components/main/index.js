import { StyledMain } from "./style";
import "./style.css"
export const Main = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};
