import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

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
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        // Adicionando a categoria inserida, junto com as outras categorias ja salvas
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
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
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        {/* TODO CADASTRO DE CATEGORIA */}
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/* Exibindo o estado de categoria na tela */}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
