import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Testes do Componente de Login', () => {

  test('Deve exibir mensagem de sucesso ao inserir credenciais corretas', () => {
    render(<Login />);

    // 1. Captura os elementos da tela
    const inputEmail = screen.getByPlaceholderText('Email');
    const inputSenha = screen.getByPlaceholderText('Senha');
    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });

    // 2. Simula a digitação nos campos
    fireEvent.change(inputEmail, { target: { value: 'camila.gomes@gmail.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456789' } });

    // 3. Simula o clique no botão
    fireEvent.click(botaoAcessar);

    // 4. Verifica se a mensagem de sucesso apareceu na tela
    const mensagemSucesso = screen.getByText('Acessado com sucesso!');
    expect(mensagemSucesso).toBeInTheDocument();
  });

  test('Deve exibir mensagem de erro ao inserir credenciais incorretas', () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputSenha = screen.getByPlaceholderText('Senha');
    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });

    // Simula credenciais inválidas
    fireEvent.change(inputEmail, { target: { value: 'usuario.errado@gmail.com' } });
    fireEvent.change(inputSenha, { target: { value: '000000' } });

    fireEvent.click(botaoAcessar);

    // Verifica se a mensagem de erro apareceu
    const mensagemErro = screen.getByText('Usuário ou senha incorretos!');
    expect(mensagemErro).toBeInTheDocument();
  });

});