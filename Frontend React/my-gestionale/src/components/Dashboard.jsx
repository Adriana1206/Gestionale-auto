import React, { useState } from "react";
import ModalForm from "./ModalForm";
import Card from "./Card";
import "./Dashboard.css";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [autoData, setAutoData] = useState([]); // Dati delle auto
  const [clientiData, setClientiData] = useState([]); // Dati dei clienti
  const [ordiniData, setOrdiniData] = useState([]); // Dati degli ordini

  const [showAutoTable, setShowAutoTable] = useState(false);
  const [showClientiTable, setShowClientiTable] = useState(false);
  const [showOrdiniTable, setShowOrdiniTable] = useState(false);

  // Fetch per le auto
  const fetchAutoData = () => {
    fetch("http://localhost:8080/auto")
      .then((response) => response.json())
      .then((data) => setAutoData(data))
      .catch((error) => console.error("Errore durante il fetch delle auto:", error));
  };

  // Fetch per i clienti
  const fetchClientiData = () => {
    fetch("http://localhost:8080/clienti")
      .then((response) => response.json())
      .then((data) => setClientiData(data))
      .catch((error) => console.error("Errore durante il fetch dei clienti:", error));
  };

  // Fetch per gli ordini
  const fetchOrdiniData = () => {
    fetch("http://localhost:8080/ordini")
      .then((response) => response.json())
      .then((data) => setOrdiniData(data))
      .catch((error) => console.error("Errore durante il fetch degli ordini:", error));
  };

  // Gestori per le card
  const handleAutoCardClick = () => {
    fetchAutoData();
    setShowAutoTable(true);
    setShowClientiTable(false);
    setShowOrdiniTable(false);
  };

  const handleClientiCardClick = () => {
    fetchClientiData();
    setShowClientiTable(true);
    setShowAutoTable(false);
    setShowOrdiniTable(false);
  };

  const handleOrdiniCardClick = () => {
    fetchOrdiniData();
    setShowOrdiniTable(true);
    setShowAutoTable(false);
    setShowClientiTable(false);
  };

  // Funzione per chiudere le tabelle
  const handleCloseTable = () => {
    setShowAutoTable(false);
    setShowClientiTable(false);
    setShowOrdiniTable(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Benvenuto nella Dashboard</h2>
        <button className="button add" onClick={() => setModalOpen(true)}>
          Aggiungi Auto
        </button>
      </div>

      <div className="dashboard-content">
        <Card title="Ordini" content="Gestisci i tuoi ordini." onClick={handleOrdiniCardClick} />
        <Card title="Clienti" content="Visualizza i tuoi clienti." onClick={handleClientiCardClick} />
        <Card title="Auto" content="Visualizza auto." onClick={handleAutoCardClick} />
      </div>

      {/* Tabella delle Auto */}
      {showAutoTable && (
        <div className="table-container">
          <h3>Lista delle Auto</h3>
          <button className="button close" onClick={handleCloseTable}>Chiudi Tabella</button>
          {autoData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Modello</th>
                  <th>Anno</th>
                  <th>Prezzo</th>
                </tr>
              </thead>
              <tbody>
                {autoData.map((auto) => (
                  <tr key={auto.id}>
                    <td>{auto.id}</td>
                    <td>{auto.marca}</td>
                    <td>{auto.modello}</td>
                    <td>{auto.anno}</td>
                    <td>{auto.prezzo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nessuna auto disponibile.</p>
          )}
        </div>
      )}

      {/* Tabella dei Clienti */}
      {showClientiTable && (
        <div className="table-container">
          <h3>Lista dei Clienti</h3>
          <button className="button close" onClick={handleCloseTable}>Chiudi Tabella</button>
          {clientiData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Cognome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {clientiData.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cognome}</td>
                    <td>{cliente.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nessun cliente disponibile.</p>
          )}
        </div>
      )}

      {/* Tabella degli Ordini */}
      {showOrdiniTable && (
        <div className="table-container">
          <h3>Lista degli Ordini</h3>
          <button className="button close" onClick={handleCloseTable}>Chiudi Tabella</button>
          {ordiniData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente ID</th>
                  <th>Auto ID</th>
                  <th>Data Ordine</th>
                  <th>Quantità</th>
                  <th>Totale</th>
                </tr>
              </thead>
              <tbody>
                {ordiniData.map((ordine) => (
                  <tr key={ordine.id}>
                    <td>{ordine.id}</td>
                    <td>{ordine.cliente_id}</td>
                    <td>{ordine.auto_id}</td>
                    <td>{ordine.data_ordine}</td>
                    <td>{ordine.quantita}</td>
                    <td>{ordine.totale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nessun ordine disponibile.</p>
          )}
        </div>
      )}

      {/* Modal per aggiungere auto */}
      {modalOpen && <ModalForm onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Dashboard;
