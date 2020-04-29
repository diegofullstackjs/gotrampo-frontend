import React from 'react';

import {Grid,Form,Button} from 'semantic-ui-react'

export default function FormLoginComponent() {
  return (
<Grid centered container columns={1}>
<Grid.Column>
    <Form>
        <Form.Group widths='equal'>
        <Form.Field>
            <label>Nome</label>
            <input type="text" name="name" placeholder='Nome completo' />
        </Form.Field>
        <Form.Field>
            <label>Telefone</label>
            <input type="text" name="phone" placeholder='Telefone' />
        </Form.Field>
        </Form.Group>
        <Form.Field>
            <label>Cpf</label>
            <input type="text" name="cpf" placeholder='Cpf' />
        </Form.Field>
        <Form.Group widths='equal'>
        <Form.Field>
            <label>E-mail</label>
            <input type="email" name="email" placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
            <label>Senha</label>
            <input type="password" name="password" placeholder='Senha' />
        </Form.Field>
        </Form.Group>
    <Button color="green" type='submit'>Submit</Button>
  </Form>
  </Grid.Column>
  </Grid>
  );
}
