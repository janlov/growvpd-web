# Kompletni navod na nasazeni webu GrowVPD Pro

Tento navod pokryva vsechny kroky od nuly az po funkcni web s komentari a komunitou.

**Struktura webu (co nasazujeme):**
```
website/
  index.html          -- hlavni stranka
  CNAME               -- domena growvpd.pro
  robots.txt           -- pro vyhledavace
  sitemap.xml          -- mapa stranek
  css/                 -- styly (style.css, forum.css)
  js/                  -- skripty (main.js, i18n.js, translations.js)
  images/              -- obrazky, favicon, OG images
  guides/              -- 23 navodu + index (komunitni hub)
  support/             -- podpora
  privacy/             -- zasady ochrany soukromi
  terms/               -- podminky pouzivani
  press/               -- pro media
```

---

## 1. GitHub Pages -- Nasazeni statickeho webu

### 1.1 Vytvoreni GitHub repozitare

1. Otevri https://github.com/new
2. Vyplni:
   - **Repository name**: `growvpd-web` (nebo `growvpdpro.github.io` pokud chces user-level GitHub Pages)
   - **Description**: `GrowVPD Pro - official website`
   - **Visibility**: **Public** (GitHub Pages zdarma funguje jen pro public repozitare)
   - **NEZASKRTAVEJ** "Add a README file", "Add .gitignore", "Choose a license" -- vsechno uz mame ve slozce website/
3. Klikni **Create repository**
4. Nech stranku otevrenou -- budeme potrebovat URL repozitare

> **Poznamka k nazvu**: Pokud zvolite `TVOJE_USERNAME.github.io`, web bude primo na `https://TVOJE_USERNAME.github.io/`. Pokud zvolite jiny nazev (napr. `growvpd-web`), web bude na `https://TVOJE_USERNAME.github.io/growvpd-web/`. Protoze pouzijeme vlastni domenu `growvpd.pro`, na nazvu nezalezi -- oba zpusoby budou fungovat.

### 1.2 Nahrani webu do repozitare

#### Zpusob A: Pres prikazovy radek (doporuceno)

Otevri Git Bash nebo terminal ve slozce s webem:

```bash
# Prejdi do slozky s webem
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"

# Inicializuj git repozitar
git init

# Pridej vsechny soubory
git add .

# Prvni commit
git commit -m "Initial website deploy"

# Prejmenovani vychozi veteve na main
git branch -M main

# Pridani remote (nahrad TVOJE_USERNAME za sve GitHub uzivatelske jmeno)
git remote add origin https://github.com/TVOJE_USERNAME/growvpd-web.git

# Nahrani na GitHub
git push -u origin main
```

Po zadani `git push` te Git vyzve k prihlaseni. Pokud mas nastavenou SSH autentizaci, pouzij SSH URL:
```bash
git remote add origin git@github.com:TVOJE_USERNAME/growvpd-web.git
```

Pokud pouzivas HTTPS a dvoufaktorove overeni, musis vytvorit **Personal Access Token**:
1. Jdi na https://github.com/settings/tokens
2. **Generate new token (classic)**
3. Zaskrini `repo` scope
4. Vygeneruj a zkopiruj token
5. Pri `git push` zadej token misto hesla

#### Zpusob B: Pres GitHub webove rozhrani

1. Otevri repozitar na GitHubu
2. Klikni na **"uploading an existing file"** (nebo **Add file** -> **Upload files**)
3. Pretahni VSECHNY soubory a slozky z `C:\Users\janlo\AndroidStudioProjects\GrowmasterVPDchart\website\` do uploadovaciho okna
4. Dole napise commit message, napr. `Initial website deploy`
5. Klikni **Commit changes**

> **POZOR**: GitHub web upload neumi najednou nahrat slozky se soubory. Musis nahrat kazdou slozku zvlast, nebo pouzij prikazovy radek (Zpusob A).

### 1.3 Zapnuti GitHub Pages

1. V repozitari jdi na **Settings** (ozubene kolecko v horni liste)
2. V levem menu klikni na **Pages**
3. Sekce "Build and deployment":
   - **Source**: vyber **Deploy from a branch**
   - **Branch**: vyber **main**
   - **Folder**: vyber **/ (root)**
4. Klikni **Save**
5. Pockej 1-2 minuty
6. Objev se zelene oznameni s URL tvych Pages, napr.:
   - `https://TVOJE_USERNAME.github.io/growvpd-web/`
