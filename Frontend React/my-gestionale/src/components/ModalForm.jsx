import React from "react";
import "./ModalForm.css";

const ModalForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Aggiungi Nuova Auto</h2>
        <form>
          <label>Marca</label>
          <input type="text" />
          <label>Modello</label>
          <input type="text" />
          <label>Anno</label>
          <input type="number" />
          <div className="modal-actions">
            <button type="button" className="button save" onClick={onClose}>
              Salva
            </button>
            <button type="button" className="button cancel" onClick={onClose}>
              Annulla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
