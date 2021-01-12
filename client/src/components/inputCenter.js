import React, { Fragment, useState } from 'react'
import { Container, Header, Form, Button } from 'semantic-ui-react';

const InputCenter = () => {
  const [name, setName, code, setCode, description, setDescription] = useState()

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { name, code, description }
      const response = await fetch('http://localhost:8000', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    console.log(response);
    } catch (err) {
      console.error(err.message)   
    }
  }


  return (
    <Fragment>
      <Container fluid>
        <Header as='h2'>Pern Center List</Header>
        <Form onSubmit={onSubmitForm}>
          <Form.Field>
            <label>Add Center</label>
            <input 
            placeholder='name' 
            value={name} 
            onChange={e => setName
            (e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <input 
            placeholder='code' 
            value={code} 
            onChange={e => setCode
            (e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <input 
            placeholder='description' 
            value={description} 
            onChange={e => setDescription
            (e.target.value)}/>
          </Form.Field>
          <Button type='submit'>Add All</Button>
        </Form> 
      </Container>
    </Fragment>
  )
}

export default InputCenter