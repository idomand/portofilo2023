import { styled } from "styled-components";
import { Header3, ListItem, UL } from "../styles/common/Text";
import stayInTouchPicture from "../assets/stayintouch.png";
import { BasicLink } from "../styles/common/Links";
import { Div } from "../styles/common/Container";

const StayInTouchProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  @media (${({ theme }) => theme.devices.break1}) {
    flex-direction: column;
  }
`;
const ProjectSubSection = styled(Div)`
  @media (${({ theme }) => theme.devices.break1}) {
  }
`;

const ProjectPicture = styled.picture`
  margin: 0 auto;
`;
const ProjectImg = styled.img`
  width: 100%;
  max-width: 600px;
`;

const ProjectLink = styled(BasicLink)`
  font-size: 16px;
`;

const ProjectLink_Live = styled(ProjectLink).attrs(() => {
  return {
    href: "https://stay-in-touch.vercel.app/",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/idomand/stayInTouch",
  };
})``;

export default function StayInTouchProject() {
  return (
    <>
      <ProjectPicture>
        <ProjectImg src={stayInTouchPicture} />
      </ProjectPicture>
      <StayInTouchProjectWrapper>
        <ProjectSubSection>
          <Header3>WHY</Header3>
          <UL>
            <ListItem>
              Seeing how some technologies can make people feel isolated, I
              wanted to create something to bring people closer together.
            </ListItem>
            <ListItem>
              This is a small app to help us stay in touch with friends and
              family.
            </ListItem>
            <ListItem>
              Also, I Love typescript and next.JS and I wanted to created a
              basic design system for myself
            </ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </ProjectSubSection>
        <ProjectSubSection>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>
              This project is a PWC so it can be used like a native app.
            </ListItem>
            <ListItem>
              Writing in TypeScript and Next.js for better maintainability.
            </ListItem>
            <ListItem>
              Styled-Components was chosen for its Component-based approach and
              it’s built in theme support
            </ListItem>
            <ListItem>
              Firebase was used for secure authentication and built-in database.
            </ListItem>
          </UL>
          <ProjectLink_Repo>Repo</ProjectLink_Repo>
        </ProjectSubSection>
      </StayInTouchProjectWrapper>
    </>
  );
}
