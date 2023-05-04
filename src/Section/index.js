import { StyledSection, Header } from "./styled.js";

const Section = ({
  sectionClassName,
  headerClassName,
  children,
  title,
  extraHeaderContent,
}) => (
  <StyledSection className={sectionClassName}>
    <Header className={headerClassName}>{title}</Header>
    {extraHeaderContent}
    {children}
  </StyledSection>
);

export default Section;
