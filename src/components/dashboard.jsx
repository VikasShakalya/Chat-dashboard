import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material';

const questions = [
  "Tell me about yourself.",
  "What are your strengths?",
  "Why should we hire you?",
  "Where do you see yourself in five years?"
];

function Dashboard({ onQuestionSelect, selected }) {
  return (
    <Grid container spacing={3} padding={2}>
      {questions.map((question, index) => {
        const isSelected = question === selected;

        return (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              onClick={() => onQuestionSelect(question)}
              sx={{
                cursor: 'pointer',
                backgroundColor: isSelected ? '#1976d2' : '#fafafa',
                color: isSelected ? 'white' : 'black',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.2s, background-color 0.2s',
                '&:hover': {
                  backgroundColor: isSelected ? '#1565c0' : '#e3f2fd',
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardHeader
                title={`Question ${index + 1}`}
                titleTypographyProps={{
                  fontSize: 14,
                  color: isSelected ? 'white' : 'gray',
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: isSelected ? 'white' : 'inherit',
                  }}
                >
                  {question}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
