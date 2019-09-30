<template>
  <page class="zwanger">
     
     <img src="../../public/images/fotos/babyschoenen3.jpg" class=pagestarter>
    
    <div class=pagetitle>
    <h1>ZWANGER</h1>
     </div>

    <p class=standaardp>
      Of het nu je eerste keer is of je bent al een aantal keer zwanger geweest, het blijft een bijzondere ervaring om zwanger te zijn. In deze periode zal er een hele hoop op je af komen, zowel fysiek als emotioneel. 
      Iedere zwangerschap is uniek en elke vrouw zal haar zwangerschap op een andere manier ervaren. Elke moeder heeft zo haar eigen verhaal. </p>
    <p class=standaardp>
      Tijdens je zwangerschap zal je waarschijnlijk een hoop vragen hebben over wat er allemaal gaat gebeuren. Graag helpen we je hierin. 
      Voor ons is het belangrijk om voor jou tijd vrij te maken om je zo goed mogelijk te kunnen begeleiden in jouw verhaal. </p>
    <p class=standaardp>
      Je zult tijdens je zwangerschap regelmatig bij ons langskomen op het spreekuur en houden we jouw voortgang samen goed in de gaten. 
      We helpen je met het doorlopen van verschillende onderzoeken, we maken echo’s, we houden de gezondheid van jou en de baby goed in de gaten en we helpen je voorbereiden richting de bevalling. </p>

   
         
    <v-container fluid grid-list-xl class="tileset">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalKinderwens">
            <v-img src=../../public/images/fotos/modalbabywens.jpg></v-img>
            <v-card-title primary class="title">Kinderwens</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalZwanger">
            <v-img src=../../public/images/fotos/modalzwanger2.jpg></v-img>
            <v-card-title primary class="title">Zwanger</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalControles">
            <v-img src=../../public/images//fotos/modalcontroles.jpg></v-img>
            <v-card-title primary class="title">Zwangerschapscontroles</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalEchos">
            <v-img src=../../public/images/fotos/modalechos.jpg></v-img>
            <v-card-title primary class="title">Echo's</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalOnderzoeken">
            <v-img src=../../public/images/fotos/modalonderzoeken.jpg></v-img>
            <v-card-title primary class="title">Onderzoeken</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalVoeding">
            <v-img src=../../public/images/fotos/modalvoeding.jpg></v-img>
            <v-card-title primary class="title">Voeding</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalCursus">
            <v-img src=../../public/images/fotos/modalcursus.jpg></v-img>
            <v-card-title primary class="title">Cursus</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalKinkhoest">
            <v-img src=../../public/images/fotos/modalvaccinatie.jpg></v-img>
            <v-card-title primary class="title">Kinkhoest</v-card-title>
            </v-card>
        </v-flex>  
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalPraktisch">
            <v-img src=../../public/images/fotos/modalregelen.jpg></v-img>
            <v-card-title primary class="title">Praktisch</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalChecklist">
            <v-img src=../../public/images/fotos/modalchecklist.jpg></v-img>
            <v-card-title primary class="title">Checklist</v-card-title>
            </v-card>
        </v-flex>
              
       </v-layout>
    </v-container>
  

  
      <v-footer color="rgba(233, 233, 233, 1)" >
      <v-col>
      <div class=footer1>
  <div class="column">
    <strong>MENU</strong>
          <ul class="pa-0">
        <li class=footertekst><router-link class=footertekststyle to="/">Home</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/praktijk">Praktijk</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/zwanger">Zwanger</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/bevalling">Bevalling</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/kraamtijd">Kraamtijd</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/anticonceptie">Anticonceptie</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/nieuws">Nieuws</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/contact">Contact</router-link></li>
      </ul>
  </div>
  <div class="column">
    <strong>CONTACT</strong><br>
    TELEFOON<br>
    06 151 434 16<br><br>
    E-MAIL<br>
    info@veiligzwangerambacht.nl<br><br>
    <strong>INFORMATIE</strong>
    <ul class="pa-0">
        <li class=footertekst @click="showModalPrivacy">Privacy</li> 
        <li class=footertekst @click="showModalKlachten">Klachtenregeling</li>
      </ul>
  </div>
  <div class="column">
    
    <strong>LOCATIES</strong><br>
    <span>DE ZEESTER</span><br>
    Tromplaan 49<br>
    3342TR H.I. Ambacht<br><br>
    <span>AVELINGEN</span><br>
    Avelingen 1<br>
    3343EA H.I. Ambacht
  </div>
</div>


      </v-col>
    </v-footer>

     <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
      <strong>© {{ new Date().getFullYear() }}</strong> - Verloskundigenpraktijk <strong>Veilig Zwanger Ambacht</strong>
      </v-col>
    </v-footer>

<!-- MODALS -->

<modal v-show="isModalKinderwensVisible" @close="closeModalKinderwens">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbabywens.jpg">
                  <p class=modaltitle>Kinderwens</p>
                  <p class="fucking-p">
                    Heb je een kinderwens of heb je vragen over zwanger worden? Al voordat je zwanger bent kan je bij ons terecht voor begeleiding. Door gezond te leven vergroot je namelijk de kans op een zwangerschap. 
                    Ook vergroot je de kans op een goed verloop van de zwangerschap en leg je de basis voor de gezondheid van je kind. Aan de hand van jouw persoonlijke situatie geven wij adviezen en informatie over gezond zwanger worden. 
                    Ook brengen wij eventuele risico’s in kaart, helpen we je om jouw lichaam en cyclus te leren kennen en begeleiden we je tijdens deze spannende periode van zwanger worden en zwanger zijn. </p> 
                  <p class="fucking-p">  Om je bij ons aan te melden heb je geen verwijzing van de huisarts nodig. Je kunt ons gewoon bellen of mailen. </p>
                  <br><br>              
          </div>
</modal>

<modal v-show="isModalZwangerVisible" @close="closeModalZwanger">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalzwanger2.jpg">
                  <p class=modaltitle>Zwanger</p>
                  <p class="fucking-p">
                    Als je weet dat je zwanger bent kun je je rechtstreeks bij ons aanmelden. Wij begeleiden we je tijdens de zwangerschap, bevalling en ook als de baby geboren is komen we regelmatig bij je thuis langs.  </p> 
                  <p class="fucking-p">In de zwangerschap houden we de gezondheid van jou en je kind in de gaten en geven we je advies en informatie over jouw zwangerschap. Daarvoor kom je regelmatig bij ons op de praktijk. 
                    In het begin is dat elke vier weken maar naarmate de zwangerschap vordert kom je steeds vaker langs. Aan het eind van de zwangerschap zie wel elkaar zelfs elke week.</p>
                  <p class="fucking-p">Als je zwangerschap normaal verloopt kunnen wij jou alle zorg geven die je nodig hebt. Mochten er problemen ontstaan waarvoor specialistische hulp noodzakelijk is dan overleggen we, 
                    in samenspraak met jou, met een gynaecoloog of een andere specialist. Indien nodig verwijzen we je door. We hebben een goede samenwerking met meerdere ziekenhuizen in de omgeving. Zo kunnen wij jou de zorg geven die het beste bij jou past.</p>
                  <p class="fucking-p">Om je bij ons aan te melden heb je geen verwijzing van de huisarts nodig. Je kunt ons gewoon bellen of mailen om een afspraak te maken voor een kennismakingsgesprek.</p>
                  <br><br>                                  
          </div>
