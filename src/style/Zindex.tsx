import styled from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledDiv = styled.div<{ zIndex: number; active: boolean }>`
  display: flex;
  justify-content: ${({ active }) => (active ? "center" : "none")};
  align-items: center;
  height: 100px;
  padding: ${({ active }) => (active ? "10px" : 0)};
  width: 100px;
  border: 2px solid red;
  margin-bottom: -46px;
  background-color: ${({ active }) => (active ? "green" : "gray")};
  border-radius: 8px;
  border-width: 4px;
  border-color: black;
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
`;
