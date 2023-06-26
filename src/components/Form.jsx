import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { tatuadores } from '../data/tatuadores';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Form.css';

const Formulario = () => {
  const [tatuador, setTatuador] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [telefoneCliente, setTelefoneCliente] = useState('');
  const [localTatuagem, setLocalTatuagem] = useState('');
  const [imagemReferencia, setImagemReferencia] = useState('');
  const [tamanhoCm, setTamanhoCm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tatuadorSelecionado = tatuadores.find((t) => t.nome === tatuador);
    if (tatuadorSelecionado) {
      const message = `Cliente: ${nomeCliente}\nTelefone: ${telefoneCliente}\nTatuador: ${tatuador}\nLocal da tatuagem: ${localTatuagem}\nImagem de referência: ${imagemReferencia}\nTamanho em cm: ${tamanhoCm}\n\nSolicitação de orçamento`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://api.whatsapp.com/send?phone=${tatuadorSelecionado.whatsapp.replace(/\D/g, '')}&text=${encodedMessage}`;

      window.open(whatsappLink);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group controlId="formTatuador">
        <h3>Orçamento:</h3>
        <Form.Label>Escolha o tatuador:</Form.Label>
        <Form.Control as="select" value={tatuador} onChange={(e) => setTatuador(e.target.value)}>
          <option value="">Selecione um tatuador</option>
          {tatuadores.map((t) => (
            <option key={t.id} value={t.nome}>{t.nome}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formNomeCliente">
        <Form.Label>Nome do cliente:</Form.Label>
        <Form.Control type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formTelefoneCliente">
        <Form.Label>Telefone do cliente:</Form.Label>
        <Form.Control type="text" value={telefoneCliente} onChange={(e) => setTelefoneCliente(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formLocalTatuagem">
        <Form.Label>Local da tatuagem:</Form.Label>
        <Form.Control type="text" value={localTatuagem} onChange={(e) => setLocalTatuagem(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formImagemReferencia">
        <Form.Label>URL da imagem de referência:</Form.Label>
        <Form.Control type="text" value={imagemReferencia} onChange={(e) => setImagemReferencia(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formTamanhoCm">
        <Form.Label>Tamanho em centímetros:</Form.Label>
        <Form.Control type="number" value={tamanhoCm} onChange={(e) => setTamanhoCm(e.target.value)} />
      </Form.Group>
      <button variant="primary" type="submit" className="button">
        Enviar
      </button>
    </Form>
  );
};

export default Formulario;


