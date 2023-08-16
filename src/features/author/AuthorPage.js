import Container from "../../common/Container";
import AppHeader from "../../common/AppHeader";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <AppHeader title="O autorze" />
    <Section
      sectionClassName="addTaskSection"
      headerClassName="addTaskSection__header"
      title="Grzegorz Piejko"
      extraHeaderContent={
        <p style={{ padding: "30px" }}>
          Cześć, mam na imię Grzegorz.<br/><br/> Bardzo się cieszę, że dotarłem do tego
          miejsca w kursie, chociaż im dalej w las tym coraz trudniej. Niemniej
          nie poddaję sie i mam nadzieję, że uda mi się dopiąć swego i zostać
          programistą ;) 
          <br/><br/>Tymczasem cieszę się z ukończenia tego zadania, bo to kolejny mały kroczek na drodze do sukcesu 😎🎈🎈
        
        </p>
      }
      children={null}
    />
  </Container>
);

export default Author;
