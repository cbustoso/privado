import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { suicidio, suicidio_info, acercate } from "@/components/imagepath";

export default function Acercate() {

  return (
    <>
      <div className="row flex-column d-flex align-items-center">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-column d-flex align-items-center">
              <h3 className="roboto" style={{fontWeight: 600, fontSize: '48px', color: '#6ec1e4'}}>Manual de Prevención del Suicidio</h3>

              <Image
                  src={acercate}
                  sizes="100vw"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  alt=""
                />

            </div>
            <div className="card-body d-flex flex-column flex-lg-row" style={{gap: '10px'}}>
              <div className="col-12 col-lg-4 roboto" style={{backgroundColor:"#FDD85D", padding: '15px', fontSize:'18px', fontWeight: 400, textWrap: 'pretty', lineHeight: '31px'}}>
                <p>El Programa ACÉRCATE es una iniciativa de la UDP enmarcada dentro del Departamento de Salud Mental, cuyo objetivo principal es favorecer a prevención del suicidio en estudiantes de la Universidad,  dando cuenta de que el suicidio tiene múltiples causas y que es prevenible y tratable, por lo que resulta crucial saber identificar las señales de alerta en uno mismo o una misma, y también en aquellos que nos rodean, para poder prevenir su ocurrencia e intentar resolver aquellas causas que motivan a una persona a pensar erróneamente que el suicidio pudiera llegar a ser una solución.</p>
                <p>Te invitamos a descargar el manual Aquí:</p>
                <p>
                  <a href="https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/09/ManualPrevencionSuicidio-1.pdf">Manual de Prevención del Suicidio</a>
                </p>
                <p>Además, dejamos a tu disposición la línea de prevención del suicidio del Ministerio de Salud, en el cual puedes llamar de manera gratuita las 24 horas del día de lunes a viernes, donde un profesional de la salud mental puede ayudarte.</p>
                <p><strong>*4141</strong></p>
                <p>En caso de que tengas cualquier duda sobre salud mental, o el Programa ACÉRCATE, puedes escribirnos a <strong>saludmentalestudiantil@mail.udp.cl</strong></p>
              </div>
              <div className="col-12 col-lg-8 d-flex flex-column" style={{ gap: '10px'}}>
                <Image
                  src={suicidio_info}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  height={300}
                  alt=""
                />
                <Image
                  src={suicidio}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  height={300}
                  alt=""
                />
              </div>
            </div>

            <div className="col-12 card-body flex-md-column flex-lg-row d-flex align-items-center">
              <iframe width="560" height="600" src="https://www.youtube.com/embed/SsICv9BGemc?si=J6EOYsvxBxWB1cEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width:'100%'}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
