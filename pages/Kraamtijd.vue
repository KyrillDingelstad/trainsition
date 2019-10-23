<template>
  <page class="kraamtijd">
         <img src="~/assets/images/fotos/baby1.jpg" class="pagestarter kraamtijdtop">

    <div class=pagetitle>
    <h1>KRAAMTIJD</h1>
    </div>

    <p class=standaardp>En dan is het eindelijk zo ver, jullie kind is geboren en de kraamperiode gaat van start. Zo’n kleine baby zet je hele wereld op z’n kop. 
      In de periode na de bevalling zullen wij jullie bijstaan en komen we regelmatig bij je thuis langs. Samen met de kraamverzorgende houden we in de gaten of alles goed verloopt en geven we jullie tips en adviezen over de verzorging van je baby. 
      Mocht je om een medische reden bij de gynaecoloog onder controle zijn geweest en zijn bevallen, dan is het ook gebruikelijk dat we na de bevalling bij je thuis komen kijken. </p>           
     
    <v-container fluid grid-list-xl class="tileset">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalKraamweek">
            <img src=~/assets/images/fotos/modalkraamweek.jpg />
            <v-card-title primary class="title">Kraamweek</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalNacontrole">
            <img src=~/assets/images/fotos/modalnacontrole.jpg />
            <v-card-title primary class="title">Nacontrole</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalGeboorteaangifte">
            <img src=~/assets/images/fotos/modalgeboorteaangifte.jpg />
            <v-card-title primary class="title">Geboorteaangifte</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalBorstvoeding">
            <img src=~/assets/images/fotos/modalborstvoeding.jpg />
            <v-card-title primary class="title">Borstvoeding</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalPoedermelk">
            <img src=~/assets/images/fotos/modalpoedermelk.jpg />
            <v-card-title primary class="title">Kunstvoeding</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalVruchtbaarheid">
            <img src=~/assets/images/fotos/modalvruchtbaarheid.jpg />
            <v-card-title primary class="title">Vruchtbaarheid</v-card-title>
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



<!-- Modals -->

