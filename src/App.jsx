import React, { useState, useEffect } from 'react';
import Dashboard from './components/dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container, Typography, TextField, Button, Box, Paper, Divider} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const [input, setInput] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleQuestionClick = (question) => {
    setInput('');
    setSelectedQuestion(question);
  };

  const handleSend = () => {
    if (!input.trim() || !selectedQuestion) return;

    const newMessage = {
      question: selectedQuestion,
      answer: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setSelectedQuestion('');
  };

  const handleClearChat = () => {
    localStorage.removeItem('chatMessages');
    setMessages([]);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'linear-gradient(to bottom right, #121212, #1e1e1e)'
            : 'linear-gradient(to bottom right, #f0f4f8, #dfe6ed)',
        }}
      >
        <Header darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Please anwer the questions below
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ flex: 2 }}>
              <Dashboard
                onQuestionSelect={handleQuestionClick}
                selected={selectedQuestion}
              />

              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label={
                    selectedQuestion
                      ? `Your answer to: "${selectedQuestion}"`
                      : 'Select a question to answer'
                  }
                  placeholder="Type your response here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={!selectedQuestion}
                />
                <Button
                  variant="contained"
                  onClick={handleSend}
                  sx={{
                    px: 3,
                    fontWeight: 'bold',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundColor: '#1976d2',
                    },
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>

            <Paper
              elevation={3}
              sx={{
                flex: 1,
                height: '100%',
                maxHeight: '500px',
                overflowY: 'auto',
                padding: 2,
                backgroundColor: darkMode ? '#1e1e1e' : '#fefefe',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Chat History
              </Typography>

              <Button
                variant="outlined"
                size="small"
                color="error"
                fullWidth
                sx={{ mb: 2 }}
                onClick={handleClearChat}
              >
                Clear Chat History
              </Button>

              {messages.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  No messages yet.
                </Typography>
              ) : (
                messages.map((msg, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      Q{idx + 1}: {msg.question}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      <strong>Answer:</strong> {msg.answer}
                    </Typography>
                    <Typography variant="caption" color="text.primary">
                      Sent at: {msg.timestamp}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))
              )}
            </Paper>
          </Box>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;