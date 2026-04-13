var GUIDE_CONTENT = {
  "getting-started": {
    title: "Premiers pas avec GrowVPD Pro",
    body: `
                <h2>Qu'est-ce que GrowVPD Pro ?</h2>
                <p>GrowVPD Pro est une application Android gratuite, fonctionnant hors ligne, qui vous offre tout le nécessaire pour gérer vos cultures d'intérieur. Elle combine un graphique VPD, un journal de culture complet, un guide lumineux PPFD, des calculateurs de nutriments, l'identification des maladies des plantes, des profils d'équipement et l'automatisation des appareils connectés &mdash; le tout dans un téléchargement de seulement 15 Mo. Aucun compte requis, aucune connexion internet nécessaire pour les fonctions principales.</p>
                <p>Que vous soyez un cultivateur débutant ou un cultivateur chevronné avec une installation multi-tentes, l'application s'adapte d'un simple suivi quotidien à un contrôle climatique entièrement automatisé avec Tuya, Mars Hydro, AC Infinity et d'autres appareils connectés.</p>

                <h2>Téléchargement et premier lancement</h2>
                <p>Installez GrowVPD Pro depuis Google Play. Au premier lancement, vous verrez un bref parcours d'accueil qui présente les fonctionnalités principales. Vous pouvez le passer si vous préférez, mais les 30 secondes en valent la peine.</p>
                <p>L'application fonctionne entièrement hors ligne. Vous n'avez besoin d'une connexion internet que si vous souhaitez connecter des appareils intelligents ou partager des données.</p>

                <h2>Les 9 onglets expliqués</h2>
                <p>La barre inférieure vous donne un accès rapide à chaque section de l'application. Voici ce que fait chaque onglet :</p>
                <ol>
                    <li><strong>VPD</strong> &mdash; Carte thermique VPD interactive. Entrez la température et l'humidité pour voir votre valeur VPD, codée par couleur selon le stade de croissance. Compatible avec les capteurs Bluetooth et les appareils connectés.</li>
                    <li><strong>PPFD</strong> &mdash; Luxmètre (utilisant la caméra de votre téléphone) et guide de référence PPFD. Affiche les niveaux de lumière optimaux pour chaque stade de croissance.</li>
                    <li><strong>Automatisation</strong> &mdash; Connectez des appareils intelligents, créez des pièces et des tentes, définissez des règles d'automatisation et surveillez votre environnement en temps réel. C'est une fonctionnalité Pro.</li>
                    <li><strong>Journal</strong> &mdash; Votre journal de culture. Enregistrez des entrées quotidiennes avec température, humidité, VPD, pH, EC, nutriments, photos et notes. Suivez plusieurs cultures simultanément.</li>
                    <li><strong>Modèles</strong> &mdash; Modèles de culture prédéfinis et personnalisés. Démarrez une nouvelle culture à partir d'un modèle pour gagner du temps.</li>
                    <li><strong>Nutriments</strong> &mdash; Calculateur de nutriments pour les programmes d'alimentation courants. Ajustez les ratios par stade de croissance.</li>
                    <li><strong>Guide des plantes</strong> &mdash; Guide visuel de la santé des plantes, des carences, des maladies et des techniques de formation. Inclut le diagnostic de maladies par IA (Pro).</li>
                    <li><strong>Équipement</strong> &mdash; Enregistrez les configurations de vos tentes, lampes, ventilateurs, filtres et autres équipements comme profils réutilisables.</li>
                    <li><strong>Paramètres</strong> &mdash; Thème, langue (11 disponibles), unités, verrouillage par code PIN, sécurité biométrique, comptes connectés et options d'exportation.</li>
                </ol>

                <h2>Configurer votre première culture</h2>
                <p>Rendez-vous dans l'onglet <strong>Journal</strong> et appuyez sur le bouton « + » pour créer une nouvelle culture. On vous demandera :</p>
                <ol>
                    <li><strong>Nom</strong> &mdash; Donnez un nom reconnaissable à votre culture, comme « Tente A - Printemps 2026 ».</li>
                    <li><strong>Variété</strong> &mdash; Entrez la variété ou la souche que vous cultivez.</li>
                    <li><strong>Substrat</strong> &mdash; Sélectionnez votre milieu de culture (terre, coco, hydro, etc.).</li>
                    <li><strong>Taille du pot</strong> &mdash; Entrez la taille du contenant pour que l'application puisse estimer les besoins en eau.</li>
                    <li><strong>Type de lampe</strong> &mdash; Choisissez votre éclairage (LED, HPS, CMH, etc.).</li>
                    <li><strong>Date de début</strong> &mdash; L'application utilise la date du jour par défaut, mais vous pouvez antidater si votre culture a déjà commencé.</li>
                </ol>
                <p>Une fois créée, votre culture apparaît dans la liste du journal. Appuyez dessus pour commencer à ajouter des entrées.</p>

                <blockquote>
                    <strong>Conseil :</strong> Utilisez l'onglet Modèles pour démarrer à partir d'un plan de culture prédéfini. Les modèles incluent des programmes d'alimentation suggérés, des durées de stades et des valeurs VPD cibles.
                </blockquote>

                <h2>Ajouter votre première entrée</h2>
                <p>Dans votre culture, appuyez sur « Ajouter une entrée » pour enregistrer un nouveau jour. Le formulaire d'entrée comprend :</p>
                <ul>
                    <li><strong>Température et humidité</strong> &mdash; Entrez vos relevés. L'application calcule automatiquement le VPD.</li>
                    <li><strong>Stade de croissance</strong> &mdash; Sélectionnez semis, végétatif ou floraison. Cela ajuste les objectifs VPD sur le graphique.</li>
                    <li><strong>pH et EC</strong> &mdash; Suivez la qualité de votre eau ou de votre solution nutritive.</li>
                    <li><strong>PPFD</strong> &mdash; Enregistrez votre mesure d'intensité lumineuse.</li>
                    <li><strong>Nutriments</strong> &mdash; Enregistrez ce que vous avez donné et en quelle quantité.</li>
                    <li><strong>Photos</strong> &mdash; Joignez des photos directement depuis votre appareil photo ou votre galerie. Prenez des photos régulières pour créer une chronologie visuelle.</li>
                    <li><strong>Notes</strong> &mdash; Texte libre pour tout le reste : observations, changements, rappels.</li>
                </ul>
                <p>Après avoir enregistré, vous verrez l'entrée dans la chronologie de votre culture avec la valeur VPD mise en évidence en vert, jaune ou rouge selon votre proximité avec la plage cible.</p>

                <h2>Bases du graphique VPD</h2>
                <p>Passez à l'onglet <strong>VPD</strong> pour voir la carte thermique interactive. Le graphique montre les valeurs VPD sur une plage de températures et de niveaux d'humidité :</p>
                <ul>
                    <li><strong>Cellules vertes</strong> = VPD optimal pour le stade de croissance sélectionné. C'est là que vous voulez être.</li>
                    <li><strong>Cellules bleues</strong> = VPD trop bas (sous-transpiration, risque de moisissure).</li>
                    <li><strong>Cellules jaunes/oranges/rouges</strong> = VPD trop élevé (transpiration excessive, stress de la plante).</li>
                </ul>
                <p>Appuyez sur n'importe quelle cellule pour voir sa température exacte, son humidité et sa valeur VPD. Utilisez le sélecteur de stade en haut pour basculer entre les cibles de semis, végétatif et floraison.</p>
                <p>Si vous avez un capteur Bluetooth de température/humidité, le graphique peut lire les données en direct et afficher votre position actuelle directement sur la carte thermique.</p>

                <h2>Connecter des appareils intelligents (Optionnel)</h2>
                <p>Si vous utilisez Tuya, Mars Hydro, AC Infinity, Spider Farmer ou d'autres appareils connectés compatibles, rendez-vous dans l'onglet <strong>Automatisation</strong> ou <strong>Paramètres &gt; Comptes connectés</strong> pour lier vos appareils. Une fois connectés, vous pouvez :</p>
                <ul>
                    <li>Voir les relevés des capteurs en direct sur le graphique VPD</li>
                    <li>Automatiser ventilateurs, humidificateurs et lampes selon des règles VPD</li>
                    <li>Capturer automatiquement des photos timelapse depuis les caméras Tuya</li>
                </ul>
                <p>L'automatisation intelligente est une fonctionnalité Pro. Consultez notre <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">guide de connexion Tuya</a> ou le <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">guide de connexion Mars Hydro</a> pour des instructions étape par étape.</p>

                <h2>Conseils pour les débutants</h2>
                <blockquote>
                    <strong>Commencez avec un modèle.</strong> Les modèles vous donnent un programme éprouvé à suivre. Vous pourrez toujours personnaliser ensuite.
                </blockquote>
                <blockquote>
                    <strong>Vérifiez le VPD quotidiennement.</strong> Un VPD constant est plus important que d'atteindre un nombre parfait une seule fois. Visez la stabilité dans la zone verte.
                </blockquote>
                <blockquote>
                    <strong>Prenez des photos tous les jours.</strong> Cela semble inutile au début, mais un historique visuel est inestimable pour comparer les cultures, diagnostiquer les problèmes et suivre la progression.
                </blockquote>
                <blockquote>
                    <strong>Enregistrez les nutriments et le pH.</strong> Quand quelque chose va mal, avoir des données historiques rend le dépannage beaucoup plus rapide.
                </blockquote>
                <p>C'est tout ce dont vous avez besoin pour commencer. La meilleure façon d'apprendre l'application est de l'utiliser &mdash; créez une culture, enregistrez quelques entrées et explorez les onglets. L'interface est conçue pour être intuitive, et chaque fonctionnalité est accessible depuis la navigation principale.</p>
`
  },
  "vpd-complete-guide": {
    title: "Comprendre le VPD : Le guide complet pour les cultivateurs d'intérieur",
    body: `
                <h2>Qu'est-ce que le VPD ?</h2>
                <p>VPD signifie <strong>Déficit de Pression de Vapeur</strong>. En termes simples, il mesure le « pouvoir desséchant » de l'air &mdash; avec quelle agressivité l'air extrait l'humidité des feuilles de vos plantes.</p>
                <p>Pensez-y ainsi : votre plante respire à travers de minuscules pores sur ses feuilles appelés stomates. Quand l'air autour de la feuille est sec, l'eau s'évapore rapidement à travers ces pores. Quand l'air est humide, l'évaporation ralentit. Le VPD met un nombre sur cette différence.</p>
                <p>Un VPD plus élevé signifie que l'air extrait l'eau des feuilles plus rapidement. Un VPD plus bas signifie que l'air est presque saturé et que l'évaporation est lente. Les deux extrêmes causent des problèmes. L'objectif est de trouver le point idéal où vos plantes transpirent à un rythme sain et productif.</p>

                <h2>Pourquoi le VPD compte plus que la température ou l'humidité seules</h2>
                <p>La plupart des cultivateurs suivent la température et l'humidité séparément. Le problème est que le même pourcentage d'humidité signifie des choses très différentes à des températures différentes.</p>
                <p>Par exemple, 60% d'humidité relative à 20&deg;C est un environnement complètement différent de 60% d'humidité relative à 30&deg;C. Le VPD capture cette relation en un seul nombre.</p>

                <h2>Comment le VPD est calculé</h2>
                <ol>
                    <li><strong>Pression de vapeur saturante (SVP)</strong> &mdash; La quantité maximale de vapeur d'eau que l'air peut contenir à une température donnée.</li>
                    <li><strong>Pression de vapeur réelle (AVP)</strong> &mdash; La quantité de vapeur d'eau actuellement dans l'air.</li>
                </ol>
                <p><code>VPD = SVP(température foliaire) - AVP(température de l'air, humidité)</code></p>
                <p>GrowVPD Pro gère automatiquement tous ces calculs.</p>

                <h2>Température foliaire vs. température de l'air</h2>
                <p>Les feuilles sont typiquement <strong>1&ndash;3&deg;C plus fraîches</strong> que l'air environnant en raison de la transpiration. Dans GrowVPD Pro, vous pouvez ajuster le décalage de température foliaire dans les paramètres du graphique VPD.</p>

                <blockquote>
                    <strong>Conseil :</strong> Si vous avez un capteur de température intelligent placé au niveau de la canopée, vous obtiendrez des relevés beaucoup plus proches des conditions foliaires réelles qu'un capteur monté sur le mur.
                </blockquote>

                <h2>Zones VPD expliquées</h2>
                <table class="vpd-zones">
                    <thead>
                        <tr>
                            <th>Zone</th>
                            <th>Plage VPD</th>
                            <th>Ce qui se passe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zone-dot zone-blue"></span>Sous-transpiration</td>
                            <td>&lt; 0.4 kPa</td>
                            <td>Air presque saturé. Les stomates se ferment, le transport des nutriments ralentit, le risque de moisissure augmente significativement.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-light-green"></span>Semis / Clone</td>
                            <td>0.4 &ndash; 0.8 kPa</td>
                            <td>Transpiration douce. Idéal pour les semis, les boutures fraîches et les transplants avec des systèmes racinaires limités.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-green"></span>Végétatif</td>
                            <td>0.8 &ndash; 1.2 kPa</td>
                            <td>Transpiration forte et saine. Les plantes poussent vigoureusement, l'absorption des nutriments est efficace.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-dark-green"></span>Floraison</td>
                            <td>1.0 &ndash; 1.5 kPa</td>
                            <td>Optimal pour le développement des fleurs. Un air légèrement plus sec favorise la production de résine et réduit le risque de pourriture des têtes.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-red"></span>Sur-transpiration</td>
                            <td>&gt; 1.5 kPa</td>
                            <td>Les plantes perdent de l'eau plus vite que les racines ne peuvent en fournir. Les stomates se ferment défensivement.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Comment lire le graphique VPD dans GrowVPD Pro</h2>
                <ul>
                    <li><strong>Bleu</strong> &mdash; VPD trop bas. L'air est trop humide pour la température.</li>
                    <li><strong>Vert</strong> &mdash; VPD optimal. C'est votre zone cible.</li>
                    <li><strong>Jaune</strong> &mdash; VPD élevé. Les plantes commencent à travailler dur.</li>
                    <li><strong>Orange / Rouge</strong> &mdash; VPD trop élevé. Le stress de la plante est probable.</li>
                </ul>

                <h2>Comment ajuster le VPD</h2>
                <h3>VPD trop élevé (Plantes flétries, feuilles qui s'enroulent vers le haut)</h3>
                <ul>
                    <li><strong>Augmentez l'humidité</strong> &mdash; Faites fonctionner un humidificateur.</li>
                    <li><strong>Baissez la température</strong> &mdash; Augmentez l'extraction, remontez les lampes légèrement.</li>
                    <li><strong>Réduisez le flux d'air direct sur les plantes</strong></li>
                </ul>
                <h3>VPD trop bas (Risque de moisissure, croissance lente)</h3>
                <ul>
                    <li><strong>Diminuez l'humidité</strong> &mdash; Faites fonctionner un déshumidificateur.</li>
                    <li><strong>Augmentez la température</strong></li>
                    <li><strong>Augmentez le flux d'air</strong></li>
                </ul>

                <blockquote>
                    <strong>Conseil Pro :</strong> Si vous utilisez GrowVPD Pro avec l'automatisation intelligente, vous pouvez définir des règles comme « Si le VPD descend en dessous de 0.7 kPa, allumer le déshumidificateur » ou « Si le VPD dépasse 1.4 kPa, activer l'humidificateur ».
                </blockquote>

                <h2>VPD nocturne vs. diurne</h2>
                <p>Quand les lampes s'éteignent, la température baisse mais l'humidité reste souvent la même ou monte. Cela signifie que le VPD chute la nuit &mdash; parfois de manière dramatique. C'est pourquoi de nombreux cultivateurs expérimentés font tourner le déshumidificateur plus fort pendant les périodes sombres.</p>

                <h2>Erreurs VPD courantes</h2>
                <ol>
                    <li><strong>Ignorer la température foliaire.</strong> Utiliser uniquement la température de l'air surestime le VPD.</li>
                    <li><strong>Ne pas ajuster selon le stade de croissance.</strong></li>
                    <li><strong>Mesurer au mauvais endroit.</strong> Placez votre capteur là où se trouvent les plantes.</li>
                    <li><strong>Chercher un seul nombre parfait.</strong> La constance compte plus que la précision.</li>
                    <li><strong>Oublier la nuit.</strong> La gestion du VPD ne s'arrête pas quand les lampes s'éteignent.</li>
                </ol>

                <h2>Utiliser le VPD avec l'automatisation intelligente</h2>
                <p>L'onglet Automatisation de GrowVPD Pro vous permet de créer des règles basées sur le VPD qui contrôlent automatiquement vos appareils connectés. Le moteur d'automatisation inclut l'hystérésis, des dérogations temporelles et des limites de sécurité.</p>
`
  },
  "connect-tuya": {
    title: "Comment connecter les appareils Tuya / Smart Life à GrowVPD Pro",
    body: `
                <h2>Quels appareils Tuya / Smart Life fonctionnent ?</h2>
                <p>Tuya est la plateforme derrière des centaines de marques domotiques en marque blanche. Si votre appareil fonctionne avec l'application <strong>Tuya</strong> ou <strong>Smart Life</strong>, il fonctionnera très probablement avec GrowVPD Pro. Les appareils couramment utilisés incluent :</p>
                <ul>
                    <li><strong>Capteurs de température/humidité</strong> &mdash; Capteurs WiFi qui transmettent temp et HR au cloud. Ils alimentent le graphique VPD en données en direct.</li>
                    <li><strong>Prises intelligentes</strong> &mdash; Allument et éteignent humidificateurs, déshumidificateurs, ventilateurs ou chauffages selon les règles d'automatisation.</li>
                    <li><strong>Caméras intelligentes</strong> &mdash; Les caméras compatibles Tuya peuvent capturer automatiquement des instantanés et les sauvegarder dans votre journal de culture.</li>
                    <li><strong>Interrupteurs et variateurs intelligents</strong> &mdash; Contrôlez lampes, pompes et autres équipements.</li>
                    <li><strong>Capteurs d'humidité du sol, moniteurs CO2</strong> &mdash; Tout appareil Tuya qui rapporte des données environnementales.</li>
                </ul>

                <h2>Prérequis</h2>
                <ul>
                    <li>GrowVPD Pro avec un <strong>abonnement Pro</strong> actif</li>
                    <li>Vos appareils Tuya/Smart Life déjà configurés et fonctionnels dans l'application officielle Tuya ou Smart Life</li>
                    <li>Une connexion WiFi stable</li>
                    <li>Un compte développeur sur la plateforme Tuya IoT (gratuit &mdash; instructions ci-dessous)</li>
                </ul>

                <h2>Étapes de connexion</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Obtenir les identifiants développeur Tuya</h3>
                    <p>GrowVPD Pro se connecte à vos appareils via l'API Tuya Cloud. Vous avez besoin d'un <strong>Access ID</strong> et d'un <strong>Access Secret</strong> de la plateforme Tuya IoT :</p>
                    <ol>
                        <li>Rendez-vous sur <strong>iot.tuya.com</strong> et créez un compte gratuit.</li>
                        <li>Dans la barre latérale, allez dans <strong>Cloud &gt; Development</strong> et créez un nouveau Cloud Project.</li>
                        <li>Choisissez <strong>Smart Home</strong> comme industrie et sélectionnez la région de votre centre de données.</li>
                        <li>Dans l'onglet <strong>API Products</strong>, assurez-vous que <strong>IoT Core</strong> et <strong>Smart Home Device Management</strong> sont souscrits (gratuits).</li>
                        <li>Allez dans l'onglet <strong>Devices</strong> et liez votre compte de l'application Tuya/Smart Life.</li>
                        <li>Sur la page <strong>Overview</strong> du projet, copiez votre <strong>Access ID/Client ID</strong> et <strong>Access Secret/Client Secret</strong>.</li>
                    </ol>
                </div>

                <blockquote>
                    <strong>Conseil :</strong> La région que vous sélectionnez dans Tuya IoT doit correspondre à la région de votre compte d'application Tuya/Smart Life. Des régions qui ne correspondent pas sont la cause la plus courante des erreurs « Aucun appareil trouvé ».
                </blockquote>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Lier le compte Tuya dans GrowVPD Pro</h3>
                    <p>Ouvrez GrowVPD Pro et allez dans <strong>Paramètres &gt; Comptes connectés &gt; Tuya</strong>. Entrez votre Access ID et Access Secret, puis sélectionnez votre région (EU, US ou CN). Appuyez sur <strong>Connecter</strong>.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Découvrir vos appareils</h3>
                    <p>Allez dans l'onglet <strong>Automatisation</strong> et appuyez sur <strong>Ajouter des appareils</strong>. L'application scanne votre compte Tuya lié et liste tous les appareils disponibles.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Attribuer les appareils aux pièces et tentes</h3>
                    <p>Organisez vos appareils en pièces et tentes pour une gestion claire :</p>
                    <ol>
                        <li>Créez une <strong>Pièce</strong> (ex. : « Garage », « Sous-sol », « Chambre »).</li>
                        <li>À l'intérieur de la pièce, créez une <strong>Tente</strong> (ex. : « Tente A 120x120 », « Tente Végétatif »).</li>
                        <li>Attribuez votre capteur à la tente.</li>
                        <li>Attribuez les actionneurs (prises intelligentes, interrupteurs) à la même tente.</li>
                    </ol>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Vérifier la connexion</h3>
                    <p>Une fois attribués, les données en direct de votre capteur devraient apparaître dans le tableau de bord de la tente en quelques secondes. Vérifiez en contrôlant :</p>
                    <ul>
                        <li>La tente affiche la température et l'humidité actuelles</li>
                        <li>La valeur VPD est calculée et affichée</li>
                        <li>Appuyer sur une prise intelligente l'allume/éteint avec succès</li>
                    </ul>
                </div>

                <h2>Dépannage</h2>
                <h3>« Aucun appareil trouvé » après la connexion</h3>
                <ul>
                    <li><strong>Vérifiez votre région.</strong> La région dans GrowVPD Pro doit correspondre au centre de données Tuya IoT.</li>
                    <li><strong>Vérifiez les identifiants.</strong> Ils sont sensibles à la casse.</li>
                    <li><strong>Liez votre compte d'application.</strong> Scannez le QR code depuis votre application Tuya ou Smart Life.</li>
                    <li><strong>Vérifiez les souscriptions API.</strong></li>
                </ul>

                <h3>« Appareil hors ligne »</h3>
                <ul>
                    <li>Vérifiez que l'appareil est connecté au WiFi et sous tension.</li>
                    <li>Ouvrez l'application Tuya/Smart Life et vérifiez que l'appareil y apparaît en ligne.</li>
                    <li>Redémarrez l'appareil (débranchez, attendez 10 secondes, rebranchez).</li>
                </ul>

                <h2>Instantanés automatiques des caméras Tuya</h2>
                <p>Si vous avez une caméra compatible Tuya, GrowVPD Pro peut automatiquement capturer des instantanés périodiques et les sauvegarder dans votre journal de culture. C'est idéal pour créer des séquences timelapse sans aucun effort manuel.</p>

                <div class="warning-box">
                    <strong>Note :</strong> Toute communication avec les appareils Tuya nécessite le WiFi et un accès internet. Les appareils Tuya utilisent l'API Tuya Cloud &mdash; ils ne peuvent pas être contrôlés localement sans internet.
                </div>
`
  },
  "connect-mars-hydro": {
  title: "Comment connecter les appareils Mars Hydro à GrowVPD Pro",
  body: `
                <h2>Quels appareils Mars Hydro fonctionnent ?</h2>
                <p>GrowVPD Pro prend en charge la gamme <strong>iConnect</strong> de Mars Hydro : ventilateurs en ligne (0&ndash;100%), lampes LED (variation), capteurs environnementaux et contr&ocirc;leurs.</p>

                <div class="important-box">
                    <strong>GrowVPD Pro appaire les appareils directement</strong> &mdash; l'application MarsPro n'est PAS n&eacute;cessaire. Le Bluetooth (BLE) est utilis&eacute; une seule fois pendant l'appairage directement dans GrowVPD Pro, ensuite tout le contr&ocirc;le passe par WiFi/MQTT.
                </div>

                <h2>Pr&eacute;requis</h2>
                <ul>
                    <li>GrowVPD Pro avec un <strong>abonnement Pro</strong> actif</li>
                    <li>Appareil(s) Mars Hydro iConnect</li>
                    <li>R&eacute;seau WiFi stable (2,4 GHz)</li>
                    <li>Compte Mars Hydro (cr&eacute;ez-en un sur <strong>marshydro.com</strong> si vous n'en avez pas)</li>
                </ul>

                <h2>Comment fonctionne la connexion</h2>
                <p>Mars Hydro utilise le <strong>protocole MQTT</strong> &mdash; rapide et fiable pour les appareils IoT. Les commandes arrivent en quelques secondes.</p>

                <h2>&Eacute;tapes de connexion</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Lier le compte Mars Hydro dans GrowVPD Pro</h3>
                    <p><strong>Param&egrave;tres &gt; Comptes connect&eacute;s &gt; Mars Hydro</strong>. Entrez l'email et le mot de passe de votre compte Mars Hydro. Pas encore de compte ? Cr&eacute;ez-en un sur <strong>marshydro.com</strong>. Appuyez sur <strong>Connecter</strong>.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Mettre l'appareil en mode d'appairage</h3>
                    <p>Pour les lampes avec variateur : tournez de OFF &agrave; 75%+ et retour &agrave; OFF, r&eacute;p&eacute;tez 2&ndash;3 fois rapidement jusqu'au clignotement (intensit&eacute; 0%&ndash;100%). Pour les autres appareils, maintenez le bouton selon le manuel.</p>
                    <div class="warning-box">
                        <strong>Attention :</strong> EXT est juste &agrave; c&ocirc;t&eacute; de OFF sur le bouton &mdash; visez OFF, pas EXT. Clignotement = mode appairage. <strong>5&ndash;10 secondes</strong> pour lancer l'appairage dans GrowVPD Pro.
                    </div>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>D&eacute;couvrir et appairer dans GrowVPD Pro</h3>
                    <p>Onglet <strong>Automatisation &gt; Ajouter des appareils &gt; Mars Hydro</strong>. L'app lance un scan BLE et trouve votre appareil. S&eacute;lectionnez-le et GrowVPD Pro enverra automatiquement vos identifiants WiFi.</p>
                </div>

                <blockquote>
                    <strong>Conseil :</strong> Activez le Bluetooth et accordez les autorisations Bluetooth et localisation &agrave; GrowVPD Pro. Le scan BLE sur Android n&eacute;cessite l'autorisation de localisation.
                </blockquote>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Attribuer aux pi&egrave;ces et tentes</h3>
                    <ul>
                        <li>Cr&eacute;ez ou s&eacute;lectionnez une <strong>Pi&egrave;ce</strong></li>
                        <li>Cr&eacute;ez ou s&eacute;lectionnez une <strong>Tente</strong></li>
                        <li>Attribuez les capteurs et actionneurs Mars Hydro</li>
                    </ul>
                    <p>Vous pouvez m&eacute;langer des appareils de diff&eacute;rentes marques dans la m&ecirc;me tente &mdash; un capteur Tuya peut piloter un ventilateur Mars Hydro.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Tester le contr&ocirc;le</h3>
                    <ul>
                        <li><strong>Ventilateur</strong> &mdash; r&eacute;gler la vitesse, r&eacute;ponse en 1&ndash;3 secondes.</li>
                        <li><strong>Lampe LED</strong> &mdash; r&eacute;gler la variation.</li>
                        <li><strong>Capteurs</strong> &mdash; v&eacute;rifier la mise &agrave; jour des donn&eacute;es.</li>
                    </ul>
                </div>

                <h2>BLE vs. WiFi</h2>
                <ul>
                    <li><strong>BLE</strong> &mdash; <strong>une seule fois</strong> lors de l'appairage dans GrowVPD Pro.</li>
                    <li><strong>WiFi + MQTT</strong> &mdash; tout le contr&ocirc;le et l'automatisation en continu.</li>
                    <li>Apr&egrave;s la config, <strong>plus besoin de Bluetooth</strong>.</li>
                </ul>

                <h2>D&eacute;pannage</h2>

                <h3>&laquo; Appareil non trouv&eacute; &raquo; lors du scan BLE</h3>
                <ul>
                    <li>Bluetooth activ&eacute; ? Autorisations (Bluetooth + localisation) accord&eacute;es ?</li>
                    <li>R&eacute;p&eacute;tez la s&eacute;quence variateur (OFF&rarr;75%&rarr;OFF). Fen&ecirc;tre : 5&ndash;10 secondes.</li>
                    <li>Restez pr&egrave;s de l'appareil (2&ndash;3 m&egrave;tres) pendant le scan.</li>
                    <li>Mot de passe chang&eacute; ? Mettez-le &agrave; jour dans les Param&egrave;tres.</li>
                </ul>

                <h3>&laquo; Impossible de contr&ocirc;ler l'appareil &raquo;</h3>
                <ul>
                    <li>V&eacute;rifiez le signal WiFi. Dans les tentes m&eacute;talliques, utilisez un r&eacute;p&eacute;teur WiFi.</li>
                    <li>Red&eacute;marrez l'appareil, attendez 30s pour la reconnexion MQTT.</li>
                    <li>Assurez-vous d'utiliser du WiFi 2,4 GHz.</li>
                </ul>

                <h2>Combiner avec d'autres plateformes</h2>
                <p>Capteur Tuya + ventilateur Mars Hydro, capteur Mars Hydro + prise Tuya, lampe Mars Hydro + ventilateur AC Infinity. Tout depuis le m&ecirc;me onglet Automatisation.</p>

                <div class="warning-box">
                    <strong>Rappel :</strong> Les appareils Mars Hydro WiFi n&eacute;cessitent internet. Sans connexion, l'automatisation se met en pause (les appareils continuent avec leurs derni&egrave;res valeurs).
                </div>
`
},
  "automation-rules": {
    title: "Configurer les règles d'automatisation intelligente dans GrowVPD Pro",
    body: `
            <p>L'une des fonctionnalités les plus puissantes de GrowVPD Pro est la possibilité de créer des règles d'automatisation qui fonctionnent <strong>entre différentes marques</strong>. Vous pouvez utiliser un capteur de température Tuya pour déclencher un ventilateur d'extraction Mars Hydro, ou un capteur AC Infinity pour activer une prise intelligente Tuya contrôlant votre humidificateur. Aucune autre application de culture ne vous offre ce niveau de contrôle inter-marques.</p>

            <h2>Que sont les règles d'automatisation ?</h2>

            <p>Une règle d'automatisation est une instruction simple de cause à effet : <strong>quand une certaine condition est remplie, effectuer une action</strong>. GrowVPD Pro vérifie vos règles toutes les 15 minutes en arrière-plan, donc votre automatisation continue de fonctionner même quand l'application est fermée.</p>

            <p>Chaque règle se compose de trois parties :</p>
            <ol>
                <li><strong>Entrée du capteur</strong> &mdash; quel appareil fournit les données</li>
                <li><strong>Condition</strong> &mdash; quel seuil déclenche la règle</li>
                <li><strong>Action</strong> &mdash; ce que l'appareil doit faire quand la condition est déclenchée, et ce qu'il doit faire quand la condition est rétablie</li>
            </ol>

            <h2>Créer votre première règle d'automatisation</h2>

            <h3>Étape 1 : Sélectionner l'appareil capteur</h3>
            <p>Choisissez quel appareil connecté fournit les données du capteur que vous souhaitez surveiller.</p>

            <h3>Étape 2 : Choisir le type de condition</h3>
            <p>GrowVPD Pro prend en charge 12 types de conditions : VPD, Température, Humidité, CO2, PPFD, Humidité du sol, EC du sol, Température du sol, Température nocturne, Différentiel de température, Taux de variation de l'humidité, Taux de variation du VPD.</p>

            <h3>Étape 3 : Définir la valeur seuil</h3>
            <p>Entrez la valeur qui doit déclencher votre règle.</p>

            <h3>Étape 4 : Configurer l'hystérésis</h3>
            <p>L'hystérésis est une zone tampon qui empêche vos appareils de s'allumer et s'éteindre rapidement.</p>

            <blockquote>
                <strong>Conseil :</strong> Configurez toujours l'hystérésis. Une hystérésis de 0.1 kPa pour le VPD ou 2&deg;C pour la température fonctionne bien pour la plupart des configurations.
            </blockquote>

            <h3>Étape 5 : Sélectionner l'appareil cible</h3>
            <p>L'appareil n'a pas besoin d'être de la même marque que votre capteur.</p>

            <h3>Étape 6 : Définir les actions</h3>
            <ul>
                <li><strong>Action de déclenchement</strong> &mdash; ce qui se passe quand la condition est remplie</li>
                <li><strong>Action de rétablissement</strong> &mdash; ce qui se passe quand la condition revient à la normale</li>
            </ul>

            <h2>Exemples de règles d'automatisation</h2>

            <h3>Contrôle VPD avec appareils de différentes marques</h3>
            <ul>
                <li><strong>Capteur :</strong> Capteur WiFi Tuya de température/humidité</li>
                <li><strong>Condition :</strong> VPD &gt; 1.4 kPa</li>
                <li><strong>Hystérésis :</strong> 0.1 kPa</li>
                <li><strong>Cible :</strong> Humidificateur Mars Hydro (via prise intelligente)</li>
                <li><strong>Action de déclenchement :</strong> Allumer</li>
                <li><strong>Action de rétablissement :</strong> Éteindre (quand VPD descend sous 1.3 kPa)</li>
            </ul>

            <h3>Protection de la température nocturne</h3>
            <ul>
                <li><strong>Condition :</strong> Température &lt; 18&deg;C</li>
                <li><strong>Cible :</strong> Prise intelligente Tuya (contrôlant un chauffage)</li>
                <li><strong>Restriction temporelle :</strong> Heures de lampes éteintes uniquement</li>
            </ul>

            <h2>Fonctionnalités de sécurité</h2>
            <ul>
                <li><strong>Hystérésis sur chaque règle</strong> empêche le cyclage rapide</li>
                <li><strong>Temps minimum d'arrêt</strong> protège les compresseurs</li>
                <li><strong>Temps maximum de fonctionnement</strong> empêche un appareil de rester allumé indéfiniment</li>
                <li><strong>Niveaux de priorité</strong> résolvent les conflits entre règles</li>
                <li><strong>Détection anti-conflit</strong> vous avertit si deux règles pourraient entrer en conflit</li>
            </ul>

            <blockquote>
                <strong>Important :</strong> Les règles d'automatisation communiquent via des APIs cloud. Si votre internet tombe en panne, les règles se mettent en pause et reprennent automatiquement quand la connectivité est rétablie.
            </blockquote>
`
  },
  "grow-diary-guide": {
    title: "Journal de culture : De la graine à la récolte &mdash; Guide complet",
    body: `
            <p>Un journal de culture est l'outil le plus précieux pour améliorer vos résultats au fil du temps. Chaque récolte vous apprend quelque chose &mdash; mais seulement si vous avez enregistré ce qui s'est passé en cours de route.</p>

            <h2>Pourquoi suivre votre culture ?</h2>
            <ul>
                <li><strong>Identifier ce qui fonctionne</strong> &mdash; corréler des programmes de nutriments spécifiques, des plages VPD ou des techniques de formation avec de meilleurs résultats</li>
                <li><strong>Détecter les problèmes tôt</strong></li>
                <li><strong>Prédire le moment de la récolte</strong></li>
                <li><strong>Partager des résultats significatifs</strong></li>
                <li><strong>Construire une base de données personnelle</strong></li>
            </ul>

            <h2>Créer une nouvelle culture</h2>
            <p>Ouvrez l'onglet <strong>Journal</strong> et appuyez sur <strong>+ Nouvelle culture</strong>. Vous entrerez les informations de base : Nom, Variété, Type (photopériode ou autofloraison), Substrat, Taille du pot, Nombre de plantes, Type d'eau.</p>

            <h2>Ajouter des entrées quotidiennes</h2>

            <h3>Données climatiques</h3>
            <ul>
                <li><strong>Température</strong>, <strong>Température nocturne</strong>, <strong>Humidité</strong>, <strong>VPD</strong> (calculé automatiquement)</li>
            </ul>

            <blockquote>
                <strong>Conseil :</strong> Si vous avez des capteurs intelligents connectés, l'application peut remplir automatiquement les données climatiques à partir de la dernière lecture du capteur.
            </blockquote>

            <h3>Données lumineuses</h3>
            <ul>
                <li><strong>PPFD</strong>, <strong>Heures de lumière</strong>, <strong>Distance de la lampe</strong>, <strong>Puissance de la lampe</strong></li>
            </ul>

            <h3>Eau et nutriments</h3>
            <ul>
                <li><strong>Quantité d'eau</strong>, <strong>Température de l'eau</strong>, <strong>pH</strong>, <strong>EC / PPM</strong></li>
                <li><strong>Nutriments</strong> &mdash; sélectionnez parmi plus de 69 engrais de 7 marques. Le calculateur intégré calcule le dosage exact en ml.</li>
            </ul>

            <h2>Stades de croissance</h2>
            <ol>
                <li><strong>Semis</strong></li>
                <li><strong>Végétatif</strong></li>
                <li><strong>Transition</strong></li>
                <li><strong>Floraison</strong></li>
                <li><strong>Floraison tardive</strong></li>
                <li><strong>Récolte</strong></li>
            </ol>

            <h2>Suivi de la récolte</h2>
            <ul>
                <li><strong>Poids frais</strong>, <strong>Poids sec</strong>, <strong>Évaluation des trichomes</strong></li>
            </ul>
            <p>Métriques calculées automatiquement : Grammes par watt, Grammes par plante, Rendement total, Ratio de séchage.</p>

            <h2>Comparer les cultures</h2>
            <p>La fonctionnalité <strong>Comparer</strong> vous permet de visualiser deux cultures côte à côte, semaine par semaine.</p>

            <h2>Exporter votre journal</h2>
            <ul>
                <li><strong>Rapport PDF</strong> &mdash; document formaté avec toutes les entrées, photos, graphiques et résumé de récolte.</li>
                <li><strong>Export JSON</strong> &mdash; données brutes pour analyse dans des tableurs ou des outils personnalisés.</li>
            </ul>
`
  },
  "ppfd-dli-guide": {
    title: "Guide PPFD et DLI pour la culture en intérieur",
    body: `
            <p>La lumière est le moteur de la photosynthèse. Ce qui compte vraiment, c'est la quantité de lumière utilisable qui atteint vos plantes. C'est là qu'interviennent le PPFD et le DLI.</p>

            <h2>Qu'est-ce que le PPFD ?</h2>
            <p><strong>PPFD</strong> signifie <strong>Densité de Flux de Photons Photosynthétiques</strong>. Il mesure le nombre de photons dans la gamme de 400&ndash;700nm qui atteignent un mètre carré de surface chaque seconde. L'unité est <strong>&mu;mol/m&sup2;/s</strong>.</p>

            <h2>Qu'est-ce que le DLI ?</h2>
            <p><strong>DLI</strong> signifie <strong>Intégrale de Lumière Journalière</strong>. Il mesure la <strong>quantité totale de lumière délivrée sur une journée entière</strong>. L'unité est <strong>mol/m&sup2;/jour</strong>.</p>

            <p><code>DLI = PPFD &times; heures &times; 0.0036</code></p>

            <h2>PPFD optimal par stade de croissance</h2>
            <table>
                <thead>
                    <tr><th>Stade</th><th>Plage PPFD</th><th>Programme typique</th><th>DLI cible</th></tr>
                </thead>
                <tbody>
                    <tr><td>Semis / Clones</td><td>100&ndash;300 &mu;mol/m&sup2;/s</td><td>18/6</td><td>12&ndash;18 mol/m&sup2;/jour</td></tr>
                    <tr><td>Végétatif précoce</td><td>300&ndash;400 &mu;mol/m&sup2;/s</td><td>18/6</td><td>18&ndash;25 mol/m&sup2;/jour</td></tr>
                    <tr><td>Végétatif tardif</td><td>400&ndash;600 &mu;mol/m&sup2;/s</td><td>18/6 ou 20/4</td><td>25&ndash;35 mol/m&sup2;/jour</td></tr>
                    <tr><td>Floraison</td><td>600&ndash;900 &mu;mol/m&sup2;/s</td><td>12/12</td><td>30&ndash;40 mol/m&sup2;/jour</td></tr>
                    <tr><td>Floraison + CO2</td><td>900&ndash;1500 &mu;mol/m&sup2;/s</td><td>12/12</td><td>40&ndash;65 mol/m&sup2;/jour</td></tr>
                </tbody>
            </table>

            <blockquote>
                <strong>Note importante sur le CO2 :</strong> Les plantes ne peuvent utiliser efficacement un PPFD supérieur à ~900 &mu;mol/m&sup2;/s que si les niveaux de CO2 sont supplémentés à 1000&ndash;1500 ppm.
            </blockquote>

            <h2>Comment GrowVPD Pro vous aide avec l'éclairage</h2>
            <p>L'onglet guide PPFD/DLI fait les calculs pour vous. La base de données d'équipement contient les spécifications de plus de 200 lampes. Si vous avez un capteur Mars Hydro ou Spider Farmer connecté, GrowVPD Pro peut afficher des <strong>relevés PPFD en direct</strong>.</p>

            <h2>Erreurs d'éclairage courantes</h2>
            <ul>
                <li><strong>Trop de lumière pour les semis</strong> &mdash; Atténuez ou remontez votre lampe significativement les deux premières semaines.</li>
                <li><strong>Pas assez de lumière en floraison</strong> &mdash; Augmentez le PPFD à 650&ndash;900 quand vous passez en floraison.</li>
                <li><strong>Distribution lumineuse inégale</strong> &mdash; Tournez les plantes régulièrement ou utilisez un filet ScrOG.</li>
            </ul>
`
  },
  "equipment-setup": {
    title: "Base de données d'équipement et guide du constructeur de configurations",
    body: `
            <p>GrowVPD Pro rassemble dans son onglet Équipement une base de données de produits, des calculateurs et un constructeur de configurations pour vous aider à planifier et optimiser votre espace de culture.</p>

            <h2>La base de données d'équipement</h2>
            <p><strong>Plus de 200 produits de 47 marques</strong>, couvrant les lampes LED, les tentes, la ventilation, les capteurs et les contrôleurs.</p>

            <h2>Calculateur de nutriments</h2>
            <p>Prend en charge <strong>plus de 69 engrais de 7 marques</strong> : BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi et Atami.</p>

            <h2>Mélangeur de substrats</h2>
            <p>Créez et sauvegardez des recettes personnalisées de substrat.</p>

            <h2>Calculateur de ventilation</h2>
            <p>Dimensionnez correctement votre système d'extraction en fonction du volume de votre tente et des facteurs de correction.</p>

            <h2>Constructeur de configurations</h2>
            <ol>
                <li><strong>Sélectionnez la taille de la tente</strong></li>
                <li><strong>Recommandation de lampe</strong></li>
                <li><strong>Dimensionnement de la ventilation</strong></li>
                <li><strong>Calcul de puissance totale</strong></li>
                <li><strong>Liste d'équipement</strong></li>
            </ol>

            <h2>Profils d'équipement</h2>
            <p>Les profils d'équipement (fonctionnalité Pro) vous permettent de sauvegarder toute la configuration de votre tente comme une configuration réutilisable.</p>

            <h2>Estimateur de rendement</h2>
            <p>Fournit une prédiction approximative basée sur la puissance de la lampe, la taille de la tente, la méthode de culture et le niveau d'expérience. Attendez-vous à 0.5&ndash;1.0 g/W en tant que débutant et 1.0&ndash;1.5+ g/W en tant que cultivateur expérimenté.</p>
`
  },
  "vpd-seedling-clone": {
    title: "VPD pour les semis et les clones : Comment bien faire",
    body: `
                <h2>Pourquoi les semis et les clones nécessitent une attention particulière</h2>
                <p>Les semis et les boutures fraîchement coupées sont le stade le plus vulnérable de toute culture. Leurs systèmes racinaires sont soit sous-développés (semis) soit inexistants (clones).</p>

                <h2>Plage VPD idéale : 0.4&ndash;0.8 kPa</h2>
                <p>Combinaisons pratiques de température et d'humidité :</p>
                <ul>
                    <li><strong>24&deg;C à 80% HR</strong> &rarr; VPD ~0.60 kPa (point idéal)</li>
                    <li><strong>25&deg;C à 85% HR</strong> &rarr; VPD ~0.48 kPa (bon pour les boutures fraîches)</li>
                    <li><strong>23&deg;C à 75% HR</strong> &rarr; VPD ~0.70 kPa</li>
                </ul>

                <h2>Dômes d'humidité : Votre meilleur allié</h2>
                <h3>Bonnes pratiques</h3>
                <ul>
                    <li><strong>Commencez complètement fermé.</strong> Les 2&ndash;3 premiers jours.</li>
                    <li><strong>Ouvrez les aérations progressivement.</strong></li>
                    <li><strong>Retirez le dôme par étapes.</strong></li>
                    <li><strong>Essuyez la condensation quotidiennement.</strong></li>
                </ul>

                <h2>Clones vs. Semis</h2>
                <h3>Clones (Boutures)</h3>
                <ul>
                    <li>VPD cible : <strong>0.4&ndash;0.6 kPa</strong></li>
                    <li>HR : <strong>80&ndash;90%</strong></li>
                    <li>Température : <strong>24&ndash;26&deg;C</strong></li>
                </ul>
                <h3>Semis</h3>
                <ul>
                    <li>VPD cible : <strong>0.5&ndash;0.8 kPa</strong></li>
                    <li>HR : <strong>70&ndash;80%</strong></li>
                    <li>Température : <strong>23&ndash;26&deg;C</strong></li>
                </ul>

                <h2>Transition vers la croissance végétative</h2>
                <p>La transition doit être progressive vers les objectifs VPD végétatifs de <strong>0.8&ndash;1.2 kPa</strong>.</p>

                <blockquote>
                    <strong>Conseil :</strong> GrowVPD Pro vous permet de définir différents objectifs VPD par stade de croissance. Quand vous changez le stade dans votre journal, le graphique VPD met automatiquement à jour la bande cible.
                </blockquote>
`
  },
  "vpd-flowering": {
    title: "VPD pendant la floraison : Prévenir la pourriture et maximiser le rendement",
    body: `
                <h2>Pourquoi la floraison exige un VPD plus élevé</h2>
                <p>Pendant la floraison, les têtes denses créent des poches d'humidité piégée. Si l'humidité relative reste trop élevée, l'eau se condense à l'intérieur de ces têtes. Le résultat est le <strong>botrytis</strong> (pourriture des têtes).</p>

                <h2>VPD idéal par semaine de floraison</h2>
                <h3>Floraison précoce (Semaines 1&ndash;3)</h3>
                <ul>
                    <li><strong>VPD cible :</strong> 1.0&ndash;1.3 kPa</li>
                    <li><strong>Température :</strong> 24&ndash;27&deg;C</li>
                    <li><strong>Humidité :</strong> 55&ndash;65% HR</li>
                </ul>
                <h3>Mi-floraison (Semaines 3&ndash;6)</h3>
                <ul>
                    <li><strong>VPD cible :</strong> 1.2&ndash;1.5 kPa</li>
                    <li><strong>Température :</strong> 23&ndash;26&deg;C</li>
                    <li><strong>Humidité :</strong> 45&ndash;55% HR</li>
                </ul>
                <h3>Floraison tardive (Semaines 6&ndash;9+)</h3>
                <ul>
                    <li><strong>VPD cible :</strong> 1.3&ndash;1.6 kPa</li>
                    <li><strong>Température :</strong> 21&ndash;24&deg;C</li>
                    <li><strong>Humidité :</strong> 40&ndash;50% HR</li>
                </ul>

                <div class="warning-box">
                    <strong>Critique :</strong> Ne pulvérisez jamais d'eau ni de nutriments foliaires sur les têtes pendant la floraison.
                </div>

                <h2>Le problème du pic nocturne</h2>
                <p>Le moment le plus dangereux est la première heure après l'extinction des lampes. La température chute rapidement mais l'humidité ne descend pas aussi vite. Le VPD s'effondre.</p>
                <p>Solutions : faites tourner le déshumidificateur 24h/24 en floraison tardive, utilisez un petit chauffage, automatisez avec GrowVPD Pro.</p>

                <h2>Checklist : Configuration climatique de floraison</h2>
                <ul>
                    <li>Déshumidificateur dimensionné pour le volume de votre tente</li>
                    <li>Ventilateurs oscillants pour un flux d'air indirect</li>
                    <li>Extraction en ligne fonctionnant en continu</li>
                    <li>Capteur au niveau de la canopée</li>
                    <li>Objectif VPD ajusté chaque semaine</li>
                    <li>Stratégie d'humidité nocturne</li>
                </ul>
`
  },
  "night-temperature-vpd": {
    title: "Température nocturne et VPD : Le facteur négligé",
    body: `
                <h2>Le différentiel de température jour/nuit</h2>
                <p>Le <strong>différentiel de température jour/nuit</strong> (DIF) affecte directement l'élongation de la plante, l'expression des couleurs, la préservation des terpènes et le risque de maladies.</p>

                <h2>Comment le DIF affecte vos plantes</h2>
                <h3>Élongation de la tige</h3>
                <ul>
                    <li><strong>DIF positif</strong> (jour plus chaud de 5&ndash;10&deg;C) : Favorise l'élongation.</li>
                    <li><strong>DIF zéro</strong> : Croissance équilibrée.</li>
                    <li><strong>DIF négatif</strong> (nuit plus chaude de 2&ndash;4&deg;C) : Réduit l'élongation, produit des plantes compactes.</li>
                </ul>

                <h3>Expression des couleurs (Anthocyanes)</h3>
                <p>Les couleurs violettes sont déclenchées par des <strong>températures nocturnes fraîches</strong>, typiquement en dessous de 18&deg;C. Le point idéal est 16&ndash;18&deg;C la nuit.</p>

                <h3>Préservation des terpènes</h3>
                <p>Les terpènes les plus délicats commencent à se volatiliser au-dessus de 25&deg;C. Maintenir les températures nocturnes à 18&ndash;21&deg;C réduit la perte de terpènes.</p>

                <h2>Température nocturne idéale par stade</h2>
                <ul>
                    <li><strong>Semis :</strong> Jour 24&ndash;26&deg;C / Nuit 22&ndash;24&deg;C / DIF 2&ndash;3&deg;C</li>
                    <li><strong>Végétatif :</strong> Jour 24&ndash;28&deg;C / Nuit 20&ndash;23&deg;C / DIF 3&ndash;5&deg;C</li>
                    <li><strong>Floraison :</strong> Jour 23&ndash;26&deg;C / Nuit 18&ndash;21&deg;C / DIF 4&ndash;6&deg;C</li>
                </ul>

                <div class="warning-box">
                    <strong>Attention :</strong> Une chute nocturne supérieure à 8&ndash;10&deg;C peut provoquer de la condensation sur les surfaces des plantes et à l'intérieur des têtes.
                </div>

                <h2>L'effondrement du VPD à l'extinction des lampes</h2>
                <p>En une heure, le VPD peut chuter d'un sain 1.53 kPa à un dangereux 0.62 kPa.</p>

                <h2>Stratégies pour la gestion du VPD nocturne</h2>
                <ul>
                    <li>Faites tourner le déshumidificateur 24h/24</li>
                    <li>Utilisez un petit chauffage d'appoint</li>
                    <li>Automatisez avec des règles basées sur le VPD dans GrowVPD Pro</li>
                    <li>Décalez les programmes lumineux dans les installations multi-tentes</li>
                </ul>
`
  },
  "humidity-control-guide": {
    title: "Comment contrôler l'humidité dans votre espace de culture",
    body: `
                <h2>Pourquoi le contrôle de l'humidité est important</h2>
                <p>L'humidité est la moitié de l'équation VPD, et c'est la moitié avec laquelle la plupart des cultivateurs luttent. Un mauvais contrôle de l'humidité entraîne des variations de VPD qui stressent les plantes, favorisent les maladies et réduisent les rendements.</p>

                <h2>Humidificateurs : Quand vous avez besoin de plus d'humidité</h2>
                <p>Types : Ultrasonique (vapeur froide), Évaporatif, Vapeur (vapeur chaude).</p>

                <blockquote>
                    <strong>Conseil :</strong> Placez l'humidificateur à l'extérieur de la tente et canalisez la brume par une entrée passive. Cela évite que des gouttelettes d'eau tombent directement sur les feuilles.
                </blockquote>

                <h2>Déshumidificateurs : Quand vous avez besoin de moins d'humidité</h2>

                <div class="warning-box">
                    <strong>Important :</strong> Les capacités des déshumidificateurs sont typiquement mesurées à 30&deg;C et 80% HR. L'extraction réelle à 23&deg;C et 60% HR est souvent de 40&ndash;60% de la capacité nominale. Achetez toujours plus grand que ce que vous pensez avoir besoin.
                </div>

                <h2>Automatisation basée sur le VPD</h2>
                <p>Le contrôle d'humidité le plus efficace utilise le VPD comme déclencheur, pas les valeurs brutes d'humidité.</p>

                <h2>Référence rapide : Équipement par stade</h2>
                <ul>
                    <li><strong>Semis/Clones :</strong> Dôme d'humidité + petit humidificateur</li>
                    <li><strong>Végétatif :</strong> Humidificateur OU contrôle de l'extraction (cible 60&ndash;70% HR)</li>
                    <li><strong>Floraison précoce :</strong> Déshumidificateur en veille (cible 50&ndash;60% HR)</li>
                    <li><strong>Floraison tardive :</strong> Déshumidificateur 24h/24 (cible 40&ndash;50% HR)</li>
                </ul>
`
  },
  "cross-brand-automation": {
    title: "Automatisation inter-marques : Mélanger Tuya, Mars Hydro et plus",
    body: `
                <h2>Le problème : Les jardins clos</h2>
                <p>Chaque marque d'appareil intelligent a sa propre application, son propre cloud et son propre système d'automatisation. Aucune de ces marques ne communique nativement entre elles.</p>

                <h2>La solution : GrowVPD Pro comme hub central</h2>
                <p>GrowVPD Pro se connecte à <strong>plusieurs plateformes simultanément</strong> et traite tous les appareils comme faisant partie d'un système unifié.</p>
                <p>Plateformes prises en charge : Tuya / Smart Life, AC Infinity, Mars Hydro, Spider Farmer, TP-Link Tapo.</p>

                <h2>Scénarios réels d'automatisation inter-marques</h2>
                <h3>Scénario 1 : Capteur Tuya + Ventilateur Mars Hydro</h3>
                <p>Un capteur WiFi Tuya bon marché dans votre tente et un ventilateur Mars Hydro 6 pouces. Le capteur Tuya alimente les données VPD à GrowVPD Pro, qui envoie des commandes MQTT au ventilateur Mars Hydro.</p>

                <h3>Scénario 2 : Contrôleur AC Infinity + Prise Tuya pour humidificateur</h3>
                <p>Le capteur intégré de votre contrôleur AC Infinity détecte un VPD élevé, la prise Tuya allume l'humidificateur.</p>

                <blockquote>
                    <strong>Insight clé :</strong> GrowVPD Pro ne se soucie pas de quelle marque fournit les données du capteur ou quelle marque reçoit la commande. Une règle VPD est une règle VPD.
                </blockquote>

                <h2>Pourquoi c'est important pour les cultivateurs</h2>
                <p>Vous pouvez acheter le meilleur équipement pour chaque fonction : les capteurs WiFi les moins chers (Tuya), les meilleurs ventilateurs (AC Infinity), les meilleures lampes LED (Mars Hydro ou Spider Farmer), les meilleures caméras (Tapo). Tout est géré depuis un seul tableau de bord.</p>

                <div class="warning-box">
                    <strong>Note :</strong> L'automatisation inter-marques nécessite un abonnement Pro.
                </div>
`
  },
  "automation-troubleshooting": {
    title: "Guide de dépannage de l'automatisation intelligente",
    body: `
                <h2>Problème 1 : L'appareil affiche « Hors ligne »</h2>
                <ol>
                    <li><strong>Vérifiez l'alimentation physique.</strong></li>
                    <li><strong>Vérifiez la connexion WiFi.</strong> Ouvrez l'application native de l'appareil.</li>
                    <li><strong>Redémarrez l'appareil.</strong> Débranchez, attendez 10 secondes, rebranchez.</li>
                    <li><strong>Vérifiez votre routeur.</strong></li>
                    <li><strong>Vérifiez la bande WiFi.</strong> La plupart des appareils ne supportent que le 2.4 GHz.</li>
                </ol>

                <h2>Problème 2 : La règle d'automatisation ne se déclenche pas</h2>
                <ol>
                    <li>Vérifiez le relevé du capteur</li>
                    <li>Vérifiez que la condition est effectivement remplie</li>
                    <li>Vérifiez les fenêtres temporelles de la règle</li>
                    <li>Vérifiez le temps minimum d'arrêt</li>
                    <li>Vérifiez l'appareil cible</li>
                    <li>Vérifiez les règles en conflit</li>
                </ol>

                <h2>Problème 3 : Les relevés du capteur semblent incorrects</h2>
                <p>Causes courantes : placement du capteur, dérive du capteur, exposition directe à la lumière. Utilisez les décalages de calibration dans GrowVPD Pro pour corriger.</p>

                <h2>Problème 4 : La connexion tombe de manière répétée</h2>
                <ul>
                    <li>Rapprochez le routeur WiFi ou ajoutez un répéteur</li>
                    <li>Attribuez des adresses IP statiques aux appareils</li>
                    <li>Utilisez un réseau 2.4 GHz dédié pour les appareils IoT</li>
                </ul>

                <h2>Problème 5 : Token expiré / Échec d'authentification</h2>
                <p>Allez dans Paramètres &gt; Comptes connectés et réauthentifiez-vous.</p>

                <div class="warning-box">
                    <strong>Important :</strong> Ne partagez jamais vos identifiants de plateforme publiquement. GrowVPD Pro stocke les identifiants localement sur votre appareil.
                </div>
`
  },
  "energy-monitoring": {
    title: "Suivi de l'énergie et des coûts pour votre culture",
    body: `
                <h2>Pourquoi suivre l'énergie ?</h2>
                <p>L'électricité est le plus gros coût récurrent de la culture en intérieur. Une seule tente de 120x120 cm peut consommer <strong>8&ndash;15 kWh par jour</strong>.</p>

                <h2>Comment GrowVPD Pro suit l'énergie</h2>
                <p>Deux méthodes : rapport de consommation des prises intelligentes (le plus précis) et estimation à partir de la puissance nominale.</p>

                <h2>Optimiser la consommation d'énergie</h2>
                <ul>
                    <li><strong>Atténuez vos lampes quand c'est possible</strong></li>
                    <li><strong>Dimensionnez correctement votre déshumidificateur</strong></li>
                    <li><strong>Utilisez des ventilateurs à vitesse variable</strong></li>
                    <li><strong>Programmez pour les heures creuses</strong></li>
                </ul>

                <h2>Comparer les cultures par efficacité énergétique</h2>
                <p>La métrique ultime est <strong>grammes par kWh</strong>.</p>
                <ul>
                    <li><strong>Configuration débutant :</strong> 0.5&ndash;0.8 g/kWh</li>
                    <li><strong>Configuration optimisée :</strong> 1.0&ndash;1.5 g/kWh</li>
                    <li><strong>Avancé/commercial :</strong> 1.5&ndash;2.5 g/kWh</li>
                </ul>
`
  },
  "harvest-tracking": {
    title: "Suivi de la récolte : Poids frais, poids sec et efficacité",
    body: `
                <h2>Pourquoi enregistrer les données de récolte ?</h2>
                <p>La récolte est l'aboutissement de semaines ou de mois de travail. Sans enregistrer les résultats, vous n'avez aucun moyen de comparer objectivement vos cultures.</p>

                <h2>Enregistrer la récolte dans GrowVPD Pro</h2>
                <h3>Poids frais</h3>
                <p>Pesez vos têtes fraîchement coupées immédiatement après la récolte. Environ 75&ndash;80% du poids frais est de l'eau.</p>
                <h3>Poids sec</h3>
                <p>Après le séchage (7&ndash;14 jours à 60% HR et 18&ndash;21&deg;C), pesez à nouveau. C'est votre rendement réel.</p>

                <h2>Métriques clés d'efficacité</h2>
                <h3>Grammes par watt (g/W)</h3>
                <ul>
                    <li><strong>En dessous de 0.5 g/W :</strong> Marge d'amélioration.</li>
                    <li><strong>0.5&ndash;1.0 g/W :</strong> Bon.</li>
                    <li><strong>1.0&ndash;1.5 g/W :</strong> Excellent.</li>
                    <li><strong>Au-dessus de 1.5 g/W :</strong> Exceptionnel.</li>
                </ul>

                <h2>Conseils de séchage</h2>
                <ul>
                    <li><strong>Température :</strong> 18&ndash;21&deg;C</li>
                    <li><strong>Humidité :</strong> 55&ndash;65% HR</li>
                    <li><strong>Flux d'air :</strong> Doux, indirect</li>
                    <li><strong>Durée :</strong> 7&ndash;14 jours</li>
                    <li><strong>Obscurité :</strong> Séchez dans une pièce sombre</li>
                </ul>

                <div class="warning-box">
                    <strong>Ne précipitez pas le séchage.</strong> Un séchage rapide en 3&ndash;4 jours détruit les terpènes et produit une fleur âpre au goût d'herbe.
                </div>
`
  },
  "comparing-grows": {
    title: "Comment comparer les cultures et apprendre de vos données",
    body: `
                <h2>La puissance de la comparaison</h2>
                <p>Un seul journal de culture vous dit ce qui s'est passé. <strong>Deux journaux côte à côte</strong> vous disent pourquoi.</p>

                <h2>Utiliser la fonctionnalité de comparaison</h2>
                <ol>
                    <li>Ouvrez l'onglet <strong>Journal de culture</strong></li>
                    <li>Appuyez sur l'icône de comparaison</li>
                    <li>Sélectionnez les deux cultures à comparer</li>
                </ol>

                <h2>Que comparer</h2>
                <ul>
                    <li><strong>Métriques de rendement</strong> : poids sec, g/W, g/plante</li>
                    <li><strong>Constance du VPD</strong></li>
                    <li><strong>Vitesse de croissance</strong></li>
                    <li><strong>Niveaux PPFD</strong></li>
                    <li><strong>Programmes de nutriments</strong></li>
                    <li><strong>Techniques de formation</strong></li>
                </ul>

                <blockquote>
                    <strong>Conseil :</strong> Pour la comparaison la plus significative, ne changez qu'une seule variable entre les cultures.
                </blockquote>

                <h2>Utiliser les modèles pour standardiser</h2>
                <p>Sauvegardez une culture réussie comme modèle. Au fil du temps, vos modèles évoluent en recettes optimisées pour chaque variété.</p>
`
  },
  "photo-documentation": {
    title: "Documentation photo : Créer une chronologie visuelle de votre culture",
    body: `
                <h2>Pourquoi les photos comptent</h2>
                <p>Les chiffres racontent une partie de l'histoire. Les photos racontent le reste. Au cours d'un cycle de culture complet, des photos régulières créent une chronologie visuelle.</p>

                <h2>Quand photographier</h2>
                <ul>
                    <li><strong>Jour 1</strong>, <strong>Début de chaque semaine</strong>, <strong>Tout problème</strong>, <strong>Événements de formation</strong>, <strong>Jour de récolte</strong></li>
                </ul>

                <h3>Instantanés automatiques</h3>
                <p>Si vous utilisez une caméra Tuya ou Tapo connectée, l'application peut capturer des instantanés quotidiens automatiques.</p>

                <h2>Conseils photo pour les espaces de culture</h2>
                <p>Éteignez la lampe de culture et utilisez une lumière blanche neutre. Maintenez des angles constants. Utilisez le mode macro pour les gros plans.</p>

                <h2>La fonctionnalité timelapse</h2>
                <p>GrowVPD Pro peut générer une vidéo timelapse à partir de toutes les photos du journal.</p>

                <h2>Mode confidentialité</h2>
                <p>La fonctionnalité <strong>Confidentialité photo</strong> (Pro) masque les photos de culture de la galerie du système. Combinée avec le verrouillage PIN et le mode furtif, votre documentation reste complètement privée.</p>

                <div class="warning-box">
                    <strong>Rappel de sauvegarde :</strong> Les photos en mode privé ne sont pas sauvegardées par Google Photos. Utilisez la fonctionnalité d'exportation de GrowVPD Pro.
                </div>
`
  },
  "nutrient-deficiency-guide": {
    title: "Guide d'identification des carences en nutriments",
    body: `
                <h2>Avant de diagnostiquer : Vérifiez les bases</h2>
                <ul>
                    <li><strong>Déséquilibre de pH :</strong> Si le pH de la zone racinaire est en dehors de 5.8&ndash;6.5 (hydro/coco) ou 6.0&ndash;7.0 (terre), les nutriments deviennent indisponibles. Corrigez le pH en premier.</li>
                    <li><strong>Sur-arrosage :</strong> Les racines noyées ne peuvent pas absorber les nutriments.</li>
                </ul>

                <h2>Nutriments mobiles vs. immobiles</h2>
                <ul>
                    <li><strong>Nutriments mobiles</strong> (N, P, K, Mg) : Symptômes sur les <strong>feuilles inférieures/anciennes en premier</strong>.</li>
                    <li><strong>Nutriments immobiles</strong> (Ca, Fe, Mn, Zn) : Symptômes sur les <strong>feuilles supérieures/nouvelles en premier</strong>.</li>
                </ul>

                <h2>Azote (N) &mdash; Mobile</h2>
                <p>Jaunissement uniforme des feuilles inférieures. Solution : augmentez l'azote dans l'alimentation.</p>

                <h2>Phosphore (P) &mdash; Mobile</h2>
                <p>Tiges et pétioles violets/rougeâtres, croissance lente. Vérifiez la température de la zone racinaire en premier.</p>

                <h2>Potassium (K) &mdash; Mobile</h2>
                <p>Bords bruns et croustillants sur les feuilles anciennes.</p>

                <h2>Calcium (Ca) &mdash; Immobile</h2>
                <p>Taches brunes sur les feuilles nouvelles. Solution : ajoutez un supplément cal-mag.</p>

                <h2>Magnésium (Mg) &mdash; Mobile</h2>
                <p>Chlorose internervaire sur les feuilles anciennes. Solution : sels d'Epsom 1&ndash;2 g/L.</p>

                <h2>Fer (Fe) &mdash; Immobile</h2>
                <p>Chlorose internervaire sur les feuilles nouvelles. Solution : abaissez le pH dans la bonne plage.</p>

                <h2>Organigramme de diagnostic</h2>
                <ol>
                    <li><strong>Où sont les symptômes ?</strong> Feuilles inférieures = nutriment mobile. Feuilles supérieures = nutriment immobile.</li>
                    <li><strong>Type de symptôme ?</strong> Jaunissement uniforme = azote. Bords bruns = potassium. Internervaire = magnésium (ancien) ou fer (nouveau). Taches = calcium. Tiges violettes = phosphore.</li>
                    <li><strong>Vérifiez le pH en premier.</strong> 80% des carences apparentes sont un blocage par pH.</li>
                </ol>

                <blockquote>
                    <strong>Conseil :</strong> Le diagnostic de maladies par IA de GrowVPD Pro (fonctionnalité Pro) peut analyser des photos de feuilles affectées et suggérer la carence ou la maladie la plus probable.
                </blockquote>
`
  },
  "substrate-mixing": {
    title: "Guide de mélange de substrats : Terre, coco et mélanges personnalisés",
    body: `
                <h2>Pourquoi le substrat est important</h2>
                <p>Le substrat est là où vit votre plante. Il détermine la rétention d'eau, le drainage, l'aération, la disponibilité des nutriments et la santé racinaire.</p>

                <h2>Types de substrats</h2>
                <h3>Terre (Terreau)</h3>
                <p>Pros : Indulgent, tamponne le pH. Contras : Plus lourd, drainage plus lent. pH : 6.0&ndash;7.0.</p>
                <h3>Fibre de coco</h3>
                <p>Pros : Excellente rétention/drainage, réutilisable. Contras : Nécessite des nutriments dès le jour 1, nécessite du cal-mag. pH : 5.8&ndash;6.2.</p>

                <h2>Mélanges populaires</h2>
                <h3>Coco/Perlite standard (70/30)</h3>
                <p>Le mélange le plus populaire. Excellente rétention d'eau pour l'arrosage quotidien.</p>
                <h3>Coco/Perlite haute fréquence (50/50)</h3>
                <p>Draine plus rapidement, nécessite un arrosage plus fréquent.</p>
                <h3>Terre vivante (Super Soil organique)</h3>
                <p>Un mélange organique riche qui nourrit la plante par la biologie du sol.</p>

                <h2>Préparer la fibre de coco</h2>
                <ol>
                    <li><strong>Hydrater</strong> les briques de coco compressées</li>
                    <li><strong>Rincer</strong> jusqu'à ce que l'EC du drainage soit inférieure à 0.5 mS/cm</li>
                    <li><strong>Tamponner</strong> dans une solution cal-mag pendant 8&ndash;12 heures</li>
                    <li><strong>Drainer et mélanger</strong> avec de la perlite</li>
                </ol>

                <div class="warning-box">
                    <strong>Important :</strong> N'utilisez jamais de la fibre de coco directement sans rinçage et tamponnage. La coco non tamponnée volera le calcium et le magnésium de votre solution nutritive.
                </div>

                <h2>Guide de taille de pot</h2>
                <ul>
                    <li><strong>Semis :</strong> 0.5&ndash;1 L</li>
                    <li><strong>Autofloraison :</strong> Pot final 7&ndash;15 L</li>
                    <li><strong>Photopériode (petite tente) :</strong> 11&ndash;15 L</li>
                    <li><strong>Photopériode (grande tente) :</strong> 20&ndash;30 L</li>
                    <li>Les <strong>pots en tissu</strong> sont fortement recommandés</li>
                </ul>
`
  },
  "tent-ventilation-guide": {
    title: "Ventilation de la tente de culture : Guide complet CFM",
    body: `
                <h2>Pourquoi la ventilation est importante</h2>
                <p>La ventilation remplit quatre fonctions critiques : évacuer la chaleur excédentaire, renouveler l'air en CO2, contrôler l'humidité et maintenir une pression négative pour contenir les odeurs.</p>

                <h2>Calculer les besoins en CFM</h2>
                <p>L'objectif est de remplacer tout l'air de votre tente au moins une fois toutes les 1&ndash;3 minutes.</p>

                <h3>Étape 1 : Calculer le volume de la tente</h3>
                <p>120x120x200 cm = ~100 ft3</p>

                <h3>Étape 2 : Appliquer les multiplicateurs</h3>
                <p>Filtre à charbon (x1.25), longueur du conduit et coudes (x1.2), chaleur élevée (x1.2).</p>

                <p>Exemple : 100 ft3 x 1.25 x 1.2 x 1.2 = <strong>180 CFM nécessaires</strong></p>

                <h2>Pression négative</h2>
                <p>Si les parois de votre tente se sucent légèrement vers l'intérieur, vous avez une pression négative. C'est normal et souhaité.</p>

                <h2>Recommandations de ventilateur par taille de tente</h2>
                <ul>
                    <li><strong>60x60 cm :</strong> Ventilateur 4", 100&ndash;150 CFM</li>
                    <li><strong>120x120 cm :</strong> Ventilateur 6", 300&ndash;400 CFM</li>
                    <li><strong>240x120 cm :</strong> Ventilateur 8", 500&ndash;750 CFM</li>
                </ul>

                <h2>Ventilateurs de circulation (à l'intérieur de la tente)</h2>
                <p>Ne pointez pas les ventilateurs directement sur les plantes. Utilisez un flux d'air indirect et oscillant.</p>

                <h2>Erreurs de ventilation courantes</h2>
                <ul>
                    <li>Faire tourner l'extracteur avec une minuterie au lieu de continuellement</li>
                    <li>Sceller toutes les entrées passives</li>
                    <li>Placer le filtre à charbon à l'extérieur de la tente</li>
                    <li>Ignorer la ventilation nocturne</li>
                </ul>
`
  },
  "privacy-security-guide": {
    title: "Confidentialité et sécurité : Verrouillage PIN, Mode furtif et Confidentialité photo",
    body: `
                <h2>Pourquoi la confidentialité est importante pour les cultivateurs</h2>
                <p>GrowVPD Pro offre plusieurs couches de protection de la confidentialité.</p>

                <h2>Verrouillage PIN et authentification biométrique</h2>
                <ol>
                    <li>Ouvrez <strong>Paramètres</strong> &gt; <strong>Sécurité</strong></li>
                    <li>Appuyez sur <strong>Définir le code PIN</strong></li>
                    <li>Entrez un PIN de 4&ndash;6 chiffres</li>
                </ol>
                <p>L'authentification biométrique (empreinte digitale ou reconnaissance faciale) est également disponible.</p>

                <h2>Confidentialité photo</h2>
                <p>Quand la Confidentialité photo est activée, les photos de culture sont stockées dans le répertoire privé de l'application et ne sont pas visibles dans la galerie, Google Photos ou toute autre application média.</p>

                <div class="warning-box">
                    <strong>Avis de sauvegarde :</strong> Les photos en mode privé ne sont pas sauvegardées par les services de sauvegarde automatique. Utilisez la fonctionnalité d'exportation de GrowVPD Pro.
                </div>

                <h2>Mode furtif (Icône déguisée)</h2>
                <p>Le Mode furtif change l'icône et le nom de l'application sur votre écran d'accueil pour qu'elle ne ressemble pas à une application de culture.</p>

                <h2>Sécurité des données</h2>
                <p>GrowVPD Pro stocke toutes les données localement sur votre appareil. Aucun compte cloud, aucun serveur stockant vos données de culture, aucun suivi analytique. Vos données ne quittent jamais votre téléphone sauf si vous les exportez explicitement.</p>

                <h2>Checklist de sécurité</h2>
                <ul>
                    <li>Verrouillage PIN ou biométrique activé</li>
                    <li>Confidentialité photo activée</li>
                    <li>Mode furtif activé</li>
                    <li>Exports réguliers pour la sauvegarde</li>
                    <li>Sécurité au niveau du téléphone (verrouillage d'écran, chiffrement)</li>
                </ul>
`
  },
  "language-setup": {
    title: "Configurer votre langue : 11 langues disponibles",
    body: `
                <h2>Localisation complète, pas une traduction partielle</h2>
                <p>GrowVPD Pro traduit <strong>tout</strong> : chaque bouton, chaque étiquette, chaque guide, chaque infobulle, chaque description de maladie, chaque étiquette du calculateur de nutriments &mdash; les plus de 1 390 chaînes de texte sont entièrement traduites dans les 11 langues prises en charge.</p>

                <h2>Langues disponibles</h2>
                <ul>
                    <li><strong>Anglais (EN)</strong> &mdash; Langue par défaut</li>
                    <li><strong>Tchèque (CS)</strong></li>
                    <li><strong>Allemand (DE)</strong> &mdash; Deutsch</li>
                    <li><strong>Espagnol (ES)</strong> &mdash; Español</li>
                    <li><strong>Néerlandais (NL)</strong> &mdash; Nederlands</li>
                    <li><strong>Français (FR)</strong> &mdash; Français</li>
                    <li><strong>Italien (IT)</strong> &mdash; Italiano</li>
                    <li><strong>Portugais (PT)</strong> &mdash; Português</li>
                    <li><strong>Polonais (PL)</strong> &mdash; Polski</li>
                    <li><strong>Thaï (TH)</strong> &mdash; ไทย</li>
                    <li><strong>Hébreu (HE)</strong> &mdash; עברית (avec prise en charge complète de la mise en page droite à gauche)</li>
                </ul>

                <h2>Comment changer de langue</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Ouvrir les Paramètres</h3>
                    <p>Appuyez sur l'onglet <strong>Paramètres</strong> (icône d'engrenage).</p>
                </div>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Trouver l'option Langue</h3>
                    <p>Faites défiler jusqu'à la section <strong>Général</strong>. Appuyez sur <strong>Langue</strong>.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Sélectionner votre langue</h3>
                    <p>Appuyez sur votre langue préférée. Toute l'interface se met à jour immédiatement &mdash; aucun redémarrage nécessaire.</p>
                </div>

                <blockquote>
                    <strong>Conseil :</strong> Le paramètre de langue est indépendant de la langue système de votre téléphone. Vous pouvez utiliser votre téléphone en anglais mais faire fonctionner GrowVPD Pro en français, ou toute autre combinaison.
                </blockquote>

                <h2>Ce qui est traduit</h2>
                <p>Tous les éléments de l'interface, le graphique VPD, le guide PPFD, le journal de culture, le guide des maladies, le calculateur de nutriments, l'onglet Automatisation, les notifications, les modèles de culture et les messages d'erreur.</p>

                <h2>Prise en charge droite à gauche (RTL) pour l'hébreu</h2>
                <p>GrowVPD Pro prend entièrement en charge la mise en page RTL quand l'hébreu est sélectionné.</p>

                <h2>Langue et données</h2>
                <p>Changer votre langue <strong>n'affecte pas</strong> vos données existantes. Seules les étiquettes de l'interface changent.</p>

                <h2>Qualité de traduction</h2>
                <p>Toutes les traductions sont maintenues par l'équipe de développement avec les contributions de locuteurs natifs. La terminologie technique (VPD, PPFD, DLI, EC, pH) est conservée dans sa forme reconnue internationalement.</p>

                <blockquote>
                    <strong>Vous souhaitez aider à améliorer les traductions ?</strong> Contactez-nous sur Discord si vous remarquez une erreur ou si vous avez une suggestion.
                </blockquote>
`
  }
};