7. Klikni na odkaz a over, ze web funguje

> Pokud vidis 404: pockej par minut, GitHub Pages se muze budovat az 5 minut. Zkontroluj tez, ze ve vetvi main je soubor `index.html` v koreni (ne v podsloze).

### 1.4 Nastaveni vlastni domeny growvpd.pro

#### Krok 1: Koupeni domeny

Domena `.app` stoji typicky $12-20/rok. Doporuceni registratori:
- **Cloudflare Registrar** (https://dash.cloudflare.com/) -- nejlevnejsi, bez priratek
- **Namecheap** (https://namecheap.com) -- popularni, cesky prijatelny
- **Porkbun** (https://porkbun.com) -- laciny, jednoduchy

> **Domena .app** vyzaduje HTTPS (je to HSTS preloaded TLD). GitHub Pages to resi automaticky -- zadny problem.

#### Krok 2: DNS nastaveni u registratora domeny

Prihlaste se do spravce DNS u sveho registratora a pridej tyto zaznamy:

**A zaznamy** (pro apex domenu `growvpd.pro`):

| Typ | Host/Nazev | Hodnota          | TTL  |
|-----|-----------|------------------|------|
| A   | @         | 185.199.108.153  | 3600 |
| A   | @         | 185.199.109.153  | 3600 |
| A   | @         | 185.199.110.153  | 3600 |
| A   | @         | 185.199.111.153  | 3600 |

**CNAME zaznam** (pro www subdomenu):

| Typ   | Host/Nazev | Hodnota                      | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | www       | TVOJE_USERNAME.github.io     | 3600 |

> **Cloudflare specificke**: Pokud pouzivas Cloudflare jako DNS, nastav proxy status na **DNS only** (sedy mracek, ne oranzovy). GitHub Pages ma vlastni SSL a Cloudflare proxy zpusobi problemy.

#### Krok 3: Nastaveni domeny v GitHubu

1. V repozitari jdi na **Settings** -> **Pages**
2. Sekce "Custom domain": zadej `growvpd.pro`
3. Klikni **Save**
4. GitHub zacne overovat DNS -- zobrazi "DNS check in progress..."
5. Zaskrini **Enforce HTTPS** (muze byt dockane sedive -- zaktivni se po DNS overeni)

#### Krok 4: Overeni CNAME souboru

Web uz obsahuje soubor `CNAME` s obsahem:
```
growvpd.pro
```

Tento soubor MUSI byt v koreni repozitare. GitHub ho pouziva k identifikaci vlastni domeny. Pokud jsi ho smazal, vytvor ho znovu:
```bash
echo "growvpd.pro" > "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website/CNAME"
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

#### Krok 5: Cekani a overeni

- DNS propagace trva **10 minut az 48 hodin** (obvykle 10-30 minut)
- Over na https://www.whatsmydns.com/#A/growvpd.pro ze A zaznamy ukazuji na GitHub IP adresy
- Over na https://growvpd.pro ze web funguje
- Over na https://www.growvpd.pro ze presmerovava na growvpd.pro

> **Troubleshooting**: Pokud se po 30 minutach nic nezobrazi:
> - Zkontroluj DNS zaznamy pomoci `nslookup growvpd.pro` v terminalu
> - Ujisti se, ze v Settings -> Pages je domena zelena s "DNS check successful"
> - Vyckej -- nekteri registratori propaguju DNS pomaleji

---

## 2. GitHub Discussions + Giscus -- Komentarovy system

Giscus je komentarovy widget ktery pouziva GitHub Discussions jako backend. Uzivatele se prihlasi pres GitHub a komentare se ukladaji jako diskuzni vlakna v repozitari.

### 2.1 Zapnuti GitHub Discussions

1. V repozitari `growvpd-web` (nebo jak jsi ho nazval) jdi na **Settings**
2. Scrolluj dolu do sekce **Features**
3. Zaskrini **Discussions**
4. Klikni **Set up discussions** pokud se zobrazi

### 2.2 Vytvoreni kategorii diskuzi

1. Klikni na zalozku **Discussions** v horni liste repozitare
2. Na leve strane klikni na ikonu tuzky vedle "Categories" (nebo klikni na **Categories** dole)
3. Smaz vychozi kategorie (Announcements, General, Ideas, Q&A, Show and tell) pokud nechces
4. Vytvor tyto nove kategorie (klikni **New category** pro kazdou):

| Nazev kategorie      | Popis                                       | Format diskuze   |
|---------------------|---------------------------------------------|------------------|
| **General**         | General community discussion                 | Open-ended       |
| **Guides**          | Discussion under guide articles              | Open-ended       |
| **Smart Automation**| Tuya, Mars Hydro, AC Infinity discussions    | Open-ended       |
| **Bug Reports**     | Report bugs and issues with GrowVPD Pro      | Open-ended       |
| **Feature Requests**| Suggest new features for the app             | Open-ended       |
| **Show Your Grow**  | Share your grow setups and results           | Open-ended       |

### 2.3 Instalace Giscus aplikace

1. Otevri https://github.com/apps/giscus
2. Klikni **Install**
3. Vyber **Only select repositories**
4. Ze seznamu vyber repozitar `growvpd-web`
5. Klikni **Install**

> Giscus je open-source GitHub App -- nepotrebuje zadna specialni opravneni krom pristupu k Discussions.

### 2.4 Ziskani konfiguracnich hodnot

1. Otevri https://giscus.app
2. Vyplni konfiguracni formular:
   - **Repository**: `TVOJE_USERNAME/growvpd-web`
     (po zadani se zobrazi zelena fajfka "This repository meets all of the above criteria")
   - **Page <-> Discussions mapping**: vyber **Discussion title contains page pathname**
   - **Discussion Category**: vyber **Guides**
   - **Features**: zaskrini **Enable reactions for the main post**
   - **Theme**: vyber **light** (nebo `preferred_color_scheme` pro auto)
3. Scrolluj dolu -- zobrazi se vygenerovany `<script>` tag, napr.:
   ```html
   <script src="https://giscus.app/client.js"
     data-repo="janlo/growvpd-web"
     data-repo-id="R_kgDOxxxxxx"
     data-category="Guides"
     data-category-id="DIC_kwDOxxxxxx"
     data-mapping="pathname"
     data-strict="0"
     data-reactions-enabled="1"
     data-emit-metadata="0"
     data-input-position="top"
     data-theme="light"
     data-lang="en"
     crossorigin="anonymous"
     async>
   </script>
   ```
4. **Zaznamenej si tyto 3 hodnoty** (budou se lisit dle tveho uctu):
   - `data-repo` -> napr. `janlo/growvpd-web`
   - `data-repo-id` -> napr. `R_kgDOL1234A` (zacina `R_kgDO`)
   - `data-category-id` -> napr. `DIC_kwDOL1234_4` (zacina `DIC_kwDO`)

> **TIP**: Pokud chces ruzne kategorie pro ruzne stranky, zopakuj krok 2-3 s jinou vybranou kategorii a zaznamenej jeji `data-category-id`.

### 2.5 Nahrazeni placeholderu ve webovych souborech

Web obsahuje tyto placeholdery ktere musis nahradit skutecnymi hodnotami:

| Placeholder     | Nahrad za                          | Priklad                 |
|----------------|-----------------------------------|-----------------------|
| `OWNER/REPO`   | tvuj GitHub username/nazev repo   | `janlo/growvpd-web`   |
| `REPO_ID`      | ID repozitare z giscus.app        | `R_kgDOL1234A`        |
| `CATEGORY_ID`  | ID kategorie z giscus.app         | `DIC_kwDOL1234_4`     |

**Soubory kde se placeholdery nachazi** (24 HTML souboru ve slozce guides/):

```
guides/index.html                       -- 4 vyskyty (vcetne YOUR_SERVER_ID)
guides/getting-started.html             -- 3 vyskyty
guides/vpd-complete-guide.html          -- 3 vyskyty
guides/vpd-seedling-clone.html          -- 3 vyskyty
guides/vpd-flowering.html               -- 3 vyskyty
guides/night-temperature-vpd.html       -- 3 vyskyty
guides/humidity-control-guide.html      -- 3 vyskyty
guides/connect-tuya.html                -- 3 vyskyty
guides/connect-mars-hydro.html          -- 3 vyskyty
guides/automation-rules.html            -- 3 vyskyty
guides/cross-brand-automation.html      -- 3 vyskyty
guides/automation-troubleshooting.html  -- 3 vyskyty
guides/energy-monitoring.html           -- 3 vyskyty
guides/grow-diary-guide.html            -- 3 vyskyty
guides/harvest-tracking.html            -- 3 vyskyty
guides/ppfd-dli-guide.html              -- 3 vyskyty
guides/equipment-setup.html             -- 3 vyskyty
guides/nutrient-deficiency-guide.html   -- 1 vyskyt
guides/substrate-mixing.html            -- 1 vyskyt
guides/tent-ventilation-guide.html      -- 1 vyskyt
guides/comparing-grows.html             -- 1 vyskyt
guides/photo-documentation.html         -- 1 vyskyt
guides/privacy-security-guide.html      -- 1 vyskyt
guides/language-setup.html              -- 1 vyskyt
```

**Celkem: 59 vyskytu placeholderu v HTML souborech** (+ 9 v SETUP.md ktery neni na webu)

#### Hromadna nahrada pres prikazovy radek (Git Bash)

Spust tyto prikazy (nahrad hodnoty za sve skutecne):

```bash
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"

# 1. Nahrad OWNER/REPO (pozor na lomitko -- v sed ho musime escapovat)
find guides/ -name "*.html" -exec sed -i 's|OWNER/REPO|janlo/growvpd-web|g' {} \;

# 2. Nahrad REPO_ID
find guides/ -name "*.html" -exec sed -i 's|REPO_ID|R_kgDOxxxxxx|g' {} \;

# 3. Nahrad CATEGORY_ID
find guides/ -name "*.html" -exec sed -i 's|CATEGORY_ID|DIC_kwDOxxxxxx|g' {} \;
```

> **POZOR**: V prikazech vyse nahrad `janlo/growvpd-web`, `R_kgDOxxxxxx` a `DIC_kwDOxxxxxx` za SKUTECNE hodnoty z giscus.app!

#### Overeni ze se vsechno nahradilo

```bash
# Nemelo by najit zadny vyskyt
grep -r "OWNER/REPO" guides/
grep -r "REPO_ID" guides/
grep -r "CATEGORY_ID" guides/
```

Pokud se neco jeste vypisuje, nahrad to rucne v danem souboru.

### 2.6 Commit a push zmen

```bash
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"
git add guides/
git commit -m "Configure Giscus with real repo and category IDs"
git push
```

### 2.7 Otestovani Giscus

1. Otevri https://growvpd.pro/guides/getting-started.html (nebo jakykoli guide)
2. Scrolluj dolu -- pod clankem by se mel zobrazit Giscus komentarovy widget
3. Prihlaste se pres GitHub a napise testovaci komentar
4. Over v repozitari na zalozce **Discussions**, ze se vytvorilo nove diskuzni vlakno

> **Pokud se Giscus nezobrazuje**:
> - Otevri Developer Tools (F12) -> Console -- hledej chybove hlasky
> - Over ze Giscus app je nainstalovana na repozitari (Settings -> GitHub Apps)
> - Over ze Discussions jsou zapnute
> - Over ze `data-repo-id` a `data-category-id` jsou spravne

---

## 3. Discord Server -- Real-time komunita

### 3.1 Vytvoreni serveru

1. Otevri **Discord** (stahnout na https://discord.com/download nebo pouzit webovou verzi https://discord.com/app)
2. V levem panelu klikni na **"+"** (Pridat server)
3. Vyber **Create My Own** (Vytvorit vlastni)
4. Vyber **For a club or community** (Pro klub nebo komunitu)
5. **Nazev serveru**: `GrowVPD Pro`
6. **Ikona serveru**: nahraj app ikonu (zeleny list) -- soubor z `images/` slozky webu
7. Klikni **Create** (Vytvorit)

### 3.2 Zakladni nastaveni serveru

Klikni na nazev serveru nahore -> **Server Settings** (Nastaveni serveru):

**Overview (Prehled):**
- Description: `Official GrowVPD Pro community. VPD charts, grow diaries, smart automation, plant care tips.`
- Verification Level: **Medium** (musi mit overeny email, clen alespon 5 minut)
- Default Notification Settings: **Only @mentions** (jinak se uzivatele utopi v notifikacich)

**Community (Komunita):**
1. Klikni na **Enable Community** (Zapnout komunitu)
2. Projdi wizard:
   - Rules Channel: vytvor `#rules`
   - Community Updates Channel: vytvor `#announcements`
3. Zaskrini ze souhlasis s Discord Community Guidelines
4. Klikni **Set up** (Nastavit)

> Zapnuti Community odemkne: Server Insights (statistiky), Announcement kanaly, Welcome Screen, Server Discovery.

### 3.3 Vytvoreni struktury kanalu

Smaz vychozi kanaly (`#general`, `#voice`) a vytvor tuto strukturu.

Pro vytvoreni kategorie: pravym klikni na server -> **Create Category**
Pro vytvoreni kanalu: klikni "+" vedle nazvu kategorie

**Kategorie a kanaly:**

```
-- WELCOME --
  #rules              (read-only: @everyone nemuze psat)
  #announcements      (read-only: Announcement type)
  #introduce-yourself

-- GROWVPD PRO --
  #general
  #bug-reports
  #feature-requests
  #tips-and-tricks
  #beta-testing       (omezeno na roli Beta Tester)

-- SMART AUTOMATION --
  #tuya-smart-life
  #mars-hydro
  #ac-infinity
  #spider-farmer
  #other-devices

-- GROWING --
  #grow-diaries
  #vpd-help
  #nutrients
  #diseases-pests
  #equipment

-- MEDIA --
  #show-your-grow
  #timelapse
  #memes

-- LANGUAGES --
  #czech-slovak
  #deutsch
  #espanol
  #other-languages

-- VOICE --
  General Voice       (hlasovy kanal)
  Grow Talk           (hlasovy kanal)
```

#### Nastaveni read-only kanalu

Pro `#rules` a `#announcements`:
1. Klikni na ozubene kolecko vedle kanalu -> **Permissions**
2. Pro roli **@everyone**:
   - **Send Messages**: Zavreno (cervene X)
   - **Add Reactions**: Povoleno (zelena fajfka) -- at mohou reagovat emoji
3. Tvoje role (Developer/Admin) bude mit automaticky pristup

#### Nastaveni #beta-testing (omezeny pristup)

1. Klikni na ozubene kolecko vedle `#beta-testing` -> **Permissions**
2. Pro **@everyone**: **View Channel**: Zavreno
3. Klikni **Add members or roles** -> pridej roli **Beta Tester**
4. Pro **Beta Tester**: **View Channel**: Povoleno

### 3.4 Vytvoreni roli

Server Settings -> **Roles** -> klikni **Create Role**:

| Role         | Barva   | Hex       | Opravneni                          |
|-------------|---------|-----------|-------------------------------------|
| Developer   | Zelena  | `#2E7D32` | Administrator (vsechna opravneni)   |
| Moderator   | Oranzova| `#FF9800` | Manage Messages, Kick Members, Ban  |
| Pro User    | Zlata   | `#FFD700` | zadna extra (vizualni odliseni)     |
| Beta Tester | Fialova | `#9C27B0` | pristup do #beta-testing            |
| Grower      | Zelena  | `#4CAF50` | zadna extra (aktivni clenove)       |
| Seedling    | Svetla  | `#81C784` | zadna extra (default pro nove)      |

**Dulezite nastaveni roli:**
- **Seedling**: zaskrini **Display role members separately** a **Default role** -- kazdemu novemu clenovi se automaticky priradi
- **Developer**: prirad si ji sam (klikni na svuj profil na serveru -> pridej roli)

> **TIP**: Role vytvarej od nejnizsi k nejvyssi. V seznamu roli je dulezite poradi -- vyssi role mohou spravovat nizsi.

### 3.5 Welcome Screen (Uvitaci obrazovka)

Server Settings -> **Community** -> **Welcome Screen**:

1. **Enable Welcome Screen** (Zapnout)
2. **Server Description**: `Welcome to GrowVPD Pro! The community for smart growers.`
3. Pridej kanaly:
   - `#rules` -- "Read the rules first"
   - `#introduce-yourself` -- "Say hi and tell us about your grow"
   - `#general` -- "Chat with the community"
   - `#grow-diaries` -- "Share your grow progress"
   - `#vpd-help` -- "Get help with VPD and climate"

### 3.6 Auto-Moderation

Server Settings -> **AutoMod**:

1. **Block Mention Spam**: zapni, limit 5 zminek
2. **Block Spam Content**: zapni (Discord AI filtr)
3. **Commonly Flagged Words**: zapni s vychozim nastavenim

### 3.7 Boti (volitelne, ale doporuceno)

#### MEE6 (auto-role, welcome, leveling)

1. Jdi na https://mee6.xyz
2. Klikni **Add to Discord**
3. Vyber server GrowVPD Pro
4. Autorizuj
5. V MEE6 dashboardu nastav:
   - **Welcome**: zapni, kanal `#welcome`, zprava: `Welcome {user} to GrowVPD Pro! Check out #rules and #introduce-yourself`
   - **Leveling**: zapni (clenove ziskavaji XP za aktivitu)
   - **Auto-role**: pridej roli **Seedling** novym clenum (pokud nefunguje pres Discord vychozi)

#### Carl-bot (reaction roles)

1. Jdi na https://carl.gg
2. Klikni **Login** -> autorizuj
3. Vyber server GrowVPD Pro
4. **Reaction Roles**: vytvor zpravu v `#rules` nebo `#introduce-yourself`:
   - React s prislusnym emoji pro vyber jazykove role, platformy, atd.
   - Napr.: "React to get notified about your platform: Tuya, Mars Hydro, AC Infinity..."

### 3.8 Discord Widget pro web

1. Server Settings -> **Widget**
2. Zaskrini **Enable Server Widget**
3. **Invite Channel**: vyber `#general`
4. Zkopiruj **Server ID** -- je videt v URL:
   - Kdyz jsi na serveru v prohlizeci, URL je `https://discord.com/channels/XXXXXXXXX/...`
   - To `XXXXXXXXX` je Server ID
   - Alternativne: zapni Developer Mode (User Settings -> Advanced -> Developer Mode), pak pravym klikem na server -> **Copy Server ID**
5. Server ID bude napr.: `1234567890123456789`

#### Nahrazeni placeholderu na webu

V souboru `guides/index.html` je tento iframe:
```html
<iframe src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark" ...>
```

Nahrad `YOUR_SERVER_ID` za skutecne Server ID:

```bash
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"

# Nahrad YOUR_SERVER_ID (nahrad 1234567890123456789 za sve skutecne ID)
sed -i 's|YOUR_SERVER_ID|1234567890123456789|g' guides/index.html
```

Commit a push:
```bash
git add guides/index.html
git commit -m "Add Discord server widget ID"
git push
```

### 3.9 Vytvoreni permanentniho invite linku

Na webu je vsude pouzit link `https://discord.gg/growvpd`. Musis vytvorit tento link:

1. Na serveru jdi do kanalu `#general`
2. Klikni na ikonu postavicky s pluskem (Invite People) vedle nazvu kanalu
3. Dole klikni **Edit invite link**
4. Nastaveni:
   - **Expire After**: **Never** (nikdy)
   - **Max Number of Uses**: **No Limit** (bez limitu)
5. Klikni **Generate a New Link**
6. Zkopiruj link (bude napr. `https://discord.gg/aBcDeFg`)

**Vanity URL** (`discord.gg/growvpd`):
- Vanity URL je k dispozici az po dosazeni **50+ clenu** (nebo s Server Boost Level 1)
- Do te doby pouzij normalni invite link
- Jakmile ziskas 50+ clenu: Server Settings -> **Vanity URL** -> zadej `growvpd`
- Docasne reseni: uprav vsechny `discord.gg/growvpd` na webu na tvuj skutecny invite link:

```bash
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"

# Nahrad discord.gg/growvpd za tvuj skutecny invite link
# (nahrad aBcDeFg za svuj skutecny kod)
find . -name "*.html" -exec sed -i 's|discord.gg/growvpd|discord.gg/aBcDeFg|g' {} \;

git add .
git commit -m "Update Discord invite link"
git push
```

> Jakmile ziskas vanity URL `growvpd`, muzes to pak zase zmenit zpet.

---

## 4. Google Search Console -- Indexace ve vyhledavacich

### 4.1 Pridani webu

1. Jdi na https://search.google.com/search-console
2. Prihlaste se Google uctem
3. Klikni **Add property** (Pridat property)
4. Vyber **Domain** -> zadej `growvpd.pro`
   (Alternativne: **URL prefix** -> `https://growvpd.pro`)

### 4.2 Overeni vlastnictvi domeny

Doporuceno: **DNS TXT zaznam** (nejspolehlivejsi metoda):

1. Google ti zobrazi TXT zaznam, napr.:
   ```
   google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
2. Jdi ke svemu registratorovi domeny
3. Pridej DNS zaznam:
   | Typ | Host/Nazev | Hodnota                                              | TTL  |
   |-----|-----------|------------------------------------------------------|------|
   | TXT | @         | google-site-verification=xxxxxxx...                   | 3600 |
4. Zpet v Search Console klikni **Verify** (Overit)
5. Muze to trvat az par hodin nez se DNS propaguje

### 4.3 Odeslani sitemapy

1. V Search Console klikni na **Sitemaps** v levem menu
2. Do pole zadej: `https://growvpd.pro/sitemap.xml`
3. Klikni **Submit** (Odeslat)
4. Status se zmeni na "Success" az po zpracovani (muze trvat dny)

> Web uz ma pripraveny `sitemap.xml` se vsemi 31 URL adresami a `robots.txt` ktery na sitemapu odkazuje.

### 4.4 Pozadavek na indexaci

Po par dnech:
1. V Search Console klikni na **URL inspection** (Kontrola URL)
2. Zadej `https://growvpd.pro/`
3. Klikni **Request indexing** (Pozadovat indexaci)
4. Opakuj pro klicove stranky:
   - `https://growvpd.pro/guides/`
   - `https://growvpd.pro/guides/vpd-complete-guide.html`
   - `https://growvpd.pro/guides/getting-started.html`

---

## 5. Po nasazeni -- Kontrolni seznam

### Zakladni funkcnost

- [ ] Web funguje na https://growvpd.pro
- [ ] Web funguje na https://www.growvpd.pro (presmeruje na growvpd.pro)
- [ ] HTTPS je aktivni (zeleny zamek v prohlizeci)
- [ ] Favicon (zeleny list) se zobrazuje v zalozce prohlizece
- [ ] Navigace funguje -- vsechny odkazy vedou na spravne stranky
- [ ] Jazykovy prepinac funguje (ikona vlajky vpravo nahore)

### SEO a socialni site

- [ ] OG image funguje -- otestuj na https://cards-dev.twitter.com/validator
- [ ] Zadej URL `https://growvpd.pro` -- mela by se zobrazit karta s obrazkem
- [ ] Over na https://developers.facebook.com/tools/debug/ -- sdileni na Facebooku

### Komentare a komunita

- [ ] Giscus komentare se zobrazuji pod guides clanky
- [ ] Po prihlaseni pres GitHub jde napsat komentar
- [ ] Komentar se objevi v GitHub Discussions
- [ ] Discord widget se zobrazuje v sidebar na guides/index.html
- [ ] Discord invite link (discord.gg/growvpd nebo tvuj vlastni) funguje

### Odkazy na aplikaci

- [ ] Google Play link funguje (po publikaci na Play Store)
- [ ] App Store link funguje (po publikaci na App Store)
- [ ] QR kod na hlavni strance (pokud existuje) vede na spravny odkaz

### Mobile a vykon

- [ ] Otestuj na mobilu -- responsive layout funguje
- [ ] Otestuj na https://pagespeed.web.dev/ -- score by mel byt 90+
- [ ] Otestuj na https://wave.webaim.org/ -- pristupnost (accessibility)

### Vyhledavace

- [ ] Google Search Console -- sitemap odeslana, zadne chyby
- [ ] robots.txt je dostupny na https://growvpd.pro/robots.txt
- [ ] sitemap.xml je dostupna na https://growvpd.pro/sitemap.xml

---

## 6. Aktualizace webu

Po kazde zmene v souborech webu:

```bash
cd "C:/Users/janlo/AndroidStudioProjects/GrowmasterVPDchart/website"

# Zkontroluj co se zmenilo
git status
git diff

# Pridej zmeny
git add .

# Commitni s popisem
git commit -m "Update: popis co se zmenilo"

# Nahraj na GitHub
git push
```

GitHub Pages automaticky nasadi novou verzi do **1-3 minut** po push.

> **TIP**: Sleduj nasazeni na: repozitar -> **Actions** -> uvidis "pages build and deployment" workflow.

---

## 7. Rychly prehled -- co udelat v jakem poradi

1. **Vytvor GitHub repozitar** a nahraj web (sekce 1.1-1.2)
2. **Zapni GitHub Pages** (sekce 1.3)
3. **Over ze web funguje** na github.io URL
4. **Nastav DNS** u registratora domeny (sekce 1.4, krok 2)
5. **Nastav vlastni domenu** v GitHub Settings (sekce 1.4, krok 3)
6. **Pockej na DNS propagaci** a over https://growvpd.pro
7. **Zapni GitHub Discussions** a vytvor kategorie (sekce 2.1-2.2)
8. **Nainstaluj Giscus** a ziskej ID (sekce 2.3-2.4)
9. **Nahrad placeholdery** v HTML souborech (sekce 2.5)
10. **Commitni a pushni zmeny** (sekce 2.6)
11. **Vytvor Discord server** a nastav kanaly (sekce 3.1-3.6)
12. **Pridej Discord widget ID** do webu (sekce 3.8)
13. **Vytvor permanentni invite** a aktualizuj linky (sekce 3.9)
14. **Pridej web do Google Search Console** (sekce 4)
15. **Projdi kontrolni seznam** (sekce 5)

---

## 8. Dulezite URL adresy (pro referenci)

| Co                          | URL                                                    |
|----------------------------|--------------------------------------------------------|
| Web (po nasazeni)          | https://growvpd.pro                                    |
| GitHub repozitar           | https://github.com/TVOJE_USERNAME/growvpd-web          |
| GitHub Pages settings      | https://github.com/TVOJE_USERNAME/growvpd-web/settings/pages |
| GitHub Discussions         | https://github.com/TVOJE_USERNAME/growvpd-web/discussions |
| Giscus konfigurator        | https://giscus.app                                     |
| Giscus GitHub App          | https://github.com/apps/giscus                         |
| Discord server             | https://discord.gg/growvpd                             |
| Google Search Console      | https://search.google.com/search-console               |
| DNS overeni                | https://www.whatsmydns.com/#A/growvpd.pro               |
| PageSpeed test             | https://pagespeed.web.dev/                             |
| OG image test (Twitter)    | https://cards-dev.twitter.com/validator                |
| OG image test (Facebook)   | https://developers.facebook.com/tools/debug/           |
