/**
 * GrowVPD Pro — Guide Article Content: Portuguese (Brasileiro)
 * Uses "voce" form (Brazilian Portuguese). Brand/technical terms kept in English.
 * All 23 articles with translated HTML body content.
 */
var GUIDE_CONTENT = {

  "getting-started": {
    title: "Comecando com o GrowVPD Pro",
    body: `
<h2>O que e o GrowVPD Pro?</h2>
<p>O GrowVPD Pro e um aplicativo Android gratuito, offline-first, que oferece tudo o que voce precisa para gerenciar cultivos indoor. Ele combina um grafico VPD, um diario de cultivo completo, guia de luz PPFD, calculadoras de nutrientes, identificacao de doencas de plantas, perfis de equipamentos e automacao de dispositivos inteligentes &mdash; tudo em um unico download de 15 MB. Nenhuma conta necessaria, nenhuma internet necessaria para funcoes principais.</p>
<p>Seja voce um cultivador iniciante ou um especialista com um setup multi-tenda, o app escala desde o simples registro diario ate o controle climatico totalmente automatizado com Tuya, Mars Hydro, AC Infinity e outros dispositivos inteligentes.</p>

<h2>Download e primeiro inicio</h2>
<p>Instale o GrowVPD Pro pelo Google Play. No primeiro inicio, voce vera um breve tutorial de integracao que apresenta as funcoes principais. Voce pode pula-lo se preferir, mas vale os 30 segundos.</p>
<p>O app funciona completamente offline. Voce so precisa de conexao com a internet se quiser conectar dispositivos inteligentes ou compartilhar dados.</p>

<h2>As 9 abas explicadas</h2>
<p>A barra inferior da acesso rapido a cada secao do app:</p>
<ol>
    <li><strong>VPD</strong> &mdash; Mapa de calor VPD interativo. Insira temperatura e umidade para ver seu valor VPD, codificado por cores de acordo com a fase de crescimento. Suporta entrada de sensores Bluetooth e integracao com dispositivos inteligentes.</li>
    <li><strong>PPFD</strong> &mdash; Medidor de luz (usando a camera do celular) e guia de referencia PPFD.</li>
    <li><strong>Automacao</strong> &mdash; Conecte dispositivos inteligentes, crie salas e tendas, configure regras de automacao e monitore seu ambiente em tempo real. Funcao Pro.</li>
    <li><strong>Diario</strong> &mdash; Seu diario de cultivo. Registre entradas diarias com temperatura, umidade, VPD, pH, EC, nutrientes, fotos e notas.</li>
    <li><strong>Templates</strong> &mdash; Templates de cultivo pre-construidos e personalizados.</li>
    <li><strong>Nutrientes</strong> &mdash; Calculadora de nutrientes para programas de alimentacao comuns.</li>
    <li><strong>Guia de Plantas</strong> &mdash; Guia visual para saude das plantas, deficiencias, doencas e tecnicas de treinamento. Inclui diagnostico de doencas por IA (Pro).</li>
    <li><strong>Equipamentos</strong> &mdash; Salve suas configuracoes de tendas, luzes, ventiladores, filtros e outros equipamentos como perfis reutilizaveis.</li>
    <li><strong>Configuracoes</strong> &mdash; Tema, idioma (11 disponiveis), unidades, bloqueio PIN, seguranca biometrica, contas conectadas e opcoes de exportacao.</li>
</ol>

<h2>Configurando seu primeiro cultivo</h2>
<p>Va ate a aba <strong>Diario</strong> e toque no botao "+" para criar um novo cultivo. Voce sera solicitado a informar:</p>
<ol>
    <li><strong>Nome</strong> &mdash; De um nome reconhecivel ao seu cultivo, como "Tenda A - Primavera 2026".</li>
    <li><strong>Cepa</strong> &mdash; Insira a cepa ou variedade que voce esta cultivando.</li>
    <li><strong>Substrato</strong> &mdash; Selecione seu substrato de cultivo (solo, coco, hidro, etc.).</li>
    <li><strong>Tamanho do vaso</strong> &mdash; Insira o tamanho do recipiente.</li>
    <li><strong>Tipo de luz</strong> &mdash; Escolha sua luz (LED, HPS, CMH, etc.).</li>
    <li><strong>Data de inicio</strong> &mdash; O app usa hoje como padrao, mas voce pode retrodatar se o cultivo ja comecou.</li>
</ol>
<p>Apos criado, seu cultivo aparece na lista do diario. Toque nele para comecar a adicionar entradas.</p>

<blockquote>
    <strong>Dica:</strong> Use a aba Templates para comecar a partir de um plano de cultivo pre-construido. Templates incluem programas de alimentacao sugeridos, duracoes de fases e valores VPD alvo.
</blockquote>

<h2>Adicionando sua primeira entrada</h2>
<p>Dentro do seu cultivo, toque em "Adicionar entrada" para registrar um novo dia. O formulario inclui:</p>
<ul>
    <li><strong>Temperatura e umidade</strong> &mdash; Insira suas leituras. O app calcula o VPD automaticamente.</li>
    <li><strong>Fase de crescimento</strong> &mdash; Selecione muda, vegetativa ou floracao.</li>
    <li><strong>pH e EC</strong> &mdash; Acompanhe a qualidade da sua agua ou solucao nutritiva.</li>
    <li><strong>PPFD</strong> &mdash; Registre a leitura de intensidade luminosa.</li>
    <li><strong>Nutrientes</strong> &mdash; Registre o que voce alimentou e quanto.</li>
    <li><strong>Fotos</strong> &mdash; Anexe fotos diretamente da camera ou galeria.</li>
    <li><strong>Notas</strong> &mdash; Texto livre para qualquer outra coisa.</li>
</ul>

<h2>Nocoees basicas do grafico VPD</h2>
<p>Mude para a aba <strong>VPD</strong> para ver o mapa de calor interativo:</p>
<ul>
    <li><strong>Celulas verdes</strong> = VPD ideal para a fase de crescimento selecionada.</li>
    <li><strong>Celulas azuis</strong> = VPD muito baixo (sub-transpiracao, risco de mofo).</li>
    <li><strong>Celulas amarelas/laranjas/vermelhas</strong> = VPD muito alto (super-transpiracao, estresse da planta).</li>
</ul>

<h2>Conectar dispositivos inteligentes (opcional)</h2>
<p>Se voce usa Tuya, Mars Hydro, AC Infinity, Spider Farmer ou outros dispositivos inteligentes suportados, va ate a aba <strong>Automacao</strong> ou <strong>Configuracoes &gt; Contas conectadas</strong> para vincular seus dispositivos.</p>

<h2>Dicas para iniciantes</h2>
<blockquote><strong>Comece com um template.</strong> Templates dao um programa comprovado para seguir.</blockquote>
<blockquote><strong>Verifique o VPD diariamente.</strong> VPD consistente e mais importante que atingir um numero perfeito uma vez.</blockquote>
<blockquote><strong>Tire fotos todos os dias.</strong> Um historico visual e inestimavel para comparar cultivos e diagnosticar problemas.</blockquote>
<blockquote><strong>Registre nutrientes e pH.</strong> Quando algo da errado, ter dados historicos torna a resolucao de problemas muito mais rapida.</blockquote>
<p>Isso e tudo o que voce precisa para comecar. A melhor forma de conhecer o app e usa-lo &mdash; crie um cultivo, registre algumas entradas e explore as abas.</p>
`
  },

  "vpd-complete-guide": {
    title: "Entendendo o VPD: O guia completo para cultivadores indoor",
    body: `
<h2>O que e VPD?</h2>
<p>VPD significa <strong>Vapor Pressure Deficit</strong> (Deficit de Pressao de Vapor). Em termos simples, mede quanto "poder de secagem" o ar tem &mdash; quao agressivamente o ar esta puxando umidade das folhas das suas plantas.</p>
<p>Um VPD mais alto significa que o ar esta puxando agua das folhas mais rapidamente. Um VPD mais baixo significa que o ar esta quase saturado e a evaporacao e lenta. Ambos os extremos causam problemas. O objetivo e encontrar o ponto ideal onde suas plantas transpiram em um ritmo saudavel e produtivo.</p>

<h2>Por que o VPD importa mais que temperatura ou umidade sozinhas</h2>
<p>A maioria dos cultivadores monitora temperatura e umidade separadamente. O problema e que a mesma porcentagem de umidade significa coisas muito diferentes em temperaturas diferentes. O VPD captura essa relacao em um unico numero.</p>

<h2>Como o VPD e calculado</h2>
<p><code>VPD = SVP(temperatura da folha) - AVP(temperatura do ar, umidade)</code></p>
<p>O GrowVPD Pro faz toda essa matematica automaticamente.</p>

<h2>Temperatura da folha vs. temperatura do ar</h2>
<p>As folhas sao tipicamente <strong>1&ndash;3&deg;C mais frias</strong> que o ar circundante devido a transpiracao. No GrowVPD Pro, voce pode ajustar o offset de temperatura da folha nas configuracoes do grafico VPD.</p>

<h2>Zonas VPD explicadas</h2>
<table class="vpd-zones">
    <thead><tr><th>Zona</th><th>Faixa de VPD</th><th>O que acontece</th></tr></thead>
    <tbody>
        <tr><td><span class="zone-dot zone-blue"></span>Sub-transpiracao</td><td>&lt; 0,4 kPa</td><td>Ar quase saturado. Estomatos fecham, transporte de nutrientes desacelera, risco de mofo aumenta significativamente.</td></tr>
        <tr><td><span class="zone-dot zone-light-green"></span>Muda / Clone</td><td>0,4 &ndash; 0,8 kPa</td><td>Transpiracao suave. Ideal para mudas, clones frescos e transplantes com sistemas radiculares limitados.</td></tr>
        <tr><td><span class="zone-dot zone-green"></span>Vegetativa</td><td>0,8 &ndash; 1,2 kPa</td><td>Transpiracao forte e saudavel. Plantas crescem vigorosamente, absorcao de nutrientes e eficiente.</td></tr>
        <tr><td><span class="zone-dot zone-dark-green"></span>Floracao</td><td>1,0 &ndash; 1,5 kPa</td><td>Otimo para desenvolvimento das flores. Ar levemente mais seco estimula producao de resina.</td></tr>
        <tr><td><span class="zone-dot zone-red"></span>Super-transpiracao</td><td>&gt; 1,5 kPa</td><td>Plantas perdem agua mais rapido do que as raizes conseguem fornecer. Estomatos fecham defensivamente.</td></tr>
    </tbody>
</table>

<h2>Como ajustar o VPD</h2>
<h3>VPD muito alto</h3>
<ul>
    <li><strong>Aumente a umidade</strong> &mdash; Ligue um umidificador.</li>
    <li><strong>Diminua a temperatura</strong> &mdash; Aumente a exaustao, levante as luzes.</li>
</ul>
<h3>VPD muito baixo</h3>
<ul>
    <li><strong>Diminua a umidade</strong> &mdash; Ligue um desumidificador, aumente a velocidade do exaustor.</li>
    <li><strong>Aumente a temperatura</strong> &mdash; Ligue as luzes na potencia maxima.</li>
</ul>

<h2>VPD noturno vs. diurno</h2>
<p>Quando as luzes se apagam, a temperatura cai mas a umidade geralmente permanece igual ou sobe. Isso significa que o VPD cai a noite &mdash; as vezes drasticamente.</p>

<h2>Erros comuns de VPD</h2>
<ol>
    <li><strong>Ignorar a temperatura da folha.</strong></li>
    <li><strong>Nao ajustar para a fase de crescimento.</strong></li>
    <li><strong>Medir no lugar errado.</strong></li>
    <li><strong>Perseguir um unico numero perfeito.</strong> Consistencia importa mais que precisao.</li>
    <li><strong>Esquecer a noite.</strong> O gerenciamento de VPD nao para quando as luzes se apagam.</li>
</ol>

<h2>Usando VPD com automacao inteligente</h2>
<p>A aba Automacao do GrowVPD Pro permite criar regras baseadas em VPD que controlam automaticamente seus dispositivos inteligentes. O motor de automacao inclui histerese, overrides baseados em tempo e limites de seguranca.</p>
`
  },

  "connect-tuya": {
    title: "Como conectar dispositivos Tuya / Smart Life ao GrowVPD Pro",
    body: `
<h2>Quais dispositivos Tuya / Smart Life funcionam?</h2>
<p>Tuya e a plataforma por tras de centenas de marcas smart home white-label. Se seu dispositivo funciona com o app <strong>Tuya</strong> ou <strong>Smart Life</strong>, provavelmente funcionara com o GrowVPD Pro.</p>
<ul>
    <li><strong>Sensores de temperatura/umidade</strong> &mdash; Sensores WiFi que alimentam dados ao vivo no grafico VPD.</li>
    <li><strong>Tomadas inteligentes</strong> &mdash; Ligue e desligue umidificadores, desumidificadores, ventiladores ou aquecedores.</li>
    <li><strong>Cameras inteligentes</strong> &mdash; Captura automatica de snapshots para seu diario de cultivo.</li>
    <li><strong>Interruptores e dimmers inteligentes</strong> &mdash; Controle luzes, bombas e outros equipamentos.</li>
    <li><strong>Sensores de umidade do solo, monitores de CO2</strong></li>
</ul>

<h2>Pre-requisitos</h2>
<ul>
    <li>GrowVPD Pro com uma <strong>assinatura Pro</strong> ativa</li>
    <li>Seus dispositivos Tuya/Smart Life ja configurados e funcionando no app oficial</li>
    <li>Uma conexao WiFi estavel</li>
    <li>Uma conta de desenvolvedor na Tuya IoT Platform (gratis)</li>
</ul>

<h2>Etapas de conexao</h2>
<div class="step-card">
    <span class="step-number">1</span>
    <h3>Obtenha as credenciais Tuya Developer</h3>
    <p>Va ate <strong>iot.tuya.com</strong>, crie um projeto Cloud, inscreva-se em <strong>IoT Core</strong> e <strong>Smart Home Device Management</strong>, vincule sua conta do app e copie o <strong>Access ID</strong> e <strong>Access Secret</strong>.</p>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Vincule a conta Tuya no GrowVPD Pro</h3>
    <p>Va ate <strong>Configuracoes &gt; Contas conectadas &gt; Tuya</strong>. Insira Access ID e Access Secret, selecione sua regiao e toque em <strong>Conectar</strong>.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Descubra seus dispositivos</h3>
    <p>Va ate a aba <strong>Automacao</strong> e toque em <strong>Adicionar dispositivos</strong>.</p>
</div>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Atribua dispositivos a salas e tendas</h3>
    <p>Crie uma <strong>Sala</strong>, depois uma <strong>Tenda</strong> dentro dela, e atribua seus sensores e atuadores.</p>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Verifique a conexao</h3>
    <p>Confirme que a tenda mostra temperatura e umidade atuais, que o VPD esta calculado e que o controle das tomadas inteligentes funciona.</p>
</div>

<h2>Solucao de problemas</h2>
<h3>"Nenhum dispositivo encontrado"</h3>
<ul>
    <li><strong>Verifique sua regiao.</strong> Deve corresponder entre GrowVPD Pro, Tuya IoT Platform e seu app.</li>
    <li><strong>Verifique as credenciais.</strong> Sao sensiveis a maiusculas.</li>
    <li><strong>Vincule sua conta do app</strong> na Tuya IoT Platform.</li>
</ul>

<h2>Snapshots automaticos da camera Tuya</h2>
<p>Se voce tem uma camera compativel com Tuya, o GrowVPD Pro pode capturar snapshots periodicos automaticamente e salva-los no diario.</p>

<div class="warning-box">
    <strong>Nota:</strong> Toda a comunicacao dos dispositivos Tuya requer WiFi e acesso a internet. Se a conexao cair, as regras de automacao pausam ate o restabelecimento.
</div>
`
  },

  "connect-mars-hydro": {
  title: "Como conectar dispositivos Mars Hydro ao GrowVPD Pro",
  body: `
<h2>Quais dispositivos Mars Hydro funcionam?</h2>
<p>O GrowVPD Pro suporta a linha <strong>iConnect</strong> da Mars Hydro: ventiladores in-line (0&ndash;100%), luzes LED (dimerizaveis), sensores ambientais e controladores.</p>

<div class="important-box">
    <strong>O GrowVPD Pro emparelha dispositivos diretamente</strong> &mdash; o app MarsPro NAO e necessario. O Bluetooth (BLE) e usado uma unica vez durante o emparelhamento diretamente no GrowVPD Pro, depois todo o controle e feito via WiFi/MQTT.
</div>

<h2>Pre-requisitos</h2>
<ul>
    <li>GrowVPD Pro com <strong>assinatura Pro</strong> ativa</li>
    <li>Dispositivo(s) Mars Hydro iConnect</li>
    <li>Rede WiFi estavel (2,4 GHz)</li>
    <li>Conta Mars Hydro (crie uma em <strong>marshydro.com</strong> se nao tiver)</li>
</ul>

<h2>Como funciona a conexao</h2>
<p>Mars Hydro usa o <strong>protocolo MQTT</strong> &mdash; rapido e confiavel para IoT. Os comandos chegam ao dispositivo em segundos.</p>

<h2>Etapas de conexao</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Vincule a conta Mars Hydro no GrowVPD Pro</h3>
    <p><strong>Configuracoes &gt; Contas conectadas &gt; Mars Hydro</strong>. Insira email e senha da sua conta Mars Hydro. Nao tem conta? Crie uma em <strong>marshydro.com</strong>. Toque em <strong>Conectar</strong>.</p>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Coloque o dispositivo em modo de pareamento</h3>
    <p>Para luzes com botao dimmer: gire de OFF para 75%+ e de volta para OFF, repita 2&ndash;3 vezes rapidamente ate que a luz pisque (intensidade 0%&ndash;100%). Para outros dispositivos, segure o botao conforme o manual.</p>
    <div class="warning-box">
        <strong>Aviso:</strong> A posicao EXT fica ao lado de OFF no botao &mdash; certifique-se de acertar OFF, nao EXT. Piscar = modo de pareamento. <strong>5&ndash;10 segundos</strong> para iniciar no GrowVPD Pro.
    </div>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Descubra e pareie no GrowVPD Pro</h3>
    <p>Aba <strong>Automacao &gt; Adicionar dispositivos &gt; Mars Hydro</strong>. O app inicia um escaneamento BLE e encontra seu dispositivo. Selecione-o e o GrowVPD Pro enviara automaticamente suas credenciais WiFi.</p>
</div>

<blockquote>
    <strong>Dica:</strong> Ative o Bluetooth e conceda permissoes de Bluetooth e localizacao ao GrowVPD Pro. O escaneamento BLE no Android requer permissao de localizacao.
</blockquote>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Atribua a salas e tendas</h3>
    <ul>
        <li>Crie ou selecione uma <strong>Sala</strong></li>
        <li>Crie ou selecione uma <strong>Tenda</strong></li>
        <li>Atribua sensores e atuadores Mars Hydro</li>
    </ul>
    <p>Voce pode misturar dispositivos de diferentes marcas na mesma tenda &mdash; um sensor Tuya pode controlar um ventilador Mars Hydro.</p>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Teste o controle</h3>
    <ul>
        <li><strong>Ventilador</strong> &mdash; ajuste velocidade, resposta em 1&ndash;3 segundos.</li>
        <li><strong>Luz LED</strong> &mdash; ajuste dimerizacao.</li>
        <li><strong>Sensores</strong> &mdash; verifique atualizacao dos dados.</li>
    </ul>
</div>

<h2>BLE vs. WiFi</h2>
<ul>
    <li><strong>BLE</strong> &mdash; <strong>apenas uma vez</strong> durante o pareamento no GrowVPD Pro.</li>
    <li><strong>WiFi + MQTT</strong> &mdash; todo controle e automacao continua.</li>
    <li>Apos configuracao, <strong>sem necessidade de Bluetooth</strong>.</li>
</ul>

<h2>Solucao de problemas</h2>

<h3>&quot;Dispositivo nao encontrado&quot; no escaneamento BLE</h3>
<ul>
    <li>Bluetooth ativado? Permissoes (Bluetooth + localizacao) concedidas?</li>
    <li>Repita sequencia do dimmer (OFF&rarr;75%&rarr;OFF). Janela: 5&ndash;10 segundos.</li>
    <li>Fique perto do dispositivo (2&ndash;3 metros).</li>
    <li>Mudou a senha? Atualize nas Configuracoes.</li>
</ul>

<h3>&quot;Nao consigo controlar o dispositivo&quot;</h3>
<ul>
    <li>Verifique sinal WiFi. Em tendas metalicas considere um repetidor WiFi.</li>
    <li>Reinicie o dispositivo, aguarde 30s para reconexao MQTT.</li>
    <li>Certifique-se de usar WiFi 2,4 GHz.</li>
</ul>

<h2>Combinando com outras plataformas</h2>
<p>Sensor Tuya + ventilador Mars Hydro, sensor Mars Hydro + tomada Tuya, luz Mars Hydro + ventilador AC Infinity. Tudo pela mesma aba Automacao.</p>

<div class="warning-box">
    <strong>Lembre-se:</strong> Dispositivos Mars Hydro WiFi requerem internet ativa. Sem internet, a automacao pausa (dispositivos continuam com ultimos valores).
</div>
`
},

  "automation-rules": {
    title: "Configurando regras de automacao inteligente no GrowVPD Pro",
    body: `
<p>Uma das funcoes mais poderosas do GrowVPD Pro e a capacidade de criar regras de automacao que funcionam <strong>entre diferentes marcas</strong>. Nenhum outro app de cultivo oferece esse nivel de controle cross-brand.</p>

<h2>O que sao regras de automacao?</h2>
<p>Uma regra de automacao e uma simples instrucao de causa e efeito: <strong>quando uma certa condicao e atendida, execute uma acao</strong>. O GrowVPD Pro verifica as regras a cada 15 minutos em segundo plano usando o WorkManager do Android.</p>
<p>Cada regra consiste em tres partes:</p>
<ol>
    <li><strong>Entrada do sensor</strong> &mdash; qual dispositivo fornece os dados</li>
    <li><strong>Condicao</strong> &mdash; qual limiar ativa a regra</li>
    <li><strong>Acao</strong> &mdash; o que o dispositivo deve fazer quando a condicao e ativada e quando e restaurada</li>
</ol>

<h2>Criando sua primeira regra de automacao</h2>
<h3>Passo 1: Selecione o dispositivo sensor</h3>
<p>Escolha qual dispositivo conectado fornece os dados do sensor que voce quer monitorar.</p>

<h3>Passo 2: Escolha o tipo de condicao</h3>
<p>O GrowVPD Pro suporta 12 tipos de condicao: VPD, temperatura, umidade, CO2, PPFD, umidade do solo, EC do solo, temperatura do solo, temperatura noturna, diferencial de temperatura, taxa de variacao da umidade, taxa de variacao do VPD.</p>

<h3>Passo 3: Defina o valor limiar</h3>
<p>Insira o valor que deve ativar a regra.</p>

<h3>Passo 4: Defina a histerese</h3>
<p>Histerese e uma zona de buffer que impede os dispositivos de ligar e desligar rapidamente. Uma histerese de 0,1 kPa para VPD ou 2&deg;C para temperatura funciona bem para a maioria das configuracoes.</p>

<h3>Passo 5: Selecione o dispositivo alvo</h3>
<p>Escolha qual dispositivo deve responder. O dispositivo nao precisa ser da mesma marca do sensor.</p>

<h3>Passo 6: Defina as acoes</h3>
<ul>
    <li><strong>Acao de ativacao</strong> &mdash; o que acontece quando a condicao e atendida</li>
    <li><strong>Acao de restauracao</strong> &mdash; o que acontece quando a condicao volta ao normal</li>
</ul>

<h2>Exemplos de regras</h2>
<h3>Controle de VPD com dispositivos cross-brand</h3>
<ul>
    <li><strong>Sensor:</strong> Sensor WiFi Tuya temperatura/umidade</li>
    <li><strong>Condicao:</strong> VPD &gt; 1,4 kPa</li>
    <li><strong>Alvo:</strong> Umidificador Mars Hydro (via tomada inteligente)</li>
    <li><strong>Acao de ativacao:</strong> Ligar</li>
    <li><strong>Acao de restauracao:</strong> Desligar (quando VPD cai abaixo de 1,3 kPa)</li>
</ul>

<h2>Funcoes de seguranca</h2>
<ul>
    <li><strong>Histerese em cada regra</strong> previne ligacao/desligamento rapido</li>
    <li><strong>Tempo minimo desligado</strong> protege dispositivos como compressores</li>
    <li><strong>Tempo maximo de funcionamento</strong> previne funcionamento indefinido</li>
    <li><strong>Niveis de prioridade</strong> resolvem conflitos entre regras</li>
    <li><strong>Deteccao anti-conflito</strong> alerta quando regras podem conflitar</li>
</ul>
`
  },

  "grow-diary-guide": {
    title: "Diario de cultivo: Da semente a colheita &mdash; Guia completo",
    body: `
<p>Um diario de cultivo e a ferramenta mais valiosa para melhorar seus resultados ao longo do tempo. Cada colheita ensina algo &mdash; mas so se voce registrou o que aconteceu ao longo do caminho.</p>

<h2>Por que registrar seu cultivo?</h2>
<ul>
    <li><strong>Identificar o que funciona</strong> &mdash; correlacionar programas nutricionais especificos, faixas de VPD ou tecnicas com melhores resultados</li>
    <li><strong>Detectar problemas cedo</strong> &mdash; uma queda subita no pH aparece claramente no seu historico de dados</li>
    <li><strong>Prever o timing da colheita</strong> &mdash; comparando o cultivo atual com anteriores da mesma cepa</li>
    <li><strong>Construir um banco de dados pessoal</strong> &mdash; apos varios cultivos, voce desenvolve conhecimento especifico por cepa</li>
</ul>

<h2>Criando um novo cultivo</h2>
<p>Abra a aba <strong>Diario</strong> e toque em <strong>+ Novo cultivo</strong>. Insira nome, cepa, tipo (photoperiod ou autoflower), substrato, tamanho do vaso, numero de plantas e tipo de agua.</p>

<h2>Adicionando entradas diarias</h2>
<p>Voce nao precisa preencher todos os campos toda vez &mdash; registre o que importa para voce. Com o tempo, ate entradas parciais constroem um historico valioso.</p>

<h2>Fases de crescimento</h2>
<p>O GrowVPD Pro usa seis fases: Muda, Vegetativa, Transicao, Floracao, Floracao tardia, Colheita.</p>

<h2>Rastreamento da colheita</h2>
<ul>
    <li><strong>Peso fresco</strong> &mdash; peso total logo apos o corte</li>
    <li><strong>Peso seco</strong> &mdash; peso apos a secagem (o numero que importa)</li>
    <li><strong>Analise de tricomas</strong> &mdash; porcentagem de tricomas transparentes, leitosos e ambar</li>
</ul>

<h2>Comparando cultivos</h2>
<p>A funcao <strong>Comparar</strong> permite visualizar dois cultivos lado a lado semana a semana.</p>

<h2>Exportando o diario</h2>
<ul>
    <li><strong>Relatorio PDF</strong> &mdash; documento formatado com entradas, fotos, graficos e resumo da colheita</li>
    <li><strong>Exportacao de dados JSON</strong> &mdash; dados brutos para analise em planilhas</li>
</ul>
`
  },

  "ppfd-dli-guide": {
    title: "Guia de PPFD e DLI para cultivo indoor",
    body: `
<p>A luz e o motor da fotossintese. Mas falar sobre luz em termos de potencia e enganoso &mdash; o que realmente importa e quanta luz utilizavel chega as suas plantas.</p>

<h2>O que e PPFD?</h2>
<p><strong>PPFD</strong> significa <strong>Photosynthetic Photon Flux Density</strong>. Mede o numero de fotons na faixa de 400&ndash;700nm que atingem um metro quadrado a cada segundo. A unidade e <strong>&mu;mol/m&sup2;/s</strong>.</p>

<h2>O que e DLI?</h2>
<p><strong>DLI</strong> significa <strong>Daily Light Integral</strong>. Mede a quantidade total de luz fornecida ao longo de um dia inteiro. A unidade e <strong>mol/m&sup2;/dia</strong>.</p>

<h2>PPFD ideal por fase de crescimento</h2>
<table>
    <thead><tr><th>Fase</th><th>Faixa PPFD</th><th>Programacao tipica</th><th>DLI alvo</th></tr></thead>
    <tbody>
        <tr><td>Mudas / Clones</td><td>100&ndash;300 &mu;mol/m&sup2;/s</td><td>18/6</td><td>12&ndash;18 mol/m&sup2;/dia</td></tr>
        <tr><td>Vegetativa precoce</td><td>300&ndash;400 &mu;mol/m&sup2;/s</td><td>18/6</td><td>18&ndash;25 mol/m&sup2;/dia</td></tr>
        <tr><td>Vegetativa tardia</td><td>400&ndash;600 &mu;mol/m&sup2;/s</td><td>18/6 ou 20/4</td><td>25&ndash;35 mol/m&sup2;/dia</td></tr>
        <tr><td>Floracao</td><td>600&ndash;900 &mu;mol/m&sup2;/s</td><td>12/12</td><td>30&ndash;40 mol/m&sup2;/dia</td></tr>
        <tr><td>Floracao + CO2</td><td>900&ndash;1500 &mu;mol/m&sup2;/s</td><td>12/12</td><td>40&ndash;65 mol/m&sup2;/dia</td></tr>
    </tbody>
</table>

<h2>Erros comuns de iluminacao</h2>
<h3>Luz demais para mudas</h3>
<p>O erro numero um de novos cultivadores com LED. Sempre diminua ou levante a luz nas duas primeiras semanas.</p>
<h3>Luz insuficiente durante a floracao</h3>
<p>Aumente o PPFD para 650&ndash;900 quando mudar para floracao para compensar o fotoperiodo mais curto.</p>
`
  },

  "equipment-setup": {
    title: "Banco de dados de equipamentos e Setup Builder",
    body: `
<p>O GrowVPD Pro inclui um banco de dados curado de <strong>200+ produtos de 47 marcas</strong> e ferramentas para planejar e otimizar seu espaco de cultivo.</p>

<h2>O banco de dados de equipamentos</h2>
<p>Inclui luzes LED, tendas, ventilacao, sensores ambientais e controladores com especificacoes tecnicas detalhadas.</p>

<h2>Calculadora de nutrientes</h2>
<p>Suporta <strong>69+ fertilizantes de 7 marcas principais</strong>: BioBizz, Canna, Plagron, Advanced Nutrients, General Hydroponics, Hesi e Atami. Calcula os ml exatos de cada nutriente.</p>

<h2>Misturador de substrato</h2>
<p>Crie e salve receitas personalizadas de substrato com as proporcoes desejadas para cada componente.</p>

<h2>Calculadora de ventilacao</h2>
<p>Calcula os CFM necessarios baseado nas dimensoes da tenda, filtro de carvao, comprimento dos dutos e potencia das luzes.</p>

<h2>Setup Builder</h2>
<p>Guia voce no planejamento de um espaco de cultivo completo do zero com recomendacoes de luzes, ventilacao e calculo de potencia total.</p>

<h2>Perfis de equipamento</h2>
<p>Salve configuracoes completas da tenda como perfis reutilizaveis, compartilhados entre a aba Equipamentos e a aba Automacao.</p>
`
  },

  "vpd-seedling-clone": {
    title: "VPD para mudas e clones: Como fazer certo",
    body: `
<h2>Por que mudas e clones precisam de atencao especial</h2>
<p>Mudas e clones recem-cortados sao a fase mais vulneravel. Seus sistemas radiculares sao subdesenvolvidos (mudas) ou inexistentes (clones), entao dependem quase inteiramente de suas folhas para absorver umidade.</p>

<h2>Faixa de VPD ideal: 0,4&ndash;0,8 kPa</h2>
<ul>
    <li><strong>24&deg;C a 80% RH</strong> &rarr; VPD ~0,60 kPa (ponto ideal)</li>
    <li><strong>25&deg;C a 85% RH</strong> &rarr; VPD ~0,48 kPa (bom para clones frescos)</li>
</ul>

<h2>Cupulas de umidade</h2>
<p>Comece completamente fechada nos primeiros 2&ndash;3 dias, depois abra gradualmente as saidas de ar. Remova a cupula em etapas por volta do dia 7&ndash;14.</p>

<h2>Clones vs. mudas</h2>
<p><strong>Clones:</strong> VPD alvo 0,4&ndash;0,6 kPa, RH 80&ndash;90%. <strong>Mudas:</strong> VPD alvo 0,5&ndash;0,8 kPa, RH 70&ndash;80%.</p>

<h2>Erros comuns</h2>
<p>Ambiente muito seco sem cupula, temperatura muito alta sob a cupula, remocao da cupula muito rapida, sem movimento de ar sob a cupula.</p>

<h2>Transicao para crescimento vegetativo</h2>
<p>Quando as mudas tem 3&ndash;4 conjuntos de folhas verdadeiras, ou os clones mostram crescimento radicular visivel, transicione gradualmente para os alvos VPD vegetativos de <strong>0,8&ndash;1,2 kPa</strong>.</p>
`
  },

  "vpd-flowering": {
    title: "VPD durante a floracao: Previna mofo e maximize a colheita",
    body: `
<h2>Por que a floracao exige VPD mais alto</h2>
<p>Durante a floracao, buds densos criam bolsoes de umidade aprisionada. Se a umidade relativa permanece muito alta, a agua se condensa dentro onde o fluxo de ar nao alcanca. O resultado e <strong>botrytis</strong> (mofo nos buds).</p>

<h2>VPD ideal por semana de floracao</h2>
<h3>Floracao precoce (semanas 1&ndash;3)</h3>
<ul><li><strong>VPD alvo:</strong> 1,0&ndash;1,3 kPa</li><li><strong>Temperatura:</strong> 24&ndash;27&deg;C</li><li><strong>Umidade:</strong> 55&ndash;65% RH</li></ul>
<h3>Floracao media (semanas 3&ndash;6)</h3>
<ul><li><strong>VPD alvo:</strong> 1,2&ndash;1,5 kPa</li><li><strong>Temperatura:</strong> 23&ndash;26&deg;C</li><li><strong>Umidade:</strong> 45&ndash;55% RH</li></ul>
<h3>Floracao tardia (semanas 6&ndash;9+)</h3>
<ul><li><strong>VPD alvo:</strong> 1,3&ndash;1,6 kPa</li><li><strong>Temperatura:</strong> 21&ndash;24&deg;C</li><li><strong>Umidade:</strong> 40&ndash;50% RH</li></ul>

<h2>O problema do pico noturno</h2>
<p>O momento mais perigoso para mofo e a primeira hora apos as luzes se apagarem. O VPD despenca, as vezes para 0,5&ndash;0,7 kPa.</p>
<p>Solucoes: desumidificador 24/7 na floracao tardia, pequeno aquecedor, automacao com regras baseadas em VPD no GrowVPD Pro.</p>

<h2>Checklist: configuracao climatica para floracao</h2>
<ul>
    <li>Desumidificador dimensionado para o volume da tenda</li>
    <li>Ventiladores oscilantes para fluxo de ar indireto</li>
    <li>Exaustao in-line funcionando continuamente</li>
    <li>Sensor de temperatura/umidade no nivel da copa</li>
    <li>Alvo VPD ajustando semanalmente</li>
    <li>Estrategia de umidade noturna</li>
</ul>
`
  },

  "night-temperature-vpd": {
    title: "Temperatura noturna e VPD: O fator negligenciado",
    body: `
<h2>O diferencial de temperatura dia/noite</h2>
<p>O <strong>diferencial de temperatura dia/noite</strong> (DIF) afeta diretamente o alongamento, expressao de cor, preservacao de terpenos e risco de doencas.</p>

<h2>Como o DIF afeta suas plantas</h2>
<ul>
    <li><strong>DIF positivo</strong> (dia mais quente por 5&ndash;10&deg;C): promove alongamento.</li>
    <li><strong>DIF zero</strong>: crescimento moderado e equilibrado.</li>
    <li><strong>DIF negativo</strong> (noite mais quente por 2&ndash;4&deg;C): reduz alongamento, plantas compactas.</li>
</ul>

<h2>Expressao de cor (antocianinas)</h2>
<p>Temperaturas noturnas frias abaixo de 18&deg;C ativam pigmentos de antocianina. O ponto ideal e 16&ndash;18&deg;C a noite.</p>

<h2>A queda do VPD ao desligar as luzes</h2>
<p>Em uma hora tipica, o VPD pode cair de 1,53 para 0,62 kPa &mdash; na zona de perigo para mofo.</p>

<h2>Estrategias para gerenciamento do VPD noturno</h2>
<ol>
    <li>Desumidificador 24/7 na floracao tardia</li>
    <li>Pequeno aquecedor com termostato</li>
    <li>Automacao com regras baseadas em VPD</li>
    <li>Escalonar horarios de luz em setups multi-tenda</li>
</ol>
`
  },

  "humidity-control-guide": {
    title: "Como controlar a umidade na sua sala de cultivo",
    body: `
<h2>Por que o controle de umidade e importante</h2>
<p>A umidade e metade da equacao VPD. Controle inadequado leva a oscilacoes de VPD que estressam as plantas e reduzem as colheitas.</p>

<h2>Umidificadores</h2>
<p>Necessarios para mudas/clones, climas secos e tendas pequenas com forte exaustao. Tipos: ultrasonico (nevoa fria), evaporativo, a vapor (nevoa quente).</p>

<h2>Desumidificadores</h2>
<p>Criticos durante a floracao, em climas umidos e a noite. Tipos: compressor (refrigerante), dessecante.</p>

<h2>Automacao baseada em VPD</h2>
<p>O controle mais eficaz usa VPD como gatilho, nao valores brutos de umidade. Configure duas regras: uma para o desumidificador quando o VPD cai demais, uma para o umidificador quando sobe demais.</p>

<h2>Dicas DIY para cultivadores com orcamento limitado</h2>
<p>Toalha umida perto da entrada para aumentar a umidade. Aumente a velocidade de exaustao para diminuir. Desfolhacao reduz a superficie de transpiracao.</p>

<h2>Referencia rapida por fase</h2>
<ul>
    <li><strong>Mudas:</strong> Cupula + pequeno umidificador</li>
    <li><strong>Vegetativa:</strong> Umidificador OU controle de exaustao (alvo 60&ndash;70% RH)</li>
    <li><strong>Floracao precoce:</strong> Desumidificador em standby (alvo 50&ndash;60% RH)</li>
    <li><strong>Floracao tardia:</strong> Desumidificador 24/7 (alvo 40&ndash;50% RH)</li>
</ul>
`
  },

  "cross-brand-automation": {
    title: "Automacao cross-brand: Combinando Tuya, Mars Hydro e mais",
    body: `
<h2>O problema: jardins murados</h2>
<p>Cada marca de dispositivo inteligente tem seu proprio app, sua propria nuvem e seu proprio sistema de automacao. Eles nao se comunicam nativamente.</p>

<h2>A solucao: GrowVPD Pro como hub</h2>
<p>O GrowVPD Pro conecta-se a <strong>multiplas plataformas simultaneamente</strong> e trata todos os dispositivos como parte de um sistema unificado. Plataformas suportadas: Tuya / Smart Life, AC Infinity, Mars Hydro, Spider Farmer, TP-Link Tapo.</p>

<h2>Cenarios cross-brand reais</h2>
<h3>Cenario 1: Sensor Tuya + Ventilador Mars Hydro</h3>
<p>Um sensor WiFi Tuya barato na tenda e um ventilador in-line Mars Hydro. O ventilador acelera quando o VPD ultrapassa o alvo.</p>
<h3>Cenario 2: Controlador AC Infinity + Tomada inteligente Tuya</h3>
<p>O controlador AC Infinity le os dados. A tomada Tuya controla um desumidificador externo baseado em regras VPD.</p>
<h3>Cenario 3: Luz Mars Hydro + Ventilador AC Infinity + Sensor Tuya</h3>
<p>Automacao completa da tenda com dispositivos de tres marcas.</p>

<blockquote>
    <strong>Dica:</strong> Comece simples. Adicione primeiro um sensor e um atuador, crie uma regra e teste. Depois expanda.
</blockquote>
`
  },

  "automation-troubleshooting": {
    title: "Guia de solucao de problemas de automacao inteligente",
    body: `
<h2>Problema 1: Dispositivo mostra "Offline"</h2>
<ol>
    <li><strong>Verifique a alimentacao fisica.</strong></li>
    <li><strong>Verifique a conexao WiFi.</strong> Abra o app nativo do dispositivo.</li>
    <li><strong>Reinicie o dispositivo.</strong> Desconecte, espere 10 segundos, reconecte.</li>
    <li><strong>Verifique o roteador.</strong> Limites de dispositivos, banda 2,4 GHz.</li>
    <li><strong>Re-pareie se necessario.</strong></li>
</ol>

<h2>Problema 2: Regra de automacao nao dispara</h2>
<ol>
    <li>Verifique a leitura do sensor (dados atualizados?).</li>
    <li>Confirme que a condicao esta realmente sendo atendida.</li>
    <li>Verifique a programacao de horario da regra.</li>
    <li>Verifique o tempo minimo desligado (cooldown).</li>
</ol>

<h2>Problema 3: Dispositivo responde lentamente</h2>
<p>O GrowVPD Pro verifica as regras a cada 15 minutos via WorkManager. Para uma resposta mais rapida, abra o app e toque manualmente em atualizar.</p>

<h2>Problema 4: Token expirado</h2>
<p>Tokens de API expiram periodicamente. Va ate Configuracoes &gt; Contas conectadas e reconecte-se a plataforma afetada.</p>
`
  },

  "energy-monitoring": {
    title: "Monitoramento de energia e rastreamento de custos para seu cultivo",
    body: `
<h2>Por que rastrear energia?</h2>
<p>A eletricidade e o maior custo continuo do cultivo indoor. Uma unica tenda de 120x120 cm pode consumir <strong>8&ndash;15 kWh por dia</strong>.</p>

<h2>Como o GrowVPD Pro rastreia energia</h2>
<h3>1. Relatorio de potencia das tomadas inteligentes</h3>
<p>Algumas tomadas inteligentes Tuya relatam consumo em tempo real (watts) e acumulado (kWh). Metodo mais preciso.</p>
<h3>2. Energia estimada pela potencia nominal</h3>
<p>Para dispositivos sem relatorio direto, o app usa a potencia nominal multiplicada pelo tempo de funcionamento registrado.</p>

<h2>Entendendo seu balanco energetico</h2>
<p>O painel de energia mostra consumo por dispositivo, por tenda e por sala.</p>

<blockquote>
    <strong>Dica:</strong> Configure a potencia nominal de cada dispositivo nas configuracoes do dispositivo para o rastreamento mais preciso.
</blockquote>
`
  },

  "harvest-tracking": {
    title: "Rastreamento de colheita: Peso fresco, peso seco e eficiencia",
    body: `
<h2>Por que registrar dados da colheita?</h2>
<p>Sem registrar os resultados, voce nao tem como comparar cultivos objetivamente. <strong>487g secos de 4 plantas sob 480W em 63 dias de floracao</strong> &mdash; esses sao dados dos quais voce pode aprender.</p>

<h2>Registrando a colheita no GrowVPD Pro</h2>
<h3>Peso fresco</h3>
<p>Pese logo apos o corte. Aproximadamente 75&ndash;80% do peso fresco e agua.</p>
<h3>Peso seco</h3>
<p>Apos a secagem (7&ndash;14 dias a 60% RH e 18&ndash;21&deg;C). Esta e sua colheita real.</p>

<h2>Metricas chave de eficiencia</h2>
<h3>Gramas por watt (g/W)</h3>
<ul>
    <li><strong>Abaixo de 0,5 g/W:</strong> Espaco para melhoria.</li>
    <li><strong>0,5&ndash;1,0 g/W:</strong> Bom.</li>
    <li><strong>1,0&ndash;1,5+ g/W:</strong> Excelente.</li>
</ul>

<blockquote>
    <strong>Dica:</strong> Uma proporcao fresco-seco saudavel e de 4:1 a 5:1. Se o peso seco e menos de 20% do fresco, voce pode ter secado demais.
</blockquote>
`
  },

  "comparing-grows": {
    title: "Comparando cultivos: Aprenda com cada resultado",
    body: `
<h2>Usando a funcao de comparacao</h2>
<ol>
    <li>Abra a aba <strong>Diario</strong></li>
    <li>Toque no icone de comparacao na barra superior</li>
    <li>Selecione o primeiro cultivo</li>
    <li>Selecione o segundo cultivo</li>
    <li>A tela mostra ambos com timelines paralelas</li>
</ol>

<h2>O que comparar</h2>
<h3>Metricas de colheita</h3>
<p>Peso seco, g/W, g/planta e g/m2.</p>
<h3>Consistencia do VPD</h3>
<p>O cultivo com VPD mais consistente quase sempre performa melhor.</p>
<h3>Velocidade de crescimento</h3>
<p>Compare a timeline da semente a colheita.</p>
<h3>Niveis de PPFD</h3>
<p>Compare a intensidade luminosa entre cultivos.</p>
<h3>Programas nutricionais</h3>
<p>Compare valores EC/PPM semana a semana.</p>
<h3>Tecnicas de treinamento</h3>
<p>LST vs topping, SOG vs ScrOG &mdash; a comparacao revela o que funcionou melhor na sua configuracao especifica.</p>
`
  },

  "photo-documentation": {
    title: "Documentacao fotografica: Guia visual para o diario de cultivo",
    body: `
<h2>Quando fotografar</h2>
<ul>
    <li><strong>Dia 1:</strong> Sementes plantadas ou clones transplantados.</li>
    <li><strong>Primeiras folhas verdadeiras / raizes visiveis</strong></li>
    <li><strong>Inicio de cada semana:</strong> Foto consistente do mesmo angulo.</li>
    <li><strong>Qualquer problema:</strong> Amarelamento, manchas, enrolamento, pragas.</li>
    <li><strong>Eventos de treinamento:</strong> Antes e depois de topping, LST, desfolhacao.</li>
    <li><strong>Mudanca para floracao:</strong> O dia da mudanca para 12/12.</li>
    <li><strong>Semanalmente durante a floracao:</strong> Desenvolvimento dos buds, close-ups de tricomas.</li>
    <li><strong>Dia da colheita</strong></li>
    <li><strong>Apos a secagem:</strong> O produto final nos potes.</li>
</ul>

<h3>Snapshots automaticos de camera</h3>
<p>Cameras Tuya ou Tapo conectadas pelo GrowVPD Pro podem capturar automaticamente snapshots diarios. A funcao timelapse monta-os em um video.</p>

<h2>Dicas de camera para salas de cultivo</h2>
<p>Desligue a luz de cultivo e use uma luz branca neutra para representacao fiel das cores. Sempre fotografe da mesma posicao e angulo.</p>
`
  },

  "nutrient-deficiency-guide": {
    title: "Guia de deficiencias nutricionais: Diagnostico visual",
    body: `
<h2>Nutrientes moveis vs. imoveis</h2>
<ul>
    <li><strong>Nutrientes moveis</strong> (N, P, K, Mg): deficiencias nas <strong>folhas inferiores/mais velhas</strong></li>
    <li><strong>Nutrientes imoveis</strong> (Ca, Fe, Mn, Zn, S, B, Cu): deficiencias nas <strong>folhas superiores/mais novas</strong></li>
</ul>

<h2>Nitrogenio (N) &mdash; Movel</h2>
<p>Amarelamento uniforme das folhas inferiores. Planta geralmente verde-claro.</p>
<p><strong>Solucao:</strong> Aumente o nitrogenio na alimentacao.</p>

<h2>Fosforo (P) &mdash; Movel</h2>
<p>Folhas escuras azul-esverdeadas com caules roxos. Manchas marrons/roxas nas folhas velhas.</p>

<h2>Potassio (K) &mdash; Movel</h2>
<p>Bordas marrons queimadas nas folhas velhas. Bordas das folhas curvam para cima.</p>

<h2>Calcio (Ca) &mdash; Imovel</h2>
<p>Crescimento novo deformado ou encolhido. Manchas marrons nas folhas jovens.</p>

<blockquote>
    <strong>Dica:</strong> O Guia de Doencas e Pragas do GrowVPD Pro inclui uma ferramenta de diagnostico visual com imagens de referencia para todas as deficiencias comuns.
</blockquote>
`
  },

  "substrate-mixing": {
    title: "Mistura de substratos: Crie seu proprio meio de cultivo",
    body: `
<h2>Componentes comuns de substrato</h2>
<h3>Fibra de coco</h3>
<p>Excelente equilibrio entre retencao de agua e aeracao. Inerte, da controle total sobre a nutricao.</p>
<ul>
    <li><strong>Pros:</strong> Otima retencao de agua + drenagem, reutilizavel</li>
    <li><strong>Contras:</strong> Requer nutrientes desde o dia um, precisa de cal-mag</li>
    <li><strong>pH:</strong> 5,8&ndash;6,2</li>
</ul>
<h3>Perlita</h3>
<p>Vidro vulcanico expandido. Excelente drenagem e aeracao.</p>
<h3>Vermiculita</h3>
<p>Retem 3&ndash;4 vezes seu peso em agua.</p>

<h2>Misturas populares</h2>
<h3>Coco/Perlita padrao (70/30)</h3>
<p>A mistura mais popular. 70% fibra de coco + 30% perlita.</p>
<h3>Super soil (organico)</h3>
<p>Solo "vivo" pre-misturado com composto, humus de minhoca, farinha de osso. So agua necessaria.</p>

<h2>Misturador de substrato no GrowVPD Pro</h2>
<p>Defina os componentes, ajuste a proporcao de cada um e salve a receita. O misturador calcula o volume real necessario.</p>
`
  },

  "tent-ventilation-guide": {
    title: "Ventilacao da tenda de cultivo: Guia completo de CFM",
    body: `
<h2>Por que boa ventilacao e essencial</h2>
<p>A troca de ar e essencial para controle de temperatura, gerenciamento de umidade, reposicao de CO2 e controle de odores.</p>

<h2>Calculando CFM</h2>
<p>Volume da tenda x multiplicadores para filtro de carvao (1,25), comprimento de dutos e curvas (1,2), alto calor (1,2), clima umido (1,15).</p>

<h2>Pressao negativa</h2>
<p>Garante que todo o ar passe pelo filtro de carvao. Se as paredes da tenda puxam levemente para dentro, voce tem pressao negativa.</p>

<h2>Dimensionamento do filtro de carvao</h2>
<p>Combine os CFM do filtro de carvao com seu ventilador in-line.</p>

<blockquote>
    <strong>Dica:</strong> A Calculadora de Ventilacao na aba Equipamentos do GrowVPD Pro faz esses calculos para voce.
</blockquote>
`
  },

  "privacy-security-guide": {
    title: "Privacidade e seguranca no GrowVPD Pro",
    body: `
<h2>Bloqueio por PIN</h2>
<p>O GrowVPD Pro oferece um bloqueio PIN integrado. Va ate <strong>Configuracoes &gt; Seguranca</strong> e ative o <strong>Bloqueio PIN</strong>. Defina um PIN de 4 digitos.</p>

<h2>Autenticacao biometrica</h2>
<p>Se seu celular suporta impressao digital ou reconhecimento facial, voce pode ativar o desbloqueio biometrico.</p>

<h2>Bloqueio em segundo plano</h2>
<p>O GrowVPD Pro bloqueia automaticamente quando voce muda para outro app ou a tela se apaga.</p>

<h2>Privacidade de fotos</h2>
<p>Quando ativada, as fotos de cultivo sao armazenadas no diretorio privado do app. Elas nao aparecem na galeria, Google Photos ou qualquer outro app de midia.</p>

<h2>Modo stealth</h2>
<p>Muda o icone do app para algo discreto (como uma calculadora ou app de clima).</p>

<h2>Armazenamento de dados</h2>
<p>Todos os dados sao armazenados localmente no dispositivo. Nenhum dado e enviado para servidores.</p>

<blockquote>
    <strong>Dica:</strong> O bloqueio ativa imediatamente quando o app vai para segundo plano. Sem atraso.
</blockquote>
`
  },

  "language-setup": {
    title: "Configuracao de idioma: 11 idiomas disponiveis",
    body: `
<h2>Idiomas suportados</h2>
<p>O GrowVPD Pro esta disponivel em 11 idiomas:</p>
<ul>
    <li><strong>Tcheco (CS)</strong></li>
    <li><strong>Ingles (EN)</strong></li>
    <li><strong>Alemao (DE)</strong></li>
    <li><strong>Espanhol (ES)</strong></li>
    <li><strong>Holandes (NL)</strong></li>
    <li><strong>Frances (FR)</strong></li>
    <li><strong>Italiano (IT)</strong></li>
    <li><strong>Portugues (PT)</strong></li>
    <li><strong>Polones (PL)</strong></li>
    <li><strong>Tailandes (TH)</strong></li>
    <li><strong>Hebraico (HE)</strong> &mdash; com suporte completo para layout da direita para a esquerda</li>
</ul>

<h2>Como mudar seu idioma</h2>
<div class="step-card">
    <span class="step-number">1</span>
    <h3>Abra Configuracoes</h3>
    <p>Toque na aba <strong>Configuracoes</strong> (icone de engrenagem) na parte inferior da tela.</p>
</div>
<div class="step-card">
    <span class="step-number">2</span>
    <h3>Encontre a opcao de idioma</h3>
    <p>Role ate a secao <strong>Geral</strong>. Toque em <strong>Idioma</strong>.</p>
</div>
<div class="step-card">
    <span class="step-number">3</span>
    <h3>Selecione seu idioma</h3>
    <p>Toque no idioma preferido. Toda a interface do app se atualiza imediatamente &mdash; sem necessidade de reiniciar.</p>
</div>

<blockquote>
    <strong>Dica:</strong> A configuracao de idioma e independente do idioma do sistema do celular. Voce pode usar o celular em ingles mas rodar o GrowVPD Pro em alemao, ou qualquer outra combinacao.
</blockquote>

<h2>O que e traduzido</h2>
<p>Quando voce muda o idioma, todas as abas, menus, guias, calculadoras e descricoes se atualizam. Dados do usuario (nomes de cultivos, notas, etc.) nao sao traduzidos &mdash; permanecem como voce os inseriu.</p>
`
  }

};
