import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 0;

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;

  font-size: 32px;
  font-weight: 700;

  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: grid;

  z-index: 1;

  padding: 80px 32px;
  margin: 0 auto;

  max-width: 400px;
  width: 100%;
  height: auto;

  border-radius: 4px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  background: #010101;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;

  font-size: 20px;
  font-weight: 400;

  text-align: center;

  color: #fff;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;

  font-size: 14px;

  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;

  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  padding: 16px 0;

  border: none;
  border-radius: 4px;

  font-size: 20px;

  cursor: pointer;

  color: #fff;
  background: #01bf71;
`;

export const Text = styled.span`
  margin-top: 24px;

  font-size: 14px;

  text-align: center;

  color: #fff;
`;
