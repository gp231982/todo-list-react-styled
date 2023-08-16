import { Navigation } from "./styled";

const SectionNav = ({ children, sectionClassName }) => (
  <Navigation sectionClassName={sectionClassName}>{children}</Navigation>
);

export default SectionNav;
