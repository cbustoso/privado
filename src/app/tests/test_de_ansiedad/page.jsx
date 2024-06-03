'use client'
import { useState } from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useMediaQuery } from "@mui/material";
import { saludMental01 } from "@/components/imagepath";
import { FaArrowLeft } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const preguntas = [
  {
    pregunta: 'Torpe o entumecido.',
    label: 'torpe'
  },
  {
    pregunta: 'Acalorado',
    label: 'acalorado'
  },
  {
    pregunta: 'Con temblor en las piernas.',
    label: 'temblor'
  },
  {
    pregunta: 'Incapaz de relajarse.',
    label: 'incapaz'
  },
  {
    pregunta: 'Con temor a que ocurra lo peor.',
    label: 'temor'
  },
  {
    pregunta: 'Mareado, o que se le va la cabeza.',
    label: 'mareado'
  },
  {
    pregunta: 'Con latidos del corazón fuertes y acelerados.',
    label: 'latidos'
  },
  {
    pregunta: 'Inestable',
    label: 'inestable'
  },
  {
    pregunta: 'Atemorizado o asustado.',
    label: 'atemorizado'
  },
  {
    pregunta: 'Nervioso',
    label: 'nervioso'
  },
  {
    pregunta: 'Con sensación de bloqueo.',
    label: 'bloqueado'
  },
  {
    pregunta: 'Con temblores en las manos.',
    label: 'temblorenmanos'
  },
  {
    pregunta: 'Inquieto, inseguro.',
    label: 'inquiero'
  },
  {
    pregunta: 'Con miedo a perder el control.',
    label: 'perdercontrol'
  },
  {
    pregunta: 'Con sensación de ahogo.',
    label: 'ahogado'
  },
  {
    pregunta: 'Con temor a morir.',
    label: 'miedoamorir'
  },
  {
    pregunta: 'Con miedo.',
    label: 'conmiedo'
  },
  {
    pregunta: 'Con problemas digestivos.',
    label: 'digestion'
  },
  {
    pregunta: 'Con desvanecimientos.',
    label: 'desvanecimientos'
  },
  {
    pregunta: 'Con rubor facial.',
    label: 'ruborfacial'
  },
  {
    pregunta: 'Con sudores, frios o calientes.',
    label: 'sudores'
  }
]

const resultados = [
  {
    puntaje: [0, 21],
    titulo: 'Ansiedad leve',
    descripcion: 'Descripción'
  },
  {
    puntaje: [22, 35],
    titulo: 'Ansiedad moderada',
    descripcion: 'Descripción'
  },
  {
    puntaje: [36, 46],
    titulo: 'Ansiedad alta',
    descripcion: 'Descripción'
  },
]

const determinarDescripcion = (puntaje) =>
  resultados.find(({ puntaje: [min, max] }) => puntaje >= min && puntaje <= max) || 'Puntaje fuera de rango';

function ChildModal(text) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Resultado test</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            {text}
          </p>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const TestAnsiedad = () => {
  const [resultado, setResultado] = useState(null)
  const matches = useMediaQuery('(min-width:600px)');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, watch,
    formState: { errors }
  } = useForm()

  const calculate = () => {
    const data = watch()

    let values = Object.values(data);

    // Sumamos los valores
    let sum = values.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
    setResultado(sum)
    console.log(sum)
  }

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })


  return (
    <>
      {matches && <div style={{
        height: '520px',
        overflow: 'hidden'
      }}>
        <img
          alt="#"
          src={saludMental01.src}
          width={'100%'}
          style={{
            backgroundPosition: 'center'
          }}
        />
      </div>
      }
      <div className="page-wrapper" style={{ margin: 'auto' }}>
        <div className="content">
          {/* Page Header */}
          {matches &&
            <button className='btn mt-4 mb-2'
              style={{
                border: '1px solid #A6A6A6',
                height: '56px',
                width: '163px',
                padding: '0px 24px',
                borderRadius: '100px',
                marginLeft: '76px'
              }}
              onClick={() => router.back()}
            >
              <FaArrowLeft /> Volver
            </button>
          }
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <div className="card-body flex-row d-flex justify-content-center mt-4">
                            <h2
                              className="sailec"
                              style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', textAlign: 'center' }}>
                              Test de Ansiedad de Beck
                            </h2>
                          </div>
                          <p>
                            En el cuestionario hay una lista de síntomas comunes de la ansiedad. Lea cada uno de los ítems atentamente, e indique cuanto le ha afectado en la última semana incluyendo hoy:
                          </p>
                          <div className="ms-5">
                            <p>0 = En absoluto</p>
                            <p>1 = Levemente</p>
                            <p>2 = Moderadamente</p>
                            <p>3 = Severamente</p>
                          </div>
                        </div>
                      </div>
                      {
                        preguntas.map((item, index) => (
                          <div
                            className="col-12 col-md-8"
                            key={index + item.label}
                            style={{
                              background: index % 2 === 0 && 'lightgrey'
                            }}
                          >
                            <div className="form-group select-gender d-flex justify-content-between" style={{ margin: 'auto', padding: '10px' }}>
                              <label >
                                {item.pregunta}
                              </label>
                              <div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name={item.label}
                                      value={0}
                                      className="form-check-input"
                                      {...register(item.label)}
                                    />
                                    0
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name={item.label}
                                      value={1}
                                      className="form-check-input"
                                      {...register(item.label)}
                                    />
                                    1
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name={item.label}
                                      value={2}
                                      className="form-check-input"
                                      {...register(item.label)}
                                    />
                                    2
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name={item.label}
                                      value={3}
                                      className="form-check-input"
                                      {...register(item.label)}
                                    />
                                    3
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }

                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="button"
                            className="btn btn-primary submit-form me-2"
                            onClick={calculate}
                          >
                            Obtener resultados
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary cancel-form"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {resultado >= 0 && <p>Presentas: {determinarDescripcion(resultado).descripcion} </p>}
                  </Typography>
                  <ChildModal />
                </Box>
              </Modal>
            </div>

          </div>
        </div>
      </div>

    </>
  )

}

export default TestAnsiedad;