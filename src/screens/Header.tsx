import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 20px 60px;
  width: 100vw;
  height: 100px;
  font-size: 24px;
  background-color: transparent;
`;

const MainLogo = styled(motion.img)`
  width: 80px;
  height: 100px;
  background-image: url(../assets/logo_mmm.png) no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Items = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

const Item = styled(motion.li)`

`;

const Line = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const subLogoVariants = {
  initial: {
    
  }
}

const itemVariants = {
  hover: {
        
  },

}

const Header = () => {
  return (<Container>
      <Items>
        
        <Item
          variants={itemVariants}
          whileHover="hover"
          animate="animate"
        >
          <Link to="/about">
            About
          </Link>
        </Item>
        <Item
          variants={itemVariants}
          whileHover="hover"
        >
          <Link to="discography">
            Discography
          </Link>
        </Item>
        <Item
          variants={itemVariants}
          whileHover="hover"
        >
          <Link to="works">
            Works
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <MainLogo />
          </Link>
        </Item>
        <Item
          variants={itemVariants}
          whileHover="hover"
        >
          <Link to="performance">
            Performance
          </Link>
        </Item>
        <Item
          variants={itemVariants}
          whileHover="hover"
        >
          <Link to="contact">
            Contact
          </Link>
        </Item>
      </Items>
  </Container>);
}

export default Header;