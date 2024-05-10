import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Addrecipe() {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({
    title: '',
    difficulty: 'Easy',
    portion: '',
    time: '',
    description: '',
    ingredients: [],
    method: [],
    image: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngredientsChange = (event) => {
    const ingredients = event.target.value.split('\n');
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients,
    }));
  };

  const handleMethodChange = (event) => {
    const method = event.target.value.split('\n');
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      method,
    }));
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        handleClose();
        
      } else {
        console.error('Error submitting recipe:', response.status);
      }
    } catch (error) {
      console.error('Error submitting recipe:', error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDifficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                as="select"
                name="difficulty"
                value={recipe.difficulty}
                onChange={handleInputChange}
              >
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPortion">
              <Form.Label>Portion</Form.Label>
              <Form.Control
                type="text"
                name="portion"
                value={recipe.portion}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                name="time"
                value={recipe.time}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={recipe.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formIngredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                name="ingredients"
                value={recipe.ingredients.join('\n')}
                onChange={handleIngredientsChange}
              />
            </Form.Group>

            <Form.Group controlId="formMethod">
              <Form.Label>Method</Form.Label>
              <Form.Control
                as="textarea"
                name="method"
                value={recipe.method.join('\n')}
                onChange={handleMethodChange}
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={recipe.image}
                onChange={handleInputChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addrecipe;