</modal>

<modal v-show="isModalControlesVisible" @close="closeModalControles">          
          <div slot="body" class=modalbody>
              <img class=modalimg src="../../public/images/fotos/modalcontroles.jpg">
                  <p class=modaltitle>Zwangerschapscontroles</p>
                  <p class="fucking-p">
                    Het eerste gesprek is een kennismakingsgesprek. Dat doen we rond de achtste week van de zwangerschap. Het hartje van je baby is heel klein en nog niet te horen. Je voelt waarschijnlijk wel dat je lichaam verandert. </p> 
                  <p class="fucking-p">In de zwangerschap houden we de gezondheid van jou en je kind in de gaten en geven we je advies en informatie over jouw zwangerschap. Daarvoor kom je regelmatig bij ons op de praktijk. 
                    Dit is een mooi moment om van alles door te nemen dat belangrijk is voor je zwangerschap. Daar nemen we ruim de tijd voor. Onderwerpen die aan de orde komen zijn leefstijl en voeding, 
                    bijzondere omstandigheden die van invloed kunnen zijn op de zwangerschap, zoals erfelijke kwesties, voorbereidingen die getroffen moeten worden en de mogelijkheid van echo’s.  </p>
                  <p class="fucking-p">Na het kennismakingsgesprek hebben we regelmatig contact met elkaar. We houden nauwkeurig in de gaten of de zwangerschap volgens plan verloopt. Zijn er geen bijzonderheden, 
                    dan verlopen de controles volgens een vast patroon. De verschillende echo’s die we aanbieden combineren we vaak met de normale zwangerschapscontroles.</p>
                  <br> 
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>12-24 weken: elke 4 weken</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            We zien elkaar nu elke 4 weken. Je kunt het hartje van je baby horen en rond 20 weken voel je hem of haar misschien al een beetje bewegen. Heel bijzonder.

                            Bij elke afspraak controleren we de hartslag van de baby, beoordelen we de groei van je baarmoeder en meten we je bloeddruk.

                            Regelmatig nemen we bloed af om je ijzergehalte en bloedsuiker te controleren. 

                            Dit is een mooi moment om je op te geven voor een zwangerschapscursus. Gymnastiek, yoga, of iets anders wat goed bij je past.

                            Als je wilt, kan je rond de 20e week een afspraak maken voor een 20 weken echo. Daar wordt gekeken naar de structuur en groei van de baby, de hoeveelheid vruchtwater en de ligging van de placenta.
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>25-30 weken: elke 3 weken</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            Vanaf nu kom je iedere 3 weken voor controle. Waarschijnlijk voel je de baby regelmatig bewegen.

                            Behalve controle van je bloeddruk en de groei van de baby houden we de ligging van de baby en de groei van de baarmoeder in de gaten.

                            Mochten er problemen ontstaan waarvoor specialistische hulp noodzakelijk is, dan overleggen we, in overleg met jou, met een gynaecoloog of een andere specialist. Zo nodig verwijzen we je door.
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>31-36 weken: elke 2 weken</v-expansion-panel-header>
                          <v-expansion-panel-content>
                          Je komt nu elke 2 weken langs. Het is belangrijk in deze periode dat je de baby iedere dag voelt bewegen. Bij twijfel kun je altijd tussentijds bellen.

                          Je bloeddruk en de groei en ligging van je baby blijven we controleren. Daarnaast bespreken we je wensen, verwachtingen en vragen over de bevalling en het kraambed.

                          Als er geen bijzonderheden zijn, mag je zelf bepalen of je thuis wilt bevallen of in het ziekenhuis. Denk je erover om thuis te bevallen, dan zijn er in deze periode een aantal voorbereidingen te treffen. 
                          Zo moet je bedenken of je in bed wilt bevallen, op de baarkruk of in het water. Samen bespreken we de mogelijkheden en nemen we door welke spullen je in huis moet halen.
                          
                          Mocht je op het laatste moment toch in het ziekenhuis willen (of moeten) bevallen, dan kan dat natuurlijk ook.
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>37-42 weken: elke week</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            De bevalling kan zich nu elk moment aandienen, daarom zijn de controles nu elke week.

                            Vanaf 37 weken is de baby voldoende ontwikkeld om de overgang te maken naar het leven buiten de baarmoeder. Gemiddeld duurt een zwangerschap 39 tot 42 weken.

                            In deze periode houden we de conditie van jou en je baby goed in de gaten en jij gaat je voorbereiden op de bevalling.
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                   <br><br>              
          </div>
</modal>

<modal v-show="isModalEchosVisible" @close="closeModalEchos">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalechos.jpg">
                  <p class=modaltitle>Echo's</p>
                  <p class="fucking-p">
                    Tijdens de zwangerschap bieden we verschillende echo’s aan.  De echo’s worden gemaakt door Sandra. Zij is naast verloskundige namelijk ook echoscopist. 
                    Welke echo’s voor jouw zwangerschap belangrijk zijn hangt af van hoe de zwangerschap loopt.</p>
                  <p class="fucking-p">Vroege echo: Tijdens de vroege echo wordt er gekeken of de zwangerschap in de baarmoeder zit, of het hartje van de baby klopt en of de zwangerschap er voor nu goed uit ziet. 
                    De baby kan ook worden opgemeten. Aan de hand van deze maat kunnen we schatten hoe oud de baby is. De echte uitgerekende datum kunnen we nu nog niet bepalen, daar is de baby nog te klein voor. </p>
                  <p class="fucking-p">Termijnecho: De termijnecho, de naam zegt het al, heeft als doel om de zwangerschapstermijn vast te stellen. De baby wordt dan van kop tot kont opgemeten en aan de hand van die maat wordt de uitgerekende datum bepaald. 
                    Deze echo vindt plaats tussen 10 en 12 weken, dat is namelijk het beste termijn om de uitgerekende datum te berekenen. Tijdens de echo wordt er ook gekeken of de zwangerschap in de baarmoeder zit, 
                    of het hartje goed klopt en of er bijzonderheden zijn. </p>
                  <p class="fucking-p">20 weken echo: De 20 weken echo behoort tot een van de screeningstesten. Het is een medisch onderzoek waarbij lichamelijke aandoeningen bij de baby opgespoord kunnen worden. 
                    Voor meer informatie over dit onderzoek kan je bij “onderzoeken” kijken. </p>
                  <p class="fucking-p">Groeiecho: Tijdens het tweede deel van de zwangerschap zal de baby zich steeds meer gaan richten op groeien. De groeiecho kan een extra inschatting geven van de groei op dat moment. 
                    Hiervoor wordt de hoofdomtrek, de buikomtrek en de lengte van het bovenbeen van de baby opgemeten. Aan de hand van die maten wordt er een schatting van het gewicht gemaakt. </p>
                  <p class="fucking-p">Liggingsecho: Vanaf 34-36 weken draait de baby met het hoofd naar beneden. Dat is belangrijk voor een normale bevalling. 
                    Tijdens de zwangerschapscontroles is bijna altijd heel duidelijk te voelen hoe de baby in de buik ligt. Met een liggingsecho kan de ligging van de baby worden gecontroleerd. </p>
                  <br><br>              
          </div>
