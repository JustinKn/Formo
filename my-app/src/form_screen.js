import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper, Slide } from '@mui/material';

function FormScreen() {
  const [formData, setFormData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionsInput, setQuestionsInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [page, setPage] = useState(0);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleQuestionsInputChange(event) {
    setQuestionsInput(event.target.value);
  }

  function handleSubmitQuestions() {
    const parsedQuestions = questionsInput.split(';').filter(q => q.trim() !== '');
    setQuestions(parsedQuestions);
    setPage(1);
  }

  function handleNextQuestion() {
    if (page < questions.length) {
      setPage(page + 1);
    } else {
      setIsSubmitted(true);
    }
  }

  function renderQuestion() {
    const question = questions[page - 1];
    return (
      //<Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div>
          <TextField
            fullWidth
            margin="normal"
            label={question}
            variant="outlined"
            name={question}
            value={formData[question] || ''}
            onChange={handleInputChange}
          />
          <Box mt={2} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleNextQuestion}>
              {page < questions.length ? 'Next' : 'Submit'}
            </Button>
          </Box>
        </div>
    //  </Slide>
    );
  }

  function renderResults() {
    return (
  //    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div>
          <Typography variant="h5" align="center">
            Results
          </Typography>
          {questions.map((question) => (
            <Typography key={question} variant="body1">
              {question}: {formData[question]}
            </Typography>
          ))}
        </div>
    //  </Slide>
    );
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {!isSubmitted ? (
          page === 0 ? (
            // <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <div>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter Questions separated by ;"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={questionsInput}
                  onChange={handleQuestionsInputChange}
                />
                <Box mt={2} textAlign="center">
                  <Button variant="contained" color="primary" onClick={handleSubmitQuestions}>
                    Start
                  </Button>
                </Box>
              </div>
            // </Slide>
          ) : (
            renderQuestion()
          )
        ) : (
          renderResults()
        )}
      </Paper>
    </Container>
  );
}

export default FormScreen;
