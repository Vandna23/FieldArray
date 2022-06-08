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
  color: #553d3d;
  display: flex;
  justify-content: ${({ active }) => (active ? "center" : "none")};
  align-items: center;
  height: 100px;
  padding: ${({ active }) => (active ? "10px" : 0)};
  width: 100px;
  border: 1px solid #6d5555;
  margin-bottom: -46px;
  background-color: ${({ active }) => (active ? "#ac7b7b" : "#978181")};
  border-radius: 8px;
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  cursor: ${({ active }) => (active ? "default" : `pointer`)};
`;