</modal>

<modal v-show="isModalOnderzoekenVisible" @close="closeModalOnderzoeken">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalonderzoeken.jpg">
                  <p class=modaltitle>Onderzoeken</p>
                  <p class="fucking-p">
                    Gelukkig verloopt het merendeel van de zwangerschappen normaal en worden verreweg de meeste kinderen gezond geboren. Waarschijnlijk krijg je dus een gezond kind. 
                    Iedere zwangere vrouw heeft een kleine kans dat haar kind een afwijking heeft. Het kan gaan om een ernstige aandoening of om een afwijking die vanzelf weer verdwijnt of die verholpen kan worden. </p> 
                  <p class="fucking-p">
                    Tijdens de zwangerschap kan je kiezen of je onderzoek wilt doen naar je ongeboren kind om afwijkingen op te sporen. Er zijn twee verschillende onderzoeken in de zwangerschap mogelijk. 
                    De screening op chromosoomafwijkingen en de screening naar lichamelijke afwijkingen bij de baby. Indien je dit wenst geven we je meer informatie over deze onderzoeken in een uitgebreid gesprek.</p> 
                  <p class="fucking-p">Het is een zeer persoonlijke keuze of je wel of niet mee wilt doen aan deze onderzoeken. Wil je tijdens de zwangerschap al weten of je kind afwijkingen heeft? Of wacht je het liever af? 
                    In het gesprek zullen we uitleggen wat de onderzoeken precies inhouden, wat er wel en niet gevonden kan worden en je helpen met het maken van jouw keuze om wel of niet te screenen. 
                    Je bent nooit verplicht om aan deze onderzoeken deel te nemen.</p>                  
                  <br>
                  <p class=modalsubkopje><strong>Screening op chromosoomafwijkingen</strong></p>
                  <p class="fucking-p">Je kan laten onderzoeken of er een verhoogde kans is dat je kind down-, edwards- of patausyndroom heeft. Down-, edwards- en pautausyndroom zijn alle drie aangeboren aandoeningen waarbij het kind een extra chromosoom heeft. 
                    Deze aandoeningen zitten verweven in het DNA van het kind en gaan niet meer over. Er zijn twee verschillende testen waar je uit kan kiezen de combinatietest en de NIPT.</p>
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Combinatietest</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">Met de combinatietest wordt vroeg in de zwangerschap onderzocht of er een verhoogde kans is dat je kind het down-, edwards- of patausyndroom, heeft. 
                              De test bestaat uit een bloedonderzoek bij de moeder en een nekplooimeting bij de baby. </p>

                            <p class="expandp">De nekplooi is een dun vochtlaagje onder de huid in de nek. Hoe dikker de nekplooi, hoe groter de kans is dat de baby het Downsyndroom heeft. De nekplooimeting gebeurt met een echo die gemaakt wordt vroeg in de zwangerschap. 
                              Bij dit onderzoek wordt de dikte van de nekplooi van de baby gemeten. Beide onderzoeken brengen geen risico's met zich mee voor jou of je kind.  </p>
                            
                            <p class="expandp">De uitslagen van de bloedtest en nekplooimeting, in combinatie met jouw leeftijd en de precieze duur van je zwangerschap, bepalen hoe groot de kans is dat je kind een van de syndromen heeft. Het onderzoek geeft geen zekerheid; 
                              het is een kansberekening.</p>
                            
                            <p class="expandp">Bij een verhoogde kans op een kind met een van de syndromen, kun je kiezen voor vervolgonderzoek om zekerheid te krijgen.</p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>NIPT</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">Bij de NIPT wordt er bloed afgenomen van de moeder. In dat bloed zit ook een klein beetje DNA van de placenta van de baby. Dit DNA is bijna altijd hetzelfde als dat van jouw kind. 
                              Het laboratorium bekijkt het DNA in jouw bloed en kan zo onderzoeken of er bij je kind een aanwijzing is voor down-, edwards- of patausyndroom. </p>

                            <p class="expandp">Als je kiest voor de NIPT krijg je ook de keuze of je nevenbevindingen wilt weten. Nevenbevindingen zijn alle andere afwijkingen die bij toeval gevonden worden. 
                              Dit kan gaan om andere chromosoomafwijkingen bij de baby, in de placenta of afwijkingen bij de moeder zelf.</p>
                            <p class="expandp">Zwangere vrouwen kunnen vanaf 1 april 2017 kiezen voor NIPT, maar dat kan alleen als zij meedoen aan een wetenschappelijke studie (TRIDENT 2).</p>
                            <p class="expandp">De NIPT ontdekt meer kinderen met down-, edwards- en patausyndroom en de uitslag van de NIPT klopt vaker dan de uitslag van de combinatietest. Net zoals de combinatietest geeft de NIPT ook geen 100% zekerheid. 
                              Dat betekend dat er een kleine kans is dat de uitslag van het onderzoek niet klopt. Bij een verhoogd risico kan je kiezen voor vervolgonderzoek om zekerheid te krijgen. </p>
                            <p class="expandp">Op <a href="https://www.meerovernipt.nl/" target="_blank">deze</a> website kan je meer informatie vinden over de NIPT.  </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <br>
                  <p class=modalsubkopje style="margin-top: 30px;margin-bottom:10px;text-align:left"><strong>Screening op lichamelijke afwijkingen</strong></p>
                        
                        <v-expansion-panel>
                          <v-expansion-panel-header>20 weken echo</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">De 20 weken echo is een uitgebreid medische onderzoek. Bij dit onderzoek wordt er gekeken naar de ontwikkeling van de organen van de baby. Hierbij kunnen lichamelijk afwijkingen worden opgespoord. 
                            Voorbeelden hiervan zijn een open rug, een open schedel of hartafwijkingen. Verder wordt er gekeken of het kind goed groeit, of er voldoende vruchtwater is en wordt de ligging van de placenta beoordeeld. </p>
        
                            <p class="expandp">Als er met de 20 weken echo geen afwijkingen worden gezien betekent dit niet automatisch dat je kind helemaal gezond is. Niet alle afwijkingen kunnen worden gezien op de 20 weken echo. 
                            Sommige afwijkingen kunnen makkelijk over het hoofd gezien worden. </p>
        
                            <p class="expandp">Als er wel een afwijking bij de 20 weken echo wordt gezien, zijn de gevolgen voor het kind niet altijd duidelijk. Wij zullen dan contact met je opnemen en de uitslag van de 20 weken echo met je bespreken. 
                            Meestal zullen we vervolgonderzoek aanbieden. Het vervolgonderzoek bestaat uit een uitgebreid echoscopisch onderzoek in een gespecialiseerd ziekenhuis en soms ook andere onderzoeken. Je kiest zelf of je vervolgonderzoek wilt. </p>

                            <p class="expandp">Voor de 20 weken echo werken wij samen met een speciaal daarvoor opgeleide echoscopist. Zij heeft veel ervaring met dit specifieke onderzoek. De andere echo’s worden door Sandra gemaakt. </p>
                            
                            <p class="expandp">De 20 weken echo is niet verplicht. Je kiest zelf of je deze echo wilt laten uitvoeren. </p>
                            
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels> 
                  <br>
                   <p class="fucking-p">Op <a href="https://onderzoekvanmijnongeborenkind.nl/" target="_blank">deze</a> website kan je meer informatie opzoeken over de verschillende onderzoeken.  </p>
                   <br>
          </div>
