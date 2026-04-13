var GUIDE_CONTENT = {
  "getting-started": {
    title: "Primeros pasos con GrowVPD Pro",
    body: `
                <h2>¿Qué es GrowVPD Pro?</h2>
                <p>GrowVPD Pro es una aplicación gratuita para Android, que funciona sin conexión, y que te ofrece todo lo necesario para gestionar cultivos de interior. Combina un gráfico de VPD, un diario de cultivo completo, una guía de luz PPFD, calculadoras de nutrientes, identificación de enfermedades de plantas, perfiles de equipamiento y automatización de dispositivos inteligentes &mdash; todo en una descarga de solo 15 MB. No se necesita cuenta ni conexión a internet para las funciones principales.</p>
                <p>Tanto si eres un cultivador novato como si eres un experto con varias carpas, la app se adapta desde un simple registro diario hasta el control climático totalmente automatizado con Tuya, Mars Hydro, AC Infinity y otros dispositivos inteligentes.</p>

                <h2>Descarga y primer inicio</h2>
                <p>Instala GrowVPD Pro desde Google Play. En el primer inicio verás una breve guía de bienvenida que presenta las funciones principales. Puedes saltarla si lo prefieres, pero vale la pena los 30 segundos.</p>
                <p>La app funciona completamente sin conexión. Solo necesitas internet si quieres conectar dispositivos inteligentes o compartir datos.</p>

                <h2>Las 9 pestañas explicadas</h2>
                <p>La barra inferior te da acceso rápido a cada sección de la app. Esto es lo que hace cada pestaña:</p>
                <ol>
                    <li><strong>VPD</strong> &mdash; Mapa de calor interactivo de VPD. Introduce la temperatura y la humedad para ver tu valor de VPD, codificado por colores según la etapa de crecimiento. Compatible con sensores Bluetooth y dispositivos inteligentes.</li>
                    <li><strong>PPFD</strong> &mdash; Medidor de luz (usando la cámara del teléfono) y guía de referencia PPFD. Muestra los niveles óptimos de luz para cada etapa de crecimiento.</li>
                    <li><strong>Automatización</strong> &mdash; Conecta dispositivos inteligentes, crea salas y carpas, configura reglas de automatización y monitoriza tu entorno en tiempo real. Esta es una función Pro.</li>
                    <li><strong>Diario</strong> &mdash; Tu diario de cultivo. Registra entradas diarias con temperatura, humedad, VPD, pH, EC, nutrientes, fotos y notas. Lleva el seguimiento de varios cultivos simultáneamente.</li>
                    <li><strong>Plantillas</strong> &mdash; Plantillas de cultivo predefinidas y personalizadas. Inicia un nuevo cultivo a partir de una plantilla para ahorrar tiempo.</li>
                    <li><strong>Nutrientes</strong> &mdash; Calculadora de nutrientes para programas de alimentación comunes. Ajusta las proporciones por etapa de crecimiento.</li>
                    <li><strong>Guía de plantas</strong> &mdash; Guía visual de salud vegetal, carencias, enfermedades y técnicas de entrenamiento. Incluye diagnóstico de enfermedades con IA (Pro).</li>
                    <li><strong>Equipamiento</strong> &mdash; Guarda las configuraciones de tus carpas, luces, ventiladores, filtros y otros equipos como perfiles reutilizables.</li>
                    <li><strong>Ajustes</strong> &mdash; Tema, idioma (11 disponibles), unidades, bloqueo con PIN, seguridad biométrica, cuentas conectadas y opciones de exportación.</li>
                </ol>

                <h2>Configurar tu primer cultivo</h2>
                <p>Ve a la pestaña <strong>Diario</strong> y toca el botón "+" para crear un nuevo cultivo. Se te pedirá:</p>
                <ol>
                    <li><strong>Nombre</strong> &mdash; Dale un nombre que reconozcas, como "Carpa A - Primavera 2026".</li>
                    <li><strong>Variedad</strong> &mdash; Introduce la variedad o cepa que estás cultivando.</li>
                    <li><strong>Medio</strong> &mdash; Selecciona tu medio de cultivo (tierra, coco, hidro, etc.).</li>
                    <li><strong>Tamaño de maceta</strong> &mdash; Introduce el tamaño del contenedor para que la app pueda estimar las necesidades de agua.</li>
                    <li><strong>Tipo de luz</strong> &mdash; Elige tu luz (LED, HPS, CMH, etc.).</li>
                    <li><strong>Fecha de inicio</strong> &mdash; La app usa la fecha de hoy por defecto, pero puedes retroceder si tu cultivo ya empezó.</li>
                </ol>
                <p>Una vez creado, tu cultivo aparece en la lista del diario. Tócalo para empezar a añadir entradas.</p>

                <blockquote>
                    <strong>Consejo:</strong> Usa la pestaña Plantillas para comenzar desde un plan de cultivo predefinido. Las plantillas incluyen programas de alimentación sugeridos, duraciones de etapas y valores de VPD objetivo.
                </blockquote>

                <h2>Añadir tu primera entrada</h2>
                <p>Dentro de tu cultivo, toca "Añadir entrada" para registrar un nuevo día. El formulario de entrada incluye:</p>
                <ul>
                    <li><strong>Temperatura y humedad</strong> &mdash; Introduce tus lecturas. La app calcula el VPD automáticamente.</li>
                    <li><strong>Etapa de crecimiento</strong> &mdash; Selecciona plántula, vegetativo o floración. Esto ajusta los objetivos de VPD en el gráfico.</li>
                    <li><strong>pH y EC</strong> &mdash; Registra la calidad de tu agua o solución nutritiva.</li>
                    <li><strong>PPFD</strong> &mdash; Registra tu lectura de intensidad lumínica.</li>
                    <li><strong>Nutrientes</strong> &mdash; Registra lo que alimentaste y cuánto.</li>
                    <li><strong>Fotos</strong> &mdash; Adjunta fotos directamente desde tu cámara o galería. Toma fotos regulares para crear una línea temporal visual.</li>
                    <li><strong>Notas</strong> &mdash; Texto libre para cualquier otra cosa: observaciones, cambios, recordatorios.</li>
                </ul>
                <p>Después de guardar, verás la entrada en la línea temporal de tu cultivo con el valor de VPD resaltado en verde, amarillo o rojo según lo cerca que estés del rango objetivo.</p>

                <h2>Conceptos básicos del gráfico de VPD</h2>
                <p>Cambia a la pestaña <strong>VPD</strong> para ver el mapa de calor interactivo. El gráfico muestra los valores de VPD a lo largo de un rango de temperaturas y niveles de humedad:</p>
                <ul>
                    <li><strong>Celdas verdes</strong> = VPD óptimo para la etapa de crecimiento seleccionada. Aquí es donde quieres estar.</li>
                    <li><strong>Celdas azules</strong> = VPD demasiado bajo (baja transpiración, riesgo de moho).</li>
                    <li><strong>Celdas amarillas/naranjas/rojas</strong> = VPD demasiado alto (transpiración excesiva, estrés de la planta).</li>
                </ul>
                <p>Toca cualquier celda para ver su temperatura exacta, humedad y valor de VPD. Usa el selector de etapa en la parte superior para alternar entre los objetivos de plántula, vegetativo y floración.</p>
                <p>Si tienes un sensor Bluetooth de temperatura/humedad, el gráfico puede leer datos en vivo y mostrar tu posición actual directamente en el mapa de calor.</p>

                <h2>Conectar dispositivos inteligentes (Opcional)</h2>
                <p>Si usas Tuya, Mars Hydro, AC Infinity, Spider Farmer u otros dispositivos inteligentes compatibles, ve a la pestaña <strong>Automatización</strong> o <strong>Ajustes &gt; Cuentas conectadas</strong> para vincular tus dispositivos. Una vez conectados, puedes:</p>
                <ul>
                    <li>Ver lecturas de sensores en vivo en el gráfico de VPD</li>
                    <li>Automatizar ventiladores, humidificadores y luces basándote en reglas de VPD</li>
                    <li>Capturar automáticamente fotos de timelapse desde cámaras Tuya</li>
                </ul>
                <p>La automatización inteligente es una función Pro. Consulta nuestra <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">guía de conexión de Tuya</a> o la <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">guía de conexión de Mars Hydro</a> para instrucciones paso a paso.</p>

                <h2>Consejos para principiantes</h2>
                <blockquote>
                    <strong>Empieza con una plantilla.</strong> Las plantillas te dan un programa probado a seguir. Siempre puedes personalizar después.
                </blockquote>
                <blockquote>
                    <strong>Revisa el VPD a diario.</strong> Un VPD constante es más importante que alcanzar un número perfecto una vez. Apunta a la estabilidad dentro de la zona verde.
                </blockquote>
                <blockquote>
                    <strong>Toma fotos todos los días.</strong> Parece innecesario al principio, pero un historial visual es invaluable para comparar cultivos, diagnosticar problemas y seguir el progreso.
                </blockquote>
                <blockquote>
                    <strong>Registra nutrientes y pH.</strong> Cuando algo sale mal, tener datos históricos hace que la resolución de problemas sea mucho más rápida.
                </blockquote>
                <p>Eso es todo lo que necesitas para empezar. La mejor manera de aprender la app es usarla &mdash; crea un cultivo, registra algunas entradas y explora las pestañas. La interfaz está diseñada para ser intuitiva, y cada función es accesible desde la navegación principal.</p>
`
  },
  "vpd-complete-guide": {
    title: "Entendiendo el VPD: La guía completa para cultivadores de interior",
    body: `
                <h2>¿Qué es el VPD?</h2>
                <p>VPD significa <strong>Déficit de Presión de Vapor</strong>. En términos simples, mide cuánto "poder de secado" tiene el aire &mdash; con qué agresividad el aire extrae la humedad de las hojas de tus plantas.</p>
                <p>Piénsalo así: tu planta respira a través de unos pequeños poros en sus hojas llamados estomas. Cuando el aire alrededor de la hoja es seco, el agua se evapora rápidamente a través de estos poros. Cuando el aire es húmedo, la evaporación se ralentiza. El VPD pone un número a esta diferencia.</p>
                <p>Un VPD más alto significa que el aire extrae agua de las hojas más rápido. Un VPD más bajo significa que el aire está casi saturado y la evaporación es lenta. Ambos extremos causan problemas. El objetivo es encontrar el punto ideal donde tus plantas transpiran a un ritmo saludable y productivo.</p>

                <h2>Por qué el VPD importa más que la temperatura o la humedad por separado</h2>
                <p>La mayoría de los cultivadores registran la temperatura y la humedad por separado. El problema es que el mismo porcentaje de humedad significa cosas muy diferentes a diferentes temperaturas.</p>
                <p>Por ejemplo, 60% de humedad relativa a 20&deg;C es un entorno completamente diferente a 60% de humedad relativa a 30&deg;C. A 30&deg;C, el aire puede contener mucha más agua, así que 60% HR todavía significa que el aire tiene un fuerte poder de secado. A 20&deg;C, 60% HR es más suave.</p>
                <p>El VPD captura esta relación en un solo número. En lugar de manejar dos variables e intentar recordar la combinación correcta para cada etapa, puedes monitorizar un solo valor que te dice exactamente cómo experimentan tus plantas el clima.</p>

                <h2>Cómo se calcula el VPD</h2>
                <p>La fórmula detrás del VPD es sencilla una vez que entiendes los componentes:</p>
                <ol>
                    <li><strong>Presión de vapor de saturación (SVP)</strong> &mdash; La cantidad máxima de vapor de agua que el aire puede contener a una temperatura dada. El aire más cálido contiene más. Se calcula a la temperatura de la superficie de la hoja.</li>
                    <li><strong>Presión de vapor real (AVP)</strong> &mdash; La cantidad de vapor de agua actualmente en el aire. Se deriva de la temperatura del aire y la humedad relativa.</li>
                </ol>
                <p>El VPD es la diferencia entre estos dos valores:</p>
                <p><code>VPD = SVP(temperatura de la hoja) - AVP(temperatura del aire, humedad)</code></p>
                <p>GrowVPD Pro maneja todas estas matemáticas automáticamente. Introduces la temperatura y la humedad, y la app muestra tu valor de VPD instantáneamente.</p>

                <h2>Temperatura de la hoja vs. temperatura del aire</h2>
                <p>Este es un detalle que muchos cultivadores pasan por alto. El VPD que importa se calcula en la <strong>superficie de la hoja</strong>, no en tu termómetro colgado en la pared.</p>
                <p>Las hojas suelen estar <strong>1&ndash;3&deg;C más frías</strong> que el aire circundante debido a la transpiración (enfriamiento evaporativo). Bajo luces intensas, la diferencia puede ser menor. En condiciones de poca luz, puede ser mayor.</p>
                <p>En GrowVPD Pro, puedes ajustar el desfase de la temperatura de la hoja en los ajustes del gráfico de VPD. Si tienes un termómetro infrarrojo, mide algunas hojas para encontrar tu desfase real. De lo contrario, el desfase predeterminado de 2&deg;C es un buen punto de partida.</p>

                <blockquote>
                    <strong>Consejo:</strong> Si tienes un sensor de temperatura inteligente colocado a nivel de la canopia, obtendrás lecturas mucho más cercanas a las condiciones reales de la hoja que un sensor montado en la pared o cerca del extractor.
                </blockquote>

                <h2>Zonas de VPD explicadas</h2>
                <p>El VPD se mide en kilopascales (kPa). Estas son las zonas y lo que significan para tus plantas:</p>

                <table class="vpd-zones">
                    <thead>
                        <tr>
                            <th>Zona</th>
                            <th>Rango de VPD</th>
                            <th>Qué sucede</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zone-dot zone-blue"></span>Baja transpiración</td>
                            <td>&lt; 0.4 kPa</td>
                            <td>Aire casi saturado. Los estomas se cierran, el transporte de nutrientes se ralentiza, el riesgo de moho y mildiu aumenta significativamente.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-light-green"></span>Plántula / Clon</td>
                            <td>0.4 &ndash; 0.8 kPa</td>
                            <td>Transpiración suave. Ideal para plántulas, clones recién cortados y trasplantes con sistemas radiculares limitados.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-green"></span>Vegetativo</td>
                            <td>0.8 &ndash; 1.2 kPa</td>
                            <td>Transpiración fuerte y saludable. Las plantas crecen vigorosamente, la absorción de nutrientes es eficiente, los tallos se fortalecen.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-dark-green"></span>Floración</td>
                            <td>1.0 &ndash; 1.5 kPa</td>
                            <td>Óptimo para el desarrollo de las flores. El aire ligeramente más seco fomenta la producción de resina y reduce el riesgo de podredumbre de los cogollos.</td>
                        </tr>
                        <tr>
                            <td><span class="zone-dot zone-red"></span>Transpiración excesiva</td>
                            <td>&gt; 1.5 kPa</td>
                            <td>Las plantas pierden agua más rápido de lo que las raíces pueden suministrar. Los estomas se cierran defensivamente, causando bloqueo de nutrientes, marchitamiento y estrés térmico.</td>
                        </tr>
                    </tbody>
                </table>

                <blockquote>
                    <strong>Importante:</strong> Estos rangos son orientativos, no reglas estrictas. Plantas sanas y bien establecidas con sistemas radiculares fuertes pueden manejar un VPD ligeramente más alto. Las plantas estresadas o bajo luz intensa pueden necesitar el extremo inferior de cada rango.
                </blockquote>

                <h2>Cómo leer el gráfico de VPD en GrowVPD Pro</h2>
                <p>La pestaña VPD de la app muestra un mapa de calor interactivo. El eje horizontal muestra la temperatura, el eje vertical muestra la humedad, y cada celda está coloreada según el valor de VPD resultante.</p>
                <ul>
                    <li><strong>Azul</strong> &mdash; VPD demasiado bajo. El aire es demasiado húmedo para la temperatura.</li>
                    <li><strong>Verde</strong> &mdash; VPD óptimo. Esta es tu zona objetivo.</li>
                    <li><strong>Amarillo</strong> &mdash; VPD alto. Las plantas empiezan a esforzarse.</li>
                    <li><strong>Naranja / Rojo</strong> &mdash; VPD demasiado alto. Es probable que haya estrés en la planta.</li>
                </ul>
                <p>Usa el <strong>selector de etapa</strong> en la parte superior para alternar entre los objetivos de plántula, vegetativo y floración. La zona verde se desplaza según corresponda, porque las plantas jóvenes necesitan un VPD más bajo y las plantas en floración toleran (y se benefician de) un VPD más alto.</p>
                <p>Toca cualquier celda para ver sus valores exactos. Si tienes un sensor inteligente conectado o un sensor Bluetooth, el gráfico resalta tu posición actual con un marcador para que puedas ver de un vistazo dónde te encuentras.</p>

                <h2>Cómo ajustar el VPD</h2>

                <h3>VPD demasiado alto (Plantas marchitas, hojas curvándose hacia arriba)</h3>
                <p>Tu aire es demasiado seco respecto a la temperatura. Para bajar el VPD:</p>
                <ul>
                    <li><strong>Aumenta la humedad</strong> &mdash; Enciende un humidificador, coloca toallas húmedas en la carpa o rocía las paredes (no las plantas directamente durante la floración).</li>
                    <li><strong>Baja la temperatura</strong> &mdash; Aumenta la extracción, sube las luces ligeramente o reduce la intensidad lumínica.</li>
                    <li><strong>Reduce el flujo de aire directo sobre las plantas</strong> &mdash; Ventiladores oscilantes apuntando ligeramente por encima de la canopia en lugar de directamente a las hojas.</li>
                </ul>

                <h3>VPD demasiado bajo (Riesgo de moho, crecimiento lento)</h3>
                <p>Tu aire es demasiado húmedo para la temperatura. Para subir el VPD:</p>
                <ul>
                    <li><strong>Reduce la humedad</strong> &mdash; Enciende un deshumidificador, aumenta la velocidad del extractor, mejora el intercambio de aire.</li>
                    <li><strong>Aumenta la temperatura</strong> &mdash; Pon las luces a máxima potencia, reduce ligeramente la extracción, añade un calefactor pequeño si es necesario.</li>
                    <li><strong>Aumenta el flujo de aire</strong> &mdash; Más movimiento de aire ayuda a evaporar la humedad de las superficies de las hojas.</li>
                </ul>

                <blockquote>
                    <strong>Consejo Pro:</strong> Si usas GrowVPD Pro con automatización inteligente, puedes configurar reglas como "Si el VPD baja de 0.7 kPa, encender el deshumidificador" o "Si el VPD supera 1.4 kPa, activar el humidificador." La app lo gestiona automáticamente a través de la pestaña Automatización.
                </blockquote>

                <h2>VPD de noche vs. de día</h2>
                <p>Cuando las luces se apagan, la temperatura baja pero la humedad suele mantenerse igual o subir (ya que las plantas siguen liberando humedad durante un rato). Esto significa que el VPD baja por la noche &mdash; a veces drásticamente.</p>
                <p>Un VPD que era perfecto con las luces encendidas puede volverse peligrosamente bajo durante las luces apagadas, provocando condensación en las hojas y podredumbre de los cogollos. Por eso muchos cultivadores experimentados:</p>
                <ul>
                    <li>Ponen el deshumidificador más fuerte durante los períodos de oscuridad</li>
                    <li>Mantienen una diferencia de temperatura pequeña entre día y noche (no más de 5&ndash;8&deg;C de caída)</li>
                    <li>Mantienen un buen flujo de aire incluso cuando las luces están apagadas</li>
                </ul>
                <p>En GrowVPD Pro, puedes registrar tanto la temperatura diurna como la nocturna en tus entradas del diario para seguir cómo cambia tu VPD a lo largo del ciclo completo de 24 horas.</p>

                <h2>Errores comunes con el VPD</h2>
                <ol>
                    <li><strong>Ignorar la temperatura de la hoja.</strong> Usar solo la temperatura del aire sobreestima el VPD. Ten en cuenta el desfase de 1&ndash;3&deg;C de la hoja.</li>
                    <li><strong>No ajustar según la etapa de crecimiento.</strong> Las plántulas no pueden manejar el mismo VPD que las plantas en floración. Siempre ajusta tu objetivo a la etapa actual.</li>
                    <li><strong>Medir en el lugar equivocado.</strong> Un sensor en la parte superior de la carpa da lecturas diferentes a uno al nivel de la canopia. Coloca tu sensor donde están las plantas.</li>
                    <li><strong>Perseguir un único número perfecto.</strong> La constancia importa más que la precisión. Mantenerse dentro de un rango de 0.2 kPa de forma constante supera alcanzar 1.0 kPa una vez y oscilar salvajemente.</li>
                    <li><strong>Olvidar la noche.</strong> La gestión del VPD no se detiene cuando las luces se apagan. La noche es cuando ataca el moho.</li>
                </ol>

                <h2>Usar el VPD con automatización inteligente</h2>
                <p>La pestaña Automatización de GrowVPD Pro te permite crear reglas basadas en VPD que controlan tus dispositivos inteligentes automáticamente. Por ejemplo:</p>
                <ul>
                    <li>Si el VPD supera 1.3 kPa, encender el humidificador</li>
                    <li>Si el VPD baja de 0.6 kPa, aumentar la velocidad del extractor</li>
                    <li>Si la temperatura sube por encima de 30&deg;C, atenuar las luces al 80%</li>
                </ul>
                <p>El motor de automatización incluye histéresis (para que los dispositivos no se enciendan y apaguen rápidamente), anulaciones basadas en tiempo y límites de seguridad. Consulta nuestras guías de conexión de <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">Tuya</a> y <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">Mars Hydro</a> para configurar tus dispositivos.</p>
`
  },
  "connect-tuya": {
    title: "Cómo conectar dispositivos Tuya / Smart Life a GrowVPD Pro",
    body: `
                <h2>¿Qué dispositivos Tuya / Smart Life funcionan?</h2>
                <p>Tuya es la plataforma detrás de cientos de marcas de hogar inteligente de marca blanca. Si tu dispositivo funciona con la app <strong>Tuya</strong> o <strong>Smart Life</strong>, lo más probable es que funcione con GrowVPD Pro. Los dispositivos más utilizados incluyen:</p>
                <ul>
                    <li><strong>Sensores de temperatura/humedad</strong> &mdash; Sensores WiFi que reportan temperatura y HR a la nube. Estos alimentan datos en vivo al gráfico de VPD.</li>
                    <li><strong>Enchufes inteligentes</strong> &mdash; Encienden y apagan humidificadores, deshumidificadores, ventiladores o calefactores según las reglas de automatización.</li>
                    <li><strong>Cámaras inteligentes</strong> &mdash; Las cámaras compatibles con Tuya pueden capturar instantáneas automáticamente y guardarlas en tu diario de cultivo.</li>
                    <li><strong>Interruptores y reguladores inteligentes</strong> &mdash; Controla luces, bombas y otros equipos.</li>
                    <li><strong>Sensores de humedad del suelo, monitores de CO2</strong> &mdash; Cualquier dispositivo Tuya que reporte datos ambientales.</li>
                </ul>

                <h2>Requisitos previos</h2>
                <ul>
                    <li>GrowVPD Pro con una <strong>suscripción Pro</strong> activa (la automatización inteligente es una función Pro)</li>
                    <li>Tus dispositivos Tuya/Smart Life ya configurados y funcionando en la app oficial Tuya o Smart Life</li>
                    <li>Una conexión WiFi estable (los dispositivos se comunican a través de la API de Tuya Cloud)</li>
                    <li>Una cuenta de desarrollador en la plataforma Tuya IoT (gratuita &mdash; instrucciones a continuación)</li>
                </ul>

                <h2>Pasos de conexión</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Obtener credenciales de desarrollador de Tuya</h3>
                    <p>GrowVPD Pro se conecta a tus dispositivos a través de la API de Tuya Cloud. Para autorizarlo, necesitas un <strong>Access ID</strong> y un <strong>Access Secret</strong> de la plataforma Tuya IoT:</p>
                    <ol>
                        <li>Ve a <strong>iot.tuya.com</strong> y crea una cuenta gratuita (o inicia sesión si ya tienes una).</li>
                        <li>En la barra lateral, ve a <strong>Cloud &gt; Development</strong> y crea un nuevo Cloud Project.</li>
                        <li>Elige <strong>Smart Home</strong> como industria y selecciona la región de tu centro de datos (Europa Occidental, América del Este, China o India).</li>
                        <li>En la pestaña <strong>API Products</strong>, asegúrate de que <strong>IoT Core</strong> y <strong>Smart Home Device Management</strong> estén suscritos (son gratuitos).</li>
                        <li>Ve a la pestaña <strong>Devices</strong> y vincula tu cuenta de la app Tuya/Smart Life para que el proyecto cloud pueda acceder a tus dispositivos.</li>
                        <li>En la página <strong>Overview</strong> del proyecto, copia tu <strong>Access ID/Client ID</strong> y <strong>Access Secret/Client Secret</strong>.</li>
                    </ol>
                </div>

                <blockquote>
                    <strong>Consejo:</strong> La región que selecciones en Tuya IoT debe coincidir con la región de tu cuenta de la app Tuya/Smart Life. Si tu app está configurada en Europa, elige el centro de datos de Europa Occidental. Regiones que no coinciden son la causa más común de errores "No se encontraron dispositivos".
                </blockquote>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Vincular la cuenta de Tuya en GrowVPD Pro</h3>
                    <p>Abre GrowVPD Pro y ve a <strong>Ajustes &gt; Cuentas conectadas &gt; Tuya</strong>. Introduce tu Access ID y Access Secret, luego selecciona tu región (EU, US o CN). Toca <strong>Conectar</strong>. La app verificará tus credenciales y establecerá una conexión con Tuya Cloud.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Descubrir tus dispositivos</h3>
                    <p>Ve a la pestaña <strong>Automatización</strong> y toca <strong>Añadir dispositivos</strong>. La app escanea tu cuenta de Tuya vinculada y lista todos los dispositivos disponibles con sus nombres, tipos y estado en línea. Toca cualquier dispositivo para añadirlo a GrowVPD Pro.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Asignar dispositivos a salas y carpas</h3>
                    <p>Organiza tus dispositivos en salas y carpas para una gestión clara:</p>
                    <ol>
                        <li>Crea una <strong>Sala</strong> (p.ej., "Garaje", "Sótano", "Habitación").</li>
                        <li>Dentro de la sala, crea una <strong>Carpa</strong> (p.ej., "Carpa A 120x120", "Carpa Vegetativo").</li>
                        <li>Asigna tu sensor a la carpa para que la app sepa qué dispositivo proporciona lecturas para esa carpa.</li>
                        <li>Asigna los actuadores (enchufes inteligentes, interruptores) a la misma carpa para que las reglas de automatización puedan controlarlos.</li>
                    </ol>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Verificar la conexión</h3>
                    <p>Una vez asignados, los datos en vivo de tu sensor deberían aparecer en el panel de la carpa en pocos segundos. Verifica comprobando:</p>
                    <ul>
                        <li>La carpa muestra la temperatura y humedad actuales</li>
                        <li>El valor de VPD se calcula y se muestra</li>
                        <li>Tocar un enchufe inteligente lo enciende/apaga correctamente</li>
                    </ul>
                    <p>Si aparecen los datos en vivo y el control del dispositivo funciona, ya estás listo. Ahora puedes crear reglas de automatización en la pestaña Automatización.</p>
                </div>

                <h2>Solución de problemas</h2>

                <h3>"No se encontraron dispositivos" después de conectar</h3>
                <ul>
                    <li><strong>Verifica tu región.</strong> La región en GrowVPD Pro debe coincidir con el centro de datos que seleccionaste en la plataforma Tuya IoT, que debe coincidir con la región de tu app Tuya/Smart Life.</li>
                    <li><strong>Verifica las credenciales.</strong> Comprueba que copiaste el Access ID y Access Secret correctamente. Son sensibles a mayúsculas y minúsculas.</li>
                    <li><strong>Vincula tu cuenta de la app.</strong> En la plataforma Tuya IoT, ve a tu Cloud Project &gt; Devices &gt; Link Tuya App Account. Escanea el código QR con tu app Tuya o Smart Life para vincularlas.</li>
                    <li><strong>Verifica las suscripciones de API.</strong> Asegúrate de que IoT Core y Smart Home Device Management estén suscritos en la pestaña API Products.</li>
                </ul>

                <h3>"Dispositivo sin conexión"</h3>
                <ul>
                    <li>Verifica que el dispositivo esté conectado al WiFi y encendido.</li>
                    <li>Abre la app Tuya/Smart Life y verifica que el dispositivo aparezca como en línea allí primero.</li>
                    <li>Reinicia el dispositivo (desenchúfalo, espera 10 segundos, vuelve a enchufarlo).</li>
                    <li>Si el dispositivo fue movido recientemente a una nueva red WiFi, vuelve a emparejarlo a través de la app Tuya/Smart Life primero.</li>
                </ul>

                <h3>"Lecturas incorrectas" o el sensor parece impreciso</h3>
                <ul>
                    <li>En GrowVPD Pro, ve a los ajustes del dispositivo y usa el <strong>desfase de calibración</strong> para corregir errores conocidos del sensor. Muchos sensores Tuya baratos se desvían 1&ndash;2&deg;C o 3&ndash;5% HR.</li>
                    <li>Compara con un termómetro/higrómetro de precisión conocida en la misma ubicación durante unas horas.</li>
                    <li>Coloca el sensor al nivel de la canopia, fuera de la luz directa, para las lecturas más útiles.</li>
                </ul>

                <h2>Instantáneas automáticas de cámaras Tuya</h2>
                <p>Si tienes una cámara compatible con Tuya, GrowVPD Pro puede capturar automáticamente instantáneas periódicas y guardarlas en tu diario de cultivo. Esto es ideal para crear secuencias de timelapse sin ningún esfuerzo manual.</p>
                <p>Para habilitarlo, asigna la cámara a una carpa y configura la programación de la cámara en los ajustes de la carpa. Puedes elegir intervalos desde diarios hasta cada dos semanas. Las instantáneas se toman automáticamente y se adjuntan a la entrada correspondiente del diario de cultivo.</p>

                <div class="warning-box">
                    <strong>Nota:</strong> Toda la comunicación con dispositivos Tuya requiere WiFi y acceso a internet. Los dispositivos Tuya usan la API de Tuya Cloud &mdash; no pueden controlarse localmente sin internet. Si tu conexión a internet se cae, las reglas de automatización se pausarán hasta que se restablezca la conexión.
                </div>
`
  },
  "connect-mars-hydro": {
  title: "Cómo conectar dispositivos Mars Hydro a GrowVPD Pro",
  body: `
                <h2>&iquest;Qu&eacute; dispositivos Mars Hydro funcionan?</h2>
                <p>GrowVPD Pro es compatible con la l&iacute;nea <strong>iConnect</strong> de Mars Hydro: ventiladores en l&iacute;nea (0&ndash;100%), luces LED (regulaci&oacute;n), sensores ambientales y controladores.</p>

                <div class="important-box">
                    <strong>GrowVPD Pro empareja los dispositivos directamente</strong> &mdash; la app MarsPro NO es necesaria. BLE se usa una sola vez durante el emparejamiento en GrowVPD Pro, despu&eacute;s todo funciona por WiFi/MQTT.
                </div>

                <h2>Requisitos previos</h2>
                <ul>
                    <li>GrowVPD Pro con <strong>suscripci&oacute;n Pro</strong> activa</li>
                    <li>Dispositivo(s) Mars Hydro iConnect</li>
                    <li>Red WiFi estable (2,4 GHz)</li>
                    <li>Cuenta Mars Hydro (cr&eacute;ala en <strong>marshydro.com</strong> si no tienes)</li>
                </ul>

                <h2>C&oacute;mo funciona la conexi&oacute;n</h2>
                <p>Mars Hydro usa el <strong>protocolo MQTT</strong> &mdash; r&aacute;pido y fiable para IoT. Los comandos llegan al dispositivo en segundos.</p>

                <h2>Pasos de conexi&oacute;n</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Vincular cuenta Mars Hydro en GrowVPD Pro</h3>
                    <p><strong>Ajustes &gt; Cuentas conectadas &gt; Mars Hydro</strong>. Introduce email y contrase&ntilde;a de tu cuenta Mars Hydro. Si no tienes cuenta, cr&eacute;ala en <strong>marshydro.com</strong>. Toca <strong>Conectar</strong>.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Poner el dispositivo en modo de emparejamiento</h3>
                    <p>Para luces con perilla dimmer: gira de OFF a 75%+ y de vuelta a OFF, repite 2&ndash;3 veces r&aacute;pidamente hasta que parpadee (cicla 0%&ndash;100%). Para otros dispositivos, mant&eacute;n pulsado el bot&oacute;n seg&uacute;n el manual.</p>
                    <div class="warning-box">
                        <strong>Advertencia:</strong> EXT est&aacute; justo al lado de OFF en la perilla &mdash; aseg&uacute;rate de llegar a OFF. Parpadeo = modo emparejamiento. <strong>5&ndash;10 segundos</strong> para iniciar en GrowVPD Pro.
                    </div>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Descubrir y emparejar en GrowVPD Pro</h3>
                    <p>Pesta&ntilde;a <strong>Automatizaci&oacute;n &gt; A&ntilde;adir dispositivos &gt; Mars Hydro</strong>. La app escanea por BLE y encuentra tu dispositivo. Selecci&oacute;nalo y GrowVPD Pro enviar&aacute; autom&aacute;ticamente tus credenciales WiFi.</p>
                </div>

                <blockquote>
                    <strong>Consejo:</strong> Activa Bluetooth y concede permisos de Bluetooth y ubicaci&oacute;n a GrowVPD Pro. El escaneo BLE en Android requiere permiso de ubicaci&oacute;n.
                </blockquote>

                <div class="step-card">
                    <span class="step-number">4</span>
                    <h3>Asignar a salas y carpas</h3>
                    <ul>
                        <li>Crea o selecciona una <strong>Sala</strong></li>
                        <li>Crea o selecciona una <strong>Carpa</strong></li>
                        <li>Asigna sensores y actuadores Mars Hydro</li>
                    </ul>
                    <p>Puedes mezclar marcas en la misma carpa &mdash; un sensor Tuya puede activar un ventilador Mars Hydro.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">5</span>
                    <h3>Probar el control</h3>
                    <ul>
                        <li><strong>Ventilador</strong> &mdash; ajustar velocidad, respuesta 1&ndash;3 segundos.</li>
                        <li><strong>Luz LED</strong> &mdash; ajustar atenuaci&oacute;n.</li>
                        <li><strong>Sensores</strong> &mdash; verificar actualizaci&oacute;n de lecturas.</li>
                    </ul>
                </div>

                <h2>BLE vs. WiFi</h2>
                <ul>
                    <li><strong>BLE</strong> &mdash; <strong>solo una vez</strong> durante el emparejamiento en GrowVPD Pro.</li>
                    <li><strong>WiFi + MQTT</strong> &mdash; todo el control y automatizaci&oacute;n continua.</li>
                    <li>Despu&eacute;s, <strong>no se necesita Bluetooth</strong>.</li>
                </ul>

                <h2>Soluci&oacute;n de problemas</h2>

                <h3>&quot;Dispositivo no encontrado&quot; en escaneo BLE</h3>
                <ul>
                    <li>Verifica Bluetooth activado y permisos (Bluetooth + ubicaci&oacute;n).</li>
                    <li>Repite secuencia dimmer (OFF&rarr;75%&rarr;OFF). Ventana: 5&ndash;10 segundos.</li>
                    <li>Mantente cerca (2&ndash;3 metros) durante el escaneo.</li>
                    <li>Actualiza contrase&ntilde;a en Ajustes si la cambiaste.</li>
                </ul>

                <h3>&quot;No puedo controlar el dispositivo&quot;</h3>
                <ul>
                    <li>Verifica se&ntilde;al WiFi. En carpas met&aacute;licas puede ser d&eacute;bil &mdash; usa extensor WiFi.</li>
                    <li>Reinicia dispositivo, espera 30s para reconexión MQTT.</li>
                    <li>Aseg&uacute;rate de usar WiFi 2,4 GHz.</li>
                </ul>

                <h2>Combinar con otras plataformas</h2>
                <p>Automatizaci&oacute;n multiplataforma: sensor Tuya + ventilador Mars Hydro, sensor Mars Hydro + enchufe Tuya, luz Mars Hydro + ventilador AC Infinity. Todo desde la misma pesta&ntilde;a.</p>

                <div class="warning-box">
                    <strong>Recuerda:</strong> Los dispositivos Mars Hydro WiFi requieren internet activo. Sin internet, la automatizaci&oacute;n se pausa (los dispositivos contin&uacute;an con sus &uacute;ltimos valores).
                </div>
`
},
  "automation-rules": {
    title: "Configurar reglas de automatización inteligente en GrowVPD Pro",
    body: `
            <p>Una de las funciones más poderosas de GrowVPD Pro es la capacidad de crear reglas de automatización que funcionan <strong>entre diferentes marcas</strong>. Puedes usar un sensor de temperatura Tuya para activar un ventilador extractor Mars Hydro, o un sensor AC Infinity para activar un enchufe inteligente Tuya que controla tu humidificador. Ninguna otra app de cultivo te ofrece este nivel de control multiplataforma.</p>

            <p>Esta guía te explica todo lo que necesitas saber sobre la configuración de reglas de automatización, desde conceptos básicos hasta configuraciones avanzadas.</p>

            <h2>¿Qué son las reglas de automatización?</h2>

            <p>Una regla de automatización es una instrucción simple de causa y efecto: <strong>cuando se cumple una cierta condición, realiza una acción</strong>. GrowVPD Pro verifica tus reglas cada 15 minutos en segundo plano usando WorkManager de Android, así que tu automatización sigue funcionando incluso cuando la app está cerrada.</p>

            <p>Cada regla consta de tres partes:</p>

            <ol>
                <li><strong>Entrada del sensor</strong> &mdash; qué dispositivo proporciona los datos (temperatura, humedad, VPD, CO2, PPFD, humedad del suelo)</li>
                <li><strong>Condición</strong> &mdash; qué umbral activa la regla (p.ej., el VPD sube por encima de 1.5 kPa)</li>
                <li><strong>Acción</strong> &mdash; qué debe hacer el dispositivo cuando se activa la condición, y qué debe hacer cuando la condición se restaura</li>
            </ol>

            <blockquote>
                <strong>Ventaja clave:</strong> Dado que GrowVPD Pro se comunica con la API cloud de cada marca de forma independiente, tus reglas de automatización pueden combinar dispositivos de Tuya, AC Infinity, Mars Hydro, Spider Farmer y Vivosun en cualquier combinación. El sensor y el dispositivo objetivo no necesitan ser de la misma marca.
            </blockquote>

            <h2>Crear tu primera regla de automatización</h2>

            <p>Abre la <strong>pestaña Automatización</strong> en GrowVPD Pro. Si aún no has configurado una sala y carpa, se te pedirá que crees una primero. Una vez que tu carpa esté configurada, toca el botón <strong>+ Añadir regla</strong>.</p>

            <h3>Paso 1: Seleccionar el dispositivo sensor</h3>

            <p>Elige qué dispositivo conectado proporciona los datos del sensor que quieres monitorizar. Puede ser un sensor independiente (como un sensor WiFi Tuya) o un controlador con sensores integrados (como un AC Infinity Controller 69 Pro). La app te mostrará qué tipos de datos reporta cada dispositivo.</p>

            <h3>Paso 2: Elegir el tipo de condición</h3>

            <p>Selecciona qué quieres monitorizar. GrowVPD Pro soporta 12 tipos de condición:</p>

            <ul>
                <li><strong>VPD</strong> &mdash; Déficit de Presión de Vapor (calculado a partir de temperatura + humedad)</li>
                <li><strong>Temperatura</strong> &mdash; temperatura del aire (por encima o por debajo del umbral)</li>
                <li><strong>Humedad</strong> &mdash; porcentaje de humedad relativa</li>
                <li><strong>CO2</strong> &mdash; concentración de dióxido de carbono en ppm</li>
                <li><strong>PPFD</strong> &mdash; intensidad lumínica en &mu;mol/m&sup2;/s</li>
                <li><strong>Humedad del suelo</strong> &mdash; porcentaje de contenido volumétrico de agua</li>
                <li><strong>EC del suelo</strong> &mdash; conductividad eléctrica del medio de cultivo</li>
                <li><strong>Temperatura del suelo</strong> &mdash; temperatura de la zona radicular</li>
                <li><strong>Temperatura nocturna</strong> &mdash; temperatura durante el período de luces apagadas</li>
                <li><strong>Diferencial de temperatura</strong> &mdash; diferencia entre temperaturas diurnas y nocturnas</li>
                <li><strong>Tasa de cambio de humedad</strong> &mdash; qué tan rápido sube o baja la humedad</li>
                <li><strong>Tasa de cambio de VPD</strong> &mdash; qué tan rápido cambia el VPD</li>
            </ul>

            <h3>Paso 3: Establecer el valor umbral</h3>

            <p>Introduce el valor que debe activar tu regla. Por ejemplo, si quieres activar un ventilador cuando el VPD supere 1.4 kPa, establece el umbral en <code>1.4</code> con una condición "mayor que".</p>

            <p>Algunas condiciones soportan un rango (valores mínimo y máximo). Por ejemplo, podrías querer mantener la humedad entre 55% y 65% durante la floración &mdash; establece el umbral inferior en 55 y el superior en 65.</p>

            <h3>Paso 4: Configurar la histéresis</h3>

            <p>La histéresis es una zona de amortiguación que evita que tus dispositivos se enciendan y apaguen rápidamente. Si tu umbral de VPD es 1.4 kPa con una histéresis de 0.1, la regla se activa en 1.4 pero no se restaura hasta que el VPD baje de 1.3.</p>

            <blockquote>
                <strong>Consejo:</strong> Siempre configura histéresis. Sin ella, una lectura de sensor que fluctúa alrededor de tu umbral (p.ej., 1.39, 1.41, 1.39, 1.41) haría que tu dispositivo se encienda y apague cada 15 minutos. Una histéresis de 0.1 kPa para VPD o 2&deg;C para temperatura funciona bien para la mayoría de las configuraciones.
            </blockquote>

            <h3>Paso 5: Seleccionar el dispositivo objetivo</h3>

            <p>Elige qué dispositivo debe responder cuando se cumpla la condición. Puede ser cualquier dispositivo controlable en tu configuración: un enchufe inteligente, un ventilador extractor, un humidificador, un calefactor o una luz de cultivo. El dispositivo no necesita ser de la misma marca que tu sensor.</p>

            <h3>Paso 6: Definir las acciones</h3>

            <p>Configura dos acciones:</p>

            <ul>
                <li><strong>Acción de activación</strong> &mdash; qué sucede cuando se cumple la condición (p.ej., encender, ajustar ventilador a velocidad 5, ajustar regulador al 80%)</li>
                <li><strong>Acción de restauración</strong> &mdash; qué sucede cuando la condición vuelve a la normalidad (p.ej., apagar, ajustar ventilador a velocidad 2, restaurar estado anterior)</li>
            </ul>

            <h3>Paso 7: Ajustes avanzados opcionales</h3>

            <ul>
                <li><strong>Restricciones de tiempo</strong> &mdash; solo ejecutar esta regla entre ciertas horas (útil para no ejecutar humidificadores durante luces apagadas)</li>
                <li><strong>Filtro de etapa de crecimiento</strong> &mdash; aplicar solo durante etapas específicas (p.ej., solo floración)</li>
                <li><strong>Tiempo máximo de ejecución</strong> &mdash; detener automáticamente después de una duración establecida (importante para generadores de CO2)</li>
                <li><strong>Tiempo mínimo apagado</strong> &mdash; evitar que el dispositivo se encienda de nuevo demasiado pronto (protege compresores)</li>
                <li><strong>Tiempo mínimo encendido</strong> &mdash; asegurar que el dispositivo funcione al menos este tiempo una vez activado</li>
                <li><strong>Nivel de prioridad</strong> &mdash; cuando las reglas entran en conflicto, la de mayor prioridad gana</li>
            </ul>

            <h2>Ejemplos de reglas de automatización</h2>

            <h3>Control de VPD con dispositivos de diferentes marcas</h3>

            <p>Mantén tu VPD en el punto ideal de floración usando una respuesta de humedad:</p>

            <ul>
                <li><strong>Sensor:</strong> Sensor WiFi de temperatura/humedad Tuya</li>
                <li><strong>Condición:</strong> VPD &gt; 1.4 kPa</li>
                <li><strong>Histéresis:</strong> 0.1 kPa</li>
                <li><strong>Objetivo:</strong> Humidificador Mars Hydro (vía enchufe inteligente)</li>
                <li><strong>Acción de activación:</strong> Encender</li>
                <li><strong>Acción de restauración:</strong> Apagar (cuando el VPD baje de 1.3 kPa)</li>
            </ul>

            <h3>Protección de temperatura nocturna</h3>

            <p>Prevenir el estrés por frío durante el período de oscuridad:</p>

            <ul>
                <li><strong>Sensor:</strong> Cualquier sensor de temperatura conectado</li>
                <li><strong>Condición:</strong> Temperatura &lt; 18&deg;C</li>
                <li><strong>Histéresis:</strong> 2&deg;C</li>
                <li><strong>Objetivo:</strong> Enchufe inteligente Tuya (controlando un calefactor)</li>
                <li><strong>Acción de activación:</strong> Encender</li>
                <li><strong>Acción de restauración:</strong> Apagar (cuando la temperatura alcance 20&deg;C)</li>
                <li><strong>Restricción de tiempo:</strong> Solo horas de luces apagadas</li>
            </ul>

            <h3>Enriquecimiento de CO2 con límite de seguridad</h3>

            <p>Aumentar el CO2 durante las luces encendidas mientras se previenen concentraciones peligrosas:</p>

            <ul>
                <li><strong>Sensor:</strong> Sensor de CO2</li>
                <li><strong>Condición:</strong> CO2 &lt; 800 ppm</li>
                <li><strong>Histéresis:</strong> 100 ppm</li>
                <li><strong>Objetivo:</strong> Enchufe inteligente controlando generador de CO2</li>
                <li><strong>Acción de activación:</strong> Encender</li>
                <li><strong>Acción de restauración:</strong> Apagar (cuando CO2 alcance 900 ppm)</li>
                <li><strong>Tiempo máximo de ejecución:</strong> 30 minutos</li>
                <li><strong>Tiempo mínimo apagado:</strong> 15 minutos</li>
                <li><strong>Restricción de tiempo:</strong> Solo horas de luces encendidas</li>
            </ul>

            <h2>Funciones de seguridad</h2>

            <p>GrowVPD Pro incluye varios mecanismos de seguridad para proteger tu cultivo y tu equipo:</p>

            <ul>
                <li><strong>Histéresis en cada regla</strong> previene el ciclado rápido de encendido/apagado que desgasta los relés y estresa las plantas</li>
                <li><strong>Tiempo mínimo apagado</strong> protege dispositivos como compresores de AC que necesitan períodos de enfriamiento</li>
                <li><strong>Tiempo máximo de ejecución</strong> previene que un sensor atascado deje un calefactor encendido indefinidamente</li>
                <li><strong>Niveles de prioridad</strong> resuelven conflictos cuando dos reglas intentan controlar el mismo dispositivo (las reglas de seguridad siempre deben tener la prioridad más alta)</li>
                <li><strong>Detección anti-conflicto</strong> te avisa si dos reglas podrían luchar entre sí (p.ej., una encendiendo un dispositivo mientras otra intenta apagarlo)</li>
            </ul>

            <blockquote>
                <strong>Importante:</strong> Las reglas de automatización se comunican a través de APIs cloud, lo que significa que tus dispositivos necesitan una conexión WiFi activa. Si tu internet se cae, las reglas se pausarán y se reanudarán automáticamente cuando la conectividad se restablezca. Para seguridad crítica (como cortes de temperatura máxima), considera usar las funciones de seguridad integradas de tu dispositivo como respaldo.
            </blockquote>

            <h2>Monitoreo y seguimiento de energía</h2>

            <p>Después de que tus reglas estén en funcionamiento, puedes monitorizar su rendimiento de varias maneras:</p>

            <ul>
                <li><strong>Registro de automatización</strong> &mdash; ve cada evento de activación y restauración con marcas de tiempo y razones</li>
                <li><strong>Seguimiento de energía</strong> &mdash; monitoriza el consumo estimado de energía por dispositivo y por carpa</li>
                <li><strong>Efectividad de las reglas</strong> &mdash; la app rastrea con qué frecuencia se activa cada regla y qué tan estables permanecen tus condiciones</li>
                <li><strong>Analíticas inteligentes</strong> &mdash; ve puntuaciones de estabilidad, costos de energía y alertas predictivas a lo largo del tiempo</li>
            </ul>

            <p>Si una regla se activa con demasiada frecuencia, generalmente significa que tu histéresis es demasiado pequeña o que tu equipo es insuficiente para el espacio. El registro de automatización te ayudará a diagnosticar y refinar tu configuración.</p>
`
  },
  "grow-diary-guide": {
    title: "Diario de cultivo: De la semilla a la cosecha &mdash; Guía completa",
    body: `
            <p>Un diario de cultivo es la herramienta más valiosa para mejorar tus resultados con el tiempo. Cada cosecha te enseña algo &mdash; pero solo si registraste lo que pasó en el camino. El diario de GrowVPD Pro rastrea el clima, los nutrientes, las fotos y los datos de cosecha a lo largo de todo tu ciclo de cultivo, y luego te permite comparar cultivos lado a lado para ver qué realmente hizo la diferencia.</p>

            <h2>¿Por qué registrar tu cultivo?</h2>

            <p>Si alguna vez te preguntaste por qué un cultivo salió mejor que otro, la respuesta generalmente está oculta en los detalles diarios. Los cultivadores que llevan diarios consistentemente reportan mejores rendimientos porque pueden:</p>

            <ul>
                <li><strong>Identificar qué funciona</strong> &mdash; correlacionar programas de nutrientes específicos, rangos de VPD o técnicas de entrenamiento con mejores resultados</li>
                <li><strong>Detectar problemas temprano</strong> &mdash; una caída repentina en el pH o una semana de VPD alto se muestra claramente en tu historial de datos</li>
                <li><strong>Predecir el momento de la cosecha</strong> &mdash; al comparar el cultivo actual con cultivos pasados de la misma variedad, puedes estimar cuántas semanas quedan</li>
                <li><strong>Compartir resultados significativos</strong> &mdash; en lugar de adivinar, puedes mostrar las condiciones exactas que llevaron a un rendimiento particular</li>
                <li><strong>Construir una base de datos personal</strong> &mdash; después de varios cultivos, desarrollas conocimiento específico de cada variedad que ninguna guía genérica puede proporcionar</li>
            </ul>

            <h2>Crear un nuevo cultivo</h2>

            <p>Abre la <strong>pestaña Diario</strong> y toca <strong>+ Nuevo cultivo</strong>. Introducirás la información básica sobre tu planta:</p>

            <ul>
                <li><strong>Nombre</strong> &mdash; dale a tu cultivo un nombre descriptivo (p.ej., "Northern Lights #3 - Verano 2026")</li>
                <li><strong>Variedad</strong> &mdash; la cepa específica que estás cultivando</li>
                <li><strong>Tipo</strong> &mdash; fotoperíodo o autofloreciente (esto afecta las sugerencias de etapa y las recomendaciones de horario de luz)</li>
                <li><strong>Medio</strong> &mdash; tierra, fibra de coco, DWC, NFT, lana de roca, perlita o sustrato personalizado</li>
                <li><strong>Tamaño de maceta</strong> &mdash; en litros o galones</li>
                <li><strong>Número de plantas</strong> &mdash; cuántas plantas en este cultivo</li>
                <li><strong>Tipo de agua</strong> &mdash; del grifo, ósmosis inversa, lluvia o mezcla</li>
            </ul>

            <h2>Añadir entradas diarias</h2>

            <p>El corazón del diario es la entrada diaria. No necesitas rellenar todos los campos cada vez &mdash; registra lo que te importa y lo que tengas tiempo. Con el tiempo, incluso las entradas parciales construyen un historial valioso.</p>

            <h3>Datos climáticos</h3>

            <ul>
                <li><strong>Temperatura</strong> &mdash; temperatura actual del aire (&deg;C o &deg;F)</li>
                <li><strong>Temperatura nocturna</strong> &mdash; temperatura durante luces apagadas (importante para el diferencial día/noche)</li>
                <li><strong>Humedad</strong> &mdash; porcentaje de humedad relativa</li>
                <li><strong>VPD</strong> &mdash; calculado automáticamente a partir de temperatura y humedad; no necesitas introducirlo manualmente</li>
            </ul>

            <blockquote>
                <strong>Consejo:</strong> Si tienes sensores inteligentes conectados (Tuya, AC Infinity, etc.), la app puede auto-rellenar los datos climáticos a partir de la última lectura del sensor. Esto ahorra tiempo y asegura precisión.
            </blockquote>

            <h3>Datos de luz</h3>

            <ul>
                <li><strong>PPFD</strong> &mdash; intensidad lumínica al nivel de la canopia en &mu;mol/m&sup2;/s</li>
                <li><strong>Horas de luz</strong> &mdash; fotoperíodo (p.ej., 18/6, 20/4 o 12/12)</li>
                <li><strong>Distancia de la luz</strong> &mdash; distancia de la luz a la canopia en cm o pulgadas</li>
                <li><strong>Potencia de la luz</strong> &mdash; porcentaje del regulador si aplica</li>
            </ul>

            <h3>Agua y nutrientes</h3>

            <ul>
                <li><strong>Cantidad de agua</strong> &mdash; total de ml o litros</li>
                <li><strong>Temperatura del agua</strong> &mdash; importante para configuraciones hidropónicas (ideal: 18&ndash;22&deg;C)</li>
                <li><strong>pH</strong> &mdash; pH de entrada de tu agua de riego</li>
                <li><strong>EC / PPM</strong> &mdash; concentración de nutrientes (la app convierte entre EC y PPM usando la escala 500/700)</li>
                <li><strong>Nutrientes</strong> &mdash; selecciona entre más de 69 fertilizantes de 7 marcas (BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi, Atami). La calculadora integrada calcula la dosificación exacta en ml según tu volumen de agua y las proporciones recomendadas por el fabricante.</li>
            </ul>

            <h2>Etapas de crecimiento</h2>

            <p>Cada entrada se etiqueta con una etapa de crecimiento. GrowVPD Pro usa seis etapas:</p>

            <ol>
                <li><strong>Plántula</strong> &mdash; desde la germinación hasta que se desarrollan las primeras hojas verdaderas (típicamente 1&ndash;2 semanas)</li>
                <li><strong>Vegetativo</strong> &mdash; crecimiento activo de follaje bajo horas largas de luz (18/6 o 20/4)</li>
                <li><strong>Transición</strong> &mdash; las primeras 1&ndash;2 semanas después del cambio a 12/12 (el período de "estiramiento")</li>
                <li><strong>Floración</strong> &mdash; desarrollo y maduración de los cogollos</li>
                <li><strong>Floración tardía</strong> &mdash; las últimas semanas incluyendo el lavado y la maduración</li>
                <li><strong>Cosecha</strong> &mdash; día de corte y período de secado/curado</li>
            </ol>

            <h2>Seguimiento de la cosecha</h2>

            <p>Cuando llegas a la cosecha, GrowVPD Pro proporciona una entrada de cosecha dedicada con campos para:</p>

            <ul>
                <li><strong>Peso húmedo</strong> &mdash; peso total inmediatamente después del corte (por planta o total)</li>
                <li><strong>Peso seco</strong> &mdash; peso después del secado (el número que importa)</li>
                <li><strong>Evaluación de tricomas</strong> &mdash; porcentaje de tricomas claros, nublados y ámbar en la cosecha</li>
            </ul>

            <p>La app calcula automáticamente las métricas de eficiencia a partir de tus datos de cosecha:</p>

            <ul>
                <li><strong>Gramos por vatio</strong> &mdash; peso seco dividido por vataje de la luz (el estándar de referencia de eficiencia)</li>
                <li><strong>Gramos por planta</strong> &mdash; rendimiento promedio por planta</li>
                <li><strong>Rendimiento total</strong> &mdash; peso seco combinado</li>
                <li><strong>Proporción de secado</strong> &mdash; proporción de peso húmedo a seco (típicamente 3:1 a 5:1)</li>
            </ul>

            <h2>Comparar cultivos</h2>

            <p>Una vez que hayas completado dos o más cultivos, la función <strong>Comparar</strong> te permite verlos lado a lado. Selecciona dos cultivos cualesquiera y ve sus datos superpuestos semana a semana: temperatura, humedad, VPD, nutrientes, altura y rendimiento. Esta es la forma más rápida de entender qué cambió entre un buen cultivo y uno excelente.</p>

            <h2>Exportar tu diario</h2>

            <p>GrowVPD Pro ofrece dos formatos de exportación (función Pro):</p>

            <ul>
                <li><strong>Informe PDF</strong> &mdash; un documento formateado con todas las entradas, fotos, gráficos y resumen de cosecha. Ideal para compartir o archivar.</li>
                <li><strong>Exportación de datos JSON</strong> &mdash; datos crudos en formato JSON para cultivadores que quieran analizar sus datos en hojas de cálculo o herramientas personalizadas.</li>
            </ul>

            <blockquote>
                <strong>Consejo:</strong> Exporta un PDF después de cada cultivo completado y guárdalo en tu almacenamiento en la nube. Incluso si cambias de teléfono, siempre tendrás un registro de tu historial de cultivos.
            </blockquote>
`
  },
  "ppfd-dli-guide": {
    title: "Guía de PPFD y DLI para cultivo de interior",
    body: `
            <p>La luz es el motor de la fotosíntesis, y acertarla es uno de los factores más importantes en tu rendimiento y calidad finales. Pero hablar de luz en términos de vataje es engañoso &mdash; lo que realmente importa es cuánta luz utilizable llega a tus plantas. Ahí es donde entran el PPFD y el DLI.</p>

            <h2>¿Qué es el PPFD?</h2>

            <p><strong>PPFD</strong> significa <strong>Densidad de Flujo de Fotones Fotosintéticos</strong>. Mide el número de fotones en el rango de longitud de onda de 400&ndash;700nm (la luz que las plantas realmente usan para la fotosíntesis) que golpean un metro cuadrado de superficie cada segundo. La unidad es <strong>&mu;mol/m&sup2;/s</strong> (micromoles por metro cuadrado por segundo).</p>

            <p>Piensa en el PPFD como la "velocidad" de entrega de luz. Un PPFD de 600 significa que 600 micromoles de fotones fotosintéticamente activos están golpeando cada metro cuadrado de tu canopia cada segundo.</p>

            <blockquote>
                <strong>Por qué el PPFD importa más que el vataje:</strong> El vataje te dice cuánta electricidad consume una luz, no cuánta luz útil produce. Un LED bien diseñado de 300W puede entregar más PPFD a la canopia que una luz mal diseñada de 600W. Siempre compara las luces por su rendimiento de PPFD a una altura dada, no por su potencia nominal.
            </blockquote>

            <h2>¿Qué es el DLI?</h2>

            <p><strong>DLI</strong> significa <strong>Integral de Luz Diaria</strong>. Mientras que el PPFD mide la intensidad de la luz en un solo momento, el DLI mide la <strong>cantidad total de luz entregada durante un día entero</strong>. La unidad es <strong>mol/m&sup2;/día</strong> (moles por metro cuadrado por día).</p>

            <p>El DLI es importante porque las plantas responden a la luz acumulada, no solo a la intensidad pico. Una planta que recibe 400 &mu;mol/m&sup2;/s durante 18 horas recibe más luz total que una que recibe 600 &mu;mol/m&sup2;/s durante 12 horas &mdash; aunque la segunda tiene un PPFD instantáneo más alto.</p>

            <h3>Fórmula de cálculo del DLI</h3>

            <p><code>DLI = PPFD &times; horas &times; 0.0036</code></p>

            <p>Ejemplo: 500 &mu;mol/m&sup2;/s durante 18 horas: <code>500 &times; 18 &times; 0.0036 = 32.4 mol/m&sup2;/día</code></p>

            <h2>PPFD óptimo por etapa de crecimiento</h2>

            <table>
                <thead>
                    <tr>
                        <th>Etapa de crecimiento</th>
                        <th>Rango de PPFD</th>
                        <th>Horario típico</th>
                        <th>DLI objetivo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Plántulas / Clones</td>
                        <td>100&ndash;300 &mu;mol/m&sup2;/s</td>
                        <td>18/6</td>
                        <td>12&ndash;18 mol/m&sup2;/día</td>
                    </tr>
                    <tr>
                        <td>Vegetativo temprano</td>
                        <td>300&ndash;400 &mu;mol/m&sup2;/s</td>
                        <td>18/6</td>
                        <td>18&ndash;25 mol/m&sup2;/día</td>
                    </tr>
                    <tr>
                        <td>Vegetativo tardío</td>
                        <td>400&ndash;600 &mu;mol/m&sup2;/s</td>
                        <td>18/6 o 20/4</td>
                        <td>25&ndash;35 mol/m&sup2;/día</td>
                    </tr>
                    <tr>
                        <td>Floración</td>
                        <td>600&ndash;900 &mu;mol/m&sup2;/s</td>
                        <td>12/12</td>
                        <td>30&ndash;40 mol/m&sup2;/día</td>
                    </tr>
                    <tr>
                        <td>Floración + CO2</td>
                        <td>900&ndash;1500 &mu;mol/m&sup2;/s</td>
                        <td>12/12</td>
                        <td>40&ndash;65 mol/m&sup2;/día</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                <strong>Nota importante sobre CO2:</strong> Las plantas solo pueden usar PPFD por encima de ~900 &mu;mol/m&sup2;/s eficientemente si los niveles de CO2 se suplementan a 1000&ndash;1500 ppm. Con CO2 ambiental (~420 ppm), la fotosíntesis se satura alrededor de 800&ndash;900 PPFD. Dar más luz sin añadir CO2 desperdicia electricidad y puede causar estrés lumínico.
            </blockquote>

            <h2>Cómo te ayuda GrowVPD Pro con la iluminación</h2>

            <h3>Pestaña de guía PPFD/DLI</h3>

            <p>La guía combinada de PPFD/DLI en GrowVPD Pro hace las matemáticas por ti. Selecciona tu horario de luz (18/6, 20/4, 12/12 o personalizado), y la app te muestra el PPFD necesario para alcanzar cada objetivo de DLI.</p>

            <h3>Base de datos de equipamiento</h3>

            <p>La base de datos integrada contiene especificaciones detalladas de más de 200 luces de marcas que incluyen Mars Hydro, Spider Farmer, AC Infinity, Lumatek, Gavita, SANlight y más. Cada entrada incluye datos reales de PPFD a varias alturas, área de cobertura, eficiencia (PPE en &mu;mol/J) y consumo de energía.</p>

            <h3>PPFD de sensores inteligentes</h3>

            <p>Si tienes un sensor Mars Hydro o Spider Farmer conectado a través de la pestaña Automatización, GrowVPD Pro puede mostrar <strong>lecturas de PPFD en vivo</strong> del sensor montado al nivel de la canopia.</p>

            <h2>Errores comunes de iluminación</h2>

            <h3>Demasiada luz para las plántulas</h3>

            <p>El error número uno de los nuevos cultivadores con LED. Un LED moderno de espectro completo al 100% de potencia y 30 cm puede entregar fácilmente más de 1000 PPFD &mdash; tres a cuatro veces más de lo que una plántula puede manejar. Siempre atenúa o sube tu luz significativamente durante las primeras dos semanas.</p>

            <h3>No suficiente luz durante la floración</h3>

            <p>Si usaste el mismo PPFD durante la floración que en el vegetativo sin considerar el fotoperíodo más corto, tu DLI baja un tercio. Aumenta el PPFD a 650&ndash;900 cuando cambies a floración.</p>

            <h3>Distribución desigual de la luz</h3>

            <p>La mayoría de las luces tienen un punto caliente en el centro y bordes más débiles. Las plantas en las esquinas de tu carpa podrían estar recibiendo la mitad del PPFD de las plantas directamente bajo la luz. Rotar las plantas regularmente o usar una red ScrOG para mantener una canopia plana puede ayudar.</p>
`
  },
  "equipment-setup": {
    title: "Base de datos de equipamiento y guía del constructor de configuraciones",
    body: `
            <p>Elegir el equipo correcto es una de las decisiones más importantes que tomarás como cultivador de interior. GrowVPD Pro reúne en su pestaña de Equipamiento una base de datos de productos, calculadoras y un constructor de configuraciones para ayudarte a planificar y optimizar tu espacio de cultivo.</p>

            <h2>La base de datos de equipamiento</h2>

            <p>GrowVPD Pro incluye una base de datos curada de <strong>más de 200 productos de 47 marcas</strong>, cubriendo todo desde luces LED hasta kits de ventilación completos.</p>

            <h3>Qué incluye</h3>

            <ul>
                <li><strong>Luces LED de cultivo</strong> &mdash; vataje, PPE (eficacia fotónica en &mu;mol/J), PPFD a varias alturas, área de cobertura por tamaño de carpa, tipo de espectro, rango de regulación</li>
                <li><strong>Carpas de cultivo</strong> &mdash; dimensiones, grosor del material, cantidad y tamaños de puertos, reflectividad, capacidad de peso de las barras de soporte</li>
                <li><strong>Ventilación</strong> &mdash; ventiladores en línea (clasificación CFM, nivel de ruido en dB, tipo de controlador de velocidad), filtros de carbón (capacidad CFM, profundidad del lecho de carbón), conductos</li>
                <li><strong>Sensores ambientales</strong> &mdash; parámetros medidos (temp, HR, CO2, PPFD, suelo), conectividad (WiFi, BLE, plataforma cloud), especificaciones de precisión</li>
                <li><strong>Controladores</strong> &mdash; controladores AC Infinity, enchufes inteligentes Tuya, dispositivos iConnect Mars Hydro</li>
            </ul>

            <h2>Calculadora de nutrientes</h2>

            <p>La calculadora de nutrientes integrada soporta <strong>más de 69 fertilizantes de 7 marcas principales</strong>: BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi y Atami.</p>

            <h3>Cómo usarla</h3>

            <ol>
                <li>Selecciona los nutrientes que estás usando de la base de datos</li>
                <li>Introduce tu volumen de agua (litros o galones)</li>
                <li>Elige tu etapa de crecimiento actual (la calculadora ajusta las concentraciones recomendadas)</li>
                <li>La app calcula los <strong>ml exactos de cada nutriente</strong> que debes añadir a tu depósito</li>
            </ol>

            <h2>Mezclador de sustratos</h2>

            <p>Si mezclas tu propio medio de cultivo, el mezclador de sustratos te ayuda a crear y guardar recetas personalizadas. Define los componentes (turba, perlita, vermiculita, fibra de coco, humus de lombriz, etc.), establece la proporción de cada uno y guarda la receta.</p>

            <h2>Calculadora de ventilación</h2>

            <p>El intercambio adecuado de aire es crítico para el control de temperatura, la gestión de humedad y la reposición de CO2. La calculadora de ventilación te ayuda a dimensionar correctamente tu sistema de extracción.</p>

            <blockquote>
                <strong>Consejo:</strong> Siempre dimensiona tu ventilador un paso por encima de la recomendación mínima. Un ventilador de 6 pulgadas funcionando al 60% de velocidad es más silencioso y más controlable que uno de 4 pulgadas gritando al 100%.
            </blockquote>

            <h2>Constructor de configuraciones</h2>

            <p>El constructor de configuraciones te guía a través del diseño de un espacio de cultivo completo desde cero. Es especialmente útil para cultivadores primerizos o cualquiera que esté montando una nueva carpa.</p>

            <ol>
                <li><strong>Selecciona el tamaño de la carpa</strong> &mdash; elige entre tamaños estándar o introduce dimensiones personalizadas</li>
                <li><strong>Recomendación de luz</strong> &mdash; la app sugiere luces LED de la base de datos que proporcionan cobertura PPFD adecuada</li>
                <li><strong>Dimensionamiento de ventilación</strong> &mdash; basado en el volumen de tu carpa y la emisión de calor de la luz seleccionada</li>
                <li><strong>Cálculo de potencia total</strong> &mdash; ve el vataje combinado de todo el equipo seleccionado y el costo mensual estimado de electricidad</li>
                <li><strong>Lista de equipamiento</strong> &mdash; revisa tu configuración completa y opcionalmente guárdala como un perfil de equipamiento</li>
            </ol>

            <h2>Perfiles de equipamiento</h2>

            <p>Los perfiles de equipamiento (una función Pro) te permiten guardar toda la configuración de tu carpa como una configuración reutilizable. Los perfiles de equipamiento se comparten entre la pestaña Equipamiento y la pestaña Automatización.</p>

            <h2>Estimador de rendimiento</h2>

            <p>El estimador de rendimiento proporciona una predicción aproximada basada en el vataje de la luz, el tamaño de la carpa, el método de cultivo y el nivel de experiencia. Para una configuración LED moderna típica, espera 0.5&ndash;1.0 g/W como principiante y 1.0&ndash;1.5+ g/W como cultivador experimentado con condiciones optimizadas.</p>

            <blockquote>
                <strong>Ten en cuenta:</strong> Las estimaciones de rendimiento son inherentemente aproximadas. La genética, el control de VPD, la gestión de nutrientes, la técnica de entrenamiento y otros factores afectan el número final. Usa el estimador como referencia general, no como garantía.
            </blockquote>
`
  },
  "vpd-seedling-clone": {
    title: "VPD para plántulas y clones: Cómo acertar",
    body: `
                <h2>Por qué las plántulas y los clones necesitan atención especial</h2>
                <p>Las plántulas y los clones recién cortados son la etapa más vulnerable de cualquier cultivo. Sus sistemas radiculares están subdesarrollados (plántulas) o son inexistentes (clones), lo que significa que dependen casi por completo de sus hojas para absorber la humedad del aire circundante. Si el aire es demasiado seco, pierden agua más rápido de lo que pueden reponerla. Si es demasiado húmedo sin flujo de aire, el hongo del damping-off puede destruirlas de la noche a la mañana.</p>

                <h2>Rango de VPD ideal: 0.4&ndash;0.8 kPa</h2>
                <p>Para plántulas y clones sin enraizar, quieres un VPD entre <strong>0.4 y 0.8 kPa</strong>. Esto es significativamente más bajo que el rango de 0.8&ndash;1.2 usado en el crecimiento vegetativo, porque necesitas minimizar la transpiración hasta que las raíces puedan satisfacer la demanda de agua.</p>
                <p>Combinaciones prácticas de temperatura y humedad que producen VPD en este rango:</p>
                <ul>
                    <li><strong>24&deg;C a 80% HR</strong> &rarr; VPD ~0.60 kPa (punto ideal)</li>
                    <li><strong>25&deg;C a 85% HR</strong> &rarr; VPD ~0.48 kPa (bueno para clones frescos)</li>
                    <li><strong>23&deg;C a 75% HR</strong> &rarr; VPD ~0.70 kPa (extremo superior, plántulas con algunas raíces)</li>
                    <li><strong>26&deg;C a 80% HR</strong> &rarr; VPD ~0.67 kPa (habitación más cálida, todavía seguro)</li>
                </ul>

                <h2>Campanas de humedad: Tu mejor aliada</h2>
                <p>Una campana de humedad es la herramienta más simple y efectiva para mantener alta humedad alrededor de plántulas y clones. Crea un microclima donde la humedad del medio de cultivo y de las propias plantas queda atrapada, manteniendo la HR al 80&ndash;90%.</p>

                <h3>Mejores prácticas para campanas de humedad</h3>
                <ul>
                    <li><strong>Empieza completamente cerrada.</strong> Los primeros 2&ndash;3 días, mantén la campana completamente sellada.</li>
                    <li><strong>Abre las ventilaciones gradualmente.</strong> Después del día 3, ábrelas ligeramente. Para el día 5&ndash;7, ábrelas a la mitad.</li>
                    <li><strong>Retira la campana por etapas.</strong> Alrededor del día 7&ndash;10, retira la campana unas horas al día. Para el día 10&ndash;14, debería estar completamente fuera.</li>
                    <li><strong>Limpia la condensación diariamente.</strong> La condensación pesada que gotea sobre las plántulas puede causar damping-off.</li>
                </ul>

                <h2>Clones vs. plántulas: Diferencias clave</h2>

                <h3>Clones (Esquejes)</h3>
                <ul>
                    <li>VPD objetivo: <strong>0.4&ndash;0.6 kPa</strong> (extremo inferior del rango)</li>
                    <li>HR: <strong>80&ndash;90%</strong> bajo la campana</li>
                    <li>Temperatura: <strong>24&ndash;26&deg;C</strong></li>
                    <li>Luz: Suave &mdash; 150&ndash;250 PPFD, horario 18/6</li>
                </ul>

                <h3>Plántulas</h3>
                <ul>
                    <li>VPD objetivo: <strong>0.5&ndash;0.8 kPa</strong></li>
                    <li>HR: <strong>70&ndash;80%</strong></li>
                    <li>Temperatura: <strong>23&ndash;26&deg;C</strong></li>
                    <li>Luz: Moderada &mdash; 200&ndash;400 PPFD, horario 18/6</li>
                </ul>

                <h2>Transición al crecimiento vegetativo</h2>
                <p>Una vez que las plántulas tengan 3&ndash;4 juegos de hojas verdaderas, o los clones muestren crecimiento visible de raíces, es momento de hacer la transición a los objetivos de VPD vegetativo de <strong>0.8&ndash;1.2 kPa</strong>. La transición debe ser gradual, no abrupta.</p>

                <blockquote>
                    <strong>Consejo:</strong> GrowVPD Pro te permite establecer diferentes objetivos de VPD por etapa de crecimiento. Cuando cambias la etapa en tu diario de cultivo de "Plántula" a "Vegetativo", el gráfico de VPD actualiza automáticamente la banda objetivo.
                </blockquote>
`
  },
  "vpd-flowering": {
    title: "VPD durante la floración: Prevenir la podredumbre y maximizar el rendimiento",
    body: `
                <h2>Por qué la floración demanda un VPD más alto</h2>
                <p>Durante la floración, los cogollos densos crean bolsas de humedad atrapada entre los cálices y las hojas de azúcar. Si la humedad relativa permanece demasiado alta, el agua se condensa dentro de estos cogollos donde el flujo de aire no puede llegar. El resultado es <strong>botrytis</strong> (podredumbre del cogollo) &mdash; un moho gris que puede destruir semanas de trabajo en cuestión de días.</p>

                <h2>VPD ideal por semana de floración</h2>

                <h3>Floración temprana (Semanas 1&ndash;3): Fase de estiramiento</h3>
                <ul>
                    <li><strong>VPD objetivo:</strong> 1.0&ndash;1.3 kPa</li>
                    <li><strong>Temperatura:</strong> 24&ndash;27&deg;C</li>
                    <li><strong>Humedad:</strong> 55&ndash;65% HR</li>
                </ul>

                <h3>Floración media (Semanas 3&ndash;6): Desarrollo del cogollo</h3>
                <ul>
                    <li><strong>VPD objetivo:</strong> 1.2&ndash;1.5 kPa</li>
                    <li><strong>Temperatura:</strong> 23&ndash;26&deg;C</li>
                    <li><strong>Humedad:</strong> 45&ndash;55% HR</li>
                </ul>

                <h3>Floración tardía (Semanas 6&ndash;9+): Maduración y acabado</h3>
                <ul>
                    <li><strong>VPD objetivo:</strong> 1.3&ndash;1.6 kPa</li>
                    <li><strong>Temperatura:</strong> 21&ndash;24&deg;C</li>
                    <li><strong>Humedad:</strong> 40&ndash;50% HR</li>
                    <li>Máxima prevención de podredumbre. Los cogollos están en su punto más denso.</li>
                </ul>

                <h2>El problema de la podredumbre del cogollo</h2>
                <p>Botrytis cinerea es la mayor amenaza ambiental durante la floración. Entra a través del tejido muerto o moribundo.</p>

                <h3>Condiciones que promueven la podredumbre</h3>
                <ul>
                    <li>Humedad por encima del 60% durante la floración media a tardía</li>
                    <li>Pobre circulación de aire, especialmente dentro de la canopia</li>
                    <li>Grandes oscilaciones de temperatura entre luces encendidas y apagadas (se forma condensación)</li>
                    <li>Cogollos densos con hojas muertas atrapadas dentro</li>
                </ul>

                <div class="warning-box">
                    <strong>Crítico:</strong> Nunca rocíes agua ni nutrientes foliares sobre los cogollos durante la floración. La humedad atrapada dentro de los cogollos densos no se evaporará rápidamente, creando condiciones perfectas para la botrytis.
                </div>

                <h2>El problema del pico nocturno</h2>
                <p>El momento más peligroso para la podredumbre es la primera hora después de que las luces se apagan. La temperatura baja rápidamente pero la humedad no baja tan rápido. El VPD se desploma, a veces a 0.5&ndash;0.7 kPa.</p>
                <p>Soluciones:</p>
                <ol>
                    <li><strong>Deja el deshumidificador funcionando 24/7</strong> durante la floración tardía.</li>
                    <li><strong>Usa un pequeño calefactor</strong> para moderar la caída de temperatura por la noche.</li>
                    <li><strong>Automatiza con GrowVPD Pro:</strong> Configura una regla basada en VPD que active el deshumidificador cuando el VPD baje de 1.1 kPa.</li>
                </ol>

                <h2>Lista de verificación: Configuración climática para floración</h2>
                <ul>
                    <li>Deshumidificador dimensionado para el volumen de tu carpa</li>
                    <li>Ventiladores oscilantes proporcionando flujo de aire indirecto</li>
                    <li>Extracción en línea funcionando continuamente</li>
                    <li>Sensor de temperatura/humedad al nivel de la canopia</li>
                    <li>Objetivo de VPD ajustándose semanalmente</li>
                    <li>Estrategia de humedad nocturna (deshumidificador superponiéndose con luces apagadas)</li>
                    <li>Inspección regular de cogollos buscando señales tempranas de moho gris</li>
                </ul>
`
  },
  "night-temperature-vpd": {
    title: "Temperatura nocturna y VPD: El factor olvidado",
    body: `
                <h2>El diferencial de temperatura día/noche</h2>
                <p>La mayoría de los cultivadores se obsesionan con su VPD diurno pero ignoran completamente lo que sucede cuando las luces se apagan. Este es un error crítico. El <strong>diferencial de temperatura día/noche</strong> &mdash; comúnmente llamado DIF &mdash; afecta directamente al estiramiento de la planta, la expresión del color, la preservación de terpenos y el riesgo de enfermedades.</p>

                <h2>Cómo afecta el DIF a tus plantas</h2>

                <h3>Estiramiento del tallo (Distancia internodal)</h3>
                <ul>
                    <li><strong>DIF positivo</strong> (día más cálido que la noche por 5&ndash;10&deg;C): Promueve el estiramiento. Entrenudos más largos, plantas más altas.</li>
                    <li><strong>DIF cero</strong> (misma temperatura día y noche): Crecimiento moderado y equilibrado.</li>
                    <li><strong>DIF negativo</strong> (noche más cálida que el día por 2&ndash;4&deg;C): Reduce el estiramiento, produce plantas compactas con entrenudos cortos.</li>
                </ul>

                <h3>Expresión de color (Antocianinas)</h3>
                <p>Los colores púrpura, azul y oscuro son causados por pigmentos de antocianina. Estos pigmentos se activan con <strong>temperaturas nocturnas frescas</strong>, típicamente por debajo de 18&deg;C. El punto ideal para color sin estrés es 16&ndash;18&deg;C por la noche.</p>

                <h3>Preservación de terpenos</h3>
                <p>Los terpenos son compuestos aromáticos volátiles que se evaporan a temperaturas más altas. Al mantener las temperaturas nocturnas a 18&ndash;21&deg;C, reduces la pérdida de terpenos durante las 12 horas de oscuridad.</p>

                <h2>Temperatura nocturna ideal por etapa de crecimiento</h2>

                <h3>Etapa de plántula/clon</h3>
                <ul>
                    <li><strong>Día:</strong> 24&ndash;26&deg;C / <strong>Noche:</strong> 22&ndash;24&deg;C / <strong>DIF:</strong> 2&ndash;3&deg;C</li>
                </ul>

                <h3>Etapa vegetativa</h3>
                <ul>
                    <li><strong>Día:</strong> 24&ndash;28&deg;C / <strong>Noche:</strong> 20&ndash;23&deg;C / <strong>DIF:</strong> 3&ndash;5&deg;C</li>
                </ul>

                <h3>Etapa de floración</h3>
                <ul>
                    <li><strong>Día:</strong> 23&ndash;26&deg;C / <strong>Noche:</strong> 18&ndash;21&deg;C / <strong>DIF:</strong> 4&ndash;6&deg;C</li>
                </ul>

                <div class="warning-box">
                    <strong>Precaución:</strong> Una caída nocturna mayor de 8&ndash;10&deg;C puede causar condensación en las superficies de las plantas y dentro de los cogollos. Esto aumenta dramáticamente el riesgo de podredumbre. Siempre combina grandes caídas de temperatura con deshumidificación activa.
                </div>

                <h2>El desplome del VPD al apagar las luces</h2>
                <p>Esto es lo que ocurre en una carpa típica cuando las luces se apagan:</p>
                <ul>
                    <li><strong>8:00 PM:</strong> Luces apagadas. Temp 26&deg;C, HR 55%, VPD = 1.53 kPa</li>
                    <li><strong>8:30 PM:</strong> Temp baja a 23&deg;C. HR sube a 68%. VPD = 0.90 kPa</li>
                    <li><strong>9:00 PM:</strong> Temp se estabiliza en 21&deg;C. HR pica a 75%. VPD = 0.62 kPa</li>
                </ul>
                <p>En una hora, el VPD cayó de un saludable 1.53 a un peligrosamente bajo 0.62 &mdash; bien dentro de la zona de peligro de podredumbre.</p>

                <h2>Estrategias para la gestión del VPD nocturno</h2>
                <ul>
                    <li><strong>Deja el deshumidificador funcionando 24/7.</strong> No lo pongas en un temporizador que coincida con tus luces.</li>
                    <li><strong>Usa un pequeño calefactor.</strong> Un calefactor controlado por termostato configurado para mantener 20&ndash;21&deg;C previene el desplome de temperatura.</li>
                    <li><strong>Automatiza con reglas basadas en VPD</strong> en GrowVPD Pro.</li>
                    <li><strong>Escalona los horarios de luz</strong> en configuraciones de múltiples carpas.</li>
                </ul>

                <blockquote>
                    <strong>Consejo:</strong> GrowVPD Pro registra la temperatura nocturna por separado de la diurna en cada entrada del diario. Revisa tus entradas semanalmente para ver si tu VPD nocturno está consistentemente en rango.
                </blockquote>
`
  },
  "humidity-control-guide": {
    title: "Cómo controlar la humedad en tu sala de cultivo",
    body: `
                <h2>Por qué importa el control de humedad</h2>
                <p>La humedad es la mitad de la ecuación del VPD, y es la mitad con la que la mayoría de los cultivadores luchan. La temperatura es relativamente fácil de controlar. La humedad, por otro lado, cambia constantemente a medida que las plantas transpiran, el agua se evapora del medio de cultivo y se intercambia aire fresco.</p>

                <h2>Humidificadores: Cuando necesitas más humedad</h2>
                <p>Típicamente necesitas un humidificador en estos escenarios:</p>
                <ul>
                    <li><strong>Etapa de plántula/clon</strong> cuando necesitas 75&ndash;85% HR pero tu sala está al 40&ndash;55%</li>
                    <li><strong>Clima seco</strong> donde la HR ambiental está consistentemente por debajo del 40%</li>
                    <li><strong>Carpas pequeñas con extracción fuerte</strong> que sacan la humedad más rápido de lo que las plantas pueden producirla</li>
                </ul>

                <h3>Tipos de humidificadores</h3>
                <ul>
                    <li><strong>Ultrasónico (vapor frío):</strong> La opción más común. Pros: barato, silencioso, salida ajustable. Contras: puede dejar polvo mineral blanco en las hojas si usas agua dura (usa agua destilada o de ósmosis).</li>
                    <li><strong>Evaporativo:</strong> Usa un ventilador para soplar aire a través de una mecha húmeda. Pros: sin polvo mineral, autorregulable. Contras: más voluminoso, mechas necesitan reemplazo regular.</li>
                    <li><strong>Vapor (vapor caliente):</strong> Hierve agua para producir vapor. Pros: sin minerales en la salida. Contras: añade calor a la sala, mayor uso de energía.</li>
                </ul>

                <blockquote>
                    <strong>Consejo:</strong> Coloca el humidificador fuera de la carpa y canaliza la niebla a través de una entrada pasiva. Esto evita que las gotas de agua caigan directamente sobre las hojas.
                </blockquote>

                <h2>Deshumidificadores: Cuando necesitas menos humedad</h2>
                <p>La deshumidificación se vuelve crítica durante:</p>
                <ul>
                    <li><strong>Floración</strong> cuando las plantas maduras transpiran intensamente</li>
                    <li><strong>Climas húmedos</strong> donde la HR ambiental ya es del 60&ndash;80%</li>
                    <li><strong>Período nocturno</strong> cuando las temperaturas bajan y la HR se dispara</li>
                </ul>

                <div class="warning-box">
                    <strong>Importante:</strong> Las clasificaciones de los deshumidificadores se miden típicamente a 30&deg;C y 80% HR. La extracción real a 23&deg;C y 60% HR es a menudo el 40&ndash;60% de la capacidad nominal. Siempre compra más grande de lo que crees que necesitas.
                </div>

                <h2>Automatización basada en VPD</h2>
                <p>El control de humedad más efectivo usa el VPD como activador, no valores crudos de humedad. Esto es porque el mismo porcentaje de humedad produce valores de VPD muy diferentes a diferentes temperaturas.</p>

                <h3>Configurar automatización de VPD en GrowVPD Pro</h3>
                <ol>
                    <li>Conecta tu sensor de temperatura/humedad (Tuya, AC Infinity o BLE)</li>
                    <li>Conecta tu humidificador y deshumidificador a enchufes inteligentes</li>
                    <li>Crea dos reglas de automatización:
                        <ul>
                            <li><strong>Regla 1:</strong> Si el VPD baja del mínimo objetivo, encender el deshumidificador.</li>
                            <li><strong>Regla 2:</strong> Si el VPD sube del máximo objetivo, encender el humidificador.</li>
                        </ul>
                    </li>
                    <li>Configura tiempos mínimos de apagado (5&ndash;10 minutos) para prevenir ciclado rápido</li>
                </ol>

                <h2>Ventilación como control de humedad</h2>
                <p>Tu ventilador extractor en línea es una herramienta poderosa de control de humedad, especialmente cuando el aire exterior es más seco que el aire de la carpa.</p>

                <h2>Referencia rápida: Equipo por etapa</h2>
                <ul>
                    <li><strong>Plántulas/Clones:</strong> Campana de humedad + humidificador pequeño (si la sala es muy seca)</li>
                    <li><strong>Vegetativo:</strong> Humidificador O control de extracción (objetivo 60&ndash;70% HR)</li>
                    <li><strong>Floración temprana:</strong> Deshumidificador en espera, extractor como control principal (objetivo 50&ndash;60% HR)</li>
                    <li><strong>Floración tardía:</strong> Deshumidificador funcionando 24/7, extracción fuerte (objetivo 40&ndash;50% HR)</li>
                </ul>
`
  },
  "cross-brand-automation": {
    title: "Automatización multiplataforma: Mezclando Tuya, Mars Hydro y más",
    body: `
                <h2>El problema: Jardines amurallados</h2>
                <p>Cada marca de dispositivos inteligentes tiene su propia app, su propia nube y su propio sistema de automatización. Un sensor Tuya puede activar un enchufe Tuya dentro de la app Tuya. Pero, ¿qué pasa si quieres que un <strong>sensor Tuya</strong> active un <strong>ventilador Mars Hydro</strong>? Ninguna de estas marcas se comunica entre sí de forma nativa.</p>

                <h2>La solución: GrowVPD Pro como hub central</h2>
                <p>GrowVPD Pro se conecta a <strong>múltiples plataformas simultáneamente</strong> y trata todos los dispositivos como parte de un sistema unificado. Lee datos de sensores de cualquier plataforma conectada y puede activar acciones en cualquier dispositivo conectado, independientemente de la marca.</p>
                <p>Plataformas soportadas:</p>
                <ul>
                    <li><strong>Tuya / Smart Life</strong> &mdash; sensores, enchufes inteligentes, interruptores, cámaras, reguladores</li>
                    <li><strong>AC Infinity</strong> &mdash; ventiladores en línea, ventiladores clip, controladores con sensores integrados</li>
                    <li><strong>Mars Hydro</strong> &mdash; drivers LED, ventiladores en línea, ventiladores clip (WiFi + MQTT)</li>
                    <li><strong>Spider Farmer</strong> &mdash; drivers LED, ventiladores (WiFi + MQTT)</li>
                    <li><strong>TP-Link Tapo</strong> &mdash; cámaras (instantáneas ONVIF + RTSP)</li>
                </ul>

                <h2>Escenarios reales de automatización multiplataforma</h2>

                <h3>Escenario 1: Sensor Tuya + Ventilador Mars Hydro</h3>
                <p>Tienes un sensor WiFi Tuya barato ($15) en tu carpa y un ventilador en línea Mars Hydro de 6 pulgadas. Quieres que el ventilador aumente la velocidad cuando el VPD supere tu objetivo.</p>

                <h3>Escenario 2: Controlador AC Infinity + Enchufe Tuya para humidificador</h3>
                <p>Tu AC Infinity Controller 69 Pro tiene un sensor de temperatura/humedad integrado. Tu humidificador está conectado a un enchufe inteligente Tuya.</p>

                <blockquote>
                    <strong>Dato clave:</strong> A GrowVPD Pro no le importa qué marca proporciona los datos del sensor o qué marca recibe el comando. Una regla de VPD es una regla de VPD &mdash; la fuente del sensor y el dispositivo objetivo se configuran de forma independiente.
                </blockquote>

                <h2>Por qué esto importa para los cultivadores</h2>

                <h3>Compra el mejor equipo para cada función</h3>
                <p>Sin automatización multiplataforma, estás atado a un ecosistema. Con GrowVPD Pro, puedes elegir: los sensores WiFi más baratos (Tuya), los mejores ventiladores (AC Infinity para funcionamiento silencioso), las mejores luces LED (Mars Hydro o Spider Farmer) y las mejores cámaras (Tapo para fiabilidad).</p>

                <h3>Un solo panel para todo</h3>
                <p>En lugar de revisar tres o cuatro apps para monitorizar tu carpa, todo está en un solo lugar.</p>

                <h2>Configurar automatización multiplataforma</h2>
                <ol>
                    <li><strong>Conecta todas las cuentas de tus plataformas</strong> en Ajustes &gt; Cuentas conectadas.</li>
                    <li><strong>Descubre dispositivos</strong> de cada plataforma en la pestaña Automatización.</li>
                    <li><strong>Organiza en salas y carpas.</strong> Una sola carpa puede contener dispositivos de múltiples plataformas.</li>
                    <li><strong>Crea reglas de automatización.</strong> El sensor y el dispositivo objetivo pueden ser de cualquier plataforma.</li>
                </ol>

                <div class="warning-box">
                    <strong>Nota:</strong> La automatización multiplataforma requiere una suscripción Pro. La versión gratuita muestra datos de dispositivos en modo demo con datos de ejemplo.
                </div>
`
  },
  "automation-troubleshooting": {
    title: "Guía de solución de problemas de automatización inteligente",
    body: `
                <h2>Problema 1: El dispositivo muestra "Sin conexión"</h2>
                <p>Este es el problema más común. El dispositivo aparece en GrowVPD Pro pero muestra una insignia gris "Sin conexión" y no responde a los comandos.</p>
                <h3>Solución paso a paso</h3>
                <ol>
                    <li><strong>Verifica la alimentación física.</strong> ¿El dispositivo está enchufado y encendido?</li>
                    <li><strong>Verifica la conexión WiFi.</strong> Abre la app nativa del dispositivo y comprueba si aparece en línea allí.</li>
                    <li><strong>Reinicia el dispositivo.</strong> Desenchúfalo, espera 10 segundos, vuelve a enchufarlo.</li>
                    <li><strong>Verifica tu router.</strong> Algunos routers tienen límites de dispositivos.</li>
                    <li><strong>Verifica la banda WiFi.</strong> La mayoría de los dispositivos inteligentes solo soportan WiFi de 2.4 GHz, no 5 GHz.</li>
                </ol>

                <h2>Problema 2: La regla de automatización no se activa</h2>
                <ol>
                    <li><strong>Verifica la lectura del sensor.</strong> Comprueba que el sensor esté reportando datos actuales.</li>
                    <li><strong>Verifica que la condición realmente se cumpla.</strong></li>
                    <li><strong>Verifica el horario de la regla.</strong> Si configuraste ventanas de tiempo activas, la regla no se activará fuera de esas horas.</li>
                    <li><strong>Verifica el tiempo mínimo de apagado.</strong></li>
                    <li><strong>Verifica el dispositivo objetivo.</strong> ¿Está en línea?</li>
                    <li><strong>Verifica reglas en conflicto.</strong> Si dos reglas apuntan al mismo dispositivo con acciones opuestas, la de mayor prioridad gana.</li>
                </ol>

                <h2>Problema 3: Las lecturas del sensor parecen incorrectas</h2>
                <h3>Causas comunes</h3>
                <ul>
                    <li><strong>Ubicación del sensor.</strong> Siempre coloca los sensores a la altura de la canopia.</li>
                    <li><strong>Desvío del sensor.</strong> Los sensores WiFi baratos pueden desviarse 1&ndash;3&deg;C y 3&ndash;8% HR con el tiempo.</li>
                    <li><strong>Exposición directa a la luz.</strong> Protege el sensor o muévelo a la sombra.</li>
                </ul>
                <h3>Solución: Desfases de calibración</h3>
                <p>En GrowVPD Pro, cada sensor tiene ajustes de desfase de calibración. Compara tu sensor con un medidor de referencia preciso durante 30&ndash;60 minutos y luego aplica los desfases.</p>

                <h2>Problema 4: La conexión se cae repetidamente</h2>
                <ul>
                    <li>Mueve el router WiFi más cerca del área de cultivo o añade un extensor WiFi</li>
                    <li>Asigna direcciones IP estáticas a tus dispositivos inteligentes</li>
                    <li>Usa una red dedicada de 2.4 GHz para dispositivos IoT</li>
                </ul>

                <h2>Problema 5: Token expirado / Error de autenticación</h2>
                <p>Ve a Ajustes &gt; Cuentas conectadas y vuelve a autenticarte con la plataforma afectada.</p>

                <div class="warning-box">
                    <strong>Importante:</strong> Nunca compartas tus credenciales de plataforma públicamente. GrowVPD Pro almacena las credenciales localmente en tu dispositivo y las transmite solo a las APIs oficiales de las plataformas.
                </div>

                <h2>¿Sigues atascado?</h2>
                <ol>
                    <li>Toma una captura de pantalla de la pestaña Automatización mostrando la regla problemática</li>
                    <li>Anota el mensaje de error exacto (si hay alguno)</li>
                    <li>Consulta la comunidad de Discord</li>
                    <li>Contacta al soporte a través de Ajustes &gt; Soporte</li>
                </ol>
`
  },
  "energy-monitoring": {
    title: "Monitoreo de energía y seguimiento de costos para tu cultivo",
    body: `
                <h2>¿Por qué hacer seguimiento de la energía?</h2>
                <p>La electricidad es el mayor costo continuo del cultivo interior. Una sola carpa de 120x120 cm con un LED de 480W, ventilador en línea, ventiladores de clip, humidificador y deshumidificador puede consumir <strong>8&ndash;15 kWh por día</strong>, traducido a $30&ndash;$80 por mes dependiendo de tu tarifa eléctrica.</p>

                <h2>Cómo GrowVPD Pro rastrea la energía</h2>

                <h3>1. Reporte de consumo de enchufes inteligentes</h3>
                <p>Algunos enchufes inteligentes Tuya reportan el consumo de energía en tiempo real (vatios) y el uso acumulado de energía (kWh). Este es el método más preciso.</p>

                <h3>2. Energía estimada por potencia nominal</h3>
                <p>Para dispositivos que no reportan energía directamente, GrowVPD Pro usa la <strong>potencia nominal</strong> que introduces en los ajustes del dispositivo y la multiplica por el tiempo de encendido registrado.</p>

                <h2>Optimizar el uso de energía</h2>

                <h3>1. Atenúa tus luces cuando sea posible</h3>
                <p>Funcionar al 75% de potencia en lugar del 100% ahorra el 25% de tu mayor consumidor de energía.</p>

                <h3>2. Dimensiona correctamente tu deshumidificador</h3>
                <p>Un deshumidificador sobredimensionado se enciende y apaga frecuentemente, desperdiciando energía en cada arranque.</p>

                <h3>3. Usa ventiladores de velocidad variable</h3>
                <p>Un ventilador en línea a velocidad 4 en lugar de velocidad 10 puede reducir su consumo de energía un 60&ndash;70%.</p>

                <h3>4. Programa para horas de tarifa baja</h3>
                <p>Si tu proveedor eléctrico cobra diferentes tarifas en diferentes horarios, programa tu período de luces encendidas durante las horas de tarifa baja.</p>

                <h2>Comparar cultivos por eficiencia energética</h2>
                <p>La métrica definitiva de energía es <strong>gramos por kWh</strong>. GrowVPD Pro la calcula automáticamente cuando registras datos de cosecha.</p>
                <ul>
                    <li><strong>Configuración principiante:</strong> 0.5&ndash;0.8 g/kWh</li>
                    <li><strong>Configuración optimizada:</strong> 1.0&ndash;1.5 g/kWh</li>
                    <li><strong>Avanzado/comercial:</strong> 1.5&ndash;2.5 g/kWh</li>
                </ul>
`
  },
  "harvest-tracking": {
    title: "Seguimiento de la cosecha: Peso húmedo, peso seco y eficiencia",
    body: `
                <h2>¿Por qué registrar los datos de la cosecha?</h2>
                <p>La cosecha es la culminación de semanas o meses de trabajo. Sin registrar los resultados, no tienes forma de comparar cultivos objetivamente. <strong>487g secos de 4 plantas bajo 480W en 63 días de floración</strong> &mdash; eso son datos de los que puedes aprender.</p>

                <h2>Registrar la cosecha en GrowVPD Pro</h2>

                <h3>Peso húmedo</h3>
                <p>Pesa tus cogollos recién cortados y recortados inmediatamente después de la cosecha. Aproximadamente el 75&ndash;80% del peso húmedo es agua.</p>

                <h3>Peso seco</h3>
                <p>Después del secado (típicamente 7&ndash;14 días a 60% HR y 18&ndash;21&deg;C), pesa los cogollos de nuevo. Este es tu rendimiento real.</p>

                <blockquote>
                    <strong>Consejo:</strong> Una proporción húmedo-a-seco saludable es 4:1 a 5:1.
                </blockquote>

                <h2>Métricas clave de eficiencia</h2>

                <h3>Gramos por vatio (g/W)</h3>
                <ul>
                    <li><strong>Por debajo de 0.5 g/W:</strong> Hay margen de mejora.</li>
                    <li><strong>0.5&ndash;1.0 g/W:</strong> Bueno. La mayoría de los cultivadores caseros llegan aquí.</li>
                    <li><strong>1.0&ndash;1.5 g/W:</strong> Excelente. Entorno y genética optimizados.</li>
                    <li><strong>Por encima de 1.5 g/W:</strong> Excepcional. Generalmente implica suplementación de CO2.</li>
                </ul>

                <h3>Gramos por planta (g/planta)</h3>
                <p>Peso seco total dividido por el número de plantas. Fuertemente influenciado por el método de entrenamiento, tiempo de vegetativo y tamaño de maceta.</p>

                <h2>Consejos de secado que protegen tu rendimiento</h2>
                <ul>
                    <li><strong>Temperatura:</strong> 18&ndash;21&deg;C. Las temperaturas más bajas preservan los terpenos.</li>
                    <li><strong>Humedad:</strong> 55&ndash;65% HR.</li>
                    <li><strong>Flujo de aire:</strong> Suave, indirecto. No apuntes ventiladores a los cogollos.</li>
                    <li><strong>Duración:</strong> 7&ndash;14 días.</li>
                    <li><strong>Oscuridad:</strong> Seca en una habitación oscura. La luz degrada el THC y los terpenos.</li>
                </ul>

                <div class="warning-box">
                    <strong>No apresures el secado.</strong> El secado rápido en 3&ndash;4 días destruye los terpenos y produce una flor áspera con sabor a hierba.
                </div>
`
  },
  "comparing-grows": {
    title: "Cómo comparar cultivos y aprender de tus datos",
    body: `
                <h2>El poder de la comparación</h2>
                <p>Un solo diario de cultivo te dice qué pasó. <strong>Dos diarios lado a lado</strong> te dicen por qué. GrowVPD Pro incluye una pantalla de comparación dedicada que coloca dos cultivos completados (o activos) lado a lado, resaltando diferencias en entorno, nutrición, técnicas y resultados de cosecha.</p>

                <h2>Usar la función de comparación</h2>
                <ol>
                    <li>Abre la pestaña <strong>Diario de cultivo</strong></li>
                    <li>Toca el icono de comparación en la barra superior</li>
                    <li>Selecciona el primer cultivo de la lista</li>
                    <li>Selecciona el segundo cultivo para comparar</li>
                    <li>La pantalla de comparación muestra ambos cultivos con líneas de tiempo paralelas</li>
                </ol>

                <h2>Qué comparar</h2>
                <ul>
                    <li><strong>Métricas de rendimiento:</strong> peso seco, g/W, g/planta, g/m2</li>
                    <li><strong>Consistencia del VPD:</strong> El cultivo con VPD más consistente casi siempre rinde mejor.</li>
                    <li><strong>Velocidad de crecimiento:</strong> ¿Uno de los cultivos terminó más rápido?</li>
                    <li><strong>Niveles de PPFD</strong></li>
                    <li><strong>Programas de nutrientes:</strong> Compara EC/PPM semana a semana.</li>
                    <li><strong>Técnicas de entrenamiento</strong></li>
                </ul>

                <blockquote>
                    <strong>Consejo:</strong> Para la comparación más significativa, cambia solo una variable entre cultivos. Si cambias la luz, la variedad y el programa de nutrientes simultáneamente, no sabrás qué cambio causó la diferencia en el rendimiento.
                </blockquote>

                <h2>Usar plantillas para estandarizar</h2>
                <p>El sistema de plantillas de GrowVPD Pro te permite guardar un cultivo exitoso como plantilla. Con el tiempo, tus plantillas evolucionan en recetas optimizadas para cada variedad en tu configuración.</p>
`
  },
  "photo-documentation": {
    title: "Documentación fotográfica: Creando una línea temporal visual de tu cultivo",
    body: `
                <h2>Por qué importan las fotos</h2>
                <p>Los números cuentan parte de la historia. Las fotos cuentan el resto. A lo largo de un ciclo de cultivo completo, las fotos regulares crean una línea temporal visual que muestra la velocidad de crecimiento, el desarrollo de la canopia, la progresión de carencias y la transformación de plántula a cosecha.</p>

                <h2>Cuándo fotografiar</h2>
                <h3>Momentos imprescindibles</h3>
                <ul>
                    <li><strong>Día 1:</strong> Semillas plantadas o clones trasplantados.</li>
                    <li><strong>Inicio de cada semana:</strong> Una foto semanal consistente desde el mismo ángulo.</li>
                    <li><strong>Cualquier problema:</strong> Amarillamiento, manchas, enrollamiento, plagas &mdash; fotografía inmediatamente.</li>
                    <li><strong>Eventos de entrenamiento:</strong> Antes y después del topping, LST, defoliación.</li>
                    <li><strong>Día de cosecha:</strong> La planta completa antes del corte.</li>
                </ul>

                <h3>Instantáneas automáticas de cámara</h3>
                <p>Si usas una cámara Tuya o Tapo conectada a través de GrowVPD Pro, la app puede capturar instantáneas automáticas diarias y guardarlas en el diario. La función de timelapse luego une estas instantáneas en un video.</p>

                <h2>Consejos de cámara para salas de cultivo</h2>
                <h3>Apaga el flash de la luz de cultivo</h3>
                <p>Las luces LED modernas producen una luz intensa que abruma las cámaras de los teléfonos. Apaga la luz de cultivo y usa una luz blanca neutra para las fotos.</p>

                <h3>Ángulos consistentes</h3>
                <p>Marca un punto en el suelo donde te paras y mantén el teléfono a la misma altura cada vez.</p>

                <h2>La función de timelapse</h2>
                <p>GrowVPD Pro puede generar un video de timelapse a partir de todas las fotos del diario. Para mejores resultados, toma fotos desde un ángulo consistente y a la misma hora del día.</p>

                <h2>Modo de privacidad</h2>
                <p>La función de <strong>Privacidad fotográfica</strong> (Pro) oculta las fotos de cultivo de la galería del sistema. Combinado con el bloqueo por PIN y el icono disfrazado (Modo Sigiloso), tu documentación de cultivo permanece completamente privada.</p>

                <div class="warning-box">
                    <strong>Recordatorio de copia de seguridad:</strong> Las fotos almacenadas en modo privado no son respaldadas por Google Photos. Usa la función de exportación de GrowVPD Pro para crear copias de seguridad.
                </div>
`
  },
  "nutrient-deficiency-guide": {
    title: "Guía de identificación de carencias de nutrientes",
    body: `
                <h2>Antes de diagnosticar: Verifica lo básico</h2>
                <p>Antes de asumir una carencia de nutrientes, descarta las dos causas más comunes que imitan los síntomas de carencia:</p>
                <ul>
                    <li><strong>Desequilibrio de pH:</strong> Si el pH de la zona radicular está fuera de 5.8&ndash;6.5 (hidro/coco) o 6.0&ndash;7.0 (tierra), los nutrientes se vuelven no disponibles aunque estén presentes. Corrige el pH primero.</li>
                    <li><strong>Riego excesivo:</strong> Las raíces encharcadas no pueden absorber nutrientes. Las plantas caídas con hojas amarillentas a menudo solo necesitan secarse.</li>
                </ul>

                <h2>Nutrientes móviles vs. inmóviles</h2>
                <ul>
                    <li><strong>Nutrientes móviles</strong> (N, P, K, Mg): Los síntomas aparecen en las <strong>hojas inferiores/viejas primero</strong>.</li>
                    <li><strong>Nutrientes inmóviles</strong> (Ca, Fe, Mn, Zn, S, B, Cu): Los síntomas aparecen en las <strong>hojas superiores/nuevas primero</strong>.</li>
                </ul>

                <h2>Nitrógeno (N) &mdash; Móvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li>Amarillamiento uniforme de las <strong>hojas inferiores/viejas</strong></li>
                    <li>Progresa hacia arriba desde la base de la planta</li>
                    <li>La planta aparece verde claro en general</li>
                </ul>
                <h3>Solución</h3>
                <p>Aumenta el nitrógeno en la alimentación. Las hojas inferiores afectadas no se recuperarán pero el nuevo crecimiento debería verdear en 5&ndash;7 días.</p>

                <h2>Fósforo (P) &mdash; Móvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li><strong>Tallos y pecíolos púrpura o rojizos</strong></li>
                    <li>Hojas verde oscuro con tonos azulados o púrpura</li>
                    <li>Crecimiento general lento</li>
                </ul>
                <h3>Solución</h3>
                <p>Verifica la temperatura de la zona radicular primero. Si está fría, añade una alfombra térmica. Si el pH es correcto y la temperatura está bien, aumenta el fósforo.</p>

                <h2>Potasio (K) &mdash; Móvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li><strong>Bordes marrones y crujientes</strong> en hojas viejas/inferiores</li>
                    <li>Tallos débiles, plantas propensas a caerse</li>
                </ul>

                <h2>Calcio (Ca) &mdash; Inmóvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li><strong>Manchas marrones</strong> en hojas nuevas/superiores</li>
                    <li>Puntas de hojas nuevas que se curvan y mueren</li>
                </ul>
                <h3>Solución</h3>
                <p>Añade suplemento de cal-mag. Si usas agua de ósmosis, siempre incluye cal-mag.</p>

                <h2>Magnesio (Mg) &mdash; Móvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li><strong>Clorosis intervenal en hojas viejas/inferiores</strong>: el tejido entre las venas se vuelve amarillo mientras las venas permanecen verdes</li>
                </ul>
                <h3>Solución</h3>
                <p>Sales de Epsom (sulfato de magnesio): 1&ndash;2 g/L en la alimentación o como spray foliar.</p>

                <h2>Hierro (Fe) &mdash; Inmóvil</h2>
                <h3>Síntomas</h3>
                <ul>
                    <li><strong>Clorosis intervenal en hojas nuevas/superiores</strong> (similar al magnesio pero en crecimiento NUEVO)</li>
                    <li>Las hojas nuevas emergen amarillo pálido o casi blancas con venas verdes</li>
                </ul>
                <h3>Solución</h3>
                <p>Baja el pH al rango correcto. El hierro es extremadamente sensible al pH.</p>

                <h2>Diagrama de flujo de diagnóstico</h2>
                <ol>
                    <li><strong>¿Dónde están los síntomas?</strong> Hojas inferiores/viejas = nutriente móvil. Hojas superiores/nuevas = nutriente inmóvil.</li>
                    <li><strong>¿Qué tipo de síntoma?</strong> Amarillamiento uniforme = nitrógeno. Bordes marrones = potasio. Intervenal = magnesio (viejo) o hierro (nuevo). Manchas = calcio. Tallos púrpura = fósforo.</li>
                    <li><strong>Verifica el pH primero.</strong> El 80% de las carencias aparentes son bloqueo por pH.</li>
                    <li><strong>Verifica EC/PPM.</strong></li>
                    <li><strong>Toma fotos.</strong> Usa la guía de enfermedades de GrowVPD Pro para comparar con imágenes de referencia.</li>
                </ol>

                <blockquote>
                    <strong>Consejo:</strong> El diagnóstico de enfermedades con IA de GrowVPD Pro (función Pro) puede analizar fotos de hojas afectadas y sugerir la carencia o enfermedad más probable.
                </blockquote>
`
  },
  "substrate-mixing": {
    title: "Guía de mezcla de sustratos: Tierra, coco y mezclas personalizadas",
    body: `
                <h2>Por qué importa el sustrato</h2>
                <p>El sustrato es donde vive tu planta. Determina la retención de agua, el drenaje, la aireación, la disponibilidad de nutrientes y la salud radicular. El mejor control ambiental del mundo no puede compensar una zona radicular encharcada, compactada o agotada de nutrientes.</p>

                <h2>Tipos de sustrato</h2>

                <h3>Tierra (Mezcla de maceta)</h3>
                <ul>
                    <li><strong>Pros:</strong> Indulgente, amortigua el pH, contiene algunos nutrientes</li>
                    <li><strong>Contras:</strong> Más pesada, drenaje más lento, más difícil de controlar</li>
                    <li><strong>Ideal para:</strong> Principiantes, cultivadores orgánicos</li>
                    <li><strong>Rango de pH:</strong> 6.0&ndash;7.0</li>
                </ul>

                <h3>Fibra de coco</h3>
                <ul>
                    <li><strong>Pros:</strong> Excelente retención de agua + drenaje, reutilizable, ligera, pH estable</li>
                    <li><strong>Contras:</strong> Requiere nutrientes desde el día uno, necesita suplementación de cal-mag</li>
                    <li><strong>Ideal para:</strong> Cultivadores intermedios a avanzados</li>
                    <li><strong>Rango de pH:</strong> 5.8&ndash;6.2</li>
                </ul>

                <h2>Mezclas populares</h2>

                <h3>Coco/Perlita estándar (70/30)</h3>
                <p>La mezcla más popular entre cultivadores de interior. 70% fibra de coco + 30% perlita. Excelente retención de agua para riego diario mientras previene el encharcamiento.</p>

                <h3>Coco/Perlita de alta frecuencia (50/50)</h3>
                <p>Drena más rápido, requiere riego más frecuente. Popular con sistemas de goteo automatizados.</p>

                <h3>Tierra viva (Super Soil orgánica)</h3>
                <p>Una mezcla orgánica rica en nutrientes: tierra base (30%) + compost/humus de lombriz (30%) + aireación (perlita/pómez 20%) + enmiendas (harina de hueso, harina de algas, guano, dolomita 20%).</p>

                <h3>Mezcla para plántulas</h3>
                <p>Mezcla ligera y esponjosa: 40% coco + 30% perlita + 30% vermiculita.</p>

                <blockquote>
                    <strong>Consejo:</strong> El Mezclador de Sustratos de GrowVPD Pro te permite introducir los porcentajes de tus componentes y calcula la retención de agua, tasa de drenaje y capacidad de aireación resultantes.
                </blockquote>

                <h2>Preparar la fibra de coco</h2>
                <ol>
                    <li><strong>Hidratar:</strong> Expande los ladrillos de coco comprimidos con agua tibia.</li>
                    <li><strong>Enjuagar:</strong> Lava con agua de pH ajustado hasta que la EC del drenaje sea inferior a 0.5 mS/cm.</li>
                    <li><strong>Amortiguar:</strong> Remoja en solución de cal-mag (EC 0.8&ndash;1.0) durante 8&ndash;12 horas.</li>
                    <li><strong>Drenar y mezclar:</strong> Drena el exceso de agua, añade perlita en tu proporción elegida y mezcla bien.</li>
                </ol>

                <div class="warning-box">
                    <strong>Importante:</strong> Nunca uses fibra de coco directamente del ladrillo sin enjuagar y amortiguar. La fibra sin amortiguar robará calcio y magnesio de tu solución nutritiva durante las primeras 2&ndash;3 semanas.
                </div>

                <h2>Guía de tamaño de maceta</h2>
                <ul>
                    <li><strong>Plántulas:</strong> Comienza en macetas de 0.5&ndash;1 L</li>
                    <li><strong>Autoflorecientes:</strong> Maceta final de 7&ndash;15 L</li>
                    <li><strong>Fotoperíodo (carpa pequeña):</strong> Maceta final de 11&ndash;15 L</li>
                    <li><strong>Fotoperíodo (carpa grande, vegetativo largo):</strong> 20&ndash;30 L</li>
                    <li><strong>Macetas de tela</strong> son muy recomendables: podan las raíces por aire</li>
                </ul>
`
  },
  "tent-ventilation-guide": {
    title: "Ventilación de la carpa de cultivo: Guía completa de CFM",
    body: `
                <h2>Por qué importa la ventilación</h2>
                <p>La ventilación es la columna vertebral del clima de tu carpa. Cumple cuatro funciones críticas: eliminar el exceso de calor generado por las luces de cultivo, intercambiar aire viciado por aire fresco rico en CO2, controlar la humedad y mantener presión negativa para contener el olor.</p>

                <h2>Calcular los requisitos de CFM</h2>
                <p>CFM (Pies Cúbicos por Minuto) mide cuánto aire mueve tu ventilador. El objetivo es reemplazar todo el aire de tu carpa al menos una vez cada 1&ndash;3 minutos.</p>

                <h3>Paso 1: Calcular el volumen de la carpa</h3>
                <ul>
                    <li><strong>Carpa 60x60x160 cm:</strong> ~20.8 ft3</li>
                    <li><strong>Carpa 120x120x200 cm:</strong> ~100 ft3</li>
                    <li><strong>Carpa 240x120x200 cm:</strong> ~203 ft3</li>
                </ul>

                <h3>Paso 2: Aplicar multiplicadores</h3>
                <ul>
                    <li><strong>Filtro de carbón:</strong> Multiplicar por 1.25</li>
                    <li><strong>Longitud del conducto y curvas:</strong> Multiplicar por 1.2</li>
                    <li><strong>Calor alto:</strong> Multiplicar por 1.2</li>
                </ul>

                <h3>Ejemplo de cálculo</h3>
                <p>Carpa 120x120x200 cm, filtro de carbón, 1 curva de conducto, 2m de conducto, LED de 480W:</p>
                <p>100 ft3 x 1.25 x 1.2 x 1.2 = <strong>180 CFM necesarios</strong></p>

                <blockquote>
                    <strong>Consejo:</strong> La Calculadora de Ventilación de GrowVPD Pro en la pestaña Equipamiento hace estas matemáticas por ti.
                </blockquote>

                <h2>Presión negativa</h2>
                <p>La presión negativa asegura que todo el aire pase por el filtro de carbón antes de salir, eliminando fugas de olor. Si las paredes de tu carpa se succionan ligeramente hacia dentro, tienes presión negativa.</p>

                <h2>Dimensionamiento del filtro de carbón</h2>
                <ul>
                    <li><strong>Filtros de 4" (100mm):</strong> 150&ndash;200 CFM. Buenos para carpas de 60x60.</li>
                    <li><strong>Filtros de 6" (150mm):</strong> 300&ndash;400 CFM. Elección estándar para carpas de 120x120.</li>
                    <li><strong>Filtros de 8" (200mm):</strong> 500&ndash;750 CFM. Para carpas 240x120 o mayores.</li>
                </ul>

                <h2>Recomendaciones de ventilador por tamaño de carpa</h2>
                <ul>
                    <li><strong>60x60 cm:</strong> Ventilador de 4", 100&ndash;150 CFM</li>
                    <li><strong>120x120 cm:</strong> Ventilador de 6", 300&ndash;400 CFM</li>
                    <li><strong>240x120 cm:</strong> Ventilador de 8", 500&ndash;750 CFM</li>
                </ul>

                <h2>Ventiladores de circulación (dentro de la carpa)</h2>
                <ul>
                    <li><strong>Ventiladores oscilantes de clip:</strong> Proporcionan flujo de aire barredora a través de la canopia.</li>
                    <li><strong>No apuntes los ventiladores directamente a las plantas.</strong> El viento directo constante causa "quemadura por viento".</li>
                    <li><strong>Flujo de aire bajo la canopia:</strong> Previene que la humedad se acumule en la canopia inferior.</li>
                </ul>

                <h2>Errores comunes de ventilación</h2>
                <ul>
                    <li><strong>Usar el extractor con temporizador en lugar de continuamente.</strong></li>
                    <li><strong>Sellar todas las entradas pasivas.</strong></li>
                    <li><strong>Colocar el filtro de carbón fuera de la carpa.</strong></li>
                    <li><strong>Ignorar la ventilación nocturna.</strong></li>
                </ul>
`
  },
  "privacy-security-guide": {
    title: "Privacidad y seguridad: Bloqueo con PIN, Modo Sigiloso y Privacidad fotográfica",
    body: `
                <h2>Por qué importa la privacidad para los cultivadores</h2>
                <p>Cultivar en interior es legal en muchos lugares, pero eso no significa que quieras que todos los que tomen tu teléfono vean tu diario de cultivo, datos de cosecha y fotos diarias. GrowVPD Pro ofrece múltiples capas de protección de privacidad.</p>

                <h2>Bloqueo con PIN y autenticación biométrica</h2>
                <h3>Configurar el bloqueo con PIN</h3>
                <ol>
                    <li>Abre <strong>Ajustes</strong> en GrowVPD Pro</li>
                    <li>Desplázate a la sección <strong>Seguridad</strong></li>
                    <li>Toca <strong>Establecer código PIN</strong></li>
                    <li>Introduce un PIN de 4&ndash;6 dígitos y confírmalo</li>
                </ol>

                <h3>Autenticación biométrica</h3>
                <p>Si tu teléfono soporta huella digital o reconocimiento facial, puedes habilitarlo además del PIN.</p>

                <h3>Bloqueo en segundo plano</h3>
                <p>GrowVPD Pro se bloquea automáticamente cuando cambias a otra app o la pantalla del teléfono se apaga.</p>

                <h2>Privacidad fotográfica</h2>
                <p>La función de <strong>Privacidad fotográfica</strong> (Pro) evita que las fotos de cultivo sean visibles en la galería del teléfono.</p>
                <h3>Cómo funciona</h3>
                <ul>
                    <li>Las fotos se almacenan en el directorio privado interno de la app</li>
                    <li>Estos archivos se excluyen del escáner de medios del sistema</li>
                    <li>Las fotos solo son visibles dentro de GrowVPD Pro</li>
                </ul>
                <h3>Habilitar la privacidad fotográfica</h3>
                <ol>
                    <li>Ve a <strong>Ajustes &gt; Privacidad</strong></li>
                    <li>Habilita <strong>Ocultar fotos de la galería</strong></li>
                </ol>

                <div class="warning-box">
                    <strong>Aviso de copia de seguridad:</strong> Las fotos en modo privado no son respaldadas por Google Photos ni ningún servicio de copia de seguridad automática. Usa la función de exportación de GrowVPD Pro para crear copias de seguridad manuales.
                </div>

                <h2>Modo Sigiloso (Icono disfrazado de la app)</h2>
                <p>Para máxima discreción, el Modo Sigiloso cambia el icono y nombre de la app en tu pantalla de inicio para que no parezca una app de cultivo.</p>
                <ul>
                    <li>El icono de la app cambia a un diseño genérico e inconspicuo</li>
                    <li>El nombre de la app cambia a algo neutral</li>
                    <li>La app sigue funcionando de forma idéntica</li>
                </ul>

                <h2>Seguridad de datos</h2>
                <p>GrowVPD Pro almacena todos los datos localmente en tu dispositivo. No hay cuentas cloud, no hay servidores almacenando tus datos de cultivo, y no hay analíticas rastreando tus entradas del diario. Tus datos nunca salen de tu teléfono a menos que los exportes explícitamente.</p>

                <h2>Lista de verificación de seguridad</h2>
                <ul>
                    <li>Bloqueo con PIN o biométrico habilitado</li>
                    <li>Privacidad fotográfica habilitada</li>
                    <li>Modo Sigiloso habilitado</li>
                    <li>Exportaciones regulares para copia de seguridad</li>
                    <li>Seguridad a nivel de teléfono (bloqueo de pantalla, encriptación)</li>
                </ul>
`
  },
  "language-setup": {
    title: "Configurar tu idioma: 11 idiomas disponibles",
    body: `
                <h2>Localización completa, no traducción parcial</h2>
                <p>Muchas apps dicen soportar múltiples idiomas pero solo traducen los menús principales. GrowVPD Pro tiene un enfoque diferente: <strong>todo está traducido</strong>. Cada botón, cada etiqueta, cada guía, cada tooltip, cada descripción de enfermedad de plantas, cada etiqueta de la calculadora de nutrientes &mdash; las más de 1,390 cadenas de texto están completamente traducidas a los 11 idiomas soportados.</p>

                <h2>Idiomas disponibles</h2>
                <ul>
                    <li><strong>Inglés (EN)</strong> &mdash; Idioma predeterminado</li>
                    <li><strong>Checo (CS)</strong> &mdash; Checo completo con diacríticos apropiados</li>
                    <li><strong>Alemán (DE)</strong> &mdash; Deutsch</li>
                    <li><strong>Español (ES)</strong> &mdash; Español</li>
                    <li><strong>Neerlandés (NL)</strong> &mdash; Nederlands</li>
                    <li><strong>Francés (FR)</strong> &mdash; Français</li>
                    <li><strong>Italiano (IT)</strong> &mdash; Italiano</li>
                    <li><strong>Portugués (PT)</strong> &mdash; Português</li>
                    <li><strong>Polaco (PL)</strong> &mdash; Polski</li>
                    <li><strong>Tailandés (TH)</strong> &mdash; ไทย</li>
                    <li><strong>Hebreo (HE)</strong> &mdash; עברית (con soporte completo de diseño derecha a izquierda)</li>
                </ul>

                <h2>Cómo cambiar tu idioma</h2>

                <div class="step-card">
                    <span class="step-number">1</span>
                    <h3>Abrir Ajustes</h3>
                    <p>Toca la pestaña <strong>Ajustes</strong> (icono de engranaje) en la parte inferior de la pantalla.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">2</span>
                    <h3>Encontrar la opción de idioma</h3>
                    <p>Desplázate a la sección <strong>General</strong>. Toca <strong>Idioma</strong>. Aparece un selector de idioma mostrando los 11 idiomas disponibles.</p>
                </div>

                <div class="step-card">
                    <span class="step-number">3</span>
                    <h3>Seleccionar tu idioma</h3>
                    <p>Toca tu idioma preferido. Toda la interfaz de la app se actualiza inmediatamente &mdash; no se necesita reiniciar.</p>
                </div>

                <blockquote>
                    <strong>Consejo:</strong> El ajuste de idioma es independiente del idioma del sistema de tu teléfono. Puedes usar tu teléfono en inglés pero ejecutar GrowVPD Pro en español, o cualquier otra combinación.
                </blockquote>

                <h2>Qué se traduce</h2>
                <ul>
                    <li><strong>Todos los elementos de la interfaz:</strong> Nombres de pestañas, botones, etiquetas, menús, diálogos</li>
                    <li><strong>Gráfico de VPD:</strong> Etiquetas de ejes, nombres de etapas, tooltips</li>
                    <li><strong>Guía PPFD:</strong> Recomendaciones de luz, cálculos de DLI</li>
                    <li><strong>Diario de cultivo:</strong> Nombres de etapas, etiquetas de campos</li>
                    <li><strong>Guía de enfermedades y plagas</strong></li>
                    <li><strong>Calculadora de nutrientes</strong></li>
                    <li><strong>Pestaña de Automatización</strong></li>
                    <li><strong>Notificaciones</strong></li>
                    <li><strong>Plantillas de cultivo</strong></li>
                    <li><strong>Mensajes de error y texto de ayuda</strong></li>
                </ul>

                <h2>Soporte derecha a izquierda (RTL) para hebreo</h2>
                <p>GrowVPD Pro soporta completamente el diseño RTL cuando se selecciona hebreo: texto alineado a la derecha, elementos de navegación reflejados, listas y tarjetas con dirección invertida.</p>

                <h2>Idioma y datos</h2>
                <p>Cambiar tu idioma <strong>no</strong> afecta tus datos existentes. Tus entradas del diario, lecturas de sensores y reglas de automatización permanecen exactamente como están. Solo cambian las etiquetas de la interfaz.</p>

                <h2>Calidad de traducción</h2>
                <p>Todas las traducciones son mantenidas por el equipo de desarrollo con aportes de hablantes nativos en la comunidad de cultivadores. La terminología técnica de cultivo (VPD, PPFD, DLI, EC, pH) se mantiene en su forma reconocida internacionalmente en todos los idiomas.</p>

                <blockquote>
                    <strong>¿Quieres ayudar a mejorar las traducciones?</strong> Si notas un error de traducción o tienes una sugerencia para una mejor formulación en tu idioma, contacta en Discord.
                </blockquote>
`
  }
};
