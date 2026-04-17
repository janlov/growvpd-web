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
<p>Pense assim: sua planta respira atraves de pequenos poros nas folhas chamados estomatos. Quando o ar ao redor da folha esta seco, a agua evapora rapidamente. Quando esta umido, a evaporacao desacelera. O VPD coloca um numero nessa diferenca.</p>
<p>Um VPD mais alto significa que o ar esta puxando agua das folhas mais rapidamente. Um VPD mais baixo significa que o ar esta quase saturado e a evaporacao e lenta. Ambos os extremos causam problemas. O objetivo e encontrar o ponto ideal onde suas plantas transpiram em um ritmo saudavel e produtivo.</p>

<h2>Por que o VPD importa mais que temperatura ou umidade sozinhas</h2>
<p>A maioria dos cultivadores monitora temperatura e umidade separadamente. O problema e que a mesma porcentagem de umidade significa coisas muito diferentes em temperaturas diferentes.</p>
<p>Por exemplo, 60% de umidade relativa a 20&deg;C e um ambiente completamente diferente de 60% de umidade relativa a 30&deg;C. A 30&deg;C, o ar comporta muito mais agua, entao 60% ainda representa uma forca de secagem consideravel. A 20&deg;C, 60% e mais suave.</p>
<p>O VPD captura essa relacao em um unico numero. Em vez de equilibrar duas variaveis, voce pode acompanhar um unico valor que diz exatamente como suas plantas estao experimentando o clima.</p>

<h2>Como o VPD e calculado</h2>
<p>A formula por tras do VPD e direta quando voce entende os componentes:</p>
<ol>
    <li><strong>Pressao de vapor saturado (SVP)</strong> &mdash; A quantidade maxima de vapor de agua que o ar pode conter em uma determinada temperatura. Ar mais quente comporta mais. Isso e calculado na temperatura da superficie da folha.</li>
    <li><strong>Pressao de vapor real (AVP)</strong> &mdash; A quantidade de vapor de agua realmente presente no ar. Derivada da temperatura do ar e da umidade relativa.</li>
</ol>
<p>VPD e a diferenca entre esses dois valores:</p>
<p><code>VPD = SVP(temperatura da folha) - AVP(temperatura do ar, umidade)</code></p>
<p>O GrowVPD Pro faz toda essa matematica automaticamente. Insira temperatura e umidade e o app mostra instantaneamente seu valor de VPD.</p>

<h2>Temperatura da folha vs. temperatura do ar</h2>
<p>Este e um detalhe que muitos cultivadores ignoram. O VPD que importa e calculado na <strong>superficie da folha</strong>, nao no termometro pendurado na parede.</p>
<p>As folhas sao tipicamente <strong>1&ndash;3&deg;C mais frias</strong> que o ar circundante devido a transpiracao (resfriamento evaporativo). Sob luz intensa, a diferenca pode ser menor. Em condicoes de pouca luz, pode ser maior.</p>
<p>No GrowVPD Pro, voce pode ajustar o offset de temperatura da folha nas configuracoes do grafico VPD. Se voce tem um termometro infravermelho, medie algumas folhas para descobrir seu offset real. Caso contrario, o offset padrao de 2&deg;C e um bom ponto de partida.</p>

<blockquote>
    <strong>Dica:</strong> Se voce tem um sensor inteligente de temperatura posicionado no nivel da copa, voce obtera uma leitura muito mais proxima das condicoes reais da folha do que um sensor na parede ou perto da exaustao.
</blockquote>

<h2>Zonas VPD explicadas</h2>
<p>O VPD e medido em kilopascais (kPa). Aqui estao as zonas e o que elas significam para suas plantas:</p>

<table class="vpd-zones">
    <thead>
        <tr>
            <th>Zona</th>
            <th>Faixa de VPD</th>
            <th>O que acontece</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="zone-dot zone-blue"></span>Sub-transpiracao</td>
            <td>&lt; 0,4 kPa</td>
            <td>Ar quase saturado. Estomatos fecham, transporte de nutrientes desacelera, risco de mofo e oidio aumenta significativamente.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-light-green"></span>Muda / Clone</td>
            <td>0,4 &ndash; 0,8 kPa</td>
            <td>Transpiracao suave. Ideal para mudas, clones frescos e transplantes com sistemas radiculares limitados.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-green"></span>Vegetativa</td>
            <td>0,8 &ndash; 1,2 kPa</td>
            <td>Transpiracao forte e saudavel. Plantas crescem vigorosamente, absorcao de nutrientes e eficiente, caules se fortalecem.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-dark-green"></span>Floracao</td>
            <td>1,0 &ndash; 1,5 kPa</td>
            <td>Otimo para desenvolvimento das flores. Ar levemente mais seco estimula producao de resina e reduz o risco de podridao dos buds.</td>
        </tr>
        <tr>
            <td><span class="zone-dot zone-red"></span>Super-transpiracao</td>
            <td>&gt; 1,5 kPa</td>
            <td>Plantas perdem agua mais rapido do que as raizes conseguem fornecer. Estomatos fecham defensivamente, bloqueando nutrientes, causando murchamento e estresse termico.</td>
        </tr>
    </tbody>
</table>

<blockquote>
    <strong>Importante:</strong> Esses intervalos sao diretrizes, nao regras absolutas. Plantas saudaveis e bem enraizadas com um sistema radicular forte toleram VPD um pouco mais alto. Plantas estressadas ou sob luz intensa podem precisar da faixa inferior de cada intervalo.
</blockquote>

<h2>Como ler o grafico VPD no GrowVPD Pro</h2>
<p>A aba VPD no app exibe um mapa de calor interativo. O eixo horizontal mostra a temperatura, o eixo vertical mostra a umidade e cada celula e colorida com base no valor de VPD resultante.</p>
<ul>
    <li><strong>Azul</strong> &mdash; VPD muito baixo. O ar esta muito umido para a temperatura dada.</li>
    <li><strong>Verde</strong> &mdash; VPD ideal. Esta e sua zona alvo.</li>
    <li><strong>Amarelo</strong> &mdash; VPD comecando a ficar alto. Plantas comecam a trabalhar mais.</li>
    <li><strong>Laranja / Vermelho</strong> &mdash; VPD muito alto. Estresse da planta e provavel.</li>
</ul>
<p>Use o <strong>seletor de fase</strong> no topo para alternar entre mudas, vegetativa e floracao. A zona verde se ajusta correspondentemente, pois plantas mais jovens precisam de VPD mais baixo e plantas em floracao toleram (e se beneficiam de) VPD mais alto.</p>
<p>Toque em qualquer celula para ver os valores exatos. Se voce tem um sensor inteligente ou Bluetooth conectado, o grafico destaca sua posicao atual com um marcador, para que voce veja onde esta de relance.</p>

<h2>Como ajustar o VPD</h2>

<h3>VPD muito alto (plantas murchando, folhas enrolando)</h3>
<p>O ar esta muito seco em relacao a temperatura. Para diminuir o VPD:</p>
<ul>
    <li><strong>Aumente a umidade</strong> &mdash; Ligue um umidificador, coloque toalhas umidas na tenda ou borrife as paredes (nao diretamente nas plantas durante a floracao).</li>
    <li><strong>Diminua a temperatura</strong> &mdash; Aumente a exaustao, levante levemente as luzes ou reduza a intensidade da luz.</li>
    <li><strong>Reduza o fluxo de ar direto nas plantas</strong> &mdash; Direcione os ventiladores oscilantes ligeiramente acima da copa, nao diretamente nas folhas.</li>
</ul>

<h3>VPD muito baixo (risco de mofo, crescimento lento)</h3>
<p>O ar esta muito umido para a temperatura dada. Para aumentar o VPD:</p>
<ul>
    <li><strong>Diminua a umidade</strong> &mdash; Ligue um desumidificador, aumente a velocidade do exaustor, melhore a troca de ar.</li>
    <li><strong>Aumente a temperatura</strong> &mdash; Ligue as luzes na potencia maxima, reduza levemente a exaustao, adicione um pequeno aquecedor se necessario.</li>
    <li><strong>Aumente a circulacao de ar</strong> &mdash; Mais movimento de ar ajuda a evaporar umidade da superficie das folhas.</li>
</ul>

<blockquote>
    <strong>Dica Pro:</strong> Se voce usa GrowVPD Pro com automacao inteligente, pode criar regras como "Se VPD cair abaixo de 0,7 kPa, ligue o desumidificador" ou "Se VPD exceder 1,4 kPa, ative o umidificador". O app faz isso automaticamente pela aba Automacao.
</blockquote>

<h2>VPD noturno vs. diurno</h2>
<p>Quando as luzes se apagam, a temperatura cai mas a umidade geralmente permanece igual ou sobe. Isso significa que o VPD cai a noite &mdash; as vezes drasticamente.</p>
<p>O VPD que era perfeito durante o periodo de luzes ligadas pode se tornar perigosamente baixo a noite, levando a condensacao nas folhas e podridao dos buds. Por isso muitos cultivadores experientes:</p>
<ul>
    <li>Operam o desumidificador com mais intensidade durante o escuro</li>
    <li>Mantem uma pequena diferenca de temperatura entre dia e noite (maximo de 5&ndash;8&deg;C de queda)</li>
    <li>Mantem boa circulacao de ar mesmo com as luzes apagadas</li>
</ul>
<p>No GrowVPD Pro, voce pode registrar tanto a temperatura diurna quanto a noturna nas entradas do diario para acompanhar as mudancas de VPD ao longo de todo o ciclo de 24 horas.</p>

<h2>Erros comuns de VPD</h2>
<ol>
    <li><strong>Ignorar a temperatura da folha.</strong> Usar apenas a temperatura do ar superestima o VPD. Considere o offset de 1&ndash;3&deg;C da folha.</li>
    <li><strong>Nao ajustar para a fase de crescimento.</strong> Mudas nao toleram o mesmo VPD que plantas em floracao. Sempre ajuste seu alvo para a fase atual.</li>
    <li><strong>Medir no lugar errado.</strong> Um sensor no topo da tenda mostra valores diferentes de um na altura da copa. Coloque o sensor onde estao as plantas.</li>
    <li><strong>Perseguir um unico numero perfeito.</strong> Consistencia importa mais que precisao. Permanecer consistentemente dentro de 0,2 kPa e melhor do que acertar 1,0 kPa uma vez e ter oscilacoes descontroladas.</li>
    <li><strong>Esquecer a noite.</strong> O gerenciamento de VPD nao para quando as luzes se apagam. A noite e quando o mofo ataca.</li>
</ol>

<h2>Usando VPD com automacao inteligente</h2>
<p>A aba Automacao do GrowVPD Pro permite criar regras baseadas em VPD que controlam automaticamente seus dispositivos inteligentes. Por exemplo:</p>
<ul>
    <li>Se VPD exceder 1,3 kPa, ligar o umidificador</li>
    <li>Se VPD cair abaixo de 0,6 kPa, aumentar a velocidade do exaustor</li>
    <li>Se a temperatura subir acima de 30&deg;C, reduzir as luzes para 80%</li>
</ul>
<p>O motor de automacao inclui histerese (para que os dispositivos nao fiquem ligando e desligando rapidamente), overrides baseados em tempo e limites de seguranca. Consulte nossos guias de conexao <a href="connect-tuya.html" style="color:#2E7D32;font-weight:600;">Tuya</a> e <a href="connect-mars-hydro.html" style="color:#2E7D32;font-weight:600;">Mars Hydro</a> para configurar seus dispositivos.</p>
`
  },

  "connect-tuya": {
    title: "Como conectar dispositivos Tuya / Smart Life ao GrowVPD Pro",
    body: `
<h2>Quais dispositivos Tuya / Smart Life funcionam?</h2>
<p>Tuya e a plataforma por tras de centenas de marcas smart home white-label. Se seu dispositivo funciona com o app <strong>Tuya</strong> ou <strong>Smart Life</strong>, provavelmente funcionara com o GrowVPD Pro. Dispositivos comuns incluem:</p>
<ul>
    <li><strong>Sensores de temperatura/umidade</strong> &mdash; Sensores WiFi que reportam temperatura e RH para a nuvem. Eles alimentam dados ao vivo no grafico VPD.</li>
    <li><strong>Tomadas inteligentes</strong> &mdash; Ligam e desligam umidificadores, desumidificadores, ventiladores ou aquecedores com base nas regras de automacao.</li>
    <li><strong>Cameras inteligentes</strong> &mdash; Cameras compativeis com Tuya podem capturar snapshots automaticos e salva-los no diario de cultivo.</li>
    <li><strong>Interruptores e dimmers inteligentes</strong> &mdash; Controle luzes, bombas e outros equipamentos.</li>
    <li><strong>Sensores de umidade do solo, monitores de CO2</strong> &mdash; Qualquer dispositivo Tuya que reporte dados ambientais.</li>
</ul>

<h2>Pre-requisitos</h2>
<ul>
    <li>GrowVPD Pro com uma <strong>assinatura Pro</strong> ativa (automacao inteligente e funcao Pro)</li>
    <li>Seus dispositivos Tuya/Smart Life ja configurados e funcionando no app oficial Tuya ou Smart Life</li>
    <li>Uma conexao WiFi estavel (dispositivos se comunicam via Tuya Cloud API)</li>
    <li>Uma conta de desenvolvedor na Tuya IoT Platform (gratis &mdash; instrucoes abaixo)</li>
</ul>

<h2>Etapas de conexao</h2>
<div class="step-card">
    <span class="step-number">1</span>
    <h3>Obtenha as credenciais Tuya Developer</h3>
    <p>O GrowVPD Pro se conecta aos seus dispositivos pela Tuya Cloud API. Para autorizar, voce precisa de um <strong>Access ID</strong> e <strong>Access Secret</strong> da Tuya IoT Platform:</p>
    <ol>
        <li>Va ate <strong>iot.tuya.com</strong> e crie uma conta gratuita (ou faca login).</li>
        <li>No painel lateral, va ate <strong>Cloud &gt; Development</strong> e crie um novo Cloud Project.</li>
        <li>Escolha <strong>Smart Home</strong> como industria e selecione a regiao de dados (Europa Ocidental, America do Leste, China ou India).</li>
        <li>Na aba <strong>API Products</strong>, certifique-se de que <strong>IoT Core</strong> e <strong>Smart Home Device Management</strong> estao inscritos (sao gratuitos).</li>
        <li>Va ate a aba <strong>Devices</strong> e vincule a conta do seu app Tuya/Smart Life para que o projeto cloud possa acessar seus dispositivos.</li>
        <li>Na pagina <strong>Overview</strong> do projeto, copie seu <strong>Access ID/Client ID</strong> e <strong>Access Secret/Client Secret</strong>.</li>
    </ol>
</div>

<blockquote>
    <strong>Dica:</strong> A regiao que voce escolher na Tuya IoT deve corresponder a regiao da sua conta no app Tuya/Smart Life. Se seu app esta configurado para Europa, escolha o data center Europa Ocidental. Regioes incompativeis sao a causa mais comum do erro "nenhum dispositivo encontrado".
</blockquote>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Vincule a conta Tuya no GrowVPD Pro</h3>
    <p>Abra o GrowVPD Pro e va ate <strong>Configuracoes &gt; Contas conectadas &gt; Tuya</strong>. Insira seu Access ID e Access Secret, selecione a regiao (EU, US ou CN) e toque em <strong>Conectar</strong>. O app verificara suas credenciais e estabelecera conexao com a Tuya Cloud.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Descubra seus dispositivos</h3>
    <p>Va ate a aba <strong>Automacao</strong> e toque em <strong>Adicionar dispositivos</strong>. O app escaneara sua conta Tuya conectada e exibira todos os dispositivos disponiveis com nomes, tipos e status online. Toque em um dispositivo para adicionalo ao GrowVPD Pro.</p>
</div>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Atribua dispositivos a salas e tendas</h3>
    <p>Organize os dispositivos em salas e tendas para gerenciamento organizado:</p>
    <ol>
        <li>Crie uma <strong>Sala</strong> (ex: "Garagem", "Porao", "Quarto extra").</li>
        <li>Dentro da sala, crie uma <strong>Tenda</strong> (ex: "Tenda A 120x120", "Tenda Veg").</li>
        <li>Atribua o sensor a tenda para que o app saiba qual dispositivo fornece dados para aquela tenda.</li>
        <li>Atribua atuadores (tomadas inteligentes, interruptores) a mesma tenda para regras de automacao.</li>
    </ol>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Verifique a conexao</h3>
    <p>Apos a atribuicao, os dados ao vivo do sensor devem aparecer no painel da tenda em poucos segundos. Verifique:</p>
    <ul>
        <li>A tenda mostra temperatura e umidade atuais</li>
        <li>O VPD esta calculado e exibido</li>
        <li>Tocar na tomada inteligente liga/desliga com sucesso</li>
    </ul>
    <p>Se os dados ao vivo aparecem e o controle do dispositivo funciona, voce esta pronto. Agora pode criar regras de automacao na aba Automacao.</p>
</div>

<h2>Solucao de problemas</h2>

<h3>"Nenhum dispositivo encontrado" apos conectar</h3>
<ul>
    <li><strong>Verifique sua regiao.</strong> A regiao no GrowVPD Pro deve corresponder ao data center escolhido na Tuya IoT Platform, que deve corresponder a regiao do seu app Tuya/Smart Life.</li>
    <li><strong>Verifique as credenciais.</strong> Confirme que copiou corretamente o Access ID e Access Secret. Sao sensiveis a maiusculas.</li>
    <li><strong>Vincule a conta do app.</strong> Na Tuya IoT Platform, va ate Cloud Project &gt; Devices &gt; Link Tuya App Account. Escaneie o QR code com o app Tuya ou Smart Life.</li>
    <li><strong>Verifique as inscricoes de API.</strong> Certifique-se de que IoT Core e Smart Home Device Management estao inscritos na aba API Products.</li>
</ul>

<h3>"Dispositivo offline"</h3>
<ul>
    <li>Verifique se o dispositivo esta conectado ao WiFi e com energia.</li>
    <li>Abra o app Tuya/Smart Life e confirme que o dispositivo aparece como online.</li>
    <li>Reinicie o dispositivo (desconecte, espere 10 segundos, reconecte).</li>
    <li>Se o dispositivo foi movido para outra rede WiFi recentemente, emparelhe-o novamente pelo app Tuya/Smart Life primeiro.</li>
</ul>

<h3>"Leitura incorreta" ou sensor parece impreciso</h3>
<ul>
    <li>No GrowVPD Pro, va ate as configuracoes do dispositivo e use o <strong>offset de calibracao</strong> para corrigir erros conhecidos do sensor. Muitos sensores Tuya baratos desviam 1&ndash;2&deg;C ou 3&ndash;5% RH.</li>
    <li>Compare com um termometro/higrometro comprovadamente preciso no mesmo local por varias horas.</li>
    <li>Posicione o sensor na altura da copa, fora da luz direta, para obter valores mais uteis.</li>
</ul>

<h2>Snapshots automaticos da camera Tuya</h2>
<p>Se voce tem uma camera compativel com Tuya, o GrowVPD Pro pode capturar snapshots periodicos automaticamente e salva-los no diario. Isso e otimo para construir sequencias time-lapse sem esforco manual.</p>
<p>Para ativar, atribua a camera a uma tenda e configure a agenda da camera nas configuracoes da tenda. Voce pode escolher intervalos de diario a quinzenal. Os snapshots sao capturados automaticamente e anexados a entrada correspondente no diario.</p>

<div class="warning-box">
    <strong>Nota:</strong> Toda a comunicacao dos dispositivos Tuya requer WiFi e acesso a internet. Dispositivos Tuya usam a Tuya Cloud API &mdash; nao podem ser controlados localmente sem internet. Se a conexao cair, as regras de automacao pausam ate o restabelecimento.
</div>
`
  },

  "connect-mars-hydro": {
  title: "Como conectar dispositivos Mars Hydro ao GrowVPD Pro",
  body: `
<h2>Quais dispositivos Mars Hydro funcionam?</h2>
<p>O GrowVPD Pro suporta a linha <strong>iConnect</strong> da Mars Hydro. Tipos suportados:</p>
<ul>
    <li><strong>Ventiladores in-line</strong> &mdash; Velocidade 0&ndash;100%, timers, automacao por temperatura/VPD.</li>
    <li><strong>Luzes LED de cultivo</strong> &mdash; Dimerizacao 0&ndash;100%, agendas de nascer/por do sol.</li>
    <li><strong>Sensores ambientais</strong> &mdash; Temperatura, umidade, umidade do solo.</li>
    <li><strong>Controladores</strong> &mdash; Controladores multi-porta para ventiladores e luzes.</li>
</ul>

<div class="important-box">
    <strong>O GrowVPD Pro funciona como app companheiro ao lado do MarsPro</strong> &mdash; o Bluetooth (BLE) e usado uma unica vez durante o emparelhamento, depois todo o controle passa via WiFi/MQTT, o mesmo protocolo em nuvem que o MarsPro usa. Somos grandes fas da Mars Hydro e adorariamos colaborar diretamente com a equipe deles.
</div>

<h2>Pre-requisitos</h2>
<ul>
    <li>GrowVPD Pro com <strong>assinatura Pro</strong> ativa</li>
    <li>Dispositivo(s) Mars Hydro iConnect</li>
    <li>Rede WiFi estavel (2,4 GHz)</li>
    <li>Conta Mars Hydro (crie uma em <strong>marshydro.com</strong> se nao tiver)</li>
</ul>

<h2>Como funciona a conexao</h2>
<p>Mars Hydro usa o <strong>protocolo MQTT</strong> para comunicacao com os dispositivos &mdash; rapido e confiavel para IoT. Os comandos sao enviados como mensagens MQTT e chegam ao dispositivo em segundos.</p>

<h2>Etapas de conexao</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Vincule a conta Mars Hydro no GrowVPD Pro</h3>
    <p>Va ate <strong>Configuracoes &gt; Contas conectadas &gt; Mars Hydro</strong>. Insira email e senha da sua conta Mars Hydro. Nao tem conta? Crie uma em <strong>marshydro.com</strong>. Toque em <strong>Conectar</strong>.</p>
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
    <p>Aba <strong>Automacao &gt; Adicionar dispositivos &gt; Mars Hydro</strong>. O app inicia um escaneamento BLE e encontra seu dispositivo em modo de pareamento. Selecione-o e o GrowVPD Pro enviara automaticamente suas credenciais WiFi.</p>
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
    <p>Voce pode misturar dispositivos de diferentes marcas na mesma tenda &mdash; luzes Mars Hydro podem rodar em uma agenda compartilhada de nascer/por do sol ao lado de um AC Infinity Controller 69 que monitora o VPD no seu proprio ventilador Cloudline.</p>
</div>

<div class="step-card">
    <span class="step-number">5</span>
    <h3>Teste o controle</h3>
    <ul>
        <li><strong>Ventilador</strong> &mdash; controle de velocidade, resposta em 1&ndash;3 segundos.</li>
        <li><strong>Luz LED</strong> &mdash; nivel de dimerizacao.</li>
        <li><strong>Sensores</strong> &mdash; verifique atualizacao dos dados.</li>
    </ul>
</div>