</modal>

<modal v-show="isModalVoedingVisible" @close="closeModalVoeding">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalvoeding.jpg">
                  <p class=modaltitle>Voeding</p>
                  <p class="fucking-p">
                    Vanaf het moment dat je zwanger bent is je lichaam druk bezig met het maken van een nieuw mensenleven. Dit kost jouw lichaam veel energie en voldoende bouwstoffen. 
                    Deze energie en bouwstoffen haal je uit gezonde voeding en voldoende slaap. </p> 
                  <p class="fucking-p">
                    Voor gezonde voeding in de zwangerschap gelden in principe dezelfde adviezen als daarbuiten. Alleen in de zwangerschap is het nog belangrijker om je aan gezonde voeding te houden zodat de baby voldoende bouwstoffen krijgt. 
                    Gezonde voeding betekent dat je voeding vers en gevarieerd moet zijn. Kant en klaar maaltijden kun je dus beter laten staan. Varieer vooral met groente en fruit om alle voedingstoffen binnen te krijgen. 
                    Het is ook goed om af te wisselen met vis, peulvruchten vlees en ei. Daarnaast is het belangrijk dat je regelmatig kleine beetjes eet. Eten voor twee is niet nodig. Je hebt in de zwangerschap maar weinig extra voeding nodig. 
                    Dat beetje extra voeding vang je makkelijk op binnen je normale eetpatroon. </p>
                  <br><br>  
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Foliumzuur</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">Foliumzuur, ook wel vitamine B11 genoemd, is belangrijk voor de aanmaak van nieuwe lichaamscellen. Op het moment dat je zwanger bent worden er dagelijks in je lichaam ontelbare nieuwe lichaamscellen aangemaakt om de baby te laten groeien. 
                              De wervelkolom en de hersenen van de baby ontwikkelen zich vroeg in de zwangerschap. Gaat er bij die ontwikkeling wat mis, dan wordt het kind geboren met een open ruggetje of open schedel. Door voldoende foliumzuur verklein je de kans op deze afwijkingen.</p>  

                            <p class="expandp">Foliumzuur krijg je door je voeding binnen. Het zit bijvoorbeeld in bananen, sinaasappelen, peulvruchten, gist, melk en groene bladgroenten. Toch krijgt maar een klein deel van de vrouwen voldoende foliumzuur via de voeding binnen. 
                            Hierom wordt er geadviseerd aan alle zwangere vrouwen om 0,4 of 0,5 mg foliumzuur te slikken. Het duurt ongeveer 4 weken voordat foliumzuur in je lichaam opgenomen is. 
                            Daarom kan je het best starten met het slikken van foliumzuur op het moment dat je een kinderwens hebt. Na de 10e week van je zwangerschap mag je er mee stoppen. De wervelkolom en de hersenen van de baby zijn dan al aangelegd. </p>

                            <p class="expandp">Je kan foliumzuur zonder recept bij de drogist of apotheek krijgen. In multivitaminen voor zwangere vrouwen zit vaak al de benodigde hoeveelheid foliumzuur toegevoegd. Als je deze multivitaminen gebruikt, 
                            hoef je daarnaast dus geen extra foliumzuur te slikken. </p>
                          </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel>
                          <v-expansion-panel-header>Vitamine D</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">
                              Vitamine D is nodig om calcium goed op te nemen uit de voeding. Calcium zorgt voor de opbouw en instandhouding van stevige botten en dat is tijdens de zwangerschap belangrijk voor jou en je baby. 
                            Je lichaam maakt zelf vitamine D aan uit daglicht. Ook in voeding zit vitamine D. De gezondheidsraad concludeerde dat zwangere vrouwen geen verhoogde behoefte hebben aan vitamine D. </p>
                            <p class="expandp">
                              Toch adviseert de raad aan zwangere vrouwen om uit voorzorg 10 mg extra vitamine D te nemen. Dit advies klopt als je nauwelijks in de zon komt of onvoldoende vitamine D en calcium via je voeding binnen krijgt. Het is dus van jouw persoonlijke situatie afhankelijk of het verstandig is om extra vitamine D te nemen. </p> 
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                   <br><br> 
                  <p class="fucking-p">Er zijn ook bepaalde dingen die je beter niet kan eten in de zwangerschap. In rauwe dierlijke producten kan een bacterie of parasiet zitten. Hierom kan je beter geen rauw vlees, rauwe of gerookte vis, rauw ei, 
                    rauwe melk of kaas gemaakt van rauwe melk eten. Zodra deze producten voldoende verhit zijn geweest kunnen ze wel veilig gegeten worden. Roofvissen zoals zwaardvis, 
                    haai en tonijn en leverproducten zoals leverworst en paté kan je ook beter laten staan.</p> 
                  <p class="fucking-p">Bij sommige producten moet je oppassen dat je er niet te veel van neemt. Koffie is bijvoorbeeld zo’n product.</p>
                  <p class="fucking-p">Welke producten je wel en beter niet kan eten in de zwangerschap kan je heel eenvoudig opzoeken. Het voedingscentrum heeft speciaal voor zwangere vrouwen een handige app ontwikkeld. 
                    De ZwangerHap-app. Deze app kan je gratis downloaden.</p>
                  <p class="fucking-p">Meer informatie over voeding kan je vinden op de website van het <a href="https://www.voedingscentrum.nl/nl/mijn-kind-en-ik/zwanger.aspx" target="_blank">voedingscentrum</a>.</p><br> 
                  </div>
</modal>

