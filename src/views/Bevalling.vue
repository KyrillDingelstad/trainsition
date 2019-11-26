<template>
  <page class="bevalling">

    <img src="../../public/images/fotos/babyenmoeder2.jpg" class="pagestarter bevallingtop">
   
    <div class=pagetitle>
    <h1>BEVALLING</h1>
    </div>
        
    <p class=standaardp>In negen maanden tijd groeien twee cellen uit tot een volwaardige baby. Wanneer de baby er klaar voor is zal het bevalproces in gang worden gezet en dient de baby zich aan. 
      Dit is misschien wel het moment waar je al maanden naar uit hebt gekeken, of misschien een beetje tegenop hebt gezien. Wanneer de bevalling begint en hoe de bevalling voor jou zal verlopen kan je van tevoren niet weten. 
      Iedere vrouw beleeft haar bevalling op haar eigen manier. </p>
    <p class=standaardp>Als verloskundige zullen we je tijdens de bevalling ondersteunen en aanmoedigen om op je eigen kracht je kind op de wereld te zetten. Want bevallen kan je zelf! 
      Daarbij geven we je zoveel mogelijk vrijheid om te doen wat goed voor je voelt. We vinden het namelijk belangrijk dat je tevreden terugkijkt op je bevalling, aangezien bevallen een intense en persoonlijke gebeurtenis is die je altijd bij zal blijven. </p>


    
    <v-container fluid grid-list-xl class="tileset">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalVoorbereiding">
            <v-img src=../../public/images/fotos/modalvoorbereiding.jpg></v-img>
            <v-card-title primary class="title">Voorbereiding</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalBevalling">
            <v-img src=../../public/images/fotos/modalbevalling.jpg></v-img>
            <v-card-title primary class="title">De bevalling</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalBelinstructies">
            <v-img src=../../public/images/fotos/modalbelinstructies2.jpg></v-img>
            <v-card-title primary class="title">Belinstructies</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalBevalhoudingen">
            <v-img src=../../public/images/fotos/modalbevalhoudingen.jpg></v-img>
            <v-card-title primary class="title">Bevalhoudingen</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalBevallenInWater">
            <v-img src=../../public/images/fotos/modalbevalleninwater.jpg></v-img>
            <v-card-title primary class="title">Bevallen in water</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalWaarBevallen">
            <v-img src=../../public/images/fotos/modalwaarbevallen.jpg></v-img>
            <v-card-title primary class="title">Waar bevallen</v-card-title>
            </v-card>
        </v-flex>        
        <v-flex xs12 md6 lg4 xl4 d-flex>
          <v-card class=tegeltje @click="showModalWatNodig">
            <v-img src=../../public/images/fotos/modalbenodigdheden.jpg></v-img>
            <v-card-title primary class="title">Benodigdheden</v-card-title>
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

