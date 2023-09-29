import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 310px;
  min-width: 210px;
  height: 100%;

  padding: 0 40px;

  display: flex;
  flex-direction: column;
`;
export const JoinContainer = styled(MainContainer)`
  margin-top: 80px;
`;

export const HomeContainer = styled.div`
  padding-bottom: 7rem;
`;

export const MyContainer = styled.div`
  .root {
    margin-top: 0;
  }
  max-width: 310px;
  min-width: 210px;
  height: 100%;

  padding: 0 33px;
  margin: 0;

  display: flex;
  flex-direction: column;

  border-top: 3px solid rgba(243, 242, 243, 0.46);
`;
