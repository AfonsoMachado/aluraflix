import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { ButtonWrapper, StyledLink } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  // Capturandoi categorias do backend
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias
          .find((categoria) => categoria.titulo === values.categoria);

        if (!categoriaEscolhida) {
          alert('Escolha uma categoria existente ou cadastre outra diferente!');
        } else if (values.url.indexOf('https://www.youtube.com/')) {
          alert('URL inválida!');
        } else {
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              alert('Video Cadastrado com sucesso!!!!');
              // redirecionando após o cadastro
              history.push('/');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        {/* TODO Trocar input por um select com o nome das categorias */}
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonWrapper>
          <Button type="submit">
            Cadastrar
          </Button>

          <StyledLink to="/cadastro/categoria">
            Cadastrar Categoria
          </StyledLink>
        </ButtonWrapper>
      </form>

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;