<h2>BLE vs. WiFi</h2>
<ul>
    <li><strong>Bluetooth (BLE)</strong> &mdash; <strong>apenas uma vez</strong> durante o pareamento diretamente no GrowVPD Pro.</li>
    <li><strong>WiFi + MQTT Cloud</strong> &mdash; todo controle e automacao continua.</li>
    <li>Apos configuracao, <strong>sem necessidade de Bluetooth</strong>. Funciona totalmente via WiFi.</li>
</ul>

<h2>Solucao de problemas</h2>

<h3>&quot;Dispositivo nao encontrado&quot; no escaneamento BLE</h3>
<ul>
    <li>Bluetooth ativado? Permissoes (Bluetooth + localizacao) concedidas?</li>
    <li>Repita sequencia do dimmer (OFF&rarr;75%&rarr;OFF). Janela: 5&ndash;10 segundos.</li>
    <li>Fique perto do dispositivo (2&ndash;3 metros) durante o escaneamento BLE.</li>
    <li>Atualize a senha Mars Hydro nas Configuracoes se mudou.</li>
</ul>

<h3>&quot;Nao consigo controlar o dispositivo&quot;</h3>
<ul>
    <li>Verifique sinal WiFi. Em tendas metalicas, considere um repetidor WiFi.</li>
    <li>Reinicie o dispositivo, aguarde 30s para reconexao MQTT.</li>
    <li>Verifique a conexao WiFi 2,4 GHz.</li>
</ul>

<h2>Combinando com outras plataformas</h2>
<p>Combinacoes tipicas que fazem sentido: o Controller 69/89 Pro da AC Infinity gerencia o proprio ventilador Cloudline pelo VPD, enquanto as LEDs Mars Hydro rodam em uma agenda compartilhada de nascer/por do sol. Um Bluelab Pulse monitora o pH da zona radicular pela nuvem Edenic e envia uma notificacao quando sai da faixa segura. Uma tomada inteligente Tuya serve como interruptor simples para um aquecedor a oleo comum, controlado por qualquer sensor em que voce confie. Tudo pela mesma aba Automacao.</p>

<div class="warning-box">
    <strong>Lembre-se:</strong> Dispositivos Mars Hydro WiFi requerem internet ativa. Sem internet, a automacao pausa (dispositivos continuam com ultimos valores). Considere um termostato de backup.
</div>
`
},

  "automation-rules": {
    title: "Configurando regras de automacao inteligente no GrowVPD Pro",
    body: `
<p>Uma das funcoes mais poderosas do GrowVPD Pro e a capacidade de criar regras de automacao que funcionam <strong>entre diferentes marcas</strong>. Cada marca se entende melhor com seu proprio ecossistema (AC Infinity Controller controla seus Cloudlines, Mars Hydro iHub seus ventiladores) e o GrowVPD Pro os conecta: agenda compartilhada de luzes entre varias marcas, Bluelab Pulse envia notificacao de pH fora do intervalo via Edenic, e uma simples tomada Tuya aciona um aquecedor ou umidificador barato com base em qualquer sensor de sua confianca. Nenhum outro app de cultivo oferece esse nivel de controle cross-brand.</p>

<p>Este guia orienta voce em tudo que precisa saber sobre configurar regras de automacao, desde conceitos basicos ate configuracoes avancadas.</p>

<h2>O que sao regras de automacao?</h2>

<p>Uma regra de automacao e uma simples instrucao de causa e efeito: <strong>quando uma certa condicao e atendida, execute uma acao</strong>. O GrowVPD Pro verifica as regras a cada 15 minutos em segundo plano usando o WorkManager do Android, entao a automacao funciona mesmo com o app fechado.</p>

<p>Cada regra consiste em tres partes:</p>

<ol>
    <li><strong>Entrada do sensor</strong> &mdash; qual dispositivo fornece os dados (temperatura, umidade, VPD, CO2, PPFD, umidade do solo)</li>
    <li><strong>Condicao</strong> &mdash; qual limiar ativa a regra (ex: VPD sobe acima de 1,5 kPa)</li>
    <li><strong>Acao</strong> &mdash; o que o dispositivo deve fazer quando a condicao e ativada e quando e restaurada</li>
</ol>

<blockquote>
    <strong>Vantagem chave:</strong> Como o GrowVPD Pro se comunica com a API cloud de cada marca independentemente, suas regras de automacao podem combinar dispositivos de Tuya, AC Infinity, Mars Hydro, Spider Farmer e Vivosun em qualquer combinacao. O sensor e o dispositivo alvo nao precisam ser da mesma marca.
</blockquote>

<h2>Criando sua primeira regra de automacao</h2>

<p>Abra a aba <strong>Automacao</strong> no GrowVPD Pro. Se ainda nao configurou uma sala e tenda, sera solicitado a criar. Uma vez configurada a tenda, toque no botao <strong>+ Adicionar regra</strong>.</p>

<h3>Passo 1: Selecione o dispositivo sensor</h3>
<p>Escolha o dispositivo conectado que fornece os dados. O app mostrara quais tipos de dados cada dispositivo reporta.</p>

<h3>Passo 2: Escolha o tipo de condicao</h3>
<p>Selecione o que deseja monitorar. O GrowVPD Pro suporta 12 tipos de condicao:</p>
<ul>
    <li><strong>VPD</strong> &mdash; Deficit de Pressao de Vapor (calculado de temperatura + umidade)</li>
    <li><strong>Temperatura</strong> &mdash; temperatura do ar (acima ou abaixo do limiar)</li>
    <li><strong>Umidade</strong> &mdash; umidade relativa em porcentagem</li>
    <li><strong>CO2</strong> &mdash; concentracao de dioxido de carbono em PPM</li>
    <li><strong>PPFD</strong> &mdash; intensidade luminosa em &mu;mol/m&sup2;/s</li>
    <li><strong>Umidade do solo</strong> &mdash; conteudo volumetrico de agua em porcentagem</li>
    <li><strong>EC do solo</strong> &mdash; condutividade eletrica do substrato</li>
    <li><strong>Temperatura do solo</strong> &mdash; temperatura da zona radicular</li>
    <li><strong>Temperatura noturna</strong> &mdash; temperatura durante as luzes apagadas</li>
    <li><strong>Diferencial de temperatura</strong> &mdash; diferenca entre temperatura diurna e noturna</li>
    <li><strong>Taxa de variacao da umidade</strong> &mdash; quao rapido a umidade sobe ou desce</li>
    <li><strong>Taxa de variacao do VPD</strong> &mdash; quao rapido o VPD esta mudando</li>
</ul>

<h3>Passo 3: Defina o valor limiar</h3>
<p>Insira o valor que deve ativar a regra. Por exemplo, se deseja ativar um ventilador quando o VPD exceder 1,4 kPa, defina o limiar como <code>1.4</code> com a condicao "maior que".</p>

<h3>Passo 4: Defina a histerese</h3>
<p>Histerese e uma zona de buffer que impede os dispositivos de ligar e desligar rapidamente. Se seu limiar VPD e 1,4 kPa com histerese de 0,1, a regra dispara em 1,4 mas nao restaura ate o VPD cair abaixo de 1,3.</p>

<blockquote>
    <strong>Dica:</strong> Sempre defina histerese. Sem ela, uma leitura de sensor oscilando ao redor do limiar causaria alternancia do dispositivo a cada 15 minutos. Uma histerese de 0,1 kPa para VPD ou 2&deg;C para temperatura funciona bem para a maioria das configuracoes.
</blockquote>

<h3>Passo 5: Selecione o dispositivo alvo</h3>
<p>Escolha o dispositivo que deve responder. Pode ser qualquer dispositivo controlavel &mdash; tomada inteligente, exaustor, umidificador, aquecedor ou luz de cultivo. O dispositivo nao precisa ser da mesma marca do sensor.</p>

<h3>Passo 6: Defina as acoes</h3>
<ul>
    <li><strong>Acao de ativacao</strong> &mdash; o que acontece quando a condicao e atendida (ex: ligar, definir velocidade do ventilador para 5, definir dimmer para 80%)</li>
    <li><strong>Acao de restauracao</strong> &mdash; o que acontece quando a condicao volta ao normal (ex: desligar, definir velocidade do ventilador para 2)</li>
</ul>

<h3>Passo 7: Configuracoes avancadas opcionais</h3>
<ul>
    <li><strong>Restricoes de horario</strong> &mdash; a regra funciona apenas em certas horas</li>
    <li><strong>Filtro de fase de crescimento</strong> &mdash; aplica-se apenas em certas fases (ex: somente floracao)</li>
    <li><strong>Tempo maximo de funcionamento</strong> &mdash; para automaticamente apos o tempo definido</li>
    <li><strong>Tempo minimo desligado</strong> &mdash; impede reativacao muito rapida</li>
    <li><strong>Tempo minimo ligado</strong> &mdash; garante funcionamento por um tempo minimo</li>
    <li><strong>Nivel de prioridade</strong> &mdash; quando regras conflitam, a prioridade mais alta vence</li>
</ul>

<h2>Exemplos de regras de automacao</h2>

<h3>Controle de VPD com dispositivos cross-brand</h3>
<ul>
    <li><strong>Sensor:</strong> Sensor WiFi Tuya temperatura/umidade</li>
    <li><strong>Condicao:</strong> VPD &gt; 1,4 kPa</li>
    <li><strong>Histerese:</strong> 0,1 kPa</li>
    <li><strong>Alvo:</strong> Umidificador Mars Hydro (via tomada inteligente)</li>
    <li><strong>Acao de ativacao:</strong> Ligar</li>
    <li><strong>Acao de restauracao:</strong> Desligar (quando VPD cai abaixo de 1,3 kPa)</li>
</ul>

<h3>Protecao de temperatura noturna</h3>
<ul>
    <li><strong>Sensor:</strong> Qualquer sensor de temperatura conectado</li>
    <li><strong>Condicao:</strong> Temperatura &lt; 18&deg;C</li>
    <li><strong>Histerese:</strong> 2&deg;C</li>
    <li><strong>Alvo:</strong> Tomada inteligente Tuya (controlando aquecedor)</li>
    <li><strong>Acao de ativacao:</strong> Ligar</li>
    <li><strong>Acao de restauracao:</strong> Desligar (quando temperatura atinge 20&deg;C)</li>
    <li><strong>Restricao de horario:</strong> Apenas horas com luzes apagadas</li>
</ul>

<h2>Funcoes de seguranca</h2>
<ul>
    <li><strong>Histerese em cada regra</strong> previne ligacao/desligamento rapido</li>
    <li><strong>Tempo minimo desligado</strong> protege dispositivos como compressores de desumidificador</li>
    <li><strong>Tempo maximo de funcionamento</strong> previne que um sensor travado deixe um aquecedor ligado indefinidamente</li>
    <li><strong>Niveis de prioridade</strong> resolvem conflitos quando duas regras tentam controlar o mesmo dispositivo</li>
    <li><strong>Deteccao anti-conflito</strong> alerta quando regras podem conflitar entre si</li>
</ul>

<blockquote>
    <strong>Importante:</strong> As regras de automacao se comunicam via APIs cloud, o que significa que seus dispositivos precisam de conexao WiFi ativa. Se a internet cair, as regras pausam e se reativam automaticamente quando a conexao e restaurada. Para funcoes criticas de seguranca (como desligamento por temperatura maxima), considere usar as funcoes de seguranca integradas dos dispositivos como backup.
</blockquote>

<h2>Organizacao de salas e tendas</h2>
<ol>
    <li><strong>Sala</strong> &mdash; seu espaco fisico de cultivo (ex: "Garagem", "Porao")</li>
    <li><strong>Tenda</strong> &mdash; tendas individuais na sala (ex: "Tenda Veg", "Tenda Flor")</li>
    <li><strong>Dispositivos</strong> &mdash; atribuidos a tendas especificas</li>
    <li><strong>Regras</strong> &mdash; limitadas a tenda, usando sensores e dispositivos daquela tenda</li>
</ol>

<p>Tendas criadas na aba Automacao sao automaticamente compartilhadas com o Diario de cultivo pelo sistema de perfis de equipamento. Quando voce cria um novo cultivo no diario e o atribui a uma tenda, as regras de automacao para aquela tenda se ativam automaticamente.</p>

<h2>Monitoramento e rastreamento de energia</h2>
<ul>
    <li><strong>Log de automacao</strong> &mdash; veja cada ativacao e restauracao com timestamps e motivos</li>
    <li><strong>Rastreamento de energia</strong> &mdash; monitore o consumo estimado de energia por dispositivo e tenda</li>
    <li><strong>Eficacia das regras</strong> &mdash; o app rastreia com que frequencia cada regra dispara e quao estaveis as condicoes permanecem</li>
    <li><strong>Analitica inteligente</strong> &mdash; veja pontuacoes de estabilidade, custos de energia e alertas preditivos</li>
</ul>
`
  },

  "grow-diary-guide": {
    title: "Diario de cultivo: Da semente a colheita &mdash; Guia completo",
    body: `
<p>Um diario de cultivo e a ferramenta mais valiosa para melhorar seus resultados ao longo do tempo. Cada colheita ensina algo &mdash; mas so se voce registrou o que aconteceu ao longo do caminho. O diario do GrowVPD Pro rastreia clima, nutrientes, fotos e dados da colheita durante todo o ciclo de cultivo e depois permite comparar cultivos lado a lado.</p>

<h2>Por que registrar seu cultivo?</h2>
<ul>
    <li><strong>Identificar o que funciona</strong> &mdash; correlacionar programas nutricionais especificos, faixas de VPD ou tecnicas com melhores resultados</li>
    <li><strong>Detectar problemas cedo</strong> &mdash; uma queda subita no pH ou uma semana de VPD alto aparece claramente no seu historico de dados</li>
    <li><strong>Prever o timing da colheita</strong> &mdash; comparando o cultivo atual com anteriores da mesma cepa, voce pode estimar quantas semanas faltam</li>
    <li><strong>Compartilhar resultados significativos</strong> &mdash; voce pode mostrar as condicoes exatas que levaram a um determinado rendimento</li>
    <li><strong>Construir um banco de dados pessoal</strong> &mdash; apos varios cultivos, voce desenvolve conhecimento especifico por cepa</li>
</ul>

<h2>Criando um novo cultivo</h2>
<p>Abra a aba <strong>Diario</strong> e toque em <strong>+ Novo cultivo</strong>. Insira informacoes basicas: nome, cepa, tipo (fotoperiodica ou autoflower), substrato, tamanho do vaso, numero de plantas e tipo de agua.</p>

<h2>Adicionando entradas diarias</h2>
<p>O coracao do diario e a entrada diaria. Voce nao precisa preencher todos os campos toda vez &mdash; registre o que importa para voce. Com o tempo, ate entradas parciais constroem um historico valioso.</p>

<h3>Dados climaticos</h3>
<ul>
    <li><strong>Temperatura</strong>, <strong>Temperatura noturna</strong>, <strong>Umidade</strong>, <strong>VPD</strong> (calculado automaticamente)</li>
</ul>

<h3>Dados de luz</h3>
<ul>
    <li><strong>PPFD</strong>, <strong>Horas de luz</strong>, <strong>Distancia da luz</strong>, <strong>Potencia da luz</strong></li>
</ul>

<h3>Agua e nutrientes</h3>
<ul>
    <li><strong>Volume de agua</strong>, <strong>Temperatura da agua</strong>, <strong>pH</strong>, <strong>EC / PPM</strong>, <strong>Nutrientes</strong> (69+ fertilizantes de 7 marcas)</li>
</ul>

<h3>Fotos e videos</h3>
<p>Adicione fotos diretamente da camera ou galeria. Todas as midias sao armazenadas localmente &mdash; nada e enviado a nenhum servidor.</p>

<blockquote>
    <strong>Funcao de privacidade:</strong> O GrowVPD Pro (com upgrade Pro) pode ocultar fotos de cultivo da galeria do dispositivo. Tambem ha um modo stealth que muda o icone do app para algo discreto.
</blockquote>

<h2>Fases de crescimento</h2>
<p>O GrowVPD Pro usa seis fases: Muda, Vegetativa, Transicao, Floracao, Floracao tardia, Colheita. A fase afeta as recomendacoes de VPD e os filtros das regras de automacao.</p>

<h2>Rastreamento da colheita</h2>
<p>Na colheita, o GrowVPD Pro fornece campos para: Peso fresco, Peso seco, Data do corte, Data de inicio do flush e Avaliacao de tricomas. O app calcula automaticamente eficiencia: gramas por watt, gramas por planta, rendimento total e proporcao de secagem.</p>

<h2>Comparando cultivos</h2>
<p>Apos completar dois ou mais cultivos, a funcao <strong>Comparar</strong> permite visualiza-los lado a lado semana a semana.</p>

<h2>Exportando o diario</h2>
<p>O GrowVPD Pro oferece dois formatos de exportacao (funcao Pro): <strong>Relatorio PDF</strong> e <strong>Exportacao de dados JSON</strong>.</p>

<blockquote>
    <strong>Dica:</strong> Exporte um PDF apos cada cultivo concluido e salve na nuvem. Mesmo se trocar de celular, voce sempre tera um registro do historico de cultivo.
</blockquote>
`
  },

  "ppfd-dli-guide": {
    title: "Guia de PPFD e DLI para cultivo indoor",
    body: `
<p>A luz e o motor da fotossintese e configura-la corretamente e um dos maiores fatores no rendimento final e qualidade. PPFD e DLI dizem quanta luz utilizavel realmente chega as suas plantas.</p>

<h2>O que e PPFD?</h2>
<p><strong>PPFD</strong> significa <strong>Photosynthetic Photon Flux Density</strong>. Mede o numero de fotons na faixa de 400&ndash;700nm que atingem um metro quadrado a cada segundo. A unidade e <strong>&mu;mol/m&sup2;/s</strong>.</p>

<blockquote>
    <strong>Por que PPFD importa mais que potencia:</strong> A potencia (watts) diz quanta eletricidade a luz consome, nao quanta luz util produz. Uma LED bem projetada de 300W pode fornecer mais PPFD que uma luz mal projetada de 600W.
</blockquote>

<h2>O que e DLI?</h2>
<p><strong>DLI</strong> significa <strong>Daily Light Integral</strong>. Mede a quantidade total de luz fornecida ao longo de um dia inteiro. A unidade e <strong>mol/m&sup2;/dia</strong>.</p>

<h3>Formula DLI</h3>
<p><code>DLI = PPFD &times; horas &times; 0,0036</code></p>

<h2>PPFD ideal por fase de crescimento</h2>
<table>
    <thead>
        <tr><th>Fase</th><th>Faixa PPFD</th><th>Programacao tipica</th><th>DLI alvo</th></tr>
    </thead>
    <tbody>
        <tr><td>Mudas / Clones</td><td>100&ndash;300 &mu;mol/m&sup2;/s</td><td>18/6</td><td>12&ndash;18 mol/m&sup2;/dia</td></tr>
        <tr><td>Vegetativa precoce</td><td>300&ndash;400 &mu;mol/m&sup2;/s</td><td>18/6</td><td>18&ndash;25 mol/m&sup2;/dia</td></tr>
        <tr><td>Vegetativa tardia</td><td>400&ndash;600 &mu;mol/m&sup2;/s</td><td>18/6 ou 20/4</td><td>25&ndash;35 mol/m&sup2;/dia</td></tr>
        <tr><td>Floracao</td><td>600&ndash;900 &mu;mol/m&sup2;/s</td><td>12/12</td><td>30&ndash;40 mol/m&sup2;/dia</td></tr>
        <tr><td>Floracao + CO2</td><td>900&ndash;1500 &mu;mol/m&sup2;/s</td><td>12/12</td><td>40&ndash;65 mol/m&sup2;/dia</td></tr>
    </tbody>
</table>

<blockquote>
    <strong>Nota importante sobre CO2:</strong> As plantas so conseguem usar efetivamente PPFD acima de ~900 &mu;mol/m&sup2;/s quando o CO2 e suplementado para 1000&ndash;1500 PPM.
</blockquote>

<h2>Distancia da luz e lei do inverso do quadrado</h2>
<p>O PPFD diminui dramaticamente com a distancia. Dobrar a distancia reduz a intensidade para aproximadamente um quarto.</p>

<h2>Como o GrowVPD Pro ajuda com a luz</h2>
<p>O app inclui um guia PPFD/DLI, um banco de dados de equipamentos com 200+ luzes, suporte a sensores PPFD inteligentes e integracao com o diario para rastreamento a longo prazo.</p>

<h2>Erros comuns de iluminacao</h2>
<ul>
    <li><strong>Luz demais para mudas</strong> &mdash; O erro numero um de novos cultivadores com LED. Sempre diminua ou levante a luz nas duas primeiras semanas.</li>
    <li><strong>Luz insuficiente durante a floracao</strong> &mdash; O mesmo PPFD com fotoperiodo mais curto significa DLI mais baixo. Aumente o PPFD ao mudar para floracao.</li>
    <li><strong>Ignorar o DLI</strong> &mdash; PPFD e apenas metade da historia. Sempre calcule o DLI.</li>
    <li><strong>Distribuicao desigual</strong> &mdash; Gire as plantas ou use uma rede ScrOG.</li>
</ul>
`
  },

  "equipment-setup": {
    title: "Banco de dados de equipamentos e Setup Builder",
    body: `
<p>Escolher o equipamento certo e uma das decisoes mais importantes que voce faz como cultivador indoor. Pouca luz e as plantas terao desempenho fraco; ventilacao exagerada para uma tenda pequena e dinheiro desperdicado; proporcoes erradas de nutrientes causam deficiencias. A aba Equipamentos no GrowVPD Pro reune um banco de dados de produtos, calculadoras e um construtor de setup para ajudar voce a planejar e otimizar seu espaco de cultivo.</p>

<h2>O banco de dados de equipamentos</h2>

<p>O GrowVPD Pro contem um banco de dados cuidadosamente curado com <strong>200+ produtos de 47 marcas</strong>, cobrindo tudo, desde luzes LED ate kits completos de ventilacao. Nao se trata de um catalogo generico &mdash; cada entrada contem dados tecnicos que realmente importam para o cultivo.</p>

<h3>O que esta incluido</h3>

<ul>
    <li><strong>Luzes LED de cultivo</strong> &mdash; potencia, PPE (eficiencia fotonica em &mu;mol/J), PPFD em varias alturas, cobertura por tamanho de tenda, tipo de espectro, faixa de dimerizacao</li>
    <li><strong>Tendas de cultivo</strong> &mdash; dimensoes, espessura do material, numero e tamanho das aberturas, refletividade, capacidade de carga das barras</li>
    <li><strong>Ventilacao</strong> &mdash; ventiladores in-line (classificacao CFM, ruido em dB, tipo de controle de velocidade), filtros de carvao (capacidade CFM, profundidade do leito de carvao), dutos</li>
    <li><strong>Sensores ambientais</strong> &mdash; parametros medidos (temperatura, RH, CO2, PPFD, solo), conectividade (WiFi, BLE, plataforma cloud), precisao</li>
    <li><strong>Controladores</strong> &mdash; controladores AC Infinity, tomadas inteligentes Tuya, dispositivos Mars Hydro iConnect, numero de tomadas, opcoes de automacao</li>
