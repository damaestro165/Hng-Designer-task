import styled from 'styled-components';
import DownArrow from '../assets/arrow-down.png';
const StyledLi = styled.li`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:137px;
  padding:10px
  gap:10px;
`;

const DropDownContent = styled.div`
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: none;
  margin-top: 40px;
  flex-direction: column;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #f8fafc;
  margin-right: 10px;
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`;

const DropDown = ({ title }) => {
  return (
    <>
      <StyledLi>
        <StyledA>{title}</StyledA>
        <img src={DownArrow} alt='down_arrow' />
      </StyledLi>
      <DropDownLi>
        <DropDownContent>
          <SubA>Link 1</SubA>
          <SubA>Link 2</SubA>
          <SubA>Link 3</SubA>
        </DropDownContent>
      </DropDownLi>
    </>
  );
};

export default DropDown;
