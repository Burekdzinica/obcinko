import './loseScreen.css';
import { GAME_MODES, LoseScreenProps } from '../../types';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function LoseScreen({ obcina, show, setShow, gameMode }: LoseScreenProps) {
    const [text, setText] = useState("");

    useEffect(() => {
        switch (gameMode) {
            case GAME_MODES.DAILY:
                setText("Igro lahko nadaljujete naslednji dan.");
                break;

            case GAME_MODES.PRACTICE:
                setText("Poskusite ponovno");
                break;
        }
    }, [gameMode])


    return (
        <Modal className='lose-modal bg-backdropDim text-center animate-fadeIn text-txt' 
            data-bs-theme="dark" 
            centered 
            show={show}
            onHide={() => setShow(false)}
        >
            <Modal.Header className='!block'
                onHide={() => setShow(false)}
                closeButton
            >
                <Modal.Title>Pravilna občina: { obcina } </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className='font-bold text-red-700' >Konec igre</h5> 
                {text}
            </Modal.Body>
        </Modal>
    )
}