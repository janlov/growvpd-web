var GUIDE_CONTENT = {
  "getting-started": {
    title: "Jak zacząć z GrowVPD Pro",
    body: `
                <h2>Czym jest GrowVPD Pro?</h2>
                <p>GrowVPD Pro to darmowa, działająca offline aplikacja na Androida, która daje ci wszystko, czego potrzebujesz do zarządzania uprawami indoorowymi. Łączy w sobie wykres VPD, pełny dziennik uprawy, przewodnik oświetlenia PPFD, kalkulatory nawożenia, identyfikację chorób roślin, profile sprzętu i automatyzację inteligentnych urządzeń &mdash; wszystko w jednym pobraniu o rozmiarze 15 MB. Nie wymaga konta, nie potrzebuje internetu do podstawowych funkcji.</p>
                <p>Niezależnie od tego, czy jesteś początkującym growerem, czy doświadczonym hodowcą z wielonamiotową konfiguracją, aplikacja skaluje się od prostego codziennego logowania po w pełni zautomatyzowaną kontrolę klimatu z Tuya, Mars Hydro, AC Infinity i innymi inteligentnymi urządzeniami.</p>

                <h2>Pobieranie i pierwsze uruchomienie</h2>
                <p>Zainstaluj GrowVPD Pro z Google Play. Przy pierwszym uruchomieniu zobaczysz krótki samouczek wprowadzający główne funkcje. Możesz go pominąć, ale warto poświęcić te 30 sekund.</p>
                <p>Aplikacja działa w pełni offline. Połączenie internetowe jest potrzebne tylko do podłączenia inteligentnych urządzeń lub udostępniania danych.</p>

                <h2>9 zakładek — wyjaśnienie</h2>
                <p>Dolny pasek daje ci szybki dostęp do każdej sekcji aplikacji. Oto co robi każda zakładka:</p>
                <ol>
                    <li><strong>VPD</strong> &mdash; Interaktywny wykres ciepła VPD. Wpisz temperaturę i wilgotność, aby zobaczyć wartość VPD, oznaczoną kolorami według fazy wzrostu. Obsługuje dane z czujnika Bluetooth i integrację z inteligentnymi urządzeniami.</li>
                    <li><strong>PPFD</strong> &mdash; Miernik światła (kamera telefonu) i przewodnik referencyjny PPFD. Pokazuje optymalne poziomy oświetlenia dla każdej fazy wzrostu.</li>
                    <li><strong>Automatyzacja</strong> &mdash; Podłącz inteligentne urządzenia, twórz pokoje i namioty, ustaw reguły automatyzacji i monitoruj środowisko w czasie rzeczywistym. To funkcja Pro.</li>
                    <li><strong>Dziennik</strong> &mdash; Twój dziennik uprawy. Loguj codzienne wpisy z temperaturą, wilgotnością, VPD, pH, EC, składnikami odżywczymi, zdjęciami i notatkami. Śledź wiele upraw jednocześnie.</li>
                    <li><strong>Szablony</strong> &mdash; Gotowe i własne szablony upraw. Rozpocznij nową uprawę z szablonu, aby zaoszczędzić czas.</li>
                    <li><strong>Nawozy</strong> &mdash; Kalkulator nawozów dla popularnych harmonogramów karmienia. Dostosuj proporcje na fazę wzrostu.</li>
                    <li><strong>Przewodnik roślin</strong> &mdash; Wizualny przewodnik po zdrowiu roślin, niedoborach, chorobach i technikach treningowych. Zawiera diagnostykę chorób opartą na AI (Pro).</li>
                    <li><strong>Sprzęt</strong> &mdash; Zapisz konfiguracje namiotów, lampy, wentylatory, filtry i inny sprzęt jako profile do ponownego użycia.</li>
                    <li><strong>Ustawienia</strong> &mdash; Motyw, język (11 dostępnych), jednostki, blokada PIN, zabezpieczenie biometryczne, połączone konta i opcje eksportu.</li>
                </ol>

                <h2>Konfiguracja pierwszej uprawy</h2>
                <p>Przejdź do zakładki <strong>Dziennik</strong> i dotknij przycisku "+", aby utworzyć nową uprawę. Zostaniesz poproszony o:</p>
                <ol>
                    <li><strong>Nazwa</strong> &mdash; Nadaj uprawie rozpoznawalną nazwę, np. "Namiot A - Wiosna 2026".</li>
                    <li><strong>Odmiana</strong> &mdash; Wpisz odmianę lub gatunek, który uprawiasz.</li>
                    <li><strong>Podłoże</strong> &mdash; Wybierz podłoże uprawowe (ziemia, kokos, hydro itp.).</li>
                    <li><strong>Rozmiar doniczki</strong> &mdash; Wpisz rozmiar pojemnika, aby aplikacja mogła oszacować zapotrzebowanie na wodę.</li>
                    <li><strong>Typ oświetlenia</strong> &mdash; Wybierz lampę (LED, HPS, CMH itp.).</li>
                    <li><strong>Data rozpoczęcia</strong> &mdash; Domyślnie dzisiejszy dzień, ale możesz ustawić wcześniejszą datę, jeśli uprawa już się rozpoczęła.</li>
                </ol>
                <p>Po utworzeniu twoja uprawa pojawi się na liście dziennika. Dotknij jej, aby zacząć dodawać wpisy.</p>

                <blockquote>
                    <strong>Wskazówka:</strong> Użyj zakładki Szablony, aby rozpocząć od gotowego planu uprawy. Szablony zawierają sugerowane harmonogramy nawożenia, czasy trwania faz i docelowe wartości VPD.
                </blockquote>

                <h2>Dodawanie pierwszego wpisu</h2>
                <p>Wewnątrz uprawy dotknij "Dodaj wpis", aby zalogować nowy dzień. Formularz wpisu zawiera:</p>
                <ul>
                    <li><strong>Temperatura i wilgotność</strong> &mdash; Wprowadź odczyty. Aplikacja automatycznie obliczy VPD.</li>
                    <li><strong>Faza wzrostu</strong> &mdash; Wybierz sadzonka, wegetacja lub kwitnienie. To dostosowuje cele VPD na wykresie.</li>
                    <li><strong>pH i EC</strong> &mdash; Śledź jakość wody lub roztworu odżywczego.</li>
                    <li><strong>PPFD</strong> &mdash; Zaloguj odczyt intensywności oświetlenia.</li>
                    <li><strong>Nawozy</strong> &mdash; Zapisz, czym i ile karmiłeś.</li>
                    <li><strong>Zdjęcia</strong> &mdash; Dołączaj zdjęcia bezpośrednio z aparatu lub galerii. Rób regularne zdjęcia, aby budować wizualną oś czasu.</li>
                    <li><strong>Notatki</strong> &mdash; Dowolny tekst na wszystko inne: obserwacje, zmiany, przypomnienia.</li>
                </ul>
                <p>Po zapisaniu zobaczysz wpis w osi czasu uprawy z wartością VPD podświetloną na zielono, żółto lub czerwono w zależności od tego, jak blisko jesteś zakresu docelowego.</p>

                <h2>Podstawy wykresu VPD</h2>
                <p>Przejdź do zakładki <strong>VPD</strong>, aby zobaczyć interaktywną mapę ciepła. Wykres pokazuje wartości VPD w zakresie temperatur i wilgotności:</p>
                <ul>
                    <li><strong>Zielone komórki</strong> = Optymalne VPD dla wybranej fazy wzrostu. Tu chcesz być.</li>
                    <li><strong>Niebieskie komórki</strong> = VPD za niskie (niedostateczna transpiracja, ryzyko pleśni).</li>
                    <li><strong>Żółte/pomarańczowe/czerwone komórki</strong> = VPD za wysokie (nadmierna transpiracja, stres rośliny).</li>
                </ul>
                <p>Dotknij dowolnej komórki, aby zobaczyć dokładne wartości temperatury, wilgotności i VPD. Użyj selektora fazy u góry, aby przełączać się między sadzonką, wegetacją i kwitnieniem.</p>
                <p>Jeśli masz czujnik temperatury/wilgotności Bluetooth, wykres może odczytywać dane na żywo i pokazywać twoją aktualną pozycję bezpośrednio na mapie ciepła.</p>

                <h2>Podłączanie inteligentnych urządzeń (opcjonalnie)</h2>
                <p>Jeśli używasz Tuya, Mars Hydro, AC Infinity, Spider Farmer lub innych obsługiwanych inteligentnych urządzeń, przejdź do zakładki <strong>Automatyzacja</strong> lub <strong>Ustawienia &gt; Połączone konta</strong>, aby połączyć swoje urządzenia. Po podłączeniu możesz:</p>
                <ul>
                    <li>Widzieć odczyty czujników na żywo na wykresie VPD</li>
                    <li>Automatyzować wentylatory, nawilżacze i lampy na podstawie reguł VPD</li>
                    <li>Automatycznie przechwytywać zdjęcia poklatkowe z kamer Tuya</li>
                </ul>
                <p>Inteligentna automatyzacja to funkcja Pro. Sprawdź nasz <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">przewodnik podłączania Tuya</a> lub <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">przewodnik podłączania Mars Hydro</a> po instrukcje krok po kroku.</p>

                <h2>Wskazówki dla początkujących</h2>
                <blockquote>
                    <strong>Zacznij od szablonu.</strong> Szablony dają ci sprawdzony harmonogram do naśladowania. Zawsze możesz go później dostosować.
                </blockquote>
                <blockquote>
                    <strong>Sprawdzaj VPD codziennie.</strong> Stabilne VPD jest ważniejsze niż jednorazowe trafienie idealnej wartości. Celuj w stabilność w zielonej strefie.
                </blockquote>
                <blockquote>
                    <strong>Rób zdjęcia codziennie.</strong> Na początku wydaje się to zbędne, ale wizualna historia jest bezcenna do porównywania upraw, diagnozowania problemów i śledzenia postępów.
                </blockquote>
                <blockquote>
                    <strong>Loguj nawozy i pH.</strong> Kiedy coś pójdzie nie tak, posiadanie historycznych danych znacznie przyspiesza rozwiązywanie problemów.
                </blockquote>
                <p>To wszystko, czego potrzebujesz, żeby zacząć. Najlepszy sposób na naukę aplikacji to po prostu jej użycie &mdash; utwórz uprawę, zaloguj kilka wpisów i eksploruj zakładki. Interfejs jest zaprojektowany tak, aby był intuicyjny, a każda funkcja jest dostępna z głównej nawigacji.</p>
`
  },
  "vpd-complete-guide": {
    title: "Zrozumienie VPD: Kompletny przewodnik dla growerów indoorowych",
    body: `
                <h2>Czym jest VPD?</h2>
                <p>VPD to skrót od <strong>Vapor Pressure Deficit</strong> (Deficyt Ciśnienia Pary). Mówiąc prosto, mierzy, jak dużą "moc suszenia" ma powietrze &mdash; jak agresywnie powietrze wyciąga wilgoć z liści twoich roślin.</p>
                <p>Pomyśl o tym tak: twoja roślina oddycha przez maleńkie pory na liściach zwane szparkami (stomata). Kiedy powietrze wokół liścia jest suche, woda szybko odparowuje przez te pory. Kiedy powietrze jest wilgotne, parowanie zwalnia. VPD przypisuje liczbę tej różnicy.</p>
                <p>Wyższe VPD oznacza, że powietrze szybciej wyciąga wodę z liści. Niższe VPD oznacza, że powietrze jest prawie nasycone i parowanie jest powolne. Oba skrajności powodują problemy. Celem jest znalezienie punktu, w którym rośliny transpirują w zdrowym, produktywnym tempie.</p>

                <h2>Dlaczego VPD ma większe znaczenie niż sama temperatura lub wilgotność</h2>
                <p>Większość growerów śledzi temperaturę i wilgotność osobno. Problem w tym, że ten sam procent wilgotności oznacza zupełnie różne rzeczy przy różnych temperaturach.</p>
                <p>Na przykład 60% wilgotności względnej przy 20&deg;C to zupełnie inne środowisko niż 60% wilgotności względnej przy 30&deg;C. Przy 30&deg;C powietrze może pomieścić znacznie więcej wody, więc 60% RH nadal oznacza, że powietrze ma dużą moc suszenia. Przy 20&deg;C 60% RH jest łagodniejsze.</p>
                <p>VPD ujmuje tę zależność w jednej liczbie. Zamiast żonglować dwiema zmiennymi i próbować zapamiętać właściwą kombinację dla każdej fazy, możesz monitorować jedną wartość, która mówi ci dokładnie, jak twoje rośliny doświadczają klimatu.</p>

                <h2>Jak oblicza się VPD</h2>
                <p>Formuła VPD jest prosta, gdy zrozumiesz jej składniki:</p>
                <ol>
                    <li><strong>Ciśnienie Pary Nasyconej (SVP)</strong> &mdash; Maksymalna ilość pary wodnej, jaką powietrze może pomieścić w danej temperaturze. Cieplejsze powietrze pomieści więcej. Obliczane na powierzchni liścia.</li>
                    <li><strong>Rzeczywiste Ciśnienie Pary (AVP)</strong> &mdash; Ilość pary wodnej aktualnie znajdującej się w powietrzu. Wynika z temperatury powietrza i wilgotności względnej.</li>
                </ol>
                <p>VPD to różnica między tymi dwiema wartościami:</p>
                <p><code>VPD = SVP(temperatura liścia) - AVP(temperatura powietrza, wilgotność)</code></p>
                <p>GrowVPD Pro wykonuje całą tę matematykę automatycznie. Wpisujesz temperaturę i wilgotność, a aplikacja natychmiast wyświetla wartość VPD.</p>

                <h2>Temperatura liścia vs. temperatura powietrza</h2>
                <p>To szczegół, który wielu growerów pomija. VPD, które się liczy, jest obliczane na <strong>powierzchni liścia</strong>, a nie przy termometrze wiszącym na ścianie.</p>
                <p>Liście są zwykle <strong>1&ndash;3&deg;C chłodniejsze</strong> niż otaczające powietrze dzięki transpiracji (chłodzenie parowe). Pod intensywnym oświetleniem ta różnica może być mniejsza. W warunkach słabego oświetlenia może być większa.</p>
                <p>W GrowVPD Pro możesz dostosować offset temperatury liścia w ustawieniach wykresu VPD. Jeśli masz termometr na podczerwień, zmierz kilka liści, aby znaleźć swój rzeczywisty offset. W przeciwnym razie domyślny offset 2&deg;C jest solidnym punktem wyjścia.</p>

                <blockquote>
                    <strong>Wskazówka:</strong> Jeśli masz inteligentny czujnik temperatury umieszczony na poziomie korony, uzyskasz odczyty znacznie bliższe rzeczywistym warunkom liścia niż czujnik zamontowany na ścianie lub blisko wyciągu.
                </blockquote>

                <h2>Strefy VPD — wyjaśnienie</h2>
                <p>VPD mierzy się w kilopaskalach (kPa). Oto strefy i co oznaczają dla twoich roślin:</p>

                <table class="vpd-zones">
                    <thead>
                        <tr>
                            <th>Strefa</th>
                            <th>Zakres VPD</th>
                            <th>Co się dzieje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zone-dot zone-blue"></span>Niedostateczna transpiracja</td>
                            <td>&lt; 0.4 kPa</td>
                            <td>Powietrze prawie nasycone. Szparki zamykają się, transport składników odżywczych zwalnia, ryzyko pleśni i mączniaka znacząco wzrasta.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-light-green"></span>Sadzonka / Klon</td>
                            <td>0.4 &ndash; 0.8 kPa</td>
                            <td>Łagodna transpiracja. Idealna dla sadzonek, świeżych klonów i przesadzonych roślin z ograniczonym systemem korzeniowym.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-green"></span>Wegetacja</td>
                            <td>0.8 &ndash; 1.2 kPa</td>
                            <td>Silna, zdrowa transpiracja. Rośliny rosną energicznie, pobór składników jest wydajny, łodygi się wzmacniają.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-dark-green"></span>Kwitnienie</td>
                            <td>1.0 &ndash; 1.5 kPa</td>
                            <td>Optymalne dla rozwoju kwiatów. Nieco suchsze powietrze zachęca do produkcji żywicy i zmniejsza ryzyko zgnilizny pąków.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-red"></span>Nadmierna transpiracja</td>
                            <td>&gt; 1.5 kPa</td>
                            <td>Rośliny tracą wodę szybciej niż korzenie mogą dostarczyć. Szparki zamykają się obronnie, powodując blokadę składników, więdnięcie i stres cieplny.</td>
                        </tr>
                    </tbody>
                </table>

                <blockquote>
                    <strong>Ważne:</strong> Te zakresy to wytyczne, nie twarde reguły. Zdrowe, dobrze ukorzenione rośliny z silnym systemem korzeniowym mogą znieść nieco wyższe VPD. Rośliny pod stresem lub pod intensywnym oświetleniem mogą potrzebować dolnego końca każdego zakresu.
                </blockquote>

                <h2>Jak czytać wykres VPD w GrowVPD Pro</h2>
                <p>Zakładka VPD wyświetla interaktywną mapę ciepła. Oś pozioma pokazuje temperaturę, oś pionowa wilgotność, a każda komórka jest pokolorowana na podstawie wynikowej wartości VPD.</p>
                <ul>
                    <li><strong>Niebieski</strong> &mdash; VPD za niskie. Powietrze jest zbyt wilgotne dla danej temperatury.</li>
                    <li><strong>Zielony</strong> &mdash; Optymalne VPD. To twoja strefa docelowa.</li>
                    <li><strong>Żółty</strong> &mdash; VPD rośnie. Rośliny zaczynają ciężko pracować.</li>
                    <li><strong>Pomarańczowy / Czerwony</strong> &mdash; VPD za wysokie. Prawdopodobny stres roślin.</li>
                </ul>
                <p>Użyj <strong>selektora fazy</strong> u góry, aby przełączać się między sadzonką, wegetacją i kwitnieniem. Zielona strefa przesuwa się odpowiednio, ponieważ młodsze rośliny potrzebują niższego VPD, a rośliny kwitnące tolerują (i korzystają z) wyższego VPD.</p>
                <p>Dotknij dowolnej komórki, aby zobaczyć dokładne wartości. Jeśli masz podłączony inteligentny czujnik lub czujnik Bluetooth, wykres podświetla twoją aktualną pozycję znacznikiem, abyś mógł na pierwszy rzut oka zobaczyć, gdzie jesteś.</p>

                <h2>Jak regulować VPD</h2>

                <h3>VPD za wysokie (rośliny więdną, liście się zwijają)</h3>
                <p>Twoje powietrze jest zbyt suche w stosunku do temperatury. Aby obniżyć VPD:</p>
                <ul>
                    <li><strong>Zwiększ wilgotność</strong> &mdash; Uruchom nawilżacz, powieś mokre ręczniki w namiocie lub spryskaj ściany (nie rośliny bezpośrednio podczas kwitnienia).</li>
                    <li><strong>Obniż temperaturę</strong> &mdash; Zwiększ wyciąg, podnieś nieco lampy lub zmniejsz intensywność oświetlenia.</li>
                    <li><strong>Zmniejsz bezpośredni przepływ powietrza na rośliny</strong> &mdash; Wentylatory oscylacyjne skierowane nieco powyżej korony zamiast bezpośrednio na liście.</li>
                </ul>

                <h3>VPD za niskie (ryzyko pleśni, wolny wzrost)</h3>
                <p>Twoje powietrze jest zbyt wilgotne dla danej temperatury. Aby podnieść VPD:</p>
                <ul>
                    <li><strong>Zmniejsz wilgotność</strong> &mdash; Uruchom osuszacz, zwiększ prędkość wyciągu, popraw wymianę powietrza.</li>
                    <li><strong>Zwiększ temperaturę</strong> &mdash; Uruchom lampy na pełnej mocy, nieco zmniejsz wyciąg, dodaj mały grzejnik w razie potrzeby.</li>
                    <li><strong>Zwiększ cyrkulację powietrza</strong> &mdash; Więcej ruchu powietrza pomaga odparowywać wilgoć z powierzchni liści.</li>
                </ul>

                <blockquote>
                    <strong>Wskazówka pro:</strong> Jeśli używasz GrowVPD Pro z inteligentną automatyzacją, możesz ustawić reguły takie jak "Jeśli VPD spadnie poniżej 0.7 kPa, włącz osuszacz" lub "Jeśli VPD przekroczy 1.4 kPa, aktywuj nawilżacz". Aplikacja obsługuje to automatycznie przez zakładkę Automatyzacja.
                </blockquote>

                <h2>Nocne vs. dzienne VPD</h2>
                <p>Kiedy lampy się wyłączają, temperatura spada, ale wilgotność często pozostaje taka sama lub rośnie (ponieważ rośliny przez chwilę nadal uwalniają wilgoć). Oznacza to, że VPD spada w nocy &mdash; czasem dramatycznie.</p>
                <p>VPD, które było idealne przy włączonych lampach, może stać się niebezpiecznie niskie przy wyłączonych, prowadząc do skraplania na liściach i zgnilizny pąków. Dlatego wielu doświadczonych growerów:</p>
                <ul>
                    <li>Intensywniej uruchamia osuszacz podczas ciemnych okresów</li>
                    <li>Utrzymuje niewielką różnicę temperatur między dniem a nocą (nie więcej niż 5&ndash;8&deg;C spadku)</li>
                    <li>Utrzymuje dobrą cyrkulację powietrza nawet gdy lampy są wyłączone</li>
                </ul>
                <p>W GrowVPD Pro możesz logować zarówno dzienną, jak i nocną temperaturę we wpisach dziennika, aby śledzić, jak twoje VPD zmienia się w pełnym 24-godzinnym cyklu.</p>

                <h2>Częste błędy VPD</h2>
                <ol>
                    <li><strong>Ignorowanie temperatury liścia.</strong> Używanie samej temperatury powietrza zawyża VPD. Uwzględnij offset 1&ndash;3&deg;C liścia.</li>
                    <li><strong>Niedostosowanie do fazy wzrostu.</strong> Sadzonki nie zniosą takiego samego VPD jak rośliny kwitnące. Zawsze dopasuj cel do aktualnej fazy.</li>
                    <li><strong>Pomiar w niewłaściwym miejscu.</strong> Czujnik na szczycie namiotu daje inne odczyty niż na poziomie korony. Umieść czujnik tam, gdzie są rośliny.</li>
                    <li><strong>Gonienie za jedną idealną liczbą.</strong> Konsekwencja ma większe znaczenie niż precyzja. Stabilne utrzymywanie się w zakresie 0.2 kPa jest lepsze niż jednorazowe trafienie 1.0 kPa i gwałtowne wahania.</li>
                    <li><strong>Zapominanie o nocy.</strong> Zarządzanie VPD nie kończy się, gdy lampy się wyłączają. Noc to czas, gdy atakuje pleśń.</li>
                </ol>

                <h2>Używanie VPD z inteligentną automatyzacją</h2>
                <p>Zakładka Automatyzacja w GrowVPD Pro pozwala tworzyć reguły oparte na VPD, które automatycznie sterują inteligentnymi urządzeniami. Na przykład:</p>
                <ul>
                    <li>Jeśli VPD przekroczy 1.3 kPa, włącz nawilżacz</li>
                    <li>Jeśli VPD spadnie poniżej 0.6 kPa, zwiększ prędkość wyciągu</li>
                    <li>Jeśli temperatura wzrośnie powyżej 30&deg;C, przyciemnij lampy do 80%</li>
                </ul>
                <p>Silnik automatyzacji zawiera histerezę (więc urządzenia nie przełączają się szybko), nadpisania czasowe i limity bezpieczeństwa. Sprawdź nasze przewodniki podłączania <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">Tuya</a> i <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">Mars Hydro</a>, aby skonfigurować swoje urządzenia.</p>
`
  },
  "connect-tuya": {
    title: "Jak podłączyć urządzenia Tuya / Smart Life do GrowVPD Pro",
    body: `
                <h2>Jakie urządzenia Tuya / Smart Life działają?</h2>
                <p>Tuya to platforma stojąca za setkami marek inteligentnego domu pod różnymi nazwami. Jeśli twoje urządzenie działa z aplikacją <strong>Tuya</strong> lub <strong>Smart Life</strong>, najprawdopodobniej będzie działać z GrowVPD Pro. Najczęściej używane urządzenia to:</p>
                <ul>
                    <li><strong>Czujniki temperatury/wilgotności</strong> &mdash; Czujniki WiFi raportujące temperaturę i RH do chmury. Zasilają wykres VPD danymi na żywo.</li>
                    <li><strong>Inteligentne gniazdka</strong> &mdash; Włączaj i wyłączaj nawilżacze, osuszacze, wentylatory lub grzejniki na podstawie reguł automatyzacji.</li>
                    <li><strong>Inteligentne kamery</strong> &mdash; Kamery kompatybilne z Tuya mogą automatycznie robić zdjęcia i zapisywać je w dzienniku uprawy.</li>
                    <li><strong>Inteligentne przełączniki i ściemniacze</strong> &mdash; Steruj lampami, pompami i innym sprzętem.</li>
                    <li><strong>Czujniki wilgotności gleby, monitory CO2</strong> &mdash; Każde urządzenie Tuya raportujące dane środowiskowe.</li>
                </ul>

                <h2>Wymagania wstępne</h2>
                <ul>
                    <li>GrowVPD Pro z aktywną <strong>subskrypcją Pro</strong> (inteligentna automatyzacja to funkcja Pro)</li>
                    <li>Urządzenia Tuya/Smart Life już skonfigurowane i działające w oficjalnej aplikacji Tuya lub Smart Life</li>
                    <li>Stabilne połączenie WiFi (urządzenia komunikują się przez Tuya Cloud API)</li>
                    <li>Konto developerskie Tuya IoT Platform (bezpłatne &mdash; instrukcje poniżej)</li>
                </ul>

                <h2>Kroki podłączenia</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Uzyskaj dane dostępowe Tuya Developer</h3>
                    <p>GrowVPD Pro łączy się z twoimi urządzeniami przez Tuya Cloud API. Do autoryzacji potrzebujesz <strong>Access ID</strong> i <strong>Access Secret</strong> z platformy Tuya IoT:</p>
                    <ol>
                        <li>Wejdź na <strong>iot.tuya.com</strong> i utwórz bezpłatne konto (lub zaloguj się, jeśli już masz).</li>
                        <li>W pasku bocznym przejdź do <strong>Cloud &gt; Development</strong> i utwórz nowy Cloud Project.</li>
                        <li>Wybierz <strong>Smart Home</strong> jako branżę i wybierz swój region centrum danych (Europa Zachodnia, Wschodnia Ameryka, Chiny lub Indie).</li>
                        <li>W zakładce <strong>API Products</strong> upewnij się, że <strong>IoT Core</strong> i <strong>Smart Home Device Management</strong> są subskrybowane (są bezpłatne).</li>
                        <li>Przejdź do zakładki <strong>Devices</strong> i połącz swoje konto aplikacji Tuya/Smart Life, aby projekt chmurowy miał dostęp do twoich urządzeń.</li>
                        <li>Na stronie <strong>Overview</strong> projektu skopiuj swoje <strong>Access ID/Client ID</strong> i <strong>Access Secret/Client Secret</strong>.</li>
                    </ol>
                </div>

                <blockquote>
                    <strong>Wskazówka:</strong> Region wybrany w Tuya IoT musi odpowiadać regionowi twojego konta w aplikacji Tuya/Smart Life. Jeśli twoja aplikacja jest ustawiona na Europę, wybierz centrum danych Europa Zachodnia. Niezgodne regiony to najczęstsza przyczyna błędów "Nie znaleziono urządzeń".
                </blockquote>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Połącz konto Tuya w GrowVPD Pro</h3>
                    <p>Otwórz GrowVPD Pro i przejdź do <strong>Ustawienia &gt; Połączone konta &gt; Tuya</strong>. Wprowadź Access ID i Access Secret, a następnie wybierz region (EU, US lub CN). Dotknij <strong>Połącz</strong>. Aplikacja zweryfikuje dane i nawiąże połączenie z Tuya Cloud.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Odkryj swoje urządzenia</h3>
                    <p>Przejdź do zakładki <strong>Automatyzacja</strong> i dotknij <strong>Dodaj urządzenia</strong>. Aplikacja skanuje twoje połączone konto Tuya i wyświetla listę wszystkich dostępnych urządzeń z ich nazwami, typami i statusem online. Dotknij dowolnego urządzenia, aby dodać je do GrowVPD Pro.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Przypisz urządzenia do pokoi i namiotów</h3>
                    <p>Zorganizuj urządzenia w pokoje i namioty dla przejrzystego zarządzania:</p>
                    <ol>
                        <li>Utwórz <strong>Pokój</strong> (np. "Garaż", "Piwnica", "Sypialnia").</li>
                        <li>Wewnątrz pokoju utwórz <strong>Namiot</strong> (np. "Namiot A 120x120", "Namiot Wegetacyjny").</li>
                        <li>Przypisz czujnik do namiotu, aby aplikacja wiedziała, które urządzenie dostarcza odczyty dla tego namiotu.</li>
                        <li>Przypisz urządzenia wykonawcze (inteligentne gniazdka, przełączniki) do tego samego namiotu, aby reguły automatyzacji mogły nimi sterować.</li>
                    </ol>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Zweryfikuj połączenie</h3>
                    <p>Po przypisaniu dane na żywo z czujnika powinny pojawić się w panelu namiotu w ciągu kilku sekund. Zweryfikuj sprawdzając:</p>
                    <ul>
                        <li>Namiot pokazuje aktualną temperaturę i wilgotność</li>
                        <li>Wartość VPD jest obliczona i wyświetlona</li>
                        <li>Dotknięcie inteligentnego gniazdka przełącza je włącz/wyłącz</li>
                    </ul>
                    <p>Jeśli dane na żywo się pojawiają i sterowanie urządzeniem działa, wszystko gotowe. Teraz możesz tworzyć reguły automatyzacji w zakładce Automatyzacja.</p>
                </div>

                <h2>Rozwiązywanie problemów</h2>

                <h3>"Nie znaleziono urządzeń" po podłączeniu</h3>
                <ul>
                    <li><strong>Sprawdź region.</strong> Region w GrowVPD Pro musi odpowiadać centrum danych wybranym w Tuya IoT Platform, który musi odpowiadać regionowi aplikacji Tuya/Smart Life.</li>
                    <li><strong>Zweryfikuj dane dostępowe.</strong> Upewnij się, że poprawnie skopiowałeś Access ID i Access Secret. Rozróżniają wielkość liter.</li>
                    <li><strong>Połącz konto aplikacji.</strong> W Tuya IoT Platform przejdź do Cloud Project &gt; Devices &gt; Link Tuya App Account. Zeskanuj kod QR aplikacją Tuya lub Smart Life, aby je połączyć.</li>
                    <li><strong>Sprawdź subskrypcje API.</strong> Upewnij się, że IoT Core i Smart Home Device Management są subskrybowane w zakładce API Products.</li>
                </ul>

                <h3>"Urządzenie offline"</h3>
                <ul>
                    <li>Sprawdź, czy urządzenie jest podłączone do WiFi i zasilane.</li>
                    <li>Otwórz aplikację Tuya/Smart Life i najpierw zweryfikuj, czy urządzenie pokazuje się jako online.</li>
                    <li>Zrestartuj urządzenie (odłącz, poczekaj 10 sekund, podłącz ponownie).</li>
                    <li>Jeśli urządzenie zostało niedawno przeniesione do nowej sieci WiFi, najpierw sparuj je ponownie przez aplikację Tuya/Smart Life.</li>
                </ul>

                <h3>"Błędne odczyty" lub czujnik wydaje się niedokładny</h3>
                <ul>
                    <li>W GrowVPD Pro przejdź do ustawień urządzenia i użyj <strong>offsetu kalibracji</strong>, aby skorygować znany błąd czujnika. Wiele tanich czujników Tuya odchyla się o 1&ndash;2&deg;C lub 3&ndash;5% RH.</li>
                    <li>Porównaj z dokładnym termometrem/higrometrem w tym samym miejscu przez kilka godzin.</li>
                    <li>Umieść czujnik na poziomie korony, z dala od bezpośredniego światła, dla najbardziej użytecznych odczytów.</li>
                </ul>

                <h2>Automatyczne zdjęcia z kamery Tuya</h2>
                <p>Jeśli masz kamerę kompatybilną z Tuya, GrowVPD Pro może automatycznie robić okresowe zdjęcia i zapisywać je w dzienniku uprawy. Świetne do tworzenia sekwencji poklatkowych bez żadnego ręcznego wysiłku.</p>
                <p>Aby to włączyć, przypisz kamerę do namiotu i skonfiguruj harmonogram kamery w ustawieniach namiotu. Możesz wybrać interwały od codziennego do co dwa tygodnie. Zdjęcia są robione automatycznie i dołączane do odpowiedniego wpisu w dzienniku uprawy.</p>

                <div class="warning-box">
                    <strong>Uwaga:</strong> Cała komunikacja urządzeń Tuya wymaga WiFi i dostępu do internetu. Urządzenia Tuya używają Tuya Cloud API &mdash; nie można ich sterować lokalnie bez internetu. Jeśli połączenie internetowe się zerwie, reguły automatyzacji zostaną wstrzymane do momentu przywrócenia połączenia.
                </div>
`
  },
  "connect-mars-hydro": {
  title: "Jak podłączyć urządzenia Mars Hydro do GrowVPD Pro",
  body: `
                <h2>Jakie urz\u0105dzenia Mars Hydro dzia\u0142aj\u0105?</h2>
                <p>GrowVPD Pro obs\u0142uguje lini\u0119 <strong>iConnect</strong> Mars Hydro: wentylatory kana\u0142owe (0&ndash;100%), lampy LED (\u015bciemnianie), czujniki \u015brodowiskowe i kontrolery.</p>

                <div class="important-box">
                    <strong>GrowVPD Pro dzia\u0142a jako aplikacja towarzysz\u0105ca obok MarsPro</strong> &mdash; Bluetooth (BLE) u\u017cywany jest jednorazowo podczas parowania, potem ca\u0142e sterowanie przechodzi przez WiFi/MQTT, ten sam protok\u00f3\u0142 chmurowy, z kt\u00f3rego korzysta MarsPro. Jeste\u015bmy wielkimi fanami Mars Hydro i ch\u0119tnie nawi\u0105\u017cemy bezpo\u015bredni\u0105 wsp\u00f3\u0142prac\u0119 z ich zespo\u0142em.
                </div>

                <h2>Wymagania</h2>
                <ul>
                    <li>GrowVPD Pro z aktywn\u0105 <strong>subskrypcj\u0105 Pro</strong></li>
                    <li>Urz\u0105dzenie(a) Mars Hydro iConnect</li>
                    <li>Stabilna sie\u0107 WiFi (2,4 GHz)</li>
                    <li>Konto Mars Hydro (utw\u00f3rz na <strong>marshydro.com</strong>, je\u015bli nie masz)</li>
                </ul>

                <h2>Jak dzia\u0142a po\u0142\u0105czenie</h2>
                <p>Mars Hydro u\u017cywa <strong>protoko\u0142u MQTT</strong> &mdash; szybkiego i niezawodnego dla IoT. Polecenia docieraj\u0105 do urz\u0105dzenia w ci\u0105gu sekund.</p>

                <h2>Kroki po\u0142\u0105czenia</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Po\u0142\u0105cz konto Mars Hydro w GrowVPD Pro</h3>
                    <p><strong>Ustawienia &gt; Po\u0142\u0105czone konta &gt; Mars Hydro</strong>. Wprowad\u017a email i has\u0142o konta Mars Hydro. Nie masz konta? Utw\u00f3rz na <strong>marshydro.com</strong>. Dotkni j <strong>Po\u0142\u0105cz</strong>.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Prze\u0142\u0105cz urz\u0105dzenie w tryb parowania</h3>
                    <p>Dla lamp z pokr\u0119t\u0142em \u015bciemniacza: obr\u00f3\u0107 z OFF na 75%+ i z powrotem na OFF, powt\u00f3rz 2&ndash;3 razy szybko, a\u017c \u015bwiat\u0142o zacznie miga\u0107 (intensywno\u015b\u0107 0%&ndash;100%). Dla innych urz\u0105dze\u0144 przytrzymaj przycisk zgodnie z instrukcj\u0105.</p>
                    <div class="warning-box">
                        <strong>Uwaga:</strong> Pozycja EXT jest tu\u017c obok OFF na pokr\u0119tle &mdash; upewnij si\u0119, \u017ce trafisz na OFF. Miganie = tryb parowania. <strong>5&ndash;10 sekund</strong> na rozpocz\u0119cie w GrowVPD Pro.
                    </div>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Odkryj i sparuj w GrowVPD Pro</h3>
                    <p>Zak\u0142adka <strong>Automatyzacja &gt; Dodaj urz\u0105dzenia &gt; Mars Hydro</strong>. Aplikacja uruchomi skan BLE i znajdzie urz\u0105dzenie. Wybierz je, a GrowVPD Pro automatycznie wy\u015ble dane WiFi.</p>
                </div>

                <blockquote>
                    <strong>Wskaz\u00f3wka:</strong> W\u0142\u0105cz Bluetooth i przyznaj GrowVPD Pro uprawnienia Bluetooth i lokalizacji. Skan BLE na Androidzie wymaga uprawnienia lokalizacji.
                </blockquote>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Przypisz do pokoi i namiot\u00f3w</h3>
                    <ul>
                        <li>Utw\u00f3rz lub wybierz <strong>Pok\u00f3j</strong></li>
                        <li>Utw\u00f3rz lub wybierz <strong>Namiot</strong></li>
                        <li>Przypisz czujniki i urz\u0105dzenia wykonawcze Mars Hydro</li>
                    </ul>
                    <p>Mo\u017cesz \u0142\u0105czy\u0107 urz\u0105dzenia r\u00f3\u017cnych marek w tym samym namiocie &mdash; lampa Mars Hydro na harmonogramie wsch\u00f3d/zach\u00f3d s\u0142o\u0144ca obok Controllera 69 AC Infinity, kt\u00f3ry pilnuje VPD na w\u0142asnym Cloudline.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Przetestuj sterowanie</h3>
                    <ul>
                        <li><strong>Wentylator</strong> &mdash; dostosuj pr\u0119dko\u015b\u0107, odpowied\u017a w 1&ndash;3 sekundy.</li>
                        <li><strong>Lampa LED</strong> &mdash; dostosuj \u015bciemnianie.</li>
                        <li><strong>Czujniki</strong> &mdash; sprawd\u017a aktualizacj\u0119 odczyt\u00f3w.</li>
                    </ul>
                </div>

                <h2>BLE vs. WiFi</h2>
                <ul>
                    <li><strong>BLE</strong> &mdash; <strong>tylko raz</strong> podczas parowania w GrowVPD Pro.</li>
                    <li><strong>WiFi + MQTT</strong> &mdash; ca\u0142e dalsze sterowanie i automatyzacja.</li>
                    <li>Po konfiguracji <strong>Bluetooth nie jest potrzebny</strong>.</li>
                </ul>

                <h2>Rozwi\u0105zywanie problem\u00f3w</h2>

                <h3>&quot;Nie znaleziono urz\u0105dzenia&quot; podczas skanu BLE</h3>
                <ul>
                    <li>Bluetooth w\u0142\u0105czony? Uprawnienia (Bluetooth + lokalizacja) przyznane?</li>
                    <li>Powt\u00f3rz sekwencj\u0119 \u015bciemniacza (OFF&rarr;75%&rarr;OFF). Okno: 5&ndash;10 sekund.</li>
                    <li>B\u0105d\u017a blisko urz\u0105dzenia (2&ndash;3 metry).</li>
                    <li>Zmieni\u0142e\u015b has\u0142o? Zaktualizuj w Ustawieniach.</li>
                </ul>

                <h3>&quot;Nie mo\u017cna sterowa\u0107 urz\u0105dzeniem&quot;</h3>
                <ul>
                    <li>Sprawd\u017a sygna\u0142 WiFi. W metalowych namiotach rozwa\u017c wzmacniacz WiFi.</li>
                    <li>Zrestartuj urz\u0105dzenie, poczekaj 30s na ponowne po\u0142\u0105czenie MQTT.</li>
                    <li>Upewnij si\u0119, \u017ce u\u017cywasz WiFi 2,4 GHz.</li>
                </ul>

                <h2>\u0141\u0105czenie z innymi platformami</h2>
                <p>Sensowne kombinacje: Controller 69/89 Pro AC Infinity steruje w\u0142asnym wentylatorem Cloudline przez VPD, podczas gdy lampy Mars Hydro, Spider Farmer lub Vivosun chodz\u0105 na zsynchronizowanym harmonogramie wsch\u00f3d/zach\u00f3d s\u0142o\u0144ca. Bluelab Pulse monitoruje pH korzeni przez chmur\u0119 Edenic, a inteligentne gniazdko Tuya s\u0142u\u017cy jako prosty wy\u0142\u0105cznik dla klasycznego grzejnika olejowego. Wszystko z tej samej zak\u0142adki Automatyzacja.</p>

                <div class="warning-box">
                    <strong>Pami\u0119taj:</strong> Urz\u0105dzenia Mars Hydro WiFi wymagaj\u0105 internetu. Bez internetu automatyzacja si\u0119 wstrzymuje (urz\u0105dzenia dzia\u0142aj\u0105 na ostatnich warto\u015bciach).
                </div>
`
},
  "automation-rules": {
    title: "Konfiguracja reguł inteligentnej automatyzacji w GrowVPD Pro",
    body: `
            <p>Jedną z najpotężniejszych funkcji GrowVPD Pro jest możliwość tworzenia reguł automatyzacji, które działają <strong>między różnymi markami</strong>. Każda marka najlepiej radzi sobie we własnym ekosystemie (AC Infinity Controller napędza swoje Cloudline, Mars Hydro iHub napędza swoje wentylatory), a GrowVPD Pro wiąże je razem: ten sam harmonogram świateł w wielu markach lamp, Bluelab Pulse wysyłający alerty pH przez Edenic i proste gniazdko Tuya przerzucające tani grzejnik lub nawilżacz z dowolnego odczytu czujnika. Żadna inna aplikacja do uprawy nie daje ci tego poziomu kontroli międzymarkowej.</p>

            <p>Ten przewodnik prowadzi cię przez wszystko, co musisz wiedzieć o konfigurowaniu reguł automatyzacji, od podstawowych konceptów po zaawansowane konfiguracje.</p>

            <h2>Czym są reguły automatyzacji?</h2>

            <p>Reguła automatyzacji to prosta instrukcja przyczyna-skutek: <strong>kiedy spełniony jest określony warunek, wykonaj akcję</strong>. GrowVPD Pro sprawdza twoje reguły co 15 minut w tle za pomocą WorkManagera Androida, więc automatyzacja działa nawet gdy aplikacja jest zamknięta.</p>

            <p>Każda reguła składa się z trzech części:</p>

            <ol>
                <li><strong>Wejście z czujnika</strong> &mdash; które urządzenie dostarcza dane (temperatura, wilgotność, VPD, CO2, PPFD, wilgotność gleby)</li>
                <li><strong>Warunek</strong> &mdash; jaki próg wyzwala regułę (np. VPD wzrośnie powyżej 1.5 kPa)</li>
                <li><strong>Akcja</strong> &mdash; co urządzenie powinno zrobić, gdy warunek jest wyzwolony i co powinno zrobić, gdy warunek wraca do normy</li>
            </ol>

            <blockquote>
                <strong>Kluczowa zaleta:</strong> Ponieważ GrowVPD Pro komunikuje się z API chmury każdej marki niezależnie, twoje reguły automatyzacji mogą łączyć urządzenia Tuya, AC Infinity, Mars Hydro, Spider Farmer i Vivosun w dowolnej kombinacji. Czujnik i urządzenie docelowe nie muszą być od tego samego producenta.
            </blockquote>

            <h2>Tworzenie pierwszej reguły automatyzacji</h2>

            <p>Otwórz zakładkę <strong>Automatyzacja</strong> w GrowVPD Pro. Jeśli jeszcze nie skonfigurowałeś pokoju i namiotu, zostaniesz poproszony o ich utworzenie. Gdy namiot jest skonfigurowany, dotknij przycisku <strong>+ Dodaj regułę</strong>.</p>

            <h3>Krok 1: Wybierz czujnik</h3>
            <p>Wybierz, które podłączone urządzenie dostarcza dane, które chcesz monitorować. Może to być samodzielny czujnik (jak czujnik WiFi Tuya) lub kontroler z wbudowanymi czujnikami (jak AC Infinity Controller 69 Pro). Aplikacja pokaże ci, jakie typy danych raportuje każde urządzenie.</p>

            <h3>Krok 2: Wybierz typ warunku</h3>
            <p>Wybierz, co chcesz monitorować. GrowVPD Pro obsługuje 12 typów warunków:</p>
            <ul>
                <li><strong>VPD</strong> &mdash; Deficyt Ciśnienia Pary (obliczany z temperatury + wilgotności)</li>
                <li><strong>Temperatura</strong> &mdash; temperatura powietrza (powyżej lub poniżej progu)</li>
                <li><strong>Wilgotność</strong> &mdash; procent wilgotności względnej</li>
                <li><strong>CO2</strong> &mdash; stężenie dwutlenku węgla w ppm</li>
                <li><strong>PPFD</strong> &mdash; intensywność światła w &mu;mol/m&sup2;/s</li>
                <li><strong>Wilgotność gleby</strong> &mdash; procent objętościowej zawartości wody</li>
                <li><strong>EC gleby</strong> &mdash; przewodność elektryczna podłoża</li>
                <li><strong>Temperatura gleby</strong> &mdash; temperatura strefy korzeniowej</li>
                <li><strong>Temperatura nocna</strong> &mdash; temperatura w okresie wyłączonych lamp</li>
                <li><strong>Różnica temperatur</strong> &mdash; różnica między temperaturą dzienną i nocną</li>
                <li><strong>Tempo zmian wilgotności</strong> &mdash; jak szybko wilgotność rośnie lub spada</li>
                <li><strong>Tempo zmian VPD</strong> &mdash; jak szybko VPD się zmienia</li>
            </ul>

            <h3>Krok 3: Ustaw wartość progową</h3>
            <p>Wprowadź wartość, która powinna wyzwolić regułę. Na przykład, jeśli chcesz aktywować wentylator, gdy VPD przekroczy 1.4 kPa, ustaw próg na <code>1.4</code> z warunkiem "większe niż".</p>
            <p>Niektóre warunki obsługują zakres (wartości min i max). Na przykład możesz chcieć utrzymać wilgotność między 55% a 65% podczas kwitnienia &mdash; ustaw dolny próg na 55 i górny na 65.</p>

            <h3>Krok 4: Ustaw histerezę</h3>
            <p>Histereza to strefa buforowa, która zapobiega szybkiemu cyklowaniu urządzeń on/off. Jeśli twój próg VPD to 1.4 kPa z histerezą 0.1, reguła wyzwala się przy 1.4, ale nie wraca do normy, dopóki VPD nie spadnie poniżej 1.3.</p>

            <blockquote>
                <strong>Wskazówka:</strong> Zawsze ustawiaj histerezę. Bez niej odczyt czujnika wahający się wokół progu (np. 1.39, 1.41, 1.39, 1.41) powodowałby przełączanie urządzenia co 15 minut. Histereza 0.1 kPa dla VPD lub 2&deg;C dla temperatury działa dobrze w większości konfiguracji.
            </blockquote>

            <h3>Krok 5: Wybierz urządzenie docelowe</h3>
            <p>Wybierz, które urządzenie powinno reagować na spełniony warunek. Może to być dowolne sterowane urządzenie: inteligentne gniazdko, wentylator wyciągowy, nawilżacz, grzejnik lub lampa. Urządzenie nie musi być od tego samego producenta co czujnik.</p>

            <h3>Krok 6: Zdefiniuj akcje</h3>
            <p>Ustaw dwie akcje:</p>
            <ul>
                <li><strong>Akcja wyzwalania</strong> &mdash; co się dzieje, gdy warunek jest spełniony (np. WŁĄCZ, ustaw wentylator na prędkość 5, ustaw ściemniacz na 80%)</li>
                <li><strong>Akcja przywrócenia</strong> &mdash; co się dzieje, gdy warunek wraca do normy (np. WYŁĄCZ, ustaw wentylator na prędkość 2, przywróć poprzedni stan)</li>
            </ul>

            <h3>Krok 7: Opcjonalne ustawienia zaawansowane</h3>
            <ul>
                <li><strong>Ograniczenia czasowe</strong> &mdash; uruchamiaj regułę tylko w określonych godzinach (przydatne, aby nie uruchamiać nawilżaczy przy wyłączonych lampach)</li>
                <li><strong>Filtr fazy wzrostu</strong> &mdash; stosuj tylko podczas określonych faz (np. tylko kwitnienie)</li>
                <li><strong>Maksymalny czas pracy</strong> &mdash; automatycznie zatrzymaj po określonym czasie (ważne dla generatorów CO2)</li>
                <li><strong>Minimalny czas wyłączenia</strong> &mdash; zapobiega zbyt szybkiemu ponownemu włączeniu (chroni kompresory)</li>
                <li><strong>Minimalny czas włączenia</strong> &mdash; zapewnia, że urządzenie działa co najmniej tyle po wyzwoleniu</li>
                <li><strong>Poziom priorytetu</strong> &mdash; gdy reguły kolidują, wyższy priorytet wygrywa</li>
            </ul>

            <h2>Przykładowe reguły automatyzacji</h2>

            <h3>Kontrola VPD z urządzeniami różnych marek</h3>
            <p>Utrzymuj VPD w optymalnym zakresie kwitnienia za pomocą reakcji wilgotnościowej:</p>
            <ul>
                <li><strong>Czujnik:</strong> Czujnik WiFi temperatury/wilgotności Tuya</li>
                <li><strong>Warunek:</strong> VPD &gt; 1.4 kPa</li>
                <li><strong>Histereza:</strong> 0.1 kPa</li>
                <li><strong>Cel:</strong> Nawilżacz Mars Hydro (przez inteligentne gniazdko)</li>
                <li><strong>Akcja wyzwalania:</strong> WŁĄCZ</li>
                <li><strong>Akcja przywrócenia:</strong> WYŁĄCZ (gdy VPD spadnie poniżej 1.3 kPa)</li>
            </ul>

            <h3>Ochrona temperatury nocnej</h3>
            <p>Zapobiegaj stresowi chłodowemu podczas ciemnego okresu:</p>
            <ul>
                <li><strong>Czujnik:</strong> Dowolny podłączony czujnik temperatury</li>
                <li><strong>Warunek:</strong> Temperatura &lt; 18&deg;C</li>
                <li><strong>Histereza:</strong> 2&deg;C</li>
                <li><strong>Cel:</strong> Inteligentne gniazdko Tuya (sterujące grzejnikiem)</li>
                <li><strong>Akcja wyzwalania:</strong> WŁĄCZ</li>
                <li><strong>Akcja przywrócenia:</strong> WYŁĄCZ (gdy temperatura osiągnie 20&deg;C)</li>
                <li><strong>Ograniczenie czasowe:</strong> Tylko godziny z wyłączonymi lampami</li>
            </ul>

            <h3>Wzbogacanie CO2 z limitem bezpieczeństwa</h3>
            <p>Wzmocnij CO2 przy włączonych lampach, zapobiegając niebezpiecznym stężeniom:</p>
            <ul>
                <li><strong>Czujnik:</strong> Czujnik CO2</li>
                <li><strong>Warunek:</strong> CO2 &lt; 800 ppm</li>
                <li><strong>Histereza:</strong> 100 ppm</li>
                <li><strong>Cel:</strong> Inteligentne gniazdko sterujące generatorem CO2</li>
                <li><strong>Akcja wyzwalania:</strong> WŁĄCZ</li>
                <li><strong>Akcja przywrócenia:</strong> WYŁĄCZ (gdy CO2 osiągnie 900 ppm)</li>
                <li><strong>Maks. czas pracy:</strong> 30 minut</li>
                <li><strong>Min. czas wyłączenia:</strong> 15 minut</li>
                <li><strong>Ograniczenie czasowe:</strong> Tylko godziny z włączonymi lampami</li>
            </ul>

            <h2>Funkcje bezpieczeństwa</h2>
            <p>GrowVPD Pro zawiera kilka mechanizmów bezpieczeństwa chroniących twoją uprawę i sprzęt:</p>
            <ul>
                <li><strong>Histereza na każdej regule</strong> zapobiega szybkiemu cyklowaniu on/off, które zużywa przekaźniki i stresuje rośliny</li>
                <li><strong>Minimalny czas wyłączenia</strong> chroni urządzenia takie jak kompresory AC, które potrzebują czasu na schłodzenie</li>
                <li><strong>Maksymalny czas pracy</strong> zapobiega, aby zacięty czujnik nie pozostawił grzejnika włączonego na czas nieokreślony</li>
                <li><strong>Poziomy priorytetu</strong> rozwiązują konflikty, gdy dwie reguły próbują sterować tym samym urządzeniem (reguły bezpieczeństwa powinny mieć zawsze najwyższy priorytet)</li>
                <li><strong>Wykrywanie anty-konfliktów</strong> ostrzega cię, jeśli dwie reguły mogą się zwalczać (np. jedna włącza urządzenie, gdy inna próbuje je wyłączyć)</li>
            </ul>

            <blockquote>
                <strong>Ważne:</strong> Reguły automatyzacji komunikują się przez API chmurowe, co oznacza, że urządzenia potrzebują aktywnego połączenia WiFi. Jeśli internet padnie, reguły zostaną wstrzymane i wznowione automatycznie po przywróceniu łączności. Dla krytycznego bezpieczeństwa (jak maksymalne odcięcie temperatury) rozważ użycie wbudowanych funkcji bezpieczeństwa urządzenia jako zabezpieczenia.
            </blockquote>

            <h2>Organizacja pokoi i namiotów</h2>
            <p>GrowVPD Pro organizuje twoją przestrzeń w hierarchii:</p>
            <ol>
                <li><strong>Pokój</strong> &mdash; twoja fizyczna przestrzeń uprawowa (np. "Garaż", "Zapasowa sypialnia")</li>
                <li><strong>Namiot</strong> &mdash; poszczególne namioty w pokoju (np. "Namiot Wege", "Namiot Kwitnący")</li>
                <li><strong>Urządzenia</strong> &mdash; przypisane do konkretnych namiotów</li>
                <li><strong>Reguły</strong> &mdash; ograniczone do namiotu, używające czujników i urządzeń tego namiotu</li>
            </ol>
            <p>Ta struktura pozwala uruchamiać różne profile automatyzacji dla każdego namiotu. Twój namiot wegetacyjny może celować w VPD 0.8&ndash;1.0 kPa, a namiot kwitnący w 1.0&ndash;1.4 kPa, każdy ze swoim zestawem reguł i urządzeń.</p>
            <p>Namioty utworzone w zakładce Automatyzacja są automatycznie udostępniane Dziennikowi uprawy przez system Profili sprzętu. Gdy tworzysz nową uprawę w dzienniku i przypisujesz ją do namiotu, reguły automatyzacji dla tego namiotu aktywują się automatycznie.</p>

            <h2>Monitorowanie i śledzenie energii</h2>
            <p>Po uruchomieniu reguł możesz monitorować ich wydajność na kilka sposobów:</p>
            <ul>
                <li><strong>Log automatyzacji</strong> &mdash; zobacz każde wyzwolenie i przywrócenie z znacznikami czasu i powodami</li>
                <li><strong>Śledzenie energii</strong> &mdash; monitoruj szacowane zużycie energii na urządzenie i na namiot</li>
                <li><strong>Skuteczność reguł</strong> &mdash; aplikacja śledzi, jak często każda reguła się wyzwala i jak stabilne pozostają warunki</li>
                <li><strong>Inteligentna analityka</strong> &mdash; przeglądaj wyniki stabilności, koszty energii i predykcyjne alerty w czasie</li>
            </ul>
            <p>Jeśli reguła wyzwala się zbyt często, to zwykle oznacza, że histereza jest zbyt mała lub sprzęt jest niewystarczający dla danej przestrzeni. Log automatyzacji pomoże ci zdiagnozować i udoskonalić konfigurację.</p>
`
  },
  "grow-diary-guide": {
    title: "Dziennik uprawy: Od nasiona do zbioru — kompletny przewodnik",
    body: `
            <p>Dziennik uprawy to najcenniejsze narzędzie do poprawy wyników w czasie. Każdy zbiór czegoś cię uczy &mdash; ale tylko jeśli zanotowałeś, co się działo po drodze. Dziennik GrowVPD Pro śledzi klimat, nawozy, zdjęcia i dane zbiorów przez cały cykl uprawy, a następnie pozwala porównywać uprawy obok siebie, aby zobaczyć, co naprawdę zrobiło różnicę.</p>

            <h2>Dlaczego śledzić uprawę?</h2>
            <p>Jeśli kiedykolwiek zastanawiałeś się, dlaczego jedna uprawa wyszła lepiej niż inna, odpowiedź zwykle kryje się w codziennych szczegółach. Growerzy prowadzący dzienniki konsekwentnie raportują lepsze plony, ponieważ mogą:</p>
            <ul>
                <li><strong>Identyfikować, co działa</strong> &mdash; korelować konkretne harmonogramy nawożenia, zakresy VPD lub techniki treningowe z lepszymi wynikami</li>
                <li><strong>Wcześnie wykrywać problemy</strong> &mdash; nagły spadek pH lub tydzień wysokiego VPD wyraźnie widać w historii danych</li>
                <li><strong>Przewidywać czas zbiorów</strong> &mdash; porównując bieżącą uprawę z przeszłymi tej samej odmiany, możesz oszacować ile tygodni pozostało</li>
                <li><strong>Dzielić się znaczącymi wynikami</strong> &mdash; zamiast zgadywać, możesz pokazać dokładne warunki, które doprowadziły do konkretnego plonu</li>
                <li><strong>Budować osobistą bazę danych</strong> &mdash; po kilku uprawach rozwijasz wiedzę specyficzną dla odmiany, której żaden ogólny przewodnik nie zapewni</li>
            </ul>

            <h2>Tworzenie nowej uprawy</h2>
            <p>Otwórz zakładkę <strong>Dziennik</strong> i dotknij <strong>+ Nowa uprawa</strong>. Wprowadzisz podstawowe informacje o roślinie:</p>
            <ul>
                <li><strong>Nazwa</strong> &mdash; nadaj uprawie opisową nazwę (np. "Northern Lights #3 - Lato 2026")</li>
                <li><strong>Odmiana</strong> &mdash; konkretny kultywar, który uprawiasz</li>
                <li><strong>Typ</strong> &mdash; fotoperiodyczna lub autoflowering (wpływa na sugestie faz i rekomendacje harmonogramu oświetlenia)</li>
                <li><strong>Podłoże</strong> &mdash; ziemia, kokos, DWC, NFT, wełna mineralna, perlit lub własny substrat</li>
                <li><strong>Rozmiar doniczki</strong> &mdash; w litrach lub galonach</li>
                <li><strong>Liczba roślin</strong> &mdash; ile roślin w tej uprawie</li>
                <li><strong>Typ wody</strong> &mdash; kranowa, RO, deszczowa lub mieszana</li>
            </ul>

            <h2>Dodawanie codziennych wpisów</h2>
            <p>Sercem dziennika jest codzienny wpis. Nie musisz wypełniać każdego pola za każdym razem &mdash; zapisuj, co jest dla ciebie ważne i na co masz czas. Z czasem nawet częściowe wpisy budują wartościową historię.</p>

            <h3>Dane klimatyczne</h3>
            <ul>
                <li><strong>Temperatura</strong> &mdash; aktualna temperatura powietrza (&deg;C lub &deg;F)</li>
                <li><strong>Temperatura nocna</strong> &mdash; temperatura przy wyłączonych lampach (ważna dla różnicy dzień/noc)</li>
                <li><strong>Wilgotność</strong> &mdash; procent wilgotności względnej</li>
                <li><strong>VPD</strong> &mdash; automatycznie obliczane z temperatury i wilgotności; nie musisz tego wprowadzać ręcznie</li>
            </ul>

            <blockquote>
                <strong>Wskazówka:</strong> Jeśli masz podłączone inteligentne czujniki (Tuya, AC Infinity itp.), aplikacja może automatycznie wypełnić dane klimatyczne z ostatniego odczytu czujnika. Oszczędza to czas i zapewnia dokładność &mdash; koniec z mrużeniem oczu na higrometr po drugiej stronie namiotu.
            </blockquote>

            <h3>Dane oświetlenia</h3>
            <ul>
                <li><strong>PPFD</strong> &mdash; intensywność światła na poziomie korony w &mu;mol/m&sup2;/s</li>
                <li><strong>Godziny oświetlenia</strong> &mdash; fotoperiod (np. 18/6, 20/4 lub 12/12)</li>
                <li><strong>Odległość lampy</strong> &mdash; odległość od lampy do korony w cm lub calach</li>
                <li><strong>Moc lampy</strong> &mdash; procent ściemniacza, jeśli dotyczy</li>
            </ul>

            <h3>Woda i nawozy</h3>
            <ul>
                <li><strong>Ilość wody</strong> &mdash; łączna objętość ml lub litrów</li>
                <li><strong>Temperatura wody</strong> &mdash; ważna dla konfiguracji hydro (idealna: 18&ndash;22&deg;C)</li>
                <li><strong>pH</strong> &mdash; pH wejściowe wody do nawożenia</li>
                <li><strong>EC / PPM</strong> &mdash; stężenie nawozów (aplikacja konwertuje między EC i PPM w skali 500/700)</li>
                <li><strong>Nawozy</strong> &mdash; wybierz spośród 69+ nawozów 7 marek (BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi, Atami). Wbudowany kalkulator oblicza dokładne dawki ml na podstawie objętości wody i zalecanych proporcji producenta.</li>
            </ul>

            <h3>Dane roślin</h3>
            <ul>
                <li><strong>Wysokość</strong> &mdash; wysokość rośliny w cm (śledzenie stretchu podczas kwitnienia jest szczególnie przydatne)</li>
                <li><strong>Technika</strong> &mdash; zapisz zastosowane metody treningowe: topping, FIMming, LST, supercropping, defoliacja, lollipopping, mainlining, ScrOG</li>
            </ul>

            <h3>Zdjęcia i filmy</h3>
            <p>Dodawaj zdjęcia bezpośrednio z aparatu lub galerii. Dziennik buduje wizualną oś czasu twojej uprawy, co jest bezcenne do śledzenia zdrowia i rozwoju roślin. Możesz też dodawać krótkie klipy wideo. Wszystkie media są przechowywane lokalnie na twoim urządzeniu &mdash; nic nie jest przesyłane na żaden serwer.</p>

            <h2>Fazy wzrostu</h2>
            <p>Każdy wpis jest oznaczony fazą wzrostu. GrowVPD Pro używa sześciu faz:</p>
            <ol>
                <li><strong>Sadzonka</strong> &mdash; od kiełkowania do rozwoju pierwszych prawdziwych liści (zwykle 1&ndash;2 tygodnie)</li>
                <li><strong>Wegetacja</strong> &mdash; aktywny wzrost liści pod długim oświetleniem (18/6 lub 20/4)</li>
                <li><strong>Przejście</strong> &mdash; pierwsze 1&ndash;2 tygodnie po przełączeniu na 12/12 (okres "stretchu")</li>
                <li><strong>Kwitnienie</strong> &mdash; rozwój i dojrzewanie pąków</li>
                <li><strong>Późne kwitnienie</strong> &mdash; ostatnie tygodnie, w tym płukanie i dojrzewanie</li>
                <li><strong>Zbiór</strong> &mdash; dzień cięcia i okres suszenia/fermentacji</li>
            </ol>

            <h2>Śledzenie zbiorów</h2>
            <p>Gdy dojdziesz do zbiorów, GrowVPD Pro oferuje dedykowany wpis zbiorowy z polami na:</p>
            <ul>
                <li><strong>Waga mokra</strong> &mdash; łączna waga bezpośrednio po cięciu</li>
                <li><strong>Waga sucha</strong> &mdash; waga po wysuszeniu (liczba, która się liczy)</li>
                <li><strong>Wydajność gramów na wat</strong> &mdash; automatycznie obliczana</li>
                <li><strong>Proporcja suszenia</strong> &mdash; stosunek mokra-do-suchej (zwykle 3:1 do 5:1)</li>
            </ul>

            <h2>Porównywanie upraw</h2>
            <p>Gdy ukończysz dwie lub więcej upraw, funkcja <strong>Porównaj</strong> pozwala przeglądać je obok siebie. Wybierz dowolne dwie uprawy i zobacz ich dane nałożone tydzień po tygodniu: temperatura, wilgotność, VPD, nawozy, wysokość i plon.</p>

            <h2>Eksportowanie dziennika</h2>
            <p>GrowVPD Pro oferuje dwa formaty eksportu (funkcja Pro):</p>
            <ul>
                <li><strong>Raport PDF</strong> &mdash; sformatowany dokument ze wszystkimi wpisami, zdjęciami, wykresami i podsumowaniem zbiorów.</li>
                <li><strong>Eksport danych JSON</strong> &mdash; surowe dane w formacie JSON dla growerów, którzy chcą analizować dane w arkuszach kalkulacyjnych lub własnych narzędziach.</li>
            </ul>

            <blockquote>
                <strong>Wskazówka:</strong> Eksportuj PDF po każdej ukończonej uprawie i zapisz go w chmurze. Nawet jeśli zmienisz telefon, zawsze będziesz mieć zapis historii upraw.
            </blockquote>
`
  },
  "ppfd-dli-guide": {
    title: "Przewodnik PPFD i DLI dla upraw indoorowych",
    body: `
            <p>Światło jest silnikiem fotosyntezy, a właściwe jego dobranie to jeden z największych czynników wpływających na końcowy plon i jakość. Ale mówienie o świetle w kategoriach watów jest mylące &mdash; to, co naprawdę się liczy, to ile użytecznego światła dociera do twoich roślin. Tu wchodzą PPFD i DLI.</p>

            <h2>Czym jest PPFD?</h2>
            <p><strong>PPFD</strong> to skrót od <strong>Photosynthetic Photon Flux Density</strong> (Gęstość Fotosyntetycznego Strumienia Fotonów). Mierzy liczbę fotonów w zakresie długości fali 400&ndash;700nm (światło, które rośliny faktycznie wykorzystują do fotosyntezy) trafiających na metr kwadratowy powierzchni co sekundę. Jednostka to <strong>&mu;mol/m&sup2;/s</strong>.</p>
            <p>Pomyśl o PPFD jak o "prędkości" dostarczania światła. PPFD 600 oznacza, że 600 mikromoli fotonów fotosyntetycznie aktywnych trafia na każdy metr kwadratowy korony co sekundę.</p>

            <blockquote>
                <strong>Dlaczego PPFD ma większe znaczenie niż waty:</strong> Waty mówią ci, ile prądu zużywa lampa, nie ile użytecznego światła produkuje. Dobrze zaprojektowana lampa LED 300W może dostarczyć więcej PPFD na koronę niż źle zaprojektowana lampa 600W. Zawsze porównuj lampy po ich PPFD na danej wysokości, nie po mocy w watach.
            </blockquote>

            <h2>Czym jest DLI?</h2>
            <p><strong>DLI</strong> to skrót od <strong>Daily Light Integral</strong> (Dzienna Integralna Światła). Podczas gdy PPFD mierzy intensywność w jednym momencie, DLI mierzy <strong>całkowitą ilość światła dostarczonego w ciągu całego dnia</strong>. Jednostka to <strong>mol/m&sup2;/dzień</strong>.</p>
            <p>DLI jest ważne, ponieważ rośliny reagują na skumulowane światło, nie tylko na szczytową intensywność.</p>

            <h3>Formuła obliczania DLI</h3>
            <p><code>DLI = PPFD &times; godziny &times; 0.0036</code></p>
            <p>Na przykład 500 &mu;mol/m&sup2;/s przez 18 godzin: <code>500 &times; 18 &times; 0.0036 = 32.4 mol/m&sup2;/dzień</code></p>

            <h2>Optymalne PPFD według fazy wzrostu</h2>
            <table>
                <thead>
                    <tr>
                        <th>Faza wzrostu</th>
                        <th>Zakres PPFD</th>
                        <th>Typowy harmonogram</th>
                        <th>Docelowe DLI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sadzonki / Klony</td>
                        <td>100&ndash;300 &mu;mol/m&sup2;/s</td>
                        <td>18/6</td>
                        <td>12&ndash;18 mol/m&sup2;/dzień</td>
                    </tr>
                    <tr>
                        <td>Wczesna wegetacja</td>
                        <td>300&ndash;400 &mu;mol/m&sup2;/s</td>
                        <td>18/6</td>
                        <td>18&ndash;25 mol/m&sup2;/dzień</td>
                    </tr>
                    <tr>
                        <td>Późna wegetacja</td>
                        <td>400&ndash;600 &mu;mol/m&sup2;/s</td>
                        <td>18/6 lub 20/4</td>
                        <td>25&ndash;35 mol/m&sup2;/dzień</td>
                    </tr>
                    <tr>
                        <td>Kwitnienie</td>
                        <td>600&ndash;900 &mu;mol/m&sup2;/s</td>
                        <td>12/12</td>
                        <td>30&ndash;40 mol/m&sup2;/dzień</td>
                    </tr>
                    <tr>
                        <td>Kwitnienie + CO2</td>
                        <td>900&ndash;1500 &mu;mol/m&sup2;/s</td>
                        <td>12/12</td>
                        <td>40&ndash;65 mol/m&sup2;/dzień</td>
                    </tr>
                </tbody>
            </table>

            <h2>Odległość lampy i prawo odwrotnych kwadratów</h2>
            <p>PPFD dramatycznie spada wraz ze zwiększaniem odległości między lampą a koroną. Podwojenie odległości zmniejsza intensywność światła do około jednej czwartej.</p>

            <h2>Jak GrowVPD Pro pomaga z oświetleniem</h2>
            <h3>Zakładka przewodnika PPFD/DLI</h3>
            <p>Połączony przewodnik PPFD/DLI w GrowVPD Pro wykonuje obliczenia za ciebie. Wybierz harmonogram oświetlenia, a aplikacja pokaże PPFD potrzebne do osiągnięcia każdego celu DLI.</p>

            <h3>Baza sprzętu</h3>
            <p>Wbudowana baza zawiera szczegółowe specyfikacje ponad 200 lamp od takich marek jak Mars Hydro, Spider Farmer, AC Infinity, Lumatek, Gavita, SANlight i więcej.</p>

            <h3>Inteligentny czujnik PPFD</h3>
            <p>Jeśli masz podłączony czujnik Mars Hydro lub Spider Farmer, GrowVPD Pro może wyświetlać <strong>odczyty PPFD na żywo</strong> z czujnika zamontowanego na poziomie korony.</p>

            <h2>Częste błędy oświetleniowe</h2>
            <h3>Za dużo światła dla sadzonek</h3>
            <p>Błąd numer jeden nowych growerów z LED. Nowoczesna lampa LED fullspectrum na 100% mocy i 30 cm może łatwo dostarczyć 1000+ PPFD &mdash; trzy do czterech razy więcej niż sadzonka może znieść.</p>

            <h3>Za mało światła podczas kwitnienia</h3>
            <p>Jeśli używałeś tego samego PPFD podczas kwitnienia co w wegetacji bez uwzględnienia krótszego fotoperiodu, twoje DLI spada o jedną trzecią.</p>

            <h3>Nierównomierna dystrybucja światła</h3>
            <p>Większość lamp ma hot spot na środku i słabsze krawędzie. Rośliny w rogach namiotu mogą otrzymywać połowę PPFD roślin bezpośrednio pod lampą.</p>
`
  },
  "equipment-setup": {
    title: "Baza sprzętu i kreator konfiguracji",
    body: `
            <p>Wybór odpowiedniego sprzętu to jedna z najważniejszych decyzji, jakie podejmiesz jako grower indoorowy. GrowVPD Pro zawiera bazę produktów, kalkulatory i kreator konfiguracji, aby pomóc ci zaplanować i zoptymalizować przestrzeń uprawową.</p>

            <h2>Baza sprzętu</h2>
            <p>GrowVPD Pro zawiera kuratorską bazę <strong>200+ produktów od 47 marek</strong>, obejmującą wszystko od lamp LED po kompletne zestawy wentylacyjne.</p>
            <ul>
                <li><strong>Lampy LED</strong> &mdash; moc, PPE, PPFD na różnych wysokościach, pokrycie, typ spektrum, zakres ściemniania</li>
                <li><strong>Namioty uprawowe</strong> &mdash; wymiary, grubość materiału, liczba portów</li>
                <li><strong>Wentylacja</strong> &mdash; wentylatory kanałowe (CFM, hałas w dB), filtry węglowe, kanały</li>
                <li><strong>Czujniki środowiskowe</strong> &mdash; mierzone parametry, łączność (WiFi, BLE), specyfikacje dokładności</li>
                <li><strong>Kontrolery</strong> &mdash; kontrolery AC Infinity, inteligentne gniazdka Tuya, urządzenia Mars Hydro iConnect</li>
            </ul>

            <h2>Kalkulator nawozów</h2>
            <p>Wbudowany kalkulator obsługuje <strong>69+ nawozów od 7 głównych marek</strong>: BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi, Atami.</p>
            <ol>
                <li>Wybierz nawozy, których używasz z bazy danych</li>
                <li>Wpisz objętość wody</li>
                <li>Wybierz aktualną fazę wzrostu</li>
                <li>Aplikacja obliczy <strong>dokładne ml każdego nawozu</strong></li>
            </ol>

            <h2>Mikser substratów</h2>
            <p>Jeśli mieszasz własne podłoże, mikser substratów pomaga tworzyć i zapisywać niestandardowe receptury. Zdefiniuj składniki (torf, perlit, wermikulit, kokos, odlewy dżdżownic itp.), ustaw proporcje i zapisz recepturę.</p>

            <h2>Kalkulator wentylacji</h2>
            <p>Odpowiednia wymiana powietrza jest kluczowa dla kontroli temperatury, zarządzania wilgotnością i uzupełniania CO2. Kalkulator pomaga dobrać odpowiedni system wyciągowy.</p>

            <h2>Kreator konfiguracji</h2>
            <p>Kreator prowadzi cię przez projektowanie kompletnej przestrzeni uprawowej od zera:</p>
            <ol>
                <li><strong>Wybierz rozmiar namiotu</strong></li>
                <li><strong>Rekomendacja lampy</strong> &mdash; aplikacja sugeruje lampy LED z odpowiednim PPFD</li>
                <li><strong>Dobór wentylacji</strong> &mdash; na podstawie objętości i ciepła lampy</li>
                <li><strong>Obliczenie mocy</strong> &mdash; łączna moc i szacunkowy miesięczny koszt prądu</li>
                <li><strong>Lista sprzętu</strong> &mdash; przejrzyj kompletną konfigurację i opcjonalnie zapisz jako profil</li>
            </ol>

            <h2>Profile sprzętu</h2>
            <p>Profile sprzętu (funkcja Pro) pozwalają zapisać całą konfigurację namiotu jako wielokrotnie używaną konfigurację. Profile są współdzielone między zakładką Sprzęt i zakładką Automatyzacja.</p>

            <h2>Estymator plonów</h2>
            <p>Estymator plonów dostarcza przybliżoną prognozę na podstawie mocy lampy, rozmiaru namiotu, metody uprawy i poziomu doświadczenia. Dla typowej nowoczesnej konfiguracji LED oczekuj 0.5&ndash;1.0 g/W jako początkujący i 1.0&ndash;1.5+ g/W jako doświadczony grower.</p>
`
  },
  "vpd-seedling-clone": {
    title: "VPD dla sadzonek i klonów: Jak zrobić to dobrze",
    body: `
                <h2>Dlaczego sadzonki i klony wymagają specjalnej uwagi</h2>
                <p>Sadzonki i świeżo ścięte klony to najbardziej wrażliwa faza każdej uprawy. Ich systemy korzeniowe są albo niedorozwinięte (sadzonki), albo nieistniejące (klony), co oznacza, że polegają prawie wyłącznie na liściach do wchłaniania wilgoci z otaczającego powietrza.</p>

                <h2>Idealny zakres VPD: 0.4&ndash;0.8 kPa</h2>
                <p>Dla sadzonek i niezakorzenionych klonów chcesz VPD między <strong>0.4 a 0.8 kPa</strong>. To znacznie niżej niż zakres 0.8&ndash;1.2 używany w wegetacji.</p>
                <ul>
                    <li><strong>24&deg;C przy 80% RH</strong> &rarr; VPD ~0.60 kPa (idealny punkt)</li>
                    <li><strong>25&deg;C przy 85% RH</strong> &rarr; VPD ~0.48 kPa (dobre dla świeżych klonów)</li>
                    <li><strong>23&deg;C przy 75% RH</strong> &rarr; VPD ~0.70 kPa (górny koniec)</li>
                </ul>

                <h2>Kopułki wilgotnościowe: Twój najlepszy przyjaciel</h2>
                <p>Kopułka wilgotnościowa to najprostsze i najskuteczniejsze narzędzie do utrzymywania wysokiej wilgotności wokół sadzonek i klonów.</p>
                <h3>Najlepsze praktyki</h3>
                <ul>
                    <li><strong>Zacznij całkowicie zamknięty.</strong> Przez pierwsze 2&ndash;3 dni trzymaj kopułkę zamkniętą.</li>
                    <li><strong>Otwieraj wentyle stopniowo.</strong> Po dniu 3 uchyl je lekko. Do dnia 5&ndash;7 otwórz w połowie.</li>
                    <li><strong>Usuwaj kopułkę etapami.</strong> Około dnia 7&ndash;10 usuwaj kopułkę na kilka godzin dziennie.</li>
                    <li><strong>Wycieraj kondensację codziennie.</strong></li>
                </ul>

                <h2>Klony vs. sadzonki: Kluczowe różnice</h2>
                <h3>Klony</h3>
                <ul>
                    <li>Docelowe VPD: <strong>0.4&ndash;0.6 kPa</strong></li>
                    <li>RH: <strong>80&ndash;90%</strong> pod kopułką</li>
                    <li>Temperatura: <strong>24&ndash;26&deg;C</strong></li>
                </ul>
                <h3>Sadzonki</h3>
                <ul>
                    <li>Docelowe VPD: <strong>0.5&ndash;0.8 kPa</strong></li>
                    <li>RH: <strong>70&ndash;80%</strong></li>
                    <li>Temperatura: <strong>23&ndash;26&deg;C</strong></li>
                </ul>

                <h2>Częste błędy</h2>
                <h3>1. Za suche pomieszczenie bez kopułki</h3>
                <p>Wielu początkujących pomija kopułkę i zastanawia się, dlaczego ich klony więdną i giną w ciągu 48 godzin.</p>
                <h3>2. Za wysoka temperatura pod kopułką</h3>
                <p>Zamknięta kopułka pod silną lampą może osiągnąć 35&deg;C+.</p>
                <h3>3. Zbyt szybkie usunięcie kopułki</h3>
                <p>Przejście z 85% RH do 55% RH to szok. VPD skacze z ~0.5 do ~1.4 kPa natychmiastowo.</p>

                <h2>Przejście do wzrostu wegetacyjnego</h2>
                <p>Gdy sadzonki mają 3&ndash;4 zestawy prawdziwych liści lub klony pokazują widoczny wzrost korzeni, czas przejść do docelowych wartości VPD wegetacyjnych <strong>0.8&ndash;1.2 kPa</strong>.</p>

                <h2>Monitorowanie z GrowVPD Pro</h2>
                <p>Wykres VPD oblicza VPD w czasie rzeczywistym z danych czujnika. Ustaw fazę wzrostu na "Sadzonka" lub "Klon", aby wykres podświetlił właściwą strefę docelową.</p>
`
  },
  "vpd-flowering": {
    title: "VPD podczas kwitnienia: Zapobiegaj pleśni pąków i maksymalizuj plony",
    body: `
                <h2>Dlaczego kwitnienie wymaga wyższego VPD</h2>
                <p>Podczas kwitnienia gęste pąki tworzą kieszenie uwięzionej wilgoci między kielichami a liśćmi cukrowymi. Jeśli wilgotność pozostaje zbyt wysoka, woda skrapla się wewnątrz tych pąków. Rezultatem jest <strong>botrytis</strong> (zgnilizna pąków).</p>

                <h2>Idealne VPD według tygodnia kwitnienia</h2>
                <h3>Wczesne kwitnienie (Tygodnie 1&ndash;3): Faza stretchu</h3>
                <ul>
                    <li><strong>Docelowe VPD:</strong> 1.0&ndash;1.3 kPa</li>
                    <li><strong>Temperatura:</strong> 24&ndash;27&deg;C</li>
                    <li><strong>Wilgotność:</strong> 55&ndash;65% RH</li>
                </ul>
                <h3>Środkowe kwitnienie (Tygodnie 3&ndash;6): Rozwój pąków</h3>
                <ul>
                    <li><strong>Docelowe VPD:</strong> 1.2&ndash;1.5 kPa</li>
                    <li><strong>Temperatura:</strong> 23&ndash;26&deg;C</li>
                    <li><strong>Wilgotność:</strong> 45&ndash;55% RH</li>
                </ul>
                <h3>Późne kwitnienie (Tygodnie 6&ndash;9+): Dojrzewanie</h3>
                <ul>
                    <li><strong>Docelowe VPD:</strong> 1.3&ndash;1.6 kPa</li>
                    <li><strong>Temperatura:</strong> 21&ndash;24&deg;C</li>
                    <li><strong>Wilgotność:</strong> 40&ndash;50% RH</li>
                </ul>

                <h2>Problem zgnilizny pąków</h2>
                <p>Botrytis cinerea to największe zagrożenie środowiskowe podczas kwitnienia.</p>
                <h3>Warunki sprzyjające zgniliźnie</h3>
                <ul>
                    <li>Wilgotność powyżej 60% podczas środkowego-późnego kwitnienia</li>
                    <li>Słaba cyrkulacja powietrza</li>
                    <li>Duże wahania temperatury między dniem a nocą</li>
                    <li>Gęste topki z martwymi liśćmi w środku</li>
                </ul>

                <h2>Zarządzanie VPD bez stresu roślin</h2>
                <p>Pchanie VPD zbyt wysoko (powyżej 1.6 kPa) powoduje swoje problemy. Roślina zamyka szparki, co zatrzymuje transpirację i fotosyntezę.</p>

                <h2>Problem nocnego skoku</h2>
                <p>Najniebezpieczniejszy czas dla zgnilizny to pierwsza godzina po wyłączeniu lamp. Temperatura spada szybko, ale wilgotność nie spada tak szybko. VPD się załamuje.</p>

                <h2>Lista kontrolna: Klimat kwitnienia</h2>
                <ul>
                    <li>Osuszacz dostosowany do objętości namiotu</li>
                    <li>Wentylatory oscylacyjne zapewniające pośredni przepływ powietrza</li>
                    <li>Wyciąg kanałowy działający ciągle</li>
                    <li>Czujnik temperatury/wilgotności na poziomie korony</li>
                    <li>Docelowe VPD dostosowywane co tydzień</li>
                    <li>Strategia wilgotności nocnej</li>
                </ul>
`
  },
  "night-temperature-vpd": {
    title: "Temperatura nocna i VPD: Pomijany czynnik",
    body: `
                <h2>Różnica temperatur dzień/noc</h2>
                <p>Większość growerów obsesyjnie śledzi dzienne VPD, ale całkowicie ignoruje co się dzieje, gdy lampy się wyłączają. To krytyczny błąd. <strong>Różnica temperatur dzień/noc</strong> &mdash; zwana DIF &mdash; bezpośrednio wpływa na stretch roślin, ekspresję kolorów, zachowanie terpenów i ryzyko chorób.</p>

                <h2>Jak DIF wpływa na rośliny</h2>
                <h3>Stretch łodygi</h3>
                <ul>
                    <li><strong>Pozytywny DIF</strong> (dzień cieplejszy o 5&ndash;10&deg;C): Promuje stretching.</li>
                    <li><strong>Zerowy DIF</strong>: Umiarkowany, zrównoważony wzrost.</li>
                    <li><strong>Negatywny DIF</strong> (noc cieplejsza o 2&ndash;4&deg;C): Zmniejsza stretch, produkuje kompaktowe rośliny.</li>
                </ul>
                <h3>Ekspresja kolorów (Antocyjany)</h3>
                <p>Fioletowe, niebieskie i ciemne zabarwienia są wyzwalane przez <strong>chłodne temperatury nocne</strong>, zwykle poniżej 18&deg;C.</p>
                <h3>Zachowanie terpenów</h3>
                <p>Terpeny to lotne związki aromatyczne, które odparowują w wyższych temperaturach. Utrzymując nocne temperatury na 18&ndash;21&deg;C, zmniejszasz straty terpenów.</p>

                <h2>Idealna temperatura nocna według fazy</h2>
                <h3>Sadzonka/Klon</h3>
                <ul><li><strong>Dzień:</strong> 24&ndash;26&deg;C, <strong>Noc:</strong> 22&ndash;24&deg;C, <strong>DIF:</strong> 2&ndash;3&deg;C</li></ul>
                <h3>Wegetacja</h3>
                <ul><li><strong>Dzień:</strong> 24&ndash;28&deg;C, <strong>Noc:</strong> 20&ndash;23&deg;C, <strong>DIF:</strong> 3&ndash;5&deg;C</li></ul>
                <h3>Kwitnienie</h3>
                <ul><li><strong>Dzień:</strong> 23&ndash;26&deg;C, <strong>Noc:</strong> 18&ndash;21&deg;C, <strong>DIF:</strong> 4&ndash;6&deg;C</li></ul>

                <h2>Załamanie VPD przy wyłączaniu lamp</h2>
                <p>W ciągu jednej godziny VPD może spaść ze zdrowego 1.53 do niebezpiecznie niskiego 0.62 &mdash; głęboko w strefie zagrożenia zgnilizną pąków.</p>

                <h2>Strategie nocnego zarządzania VPD</h2>
                <ol>
                    <li><strong>Uruchamiaj osuszacz 24/7</strong></li>
                    <li><strong>Używaj małego grzejnika</strong> z termostatem ustawionym na 20&ndash;21&deg;C</li>
                    <li><strong>Automatyzuj regułami opartymi na VPD</strong> w GrowVPD Pro</li>
                    <li><strong>Rozłóż harmonogramy oświetlenia</strong> w konfiguracjach wielonamiotowych</li>
                </ol>
`
  },
  "humidity-control-guide": {
    title: "Jak kontrolować wilgotność w pomieszczeniu uprawowym",
    body: `
                <h2>Dlaczego kontrola wilgotności ma znaczenie</h2>
                <p>Wilgotność to połowa równania VPD i ta połowa, z którą większość growerów ma trudności. Temperatura jest stosunkowo łatwa do kontroli. Wilgotność natomiast zmienia się ciągle, gdy rośliny transpirują, woda odparowuje z podłoża i wymieniany jest powietrze.</p>

                <h2>Nawilżacze: Gdy potrzebujesz więcej wilgoci</h2>
                <p>Zwykle potrzebujesz nawilżacza przy: sadzonkach/klonach, suchym klimacie, małych namiotach z silnym wyciągiem, wczesnym wzroście wegetacyjnym.</p>
                <h3>Typy nawilżaczy</h3>
                <ul>
                    <li><strong>Ultradźwiękowy (chłodna mgiełka):</strong> Najpopularniejszy wybór. Tani, cichy, regulowany.</li>
                    <li><strong>Odparowujący:</strong> Wentylator dmuchający przez mokry knot. Bez osadu mineralnego.</li>
                    <li><strong>Parowy (ciepła mgiełka):</strong> Gotowanie wody. Zabija bakterie, ale dodaje ciepło.</li>
                </ul>

                <h2>Osuszacze: Gdy potrzebujesz mniej wilgoci</h2>
                <p>Osuszanie staje się krytyczne podczas: kwitnienia, wilgotnego klimatu, nocy, dużej liczby roślin.</p>
                <h3>Typy osuszaczy</h3>
                <ul>
                    <li><strong>Kompresorowy (czynnik chłodniczy):</strong> Standardowy wybór. Skuteczny, powszechnie dostępny.</li>
                    <li><strong>Suszący (desiccant):</strong> Dobrze działa w niskich temperaturach (poniżej 15&deg;C).</li>
                </ul>

                <h2>Automatyzacja oparta na VPD</h2>
                <p>Najskuteczniejsza kontrola wilgotności używa VPD jako wyzwalacza, nie surowych wartości wilgotności. GrowVPD Pro pozwala tworzyć reguły automatyzacji oparte na VPD.</p>

                <h2>Wentylacja jako kontrola wilgotności</h2>
                <p>Twój wentylator wyciągowy jest potężnym narzędziem kontroli wilgotności, szczególnie gdy powietrze zewnętrzne jest suchsze.</p>

                <h2>Wskazówki DIY dla growerów z budżetem</h2>
                <h3>Podnoszenie wilgotności</h3>
                <ul>
                    <li>Mokry ręcznik przy wlocie</li>
                    <li>Otwarte pojemniki z wodą</li>
                    <li>Zmniejszenie prędkości wyciągu</li>
                </ul>
                <h3>Obniżanie wilgotności</h3>
                <ul>
                    <li>Zwiększenie prędkości wyciągu</li>
                    <li>DampRid / wiadra z chlorkiem wapnia</li>
                    <li>Defoliacja</li>
                </ul>

                <h2>Wyzwania sezonowe</h2>
                <h3>Zima</h3>
                <p>Ogrzewane powietrze jest bardzo suche (20&ndash;35% RH). Świetne dla kwitnienia, ale utrudnia sadzonki i wegetację.</p>
                <h3>Lato</h3>
                <p>Wysoka wilgotność otoczenia (60&ndash;80%) czyni kwitnienie niebezpiecznym.</p>

                <h2>Szybka referencja: Sprzęt według fazy</h2>
                <ul>
                    <li><strong>Sadzonki/Klony:</strong> Kopułka + mały nawilżacz</li>
                    <li><strong>Wegetacja:</strong> Nawilżacz LUB kontrola wyciągu (cel 60&ndash;70% RH)</li>
                    <li><strong>Wczesne kwitnienie:</strong> Osuszacz w gotowości (cel 50&ndash;60% RH)</li>
                    <li><strong>Późne kwitnienie:</strong> Osuszacz 24/7 (cel 40&ndash;50% RH)</li>
                </ul>
`
  },
  "cross-brand-automation": {
    title: "Automatyzacja cross-brand: Miksowanie Tuya, Mars Hydro i więcej",
    body: `
                <h2>Problem: Zamknięte ekosystemy</h2>
                <p>Każda marka inteligentnych urządzeń ma swoją aplikację, swój ekosystem i swoje ograniczenia. Twój kontroler AC Infinity steruje tylko wentylatorami AC Infinity, iHub Mars Hydro rozmawia tylko z własnymi LEDami, a Bluelab Pulse żyje w chmurze Edenic. Wszystkie to świetny sprzęt &mdash; tylko ich aplikacje nie rozmawiają ze sobą. GrowVPD Pro łączy się ze wszystkimi platformami jednocześnie.</p>

                <h2>Jak to działa</h2>
                <p>GrowVPD Pro komunikuje się z API chmury każdej platformy niezależnie. Reguły automatyzacji mogą łączyć dowolne podłączone urządzenie jako czujnik lub cel. Silnik reguł nie dba o platformę &mdash; widzi tylko dane i akcje.</p>

                <h2>Realistyczne scenariusze cross-brand</h2>
                <ul>
                    <li><strong>Kontroler AC Infinity 69/89 Pro steruje własnym wentylatorem Cloudline</strong> &mdash; kontroler czyta wbudowaną sondę T/RH, liczy VPD i reguluje wentylator przez kabel UIS. Ta sama marka, jedna czysta pętla &mdash; GrowVPD Pro tylko ustawia cel dla każdej fazy.</li>
                    <li><strong>Dowolny czujnik &rarr; gniazdko Tuya &rarr; zwykły grzejnik olejowy</strong> &mdash; gdy temperatura spada poniżej 18 &deg;C, gniazdko Tuya włącza grzejnik do czasu, gdy namiot się zrehabilituje. Działa z dowolnym zaufanym czujnikiem &mdash; AC Infinity, Bluelab, SwitchBot albo tania sonda Zigbee Tuya.</li>
                    <li><strong>Bluelab Pulse &rarr; alert o dryfie pH (tylko notyfikacja)</strong> &mdash; Pulse obserwuje pH strefy korzeniowej przez chmurę Edenic. Gdy wychodzi z bezpiecznego zakresu, aplikacja wysyła powiadomienie &mdash; korekta nawozów pozostaje świadomą decyzją człowieka, nigdy cichym auto-dawkowaniem.</li>
                </ul>
`
  },
  "automation-troubleshooting": {
    title: "Rozwiązywanie problemów z automatyzacją: Typowe problemy i rozwiązania",
    body: `
                <h2>Problem 1: Urządzenie pokazuje "Offline"</h2>
                <p>To najczęstszy problem. Urządzenie straciło połączenie z chmurą platformy. Sprawdź połączenie WiFi urządzenia, zrestartuj je i zweryfikuj, że działa w oficjalnej aplikacji platformy.</p>

                <h2>Problem 2: Reguły nie wyzwalają się</h2>
                <p>Reguły automatyzacji sprawdzane są co 15 minut przez WorkManagera Androida. Możliwe przyczyny: czujnik offline, warunek nie osiągnięty, ograniczenie czasowe aktywne, reguła wyłączona, urządzenie docelowe offline.</p>

                <h2>Problem 3: Urządzenie cykluje on/off</h2>
                <p>Szybkie cyklowanie oznacza, że histereza jest zbyt niska. Zwiększ histerezę (np. z 0.05 do 0.15 kPa dla VPD). Ustaw minimalny czas wyłączenia 5&ndash;10 minut.</p>

                <h2>Problem 4: Dane czujnika są nieprawidłowe</h2>
                <p>Użyj offsetu kalibracji w ustawieniach urządzenia. Porównaj z dokładnym przyrządem referencyjnym. Upewnij się, że czujnik nie jest w bezpośrednim świetle ani przy wylocie wentylatora.</p>

                <h2>Problem 5: Opóźnienie sterowania</h2>
                <p>Wszystkie platformy chmurowe mają pewne opóźnienie (1&ndash;5 sekund typowo). Dla Mars Hydro (MQTT) zwykle 1&ndash;2 sekundy. Dla Tuya (REST API) zwykle 2&ndash;4 sekundy. Jeśli opóźnienie przekracza 10 sekund, sprawdź połączenie internetowe.</p>

                <h2>Problem 6: "Nie znaleziono urządzeń" przy odkrywaniu</h2>
                <p>Sprawdź dane logowania platformy. Sprawdź region (szczególnie Tuya). Upewnij się, że API jest subskrybowane (Tuya IoT Platform). Zweryfikuj, że konto aplikacji jest połączone z projektem chmurowym.</p>

                <h2>Problem 7: Konflikty między regułami</h2>
                <p>Dwie reguły próbujące sterować tym samym urządzeniem w przeciwnych kierunkach. Rozwiązanie: użyj poziomów priorytetu. Reguły bezpieczeństwa powinny mieć najwyższy priorytet. GrowVPD Pro ostrzega o potencjalnych konfliktach.</p>
`
  },
  "energy-monitoring": {
    title: "Monitorowanie energii i śledzenie kosztów",
    body: `
                <h2>Dlaczego śledzić energię?</h2>
                <p>Prąd to największy bieżący koszt uprawy indoorowej. Lampy LED, wentylatory, osuszacze, nawilżacze, grzejniki i pompy &mdash; wszystko się sumuje. GrowVPD Pro śledzi zużycie energii na urządzenie, na namiot i na uprawę.</p>

                <h2>Jak działa śledzenie energii</h2>
                <p>GrowVPD Pro oblicza zużycie energii na podstawie nominalnej mocy urządzenia i zarejestrowanego czasu pracy. Dla urządzeń ze zmienną mocą (jak ściemniane lampy LED), szacunki uwzględniają poziom ściemniania.</p>

                <h2>Koszty na uprawę</h2>
                <p>Wprowadź swoją stawkę za prąd (koszt za kWh) w ustawieniach, a aplikacja obliczy dzienne, tygodniowe i łączne koszty energii dla każdej uprawy. Po zbiorach zobaczysz "koszt za gram" &mdash; ile prądu kosztował każdy gram suchego plonu.</p>

                <h2>Wskazówki oszczędzania energii</h2>
                <ul>
                    <li><strong>Wybieraj wydajne lampy LED</strong> &mdash; PPE powyżej 2.5 &mu;mol/J oszczędza prąd i produkuje mniej ciepła</li>
                    <li><strong>Używaj ściemniania</strong> zamiast podnoszenia lamp dla sadzonek</li>
                    <li><strong>Dobierz wentylator odpowiednio</strong> &mdash; wentylator na 60% jest wydajniejszy niż mniejszy na 100%</li>
                    <li><strong>Harmonogramy oświetlenia</strong> &mdash; tańsze taryfy nocne mogą znacząco obniżyć koszty</li>
                </ul>

                <h2>Analityka energetyczna</h2>
                <p>Sekcja analityki inteligentnej pokazuje rozbicie energii na kategorie (oświetlenie, wentylacja, klimat), trendy w czasie i porównanie efektywności między uprawami.</p>

                <h2>Raporty energetyczne</h2>
                <p>Eksportuj raporty energetyczne jako część eksportu PDF dziennika. Przydatne do optymalizacji kosztów i planowania przyszłych upraw.</p>
`
  },
  "harvest-tracking": {
    title: "Śledzenie zbiorów: Waga mokra, sucha i wydajność",
    body: `
                <h2>Dlaczego zapisywać dane zbiorów?</h2>
                <p>Zbiór to kulminacja tygodni lub miesięcy pracy. Bez dokładnych danych zbiorów nie możesz zmierzyć swojej poprawy ani porównać efektywności między uprawami.</p>

                <h2>Co logować przy zbiorach</h2>
                <ul>
                    <li><strong>Waga mokra</strong> &mdash; łączna waga bezpośrednio po ścięciu</li>
                    <li><strong>Waga sucha</strong> &mdash; waga po suszeniu (najważniejsza liczba)</li>
                    <li><strong>Data przycinania</strong></li>
                    <li><strong>Data rozpoczęcia płukania</strong></li>
                    <li><strong>Ocena trichomów</strong> &mdash; procent przezroczystych, mlecznych i bursztynowych</li>
                </ul>

                <h2>Automatyczne metryki wydajności</h2>
                <p>GrowVPD Pro automatycznie oblicza:</p>
                <ul>
                    <li><strong>Gramy na wat</strong> &mdash; waga sucha / moc lampy</li>
                    <li><strong>Gramy na roślinę</strong></li>
                    <li><strong>Łączny plon</strong></li>
                    <li><strong>Proporcja suszenia</strong> &mdash; mokra-do-suchej (typowo 3:1 do 5:1)</li>
                    <li><strong>Koszt za gram</strong> &mdash; łączny koszt energii / waga sucha</li>
                </ul>

                <h2>Porównanie zbiorów</h2>
                <p>Po wielu uprawach możesz porównać wydajność zbiorów obok siebie. Identyfikuj, które odmiany, techniki i warunki dały najlepsze wyniki.</p>

                <h2>Wskazówki do suszenia</h2>
                <ul>
                    <li>Temperatura suszenia: 18&ndash;21&deg;C</li>
                    <li>Wilgotność suszenia: 55&ndash;65% RH</li>
                    <li>Czas suszenia: 7&ndash;14 dni</li>
                    <li>Ciemność i łagodny przepływ powietrza</li>
                </ul>

                <h2>Fermentacja (curing)</h2>
                <p>Po suszeniu fermentacja w słoikach przez 2&ndash;4 tygodnie poprawia smak, aromat i gładkość. Loguj daty i warunki fermentacji w dzienniku.</p>
`
  },
  "comparing-grows": {
    title: "Porównywanie upraw: Znajdź co działa najlepiej",
    body: `
                <h2>Siła porównania</h2>
                <p>Pojedynczy dziennik uprawy mówi ci, co się stało. <strong>Porównanie dwóch upraw mówi ci, co zrobiło różnicę.</strong> Funkcja porównywania GrowVPD Pro to najszybszy sposób na poprawę wyników z uprawy na uprawę.</p>

                <h2>Jak porównywać uprawy</h2>
                <p>Otwórz zakładkę Dziennik, dotknij ikony porównania i wybierz dwie ukończone uprawy. Aplikacja wyświetli ich dane nałożone tydzień po tygodniu.</p>

                <h2>Co porównywać</h2>
                <ul>
                    <li><strong>VPD</strong> &mdash; Czy jedna uprawa miała stabilniejsze VPD? To często koreluje z lepszymi plonami.</li>
                    <li><strong>Temperatura i wilgotność</strong> &mdash; Szukaj wzorców wahań.</li>
                    <li><strong>Nawozy (EC/pH)</strong> &mdash; Czy różne stężenia nawozów wpłynęły na wynik?</li>
                    <li><strong>Wysokość roślin</strong> &mdash; Porównaj tempo wzrostu i stretch.</li>
                    <li><strong>Wydajność</strong> &mdash; Gramy na wat, gramy na roślinę, łączny plon.</li>
                </ul>

                <h2>Identyfikowanie wzorców</h2>
                <p>Widok porównania automatycznie podświetla znaczące różnice. Jeśli jedna uprawa miała konsekwentnie wyższe VPD podczas tygodni 4&ndash;6 kwitnienia, wykres czyni to oczywistym.</p>

                <h2>Porównanie odmiany</h2>
                <p>Porównuj różne odmiany w tych samych warunkach, aby zobaczyć, która lepiej pasuje do twojego środowiska. Lub porównaj tę samą odmianę w różnych warunkach, aby znaleźć optymalną konfigurację.</p>

                <h2>Wskazówki do efektywnego porównywania</h2>
                <blockquote>
                    <strong>Zmieniaj jedną zmienną na raz.</strong> Jeśli zmienisz nawóz, oświetlenie i podłoże jednocześnie, nie będziesz wiedział, co wpłynęło na wynik.
                </blockquote>
`
  },
  "photo-documentation": {
    title: "Dokumentacja fotograficzna: Buduj wizualną oś czasu",
    body: `
                <h2>Dlaczego zdjęcia mają znaczenie</h2>
                <p>Liczby opowiadają część historii. Zdjęcia opowiadają resztę. Codzienna fotografia twojej uprawy buduje wizualny rekord, który jest bezcenny do diagnozowania problemów, śledzenia rozwoju i porównywania upraw.</p>

                <h2>Co fotografować</h2>
                <ul>
                    <li><strong>Cała roślina</strong> &mdash; zdjęcia ogólne pokazujące strukturę i postępy wzrostu</li>
                    <li><strong>Zbliżenia liści</strong> &mdash; do identyfikacji niedoborów, chorób i szkodników</li>
                    <li><strong>Pąki</strong> &mdash; śledzenie rozwoju kwiatów, koloru i trichomów</li>
                    <li><strong>Korzenie</strong> &mdash; szczególnie w hydro, aby monitorować zdrowie korzeni</li>
                    <li><strong>Sprzęt i konfiguracja</strong> &mdash; dokumentacja setupu do przyszłej referencji</li>
                </ul>

                <h2>Wskazówki fotograficzne</h2>
                <ul>
                    <li><strong>Wyłącz lampy uprawowe</strong> lub użyj lampy błyskowej. Fioletowe/czerwone światło LED zniekształca kolory.</li>
                    <li><strong>Fotografuj z tego samego kąta</strong> każdego dnia dla spójnej osi czasu.</li>
                    <li><strong>Używaj białego światła</strong> do diagnostyki liści.</li>
                </ul>

                <h2>Timelapse automatyczny</h2>
                <p>Jeśli masz kamerę Tuya podłączoną przez zakładkę Automatyzacja, GrowVPD Pro może automatycznie robić codzienne zdjęcia i kompilować je w film poklatkowy.</p>

                <h2>Prywatność zdjęć</h2>
                <p>Z subskrypcją Pro zdjęcia mogą być ukrywane z galerii urządzenia. Są przechowywane w prywatnym katalogu aplikacji i nie pojawiają się w Google Photos ani żadnej innej galerii.</p>

                <h2>Eksportowanie zdjęć</h2>
                <p>Eksport PDF zawiera wszystkie zdjęcia w zmniejszonej rozdzielczości. Eksport JSON zawiera ścieżki do plików dla zewnętrznych narzędzi.</p>
`
  },
  "nutrient-deficiency-guide": {
    title: "Przewodnik po niedoborach składników odżywczych",
    body: `
                <h2>Zanim zaczniesz diagnozować: Sprawdź podstawy</h2>
                <p>Zanim założysz niedobór składników, sprawdź pH, EC, temperaturę korzeni i podlewanie. Większość objawów wyglądających jak niedobory jest w rzeczywistości spowodowana blokadą przez nieprawidłowe pH.</p>
                <ul>
                    <li><strong>pH gleby:</strong> 6.0&ndash;7.0 (optymalnie 6.2&ndash;6.5)</li>
                    <li><strong>pH hydro/kokos:</strong> 5.5&ndash;6.5 (optymalnie 5.8&ndash;6.2)</li>
                </ul>

                <h2>Azot (N)</h2>
                <p><strong>Objawy:</strong> Dolne liście żółkną i opadają. Ogólne spowolnienie wzrostu. Bladozielona roślina.</p>
                <p><strong>Rozwiązanie:</strong> Zwiększ nawozy bogate w azot. W organice: podlej herbatą z dżdżownic.</p>

                <h2>Fosfor (P)</h2>
                <p><strong>Objawy:</strong> Ciemne, fioletowe przebarwienia na łodygach i spodach liści. Wolny wzrost korzeni.</p>
                <p><strong>Rozwiązanie:</strong> Sprawdź pH (fosfor jest blokowany poniżej 6.0). Dodaj PK booster.</p>

                <h2>Potas (K)</h2>
                <p><strong>Objawy:</strong> Brązowe, suche krawędzie starszych liści. Słabe łodygi.</p>
                <p><strong>Rozwiązanie:</strong> Zwiększ potas w nawożeniu. Sprawdź EC &mdash; może być za wysoki, powodując blokadę.</p>

                <h2>Wapń (Ca)</h2>
                <p><strong>Objawy:</strong> Brązowe/rdzawe plamy na młodych liściach. Zniekształcony nowy wzrost.</p>
                <p><strong>Rozwiązanie:</strong> Dodaj CalMag. Sprawdź pH i temperaturę wody.</p>

                <h2>Magnez (Mg)</h2>
                <p><strong>Objawy:</strong> Żółknięcie międzyżyłkowe starszych liści (żyłki zostają zielone).</p>
                <p><strong>Rozwiązanie:</strong> CalMag lub sól Epsom (siarczan magnezu). Częste w wodzie RO.</p>

                <h2>Żelazo (Fe)</h2>
                <p><strong>Objawy:</strong> Żółknięcie młodych liści z zielonymi żyłkami (podobne do Mg, ale na nowym wzroście).</p>
                <p><strong>Rozwiązanie:</strong> Obniż pH do 5.8&ndash;6.2. Żelazo jest szybko blokowane przy wysokim pH.</p>

                <h2>Siarka (S)</h2>
                <p><strong>Objawy:</strong> Jednolite jasnozielone/żółte zabarwienie młodych liści.</p>

                <h2>Cynk (Zn)</h2>
                <p><strong>Objawy:</strong> Zniekształcone, pomarszczone nowe liście. Krótkie internody.</p>

                <h2>Mangan (Mn)</h2>
                <p><strong>Objawy:</strong> Żółte plamy między żyłkami starszych liści z brązowymi nekrotycznymi punktami.</p>

                <h2>Nadmiar składników (toksyczność)</h2>
                <p>Za dużo jest równie szkodliwe jak za mało. Objawy toksyczności azotowej: ciemnozielone, "pazurowate" liście z wypalonymi końcówkami. Rozwiązanie: przepłukaj podłoże czystą wodą o odpowiednim pH.</p>

                <h2>Używanie GrowVPD Pro do diagnostyki</h2>
                <p>Zakładka Przewodnik roślin zawiera wizualny katalog niedoborów z fotografiami. Funkcja diagnostyki AI (Pro) analizuje zdjęcia liści i sugeruje prawdopodobne przyczyny.</p>
`
  },
  "substrate-mixing": {
    title: "Mieszanie substratów: Tworzenie własnego podłoża",
    body: `
                <h2>Dlaczego substrat ma znaczenie</h2>
                <p>Substrat to miejsce, gdzie żyje twoja roślina. Decyduje o retencji wody, drenażu, napowietrzeniu korzeni i dostępności składników odżywczych. Gotowe mieszanki działają, ale niestandardowy substrat dostosowany do twoich warunków może znacząco poprawić wyniki.</p>

                <h2>Popularne składniki</h2>
                <ul>
                    <li><strong>Torf</strong> &mdash; retencja wody, lekko kwaśne pH, dobra struktura</li>
                    <li><strong>Kokos</strong> &mdash; podobny do torfu, ale bardziej zrównoważony ekologicznie, neutralne pH</li>
                    <li><strong>Perlit</strong> &mdash; napowietrzenie i drenaż, zapobiega zbijaniu</li>
                    <li><strong>Wermikulit</strong> &mdash; retencja wody i składników, lekki</li>
                    <li><strong>Odlewy dżdżownic</strong> &mdash; organiczne składniki odżywcze, mikroorganizmy</li>
                </ul>

                <h2>Receptury w GrowVPD Pro</h2>
                <p>Mikser substratów pozwala tworzyć, zapisywać i udostępniać niestandardowe receptury. Zdefiniuj składniki, ustaw proporcje, wprowadź docelową objętość, a aplikacja obliczy ilość każdego składnika.</p>

                <h2>Przykładowe mieszanki</h2>
                <ul>
                    <li><strong>Standardowa ziemia:</strong> 60% torf, 25% perlit, 15% odlewy dżdżownic</li>
                    <li><strong>Kokos drenaż:</strong> 70% kokos, 30% perlit</li>
                    <li><strong>Super soil:</strong> 40% torf, 20% kokos, 20% perlit, 10% odlewy, 10% dodatki</li>
                </ul>
`
  },
  "tent-ventilation-guide": {
    title: "Wentylacja namiotu uprawowego: Kompletny przewodnik CFM",
    body: `
                <h2>Dlaczego wentylacja ma znaczenie</h2>
                <p>Wentylacja to kręgosłup kontroli klimatu w twoim namiocie. Odpowiada za: usuwanie ciepła, kontrolę wilgotności, uzupełnianie CO2, zapobieganie pleśni i wzmacnianie łodyg.</p>

                <h2>Zrozumienie CFM</h2>
                <p>CFM (Cubic Feet per Minute) mierzy, ile powietrza wentylator może przemieścić w ciągu minuty. Jako zasada kciuka, chcesz wymieniać powietrze w namiocie co 1&ndash;3 minuty.</p>

                <h2>Obliczanie wymaganego CFM</h2>
                <p>Podstawowa formuła: objętość namiotu w stopach sześciennych = wymagane bazowe CFM. Zastosuj mnożniki:</p>
                <ul>
                    <li><strong>Filtr węglowy:</strong> x 1.25</li>
                    <li><strong>Kanały i zakręty:</strong> x 1.15 na zakręt</li>
                    <li><strong>Gorący klimat:</strong> x 1.25&ndash;1.5</li>
                    <li><strong>Ciepło lampy:</strong> dodatkowe CFM na podstawie mocy</li>
                </ul>

                <h2>Podciśnienie (ujemne ciśnienie)</h2>
                <p>Prawidłowo skonfigurowany wyciąg tworzy lekkie podciśnienie w namiocie &mdash; ściany namiotu lekko się wciągają do środka. To zapewnia, że powietrze przepływa przez filtr węglowy i nie wycieka przez szwy.</p>

                <h2>Typy wentylatorów</h2>
                <ul>
                    <li><strong>Wentylatory kanałowe (inline):</strong> AC Infinity, Mars Hydro, Spider Farmer. Montowane w kanale.</li>
                    <li><strong>Wentylatory cyrkulacyjne (clip/stand):</strong> Ruch powietrza wewnątrz namiotu. Nie zastępują wyciągu.</li>
                </ul>

                <h2>Filtry węglowe</h2>
                <p>Filtr węglowy eliminuje zapachy z wyciąganego powietrza. CFM filtra musi odpowiadać lub przekraczać CFM wentylatora. Wymieniaj węgiel co 12&ndash;18 miesięcy.</p>

                <h2>Automatyzacja wentylacji</h2>
                <p>Z GrowVPD Pro i inteligentnym wentylatorem (AC Infinity, Mars Hydro) możesz automatyzować prędkość na podstawie temperatury, wilgotności lub VPD. Wentylator przyspiesza, gdy VPD spada zbyt nisko, i zwalnia, gdy klimat jest optymalny.</p>

                <h2>Konfiguracja kanałów</h2>
                <ul>
                    <li>Używaj jak najkrótszych kanałów</li>
                    <li>Minimalizuj zakręty</li>
                    <li>Utrzymuj kanały proste i napięte</li>
                    <li>Używaj średnicy odpowiedniej dla wentylatora (nie redukuj)</li>
                </ul>
`
  },
  "privacy-security-guide": {
    title: "Prywatność i bezpieczeństwo: Chroń swoje dane uprawowe",
    body: `
                <h2>Dlaczego prywatność ma znaczenie dla growerów</h2>
                <p>Uprawa indoorowa jest legalna w wielu miejscach, ale wielu growerów woli zachować dyskrecję. GrowVPD Pro jest zbudowane z myślą o prywatności &mdash; twoje dane pozostają na twoim urządzeniu.</p>

                <h2>Przechowywanie danych</h2>
                <p>Wszystkie dane dziennika, zdjęcia i ustawienia są przechowywane lokalnie na twoim urządzeniu. Nic nie jest przesyłane na serwery. Jedyne połączenia sieciowe to: API inteligentnych urządzeń (Tuya, Mars Hydro itp.) i opcjonalny Google Play billing.</p>

                <h2>Ukrywanie zdjęć z galerii</h2>
                <p>Z subskrypcją Pro możesz ukryć zdjęcia uprawowe z galerii urządzenia. Zdjęcia są przechowywane w prywatnym katalogu aplikacji i nie pojawiają się w Google Photos ani innych aplikacjach galerii.</p>

                <h2>Blokada PIN i biometria</h2>
                <p>Ustaw 4-cyfrowy PIN lub użyj odcisku palca / rozpoznawania twarzy, aby zabezpieczyć dostęp do aplikacji. Aplikacja blokuje się automatycznie, gdy przejdzie do tła.</p>

                <h2>Tryb stealth</h2>
                <p>Tryb stealth zmienia ikonę aplikacji na niepozorną (jak kalkulator lub notatnik), ukrywa nazwy powiadomień i może ukryć aplikację z ostatnich aplikacji.</p>

                <h2>Eksport i backup</h2>
                <p>Eksportuj dane jako PDF lub JSON do własnego przechowywania. Nie ma automatycznej synchronizacji z chmurą &mdash; ty decydujesz, kiedy i gdzie dane trafiają.</p>

                <h2>Uprawnienia aplikacji</h2>
                <ul>
                    <li><strong>Aparat:</strong> Do robienia zdjęć uprawowych</li>
                    <li><strong>Pamięć:</strong> Do przechowywania zdjęć i eksportów</li>
                    <li><strong>Bluetooth:</strong> Do czujników BLE (opcjonalnie)</li>
                    <li><strong>Internet:</strong> Tylko dla inteligentnych urządzeń (opcjonalnie)</li>
                </ul>
`
  },
  "language-setup": {
    title: "Konfiguracja języka: 11 języków w GrowVPD Pro",
    body: `
                <h2>Pełna lokalizacja, nie częściowe tłumaczenie</h2>
                <p>Wiele aplikacji twierdzi, że obsługuje wiele języków, ale tłumaczy tylko główne menu, pozostawiając większość treści po angielsku. GrowVPD Pro jest w pełni zlokalizowane we wszystkich 11 językach &mdash; każdy ekran, każde powiadomienie, każdy element interfejsu.</p>

                <h2>Obsługiwane języki</h2>
                <ul>
                    <li><strong>Angielski</strong> (EN) &mdash; domyślny</li>
                    <li><strong>Czeski</strong> (CS)</li>
                    <li><strong>Niemiecki</strong> (DE)</li>
                    <li><strong>Hiszpański</strong> (ES)</li>
                    <li><strong>Holenderski</strong> (NL)</li>
                    <li><strong>Francuski</strong> (FR)</li>
                    <li><strong>Włoski</strong> (IT)</li>
                    <li><strong>Portugalski</strong> (PT)</li>
                    <li><strong>Polski</strong> (PL)</li>
                    <li><strong>Tajski</strong> (TH)</li>
                    <li><strong>Hebrajski</strong> (HE) &mdash; z pełną obsługą RTL</li>
                </ul>

                <h2>Jak zmienić język</h2>
                <p>Przejdź do <strong>Ustawienia</strong> (ikona koła zębatego na zakładce Ustawienia) i dotknij opcji języka u góry. Wybierz swój język z listy. Zmiana jest natychmiastowa &mdash; nie wymaga restartu aplikacji.</p>

                <h2>Obsługa RTL</h2>
                <p>Hebrajski jest wyświetlany od prawej do lewej (RTL). Cały interfejs, w tym wykresy, tabele i nawigacja, dostosowuje się automatycznie.</p>
`
  }
};
