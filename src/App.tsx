import MainLayout from "./components/Layout/MainLayout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  // return <MainLayout></MainLayout>;
  /* A container Component created - to reuse , anything sent as a children will have the property of container */
  return (
    <Container>
      <h1>Main Content</h1>
      <button className="btn btn-primary">primary</button>
      <Button
        buttonName={"clsxTest"}
        className={"bg-cyan-500"}
        outline="true"
        // variant="danger"
      ></Button>
    </Container>
  );
}
export default App;
