Autorisering:

Ikke-autorisert brukere har tilgang til alle kortene med data fra API-et i programmet, som inkluderer navnet på foredragsholderen, tittel på foredraget, romnavn og tid (dato og klokkeslett). 
Når de velger et kort og klikker på det, blir de tatt til detaljsiden for det valgte kortet, hvor de kan se all data fra GET-forespørslene til 
/api/speakers/,
 /api/talks/
, og /api/rooms/

Brukere som foredragsholdere: Disse brukerne har et eget panel som gjelder deres foredrag, der de kan legge til, oppdatere og slette informasjon. 
Alt de gjør i panelet oppdateres på kortene, og de har også tilgang til sine egne kort. De kan også se alle andre foredragsholdere, foredrag og rom.

Admin: 
Admin har et eget panel med alle rettigheter, inkludert muligheten til å legge til, oppdatere eller slette data og foredragsholdere. Det kan bare registreres én administrator. 
Når en administrator registreres, skjules valg av rolle i registreringsprosessen. Når siden lastes, sendes en GET-forespørsel til https://crudapi.co.uk/ der administratorbrukeren er opprettet. 
Hvis det finnes en administrator der, skjules hele brukerens rolle, enten det er admin eller foredragsholder. Hvis ikke, forblir rollen synlig under registreringen.

Sideoppbygging: 
Logo | Hjem | Program | Kontakt | Logg inn/Registrer

Hjem: 
Eksempel: 

Konferanse: [Datoer for konferansen]

Workshops: [Dato for workshops] Påmelding åpner [dato]. 

Spesielle arrangementer:

Program: 
Har kortene for hvert arrangement med data fra API-et, som inkluderer navnet på foredragsholderen, tittel på foredraget, romnavn og tid (dato og klokkeslett). 
Når de velger et kort og klikker på det, blir de tatt til detaljsiden for det valgte kortet, hvor de kan se all data fra GET-forespørslene til 
/api/speakers/, 
/api/talks/,
/api/rooms/

På detaljsiden kan besøkende som skal på konferansen melde seg på ved å klikke på "Meld deg på denne konferansen." 
Når de klikker på knappen for påmelding, dukker det opp en modalvindu med feltene for navn, etternavn og e-post. 
Etter å ha fylt ut skjemaet, klikker de på "Send." 
Dette skjemaet skal også lagres på https://crudapi.co.uk/, sammen med navnet på foredragsholderen, tittel på foredraget, romnavn og tid (dato og klokkeslett).

Kontakt: 
En enkel kontaktside.
