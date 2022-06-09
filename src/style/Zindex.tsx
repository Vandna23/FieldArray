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
  flex-direction: column;
  gap: 40px;
  justify-content: ${({ active }) => (active ? "center" : "none")};
  align-items: center;
  height: 100px;
  padding: ${({ active }) => (active ? "8px" : 0)};
  width: 100px;
  border: 1px solid #83d1d8;
  margin-bottom: -46px;
  background-color: ${({ active }) => (active ? "#94A5FF" : "#E0FFDF")};
  border-radius: 8px;
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  cursor: ${({ active }) => (active ? "default" : `pointer`)};
`;