<modal v-show="isModalCursusVisible" @close="closeModalCursus">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalcursus.jpg">
                  <p class=modaltitle>Zwangerschapscursus</p>
                  <p class="fucking-p">
                    Tijdens een zwangerschap komt er heel wat op je af. Je voelt hoe je lichaam verandert en je weet niet precies wat er allemaal gaat komen. Zeker als je zwanger bent van je eerste kind is alles nieuw en kan je veel vragen hebben.</p> 
                  <p class="fucking-p">Een zwangerschapscursus helpt je om in goede conditie te komen en bereidt je voor op de bevalling en de periode daarna. Het zijn vaak een reeks van lessen die je samen met een vaste groep zwangere vrouwen volgt. 
                    Het belangrijkste van een zwangerschapscursus is dat je het leuk en gezellig vindt. Voor veel vrouwen helpt de zwangerschapscursus om tijd voor hun zelf te nemen en stil te staan bij de zwangerschap. 
                    Dit kan je helpen om meer rust te krijgen en om je geestelijk voor te bereiden op de komst van de baby. </p> 
                  <p class="fucking-p">Er zijn veel verschillende soorten zwangerschapscursussen. Zwangerfit, zwangerschapszwemmen, zwangerschapsyoga, zwangerschapshaptonomie, samen bevallen... Welke cursus je moet kiezen hangt af van je eigen voorkeur. 
                    De ene cursus past beter bij je dan de andere. </p>
                  <br><br>              
          </div>
</modal>

<modal v-show="isModalKinkhoestVisible" @close="closeModalKinkhoest">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalvaccinatie.jpg">
                  <p class=modaltitle>Kinkhoestvaccinatie</p>
                  <p class="fucking-p">
                    Kinkhoest is een infectieziekte die kinderen en volwassenen kunnen oplopen en kan ernstige hoestbuien veroorzaken. Al sinds 1957 wordt er via het rijksvaccinatieprogramma gevaccineerd tegen kinkhoest. 
                    Baby’s krijgen daarvoor bij 2, 3, 4 en 11 maanden een vaccinatie aangeboden. </p> 
                  <p class="fucking-p">Vooral bij baby’s en jonge kinderen kan een kinkhoestinfectie gevaarlijk zijn. Bij oudere kinderen en volwassenen verloopt de ziekte vaak minder heftig, 
                    maar ondanks vaccinatie kan kinkhoest ook voorkomen bij kinderen en volwassenen die al eerder gevaccineerd zijn geweest. </p> 
                  <p class="fucking-p">Je kan ervoor kiezen om je in de zwangerschap te laten vaccineren tegen kinkhoest. Na de vaccinatie gaat jouw lichaam antistoffen aanmaken tegen de bacterie die kinkhoest veroorzaakt. 
                    Deze antistoffen gaan door de placenta naar de ongeboren baby toe. Als de baby geboren wordt heeft hij de eerste maanden jouw antistoffen in zijn bloed. 
                    Deze antistoffen beschermen de baby direct na de geboorte tegen een kinkhoestinfectie. Uit onderzoek blijkt dat dit een effectieve manier is om je baby de eerste maanden tegen kinkhoest te beschermen. 
                    Er komt in 90% van de gevallen minder kinkhoest voor bij baby’s van gevaccineerde moeders. Helaas verdwijnen deze antistoffen langzaam uit het bloed van de baby waardoor hij na een tijdje minder goed beschermd is tegen kinkhoest. 
                    Hierom wordt er geadviseerd om na de geboorte de baby ook te vaccineren tegen kinkhoest volgens het rijsvaccinatieprogramma.</p> 
                  <p class="fucking-p">Als je hebt gekozen om je in de zwangerschap te laten vaccineren is het niet nodig om je baby bij 2 maanden opnieuw te laten vaccineren tegen kinkhoest. De baby heeft dan nog voldoende antistoffen van jou in zijn bloed. 
                    Via het rijksvaccinatieprogramma worden kinderen dan bij 3, 5 en 11 maanden gevaccineerd. Je baby krijgt dus 1 vaccinatie minder toegediend. </p> 
                  <p class="fucking-p">Vanaf eind 2019 krijgen alle zwangere vrouwen in Nederland deze vaccinatie gratis aangeboden op het consultatiebureau. Tot die tijd kan je de vaccinatie zelf halen bij de huisarts of de GGD. Je moet er dan wel zelf voor betalen.  </p>
                  <p class="fucking-p">Meer informatie over kinkhoest kan je vinden op de website van het <a href="https://www.rivm.nl/kinkhoest" target="_blank">RIVM</a>.</p>
                  <br><br>  
          </div>
</modal>