</ul>

<h3>Pesquisa e filtragem</h3>

<p>Voce pode navegar pelo banco de dados por categoria ou pesquisar por marca, nome do produto ou especificacoes. Os filtros permitem refinar resultados por:</p>

<ul>
    <li><strong>Marca</strong> &mdash; Mars Hydro, Spider Farmer, AC Infinity, Lumatek, Gavita, SANlight e 40+ outras</li>
    <li><strong>Categoria</strong> &mdash; luzes, tendas, ventilacao, sensores, controladores, acessorios</li>
    <li><strong>Compatibilidade com tamanho da tenda</strong> &mdash; selecione as dimensoes da sua tenda e o banco de dados mostrara produtos dimensionados adequadamente</li>
    <li><strong>Faixa de preco</strong> &mdash; filtre por orcamento</li>
</ul>

<blockquote>
    <strong>Dica:</strong> Ao comparar luzes LED, foque no PPE (&mu;mol/J), nao na potencia. Uma luz com eficiencia de 2,7 &mu;mol/J converte mais eletricidade em luz utilizavel para as plantas do que uma com 2,0 &mu;mol/J. Uma luz de 240W com PPE de 2,7 supera uma de 320W com PPE de 2,0 com menos consumo e menos calor.
</blockquote>

<h2>Calculadora de nutrientes</h2>

<p>A calculadora de nutrientes integrada elimina as adivinhacoes ao misturar sua solucao nutritiva. Suporta <strong>69+ fertilizantes de 7 marcas principais</strong>:</p>

<ul>
    <li><strong>BioBizz</strong> &mdash; Bio-Grow, Bio-Bloom, Top-Max, Root-Juice etc.</li>
    <li><strong>Canna</strong> &mdash; Terra Vega/Flores, Coco A/B, Cannazym, PK 13/14 etc.</li>
    <li><strong>Plagron</strong> &mdash; Alga Grow/Bloom, Terra Grow/Bloom, Green Sensation etc.</li>
    <li><strong>Advanced Nutrients</strong> &mdash; pH Perfect Grow/Micro/Bloom, Big Bud, Overdrive etc.</li>
    <li><strong>General Hydroponics</strong> &mdash; Linha Flora, CaliMagic etc.</li>
    <li><strong>Hesi</strong> &mdash; TNT Complex, Bloom Complex, Phosphorus Plus etc.</li>
    <li><strong>Atami</strong> &mdash; Bloombastic, Rootbastic, linha ATA etc.</li>
</ul>

<h3>Como usar</h3>

<ol>
    <li>Selecione no banco de dados os nutrientes que voce usa</li>
    <li>Insira o volume de agua (litros ou galoes)</li>
    <li>Selecione a fase de crescimento atual (a calculadora ajusta as concentracoes recomendadas)</li>
    <li>O app calcula a <strong>quantidade exata em ml de cada nutriente</strong> para adicionar ao reservatorio</li>
</ol>

<p>A calculadora segue os planos de alimentacao recomendados de cada fabricante com as proporcoes corretas. Voce pode ajustar a forca da dosagem (ex: 50% para mudas, 100% para dose completa de floracao) e o app reescala todos os nutrientes proporcionalmente.</p>

<h2>Misturador de substrato</h2>

<p>Se voce mistura seu proprio substrato de cultivo, o misturador de substrato ajuda a criar e salvar receitas personalizadas. Defina os componentes (turfa, perlita, vermiculita, fibra de coco, composto etc.), ajuste a proporcao de cada um e salve a receita. O misturador calcula o volume real de cada componente com base no volume total desejado.</p>

<p>As receitas salvas ficam disponiveis ao criar cada novo cultivo no diario, para que voce possa registrar exatamente qual mistura de substrato usou. Ao longo de varios cultivos, voce vera qual mistura trouxe os melhores resultados para cada cepa especifica.</p>

<h2>Calculadora de ventilacao</h2>

<p>A troca de ar adequada e critica para controle de temperatura, gerenciamento de umidade e reposicao de CO2. A calculadora de ventilacao ajuda a dimensionar corretamente seu sistema de exaustao.</p>

<h3>Insira as dimensoes da tenda</h3>

<p>Insira comprimento, largura e altura da sua tenda. A calculadora computa o volume em pes cubicos e determina o CFM base (pes cubicos por minuto) necessario para troca de ar adequada.</p>

<h3>Fatores de correcao</h3>

<p>A calculadora aplica fatores de correcao com base na sua configuracao:</p>

<ul>
    <li><strong>Filtro de carvao</strong> &mdash; reduz o CFM efetivo em aproximadamente 25% (a calculadora adiciona essa reserva)</li>
    <li><strong>Comprimento e curvas dos dutos</strong> &mdash; cada curva e cada metro extra de duto adiciona resistencia; a calculadora contabiliza isso</li>
    <li><strong>Temperatura</strong> &mdash; se a temperatura ambiente e alta, voce precisa de mais fluxo de ar para manter a temperatura alvo; a calculadora sugere um multiplicador maior de CFM</li>
    <li><strong>Calor da luz</strong> &mdash; baseado na potencia da luz (do banco de dados ou inserida manualmente)</li>
</ul>

<p>O resultado e o <strong>CFM minimo recomendado</strong> para seu ventilador in-line. A calculadora sugere ventiladores adequados do banco de dados de equipamentos.</p>

<blockquote>
    <strong>Dica:</strong> Sempre dimensione o ventilador um passo acima do minimo recomendado. Um ventilador de 6 polegadas rodando a 60% e mais silencioso e melhor controlavel que um de 4 polegadas no maximo. A reserva extra tambem garante que seu ventilador lide com a pressao estatica adicional do filtro de carvao sem sobrecarregar.
</blockquote>

<h2>Setup Builder</h2>

<p>O Setup Builder guia voce no planejamento de um espaco de cultivo completo do zero. E especialmente util para cultivadores iniciantes ou qualquer pessoa montando uma nova tenda.</p>

<ol>
    <li><strong>Escolha o tamanho da tenda</strong> &mdash; selecione entre tamanhos padrao (60x60, 80x80, 100x100, 120x120 cm etc.) ou insira dimensoes personalizadas</li>
    <li><strong>Recomendacao de luz</strong> &mdash; o app sugere luzes LED do banco de dados que fornecem cobertura PPFD adequada para o tamanho de tenda escolhido, ordenadas por eficiencia</li>
    <li><strong>Dimensionamento de ventilacao</strong> &mdash; com base no volume da tenda e na saida termica da luz selecionada, o app recomenda combinacoes de ventilador e filtro</li>
    <li><strong>Calculo de potencia total</strong> &mdash; voce ve a soma da potencia de todo o equipamento selecionado e o consumo mensal estimado de eletricidade</li>
    <li><strong>Estimativa de calor</strong> &mdash; o builder calcula o calor total gerado para que voce possa planejar o resfriamento se necessario</li>
    <li><strong>Lista de equipamentos</strong> &mdash; revise sua configuracao completa e opcionalmente salve como um perfil de equipamento</li>
</ol>

<h2>Perfis de equipamento</h2>

<p>Perfis de equipamento (funcao Pro) permitem salvar toda a configuracao de uma tenda &mdash; luz, ventilador, filtro, sensores, vasos e substrato &mdash; como uma configuracao reutilizavel. Isso e util quando:</p>

<ul>
    <li><strong>Voce opera varias tendas</strong> &mdash; cada tenda tem seu perfil, para que voce possa registrar qual equipamento esta em cada tenda</li>
    <li><strong>Voce alterna entre cultivos</strong> &mdash; ao iniciar um novo cultivo, selecione o perfil e todas as informacoes de equipamento sao preenchidas automaticamente no diario</li>
    <li><strong>Voce faz upgrade de equipamento</strong> &mdash; compare seu perfil antigo com o novo para ver o que mudou</li>
</ul>

<p>Os perfis de equipamento sao compartilhados entre a aba Equipamentos e a aba Automacao. Quando voce cria uma tenda na aba Automacao para gerenciar dispositivos inteligentes, um perfil de equipamento e criado automaticamente. Quando voce atribui um cultivo a essa tenda no diario, as informacoes de equipamento sao transferidas.</p>

<h2>Estimador de rendimento</h2>

<p>O estimador de rendimento fornece uma previsao aproximada do que voce pode colher, com base em varios fatores:</p>

<ul>
    <li><strong>Potencia da luz</strong> &mdash; o principal impulsionador do potencial de rendimento</li>
    <li><strong>Tamanho da tenda</strong> &mdash; area disponivel da copa</li>
    <li><strong>Metodo de cultivo</strong> &mdash; SOG, ScrOG, mainlining, crescimento natural (tecnicas de treinamento geralmente aumentam o rendimento por area)</li>
    <li><strong>Nivel de experiencia</strong> &mdash; o estimador ajusta as expectativas para iniciante, intermediario e avancado</li>
</ul>

<p>A saida e uma <strong>estimativa de gramas por watt</strong> e faixa de rendimento total. Para uma configuracao LED moderna tipica, espere 0,5&ndash;1,0 g/W como iniciante e 1,0&ndash;1,5+ g/W como cultivador experiente com condicoes otimizadas.</p>

<blockquote>
    <strong>Lembre-se:</strong> Estimativas de rendimento sao inerentemente aproximadas. Genetica, controle de VPD, manejo de nutrientes, tecnicas de treinamento e inumeros outros fatores influenciam o numero final. Use o estimador como uma referencia geral, nao como garantia. O preditor mais preciso do seu rendimento sao seus proprios dados do diario de colheitas anteriores da mesma cepa.
</blockquote>
`
  },

  "vpd-seedling-clone": {
    title: "VPD para mudas e clones: Como fazer certo",
    body: `
<h2>Por que mudas e clones precisam de atencao especial</h2>
<p>Mudas e clones recem-cortados sao a fase mais vulneravel de qualquer cultivo. Seus sistemas radiculares sao subdesenvolvidos (mudas) ou inexistentes (clones), o que significa que dependem quase inteiramente de suas folhas para absorver umidade do ar circundante. Se o ar estiver muito seco, perdem agua mais rapido do que conseguem repor. Se estiver muito umido sem circulacao de ar, um fungo chamado damping-off pode destrui-los da noite para o dia.</p>
<p>VPD &mdash; Vapor Pressure Deficit &mdash; e o numero unico que captura a relacao entre temperatura e umidade como a planta a experimenta. Acertar o VPD nas primeiras 1&ndash;2 semanas estabelece a base para um cultivo saudavel e vigoroso.</p>

<h2>Faixa de VPD ideal: 0,4&ndash;0,8 kPa</h2>
<p>Para mudas e clones sem raizes, voce quer o VPD entre <strong>0,4 e 0,8 kPa</strong>. Isso e significativamente menor que os 0,8&ndash;1,2 usados na fase vegetativa, porque voce precisa minimizar a transpiracao ate que as raizes consigam suprir a demanda de agua.</p>
<p>Aqui estao combinacoes praticas de temperatura e umidade que produzem VPD nessa faixa:</p>
<ul>
    <li><strong>24&deg;C / 75&deg;F a 80% RH</strong> &rarr; VPD ~0,60 kPa (ponto ideal)</li>
    <li><strong>25&deg;C / 77&deg;F a 85% RH</strong> &rarr; VPD ~0,48 kPa (bom para clones frescos)</li>
    <li><strong>23&deg;C / 73&deg;F a 75% RH</strong> &rarr; VPD ~0,70 kPa (limite superior, mudas com algumas raizes)</li>
    <li><strong>26&deg;C / 79&deg;F a 80% RH</strong> &rarr; VPD ~0,67 kPa (sala mais quente, ainda seguro)</li>
</ul>

<blockquote>
    <strong>Dica:</strong> Use o grafico VPD no GrowVPD Pro para encontrar a intersecao exata da sua temperatura e umidade. A zona verde no grafico muda conforme a fase de crescimento &mdash; selecione "Muda/Clone" para ver o intervalo alvo correto destacado.
</blockquote>

<h2>Cupulas de umidade: Seu melhor amigo</h2>
<p>Uma cupula de umidade e a ferramenta mais simples e eficaz para manter a umidade alta ao redor de mudas e clones. Ela cria um microclima onde a umidade do substrato e das proprias plantas fica retida, mantendo o RH em 80&ndash;90% mesmo quando sua sala tem 50&ndash;60%.</p>

<h3>Melhores praticas para cupulas de umidade</h3>
<ul>
    <li><strong>Comece completamente fechada.</strong> Nos primeiros 2&ndash;3 dias apos plantar sementes ou cortar clones, mantenha a cupula totalmente fechada. Isso maximiza a umidade.</li>
    <li><strong>Abra as saidas gradualmente.</strong> A maioria das cupulas de propagacao tem saidas ajustaveis no topo. Apos o 3o dia, abra-as levemente. Ate o 5o&ndash;7o dia, abra pela metade.</li>
    <li><strong>Remova a cupula em etapas.</strong> Por volta do 7o&ndash;10o dia (ou quando voce ver novas raizes nos clones), remova a cupula por algumas horas por dia. Ate o 10o&ndash;14o dia, a cupula deve estar totalmente removida.</li>
    <li><strong>Limpe a condensacao diariamente.</strong> Condensacao pesada pingando nas mudas pode causar damping-off. Toda manha, limpe o interior da cupula.</li>
    <li><strong>Evite luz direta forte na cupula.</strong> A cupula funciona como uma estufa. Sob luz forte, a temperatura interna pode subir perigosamente. Use intensidade de luz mais baixa (200&ndash;300 PPFD) ou levante a luz mais alto.</li>
</ul>

<h2>Clones vs. mudas: Diferencas chave</h2>

<h3>Clones (estacas)</h3>
<p>Clones nao tem raizes quando cortados frescos. Transpiram pelas folhas, mas tem zero capacidade de absorver agua do substrato. Isso os torna extremamente sensiveis a baixa umidade.</p>
<ul>
    <li>VPD alvo: <strong>0,4&ndash;0,6 kPa</strong> (parte inferior da faixa)</li>
    <li>RH: <strong>80&ndash;90%</strong> sob a cupula</li>
    <li>Temperatura: <strong>24&ndash;26&deg;C</strong> (tapete termico sob a bandeja ajuda no desenvolvimento das raizes)</li>
    <li>Luz: Suave &mdash; 150&ndash;250 PPFD, regime 18/6</li>
    <li>Borrife as folhas 1&ndash;2x por dia se o RH cair abaixo de 75% sob a cupula</li>
</ul>

<h3>Mudas</h3>
<p>Mudas tem uma pequena raiz pivotante desde o inicio, entao sao um pouco menos frageis que clones. Porem, seu sistema radicular ainda e minimo.</p>
<ul>
    <li>VPD alvo: <strong>0,5&ndash;0,8 kPa</strong></li>
    <li>RH: <strong>70&ndash;80%</strong></li>
    <li>Temperatura: <strong>23&ndash;26&deg;C</strong></li>
    <li>Luz: Media &mdash; 200&ndash;400 PPFD, regime 18/6</li>
    <li>Nao regue demais &mdash; mantenha o substrato umido mas nao encharcado</li>
</ul>

<h2>Erros comuns</h2>

<h3>1. Ambiente muito seco sem cupula</h3>
<p>Muitos iniciantes dispensam a cupula de umidade e se perguntam por que seus clones murcham e morrem em 48 horas. Em uma sala de cultivo tipica com 50&ndash;60% RH e 25&deg;C, o VPD fica em torno de 1,2&ndash;1,6 kPa &mdash; muito alto para estacas sem raiz. As plantas perdem agua mais rapido do que conseguem absorver.</p>

<h3>2. Temperatura muito alta sob a cupula</h3>
<p>Uma cupula fechada sob luz forte pode atingir 35&deg;C e mais. Mesmo a 90% RH, isso empurra o VPD para 0,56 kPa, mas o proprio calor causa estresse, estiramento e dano celular. Mantenha a cupula longe de luz direta intensa e monitore a temperatura interna.</p>

<h3>3. Remocao da cupula muito rapida</h3>
<p>A transicao de 85% RH dentro da cupula para 55% RH na sala aberta e um choque. O VPD pula instantaneamente de ~0,5 para ~1,4 kPa. Faca a transicao gradualmente ao longo de 3&ndash;5 dias, abrindo progressivamente as saidas e depois removendo a cupula por periodos cada vez maiores.</p>

<h3>4. Sem circulacao de ar sob a cupula</h3>
<p>Ar estagnado e saturado favorece mofo e damping-off. Uma troca de ar muito leve &mdash; uma saida entreaberta ou uma remocao diaria breve &mdash; mantem o ar saudavel sem causar colapso de umidade.</p>

<div class="warning-box">
    <strong>Cuidado com o damping-off:</strong> Se os caules das mudas comecam a ficar finos, translucidos e desabam na base, a causa e o fungo damping-off. Ele prospera em umidade muito alta com circulacao de ar deficiente. Garanta alguma ventilacao mesmo sob as cupulas e evite regar demais.
</div>

<h2>Transicao para crescimento vegetativo</h2>
<p>Quando as mudas tem 3&ndash;4 conjuntos de folhas verdadeiras ou os clones mostram crescimento radicular visivel (geralmente 7&ndash;14 dias), e hora de transicionar para os alvos VPD vegetativos de <strong>0,8&ndash;1,2 kPa</strong>.</p>
<p>A transicao deve ser gradual, nao abrupta:</p>
<ol>
    <li><strong>Dias 10&ndash;12:</strong> Remova a cupula. Reduza RH para 70&ndash;75% aumentando a ventilacao ou reduzindo a potencia do umidificador.</li>
    <li><strong>Dias 12&ndash;14:</strong> Reduza RH para 65&ndash;70%. As plantas devem estar crescendo ativamente e transpirando mais.</li>
    <li><strong>Dia 14+:</strong> Alvo de 60&ndash;70% RH a 24&ndash;26&deg;C. O VPD agora deve estar em torno de 0,9&ndash;1,1 kPa. Aumente a intensidade luminosa para 400&ndash;600 PPFD.</li>
</ol>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro permite definir diferentes alvos de VPD para cada fase de crescimento. Quando voce muda a fase no diario de cultivo de "Muda" para "Vegetativa", o grafico VPD atualiza automaticamente a faixa alvo, para que voce sempre saiba se esta na faixa certa.
</blockquote>

<h2>Monitoramento com o GrowVPD Pro</h2>
<p>O grafico VPD no GrowVPD Pro calcula o VPD em tempo real a partir dos dados do seu sensor. Para mudas e clones, o processo e simples:</p>
<ul>
    <li>Posicione o sensor de temperatura/umidade dentro da cupula ou bandeja de propagacao, na altura da copa.</li>
    <li>Defina a fase de crescimento para "Muda" ou "Clone" para que o grafico destaque a zona alvo correta de VPD.</li>
    <li>Se voce usa automacao inteligente, crie uma regra: quando VPD subir acima de 0,8, ligue o umidificador. Quando VPD cair abaixo de 0,4, desligue. Isso manterra suas mudas na zona perfeita 24/7.</li>
    <li>Registre dados diarios no diario de cultivo para acompanhar a rapidez com que o ambiente se estabiliza.</li>
</ul>
`
  },

  "vpd-flowering": {
    title: "VPD durante a floracao: Previna mofo e maximize a colheita",
    body: `
<h2>Por que a floracao exige VPD mais alto</h2>
<p>Durante a floracao, buds densos criam bolsoes de umidade aprisionada entre os calices e as folhas de acucar. Se a umidade relativa permanece muito alta, a agua se condensa dentro desses buds onde o fluxo de ar nao alcanca. O resultado e <strong>botrytis</strong> (podridao dos buds) &mdash; um mofo cinza que pode destruir semanas de trabalho em poucos dias.</p>
<p>VPD mais alto significa ar mais seco, que puxa umidade dos buds e atraves dos estomatos mais rapidamente. Isso mantem o interior dos buds seco enquanto permite que a planta transpire e transporte nutrientes. O desafio e encontrar o equilibrio: seco o suficiente para prevenir mofo, mas nao tao seco que a planta feche os estomatos e pare de crescer.</p>

<h2>VPD ideal por semana de floracao</h2>
<p>A floracao nao e uma unica fase estatica. Os alvos de VPD devem mudar conforme os buds se desenvolvem:</p>

<h3>Floracao precoce (semanas 1&ndash;3): Fase de estiramento</h3>
<ul>
    <li><strong>VPD alvo:</strong> 1,0&ndash;1,3 kPa</li>
    <li><strong>Temperatura:</strong> 24&ndash;27&deg;C (75&ndash;80&deg;F)</li>
    <li><strong>Umidade:</strong> 55&ndash;65% RH</li>
    <li>As plantas ainda estao se esticando e crescendo rapidamente. Precisam de transpiracao ativa para fornecer nutrientes a todos os novos pontos de crescimento. VPD moderado mantem o crescimento vigoroso.</li>
</ul>

<h3>Floracao media (semanas 3&ndash;6): Desenvolvimento dos buds</h3>
<ul>
    <li><strong>VPD alvo:</strong> 1,2&ndash;1,5 kPa</li>
    <li><strong>Temperatura:</strong> 23&ndash;26&deg;C (73&ndash;79&deg;F)</li>
    <li><strong>Umidade:</strong> 45&ndash;55% RH</li>
    <li>Os buds estao engordando e ficando mais densos. E aqui que o risco de podridao comeca a subir. Reduza a umidade e mantenha temperaturas moderadas. Temperaturas ligeiramente mais baixas tambem ajudam na preservacao dos terpenos.</li>
</ul>

<h3>Floracao tardia (semanas 6&ndash;9+): Maturacao e finalizacao</h3>
<ul>
    <li><strong>VPD alvo:</strong> 1,3&ndash;1,6 kPa</li>
    <li><strong>Temperatura:</strong> 21&ndash;24&deg;C (70&ndash;75&deg;F)</li>
    <li><strong>Umidade:</strong> 40&ndash;50% RH</li>
    <li>Prevencao maxima de podridao. Os buds estao no maximo de densidade. Reduza tanto temperatura quanto umidade. Temperaturas mais frias promovem producao de antocianinas (cores roxas) e preservam terpenos volateis que evaporam em temperaturas mais altas.</li>
</ul>

<blockquote>
    <strong>Dica:</strong> No GrowVPD Pro, mude a fase de crescimento no registro do diario a cada semana. O grafico VPD atualiza automaticamente a faixa alvo e mostra exatamente onde voce deveria estar em cada fase da floracao.
</blockquote>

<h2>O problema da podridao dos buds</h2>
<p>Botrytis cinerea (podridao dos buds) e uma das maiores ameacas ambientais durante a floracao. Ela entra por tecidos mortos ou moribundos &mdash; uma folha seca presa dentro de uma cola densa e o ponto de entrada perfeito.</p>

<h3>Condicoes que favorecem a podridao</h3>
<ul>
    <li>Umidade acima de 60% durante a floracao media e tardia</li>
    <li>Circulacao de ar insuficiente, especialmente dentro da copa</li>
    <li>Grandes oscilacoes de temperatura entre luzes ligadas e desligadas (formacao de condensacao)</li>
    <li>Colas densas com folhas mortas presas dentro</li>
    <li>Agua parada nas flores (pulverizacao foliar durante a floracao e arriscado)</li>
