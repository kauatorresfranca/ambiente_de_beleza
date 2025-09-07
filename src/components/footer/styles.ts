import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Footer = styled.footer`
  padding: 2rem 0 0 0;
  border-top: 1px solid ${colors.primary};
  background: ${colors.background};

  .container {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem 1rem;
    .container {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 0.5rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30%;
  min-width: 200px;
  box-sizing: border-box;

  img {
    width: 5rem;
    max-width: 100%;
  }

  h4 {
    font-size: 1rem;
    color: ${colors.title};
    margin: 0;
    font-weight: 600;
  }

  h5 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${colors.text};
    font-weight: 500;
    margin: 0.25rem 0;

    i {
      font-size: 1rem;
      color: ${colors.primary};
    }

    a {
      color: ${colors.text};
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
    text-align: center;

    li {
      a {
        color: ${colors.text};
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    align-items: center;
    margin-bottom: 1rem;

    img {
      margin: 0 auto;
    }
  }
`;

export const FooterDescription = styled.p`
  font-size: 0.875rem;
  color: ${colors.text};
  text-align: center;
  margin: 0;
  max-width: 20rem;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 1.25rem;
    color: ${colors.darkPrimary};
    background-color: ${colors.lightPrimary};
    border-radius: 50%;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    a {
      padding: 0.6rem;
      font-size: 1.125rem;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  margin-top: 24px;
  border-top: 1px solid ${colors.lightgray};
  overflow-x: auto;
  white-space: nowrap;

  p {
    font-size: 0.75rem;
    color: ${colors.text};
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 6px;
    padding-bottom: 4px;
  }
`;