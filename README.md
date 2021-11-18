

## Data tellen en omzetten in bar chart met mandemtremendous-barcharts en D3
<p align="center"><img src="https://github.com/mandemt/tt-fd/blob/main/images/totaal.png" width="50%"></img></p>

### Introductie
mandemtremendous-barcharts is een tool om eenvoudig bar charts te kunnen maken binnen een HTML pagina. Er wordt hierbij gebruik gemaakt van javascript, D3 en html. 
Je kunt de tool eenvoudig runnen op een lokale server en testen met de bestaande json dataset. Echter kun je ook gebruik maken van een eigen dataset, met eenvoudige aanpassingen.

### Installeren

clone deze repository met github Desktop of via de terminal in de folder waar je de repository wilt hebben.:

```terminal
git clone https://github.com/mandemt/tt-fd.git
```
Je kunt niet zomaar het index.html bestand in de browser runnen. Het is aanbevolen om het via een lokale server uit te voeren.

Je kunt het via express renderen en uitvoeren in de browser, of via MAMP. 
Met MAMP hoef je alleen het programma te installeren en uit te kiezen vanaf waar de server gaat runnen.
Daarna zal de server alleen voor jou zichtbaar zijn op een localhost:port naar keuze.

Download MAMP: https://www.mamp.info/en/downloads/

Je kunt de tool in je browser openen door de index van je lokale server als url te gebruiken. Bijvoorbeeld `localhost:8000`
De index.html wordt dan automatisch geladen en je kunt direct een aantal functies proberen

## Functies 
* Filteren op data voor de bar chart
<p align="center"><img src="https://github.com/mandemt/tt-fd/blob/main/images/filter.png" width="25%"></img></p>

Kies in het dropdown menu een vraag uit de dataset. De gegevens zullen dan vanzelf gerenderd worden als bar chart.
Er zijn standaard vragen als value in het HTML bestand gezet. 

```html
    <select name="filter">
      <option value="zin" selected>Hoeveel zin heb je in de techtrack?</option>
      <option value="verdieping">Op welke verdieping studeer je het liefste?</option>
      <option value="zuivelproduct">Wat is je favoriete zuivelproduct?</option>
      <option value="oogkleur">Wat is je oogkleur?</option>
      <option value="dier">Wat is je favoriete huisdier?</option>
    </select>

```
Als je `option value=""` veranderd naar een value die slaat op een variabele in de dataset, zal die betreffende data vanaf dan geselecteerd worden. Je kunt het proberen door bijvoorbeeld zelf een variabele en waarde aan te maken in de dataset `tt-dataset.json` en deze als value in te stellen in HTML.

* Filteren op frequentie

Je kunt aangeven met de slider welke data je wilt zien van een frequentie 0 - 10. Deze zorgt ervoor dat de bar chart zich aanpast op hoe vaak een variabele voorkomt in de dataset. Als je hem bijvoorbeeld op 10 zet. Krijg je alleen variabelen te zien die meer dan 10 keer zijn voorgekomen.
<p align="center"><img src="https://github.com/mandemt/tt-fd/blob/main/images/tien.png" width="50%"></img></p>


## Voor meer informatie

* documentatie & bronnen:
* https://d3js.org/
* https://github.com/mandemt/tt-fd/wiki/
* Tech Track uitleg en opdracht: https://github.com/cmda-tt
* Hogeschool van amsterdam

mandemt