<modal v-show="isModalKraamweekVisible" @close="closeModalKraamweek">          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalkraamweek.jpg">
                  <p class=modaltitle>Kraamweek</p>
                  <p class="fucking-p">
                    Zo’n kleine baby zet je hele wereld op z’n kop. Om je bij te staan in de eerste weken, komen we een aantal keren bij je thuis. Vooral in het begin komen we regelmatig langs om te kijken hoe het met je gaat. 
                    We controleren je herstel en kijken of je baby in goede conditie is. Je krijgt ook informatie van ons over wat je in deze periode kunt verwachten en indien nodig helpen we je bij de borstvoeding.</p> 
                  <p class="fucking-p">
                    Het eerste bezoek is meestal een mooi moment om terug te kijken op het verloop van de zwangerschap en de bevalling. We nemen graag de tijd om eventuele vragen in alle rust te bespreken. 
                    Hoe vaak we bij je thuis langskomen en wanneer hangt af van jullie behoeftes en het herstel. De meeste moeders hebben na anderhalve week hun eigen draai gevonden en geven aan dat de regelmatige bezoekjes niet meer nodig zijn. 
                    Tijdens de kraamweek, maar ook daarna kan je ons dag en nacht bereiken voor hulp en ondersteuning en indien nodig komen we, ook ’s nachts, extra bij je langs.  </p>
                  <strong>Kraamverzorgster</strong>
                  <p class="fucking-p">
                    In de periode direct na de bevalling komt de kraamverzorgster bij jullie langs. Afhankelijk van jullie situatie zal zij gedurende de eerste week gemiddeld 7 uur per dag voor jullie paraat staan om jullie te ondersteuning 
                    tijdens de kraamweek. Ze leert je van alles over de verzorging van je baby, neemt huishoudelijke taken van je over en helpt je structuur te krijgen in deze bijzondere, maar vaak ook intensieve, periode.  </p>
                  <p class="fucking-p">
                    Wij werken nauw samen met de kraamverzorgster. Zij is onze oren en onze ogen en zo vullen wij elkaar samen aan om jullie van het juist advies en ondersteuning te voorzien.  </p>

                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalNacontroleVisible" @close="closeModalNacontrole">          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalnacontrole.jpg">
                  <p class=modaltitle>Nacontrole</p>
                  <p class="fucking-p">
                    Ongeveer zes weken na de bevalling zien we je graag nog eens terug op de praktijk. Tijdens deze afspraak controleren we de gezondheid van jou en van je baby. 
                    We meten bijvoorbeeld je bloeddruk, indien nodig je ijzergehalte en bekijken het herstel van je bekkenboden. We bespreken je vruchtbaarheid en indien gewenst geven we informatie over anticonceptie en schrijven we dit voor. 
                    Daarnaast nemen we ruim de tijd om de afgelopen periode te bespreken en je vragen te beantwoorden.  </p> 
                  <p class="fucking-p">
                    De nacontrole is een fijne manier om zo onze zorg rondom deze zwangerschap, bevalling en kraamperiode af te sluiten. </p>
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalGeboorteaangifteVisible" @close="closeModalGeboorteaangifte">          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalgeboorteaangifte.jpg">
                  <p class=modaltitle>Geboorteaangifte</p>
                  <p class="fucking-p">
                    Als je baby geboren is ben je verplicht om dit aan te geven bij de gemeente. Geboorteaangifte doe je binnen 3 werkdagen na de geboorte van je baby in de gemeente waar hij of zij geboren is. 
                    Dit kan dus een andere gemeente zijn dan waar je woont. De geboortedag zelf telt niet mee voor de aangiftetermijn. </p> 
                  <p class="fucking-p">
                    Niet iedereen kan geboorteaangifte doen. De vader of de moeder is de aangewezen persoon om de baby in te schrijven bij de gemeente. Als de vader verhinderd is of er is geen vader betrokken bij de geboorte, 
                    dan mag ieder die bij de geboorte aanwezig is geweest de baby laten inschrijven bij de gemeente.</p>
                  <p class="fucking-p">
                    Je hoeft de baby zelf niet mee te nemen voor de aangifte. Degene die de geboorteaangifte gaat doen moet wel zijn eigen paspoort of ID-bewijs meenemen en ook die van de moeder. 
                    Indien nodig moet je ook de akte van erkenning en de akte van naamkeuze meenemen. Voor alle zekerheid geven wij je ook een geboortebewijs mee. Dit is een document waarin wij verklaren wanneer en in welke gemeente je baby geboren is. 
                    Daarnaast kan je ook je trouwboekje meenemen zodat je kind wordt bijgeschreven in het trouwboek. Dit laatste is niet verplicht.</p>
                  <p class="fucking-p">
                    Als je de baby hebt aangegeven maakt de ambtenaar van de gemeente een geboorteakte op. Deze akte wordt opgenomen in de registers van de burgerlijke stand. Dit is het juridische bewijs dat je kind geboren is. 
                    Na de aangifte krijgt je kind direct een Burgerservicenummer (BSN). Ook wordt hij ingeschreven in de Gemeente Basisadministratie persoonsgegevens (GBA).</p>
                  <p class="fucking-p">
                    Op de website van <a href="https://www.h-i-ambacht.nl/Inwoners_Ondernemers/Alle_onderwerpen/Levensgebeurtenis/Geboorteaangifte" target="_blank">Gemeente Hendrik Ido Ambacht</a> vind je meer informatie over de geboorteaangifte.</p>
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalBorstvoedingVisible" @close="closeModalBorstvoeding">          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalborstvoeding.jpg">
                  <p class=modaltitle>Borstvoeding</p>
                  <p class="fucking-p">
                    Moedermelk is de meest geschikte melk voor baby’s. Het bevat stoffen die beschermen tegen infecties en ziektes en het is volledig afgestemd op de behoefte van je kind. Dat borstvoeding de beste voeding is voor baby’s, 
                    daar is iedereen het over eens. Dit komt door de vele voordelen die borstvoeding met zich meebrengt. Het geven van borstvoeding is niet alleen gezond voor je baby, maar het heeft ook gezondheidsvoordelen voor jou. 
                    Het helpt met je herstel na de bevalling en je hebt minder kans op het krijgen van bepaalde ziektes. Het advies is om minimaal 6 maanden borstvoeding te geven. Of je borstvoeding geeft en hoe lang, bepaal je zelf. 
                    Elke druppel moedermelk die een kind krijgt telt mee.</p> 
                  <p class="fucking-p">
                    Tijdens de zwangerschap is je lichaam bezig om zich voor te bereiden op het geven van borstvoeding. Na de bevalling is je moedermelk direct beschikbaar in de juiste samenstelling en hoeveelheid. 
                    De eerste moedermelk die een baby drinkt heet colostrum. Dit is zeer geconcentreerde moedermelk en zit boordenvol antistoffen die je baby direct na de geboorte beschermen tegen infecties. 
                    Je baby heeft maar een paar druppels van deze voeding nodig. Dat is maar goed ook, want een pasgeboren baby heeft een maagje ter grootte van een kleine knikker die elke dag een klein beetje groter wordt. 
                    Jouw borstvoeding is uniek van samenstelling en helemaal afgestemd op de behoefte van je kind. Als je kind ouder wordt, groeit jouw moedermelk met hem of haar mee. </p>
                  <p class="fucking-p">
                    Wat zijn nou precies de voordelen van het geven van borstvoeding? Hieronder enkele voordelen op een rij. <br><br>

                    -	Het beschermt de baby tegen infecties en ziektes. <br>
                    -	Moedermelk heeft de perfecte samenstelling voor een baby en veranderd als de baby ouder wordt en andere behoeftes heeft. <br>
                    -	Het is direct beschikbaar en op goede temperatuur. <br>
                    -	Het geven van borstvoeding heeft ook voordelen voor de moeder. Het verkleint de kans op borstkanker, eierstokkanker, ouderdomssuikerziekte en depressies. <br>
                    -	Het heeft ook voordelen voor het kind op oudere leeftijd. Volwassenen die als baby borstvoeding hebben gekregen hebben een kleinere kans op overgewicht en ouderdomssuikerziekte en scoren hoger op intelligentietests.</p>
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalPoedermelkVisible" @close="closeModalPoedermelk">
          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalpoedermelk.jpg">
                  <p class=modaltitle>Kunstvoeding</p>
                  <p class="fucking-p">
                    Sommige moeders kiezen ervoor om geen borstvoeding te geven. Er zijn verschillende, meestal goede, redenen waarom moeders hiervoor kiezen. Sommige moeders mogen of kunnen dit niet, 
                    bijvoorbeeld door bepaald soort medicatie die ze gebruiken, of het is iets wat totaal niet bij ze past. Een alternatief voor moedermelk is poedermelk (ook wel kunstvoeding of flesvoeding genoemd). 
                    Het wordt gemaakt van dierlijke of plantaardige stoffen en is geschikt om in plaats van moedermelk aan je pasgeboren baby te geven. In poedermelk zitten alle benodigde voedingsstoffen voor een kind om te groeien, 
                    maar het bevat helaas geen stoffen die extra gezondheidsvoordelen met zich meebrengen zoals bij borstvoeding wel het geval is.</p> 
                  <p class="fucking-p">
                    Baby’s die flesvoeding krijgen hebben extra behoefte aan lichamelijk contact dit is belangrijk voor de gezonde (hersen)ontwikkeling. Wees daar extra alert op en maak van de flesvoeding een momentje samen. 
                    Het is verstandig om, zeker de eerste weken, zelf de fles te geven. Hierdoor leren jullie elkaar beter kennen en voorkom je dat je kind overprikkeld raakt.</p>
                  <p class="fucking-p">
                    Standaard zuigelingenvoeding 0-6 maanden kun je meteen vanaf de geboorte aan je baby geven. Er zijn veel verschillende soorten en merken poedermelk te koop. Alle merken in Nederland moeten aan strenge kwaliteitseisen voldoen. 
                    Het maakt daardoor niet zo veel uit welk merk je kiest. De hoeveelheid melk die je aan je baby geeft is per dag en per kind verschillend. De kraamverzorgster en wij als verloskundige zullen jou hiermee helpen.</p>            
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalVruchtbaarheidVisible" @close="closeModalVruchtbaarheid">
          
          <div slot="body">
              <img class=modalimg src="~/assets/images/fotos/modalvruchtbaarheid.jpg">
                  <p class=modaltitle>Vruchtbaarheid</p>
                  <p class="fucking-p">
                    Als je bent bevallen zal je bloedverlies langzaam gaan stoppen en komt je normale cyclus weer op gang. Het is normaal om ongeveer zes weken lang bloedverlies van de bevalling te hebben, bij sommige vrouwen stopt het eerder. 
                    Wanneer je cyclus precies weer opgang komt verschilt van vrouw tot vrouw. Sommige vrouwen krijgen hun eerste menstruatie zes weken na de bevalling en bij andere vrouwen blijft het maanden weg. 
                    Door het geven van borstvoeding wordt je cyclus ook beïnvloed. De hormonen die vrijkomen tijdens de borstvoeding remmen je cyclus af en zorgen er vaak voor dat deze wordt uitgesteld. 
                    Wanneer je weer vruchtbaar bent is om deze redenen lastig in te schatten. Daarbij komt dat je vaak al vruchtbaar bent voordat je je eerste menstruatie krijgt.</p> 
                  <p class="fucking-p">
                    Op het moment dat je na de bevalling weer voor het eerst gemeenschap hebt, bestaat er dus ook een kans dat je weer zwanger wordt. Een zwangerschap duurt gemiddeld negen maanden. 
                    Na de bevalling heeft je lichaam ook minstens negen maanden nodig om hiervan te herstellen. Het is daarom verstandig om in deze periode niet opnieuw zwanger te worden. 
                    Als je niet het risico wilt lopen om direct na de bevalling weer zwanger te worden, is het verstandig om na te denken over hoe je dit wilt voorkomen. In sommige gevallen kan het geven van volledig borstvoeding de kans 
                    op een zwangerschap aanzienlijk verkleinen, maar dit is niet helemaal uit te sluiten. De meeste ouders kiezen er daarom voor om een voorbehoedsmiddel te gebruiken.</p>
                  <p class="fucking-p">
                    Tijdens de kraamweek en de nacontrole zullen we je informatie geven over je vruchtbaarheid. Indien gewenst geven we advies over de verschillende anticonceptiemogelijkheden en schrijven we anticonceptie voor. 
                    Ook kan je bij ons terecht voor het plaatsen van een (hormoon of koper) spiraal. </p>                    
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
      isModalKraamweekVisible: false,
      isModalNacontroleVisible: false,
      isModalGeboorteaangifteVisible: false,
      isModalBorstvoedingVisible: false,
      isModalPoedermelkVisible: false,
      isModalVruchtbaarheidVisible: false,
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
    };
    
  },
  methods: {
    showModalKraamweek() {this.isModalKraamweekVisible = true;},
    showModalNacontrole() {this.isModalNacontroleVisible = true;},
    showModalGeboorteaangifte() {this.isModalGeboorteaangifteVisible = true;},
    showModalBorstvoeding() {this.isModalBorstvoedingVisible = true;},
    showModalPoedermelk() {this.isModalPoedermelkVisible = true;},
    showModalVruchtbaarheid() {this.isModalVruchtbaarheidVisible = true;},
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
    
    closeModalKraamweek() {this.isModalKraamweekVisible = false;},
    closeModalNacontrole() {this.isModalNacontroleVisible = false;},
    closeModalGeboorteaangifte() {this.isModalGeboorteaangifteVisible = false;},
    closeModalBorstvoeding() {this.isModalBorstvoedingVisible = false;},
    closeModalPoedermelk() {this.isModalPoedermelkVisible = false;},
    closeModalCursus() {this.isModalCursusVisible = false;},
    closeModalVruchtbaarheid() {this.isModalVruchtbaarheidVisible = false;},
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},
  },
};

</script>


<style lang="scss" scoped>
  .kraamtijd {
    background: white;
  }

  .kraamtijdtop {
    object-position: 0px 60%;
  }

  .tileset {
    width: 60%;
    min-width: 300px;
    align-items: center;
    background-color: white;
    background: white;
    margin-bottom: 60px;
    margin-top: 60px;

    img {
      width: 100%;
    }
  }

  .tegeltje {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transition: 0.2s all ease;
  }

  .tegeltje:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.05)
  }

  .expand {
    padding: 0 5%;
    text-align: left;
    box-sizing: border-box;
  }

  .expandp {
    padding: 10px 0;
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
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
