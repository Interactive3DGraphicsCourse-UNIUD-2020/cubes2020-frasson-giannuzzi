30 ottobre:
-Modifica codice di partenza per la lettura delle heightmap utilizzando una funzione Loader invece che onLoad
2 novembre:
-Ottimizzazione a livello di z-index per non caricare le facce non visibili a schermo
-Creazione dei lati attorno all'heightmap in base all'altezza
-Inserimento di cubi mancanti nelle zone in cui le righe erano troppo distanti tra loro risultando in una riga vuota
3 novembre:
-Prime animazioni con passaggio dell'heightmap da uno stato piatto (altezza = 0) alla sua altezza proporzionata rispetto X e Z
-Inserimento dei vari colori in base al valore Y di ogni cubo
5 novembre:
-Importazione libreria grafica datGUI per la creazione di una GUI del progetto per modificare camera e heightmap
-Funzioni per spostare la camera e ruotare l'heightmap rispetto i 3 assi
6 novembre:
-Bug fixing dei movimenti di camera con la GUI in quanto una precisione ridotta dello slider causava spostamenti di camera/heightmap indesiderati
-Creazione del morphing con possibilità di passare tra due heightmap diverse
7 novembre:
-Morphing migliorato con la risoluzione del problema dei cubi mancanti (se l'heightmap 1 ne aveva meno rispetto l'heightmap 2)
-Possibilità di effettuare ulteriori modifiche sull'heightmap e camera (settaggi di default e scalatura)