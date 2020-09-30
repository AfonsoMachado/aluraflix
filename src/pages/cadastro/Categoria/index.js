import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';

import './index.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    text: '',
    cor: '',
  };

  const history = useHistory();

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  // Função chamada quando quer que algum efeito colateral aconteça quando se usa o componente
  useEffect(() => {
    // console.log('opa');
    // if para decidir qual servidor acessar, se é localmente ou no heroku
    const URL = window.location.href.includes('localhost') ? 'http://localhost:3001/categorias' : 'https://devflix-afonso.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      {/* capturando o submit */}
      <form onSubmit={(event) => {
        event.preventDefault();

        categoriasRepository
          .create({
            titulo: values.nome,
            cor: values.cor,
            text: values.text,
          })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            alert('Categoria cadastrada com sucesso!');
            history.push('/');
          });

        setCategorias([...categorias, values]);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* TODO CADASTRO DE CATEGORIA */}
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/* TODO Listar categorias */}
      {/* Exibindo o estado de categoria na tela */}
      <div className="categories">
        CATEGORIAS CADASTRADAS:
        <ul id="ul">
          {categorias.map((categoria) => (
            <li id="li" key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
