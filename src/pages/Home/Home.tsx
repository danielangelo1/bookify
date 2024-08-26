import {
  Description,
  FeatureItem,
  FeatureTitle,
  Features,
  MainContainer,
  Title,
} from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <Title>Bem-vindo ao Bookify! </Title>
      <Description>
        No Bookify, você tem o controle total sobre sua coleção de livros e
        autores. Esteja você organizando sua biblioteca pessoal ou gerenciando a
        leitura para um clube do livro, nossa ferramenta simples e intuitiva
        facilita o cadastro e a exclusão de títulos e autores.
      </Description>
      <FeatureTitle>Recursos Principais:</FeatureTitle>
      <Features>
        <FeatureItem>
          <strong>Catálogo de Livros:</strong> Adicione e remova livros com
          facilidade. Mantenha sua coleção sempre organizada e atualizada.
        </FeatureItem>
        <FeatureItem>
          <strong>Gerenciamento de Autores:</strong> Registre os autores dos
          seus livros favoritos e associe-os aos títulos em sua coleção.
        </FeatureItem>
        <FeatureItem>
          <strong>Busca Rápida:</strong> Encontre rapidamente qualquer livro ou
          autor em sua coleção através de uma busca eficiente.
        </FeatureItem>
      </Features>
    </MainContainer>
  );
};

export default Home;