<modal v-show="isModalPraktischVisible" @close="closeModalPraktisch">          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalregelen.jpg">
                  
                    <p class=modaltitle>Praktische zaken</p>   
                    
                  <br><br>  
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Zwangerschap en werken</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">Het is aan jou om te bepalen wanneer je je werkgever op de hoogte stelt van je zwangerschap. Je bent alleen wel verplicht om het uiterlijk 3 weken voor ingang van je verlof te vertellen. 
                              Voor je werkgever is het uiteraard prettiger als je dit eerder doet. Zo kan hij of zij alvast op zoek gaan naar een geschikte vervanger. Op het moment dat je je werkgever vertelt dat je zwanger bent, 
                              krijg je recht op wettelijke bescherming tijdens de zwangerschap en tijdens de periode dat je borstvoeding geeft. Daarnaast hoor je de gelegenheid te krijgen om naar de zwangerschapscontroles te gaan.  </p>
                            <p class="expandp">In Nederland heb je recht op 16 weken betaald zwangerschapsverlof van je werk. Je mag maximaal 6 weken en moet minimaal 4 weken voor de uitgerekende datum stoppen met werken. 
                              Je hebt altijd minstens 10 weken na de bevalling vrij. Ook wanneer de baby later geboren wordt. </p>
                            <p class="expandp">Je werkgever zal vragen om een zwangerschapsverklaring. Deze heeft hij nodig om een zwangerschapsuitkering aan te vragen. Als je in loondienst bent krijg je een uitkering die gelijk is aan je salaris. 
                              De zwangerschapsverklaring kunnen wij je geven op het spreekuur.  </p>
                            <p class="expandp">Als je zelfstandige bent dan gelden er andere regels. Als zelfstandige moet je bij het UWV een uitkering aanvragen. De uitkering duurt minimaal 16 weken en de hoogte van je uitkering hangt af van je 
                              inkomen in het kalenderjaar voordat je zwanger werd. Je uitkering is nooit hoger dan het minimumloon. Op de website van het <a href="https://www.uwv.nl/particulieren/zwanger-adoptie-pleegzorg/index.aspx?friendlyurl=/Particulieren/ik_krijg_een_kind/index.aspx " target="_blank">UWV</a> kan je meer informatie vinden over de zwangerschapsuitkering.</p>
                            <p class="expandp">Ook jouw partner heeft recht op kraamverlof. Vanaf 2019 hebben partners recht op 5 dagen betaald verlof. </p>
                            <p class="expandp">Naast zwangerschapsverlof kun je ook ouderschapsverlof opnemen. Meestal wordt dit verlof niet doorbetaald. Je hebt recht op 26 weken aaneengesloten verlof of je kunt die uren verdelen over een langere periode. 
                              Je hoeft het verlof niet direct op te nemen. Je hebt recht op ouderschapsverlof tot je kind 8 jaar is. Meer informatie over ouderschapsverlof kan je vinden op de website van <a href="https://www.rijksoverheid.nl/onderwerpen/ouderschapsverlof" target="_blank">de rijksoverheid</a>.</p>
                            
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Kraamzorg</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">De kraamverzorgster speelt een belangrijke rol in de periode direct na de bevalling. Ze helpt je door de drukke en spannende eerste dagen heen. Ze leert je van alles over de verzorging van je baby, 
                              ze is je hulp in de huishouding en ze helpt je structuur aan te brengen in deze bijzondere periode.</p>
                            <p class="expandp">De basisverzekering geeft recht op 49 uren kraamzorg verdeeld over 8 dagen. Via een aanvullende zorgverzekering zijn er nog meer mogelijkheden. Waar je precies recht op hebt en op welke manier je 
                              kraamzorg kunt regelen, kun je het beste afstemmen met je zorgverzekeraar.</p>
                            <p class="expandp">Het beste kan je kraamzorg al vroeg in de zwangerschap regelen en het liefst voordat je 16 weken zwanger bent. Je bent vrij om je in te schrijven bij een organisatie die jou aanspreekt. 
                              Er zijn veel verschillende organisaties hier in de omgeving waardoor het vaak lastig is om een goede keuze te maken. Omdat wij nauw samenwerken met de kraamverzorgster hebben wij veel ervaring 
                              met de verschillende organisaties. Op het spreekuur helpen we je daarom met het maken van een keuze.  </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Kraampakket</v-expansion-panel-header>
                          <v-expansion-panel-content>                            
                            <p class="expandp">In het kraampakket zitten allerlei spullen die handig zijn voor tijdens en na de bevalling. Het kraampakket kan je via je verzekering aanvragen. Het wordt niet vergoed vanuit de basisverzekering, 
                              maar vaak wel vanuit de aanvullende verzekering. Informeer bij je zorgverzekering waar je recht op hebt en bestel het in ieder geval op tijd. Je kan er ook voor kiezen om geen kraampakket aan te schaffen, maar om de benodigde spullen apart te kopen. </p>
                            <p class="expandp">Als je niet voor een thuisbevalling kiest, maar graag in het ziekenhuis wilt bevallen, is een kraampakket ook handig om in huis te hebben. Er zitten allerlei spullen in die tijdens de kraamweek van pas komen. 
                              Daarnaast weet je nooit hoe jouw bevalling zal lopen. Soms gaat een bevalling zo snel dat er geen tijd meer is om naar het ziekenhuis te gaan. Dan is het fijn dat je ook voorbereid bent op een thuisbevalling. </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Erkennen van je kind</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">Als je niet getrouwd bent, krijgt de baby automatisch de achternaam van de moeder. De vader kan ervoor kiezen om de baby te erkennen, waardoor een juridische band ontstaat tussen vader en kind. 
                              Door de erkenning kan de baby de achternaam van de vader krijgen. Ook wordt het ongeboren kind al erfgenaam van de vader.</p>
                            <p class="expandp">Voor erkenning moeten beide ouders tekenen bij de Afdeling Burgerzaken van het gemeentehuis. Je kunt dit het beste regelen voor de 24e week van de zwangerschap.  </p>
                            <p class="expandp">De vader krijgt door de erkenning het recht en de plicht om het kind te onderhouden. Met een erkenning krijgt de vader niet meteen het ouderlijk gezag. 
                              Met het ouderlijk gezag kan de vader beslissingen nemen over de opvoeding en verzorging van het kind. Om ouderlijk gezag te krijgen moet een apart verzoek worden ingediend bij de griffie van het kantongerecht.  </p>
                            <p class="expandp">Alleen als het kind is geboren uit een geregistreerd ouderschap en de vader het kind heeft erkend, krijgt de vader automatisch ouderlijk gezag. 
                              Bij een geregistreerd ouderschap hoeft een vader dus geen verdere actie te ondernemen om ouderlijk gezag te krijgen, wel moet het kind officieel worden erkend.</p>
                            <p class="expandp">Voor meer informatie over ouderlijk gezag kan je de websites van 
                              <a href="https://www.rechtspraak.nl/uw-situatie/gezag?pk_campaign=linkbuilding&pk_medium=link&pk_source=http://deverloskundige.nl/&pk_content=gezag&pk_keyword=gezag" target="_blank">Rechtspraak</a> 
                              en van de <a href="https://www.rijksoverheid.nl/onderwerpen/ouderlijk-gezag" target="_blank">Rijksoverheid</a> raadplegen.</p> 
                           
                           </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                   <br><br>  
            
          </div>

</modal>

<modal v-show="isModalChecklistVisible" @close="closeModalChecklist">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalchecklist.jpg">
                  
                    <p class=modaltitle>Checklist</p><br>
                    <p class="modalsubkopje"><strong>De eerste 3 maanden</strong></p>
                    <p class="fucking-p">
                        -	Foliumzuur: Slik 0,4 of 0,5 mg foliumzuur per dag vanaf het moment dat je een zwangerschapswens hebt. <br>
                        -	Verloskundige: Meld je aan bij de verloskundige.  Zodra je weet dat je zwanger bent mag je je bij ons aanmelden. De eerste afspraak is meestal bij 8 weken zwangerschap.<br>
                        -	Onderzoeken: Indien gewenst kan je informatie opzoeken over de mogelijkheid om je kind te laten onderzoeken op afwijkingen.  <br>
                        -	Kraamzorg: Meld je aan bij de kraamzorg. Doe dit vroeg in de zwangerschap en het liefst voor 16 weken. <br>
                        -	Huisarts: Meld de huisarts, apotheek en zorgverzekeraar dat je zwanger bent. En vraag direct je kraampakket aan. </p><br>


                    <p class="modalsubkopje"><strong>Het tweede trimester</strong></p>
                    <p class="fucking-p"> -	Zwangerschapsverklaring: Na de termijnecho kan je bij ons een zwangerschapsverklaring krijgen. Deze geef je af bij je werkgever zodat je verlof geregeld kan worden. <br>
                        -	Erkenning: Indien gewenst kan je erkenning van de ongeboren vrucht regelen bij het stadskantoor. Doe dit voor 24 weken. <br>
                        -	Zwangerschapscursus: Indien gewenst kan je je inschrijven voor een zwangerschapscursus. </p><br>
                    <p class="modalsubkopje"><strong>Het derde trimester</strong></p>
                    <p class="fucking-p"> -	Informatieavond: Schrijf je in voor de informatieavond bij ons op de praktijk. <br>
                        -	Geboorteplan: Denk na over jouw wensen voor tijdens de bevalling en schrijf deze op in het geboorteplan. <br>
                        -	Kraampakket: Vraag je kraampakket aan bij de verzekering. Meestal krijg je deze rond 32 weken opgestuurd. <br>
                        -	Vluchtkoffer: Vanaf 37 weken is het handig om je vluchtkoffer klaar te hebben staan. </p>

                  
                  <br><br>  
            
          </div>

