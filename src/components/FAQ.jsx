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
    title: '¿Cómo pedir ayuda?',
    answer: 'Primero, debes saber que pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio. Y para iniciar ese proceso, es importante saber dos cosas: ¿Cuándo y donde pedir ayuda?'
  }, {
    id: 2,
    title: '¿Cuándo pedir ayuda?',
    answer: 'A menudo aparecen ciertas señales que nos pueden indicar que es necesario buscar apoyo profesional o de otras personas. Te recomendamos que en caso de que presentes alguno de estos ítems, solicites ayuda y converses de lo que te pasa.'
  }, {
    id: 3,
    title: '¿A quién puedo acudir en la universidad?',
    answer: 'En la Universidad Diego Portales contamos con diversos canales para que puedas pedir ayuda en caso de que lo necesites. Aquí te dejamos algunos de los medios por los cuáles te puedes poner en contacto con el Departamento de Salud Mental (DSM) de nuestra Universidad.'
  }
]

const FrequentAskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{width: '90svw', margin:'auto'}}  className='container col-12 col-lg-10 '>
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

