import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Testes do Componente de Login', () => {

  // Teste 1: Sucesso
  test('1. Deve exibir mensagem de sucesso ao inserir credenciais corretas', () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputSenha = screen.getByPlaceholderText('Senha');
    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });

    fireEvent.change(inputEmail, { target: { value: 'camila.gomes@gmail.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456789' } });
    fireEvent.click(botaoAcessar);

    expect(screen.getByText('Acessado com sucesso!')).toBeInTheDocument();
  });

  // Teste 2: Senha Incorreta
  test('2. Deve exibir mensagem de erro ao inserir senha incorreta', () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputSenha = screen.getByPlaceholderText('Senha');
    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });

    fireEvent.change(inputEmail, { target: { value: 'camila.gomes@gmail.com' } });
    fireEvent.change(inputSenha, { target: { value: 'senha_errada' } });
    fireEvent.click(botaoAcessar);

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument();
  });

  // Teste 3: Email Incorreto
  test('3. Deve exibir mensagem de erro ao inserir e-mail incorreto', () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputSenha = screen.getByPlaceholderText('Senha');
    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });

    fireEvent.change(inputEmail, { target: { value: 'email.errado@gmail.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456789' } });
    fireEvent.click(botaoAcessar);

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument();
  });

  // Teste 4: Campos Vazios
  test('4. Deve exibir mensagem de erro ao submeter com campos vazios', () => {
    render(<Login />);

    const botaoAcessar = screen.getByRole('button', { name: /acessar/i });
    fireEvent.click(botaoAcessar);

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument();
  });

  // Teste 5: Renderização dos Elementos
  test('5. Deve renderizar os inputs de e-mail, senha e o botão na tela', () => {
    render(<Login />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
  });

});