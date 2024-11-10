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