</modal>

<modal v-show="isModalPrivacyVisible" @close="closeModalPrivacy">          
          <div slot="body">
                    <br><br>
                    <strong>Privacyverklaring</strong><br>
                    <p class="fucking-p">  In deze privacyverklaring wordt uitgelegd hoe de praktijk omgaat met de verwerking van persoonsgegevens van bezoekers van de website. In het privacyverklaring wordt onder meer beschreven welke categorieën persoonsgegevens worden verzameld, voor welk doel de persoonsgegevens worden gebruikt en aan welke categorieën van ontvangers de persoonsgegevens worden verstrekt.
                    </p>

                    <p class="fucking-p"><strong>Persoonsgegevens die worden verwerkt </strong><br>
                    Verloskundigenpraktijk Veilig Zwanger Ambacht kan persoonsgegevens over u verwerken, doordat u gebruik maakt van de diensten van Verloskundigenpraktijk Veilig Zwanger Ambacht, en/of omdat u deze zelf bij het invullen van een contactformulier op de website aan Verloskundigenpraktijk Veilig Zwanger Ambacht verstrekt. Verloskundigenpraktijk Veilig Zwanger Ambacht kan de volgende persoonsgegevens verwerken:<br>
                      -	Uw voor- en achternaam<br>
                      -	Uw telefoonnummer<br>
                      -	Uw geboortedatum<br>
                      -	Uw Burgerservicenummer<br>
                      -	Uw e-mailadres<br>
                      -	Uw adresgegevens<br>
                      -	De naam van uw huisarts<br>
                      -	Gegevens van uw partner<br>
                      o	voornaam<br>
                      o	achternaam<br>
                      o	geboortedatum<br>
                      o	telefoonnummer<br>
                      -	Uw IP-adres
                    </p>
                      
                      <p class="fucking-p"><strong>Waarom Verloskundigenpraktijk Veilig Zwanger Ambacht gegevens nodig heeft</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht verwerkt uw persoonsgegevens om telefonisch contact met u op te kunnen nemen als u daar om verzoekt, en/of om u schriftelijk (per e-mail en/of per post) te kunnen benaderen indien u telefonisch onverhoopt niet bereikt kunt worden. Daarnaast kan Verloskundigenpraktijk Veilig Zwanger Ambacht uw persoonsgegevens gebruiken in het kader van het uitvoeren van een met u gesloten overeenkomst van opdracht, doorgaans bestaande uit verloskundige zorgverlening.
                    </p>

                      <p class="fucking-p"><strong>Hoe lang Verloskundigenpraktijk Veilig Zwanger Ambacht gegevens bewaart</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren, waarvoor uw gegevens worden verzameld. Uw gegevens worden niet langer dan een jaar bewaard indien er geen overeenkomst met u tot stand komt. Bij een behandelingsovereenkomst bewaart Verloskundigenpraktijk Veilig Zwanger Ambacht de persoonsgegevens volgens de wettelijke bewaartermijn. 
                    </p>

                      <p class="fucking-p"><strong>Delen met anderen</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht verstrekt uw persoonsgegevens alléén aan derden indien dit nodig is voor de uitvoering van een overeenkomst met u, of om te voldoen aan een wettelijke verplichting.
                      Verwerkers en andere derden
                      Persoonsgegevens kunnen in opdracht van de Verloskundigenpraktijk Veilig Zwanger Ambacht worden verwerkt door zogenoemde verwerkers en sub-verwerkers. De verwerkers en sub-verwerkers handelen onder verantwoordelijkheid van de Verloskundigenpraktijk en mogen geen eigen verwerkingen uitvoeren op de persoonsgegevens. Uw persoonsgegevens worden niet verstrekt aan andere partijen, met uitzondering van de partijen zoals beschreven in deze privacyverklaring. Uw persoonsgegevens worden ook aan andere partijen verstrekt als wij daartoe verplicht zijn op basis van de wet of een rechterlijke uitspraak. 
                     </p>

                      <p class="fucking-p"><strong>In kaart brengen websitebezoek</strong><br>
                      Op de website van Verloskundigenpraktijk Veilig Zwanger Ambacht worden algemene bezoekgegevens bijgehouden, waaronder het IP-adres van uw computer en het tijdstip van opvraging en gegevens die uw browser meestuurt. Deze gegevens worden gebruikt voor analyses van bezoek- en klikgedrag op de website. Verloskundigenpraktijk Veilig Zwanger Ambacht gebruikt deze informatie om de werking van de website te verbeteren. Deze gegevens worden zo veel mogelijk geanonimiseerd en worden niet aan derden verstrekt. 
                      </p>

                      <p class="fucking-p"><strong>Google Analytics</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht maakt gebruik van Google Analytics om bij te houden hoe gebruikers de website gebruiken en hoe effectief Adwords-advertenties van Verloskundigenpraktijk Veilig Zwanger Ambacht bij Google zoekresultaatpagina’s zijn.
                      De aldus verkregen informatie wordt, met inbegrip van het adres van uw computer (IP-adres), overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten. Lees het privacybeleid van Google voor meer informatie. U treft ook het privacybeleid van Google Analytics hier aan. Google gebruikt deze informatie om bij te houden hoe onze website gebruikt wordt, om rapporten over de website aan Verloskundigenpraktijk Veilig Zwanger Ambacht te kunnen verstrekken en om haar adverteerders informatie over de effectiviteit van hun campagnes te kunnen bieden. Google kan deze informatie aan derden verschaffen indien Google hiertoe wettelijk wordt verplicht, of voor zover deze derden de informatie namens Google verwerken. Verloskundigenpraktijk Veilig Zwanger Ambacht heeft hier geen invloed op. Verloskundigenpraktijk Veilig Zwanger Ambacht heeft Google geen toestemming gegeven om via verkregen Analytics-informatie te gebruiken voor andere Google-diensten.
                      </p>

                      <p class="fucking-p"><strong>Gegevens inzien, aanpassen of verwijderen</strong> <br>
                      Op basis van de Algemene Verordening Gegevensbescherming (hierna: “AVG“) heeft u een aantal rechten. U heeft het recht om de Verloskundigenpraktijk te verzoeken om inzage (art 15 AVG) van en rectificatie (art. 16 AVG) of het verwijderen van uw persoonsgegevens (art. 17 AVG). Ook heeft u het recht om de Verloskundigenpraktijk te verzoeken om beperking van de verwerking van persoonsgegevens (art. 18 AVG). Onder bepaalde omstandigheden heeft u ook recht op overdraagbaarheid van gegevens (art. 20 AVG) en het recht van bezwaar (art. 21 AVG). Op de website van de Autoriteit Persoonsgegevens is meer informatie te vinden over wanneer het mogelijk is een of meer van deze rechten uit te oefenen.
                      Als u van een of meer van deze rechten gebruik wilt maken, dan kunt u contact opnemen met ons via de genoemde contactmogelijkheden. Los van bovenstaande rechten, heeft u altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
                      </p>

                     <p class="fucking-p"> U kunt een verzoek tot inzage, correctie of verwijdering sturen naar info@veiligzwangerambacht.nl. Verloskundigenpraktijk Veilig Zwanger Ambacht zal zo snel mogelijk op uw verzoek reageren.
                      </p>

                      <p class="fucking-p"><strong>Beveiligen</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. De website van Verloskundigenpraktijk Veilig Zwanger Ambacht maakt gebruik van een betrouwbaar SSL Certificaat om te borgen dat uw persoonsgegevens niet in verkeerde handen vallen. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, of indien u meer informatie wenst over de beveiliging van door Verloskundigenpraktijk Veilig Zwanger Ambacht verzamelde persoonsgegevens, neem dan contact met op via info@veiligzwangerambacht.nl.  
                      www.veiligzwangerambacht.nl is een website van Verloskundigenpraktijk Veilig Zwanger Ambacht.
                      </p>

                      <p class="fucking-p"><strong>Wijzigingen</strong><br>
                      Dit privacy statement kan worden gewijzigd. Het is daarom raadzaam om regelmatig dit privacy statement te raadplegen.
                      </p>
                      
                      <p class="fucking-p">Verloskundigenpraktijk Veilig Zwanger Ambacht is als volgt te bereiken:<br>
                      Vestigingsadres: Avelingen 1, 3343 EA Hendrik Ido Ambacht<br>
                      Telefoon: 06 151 434 16<br>
                      E-mailadres: info@veiligzwangerambacht.nl<br>
                      KvK: 72847999

                  </p>
              <br><br>  
          </div>
