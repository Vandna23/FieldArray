import { useState } from "react";
import { Wrapper, StyledDiv } from "../style/Zindex";
const data = [
  "Developer",
  "Tester",
  "Front-End",
  "Back-End",
  "Coder",
  "Designer",
];
const length = data.length;

const Zindex = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const calculateZIndex = (index: number) => {
    let zIndex = 0;
    if (selectedItem === index) {
      zIndex = length - 1;
    } else if (selectedItem < index) {
      zIndex = length - 1 - index;
    }
    return zIndex;
  };
  return (
    <Wrapper>
      <h2>Card Stacking</h2>
      {data.map((data, index) => {
        return (
          <StyledDiv
            key={index}
            active={selectedItem === index}
            onClick={() => setSelectedItem(index)}
            zIndex={calculateZIndex(index)}
          >
            {data}
            <div>{data}</div>
          </StyledDiv>
        );
      })}
    </Wrapper>
  );
};

export default Zindex;