</ul>

<h3>Como o controle de VPD previne</h3>
<p>Mantendo o VPD acima de 1,2 kPa na floracao media e tardia, voce garante que o ar esteja ativamente removendo umidade da superficie das plantas. Mesmo dentro de buds densos, um gradiente de VPD mais alto significa que a umidade se move para fora, em vez de condensar para dentro.</p>

<div class="warning-box">
    <strong>Critico:</strong> Durante a floracao, nunca borrife agua ou nutrientes foliares nos buds. A umidade retida dentro de buds densos nao evapora rapidamente e cria condicoes perfeitas para botrytis, independentemente do VPD da sala.
</div>

<h2>Gerenciando VPD sem estressar as plantas</h2>
<p>Empurrar o VPD muito alto (acima de 1,6 kPa) causa seus proprios problemas. A planta fecha os estomatos para conservar agua, o que interrompe a transpiracao, o transporte de nutrientes e a fotossintese. As bordas das folhas se enrolam para cima (formando "taco") e o crescimento desacelera.</p>

<h3>Estrategias para gerenciamento seguro de VPD</h3>
<ul>
    <li><strong>Dimensionamento do desumidificador:</strong> Seu desumidificador deve ser forte o suficiente para o volume da tenda e numero de plantas. Uma tenda de 120x120 cm com 4 plantas grandes em plena floracao pode transpirar 3&ndash;6 litros de agua por dia. Um desumidificador pequeno de 10 L/dia pode nao ser suficiente.</li>
    <li><strong>Circulacao de ar:</strong> Ventiladores oscilantes dentro da tenda mantem o ar em movimento pela copa e previnem bolsoes de umidade. Nao aponte os ventiladores diretamente nos buds &mdash; use fluxo indireto.</li>
    <li><strong>Controle de exaustao:</strong> Seu ventilador in-line deve rodar continuamente ou em ciclos curtos. A troca de ar fresco substitui o ar umido da tenda por ar externo mais seco.</li>
    <li><strong>Gerenciamento noturno:</strong> Quando as luzes se apagam, a temperatura cai, mas as plantas liberam umidade por mais 30&ndash;60 minutos. E quando o RH dispara e o risco de podridao atinge o pico. Ligue o desumidificador em um timer que se sobreponha ao desligamento das luzes por pelo menos 30 minutos.</li>
    <li><strong>Tucking e desfolhacao:</strong> Remover folhas grandes que sombreiam os buds melhora a circulacao de ar e reduz a superficie de transpiracao. Isso naturalmente reduz a umidade da tenda.</li>
</ul>

<h2>O problema do pico noturno</h2>
<p>O momento mais perigoso para mofo e a primeira hora apos as luzes se apagarem. A temperatura cai rapidamente (as luzes produzem calor significativo), mas a umidade nao cai tao rapido. O VPD despenca, as vezes para 0,5&ndash;0,7 kPa, mesmo que estivesse em 1,4 kPa com as luzes ligadas.</p>
<p>Solucoes:</p>
<ol>
    <li><strong>Desumidificador 24/7</strong> na floracao tardia, nao apenas durante as luzes ligadas.</li>
    <li><strong>Pequeno aquecedor</strong> para desacelerar levemente a queda de temperatura a noite. Manter a temperatura apenas 2&ndash;3&deg;C acima do que cairia naturalmente tem grande impacto no VPD.</li>
    <li><strong>Escaloneamento das luzes</strong> em setups multi-tenda para que o sistema de exaustao nao fique sobrecarregado.</li>
    <li><strong>Automacao com GrowVPD Pro:</strong> Crie uma regra baseada em VPD que liga o desumidificador quando o VPD cai abaixo de 1,1 kPa e desliga quando o VPD excede 1,5 kPa.</li>
</ol>

<blockquote>
    <strong>Dica:</strong> Use o registro de temperatura noturna no GrowVPD Pro para acompanhar a diferenca de VPD dia/noite. Se a diferenca for maior que 0,5 kPa entre luzes ligadas e desligadas, sua estrategia noturna precisa melhorar.
</blockquote>

<h2>Oidio vs. podridao dos buds</h2>
<p>Enquanto a podridao prospera em alta umidade, o <strong>oidio</strong> (powdery mildew, PM) e mais complexo. O PM na verdade se espalha mais rapido em umidade media (50&ndash;70%) com temperaturas flutuantes. Nao precisa de superficies molhadas &mdash; apenas ar estagnado e oscilacoes de temperatura.</p>
<p>A boa noticia: as mesmas praticas de gerenciamento de VPD que previnem podridao tambem reduzem o risco de PM. Temperaturas estaveis, boa circulacao de ar e evitar oscilacoes de umidade tratam ambas as ameacas.</p>

<h2>Checklist: configuracao climatica para floracao</h2>
<ul>
    <li>Desumidificador dimensionado para o volume da tenda (minimo 20 L/dia para tenda 120x120)</li>
    <li>Ventiladores oscilantes fornecendo fluxo de ar indireto pela copa</li>
    <li>Exaustao in-line funcionando continuamente ou em ciclos 5 min ligado / 5 min desligado</li>
    <li>Sensor de temperatura/umidade no nivel da copa (nao perto das luzes ou paredes)</li>
    <li>Alvo VPD ajustando semanalmente com o desenvolvimento dos buds</li>
    <li>Estrategia de umidade noturna (desumidificador sobrepondo o desligamento das luzes)</li>
    <li>Verificacao regular dos buds para sinais precoces de mofo cinza</li>
</ul>
`
  },

  "night-temperature-vpd": {
    title: "Temperatura noturna e VPD: O fator negligenciado",
    body: `
<h2>O diferencial de temperatura dia/noite</h2>
<p>A maioria dos cultivadores se preocupa obsessivamente com seu VPD diurno, mas ignora completamente o que acontece quando as luzes se apagam. Isso e um erro critico. O <strong>diferencial de temperatura dia/noite</strong> &mdash; comumente chamado DIF &mdash; afeta diretamente o alongamento das plantas, a expressao de cores, a preservacao de terpenos e o risco de doencas.</p>
<p>Quando as luzes se apagam, a fonte de calor desaparece, mas as plantas continuam transpirando por mais 30&ndash;60 minutos. A temperatura cai, a umidade sobe e o VPD despenca. Entender e gerenciar essa transicao e o que diferencia bons cultivadores de excelentes.</p>

<h2>Como o DIF afeta suas plantas</h2>

<h3>Alongamento dos caules (distancia internodal)</h3>
<p>Pesquisas mostram consistentemente que a diferenca entre temperatura diurna e noturna afeta o comprimento dos internodios mais do que qualquer uma das temperaturas individualmente:</p>
<ul>
    <li><strong>DIF positivo</strong> (dia 5&ndash;10&deg;C mais quente que a noite): Promove alongamento. Internodios mais longos, plantas mais altas. Util na vegetativa precoce se voce quer crescimento vertical rapido.</li>
    <li><strong>DIF zero</strong> (dia e noite na mesma temperatura): Crescimento moderado e equilibrado.</li>
    <li><strong>DIF negativo</strong> (noite 2&ndash;4&deg;C mais quente que o dia): Reduz alongamento, produz plantas compactas com internodios curtos. Alguns cultivadores avancados usam essa tecnica nas primeiras 2 semanas de floracao para minimizar o estiramento.</li>
</ul>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro registra tanto temperatura diurna quanto noturna em cada entrada do diario. Com o tempo, voce pode correlacionar suas configuracoes de DIF com dados de altura das plantas e encontrar o diferencial ideal para sua genetica.
</blockquote>

<h3>Expressao de cores (antocianinas)</h3>
<p>As coloracoes roxas, azuis e escuras das plantas sao causadas por pigmentos antocianinas. Esses pigmentos sao ativados por <strong>temperaturas noturnas frias</strong>, geralmente abaixo de 18&deg;C (64&deg;F). Se voce cultiva cepas com genetica roxa, uma queda noturna para 15&ndash;18&deg;C durante as ultimas 2&ndash;3 semanas de floracao intensifica dramaticamente a expressao de cor.</p>
<p>Abaixo de 15&deg;C, porem, ha risco de desacelerar os processos metabolicos e estressar a planta. O ponto ideal para cor sem estresse e 16&ndash;18&deg;C a noite.</p>

<h3>Preservacao de terpenos</h3>
<p>Os terpenos sao compostos aromaticos volateis que evaporam em temperaturas mais altas. Os terpenos mais sensiveis (linalol, mirceno, terpinoleno) comecam a evaporar acima de 25&deg;C. Mantendo temperaturas noturnas em 18&ndash;21&deg;C, voce reduz a perda de terpenos durante as 12 horas de escuridao.</p>
<p>Alguns cultivadores tambem reduzem as temperaturas diurnas para 22&ndash;24&deg;C na ultima semana de floracao para maxima preservacao de terpenos, aceitando fotossintese ligeiramente reduzida em troca de melhor aroma e sabor.</p>

<h2>Temperatura noturna ideal por fase de crescimento</h2>

<h3>Fase muda/clone</h3>
<ul>
    <li><strong>Dia:</strong> 24&ndash;26&deg;C</li>
    <li><strong>Noite:</strong> 22&ndash;24&deg;C</li>
    <li><strong>DIF:</strong> queda de 2&ndash;3&deg;C</li>
    <li>Oscilacao minima de temperatura. Mudas e clones sao frageis e se beneficiam de estabilidade.</li>
</ul>

<h3>Fase vegetativa</h3>
<ul>
    <li><strong>Dia:</strong> 24&ndash;28&deg;C</li>
    <li><strong>Noite:</strong> 20&ndash;23&deg;C</li>
    <li><strong>DIF:</strong> queda de 3&ndash;5&deg;C</li>
    <li>DIF moderado promove crescimento saudavel. Evite temperaturas noturnas abaixo de 18&deg;C na vegetativa, pois desacelera o desenvolvimento radicular.</li>
</ul>

<h3>Fase de floracao</h3>
<ul>
    <li><strong>Dia:</strong> 23&ndash;26&deg;C</li>
    <li><strong>Noite:</strong> 18&ndash;21&deg;C</li>
    <li><strong>DIF:</strong> queda de 4&ndash;6&deg;C</li>
    <li>Essa faixa equilibra desenvolvimento dos buds, preservacao de terpenos e expressao de cores. Nas ultimas 2 semanas, voce pode baixar as temperaturas noturnas para 16&ndash;18&deg;C para realcar as cores.</li>
</ul>

<div class="warning-box">
    <strong>Aviso:</strong> Uma queda noturna maior que 8&ndash;10&deg;C pode causar condensacao na superficie das plantas e dentro dos buds. Isso aumenta dramaticamente o risco de podridao. Quedas grandes de temperatura devem sempre ser acompanhadas de desumidificacao ativa.
</div>

<h2>A queda do VPD ao desligar as luzes</h2>
<p>Eis o que acontece em uma tenda tipica quando as luzes se apagam as 20:00:</p>
<ul>
    <li><strong>20:00:</strong> Luzes desligadas. Temperatura 26&deg;C, RH 55%, VPD = 1,53 kPa</li>
    <li><strong>20:30:</strong> Temperatura cai para 23&deg;C. Plantas ainda transpiram. RH sobe para 68%. VPD = 0,90 kPa</li>
    <li><strong>21:00:</strong> Temperatura estabiliza em 21&deg;C. RH atinge pico de 75%. VPD = 0,62 kPa</li>
    <li><strong>22:00:</strong> Transpiracao desacelera. RH cai para 70%. VPD = 0,74 kPa</li>
</ul>
<p>Em uma hora, o VPD caiu de saudaveis 1,53 para perigosos 0,62 &mdash; na zona de risco de podridao. Essa queda noturna de VPD e a razao pela qual muitos cultivadores perdem colas para botrytis, mesmo quando as condicoes diurnas parecem perfeitas.</p>

<h2>Estrategias para gerenciamento do VPD noturno</h2>

<h3>1. Desumidificador 24/7</h3>
<p>Nao coloque o desumidificador em um timer que corresponda as suas luzes. Ele precisa trabalhar mais forte nos primeiros 60 minutos apos apagar as luzes &mdash; exatamente quando a maioria dos cultivadores o desliga.</p>

<h3>2. Pequeno aquecedor com termostato</h3>
<p>Um aquecedor controlado por termostato configurado para manter 20&ndash;21&deg;C previne a queda de temperatura enquanto mantem a queda noturna na faixa benefica de 4&ndash;5&deg;C. Isso sozinho pode manter o VPD acima de 1,0 kPa a noite.</p>

<h3>3. Automatize com regras baseadas em VPD</h3>
<p>No GrowVPD Pro, crie regras de automacao que reagem diretamente ao VPD, nao apenas a temperatura ou umidade:</p>
<ul>
    <li>Se VPD cair abaixo de 1,0 kPa, ligar desumidificador E aquecedor</li>
    <li>Se VPD subir acima de 1,5 kPa, desligar aquecedor</li>
    <li>Se temperatura cair abaixo de 18&deg;C, ligar aquecedor independentemente do VPD</li>
</ul>

<h3>4. Escalone os horarios de luz</h3>
<p>Se voce opera varias tendas no mesmo sistema de exaustao, espaco seus horarios de luz em 2&ndash;4 horas. Assim voce nunca tem todas as tendas liberando umidade simultaneamente ao apagar as luzes.</p>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro registra a temperatura noturna separadamente da diurna em cada entrada do diario. Verifique seus registros semanalmente e acompanhe se seu VPD noturno esta consistentemente na faixa ou se voce precisa ajustar sua configuracao.
</blockquote>

<h2>Configuracao de monitoramento</h2>
<p>Para rastrear adequadamente as diferencas dia/noite, voce precisa de um sensor que registre continuamente, nao apenas leituras pontuais quando verifica a tenda:</p>
<ul>
    <li>Use um sensor WiFi (Tuya, AC Infinity) que reporte ao GrowVPD Pro a cada 15 minutos</li>
    <li>Posicione o sensor na altura da copa, longe da parede e nao diretamente sob a luz</li>
    <li>Toda manha, verifique os dados min/max e identifique os extremos noturnos</li>
    <li>Use o historico do grafico VPD para identificar padroes e ajustar a configuracao</li>
</ul>
`
  },

  "humidity-control-guide": {
    title: "Como controlar a umidade na sua sala de cultivo",
    body: `
<h2>Por que o controle de umidade e importante</h2>
<p>A umidade e metade da equacao VPD e e a metade que a maioria dos cultivadores tem dificuldade em controlar. A temperatura e relativamente facil de gerenciar &mdash; as luzes produzem calor e a maioria das salas tem comportamento termico previsivel. A umidade, por outro lado, muda constantemente conforme as plantas transpiram, a agua evapora do substrato e o ar fresco e trocado.</p>
<p>Controle inadequado de umidade leva a oscilacoes de VPD que estressam as plantas, favorecem doencas e reduzem os rendimentos. Uma tenda que oscila entre 40% e 80% RH durante o dia nunca atingira crescimento otimo, independentemente de quao perfeito e todo o resto.</p>

<h2>Umidificadores: Quando voce precisa de mais umidade</h2>
<p>Voce normalmente precisa de um umidificador nestes cenarios:</p>
<ul>
    <li><strong>Fase de muda/clone</strong>, quando voce precisa de 75&ndash;85% RH mas sua sala tem 40&ndash;55%</li>
    <li><strong>Climas secos</strong> (regioes aridas, salas aquecidas no inverno), onde o RH ambiente e persistentemente abaixo de 40%</li>
    <li><strong>Tendas pequenas com exaustao forte</strong>, que removem umidade mais rapido do que as plantas conseguem produzir</li>
    <li><strong>Vegetativa precoce</strong>, quando plantas jovens ainda nao transpiram o suficiente para elevar a umidade da tenda</li>
</ul>

<h3>Tipos de umidificadores</h3>
<ul>
    <li><strong>Ultrasonico (nevoa fria):</strong> Escolha mais comum para salas de cultivo. Produz nevoa fina usando vibracoes ultrasonicas. Pros: barato, silencioso, saida ajustavel. Contras: pode deixar po branco mineral nas folhas se voce usar agua dura (use agua destilada ou osmose reversa).</li>
    <li><strong>Evaporativo:</strong> Usa um ventilador para soprar ar atraves de um pavio umido. Pros: sem po mineral, autorregulavel (saida diminui com RH crescente). Contras: volumoso, pavios precisam de troca regular, resposta mais lenta.</li>
    <li><strong>Vapor (nevoa quente):</strong> Ferve agua para produzir vapor. Pros: sem minerais na saida, mata bacterias. Contras: adiciona calor a sala, maior consumo de energia, nao ideal para cultivos que ja rodam quente.</li>
</ul>

<h3>Dimensionamento do umidificador</h3>
<p>Combine a saida do umidificador com o volume da tenda e o aumento de RH desejado:</p>
<ul>
    <li><strong>Tenda 60x60 cm (0,2 m3):</strong> Um pequeno umidificador de 1&ndash;2 L/dia e suficiente</li>
    <li><strong>Tenda 120x120 cm (1,7 m3):</strong> Saida de 3&ndash;5 L/dia para aumentar RH em 15&ndash;20%</li>
    <li><strong>Tenda 240x120 cm (3,5 m3):</strong> 6&ndash;10 L/dia ou duas unidades menores</li>
</ul>

<blockquote>
    <strong>Dica:</strong> Coloque o umidificador fora da tenda e direcione a nevoa para dentro pela entrada passiva. Isso evita que gotas de agua caiam diretamente nas folhas e previne depositos minerais na superficie das plantas.
</blockquote>

<h2>Desumidificadores: Quando voce precisa de menos umidade</h2>
<p>A desumidificacao se torna critica durante:</p>
<ul>
    <li><strong>Floracao</strong>, quando plantas adultas transpiram fortemente e os buds sao suscetiveis a mofo</li>
    <li><strong>Climas umidos</strong>, onde o RH ambiente ja e 60&ndash;80%</li>
    <li><strong>A noite</strong>, quando a temperatura cai e o RH dispara</li>
    <li><strong>Grande numero de plantas</strong>, onde a transpiracao combinada sobrecarrega o sistema de exaustao</li>
</ul>

<h3>Tipos de desumidificadores</h3>
<ul>
    <li><strong>Compressor (refrigerante):</strong> Escolha padrao. Aspira ar sobre trocadores de calor frios e condensa a umidade. Pros: eficiente, amplamente disponivel, boa capacidade. Contras: adiciona calor a sala (processo de condensacao libera calor latente), tem dificuldade abaixo de 15&deg;C.</li>
    <li><strong>Dessecante (sorcao):</strong> Usa material dessecante para absorver umidade, depois o aquece para liberar a agua em um reservatorio. Pros: funciona bem em temperaturas baixas (abaixo de 15&deg;C), silencioso. Contras: mais caro, maior consumo de energia, adiciona ainda mais calor que modelos de compressor.</li>
</ul>

<h3>Dimensionamento do desumidificador</h3>
<p>Plantas em plena floracao transpiram mais agua do que a maioria dos cultivadores espera. Uma planta grande pode liberar 1&ndash;2 litros de agua por dia pelas folhas.</p>
<ul>
    <li><strong>Tenda 120x120 cm, 4 plantas em floracao:</strong> Capacidade minima de 10&ndash;15 L/dia</li>
    <li><strong>Tenda 240x120 cm, 8 plantas em floracao:</strong> Capacidade de 20&ndash;30 L/dia</li>
    <li><strong>Sala completa (4x4 m e maior):</strong> Unidade comercial de 30&ndash;50 L/dia</li>
</ul>

<div class="warning-box">
    <strong>Importante:</strong> As especificacoes de desumidificadores sao geralmente medidas a 30&deg;C e 80% RH. A extracao real a 23&deg;C e 60% RH e frequentemente 40&ndash;60% da capacidade nominal. Sempre compre maior do que voce acha que precisa.
</div>

<h2>Automacao baseada em VPD</h2>
<p>O controle mais eficaz de umidade usa VPD como gatilho, nao valores brutos de umidade. Isso porque a mesma porcentagem de umidade produz valores de VPD muito diferentes em temperaturas diferentes.</p>
<p>Por exemplo, 60% RH a 20&deg;C da VPD = 0,93 kPa, mas 60% RH a 28&deg;C da VPD = 1,51 kPa. Controlar a umidade em uma porcentagem fixa ignora a temperatura e erra o alvo.</p>

<h3>Configurando automacao VPD no GrowVPD Pro</h3>
<ol>
    <li>Conecte seu sensor de temperatura/umidade (Tuya, AC Infinity ou BLE)</li>
    <li>Conecte seu umidificador e desumidificador a tomadas inteligentes</li>
    <li>Crie duas regras de automacao:
        <ul>
            <li><strong>Regra 1:</strong> Se VPD cair abaixo do minimo alvo (ex: 0,8 kPa na vegetativa), ligue o desumidificador. Desligue quando VPD voltar acima do minimo + histerese (ex: 0,9 kPa).</li>
            <li><strong>Regra 2:</strong> Se VPD subir acima do maximo alvo (ex: 1,3 kPa na vegetativa), ligue o umidificador. Desligue quando VPD voltar abaixo do maximo - histerese (ex: 1,2 kPa).</li>
        </ul>
    </li>
    <li>Defina tempos minimos desligado (5&ndash;10 minutos) para evitar ciclos rapidos que encurtam a vida util do equipamento</li>
</ol>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro suporta histerese em todas as regras de automacao. A histerese impede que os dispositivos fiquem ligando e desligando rapidamente quando o VPD circula ao redor do ponto de gatilho. Uma histerese de 0,1&ndash;0,2 kPa funciona bem para a maioria das configuracoes.
</blockquote>

<h2>Ventilacao como controle de umidade</h2>
<p>Seu ventilador in-line de exaustao e uma ferramenta poderosa para controle de umidade, especialmente quando o ar externo e mais seco que o ar da tenda:</p>
<ul>
    <li><strong>Ventilar ar umido da tenda</strong> e substitui-lo por ar mais seco da sala ou de fora e a forma mais barata de desumidificacao</li>
    <li><strong>Controladores de velocidade variavel</strong> (como AC Infinity) permitem aumentar a velocidade do ventilador quando o RH sobe, fornecendo controle responsivo sem desumidificador</li>
    <li><strong>Em climas umidos</strong> essa estrategia falha, porque o ar que entra ja esta umido. Em vez disso, voce precisa de um desumidificador.</li>
</ul>

<h2>Dicas DIY para cultivadores com orcamento limitado</h2>

<h3>Aumentar umidade com orcamento</h3>
<ul>
    <li><strong>Metodo da toalha umida:</strong> Pendure uma toalha umida perto da entrada passiva. O ar que passa evapora a agua da toalha. Troque ou reumedeca a cada 8&ndash;12 horas.</li>
    <li><strong>Recipientes abertos com agua:</strong> Coloque bandejas de agua dentro da tenda. A evaporacao aumenta lentamente o RH. Funciona melhor em tendas quentes.</li>
    <li><strong>Reduza a velocidade da exaustao:</strong> Desacelerar o ventilador permite que a transpiracao das plantas se acumule, aumentando a umidade. Cuidado com acumulo de calor.</li>