</modal>
<modal v-show="isModalKlachtenVisible" @close="closeModalKlachten">          
          <div slot="body">
                    <br><br>
                    <strong>Klachtenregeling</strong>
                    <p class="fucking-p">Het is belangrijk dat jij je goed voelt met onze begeleiding. Vertrouwen in ons en je zwangerschap zijn belangrijke elementen voor het goed verlopen van je bevalling ,de start van jullie kindje en het ouderschap.</p>
                    <p class="fucking-p">Daarom doen we er alles aan om jou, jouw zwangerschap, je partner en je kindje zo goed mogelijk te begeleiden.</p>
                    <p class="fucking-p">Heb je toch een klacht of ben je niet tevreden over onze zorg?</p>
                    <p class="fucking-p">Bespreek het met ons, als er sprake is van een misverstand dan kunnen we dit bespreken met elkaar en samen tot een oplossing komen of, als het nodig is, de zorg voor jouw zwangerschap nog beter aanpassen aan jouw wensen. Wij geven niet voor niets namelijk zorg op maat! Twijfel niet om het bespreekbaar te maken, wij staan ervoor open om onze zorg aan te passen/ te verbeteren.</p>
                    
                    
                    <p class="fucking-p"><strong>Klachtencommissie</strong><br>
                    Als je een onafhankelijk oordeel wilt over je klacht, en/ of een gesprek met ons niet voldoende was, kun je je klacht ook indienen bij de klachtencommissie van de Koninklijke Nederlandse Organisatie voor Verloskundigen (KNOV). Onze praktijk is lid van de KNOV. De klachtencommissie onderzoekt en beoordeelt dan de klacht. De commissie kan dan advies geven. </p>
                    <p class="fucking-p">KNOV Klachtencommissie<br>
                    Postbus 2001, 3500 GA Utrecht<br>
                    E-mail: evanmackelenbergh@knov.nl

                  </p>
                  <br><br>  
          </div>
</modal>


  </page>
</template>


  


<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'


export default {
  name: 'zwanger',
  components: {
    Page,
    Modal
  },
  data () {
    return {
      isModalKinderwensVisible: false,
      isModalZwangerVisible: false,
      isModalControlesVisible: false,
      isModalEchosVisible: false,
      isModalOnderzoekenVisible: false,
      isModalVoedingVisible: false,
      isModalCursusVisible: false,
      isModalKinkhoestVisible: false,
      isModalPraktischVisible: false,
      isModalChecklistVisible: false,
      isModalInformatieVisible: false,
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
    };
    
  },
  methods: {
    showModalKinderwens() {this.isModalKinderwensVisible = true;},
    showModalZwanger() {this.isModalZwangerVisible = true;},
    showModalControles() {this.isModalControlesVisible = true;},
    showModalEchos() {this.isModalEchosVisible = true;},
    showModalOnderzoeken() {this.isModalOnderzoekenVisible = true;},
    showModalVoeding() {this.isModalVoedingVisible = true;},
    showModalCursus() {this.isModalCursusVisible = true;},
    showModalKinkhoest() {this.isModalKinkhoestVisible = true;},
    showModalPraktisch() {this.isModalPraktischVisible = true;},
    showModalChecklist() {this.isModalChecklistVisible = true;},
    showModalInformatie() {this.isModalInformatieVisible = true;},
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
    
    closeModalKinderwens() {this.isModalKinderwensVisible = false;},
    closeModalZwanger() {this.isModalZwangerVisible = false;},
    closeModalControles() {this.isModalControlesVisible = false;},
    closeModalEchos() {this.isModalEchosVisible = false;},
    closeModalOnderzoeken() {this.isModalOnderzoekenVisible = false;},
    closeModalCursus() {this.isModalCursusVisible = false;},
    closeModalVoeding() {this.isModalVoedingVisible = false;},
    closeModalKinkhoest() {this.isModalKinkhoestVisible = false;},
    closeModalPraktisch() {this.isModalPraktischVisible = false;},
    closeModalChecklist() {this.isModalChecklistVisible = false;},
    closeModalInformatie() {this.isModalInformatieVisible = false;},
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},
  },
};

</script>

<style lang="less" scoped>
  .zwanger {
    background: white;
  }



.tileset {
    width: 60%;
    min-width: 300px;
    align-items: center;
    background-color: white;
    background: white;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .tegeltje {
    transition: 0.2s all ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .tegeltje:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.05)
  }


  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    }
  
  .expand {
    padding: 0 5%;
    text-align: left;
    box-sizing: border-box;
  }

  .expandp {
    padding: 10px 0;
  }

  .modalsubkopje {
    text-align: left;
    padding: 0 5%;
  }
  
  .modaltitle {
    font-family: 'Dancing Script', cursive;
    font-size: 3em;
    text-align: left;
    padding: 0 5% ;
    margin-bottom: 15px;
    }

  @media only screen and (max-width: 750px) {
  .expand {
    padding: 0;
  }
}


</style>