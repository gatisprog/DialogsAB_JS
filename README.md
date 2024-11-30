# DialogsAB_JS
### ***Elektroniskā klade par JavaScript***

***2024.gada 16.oktobrī***

<ins>**Pirmā nodarbība**</ins>

1. Dialogs AB E-Vides lietošanas apgūšana
   - pieslēgšanās e-videi;
   - mikrofona lietošana;
   - video lietošana
3. Kas ir JavaScript? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
4. HTML Tutorial https://www.w3schools.com/html/
5. Github.com apgūšana un repisotorija izveidošana

6. 😃 💻 🇱🇻 🥇


***2024.gada 21.oktobrī***

<ins>**Otrā nodarbība**</ins>

1. Visual Studio Code instalēšana un konfigurēšana
- pieslēgšanās VSC;
- Extensions pievienošana;
- Savienošana ar GitHub;
2. Git instalēšana
3. Mājas darbs līdz nākamajai nodarbībai izveidot html un css failu

***2024.gada 23.oktobrī***

<ins>**Trešā nodarbība**</ins>

1. Adreses izvietošana lokāli no datora, ar relatīvo adresi un ar absolūto adresi
2. Darbs ar Live Stream, sava darba tiešsaiste, lai nav jāpārlādē pārlūks
3. Ieskats programmēšanas valodas vērtībās:
 - biti, baiti, kilobaiti utt;
 - krāsas (sarkans, zils, zaļš);
 - kopējais krāsu toņu skaits.
4. Console log. 
5. Mājas darbs līdz nākamajai nodarbībai, veikt matemātiskos aprēķinus ar console.
   🤓

 ***2024.gada 28.oktobrī***

<ins>**Ceturtā nodarbība**</ins>

1. Sagatavošānās darbam:
   - savu repozotoriju lejuplāde ar GitHub Clone palīdzību;
   - Jaunas apakšmapes Class_04 izveide, pievienojot Stilu mapi, Scriptu mapi un index.html failu.
