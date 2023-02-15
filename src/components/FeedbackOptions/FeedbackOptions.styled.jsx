import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Btn = styled.button`
  width: 90px;
  height: 35px;
  font-size: 16px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
  &:hover {
    color: white;
    background-color: rgb(87, 120, 226);
    box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: scale(1.15);
  }
`;
