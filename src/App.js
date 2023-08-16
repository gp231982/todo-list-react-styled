import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation, NavList, NavItem, StyledNavLink } from "./styled";


const App = () => (
  <HashRouter>
    <Navigation>
      <NavList>
        <NavItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </NavItem>
      </NavList>
    </Navigation>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
