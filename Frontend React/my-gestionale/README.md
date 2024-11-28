# Progetto Dashboard di Gestione Auto, Clienti e Ordini

Questo progetto consente di visualizzare, aggiungere, aggiornare e gestire informazioni relative a auto, clienti e ordini in un'applicazione di tipo **dashboard**. Le relazioni tra le tabelle sono le seguenti:

## Descrizione delle Entità

### Auto
- **Descrizione**: Rappresenta le auto disponibili per l'acquisto.
- **Campi**:
  - **ID**: Identificativo univoco dell'auto.
  - **Marca**: La marca dell'auto (es. Fiat, Audi, BMW).
  - **Modello**: Il modello dell'auto (es. Panda, A4, X5).
  - **Anno**: L'anno di produzione dell'auto.
  - **Prezzo**: Il prezzo dell'auto.
  
### Clienti
- **Descrizione**: Contiene informazioni sui clienti.
- **Campi**:
  - **ID**: Identificativo univoco del cliente.
  - **Nome**: Nome del cliente.
  - **Cognome**: Cognome del cliente.
  - **Email**: Email del cliente.

### Ordini
- **Descrizione**: Rappresenta gli ordini effettuati dai clienti per acquistare delle auto.
- **Campi**:
  - **ID**: Identificativo univoco dell'ordine.
  - **Cliente ID**: Riferimento al cliente che ha effettuato l'ordine (relazione con la tabella `Clienti`).
  - **Auto ID**: Riferimento all'auto acquistata (relazione con la tabella `Auto`).
  - **Data Ordine**: La data in cui è stato effettuato l'ordine.
  - **Quantità**: Numero di unità dell'auto acquistate.
  - **Totale**: Il totale dell'acquisto.

## Relazioni tra le Tabelle

- **Un cliente può effettuare più ordini**: Ogni cliente può acquistare diverse auto nel tempo, creando più ordini.
- **Un ordine è associato ad un'unica auto e a un cliente**: Ogni ordine è legato ad un cliente che lo ha effettuato e ad un'auto che è stata acquistata.
- **Un'auto può essere acquistata da più ordini**: La stessa auto può essere acquistata da più clienti in momenti differenti.

## Tecnologie Utilizzate

- **Frontend**: React.js
- **Backend**: Spring Boot (Java)
- **Database**: MySQL

## Istruzioni per l'Installazione e l'Esecuzione

### Backend (Spring Boot)

1. **Clona il repository del backend**
   ```bash
   git clone https://github.com/tuo-username/gestionale-auto-backend.git