<modal v-show="isModalVoorbereidingVisible" @close="closeModalVoorbereiding">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalvoorbereiding.jpg">
                  <p class=modaltitle>Voorbereiding</p>
                  <p class="fucking-p">
                    Bevallen hoef je niet te leren. Net zoals dat jouw lichaam weet hoe het een kind moet laten groeien in je buik, weet jouw lichaam ook hoe je moet bevallen. Jouw lichaam kan dat vanzelf, daar heb je een natuurinstinct voor. 
                    Een voorbereiding is voornamelijk bedoeld om je geestelijk voor te bereiden op de bevalling. Want wat een bevalling lastig maakt zijn je gevoelens en je gedachtes. 
                    Tijdens een bevalling is het belangrijk om op jezelf te vertrouwen en je over te geven aan de weeën. Jouw lichaam krijgt op die manier de rust en de ruimte om te doen wat het moet doen.</p>
                    <p class="fucking-p">Geen enkele bevalling is hetzelfde. De ene bevalling gaat nou eenmaal makkelijker dan de andere en hoe jouw bevalling er precies uit gaat zien, kan niemand je van tevoren vertellen. 
                      Je moet dus vertrouwen hebben in iets waarvan je niet weet hoe het zal lopen. Hoewel elke bevalling anders is en iedere vrouw dit op haar eigen manier beleeft, verlopen de meeste bevallingen volgens eenzelfde aantal stappen. </p> 
                  <p class="fucking-p">Een goede voorbereiding kan ervoor zorgen dat je tijdens de bevalling beter weet wat je te wachten staat en dat je beter kan omgaan met de lichamelijke veranderingen van bevallen. 
                    Als je je goed voorbereid op de bevalling kan dit angst en onzekerheid wegnemen, waardoor de bevalling sneller en beter verloopt. Er zijn verschillende manieren om je voor te bereiden op de bevalling. 
                    Het is raadzaam om te onderzoeken wat jij nodig hebt om je bevalling met vertrouwen tegemoet te gaan. Wij als verloskundige kunnen je daarbij helpen.  </p>
                  <br><br>  
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Voorlichtingsavonden</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            In de praktijk organiseren wij met regelmaat voorlichtingsavonden. Tijdens deze avonden geven wij informatie over de bevalling. We leggen de verschillende stappen van bevallen uit, 
                            vertellen wat er in je lichaam gebeurt en hoe de verschillende hormonen de bevalling beïnvloeden. Ook laten we zien wat helpt om de bevalling te bespoedigen en hoe je met de pijn om kan gaan. 
                            Deze voorlichtingsavonden geven wij in een groep met meerdere aanstaande ouders. Informeer wanneer de voorlichtingsavonden zijn, zodat je je hiervoor kan opgeven. 
                            Ook als je al eerder bent bevallen ben je van harte welkom tijdens deze voorlichtingsavonden. 
                          </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel>
                          <v-expansion-panel-header>Bevalgesprek</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            Op het spreekuur maken wij ook ruimte om de bevalling met je door te spreken. Vaak plannen we zo’n bevalgesprek aan het eind van het spreekuur of komen we thuis langs. 
                            Op die manier hebben we alle tijd om over de bevalling te praten. Dit gesprek geeft ons de mogelijkheid om specifiek in te gaan op de aspecten die voor jouw bevalling van belang zijn. 
                            We bespreken ook de wensen die jij bij de bevalling hebt en we helpen je bij het opstellen van het geboorteplan.  
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Geboorteplan</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">
                              In een geboorteplan beschrijf je jouw wensen rondom de bevalling. Het is bedoeld voor jezelf, je partner, wij als verloskundigen en eventuele andere zorgverleners die bij de bevalling aanwezig zijn. </p>
                            <p class="expandp">
                              In het geboorteplan schrijf je op wat voor jou belangrijk is en welke afspraken er zijn gemaakt. Het schrijven van het geboorteplan is een manier om samen met je partner na te denken over de bevalling 
                            en jullie wensen op elkaar af te stemmen. Daarnaast is het bedoeld voor degene die jouw bevalling begeleid zodat zij zoveel mogelijk rekening met je kan houden. </p>
                            
                            <p class="expandp">Door onze manier van werken en onze kleinschalige praktijk leren wij alle zwangere koppels goed kennen. We bespreken tijdens de zwangerschap de bevalling en jouw wensen goed door. 
                              Dit helpt ons om tijdens de bevalling rekening te houden met jouw behoeftes waardoor een geboorteplan voor ons niet altijd noodzakelijk is.  </p>
                            
                            <p class="expandp">Mocht de bevalling toch anders lopen dan verwacht en beval je bij de 
                            arts of verloskundige van het ziekenhuis, dan is het belangrijk dat je jouw wensen en bijzonderheden op papier hebt gezet. Zo kunnen zij zoveel mogelijk rekening met je houden.  </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>

                  <br><br>
                  <p class="fucking-p">Er zijn nog meer mogelijkheden om je voor te bereiden op de bevalling. Je kan bijvoorbeeld informatie lezen over de bevalling of naar een zwangerschapscursus gaan. Een aanrader is het boek Veilig bevallen van Beatrijs Smulders.  </p>

                  <br><br>
                  </div>
</modal>

