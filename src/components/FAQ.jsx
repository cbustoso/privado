import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useState } from 'react';

import { AddCircleOutlineOutlined, RemoveCircleOutline } from '@mui/icons-material';

const questions = [
  {
    id: 1,
    title: 'Pregunta uno',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fugit omnis veniam? Vel omnis odit temporibus, tenetur nobis possimus ad. Nesciunt soluta quidem praesentium rerum eaque earum ut, ratione quae!'
  }, {
    id: 2,
    title: 'Preguna dos',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit officia distinctio sint provident? Placeat, perspiciatis delectus odit veniam cupiditate consequatur nihil, possimus sunt nesciunt numquam voluptate quasi vitae aliquid quaerat.'
  }, {
    id: 3,
    title: 'Pregunta tres',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum id nam eligendi molestiae voluptatum deserunt rerum dolores voluptate autem, quam aliquid explicabo. Laboriosam, dolorem error. Nostrum veniam repudiandae autem nesciunt.'
  }
]

const FrequentAskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{width: '90svw', margin:'auto'}}>
      {
        questions.map((question, i) => (
          <Accordion
            key={i}
            expanded={expanded === question.id}
            onChange={handleChange(question.id)}
            sx={expanded === question.id ? { bgcolor: '#FF5253', color: '#fff', borderRadius: '10px' } : {boxShadow: 'none'}}
          >
            <AccordionSummary
              expandIcon={expanded === question.id
                ? <RemoveCircleOutline sx={{ color: '#fff' }} />
                : <AddCircleOutlineOutlined />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>{question.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}

export default FrequentAskedQuestions;