</ul>

<h3>Diminuir umidade com orcamento</h3>
<ul>
    <li><strong>Aumente a velocidade da exaustao:</strong> Se o ar externo e mais seco, aumentar o ventilador troca ar umido por seco.</li>
    <li><strong>DampRid / recipientes de cloreto de calcio:</strong> Recipientes dessecantes passivos absorvem umidade do ar. Funcionam mas tem capacidade limitada &mdash; bons apenas para tendas pequenas.</li>
    <li><strong>Desfolhacao:</strong> Remover folhas grandes em excesso reduz a superficie de transpiracao, diminuindo a quantidade de agua entrando no ar.</li>
    <li><strong>Regue com menos frequencia:</strong> Menos agua no substrato significa menos evaporacao para o ar da tenda.</li>
</ul>

<h2>Desafios sazonais</h2>

<h3>Inverno (temporada de aquecimento)</h3>
<p>O ar interno aquecido e muito seco (frequentemente 20&ndash;35% RH). Isso e otimo para floracao, mas torna as fases de mudas e vegetativa dificeis sem umidificador. A diferenca de temperatura entre a sala aquecida e a tenda tambem pode causar condensacao nas paredes frias da tenda.</p>

<h3>Verao (temporada umida)</h3>
<p>Alta umidade ambiente (60&ndash;80%) torna a floracao perigosa. Voce precisa de desumidificador e sua exaustao e menos eficaz porque o ar que entra ja esta umido. Em casos extremos, use ar-condicionado para resfriar e desumidificar simultaneamente.</p>

<h2>Referencia rapida por fase</h2>
<ul>
    <li><strong>Mudas/clones:</strong> Cupula + pequeno umidificador (se a sala for muito seca)</li>
    <li><strong>Vegetativa:</strong> Umidificador OU controle de exaustao (alvo 60&ndash;70% RH)</li>
    <li><strong>Floracao precoce:</strong> Desumidificador em standby, exaustor como controle primario (alvo 50&ndash;60% RH)</li>
    <li><strong>Floracao tardia:</strong> Desumidificador 24/7, exaustao forte (alvo 40&ndash;50% RH)</li>
</ul>
`
  },

  "cross-brand-automation": {
    title: "Automacao cross-brand: Combinando Tuya, Mars Hydro e mais",
    body: `
<h2>O problema: jardins murados</h2>
<p>Cada marca de equipamento de cultivo vem com seu proprio app, sua propria nuvem e seu proprio sistema de automacao. MarsPro, AC Infinity, Vivosun Grow, Spider Farmer e o portal Bluelab Edenic sao todos otimos para seu proprio hardware &mdash; mas nao se enxergam entre si, e nenhum deles ve o diario de cultivo onde voce realmente acompanha o que esta acontecendo com suas plantas.</p>
<p>Os cultivadores ficam com duas opcoes ruins: se comprometer com um ecossistema (e perder acesso ao melhor equipamento das outras marcas), ou rodar quatro a cinco apps com coordenacao manual entre eles (o que anula o proposito da automacao).</p>

<h2>A solucao: GrowVPD Pro como camada unificada</h2>
<p>O GrowVPD Pro faz login em cada plataforma com suas proprias credenciais e unifica todos os dispositivos em uma hierarquia unica de sala/tenda. Cada marca continua fazendo o que faz melhor &mdash; Mars Hydro ainda passa pela nuvem Mars Hydro, AC Infinity ainda funciona via UIS, Bluelab ainda publica via Edenic &mdash; mas agora voce os ve lado a lado, registra no mesmo diario e escreve regras que misturam marcas onde isso realmente ajuda.</p>
<p>Plataformas suportadas:</p>
<ul>
    <li><strong>AC Infinity</strong> &mdash; Controller 69/89 Pro, ventiladores Cloudline, clip fans (cabo UIS + cloud)</li>
    <li><strong>Mars Hydro</strong> &mdash; drivers LED iConnect, ventiladores iHub, clip fans (WiFi + MQTT cloud)</li>
    <li><strong>Spider Farmer</strong> &mdash; drivers LED, ventiladores, sensores (WiFi + MQTT cloud)</li>
    <li><strong>Vivosun</strong> &mdash; GrowHub (CO2, temperatura, RH), tomadas inteligentes, LED (cloud)</li>
    <li><strong>Bluelab</strong> &mdash; Pulse medidor de zona radicular (pH, EC, temperatura) via Edenic cloud, somente leitura</li>
    <li><strong>SANlight</strong> &mdash; LEDs Bluetooth Mesh, dimerizacao opcional 0&ndash;10V via AC Infinity</li>
    <li><strong>Tuya / Smart Life</strong> &mdash; sensores WiFi / Zigbee, tomadas inteligentes, cameras, dimmers, climatizacao, valvulas de irrigacao</li>
</ul>

<h2>Cenarios realisticos</h2>

<h3>Cenario 1: Loop VPD da AC Infinity (mesma marca)</h3>
<p>O AC Infinity Controller 69/89 Pro foi projetado exatamente para isso: le sua propria sonda de temperatura/RH, calcula o VPD e ajusta finamente seu proprio ventilador Cloudline pelo cabo UIS. O papel do GrowVPD Pro aqui nao e reinventar esse loop &mdash; e gerencia-lo junto com suas outras tendas, registrar tudo no diario e permitir que voce defina alvos de VPD por fase em um so lugar.</p>
<div class="step-card">
    <span class="step-number">1</span>
    <h3>Configuracao</h3>
    <ul>
        <li>Conecte sua conta AC Infinity em Configuracoes &gt; Contas conectadas</li>
        <li>O Controller 69/89 Pro e ventiladores Cloudline conectados aparecerao na aba Automacao</li>
        <li>Atribua-os a uma tenda e selecione a fase de crescimento atual</li>
    </ul>
</div>
<div class="step-card">
    <span class="step-number">2</span>
    <h3>Crie a regra</h3>
    <ul>
        <li><strong>Sensor:</strong> sonda de temperatura + RH do AC Infinity Controller (embutida, calcula VPD)</li>
        <li><strong>Condicao:</strong> VPD fora de 1,1&ndash;1,4 kPa (faixa de floracao)</li>
        <li><strong>Gatilho:</strong> mova o ventilador Cloudline &plusmn;2 passos de velocidade em direcao ao alvo</li>
        <li><strong>Restauracao:</strong> retorno a velocidade base para a fase atual</li>
        <li><strong>Histerese:</strong> 0,1 kPa</li>
    </ul>
</div>
<p>Resultado: seu hardware AC Infinity continua fazendo o loop climatico de alta frequencia para o qual foi projetado &mdash; o GrowVPD Pro apenas define os alvos, registra e gerencia transicoes de fase.</p>

<h3>Cenario 2: Qualquer sensor &rarr; tomada Tuya &rarr; aquecedor simples</h3>
<p>Aqui e onde cross-brand realmente compensa. Seu sensor real pode ser qualquer coisa em que voce ja confia &mdash; sonda AC Infinity, leitura de temperatura do Bluelab Pulse, SwitchBot, chaveiro Zigbee Tuya de $10. O atuador e uma tomada inteligente Tuya entediante com um aquecedor a oleo comum plugado nela. A tomada e apenas um interruptor burro no meio; o GrowVPD Pro e o cerebro.</p>
<ul>
    <li><strong>Sensor:</strong> qualquer sensor de temperatura em que voce confia</li>
    <li><strong>Condicao:</strong> temperatura &lt; 18&deg;C, apenas horas sem luz</li>
    <li><strong>Alvo:</strong> tomada inteligente Tuya alimentando aquecedor</li>
    <li><strong>Histerese:</strong> 2&deg;C (desliga em 20&deg;C)</li>
    <li><strong>Tempo minimo desligado:</strong> 10 min para proteger o termostato do aquecedor de ciclos curtos</li>
</ul>

<h3>Cenario 3: Enriquecimento de CO2 via Vivosun GrowHub (mesma marca, apenas diurno)</h3>
<p>Outro loop de mesma marca, mas com protecoes de seguranca. O GrowHub le o CO2, abre uma tomada Vivosun que alimenta um regulador de CO2 e fecha quando o nivel se restaura. A regra roda apenas com luzes ligadas, limita o tempo total de operacao diario e respeita o tempo minimo desligado para nao danificar o solenoide.</p>
<ul>
    <li><strong>Sensor:</strong> sonda CO2 do Vivosun GrowHub</li>
    <li><strong>Condicao:</strong> CO2 &lt; 800 ppm, apenas durante horas com luz</li>
    <li><strong>Alvo:</strong> tomada inteligente Vivosun no regulador de CO2</li>
    <li><strong>Histerese:</strong> 100 ppm (fecha em 900 ppm)</li>
    <li><strong>Tempo maximo:</strong> 30 min &middot; <strong>Tempo minimo desligado:</strong> 15 min</li>
</ul>

<h3>Cenario 4: Bluelab Pulse &rarr; alerta de desvio de pH (apenas notificacao)</h3>
<p>Este deliberadamente <em>nao</em> e automatizado no lado do atuador. Correcao de pH na zona radicular e onde erros danificam as plantas mais rapido &mdash; uma dose presa ou leitura ruidosa pode causar danos reais. O GrowVPD Pro monitora seu Bluelab Pulse via Edenic cloud e envia uma notificacao com a leitura e a fase atual quando sai da faixa. A decisao de dosagem permanece com voce.</p>

<h3>Cenario 5: Registro unificado no diario e timelapse de camera</h3>
<p>Cada sensor conectado de cada marca &mdash; sonda AC Infinity, Vivosun GrowHub, Bluelab Pulse, chaveiros Tuya &mdash; registra no mesmo diario de cultivo a cada 15 minutos. Cameras (Tuya, ONVIF/RTSP) salvam snapshots automaticos na mesma timeline. Uma tenda, um diario, cada marca.</p>

<blockquote>
    <strong>Insight chave:</strong> O GrowVPD Pro nao forca automacao cross-brand onde uma unica marca e mais limpa. Regras de mesma marca (AC Infinity controller &rarr; proprio ventilador, Vivosun GrowHub &rarr; propria tomada) sao as mais limpas e seguras porque o controller foi projetado para aquele loop. Automacao cross-brand brilha quando voce quer que uma tomada Tuya neutra reaja a qualquer sensor, ou quando o sensor em que voce confia nao tem seus proprios atuadores.
</blockquote>

<h2>Por que isso importa para cultivadores</h2>

<h3>Compre o melhor equipamento para cada funcao</h3>
<p>Quando o GrowVPD Pro esta acima dos ecossistemas, voce pode escolher a melhor ferramenta para cada papel:</p>
<ul>
    <li>Melhores controladores climaticos (AC Infinity Controller 69/89 Pro, Vivosun GrowHub)</li>
    <li>Melhores luzes LED (Mars Hydro, Spider Farmer, Vivosun, SANlight)</li>
    <li>Sensores precisos de zona radicular (Bluelab Pulse via Edenic)</li>
    <li>Interruptores neutros baratos e confiaveis para dispositivos simples (tomadas inteligentes Tuya)</li>
    <li>Cameras que se encaixam no seu setup (Tuya, cameras IP ONVIF/RTSP)</li>
</ul>
<p>Combine por preco, desempenho e disponibilidade &mdash; nao por aprisionamento de ecossistema.</p>

<h3>Um painel para tudo</h3>
<p>Em vez de alternar entre MarsPro, AC Infinity, Vivosun Grow, Edenic e o que mais voce tenha, tudo esta em um so lugar. Um grafico VPD, uma lista de regras de automacao, um rastreador de energia, um diario. Cada dispositivo de cada marca vive na aba Automacao sob a sala e tenda a que pertence.</p>

<h3>Rastreamento unificado de energia</h3>
<p>O GrowVPD Pro rastreia o consumo de energia em todas as plataformas conectadas. Voce pode ver o kWh diario total da sua tenda dividido por dispositivo, independentemente de cada dispositivo ser AC Infinity, Mars Hydro, Vivosun, Spider Farmer, SANlight ou Tuya.</p>

<h2>Configurando automacao cross-brand</h2>
<ol>
    <li><strong>Conecte todas as contas de plataforma</strong> em Configuracoes &gt; Contas conectadas. AC Infinity, Mars Hydro, Spider Farmer, Vivosun, Bluelab e Tuya podem ser conectados lado a lado.</li>
    <li><strong>Descubra dispositivos</strong> de cada plataforma na aba Automacao. Cada marca aparece em uma lista unica de descoberta.</li>
    <li><strong>Organize em salas e tendas.</strong> Uma tenda pode combinar dispositivos de varias plataformas.</li>
    <li><strong>Crie regras de automacao.</strong> Ao criar uma regra, o dropdown de sensor mostra todos os sensores de todas as marcas, e o dropdown de alvo mostra todos os dispositivos controlaveis.</li>
    <li><strong>O motor de automacao cuida do resto.</strong> A cada 15 minutos, consulta sensores (via AutomationWorker), avalia regras e envia comandos para a API da plataforma correta de cada dispositivo alvo.</li>
</ol>

<div class="warning-box">
    <strong>Nota:</strong> Automacao cross-brand requer assinatura Pro. Todas as conexoes de plataforma e regras de automacao sao funcoes Pro. A versao gratuita exibe dados de dispositivos em modo demo com dados de exemplo.
</div>
`
  },

  "automation-troubleshooting": {
    title: "Guia de solucao de problemas de automacao inteligente",
    body: `
<h2>Problema 1: Dispositivo mostra "Offline"</h2>
<p>Este e o problema mais comum. O dispositivo aparece no GrowVPD Pro mas exibe uma marca cinza "Offline" e nao responde a comandos.</p>

<h3>Solucao passo a passo</h3>
<ol>
    <li><strong>Verifique a alimentacao fisica.</strong> O dispositivo esta plugado e com energia? O LED esta aceso? Parece obvio, mas reguas de energia sao desligadas e disjuntores caem.</li>
    <li><strong>Verifique a conexao WiFi.</strong> Abra o app nativo do dispositivo (Tuya, AC Infinity, Mars Hydro) e veja se aparece como online. Se estiver offline tambem no seu proprio app, o problema e entre o dispositivo e seu roteador WiFi, nao no GrowVPD Pro.</li>
    <li><strong>Reinicie o dispositivo.</strong> Desconecte, espere 10 segundos, reconecte. Muitos dispositivos WiFi precisam de 30&ndash;60 segundos apos ligar para se reconectar a nuvem.</li>
    <li><strong>Verifique seu roteador.</strong> Alguns roteadores tem limites de dispositivos ou desconectam dispositivos inativos. Certifique-se de que seu roteador suporta o numero de dispositivos conectados. Salas de cultivo com 5&ndash;10 dispositivos inteligentes podem pressionar roteadores domesticos em seus limites.</li>
    <li><strong>Verifique a banda WiFi.</strong> A maioria dos dispositivos inteligentes de cultivo suporta apenas WiFi 2,4 GHz, nao 5 GHz. Se seu roteador combina ambas as bandas sob um unico SSID, o dispositivo pode ter se conectado a 5 GHz durante a configuracao, mas nao consegue manter. Se possivel, force o dispositivo para 2,4 GHz.</li>
    <li><strong>Re-pareie se necessario.</strong> Se o dispositivo permanece offline no app nativo apos tudo acima, remova-o do app nativo e emparelhe novamente. Depois, redescubra-o no GrowVPD Pro.</li>
</ol>

<h2>Problema 2: Regra de automacao nao dispara</h2>
<p>A regra esta ativada, o sensor mostra dados, mas o dispositivo alvo nunca liga ou muda de estado.</p>

<h3>Solucao passo a passo</h3>
<ol>
    <li><strong>Verifique a leitura do sensor.</strong> Abra o painel da tenda e confirme que o sensor reporta dados atuais. Se o timestamp da ultima leitura esta desatualizado (mais de 30 minutos), o sensor pode estar offline ou o token pode ter expirado.</li>
    <li><strong>Confirme que a condicao esta realmente sendo atendida.</strong> Para uma regra de VPD, verifique o valor VPD atual contra o limiar da regra. Lembre-se de que o GrowVPD Pro calcula o VPD a partir da temperatura da folha (estimada da temperatura do ar), entao o VPD exibido pode diferir ligeiramente do esperado.</li>
    <li><strong>Verifique a programacao de horario da regra.</strong> Se voce definiu janelas de horario ativo (ex: apenas entre 8:00 e 20:00), a regra nao disparara fora dessas horas.</li>
    <li><strong>Verifique o tempo minimo desligado.</strong> Se voce definiu <code>minOffMinutes</code> para 10 e a regra foi restaurada (desligada) ha menos de 10 minutos, ela nao reativara ate o cooldown expirar. Isso evita danos ao compressor em desumidificadores e ar-condicionados.</li>
    <li><strong>Verifique o dispositivo alvo.</strong> O dispositivo alvo esta online? Voce consegue alterna-lo manualmente pela aba Automacao? Se o controle manual funciona mas a regra nao dispara, o problema esta na configuracao da regra, nao na conexao do dispositivo.</li>
    <li><strong>Verifique regras conflitantes.</strong> Se duas regras miram o mesmo dispositivo com acoes opostas, a regra com prioridade mais alta vence. Uma regra "desligar" com prioridade 10 sobrepoe uma regra "ligar" com prioridade 5.</li>
</ol>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro registra cada acao de automacao com timestamp e motivo. Verifique o historico de acoes do dispositivo para ver se a regra disparou no passado e o que causou sua restauracao. Esse log e inestimavel para debugging.
</blockquote>

<h2>Problema 3: Leitura do sensor parece incorreta</h2>
<p>O sensor reporta temperatura ou umidade que nao correspondem ao seu medidor manual ou ao que voce sente ao entrar na tenda.</p>

<h3>Causas comuns</h3>
<ul>
    <li><strong>Posicionamento do sensor.</strong> Um sensor colocado alto na parede da tenda perto da exaustao medira diferente de um na altura da copa. Sempre posicione sensores na altura da copa da planta, longe de paredes, luzes e ventiladores.</li>
    <li><strong>Deriva do sensor.</strong> Sensores WiFi baratos (especialmente da marca Tuya) podem derivar 1&ndash;3&deg;C e 3&ndash;8% RH com o tempo. Pelo preco, isso e normal.</li>
    <li><strong>Exposicao direta a luz.</strong> Se o sensor esta na luz direta da sua lampada de cultivo, o involucro absorve calor radiante e reporta temperaturas 2&ndash;5&deg;C acima da temperatura real do ar. Proteja o sensor ou mova-o para a sombra.</li>
    <li><strong>Condensacao no sensor.</strong> Alta umidade pode causar condensacao no elemento sensor, fazendo com que reporte 100% RH ate secar.</li>
</ul>

<h3>Solucao: Offsets de calibracao</h3>
<p>No GrowVPD Pro, cada sensor tem configuracoes de offset de calibracao. Compare seu sensor com um medidor de referencia verificado por 30&ndash;60 minutos no mesmo local. Depois aplique os offsets:</p>
<ul>
    <li>Se o sensor inteligente le 2&deg;C a mais, defina offset de temperatura -2,0</li>
    <li>Se o sensor inteligente le 5% RH a menos, defina offset de umidade +5,0</li>
</ul>
<p>Esses offsets sao aplicados a todas as leituras daquele sensor antes do calculo de VPD e avaliacao de automacao.</p>

<h2>Problema 4: Conexao cai repetidamente</h2>
<p>Os dispositivos conectam e funcionam por um tempo, mas depois desconectam e reconectam aleatoriamente durante o dia.</p>

<h3>Causas provaveis</h3>
<ul>
    <li><strong>Sinal WiFi fraco.</strong> Tendas de cultivo com material refletivo de mylar podem parcialmente bloquear sinais WiFi. Se o roteador esta em outra sala, o sinal dentro da tenda pode ser limiar. Use um app de medicao de sinal WiFi. Valores abaixo de -70 dBm sao nao confiaveis.</li>
    <li><strong>Roteador sobrecarregado.</strong> Cada dispositivo inteligente mantem uma conexao persistente com sua nuvem. 10+ dispositivos em um roteador domestico basico podem causar queda de conexoes sob carga.</li>
    <li><strong>Conflitos de IP.</strong> Se o pool DHCP do roteador e muito pequeno, dispositivos podem falhar ao renovar seu aluguel de IP e ficar temporariamente offline.</li>
    <li><strong>Problemas de servicos cloud.</strong> Tuya, AC Infinity e Mars Hydro todos dependem de servidores cloud. Quedas ocasionais do lado deles fazem com que todos os dispositivos daquela plataforma aparecam temporariamente offline.</li>
</ul>

<h3>Solucoes</h3>
<ul>
    <li>Mova o roteador WiFi mais perto da area de cultivo ou adicione um extensor WiFi/no mesh</li>
    <li>Atribua IPs estaticos aos seus dispositivos inteligentes via configuracao de reserva DHCP do roteador</li>
    <li>Se seu roteador suporta multiplos SSIDs, use uma rede dedicada 2,4 GHz para dispositivos IoT</li>
    <li>Faca upgrade para um sistema WiFi mesh se tiver mais de 15 dispositivos inteligentes</li>
</ul>

<h2>Problema 5: Token expirado / Autenticacao falhou</h2>
<p>O GrowVPD Pro exibe um erro de autenticacao para uma plataforma e todos os dispositivos daquela plataforma param de responder.</p>

<h3>Por plataforma</h3>

<h3>Tuya</h3>
<p>Tokens Tuya expiram a cada 2 horas, mas sao renovados automaticamente. Se a renovacao falhar (geralmente por problemas de rede durante a janela de renovacao), voce precisara:</p>
<ol>
    <li>Ir a Configuracoes &gt; Contas conectadas &gt; Tuya</li>
    <li>Tocar em Desconectar e reinserir seu Access ID e Access Secret</li>
    <li>Verificar que a regiao corresponde ao data center da sua Tuya IoT Platform</li>
</ol>

<h3>AC Infinity</h3>
<p>Tokens AC Infinity tem longa duracao, mas podem ser invalidados se voce mudar a senha ou fizer login de muitos dispositivos. Reautentique com email e senha nas Configuracoes.</p>

<h3>Mars Hydro / Spider Farmer</h3>
<p>Essas plataformas usam conexoes MQTT que podem cair se o app for forcadamente encerrado ou o celular reiniciar. Abra o GrowVPD Pro e deixe-o restabelecer automaticamente a conexao MQTT. Se falhar, reautentique nas Configuracoes.</p>

<div class="warning-box">
    <strong>Importante:</strong> Nunca compartilhe suas credenciais de plataforma (Access ID, Access Secret, chaves de API) publicamente ou com terceiros. O GrowVPD Pro armazena credenciais localmente no seu dispositivo e as transmite apenas para as APIs oficiais das plataformas.
</div>

