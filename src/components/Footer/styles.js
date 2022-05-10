import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 48px 24px;
  margin: 0 auto;

  max-width: 1100px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 16px;

  width: 160px;

  text-align: left;

  box-sizing: border-box;

  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;

    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  margin-bottom: 16px;

  font-size: 14px;
`;

export const FooterLink = styled(Link)`
  margin-bottom: 0.5rem;

  font-size: 14px;

  text-decoration: none;

  color: #fff;

  &:hover {
    color: #01bf71;

    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 40px auto 0 auto;

  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;

  margin-bottom: 16px;

  cursor: pointer;

  text-decoration: none;

  font-size: 1.5rem;
  font-weight: bold;

  color: #fff;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 16px;

  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;

  color: #fff;
`;