<modal v-show="isModalBevallingVisible" @close="closeModalBevalling">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbevalling.jpg">
                  <p class=modaltitle>Bevalling</p>
                  <p class="fucking-p">
                    Een zwangerschap duurt gemiddeld 40 weken als je rekent vanaf de eerste dag van je laatste menstruatie. Dat is een schatting, want wanneer de baby zich precies aandient kan je bij een normale bevalling van tevoren niet weten. 
                    De baby mag vanaf 37 weken zwangerschap geboren worden en het liefst willen we dat de baby er voor 42 weken is. Je hebt dus 5 weken de tijd om te bevallen. 
                    Er zijn slechts weinig kinderen die voor een zwangerschapsduur van 39 weken worden geboren en de meeste baby’s komen het liefst wat later. Stel je er dus op in dat de kans groot is dat de baby pas na de uitgerekende datum komt. </p>
                  <p class="fucking-p">
                    Wanneer je gaat bevallen heeft met allerlei verschillende factoren te maken. De belangrijkste factor is het kind zelf. Elk kind heeft zijn eigen ontwikkelingstempo en zet het bevallingsproces in gang als hij er zelf klaar voor is. 
                    Zo’n maand voor de bevalling begint dit bevallingsproces al te spelen. Je lichaam bereidt zich onder invloed van hormonen langzaamaan voor op de bevalling.</p>
                  <p class="fucking-p">
                    Tijdens deze voorbereidingsfase kan je merken dat je lichaam verandert. Je zit anders in je vel en hebt vaak minder behoefte om met andere af te spreken. Je krijgt steeds vaker last van harde buiken, misschien soms wel voorweeën. 
                    Bij veel vrouwen verandert hun afscheiding. Het wordt waterig en slijmerig en soms zit er zelfs een beetje bloed bij. Sommige vrouwen verliezen de slijmprop. Dit is een witgele dot met slijm waar ook bloed in kan zitten. 
                    Krampen in je onderbuik en steken in je vagina horen ook bij het voorbereidingsproces.  </p>
                  <p class="fucking-p">
                    De bevalling begint meestal met weeën. Een wee kan je herkennen door pijn en druk die zich langzaam opbouwt tot een hoogteput. Na dat hoogtepunt zakt de wee weer langzaam af en daarna volgt een rustpauze van een paar minuten. 
                    Bevallingsweeën hebben een vast ritme waarbij een wee ongeveer 1 tot 1,5 minuten duurt en de rustpauze ongeveer 3 of 4 minuten. De duur en intensiteit van de wee zijn het belangrijkst en daar kan je dan ook echte bevallingsweeën 
                    aan herkennen. Hoe de weeën beginnen kan erg verschillen. Soms begint de bevalling met onregelmatige voorweeën die langzaamaan steeds sterker worden, langer duren en sneller op elkaar volgen en zo overgaan bevallingsweeën. 
                    De bevallingsweeën kunnen ook heel plotseling van start gaan en al direct in een vast ritme komen. </p>
                  <p class="fucking-p">
                    Tijdens de hele bevalling kunnen de vliezen breken. Dat kan tijdens de ontsluitingsweeën, maar de meeste vliezen breken tijdens de eerste persweeën en een enkele baby wordt met de helm op geboren. Soms, in slechts 6% van de gevallen, 
                    begint de bevalling met het breken van de vliezen nog voordat je weeën hebt. Dat is dus anders dan in de meeste films waarbij het breken van de vliezen het eerste teken van de bevalling is. </p>
                  <p class="fucking-p">
                    Als je ons nodig hebt of als je denkt dat de bevalling begonnen is, dan bel je ons op. Wij staan dag en nacht voor jou paraat. Je kan ons op het gebruikelijke nummer bellen. Nemen we niet direct op, bel er dan een 2e keer direct 
                    achteraan, dan begrijpen we dat het spoed heeft. Mocht er iets bijzonders met de telefoonlijn zijn, dan zijn wij ook altijd via een ander nummer te bereiken: 085-773 3326.</p>
                  <p class="fucking-p">
                    Is de bevalling echt begonnen of heb je onze hulp nodig, dan komen we naar je toe. Thuis beoordelen we hoe de bevalling verloopt en helpen we je met het opvangen van de weeën. Als je thuis wilt bevallen en de baby komt al bijna, 
                    dan seinen we de kraamzorg in en breng je met onze hulp de baby ter wereld. </p>
                  <p class="fucking-p">
                    Wil je graag in het ziekenhuis bevallen dan begint de bevalling ook thuis. We komen altijd eerst bij je thuis kijken en samen bepalen we wat voor jou de beste timing is om naar het ziekenhuis te vertrekken. We proberen niet te 
                    vroeg naar het ziekenhuis te gaan, want de bevalling gaat vaak een stuk sneller als je nog thuis in je eigen omgeving bent. Is het moment aangebroken om naar het ziekenhuis te gaan, dan regelen wij dat voor jou. </p>
                  
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalBelinstructiesVisible" @close="closeModalBelinstructies">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbelinstructies2.jpg">
                  <p class=modaltitle>Belinstructies</p>
                  <p class="fucking-p">
                    Wanneer je een vraag hebt, ongerust bent of je hebt onze hulp nodig, dan mag je ons altijd bellen. Wij staan dag en nacht voor jou paraat. Je kan ons bellen op het gebruikelijke nummer: 0615143416. 
                    Is het dringend en nemen wij de telefoon niet direct op, bel dan meteen een 2e keer erachteraan. Mocht er iets bijzonders met de telefoonlijn zijn, dan kan je ons ook altijd bereiken via: 085-773 3326. </p> 
                  <p class="fucking-p">Je mag ons dus altijd bellen, daar zijn geen bepaalde regels voor. In sommige gevallen vinden wij het fijn als je ons belt. Hieronder een overzicht met de momenten waarop dat is.</p>
                  <p class="fucking-p"> -	Als je ongerust of onzeker bent over de situatie of als je onze hulp nodig hebt. <br>
                                        -	Als je nog geen 37 weken zwanger bent en je (denkt dat de) bevalling gaat beginnen of je hebt vruchtwaterverlies. <br>
                                        -	Als de bevalling begonnen is en je vindt het fijn als we komen of als je merkt dat de bevalling gaat opschieten. <br>
                                        -	Als je vruchtwaterverlies hebt kijk je altijd naar de kleur. Is het helder zoals kraanwater, dan bel je ons op een geschikt moment of als de weeën beginnen. <br>
                                        Is de kleur van het vruchtwater groen of bruin, bel ons dan altijd direct op. <br>
                                        -	Het is normaal om wat slijmerig bloedverlies te hebben aan het eind van de zwangerschap en tijdens de bevalling. Als het ruim helderrood bloedverlies is wat lijkt op een menstruatie bel ons dan altijd direct op. <br>
                                        -	Wanneer je je onwel voelt. Bijvoorbeeld als je hoofdpijn hebt, hevige pijn in je bovenbuik of het gevoel alsof je een strakke band om je bovenbuik hebt, sterretjes of wazig zien, 
                                        slecht kunnen verdragen van licht, griepachtig gevoel zonder koorts, misselijkheid en braken. <br>
                                        -	Wanneer de baby minder beweegt dan normaal. </p>
                                    <br><br> 
                  </div>