<h2>Problema 6: Automacao roda mas nao tem efeito</h2>
<p>O log de acoes mostra que a regra disparou e o comando foi enviado, mas o dispositivo fisico nao mudou de estado.</p>
<ul>
    <li><strong>Atualizacao de firmware necessaria.</strong> Alguns dispositivos param de responder a comandos cloud apos uma atualizacao de firmware que mudou a API. Atualize o dispositivo pelo app nativo.</li>
    <li><strong>Override fisico ativo.</strong> Alguns dispositivos (especialmente ventiladores AC Infinity e luzes Mars Hydro) tem botoes fisicos que podem sobrepor comandos cloud. Verifique se o dispositivo nao esta em modo "manual".</li>
    <li><strong>Comando nao suportado.</strong> Se a regra tenta definir um ventilador na velocidade 10 mas o dispositivo suporta apenas velocidades 1&ndash;8, o comando pode ser silenciosamente rejeitado. Verifique se o valor do comando esta na faixa suportada pelo dispositivo.</li>
</ul>

<h2>Ainda travado?</h2>
<p>Se nenhuma das solucoes acima resolver seu problema:</p>
<ol>
    <li>Tire um screenshot da aba Automacao mostrando a regra problematica e o status do dispositivo</li>
    <li>Anote a mensagem de erro exata (se houver)</li>
    <li>Verifique a comunidade Discord &mdash; alguem provavelmente encontrou o mesmo problema</li>
    <li>Entre em contato com o suporte via Configuracoes &gt; Suporte com descricao e screenshots</li>
</ol>
`
  },

  "energy-monitoring": {
    title: "Monitoramento de energia e rastreamento de custos para seu cultivo",
    body: `
<h2>Por que rastrear energia?</h2>
<p>A eletricidade e o maior custo continuo do cultivo indoor. Uma unica tenda de 120x120 cm com LED de 480W, ventilador in-line, clip fans, umidificador e desumidificador pode consumir <strong>8&ndash;15 kWh por dia</strong>, o que dependendo da tarifa de eletricidade se traduz em R$100&ndash;300 por mes. Ao longo de um ciclo de cultivo de 4 meses, os custos de energia podem superar o valor da colheita se nao forem gerenciados cuidadosamente.</p>
<p>Saber exatamente para onde sua energia vai permite tomar decisoes informadas: o desumidificador esta rodando demais? Voce poderia diminuir a luz na ultima semana? E mais barato rodar a exaustao constantemente em baixa velocidade ou ciclando liga/desliga?</p>

<h2>Como o GrowVPD Pro rastreia energia</h2>
<p>O GrowVPD Pro rastreia o consumo de energia por dois metodos:</p>

<h3>1. Relatorio de potencia das tomadas inteligentes</h3>
<p>Algumas tomadas inteligentes Tuya relatam consumo em tempo real (watts) e consumo cumulativo (kWh). Quando um dispositivo esta conectado atraves de uma dessas tomadas, o GrowVPD Pro le os dados de potencia diretamente. Este e o metodo mais preciso.</p>
<p>Procure tomadas Tuya com <strong>monitoramento de energia</strong> na descricao do produto. Nem todas as tomadas inteligentes reportam potencia &mdash; os modelos mais baratos oferecem apenas controle on/off.</p>

<h3>2. Energia estimada pela potencia nominal</h3>
<p>Para dispositivos que nao reportam potencia diretamente, o GrowVPD Pro usa a <strong>potencia nominal</strong> que voce insere nas configuracoes do dispositivo (ex: 480W para LED, 250W para desumidificador). Multiplica pelo tempo registrado ligado para estimar o consumo.</p>
<p>Para dispositivos de velocidade variavel, como ventiladores, a estimativa e menos precisa, pois a potencia real na velocidade 3 e muito menor que na velocidade 10. O app usa uma aproximacao linear baseada na velocidade definida relativa ao maximo.</p>

<blockquote>
    <strong>Dica:</strong> Para o rastreamento mais preciso, configure a potencia nominal de cada dispositivo nas configuracoes do dispositivo. Mesmo o rastreamento estimado e muito melhor que nenhum rastreamento.
</blockquote>

<h2>Entendendo seu balanco energetico</h2>
<p>O painel de energia na aba Automacao mostra consumo por dispositivo, por tenda e por sala:</p>
<ul>
    <li><strong>kWh diario:</strong> Energia total usada nas ultimas 24 horas, dividida por dispositivo</li>
    <li><strong>Tempo de funcionamento:</strong> Quantas horas cada dispositivo rodou, ajudando a identificar quais dominam sua conta de eletricidade</li>
    <li><strong>Tendencia ao longo do tempo:</strong> Veja como o consumo de energia muda conforme as plantas crescem (transpiracao aumenta, desumidificador roda mais etc.)</li>
</ul>

<h3>Divisao tipica de energia</h3>
<p>Para uma configuracao padrao de tenda, a energia normalmente se divide assim:</p>
<ul>
    <li><strong>Luz LED de cultivo:</strong> 50&ndash;65% da energia total (maior consumidor individual)</li>
    <li><strong>Desumidificador:</strong> 15&ndash;25% (roda muito durante a floracao)</li>
    <li><strong>Ventilador in-line de exaustao:</strong> 5&ndash;10%</li>
    <li><strong>Umidificador:</strong> 3&ndash;5% (principalmente durante muda/vegetativa)</li>
    <li><strong>Clip fans, aquecedores, outros:</strong> 5&ndash;10%</li>
</ul>

<h2>Estimativa de custos</h2>
<p>Uma vez que voce conhece seu kWh diario, o calculo de custos e direto:</p>
<p><strong>Custo diario = kWh diario x tarifa de eletricidade (por kWh)</strong></p>
<p>Exemplo: 12 kWh/dia a R$0,90/kWh = R$10,80/dia = R$324/mes = R$1.296 para um ciclo de 4 meses.</p>
<p>O motor de analitica do GrowVPD Pro pode calcular isso automaticamente se voce inserir sua tarifa de eletricidade. Ele tambem considera os custos totais do ciclo de cultivo ao calcular metricas de eficiencia como <strong>custo por grama</strong> de colheita seca.</p>

<h2>Otimizando o consumo de energia</h2>

<h3>1. Diminua as luzes quando possivel</h3>
<p>A maioria dos drivers LED modernos suporta dimerizacao. Rodar a 75% em vez de 100% economiza 25% do seu maior consumidor de energia. Muitas cepas nao precisam de potencia maxima durante as primeiras 2 semanas de floracao (fase de estiramento) ou na floracao tardia, quando a planta esta maturando em vez de fazendo fotossintese ativa.</p>

<h3>2. Dimensione corretamente o desumidificador</h3>
<p>Um desumidificador superdimensionado liga e desliga frequentemente e desperdicada energia a cada partida. Uma unidade corretamente dimensionada roda mais tempo em menor intensidade, o que e mais eficiente.</p>

<h3>3. Use ventiladores de velocidade variavel</h3>
<p>Rodar um ventilador in-line na velocidade 4 em vez de velocidade 10 pode reduzir seu consumo em 60&ndash;70%. Ventiladores AC Infinity com controladores integrados ajustam automaticamente a velocidade conforme as condicoes, rodando na velocidade minima necessaria para manter seu alvo.</p>

<h3>4. Planeje para horarios fora de pico</h3>
<p>Se seu fornecedor de eletricidade cobra tarifas diferentes em horarios diferentes (tarifa branca/horosazonais), agende o periodo de luzes ligadas para horarios fora de pico. Em muitas regioes, a eletricidade e mais barata entre 23:00 e 7:00. Rodar um cronograma de floracao 12/12 de meia-noite ao meio-dia em vez de 6:00 as 18:00 pode economizar 20&ndash;40% na eletricidade.</p>

<blockquote>
    <strong>Dica:</strong> A funcao de cronograma de luz do GrowVPD Pro permite definir horarios exatos de ligar/desligar para cada tenda. Combine com tarifas horazonais para maxima economia.
</blockquote>

<h3>5. Melhore o isolamento da tenda</h3>
<p>Se sua tenda esta em uma garagem ou porao frio, o aquecedor roda constantemente para manter a temperatura. Isolar o piso (tapetes de espuma), vedar vazamentos de ar e usar uma cobertura de tenda melhor isolada reduz significativamente os custos de aquecimento.</p>

<h2>Comparando cultivos por eficiencia energetica</h2>
<p>A metrica final de energia e <strong>gramas por kWh</strong> &mdash; quanto de flor seca voce produz para cada quilowatt-hora consumido. O GrowVPD Pro calcula isso automaticamente quando voce registra dados da colheita.</p>
<p>Faixas tipicas:</p>
<ul>
    <li><strong>Setup iniciante:</strong> 0,5&ndash;0,8 g/kWh</li>
    <li><strong>Setup otimizado:</strong> 1,0&ndash;1,5 g/kWh</li>
    <li><strong>Avancado/comercial:</strong> 1,5&ndash;2,5 g/kWh</li>
</ul>
<p>Rastrear essa metrica ao longo de varios cultivos mostra se sua eficiencia esta melhorando e quais mudancas tiveram maior impacto.</p>
`
  },

  "harvest-tracking": {
    title: "Rastreamento de colheita: Peso fresco, peso seco e eficiencia",
    body: `
<h2>Por que registrar dados da colheita?</h2>
<p>A colheita e o culminar de semanas ou meses de trabalho. Sem registrar os resultados, voce nao tem como comparar cultivos objetivamente, medir o impacto das mudancas que fez ou descobrir o que funciona melhor para sua configuracao. "Esse cultivo pareceu melhor que o anterior" nao sao dados. <strong>487g secos de 4 plantas sob 480W em 63 dias de floracao</strong> &mdash; esses sao dados dos quais voce pode aprender.</p>

<h2>Registrando a colheita no GrowVPD Pro</h2>
<p>Quando estiver pronto para colher, mude a fase no registro do diario para "Colheita". O app exibira campos especificos para dados de colheita:</p>

<h3>Peso fresco</h3>
<p>Pese os buds recem-cortados e aparados logo apos a colheita, antes da secagem. Isso e o peso fresco. Da uma ideia imediata do volume, mas nao e o numero final &mdash; aproximadamente 75&ndash;80% do peso fresco e agua.</p>

<h3>Peso seco</h3>
<p>Apos a secagem (geralmente 7&ndash;14 dias a 60% RH e 18&ndash;21&deg;C), pese os buds novamente. Isso e o peso seco &mdash; seu rendimento real. Esse numero e usado para todos os calculos de eficiencia.</p>

<blockquote>
    <strong>Dica:</strong> Uma proporcao saudavel de peso fresco para seco e de 4:1 a 5:1. Se seu peso seco e menos de 20% do fresco, voce pode ter secado demais ou tem buds aerados pequenos. Se e mais de 30%, os buds provavelmente nao estao completamente secos e ha risco de mofo no armazenamento.
</blockquote>

<h2>Metricas chave de eficiencia</h2>
<p>O GrowVPD Pro calcula essas metricas automaticamente quando voce insere os dados da colheita:</p>

<h3>Gramas por watt (g/W)</h3>
<p>A metrica de eficiencia de rendimento mais comum. Divida o peso seco total pela potencia da sua luz de cultivo.</p>
<p><strong>Exemplo:</strong> 450g secos / 480W LED = 0,94 g/W</p>
<ul>
    <li><strong>Abaixo de 0,5 g/W:</strong> Ha espaco para melhoria. Verifique VPD, distancia da luz, nutricao e tecnicas de treinamento.</li>
    <li><strong>0,5&ndash;1,0 g/W:</strong> Bom resultado. A maioria dos cultivadores hobby esta aqui.</li>
    <li><strong>1,0&ndash;1,5 g/W:</strong> Excelente resultado. Ambiente otimizado e genetica.</li>
    <li><strong>Acima de 1,5 g/W:</strong> Excepcional. Geralmente requer suplementacao de CO2 e controle perfeito do ambiente.</li>
</ul>

<h3>Gramas por planta (g/planta)</h3>
<p>Peso seco total dividido pelo numero de plantas. Util para comparar diferentes contagens de plantas na mesma tenda.</p>
<p><strong>Exemplo:</strong> 450g / 4 plantas = 112,5 g/planta</p>
<p>Essa metrica e fortemente influenciada pelo metodo de treinamento, tempo de vegetativa e tamanho do vaso. Uma planta cultivada por 8 semanas em vegetativa com LST intensivo pode render tanto quanto 4 plantas com 3 semanas de vegetativa.</p>

<h3>Gramas por metro quadrado (g/m2)</h3>
<p>Peso seco total dividido pela area do espaco de cultivo. Normaliza o rendimento pelo tamanho da tenda e permite comparar eficiencia entre diferentes configuracoes.</p>
<p><strong>Exemplo:</strong> 450g / 1,44 m2 (tenda 120x120 cm) = 312 g/m2</p>

<h3>Dias ate a colheita</h3>
<p>Numero total de dias da semente (ou clone) ao corte. O GrowVPD Pro calcula automaticamente da data de inicio do cultivo ate a data do registro de colheita. Compare entre cepas para descobrir quais geneticas maturam mais rapido.</p>

<h2>O que os dados dizem</h2>

<h3>Comparacao entre cultivos</h3>
<p>Apos 3&ndash;4 cultivos completos, padroes comecam a surgir. Voce pode descobrir que:</p>
<ul>
    <li>Seus rendimentos sao sempre melhores no inverno (temperatura ambiente mais baixa = melhores condicoes na floracao tardia)</li>
    <li>Uma cepa especifica supera consistentemente as outras no seu setup</li>
    <li>Mudar de 4 plantas para 2 com vegetativa mais longa produziu o mesmo rendimento com menos trabalho</li>
    <li>Seu g/W melhorou depois que voce comecou a rastrear VPD e mante-lo na faixa alvo</li>
</ul>

<h3>Identificando o impacto das mudancas</h3>
<p>Quando voce muda uma variavel entre cultivos (luz nova, substrato diferente, adicao de CO2), os dados da colheita mostram se a mudanca ajudou. Isso so funciona quando voce registra tudo o mais &mdash; por isso registros consistentes no diario ao longo de todo o cultivo sao essenciais.</p>

<blockquote>
    <strong>Dica:</strong> Use a funcao de comparacao de cultivos no GrowVPD Pro e coloque dois cultivos lado a lado. O app mostra as diferencas em medias de VPD, niveis de PPFD, nutricao e metricas de colheita em uma tela, facilitando a identificacao do que mudou.
</blockquote>

<h2>Dicas de secagem que protegem seu rendimento</h2>
<p>A secagem e parte da colheita e estraga-la pode destruir um cultivo excelente:</p>
<ul>
    <li><strong>Temperatura:</strong> 18&ndash;21&deg;C (64&ndash;70&deg;F). Temperaturas mais baixas preservam terpenos.</li>
    <li><strong>Umidade:</strong> 55&ndash;65% RH. Muito seco (abaixo de 50%) faz os buds secarem rapido demais, prendendo clorofila e deixando a fumaca aspera. Muito umido (acima de 70%) arrisca mofo.</li>
    <li><strong>Circulacao de ar:</strong> Suave, indireta. Nao aponte ventiladores diretamente nos buds. Voce quer circulacao na sala, nao um tunel de vento.</li>
    <li><strong>Duracao:</strong> 7&ndash;14 dias. Os buds estao prontos quando os pequenos galhos se quebram em vez de dobrar e a superficie esta seca, mas o bud ainda cede levemente ao apertar.</li>
    <li><strong>Escuridao:</strong> Seque em uma sala escura. Luz degrada THC e terpenos.</li>
</ul>

<div class="warning-box">
    <strong>Nao apresse a secagem.</strong> Secagem rapida em 3&ndash;4 dias (aumentando temperatura ou diminuindo umidade) destroi terpenos e produz flores asperas com gosto de grama. A qualidade nasce na secagem lenta.
</div>

<h2>Registro no app</h2>
<ol>
    <li>No dia da colheita, crie uma nova entrada no diario e defina a fase como "Colheita"</li>
    <li>Insira o peso fresco e tire fotos da colheita fresca</li>
    <li>Apos a secagem (7&ndash;14 dias), edite o registro e adicione o peso seco</li>
    <li>Marque o cultivo como concluido para que os calculos finais de analitica sejam acionados</li>
    <li>Revise o resumo da colheita com todas as metricas de eficiencia</li>
</ol>
`
  },

  "comparing-grows": {
    title: "Comparando cultivos: Aprenda com cada resultado",
    body: `
<h2>O poder da comparacao</h2>
<p>Um unico diario de cultivo diz o que aconteceu. <strong>Dois diarios lado a lado</strong> dizem o porque. Quando voce ve que o Cultivo A manteve VPD em 1,1&ndash;1,3 kPa durante toda a floracao e rendeu 0,95 g/W, enquanto o Cultivo B oscilou entre 0,7 e 1,6 kPa e rendeu 0,62 g/W, a relacao entre consistencia de VPD e rendimento se torna inegavel.</p>
<p>O GrowVPD Pro inclui uma tela dedicada de comparacao que posiciona dois cultivos concluidos (ou ativos) lado a lado e destaca diferencas em ambiente, nutricao, tecnicas e resultados de colheita.</p>

<h2>Usando a funcao de comparacao</h2>
<ol>
    <li>Abra a aba <strong>Diario</strong></li>
    <li>Toque no icone de comparacao (dois retangulos sobrepostos) na barra superior</li>
    <li>Selecione o primeiro cultivo da lista</li>
    <li>Selecione o segundo cultivo para comparacao</li>
    <li>A tela de comparacao mostra ambos com timelines paralelas</li>
</ol>

<h2>O que comparar</h2>

<h3>Metricas de rendimento</h3>
<p>Os pontos de comparacao mais obvios: peso seco, g/W, g/planta e g/m2. Se ambos os cultivos usaram a mesma tenda e luz, diferencas no rendimento sao causadas por genetica, ambiente, nutricao ou tecnica.</p>

<h3>Consistencia do VPD</h3>
<p>Observe o VPD medio por semana em ambos os cultivos. O cultivo com VPD mais consistente (menor variacao semana a semana) quase sempre leva a melhores resultados. Grandes oscilacoes de VPD estressam as plantas e reduzem a eficiencia fotossintetica.</p>
<p>O GrowVPD Pro exibe uma curva de tendencia de VPD para cada cultivo, facilitando a identificacao de semanas onde o ambiente saiu de controle.</p>

<h3>Velocidade de crescimento</h3>
<p>Compare a timeline da semente/clone a colheita. Um cultivo terminou mais rapido? Verifique o que foi diferente nas primeiras semanas &mdash; enraizamento mais rapido nas primeiras 2 semanas frequentemente leva a uma data de colheita mais cedo.</p>

<h3>Niveis de PPFD</h3>
<p>Se voce registrou PPFD nas entradas do diario, compare a intensidade luminosa entre cultivos. PPFD mais alto com VPD e CO2 corretos leva a crescimento mais rapido e rendimentos maiores, ate o ponto de saturacao de luz da planta.</p>

<h3>Programas nutricionais</h3>
<p>Compare valores de EC/PPM semana a semana. Um cultivo recebeu doses maiores? Os nutrientes foram introduzidos mais cedo ou mais tarde? Correlacione com a diferenca de rendimento para entender o apetite das suas plantas.</p>

<h3>Tecnicas de treinamento</h3>
<p>Se um cultivo usou LST e outro topping, ou um foi SOG e outro ScrOG, a comparacao revela como essas tecnicas performaram na sua configuracao especifica.</p>

<blockquote>
    <strong>Dica:</strong> Para a comparacao mais significativa, mude apenas uma variavel entre cultivos. Se voce mudar a luz, a cepa e o programa nutricional ao mesmo tempo, nao sabera qual mudanca causou a diferenca no rendimento.
</blockquote>

<h2>Aprendendo com as diferencas</h2>

<h3>Reconhecendo padroes</h3>
<p>Apos 3&ndash;5 cultivos com dados registrados, padroes que sao invisiveis em um unico cultivo surgem:</p>
<ul>
    <li><strong>Padroes sazonais:</strong> Cultivos iniciados em novembro consistentemente rendem mais que os iniciados em julho (temperaturas ambiente mais frias ajudam na floracao tardia)</li>
    <li><strong>Comportamento da cepa:</strong> A cepa A sempre matura em 8 semanas de floracao; a cepa B precisa de 10 semanas e se voce cortar em 8, o rendimento cai 20%</li>
    <li><strong>Impacto do equipamento:</strong> Upgrade de LED blurple para Samsung LM301H board aumentou o rendimento em 35% com a mesma potencia</li>
    <li><strong>Correlacao de VPD:</strong> Todo cultivo onde o VPD medio na floracao ficou entre 1,1&ndash;1,3 kPa produziu rendimentos acima da media</li>
</ul>

<h3>Metodo cientifico para cultivadores</h3>
<ol>
    <li><strong>Observe:</strong> Revise dados de cultivos anteriores e encontre a metrica mais fraca</li>
    <li><strong>Crie uma hipotese:</strong> "Se eu mantiver VPD mais alto nas semanas 4&ndash;6 de floracao, a densidade dos buds vai melhorar"</li>
    <li><strong>Teste:</strong> Rode o proximo cultivo com essa unica mudanca e mantenha todo o resto igual</li>
    <li><strong>Compare:</strong> Use a funcao de comparacao para avaliar o resultado</li>
    <li><strong>Repita:</strong> Passe para a proxima variavel</li>
</ol>

<h2>Usando templates para padronizacao</h2>
<p>O sistema de templates do GrowVPD Pro permite salvar um cultivo bem-sucedido como template. No proximo cultivo, carregue o template e pre-preencha cepa, substrato, tamanho do vaso, programa nutricional e alvos de VPD. Isso padroniza sua linha de base e torna as comparacoes mais significativas.</p>
<p>Quando um cultivo baseado em template supera os valores de referencia do template, atualize o template. Ao longo do tempo, seus templates evoluem em receitas otimizadas para cada cepa na sua configuracao.</p>

<blockquote>
    <strong>Dica:</strong> Nomeie seus cultivos descritivamente. Em vez de "Cultivo 7", use "Northern Lights Auto - 120x120 - Coco - 480W - fevereiro 2026". Assim a lista de comparacao fica imediatamente informativa sem precisar abrir cada cultivo.
</blockquote>
`
  },

  "photo-documentation": {
    title: "Documentacao fotografica: Guia visual para o diario de cultivo",
    body: `
<h2>Por que fotos importam</h2>
<p>Numeros contam parte da historia. Fotos contam o resto. Uma entrada no diario "plantas parecem saudaveis, leve amarelamento nas folhas inferiores" e util. Uma foto dessas mesmas folhas inferiores e dez vezes mais util &mdash; voce pode dar zoom, comparar com guias de doencas e compartilhar com outros para diagnostico.</p>
<p>Ao longo de todo o ciclo de cultivo, fotos regulares criam uma timeline visual que mostra velocidade de crescimento, desenvolvimento da copa, progressao de deficiencias e a transformacao da muda a colheita. Esse registro visual e insubstituivel tanto para aprendizado quanto para comparacao de cultivos.</p>

<h2>Quando fotografar</h2>

