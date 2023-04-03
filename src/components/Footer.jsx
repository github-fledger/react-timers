import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--bs-light);
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Developed by Vanessa Barsotti</span>
      <span>2023 &copy; All rights reserved</span>
    </FooterWrapper>
  );
};

export default Footer;