</modal>

<modal v-show="isModalBevalhoudingenVisible" @close="closeModalBevalhoudingen">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbevalhoudingen.jpg">
                  <p class=modaltitle>Bevalhoudingen</p>
                  <p class="fucking-p">
                    Er zijn veel verschillende houdingen die je helpen tijdens de bevalling. Staand, gehurkt, in bad, onder de douch, op handen en knieën, leunend over de bal, op de baarkruk… 
                    Elke houding heeft zijn eigen werking en helpt de baby om zijn weg naar buiten te vinden. Welke houding voor jou het meest geschikt is ontdek je vaak pas tijdens de bevalling door de verschillende houdingen uit te proberen. 
                    Het uitproberen en regelmatig wisselen van houdingen is van groot belang voor een voorspoedig verloop van de bevalling. Het zorgt ervoor dat je bekken groter wordt en het helpt de baby om makkelijker door het bekken te gaan. 
                    De bevalling gaat hierdoor sneller en je hebt daardoor ook minder pijn. Het wisselen van houdingen heeft niet alleen veel voordelen voor jezelf, ook je kind heeft hier baat bij. 
                    Door regelmatig te wisselen van houding gaat er tijdens de bevalling meer zuurstof door de placenta naar de baby toe. Baby’s hebben hierdoor minder stress bij de bevalling. </p> 
                  <p class="fucking-p">
                    Bij bevallen denken veel mensen aan liggen op je rug. Eigenlijk is dat helemaal niet zo normaal en heeft ook nog eens veel nadelen. Er zijn maar weinig vrouwen die het prettig vinden om op je rug te liggen tijdens de bevalling. 
                    Het heeft ook als nadeel dat er minder bloed naar de baby toe gaat omdat de baby met zijn eigen gewicht een groot bloedvat dicht drukt. Tijdens een bevalling kan daardoor de hartslag van de baby naar beneden gaan. 
                    Daarnaast duurt de bevalling vaak ook langer omdat je bekken een stukje kleiner is en de baby er dus minder makkelijk door past. Dat betekend niet dat je zo niet kan of mag bevallen. Maar de meeste vrouwen kiezen hier liever niet voor. </p>
                  <p class="fucking-p">
                    In welke houding je uiteindelijk bevalt bepaal je helemaal zelf. Zolang het medisch verantwoord is is geen enkele houding ons te gek. Vrouwen die zelf hun bevalhouding kiezen kijken positiever terug op hun bevalling, 
                    hebben minder vaak pijnmedicatie nodig en bevallen sneller. En daar gaan we voor!</p>
                  <p class="fucking-p">
                    Het is handig om als voorbereiding op je bevalling alvast verschillende houdingen op te zoeken en uit te proberen. Zo weet je wat er mogelijk is en kan je de houdingen alvast eens ervaren. 
                    Natuurlijk helpen wij ook mee om de geschikte houding voor jou te vinden. In deze folder kan je verschillende houdingen opzoeken, maar er is nog veel meer. 
                    In <a href="https://deverloskundige.nl/uploads/deverloskundige.nl/knov_client_downloads/41/file/KN_folder_A5_bevalhoudingen_HR_digitaal.pdf" target="_blank">deze folder</a> kan je verschillende houdingen opzoeken, maar er is nog veel meer.</p>
                  <p class="fucking-p">
                    Wil je tijdens je bevalling gebruik maken van de baarkruk of het bevalbad. Dat kan gerust, deze kan je via ons lenen en hoef je zelf niet aan te schaffen.  </p>                  
                  <p class="fucking-p">
                    Tip: Kijk ook eens bij bevallen in water</p>
                  
                  
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalBevallenInWaterVisible" @close="closeModalBevallenInWater">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbevalleninwater.jpg">
                  <p class=modaltitle>Bevallen in water</p>
                  <p class="fucking-p">
                    Steeds meer Ambachtse kinderen worden onder water geboren en steeds meer aanstaande moeders kiezen bewust voor een badbevalling. Dat verbaast ons niet, want bevallen in water heeft namelijk allerlei voordelen. </p> 
                  <p class="fucking-p">
                    De grootste winst van een bad ligt voornamelijk in de ontspannende werking van het warme water. Het warme water zorgt ervoor dat je tijdens de bevalling beter kunt ontspannen en je zo meer kan toegeven aan de weeën. 
                    Het helpt om je gedachten los te laten en je af te sluiten van de gebeurtenissen om je heen. Door deze diepere ontspanning worden de weeën effectiever en komt de ontsluiting in een stroomversnelling. 
                    De bevalling gaat daardoor een stuk sneller. </p>
                  <p class="fucking-p">
                    Zowel het warme water als de diepere ontspanning werken pijnstillend. Je lichaam maakt door het warme water meer endorfine aan. Endorfine, ook wel de natuurlijke pijnstiller genoemd, 
                    is een morfineachtig hormoon wat je lichaam tijdens de bevalling zelf produceert en ervoor zorgt dat je pijn minder ervaart. Je wordt hier wat suffer van. De scherpe kantjes gaan van de pijn af waardoor je de weeën beter kan opvangen. 
                    Vrouwen die tijdens de bevalling gebruik maken van een bad of een douche hebben hierdoor meestal geen pijnstilling nodig. </p>
                  <p class="fucking-p">
                    Warm water helpt enorm tijdens de bevalling en bijna alle vrouwen maken daarom ook gebruik van een warm bad of douche tijdens de ontsluitingsweeën. Je kan er ook voor kiezen om in bad te bevallen. 
                    De baby wordt dan onderwater geboren. Na de geboorte kan de baby eventjes onder water blijven. Hij krijgt dan nog zuurstof door de navelstreng en zal pas gaan ademen op het moment dat de baby met zijn hoofd boven water komt. 
                    Baby’s die in bad geboren worden zijn over het algemeen veel rustiger en meer ontspannen door het warme water. </p>
                  <p class="fucking-p">
                    Naast dat een bad zorgt voor een snellere bevalling en minder pijn, heeft een badbevalling nog meer voordelen. Het badwater maakt je gewichtloos. Je lichaam voelt minder zwaar aan waardoor je prettiger kan bewegen en gemakkelijk 
                    verschillende houdingen kan aannemen. Zeker bij vrouwen met rug en bekkenklachten is een bevalling onderwater om deze reden vaak heel prettig. Ook bij vermoeidheid, door het al uren wegpuffen van weeën, 
                    is het een goed moment om in bad te gaan. Een bad helpt je dan om meer tot rust te komen en met minder inspanning van houding te wisselen. Daarnaast zorgt de ontspannende werking van het warme badwater er ook voor dat je 
                    spieren soepeler en sterker worden. De spieren rondom je vagina rekken daardoor tijdens de geboorte makkelijker mee en de kans op hechtingen neemt hierdoor af.</p>                  
                  <p class="fucking-p">
                    Als je thuis mag bevallen mag je in principe ook in bad bevallen. Dat kan thuis in jouw eigen bad of in ons grote bevalbad. Ook bij een poliklinische bevalling kan je kiezen om in bad te bevallen. 
                    Dit is alleen niet in elk ziekenhuis mogelijk. Hoe groter het bad, hoe meer bewegingsvrijheid en mogelijkheden er zijn om van houding te veranderen. Dat is vaak de reden dat veel vrouwen ervoor kiezen om ons bad te lenen. 
                    Bevallen in een gewoon bad is echter ook goed te doen. Ook in zo’n bad kan je verschillende houdingen aannemen. Vrouwen bevallen dan vaak op hun zij waarbij hun bovenste been op de badrand ligt of op hun rug met hun benen opgetrokken. 
                    Je kan ook op je knieën of gehurkt in een normaal bad bevallen. </p>
                  <p class="fucking-p">
                    Zie je het wel zitten om in bad te bevallen, vertel het ons. Bij de voorlichting over bevallen zullen we dan specifiek ingaan op bevallen onderwater en indien gewenst kunnen we ons bevalbad voor jou reserveren. 
                    Het bad krijg je mee als jouw uitgerekende datum in zicht komt. Dan staat het bad alvast bij jou in huis en kan je al eens oefenen met het opzetten van het bad. Het bad mag je gratis van ons lenen. 
                    Voor de hygiëne moet je gebruik maken van een plastic hoes die om het bad heen gaat. Deze hoes geven we ook aan je mee en kan je na de bevalling weggooien. De kosten van de hoes zal je wel zelf moeten betalen en bedragen €30,-.</p>  
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalWaarBevallenVisible" @close="closeModalWaarBevallen">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalwaarbevallen.jpg">
                  <p class=modaltitle>Waar bevallen</p>
                  <p class="fucking-p">
                    Of je thuis wilt bevallen of in het ziekenhuis bepaal je zelf. Alleen als er sprake is van medische noodzaak of een indicatie, is het ziekenhuis de aangewezen plaats. 
                    Afhankelijk van de situatie vindt de bevalling dan plaats onder verantwoordelijkheid van ons of van een gynaecoloog. </p> 
                  <p class="fucking-p">
                    Meestal is er geen medische reden om in het ziekenhuis te bevallen. Wil je dat toch, dan heet dat een poliklinische bevalling. Zowel voor een poliklinische bevalling als voor een thuisbevalling kun je terecht bij ons als verloskundige.</p>
                  <p class="fucking-p">
                    Het is belangrijk dat je bevalt op de plek waar jij je het meest op je gemak voelt. Zo’n keuze is vaak moeilijk te maken als je nog maar net zwanger bent. Je hebt dan nog maar weinig kennis over hoe de bevalling voor jou zal 
                    verlopen en je hebt geen voorstelling over hoe jij je op dat moment zal voelen. Stel deze keuze daarom uit en bereid je voor op beide scenario’s. Veel vrouwen beslissen pas tijdens de bevalling waar ze zullen bevallen.</p>  
                  <p class="fucking-p">
                    In de praktijk zien we dat de meeste vrouwen kiezen om hun kind thuis geboren te laten worden. Als alles normaal verloopt, is een thuisbevalling het mooiste wat er is. Lekker in je eigen huis de mooiste momenten van je leven beleven. 
                    En mocht het toch net even anders lopen dan gepland, dan zijn de ziekenhuizen hier in de regio altijd stand-by.</p>
                  
                  <br><br> 
                  </div>
