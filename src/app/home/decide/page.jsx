import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { decide, droga01, droga02 } from "@/components/imagepath";

export default function Decide() {

  return (
    <>
      <div className="row flex-column d-flex align-items-center">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-column d-flex align-items-center">
              <h3 className="roboto" style={{ fontWeight: 600, fontSize: '48px', color: '#6ec1e4' }}>Programa DECIDE</h3>

              <Image
                src={decide}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                width={500}
                alt=""
              />

            </div>
            <div className="card-body d-flex flex-column flex-lg-row" style={{ gap: '10px' }}>
              <div className="col-12 col-lg-4 roboto" style={{ backgroundColor: "#FDD85D", padding: '15px', fontSize: '18px', fontWeight: 400, textWrap: 'pretty', lineHeight: '31px' }}>
                <p>El Programa DECIDE es una iniciativa de la UDP enmarcada dentro del Departamento de Salud Mental, cuyo objetivo es favorecer la prevención del consumo de alcohol y drogas en estudiantes de la Universidad.</p>
                <p>El consumo problemático de alcohol y de otras drogas puede causar serios
                  problemas para la vida de los estudiantes, no sólo en su rendimiento académico, sino que también en su salud física y mental, dañando también sus relaciones interpersonales.</p>
                <p>Es por ello que resulta crucial informar
                  respecto de cómo identificar la existencia de un consumo problemático, y  saber qué podemos hacer para prevenirlo o para tratarlo
                  una vez que ya se encuentra instalado.
                  Debido a esto, es que construimos un manual de prevención de consumo de alcohol y drogas para estudiantes de la Universidad Diego Portales.
                </p>
                <p class="has-text-align-center"><a href="https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/09/ManualPrevencionDrogasyAlcohol-4.pdf">DECARGA EL MANUAL DE PREVENCIÓN DE CONSUMO DE DROGAS Y ALCOHOL AQUÍ</a></p>
                <p>Además, dejamos a tu disposición el fono drogas de SENDA, donde de manera gratuita y confidencial, se orienta a personas afectadas por el consumo de alcohol y otras drogas. Puedes llamar las 24 horas del día.
                </p>
                <p><strong>Fono drogas: 1412</strong></p>
                <p>En caso de que tengas cualquier duda sobre salud mental, o el Programa ACÉRCATE, puedes escribirnos a <strong>saludmentalestudiantil@mail.udp.cl</strong></p>
              </div>
              <div className="col-12 col-lg-8 d-flex flex-column" style={{ gap: '10px' }}>
                <Image
                  src={droga01}
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
                  src={droga02}
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
              <iframe width="560" height="600" src="https://www.youtube.com/embed/tskcTOc7k58?si=oiNvP0nMIdI084cb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%' }}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
