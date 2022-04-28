import styled from "styled-components";

const SubLogo = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  background-image: url(../assets/logo_mmm_sd.png) no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
`;

const BgLogo = () => {
  return <SubLogo/>;
}

export default BgLogo;