<h3>Momentos que voce deve capturar</h3>
<ul>
    <li><strong>Dia 1:</strong> Sementes plantadas ou clones transplantados. Documente o ponto de partida.</li>
    <li><strong>Primeiras folhas verdadeiras / raizes visiveis:</strong> Marca a transicao da germinacao para o crescimento.</li>
    <li><strong>Inicio de cada semana:</strong> Foto consistente do mesmo angulo forma a espinha dorsal da sua timeline.</li>
    <li><strong>Qualquer problema:</strong> Amarelamento, manchas, enrolamento, pragas, murchamento &mdash; fotografe imediatamente para diagnostico.</li>
    <li><strong>Eventos de treinamento:</strong> Antes e depois de topping, LST, desfolhacao, lollipopping. Mostra a reacao da planta.</li>
    <li><strong>Mudanca para floracao:</strong> O dia da mudanca para 12/12. Compare com as semanas seguintes para acompanhar o estiramento.</li>
    <li><strong>Semanalmente durante a floracao:</strong> Desenvolvimento dos buds, macro close-ups de tricomas, formacao das colas.</li>
    <li><strong>Dia da colheita:</strong> Planta inteira antes do corte, colas individuais, colheita fresca inteira disposta.</li>
    <li><strong>Apos a secagem:</strong> Produto final nos potes. Esta e sua foto de resultado.</li>
</ul>

<h3>Snapshots automaticos de camera</h3>
<p>Se voce usa uma camera Tuya ou Tapo conectada pelo GrowVPD Pro, o app pode capturar snapshots diarios automaticos e salva-los no diario de cultivo. Isso fornece uma timeline perfeitamente consistente sem nenhum esforco manual. A funcao timelapse monta esses snapshots em um video mostrando o cultivo inteiro em poucos segundos.</p>

<h2>Dicas de camera para salas de cultivo</h2>

<h3>Desligue a luz de cultivo e o flash</h3>
<p>Esta e absolutamente a dica mais importante para fotografar cultivos. Luzes LED modernas produzem luz roxa, vermelha ou branca de espectro completo intensa que sobrecarrega as cameras de celular. O resultado sao fotos com tom roxo onde voce nao consegue distinguir corretamente a cor das folhas.</p>
<p>Solucao:</p>
<ul>
    <li><strong>Desligue a luz de cultivo</strong> e use iluminacao branca neutra (luz ambiente comum ou lanterna do celular) para fotografar. Isso garante representacao fiel das cores.</li>
    <li><strong>Use uma lanterna LED verde</strong> durante o periodo escuro. Luz verde nao interrompe o fotoperiodo e fornece iluminacao suficiente para fotos.</li>
    <li><strong>Evite o flash da camera.</strong> O flash cria sombras duras e estouros que escondem detalhes. Use iluminacao ambiente.</li>
</ul>

<h3>Angulos consistentes</h3>
<p>Para comparacoes semanais significativas, tire sua foto principal semanal sempre da mesma posicao:</p>
<ul>
    <li>Marque um ponto no chao onde voce fica (fita ou pequeno adesivo)</li>
    <li>Segure o celular na mesma altura (altura do peito funciona bem para vistas de cima da copa)</li>
    <li>Inclua o mesmo ponto de referencia em cada foto (barra da tenda, sensor, regua fixada na parede)</li>
</ul>

<h3>Tecnica de close-up</h3>
<p>Para diagnosticar problemas ou verificar tricomas:</p>
<ul>
    <li>Use o modo macro do celular se disponivel, ou invista em uma lente macro clip barata ($10&ndash;$20)</li>
    <li>Apoie o celular na estrutura da tenda ou use um mini tripe para evitar borroes</li>
    <li>Foque na area afetada e tire varias fotos &mdash; macro tem profundidade de campo rasa</li>
</ul>

<blockquote>
    <strong>Dica:</strong> O GrowVPD Pro suporta multiplas fotos por entrada no diario. Anexe um instantaneo da copa inteira mais detalhes de problemas em um unico registro. Tudo fica organizado por data e semana.
</blockquote>

<h2>Funcao timelapse</h2>
<p>Apos concluir um cultivo (ou a qualquer momento durante), o GrowVPD Pro pode gerar um video timelapse de todas as fotos no diario. Cada foto se torna um quadro, criando uma animacao suave que mostra o ciclo de cultivo inteiro em poucos segundos.</p>
<p>Para melhores resultados de timelapse:</p>
<ul>
    <li>Tire fotos de um angulo consistente (camera automatica e ideal para isso)</li>
    <li>Fotografe no mesmo horario do dia (mesmas condicoes de iluminacao)</li>
    <li>Inclua fotos de cada semana &mdash; lacunas na timeline criam pulos no video</li>
</ul>

<h2>Modo de privacidade</h2>
<p>O GrowVPD Pro entende que nem todos querem ter fotos de cultivo visiveis na galeria do celular. A funcao <strong>Privacidade de Fotos</strong> (Pro) oculta fotos de cultivo da galeria do sistema e do scanner de midia. As fotos sao armazenadas no diretorio privado do app e sao visiveis apenas dentro do GrowVPD Pro.</p>
<p>Combinado com bloqueio PIN e icone mascarado do app (modo Stealth), sua documentacao de cultivo permanece completamente privada.</p>

<div class="warning-box">
    <strong>Lembrete de backup:</strong> Fotos armazenadas no modo privado nao sao salvas pelo Google Photos nem iCloud. Use a funcao de exportacao do GrowVPD Pro para criar backups, ou copie manualmente as fotos para armazenamento seguro periodicamente.
</div>
`
  },

  "nutrient-deficiency-guide": {
    title: "Guia de deficiencias nutricionais: Diagnostico visual",
    body: `
<h2>Antes de diagnosticar: verifique o basico</h2>
<p>Antes de assumir uma deficiencia nutricional, descarte os dois culpados mais comuns que imitam sintomas de deficiencia:</p>
<ul>
    <li><strong>Desequilibrio de pH:</strong> Se o pH na zona radicular esta fora da faixa 5,8&ndash;6,5 (hidro/coco) ou 6,0&ndash;7,0 (solo), os nutrientes ficam indisponiveis mesmo presentes na solucao. Uma "deficiencia" de calcio a pH 5,0 e na verdade um bloqueio por pH. Corrija o pH primeiro.</li>
    <li><strong>Excesso de rega:</strong> Raizes inundadas nao conseguem absorver nutrientes. Plantas caidas com amarelamento das folhas frequentemente precisam apenas secar, nao de mais fertilizante.</li>
</ul>

<blockquote>
    <strong>Dica:</strong> O Guia de Doencas e Pragas do GrowVPD Pro inclui uma ferramenta de diagnostico visual com imagens de referencia para todas as deficiencias comuns. Use-o junto com este artigo para a identificacao mais precisa.
</blockquote>

<h2>Nutrientes moveis vs. imoveis</h2>
<p>Entender a mobilidade dos nutrientes diz onde os sintomas aparecerao:</p>
<ul>
    <li><strong>Nutrientes moveis</strong> (N, P, K, Mg) podem ser redistribuidos das folhas velhas para o novo crescimento. Sintomas de deficiencia aparecem <strong>primeiro nas folhas inferiores/mais velhas</strong>, porque a planta puxa nutrientes delas para alimentar o novo crescimento.</li>
    <li><strong>Nutrientes imoveis</strong> (Ca, Fe, Mn, Zn, S, B, Cu) nao se movem uma vez depositados. Sintomas de deficiencia aparecem <strong>primeiro nas folhas superiores/mais novas</strong>, porque o novo crescimento nao consegue obter o que precisa.</li>
</ul>

<h2>Nitrogenio (N) &mdash; Movel</h2>
<h3>Sintomas</h3>
<ul>
    <li>Amarelamento uniforme das <strong>folhas inferiores/mais velhas</strong>, comecando das pontas e progredindo para dentro</li>
    <li>Folhas eventualmente ficam totalmente amarelas, depois brancas, depois morrem e caem</li>
    <li>Progride de baixo para cima na planta</li>
    <li>Planta geralmente verde-claro no geral, crescimento desacelera</li>
</ul>
<h3>Causas comuns</h3>
<ul>
    <li>Nitrogenio insuficiente na solucao nutritiva, especialmente durante o pico de crescimento vegetativo</li>
    <li>Substrato muito lavado (escoamento excessivo lixivia nitrogenio)</li>
    <li>Esgotamento natural de nitrogenio em solo organico apos 4&ndash;6 semanas</li>
</ul>
<h3>Solucao</h3>
<p>Aumente o nitrogenio na alimentacao. Para correcao imediata, use fertilizante liquido com maior teor de nitrogenio (emulsao de peixe, nitrato de calcio ou nutrientes da fase vegetativa). As folhas inferiores afetadas nao se recuperarao, mas o novo crescimento deve ficar verde em 5&ndash;7 dias.</p>

<h2>Fosforo (P) &mdash; Movel</h2>
<h3>Sintomas</h3>
<ul>
    <li><strong>Caules roxos ou avermelhados</strong> e peciolos (hastes das folhas)</li>
    <li>Folhas verde-escuras que adquirem tons azulados ou roxos</li>
    <li>Folhas mais velhas podem desenvolver manchas marrons escuras ou bronzeadas</li>
    <li>Crescimento geral lento, desenvolvimento radicular atrasado</li>
    <li>Na floracao: buds pequenos e ralos que se desenvolvem lentamente</li>
</ul>
<h3>Causas comuns</h3>
<ul>
    <li>Temperatura fria na zona radicular (abaixo de 18&deg;C) reduz a absorcao de fosforo</li>
    <li>pH muito alto (acima de 7,0) bloqueia fosforo</li>
    <li>Fosforo insuficiente na alimentacao durante floracao, quando a demanda atinge o pico</li>
</ul>
<h3>Solucao</h3>
<p>Primeiro verifique a temperatura da zona radicular. Se estiver fria, adicione um tapete termico. Se o pH esta correto e a temperatura esta boa, aumente o fosforo. Nutrientes da fase de floracao tipicamente tem fosforo elevado. Farinha de osso e uma alternativa organica de liberacao lenta.</p>

<div class="warning-box">
    <strong>Nota:</strong> Algumas cepas produzem caules roxos naturalmente independentemente do nivel de fosforo. Se apenas os caules sao roxos mas as folhas sao verdes saudaveis, pode ser genetica, nao deficiencia.
</div>

<h2>Potassio (K) &mdash; Movel</h2>
<h3>Sintomas</h3>
<ul>
    <li><strong>Bordas marrons e crocantes</strong> nas folhas velhas/inferiores (queimadura das bordas)</li>
    <li>Bordas podem se enrolar para cima antes de ficarem marrons</li>
    <li>Amarelamento entre as nervuras das folhas velhas, com nervuras permanecendo inicialmente verdes</li>
    <li>Caules fracos, plantas propensas a quebrar</li>
    <li>Na floracao: buds leves e soltos</li>
</ul>
<h3>Solucao</h3>
<p>Adicione alimentacao rica em potassio (silicato de potassio, extrato de alga marinha ou boosters de floracao com K elevado). Verifique se calcio e magnesio nao estao muito altos. Reduza o EC geral se estiver acima de 2,0 mS/cm e reequilibre a proporcao de nutrientes.</p>

<h2>Calcio (Ca) &mdash; Imovel</h2>
<h3>Sintomas</h3>
<ul>
    <li><strong>Manchas marrons</strong> nas folhas mais novas/superiores, frequentemente de formato irregular</li>
    <li>Pontas de folhas novas podem se enrolar e morrer</li>
    <li>Bordas das folhas ficam irregulares e enrugadas</li>
    <li>Em casos graves, novo crescimento e deformado e raquitico</li>
    <li>Caules fracos e ocos</li>
</ul>
<h3>Solucao</h3>
<p>Adicione suplemento cal-mag. Se usa agua de osmose reversa, sempre adicione cal-mag a 0,3&ndash;0,5 EC antes de adicionar os nutrientes base. Garanta que o pH esta acima de 6,0. Se a umidade esta muito alta (acima de 80%), aumente a circulacao de ar para promover transpiracao.</p>

<h2>Magnesio (Mg) &mdash; Movel</h2>
<h3>Sintomas</h3>
<ul>
    <li><strong>Clorose internerval nas folhas velhas/inferiores</strong>: o tecido entre as nervuras amarela enquanto as proprias nervuras permanecem verdes, criando um padrao listrado caracteristico</li>
    <li>Folhas afetadas podem eventualmente desenvolver manchas ferrugem</li>
    <li>Folhas se enrolam para cima e bordas podem ficar quebradicass</li>
    <li>Progride das folhas inferiores para as superiores</li>
</ul>
<h3>Solucao</h3>
<p>Sal de Epsom (sulfato de magnesio) e a correcao mais rapida: 1&ndash;2 g/L na alimentacao ou como pulverizacao foliar. Produtos cal-mag tambem contem magnesio. Garanta que o pH esta na faixa. A resposta e visivel em 7&ndash;10 dias no novo crescimento; folhas afetadas raramente se recuperam completamente.</p>

<h2>Ferro (Fe) &mdash; Imovel</h2>
<h3>Sintomas</h3>
<ul>
    <li><strong>Clorose internerval nas folhas novas/superiores</strong> (similar ao magnesio, mas no crescimento NOVO, nao no velho)</li>
    <li>Novas folhas aparecem amarelo-palido ou quase brancas, com nervuras verdes</li>
    <li>Em casos graves, folhas novas inteiras ficam amarelas/brancas</li>
</ul>
<h3>Solucao</h3>
<p>Reduza o pH para a faixa correta. Ferro e extremamente sensivel ao pH. Se o pH esta correto, aplique ferro quelado (Fe-EDDHA ou Fe-DTPA) como suplemento na alimentacao. Aplicacao foliar de quelato de ferro pode fornecer alivio mais rapido enquanto a alimentacao radicular normaliza.</p>

<h2>Procedimento de diagnostico</h2>
<ol>
    <li><strong>Onde estao os sintomas?</strong> Folhas inferiores/velhas = nutriente movel (N, P, K, Mg). Folhas superiores/novas = nutriente imovel (Ca, Fe, Zn, Mn).</li>
    <li><strong>Qual tipo de sintoma?</strong> Amarelamento uniforme = nitrogenio. Bordas marrons = potassio. Internerval = magnesio (velho) ou ferro (novo). Manchas = calcio ou manganes. Caules roxos = fosforo.</li>
    <li><strong>Verifique o pH primeiro.</strong> 80% das deficiencias aparentes sao bloqueio por pH.</li>
    <li><strong>Verifique EC/PPM.</strong> Muito baixo = subalimentacao. Muito alto = queimadura ou bloqueio por excesso.</li>
    <li><strong>Tire fotos.</strong> Use o guia de doencas no GrowVPD Pro para comparar com imagens de referencia.</li>
</ol>

<blockquote>
    <strong>Dica:</strong> O diagnostico de doencas por IA do GrowVPD Pro (funcao Pro) pode analisar fotos de folhas afetadas e sugerir a deficiencia ou doenca mais provavel, incluindo acoes corretivas recomendadas.
</blockquote>
`
  },

  "substrate-mixing": {
    title: "Mistura de substratos: Crie seu proprio meio de cultivo",
    body: `
<h2>Por que o substrato importa</h2>
<p>O substrato e onde sua planta vive. Ele determina retencao de agua, drenagem, aeracao, disponibilidade de nutrientes e saude das raizes. O melhor controle ambiental do mundo nao consegue compensar uma zona radicular encharcada, compactada ou esgotada de nutrientes. Escolher e misturar o substrato correto e uma das decisoes mais fundamentais que voce faz antes mesmo do cultivo comecar.</p>

<h2>Tipos de substrato</h2>

<h3>Solo (mistura de cultivo)</h3>
<p>O solo e o meio mais tolerante para iniciantes. Uma boa mistura de cultivo contem materia organica que amortece o pH e libera nutrientes lentamente, reduzindo a necessidade de alimentacao precisa nas primeiras semanas.</p>
<ul>
    <li><strong>Vantagens:</strong> tolerante, amortece pH, contem alguns nutrientes, ecossistema microbiano natural</li>
    <li><strong>Desvantagens:</strong> mais pesado, drenagem mais lenta, controle mais dificil da zona radicular, materia organica pode abrigar pragas</li>
    <li><strong>Melhor para:</strong> iniciantes, cultivadores organicos, cultivo descomplicado</li>
    <li><strong>Faixa de pH:</strong> 6,0&ndash;7,0</li>
</ul>

<h3>Fibra de coco</h3>
<p>A fibra de coco e feita de cascas de coco e fornece excelente equilibrio entre retencao de agua e aeracao. E inerte (nao contem nutrientes), dando controle total sobre a alimentacao. E o substrato mais popular entre cultivadores experientes.</p>
<ul>
    <li><strong>Vantagens:</strong> excelente retencao de agua + drenagem, reutilizavel, leve, pH estavel, crescimento rapido de raizes</li>
    <li><strong>Desvantagens:</strong> requer nutrientes desde o dia um, precisa de suplemento cal-mag (coco naturalmente liga calcio), requer rega frequente</li>
    <li><strong>Melhor para:</strong> cultivadores intermediarios a avancados, quem quer maximo controle</li>
    <li><strong>Faixa de pH:</strong> 5,8&ndash;6,2</li>
</ul>

<h3>Perlita</h3>
<p>Vidro vulcanico expandido em granulos leves brancos. Perlita fornece excelente drenagem e aeracao, mas retem quase nenhuma agua. Raramente usada sozinha &mdash; e misturada com solo ou coco para melhorar a drenagem e evitar compactacao.</p>

<h3>Vermiculita</h3>
<p>Mineral de mica expandido que retem 3&ndash;4 vezes seu peso em agua. Usada para aumentar a retencao de agua em misturas que drenam rapido demais. Util em misturas para mudas ou climas secos.</p>

<h3>Bolinhas de argila (LECA / Hydroton)</h3>
<p>Bolinhas de argila expandida leve. Fornecem aeracao e drenagem com retencao minima de agua. Usadas em sistemas hidroponicos (DWC, ebb-and-flow) ou como camada de drenagem no fundo dos vasos.</p>

<h2>Misturas populares</h2>

<div class="step-card">
    <span class="step-number">1</span>
    <h3>Coco/Perlita padrao (70/30)</h3>
    <p>A mistura mais popular entre cultivadores indoor. 70% fibra de coco + 30% perlita. Fornece excelente retencao de agua para rega diaria enquanto previne encharcamento. Adequada para todas as fases de crescimento.</p>
    <ul>
        <li>Retencao de agua: alta</li>
        <li>Drenagem: muito boa</li>
        <li>Frequencia de rega: 1&ndash;2 vezes por dia na floracao</li>
        <li>Melhor para: rega manual ou sistemas de gotejamento</li>
    </ul>
</div>

<div class="step-card">
    <span class="step-number">2</span>
    <h3>Coco/Perlita alta frequencia (50/50)</h3>
    <p>50% coco + 50% perlita. Drena mais rapido e retem menos agua, exigindo rega mais frequente. Popular com sistemas automaticos de gotejamento onde o cultivador quer alimentar 3&ndash;5 vezes por dia para maxima velocidade de crescimento.</p>
    <ul>
        <li>Retencao de agua: media</li>
        <li>Drenagem: excelente</li>
        <li>Frequencia de rega: 3&ndash;5 vezes por dia</li>
        <li>Melhor para: sistemas automaticos de gotejamento, cultivadores experientes</li>
    </ul>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Solo vivo (super soil organico)</h3>
    <p>Mistura organica rica em nutrientes que alimenta a planta atraves da biologia do solo em vez de nutrientes engarrafados. Tipicamente: solo base (30%) + composto/humus de minhoca (30%) + aeracao (perlita/pedra-pomes 20%) + aditivos (farinha de osso, alga moida, guano de morcego, calcario dolomitico 20%).</p>
    <ul>
        <li>Retencao de agua: alta</li>
        <li>Drenagem: media (depende do conteudo de perlita)</li>
        <li>Frequencia de rega: a cada 2&ndash;4 dias (apenas agua, sem nutrientes engarrafados)</li>
        <li>Melhor para: cultivadores organicos, abordagem "so agua", cultivo focado em sabor</li>
    </ul>
</div>

<div class="step-card">
    <span class="step-number">4</span>
    <h3>Mistura para mudas</h3>
    <p>Mistura leve e fofa para germinacao e crescimento precoce. 40% coco + 30% perlita + 30% vermiculita. A vermiculita retem umidade extra ao redor da pequena zona radicular e a textura leve evita compactacao que poderia sufocar raizes de mudas.</p>
</div>

<blockquote>
    <strong>Dica:</strong> O Misturador de Substrato no GrowVPD Pro permite inserir a porcentagem de cada componente e calcula a retencao de agua, taxa de drenagem e capacidade de aeracao resultantes. Voce pode ajustar proporcoes e ver o impacto em tempo real antes de misturar.
</blockquote>

<h2>Retencao de agua vs. drenagem</h2>
<p>O compromisso fundamental no design de substrato e entre retencao de agua (para que a planta tenha um reservatorio entre regas) e drenagem (para que as raizes tenham acesso a oxigenio). As raizes precisam tanto de agua quanto de ar. Um substrato que fica saturado tempo demais sufoca as raizes. Um que drena rapido demais seca antes da proxima rega.</p>
<p>O equilibrio ideal depende do seu metodo de rega:</p>
<ul>
    <li><strong>Rega manual 1x/dia:</strong> maior retencao de agua (70/30 coco/perlita ou solo)</li>
    <li><strong>Gotejamento automatico 3&ndash;5x/dia:</strong> maior drenagem (50/50 ou ate 40/60 coco/perlita)</li>
    <li><strong>Rega por baixo (flood and drain):</strong> drenagem muito alta (bolinhas de argila ou 30/70 coco/perlita)</li>
</ul>

<h2>Preparacao da fibra de coco</h2>
<p>Fibra de coco crua requer preparacao antes do uso:</p>
<ol>
    <li><strong>Hidratacao:</strong> Descompacte blocos de coco prensado com agua morna. Um bloco padrao de 5 kg se expande para ~70 litros.</li>
    <li><strong>Enxague:</strong> Enxague com agua com pH ajustado ate o EC do escoamento ficar abaixo de 0,5 mS/cm. Isso remove sais de sodio e potassio em excesso.</li>
    <li><strong>Tamponamento:</strong> Deixe de molho em solucao cal-mag (EC 0,8&ndash;1,0) por 8&ndash;12 horas. Isso pre-carrega a capacidade de troca cationica com calcio e magnesio, impedindo que o coco roube esses nutrientes da sua alimentacao depois.</li>
    <li><strong>Drene e misture:</strong> Drene o excesso de agua, adicione perlita na proporcao escolhida e misture bem.</li>
</ol>

<div class="warning-box">
    <strong>Importante:</strong> Nunca use fibra de coco diretamente do bloco sem enxaguar e tamponar. Coco nao tamponado roubara calcio e magnesio da sua solucao nutritiva durante as primeiras 2&ndash;3 semanas, causando sintomas de deficiencia que sao dificeis de diagnosticar.
</div>

<h2>Recomendacoes de tamanho de vaso</h2>
<ul>
    <li><strong>Mudas:</strong> Comece em vasos de 0,5&ndash;1 L ou copos solo</li>
    <li><strong>Autoflowers:</strong> Vaso final de 7&ndash;15 L (o choque de transplante e arriscado em autoflowers, entao muitos cultivadores comecam direto no vaso final)</li>
    <li><strong>Fotoperiodicas (tenda pequena):</strong> Vaso final de 11&ndash;15 L</li>
    <li><strong>Fotoperiodicas (tenda maior, vegetativa longa):</strong> 20&ndash;30 L</li>
    <li><strong>Vasos de tecido</strong> sao altamente recomendados: podam as raizes pelo ar e previnem o enrolamento de raizes que vasos de plastico duro criam</li>
