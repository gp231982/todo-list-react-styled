import { Navigation } from "./styled";

const TasksSectionNav = ({ children, sectionClassName }) => (
  <Navigation sectionClassName={sectionClassName}>{children}</Navigation>
);

export default TasksSectionNav;
