import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ProtocoloAccionSaludMental = () => {
  return (
    <div>
      <h3 >Protocolo de acción en salud mental</h3>
      <p>
        Este protocolo tiene como objetivo establecer las acciones y directrices estandarizadas que permitan realizar una respuesta adecuada consistente en identificar, contener y derivar casos de urgencia y emergencia de carácter psiquiátrico y/o psicológico ocurridos en la Universidad.
      </p>
      <p>
        El documento, pone a disposición una serie de directrices y flujogramas de fácil comprensión, con el fin de facilitar las respuestas frente a sucesos de Salud Mental.
      </p>
      <Link href="https://dae.udp.cl/cms/wp-content/uploads/2022/05/Protocolo-de-accion-Salud-Mental-2022-1.pdf">
        <FaArrowRightLong /> Ver protocolo aquí
      </Link>
    </div>

  )
}

export default ProtocoloAccionSaludMental;