import { styled } from "styled-components";

export const Section = styled.section`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  @media (${({ theme }) => theme.devices.break1}) {
    margin: 0 12px;

    /* margin-bottom: 10px; */
  }
`;

export const Div = styled.div`
  background-color: white;
  padding: 36px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (${({ theme }) => theme.devices.break1}) {
    padding: 24px;
    margin: 0 12px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  @media (${({ theme }) => theme.devices.break1}) {
    flex-direction: column;
  }
`;
