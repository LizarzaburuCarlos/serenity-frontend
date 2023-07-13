import { Button, Modal } from "antd"

type ModalForoProps = {
    modalForoOpen: boolean;
    setModalForoClose: () => void;
};


export const ModalForo = ({
    modalForoOpen,
    setModalForoClose,
}: ModalForoProps) =>{

    return(
        <Modal
        title="Creación de Foro"
        centered
        open={modalForoOpen}
        onCancel={setModalForoClose}
        footer={
            <div className="py-3 flex justify-center items-center gap-x-2">
                <Button
                type="primary"
                style={{ backgroundColor: "#2d3648" }}
                >
                    Enviar
                </Button>
                <Button
                type="primary"
                style={{ backgroundColor: "white", color:"#2d3648", border:"2px solid #2d3648", borderRadius:"5px" }}
                onClick={setModalForoClose}>
                    Cerrar
                </Button>
            </div>
        }>
            <div className="w-full py-6">
                <div className="input-field w-full mb-4">
                    <label className="block mb-2">Nombre del Foro:</label>
                    <input type="text" placeholder="Ingresa el nombre de foro..." required/>
                </div>
                <div className="foro-input input-field w-full mb-4">
                    <label className="block mb-2">Descripción del Foro:</label>
                    <textarea placeholder="Ingresa la descripción de tu foro..." rows={3} maxLength={250} required />
                </div>
                <div className="foro-input input-field w-full mb-4">
                    <label className="block mb-2">Categoría del Foro:</label>
                    <select className="select">
                        <option value="ANSIEDAD">
                            Ansiedad
                        </option>
                        <option value="DEPRESIÓN" >
                            Depresión
                        </option>
                        <option value="TRASTORNOS ALIMENTICIOS">
                            Trastornos Alimenticios
                        </option>
                        <option value="AUTOESTIMA" >
                            Autoestima y Confianza
                        </option>
                        <option value="TRAUMA">
                            Trauma
                        </option>
                        <option value="RELACIONES">
                            Relaciones y Familia
                        </option>
                    </select>
                </div>
            </div>
        </Modal>

    )
}