2. JavaScrip fragmentu pievienošana index.html (https://www.w3schools.com/js/js_whereto.asp)
   _Piemērs_
   <script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
3. Darbs ar datumiem izmantojot console.log:
 - date = Date.now() milisekundēs, kas tiek rēķināts no 1970.gada 01.janvāra: 1730216824559
 - date = new Date() datums parastjā izskatā Tue Oct 28 2024 17:45:51 GMT+0200 (Eastern European Standard Time) {}
4. Mainīgo vērtības (https://www.w3schools.com/js/js_variables.asp)
5. scope {}, jeb reģions
6. var, let un const izmantošana

**When to Use var, let, or const?**
Always declare variables
Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you can't use const
Only use var if you MUST support old browsers.

7. Arrays jeb darbs ar masīviem (https://www.w3schools.com/js/js_arrays.asp)
   
👨‍🎓

***2024.gada 30.oktobrī***

<ins>**Piektā nodarbība**</ins>

1. Arrays, jeb darbs ar masīviem (https://www.w3schools.com/js/js_arrays.asp)

"Kāpēc izmantot masīvus?
Ja jums ir vienumu saraksts (piemēram, automašīnu nosaukumu saraksts), automašīnu glabāšana atsevišķos mainīgajos varētu izskatīties šādi:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
Tomēr, ko darīt, ja vēlaties apskatīt automašīnas un atrast konkrētu? Un kā būtu, ja tev būtu nevis 3 mašīnas, bet 300?
Risinājums ir masīvs! Masīvā ar vienu nosaukumu var būt daudz vērtību, un vērtībām var piekļūt, atsaucoties uz indeksa numuru"

- Arrays pamata metodes:
    <p id="array_initial">Paragrāfa array_initial sākuma stāvoklis.</p>
    <p id="array_push">Paragrāfa array_push (pievienot beigas) sākuma stāvoklis.</p>
    <p id="array_unshift">Paragrāfa array_unshift (pievienot sākumā) sākuma stāvoklis.</p>
    <p id="array_splice">Paragrāfa array_splice (pievienot jebkurā vietā, pie reizes arī izdzēst) sākuma stāvoklis.</p>
    <p id="array_delete">Paragrāfa array_delete (izdzēst - NB! paliks "vieta" ar undefined) sākuma stāvoklis.</p>
    <p id="array_pop">Paragrāfa array_pop (izdzēst pedējo elementu) sākuma stāvoklis.</p>
    <p id="array_shift">Paragrāfa array_shift (izdzēst pirmo elementu) sākuma stāvoklis.</p>
    <p id="array_shift">Paragrāfa array_shift sākuma stāvoklis.</p>
    <p id="array_unshift">Paragrāfa array_unshift sākuma stāvoklis.</p>

  ![image](https://github.com/user-attachments/assets/086150fc-3d9b-4c63-be2c-b3f5be064b96)

3. HTML elementi un atribūti;
4. Datu tipi (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures);
5. Cikli (loops);

***2024.gada 04.novembrī***

<ins>**Sestā nodarbība**</ins>

1. if ... else (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
   
The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

Patiess
Programmā JavaScript patiesā vērtība ir vērtība, kas tiek ņemta vērā Būlatrue kontekstā . Visas vērtības ir patiesas, ja vien tās nav definētas kā nepatiesas . Tas ir, visas vērtības ir patiesas, izņemot , , , , , , , , un .false0-00n""nullundefinedNaNdocument.all. JavaScript izmanto tipa piespiešanu Būla kontekstos. JavaScript patieso vērtību piemēri (kas tiks piespiesti trueBūla kontekstos un tādējādi izpildīs ifbloku): JS
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

![image](https://github.com/user-attachments/assets/6c1bea36-7367-4a88-8433-d0908d17a86c)

![image](https://github.com/user-attachments/assets/8715c98f-55b1-4ee0-8db7-1f8f6dcea862)

2. switch (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

Paziņojums switch tiek izmantots, lai veiktu dažādas darbības, pamatojoties uz dažādiem apstākļiem. Switch priekšraksts novērtē izteiksmi, saskaņojot izteiksmes vērtību ar gadījuma klauzulas sēriju, un izpilda paziņojumus pēc pirmās gadījuma klauzulas ar atbilstošu vērtību, līdz tiek konstatēts pārtraukuma priekšraksts. Switch priekšraksta noklusējuma klauzula tiks pārlēkta, ja neviens gadījums neatbilst izteiksmes vērtībai.
   
const expr = 'Papayas';

switch (expr) {

  case 'Oranges':
  
    console.log('Oranges are $0.59 a pound.');
    
    break;
    
  case 'Mangoes':
  
  case 'Papayas':
  
    console.log('Mangoes and papayas are $2.79 a pound.');
    
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    
    break;
    
  default:
  
    console.log(`Sorry, we are out of ${expr}.`);

//Sintakse

switch(expression) {

  case x:
  
    // code block
    
    break;
    
  case y:
  
    // code block
    
    break;
    
  default:
  
    // code block
    
}

Tas darbojas šādi:

- Switch izteiksme tiek novērtēta vienreiz.
- Izteiksmes vērtība tiek salīdzināta ar katra gadījuma vērtībām.
- Ja ir atbilstība, tiek izpildīts saistītais koda bloks.
- Ja atbilstības nav, tiek izpildīts noklusējuma koda bloks.

3. While (kamēr)

//Paziņojums While izveido cilpu, kas izpilda norādīto paziņojumu, kamēr testa nosacījums tiek novērtēts kā patiess. Nosacījums tiek novērtēts pirms paziņojuma izpildes.//

(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

Sekojošā while cilpa atkārtojas tik ilgi, kamēr n ir mazāks par trīs.

let n = 0;

let x = 0;

while (n < 3) {

  n++;
  
  x += n;
  
}

4. For (https://www.w3schools.com/js/js_loop_for.asp)

Paziņojums For izveido cilpu ar 3 neobligātām izteiksmēm:

for (expression 1; expression 2; expression 3) {

  // code block to be executed
  
}

Izteiksme 1 tiek izpildīta (vienu reizi) pirms koda bloka izpildes.

2. izteiksme definē nosacījumu koda bloka izpildei.

Izteiksme 3 tiek izpildīta (katru reizi) pēc koda bloka izpildes.

Piemērs:

for (let i = 0; i < 5; i++) {

  text += "The number is " + i + "<br>";
  
}

No iepriekš minētā piemēra varat lasīt:

Izteiksme 1 nosaka mainīgo pirms cilpas sākuma (lai i = 0).

2. izteiksme definē nosacījumu, lai cilpa darbotos (i ir jābūt mazākam par 5).

3. izteiksme palielina vērtību (i++) katru reizi, kad tiek izpildīts koda bloks cilpā.

//Mājas darbs:

“Pusdienas laika” uzdevumi (iemaņu attīstīšanai; nav obligāti):
treniņi ar if
1. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot augošā secībā.
2. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot dilstošā secībā.
3. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot augošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
4. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot dilstošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
5. Uzdot četrus mainīgos, piemēram, a = 1; b = 10; c = 3; d = 7; sakārtot tos un attēlot augošā secībā. Risinot uzdevumu, saprast, ka ar diskrētiem mainīgajiem (a,b,c,d) tas vairs nav tik vienkārši, aizdomāties par masīva (a[0],a[1],a[2],a[3]), ciklu un kādas metodes, piemēram, burbuļu metodi, izmantošanu.

treniņi ar while (un if)
1. Attēlot visus veselus skaitļus no 1 līdz 30.
2. Attēlot visus veselus nepāru skaitļus no 1 līdz 30.
3. Attēlot visus veselus pāru skaitļus no 1 līdz 30.
4. Attēlot visus veselus nepāru skaitļus no 1 līdz 30, bet 5 un 11 neattēlot.
5. Attēlot visus veselus pāru skaitļus no 1 līdz 30, bet 12, 14, 16, 18, neattēlot.


***2024.gada 06.novembrī***

<ins>**Septītā nodarbība**</ins>

1. Patstāvīgais darbs, skaitļu kārtošana un skaitīšana
   
//!(https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/)

![image](https://github.com/user-attachments/assets/ce646c25-82cd-4aed-956a-d7b69b0abda5)

- skaitļu kārtošana, izmantojot burbuļa metodi (https://www.geeksforgeeks.org/sorting-in-array/)

2. Cikls For - of (https://www.w3schools.com/js/js_loop_forof.asp)

   JavaScript for ofpriekšraksts iziet cauri iterējama objekta vērtībām.

Tas ļauj cilpu pāri atkārtojamām datu struktūrām, piemēram, masīviem, virknēm, kartēm, mezglu sarakstiem un citām.

![image](https://github.com/user-attachments/assets/db1c1ac2-bf38-4676-8217-75c3fa941a56)

3. Funkcijas (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

   Vēl viens būtisks kodēšanas jēdziens ir funkcijas , kas ļauj saglabāt koda fragmentu, kas veic vienu uzdevumu noteiktā blokā, un pēc tam izsaukt šo kodu, kad vien tas ir nepieciešams, izmantojot vienu īsu komandu, nevis rakstīt to pašu. kods vairākas reizes. Šajā rakstā mēs izpētīsim tādu funkciju pamatjēdzienus kā pamata sintakse, to izsaukšana un definēšana, darbības joma un parametri.
   Funkcijas ir viens no JavaScript pamatelementiem. Funkcija JavaScript ir līdzīga procedūrai — priekšrakstu kopai, kas veic uzdevumu vai aprēķina vērtību, taču, lai procedūru kvalificētu kā funkciju, tai ir jāievada zināma ievade un jāatgriež izvade, ja pastāv kāda acīmredzama saistība starp ieeja un izeja. Lai izmantotu funkciju, tā ir jādefinē kaut kur tvērumā, no kura vēlaties to izsaukt.

**Kur es varu atrast funkcijas?**

JavaScript jūs atradīsit funkcijas visur. Faktiski mēs esam izmantojuši funkcijas visu kursu līdz šim; mēs vienkārši neesam par viņiem daudz runājuši. Tomēr tagad ir laiks, kad mums jāsāk skaidri runāt par funkcijām un patiešām izpētīt to sintaksi.

Gandrīz vienmēr, kad izmantojat JavaScript struktūru, kurā ir iekavu pāris — ()un jūs neizmantojat vispārpieņemtu iebūvēto valodas struktūru, piemēram, for cilpu , while vai do...while cilpa vai ja... cits paziņojums , jūs izmantojat funkciju.


***2024.gada 11.novembrī***

<ins>**Astotā nodarbība**</ins>

1. Funkcijas (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
    - anonīma funkcija:
      
      Līdz šim mēs tikko esam izveidojuši šādu funkciju:

function myFunction() {

  alert("hello");
}

Bet varat arī izveidot funkciju, kurai nav nosaukuma:

(function () {

  alert("hello");
});

To sauc par anonīmu funkciju, jo tai nav nosaukuma. Jūs bieži redzēsit anonīmas funkcijas, ja funkcija paredz saņemt citu funkciju kā parametru. Šajā gadījumā funkcijas parametrs bieži tiek nodots kā anonīma funkcija.

2. Ieskats ChatsGpt lietošānā, kādas funkcijas tas pilda un ko mēs no tā varam iegūt. (https://chatgpt.com/)

**ChatGPT** ir mākslīgā intelekta (AI) balstīta valodas modelis, kuru izstrādājusi OpenAI. Tas ir īpaši trenēts, lai saprastu un ģenerētu cilvēku valodu, un tā mērķis ir veidot sarunas ar lietotājiem, atbildot uz jautājumiem, piedāvājot informāciju, palīdzot ar uzdevumiem un pat piedāvājot radošas idejas.

ChatGPT balstās uz **GPT (Generative Pre-trained Transformer)** arhitektūru, kas ir dziļās mācīšanās modelis, kas spēj analizēt un veidot tekstu, ņemot vērā lielus datu apjomus. Tā kā šis modelis ir apmācīts uz plašu tekstu datu kopumu, tas spēj atpazīt valodas modeļus un piedāvāt atbildes, kas bieži vien izklausās ļoti dabiski un līdzīgas cilvēku sarunām.

ChatGPT var tikt izmantots dažādiem mērķiem, piemēram:
- **Izglītība** – palīdzot cilvēkiem mācīties un izprast sarežģītas tēmas.
- **Atbalsts klientiem** – sniedzot automatizētas atbildes uz biežāk uzdotajiem jautājumiem.
- **Radošums** – palīdzot ģenerēt idejas, rakstīt stāstus, dzeju vai pat kodu.
- **Konsultācijas** – piedāvājot informāciju un ieteikumus dažādās jomās, piemēram, veselībā, zinātnē vai tehnikā.

Šis rīks nav tikai spējīgs atbildēt uz jautājumiem, bet arī veidot sarunas, pielāgojoties lietotāja vajadzībām un stilam. Tas nav cilvēks, bet tas izmanto sarežģītu algoritmu, lai “mākslīgi” atdarinātu cilvēka valodas izpratni un reakcijas.

Kopumā ChatGPT ir viens no mūsdienu valodas modeļu piemēriem, kas ļauj cilvēkiem mijiedarboties ar tehnoloģijām dabiskā veidā.

3. API lietošana
 API jeb **lietojumprogrammu saskarne (Application Programming Interface)** ir kopums noteikumu un protokolu, kas ļauj dažādām programmām savstarpēji komunicēt un mijiedarboties. API definē, kā dažādi programmatūras komponenti var sazināties, kādi dati ir pieejami un kā tos var izmantot.

Vienkāršoti sakot, API darbojas kā "tilts" starp divām programmām vai sistēmām, ļaujot tām apmainīties ar informāciju. Tas palīdz programmētājiem izmantot jau esošās funkcijas vai pakalpojumus, neizstrādājot tos no nulles.

Piemēram, ja tu izmanto kādu lietotni, kas parāda laika prognozi, tā var izmantot API, lai iegūtu datus no laika servisa. Tas ļauj tai parādīt aktuālo laiku, nevis katru reizi pašai aprēķināt laika apstākļus.

API var būt dažādi, piemēram:
- **Web API** – API, kas darbojas internetā un ļauj dažādām tīmekļa lietotnēm mijiedarboties.
- **Operētājsistēmas API** – ļauj programmatūrai izmantot operētājsistēmas funkcijas.
- **Bibliotēku API** – nodrošina piekļuvi bibliotēkām vai rīkiem, ko var izmantot programmās.

API ir ļoti svarīgi modernās programmēšanas pasaulē, jo tie ļauj dažādiem pakalpojumiem sadarboties un piedāvāt vienkāršus un efektīvus risinājumus.  

4. Mini projektu gatavošana (https://javascript-mini-projects.netlify.app/) (https://github.com/bradtraversy/vanillawebprojects)
   
   
***2024.gada 20.novembrī***

<ins>**Devītā nodarbība**</ins>

1. JS Objekti (https://www.w3schools.com/js/js_objects.asp)

Programmā JavaScript objektus var uzskatīt par īpašību kopumu. Izmantojot objekta literālo sintakse , tiek inicializēts ierobežots rekvizītu kopums; tad rekvizītus var pievienot un noņemt. Rekvizītu vērtības var būt jebkura veida vērtības, tostarp citi objekti, kas ļauj veidot sarežģītas datu struktūras. Rekvizīti tiek identificēti, izmantojot galvenās vērtības. Atslēgas vērtība ir virknes vērtība vai simbola vērtība.

![Car_objekt](https://github.com/user-attachments/assets/af5111f0-f66a-4c17-a396-1be5597c7cee)

1.1 JS Objekta īpašibas (Object Properties) 

JavaScript objekti ir ļoti elastīgi un jaudīgi. Tie var saturēt dažāda veida īpašības, kas apraksta objektu vai uzlabo tā funkcionalitāti. Šeit ir dažas svarīgas JavaScript objekta īpašības:

1.1.1 Vērtības īpašības (Data Properties): Tās satur vērtības un tiek izmantotas, lai aprakstītu objekta īpašības.

- Atslēga (key): Īpašības nosaukums.

- Vērtība (value): Īpašības vērtība, kas var būt jebkurš datu tips.

1.1.2 Funkciju īpašības (Function Properties): Tās ir īpašības, kas satur funkcijas, kuras var izsaukt uz objektu.

- Parasti tās tiek sauktas par metodēm.

1.1.3 Accessor īpašības (Accessor Properties): Tās tiek izmantotas, lai iegūtu un iestatītu objekta vērtības. Piešķiršanā tiek izmantoti "get" un "set".

![Object_properties](https://github.com/user-attachments/assets/c11e57ed-978a-482e-af42-45a7266edebf)

1.1.4 Protēšana (Prototyping): Objekti var mantot īpašības un metodes no cita objekta, ko sauc par prototipu.

- Tas ļauj objektiem dalīties funkcionalitātē un resursos.

1.1.5 Deskriptoru īpašības (Descriptor Properties): Tās nosaka, kā īpašība uzvedas. Deskriptorus izmanto, lai definētu vērtības īpašības un piekļuves īpašības.

- Configurable: Vai īpašību var mainīt vai dzēst.

- Enumerable: Vai īpašību var izsaukt cilpā (loopā).

- Writable: Vai īpašības vērtību var mainīt.

- Value: Pašas vērtības īpašība.

1.2. JS Objekta Metodes (JS Object Methods)

JavaScript objektiem ir daudzas noderīgas metodes, kas palīdz manipulēt ar datiem un veikt dažādas operācijas. Šeit ir dažas svarīgas un bieži izmantotas JavaScript objekta metodes:

1.2.1 Object.keys(obj): Atgriež masīvu ar visām objekta īpašību atslēgām.

![Tveršana1](https://github.com/user-attachments/assets/c673e83d-9ac1-4b7c-8ba6-db522967bb71)

1.2.2 Object.values(obj): Atgriež masīvu ar visām objekta īpašību vērtībām.

![Tveršana2](https://github.com/user-attachments/assets/1e16e0e7-4331-41cb-8e7a-636ee0973035)

1.2.3 Object.entries(obj): Atgriež masīvu ar objekta īpašību atslēgu un vērtību pāriem.

![Tveršana3](https://github.com/user-attachments/assets/777692cb-b485-45b6-834d-64f12df031bd)

1.2.4 Object.assign(target, ...sources): Kopē visas īpašības no viens vai vairākiem avota objektiem uz mērķa objektu.

![Tveršana4](https://github.com/user-attachments/assets/3ef6c53e-d6b7-4617-b57f-8ff31a595528)

1.2.5 Object.freeze(obj): Neļauj mainīt objekta īpašības vai pievienot jaunas īpašības.

![Tveršana5](https://github.com/user-attachments/assets/80115205-a67b-43f9-9f6d-589f8be1c45f)

1.2.6 Object.seal(obj): Neļauj pievienot vai dzēst īpašības, bet atļauj mainīt esošās īpašības vērtības.

![Tveršana6](https://github.com/user-attachments/assets/6e273a48-f21c-4d1a-a2ef-0648f454567c)

1.2.7 Object.create(proto): Izveido jaunu objektu ar norādīto prototipu.

![Tveršana7](https://github.com/user-attachments/assets/113c6607-e9b7-4f1b-8950-c19be1131c7b)

* Vai ir iespējams izdzēst JS Objektu?
  
Programmā JavaScript jūs nevarat tieši izdzēst pašu objektu , taču varat noņemt atsauces uz to. JavaScript izmanto atkritumu savākšanu , lai automātiski atgūtu atmiņu objektiem, kuri vairs nav sasniedzami vai uz kuriem nav atsauces.

![Tveršana8](https://github.com/user-attachments/assets/450ef14c-866f-4dcc-b781-e3e9e46bc4a0)

* Vai ir iespējams izdzēst Object Properties, kas konfigurēta ar false?

Programmā JavaScript, ja īpašuma configurable atribūts ir iestatīts uz false, to nevar izdzēst. Mēģinot dzēst šādu rekvizītu, izmantojot delete operatoru, klusi neizdosies ne-stingrā režīmā un radīs kļūdu stingrajā režīmā.

Ja jums ir jādzēš nekonfigurējams rekvizīts un nevarat to izdarīt tieši, risinājums ir izveidot jaunu objektu bez šī rekvizīta.

Piemērs:

![Tveršana9](https://github.com/user-attachments/assets/7049e123-13d9-4b0f-8e2a-3e35f36823a7)




   
