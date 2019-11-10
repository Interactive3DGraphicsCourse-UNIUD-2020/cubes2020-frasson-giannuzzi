# HeightMap Morphing by Francesco & Omar

![Image from Minecraft](/textures/gif.gif)

# Obiettivi
Dare una visualizzazione delle HeightMap all'utente mettendo a disposizione dello stesso alcune variabili tramite GUI che gli permettano di interagire.
1. Rappresentazione della HeightMap tramite dei cubi
	- Riempimento di eventuali buchi tramite inserimento di sottocubi (in numero minimo così da ottimizzare a massimo)
	- Far si che raggiunga la rappresentazione attraverso un animazione
2. Gestione di più HeightMap
	- Passaggio da una forma ad un altra
	- Istanziazione dinamica dei cubi "tappa buchi" in base alle necessità e rimozione dei superflui
3. Implementazione di una GUI che dia la possibilità all'utente di interagire con la scena
	- Reset della camera
	- Cambio delle scale
	- Alterazione degli oggetti di scena: 
		- Cambio della heightmap utilizzata 
		- Cambio colore da scala di grigi ad "arcobaleno" (scala HSL)
4. Lasciare libertà all'untente tramite l'orbit control, libreria che permette l'interazione tramite puntatore con la camera e lo spazio 3D in esso ospitata. 

# Sviluppo
Una volta implementata una versione base del Builder che ha permesso la costruzione di un "mantello" di cubi dimensioni height x width dell'immagine data come input sono state sviluppate le funzioni per riempire i buchi (implementate poi nel builder direttamente) e per la distruzione dei figli e cioè dei cubi aggiunti per tappare i buchi causati dalla differenza di altezza al fine di rendere possibile il morphing tra diverse immagini allocando ogni volta il numero necessario di cubi.
A queste funzioni sono state aggiunte una GUI con le relative implementazioni: Funzioni di scala, Rotazone e controllo della telecamera, avvio dell'animazione di innalzamente ed abbassamento dei cubi che vanno a comporre l'hightmap e di cambio di scala cromatica. Nella fase finale è stata scelta una GUI più sobria rimuovendo muovimenti di camera e rotazioni: Nel primo caso sostituendo gli slidere con l'orbit control, nel secondo caso per motivi di FPS.

# Possibili implementazioni non apportate
Attualmente l'applicazione funziona con sole heightmap che codnividono la dimensione di base, questo per motivi di praticità in fase di sviluppo, è stata consdierata e progettata ma non sviluppata la possiibilità di prendere in input immagini con dimensioni differenti.
Altro aspetto riguarda i colori: attualmente la raccolta dei dati non tiene conto del vero colore dell'immagine, o meglio: Lo trasforma direttamente in una scala di grigi mappata tra 0 e 255. Anche in questo casto è stata pensata e progettata un implementazione che però non è stata finalizzata a livello di codice a causa del ridotto tempo a disposizione.
