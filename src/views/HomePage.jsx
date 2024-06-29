import { Container, Figure } from "react-bootstrap";

function HomePage() {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <Figure>
        <Figure.Image
          width={200}
          height={200}
          alt="Foto pastel"
          src="https://static.vecteezy.com/system/resources/previews/024/639/169/non_2x/cartoon-cake-delights-colorful-pastel-joy-for-parties-free-png.png"
        />
      </Figure>
    </Container>
  );
}
export default HomePage;
