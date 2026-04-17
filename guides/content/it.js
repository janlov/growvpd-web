/**
 * GrowVPD Pro — Guide Article Content: Italian (Italiano)
 * Informal "tu" form. Brand/technical terms kept in English.
 * All 23 articles with translated HTML body content.
 */
var GUIDE_CONTENT = {

  "getting-started": {
    title: "Iniziare con GrowVPD Pro",
    body: `
<h2>Cos'è GrowVPD Pro?</h2>
<p>GrowVPD Pro è un'app Android gratuita, offline-first, che ti offre tutto il necessario per gestire le coltivazioni indoor. Combina un grafico VPD, un diario di coltivazione completo, una guida alle luci PPFD, calcolatori di nutrienti, identificazione delle malattie delle piante, profili dell'attrezzatura e automazione smart &mdash; tutto in un singolo download da 15 MB. Nessun account richiesto, nessun internet necessario per le funzioni principali.</p>
<p>Che tu sia un coltivatore principiante o un esperto con un setup multi-tenda, l'app scala dalla semplice registrazione giornaliera al controllo climatico completamente automatizzato con Tuya, Mars Hydro, AC Infinity e altri dispositivi smart.</p>

<h2>Download e primo avvio</h2>
<p>Installa GrowVPD Pro da Google Play. Al primo avvio vedrai una breve introduzione che presenta le funzioni principali. Puoi saltarla se preferisci, ma vale i 30 secondi.</p>
<p>L'app funziona completamente offline. Ti serve una connessione internet solo se vuoi collegare dispositivi smart o condividere dati.</p>

<h2>Le 9 schede spiegate</h2>
<p>La barra inferiore ti dà accesso rapido a ogni sezione dell'app. Ecco cosa fa ciascuna scheda:</p>
<ol>
    <li><strong>VPD</strong> &mdash; Heatmap VPD interattiva. Inserisci temperatura e umidità per vedere il tuo valore VPD, codificato per colore in base alla fase di crescita. Supporta input da sensori Bluetooth e integrazione con dispositivi smart.</li>
    <li><strong>PPFD</strong> &mdash; Misuratore di luce (usando la fotocamera del telefono) e guida di riferimento PPFD. Mostra i livelli di luce ottimali per ogni fase di crescita.</li>
    <li><strong>Automazione</strong> &mdash; Collega dispositivi smart, crea stanze e tende, imposta regole di automazione e monitora il tuo ambiente in tempo reale. Funzione Pro.</li>
    <li><strong>Diario</strong> &mdash; Il tuo giornale di coltivazione. Registra annotazioni giornaliere con temperatura, umidità, VPD, pH, EC, nutrienti, foto e note. Segui più coltivazioni simultaneamente.</li>
    <li><strong>Template</strong> &mdash; Template di coltivazione predefiniti e personalizzati. Inizia una nuova coltivazione da un template e risparmia tempo.</li>
    <li><strong>Nutrienti</strong> &mdash; Calcolatore di nutrienti per programmi di alimentazione comuni. Regola i rapporti in base alla fase di crescita.</li>
    <li><strong>Guida piante</strong> &mdash; Guida visiva alla salute delle piante, carenze, malattie e tecniche di allenamento. Include diagnostica AI delle malattie (Pro).</li>
    <li><strong>Attrezzatura</strong> &mdash; Salva i tuoi setup di tende, luci, ventole, filtri e altri equipaggiamenti come profili riutilizzabili.</li>
    <li><strong>Impostazioni</strong> &mdash; Tema, lingua (11 disponibili), unità, blocco PIN, sicurezza biometrica, account collegati e opzioni di esportazione.</li>
</ol>

<h2>Configurare la tua prima coltivazione</h2>
<p>Vai alla scheda <strong>Diario</strong> e tocca il pulsante "+" per creare una nuova coltivazione. Ti verrà chiesto:</p>
<ol>
    <li><strong>Nome</strong> &mdash; Dai alla tua coltivazione un nome riconoscibile, come "Tenda A - Primavera 2026".</li>
    <li><strong>Varietà</strong> &mdash; Inserisci la varietà o il ceppo che stai coltivando.</li>
    <li><strong>Substrato</strong> &mdash; Seleziona il tuo substrato di crescita (terra, cocco, idro, ecc.).</li>
    <li><strong>Dimensione vaso</strong> &mdash; Inserisci la dimensione del contenitore per consentire all'app di stimare il fabbisogno idrico.</li>
    <li><strong>Tipo di luce</strong> &mdash; Scegli la tua luce (LED, HPS, CMH, ecc.).</li>
    <li><strong>Data di inizio</strong> &mdash; L'app usa oggi come predefinito, ma puoi retrodatare se la coltivazione è già iniziata.</li>
</ol>
<p>Una volta creata, la tua coltivazione appare nella lista del diario. Toccala per iniziare ad aggiungere annotazioni.</p>

<blockquote>
    <strong>Consiglio:</strong> Usa la scheda Template per partire da un piano di coltivazione predefinito. I template includono programmi di alimentazione suggeriti, durate delle fasi e valori VPD target.
</blockquote>

<h2>Aggiungere la tua prima annotazione</h2>
<p>Dentro la tua coltivazione, tocca "Aggiungi annotazione" per registrare un nuovo giorno. Il modulo include:</p>
<ul>
    <li><strong>Temperatura e umidità</strong> &mdash; Inserisci le tue letture. L'app calcola il VPD automaticamente.</li>
    <li><strong>Fase di crescita</strong> &mdash; Seleziona piantina, vegetativa o fioritura. Questo adatta i target VPD nel grafico.</li>
    <li><strong>pH ed EC</strong> &mdash; Monitora la qualità della tua acqua o soluzione nutritiva.</li>
    <li><strong>PPFD</strong> &mdash; Registra la lettura dell'intensità luminosa.</li>
    <li><strong>Nutrienti</strong> &mdash; Registra cosa hai somministrato e quanto.</li>
    <li><strong>Foto</strong> &mdash; Allega foto direttamente dalla fotocamera o galleria. Scatta foto regolarmente per costruire una cronologia visiva.</li>
    <li><strong>Note</strong> &mdash; Testo libero per qualsiasi altra cosa: osservazioni, cambiamenti, promemoria.</li>
</ul>
<p>Dopo il salvataggio, vedrai l'annotazione nella tua cronologia con il valore VPD evidenziato in verde, giallo o rosso a seconda di quanto sei vicino all'intervallo target.</p>

<h2>Nozioni base del grafico VPD</h2>
<p>Passa alla scheda <strong>VPD</strong> per vedere la heatmap interattiva. Il grafico mostra i valori VPD attraverso un intervallo di temperature e livelli di umidità:</p>
<ul>
    <li><strong>Celle verdi</strong> = VPD ottimale per la fase di crescita selezionata. Qui vuoi stare.</li>
    <li><strong>Celle blu</strong> = VPD troppo basso (sotto-traspirazione, rischio muffa).</li>
    <li><strong>Celle gialle/arancioni/rosse</strong> = VPD troppo alto (sovra-traspirazione, stress della pianta).</li>
</ul>
<p>Tocca qualsiasi cella per visualizzare la temperatura, umidità e valore VPD esatti. Usa il selettore di fase in alto per alternare tra piantine, vegetativa e fioritura.</p>
<p>Se hai un sensore Bluetooth di temperatura/umidità, il grafico può leggere i dati in tempo reale e mostrare la tua posizione attuale direttamente sulla mappa.</p>

<h2>Collegare dispositivi smart (opzionale)</h2>
<p>Se usi Tuya, Mars Hydro, AC Infinity, Spider Farmer o altri dispositivi smart supportati, vai alla scheda <strong>Automazione</strong> o <strong>Impostazioni &gt; Account collegati</strong> per collegare i tuoi dispositivi. Una volta connessi, puoi:</p>
<ul>
    <li>Vedere dati dal vivo dei sensori nel grafico VPD</li>
    <li>Automatizzare ventole, umidificatori e luci basandoti su regole VPD</li>
    <li>Catturare automaticamente foto timelapse dalle telecamere Tuya</li>
</ul>
<p>L'automazione smart è una funzione Pro. Consulta la nostra <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">guida alla connessione Tuya</a> o la <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">guida alla connessione Mars Hydro</a> per istruzioni dettagliate.</p>

<h2>Consigli per principianti</h2>
<blockquote>
    <strong>Inizia con un template.</strong> I template ti danno un programma provato da seguire. Puoi sempre personalizzare in seguito.
</blockquote>
<blockquote>
    <strong>Controlla il VPD ogni giorno.</strong> Un VPD costante è più importante che raggiungere un numero perfetto una volta. Punta alla stabilità nella zona verde.
</blockquote>
<blockquote>
    <strong>Scatta foto ogni giorno.</strong> All'inizio sembra inutile, ma una cronologia visiva è inestimabile per confrontare coltivazioni, diagnosticare problemi e monitorare i progressi.
</blockquote>
<blockquote>
    <strong>Registra nutrienti e pH.</strong> Quando qualcosa va storto, avere dati storici rende la risoluzione dei problemi molto più veloce.
</blockquote>
<p>Questo è tutto ciò che ti serve per iniziare. Il modo migliore per conoscere l'app è usarla &mdash; crea una coltivazione, registra alcune annotazioni ed esplora le schede. L'interfaccia è progettata per essere intuitiva e ogni funzione è accessibile dalla navigazione principale.</p>
`
  },

  "vpd-complete-guide": {
    title: "Comprendere il VPD: La guida completa per coltivatori indoor",
    body: `
<h2>Cos'è il VPD?</h2>
<p>VPD sta per <strong>Vapor Pressure Deficit</strong> (Deficit di Pressione di Vapore). In termini semplici, misura quanta "potenza essiccante" ha l'aria &mdash; quanto aggressivamente l'aria sta tirando l'umidità dalle foglie delle tue piante.</p>
<p>Immagina così: la tua pianta respira attraverso piccoli pori sulle foglie chiamati stomi. Quando l'aria intorno alla foglia è secca, l'acqua evapora rapidamente. Quando è umida, l'evaporazione rallenta. Il VPD dà un numero a questa differenza.</p>
<p>Un VPD più alto significa che l'aria sta tirando l'acqua dalle foglie più velocemente. Un VPD più basso significa che l'aria è quasi satura e l'evaporazione è lenta. Entrambi gli estremi causano problemi. L'obiettivo è trovare il punto ideale dove le tue piante traspirano a un ritmo sano e produttivo.</p>

<h2>Perché il VPD conta più della temperatura o dell'umidità da sole</h2>
<p>La maggior parte dei coltivatori monitora temperatura e umidità separatamente. Il problema è che la stessa percentuale di umidità significa cose molto diverse a diverse temperature.</p>
<p>Ad esempio, 60% di umidità relativa a 20&deg;C è un ambiente completamente diverso dal 60% a 30&deg;C. A 30&deg;C l'aria trattiene molta più acqua, quindi il 60% rappresenta ancora una forte potenza essiccante. A 20&deg;C il 60% è più delicato.</p>
<p>Il VPD cattura questa relazione in un singolo numero. Invece di destreggiarti tra due variabili, puoi seguire un unico valore che ti dice esattamente come le tue piante stanno vivendo il clima.</p>

<h2>Come viene calcolato il VPD</h2>
<p>La formula del VPD è diretta una volta comprese le componenti:</p>
<ol>
    <li><strong>Pressione di vapore saturo (SVP)</strong> &mdash; La quantità massima di vapore acqueo che l'aria può trattenere a una data temperatura. L'aria più calda ne trattiene di più. Questo viene calcolato alla temperatura della superficie fogliare.</li>
    <li><strong>Pressione di vapore attuale (AVP)</strong> &mdash; La quantità di vapore acqueo effettivamente presente nell'aria. Derivata dalla temperatura dell'aria e dall'umidità relativa.</li>
</ol>
<p>Il VPD è la differenza tra questi due valori:</p>
<p><code>VPD = SVP(temperatura foglia) - AVP(temperatura aria, umidità)</code></p>
<p>GrowVPD Pro gestisce tutta questa matematica automaticamente. Inserisci temperatura e umidità e l'app visualizza istantaneamente il tuo valore VPD.</p>

<h2>Temperatura fogliare vs. temperatura dell'aria</h2>
<p>Questo è un dettaglio che molti coltivatori trascurano. Il VPD che conta viene calcolato sulla <strong>superficie fogliare</strong>, non sul termometro appeso alla parete.</p>
<p>Le foglie sono tipicamente <strong>1&ndash;3&deg;C più fresche</strong> dell'aria circostante a causa della traspirazione (raffreddamento evaporativo). Sotto luci intense la differenza può essere minore. In condizioni di luce bassa può essere maggiore.</p>
<p>In GrowVPD Pro, puoi regolare l'offset della temperatura fogliare nelle impostazioni del grafico VPD. Se hai un termometro a infrarossi, misura alcune foglie per determinare l'offset reale. Altrimenti, l'offset predefinito di 2&deg;C è un buon punto di partenza.</p>

<blockquote>
    <strong>Consiglio:</strong> Se hai un sensore smart posizionato a livello della chioma, otterrai una lettura molto più vicina alle condizioni reali della foglia rispetto a un sensore sulla parete o vicino all'aspirazione.
</blockquote>

<h2>Zone VPD spiegate</h2>
<p>Il VPD si misura in kilopascal (kPa). Ecco le zone e cosa significano per le tue piante:</p>

<table class="vpd-zones">
    <thead>
        <tr>
            <th>Zona</th>
            <th>Intervallo VPD</th>
            <th>Cosa succede</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="zone-dot zone-blue"></span>Sotto-traspirazione</td>
            <td>&lt; 0,4 kPa</td>
            <td>Aria quasi satura. Gli stomi si chiudono, il trasporto dei nutrienti rallenta, il rischio di muffa aumenta significativamente.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-light-green"></span>Piantina / Clone</td>
            <td>0,4 &ndash; 0,8 kPa</td>
            <td>Traspirazione delicata. Ideale per piantine, cloni freschi e trapianti con sistemi radicali limitati.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-green"></span>Vegetativa</td>
            <td>0,8 &ndash; 1,2 kPa</td>
            <td>Traspirazione forte e sana. Le piante crescono vigorosamente, l'assorbimento dei nutrienti è efficiente, i fusti si rafforzano.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-dark-green"></span>Fioritura</td>
            <td>1,0 &ndash; 1,5 kPa</td>
            <td>Ottimale per lo sviluppo dei fiori. Aria leggermente più secca incoraggia la produzione di resina e riduce il rischio di marciume delle cime.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-red"></span>Sovra-traspirazione</td>
            <td>&gt; 1,5 kPa</td>
            <td>Le piante perdono acqua più velocemente di quanto le radici possano fornire. Gli stomi si chiudono difensivamente, bloccando i nutrienti, causando appassimento e stress termico.</td>
        </tr>
    </tbody>
</table>

<blockquote>
    <strong>Importante:</strong> Questi intervalli sono linee guida, non regole rigide. Piante sane e ben radicate con un apparato radicale forte tollerano un VPD leggermente più alto. Piante stressate o sotto luce intensa potrebbero aver bisogno della parte bassa di ogni intervallo.
</blockquote>

<h2>Come leggere il grafico VPD in GrowVPD Pro</h2>
<p>La scheda VPD nell'app mostra una heatmap interattiva. L'asse orizzontale mostra la temperatura, l'asse verticale l'umidità, e ogni cella è colorata in base al valore VPD risultante.</p>
<ul>
    <li><strong>Blu</strong> &mdash; VPD troppo basso. L'aria è troppo umida per la temperatura.</li>
    <li><strong>Verde</strong> &mdash; VPD ottimale. Questa è la tua zona target.</li>
    <li><strong>Giallo</strong> &mdash; Il VPD inizia a essere alto. Le piante cominciano a lavorare duro.</li>
    <li><strong>Arancione / Rosso</strong> &mdash; VPD troppo alto. Lo stress delle piante è probabile.</li>
</ul>
<p>Usa il <strong>selettore di fase</strong> in alto per alternare tra piantine, vegetativa e fioritura. La zona verde si sposta di conseguenza, perché le piante più giovani necessitano di un VPD più basso e quelle in fioritura tollerano (e traggono beneficio da) un VPD più alto.</p>
<p>Tocca qualsiasi cella per vedere i valori esatti. Se hai un sensore smart o Bluetooth collegato, il grafico evidenzia la tua posizione attuale con un marcatore, così puoi vedere a colpo d'occhio dove ti trovi.</p>

<h2>Come regolare il VPD</h2>

<h3>VPD troppo alto (piante appassite, foglie arricciate)</h3>
<p>L'aria è troppo secca rispetto alla temperatura. Per abbassare il VPD:</p>
<ul>
    <li><strong>Aumenta l'umidità</strong> &mdash; Accendi un umidificatore, posiziona asciugamani bagnati nella tenda o spruzza le pareti (non direttamente sulle piante durante la fioritura).</li>
    <li><strong>Abbassa la temperatura</strong> &mdash; Aumenta l'estrazione, alza leggermente le luci o riduci l'intensità luminosa.</li>
    <li><strong>Riduci il flusso d'aria diretto sulle piante</strong> &mdash; Punta le ventole oscillanti leggermente sopra la chioma, non direttamente sulle foglie.</li>
</ul>

<h3>VPD troppo basso (rischio muffa, crescita lenta)</h3>
<p>L'aria è troppo umida per la temperatura. Per alzare il VPD:</p>
<ul>
    <li><strong>Diminuisci l'umidità</strong> &mdash; Accendi un deumidificatore, aumenta la velocità della ventola di estrazione, migliora il ricambio d'aria.</li>
    <li><strong>Aumenta la temperatura</strong> &mdash; Accendi le luci a piena potenza, riduci leggermente l'estrazione, se necessario aggiungi un piccolo riscaldatore.</li>
    <li><strong>Aumenta il flusso d'aria</strong> &mdash; Più movimento d'aria aiuta a evaporare l'umidità dalla superficie delle foglie.</li>
</ul>

<blockquote>
    <strong>Suggerimento Pro:</strong> Se usi GrowVPD Pro con l'automazione smart, puoi impostare regole come "Se il VPD scende sotto 0,7 kPa, accendi il deumidificatore" o "Se il VPD supera 1,4 kPa, attiva l'umidificatore". L'app lo gestisce automaticamente dalla scheda Automazione.
</blockquote>

<h2>VPD notturno vs. diurno</h2>
<p>Quando le luci si spengono, la temperatura scende, ma l'umidità spesso resta uguale o sale. Questo significa che il VPD cala di notte &mdash; a volte drasticamente.</p>
<p>Un VPD perfetto durante le luci accese può diventare pericolosamente basso di notte, portando a condensazione sulle foglie e marciume delle cime. Per questo molti coltivatori esperti:</p>
<ul>
    <li>Fanno funzionare il deumidificatore più intensamente durante il periodo buio</li>
    <li>Mantengono un basso differenziale di temperatura tra giorno e notte (massimo 5&ndash;8&deg;C di calo)</li>
    <li>Mantengono una buona circolazione d'aria anche quando le luci sono spente</li>
</ul>
<p>In GrowVPD Pro puoi registrare sia la temperatura diurna che quella notturna nelle annotazioni del diario per monitorare i cambiamenti di VPD durante l'intero ciclo di 24 ore.</p>

<h2>Errori comuni sul VPD</h2>
<ol>
    <li><strong>Ignorare la temperatura fogliare.</strong> Usare solo la temperatura dell'aria sovrastima il VPD. Considera l'offset fogliare di 1&ndash;3&deg;C.</li>
    <li><strong>Non adattare per la fase di crescita.</strong> Le piantine non sopportano lo stesso VPD delle piante in fioritura. Adatta sempre il target alla fase corrente.</li>
    <li><strong>Misurare nel posto sbagliato.</strong> Un sensore in cima alla tenda legge diversamente da uno a livello della chioma. Posiziona il sensore dove sono le piante.</li>
    <li><strong>Inseguire un singolo numero perfetto.</strong> La costanza conta più della precisione. Restare costantemente entro 0,2 kPa è meglio che colpire 1,0 kPa una volta e poi avere oscillazioni selvagge.</li>
    <li><strong>Dimenticare la notte.</strong> La gestione del VPD non si ferma quando le luci si spengono. La notte è quando la muffa attacca.</li>
</ol>

<h2>Usare il VPD con l'automazione smart</h2>
<p>La scheda Automazione di GrowVPD Pro ti permette di creare regole basate sul VPD che controllano automaticamente i tuoi dispositivi smart. Per esempio:</p>
<ul>
    <li>Se il VPD supera 1,3 kPa, accendi l'umidificatore</li>
    <li>Se il VPD scende sotto 0,6 kPa, aumenta la velocità della ventola di estrazione</li>
    <li>Se la temperatura sale sopra 30&deg;C, dimma le luci all'80%</li>
</ul>
<p>L'engine di automazione include isteresi (per evitare commutazioni rapide dei dispositivi), override basati sul tempo e limiti di sicurezza. Consulta le nostre guide alla connessione <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">Tuya</a> e <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">Mars Hydro</a> per configurare i tuoi dispositivi.</p>
`
  },

  "connect-tuya": {
    title: "Come collegare dispositivi Tuya / Smart Life a GrowVPD Pro",
    body: `
<h2>Quali dispositivi Tuya / Smart Life funzionano?</h2>
<p>Tuya è la piattaforma dietro centinaia di marchi smart home white-label. Se il tuo dispositivo funziona con l'app <strong>Tuya</strong> o <strong>Smart Life</strong>, molto probabilmente funzionerà con GrowVPD Pro. I dispositivi comunemente usati includono:</p>
<ul>
    <li><strong>Sensori di temperatura/umidità</strong> &mdash; Sensori WiFi che riportano temperatura e RH al cloud. Questi alimentano dati dal vivo nel grafico VPD.</li>
    <li><strong>Prese smart</strong> &mdash; Accendono e spengono umidificatori, deumidificatori, ventole o riscaldatori basandosi sulle regole di automazione.</li>
    <li><strong>Telecamere smart</strong> &mdash; Le telecamere compatibili con Tuya possono catturare automaticamente snapshot e salvarli nel diario di coltivazione.</li>
    <li><strong>Interruttori e dimmer smart</strong> &mdash; Controlla luci, pompe e altri equipaggiamenti.</li>
    <li><strong>Sensori di umidità del suolo, monitor CO2</strong> &mdash; Qualsiasi dispositivo Tuya che riporta dati ambientali.</li>
</ul>

<h2>Prerequisiti</h2>
<ul>
    <li>GrowVPD Pro con un <strong>abbonamento Pro</strong> attivo (l'automazione smart è una funzione Pro)</li>
    <li>I tuoi dispositivi Tuya/Smart Life già configurati e funzionanti nell'app ufficiale Tuya o Smart Life</li>
    <li>Una connessione WiFi stabile (i dispositivi comunicano tramite Tuya Cloud API)</li>
    <li>Un account sviluppatore Tuya IoT Platform (gratuito &mdash; istruzioni sotto)</li>
</ul>

<h2>Passaggi di connessione</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Ottieni le credenziali Tuya Developer</h3>
    <p>GrowVPD Pro si collega ai tuoi dispositivi tramite la Tuya Cloud API. Per l'autorizzazione hai bisogno di un <strong>Access ID</strong> e un <strong>Access Secret</strong> dalla Tuya IoT Platform:</p>
    <ol>
        <li>Vai su <strong>iot.tuya.com</strong> e crea un account gratuito (o accedi).</li>
        <li>Nel pannello laterale, vai su <strong>Cloud &gt; Development</strong> e crea un nuovo Cloud Project.</li>
        <li>Scegli <strong>Smart Home</strong> come settore e seleziona il data center (Europa Occidentale, America Orientale, Cina o India).</li>
        <li>Nella scheda <strong>API Products</strong>, assicurati che <strong>IoT Core</strong> e <strong>Smart Home Device Management</strong> siano sottoscritti (sono gratuiti).</li>
        <li>Vai alla scheda <strong>Devices</strong> e collega il tuo account dall'app Tuya/Smart Life affinché il progetto cloud possa accedere ai tuoi dispositivi.</li>
        <li>Nella pagina <strong>Overview</strong> del progetto, copia il tuo <strong>Access ID/Client ID</strong> e <strong>Access Secret/Client Secret</strong>.</li>
    </ol>
</div>

<blockquote>
    <strong>Consiglio:</strong> La regione scelta nella Tuya IoT deve corrispondere alla regione del tuo account nell'app Tuya/Smart Life. Se la tua app è impostata su Europa, scegli il data center Europa Occidentale. Regioni non corrispondenti sono la causa più comune dell'errore "Nessun dispositivo trovato".
</blockquote>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Collega l'account Tuya in GrowVPD Pro</h3>
    <p>Apri GrowVPD Pro e vai a <strong>Impostazioni &gt; Account collegati &gt; Tuya</strong>. Inserisci il tuo Access ID e Access Secret, poi seleziona la regione (EU, US o CN). Tocca <strong>Connetti</strong>. L'app verificherà le tue credenziali e stabilirà la connessione con il Tuya Cloud.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Scopri i tuoi dispositivi</h3>
    <p>Vai alla scheda <strong>Automazione</strong> e tocca <strong>Aggiungi dispositivi</strong>. L'app scansionerà il tuo account Tuya collegato e mostrerà tutti i dispositivi disponibili con nomi, tipi e stato online. Tocca un dispositivo per aggiungerlo a GrowVPD Pro.</p>
</div>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Assegna dispositivi a stanze e tende</h3>
    <p>Organizza i dispositivi in stanze e tende per una gestione ordinata:</p>
    <ol>
        <li>Crea una <strong>Stanza</strong> (es. "Garage", "Cantina", "Camera da letto").</li>
        <li>All'interno della stanza, crea una <strong>Tenda</strong> (es. "Tenda A 120x120", "Tenda vegetativa").</li>
        <li>Assegna un sensore alla tenda affinché l'app sappia quale dispositivo fornisce i dati per quella tenda.</li>
        <li>Assegna gli attuatori (prese smart, interruttori) alla stessa tenda per le regole di automazione.</li>
    </ol>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Verifica la connessione</h3>
    <p>Dopo l'assegnazione, i dati dal vivo del sensore dovrebbero apparire nel pannello della tenda entro pochi secondi. Controlla:</p>
    <ul>
        <li>La tenda mostra temperatura e umidità correnti</li>
        <li>Il VPD è calcolato e visualizzato</li>
        <li>Toccare una presa smart la accende/spegne correttamente</li>
    </ul>
    <p>Se i dati in tempo reale appaiono e il controllo dei dispositivi funziona, sei pronto. Ora puoi creare regole di automazione nella scheda Automazione.</p>
</div>

<h2>Risoluzione dei problemi</h2>

<h3>"Nessun dispositivo trovato" dopo la connessione</h3>
<ul>
    <li><strong>Controlla la tua regione.</strong> La regione in GrowVPD Pro deve corrispondere al data center scelto nella Tuya IoT Platform, che deve corrispondere alla regione della tua app Tuya/Smart Life.</li>
    <li><strong>Verifica le credenziali.</strong> Ricontrolla di aver copiato correttamente Access ID e Access Secret. Sono sensibili alle maiuscole.</li>
    <li><strong>Collega il tuo account app.</strong> Nella Tuya IoT Platform, vai a Cloud Project &gt; Devices &gt; Link Tuya App Account. Scansiona il QR code con l'app Tuya o Smart Life.</li>
    <li><strong>Controlla le sottoscrizioni API.</strong> Assicurati che IoT Core e Smart Home Device Management siano sottoscritti nella scheda API Products.</li>
</ul>

<h3>"Dispositivo offline"</h3>
<ul>
    <li>Verifica che il dispositivo sia connesso al WiFi e alimentato.</li>
    <li>Apri l'app Tuya/Smart Life e controlla che il dispositivo risulti online.</li>
    <li>Riavvia il dispositivo (scollega, attendi 10 secondi, ricollega).</li>
    <li>Se il dispositivo è stato spostato su un'altra rete WiFi, ri-abbinalo prima tramite l'app Tuya/Smart Life.</li>
</ul>

<h3>"Letture errate" o sensore impreciso</h3>
<ul>
    <li>In GrowVPD Pro, vai alle impostazioni del dispositivo e usa l'<strong>offset di calibrazione</strong> per correggere errori noti del sensore. Molti sensori Tuya economici si discostano di 1&ndash;2&deg;C o 3&ndash;5% RH.</li>
    <li>Confronta con un termometro/igrometro verificato nello stesso punto per alcune ore.</li>
    <li>Posiziona il sensore a livello della chioma, lontano dalla luce diretta, per le letture più utili.</li>
</ul>

<h2>Snapshot automatici della telecamera Tuya</h2>
<p>Se hai una telecamera compatibile con Tuya, GrowVPD Pro può catturare automaticamente snapshot periodici e salvarli nel diario di coltivazione. Ottimo per costruire sequenze timelapse senza alcuno sforzo manuale.</p>
<p>Per attivarli, assegna la telecamera a una tenda e imposta il programma di cattura nelle impostazioni della tenda. Puoi scegliere intervalli dal giornaliero al bisettimanale. Gli snapshot vengono catturati automaticamente e allegati all'annotazione corrispondente nel diario.</p>

<div class="warning-box">
    <strong>Nota:</strong> Tutte le comunicazioni dei dispositivi Tuya richiedono WiFi e accesso a internet. I dispositivi Tuya utilizzano la Tuya Cloud API &mdash; non possono essere controllati localmente senza internet. Se la connessione internet cade, le regole di automazione si mettono in pausa fino al ripristino.
</div>
`
  },

  "connect-mars-hydro": {
    title: "Come collegare dispositivi Mars Hydro a GrowVPD Pro",
    body: `
<h2>Quali dispositivi Mars Hydro funzionano?</h2>
<p>GrowVPD Pro supporta la linea <strong>iConnect</strong> di Mars Hydro. Tipi supportati:</p>
<ul>
    <li><strong>Ventole in-line</strong> &mdash; Velocità 0&ndash;100%, timer, automazione basata su temperatura/VPD.</li>
    <li><strong>Luci LED da coltivazione</strong> &mdash; Dimmerabili 0&ndash;100%, programmi alba/tramonto.</li>
    <li><strong>Sensori ambientali</strong> &mdash; Temperatura, umidità, umidità del suolo.</li>
    <li><strong>Controller</strong> &mdash; Controller multi-porta per ventole e luci.</li>
</ul>

<div class="important-box">
    <strong>GrowVPD Pro funziona come app companion insieme a MarsPro</strong> &mdash; il Bluetooth (BLE) viene usato una sola volta durante l'abbinamento, poi tutto il controllo passa via WiFi/MQTT, lo stesso protocollo cloud usato da MarsPro. Siamo grandi fan di Mars Hydro e ci piacerebbe davvero collaborare direttamente con il loro team.
</div>

<h2>Prerequisiti</h2>
<ul>
    <li>GrowVPD Pro con <strong>abbonamento Pro</strong> attivo</li>
    <li>Dispositivo/i Mars Hydro iConnect</li>
    <li>Rete WiFi stabile (2,4 GHz)</li>
    <li>Account Mars Hydro (creane uno su <strong>marshydro.com</strong> se non ne hai)</li>
</ul>

<h2>Come funziona la connessione</h2>
<p>Mars Hydro usa il <strong>protocollo MQTT</strong> per la comunicazione con i dispositivi &mdash; veloce e affidabile per IoT. I comandi vengono inviati come messaggi MQTT e arrivano in pochi secondi.</p>

<h2>Passaggi di connessione</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Collega l'account Mars Hydro in GrowVPD Pro</h3>
    <p>Vai a <strong>Impostazioni &gt; Account collegati &gt; Mars Hydro</strong>. Inserisci email e password del tuo account Mars Hydro. Non hai un account? Creane uno su <strong>marshydro.com</strong>. Tocca <strong>Connetti</strong>.</p>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Metti il dispositivo in modalità di accoppiamento</h3>
    <p>Per le luci con manopola dimmer: ruota da OFF a 75%+ e torna a OFF, ripeti 2&ndash;3 volte velocemente finché la luce lampeggia (intensità 0%&ndash;100%). Per altri dispositivi, tieni premuto il pulsante secondo il manuale.</p>
    <div class="warning-box">
        <strong>Attenzione:</strong> EXT è accanto a OFF sulla manopola &mdash; assicurati di colpire OFF, non EXT. Lampeggiamento = modalità accoppiamento. <strong>5&ndash;10 secondi</strong> per avviare in GrowVPD Pro.
    </div>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Scopri e abbina in GrowVPD Pro</h3>
    <p>Scheda <strong>Automazione &gt; Aggiungi dispositivi &gt; Mars Hydro</strong>. L'app avvia una scansione BLE e trova il tuo dispositivo. Selezionalo e GrowVPD Pro invierà automaticamente le credenziali WiFi.</p>
</div>

<blockquote>
    <strong>Suggerimento:</strong> Attiva il Bluetooth e concedi i permessi Bluetooth e posizione a GrowVPD Pro. La scansione BLE su Android richiede il permesso di posizione.
</blockquote>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Assegna a stanze e tende</h3>
    <ul>
        <li>Crea o seleziona una <strong>Stanza</strong></li>
        <li>Crea o seleziona una <strong>Tenda</strong> nella stanza</li>
        <li>Assegna sensori e attuatori Mars Hydro alla tenda</li>
    </ul>
    <p>Puoi mescolare dispositivi di marche diverse nella stessa tenda &mdash; una luce Mars Hydro su un programma alba/tramonto accanto a un AC Infinity Controller 69 che gestisce il VPD sulla sua stessa Cloudline.</p>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Testa il controllo</h3>
    <ul>
        <li><strong>Ventola</strong> &mdash; regola velocità, risposta in 1&ndash;3 secondi.</li>
        <li><strong>Luce LED</strong> &mdash; regola dimmerazione.</li>
        <li><strong>Sensori</strong> &mdash; verifica aggiornamento dati.</li>
    </ul>
</div>

<h2>BLE vs. WiFi</h2>
<ul>
    <li><strong>Bluetooth (BLE)</strong> &mdash; <strong>una sola volta</strong> durante l'abbinamento direttamente in GrowVPD Pro.</li>
    <li><strong>WiFi + MQTT Cloud</strong> &mdash; tutto il controllo e automazione continua.</li>
    <li>Dopo la configurazione, <strong>niente più Bluetooth</strong>. Funziona interamente via WiFi.</li>
</ul>

<h2>Risoluzione problemi</h2>

<h3>"Dispositivo non trovato" nella scansione BLE</h3>
<ul>
    <li>Bluetooth attivo? Permessi (Bluetooth + posizione) concessi?</li>
    <li>Ripeti sequenza dimmer (OFF&rarr;75%&rarr;OFF). Finestra: 5&ndash;10 secondi.</li>
    <li>Resta vicino al dispositivo (2&ndash;3 metri) durante la scansione BLE.</li>
    <li>Password cambiata? Aggiornala nelle Impostazioni.</li>
</ul>

<h3>"Impossibile controllare il dispositivo"</h3>
<ul>
    <li>Controlla segnale WiFi. Nelle tende metalliche usa un ripetitore WiFi.</li>
    <li>Riavvia il dispositivo, attendi 30s per riconnessione MQTT.</li>
    <li>Assicurati di usare WiFi 2,4 GHz.</li>
</ul>

<h2>Combinare con altre piattaforme</h2>
<p>Combinazioni tipiche sensate: il Controller 69/89 Pro di AC Infinity pilota la propria ventola Cloudline via VPD, mentre le luci Mars Hydro girano su un programma alba/tramonto condiviso. Un Bluelab Pulse monitora il pH della zona radicale via cloud Edenic e invia notifiche quando esce dall'intervallo sicuro. Una presa Tuya fa da semplice interruttore per un classico termosifone a olio, controllato da qualsiasi sensore di cui ti fidi. Tutto dal pannello unico di Automazione.</p>

<div class="warning-box">
    <strong>Ricorda:</strong> I dispositivi Mars Hydro WiFi richiedono internet attivo. In caso di interruzione, l'automazione si mette in pausa (i dispositivi continuano con gli ultimi valori impostati). Valuta un termostato di backup.
</div>
`
  },

  "automation-rules": {
    title: "Configurare regole di automazione smart in GrowVPD Pro",
    body: `
<p>Una delle funzioni più potenti di GrowVPD Pro è la possibilità di creare regole di automazione che funzionano <strong>tra marchi diversi</strong>. Ogni marchio funziona meglio con il proprio ecosistema (il Controller AC Infinity pilota le sue Cloudline, l'iHub Mars Hydro le sue ventole) e GrowVPD Pro li collega insieme: programmi luci condivisi tra marchi diversi, Bluelab Pulse che invia notifiche quando il pH esce dall'intervallo via Edenic, e una semplice presa Tuya che accende un riscaldatore basandosi su qualsiasi sensore di cui ti fidi. Nessun'altra app per la coltivazione ti offre questo livello di controllo cross-brand.</p>

<p>Questa guida ti accompagna attraverso tutto quello che devi sapere per impostare le regole di automazione, dai concetti base alle configurazioni avanzate.</p>

<h2>Cosa sono le regole di automazione?</h2>

<p>Una regola di automazione è una semplice istruzione causa-effetto: <strong>quando una certa condizione è soddisfatta, esegui un'azione</strong>. GrowVPD Pro controlla le regole ogni 15 minuti in background usando WorkManager di Android, quindi l'automazione funziona anche quando l'app è chiusa.</p>

<p>Ogni regola consiste di tre parti:</p>

<ol>
    <li><strong>Input sensore</strong> &mdash; quale dispositivo fornisce i dati (temperatura, umidità, VPD, CO2, PPFD, umidità del suolo)</li>
    <li><strong>Condizione</strong> &mdash; quale soglia attiva la regola (es. VPD sale sopra 1,5 kPa)</li>
    <li><strong>Azione</strong> &mdash; cosa deve fare il dispositivo quando la condizione è soddisfatta e quando viene ripristinata</li>
</ol>

<blockquote>
    <strong>Vantaggio chiave:</strong> Poiché GrowVPD Pro comunica con la cloud API di ogni marchio indipendentemente, le tue regole di automazione possono combinare dispositivi Tuya, AC Infinity, Mars Hydro, Spider Farmer e Vivosun in qualsiasi combinazione. Sensore e dispositivo target non devono essere dello stesso marchio.
</blockquote>

<h2>Creare la tua prima regola di automazione</h2>

<p>Apri la scheda <strong>Automazione</strong> in GrowVPD Pro. Se non hai ancora configurato una stanza e una tenda, ti verrà chiesto di farlo. Una volta configurata la tenda, tocca il pulsante <strong>+ Aggiungi regola</strong>.</p>

<h3>Passo 1: Seleziona il sensore</h3>
<p>Scegli quale dispositivo connesso fornisce i dati. L'app ti mostra quali tipi di dati ogni dispositivo riporta.</p>

<h3>Passo 2: Scegli il tipo di condizione</h3>
<p>Seleziona cosa vuoi monitorare. GrowVPD Pro supporta 12 tipi di condizione:</p>
<ul>
    <li><strong>VPD</strong> &mdash; Deficit di Pressione di Vapore (calcolato da temperatura + umidità)</li>
    <li><strong>Temperatura</strong> &mdash; temperatura dell'aria (sopra o sotto soglia)</li>
    <li><strong>Umidità</strong> &mdash; umidità relativa in percentuale</li>
    <li><strong>CO2</strong> &mdash; concentrazione di anidride carbonica in PPM</li>
    <li><strong>PPFD</strong> &mdash; intensità luminosa in &mu;mol/m&sup2;/s</li>
    <li><strong>Umidità del suolo</strong> &mdash; contenuto volumetrico d'acqua in percentuale</li>
    <li><strong>EC del suolo</strong> &mdash; conducibilità elettrica del substrato</li>
    <li><strong>Temperatura del suolo</strong> &mdash; temperatura della zona radicale</li>
    <li><strong>Temperatura notturna</strong> &mdash; temperatura durante lo spegnimento delle luci</li>
    <li><strong>Differenziale di temperatura</strong> &mdash; differenza tra temperatura diurna e notturna</li>
    <li><strong>Tasso di variazione dell'umidità</strong> &mdash; quanto velocemente l'umidità sale o scende</li>
    <li><strong>Tasso di variazione del VPD</strong> &mdash; quanto velocemente il VPD cambia</li>
</ul>

<h3>Passo 3: Imposta il valore soglia</h3>
<p>Inserisci il valore che deve attivare la regola. Per esempio, se vuoi attivare una ventola quando il VPD supera 1,4 kPa, imposta la soglia a <code>1.4</code> con condizione "maggiore di".</p>

<h3>Passo 4: Imposta l'isteresi</h3>
<p>L'isteresi è una zona cuscinetto che impedisce il rapido ciclaggio dei dispositivi. Se la tua soglia VPD è 1,4 kPa con isteresi 0,1, la regola si attiva a 1,4 ma non si ripristina finché il VPD non scende sotto 1,3.</p>

<blockquote>
    <strong>Consiglio:</strong> Imposta sempre l'isteresi. Senza di essa, una lettura del sensore che oscilla intorno alla soglia farebbe commutare i dispositivi ogni 15 minuti. Un'isteresi di 0,1 kPa per il VPD o 2&deg;C per la temperatura funziona bene per la maggior parte delle configurazioni.
</blockquote>

<h3>Passo 5: Seleziona il dispositivo target</h3>
<p>Scegli quale dispositivo deve rispondere. Può essere qualsiasi dispositivo controllabile &mdash; presa smart, ventola di estrazione, umidificatore, riscaldatore o luce da coltivazione. Il dispositivo non deve essere dello stesso marchio del sensore.</p>

<h3>Passo 6: Definisci le azioni</h3>
<ul>
    <li><strong>Azione trigger</strong> &mdash; cosa succede quando la condizione è soddisfatta (es. accendi, imposta ventola a velocità 5, imposta dimmer all'80%)</li>
    <li><strong>Azione ripristino</strong> &mdash; cosa succede quando la condizione torna alla normalità (es. spegni, imposta ventola a velocità 2)</li>
</ul>

<h3>Passo 7: Impostazioni avanzate opzionali</h3>
<ul>
    <li><strong>Limiti orari</strong> &mdash; la regola funziona solo in determinate ore</li>
    <li><strong>Filtro fase di crescita</strong> &mdash; si applica solo in certe fasi (es. solo fioritura)</li>
    <li><strong>Tempo massimo di funzionamento</strong> &mdash; arresto automatico dopo un tempo prestabilito</li>
    <li><strong>Tempo minimo di spegnimento</strong> &mdash; impedisce la riattivazione prematura</li>
    <li><strong>Tempo minimo di accensione</strong> &mdash; garantisce il funzionamento per un tempo minimo</li>
    <li><strong>Livello di priorità</strong> &mdash; in caso di conflitto tra regole, vince la priorità più alta</li>
</ul>

<h2>Esempi di regole di automazione</h2>

<h3>Controllo VPD con dispositivi cross-brand</h3>
<ul>
    <li><strong>Sensore:</strong> Sensore WiFi Tuya temperatura/umidità</li>
    <li><strong>Condizione:</strong> VPD &gt; 1,4 kPa</li>
    <li><strong>Isteresi:</strong> 0,1 kPa</li>
    <li><strong>Target:</strong> Umidificatore Mars Hydro (tramite presa smart)</li>
    <li><strong>Azione trigger:</strong> Accendi</li>
    <li><strong>Azione ripristino:</strong> Spegni (quando VPD scende sotto 1,3 kPa)</li>
</ul>

<h3>Protezione temperatura notturna</h3>
<ul>
    <li><strong>Sensore:</strong> Qualsiasi sensore di temperatura collegato</li>
    <li><strong>Condizione:</strong> Temperatura &lt; 18&deg;C</li>
    <li><strong>Isteresi:</strong> 2&deg;C</li>
    <li><strong>Target:</strong> Presa smart Tuya (che controlla un riscaldatore)</li>
    <li><strong>Azione trigger:</strong> Accendi</li>
    <li><strong>Azione ripristino:</strong> Spegni (quando la temperatura raggiunge 20&deg;C)</li>
    <li><strong>Limiti orari:</strong> Solo ore con luci spente</li>
</ul>

<h2>Funzioni di sicurezza</h2>
<ul>
    <li><strong>Isteresi su ogni regola</strong> previene il rapido on/off dei dispositivi</li>
    <li><strong>Tempo minimo di spegnimento</strong> protegge dispositivi come compressori dei deumidificatori</li>
    <li><strong>Tempo massimo di funzionamento</strong> impedisce che un sensore bloccato lasci un riscaldatore acceso indefinitamente</li>
    <li><strong>Livelli di priorità</strong> risolvono conflitti quando due regole cercano di controllare lo stesso dispositivo</li>
    <li><strong>Rilevamento anti-conflitto</strong> ti avvisa se due regole potrebbero confliggere tra loro</li>
</ul>

<blockquote>
    <strong>Importante:</strong> Le regole di automazione comunicano tramite API cloud, il che significa che i tuoi dispositivi necessitano di una connessione WiFi attiva. Se internet si interrompe, le regole si mettono in pausa e si riattivano automaticamente quando la connessione viene ripristinata. Per funzioni di sicurezza critiche (come lo spegnimento per temperatura massima), valuta di usare le funzioni di sicurezza integrate nel dispositivo come backup.
</blockquote>

<h2>Organizzazione stanze e tende</h2>
<ol>
    <li><strong>Stanza</strong> &mdash; il tuo spazio fisico di coltivazione (es. "Garage", "Camera extra")</li>
    <li><strong>Tenda</strong> &mdash; tende singole nella stanza (es. "Tenda vegetativa", "Tenda fioritura")</li>
    <li><strong>Dispositivi</strong> &mdash; assegnati a tende specifiche</li>
    <li><strong>Regole</strong> &mdash; limitate alla tenda, usando sensori e dispositivi di quella tenda</li>
</ol>

<p>Le tende create nella scheda Automazione vengono automaticamente condivise con il Diario di coltivazione tramite il sistema dei profili attrezzatura. Quando crei una nuova coltivazione nel diario e la assegni a una tenda, le regole di automazione per quella tenda si attivano automaticamente.</p>

<h2>Monitoraggio e tracciamento energia</h2>
<ul>
    <li><strong>Log automazione</strong> &mdash; vedi ogni attivazione e ripristino con timestamp e motivi</li>
    <li><strong>Tracciamento energia</strong> &mdash; monitora il consumo energetico stimato per dispositivo e per tenda</li>
    <li><strong>Efficacia delle regole</strong> &mdash; l'app traccia quanto spesso ogni regola si attiva e quanto stabili restano le condizioni</li>
    <li><strong>Analitica smart</strong> &mdash; visualizza punteggi di stabilità, costi energetici e avvisi predittivi</li>
</ul>
`
  },

  "grow-diary-guide": {
    title: "Diario di coltivazione: Dal seme al raccolto &mdash; Guida completa",
    body: `
<p>Un diario di coltivazione è lo strumento più prezioso per migliorare i tuoi risultati nel tempo. Ogni raccolto ti insegna qualcosa &mdash; ma solo se hai registrato cosa è successo lungo il percorso. Il diario di GrowVPD Pro traccia clima, nutrienti, foto e dati del raccolto durante l'intero ciclo di coltivazione, e poi ti permette di confrontare le coltivazioni fianco a fianco.</p>

<h2>Perché tracciare la tua coltivazione?</h2>
<ul>
    <li><strong>Identificare cosa funziona</strong> &mdash; correlare programmi nutrizionali specifici, intervalli VPD o tecniche di allenamento con risultati migliori</li>
    <li><strong>Individuare problemi precocemente</strong> &mdash; un calo improvviso del pH o una settimana di VPD alto appaiono chiaramente nella tua cronologia dati</li>
    <li><strong>Prevedere i tempi del raccolto</strong> &mdash; confrontando la coltivazione attuale con quelle passate della stessa varietà, puoi stimare quante settimane mancano</li>
    <li><strong>Condividere risultati significativi</strong> &mdash; puoi mostrare le condizioni esatte che hanno portato a quel raccolto</li>
    <li><strong>Costruire un database personale</strong> &mdash; dopo diverse coltivazioni, sviluppi conoscenze specifiche per varietà</li>
</ul>

<h2>Creare una nuova coltivazione</h2>
<p>Apri la scheda <strong>Diario</strong> e tocca <strong>+ Nuova coltivazione</strong>. Inserisci le informazioni di base: nome, varietà, tipo (photoperiod o autoflower), substrato, dimensione vaso, numero di piante e tipo d'acqua.</p>

<h2>Aggiungere annotazioni giornaliere</h2>
<p>Il cuore del diario è l'annotazione giornaliera. Non devi compilare ogni campo ogni volta &mdash; registra ciò che conta per te. Col tempo, anche annotazioni parziali costruiscono una cronologia preziosa.</p>

<h3>Dati climatici</h3>
<ul>
    <li><strong>Temperatura</strong>, <strong>Temperatura notturna</strong>, <strong>Umidità</strong>, <strong>VPD</strong> (calcolato automaticamente)</li>
</ul>

<h3>Dati luminosi</h3>
<ul>
    <li><strong>PPFD</strong>, <strong>Ore di luce</strong>, <strong>Distanza della luce</strong>, <strong>Potenza della luce</strong></li>
</ul>

<h3>Acqua e nutrienti</h3>
<ul>
    <li><strong>Quantità d'acqua</strong>, <strong>Temperatura dell'acqua</strong>, <strong>pH</strong>, <strong>EC / PPM</strong>, <strong>Nutrienti</strong> (69+ fertilizzanti da 7 marchi)</li>
</ul>

<h3>Foto e video</h3>
<p>Aggiungi foto direttamente dalla fotocamera o dalla galleria. Tutti i media sono salvati localmente &mdash; nulla viene caricato su alcun server.</p>

<blockquote>
    <strong>Funzione privacy:</strong> GrowVPD Pro (con l'upgrade Pro) può nascondere le foto di coltivazione dalla galleria del tuo dispositivo. C'è anche una modalità stealth che cambia l'icona dell'app in qualcosa di discreto.
</blockquote>

<h2>Fasi di crescita</h2>
<p>GrowVPD Pro usa sei fasi: Piantina, Vegetativa, Transizione, Fioritura, Fioritura tardiva, Raccolto. La fase influenza le raccomandazioni VPD e i filtri delle regole di automazione.</p>

<h2>Tracciamento del raccolto</h2>
<p>Alla raccolta, GrowVPD Pro fornisce campi per: Peso fresco, Peso secco, Data di taglio, Data di inizio flushing e Valutazione tricomi. L'app calcola automaticamente l'efficienza: grammi per watt, grammi per pianta, resa totale e rapporto di essiccazione.</p>

<h2>Confrontare le coltivazioni</h2>
<p>Dopo aver completato due o più coltivazioni, la funzione <strong>Confronta</strong> permette di visualizzarle fianco a fianco settimana per settimana.</p>

<h2>Esportare il diario</h2>
<p>GrowVPD Pro offre due formati di esportazione (funzione Pro): <strong>Report PDF</strong> e <strong>Esportazione dati JSON</strong>.</p>

<blockquote>
    <strong>Consiglio:</strong> Esporta un PDF dopo ogni coltivazione completata e salvalo nel cloud. Anche se cambi telefono, avrai sempre un registro della tua storia di coltivazione.
</blockquote>
`
  },

  "ppfd-dli-guide": {
    title: "Guida PPFD e DLI per la coltivazione indoor",
    body: `
<p>La luce è il motore della fotosintesi, e la sua corretta regolazione è uno dei maggiori fattori determinanti per la resa finale e la qualità. PPFD e DLI ti dicono quanta luce utilizzabile raggiunge effettivamente le tue piante.</p>

<h2>Cos'è il PPFD?</h2>
<p><strong>PPFD</strong> sta per <strong>Photosynthetic Photon Flux Density</strong>. Misura il numero di fotoni nell'intervallo 400&ndash;700nm che colpiscono un metro quadrato ogni secondo. L'unità è <strong>&mu;mol/m&sup2;/s</strong>.</p>

<blockquote>
    <strong>Perché il PPFD conta più del wattaggio:</strong> Il wattaggio ti dice quanta elettricità consuma una luce, non quanta luce utilizzabile produce. Un LED da 300W ben progettato può fornire più PPFD di una luce da 600W mal progettata.
</blockquote>

<h2>Cos'è il DLI?</h2>
<p><strong>DLI</strong> sta per <strong>Daily Light Integral</strong>. Misura la quantità totale di luce fornita nell'arco di un'intera giornata. L'unità è <strong>mol/m&sup2;/giorno</strong>.</p>

<h3>Formula DLI</h3>
<p><code>DLI = PPFD &times; ore &times; 0,0036</code></p>

<h2>PPFD ottimale per fase di crescita</h2>
<table>
    <thead>
        <tr><th>Fase</th><th>Intervallo PPFD</th><th>Programma tipico</th><th>DLI target</th></tr>
    </thead>
    <tbody>
        <tr><td>Piantine / Cloni</td><td>100&ndash;300 &mu;mol/m&sup2;/s</td><td>18/6</td><td>12&ndash;18 mol/m&sup2;/giorno</td></tr>
        <tr><td>Vegetativa precoce</td><td>300&ndash;400 &mu;mol/m&sup2;/s</td><td>18/6</td><td>18&ndash;25 mol/m&sup2;/giorno</td></tr>
        <tr><td>Vegetativa tardiva</td><td>400&ndash;600 &mu;mol/m&sup2;/s</td><td>18/6 o 20/4</td><td>25&ndash;35 mol/m&sup2;/giorno</td></tr>
        <tr><td>Fioritura</td><td>600&ndash;900 &mu;mol/m&sup2;/s</td><td>12/12</td><td>30&ndash;40 mol/m&sup2;/giorno</td></tr>
        <tr><td>Fioritura + CO2</td><td>900&ndash;1500 &mu;mol/m&sup2;/s</td><td>12/12</td><td>40&ndash;65 mol/m&sup2;/giorno</td></tr>
    </tbody>
</table>

<blockquote>
    <strong>Nota importante sul CO2:</strong> Le piante possono utilizzare efficacemente il PPFD sopra ~900 &mu;mol/m&sup2;/s solo con integrazione di CO2 a 1000&ndash;1500 PPM.
</blockquote>

<h2>Distanza della luce e legge dell'inverso del quadrato</h2>
<p>Il PPFD cala drasticamente con la distanza. Raddoppiare la distanza riduce l'intensità a circa un quarto.</p>

<h2>Come GrowVPD Pro aiuta con la luce</h2>
<p>L'app include una guida PPFD/DLI, un database attrezzature con 200+ luci, supporto per sensori PPFD smart e integrazione con il diario per il tracciamento a lungo termine.</p>

<h2>Errori comuni nell'illuminazione</h2>
<ul>
    <li><strong>Troppa luce per le piantine</strong> &mdash; L'errore numero uno dei nuovi coltivatori con LED. Dimma o alza sempre la luce per le prime 2 settimane.</li>
    <li><strong>Poca luce durante la fioritura</strong> &mdash; Lo stesso PPFD con un fotoperiodo più corto significa un DLI inferiore. Aumenta il PPFD quando passi alla fioritura.</li>
    <li><strong>Ignorare il DLI</strong> &mdash; Il PPFD è solo metà della storia. Calcola sempre il DLI.</li>
    <li><strong>Distribuzione non uniforme</strong> &mdash; Ruota le piante o usa una rete ScrOG.</li>
</ul>
`
  },

  "equipment-setup": {
    title: "Database attrezzature e Setup Builder",
    body: `
<p>Scegliere l'attrezzatura giusta è una delle decisioni più importanti che farai come coltivatore indoor. Troppa poca luce e le piante sottoperformano; troppa ventilazione per una tenda piccola spreca denaro; rapporti nutritivi sbagliati causano carenze. La scheda Attrezzatura di GrowVPD Pro combina un database prodotti, calcolatori e un setup builder per aiutarti a pianificare e ottimizzare il tuo spazio di coltivazione.</p>

<h2>Il database attrezzature</h2>

<p>GrowVPD Pro include un database curato di <strong>200+ prodotti da 47 marchi</strong>, che copre tutto dalle luci LED ai kit completi di ventilazione. Non si tratta di un catalogo generico &mdash; ogni voce contiene dati tecnici realmente rilevanti per la coltivazione.</p>

<h3>Cosa include</h3>

<ul>
    <li><strong>Luci LED da coltivazione</strong> &mdash; potenza assorbita, PPE (efficienza fotonica in &mu;mol/J), PPFD a diverse altezze, copertura per dimensione tenda, tipo di spettro, intervallo di dimmerazione</li>
    <li><strong>Tende da coltivazione</strong> &mdash; dimensioni, spessore del materiale, numero e dimensione delle porte, riflettività, capacità di carico delle aste</li>
    <li><strong>Ventilazione</strong> &mdash; ventole in-line (CFM nominali, rumorosità in dB, tipo di controller), filtri a carbone (capacità CFM, profondità del letto di carbone), condotti</li>
    <li><strong>Sensori ambientali</strong> &mdash; parametri misurati (temperatura, RH, CO2, PPFD, suolo), connettività (WiFi, BLE, piattaforma cloud), precisione</li>
    <li><strong>Controller</strong> &mdash; AC Infinity controller, prese smart Tuya, dispositivi Mars Hydro iConnect, numero di uscite, opzioni di automazione</li>
</ul>

<h3>Ricerca e filtri</h3>

<p>Puoi sfogliare il database per categoria o cercare per nome del marchio, nome del prodotto o specifiche. I filtri ti permettono di restringere i risultati per:</p>

<ul>
    <li><strong>Marchio</strong> &mdash; Mars Hydro, Spider Farmer, AC Infinity, Lumatek, Gavita, SANlight e 40+ altri</li>
    <li><strong>Categoria</strong> &mdash; luci, tende, ventilazione, sensori, controller, accessori</li>
    <li><strong>Compatibilità con la dimensione della tenda</strong> &mdash; seleziona le dimensioni della tua tenda e il database mostra prodotti dimensionati adeguatamente</li>
    <li><strong>Fascia di prezzo</strong> &mdash; filtra per budget</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> Quando confronti le luci LED, concentrati sulla PPE (&mu;mol/J), non sulla potenza assorbita. Una luce con efficienza di 2,7 &mu;mol/J converte più elettricità in luce utilizzabile per le piante rispetto a una con 2,0 &mu;mol/J. Una luce da 240W con PPE 2,7 supera una da 320W con PPE 2,0 con minor consumo e minor calore prodotto.
</blockquote>

<h2>Calcolatore nutrienti</h2>

<p>Il calcolatore nutrienti integrato elimina le supposizioni nella preparazione delle soluzioni nutritive. Supporta <strong>69+ fertilizzanti da 7 marchi principali</strong>:</p>

<ul>
    <li><strong>BioBizz</strong> &mdash; Bio-Grow, Bio-Bloom, Top-Max, Root-Juice ecc.</li>
    <li><strong>Canna</strong> &mdash; Terra Vega/Flores, Coco A/B, Cannazym, PK 13/14 ecc.</li>
    <li><strong>Plagron</strong> &mdash; Alga Grow/Bloom, Terra Grow/Bloom, Green Sensation ecc.</li>
    <li><strong>Advanced Nutrients</strong> &mdash; pH Perfect Grow/Micro/Bloom, Big Bud, Overdrive ecc.</li>
    <li><strong>General Hydroponics</strong> &mdash; Serie Flora, CaliMagic ecc.</li>
    <li><strong>Hesi</strong> &mdash; TNT Complex, Bloom Complex, Phosphorus Plus ecc.</li>
    <li><strong>Atami</strong> &mdash; Bloombastic, Rootbastic, serie ATA ecc.</li>
</ul>

<h3>Come usarlo</h3>

<ol>
    <li>Seleziona i nutrienti che usi dal database</li>
    <li>Inserisci il volume d'acqua (litri o galloni)</li>
    <li>Seleziona la fase di crescita attuale (il calcolatore adatta le concentrazioni raccomandate)</li>
    <li>L'app calcola la <strong>quantità esatta di ml per ogni nutriente</strong> da aggiungere al serbatoio</li>
</ol>

<p>Il calcolatore rispetta i programmi di alimentazione raccomandati da ogni produttore con i rapporti corretti. Puoi regolare la forza del dosaggio (es. 50% per le piantine, 100% per la dose piena in fioritura) e l'app ricalcola proporzionalmente tutti i nutrienti.</p>

<h2>Mixer substrato</h2>

<p>Se prepari il tuo substrato di crescita, il mixer substrato ti aiuta a creare e salvare ricette personalizzate. Definisci i componenti (torba, perlite, vermiculite, fibra di cocco, compost ecc.), imposta il rapporto per ciascuno e salva la ricetta. Il mixer calcola il volume effettivo di ciascun componente in base al volume totale target.</p>

<p>Le ricette salvate sono disponibili quando crei ogni nuova coltivazione nel diario, così puoi registrare esattamente quale miscela di substrato hai usato. Nel tempo, attraverso le coltivazioni, vedrai quale miscela ha dato i migliori risultati per una determinata varietà.</p>

<h2>Calcolatore ventilazione</h2>

<p>Un ricambio d'aria adeguato è critico per il controllo della temperatura, la gestione dell'umidità e il rifornimento di CO2. Il calcolatore ventilazione ti aiuta a dimensionare correttamente il sistema di estrazione.</p>

<h3>Inserisci le dimensioni della tenda</h3>

<p>Inserisci lunghezza, larghezza e altezza della tua tenda. Il calcolatore calcola il volume in piedi cubici e determina i CFM (piedi cubici al minuto) di base necessari per un adeguato ricambio d'aria.</p>

<h3>Fattori di correzione</h3>

<p>Il calcolatore applica fattori di correzione in base alla tua configurazione:</p>

<ul>
    <li><strong>Filtro a carbone</strong> &mdash; riduce i CFM effettivi di circa il 25% (il calcolatore aggiunge questa riserva)</li>
    <li><strong>Lunghezza e curve dei condotti</strong> &mdash; ogni curva e ogni metro di condotto aggiunge resistenza; il calcolatore ne tiene conto</li>
    <li><strong>Temperatura</strong> &mdash; se la temperatura ambiente è alta, serve più flusso d'aria per mantenere la temperatura target</li>
    <li><strong>Potenza termica della luce</strong> &mdash; basata sulla potenza assorbita dalla luce (dal database attrezzature o inserita manualmente)</li>
</ul>

<p>Il risultato è un <strong>valore CFM minimo raccomandato</strong> per la tua ventola in-line. Il calcolatore poi suggerisce ventole adatte dal database attrezzature.</p>

<blockquote>
    <strong>Consiglio:</strong> Dimensiona sempre la ventola di un gradino sopra il minimo raccomandato. Una ventola da 6 pollici che gira al 60% è più silenziosa e meglio regolabile di una da 4 pollici al 100%. La riserva extra significa anche che la ventola gestirà la pressione statica aggiuntiva del filtro a carbone senza sovraccaricarsi.
</blockquote>

<h2>Setup Builder</h2>

<p>Il Setup Builder ti guida nella progettazione di uno spazio di coltivazione completo da zero. È particolarmente utile per i principianti o per chiunque stia allestendo una nuova tenda.</p>

<ol>
    <li><strong>Scegli la dimensione della tenda</strong> &mdash; seleziona tra dimensioni standard (60x60, 80x80, 100x100, 120x120 cm ecc.) o inserisci dimensioni personalizzate</li>
    <li><strong>Raccomandazione luce</strong> &mdash; l'app suggerisce luci LED dal database che forniscono una copertura PPFD adeguata per la dimensione della tenda scelta, ordinate per efficienza</li>
    <li><strong>Dimensionamento ventilazione</strong> &mdash; in base al volume della tenda e alla potenza termica della luce selezionata, l'app raccomanda combinazioni ventola-filtro</li>
    <li><strong>Calcolo potenza totale</strong> &mdash; vedrai il consumo totale di tutta l'attrezzatura selezionata e il consumo mensile stimato</li>
    <li><strong>Stima potenza termica</strong> &mdash; il builder calcola il calore totale generato per pianificare il raffreddamento se necessario</li>
    <li><strong>Lista attrezzature</strong> &mdash; rivedi la tua configurazione completa e opzionalmente salvala come profilo attrezzatura</li>
</ol>

<h2>Profili attrezzatura</h2>

<p>I profili attrezzatura (funzione Pro) ti permettono di salvare l'intera configurazione della tenda &mdash; luce, ventola, filtro, sensori, vasi e substrato &mdash; come una configurazione riutilizzabile. Utile quando:</p>

<ul>
    <li><strong>Gestisci più tende</strong> &mdash; ogni tenda ha il suo profilo, così puoi registrare quale attrezzatura è in quale tenda</li>
    <li><strong>Alterni tra coltivazioni</strong> &mdash; quando inizi una nuova coltivazione, seleziona un profilo e tutte le informazioni sull'attrezzatura si precompilano nel diario</li>
    <li><strong>Fai un upgrade</strong> &mdash; confronta il profilo vecchio con quello nuovo per vedere cosa è cambiato</li>
</ul>

<p>I profili attrezzatura sono condivisi tra la scheda Attrezzatura e la scheda Automazione. Quando crei una tenda nella scheda Automazione per gestire dispositivi smart, viene automaticamente creato un profilo attrezzatura. Quando nel diario assegni una coltivazione a quella tenda, le informazioni sull'attrezzatura vengono trasferite.</p>

<h2>Stimatore di resa</h2>

<p>Lo stimatore di resa fornisce una previsione approssimativa di quanto potresti raccogliere, basandosi su diversi fattori:</p>

<ul>
    <li><strong>Potenza della luce</strong> &mdash; il principale motore del potenziale di resa</li>
    <li><strong>Dimensione della tenda</strong> &mdash; superficie disponibile della chioma</li>
    <li><strong>Metodo di coltivazione</strong> &mdash; SOG, ScrOG, mainlining, crescita naturale</li>
    <li><strong>Livello di esperienza</strong> &mdash; lo stimatore aggiusta le aspettative per coltivatori principianti, intermedi e avanzati</li>
</ul>

<p>L'output è una <strong>stima di grammi per watt</strong> e un intervallo di resa totale. Per un setup LED moderno tipico, aspettati 0,5&ndash;1,0 g/W come principiante e 1,0&ndash;1,5+ g/W come coltivatore esperto con condizioni ottimizzate.</p>

<blockquote>
    <strong>Ricorda:</strong> Le stime di resa sono intrinsecamente approssimative. Genetica, controllo VPD, gestione dei nutrienti, tecniche di allenamento e innumerevoli altri fattori influenzano il numero finale. Usa lo stimatore come riferimento generale, non come garanzia. Il predittore più accurato della tua resa sono i tuoi stessi dati del diario dalle colture passate della stessa varietà.
</blockquote>
`
  },

  "vpd-seedling-clone": {
    title: "VPD per piantine e cloni: Come farlo nel modo giusto",
    body: `
<h2>Perché piantine e cloni necessitano di attenzione speciale</h2>
<p>Piantine e cloni appena tagliati rappresentano la fase più vulnerabile di ogni coltivazione. I loro apparati radicali sono sottosviluppati (piantine) o inesistenti (cloni), il che significa che dipendono quasi interamente dalle foglie per assorbire umidità dall'aria circostante. Se l'aria è troppo secca, perdono acqua più velocemente di quanto possano reintegrarla. Se è troppo umida senza circolazione d'aria, un fungo chiamato damping-off può distruggerle durante la notte.</p>
<p>Il VPD &mdash; Vapor Pressure Deficit &mdash; è il singolo numero che cattura la relazione tra temperatura e umidità come la percepisce la pianta. Impostare correttamente il VPD nelle prime 1&ndash;2 settimane getta le basi per una coltivazione sana e vigorosa.</p>

<h2>Intervallo VPD ideale: 0,4&ndash;0,8 kPa</h2>
<p>Per piantine e cloni non radicati, vuoi un VPD tra <strong>0,4 e 0,8 kPa</strong>. Questo è significativamente più basso del 0,8&ndash;1,2 usato in fase vegetativa, perché devi minimizzare la traspirazione finché le radici non riescono a soddisfare la domanda d'acqua.</p>
<p>Ecco combinazioni pratiche di temperatura e umidità che producono un VPD in questo intervallo:</p>
<ul>
    <li><strong>24&deg;C / 75&deg;F a 80% RH</strong> &rarr; VPD ~0,60 kPa (punto ideale)</li>
    <li><strong>25&deg;C / 77&deg;F a 85% RH</strong> &rarr; VPD ~0,48 kPa (buono per cloni freschi)</li>
    <li><strong>23&deg;C / 73&deg;F a 75% RH</strong> &rarr; VPD ~0,70 kPa (limite superiore, piantine con qualche radice)</li>
    <li><strong>26&deg;C / 79&deg;F a 80% RH</strong> &rarr; VPD ~0,67 kPa (stanza calda, ancora sicuro)</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> Usa il grafico VPD in GrowVPD Pro per trovare l'intersezione esatta della tua temperatura e umidità. La zona verde nel grafico cambia in base alla fase di crescita &mdash; seleziona "Piantina/Clone" e vedrai evidenziato l'intervallo target corretto.
</blockquote>

<h2>Cupole di umidità: La tua migliore amica</h2>
<p>Una cupola di umidità è lo strumento più semplice ed efficace per mantenere alta l'umidità intorno a piantine e cloni. Crea un microclima dove l'umidità dal substrato e dalle piante stesse viene trattenuta all'interno, mantenendo l'RH all'80&ndash;90% anche se la tua stanza è al 50&ndash;60%.</p>

<h3>Migliori pratiche per le cupole</h3>
<ul>
    <li><strong>Inizia completamente chiusa.</strong> Per i primi 2&ndash;3 giorni dopo la semina o il taglio dei cloni, mantieni la cupola completamente chiusa per massimizzare l'umidità.</li>
    <li><strong>Apri le ventole gradualmente.</strong> La maggior parte delle cupole di propagazione ha ventole regolabili in alto. Dopo il 3&deg; giorno, aprile leggermente. Entro il 5&deg;&ndash;7&deg; giorno, aprile a metà.</li>
    <li><strong>Rimuovi la cupola in fasi.</strong> Intorno al 7&deg;&ndash;10&deg; giorno (o quando vedi nuove radici nei cloni), rimuovi la cupola per alcune ore al giorno. Entro il 10&deg;&ndash;14&deg; giorno la cupola dovrebbe essere completamente rimossa.</li>
    <li><strong>Pulisci la condensa ogni giorno.</strong> La condensa abbondante che gocciola sulle piantine può causare damping-off. Pulisci l'interno della cupola ogni mattina.</li>
    <li><strong>Evita la luce diretta sulla cupola.</strong> La cupola funziona come una serra. Sotto luce forte, la temperatura interna può salire pericolosamente. Usa intensità luminosa ridotta (200&ndash;300 PPFD) o alza la luce più in alto.</li>
</ul>

<h2>Cloni vs. piantine: Differenze chiave</h2>

<h3>Cloni (talee)</h3>
<p>I cloni non hanno radici quando appena tagliati. Traspirano dalle foglie ma hanno capacità zero di assorbire acqua dal substrato. Questo li rende estremamente sensibili alla bassa umidità.</p>
<ul>
    <li>VPD target: <strong>0,4&ndash;0,6 kPa</strong> (parte bassa dell'intervallo)</li>
    <li>RH: <strong>80&ndash;90%</strong> sotto cupola</li>
    <li>Temperatura: <strong>24&ndash;26&deg;C</strong> (un tappetino riscaldante sotto il vassoio aiuta lo sviluppo radicale)</li>
    <li>Luce: Delicata &mdash; 150&ndash;250 PPFD, programma 18/6</li>
    <li>Nebulizza le foglie 1&ndash;2 volte al giorno se l'RH scende sotto il 75% sotto cupola</li>
</ul>

<h3>Piantine</h3>
<p>Le piantine hanno una piccola radice fittonante fin dall'inizio, quindi sono leggermente meno fragili dei cloni. Il loro apparato radicale è comunque ancora minimo.</p>
<ul>
    <li>VPD target: <strong>0,5&ndash;0,8 kPa</strong></li>
    <li>RH: <strong>70&ndash;80%</strong></li>
    <li>Temperatura: <strong>23&ndash;26&deg;C</strong></li>
    <li>Luce: Media &mdash; 200&ndash;400 PPFD, programma 18/6</li>
    <li>Non annaffiare troppo &mdash; mantieni il substrato umido ma non fradicio</li>
</ul>

<h2>Errori comuni</h2>

<h3>1. Stanza troppo secca senza cupola</h3>
<p>Molti principianti saltano la cupola e si chiedono perché i loro cloni appassiscono e muoiono entro 48 ore. In una grow room tipica al 50&ndash;60% RH e 25&deg;C, il VPD è intorno a 1,2&ndash;1,6 kPa &mdash; decisamente troppo alto per talee senza radici.</p>

<h3>2. Temperatura troppo alta sotto la cupola</h3>
<p>Una cupola chiusa sotto una luce forte può raggiungere 35&deg;C e oltre. Anche al 90% RH, il calore di per sé causa stress, allungamento e danni cellulari. Mantieni la cupola lontana dalla luce intensa diretta e monitora la temperatura interna.</p>

<h3>3. Rimozione della cupola troppo rapida</h3>
<p>Passare dall'85% RH dentro la cupola al 55% RH nella stanza aperta è uno shock. Il VPD salta immediatamente da ~0,5 a ~1,4 kPa. Fai la transizione gradualmente in 3&ndash;5 giorni aprendo progressivamente le ventole e poi rimuovendo la cupola per periodi sempre più lunghi.</p>

<h3>4. Nessun flusso d'aria sotto la cupola</h3>
<p>L'aria stagnante e satura favorisce muffe e damping-off. Un minimo ricambio d'aria &mdash; una ventola leggermente aperta o una rimozione breve giornaliera &mdash; mantiene l'aria sana senza causare un crollo dell'umidità.</p>

<div class="warning-box">
    <strong>Attenzione al damping-off:</strong> Se gli steli delle piantine diventano sottili, traslucidi e collassano alla base, la causa è il fungo damping-off. Prospera in umidità molto alta con scarsa circolazione d'aria. Assicura un po' di ventilazione anche sotto le cupole ed evita di annaffiare troppo.
</div>

<h2>Transizione alla crescita vegetativa</h2>
<p>Quando le piantine hanno 3&ndash;4 set di foglie vere, o i cloni mostrano crescita radicale visibile (di solito 7&ndash;14 giorni), è il momento di passare gradualmente ai target VPD vegetativi di <strong>0,8&ndash;1,2 kPa</strong>.</p>
<p>La transizione deve essere graduale, non improvvisa:</p>
<ol>
    <li><strong>Giorni 10&ndash;12:</strong> Rimuovi la cupola. Abbassa l'RH al 70&ndash;75% aumentando la ventilazione o riducendo la potenza dell'umidificatore.</li>
    <li><strong>Giorni 12&ndash;14:</strong> Abbassa l'RH al 65&ndash;70%. Le piante dovrebbero crescere attivamente e traspirare di più.</li>
    <li><strong>Giorno 14+:</strong> Target 60&ndash;70% RH a 24&ndash;26&deg;C. Il VPD ora dovrebbe essere intorno a 0,9&ndash;1,1 kPa. Aumenta l'intensità luminosa a 400&ndash;600 PPFD.</li>
</ol>

<blockquote>
    <strong>Consiglio:</strong> GrowVPD Pro ti permette di impostare target VPD diversi per ogni fase di crescita. Quando cambi la fase nel diario da "Piantina" a "Vegetativa", il grafico VPD aggiorna automaticamente la fascia target, così sai sempre se sei nell'intervallo giusto.
</blockquote>

<h2>Monitoraggio con GrowVPD Pro</h2>
<p>Il grafico VPD di GrowVPD Pro calcola il VPD in tempo reale dai dati del tuo sensore. Per piantine e cloni il procedimento è semplice:</p>
<ul>
    <li>Posiziona il sensore di temperatura/umidità all'interno della cupola o del vassoio di propagazione, a livello della chioma.</li>
    <li>Imposta la fase di crescita su "Piantina" o "Clone" affinché il grafico evidenzi la zona VPD target corretta.</li>
    <li>Se usi l'automazione smart, crea una regola: quando il VPD sale sopra 0,8, accendi l'umidificatore. Quando il VPD scende sotto 0,4, spegnilo. Questo mantiene le tue piantine nella zona perfetta 24/7.</li>
    <li>Registra le letture giornaliere nel diario per tracciare quanto velocemente l'ambiente si stabilizza.</li>
</ul>
`
  },

  "vpd-flowering": {
    title: "VPD durante la fioritura: Previeni il marciume e massimizza il raccolto",
    body: `
<h2>Perché la fioritura richiede un VPD più alto</h2>
<p>Durante la fioritura, le cime dense creano sacche di umidità intrappolata tra i calici e le foglioline zuccherate. Se l'umidità relativa resta troppo alta, l'acqua si condensa all'interno di queste cime dove il flusso d'aria non riesce a raggiungerle. Il risultato è la <strong>botrytis</strong> (marciume delle cime) &mdash; muffa grigia che può distruggere settimane di lavoro in pochi giorni.</p>
<p>Un VPD più alto significa aria più secca che tira l'umidità dalle cime e attraverso gli stomi fogliari più velocemente. Questo mantiene asciutto l'ambiente interno delle cime permettendo allo stesso tempo alla pianta di traspirare e trasportare i nutrienti. La sfida è trovare l'equilibrio: abbastanza secco da prevenire la muffa, ma non così secco da far chiudere gli stomi e bloccare la crescita.</p>

<h2>VPD ideale per settimana di fioritura</h2>
<p>La fioritura non è un'unica fase statica. I target VPD dovrebbero cambiare man mano che le cime si sviluppano:</p>

<h3>Fioritura precoce (settimane 1&ndash;3): Fase di stretch</h3>
<ul>
    <li><strong>VPD target:</strong> 1,0&ndash;1,3 kPa</li>
    <li><strong>Temperatura:</strong> 24&ndash;27&deg;C (75&ndash;80&deg;F)</li>
    <li><strong>Umidità:</strong> 55&ndash;65% RH</li>
    <li>Le piante si stanno ancora allungando e crescendo rapidamente. Hanno bisogno di una traspirazione attiva per trasportare i nutrienti a tutti i nuovi punti di crescita. Un VPD moderato mantiene la crescita vigorosa.</li>
</ul>

<h3>Fioritura media (settimane 3&ndash;6): Sviluppo delle cime</h3>
<ul>
    <li><strong>VPD target:</strong> 1,2&ndash;1,5 kPa</li>
    <li><strong>Temperatura:</strong> 23&ndash;26&deg;C (73&ndash;79&deg;F)</li>
    <li><strong>Umidità:</strong> 45&ndash;55% RH</li>
    <li>Le cime si ingrossano e si addensano. Questo è il momento in cui il rischio di marciume inizia a crescere. Abbassa l'umidità e mantieni le temperature moderate. Temperature leggermente più basse aiutano anche a preservare i terpeni.</li>
</ul>

<h3>Fioritura tardiva (settimane 6&ndash;9+): Maturazione e rifinitura</h3>
<ul>
    <li><strong>VPD target:</strong> 1,3&ndash;1,6 kPa</li>
    <li><strong>Temperatura:</strong> 21&ndash;24&deg;C (70&ndash;75&deg;F)</li>
    <li><strong>Umidità:</strong> 40&ndash;50% RH</li>
    <li>Prevenzione massima del marciume. Le cime sono al massimo della densità. Abbassa sia la temperatura che l'umidità. Temperature più fresche favoriscono la produzione di antocianine (colori viola) e preservano i terpeni volatili che evaporano a temperature più alte.</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> In GrowVPD Pro, cambia la fase di crescita ogni settimana nell'annotazione del diario. Il grafico VPD aggiorna automaticamente la fascia target e ti mostra esattamente dove dovresti essere in ogni fase della fioritura.
</blockquote>

<h2>Il problema della botrytis</h2>
<p>Botrytis cinerea (marciume delle cime) è una delle più grandi minacce ambientali durante la fioritura. Entra attraverso tessuti morti o morenti &mdash; una foglia secca intrappolata dentro una cola densa è il punto di ingresso perfetto.</p>

<h3>Condizioni che favoriscono il marciume delle cime</h3>
<ul>
    <li>Umidità sopra il 60% durante la fioritura media e tardiva</li>
    <li>Scarsa circolazione d'aria, specialmente all'interno della chioma</li>
    <li>Grandi sbalzi di temperatura tra luci accese e spente (si forma condensa)</li>
    <li>Cole dense con foglie morte intrappolate all'interno</li>
    <li>Acqua stagnante sulle cime (spray fogliare durante la fioritura è rischioso)</li>
</ul>

<div class="warning-box">
    <strong>Critico:</strong> Durante la fioritura, non spruzzare mai acqua o nutrienti fogliari sulle cime. L'umidità intrappolata dentro le cime dense non evapora velocemente e crea condizioni perfette per la botrytis indipendentemente dal VPD della stanza.
</div>

<h2>Gestire il VPD senza stressare le piante</h2>
<p>Spingere il VPD troppo in alto (sopra 1,6 kPa) causa i suoi problemi. La pianta chiude gli stomi per risparmiare acqua, fermando traspirazione, trasporto dei nutrienti e fotosintesi. I bordi delle foglie si arricciano verso l'alto (formando un "taco"), e la crescita rallenta.</p>

<h3>Strategie per una gestione sicura del VPD</h3>
<ul>
    <li><strong>Dimensionamento del deumidificatore:</strong> Il deumidificatore deve essere abbastanza potente per il volume della tenda e il numero di piante. Una tenda 120x120 cm con 4 piante grandi in piena fioritura può traspirare 3&ndash;6 litri d'acqua al giorno.</li>
    <li><strong>Circolazione d'aria:</strong> Ventole oscillanti dentro la tenda mantengono l'aria in movimento attraverso la chioma e prevengono sacche di umidità. Non puntare le ventole direttamente sulle cime &mdash; usa flusso indiretto.</li>
    <li><strong>Controllo dell'estrazione:</strong> La ventola in-line dovrebbe funzionare continuamente o in cicli brevi. Il ricambio d'aria fresca sostituisce l'aria umida nella tenda con aria esterna più secca.</li>
    <li><strong>Gestione notturna:</strong> Quando le luci si spengono, la temperatura scende ma le piante rilasciano umidità per altri 30&ndash;60 minuti. È allora che l'RH schizza in alto e il rischio di marciume è al picco. Fai funzionare il deumidificatore con un timer che si sovrappone allo spegnimento delle luci di almeno 30 minuti.</li>
    <li><strong>Rimboccamento foglie e defogliazione:</strong> Rimuovere le grandi foglie a ventaglio che ombreggliano le cime migliora il flusso d'aria e riduce la superficie di traspirazione, abbassando naturalmente l'umidità della tenda.</li>
</ul>

<h2>Il problema del picco notturno</h2>
<p>Il momento più pericoloso per il marciume delle cime è la prima ora dopo lo spegnimento delle luci. La temperatura scende rapidamente (le luci producono calore significativo), ma l'umidità non cala altrettanto velocemente. Il VPD crolla, a volte a 0,5&ndash;0,7 kPa, anche quando era 1,4 kPa con le luci accese.</p>
<p>Soluzioni:</p>
<ol>
    <li><strong>Deumidificatore 24/7</strong> durante la fioritura tardiva, non solo durante le luci accese.</li>
    <li><strong>Piccolo riscaldatore</strong> per rallentare leggermente il calo di temperatura notturno. Mantenere la temperatura anche solo 2&ndash;3&deg;C più alta di quanto cadrebbe naturalmente ha un grande impatto sul VPD.</li>
    <li><strong>Sfalsare lo spegnimento delle luci</strong> in setup multi-tenda per non sovraccaricare il sistema di estrazione.</li>
    <li><strong>Automatizzare con GrowVPD Pro:</strong> Imposta una regola basata sul VPD che attiva il deumidificatore quando il VPD scende sotto 1,1 kPa e lo spegne quando supera 1,5 kPa.</li>
</ol>

<h2>Checklist: configurazione climatica per la fioritura</h2>
<ul>
    <li>Deumidificatore dimensionato per il volume della tenda (minimo 20 L/giorno per tenda 120x120)</li>
    <li>Ventole oscillanti che forniscono flusso d'aria indiretto attraverso la chioma</li>
    <li>Estrazione in-line in funzione continua o in cicli 5 min on / 5 min off</li>
    <li>Sensore temperatura/umidità a livello della chioma (non vicino alle luci o alle pareti)</li>
    <li>Target VPD che si aggiusta settimanalmente con lo sviluppo delle cime</li>
    <li>Strategia per l'umidità notturna (deumidificatore che copre lo spegnimento delle luci)</li>
    <li>Controllo regolare delle cime per segni precoci di muffa grigia</li>
</ul>
`
  },

  "night-temperature-vpd": {
    title: "Temperatura notturna e VPD: Il fattore trascurato",
    body: `
<h2>Il differenziale di temperatura giorno/notte</h2>
<p>La maggior parte dei coltivatori si ossessiona con il VPD diurno ma ignora completamente cosa succede quando le luci si spengono. Questo è un errore critico. Il <strong>differenziale di temperatura giorno/notte</strong> &mdash; comunemente chiamato DIF &mdash; influenza direttamente l'allungamento delle piante, l'espressione del colore, la conservazione dei terpeni e il rischio di malattie.</p>
<p>Quando le luci si spengono, la fonte di calore scompare, ma le piante continuano a traspirare per altri 30&ndash;60 minuti. La temperatura scende, l'umidità sale e il VPD crolla. Comprendere e gestire questa transizione è ciò che distingue i buoni coltivatori da quelli eccezionali.</p>

<h2>Come il DIF influenza le piante</h2>

<h3>Allungamento degli steli (distanza internodale)</h3>
<p>La ricerca mostra costantemente che la differenza tra temperature diurne e notturne influenza la lunghezza degli internodi più di entrambe le temperature singolarmente:</p>
<ul>
    <li><strong>DIF positivo</strong> (giorno più caldo di 5&ndash;10&deg;C rispetto alla notte): promuove l'allungamento. Internodi più lunghi, piante più alte. Utile nella vegetativa precoce se vuoi crescita verticale rapida.</li>
    <li><strong>DIF zero</strong> (giorno e notte alla stessa temperatura): crescita moderata ed equilibrata.</li>
    <li><strong>DIF negativo</strong> (notte più calda di 2&ndash;4&deg;C rispetto al giorno): riduce l'allungamento, produce piante compatte con internodi corti. Alcuni coltivatori avanzati usano questa tecnica nelle prime 2 settimane di fioritura per minimizzare la fase di stretch.</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> GrowVPD Pro registra sia la temperatura diurna che notturna in ogni annotazione del diario. Nel tempo puoi correlare le tue impostazioni DIF con i dati sull'altezza delle piante e trovare il differenziale ottimale per la tua genetica.
</blockquote>

<h3>Espressione del colore (antocianine)</h3>
<p>I colori viola, blu e scuri nelle piante sono causati da pigmenti antocianici. Questi pigmenti sono attivati da <strong>temperature notturne fresche</strong>, tipicamente sotto i 18&deg;C (64&deg;F). Se stai coltivando varietà con genetica viola, un calo notturno a 15&ndash;18&deg;C durante le ultime 2&ndash;3 settimane di fioritura intensifica drammaticamente l'espressione del colore.</p>
<p>Sotto i 15&deg;C, però, rischi di rallentare i processi metabolici e stressare la pianta. Il punto ideale per il colore senza stress è 16&ndash;18&deg;C di notte.</p>

<h3>Conservazione dei terpeni</h3>
<p>I terpeni sono composti aromatici volatili che evaporano a temperature più alte. I terpeni più sensibili (linalolo, mircene, terpinolene) iniziano ad evaporare sopra i 25&deg;C. Mantenendo le temperature notturne a 18&ndash;21&deg;C, riduci la perdita di terpeni durante le 12 ore di buio.</p>
<p>Alcuni coltivatori nell'ultima settimana di fioritura abbassano anche le temperature diurne a 22&ndash;24&deg;C per la massima conservazione dei terpeni, accettando una fotosintesi leggermente ridotta in cambio di un migliore aroma e sapore.</p>

<h2>Temperatura notturna ideale per fase di crescita</h2>

<h3>Fase piantina/clone</h3>
<ul>
    <li><strong>Giorno:</strong> 24&ndash;26&deg;C</li>
    <li><strong>Notte:</strong> 22&ndash;24&deg;C</li>
    <li><strong>DIF:</strong> calo di 2&ndash;3&deg;C</li>
    <li>Minima oscillazione termica. Piantine e cloni sono fragili e beneficiano della stabilità.</li>
</ul>

<h3>Fase vegetativa</h3>
<ul>
    <li><strong>Giorno:</strong> 24&ndash;28&deg;C</li>
    <li><strong>Notte:</strong> 20&ndash;23&deg;C</li>
    <li><strong>DIF:</strong> calo di 3&ndash;5&deg;C</li>
    <li>Un DIF moderato favorisce una crescita sana. Evita temperature notturne sotto i 18&deg;C in vegetativa perché rallenta lo sviluppo radicale.</li>
</ul>

<h3>Fase fioritura</h3>
<ul>
    <li><strong>Giorno:</strong> 23&ndash;26&deg;C</li>
    <li><strong>Notte:</strong> 18&ndash;21&deg;C</li>
    <li><strong>DIF:</strong> calo di 4&ndash;6&deg;C</li>
    <li>Questo intervallo bilancia lo sviluppo delle cime, la conservazione dei terpeni e l'espressione del colore. Nelle ultime 2 settimane puoi abbassare le temperature notturne a 16&ndash;18&deg;C per intensificare i colori.</li>
</ul>

<div class="warning-box">
    <strong>Avvertenza:</strong> Un calo notturno maggiore di 8&ndash;10&deg;C può causare condensazione sulla superficie delle piante e all'interno delle cime. Questo aumenta drasticamente il rischio di marciume. Accompagna sempre grandi cali di temperatura con deumidificazione attiva.
</div>

<h2>Il crollo del VPD allo spegnimento delle luci</h2>
<p>Ecco cosa succede in una tenda tipica quando le luci si spengono alle 20:00:</p>
<ul>
    <li><strong>20:00:</strong> Luci spente. Temperatura 26&deg;C, RH 55%, VPD = 1,53 kPa</li>
    <li><strong>20:30:</strong> La temperatura scende a 23&deg;C. Le piante traspirano ancora. L'RH sale al 68%. VPD = 0,90 kPa</li>
    <li><strong>21:00:</strong> La temperatura si stabilizza a 21&deg;C. L'RH raggiunge il picco al 75%. VPD = 0,62 kPa</li>
    <li><strong>22:00:</strong> La traspirazione rallenta. L'RH scende al 70%. VPD = 0,74 kPa</li>
</ul>
<p>In un'ora il VPD è crollato da un sano 1,53 a un pericoloso 0,62 &mdash; ben dentro la zona di rischio marciume. Questo crollo notturno del VPD è il motivo per cui molti coltivatori perdono cole per la botrytis, anche quando le condizioni diurne sembrano perfette.</p>

<h2>Strategie per la gestione del VPD notturno</h2>

<h3>1. Deumidificatore 24/7</h3>
<p>Non mettere il deumidificatore su un timer sincronizzato con le luci. Deve lavorare più duramente nei primi 60 minuti dopo lo spegnimento delle luci &mdash; esattamente quando la maggior parte dei coltivatori lo spegne.</p>

<h3>2. Piccolo riscaldatore con termostato</h3>
<p>Un riscaldatore controllato da termostato impostato per mantenere 20&ndash;21&deg;C previene il crollo della temperatura mantenendo il calo notturno nell'intervallo benefico di 4&ndash;5&deg;C. Questo da solo può mantenere il VPD sopra 1,0 kPa di notte.</p>

<h3>3. Automatizzare con regole basate sul VPD</h3>
<p>In GrowVPD Pro, crea regole di automazione che reagiscono direttamente al VPD, non solo alla temperatura o all'umidità:</p>
<ul>
    <li>Se il VPD scende sotto 1,0 kPa, accendi il deumidificatore E il riscaldatore</li>
    <li>Se il VPD sale sopra 1,5 kPa, spegni il riscaldatore</li>
    <li>Se la temperatura scende sotto 18&deg;C, accendi il riscaldatore indipendentemente dal VPD</li>
</ul>

<h3>4. Sfalsare i programmi delle luci</h3>
<p>Se gestisci più tende sullo stesso sistema di estrazione, sfasa i loro programmi di luce di 2&ndash;4 ore. In questo modo non avrai mai tutte le tende che rilasciano umidità allo spegnimento delle luci contemporaneamente.</p>

<blockquote>
    <strong>Consiglio:</strong> GrowVPD Pro registra la temperatura notturna separatamente dalla temperatura diurna in ogni annotazione del diario. Controlla i tuoi dati settimanalmente per vedere se il tuo VPD notturno è costantemente nell'intervallo o se devi modificare la tua configurazione.
</blockquote>

<h2>Setup di monitoraggio</h2>
<p>Per tracciare correttamente i differenziali giorno/notte hai bisogno di un sensore che registri continuamente, non solo letture puntuali quando controlli la tenda:</p>
<ul>
    <li>Usa un sensore WiFi (Tuya, AC Infinity) che riporta a GrowVPD Pro ogni 15 minuti</li>
    <li>Posiziona il sensore all'altezza della chioma, lontano dalla parete e non direttamente sotto la luce</li>
    <li>Controlla le letture min/max ogni mattina per scoprire gli estremi notturni</li>
    <li>Usa la cronologia del grafico VPD per identificare pattern e regolare la configurazione</li>
</ul>
`
  },

  "humidity-control-guide": {
    title: "Come controllare l'umidità nella tua stanza di coltivazione",
    body: `
<h2>Perché il controllo dell'umidità è importante</h2>
<p>L'umidità è metà dell'equazione VPD, ed è la metà con cui la maggior parte dei coltivatori fatica. La temperatura è relativamente facile da controllare &mdash; le luci producono calore e la maggior parte delle stanze ha un comportamento termico prevedibile. L'umidità invece cambia costantemente man mano che le piante traspirano, l'acqua evapora dal substrato e l'aria fresca viene scambiata.</p>
<p>Un controllo scadente dell'umidità porta a oscillazioni del VPD che stressano le piante, favoriscono le malattie e riducono i raccolti. Una tenda che oscilla tra il 40% e l'80% RH durante il giorno non raggiungerà mai una crescita ottimale, indipendentemente da quanto sia perfetto tutto il resto.</p>

<h2>Umidificatori: Quando hai bisogno di più umidità</h2>
<p>Hai generalmente bisogno di un umidificatore in questi scenari:</p>
<ul>
    <li><strong>Fase piantina/clone</strong>, quando hai bisogno del 75&ndash;85% RH ma la tua stanza è al 40&ndash;55%</li>
    <li><strong>Climi secchi</strong> (zone aride, stanze riscaldate in inverno) dove l'RH ambiente è costantemente sotto il 40%</li>
    <li><strong>Piccole tende con forte estrazione</strong> che rimuovono umidità più velocemente di quanto le piante la producano</li>
    <li><strong>Vegetativa precoce</strong> quando le piante giovani non traspirano ancora abbastanza per alzare l'umidità della tenda</li>
</ul>

<h3>Tipi di umidificatori</h3>
<ul>
    <li><strong>Ultrasonico (nebbia fredda):</strong> La scelta più comune per le grow room. Produce una nebbia fine tramite vibrazioni ultrasoniche. Pro: economico, silenzioso, output regolabile. Contro: può lasciare polvere minerale bianca sulle foglie se usi acqua dura (usa acqua distillata o osmosi inversa).</li>
    <li><strong>Evaporativo:</strong> Usa una ventola per soffiare aria attraverso uno stoppino bagnato. Pro: nessuna polvere minerale, autoregolante (l'output cala con l'aumento dell'RH). Contro: ingombrante, gli stoppini richiedono sostituzione regolare, risposta più lenta.</li>
    <li><strong>A vapore (nebbia calda):</strong> Riscalda l'acqua per produrre vapore. Pro: nessun minerale nell'output, uccide i batteri. Contro: aggiunge calore alla stanza, consumo energetico più alto, non ideale per coltivazioni che già funzionano calde.</li>
</ul>

<h3>Dimensionamento dell'umidificatore</h3>
<p>Adatta l'output dell'umidificatore al volume della tenda e all'aumento di RH target:</p>
<ul>
    <li><strong>Tenda 60x60 cm (0,2 m3):</strong> Un piccolo umidificatore da 1&ndash;2 L/giorno è sufficiente</li>
    <li><strong>Tenda 120x120 cm (1,7 m3):</strong> Output 3&ndash;5 L/giorno per alzare l'RH del 15&ndash;20%</li>
    <li><strong>Tenda 240x120 cm (3,5 m3):</strong> 6&ndash;10 L/giorno o due unità più piccole</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> Posiziona l'umidificatore fuori dalla tenda e convoglia la nebbia dentro attraverso un ingresso passivo. Questo impedisce alle gocce d'acqua di cadere direttamente sulle foglie e previene depositi minerali sulla superficie delle piante.
</blockquote>

<h2>Deumidificatori: Quando hai bisogno di meno umidità</h2>
<p>La deumidificazione diventa critica durante:</p>
<ul>
    <li><strong>Fioritura</strong>, quando piante adulte traspirano fortemente e le cime sono suscettibili alla muffa</li>
    <li><strong>Climi umidi</strong> dove l'RH ambiente è già al 60&ndash;80%</li>
    <li><strong>Notte</strong>, quando la temperatura scende e l'RH schizza in alto</li>
    <li><strong>Molte piante</strong> la cui traspirazione combinata sovraccaricare il sistema di estrazione</li>
</ul>

<h3>Tipi di deumidificatori</h3>
<ul>
    <li><strong>A compressore (refrigerante):</strong> Scelta standard. Aspira l'aria attraverso scambiatori freddi e condensa l'umidità. Pro: efficiente, ampiamente disponibile, buona capacità. Contro: aggiunge calore alla stanza, ha problemi sotto i 15&deg;C.</li>
    <li><strong>A essiccante (adsorbimento):</strong> Usa materiale essiccante per assorbire l'umidità, poi lo riscalda per rilasciare l'acqua nel serbatoio. Pro: funziona bene a basse temperature (sotto 15&deg;C), silenzioso. Contro: più costoso, consumo energetico più alto, aggiunge ancora più calore dei modelli a compressore.</li>
</ul>

<h3>Dimensionamento del deumidificatore</h3>
<p>Le piante in piena fioritura traspirano più acqua di quanto la maggior parte dei coltivatori si aspetti. Una singola pianta grande può rilasciare 1&ndash;2 litri d'acqua al giorno dalle foglie.</p>
<ul>
    <li><strong>Tenda 120x120 cm, 4 piante in fioritura:</strong> Capacità minima del deumidificatore 10&ndash;15 L/giorno</li>
    <li><strong>Tenda 240x120 cm, 8 piante in fioritura:</strong> Capacità 20&ndash;30 L/giorno</li>
    <li><strong>Stanza intera (4x4 m e oltre):</strong> Unità commerciale 30&ndash;50 L/giorno</li>
</ul>

<div class="warning-box">
    <strong>Importante:</strong> Le specifiche dei deumidificatori sono tipicamente misurate a 30&deg;C e 80% RH. L'estrazione reale a 23&deg;C e 60% RH è spesso il 40&ndash;60% della capacità nominale. Compra sempre più grande di quello che pensi ti serva.
</div>

<h2>Automazione basata sul VPD</h2>
<p>Il controllo dell'umidità più efficace usa il VPD come trigger, non i valori di umidità grezzi. Questo perché la stessa percentuale di umidità produce valori VPD molto diversi a temperature diverse.</p>
<p>Per esempio, 60% RH a 20&deg;C dà VPD = 0,93 kPa, ma 60% RH a 28&deg;C dà VPD = 1,51 kPa. Controllare l'umidità su una percentuale fissa ignora la temperatura e manca il bersaglio.</p>

<h3>Configurare l'automazione VPD in GrowVPD Pro</h3>
<ol>
    <li>Collega il tuo sensore di temperatura/umidità (Tuya, AC Infinity o BLE)</li>
    <li>Collega umidificatore e deumidificatore a prese smart</li>
    <li>Crea due regole di automazione:
        <ul>
            <li><strong>Regola 1:</strong> Se il VPD scende sotto il minimo target (es. 0,8 kPa in vegetativa), accendi il deumidificatore. Spegnilo quando il VPD risale sopra il minimo + isteresi (es. 0,9 kPa).</li>
            <li><strong>Regola 2:</strong> Se il VPD sale sopra il massimo target (es. 1,3 kPa in vegetativa), accendi l'umidificatore. Spegnilo quando il VPD riscende sotto il massimo - isteresi (es. 1,2 kPa).</li>
        </ul>
    </li>
    <li>Imposta tempi minimi di spegnimento (5&ndash;10 minuti) per prevenire cicli rapidi che accorciano la vita dei dispositivi</li>
</ol>

<h2>Consigli DIY per coltivatori con budget limitato</h2>

<h3>Aumentare l'umidità con poco</h3>
<ul>
    <li><strong>Metodo dell'asciugamano bagnato:</strong> Appendi un asciugamano bagnato vicino all'ingresso passivo. L'aria che passa evapora l'acqua dall'asciugamano. Sostituisci o ri-inumidisci ogni 8&ndash;12 ore.</li>
    <li><strong>Contenitori aperti d'acqua:</strong> Posiziona vassoi d'acqua dentro la tenda. L'evaporazione alza lentamente l'RH.</li>
    <li><strong>Riduci la velocità di estrazione:</strong> Rallentare la ventola permette alla traspirazione delle piante di accumularsi, alzando l'umidità. Attenzione all'accumulo di calore.</li>
</ul>

<h3>Diminuire l'umidità con poco</h3>
<ul>
    <li><strong>Aumenta la velocità di estrazione:</strong> Se l'aria esterna è più secca, aumentare la ventola scambia l'aria umida con quella secca.</li>
    <li><strong>Contenitori di cloruro di calcio:</strong> Contenitori essiccanti passivi che assorbono l'umidità dall'aria. Funzionano ma hanno capacità limitata &mdash; buoni solo per tende piccole.</li>
    <li><strong>Defogliazione:</strong> Rimuovere le foglie in eccesso riduce la superficie di traspirazione, riducendo l'acqua immessa nell'aria.</li>
</ul>

<h2>Riferimento rapido per fase</h2>
<ul>
    <li><strong>Piantine/cloni:</strong> Cupola + piccolo umidificatore (se la stanza è molto secca)</li>
    <li><strong>Vegetativa:</strong> Umidificatore O controllo estrazione (target 60&ndash;70% RH)</li>
    <li><strong>Fioritura precoce:</strong> Deumidificatore in standby, ventola di estrazione come controllo primario (target 50&ndash;60% RH)</li>
    <li><strong>Fioritura tardiva:</strong> Deumidificatore 24/7, forte estrazione (target 40&ndash;50% RH)</li>
</ul>
`
  },

  "cross-brand-automation": {
    title: "Automazione cross-brand: Combinare Tuya, Mars Hydro e altri",
    body: `
<h2>Il problema: ecosistemi chiusi</h2>
<p>Ogni marchio di attrezzatura da coltivazione fornisce la propria app, il proprio cloud e il proprio sistema di automazione. MarsPro, AC Infinity, Vivosun Grow, Spider Farmer e il portale Bluelab Edenic sono tutti ottimi per il proprio hardware &mdash; ma non si vedono reciprocamente e nessuno di loro vede il diario di coltivazione dove effettivamente tracci quello che succede alle tue piante.</p>
<p>Ai coltivatori restano due opzioni scadenti: legarsi a un ecosistema (perdendo l'accesso alla migliore attrezzatura degli altri), oppure gestire quattro o cinque app con coordinamento manuale tra di esse (il che vanifica lo scopo dell'automazione).</p>

<h2>La soluzione: GrowVPD Pro come livello comune</h2>
<p>GrowVPD Pro si autentica su ogni piattaforma con le tue credenziali e unifica tutti i dispositivi in una singola gerarchia stanza/tenda. Ogni marchio continua a fare ciò che sa fare meglio &mdash; Mars Hydro passa ancora dal cloud Mars Hydro, AC Infinity funziona ancora via UIS, Bluelab pubblica ancora via Edenic &mdash; ma ora li vedi fianco a fianco, li registri nello stesso diario e scrivi regole che mischiano i marchi dove è realmente utile.</p>
<p>Piattaforme supportate:</p>
<ul>
    <li><strong>AC Infinity</strong> &mdash; Controller 69/89 Pro, ventole Cloudline, clip fan (cavo UIS + cloud)</li>
    <li><strong>Mars Hydro</strong> &mdash; LED driver iConnect, ventole iHub, clip fan (WiFi + MQTT cloud)</li>
    <li><strong>Spider Farmer</strong> &mdash; LED driver, ventole, sensori (WiFi + MQTT cloud)</li>
    <li><strong>Vivosun</strong> &mdash; GrowHub (CO2, temperatura, RH), prese smart, LED (cloud)</li>
    <li><strong>Bluelab</strong> &mdash; Pulse misuratore zona radicale (pH, EC, temperatura) via Edenic cloud, solo lettura</li>
    <li><strong>SANlight</strong> &mdash; LED Bluetooth Mesh, dimmerazione opzionale 0&ndash;10V via AC Infinity</li>
    <li><strong>Tuya / Smart Life</strong> &mdash; sensori WiFi / Zigbee, prese smart, telecamere, dimmer, climatizzatori, valvole irrigazione</li>
</ul>

<h2>Scenari realistici</h2>

<h3>Scenario 1: Controller AC Infinity che gestisce la propria ventola (stesso brand)</h3>
<p>Il Controller 69/89 Pro di AC Infinity è progettato esattamente per questo: legge la propria sonda di temperatura/RH, calcola il VPD in tempo reale e regola finemente la ventola Cloudline via cavo UIS. Il compito di GrowVPD Pro qui non è reinventare questo loop &mdash; è gestirlo insieme alle tue altre tende, registrare tutto nel diario e permetterti di impostare i target VPD per ogni fase da un unico posto invece che dall'app AC Infinity.</p>

<h3>Scenario 2: Qualsiasi sensore &rarr; presa Tuya &rarr; stufa base</h3>
<p>Qui il cross-brand dà il meglio di sé. Il tuo sensore può essere qualsiasi cosa di cui ti fidi &mdash; sonda AC Infinity, lettura dal Bluelab Pulse, SwitchBot, sensore Zigbee Tuya economico. L'attuatore è una noiosa presa smart Tuya con una normale stufa a olio collegata. La presa è solo un interruttore semplice in mezzo; GrowVPD Pro è il cervello.</p>
<ul>
    <li><strong>Sensore:</strong> qualsiasi sensore di temperatura di cui ti fidi</li>
    <li><strong>Condizione:</strong> temperatura &lt; 18&deg;C, solo ore senza luce</li>
    <li><strong>Target:</strong> presa smart Tuya che alimenta la stufa</li>
    <li><strong>Isteresi:</strong> 2&deg;C (si spegne a 20&deg;C)</li>
    <li><strong>Tempo minimo spegnimento:</strong> 10 min per proteggere il termostato della stufa dal ciclaggio rapido</li>
</ul>

<h3>Scenario 3: Bluelab Pulse &rarr; allerta di deriva pH (solo notifica)</h3>
<p>Questo è intenzionalmente <em>non</em> automatizzato sul lato dell'attuatore. La correzione del pH nella zona radicale è il punto dove gli errori danneggiano le piante più rapidamente &mdash; un dosaggio bloccato o una lettura rumorosa possono causare danni reali. Quindi GrowVPD Pro monitora il Bluelab Pulse via il cloud Edenic e ti invia una notifica con la lettura e la fase attuale quando esce dall'intervallo. La decisione sul dosaggio resta tua.</p>

<h3>Scenario 4: Registrazione unificata nel diario e timelapse telecamera</h3>
<p>Ogni sensore connesso di ogni marchio &mdash; sonda AC Infinity, Vivosun GrowHub, Bluelab Pulse, sensori Tuya &mdash; scrive nello stesso diario di coltivazione ogni 15 minuti. Le telecamere (Tuya, ONVIF/RTSP) salvano snapshot automatici sulla stessa cronologia. Una tenda, un diario, ogni marchio.</p>

<blockquote>
    <strong>Punto chiave:</strong> GrowVPD Pro non forza l'automazione cross-brand dove un singolo marchio è più pulito. Le regole all'interno di un singolo marchio (controller AC Infinity &rarr; propria ventola, Vivosun GrowHub &rarr; propria presa) sono le più pulite e sicure perché il controller è progettato per quel loop. L'automazione cross-brand brilla quando vuoi che una presa Tuya neutrale reagisca a qualsiasi sensore, o quando un sensore di cui ti fidi non ha i propri attuatori.
</blockquote>

<h2>Perché è importante per i coltivatori</h2>

<h3>Compra la migliore attrezzatura per ogni compito</h3>
<p>Con GrowVPD Pro sopra gli ecosistemi, puoi scegliere il miglior strumento per ogni ruolo:</p>
<ul>
    <li>I migliori controller climatici (AC Infinity Controller 69/89 Pro, Vivosun GrowHub)</li>
    <li>Le migliori luci LED (Mars Hydro, Spider Farmer, Vivosun, SANlight)</li>
    <li>Sensori precisi della zona radicale (Bluelab Pulse via Edenic)</li>
    <li>Interruttori neutri economici e affidabili per dispositivi non smart (prese Tuya)</li>
    <li>Telecamere adatte al tuo setup (Tuya, IP camera ONVIF/RTSP)</li>
</ul>
<p>Combina per prezzo, prestazioni e disponibilità &mdash; non per lock-in dell'ecosistema.</p>

<h3>Un'unica vista per tutto</h3>
<p>Invece di passare tra MarsPro, AC Infinity, Vivosun Grow, Edenic e qualsiasi altra app tu abbia, è tutto in un posto. Un grafico VPD, una lista di regole di automazione, un tracker energetico, un diario. Ogni dispositivo di ogni marchio vive nella scheda Automazione sotto la stanza e tenda a cui appartiene.</p>

<h2>Configurazione dell'automazione cross-brand</h2>
<ol>
    <li><strong>Collega tutti i tuoi account piattaforma</strong> in Impostazioni &gt; Account collegati. AC Infinity, Mars Hydro, Spider Farmer, Vivosun, Bluelab e Tuya possono essere tutti collegati fianco a fianco.</li>
    <li><strong>Scopri i dispositivi</strong> da ogni piattaforma nella scheda Automazione. Ogni marchio appare in un'unica lista di scoperta comune.</li>
    <li><strong>Organizza in stanze e tende.</strong> Una singola tenda può combinare dispositivi da più piattaforme.</li>
    <li><strong>Crea regole di automazione.</strong> Quando crei una regola, il menu a tendina dei sensori mostra tutti i sensori cross-brand e il menu target mostra tutti i dispositivi controllabili.</li>
    <li><strong>L'engine di automazione fa il resto.</strong> Ogni 15 minuti interroga i sensori (via AutomationWorker), valuta le regole e invia comandi all'API corretta della piattaforma per ogni dispositivo target.</li>
</ol>

<div class="warning-box">
    <strong>Nota:</strong> L'automazione cross-brand richiede un abbonamento Pro. Tutte le connessioni alle piattaforme e le regole di automazione sono funzioni Pro. La versione gratuita mostra i dati dei dispositivi in modalità demo con dati di esempio.
</div>
`
  },

  "automation-troubleshooting": {
    title: "Guida alla risoluzione dei problemi di automazione smart",
    body: `
<h2>Problema 1: Dispositivo mostra "Offline"</h2>
<p>Questo è il problema più comune. Il dispositivo appare in GrowVPD Pro ma mostra un badge grigio "Offline" e non risponde ai comandi.</p>

<h3>Risoluzione passo per passo</h3>
<ol>
    <li><strong>Controlla l'alimentazione fisica.</strong> Il dispositivo è collegato e alimentato? Il LED è acceso? Sembra ovvio, ma le ciabatte si staccano e i salvavita scattano.</li>
    <li><strong>Controlla la connessione WiFi.</strong> Apri l'app nativa del dispositivo (Tuya, AC Infinity, Mars Hydro) e verifica se il dispositivo appare online anche lì. Se è offline anche nella sua app, il problema è tra il dispositivo e il router WiFi, non in GrowVPD Pro.</li>
    <li><strong>Riavvia il dispositivo.</strong> Scollega, attendi 10 secondi, ricollega. Molti dispositivi WiFi necessitano di 30&ndash;60 secondi per riconnettersi al cloud dopo l'accensione.</li>
    <li><strong>Controlla il router.</strong> Alcuni router hanno limiti sul numero di dispositivi o disconnettono i dispositivi inattivi. Assicurati che il tuo router gestisca il numero di dispositivi smart che possiedi. Le grow room con 5&ndash;10 dispositivi smart possono spingere i router consumer ai loro limiti.</li>
    <li><strong>Verifica la banda WiFi.</strong> La maggior parte dei dispositivi smart da coltivazione supporta solo WiFi 2,4 GHz, non 5 GHz. Se il tuo router combina entrambe le bande sotto un unico SSID, il dispositivo potrebbe essersi collegato al 5 GHz durante la configurazione ma non riuscire a mantenerlo. Se possibile, forza il dispositivo sul 2,4 GHz.</li>
    <li><strong>Ri-abbina se necessario.</strong> Se il dispositivo rimane offline nell'app nativa dopo tutto quanto sopra, rimuovilo dall'app nativa e ri-abbinalo. Poi riscoprilo in GrowVPD Pro.</li>
</ol>

<h2>Problema 2: La regola di automazione non si attiva</h2>
<p>La regola è attiva, il sensore mostra dati, ma il dispositivo target non si accende o non cambia stato.</p>

<h3>Risoluzione passo per passo</h3>
<ol>
    <li><strong>Controlla la lettura del sensore.</strong> Apri la vista della tenda e verifica che il sensore riporti dati attuali. Se il timestamp dell'ultima lettura è vecchio (più di 30 minuti), il sensore potrebbe essere offline o il token scaduto.</li>
    <li><strong>Verifica che la condizione sia effettivamente soddisfatta.</strong> Per una regola VPD, controlla il valore VPD attuale rispetto alla soglia della regola. Ricorda che GrowVPD Pro calcola il VPD dalla temperatura fogliare (stimata dalla temperatura dell'aria), quindi il VPD visualizzato può differire leggermente da quello che ti aspetti.</li>
    <li><strong>Controlla la programmazione oraria della regola.</strong> Se hai impostato finestre orarie attive (es. esegui solo tra le 8:00 e le 20:00), la regola non si attiverà fuori da quegli orari.</li>
    <li><strong>Controlla il tempo minimo di spegnimento.</strong> Se hai impostato <code>minOffMinutes</code> a 10 e la regola è stata ripristinata (spenta) meno di 10 minuti fa, non si riattiverà finché il cooldown non scade. Questo protegge i compressori dei deumidificatori e condizionatori.</li>
    <li><strong>Controlla il dispositivo target.</strong> Il dispositivo target è online? Puoi commutarlo manualmente dalla scheda Automazione? Se il controllo manuale funziona ma la regola non si attiva, il problema è nella configurazione della regola, non nella connessione del dispositivo.</li>
    <li><strong>Controlla regole conflittuali.</strong> Se due regole puntano allo stesso dispositivo con azioni opposte, vince quella con priorità più alta.</li>
</ol>

<blockquote>
    <strong>Consiglio:</strong> GrowVPD Pro registra ogni azione dell'automazione con timestamp e motivo. Controlla la cronologia delle azioni del dispositivo per vedere se la regola si è attivata in passato e cosa ha causato il ripristino. Questo log è inestimabile per il debugging.
</blockquote>

<h2>Problema 3: La lettura del sensore sembra sbagliata</h2>
<p>Il sensore riporta temperatura o umidità che non corrispondono al tuo misuratore manuale o a quello che percepisci entrando nella tenda.</p>

<h3>Cause comuni</h3>
<ul>
    <li><strong>Posizionamento del sensore.</strong> Un sensore in alto sulla parete della tenda vicino all'uscita leggerà diversamente da uno a livello della chioma. Posiziona sempre i sensori all'altezza della chioma, lontano da pareti, luci e ventole.</li>
    <li><strong>Deriva del sensore.</strong> I sensori WiFi economici (specialmente marche Tuya) possono derivare nel tempo di 1&ndash;3&deg;C e 3&ndash;8% RH. A quel prezzo è normale.</li>
    <li><strong>Esposizione diretta alla luce.</strong> Se il sensore è in luce diretta dalla lampada da coltivazione, l'involucro assorbe il calore radiante e riporta temperature 2&ndash;5&deg;C più alte della reale temperatura dell'aria. Ripara il sensore o spostalo all'ombra.</li>
</ul>

<h3>Soluzione: Offset di calibrazione</h3>
<p>In GrowVPD Pro, ogni sensore ha un'impostazione di offset di calibrazione. Confronta il tuo sensore con un misuratore di riferimento verificato per 30&ndash;60 minuti nello stesso punto. Poi applica gli offset:</p>
<ul>
    <li>Se il sensore smart legge 2&deg;C in più, imposta l'offset di temperatura a -2,0</li>
    <li>Se il sensore smart legge 5% RH in meno, imposta l'offset di umidità a +5,0</li>
</ul>

<h2>Problema 4: Le connessioni cadono ripetutamente</h2>
<p>I dispositivi si collegano e funzionano per un po', poi si disconnettono casualmente durante il giorno.</p>

<h3>Cause probabili</h3>
<ul>
    <li><strong>Segnale WiFi debole.</strong> Le tende da coltivazione in materiale riflettente mylar possono parzialmente schermere i segnali WiFi. Usa un'app per misurare la potenza del segnale WiFi. Valori sotto -70 dBm sono inaffidabili.</li>
    <li><strong>Router sovraccarico.</strong> Ogni dispositivo smart mantiene una connessione permanente al suo cloud. 10+ dispositivi su un router consumer base possono far cadere le connessioni sotto carico.</li>
    <li><strong>Problemi di servizi cloud.</strong> Tuya, AC Infinity e Mars Hydro si affidano tutti a server cloud. Interruzioni occasionali dalla loro parte causano che tutti i dispositivi di quella piattaforma appaiano temporaneamente offline.</li>
</ul>

<h3>Soluzioni</h3>
<ul>
    <li>Sposta il router WiFi più vicino all'area di coltivazione o aggiungi un extender WiFi / nodo mesh</li>
    <li>Assegna indirizzi IP statici ai tuoi dispositivi smart tramite le impostazioni di prenotazione DHCP del router</li>
    <li>Fai l'upgrade a un sistema WiFi mesh se hai più di 15 dispositivi smart</li>
</ul>

<h2>Problema 5: Token scaduto / Autenticazione fallita</h2>
<p>GrowVPD Pro mostra un errore di autenticazione per una piattaforma e tutti i dispositivi di quella piattaforma smettono di rispondere.</p>

<h3>Per piattaforma</h3>
<ul>
    <li><strong>Tuya:</strong> I token Tuya scadono ogni 2 ore ma vengono rinnovati automaticamente. Se il rinnovo fallisce, vai a Impostazioni &gt; Account collegati &gt; Tuya, disconnetti e reinserisci Access ID e Access Secret.</li>
    <li><strong>AC Infinity:</strong> Token a lunga durata, ma possono essere invalidati se cambi password. Riautentica con email e password nelle Impostazioni.</li>
    <li><strong>Mars Hydro / Spider Farmer:</strong> Queste piattaforme usano connessioni MQTT che possono cadere se l'app viene forzatamente chiusa o il telefono si riavvia. Apri GrowVPD Pro e lascialo riristabilire automaticamente la connessione MQTT.</li>
</ul>

<div class="warning-box">
    <strong>Importante:</strong> Non condividere mai le credenziali della piattaforma (Access ID, Access Secret, chiavi API) pubblicamente o con terze parti. GrowVPD Pro salva le credenziali localmente sul tuo dispositivo e le trasmette solo alle API ufficiali delle piattaforme.
</div>

<h2>Ancora bloccato?</h2>
<p>Se nessuna delle soluzioni sopra risolve il tuo problema:</p>
<ol>
    <li>Fai uno screenshot della scheda Automazione mostrando la regola problematica e lo stato del dispositivo</li>
    <li>Annota l'esatto messaggio di errore (se presente)</li>
    <li>Controlla la community Discord &mdash; qualcuno probabilmente ha riscontrato lo stesso problema</li>
    <li>Contatta il supporto tramite Impostazioni &gt; Supporto con descrizione e screenshot</li>
</ol>
`
  },

  "energy-monitoring": {
    title: "Monitoraggio energetico e tracciamento dei costi per la coltivazione",
    body: `
<h2>Perché tracciare l'energia?</h2>
<p>L'elettricità è il costo corrente più alto della coltivazione indoor. Una singola tenda 120x120 cm con LED da 480W, ventola in-line, clip fan, umidificatore e deumidificatore può consumare <strong>8&ndash;15 kWh al giorno</strong>, che a seconda della tariffa elettrica si traduce in 30&ndash;80 $ al mese. In un ciclo di coltivazione di 4 mesi, i costi energetici possono superare il valore del raccolto se non vengono gestiti con attenzione.</p>
<p>Sapere esattamente dove va la tua energia ti permette di prendere decisioni informate: il deumidificatore funziona troppo? Potresti dimmare la luce nell'ultima settimana? È più economico far funzionare l'estrazione costantemente a bassa velocità o ciclarla on/off?</p>

<h2>Come GrowVPD Pro traccia l'energia</h2>
<p>GrowVPD Pro traccia il consumo energetico con due metodi:</p>

<h3>1. Report di potenza dalle prese smart</h3>
<p>Alcune prese smart Tuya riportano il consumo in tempo reale (watt) e cumulativo (kWh). Quando un dispositivo è collegato tramite una di queste prese, GrowVPD Pro legge i dati di potenza direttamente. Questo è il metodo più preciso.</p>
<p>Cerca prese Tuya con <strong>monitoraggio energetico</strong> nella descrizione del prodotto. Non tutte le prese smart riportano la potenza &mdash; i modelli più economici offrono solo controllo on/off.</p>

<h3>2. Energia stimata dalla potenza nominale</h3>
<p>Per i dispositivi che non riportano la potenza direttamente, GrowVPD Pro usa la <strong>potenza nominale</strong> che inserisci nelle impostazioni del dispositivo (es. 480W per il LED, 250W per il deumidificatore). La moltiplica per il tempo di accensione registrato per stimare il consumo.</p>
<p>Per dispositivi a velocità variabile come le ventole, la stima è meno precisa perché il consumo reale a velocità 3 è molto inferiore che a velocità 10. L'app usa un'approssimazione lineare basata sulla velocità impostata rispetto al massimo.</p>

<blockquote>
    <strong>Consiglio:</strong> Per il tracciamento più preciso, imposta la potenza nominale per ogni dispositivo nelle impostazioni del dispositivo. Anche il tracciamento stimato è molto meglio di nessun tracciamento.
</blockquote>

<h2>Comprendere il tuo bilancio energetico</h2>
<p>La dashboard energetica nella scheda Automazione mostra il consumo per dispositivo, per tenda e per stanza:</p>
<ul>
    <li><strong>kWh giornalieri:</strong> Energia totale usata nelle ultime 24 ore, suddivisa per dispositivo</li>
    <li><strong>Tempo di accensione del dispositivo:</strong> Quante ore ogni dispositivo ha funzionato, aiutandoti a identificare quali dispositivi dominano la tua bolletta</li>
    <li><strong>Trend nel tempo:</strong> Vedi come il consumo energetico cambia man mano che le piante crescono (la traspirazione aumenta, il deumidificatore funziona di più ecc.)</li>
</ul>

<h3>Ripartizione energetica tipica</h3>
<p>Per un setup di tenda standard, l'energia si divide tipicamente così:</p>
<ul>
    <li><strong>Luce LED da coltivazione:</strong> 50&ndash;65% dell'energia totale (il singolo consumatore più grande)</li>
    <li><strong>Deumidificatore:</strong> 15&ndash;25% (funziona molto durante la fioritura)</li>
    <li><strong>Ventola di estrazione in-line:</strong> 5&ndash;10%</li>
    <li><strong>Umidificatore:</strong> 3&ndash;5% (principalmente durante germinazione/vegetativa)</li>
    <li><strong>Clip fan, riscaldatori, altro:</strong> 5&ndash;10%</li>
</ul>

<h2>Stima dei costi</h2>
<p>Una volta che conosci i tuoi kWh giornalieri, il calcolo dei costi è diretto:</p>
<p><strong>Costo giornaliero = kWh giornalieri x tariffa elettrica (per kWh)</strong></p>
<p>Esempio: 12 kWh/giorno a 0,15 $/kWh = 1,80 $/giorno = 54 $/mese = 216 $ per un ciclo di 4 mesi.</p>
<p>L'engine analitico di GrowVPD Pro può calcolarlo automaticamente se inserisci la tua tariffa elettrica. Tiene anche conto dei costi totali del ciclo di coltivazione quando calcola metriche di efficienza come il <strong>costo per grammo</strong> di raccolto secco.</p>

<h2>Ottimizzazione del consumo energetico</h2>

<h3>1. Dimma le luci quando possibile</h3>
<p>La maggior parte dei LED driver moderni supporta la dimmerazione. Funzionare al 75% della potenza invece del 100% risparmia il 25% del tuo maggior consumatore energetico. Molte varietà non hanno bisogno della piena potenza durante le prime 2 settimane di fioritura (fase di stretch) o nella fioritura tardiva.</p>

<h3>2. Dimensiona correttamente il deumidificatore</h3>
<p>Un deumidificatore sovradimensionato cicla frequentemente on/off, sprecando energia ad ogni avvio. Un'unità correttamente dimensionata funziona più a lungo a intensità inferiore, il che è più efficiente.</p>

<h3>3. Usa ventole a velocità variabile</h3>
<p>Far funzionare una ventola in-line a velocità 4 invece di velocità 10 può ridurre il suo consumo del 60&ndash;70%. Le ventole AC Infinity con controller integrati regolano automaticamente la velocità in base alle condizioni.</p>

<h3>4. Programma nelle ore fuori punta</h3>
<p>Se il tuo fornitore di energia applica tariffe diverse in diversi momenti della giornata, programma il periodo di luci accese durante le ore fuori punta. In molte regioni l'elettricità è più economica tra le 23:00 e le 7:00.</p>

<h2>Confrontare le coltivazioni per efficienza energetica</h2>
<p>La metrica energetica definitiva è <strong>grammi per kWh</strong> &mdash; quanta materia secca produci per ogni kilowattora consumato. GrowVPD Pro lo calcola automaticamente quando registri i dati del raccolto.</p>
<p>Intervalli tipici:</p>
<ul>
    <li><strong>Setup principiante:</strong> 0,5&ndash;0,8 g/kWh</li>
    <li><strong>Setup ottimizzato:</strong> 1,0&ndash;1,5 g/kWh</li>
    <li><strong>Avanzato/commerciale:</strong> 1,5&ndash;2,5 g/kWh</li>
</ul>
<p>Tracciare questa metrica attraverso diverse coltivazioni ti mostra se la tua efficienza sta migliorando e quali cambiamenti hanno avuto il maggiore impatto.</p>
`
  },

  "harvest-tracking": {
    title: "Tracciamento raccolto: Peso fresco, peso secco ed efficienza",
    body: `
<h2>Perché registrare i dati del raccolto?</h2>
<p>Il raccolto è il culmine di settimane o mesi di lavoro. Senza registrare i risultati, non hai modo di confrontare oggettivamente le coltivazioni, misurare l'impatto dei cambiamenti apportati o scoprire cosa funziona meglio per il tuo setup. "Questa coltivazione mi è sembrata migliore dell'ultima" non sono dati. <strong>487g secchi da 4 piante sotto 480W in 63 giorni di fioritura</strong> &mdash; questi sono dati da cui puoi imparare.</p>

<h2>Registrare il raccolto in GrowVPD Pro</h2>
<p>Quando sei pronto a raccogliere, cambia la fase nell'annotazione del diario a "Raccolto". L'app mostra campi specifici per i dati del raccolto:</p>

<h3>Peso fresco</h3>
<p>Pesa le cime appena tagliate e manicurate subito dopo il raccolto, prima dell'essiccazione. Questo è il peso fresco. Ti dà un'idea immediata del volume, ma non è il numero finale &mdash; circa il 75&ndash;80% del peso fresco è acqua.</p>

<h3>Peso secco</h3>
<p>Dopo l'essiccazione (tipicamente 7&ndash;14 giorni a 60% RH e 18&ndash;21&deg;C), pesa di nuovo le cime. Questo è il peso secco &mdash; il tuo raccolto reale. Questo numero viene usato per tutti i calcoli di efficienza.</p>

<blockquote>
    <strong>Consiglio:</strong> Un rapporto fresco-secco sano è 4:1 a 5:1. Se il peso secco è meno del 20% del fresco, potresti aver essiccato troppo. Se è più del 30%, le cime probabilmente non sono completamente secche e rischi muffa durante la conservazione.
</blockquote>

<h2>Metriche di efficienza chiave</h2>
<p>GrowVPD Pro calcola automaticamente queste metriche quando inserisci i dati del raccolto:</p>

<h3>Grammi per watt (g/W)</h3>
<p>La metrica di efficienza della resa più comune. Dividi il peso secco totale per la potenza assorbita dalla luce.</p>
<p><strong>Esempio:</strong> 450g secchi / 480W LED = 0,94 g/W</p>
<ul>
    <li><strong>Sotto 0,5 g/W:</strong> Margine di miglioramento. Controlla VPD, distanza della luce, nutrizione e tecniche di allenamento.</li>
    <li><strong>0,5&ndash;1,0 g/W:</strong> Buon risultato. La maggior parte dei coltivatori hobbisti si trova qui.</li>
    <li><strong>1,0&ndash;1,5 g/W:</strong> Eccellente. Ambiente ottimizzato e genetica.</li>
    <li><strong>Sopra 1,5 g/W:</strong> Eccezionale. Tipicamente richiede integrazione CO2 e controllo ambientale perfetto.</li>
</ul>

<h3>Grammi per pianta (g/pianta)</h3>
<p>Peso secco totale diviso per il numero di piante. Utile per confrontare diversi numeri di piante nella stessa tenda.</p>

<h3>Grammi per metro quadrato (g/m2)</h3>
<p>Peso secco totale diviso per la superficie dello spazio di coltivazione. Questa metrica normalizza la resa per dimensione della tenda e permette di confrontare l'efficienza tra setup diversi.</p>

<h2>Cosa ti dicono i dati</h2>

<h3>Confronto tra coltivazioni</h3>
<p>Dopo 3&ndash;4 coltivazioni completate, emergono pattern. Potresti scoprire che:</p>
<ul>
    <li>Le tue rese sono sempre migliori in inverno (temperatura ambiente più bassa = migliori condizioni in fioritura tardiva)</li>
    <li>Una specifica varietà supera costantemente le altre nel tuo setup</li>
    <li>Passare da 4 piante a 2 piante con vegetativa più lunga ha prodotto la stessa resa con meno lavoro</li>
    <li>I tuoi g/W sono migliorati dopo che hai iniziato a tracciare e mantenere il VPD nell'intervallo target</li>
</ul>

<h2>Consigli per l'essiccazione che proteggono la tua resa</h2>
<p>L'essiccazione è parte del raccolto, e se sbagli puoi rovinare una coltivazione altrimenti eccellente:</p>
<ul>
    <li><strong>Temperatura:</strong> 18&ndash;21&deg;C (64&ndash;70&deg;F). Temperature più basse preservano i terpeni.</li>
    <li><strong>Umidità:</strong> 55&ndash;65% RH. Troppo secco (sotto 50%) fa asciugare le cime troppo in fretta, intrappolando la clorofilla e producendo un fumo aspro. Troppo umido (sopra 70%) rischia la muffa.</li>
    <li><strong>Flusso d'aria:</strong> Delicato, indiretto. Non puntare le ventole direttamente sulle cime.</li>
    <li><strong>Durata:</strong> 7&ndash;14 giorni.</li>
    <li><strong>Buio:</strong> Essicca in una stanza buia. La luce degrada THC e terpeni.</li>
</ul>

<div class="warning-box">
    <strong>Non affrettare l'essiccazione.</strong> Un'essiccazione rapida in 3&ndash;4 giorni (aumentando la temperatura o riducendo l'umidità) distrugge i terpeni e produce fiori dal sapore aspro ed erbaceo. La qualità nasce proprio dall'essiccazione lenta.
</div>

<h2>Registrazione nell'app</h2>
<ol>
    <li>Crea una nuova annotazione nel giorno del raccolto e imposta la fase su "Raccolto"</li>
    <li>Inserisci il peso fresco e scatta foto del raccolto fresco</li>
    <li>Dopo l'essiccazione (7&ndash;14 giorni), modifica l'annotazione e aggiungi il peso secco</li>
    <li>Segna la coltivazione come completata per attivare i calcoli finali dell'analitica</li>
    <li>Rivedi il riepilogo del raccolto con tutte le metriche di efficienza</li>
</ol>
`
  },

  "comparing-grows": {
    title: "Confrontare le coltivazioni: Impara da ogni risultato",
    body: `
<h2>Il potere del confronto</h2>
<p>Un singolo diario di coltivazione ti dice cosa è successo. <strong>Due diari fianco a fianco</strong> ti dicono perché. Quando vedi che la Coltivazione A ha mantenuto il VPD a 1,1&ndash;1,3 kPa durante tutta la fioritura e ha dato 0,95 g/W, mentre la Coltivazione B ha oscillato tra 0,7 e 1,6 kPa e ha dato 0,62 g/W, la relazione tra costanza del VPD e resa diventa innegabile.</p>
<p>GrowVPD Pro include una schermata di confronto dedicata che posiziona due coltivazioni completate (o attive) fianco a fianco ed evidenzia le differenze in ambiente, nutrizione, tecniche e risultati del raccolto.</p>

<h2>Usare la funzione di confronto</h2>
<ol>
    <li>Apri la scheda <strong>Diario</strong></li>
    <li>Tocca l'icona di confronto (due rettangoli sovrapposti) nella barra superiore</li>
    <li>Seleziona la prima coltivazione dalla lista</li>
    <li>Seleziona la seconda coltivazione per il confronto</li>
    <li>La schermata di confronto mostra entrambe le coltivazioni con timeline parallele</li>
</ol>

<h2>Cosa confrontare</h2>

<h3>Metriche di raccolto</h3>
<p>I punti di confronto più ovvi: peso secco, g/W, g/pianta e g/m2. Se entrambe le coltivazioni hanno usato la stessa tenda e luce, le differenze di resa sono causate dalla genetica, dall'ambiente, dalla nutrizione o dalla tecnica.</p>

<h3>Costanza del VPD</h3>
<p>Guarda il VPD medio per settimana in entrambe le coltivazioni. La coltivazione con VPD più costante (minor variazione settimana per settimana) porta quasi sempre a risultati migliori. GrowVPD Pro mostra una curva di tendenza VPD per ogni coltivazione, rendendo facile individuare le settimane in cui l'ambiente è sfuggito al controllo.</p>

<h3>Velocità di crescita</h3>
<p>Confronta la timeline dal seme/clone al raccolto. Una coltivazione è finita prima? Controlla cosa era diverso nelle prime settimane &mdash; un radicamento più rapido nelle prime 2 settimane porta spesso a una data di raccolto anticipata.</p>

<h3>Livelli PPFD</h3>
<p>Se hai registrato il PPFD nelle annotazioni del diario, confronta l'intensità luminosa tra le coltivazioni. PPFD più alto con VPD e CO2 corretti porta a crescita più rapida e rese più alte, fino al punto di saturazione luminosa della pianta.</p>

<h3>Programmi nutrizionali</h3>
<p>Confronta i valori EC/PPM settimana per settimana. Una coltivazione riceveva dosi più alte? I nutrienti sono stati introdotti prima o dopo? Correla con la differenza di resa per capire l'appetito delle tue piante.</p>

<h3>Tecniche di allenamento</h3>
<p>Se una coltivazione usava LST e l'altra topping, o una era SOG e l'altra ScrOG, il confronto rivela quale tecnica ha funzionato meglio nella tua configurazione specifica.</p>

<blockquote>
    <strong>Consiglio:</strong> Per il confronto più significativo, cambia solo una variabile tra le coltivazioni. Se cambi contemporaneamente la luce, la varietà e il programma nutrizionale, non saprai quale cambiamento ha causato la differenza di resa.
</blockquote>

<h2>Imparare dalle differenze</h2>

<h3>Riconoscere i pattern</h3>
<p>Dopo 3&ndash;5 coltivazioni con dati registrati, emergono pattern invisibili da una singola coltivazione:</p>
<ul>
    <li><strong>Pattern stagionali:</strong> Le coltivazioni iniziate a novembre danno costantemente rese più alte di quelle iniziate a luglio (temperature ambiente più fresche aiutano la fioritura tardiva)</li>
    <li><strong>Comportamento della varietà:</strong> La Varietà A matura sempre in 8 settimane di fioritura; la Varietà B ne richiede 10 e se la tagli a 8 la resa cala del 20%</li>
    <li><strong>Impatto dell'attrezzatura:</strong> L'upgrade da LED blurple a scheda Samsung LM301H ha aumentato la resa del 35% con la stessa potenza assorbita</li>
    <li><strong>Correlazioni VPD:</strong> Ogni coltivazione in cui il VPD medio in fioritura è rimasto tra 1,1&ndash;1,3 kPa ha prodotto rese superiori alla media</li>
</ul>

<h3>Il metodo scientifico per coltivatori</h3>
<ol>
    <li><strong>Osserva:</strong> Rivedi i dati delle coltivazioni precedenti e trova la metrica più debole</li>
    <li><strong>Ipotizza:</strong> "Se mantengo un VPD più alto nelle settimane 4&ndash;6 di fioritura, la densità delle cime migliorerà"</li>
    <li><strong>Testa:</strong> Avvia un'altra coltivazione con questo unico cambiamento, lasciando tutto il resto uguale</li>
    <li><strong>Confronta:</strong> Usa la funzione di confronto per valutare il risultato</li>
    <li><strong>Ripeti:</strong> Passa alla prossima variabile</li>
</ol>

<h2>Usare i template per standardizzare</h2>
<p>Il sistema template di GrowVPD Pro ti permette di salvare una coltivazione di successo come template. Alla coltivazione successiva, carichi il template e precompili varietà, substrato, dimensione vaso, programma nutrizionale e target VPD. Questo standardizza la tua baseline e rende i confronti più significativi.</p>
`
  },

  "photo-documentation": {
    title: "Documentazione fotografica: Costruire una cronologia visiva della coltivazione",
    body: `
<h2>Perché le foto contano</h2>
<p>I numeri raccontano parte della storia. Le foto raccontano il resto. Un'annotazione nel diario che dice "piante sembrano sane, leggero ingiallimento sulle foglie basse" è utile. Una foto di quelle stesse foglie basse è dieci volte più utile &mdash; puoi ingrandire, confrontare con le guide alle malattie e condividerla con altri per la diagnosi.</p>
<p>Durante l'intero ciclo di coltivazione, foto regolari creano una cronologia visiva che mostra la velocità di crescita, lo sviluppo della chioma, la progressione delle carenze e la trasformazione dalla piantina al raccolto. Questo registro visivo è insostituibile per l'apprendimento e il confronto tra coltivazioni.</p>

<h2>Quando fotografare</h2>

<h3>Momenti da catturare</h3>
<ul>
    <li><strong>Giorno 1:</strong> Semi piantati o cloni trapiantati. Documenta il punto di partenza.</li>
    <li><strong>Prime foglie vere / radici visibili:</strong> Segna la transizione dalla germinazione alla crescita.</li>
    <li><strong>Inizio di ogni settimana:</strong> Una foto settimanale coerente dalla stessa angolazione forma la spina dorsale della tua cronologia.</li>
    <li><strong>Qualsiasi problema:</strong> Ingiallimento, macchie, arricciamento, parassiti, appassimento &mdash; fotografa immediatamente per la diagnosi.</li>
    <li><strong>Eventi di allenamento:</strong> Prima e dopo topping, LST, defogliazione, lollipoping. Mostra la risposta della pianta.</li>
    <li><strong>Passaggio alla fioritura:</strong> Il giorno del cambio a 12/12. Confronta con le settimane successive per tracciare lo stretch.</li>
    <li><strong>Settimanalmente durante la fioritura:</strong> Sviluppo cime, close-up dei tricomi, formazione delle cole.</li>
    <li><strong>Giorno del raccolto:</strong> Pianta intera prima del taglio, cole singole, raccolto fresco completo steso.</li>
    <li><strong>Dopo l'essiccazione:</strong> Il prodotto finale nei barattoli. Questa è la tua foto dei risultati.</li>
</ul>

<h3>Snapshot automatici della telecamera</h3>
<p>Se usi una telecamera Tuya connessa tramite GrowVPD Pro, l'app può catturare automaticamente snapshot giornalieri e salvarli nel diario di coltivazione. Questo fornisce una cronologia perfettamente coerente senza alcuno sforzo manuale. La funzione timelapse poi assembla questi snapshot in un video che mostra l'intera coltivazione in pochi secondi.</p>

<h2>Consigli per le foto nella grow room</h2>

<h3>Spegni la luce da coltivazione e il flash</h3>
<p>Questo è il consiglio assolutamente più importante per la fotografia dei coltivatori. I LED moderni da coltivazione producono luce intensa viola, rossa o bianca a spettro completo che sopraffà le fotocamere dei telefoni. Il risultato sono foto con dominante viola dove è impossibile distinguere accuratamente il colore delle foglie.</p>
<p>Soluzione:</p>
<ul>
    <li><strong>Spegni la luce da coltivazione</strong> e usa una luce bianca neutra (una normale lampada da stanza o la torcia del telefono) per le foto. Questo assicura una resa cromatica fedele.</li>
    <li><strong>Usa una luce frontale LED verde</strong> durante il periodo buio. La luce verde non disturba il fotoperiodo e fornisce illuminazione sufficiente per le foto.</li>
    <li><strong>Evita il flash della fotocamera.</strong> Il flash crea ombre dure e bruciature che nascondono i dettagli. Usa invece l'illuminazione ambientale.</li>
</ul>

<h3>Angolazioni coerenti</h3>
<p>Per confronti settimanali significativi, scatta la tua foto principale settimanale sempre dalla stessa posizione:</p>
<ul>
    <li>Segna un punto sul pavimento dove ti posizioni (nastro adesivo o un piccolo adesivo)</li>
    <li>Tieni il telefono alla stessa altezza (altezza del petto funziona bene per le viste dall'alto sulla chioma)</li>
    <li>Includi lo stesso punto di riferimento in ogni foto (palo della tenda, sensore, righello fissato alla parete)</li>
</ul>

<h3>Tecnica per primi piani</h3>
<p>Per diagnosticare problemi o controllare i tricomi:</p>
<ul>
    <li>Usa la modalità macro del tuo telefono se disponibile, o investi in un obiettivo macro a clip economico (10&ndash;20$)</li>
    <li>Appoggia il telefono alla struttura della tenda o usa un piccolo treppiede per evitare il mosso</li>
    <li>Concentrati sull'area interessata e scatta diverse foto &mdash; la macro ha una profondità di campo ridotta</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> GrowVPD Pro supporta più foto per annotazione del diario. Allega uno scatto dell'intera chioma più i dettagli dei problemi in una singola annotazione. Tutto resta organizzato per data e settimana.
</blockquote>

<h2>Funzione timelapse</h2>
<p>Dopo aver completato una coltivazione (o in qualsiasi momento durante), GrowVPD Pro può generare un video timelapse da tutte le foto nel diario. Ogni foto diventa un frame, creando un'animazione fluida che mostra l'intero ciclo di coltivazione in pochi secondi.</p>
<p>Per i migliori risultati timelapse:</p>
<ul>
    <li>Scatta foto da un'angolazione coerente (la telecamera automatica è ideale per questo)</li>
    <li>Fotografa alla stessa ora del giorno (stesse condizioni di luce)</li>
    <li>Includi foto da ogni settimana &mdash; vuoti nella cronologia creano salti nel video</li>
</ul>

<h2>Modalità privacy</h2>
<p>GrowVPD Pro capisce che non tutti vogliono le foto di coltivazione visibili nella galleria del telefono. La funzione <strong>Privacy foto</strong> (Pro) nasconde le foto di coltivazione dalla galleria di sistema e dal media scanner. Le foto vengono salvate nella directory privata dell'app e sono visibili solo dentro GrowVPD Pro.</p>
<p>Combinata con il blocco PIN e l'icona mascherata dell'app (modalità Stealth), la tua documentazione di coltivazione resta completamente privata.</p>

<div class="warning-box">
    <strong>Promemoria backup:</strong> Le foto salvate in modalità privata non vengono salvate da Google Photos o iCloud. Usa la funzione di esportazione di GrowVPD Pro per creare backup, o copia periodicamente le foto in un archivio sicuro.
</div>
`
  },

  "nutrient-deficiency-guide": {
    title: "Guida all'identificazione delle carenze nutrizionali",
    body: `
<h2>Prima di diagnosticare: verifica le basi</h2>
<p>Prima di presumere una carenza di nutrienti, escludi i due colpevoli più comuni che imitano i sintomi di carenza:</p>
<ul>
    <li><strong>Squilibrio del pH:</strong> Se il pH nella zona radicale è fuori dall'intervallo 5,8&ndash;6,5 (idro/cocco) o 6,0&ndash;7,0 (terra), i nutrienti diventano indisponibili anche se sono presenti nella soluzione. Una "carenza" di calcio a pH 5,0 è in realtà un blocco da pH. Correggi prima il pH.</li>
    <li><strong>Eccesso d'acqua:</strong> Le radici sommerse non riescono ad assorbire nutrienti. Piante afflosciate con foglie ingiallite spesso hanno solo bisogno di asciugarsi, non di più fertilizzante.</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> La Guida Malattie e Parassiti di GrowVPD Pro include uno strumento diagnostico visivo con immagini di riferimento per tutte le carenze comuni. Usalo insieme a questo articolo per l'identificazione più precisa.
</blockquote>

<h2>Nutrienti mobili vs. immobili</h2>
<p>Comprendere la mobilità dei nutrienti ti dice dove appariranno i sintomi:</p>
<ul>
    <li><strong>Nutrienti mobili</strong> (N, P, K, Mg) possono essere redistribuiti dalle foglie vecchie alla nuova crescita. I sintomi di carenza appaiono <strong>prima sulle foglie inferiori/vecchie</strong>, perché la pianta ne preleva i nutrienti per alimentare la nuova crescita.</li>
    <li><strong>Nutrienti immobili</strong> (Ca, Fe, Mn, Zn, S, B, Cu) non possono muoversi una volta depositati. I sintomi di carenza appaiono <strong>prima sulle foglie superiori/nuove</strong>, perché la nuova crescita non riesce a ottenere ciò di cui ha bisogno.</li>
</ul>

<h2>Azoto (N) &mdash; Mobile</h2>
<h3>Sintomi</h3>
<ul>
    <li>Ingiallimento uniforme delle <strong>foglie inferiori/vecchie</strong>, partendo dalle punte e procedendo verso l'interno</li>
    <li>Le foglie alla fine diventano completamente gialle, poi bianche, poi muoiono e cadono</li>
    <li>Progredisce dal basso verso l'alto della pianta</li>
    <li>Complessivamente la pianta appare verde chiaro, la crescita rallenta</li>
</ul>
<h3>Cause comuni</h3>
<ul>
    <li>Azoto insufficiente nella soluzione nutritiva, specialmente durante il picco di crescita vegetativa</li>
    <li>Substrato fortemente dilavato (eccesso di runoff dilavante azoto)</li>
    <li>Esaurimento naturale dell'azoto nella terra organica dopo 4&ndash;6 settimane</li>
</ul>
<h3>Rimedio</h3>
<p>Aumenta l'azoto nell'alimentazione. Per una correzione immediata, usa un fertilizzante liquido ad alto contenuto di azoto (emulsione di pesce, nitrato di calcio o nutrienti per fase vegetativa). Le foglie inferiori colpite non si riprenderanno, ma la nuova crescita dovrebbe rinverdire entro 5&ndash;7 giorni.</p>

<h2>Fosforo (P) &mdash; Mobile</h2>
<h3>Sintomi</h3>
<ul>
    <li><strong>Steli viola o rossastri</strong> e piccioli (gambi delle foglie)</li>
    <li>Foglie verde scuro che assumono sfumature bluastre o violacee</li>
    <li>Le foglie più vecchie possono sviluppare macchie necrotiche marrone scuro o bronzee</li>
    <li>Crescita complessiva lenta, sviluppo radicale arretrato</li>
    <li>In fioritura: cime piccole e rade che si sviluppano lentamente</li>
</ul>
<h3>Cause comuni</h3>
<ul>
    <li>Temperature fredde nella zona radicale (sotto 18&deg;C) riducono l'assorbimento di fosforo</li>
    <li>pH troppo alto (sopra 7,0) blocca il fosforo</li>
    <li>Fosforo insufficiente nell'alimentazione durante la fioritura, quando la domanda è al picco</li>
</ul>
<h3>Rimedio</h3>
<p>Prima controlla la temperatura della zona radicale. Se è fredda, aggiungi un tappetino riscaldante. Se il pH è corretto e la temperatura va bene, aumenta il fosforo. I nutrienti per la fase di fioritura hanno tipicamente fosforo elevato. La farina d'ossa è un'alternativa organica a rilascio lento.</p>

<div class="warning-box">
    <strong>Nota:</strong> Alcune varietà producono naturalmente steli viola indipendentemente dal livello di fosforo. Se solo gli steli sono viola ma le foglie sono di un verde sano, potrebbe essere genetica, non una carenza.
</div>

<h2>Potassio (K) &mdash; Mobile</h2>
<h3>Sintomi</h3>
<ul>
    <li><strong>Bordi marroni e croccanti</strong> sulle foglie vecchie/inferiori (bruciatura dei margini)</li>
    <li>I bordi possono arricciarsi verso l'alto prima di diventare marroni</li>
    <li>Ingiallimento tra le nervature delle foglie vecchie, mentre le nervature restano inizialmente verdi</li>
    <li>Steli deboli, piante soggette a spezzarsi</li>
</ul>
<h3>Rimedio</h3>
<p>Aggiungi un'alimentazione ricca di potassio (silicato di potassio, estratto di alghe marine o booster per fioritura con K elevato). Controlla che calcio e magnesio non siano troppo alti. Riduci l'EC complessivo se è sopra 2,0 mS/cm e ribilancia il rapporto dei nutrienti.</p>

<h2>Calcio (Ca) &mdash; Immobile</h2>
<h3>Sintomi</h3>
<ul>
    <li><strong>Macchie marroni</strong> sulle foglie nuove/superiori, spesso di forma irregolare</li>
    <li>Le punte delle nuove foglie possono arricciarsi e morire</li>
    <li>I margini fogliari diventano frastagliati e increspati</li>
    <li>Nei casi gravi, la nuova crescita è deformata e rachitica</li>
</ul>
<h3>Rimedio</h3>
<p>Aggiungi un integratore cal-mag. Se usi acqua osmosi inversa, aggiungi sempre cal-mag a 0,3&ndash;0,5 EC prima di aggiungere i nutrienti base. Assicurati che il pH sia sopra 6,0. Se l'umidità è molto alta (sopra 80%), aumenta il flusso d'aria per promuovere la traspirazione.</p>

<h2>Magnesio (Mg) &mdash; Mobile</h2>
<h3>Sintomi</h3>
<ul>
    <li><strong>Clorosi internervale sulle foglie vecchie/inferiori</strong>: il tessuto tra le nervature ingiallisce mentre le nervature stesse restano verdi, creando un caratteristico pattern a strisce</li>
    <li>Le foglie colpite possono eventualmente sviluppare macchie rugginose</li>
    <li>Le foglie si arricciano verso l'alto e i bordi possono diventare fragili</li>
</ul>
<h3>Rimedio</h3>
<p>Il sale di Epsom (solfato di magnesio) è la correzione più rapida: 1&ndash;2 g/L nell'alimentazione o come spray fogliare. I prodotti cal-mag contengono anche magnesio. Assicurati che il pH sia nell'intervallo. La risposta è visibile entro 7&ndash;10 giorni sulla nuova crescita.</p>

<h2>Ferro (Fe) &mdash; Immobile</h2>
<h3>Sintomi</h3>
<ul>
    <li><strong>Clorosi internervale sulle foglie nuove/superiori</strong> (simile al magnesio, ma sulla NUOVA crescita, non sulla vecchia)</li>
    <li>Le nuove foglie appaiono giallo pallido o quasi bianche, con nervature verdi</li>
    <li>Nei casi gravi, intere foglie nuove sono gialle/bianche</li>
</ul>
<h3>Rimedio</h3>
<p>Abbassa il pH nell'intervallo corretto. Il ferro è estremamente sensibile al pH. Se il pH è corretto, applica ferro chelato (Fe-EDDHA o Fe-DTPA) come supplemento all'alimentazione.</p>

<h2>Procedura diagnostica</h2>
<ol>
    <li><strong>Dove sono i sintomi?</strong> Foglie inferiori/vecchie = nutriente mobile (N, P, K, Mg). Foglie superiori/nuove = nutriente immobile (Ca, Fe, Zn, Mn).</li>
    <li><strong>Che tipo di sintomo?</strong> Ingiallimento uniforme = azoto. Bordi marroni = potassio. Internervale = magnesio (vecchie) o ferro (nuove). Macchie = calcio o manganese. Steli viola = fosforo.</li>
    <li><strong>Controlla prima il pH.</strong> L'80% delle carenze apparenti sono blocchi da pH.</li>
    <li><strong>Controlla EC/PPM.</strong> Troppo basso = sottoalimentazione. Troppo alto = bruciatura da nutrienti o blocco da eccesso.</li>
    <li><strong>Scatta foto.</strong> Usa la guida alle malattie in GrowVPD Pro per confrontare con le immagini di riferimento.</li>
</ol>

<blockquote>
    <strong>Consiglio:</strong> La diagnostica AI delle malattie in GrowVPD Pro (funzione Pro) può analizzare le foto delle foglie colpite e suggerire la carenza o malattia più probabile, incluse le misure correttive raccomandate.
</blockquote>
`
  },

  "substrate-mixing": {
    title: "Miscelazione substrati: Terra, cocco e miscele personalizzate",
    body: `
<h2>Perché il substrato conta</h2>
<p>Il substrato è dove la tua pianta vive. Determina la ritenzione idrica, il drenaggio, l'aerazione, la disponibilità di nutrienti e la salute delle radici. Il miglior controllo ambientale al mondo non può compensare una zona radicale che è fradicia, compattata o impoverita di nutrienti. Scegliere e miscelare il substrato giusto è una delle decisioni più cruciali che prendi prima ancora che la coltivazione cominci.</p>

<h2>Tipi di substrato</h2>

<h3>Terra (miscela per coltivazione)</h3>
<p>La terra è il substrato più indulgente per i principianti. Una miscela da coltivazione di qualità contiene materia organica che tampona il pH e rilascia lentamente i nutrienti, riducendo la necessità di un'alimentazione precisa nelle prime settimane.</p>
<ul>
    <li><strong>Vantaggi:</strong> indulgente, tampona il pH, contiene alcuni nutrienti, ecosistema microbico naturale</li>
    <li><strong>Svantaggi:</strong> più pesante, drenaggio più lento, controllo preciso della zona radicale più difficile, la materia organica può ospitare parassiti</li>
    <li><strong>Ideale per:</strong> principianti, coltivatori organici, coltivazione a bassa manutenzione</li>
    <li><strong>Intervallo pH:</strong> 6,0&ndash;7,0</li>
</ul>

<h3>Fibra di cocco</h3>
<p>La fibra di cocco è prodotta dai gusci di cocco e fornisce un eccellente equilibrio tra ritenzione idrica e aerazione. È inerte (non contiene nutrienti), dandoti controllo completo sull'alimentazione. È il substrato più popolare tra i coltivatori esperti.</p>
<ul>
    <li><strong>Vantaggi:</strong> eccellente ritenzione idrica + drenaggio, riutilizzabile, leggero, pH stabile, crescita radicale rapida</li>
    <li><strong>Svantaggi:</strong> richiede nutrienti dal giorno uno, necessita di integrazione cal-mag (il cocco lega naturalmente il calcio), richiede annaffiature frequenti</li>
    <li><strong>Ideale per:</strong> coltivatori intermedi-avanzati, chi vuole massimo controllo</li>
    <li><strong>Intervallo pH:</strong> 5,8&ndash;6,2</li>
</ul>

<h3>Perlite</h3>
<p>Vetro vulcanico espanso in granuli bianchi e leggeri. La perlite fornisce eccellente drenaggio e aerazione ma trattiene pochissima acqua. Raramente usata da sola &mdash; si miscela con terra o cocco per migliorare il drenaggio e prevenire la compattazione.</p>

<h3>Vermiculite</h3>
<p>Minerale di mica espanso che trattiene 3&ndash;4 volte il suo peso in acqua. Usata per aumentare la ritenzione idrica nelle miscele che drenano troppo velocemente. Utile nelle miscele per piantine o climi secchi.</p>

<h3>Palline di argilla (LECA / Hydroton)</h3>
<p>Palline di argilla espansa leggera. Forniscono aerazione e drenaggio con ritenzione idrica minima. Usate nei sistemi idroponici (DWC, ebb-and-flow) o come strato drenante sul fondo dei vasi.</p>

<h2>Miscele popolari</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Cocco/Perlite standard (70/30)</h3>
    <p>La miscela più popolare tra i coltivatori indoor. 70% fibra di cocco + 30% perlite. Fornisce eccellente ritenzione idrica per annaffiature giornaliere prevenendo al contempo l'eccesso d'acqua. Adatta per tutte le fasi di crescita.</p>
    <ul>
        <li>Ritenzione idrica: alta</li>
        <li>Drenaggio: molto buono</li>
        <li>Frequenza annaffiatura: 1&ndash;2 volte al giorno in fioritura</li>
        <li>Ideale per: annaffiatura manuale o sistemi a goccia</li>
    </ul>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Cocco/Perlite alta frequenza (50/50)</h3>
    <p>50% cocco + 50% perlite. Drena più velocemente e trattiene meno acqua, richiedendo irrigazione più frequente. Popolare con sistemi a goccia automatizzati dove il coltivatore vuole alimentare 3&ndash;5 volte al giorno per la massima velocità di crescita.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Super soil (terra vivente organica)</h3>
    <p>Miscela organica ricca di nutrienti che nutre la pianta tramite la biologia del suolo piuttosto che con nutrienti in bottiglia. Tipicamente: terra base (30%) + compost/humus di lombrichi (30%) + aerazione (perlite/pomice 20%) + ammendanti (farina d'ossa, alghe macinate, guano, calcite dolomitica 20%).</p>
    <ul>
        <li>Frequenza annaffiatura: ogni 2&ndash;4 giorni (solo acqua, nessun nutriente in bottiglia)</li>
        <li>Ideale per: coltivatori organici, approccio "solo acqua", coltivazione orientata al sapore</li>
    </ul>
</div>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Miscela per piantine</h3>
    <p>Miscela leggera e soffice per la germinazione e la crescita precoce. 40% cocco + 30% perlite + 30% vermiculite. La vermiculite trattiene umidità extra attorno alla piccola zona radicale e la texture leggera previene la compattazione che potrebbe soffocare le radici delle piantine.</p>
</div>

<blockquote>
    <strong>Consiglio:</strong> Il Mixer Substrato in GrowVPD Pro ti permette di inserire le percentuali dei componenti e calcola la ritenzione idrica, la velocità di drenaggio e la capacità di aerazione risultanti. Puoi regolare i rapporti e vedere l'impatto in tempo reale prima di miscelare.
</blockquote>

<h2>Preparazione della fibra di cocco</h2>
<p>La fibra di cocco grezza richiede preparazione prima dell'uso:</p>
<ol>
    <li><strong>Idratazione:</strong> Spacchetta i mattoni di cocco compressi con acqua calda. Un mattone standard da 5 kg si espande a ~70 litri.</li>
    <li><strong>Risciacquo:</strong> Risciacqua con acqua a pH regolato fino a quando l'EC del drenaggio scende sotto 0,5 mS/cm. Questo rimuove i sali di sodio e potassio in eccesso.</li>
    <li><strong>Tamponamento:</strong> Immergi in soluzione cal-mag (EC 0,8&ndash;1,0) per 8&ndash;12 ore. Questo pre-carica la capacità di scambio cationico con calcio e magnesio, impedendo al cocco di rubare questi nutrienti dalla tua soluzione nutritiva in seguito.</li>
    <li><strong>Drena e miscela:</strong> Drena l'acqua in eccesso, aggiungi perlite nel rapporto scelto e mescola bene.</li>
</ol>

<div class="warning-box">
    <strong>Importante:</strong> Non usare mai la fibra di cocco direttamente dal mattone senza risciacquo e tamponamento. Il cocco non tamponato ruberà calcio e magnesio dalla tua soluzione nutritiva durante le prime 2&ndash;3 settimane, causando sintomi di carenza difficili da diagnosticare.
</div>

<h2>Raccomandazioni per la dimensione del vaso</h2>
<ul>
    <li><strong>Piantine:</strong> Inizia in vasi da 0,5&ndash;1 L o bicchieri</li>
    <li><strong>Autoflower:</strong> Vaso finale 7&ndash;15 L (lo shock da trapianto è rischioso per le autoflower, quindi molti coltivatori partono direttamente nel vaso finale)</li>
    <li><strong>Fotoperiodiche (tenda piccola):</strong> Vaso finale 11&ndash;15 L</li>
    <li><strong>Fotoperiodiche (tenda grande, vegetativa lunga):</strong> 20&ndash;30 L</li>
    <li><strong>Vasi in tessuto</strong> fortemente raccomandati: potano le radici con l'aria e prevengono l'attorcigliamento radicale che i vasi di plastica rigida creano</li>
</ul>
`
  },

  "tent-ventilation-guide": {
    title: "Ventilazione della tenda: Guida completa ai CFM",
    body: `
<h2>Perché la ventilazione è importante</h2>
<p>La ventilazione è la spina dorsale del clima della tua tenda. Svolge quattro funzioni critiche: rimuove il calore in eccesso generato dalle luci, scambia l'aria esausta con aria fresca ricca di CO2, regola l'umidità sostituendo l'aria umida della tenda con aria esterna più secca e mantiene la pressione negativa per catturare gli odori nel filtro a carbone.</p>
<p>Senza ventilazione adeguata, le temperature salgono incontrollabilmente, il CO2 si esaurisce (le piante lo consumano più velocemente di quanto si diffonda naturalmente), l'umidità sale a livelli pericolosi e l'odore fuoriesce da ogni cucitura e cerniera.</p>

<h2>Calcolare i requisiti CFM</h2>
<p>CFM (Cubic Feet per Minute &mdash; piedi cubici al minuto) misura quanta aria la tua ventola sposta. L'obiettivo è scambiare tutta l'aria nella tenda almeno una volta ogni 1&ndash;3 minuti.</p>

<h3>Passo 1: Calcola il volume della tenda</h3>
<p>Moltiplica lunghezza x larghezza x altezza (tutto in piedi). Per tende metriche, converti prima in piedi o usa i metri cubi e moltiplica per 35,3 per ottenere i piedi cubici.</p>
<ul>
    <li><strong>Tenda 60x60x160 cm:</strong> 2 x 2 x 5,2 = 20,8 ft3</li>
    <li><strong>Tenda 120x120x200 cm:</strong> 3,9 x 3,9 x 6,6 = 100 ft3</li>
    <li><strong>Tenda 240x120x200 cm:</strong> 7,9 x 3,9 x 6,6 = 203 ft3</li>
</ul>

<h3>Passo 2: Applica i moltiplicatori</h3>
<p>I CFM di base equivalgono al volume della tenda (per uno scambio d'aria al minuto). Poi applica i moltiplicatori per le condizioni reali:</p>
<ul>
    <li><strong>Filtro a carbone:</strong> Aggiungi 25% (il filtro restringe il flusso d'aria). Moltiplica per 1,25.</li>
    <li><strong>Lunghezza e curve dei condotti:</strong> Aggiungi 10% per ogni curva a 90 gradi e 5% per metro di condotto. Setup tipico con una curva e 2 metri: moltiplica per 1,2.</li>
    <li><strong>Alto calore (luce potente in tenda piccola):</strong> Aggiungi 20%. Moltiplica per 1,2.</li>
    <li><strong>Clima umido:</strong> Aggiungi 15%. Moltiplica per 1,15.</li>
</ul>

<h3>Calcolo esempio</h3>
<p>Tenda 120x120x200 cm, filtro a carbone, 1 curva, 2m condotto, LED 480W:</p>
<p>100 ft3 x 1,25 (filtro) x 1,2 (condotto) x 1,2 (calore) = <strong>180 CFM necessari</strong></p>

<blockquote>
    <strong>Consiglio:</strong> Il Calcolatore Ventilazione di GrowVPD Pro nella scheda Attrezzatura fa questi calcoli per te. Inserisci le dimensioni della tenda, la lunghezza del condotto, il numero di curve e se hai un filtro a carbone. L'output è il CFM minimo e le dimensioni di ventola raccomandate.
</blockquote>

<h2>Pressione negativa</h2>
<p>La pressione negativa significa che la ventola di estrazione tira più aria dalla tenda di quanta ne entri attraverso gli ingressi passivi. Questo crea un leggero vuoto che:</p>
<ul>
    <li><strong>Garantisce che tutta l'aria passi attraverso il filtro a carbone</strong> prima di uscire dalla tenda, eliminando perdite di odore attraverso cerniere e cuciture</li>
    <li><strong>Attira aria fresca</strong> attraverso le aperture di ingresso, fornendo un apporto d'aria passivo senza bisogno di una seconda ventola</li>
    <li><strong>Stabilizza le pareti della tenda.</strong> Se le pareti della tenda si ritirano leggermente verso l'interno, hai la pressione negativa. È normale e desiderabile.</li>
</ul>

<div class="warning-box">
    <strong>Troppa pressione negativa</strong> fa collassare le pareti della tenda significativamente verso l'interno, riducendo lo spazio utilizzabile e potenzialmente schiacciando le piante. Se succede, apri un'altra apertura di ingresso passivo o riduci leggermente la velocità della ventola.
</div>

<h2>Dimensionamento del filtro a carbone</h2>
<p>Il filtro a carbone deve corrispondere ai CFM della tua ventola. Un filtro sottodimensionato restringe il flusso d'aria e può lasciare passare l'odore. Un filtro sovradimensionato va bene &mdash; durerà solo più a lungo.</p>
<ul>
    <li><strong>Filtri da 4 pollici (100mm):</strong> Tipicamente per 150&ndash;200 CFM. Adatti per tende 60x60 e piccole 120x60.</li>
    <li><strong>Filtri da 6 pollici (150mm):</strong> Tipicamente per 300&ndash;400 CFM. Scelta standard per tende 120x120.</li>
    <li><strong>Filtri da 8 pollici (200mm):</strong> Per 500&ndash;750 CFM. Per tende 240x120 o più grandi.</li>
</ul>

<h2>Raccomandazioni ventola per dimensione tenda</h2>
<ul>
    <li><strong>60x60 cm:</strong> Ventola da 4 pollici, 100&ndash;150 CFM (AC Infinity Cloudline T4, Mars Hydro 4")</li>
    <li><strong>120x120 cm:</strong> Ventola da 6 pollici, 300&ndash;400 CFM (AC Infinity Cloudline T6, Mars Hydro 6")</li>
    <li><strong>240x120 cm:</strong> Ventola da 8 pollici, 500&ndash;750 CFM, o due ventole da 6 pollici</li>
    <li><strong>Stanze più grandi:</strong> Ventole in-line commerciali o multiple unità da 8 pollici</li>
</ul>

<h2>Ventole di circolazione (dentro la tenda)</h2>
<p>La ventola di estrazione gestisce il ricambio d'aria, ma dentro la tenda hai bisogno anche di ventole di circolazione per prevenire sacche d'aria stagnante:</p>
<ul>
    <li><strong>Clip fan oscillanti:</strong> Si agganciano alle aste della tenda e forniscono un flusso d'aria a ventaglio sulla chioma. Una per ogni angolo della tenda nelle tende grandi.</li>
    <li><strong>Non puntare le ventole direttamente sulle piante.</strong> Vento costante diretto causa "wind burn" &mdash; bordi foglie arricciate e secche. Usa flusso indiretto e oscillante.</li>
    <li><strong>Flusso sotto la chioma:</strong> Posiziona una piccola ventola sotto la chioma per far circolare l'aria intorno alla base delle piante. Questo previene l'accumulo di umidità nella chioma bassa e riduce l'ambiente favorevole ai parassiti.</li>
</ul>

<blockquote>
    <strong>Consiglio:</strong> Se usi ventole AC Infinity o Mars Hydro connesse tramite GrowVPD Pro, l'app può regolare automaticamente la velocità della ventola in base a temperatura, umidità o valori VPD. Questo fornisce ventilazione dinamica che si adatta alle condizioni mutevoli durante la giornata.
</blockquote>

<h2>Errori comuni nella ventilazione</h2>
<ul>
    <li><strong>Far funzionare la ventola di estrazione a timer invece che continuamente.</strong> Quando la ventola è spenta, temperatura e umidità salgono rapidamente. Lascia la ventola in funzione continua a velocità regolata.</li>
    <li><strong>Sigillare tutti gli ingressi passivi.</strong> La ventola di estrazione ha bisogno che l'aria entri. Se tutti gli ingressi sono sigillati, la ventola lavora contro il vuoto e non riesce a spostare l'aria efficacemente.</li>
    <li><strong>Posizionare il filtro a carbone fuori dalla tenda.</strong> Il filtro dovrebbe essere dentro la tenda, collegato direttamente alla ventola. Flusso: aria della tenda &rarr; filtro a carbone &rarr; ventola &rarr; condotto &rarr; fuori.</li>
    <li><strong>Ignorare la ventilazione notturna.</strong> Quando le luci si spengono, molti coltivatori riducono o fermano la ventilazione. Ma è in quel periodo che l'umidità schizza in alto. Lascia l'estrazione accesa, solo a velocità ridotta.</li>
</ul>
`
  },

  "privacy-security-guide": {
    title: "Privacy e sicurezza: Blocco PIN, modalità stealth e protezione foto",
    body: `
<h2>Perché la privacy conta per i coltivatori</h2>
<p>La coltivazione indoor è legale in molti luoghi, ma questo non significa che vuoi che chiunque prenda in mano il tuo telefono veda il tuo diario di coltivazione, i dati del raccolto e le foto quotidiane. Che ti preoccupi di coinquilini, colleghi o chiunque possa prendere in prestito il tuo telefono, GrowVPD Pro fornisce diversi livelli di protezione della privacy.</p>

<h2>Blocco PIN e autenticazione biometrica</h2>
<p>La funzione di sicurezza più basilare è bloccare l'app dietro un PIN o l'autenticazione biometrica (impronta digitale o riconoscimento facciale).</p>

<h3>Impostare il blocco PIN</h3>
<ol>
    <li>Apri le <strong>Impostazioni</strong> in GrowVPD Pro</li>
    <li>Scorri alla sezione <strong>Sicurezza</strong></li>
    <li>Tocca <strong>Imposta PIN</strong></li>
    <li>Inserisci un PIN a 4&ndash;6 cifre e confermalo</li>
    <li>L'app ora richiederà questo PIN ogni volta che viene aperta o riportata in primo piano dal background</li>
</ol>

<h3>Autenticazione biometrica</h3>
<p>Se il tuo telefono supporta impronte digitali o riconoscimento facciale, puoi abilitare lo sblocco biometrico come complemento (o sostituto) al PIN. È più veloce e comodo mantenendo lo stesso livello di sicurezza.</p>
<ol>
    <li>In Impostazioni &gt; Sicurezza, abilita <strong>Autenticazione biometrica</strong></li>
    <li>L'app usa il sistema biometrico integrato del telefono</li>
    <li>Se la biometria fallisce (dita bagnate, mascherina), l'app torna al PIN</li>
</ol>

<h3>Blocco in background</h3>
<p>GrowVPD Pro si blocca automaticamente quando passi a un'altra app o lo schermo del telefono si spegne. Quando torni nell'app, devi autenticarti di nuovo. Questo impedisce a chiunque di accedere all'app se lasci il telefono sbloccato e incustodito.</p>

<blockquote>
    <strong>Consiglio:</strong> Il blocco si attiva immediatamente quando l'app va in background. Non c'è alcun ritardo. Anche se qualcuno afferra il tuo telefono mentre stai passando tra le app, il diario di coltivazione è già bloccato.
</blockquote>

<h2>Privacy delle foto</h2>
<p>Per impostazione predefinita, le foto scattate in GrowVPD Pro (o aggiunte alle annotazioni del diario) possono essere visibili nella galleria del telefono, in Google Photos e nei servizi di backup cloud. La funzione <strong>Privacy foto</strong> (Pro) lo impedisce.</p>

<h3>Come funziona</h3>
<ul>
    <li>Quando la Privacy foto è abilitata, le foto di coltivazione vengono salvate nella cartella interna privata dell'app</li>
    <li>Questi file sono esclusi dal media scanner di sistema, quindi non appaiono nella galleria, Google Photos o qualsiasi altra app multimediale</li>
    <li>Le foto sono visibili solo dentro GrowVPD Pro &mdash; nelle annotazioni del diario, nel timelapse e nelle funzioni di esportazione</li>
    <li>Se qualcuno apre la galleria del telefono, non vedrà alcuna traccia delle tue foto di coltivazione</li>
</ul>

<h3>Abilitare la privacy foto</h3>
<ol>
    <li>Vai a <strong>Impostazioni &gt; Privacy</strong></li>
    <li>Abilita <strong>Nascondi foto dalla galleria</strong></li>
    <li>Le foto esistenti verranno spostate nella cartella privata</li>
    <li>Tutte le foto future scattate tramite l'app verranno salvate privatamente per impostazione predefinita</li>
</ol>

<div class="warning-box">
    <strong>Avviso backup:</strong> Le foto in modalità privata non vengono salvate da Google Photos, iCloud o qualsiasi servizio di backup automatico. Per proteggere dalla perdita di dati, usa la funzione di esportazione integrata di GrowVPD Pro per backup manuali, o esporta coltivazioni specifiche come PDF/JSON.
</div>

<h2>Modalità stealth (icona app mascherata)</h2>
<p>Per la massima discrezione, la modalità Stealth cambia l'icona e il nome dell'app nella schermata home in modo che non sembri affatto un'app di coltivazione.</p>

<h3>Cosa cambia</h3>
<ul>
    <li>L'icona dell'app cambia in un design generico e discreto (calcolatrice, meteo o icona utilità)</li>
    <li>Il nome dell'app nella schermata home cambia in qualcosa di neutrale</li>
    <li>L'app funziona in modo identico &mdash; cambia solo l'aspetto esterno</li>
    <li>Quando aperta, appare la normale interfaccia GrowVPD Pro (dietro il blocco PIN, ovviamente)</li>
</ul>

<h3>Abilitare la modalità Stealth</h3>
<ol>
    <li>Vai a <strong>Impostazioni &gt; Privacy</strong></li>
    <li>Abilita <strong>Modalità Stealth</strong></li>
    <li>Scegli lo stile di mascheramento dalle opzioni disponibili</li>
    <li>Il cambio dell'icona può richiedere alcuni secondi mentre Android aggiorna il launcher</li>
</ol>

<blockquote>
    <strong>Consiglio:</strong> Combina tutte e tre le funzioni per la massima privacy: Blocco PIN (impedisce accesso non autorizzato) + Privacy foto (nasconde le foto dalla galleria) + Modalità Stealth (nasconde l'app stessa). Insieme, non rimane alcuna traccia visibile di attività di coltivazione sul tuo telefono.
</blockquote>

<h2>Sicurezza dei dati</h2>
<p>GrowVPD Pro salva tutti i dati localmente sul tuo dispositivo. Non ci sono account cloud, nessun server che salva i tuoi dati di coltivazione e nessuno strumento di analisi che traccia le annotazioni del tuo diario. I tuoi dati non lasciano mai il telefono a meno che tu non li esporti esplicitamente.</p>
<ul>
    <li><strong>Database:</strong> Salvato localmente nell'archiviazione privata dell'app (database Room)</li>
    <li><strong>Foto:</strong> Salvate localmente sul dispositivo (cartella privata se Privacy foto è abilitata)</li>
    <li><strong>Credenziali dispositivi smart:</strong> Salvate localmente, trasmesse solo alle rispettive API delle piattaforme (Tuya, AC Infinity ecc.) tramite connessioni crittografate</li>
    <li><strong>Nessun account richiesto:</strong> GrowVPD Pro non richiede di creare un account o effettuare il login</li>
</ul>

<h2>Checklist sicurezza</h2>
<ul>
    <li>Blocco PIN o biometrico abilitato</li>
    <li>Privacy foto abilitata (foto nascoste dalla galleria)</li>
    <li>Modalità Stealth abilitata (icona mascherata)</li>
    <li>Esportazioni regolari per il backup (perché le foto private non vengono salvate nel cloud)</li>
    <li>Sicurezza a livello di telefono (blocco schermo, crittografia) come prima linea di difesa</li>
</ul>
`
  },

  "language-setup": {
    title: "Impostazione lingua: 11 lingue disponibili",
    body: `
<h2>Localizzazione completa, non solo traduzione parziale</h2>
<p>Molte app affermano di supportare più lingue, ma traducono solo i menu principali e lasciano guide, messaggi di errore e termini tecnici in inglese. GrowVPD Pro fa diversamente: <strong>tutto è tradotto</strong>. Ogni pulsante, ogni etichetta, ogni guida, ogni tooltip, ogni descrizione di malattia delle piante, ogni etichetta nel calcolatore nutrienti &mdash; tutte le oltre 1.390 stringhe di testo sono completamente tradotte in tutte le 11 lingue supportate.</p>

<h2>Lingue disponibili</h2>
<ul>
    <li><strong>Inglese (EN)</strong> &mdash; Lingua predefinita</li>
    <li><strong>Ceco (CS)</strong> &mdash; Ceco completo con diacritici corretti</li>
    <li><strong>Tedesco (DE)</strong> &mdash; Deutsch</li>
    <li><strong>Spagnolo (ES)</strong> &mdash; Espa&ntilde;ol</li>
    <li><strong>Olandese (NL)</strong> &mdash; Nederlands</li>
    <li><strong>Francese (FR)</strong> &mdash; Fran&ccedil;ais</li>
    <li><strong>Italiano (IT)</strong> &mdash; Italiano</li>
    <li><strong>Portoghese (PT)</strong> &mdash; Portugu&ecirc;s</li>
    <li><strong>Polacco (PL)</strong> &mdash; Polski</li>
    <li><strong>Tailandese (TH)</strong> &mdash; &#3652;&#3607;&#3618;</li>
    <li><strong>Ebraico (HE)</strong> &mdash; con supporto completo per layout da destra a sinistra (RTL)</li>
</ul>

<h2>Come cambiare lingua</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Apri Impostazioni</h3>
    <p>Tocca la scheda <strong>Impostazioni</strong> (icona ingranaggio) in fondo allo schermo.</p>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Trova l'opzione Lingua</h3>
    <p>Scorri fino alla sezione <strong>Generale</strong>. Tocca <strong>Lingua</strong>. Apparirà il selettore di lingua con tutte le 11 lingue disponibili.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Seleziona la tua lingua</h3>
    <p>Tocca la lingua preferita. L'intera interfaccia dell'app si aggiorna immediatamente &mdash; nessun riavvio necessario. Tutte le schede, i menu, le guide, i calcolatori e le descrizioni passano alla lingua scelta.</p>
</div>

<blockquote>
    <strong>Consiglio:</strong> L'impostazione della lingua è indipendente dalla lingua di sistema del telefono. Puoi usare il telefono in inglese ma eseguire GrowVPD Pro in tedesco, o qualsiasi altra combinazione.
</blockquote>

<h2>Cosa viene tradotto</h2>
<p>Quando cambi lingua, si aggiorna tutto questo:</p>
<ul>
    <li><strong>Tutti gli elementi UI:</strong> Nomi delle schede, pulsanti, etichette, menu, dialoghi</li>
    <li><strong>Grafico VPD:</strong> Etichette degli assi, nomi delle fasi, tooltip</li>
    <li><strong>Guida PPFD:</strong> Raccomandazioni luci, calcoli DLI, consigli specifici per fase</li>
    <li><strong>Diario di coltivazione:</strong> Nomi delle fasi (Piantina, Vegetativa, Fioritura, Raccolto), etichette dei campi, testi segnaposto</li>
    <li><strong>Guida malattie e parassiti:</strong> Tutti i nomi delle malattie, descrizioni, sintomi e raccomandazioni di trattamento</li>
    <li><strong>Guida alle piante:</strong> Tecniche di coltivazione, metodi di allenamento, descrizioni dei substrati</li>
    <li><strong>Calcolatore nutrienti:</strong> Nomi degli elementi, etichette delle unità, istruzioni di miscelazione</li>
    <li><strong>Scheda Attrezzatura:</strong> Categorie attrezzature, campi profilo, calcolatore ventilazione</li>
    <li><strong>Scheda Automazione:</strong> Gestione stanze/tende, tipi di dispositivo, condizioni delle regole, descrizioni azioni</li>
    <li><strong>Impostazioni:</strong> Tutte le etichette delle opzioni e descrizioni</li>
    <li><strong>Notifiche:</strong> Testi dei promemoria, avvisi dell'automazione, riepiloghi giornalieri</li>
    <li><strong>Template di coltivazione:</strong> Descrizioni dei template, fasi preimpostate, programmi nutrizionali</li>
    <li><strong>Messaggi di errore e testi di aiuto</strong></li>
</ul>

<h2>Supporto RTL (da destra a sinistra) per l'ebraico</h2>
<p>L'ebraico è una lingua scritta da destra a sinistra, che richiede il mirroring dell'intero layout dell'interfaccia. GrowVPD Pro supporta completamente il layout RTL quando l'ebraico è selezionato:</p>
<ul>
    <li>Il testo è allineato a destra</li>
    <li>Gli elementi di navigazione sono specchiati (il pulsante indietro si sposta a destra)</li>
    <li>Liste e schede invertono la direzione del layout</li>
    <li>Grafici e visualizzazioni dati si adattano all'ordine di lettura RTL</li>
</ul>

<h2>Lingua e dati</h2>
<p>Cambiare lingua <strong>non influisce</strong> sui tuoi dati esistenti. Le annotazioni del diario, i dati dei sensori, le regole di automazione e tutti i dati registrati restano esattamente come sono. Cambiano solo le etichette dell'interfaccia. Se hai scritto note nel diario in inglese e passi al tedesco, le tue note restano in inglese &mdash; cambiano solo le etichette dei campi intorno ad esse in tedesco.</p>

<h2>Qualità delle traduzioni</h2>
<p>Tutte le traduzioni sono mantenute dal team di sviluppo con il contributo di madrelingua della comunità di coltivatori. La terminologia tecnica della coltivazione (VPD, PPFD, DLI, EC, pH) è mantenuta nella forma riconosciuta a livello internazionale in tutte le lingue, poiché sono termini scientifici universali usati dai coltivatori in ogni lingua.</p>

<blockquote>
    <strong>Vuoi aiutare a migliorare le traduzioni?</strong> Se trovi un errore di traduzione o hai un suggerimento di formulazione migliore nella tua lingua, contattaci su Discord. I contributi della community hanno migliorato significativamente la qualità delle traduzioni in tutte le 11 lingue.
</blockquote>
`
  }

};
