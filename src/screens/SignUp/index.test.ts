import handleCadastrar from "./index";

test("Deve retornar os dados para cadastro", () => {
  const dados = handleCadastrar();

  expect(dados.length).toBe(4);
});