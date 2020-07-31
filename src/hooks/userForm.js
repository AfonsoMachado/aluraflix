import { useState } from 'react';

function useForm(valoresIniciais) {
  // Valor inicial do state
  // a função setNomeDaCategoria é usada para alterar o valor do state
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      // chave como valor dinamico
      // pegando o valor atual dela
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
