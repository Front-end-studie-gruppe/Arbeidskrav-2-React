Autorisering:
Ikke-autorisert brukere har tilgang til alle kortene med data fra API-et i programmet, som inkluderer navnet på foredragsholderen, tittel på foredraget, romnavn.
Når de velger et kort og klikker på det, blir de tatt til detaljsiden for det valgte kortet, hvor de kan se all data fra GET-forespørslene til
/api/speakers/,
/api/talks/
, og /api/rooms/

Admin:
Admin har et eget panel med alle rettigheter, inkludert muligheten til å legge til, oppdatere eller slette data. Det kan bare registreres én administrator.
Når en administrator registreres. Når siden lastes, sendes en GET-forespørsel til https://crudapi.co.uk/ der administratorbrukeren er opprettet.

Sideoppbygging:
Logo/Home | Program | Contact | My account

Program: Program | All speakers | All talks | All avaliable rooms

Hjem:
Introduksjon til Javazone + bilde

Program:
Har kortene for hvert arrangement med data fra API-et, som inkluderer navnet på foredragsholderen, tittel på foredraget, romnavn.
Når de velger et kort og klikker på det, blir de tatt til detaljsiden for det valgte kortet, hvor de skal kunne se all data fra GET-forespørslene til
/api/speakers/,
/api/talks/,
/api/rooms/

All speakers:
Henter alle foredragsholdere og legger disse i en liste. Elementene i denne listen skal være mulig å trykke på for å navigere seg til mer informasjon om den valgte.

All talks:
Henter alle foredrag og legger disse i en liste. Elementene i denne listen skal være mulig å trykke på for å navigere seg til mer informasjon om den valgte.

All avaliable rooms:
Henter alle rom og legger disse i en liste.

Contact:
En enkel kontaktside.