</modal>

<modal v-show="isModalWatNodigVisible" @close="closeModalWatNodig">
          
          <div slot="body">
              <img class=modalimg src="../../public/images/fotos/modalbenodigdheden.jpg">
                  <p class=modaltitle>Benodigdheden</p>
                  <p class="fucking-p">
                    Wat heb je nodig voor een thuisbevalling<br><br>
                  -	Kleding voor de baby: romper met lange mauwen, bovenkleding, 2 mutsjes, sokken, luier. De meeste pasgeboren baby’s passen in maat 50-56. <br>
                  -	Een omslagdoek <br>
                  -	2 ijzeren kruiken met kruikenzak of hydrofiele luier voor eromheen<br>
                  -	10 hydrofiele luiers of handdoeken om de baby af te drogen en warm te houden.<br>
                  -	Digitale thermometer. Deze zit in het kraampakket.<br>
                  -	Een rol grote vuilniszakken<br>
                  -	Een emmer of plastic teiltje<br>
                  -	Een paar (oude) washandjes<br>
                  -	Matrasbeschermer. Het handigst is een waterdichte molton. In het kraampakket zit een plastic zeil die ook gebruikt kan worden, maar deze zijn vaak iets te klein en verschuiven makkelijk. <br>
                  -	10 celstofmatjes (ook wel onderleggers genoemd). Deze zitten in het kraampakket. <br>
                  -	Een pak grote steriele gaasjes van 10x10 cm. Dit zit in het kraampakket.<br>
                  -	Wc-rol of keukenpapier<br>
                  -	Een ondersteek (gratis te huur bij de thuiszorgwinkel)<br>
                  -	Kraamverband, dit zit in het kraampakket.<br>
                  </p> 
                  <br><br>  
                      <v-expansion-panels class=expand>
                        <v-expansion-panel>
                          <v-expansion-panel-header>Kraampakket</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <p class="expandp">In het kraampakket zitten allerlei spullen die handig zijn voor tijdens en na de bevalling. Het kraampakket kan je via je verzekering aanvragen. Het wordt niet vergoed vanuit de basisverzekering, 
                            maar vaak wel vanuit de aanvullende verzekering. Informeer bij je zorgverzekering waar je recht op hebt en bestel het in ieder geval op tijd. Je kan er ook voor kiezen om geen kraampakket aan te schaffen, 
                            maar om de benodigde spullen apart te kopen.   </p>

                            <p class="expandp">Als je niet voor een thuisbevalling kiest, maar graag in het ziekenhuis wilt bevallen, is een kraampakket ook handig om in huis te hebben. Er zitten allerlei spullen in die tijdens de kraamweek van pas komen. 
                            Daarnaast weet je nooit hoe jouw bevalling zal lopen. Soms gaat een bevalling zo snel dat er geen tijd meer is om naar het ziekenhuis te gaan. Dan is het fijn dat je ook voorbereid bent op een thuisbevalling.   </p>

                            <p class="expandp">De zorgverzekering stelt een kraampakket voor je samen. Deze pakketten zijn grotendeels gelijk, maar kunnen kleine verschillen hebben. Wat je in ieder geval nodig hebt en er ook altijd in zit is: </p>
                            <p class="expandp">  -	2 pakken kraamverband <br>
                              -	2 pakken maandverband<br>
                              -	10 celstofmatjes (ook wel onderleggers genoemd) <br>
                              -	1 digitale thermometer<br>
                              -	Gaasjes van 10x10cm<br>
                              -	Matrasbeschermer<br>
                              -	Alcohol voor desinfecteren van de thermometer. <br>
                              -	Watten </p>
                          </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel>
                          <v-expansion-panel-header>Vluchtkoffer voor naar het ziekenhuis</v-expansion-panel-header>
                          <v-expansion-panel-content>
                              <p class="expandp">  
                              -	Toiletartikelen<br>
                              -	T-shirt om in te bevallen<br>
                              -	2 paar warme sokken<br>
                              -	Kleding om te overnachten: Pyjama, ochtendjas, slippers.<br>
                              -	Kleding om naar huis te gaan: joggingsbroek, shirt, vest. <br>
                              -	Grote onderbroeken<br>
                              -	Stevige BH<br>
                              -	Spullen waarmee je de tijd kunt overbruggen als je moet wachten of als hulpmiddel voor tijdens de bevalling (muziek, iets te lezen, puzzel)<br>
                              -	Kleding voor de baby: romper met lange mauwen, bovenkleding, 2 mutsjes, sokken, Jas. De meeste pasgeboren baby’s passen in maat 50-56.<br>
                              -	Omslagdoek<br>
                              -	Fototoestel en/of mobiel met oplader<br>
                              -	ID kaart, zorgverzekeringspas<br>
                              -	Zwangerschapskaart (de print van jouw dossier, deze krijg je van ons)<br>
                              -	Licht verteerbare voeding. Bijvoorbeeld bananen. <br>
                              -	Maxi-cosi </p>
 
                              <p class="expandp">Het beste kan je je vluchtkoffer klaar hebben staan als je 37 weken zwanger bent. Ook als je thuis gaat bevallen is het fijn als deze helemaal klaar staat. Zorg ervoor dat je tijdens de thuisbevalling geen spullen 
                              uit je vluchtkoffer hoeft te halen. Mocht de bevalling dan toch anders lopen, kunnen we altijd snel naar het ziekenhuis vertrekken. </p>

                              <p class="expandp">Het is niet altijd mogelijk om alle spullen al in je vluchtkoffer te hebben zitten. Een handige tip is om een briefje te maken waarop staat wat je er op het laatste moment nog in moet doen. </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>

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
      isModalVoorbereidingVisible: false,
      isModalBevallingVisible: false,
      isModalBelinstructiesVisible: false,
      isModalBevalhoudingenVisible: false,
      isModalBevallenInWaterVisible: false,
      isModalWaarBevallenVisible: false,
      isModalWatNodigVisible: false,
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
    };
    
  },
  methods: {
    showModalVoorbereiding() {this.isModalVoorbereidingVisible = true;},
    showModalBevalling() {this.isModalBevallingVisible = true;},
    showModalBelinstructies() {this.isModalBelinstructiesVisible = true;},
    showModalBevalhoudingen() {this.isModalBevalhoudingenVisible = true;},
    showModalBevallenInWater() {this.isModalBevallenInWaterVisible = true;},
    showModalWaarBevallen() {this.isModalWaarBevallenVisible = true;},
    showModalWatNodig() {this.isModalWatNodigVisible = true;},
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
    
    closeModalVoorbereiding() {this.isModalVoorbereidingVisible = false;},
    closeModalBevalling() {this.isModalBevallingVisible = false;},
    closeModalBelinstructies() {this.isModalBelinstructiesVisible = false;},
    closeModalBevalhoudingen() {this.isModalBevalhoudingenVisible = false;},
    closeModalBevallenInWater() {this.isModalBevallenInWaterVisible = false;},
    closeModalWaarBevallen() {this.isModalWaarBevallenVisible = false;},
    closeModalWatNodig() {this.isModalWatNodigVisible = false;},
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},
  },
};

</script>

<style lang="less" scoped>
  .bevalling {
    background: white;
  }

  .bevallingtop {
    object-position: 0px 35%;
  }

  .tileset {
    width: 60%;
    min-width: 300px;
    align-items: center;
    background-color: white;
    background: white;
    transition: 0.2s all ease;
    margin-bottom: 60px;
    margin-top: 60px;
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