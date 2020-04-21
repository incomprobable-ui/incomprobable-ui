// Dependencies
import styled from "../../Theme";

const Button = process.env.platform === "native" ? styled.TouchableOpacity<any>`` : styled.button<any>``;

export const StyledButton = styled(Button)`
  color: white;
  background: #ff8400;
  border: 1px solid #FF6300;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
  margin: 8px;
  font-weight: 600;
  padding: 0 16px;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
`;