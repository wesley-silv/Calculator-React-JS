import styled from "styled-components";

export const Display = styled.div`
  margin-bottom: 1.4rem;
  padding: 0 .2rem;
`;

export const Operacao = styled.p`
  color: #f00;
  text-align: right;
  font-size: 1.2rem;
  letter-spacing: -0.4px;
  margin-bottom: .2rem;

  p {
    width: 20rem;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Resultado = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ebebeb;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: -0.72px;

  p {
    width: 200px;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