</ul>
`
  },

  "tent-ventilation-guide": {
    title: "Ventilacao da tenda de cultivo: Guia completo de CFM",
    body: `
<h2>Por que a ventilacao e importante</h2>
<p>A ventilacao e a espinha dorsal do clima da sua tenda. Cumpre quatro funcoes criticas: remove o calor excessivo gerado pelas luzes de cultivo, troca ar esgotado por ar fresco rico em CO2, regula a umidade substituindo ar umido da tenda por ar externo mais seco, e mantem pressao negativa para reter odores no filtro de carvao.</p>
<p>Sem ventilacao adequada, as temperaturas sobem descontroladamente, o CO2 se esgota (as plantas o consomem mais rapido do que se difunde naturalmente), a umidade sobe a niveis perigosos e odores escapam por cada costura e ziper.</p>

<h2>Calculando requisitos de CFM</h2>
<p>CFM (Cubic Feet per Minute &mdash; pes cubicos por minuto) mede quanto ar seu ventilador desloca. O objetivo e trocar todo o ar da tenda pelo menos uma vez a cada 1&ndash;3 minutos.</p>

<h3>Passo 1: Calcule o volume da tenda</h3>
<p>Multiplique comprimento x largura x altura (tudo em pes). Para tendas metricas, converta primeiro para pes ou use metros cubicos e multiplique por 35,3 para obter pes cubicos.</p>
<ul>
    <li><strong>Tenda 60x60x160 cm:</strong> 2 x 2 x 5,2 = 20,8 ft3</li>
    <li><strong>Tenda 120x120x200 cm:</strong> 3,9 x 3,9 x 6,6 = 100 ft3</li>
    <li><strong>Tenda 240x120x200 cm:</strong> 7,9 x 3,9 x 6,6 = 203 ft3</li>
</ul>

<h3>Passo 2: Aplique multiplicadores</h3>
<p>O CFM base e igual ao volume da tenda (para uma troca de ar por minuto). Depois aplique multiplicadores para condicoes reais:</p>
<ul>
    <li><strong>Filtro de carvao:</strong> Adicione 25% (filtro restringe fluxo de ar). Multiplique por 1,25.</li>
    <li><strong>Comprimento e curvas dos dutos:</strong> Adicione 10% para cada curva de 90 graus e 5% por metro de duto. Configuracao tipica com uma curva e 2 metros de duto: multiplique por 1,2.</li>
    <li><strong>Calor alto (luzes fortes em tenda pequena):</strong> Adicione mais 20%. Multiplique por 1,2.</li>
    <li><strong>Clima umido:</strong> Adicione 15%. Multiplique por 1,15.</li>
</ul>

<h3>Exemplo de calculo</h3>
<p>Tenda 120x120x200 cm, filtro de carvao, 1 curva de duto, 2m de duto, LED 480W:</p>
<p>100 ft3 x 1,25 (filtro) x 1,2 (dutos) x 1,2 (calor) = <strong>180 CFM necessarios</strong></p>

<blockquote>
    <strong>Dica:</strong> A Calculadora de Ventilacao do GrowVPD Pro na aba Equipamentos faz essa matematica por voce. Insira dimensoes da tenda, comprimento do duto, numero de curvas e se tem filtro de carvao. A saida e o CFM minimo e tamanhos de ventilador recomendados.
</blockquote>

<h2>Pressao negativa</h2>
<p>Pressao negativa significa que o ventilador de exaustao puxa mais ar da tenda do que entra pelas aberturas passivas. Isso cria um leve vacuo que:</p>
<ul>
    <li><strong>Garante que todo ar passe pelo filtro de carvao</strong> antes de sair da tenda, eliminando vazamentos de odor por zipers e costuras</li>
    <li><strong>Puxa ar fresco</strong> pelas aberturas de entrada, fornecendo entrada passiva de ar sem necessidade de segundo ventilador</li>
    <li><strong>Estabiliza as paredes da tenda.</strong> Se as paredes da tenda puxam levemente para dentro, voce tem pressao negativa. Isso e normal e desejavel.</li>
</ul>

<div class="warning-box">
    <strong>Pressao negativa excessiva</strong> faz as paredes da tenda colapsarem significativamente para dentro, reduzindo espaco utilizavel e potencialmente esmagando plantas. Se isso acontecer, abra outra abertura de entrada passiva ou reduza levemente a velocidade do ventilador.
</div>

<h2>Dimensionamento do filtro de carvao</h2>
<p>O filtro de carvao deve corresponder a classificacao CFM do seu ventilador. Um filtro subdimensionado restringe o fluxo de ar (reduz CFM efetivo) e pode deixar odor passar. Um filtro sobredimensionado e aceitavel &mdash; apenas durara mais.</p>
<ul>
    <li><strong>Filtros de 4 polegadas (100mm):</strong> Tipicamente dimensionados para 150&ndash;200 CFM. Adequados para tendas 60x60 e pequenas 120x60.</li>
    <li><strong>Filtros de 6 polegadas (150mm):</strong> Tipicamente dimensionados para 300&ndash;400 CFM. Escolha padrao para tendas 120x120.</li>
    <li><strong>Filtros de 8 polegadas (200mm):</strong> Dimensionados para 500&ndash;750 CFM. Para tendas 240x120 ou maiores, ou configuracoes multi-tenda com uma exaustao.</li>
</ul>
<p>Filtros de carvao duram 12&ndash;24 meses dependendo da umidade e uso. Substitua quando notar vazamento de odor ou quando o fluxo de ar pelo filtro diminuir visivelmente.</p>

<h2>Dimensionamento e roteamento de dutos</h2>
<ul>
    <li><strong>Diametro do duto deve corresponder ao do ventilador.</strong> Ventilador de 6" precisa de duto de 6". Usar reducao (ventilador de 6" com duto de 4") reduz dramaticamente o fluxo de ar.</li>
    <li><strong>Mantenha dutos curtos e retos.</strong> Cada curva e cada metro de duto adiciona resistencia. O caminho mais curto e mais reto do ventilador a saida e o melhor.</li>
    <li><strong>Use duto isolado</strong> para reduzir transmissao de ruido e prevenir condensacao em superficies frias do duto.</li>
    <li><strong>Evite vincos no duto flexivel.</strong> Secoes vincadas criam turbulencia e reduzem fluxo de ar. Estenda totalmente o duto e use curvas suaves em vez de angulos agudos.</li>
</ul>

<h2>Recomendacoes de ventilador por tamanho de tenda</h2>
<ul>
    <li><strong>60x60 cm:</strong> Ventilador de 4", 100&ndash;150 CFM (AC Infinity Cloudline T4, Mars Hydro 4")</li>
    <li><strong>120x120 cm:</strong> Ventilador de 6", 300&ndash;400 CFM (AC Infinity Cloudline T6, Mars Hydro 6")</li>
    <li><strong>240x120 cm:</strong> Ventilador de 8", 500&ndash;750 CFM, ou dois ventiladores de 6"</li>
    <li><strong>Salas maiores:</strong> Ventiladores in-line comerciais ou multiplas unidades de 8"</li>
</ul>

<h2>Ventiladores de circulacao (dentro da tenda)</h2>
<p>O ventilador de exaustao cuida da troca de ar, mas dentro da tenda voce tambem precisa de ventiladores de circulacao para evitar bolsoes de ar estagnado:</p>
<ul>
    <li><strong>Clip fans oscilantes:</strong> Prendem nas barras da tenda e fornecem fluxo de ar varrendo a copa. Um em cada canto da tenda para tendas grandes.</li>
    <li><strong>Nao aponte ventiladores diretamente nas plantas.</strong> Vento direto constante causa "wind burn" &mdash; bordas das folhas enroladas e ressecadas. Use fluxo indireto, oscilante.</li>
    <li><strong>Fluxo sob a copa:</strong> Posicione um pequeno ventilador abaixo da copa para circular ar ao redor da base das plantas. Isso evita acumulo de umidade na copa inferior e reduz o ambiente para pragas.</li>
</ul>

<blockquote>
    <strong>Dica:</strong> Se voce usa ventiladores AC Infinity ou Mars Hydro conectados pelo GrowVPD Pro, o app pode ajustar automaticamente a velocidade do ventilador com base em valores de temperatura, umidade ou VPD. Isso fornece ventilacao dinamica que se adapta as condicoes mutaveis ao longo do dia.
</blockquote>

<h2>Erros comuns de ventilacao</h2>
<ul>
    <li><strong>Rodar o exaustor em timer em vez de continuamente.</strong> Quando o ventilador esta desligado, temperatura e umidade sobem rapidamente. Mantenha o ventilador rodando continuamente em velocidade regulada.</li>
    <li><strong>Vedar todas as entradas passivas.</strong> O ventilador de exaustao precisa que ar entre. Se todas as entradas estao vedadas, o ventilador trabalha contra vacuo e nao consegue mover ar efetivamente.</li>
    <li><strong>Colocar o filtro de carvao fora da tenda.</strong> O filtro deve estar dentro da tenda, conectado diretamente ao ventilador. Fluxo de ar: ar da tenda &rarr; filtro de carvao &rarr; ventilador &rarr; duto &rarr; saida. Isso garante que todo ar com odor passe pelo filtro.</li>
    <li><strong>Ignorar ventilacao noturna.</strong> Quando as luzes desligam, muitos cultivadores reduzem ou param a ventilacao. Mas e nesse periodo que a umidade dispara. Mantenha a exaustao rodando, apenas em velocidade mais baixa.</li>
</ul>
`
  },

  "privacy-security-guide": {
    title: "Privacidade e seguranca no GrowVPD Pro",
    body: `
<h2>Por que privacidade importa para cultivadores</h2>
<p>O cultivo indoor e legal em muitos lugares, mas isso nao significa que voce quer que qualquer pessoa que pegue seu celular veja seu diario de cultivo, dados de colheita e fotos diarias. Seja por colegas de quarto, colegas de trabalho ou qualquer pessoa que possa pegar seu celular emprestado, o GrowVPD Pro fornece varias camadas de protecao de privacidade.</p>

<h2>Bloqueio por PIN e autenticacao biometrica</h2>
<p>O recurso de seguranca mais basico e bloquear o app atras de PIN ou autenticacao biometrica (impressao digital ou reconhecimento facial).</p>

<h3>Configurando o bloqueio PIN</h3>
<ol>
    <li>Abra <strong>Configuracoes</strong> no GrowVPD Pro</li>
    <li>Role ate a secao <strong>Seguranca</strong></li>
    <li>Toque em <strong>Definir codigo PIN</strong></li>
    <li>Insira um PIN de 4&ndash;6 digitos e confirme</li>
    <li>O app agora exigira esse PIN toda vez que for aberto ou trazido do segundo plano</li>
</ol>

<h3>Autenticacao biometrica</h3>
<p>Se seu celular suporta impressao digital ou reconhecimento facial, voce pode habilitar desbloqueio biometrico como complemento (ou substituto) do PIN. E mais rapido e conveniente mantendo o mesmo nivel de seguranca.</p>
<ol>
    <li>Em Configuracoes &gt; Seguranca, ative <strong>Autenticacao biometrica</strong></li>
    <li>O app usara o sistema biometrico integrado do celular</li>
    <li>Se a biometria falhar (dedos molhados, mascara), o app volta para o PIN</li>
</ol>

<h3>Bloqueio em segundo plano</h3>
<p>O GrowVPD Pro bloqueia automaticamente quando voce muda para outro app ou a tela do celular apaga. Quando voce volta ao app, precisa se autenticar novamente. Isso impede que alguem acesse o app se voce deixar o celular desbloqueado e desacompanhado.</p>

<blockquote>
    <strong>Dica:</strong> O bloqueio ativa imediatamente quando o app vai para segundo plano. Sem atraso. Mesmo se alguem pegar seu celular enquanto voce troca de apps, o diario de cultivo ja esta bloqueado.
</blockquote>

<h2>Privacidade de fotos</h2>
<p>Por padrao, fotos tiradas no GrowVPD Pro (ou adicionadas aos registros do diario) podem ser visiveis na galeria do celular, no Google Photos e nos servicos de backup na nuvem. A funcao <strong>Privacidade de Fotos</strong> (Pro) impede isso.</p>

<h3>Como funciona</h3>
<ul>
    <li>Quando a Privacidade de Fotos esta ativada, fotos de cultivo sao armazenadas na pasta interna privada do app</li>
    <li>Esses arquivos sao excluidos do scanner de midia do sistema, entao nao aparecem na galeria, Google Photos ou qualquer outro app de midia</li>
    <li>As fotos sao visiveis apenas dentro do proprio GrowVPD Pro &mdash; nos registros do diario, timelapse e funcoes de exportacao</li>
    <li>Se alguem abrir a galeria do celular, nao vera nenhum rastro das suas fotos de cultivo</li>
</ul>

<h3>Ativando a privacidade de fotos</h3>
<ol>
    <li>Va ate <strong>Configuracoes &gt; Privacidade</strong></li>
    <li>Ative <strong>Ocultar fotos da galeria</strong></li>
    <li>Fotos existentes serao movidas para a pasta privada</li>
    <li>Todas as fotos futuras tiradas pelo app serao salvas privadamente por padrao</li>
</ol>

<div class="warning-box">
    <strong>Aviso de backup:</strong> Fotos no modo privado nao sao salvas pelo Google Photos, iCloud ou qualquer servico automatico de backup. Para proteger contra perda de dados, use a funcao de exportacao integrada do GrowVPD Pro para backups manuais, ou exporte cultivos especificos como PDF/JSON.
</div>

<h2>Modo stealth (icone mascarado do app)</h2>
<p>Para maxima discricao, o modo Stealth muda o icone e nome do app na tela inicial para que nao parecam um app de cultivo de forma alguma.</p>

<h3>O que muda</h3>
<ul>
    <li>O icone do app muda para um design generico e discreto (calculadora, clima ou icone utilitario)</li>
    <li>O nome do app na tela inicial muda para algo neutro</li>
    <li>O app funciona de forma identica &mdash; apenas a aparencia externa muda</li>
    <li>Ao abrir, a interface normal do GrowVPD Pro aparece (atras do bloqueio PIN, claro)</li>
</ul>

<h3>Ativando o modo Stealth</h3>
<ol>
    <li>Va ate <strong>Configuracoes &gt; Privacidade</strong></li>
    <li>Ative <strong>Modo Stealth</strong></li>
    <li>Selecione o estilo de mascaramento das opcoes disponiveis</li>
    <li>A mudanca de icone pode levar alguns segundos, pois o Android atualiza o launcher</li>
</ol>

<blockquote>
    <strong>Dica:</strong> Combine as tres funcoes para maxima privacidade: bloqueio PIN (impede acesso nao autorizado) + Privacidade de Fotos (oculta fotos da galeria) + Modo Stealth (oculta o proprio app). Juntos, nao resta nenhum rastro visivel de atividade de cultivo no seu celular.
</blockquote>

<h2>Seguranca de dados</h2>
<p>O GrowVPD Pro armazena todos os dados localmente no seu dispositivo. Nao ha contas na nuvem, nenhum servidor armazenando seus dados de cultivo e nenhuma ferramenta de analitica rastreando seus registros de diario. Seus dados nunca saem do celular, a menos que voce os exporte explicitamente.</p>
<ul>
    <li><strong>Banco de dados:</strong> Armazenado localmente no armazenamento privado do app (banco de dados Room)</li>
    <li><strong>Fotos:</strong> Armazenadas localmente no dispositivo (pasta privada se Privacidade de Fotos estiver ativada)</li>
    <li><strong>Credenciais de dispositivos inteligentes:</strong> Armazenadas localmente, transmitidas apenas para as respectivas APIs das plataformas (Tuya, AC Infinity etc.) por conexoes criptografadas</li>
    <li><strong>Nenhuma conta necessaria:</strong> O GrowVPD Pro nao exige que voce crie uma conta ou faca login</li>
</ul>

<h2>Checklist de seguranca</h2>
<ul>
    <li>Bloqueio PIN ou biometrico ativado</li>
    <li>Privacidade de fotos ativada (fotos ocultas da galeria)</li>
    <li>Modo Stealth ativado (icone mascarado)</li>
    <li>Exportacoes regulares para backup (porque fotos privadas nao sao salvas na nuvem)</li>
    <li>Seguranca no nivel do celular (bloqueio de tela, criptografia) como primeira linha de defesa</li>
</ul>
`
  },

  "language-setup": {
    title: "Configuracao de idioma: 11 idiomas disponiveis",
    body: `
<h2>Localizacao completa, nao apenas traducao parcial</h2>
<p>Muitos apps afirmam suportar varios idiomas, mas traduzem apenas o menu principal e deixam ajuda, guias, mensagens de erro e termos tecnicos em ingles. O GrowVPD Pro aborda isso de forma diferente: <strong>tudo e traduzido</strong>. Cada botao, cada rotulo, cada guia, cada tooltip, cada descricao de doenca, cada rotulo na calculadora de nutrientes &mdash; todas as 1.390+ strings de texto sao totalmente traduzidas em todos os 11 idiomas suportados.</p>

<h2>Idiomas disponiveis</h2>
<ul>
    <li><strong>Ingles (EN)</strong> &mdash; Idioma padrao</li>
    <li><strong>Tcheco (CS)</strong> &mdash; Tcheco completo com diacriticos corretos</li>
    <li><strong>Alemao (DE)</strong> &mdash; Deutsch</li>
    <li><strong>Espanhol (ES)</strong> &mdash; Espa&ntilde;ol</li>
    <li><strong>Holandes (NL)</strong> &mdash; Nederlands</li>
    <li><strong>Frances (FR)</strong> &mdash; Fran&ccedil;ais</li>
    <li><strong>Italiano (IT)</strong> &mdash; Italiano</li>
    <li><strong>Portugues (PT)</strong> &mdash; Portugu&ecirc;s</li>
    <li><strong>Polones (PL)</strong> &mdash; Polski</li>
    <li><strong>Tailandes (TH)</strong> &mdash; &#xe44;&#xe17;&#xe22;</li>
    <li><strong>Hebraico (HE)</strong> &mdash; &#x05e2;&#x05d1;&#x05e8;&#x05d9;&#x05ea; (com suporte completo para layout da direita para a esquerda)</li>
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
    <p>Role ate a secao <strong>Geral</strong>. Toque em <strong>Idioma</strong>. O seletor de idioma aparecera com todos os 11 idiomas disponiveis.</p>
</div>

<div class="step-card">
    <span class="step-number">3</span>
    <h3>Selecione seu idioma</h3>
    <p>Toque no idioma preferido. Toda a interface do app se atualiza imediatamente &mdash; sem necessidade de reiniciar. Todas as abas, menus, guias, calculadoras e descricoes mudam para o idioma escolhido.</p>
</div>

<blockquote>
    <strong>Dica:</strong> A configuracao de idioma e independente do idioma do sistema do celular. Voce pode usar o celular em ingles mas rodar o GrowVPD Pro em alemao, ou qualquer outra combinacao.
</blockquote>

<h2>O que e traduzido</h2>
<p>Quando voce muda o idioma, o seguinte e atualizado:</p>
<ul>
    <li><strong>Todos os elementos de UI:</strong> Nomes de abas, botoes, rotulos, menus, dialogos</li>
    <li><strong>Grafico VPD:</strong> Rotulos dos eixos, nomes de fases, tooltips</li>
    <li><strong>Guia PPFD:</strong> Recomendacoes de luz, calculos DLI, conselhos por fase</li>
    <li><strong>Diario de cultivo:</strong> Nomes de fases (Muda, Vegetativa, Floracao, Colheita), rotulos de campos, textos placeholder</li>
    <li><strong>Guia de doencas e pragas:</strong> Todos os nomes de doencas, descricoes, sintomas e recomendacoes de tratamento</li>
    <li><strong>Guia de plantas:</strong> Tecnicas de cultivo, metodos de treinamento, descricoes de substrato</li>
    <li><strong>Calculadora de nutrientes:</strong> Nomes de elementos, rotulos de unidades, instrucoes de mistura</li>
    <li><strong>Aba Equipamentos:</strong> Categorias de equipamento, campos de perfil, calculadora de ventilacao</li>
    <li><strong>Aba Automacao:</strong> Gerenciamento de salas/tendas, tipos de dispositivo, condicoes de regras, descricoes de acoes</li>
    <li><strong>Configuracoes:</strong> Todos os rotulos de opcoes e descricoes</li>
    <li><strong>Notificacoes:</strong> Texto de lembretes, alertas de automacao, resumos diarios</li>
    <li><strong>Templates de cultivo:</strong> Descricoes de templates, fases predefinidas, programas nutricionais</li>
    <li><strong>Mensagens de erro e textos de ajuda</strong></li>
</ul>

<h2>Suporte da direita para a esquerda (RTL) para hebraico</h2>
<p>O hebraico e um idioma escrito da direita para a esquerda, o que requer espelhamento de todo o layout da UI. O GrowVPD Pro suporta totalmente o layout RTL quando o hebraico e selecionado:</p>
<ul>
    <li>Texto e alinhado a direita</li>
    <li>Elementos de navegacao sao espelhados (botao voltar move para o lado direito)</li>
    <li>Listas e cartoes invertem a direcao do layout</li>
    <li>Graficos e visualizacoes de dados se adaptam a ordem de leitura RTL</li>
</ul>
<p>Nao e uma simples troca de texto &mdash; todo o framework de UI se adapta para fornecer uma experiencia de leitura natural para falantes de hebraico.</p>

<h2>Suporte ao idioma tailandes</h2>
<p>O tailandes usa um script complexo com marcas tonais, posicao de vogais acima e abaixo das consoantes e sem espacos entre palavras. O GrowVPD Pro lida com tudo isso corretamente, incluindo quebra de texto adequada e renderizacao de caracteres combinados.</p>

<h2>Idioma e dados</h2>
<p>Mudar o idioma <strong>nao afeta</strong> seus dados existentes. Seus registros do diario de cultivo, dados de sensores, regras de automacao e todos os dados registrados permanecem exatamente como estao. Apenas os rotulos da interface mudam. Se voce escreveu notas no diario em ingles e mudar para alemao, suas notas permanecem em ingles &mdash; apenas os rotulos dos campos ao redor delas mudam para alemao.</p>

<h2>Qualidade da traducao</h2>
<p>Todas as traducoes sao mantidas pela equipe de desenvolvimento com input de falantes nativos da comunidade de cultivo. Terminologia tecnica de cultivo (VPD, PPFD, DLI, EC, pH) e mantida na forma internacionalmente reconhecida em todos os idiomas, pois sao termos cientificos universais usados por cultivadores em todos os idiomas.</p>

<blockquote>
    <strong>Quer ajudar a melhorar as traducoes?</strong> Se voce encontrar um erro de traducao ou tiver uma sugestao melhor de formulacao no seu idioma, entre em contato no Discord. Contribuicoes da comunidade melhoraram significativamente a qualidade das traducoes em todos os 11 idiomas.
</blockquote>
`
  }

};
