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
          Cześć, mam na imię Grzegorz. Prywatnie mąż i ojciec dwójki
          rozrabiaków, z wykształcenia i zawodu inżynier od lat związany z
          branżą automotive. W wyniku przemyśleń różnorakich oraz tradycji
          programistycznych w rodzinie postanowiłem spróbować czegoś całkiem
          nowego tj.
          <strong className="strong">
            nauczyć się tworzyć interaktywne strony internetowe
          </strong>
          na początek. Bardzo podoba mi się idea
          <i className="i">"Workation na Bali :)"</i> oraz innych profitów
          dotyczących zawodu programisty, stąd postanowiłem podjąć to wyzwanie
          razem z Wami i jak do tej pory forma przekazywanej wiedzy bardzo mi
          odpowiada. Mam nadzieję, że ta <b className="b">podroż</b>, w którą chce
          wyruszyć szybko się nie skończy...i tym razem nie zabraknie mi
          zaangażowania i entuzjazmu. Wiem, że jeśli mi się uda, będzie to
          idealny <em className="em">prezent na Nowy Rok</em>.
        </p>
      }
      children={null}
    />
  </Container>
);

export default Author;
