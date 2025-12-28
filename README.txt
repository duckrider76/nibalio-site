
Nibalio - demo sito (risorse incluse)

Contenuto:
- index.html
- styles.css
- script.js
- logo.png  (se presente nella workspace)
- texture.jpg (se presente nella workspace)

Anteprima locale:
1. Estrai il contenuto del file ZIP in una cartella.
2. Apri index.html con il tuo browser (doppio click).
   - Nota: alcune versioni del browser limitano l'accesso a file locali; in tal caso usa un piccolo server locale:
     - Python 3: nella cartella del sito esegui `python -m http.server 8000` e visita http://localhost:8000/
     - oppure usa Live Server di VSCode.

Personalizzazioni utili:
- Cambiare la velocità della transizione: modifica SLOWNESS_FACTOR in script.js (più alto => più lento).
- Cambiare colore di base: modifica background in body (styles.css).
- Per deploy su Netlify/Vercel: trascina la cartella o collega il repo. Ricordati di caricare logo.png e texture.jpg nel sito.

Domande? Dimmi se vuoi:
- altri layout (menu, CTA, shop)
- versione con nav mobile / hamburger
- file in formato SVG per il logo (se hai l'SVG posso sostituirlo)
