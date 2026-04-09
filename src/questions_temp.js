module.exports = [
    {
        "id": "q1_topic1",
        "text": "O proprietário de uma empresa precisa saber quem faz login no sistema (auditoria de acesso).\n\nVocê precisa garantir que o proprietário possa visualizar os logs de auditoria de usuários. Onde cada ação deve ser configurada: 1. Ativar a auditoria de usuários e 2. Visualizar os logs de auditoria de usuários?\n\nSelecione a combinação correta:",
        "options": [
            "1. Configurações Pessoais (Personal Settings) | 2. Localização Avançada (Advanced Find)",
            "1. Conformidade do Microsoft 365 (M365 Compliance) | 2. Conformidade do Microsoft 365",
            "1. Configurações do Sistema (System Settings) | 2. Conformidade do Microsoft 365 (M365 Compliance)",
            "1. Personalizar o Sistema (Customize the System) | 2. Registro individual (Individual record)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre como a auditoria de acesso do usuário é gerenciada no ecossistema do Dataverse/Power Platform.",
            "papoReto": "Para começar a vigiar quem entra no sistema, você precisa ligar o 'interruptor principal' (Configurações do Sistema). Depois que ele tá ligado, os registros de quem entrou vão lá para o painel de segurança e conformidade geral da Microsoft (Microsoft 365 Compliance / Purview).",
            "respostaCerta": "1. Configurações do Sistema (System Settings) | 2. Conformidade do Microsoft 365 (M365 Compliance)",
            "puloDoGato": "'Ativar auditoria' é sempre configurado no nível de administração do ambiente (System Settings / Power Platform Admin Center). Já para 'Ler logs de auditoria de acesso' no Dataverse, o sistema atualmente redireciona você para o portal de Conformidade do Microsoft 365, que é o lugar que centraliza todos os logs do tenant.",
            "cascasDeBanana": [
                "Configurações Pessoais: Auditoria de sistema afeta todo mundo, então não pode ser ligada no nível pessoal do usuário.",
                "Localização Avançada: Você pode usar a Localização Avançada para buscar dados de negócios (contas, contatos), mas os logs de acesso de usuário ficam no portal de conformidade."
            ],
            "dicaOuro": "Ativar auditoria = System Settings (Admin). Ler auditoria de login = M365 Compliance."
        }
    },
    {
        "id": "q2_topic1",
        "text": "Sua organização não permite o uso de código personalizado (custom code) para a criação de soluções.\n\nVocê precisa criar uma visualização (view) de uma tabela que possa ser vista por todos os usuários da organização em um aplicativo orientado por modelo (model-driven app).\n\nOnde você deve criar essa visualização?",
        "options": [
            "Na exibição de lista da entidade diretamente no aplicativo (List view of the entity).",
            "No Microsoft Visual Studio.",
            "No Portal do Criador (Maker Portal / make.powerapps.com).",
            "Na área de Modelos (Templates area) do Centro de Administração."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão clássica sobre onde as customizações 'No-Code/Low-Code' devem ser feitas na arquitetura moderna da Power Platform.",
            "papoReto": "Onde a gente constrói as coisas hoje em dia no Power Apps sem usar código? No portal do criador (Maker Portal). Como a visualização é para 'todos os usuários da organização', estamos falando de uma 'Visualização do Sistema' (System View) ou 'Visualização Pública' (Public View), que são configuradas na raiz da tabela, e não de uma visualização pessoal.",
            "respostaCerta": "No Portal do Criador (Maker Portal / make.powerapps.com).",
            "puloDoGato": "Para criar uma view pública que todos vejam e que faça parte de uma Solução da empresa (para ser transportada de Desenvolvimento para Produção), você deve ir no Maker Portal (make.powerapps.com) > Soluções > selecionar sua Tabela > Exibições (Views) e criar por lá.",
            "cascasDeBanana": [
                "Na exibição de lista da entidade diretamente no aplicativo: Lá o usuário final consegue criar e salvar 'Visualizações Pessoais' (Personal Views), mas elas não são para 'toda a organização' por padrão e não fazem parte da personalização base do sistema.",
                "No Microsoft Visual Studio: O enunciado diz expressamente que a organização 'não permite o uso de código personalizado'."
            ],
            "dicaOuro": "Palavras-chave na prova: 'Vista por todos os usuários' ou 'Parte da solução' = Public View / System View. 'Criado sem código' ou 'Interface moderna' = Maker Portal (make.powerapps.com)."
        }
    },
    {
        "id": "q3_topic1",
        "text": "Você cria um portal do Power Pages (Power Apps portal) para fornecer treinamento e documentação para alunos.\n\nOs alunos criam um perfil no portal e, em seguida, selecionam e pagam pelos cursos. Você planeja adicionar cursos gratuitos ao portfólio de treinamento. Os cursos gratuitos devem estar automaticamente disponíveis para todos os alunos após eles entrarem no sistema (fizerem login).\n\nVocê precisa atribuir permissões padrão aos alunos.\n\nO que você deve fazer?",
        "options": [
            "Criar uma função da web (web role) de Alunos e definir a opção 'Função de Usuários Autenticados' como verdadeira. Atribuir a função da web manualmente a cada usuário registrado.",
            "Criar uma tabela para gerenciar cursos gratuitos. Criar registros de permissão de tabela e atribuir as permissões diretamente aos usuários quando eles se registrarem no portal pela primeira vez.",
            "Criar uma tabela para gerenciar cursos gratuitos. Criar uma função da web (web role) de Alunos e definir a opção 'Função de Usuários Autenticados' como verdadeira. Criar permissões de tabela para acessar os registros e atribuir essas permissões à função da web.",
            "Atribuir a função de segurança de Administrador do Sistema do Dataverse para todos os usuários que se registrarem no portal."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão testa seu conhecimento sobre segurança e permissões específicas de Portais (Power Pages).",
            "papoReto": "Imagine que o portal é um clube VIP. Você não quer ter o trabalho de dar uma chave de acesso (permissão) na mão de cada pessoa que entra (opção 1 ou 2). Em vez disso, você cria uma regra na porta do clube: 'Todo mundo que está logado (Usuário Autenticado) ganha automaticamente a pulseira VIP que dá acesso aos cursos gratuitos'.",
            "respostaCerta": "Criar uma tabela para gerenciar cursos gratuitos. Criar uma função da web e definir a opção 'Função de Usuários Autenticados' como verdadeira. Criar permissões de tabela e atribuí-las à função.",
            "puloDoGato": "No Power Pages, a opção 'Authenticated Users Role' (Função de Usuários Autenticados) faz todo o trabalho duro por você. Se você marca essa opção em uma Web Role, o sistema automaticamente aplica essa função a qualquer usuário que fizer login. Você não precisa atribuir nada manualmente usuário por usuário!",
            "cascasDeBanana": [
                "Atribuir a função da web manualmente a cada usuário registrado: Errado e trabalhoso. Se a opção de 'Usuários Autenticados' está ativada, a atribuição manual é redundante.",
                "Atribuir as permissões diretamente aos usuários: Pegadinha clássica! Em Portais, permissões de tabela são SEMPRE associadas a Funções da Web (Web Roles), nunca diretamente ao registro do contato."
            ],
            "dicaOuro": "Portais (Power Pages) usam 'Web Roles' (Funções da Web). Dataverse (Model-driven) usa 'Security Roles' (Funções de Segurança). Além disso, a permissão no portal é sempre ligada à Web Role!"
        }
    },
    {
        "id": "q4_topic1",
        "text": "Você cria fluxos de trabalho (workflows) para automatizar processos de negócios. Você precisa configurar um fluxo de trabalho para atender aos seguintes requisitos:\n1. Ser acionado quando uma condição for atendida.\n2. Executar imediatamente.\n3. Executar uma ação quando a condição for atendida.\n\nVocê precisa criar um fluxo de trabalho que envie e-mails automaticamente com base em um modelo de mala direta (mail merge).\n\nSelecione a combinação correta de opções para atender aos requisitos na ordem (1, 2 e 3):",
        "options": [
            "1. Disparar quando um botão do Power Automate for pressionado | 2. Configurar o fluxo para executar agora | 3. Exibir gráfico",
            "1. Publicar fluxo de trabalho | 2. Aprovar o fluxo de trabalho | 3. Atualizar um direito de acesso",
            "1. Assunto contém dados | 2. Configurar o fluxo de trabalho para executar agora | 3. Enviar um e-mail",
            "1. Assunto contém dados | 2. Aprovar o fluxo de trabalho | 3. Enviar um e-mail"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão aborda a criação de um fluxo de trabalho (workflow) clássico do Dynamics 365 focado no envio imediato de e-mails.",
            "papoReto": "Se você quer que um e-mail seja disparado assim que o sistema perceber que uma informação foi preenchida, você precisa de três passos: um 'gatilho' (a condição de que o Assunto tem algum dado), definir que isso tem que acontecer na mesma hora ('run now' - tempo real), e a ação final que é literalmente 'enviar o e-mail'.",
            "respostaCerta": "1. Assunto contém dados | 2. Configurar o fluxo de trabalho para executar agora | 3. Enviar um e-mail",
            "puloDoGato": "Fluxos de trabalho em tempo real (Real-time workflows) são configurados para 'executar agora' (run now) em contraste com fluxos em segundo plano. 'Assunto contém dados' é a condição que atende ao requisito de acionamento do gatilho.",
            "cascasDeBanana": [
                "Disparar quando um botão do Power Automate for pressionado: Botões requerem ação manual, e a questão pede 'quando uma condição for atendida' automaticamente.",
                "Aprovar o fluxo de trabalho: Aprovação não faz um fluxo rodar imediatamente, ela é apenas uma etapa de pausa/verificação."
            ],
            "dicaOuro": "Sempre que a prova falar de 'Mail Merge template' (mala direta) ou 'Run Immediately' (executar imediatamente) em fluxos internos de e-mail, eles geralmente estão se referindo aos Workflows Clássicos rodando em tempo real (síncronos)."
        }
    },
    {
        "id": "q5_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service.\nVocê precisa configurar a seguinte automação para a equipe de vendas:\n1. Enviar um e-mail quando o status mudar em uma Oportunidade.\n2. Enviar um SMS (mensagem de texto) ao gerente de vendas quando uma Oportunidade for criada.\n3. Criar uma tarefa no aplicativo 'Wunderlist' quando uma Oportunidade estiver aberta há 30 dias.\n\nQual ferramenta você deve usar para CADA requisito, respectivamente?",
        "options": [
            "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Fluxo de Trabalho (Workflow) do Dynamics 365 | 3. Fluxo de Processo Empresarial (BPF)",
            "1. Microsoft Flow (Power Automate) | 2. Fluxo de Trabalho (Workflow) do Dynamics 365 | 3. Microsoft Flow (Power Automate)",
            "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Microsoft Flow (Power Automate) | 3. Microsoft Flow (Power Automate)",
            "1. Fluxo de Processo Empresarial (BPF) | 2. Microsoft Flow (Power Automate) | 3. Fluxo de Trabalho (Workflow) do Dynamics 365"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão exige que você saiba quando usar a automação nativa clássica (Workflows) e quando usar o Power Automate (antigo Microsoft Flow) para se conectar com o mundo externo.",
            "papoReto": "Regra básica: se a automação acontece 'dentro de casa' (tipo enviar um e-mail simples usando o próprio Dynamics), o Workflow resolve. Mas se você precisa 'sair de casa' para mandar um SMS pro celular de alguém ou criar uma tarefa num aplicativo de fora (Wunderlist), você precisa chamar o carteiro moderno: o Power Automate.",
            "respostaCerta": "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Microsoft Flow (Power Automate) | 3. Microsoft Flow (Power Automate)",
            "puloDoGato": "O Microsoft Flow (Power Automate) brilha com conectores de terceiros. SMS requer um conector externo (como Twilio) e Wunderlist é um app externo. Ambos exigem Power Automate. Enviar um e-mail ao mudar o status internamente é perfeitamente tratado pelo Dynamics 365 Workflow clássico.",
            "cascasDeBanana": [
                "Fluxos de Processo Empresarial (BPF): BPFs servem para guiar o usuário visualmente por etapas na tela (ex: Qualificar > Desenvolver > Propor). Eles não servem para enviar SMS ou criar tarefas em sistemas externos de forma autônoma."
            ],
            "dicaOuro": "Apareceu sistema de fora da Microsoft ou comunicação externa complexa (SMS, postar no Twitter, criar card no Trello/Wunderlist)? A resposta é 100% Power Automate (Microsoft Flow)."
        }
    },
    {
        "id": "q6_topic1",
        "text": "Uma empresa usa o Microsoft Dataverse para gerenciar prospects. A empresa tem um Fluxo de Processo Empresarial (BPF) chamado 'BPFA' associado à tabela Prospect.\n\nVocê adiciona uma coluna 'Categoria' à tabela Prospect e cria novos BPFs que são aplicados com base na categoria selecionada. Os usuários podem alternar para os novos BPFs, mas eles NÃO devem mais usar ou conseguir ver o BPFA antigo.\n\nQuais são as DUAS maneiras de atingir esse objetivo?",
        "options": [
            "A) Remover todos os privilégios de acesso (security roles) do BPFA. E B) Mudar a ordem de exibição do BPFA para o final da lista.",
            "A) Usar uma regra de negócios para impedir os usuários de alternar para o BPFA. E B) Desativar o BPFA.",
            "A) Mudar a ordem de exibição do BPFA para o final da lista. E B) Usar uma regra de negócios para impedir o acesso.",
            "A) Desativar o BPFA. E B) Remover todos os privilégios de acesso (security roles) do BPFA."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma questão importante sobre como o Dataverse gerencia a visibilidade e o ciclo de vida dos Fluxos de Processo Empresarial (Business Process Flows).",
            "papoReto": "Se você tem um processo na tela (aquelas barrinhas de progresso no topo) que você quer aposentar de vez e sumir com ele, você tem dois caminhos: ou você 'desliga a tomada' dele (Desativar) ou você confisca a 'chave' que permite que as pessoas o vejam (Remover os privilégios de acesso das Funções de Segurança).",
            "respostaCerta": "A) Desativar o BPFA. E B) Remover todos os privilégios de acesso (security roles) do BPFA.",
            "puloDoGato": "BPFs são tratados pelo sistema como Entidades (Tabelas). Portanto, eles têm configurações de segurança (Ler, Criar, Atualizar). Se você tirar o direito de 'Leitura' do BPF 'BPFA' em todas as funções de segurança, ele some para os usuários. Desativar o BPF também é a maneira direta de aposentá-lo globalmente.",
            "cascasDeBanana": [
                "Usar uma regra de negócios (Business Rule): Regras de negócios mexem em campos do formulário (ocultar, mostrar, tornar obrigatório). Elas não conseguem bloquear ou esconder um Fluxo de Processo Empresarial.",
                "Mudar a ordem de exibição: Isso apenas joga o BPFA pro final da fila caso existam vários BPFs na mesma tela, mas o usuário ainda poderia clicar no botão 'Alternar Processo' e escolhê-lo manualmente."
            ],
            "dicaOuro": "Para esconder completamente um BPF da tela dos usuários: Desative-o OU remova as Permissões de Leitura dele na aba 'Fluxos do Processo Empresarial' dentro da Função de Segurança (Security Role)."
        }
    },
    {
        "id": "q7_topic1",
        "text": "Você está criando uma regra de negócios (business rule) para implementar uma lógica nova.\nVocê precisa aplicar a lógica da regra de negócios para um aplicativo de tela (canvas app) que usa um único ambiente chamado Server1.\n\nVocê precisa configurar o escopo da regra de negócios.\n\nQual escopo você deve usar?",
        "options": [
            "Server1",
            "Entidade (Entity)",
            "Todos os Formulários (All Forms)",
            "Global"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão foca em como o escopo de uma Regra de Negócios afeta onde ela será executada, especialmente quando saímos do mundo dos aplicativos orientados por modelo (Model-driven) e entramos no mundo dos aplicativos de tela (Canvas Apps).",
            "papoReto": "Regras de negócios geralmente rodam 'na tela' (no formulário) de um Model-driven app. Mas um Canvas app não usa os formulários padrão do Dataverse. Então, se você quer que a regra funcione mesmo quando o dado é alterado por um Canvas App (ou por uma integração de fora), a regra tem que rodar 'lá no fundo', no servidor, diretamente na tabela. O nome desse escopo que roda no servidor é 'Entidade'.",
            "respostaCerta": "Entidade (Entity)",
            "puloDoGato": "Sempre que a questão falar que a Regra de Negócios precisa funcionar para 'Canvas Apps', 'Power Pages (Portais)', 'Plugins' ou 'Integrações Externas', o escopo TEM que ser 'Entity' (Entidade/Tabela). Qualquer outro escopo roda apenas no cliente (navegador) dentro de um formulário de Model-driven app.",
            "cascasDeBanana": [
                "Todos os Formulários (All Forms): Este escopo faz a regra rodar em qualquer formulário daquela tabela, mas APENAS dentro de aplicativos Model-driven.",
                "Server1: Escopos de regras de negócios não são nomeados com o nome do ambiente."
            ],
            "dicaOuro": "Canvas App + Business Rule = Escopo de Entidade (Entity Scope). Isso garante que a regra seja executada no lado do servidor do Dataverse."
        }
    },
    {
        "id": "q8_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service. Você tem uma instância de Produção e uma instância de Sandbox (área de testes).\n\nOs usuários testam o recurso de produção na instância de Sandbox. Você precisa garantir que a equipe use os mesmos dados da instância de Produção.\n\nQual função de segurança precisa ser editada para impedir o acesso à instância Sandbox? (Indique qual área do sistema e qual função devem ser configuradas, respectivamente)",
        "options": [
            "Área do Aplicativo: Dynamics 365 Sandbox instance | Função de Segurança: Licenças (Licenses)",
            "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Licenças (Licenses)",
            "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Grupos (Groups)",
            "Área do Aplicativo: Dynamics 365 Sandbox instance | Função de Segurança: Papéis/Funções (Roles)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão aborda como gerenciar quem pode entrar em instâncias (ambientes) específicos, uma prática crucial ao clonar um ambiente de Produção para Sandbox.",
            "papoReto": "Imagina que você tirou uma cópia exata do ambiente da Matriz Educação (Produção) para fazer testes (Sandbox). A cópia leva tudo, inclusive os usuários. Mas você não quer que todos os funcionários entrem no ambiente de teste por engano. Para barrar a entrada logo na 'porta do prédio' (antes mesmo de entrar no Dynamics), você cria um Grupo de Segurança lá no painel geral do Microsoft 365 e diz que só quem tá nesse grupo pode entrar no Sandbox.",
            "respostaCerta": "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Grupos (Groups)",
            "puloDoGato": "A melhor e mais recomendada forma de restringir acesso a um ambiente inteiro (instância) é atribuindo um Grupo de Segurança (Security Group) a esse ambiente através do Power Platform Admin Center (que herda os grupos do Microsoft 365 Admin Center / Microsoft Entra ID).",
            "cascasDeBanana": [
                "Dynamics 365 Sandbox instance / Roles (Funções): Remover as funções (roles) dos usuários dentro do Dynamics também impediria o acesso, mas se você acabou de clonar a Produção, teria que remover o acesso de centenas de usuários um por um. O Grupo de Segurança no Microsoft 365 corta o acesso na raiz de uma vez só."
            ],
            "dicaOuro": "Controle de acesso 'no nível da porta' do Ambiente (Environment/Instance) = Security Groups (Grupos de Segurança) configurados no Microsoft 365 / Admin Center."
        }
    },
    {
        "id": "q9_topic1",
        "text": "Você deve criar uma nova entidade (tabela) para dar suporte a um novo recurso em um aplicativo. Os registros da entidade devem ser associados a um usuário específico e seguir exatamente as regras de segurança da unidade de negócios (business unit) à qual o usuário pertence.\n\nVocê precisa configurar a segurança da entidade.\n\nQual tipo de propriedade da entidade você deve usar?",
        "options": [
            "De propriedade do usuário ou da equipe (User or team owned)",
            "De propriedade da organização (Organization-owned)",
            "Nenhuma (None)",
            "De propriedade da unidade de negócios (Business owned)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia o entendimento dos dois principais modelos de propriedade (Ownership) ao criar uma tabela no Dataverse.",
            "papoReto": "Quando você cria uma tabela nova, o sistema pergunta: 'Quem vai ser o dono desses registros?'. Se os dados são globais e todo mundo da empresa pode ver (tipo lista de CEPs ou Cidades), é 'Organização'. Agora, se os dados têm dono, como 'Minhas Tarefas' ou 'Meus Clientes', e dependem do departamento do cara (unidade de negócios), tem que ser propriedade de 'Usuário ou Equipe'.",
            "respostaCerta": "De propriedade do usuário ou da equipe (User or team owned)",
            "puloDoGato": "Sempre que a questão mencionar que a segurança precisa respeitar hierarquias de 'Business Unit' (unidade de negócios) ou falar que o registro pertence a 'um usuário específico', a tabela OBRIGATORIAMENTE deve ser criada como 'User or team owned'.",
            "cascasDeBanana": [
                "De propriedade da organização (Organization-owned): Se escolher isso, os níveis de privilégio (aquele gráfico de fatias amarelas nas funções de segurança) somem. A regra vira 'ou você tem acesso a tudo na empresa, ou não tem acesso a nada'. Não dá para restringir por departamento.",
                "De propriedade da unidade de negócios: Esse tipo de propriedade não existe na criação de tabelas. Os registros pertencem a usuários ou equipes, que por sua vez pertencem a uma Business Unit."
            ],
            "dicaOuro": "Criar tabela com segurança baseada em nível de hierarquia (Usuário > BU > Organização) = Escolher sempre Ownership: 'User or Team'."
        }
    },
    {
        "id": "q10_topic1",
        "text": "Você precisa garantir que existem leads (clientes potenciais) duplicados para um cliente antes de criar uma nova oportunidade para esse cliente.\n\nComo você pode usar a regra de detecção de duplicidades para atingir esse objetivo? Selecione as opções corretas para o Tipo de Registro Base (Base record type) e Campo do Registro Base (Base record field), respectivamente:",
        "options": [
            "Tipo de Registro Base: Lead | Campo do Registro Base: Originating Lead",
            "Tipo de Registro Base: Opportunity | Campo do Registro Base: Account",
            "Tipo de Registro Base: Opportunity | Campo do Registro Base: Topic",
            "Tipo de Registro Base: Account | Campo do Registro Base: Originating Lead"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre como configurar regras de detecção de duplicidades (Duplicate Detection Rules) no Dataverse quando cruzamos dados de tabelas diferentes.",
            "papoReto": "Você está na tela para criar uma Oportunidade. Antes de salvar, você quer que o sistema grite: 'Ei, já existe uma oportunidade aberta para esse Cliente (Account)!'. Para o sistema fazer isso, a tabela que está sendo criada agora (Base) é a Oportunidade. E o campo que vai ser checado para ver se bate com outra Oportunidade já existente é o campo do Cliente (Account).",
            "respostaCerta": "Tipo de Registro Base: Opportunity | Campo do Registro Base: Account",
            "puloDoGato": "A regra de detecção de duplicidades sempre parte do 'Base record type' (o registro que você está criando ou editando no momento). Como o objetivo final é 'criar uma nova oportunidade', a base é a Opportunity. A checagem será feita se já existe outra oportunidade com o mesmo 'Account' (Cliente/Conta).",
            "cascasDeBanana": [
                "Tipo de Registro Base: Lead: A questão diz 'antes de criar uma nova *oportunidade*'. A ação de criação acontece na tabela Oportunidade, não no Lead.",
                "Campo do Registro Base: Topic: O tópico (nome da oportunidade) pode ser parecido, mas o enunciado foca em garantir que não haja duplicidade 'para um cliente' (Account), então o campo a ser validado é a Conta (Account)."
            ],
            "dicaOuro": "'Base Record Type' é sempre a tabela onde o usuário está ativamente tentando salvar/criar o dado no momento."
        }
    },
    {
        "id": "q11_topic1",
        "text": "Você tem dois ambientes (environments) da Microsoft Power Platform.\n\nOs usuários de um ambiente não devem ser capazes de ver o outro ambiente.\nVocê precisa conceder aos vendedores acesso ao ambiente da empresa de vendas.\n\nO que você deve fazer?",
        "options": [
            "Adicionar os vendedores a um grupo de segurança do Office 365 (Office 365 security group).",
            "Adicionar os vendedores a um direito de acesso (security role).",
            "Definir privilégios (Set privileges).",
            "Definir a segurança do aplicativo (Set app security)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda o controle de acesso no nível mais alto da arquitetura: o Ambiente (Environment).",
            "papoReto": "Se você tem dois 'prédios' (ambientes) e quer que o vendedor só tenha a chave da porta da frente do prédio de vendas e nem saiba que o outro prédio existe, você configura isso lá no painel geral de TI. Você cria um Grupo de Segurança no Office 365/Microsoft Entra, atrela esse grupo ao ambiente de Vendas, e coloca os vendedores lá dentro.",
            "respostaCerta": "Adicionar os vendedores a um grupo de segurança do Office 365.",
            "puloDoGato": "Restringir acesso a um *Ambiente* inteiro é feito vinculando o Ambiente a um Grupo de Segurança (Security Group) do Microsoft 365. Os 'Security roles' (Direitos de acesso) controlam o que o usuário faz *depois* que ele já conseguiu entrar no ambiente.",
            "cascasDeBanana": [
                "Adicionar a um direito de acesso (security role): Isso dita se ele pode ler/escrever registros *dentro* do ambiente, mas não bloqueia a visibilidade do ambiente na lista do admin center.",
                "Definir a segurança do aplicativo: Isso controla quem vê um aplicativo específico (como o app de Vendas), mas o usuário ainda conseguiria acessar o ambiente e ver outros apps."
            ],
            "dicaOuro": "Controle de acesso a AMBIENTES inteiros = Security Groups (Grupos de Segurança do M365). Controle de acesso a TABELAS/DADOS = Security Roles (Direitos de Acesso)."
        }
    },
    {
        "id": "q12_topic1",
        "text": "Uma clínica veterinária planeja usar a Power Platform para otimizar as experiências dos clientes. O cliente cria um aplicativo para gerenciar consultas.\n\nNo formulário de consulta de clientes, há um campo suspenso (dropdown) para os clientes selecionarem o tipo de animal de estimação. Se um cliente selecionar a opção 'Outro' (Other), o veterinário deseja que um campo de texto apareça para que detalhes adicionais possam ser adicionados.\n\nVocê precisa criar um campo dinamicamente visível.\n\nO que você deve configurar?",
        "options": [
            "Fluxo de trabalho (Workflow)",
            "Fluxo de processo empresarial (Business process flow)",
            "Regra de negócios (Business rule)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão clássica sobre automação de interface de usuário (UI) sem usar código no Dataverse.",
            "papoReto": "Se você precisa que um campo apareça ou suma da tela dependendo do que o usuário respondeu na pergunta anterior (Ex: escolheu 'Outro', abre a caixa de texto 'Qual?'), a ferramenta nativa para brincar de 'esconde-esconde' com os campos no formulário é a Regra de Negócios.",
            "respostaCerta": "Regra de negócios (Business rule)",
            "puloDoGato": "Atenção a um detalhe: na prova original em inglês, o texto diz que o cliente criou um 'canvas app', o que é um ERRO de digitação frequente nas provas da Microsoft. Visibilidade em Canvas App é feita por fórmulas. Mas, pelas opções fornecidas, eles estão claramente testando o conceito de formulários Model-driven/Dataverse, onde a resposta exata para 'visibilidade dinâmica' é Business Rule.",
            "cascasDeBanana": [
                "Fluxo de trabalho (Workflow): Roda no servidor ('no fundo') para processar dados (como enviar e-mails), não altera a interface da tela em tempo real para o usuário.",
                "Fluxo de processo empresarial (BPF): É a barra de progresso em etapas no topo da tela (ex: Triagem > Consulta > Exame). Não serve para ocultar/mostrar campos dinamicamente no meio do formulário."
            ],
            "dicaOuro": "Ocultar/Mostrar campos, Tornar campo Obrigatório, ou Mostrar Erro de Validação direto no formulário = Business Rule (Regras de Negócios)."
        }
    },
    {
        "id": "q13_topic1",
        "text": "Você cria um aplicativo para a equipe de vendas de uma empresa.\n\nOs membros da equipe de vendas não conseguem acessar o aplicativo.\nVocê precisa garantir que os membros da equipe de vendas possam acessar o aplicativo.\n\nOnde você deve configurar as permissões do aplicativo?",
        "options": [
            "Centro de administração do Dynamics (Dynamics administration center)",
            "Gerenciar Funções (Manage Roles)",
            "Funções de Segurança (Security Roles)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão trata do compartilhamento e da visibilidade de aplicativos orientados por modelo (Model-driven apps).",
            "papoReto": "Você construiu um app excelente e os vendedores dizem que o ícone dele não aparece. O que faltou? Você precisa ir nas opções do Aplicativo que você criou, clicar nele e usar a opção de associar o app às funções (roles) que a galera de vendas tem. O nome clássico desse botão na interface do Power Apps para definir quem vê o app é 'Manage Roles'.",
            "respostaCerta": "Gerenciar Funções (Manage Roles)",
            "puloDoGato": "Embora os usuários precisem de um 'Security Role' (Direito de Acesso) para ler e escrever os dados, a ação específica de VINCULAR o aplicativo a essa função para que o app apareça na lista do usuário é feita selecionando o App e clicando em 'Manage Roles' (Gerenciar Funções ou Compartilhar).",
            "cascasDeBanana": [
                "Funções de Segurança (Security Roles): É lá que você cria e define as permissões (ex: Vendedor tem acesso de leitura de contatos). Mas a pergunta foca em 'onde configurar as permissões DO APLICATIVO', ou seja, amarrar o app à função já criada.",
                "Centro de administração do Dynamics: Você não gerencia o compartilhamento de um aplicativo específico no centro de administração global."
            ],
            "dicaOuro": "Para um usuário ver um Model-Driven App, ele precisa de duas coisas: 1) Acesso aos dados (Security Role) e 2) O App precisa estar associado a essa função de segurança (via 'Manage Roles' / 'Share')."
        }
    },
    {
        "id": "q14_topic1",
        "text": "Você cria uma entidade (tabela) pai e uma entidade filha. A entidade pai tem um relacionamento 1:N (Um para Muitos) com a entidade filha.\n\nVocê precisa garantir que, quando o proprietário (owner) mudar no registro pai, todos os registros filhos sejam atribuídos ao novo proprietário automaticamente. Você precisa configurar o tipo de comportamento do relacionamento (relationship behavior type).\n\nO que você deve usar?",
        "options": [
            "Referencial (Referential)",
            "Referencial, Restringir Exclusão (Referential, Restrict Delete)",
            "Parental",
            "Personalizado (Custom)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre Comportamento de Relacionamento (Relationship Behaviors) entre tabelas no Dataverse.",
            "papoReto": "Imagina que você tem a tabela 'Conta' (pai) e 'Contatos' (filhos). Se o vendedor João for demitido e você passar a conta da 'Matriz Educação' para a vendedora Maria, você quer que todos os contatos vinculados a essa conta também passem a ser da Maria automaticamente. Esse comportamento de 'passar adiante em cascata' (cascading) é a marca registrada do relacionamento 'Parental'.",
            "respostaCerta": "Parental",
            "puloDoGato": "O comportamento 'Parental' significa dependência total. Qualquer ação feita no registro pai (Atribuir a outro dono, Compartilhar, Repassar, Excluir) desce em cascata (cascade) e é aplicada automaticamente a todos os registros filhos.",
            "cascasDeBanana": [
                "Referencial: Significa que as tabelas apenas estão ligadas, mas são independentes. Se mudar o dono do pai, não muda o do filho.",
                "Referencial, Restringir Exclusão: Impede que o registro pai seja apagado se houver filhos vinculados a ele, mas não transfere a propriedade (owner) em cascata."
            ],
            "dicaOuro": "Ação no Pai = Ação automática no Filho? A resposta é sempre 'Parental' (ou 'Cascata Tudo' em regras customizadas)."
        }
    },
    {
        "id": "q15_topic1",
        "text": "Você precisa atribuir funções (roles) aos usuários para executar tarefas de administração. A solução deve usar o princípio do menor privilégio (least privilege).\n\nQual função você deve atribuir para as seguintes tarefas, respectivamente:\n1. Criar novos usuários.\n2. Atribuir direitos de acesso (roles) aos usuários dentro do Dynamics.\n3. Realizar backups de uma instância.",
        "options": [
            "1. Office 365 global administrator | 2. Dynamics 365 system administrator | 3. Dynamics 365 service administrator",
            "1. Dynamics 365 system administrator | 2. Office 365 global administrator | 3. Dynamics 365 service administrator",
            "1. Office 365 service administrator | 2. Dynamics 365 system administrator | 3. Office 365 global administrator",
            "1. Office 365 global administrator | 2. Dynamics 365 service administrator | 3. Dynamics 365 system administrator"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão essencial sobre a separação dos papéis de administração no ecossistema Microsoft (Microsoft 365 vs Dynamics 365 / Power Platform).",
            "papoReto": "A criação de contas de usuário (pagar licença, criar e-mail, gerar senha) é responsabilidade do TI geral, lá no portal do Office 365. Agora, dizer que esse usuário novo é um 'Vendedor' dentro do Dynamics, é responsabilidade do Administrador do Sistema do próprio Dynamics. E quem faz o backup do sistema sem precisar ter acesso aos dados comerciais ou de TI? O Administrador de Serviço (Service Administrator).",
            "respostaCerta": "1. Office 365 global administrator | 2. Dynamics 365 system administrator | 3. Dynamics 365 service administrator",
            "puloDoGato": "'Criar usuário' sempre acontece FORA do Dynamics (no Microsoft Entra ID / Microsoft 365 Admin Center). Já 'Atribuir funções de segurança' (Security Roles) acontece DENTRO do Dynamics (Power Platform Admin Center / Ambiente).",
            "cascasDeBanana": [
                "Achar que o Administrador do Sistema (System Admin) do Dynamics pode criar o usuário. Ele não pode! Ele só enxerga o usuário no Dynamics DEPOIS que o TI criou a conta e atribuiu a licença no Office 365."
            ],
            "dicaOuro": "Criação de conta e licenciamento = Office 365 Admin. Permissões dentro do App/Banco de dados = Dynamics System Admin."
        }
    },
    {
        "id": "q16_topic1",
        "text": "Você está projetando um aplicativo para um banco. Você deve criar entidades (tabelas) e configurar os relacionamentos entre elas. Selecione os tipos de relacionamento corretos para os seguintes requisitos na ordem:\n\n1. A coluna de e-mail do 'Solicitante do Empréstimo' deve ser um campo de pesquisa (lookup) para buscar o Contato.\n2. Os solicitantes podem ter mais de um pedido de empréstimo (Loan) ativo ao mesmo tempo.\n3. O pedido de empréstimo (Loan) deve ser aplicado para uma única propriedade (Imóvel).",
        "options": [
            "1. N:1 | 2. 1:N | 3. N:1",
            "1. 1:N | 2. N:N | 3. 1:N",
            "1. N:1 | 2. N:N | 3. 1:1",
            "1. 1:1 | 2. 1:N | 3. N:1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na modelagem de dados do Dataverse e como as regras de negócio se traduzem em relacionamentos (1:N, N:1, N:N).",
            "papoReto": "- Requisito 1: Um campo de 'Pesquisa' (Lookup) é SEMPRE o lado 'Muitos' de um relacionamento. Muitos solicitantes podem apontar para o mesmo contato. Logo, N:1.\n- Requisito 2: Um solicitante (João) pode ter vários pedidos de empréstimos (carro, casa, viagem). Um (João) para Muitos (Empréstimos). Logo, 1:N.\n- Requisito 3: Vários pedidos de empréstimos diferentes (Muitos/N) podem ser feitos para comprar a mesma Propriedade (1). Logo, N:1.",
            "respostaCerta": "1. N:1 | 2. 1:N | 3. N:1",
            "puloDoGato": "Memorize a regra de ouro do Dataverse: Todo campo 'Lookup' (Pesquisa) criado em uma tabela A apontando para uma tabela B cria automaticamente um relacionamento N:1 (onde A é o lado 'N' e B é o lado '1'). O Requisito 1 entrega a resposta de graça por usar a palavra 'look-up'.",
            "cascasDeBanana": [
                "Achar que 'um empréstimo é para uma única propriedade' significa relacionamento 1:1. No Dataverse, relacionamentos estritos 1:1 não existem nativamente na interface (você os simula com N:1). Além disso, vários clientes diferentes poderiam tentar financiar a mesma casa, então a casa (1) pode ter vários pedidos de empréstimo (N) ao longo do tempo."
            ],
            "dicaOuro": "Sempre que a prova falar que um campo deve ser um 'Lookup', o relacionamento da tabela atual para a tabela alvo é N:1."
        }
    },
    {
        "id": "q17_topic1",
        "text": "[Série de Questões 1/3] Nota: Na prova, esta questão faz parte de uma série que apresenta o mesmo cenário. Você não poderá voltar a ela depois de responder.\n\nCenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado.\nQuando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio.\n\nSolução Proposta: Você atribui ao gerente o direito de acesso de 'Criador de Ambiente' (Environment Maker).\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta é uma típica questão de 'Série' da Microsoft, onde o cenário se repete, mas a solução proposta muda.",
            "papoReto": "O gerente só precisa *usar* o aplicativo. Se você der a ele a função de 'Criador de Ambiente', você está basicamente dando a chave da oficina inteira para quem só quer dirigir o carro. Ele vai poder criar e modificar aplicativos no ambiente, o que fere totalmente a regra do 'menor privilégio'.",
            "respostaCerta": "Não",
            "puloDoGato": "A função de 'Environment Maker' (Criador de Ambiente) concede permissões para criar recursos (aplicativos, fluxos, conexões) dentro do ambiente. Ela NÃO concede automaticamente os privilégios de leitura/escrita nos dados de negócios (tabelas) que o aplicativo consome.",
            "cascasDeBanana": [
                "Achar que 'Environment Maker' dá acesso VIP a tudo. Não dá. E mesmo que desse, daria poder excessivo, violando o requisito do menor privilégio."
            ],
            "dicaOuro": "Nas questões de 'Série', leia a solução com muito cuidado. Só responda 'Sim' quando a solução atacar exatamente o problema sem dar poderes a mais."
        }
    },
    {
        "id": "q18_topic1",
        "text": "[Série de Questões 2/3] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado.\nQuando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio.\n\nSolução Proposta: Você adiciona o gerente a um grupo de segurança (security group) que está atribuído ao ambiente.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Segunda tentativa da Microsoft de te enganar no mesmo cenário.",
            "papoReto": "Lembra da analogia do prédio? Colocar o gerente no Grupo de Segurança do Ambiente dá a ele a chave da porta da rua do prédio. Legal, ele entrou no prédio (ambiente). Mas o aplicativo é uma 'sala' trancada lá dentro. Ele ainda precisa da chave da sala e permissão para ler os papéis (dados) que estão lá.",
            "respostaCerta": "Não",
            "puloDoGato": "Apenas adicionar um usuário ao Grupo de Segurança do Ambiente garante que ele consegue *acessar o ambiente*. No entanto, para rodar um Model-driven app, ele precisa de um Direito de Acesso (Security Role) específico do Dataverse para poder ver o aplicativo e ter privilégios nas tabelas que o app usa.",
            "cascasDeBanana": [
                "Achar que Grupo de Segurança resolve tudo. O Grupo de Segurança é o controle de acesso de 'nível 1' (Ambiente). O Model-driven app exige controle de 'nível 2' (Security Role)."
            ],
            "dicaOuro": "Ambiente (Environment) usa Grupo de Segurança. Aplicativos e Dados (Apps/Data) usam Direitos de Acesso (Security Roles)."
        }
    },
    {
        "id": "q19_topic1",
        "text": "[Série de Questões 3/3] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado.\nQuando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio.\n\nSolução Proposta: Você compartilha o aplicativo com o gerente e atribui a ele um direito de acesso (security role) que está associado ao aplicativo.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A terceira e última parte da série de questões de acesso a aplicativos. Aqui temos a solução correta.",
            "papoReto": "Agora sim! Você fez exatamente o que precisava: pegou o aplicativo, compartilhou com o gerente e deu a ele um 'crachá' (Direito de Acesso) que permite usar aquele app e ver os dados certinhos. Sem superpoderes de criador, apenas o necessário.",
            "respostaCerta": "Sim",
            "puloDoGato": "Para um usuário comum usar um aplicativo orientado por modelo, são necessários dois passos fundamentais dentro do ambiente: 1. Compartilhar (Share) o aplicativo ou associar o app à função do usuário. 2. Atribuir ao usuário o Direito de Acesso (Security Role) correspondente que dá privilégios às tabelas.",
            "cascasDeBanana": [],
            "dicaOuro": "Compartilhar App + Atribuir Security Role = Receita do sucesso para acesso a Model-driven apps no Dataverse."
        }
    },
    {
        "id": "q20_topic1",
        "text": "Você precisa criar um gráfico para a tabela 'Conta' (Account).\nO gráfico deve exibir uma contagem de contas agrupadas por Proprietário (Owner) e, em seguida, exibir as contas por 'Estado/Província' (Address 1: State/Province) para cada proprietário.\n\nComo você deve configurar as opções do gráfico? Selecione a combinação correta (Série/Campo | Série/Agregação | 1º Agrupamento | 2º Agrupamento):",
        "options": [
            "Série: Conta (Account) | Agregação: Count:All | 1º Agrupamento: Proprietário (Owner) | 2º Agrupamento: Estado/Província",
            "Série: Proprietário (Owner) | Agregação: Count:All | 1º Agrupamento: Conta (Account) | 2º Agrupamento: Estado/Província",
            "Série: Conta (Account) | Agregação: Soma (Sum) | 1º Agrupamento: Estado/Província | 2º Agrupamento: Proprietário (Owner)",
            "Série: Proprietário (Owner) | Agregação: Count:All | 1º Agrupamento: Estado/Província | 2º Agrupamento: Conta (Account)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa questão exige que você saiba traduzir um requisito de negócio em configurações de Gráfico (Chart) nativo do Dynamics 365 / Dataverse.",
            "papoReto": "Vamos fatiar a frase do problema: \n'Exibir uma contagem de contas': O que estou medindo? Contas. Como estou medindo? Contando. Então a 'Série' (Legend Entries) é 'Account' e a agregação é 'Count'.\n'Agrupadas por Proprietário': O eixo principal (Horizontal Axis) é o Proprietário. Esse é o 1º Agrupamento.\n'E em seguida exibir por Estado': O eixo secundário (subcategoria) é o Estado. Esse é o 2º Agrupamento.",
            "respostaCerta": "Série: Conta (Account) | Agregação: Count:All | 1º Agrupamento: Proprietário (Owner) | 2º Agrupamento: Estado/Província",
            "puloDoGato": "Nos gráficos do Dataverse:\n- Entradas de Legenda / Séries (Legend Entries/Series) = O valor numérico que você está calculando (Soma, Contagem, Média).\n- Rótulos do Eixo Horizontal / Categoria (Horizontal Axis Labels) = Como você está separando as barras do gráfico (Por Vendedor, Por Mês, Por Cidade).",
            "cascasDeBanana": [
                "Inverter Série e Agrupamento: Você não pode usar 'Proprietário' como Série com agregação 'Count:All' neste contexto se o requisito pede a contagem de CONTAS.",
                "Usar 'Soma' (Sum): Você não consegue somar um registro de conta (texto/ID), você só pode CONTAR contas (Count)."
            ],
            "dicaOuro": "Identifique primeiro o 'O QUÊ' vai ser contado ou somado. Isso é a sua Série. O 'POR QUEM' ou 'POR ONDE' são os seus Agrupamentos (Categorias)."
        }
    },
    {
        "id": "q21_topic1",
        "text": "Uma empresa tenciona utilizar uma base de dados do Common Data Service (Dataverse) já existente. Você precisa de garantir que o utilizador consiga criar aplicativos de tela (canvas apps) que consumam dados do Dataverse.\n\nVocê não deve conceder mais permissões do que as estritamente necessárias (princípio do menor privilégio).\n\nQual direito de acesso (security role) padrão (out-of-the-box) deve atribuir ao utilizador?",
        "options": [
            "Administrador de Ambiente (Environment Admin)",
            "Personalizador de Sistema (System Customizer)",
            "Utilizador do Common Data Service (Common Data Service User / Basic User)",
            "Criador de Ambiente (Environment Maker)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão foca na delegação de permissões de construção (maker) sem dar acesso excessivo aos dados ou configurações globais.",
            "papoReto": "Se o colaborador só precisa de 'desenhar' os ecrãs do aplicativo (Canvas App) e ligá-los aos dados, ele é apenas um construtor. Não precisa de ser o dono da base de dados nem administrar tudo. O papel 'Criador de Ambiente' dá a ele a caixa de ferramentas para criar Apps e Fluxos, mas mantém a base de dados segura.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A função de 'Environment Maker' permite aos utilizadores criar recursos no ambiente (como Canvas Apps, fluxos do Power Automate e conexões), mas NÃO lhes dá privilégios automáticos para aceder ou alterar a estrutura das tabelas do Dataverse. É a opção exata para o menor privilégio ao criar apps.",
            "cascasDeBanana": [
                "Personalizador de Sistema (System Customizer): Dá poder para alterar a estrutura das tabelas e aceder a todos os dados personalizados. É demasiado poder para quem só precisa criar Canvas Apps.",
                "Utilizador do Common Data Service (agora Basic User): Permite ler e escrever dados nas tabelas para usar o app, mas NÃO permite criar os aplicativos."
            ],
            "dicaOuro": "Criar Canvas Apps / Fluxos sem aceder a tudo = Environment Maker. Alterar tabelas do Dataverse = System Customizer."
        }
    },
    {
        "id": "q22_topic1",
        "text": "Uma empresa implementa vários aplicativos orientados por modelo (model-driven apps) em dispositivos partilhados no armazém. Os dispositivos estão sempre ligados.\n\nUm utilizador afastou-se recentemente de um dispositivo sem terminar a sessão e outro utilizador acedeu à sua conta. Além disso, a empresa quer impedir o upload de ficheiros com extensões perigosas.\nVocê precisa de configurar a solução para evitar estes incidentes de segurança.\n\nSelecione as ações corretas para cada requisito, respetivamente:\n1. Prevenir acesso não autorizado aos dispositivos deixados ligados.\n2. Prevenir que os utilizadores façam upload de um tipo específico de ficheiro.",
        "options": [
            "1. Configurar controlos de acesso no Azure Active Directory | 2. Inserir os tipos de ficheiro restritos no SharePoint admin center",
            "1. Definir um limite de inatividade (timeout) no Power Platform admin center | 2. Inserir os tipos de ficheiro restritos no Power Platform admin center",
            "1. Definir um limite de inatividade na política de grupo (group policy) do utilizador | 2. Inserir os tipos de ficheiro permitidos no Power Platform admin center",
            "1. Configurar um fluxo do Power Automate para verificar inatividade | 2. Inserir os tipos de ficheiro restritos no SharePoint admin center"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão lida com configurações de segurança a nível de Ambiente no Power Platform Admin Center (PPAC).",
            "papoReto": "Colega esqueceu-se do PC ligado no armazém? A sessão dele tem que cair sozinha depois de X minutos (Timeout de Sessão). Pessoal anda a anexar vírus (.exe) no sistema? Tem que se bloquear essa extensão. E o melhor de tudo: você configura ambas as coisas no mesmo lugar: o Power Platform Admin Center.",
            "respostaCerta": "1. Definir um limite de inatividade no Power Platform Admin Center | 2. Inserir os tipos de ficheiro restritos no Power Platform Admin Center",
            "puloDoGato": "A funcionalidade de 'Session Timeout' (Tempo limite de sessão) encerra automaticamente a sessão do utilizador após um período de inatividade. O bloqueio de extensões de anexos (Block specific file extensions) impede uploads indesejados. Ambas são Definições de Ambiente (Environment Settings) configuradas diretamente no PPAC.",
            "cascasDeBanana": [
                "Usar Azure AD ou Políticas de Grupo do Windows: O requisito foca na segurança da solução Dynamics/Power Platform, logo a configuração nativa do PPAC (Session timeout) é a abordagem correta e direta da prova.",
                "SharePoint admin center: Embora o SharePoint possa armazenar documentos, a restrição de anexos na interface do Dataverse/Model-driven é gerida no centro de administração da Power Platform."
            ],
            "dicaOuro": "Sessões esquecidas (Timeout) e Anexos proibidos (Blocked extensions) = Resolve-se nas 'Definições do Ambiente' (Environment Settings) no Power Platform Admin Center."
        }
    },
    {
        "id": "q23_topic1",
        "text": "A equipa de vendas de uma empresa quer uma forma simplificada de gerir as oportunidades no Dynamics 365 Sales, sem adicionar código personalizado.\nVocê tem de fornecer uma solução para cada requisito.\n\nQuais soluções deve fornecer na seguinte ordem?\n1. Arrastar e soltar (drag and drop) oportunidades para mudar de fase.\n2. Mostrar a cada vendedor as suas oportunidades na vista de Calendário e Kanban.\n3. Mostrar o número de oportunidades abertas por fase numa vista padrão.",
        "options": [
            "1. Adicionar o controlo Kanban | 2. Adicionar ambos os controlos (Calendário e Kanban) à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos (chart pane) na vista",
            "1. Adicionar a Linha do Tempo (Timeline) | 2. Adicionar os controlos a uma vista customizada | 3. Utilizar a vista de Lista",
            "1. Adicionar o controlo Kanban | 2. Adicionar um controlo em 'Todas as Oportunidades' e outro numa vista customizada | 3. Utilizar o controlo Editable Grid",
            "1. Adicionar Grelha Editável (Editable Grid) | 2. Adicionar ambos os controlos à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão sobre como melhorar a interface e a experiência de utilizador (UX) com controlos visuais out-of-the-box (nativos).",
            "papoReto": "Se os vendedores querem arrastar os 'cartões' de oportunidades pelas colunas (fases) tal como se faz no Trello, isso chama-se 'Kanban'. Se eles querem que isso apareça só para as oportunidades deles, adicionamos esses controlos visuais (Kanban e Calendário) diretamente na vista 'As Minhas Oportunidades'. E para ver gráficos rápidos de quantas vendas estão em cada fase? Basta abrir a gaveta de gráficos (Chart pane) que já vem colada ao lado da lista.",
            "respostaCerta": "1. Adicionar o controlo Kanban | 2. Adicionar ambos os controlos (Calendário e Kanban) à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos (chart pane) na vista",
            "puloDoGato": "O controlo Kanban no Dynamics 365 permite a funcionalidade de arrastar e soltar (Drag and Drop) baseada no Fluxo de Processo Empresarial (BPF) ou no Status da Oportunidade. Ao configurar controlos, podemos adicioná-los a vistas específicas (como 'My Opportunities') em vez de a todas as vistas.",
            "cascasDeBanana": [
                "Editable Grid (Grelha Editável): Permite editar campos rapidamente como no Excel, mas NÃO permite 'arrastar e soltar' entre colunas/fases.",
                "Timeline (Linha de Tempo): Serve para registar e-mails, tarefas e notas cronologicamente, não para gerir as fases das oportunidades."
            ],
            "dicaOuro": "Arrastar e soltar (Drag and Drop) oportunidades = Controlo Kanban. Ver dados resumidos em barras/pizza sem sair da lista = Chart Pane (Painel de Gráficos)."
        }
    },
    {
        "id": "q24_topic1",
        "text": "[Série de Questões] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) para rastrear interações com clientes.\nUma utilizadora chamada Elisabeth Rice entra no aplicativo usando o nome de login: Elisabeth.Rice@contoso.com.\nApós casar, a Elisabeth muda o seu nome legal para Elisabeth Mueller. Você precisa de atualizar o nome de login da utilizadora sem perder nenhum histórico do aplicativo.\n\nSolução Proposta: Nas Configurações do Dynamics 365, selecione 'Configuração de Email' (Email Configuration). Na caixa de correio ativa da utilizadora, atualize o nome.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre gestão de identidade de utilizadores no ecossistema da Power Platform.",
            "papoReto": "Mudar o nome de login de uma pessoa é um assunto para a equipa de TI resolver lá no 'RH' do sistema (o portal do Microsoft 365 / Microsoft Entra ID). Tentar mudar isso nas configurações de envio de e-mail do Dynamics não vai alterar em nada o login dela para entrar no sistema.",
            "respostaCerta": "Não",
            "puloDoGato": "Todos os utilizadores do Dataverse/Dynamics são geridos de forma centralizada pelo Microsoft Entra ID (antigo Azure AD). Para alterar o UPN (User Principal Name / nome de login), o administrador deve ir ao Microsoft 365 Admin Center, alterar lá, e o Dataverse sincronizará essa alteração mantendo todo o histórico da Elisabeth intacto.",
            "cascasDeBanana": [
                "Achar que alterar o nome na 'Caixa de Correio' (Mailbox) afeta o login. A configuração de e-mail serve apenas para permitir que o Dynamics envie/receba e-mails em nome dela usando a sincronização do servidor, não gere a identidade ou o login de acesso."
            ],
            "dicaOuro": "Sempre que a questão pedir para alterar Identidade, Login ou Senha, a resposta correta DEVE envolver o Microsoft 365 Admin Center ou o Microsoft Entra ID."
        }
    },
    {
        "id": "q25_topic1",
        "text": "Você planeia implementar o Microsoft Dataverse. Você deve rastrear as alterações feitas a duas colunas específicas na tabela Conta (Account).\n\nVocê tem de manter um log histórico destas alterações e rastrear APENAS o necessário. Você já ativou as definições globais de auditoria da organização.\nVocê precisa de configurar o sistema para rastrear estas duas colunas.\n\nQual combinação de ações deve executar?",
        "options": [
            "1. Ativar o controle de alterações (change tracking) para a tabela Conta E 2. Ativar a auditoria (auditing) para as colunas.",
            "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar a auditoria para as duas colunas específicas.",
            "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar o controle de alterações (change tracking) para as colunas.",
            "1. Ativar o controle de alterações (change tracking) para a tabela Conta E 2. Para as colunas específicas."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa a diferença crucial entre 'Auditing' (Auditoria) e 'Change Tracking' (Controlo de Alterações) no Dataverse.",
            "papoReto": "Quer saber 'quem mudou o campo Telefone, a que horas, e qual era o número antigo'? O nome disso é Auditoria (Auditing). Para ela funcionar nestas duas colunas, o sistema é como um quadro elétrico: você liga o disjuntor da casa (já ligado na organização), depois liga o disjuntor da sala (ativar na Tabela Conta) e, por fim, liga as tomadas (ativar nas Colunas).",
            "respostaCerta": "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar a auditoria para as duas colunas específicas.",
            "puloDoGato": "A Auditoria de Tabela é um pré-requisito obrigatório para a Auditoria de Coluna. Se não ligar na Tabela, o Dataverse ignora a configuração da coluna. 'Change Tracking' (Controlo de alterações) é uma configuração totalmente diferente, usada apenas nos bastidores para exportar/sincronizar dados para fora do Dataverse (ex: Azure Synapse), e não mantém o histórico detalhado visualizável por coluna para os utilizadores.",
            "cascasDeBanana": [
                "Confundir Auditing com Change Tracking. A prova faz isso de propósito. Falou em 'manter um log histórico' (ver o que mudou na interface) = Auditing.",
                "Achar que o Change Tracking pode ser ativado ao nível da coluna. O Change Tracking só é ativado ao nível da Tabela inteira."
            ],
            "dicaOuro": "Manter histórico de alterações legível = Auditing. Sincronizar dados com um armazém de dados externo = Change Tracking."
        }
    },
    {
        "id": "q26_topic1",
        "text": "[Série de Questões] Cenário: Num registo de Contato, um utilizador cria um registo de Anotação (Note) que contém a palavra 'running' (a correr).\nUma semana depois, o utilizador relata que não consegue encontrar o Contato associado àquela Anotação.\nVocê precisa de encontrar a anotação.\n\nSolução Proposta: Usar a Pesquisa Categorizada (Categorized Search) para pesquisar pela palavra 'run'.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda as diferenças entre os mecanismos de pesquisa disponíveis no Dataverse (Categorized Search vs Dataverse Search/Relevance Search).",
            "papoReto": "A 'Pesquisa Categorizada' é 'quadrada': se o utilizador digitou a palavra exata 'run', ela vai procurar exatamente 'run'. Ela não é inteligente o suficiente para perceber que 'run' e 'running' vêm da mesma raiz de palavra. Como a anotação tem 'running', pesquisar por 'run' usando este tipo de pesquisa vai falhar redondamente.",
            "respostaCerta": "Não",
            "puloDoGato": "Para que a pesquisa compreenda conjugações ou radicais de palavras (lemmatization/stemming) como 'run' para achar 'running', ou para pesquisar eficientemente dentro de Anexos/Anotações (Notes), a funcionalidade correta e moderna a ser ativada e usada é a Pesquisa do Dataverse (Dataverse Search - antigamente chamada de Relevance Search).",
            "cascasDeBanana": [
                "Achar que a Pesquisa Categorizada usa inteligência artificial. Ela usa apenas correspondências de prefixos simples do SQL (ex: buscar por 'run*' com um asterisco até funcionaria, mas não foi isso que a solução propôs)."
            ],
            "dicaOuro": "Pesquisa que entende conjugações verbais (running = run) e que pesquisa dentro de documentos PDF anexados = Dataverse Search (Pesquisa do Dataverse). Pesquisa Categorizada NÃO faz isso."
        }
    },
    {
        "id": "q27_topic1",
        "text": "[Série de Questões] Cenário: Num registo de Contacto, um utilizador cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contacto associado àquela Anotação. Ele precisa de encontrar a Anotação.\n\nSolução Proposta: Usar a Pesquisa de Relevância (Relevance Search / Dataverse Search) para pesquisar pela palavra 'run'.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Continuação da série sobre os mecanismos de pesquisa no Dataverse. Desta vez, com a ferramenta correta!",
            "papoReto": "Lembra-se da questão 26? A Pesquisa de Relevância (agora chamada Pesquisa do Dataverse) é a pesquisa inteligente da plataforma. Se digitar 'run', ela sabe perfeitamente que 'running' é da mesma família de palavras (flexão verbal) e vai trazer-lhe a anotação que procura.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Relevance Search (Dataverse Search) possui inteligência baseada no Azure Cognitive Search. Ela aplica o conceito de 'lemmatization' (lematização), o que significa que pesquisar por palavras na sua forma base (run) traz resultados com as suas flexões (running, ran). Além disso, ela pesquisa dentro de anexos e anotações nativamente.",
            "cascasDeBanana": [],
            "dicaOuro": "Pesquisa inteligente que entende raízes de palavras e pesquisa dentro de ficheiros e anexos = Relevance Search / Dataverse Search."
        }
    },
    {
        "id": "q28_topic1",
        "text": "[Série de Questões] Cenário: Num registo de Contacto, um utilizador cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contacto associado àquela Anotação. Ele precisa de encontrar a Anotação.\n\nSolução Proposta: Usar a Localização Rápida (Quick Find) na lista de Anotações para pesquisar pela palavra 'run'.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mais uma da série de pesquisas. Agora tentando usar a Localização Rápida (Quick Find).",
            "papoReto": "A Localização Rápida é aquela barra de pesquisa que fica no canto superior direito de uma lista (view). Tal como a Pesquisa Categorizada, ela é 'quadrada' e literal. Se procurar por 'run', ela vai procurar a palavra exata (ou palavras começadas por 'run' se usar um asterisco). Ela não tem a inteligência de associar a 'running'.",
            "respostaCerta": "Não",
            "puloDoGato": "O Quick Find (Localização Rápida) baseia-se em consultas SQL diretas na base de dados. Ele requer correspondência exata ou a utilização de curingas (*), mas não tem inteligência linguística e semântica para associar radicais de palavras.",
            "cascasDeBanana": [
                "Achar que o Quick Find é inteligente o suficiente. Lembre-se: a inteligência textual e linguística existe apenas na Relevance Search (Dataverse Search)."
            ],
            "dicaOuro": "Quick Find e Categorized Search = Pesquisa literal/exata. Relevance Search = Pesquisa inteligente/semântica."
        }
    },
    {
        "id": "q29_topic1",
        "text": "Você está a implementar um aplicativo orientado por modelo (model-driven app) e precisa de aplicar lógica de negócios em vários locais sem escrever código personalizado.\n\nSelecione o método correto para cada requisito, respetivamente:\n1. Tornar um campo só de leitura (read-only) até que um valor pré-determinado seja excedido.\n2. Enviar um e-mail automaticamente quando o status de um registo for alterado para desativado.\n3. Usar o valor anterior (previous value) de um campo quando o valor for automaticamente atualizado.",
        "options": [
            "1. Fluxo de Trabalho (Workflow) | 2. Regra de Negócios (Business Rule) | 3. Regra de Negócios",
            "1. Regra de Negócios | 2. Fluxo de Trabalho em Tempo Real (Real-time workflow) | 3. Fluxo de Trabalho em Tempo Real",
            "1. Regra de Negócios | 2. Fluxo Instantâneo (Instant flow) | 3. Fluxo de Trabalho em Tempo Real",
            "1. Fluxo Instantâneo | 2. Regra de Negócios | 3. Fluxo Instantâneo"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma excelente questão para diferenciar as várias ferramentas de automação low-code/no-code disponíveis no Dataverse.",
            "papoReto": "Tornar um campo só de leitura no ecrã é trabalho exclusivo para a Regra de Negócios (Business Rule). Mandar um e-mail automaticamente quando o status muda é automação de backend (Real-time Workflow). E para conseguir ver 'qual era o valor antes da alteração' (o famoso 'before and after'), apenas os Workflows clássicos em tempo real conseguem capturar com facilidade essa imagem antes de se gravar na base de dados.",
            "respostaCerta": "1. Regra de Negócios | 2. Fluxo de Trabalho em Tempo Real | 3. Fluxo de Trabalho em Tempo Real",
            "puloDoGato": "Regras de negócios controlam o comportamento da Interface de Utilizador (formulário). Os Workflows em tempo real operam de forma síncrona (no servidor) e conseguem capturar o estado exato dos dados ('pre-image') antes da transação ser confirmada na base de dados, o que responde perfeitamente ao requisito 3 de usar o valor 'anterior'.",
            "cascasDeBanana": [
                "Power Automate Instant Flow (Fluxo Instantâneo): Este fluxo é disparado manualmente (quando alguém clica ativamente num botão). Não serve para automatizar uma reação em segundo plano imediata a uma mudança de status."
            ],
            "dicaOuro": "Ações no ecrã/formulário (Ocultar, Bloquear, Tornar Obrigatório) = Business Rule. Capturar o 'valor anterior' do campo numa automação síncrona = Real-time Workflow."
        }
    },
    {
        "id": "q30_topic1",
        "text": "A sua organização não permite o uso de código personalizado para soluções.\nVocê precisa de criar uma visualização (view) que possa ser vista por todos os utilizadores na organização.\n\nOnde deve criar a visualização?",
        "options": [
            "Localização Avançada (Advanced Find)",
            "No componente de Entidades dentro de uma Solução (Entities component of a solution)",
            "Modelo do Microsoft Excel (Microsoft Excel template)",
            "Área de Modelos (Templates area)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão é uma variação exata da Questão 2 deste simulador, mas com opções de resposta ligeiramente diferentes. A Microsoft adora fazer isto!",
            "papoReto": "Se a visualização é para *todos*, é uma Visualização Pública (Public View). Onde é que construímos e guardamos as coisas para a empresa inteira usar de forma consolidada e estruturada? Dentro de uma Solução, acedendo à secção de Tabelas/Entidades. Nada de criar visualizações pessoais isoladas.",
            "respostaCerta": "No componente de Entidades dentro de uma Solução (Entities component of a solution)",
            "puloDoGato": "Para criar componentes globais sem usar código, deve criar ou editar a Tabela (Entidade) diretamente nas configurações do sistema ou através de uma Solução no portal do criador (make.powerapps.com). Nas opções dadas, 'Componente de Entidades dentro de uma solução' é a única resposta que descreve a customização oficial da arquitetura do sistema.",
            "cascasDeBanana": [
                "Localização Avançada (Advanced Find): Permite criar visualizações *pessoais*. Para partilhar com toda a empresa daria imenso trabalho (teria que partilhar a view manualmente com cada equipa/utilizador) e não faria parte da customização base do sistema (Solution)."
            ],
            "dicaOuro": "Visualizações para 'todos os utilizadores' (Public Views) devem ser sempre criadas através de uma Solução no componente da Entidade (Tabela)."
        }
    },
    {
        "id": "q31_topic1",
        "text": "Você desenvolve um aplicativo Power Apps (model-driven).\nOs utilizadores relatam que o formulário principal não exibe dados de outras entidades (tabelas) nem lhes permite editar dados de outras entidades.\nVocê precisa de incorporar (embed) informações de outras entidades no formulário e permitir que os utilizadores editem os dados.\n\nQuais ações deve executar? Selecione a opção correta para cada requisito na ordem:\n1. Editar dados (Edit data).\n2. Visualizar dados (View data).",
        "options": [
            "1. Adicionar uma subgrelha (sub-grid) | 2. Adicionar um painel de referência (reference panel)",
            "1. Adicionar um formulário de criação rápida (quick create form) | 2. Adicionar uma visualização rápida (quick view)",
            "1. Adicionar um formulário móvel (mobile form) | 2. Adicionar uma entidade virtual (virtual entity)",
            "1. Adicionar uma visualização rápida (quick view) | 2. Adicionar um formulário de criação rápida (quick create form)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda como mostrar e introduzir dados de tabelas relacionadas dentro do formulário principal de uma tabela no Dynamics 365 / Dataverse.",
            "papoReto": "Se está a olhar para a ficha de uma Conta e quer ver os dados do Contacto Principal sem sair da página, adiciona um 'Formulário de Visualização Rápida' (Quick View Form). E se, a partir dessa mesma Conta, quiser introduzir rapidamente os dados de um novo registo relacionado (ex: um novo Caso/Ocorrência) sem ter de navegar para outro ecrã, utiliza o 'Formulário de Criação Rápida' (Quick Create Form).",
            "respostaCerta": "1. Adicionar um formulário de criação rápida (quick create form) | 2. Adicionar uma visualização rápida (quick view)",
            "puloDoGato": "Os formulários 'Quick View' são sempre de leitura (read-only) e servem para mostrar dados de um registo pai/relacionado. Para permitir a introdução/edição simplificada e rápida de novos dados sem perder o contexto da página atual, o Microsoft Learn recomenda nativamente os 'Quick Create Forms'.",
            "cascasDeBanana": [
                "Inverter a ordem (Visualização Rápida para editar e Criação Rápida para visualizar): A Visualização Rápida (Quick View) não permite editar campos, apenas visualizá-los.",
                "Sub-grid (Subgrelha): Embora as subgrelhas permitam a edição e adição de registos, as opções de resposta no exame original (hotspot) focavam no par nativo 'Quick View' para leitura e 'Quick Create' para introdução ágil."
            ],
            "dicaOuro": "Visualizar dados de outro registo no formulário = Quick View Form (Formulário de Visualização Rápida). Introduzir dados rapidamente sem sair da página = Quick Create Form."
        }
    },
    {
        "id": "q32_topic1",
        "text": "Uma empresa utiliza um canvas app (aplicativo de tela) para gerir recursos de produção numa região específica. Os colaboradores devem estar nas instalações da empresa para utilizar o aplicativo.\nDevido a uma necessidade repentina de trabalho remoto, os colaboradores deixaram de se deslocar a um local específico e não conseguem aceder ao canvas app.\nVocê deve reconfigurar o aplicativo para garantir que os colaboradores apenas acedem a partir de um número limitado de localizações.\n\nQuais componentes deve configurar para cada requisito, respetivamente?\n1. Garantir que os colaboradores só podem aceder a partir de uma região específica.\n2. Especificar as localizações a partir das quais um utilizador pode aceder ao aplicativo.",
        "options": [
            "1. Definições do Canvas app | 2. Política de Conformidade (Compliance policy)",
            "1. Power Platform admin center | 2. Política de Segurança Local (Local Security policy)",
            "1. Azure Active Directory | 2. Política de Acesso Condicional (Conditional Access policy)",
            "1. Office 365 admin center | 2. Direito de Acesso (Security role)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão fundamental sobre a segurança baseada na localização (geofencing) e quem é responsável por essa barreira no ecossistema Microsoft.",
            "papoReto": "O Power Apps por si só não sabe proibir alguém de entrar com base na morada ou no IP. Quem faz o papel de 'segurança do edifício' a verificar a sua identidade e a localização de onde está a tentar entrar é o Azure Active Directory (atualmente Microsoft Entra ID). Lá dentro, o segurança tem um manual de regras chamado 'Política de Acesso Condicional', onde diz: 'Se ele não estiver na região X, bloqueia a entrada'.",
            "respostaCerta": "1. Azure Active Directory | 2. Política de Acesso Condicional (Conditional Access policy)",
            "puloDoGato": "O acesso condicional (Conditional Access) avalia sinais como o local (endereço IP), o estado do dispositivo e o utilizador para tomar decisões de segurança (ex: exigir MFA ou bloquear o acesso). Esta funcionalidade é exclusiva do Microsoft Entra ID (Azure AD), e não é configurada no Power Platform Admin Center nem dentro do próprio Canvas App.",
            "cascasDeBanana": [
                "Definições do Canvas app: O Canvas app não gere políticas de segurança de rede ou identidade.",
                "Direito de Acesso (Security Role): O Security Role diz o que o utilizador pode fazer com os dados DEPOIS de entrar. O Acesso Condicional diz SE ele pode entrar com base de onde ele vem."
            ],
            "dicaOuro": "Qualquer requisito que envolva 'bloquear acesso com base no IP, Região, Localização ou Forçar MFA (Autenticação Multifator)' = Azure Active Directory (Microsoft Entra ID) + Conditional Access Policy."
        }
    },
    {
        "id": "q33_topic1",
        "text": "Você tenta desativar várias moedas (currencies) num ambiente do Microsoft Dataverse.\nVocê não consegue desativar a moeda dólar americano (US dollar).\nVocê precisa de determinar o motivo pelo qual não consegue desativar a moeda.\n\nQual é o motivo?",
        "options": [
            "A. Você não é o proprietário (owner) do registo da moeda.",
            "B. A moeda é utilizada por um processo de negócio ativo.",
            "C. A moeda é a moeda base (base currency).",
            "D. A moeda é usada por outro registo."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa um conceito estrutural sobre como o Dataverse gere a componente financeira na sua arquitetura inicial.",
            "papoReto": "Quando se cria um ambiente novo no Dataverse, o sistema obriga-o a escolher qual vai ser a moeda 'oficial' ou principal desse ambiente (a Moeda Base). Todas as transações e taxas de conversão de câmbio vão usar essa moeda como âncora. Por ser o alicerce financeiro de toda a base de dados, a Microsoft simplesmente não permite que a desative ou a elimine.",
            "respostaCerta": "C. A moeda é a moeda base (base currency).",
            "puloDoGato": "A Base Currency (Moeda Base) é definida de forma definitiva no momento da criação da base de dados do ambiente. Esta moeda não pode ser apagada nem desativada. As restantes moedas transacionais que você criar depois podem ser desativadas se deixarem de ser usadas.",
            "cascasDeBanana": [
                "D. A moeda é usada por outro registo: Se uma moeda secundária (ex: Euro) for usada noutro registo (ex: uma Oportunidade), você ainda a pode desativar. Isso fará com que não seja mais possível escolhê-la em novas transações, mas não bloqueia a desativação da moeda em si.",
                "A. Não é o proprietário: Registos de moeda (Currency) são propriedade da Organização (Organization-owned), não têm um utilizador como 'owner'."
            ],
            "dicaOuro": "A Moeda Base (Base Currency) de um ambiente NUNCA pode ser alterada, eliminada ou desativada após o ambiente ser aprovisionado."
        }
    },
    {
        "id": "q34_topic1",
        "text": "Um utilizador tem acesso a uma base de dados existente do Microsoft Dataverse. Você precisa de garantir que o utilizador consiga criar aplicativos de tela (canvas apps) que consumam dados do Dataverse.\n\nVocê não deve conceder permissões que não sejam necessárias (princípio do menor privilégio).\n\nQual direito de acesso (security role) padrão (out-of-the-box) deve atribuir ao utilizador?",
        "options": [
            "Administrador de Ambiente (Environment Admin)",
            "Utilizador Básico (Basic User)",
            "Criador de Ambiente (Environment Maker)",
            "Personalizador de Sistema (System Customizer)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Atenção: Esta questão testa exatamente o mesmo conceito da Questão 21! A Microsoft costuma repetir conceitos centrais no exame com enunciados ligeiramente diferentes.",
            "papoReto": "Tal como vimos antes, se a pessoa só vai 'desenhar' e construir aplicativos de tela (Canvas Apps) sem precisar de criar ou alterar as tabelas da base de dados, damos-lhe o 'kit de ferramentas' de construtor: o papel de Criador de Ambiente.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A função de 'Environment Maker' permite aos utilizadores criar recursos no ambiente (como Canvas Apps, fluxos do Power Automate e conexões), mas NÃO lhes dá privilégios administrativos sobre as tabelas do Dataverse. É a aplicação perfeita do 'menor privilégio'.",
            "cascasDeBanana": [
                "Personalizador de Sistema (System Customizer): Dá poder para alterar a estrutura de todas as tabelas (entidades), o que excede o requisito de apenas 'criar canvas apps'.",
                "Utilizador Básico (Basic User): Permite apenas ler/escrever dados nos aplicativos, mas não criar recursos novos."
            ],
            "dicaOuro": "Criar Canvas Apps ou Fluxos + Menor Privilégio = Environment Maker."
        }
    },
    {
        "id": "q35_topic1",
        "text": "Você está a configurar a segurança do Microsoft Dataverse e planeia atribuir utilizadores a Equipas (Teams).\nA propriedade de registos (ownership) e as permissões baseiam-se em requisitos de negócio. Você precisa de determinar qual tipo de equipa deve usar para cada requisito.\n\nSelecione a combinação correta para os seguintes requisitos na ordem:\n1. Capacidade de ser a proprietária (owner) de registos no Dataverse.\n2. Fornece permissões aos membros sem ter um direito de acesso (security role) atribuído à própria equipa.",
        "options": [
            "1. Equipa de Acesso (Access team) | 2. Equipa de Grupo do Azure AD (AAD group team)",
            "1. Equipa do Microsoft Teams | 2. Equipa de Proprietário (Owner team)",
            "1. Equipa de Grupo do Azure AD (AAD group team) | 2. Equipa de Acesso (Access team)",
            "1. Equipa de Proprietário (Owner team) | 2. Equipa de Grupo do Azure AD (AAD group team)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão essencial sobre os Tipos de Equipas (Team Types) disponíveis na arquitetura de segurança do Dataverse.",
            "papoReto": "Se quer que uma equipa seja 'dona' de um cliente ou fatura, tem de ser uma Equipa de Proprietário (Owner Team) ou uma Equipa ligada ao Azure AD (AAD Group Team). Agora, se quer apenas juntar 5 pessoas de departamentos diferentes para lerem e editarem um registo específico, sem ter de lhes dar uma nova função de segurança complexa, você junta-os numa 'Equipa de Acesso' (Access Team) e partilha o registo com eles.",
            "respostaCerta": "1. Equipa de Grupo do Azure AD (AAD group team) | 2. Equipa de Acesso (Access team)",
            "puloDoGato": "No Dataverse, APENAS as 'Owner Teams' (Equipas de Proprietários) e as 'AAD Group Teams' (Equipas de Grupo do Azure AD) podem ser donas de registos e TÊM de ter um Security Role atribuído à equipa. As 'Access Teams' (Equipas de Acesso) NÃO são donas de registos e NÃO têm Security Roles atribuídos; os privilégios vêm da partilha (sharing) direta do registo com essa equipa de acesso baseando-se nos privilégios individuais de cada membro.",
            "cascasDeBanana": [
                "Inverter os conceitos: Se atribuir uma Access Team para ser dona de um registo, o sistema dará erro, pois as Equipas de Acesso não foram feitas para Ownership (propriedade)."
            ],
            "dicaOuro": "Own records (ser dono) = Owner Team ou Azure AD Group Team. Sem Security Role atribuído à equipa (só partilha) = Access Team."
        }
    },
    {
        "id": "q36_topic1",
        "text": "Uma empresa tem localizações nos Estados Unidos, Brasil, Índia e Japão e realiza transações financeiras em todas estas regiões.\nAs transações financeiras no Brasil vão ser descontinuadas durante os próximos meses. Os utilizadores já não devem ser capazes de criar registos associados à moeda brasileira (Real). No entanto, os registos históricos devem permanecer intactos.\n\nVocê precisa de configurar o Microsoft Dataverse para cumprir este requisito. O que deve fazer?",
        "options": [
            "Desativar o pacote de idioma (language pack) brasileiro.",
            "Renomear a moeda brasileira.",
            "Eliminar (Delete) o registo da moeda brasileira.",
            "Desativar (Deactivate) o registo da moeda brasileira."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão trata da manutenção de integridade de dados históricos versus a interrupção de novas transações.",
            "papoReto": "Se o Brasil vai parar de operar vendas, não queremos que as pessoas continuem a lançar vendas em Reais. Mas se apagarmos a moeda do sistema (Delete), todas as vendas passadas que usaram o Real vão ficar quebradas ou perder a referência financeira. A solução? 'Congelar' a moeda. Nós Desativamo-la.",
            "respostaCerta": "Desativar (Deactivate) o registo da moeda brasileira.",
            "puloDoGato": "O Dataverse não permite eliminar (Delete) moedas que já estejam em uso por outros registos (como Oportunidades ou Faturas antigas). Desativar (Deactivate) um registo de moeda impede que ela seja selecionada em novas transações, mas mantém perfeitamente a integridade e os cálculos de todos os registos históricos.",
            "cascasDeBanana": [
                "Eliminar (Delete): O sistema bloquearia esta ação devido a dependências (relacionamentos com registos antigos), e se não bloqueasse, causaria perda de dados.",
                "Desativar o pacote de idioma: O idioma afeta apenas a tradução da interface do utilizador (ecrãs, botões), não tem absolutamente nada a ver com as regras de moedas (Currency) para valores financeiros."
            ],
            "dicaOuro": "Parar de usar sem perder o histórico = Desativar (Deactivate). Nunca 'Eliminar' (Delete) dados transacionais ou moedas usadas."
        }
    },
    {
        "id": "q37_topic1",
        "text": "[Série de Questões] Cenário: Uma empresa possui uma equipa de vendas e uma equipa de gestão. As equipas pertencem à mesma unidade de negócios, mas são equipas diferentes. A equipa de gestão precisa de visualizar os dados da equipa de vendas, e a equipa de vendas precisa de visualizar os dados da equipa de gestão.\n\nSelecione as ações corretas para cada requisito na ordem:\n1. Garantir que a equipa de gestão consegue ver os dados da equipa de vendas.\n2. Garantir que a equipa de vendas consegue ver os dados da equipa de gestão.",
        "options": [
            "1. Configurar uma hierarquia de posições (Position hierarchy) | 2. Adicionar a equipa de vendas ao modelo de equipa de acesso (access team) da gestão.",
            "1. Alterar o direito de acesso da gestão | 2. Alterar o direito de acesso das vendas.",
            "1. Adicionar a gestão a uma equipa de acesso | 2. Configurar uma hierarquia de posições.",
            "1. Configurar uma hierarquia de gestores (Manager hierarchy) | 2. Configurar uma hierarquia de gestores."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca nos modelos avançados de segurança do Dataverse: Hierarquias (Hierarchical Security) e Equipas de Acesso (Access Teams).",
            "papoReto": "Para a chefia ver os dados de quem está abaixo deles de forma automática, ativamos a 'Hierarquia' (a chefia herda a visão dos subordinados). Mas a hierarquia só funciona de cima para baixo! Se os vendedores (que estão em baixo) precisam de ver dados da gestão (que estão em cima), a hierarquia não ajuda. Aí temos de usar as 'Equipas de Acesso' (Access Teams) para partilhar registos específicos com eles de forma dinâmica.",
            "respostaCerta": "1. Configurar uma hierarquia de posições (Position hierarchy) | 2. Adicionar a equipa de vendas ao modelo de equipa de acesso da gestão.",
            "puloDoGato": "A segurança hierárquica (Manager ou Position Hierarchy) permite que os utilizadores num nível superior acedam aos dados dos utilizadores num nível inferior de forma automática. O inverso não é verdadeiro. Para partilhar dados lateralmente ou de baixo para cima de forma ágil e caso a caso, as Equipas de Acesso (Access Teams) são a melhor prática nativa.",
            "cascasDeBanana": [
                "Alterar os direitos de acesso (Security Roles): Como pertencem à mesma Business Unit, dar permissões de leitura ao nível da Unidade de Negócios faria com que todos vissem absolutamente tudo de todos, o que violaria o isolamento e as regras de restrição base do cenário.",
                "Usar hierarquia para vendas ver gestão: A hierarquia nunca concede acesso a quem está num nível inferior para ver os dados de quem está no topo."
            ],
            "dicaOuro": "Acesso automático de Cima para Baixo = Hierarquia (Hierarchy). Acesso Lateral, partilha de registos pontuais ou de Baixo para Cima = Equipas de Acesso (Access Teams)."
        }
    },
    {
        "id": "q38_topic1",
        "text": "Você gere um ambiente do Dynamics 365 e cria um conjunto de opções global (global option set / choice) para uma solução personalizada. Mais tarde, repara que o prefixo padrão (default prefix) está incorreto e que os valores numéricos das opções (option values) são demasiado longos.\n\nVocê precisa de alterar o valor numérico do conjunto de opções e garantir que o prefixo fica correto. Quais são as DUAS ações conjugadas que deve executar?",
        "options": [
            "A) Alterar o prefixo nas definições do sistema E B) Editar o conjunto de opções diretamente.",
            "A) Alterar o prefixo do publicador (publisher's prefix) E B) Eliminar (Delete) e recriar o conjunto de opções.",
            "A) Alterar o prefixo do publicador E B) Editar o conjunto de opções diretamente.",
            "A) Alterar o prefixo nas definições do sistema E B) Eliminar (Delete) e recriar o conjunto de opções."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão avalia o conhecimento sobre como as soluções (Solutions), os publicadores (Publishers) e os valores internos das colunas funcionam no Dataverse.",
            "papoReto": "Quando cria um campo de escolha (Option Set), o sistema gera um valor numérico oculto (ex: 100000001). Esse '10000' é o prefixo que vem do Publicador da Solução em que está a trabalhar. Se esse número ficou errado ou é demasiado longo, não dá para simplesmente clicar e editar. Tem de se apagar o campo, consertar o prefixo no cadastro do Publicador da Solução, e criar o campo de novo a partir do zero.",
            "respostaCerta": "A) Alterar o prefixo do publicador (publisher's prefix) E B) Eliminar (Delete) e recriar o conjunto de opções.",
            "puloDoGato": "No Dataverse, NÃO é possível alterar o valor numérico base (value) de um Global Option Set após a sua criação (embora possa alterar o texto visível/label). Para corrigir um prefixo ou um valor numérico gerado, a única solução é eliminar o campo e recriar. O prefixo (tanto de texto como 'cr435_' quanto o prefixo numérico base de opções) é definido exclusivamente nas propriedades do Publicador (Publisher) da solução.",
            "cascasDeBanana": [
                "Editar o conjunto de opções: O sistema bloqueia a edição do valor numérico base após a criação para garantir a integridade da base de dados.",
                "Alterar nas definições do sistema: O prefixo não é uma configuração global do sistema, é controlado pela Solução/Publicador específico onde o componente está a ser criado."
            ],
            "dicaOuro": "Errou o prefixo (nome ou número) de um Option Set (Choice)? A única solução do sistema é Delete & Recreate (Eliminar e Recriar). Definir Prefixos = Configurações do Publicador (Publisher)."
        }
    },
    {
        "id": "q39_topic1",
        "text": "Você precisa de exibir a receita (revenue) de todas as oportunidades associadas a uma Conta (Account) específica diretamente no formulário da própria Conta.\n\nQual tipo de campo (coluna) deve criar?",
        "options": [
            "Campo Calculado (Calculated field)",
            "Campo de Pesquisa (Lookup field)",
            "Conjunto de opções (Option set)",
            "Campo de Consolidação (Rollup field)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma questão fundamental e muito frequente no exame sobre agregação de dados entre tabelas relacionadas (1:N) no Dataverse.",
            "papoReto": "Imagine a Conta como uma capa de um dossier. Dentro dela existem várias folhas, que são as Oportunidades de negócio. Se você quer somar o valor em euros de todas essas folhas e mostrar o Total na capa do dossier, tem de 'enrolar'/'consolidar' os valores de baixo para cima. A coluna que faz isso chama-se Campo de Consolidação (Rollup field).",
            "respostaCerta": "Campo de Consolidação (Rollup field)",
            "puloDoGato": "Rollup Fields (Campos de Consolidação) são utilizados para agregar valores matemáticos de múltiplos registos filhos (relação 1:N). Eles fazem operações como Sum (soma), Min, Max ou Count. Eles são calculados de forma assíncrona (a cada 12 horas ou por clique manual).",
            "cascasDeBanana": [
                "Campo Calculado (Calculated field): Um campo calculado consegue fazer matemática dentro do MESMO registo (Ex: Quantidade * Preço Unitário), ou ir a um registo Pai buscar um dado, mas NÃO consegue olhar para 'baixo' e somar múltiplos registos filhos. Para N registos, tem de ser sempre Rollup."
            ],
            "dicaOuro": "Somar/Contar NÚMEROS de vários registos filhos (1:N) = Rollup Field (Campo de Consolidação). Lógica/Matemática na mesma linha = Calculated Field."
        }
    },
    {
        "id": "q40_topic1",
        "text": "Você precisa de configurar uma tabela personalizada (custom table) para ser utilizada na Aplicação do Dynamics 365 para Outlook (App for Outlook).\n\nQuais as definições que deve ativar nas propriedades da tabela para cumprir os requisitos? Selecione as ações corretas, respetivamente:\n1. Garantir que os utilizadores possam rastrear (track / Set Regarding) e-mails do Outlook para a tabela personalizada.\n2. Garantir que a tabela personalizada fica visível e pode ser pesquisada na App for Outlook.",
        "options": [
            "1. Ativar para atividades (Enable for activities) | 2. Ativar para telemóvel (Enable for mobile)",
            "1. Ativar envio de e-mail (Send email) | 2. Ativar painel de referência (Enable reference panel)",
            "1. Ativar ligações (Enable connections) | 2. Ativar pesquisa de relevância (Enable relevance search)",
            "1. Ativar para atividades (Enable for activities) | 2. Ativar Grelha Editável (Enable editable grid)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora os pré-requisitos técnicos ocultos para que as integrações nativas com o Outlook funcionem.",
            "papoReto": "Para o Dynamics permitir que você guarde um e-mail do Outlook a apontar para o seu registo personalizado (ex: guardar e-mail num 'Contrato'), essa tabela do Contrato TEM de estar configurada para aceitar anexar 'Atividades'. Além disso, como o painel lateral da App do Outlook é construído com base nas regras do telemóvel, a tabela tem de estar obrigatoriamente ativada para a interface 'Mobile', caso contrário, nem aparece no painel de pesquisa do Outlook.",
            "respostaCerta": "1. Ativar para atividades (Enable for activities) | 2. Ativar para telemóvel (Enable for mobile)",
            "puloDoGato": "A App do Dynamics 365 para Outlook é desenvolvida sobre a Interface Unificada (Unified Interface). Para que as tabelas apareçam lá, elas devem estar explicitamente ativadas no cliente Mobile ('Enable for mobile'). Para permitir o rastreamento (tracking) de e-mails, compromissos ou tarefas contra a tabela, é imperativo ativar as Atividades ('Enable for activities'). IMPORTANTE: Ativar 'Atividades' é uma ação irreversível na tabela!",
            "cascasDeBanana": [
                "Ativar envio de e-mail (Send email): Isto apenas adiciona o campo primário de e-mail ao formulário para que o próprio Dynamics possa enviar e-mails a partir dali. Não habilita a tabela a receber o vínculo (Set Regarding) através da App do Outlook."
            ],
            "dicaOuro": "Aparecer na lista do Outlook = 'Enable for Mobile'. Receber e-mails vinculados (Track/Set Regarding) = 'Enable for Activities'."
        }
    },
    {
        "id": "q41_topic1",
        "text": "[Série de Questões] Cenário: Num registo de Contacto, um utilizador cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contacto associado àquela Anotação. Ele precisa de encontrar a Anotação.\n\nSolução Proposta: Usar a Pesquisa do Dataverse (Dataverse Search) para pesquisar pela palavra 'run'.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é a versão moderna e correta da nossa já conhecida série de perguntas sobre pesquisa no sistema.",
            "papoReto": "A Pesquisa do Dataverse (Dataverse Search) é o nome novo da antiga 'Relevance Search'. É a pesquisa inteligente da plataforma, alimentada por IA. Se procurar 'run', ela sabe que 'running' é a mesma coisa (da mesma família morfológica) e encontra o anexo ou a nota na hora.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Dataverse Search suporta 'lemmatization' (lematização: encontrar palavras com a mesma raiz morfológica) e pesquisa perfeitamente dentro de notas e anexos em múltiplas tabelas ao mesmo tempo. É a solução mais avançada e eficaz para este cenário.",
            "cascasDeBanana": [
                "Na prova, tenha cuidado para não confundir 'Dataverse Search' com 'Categorized Search' ou 'Quick Find'. Apenas a Dataverse Search tem esta inteligência linguística profunda em inglês e em vários outros idiomas."
            ],
            "dicaOuro": "Dataverse Search = Inteligência artificial, lematização, procura em PDFs e Anexos = Sucesso total na pesquisa por variações de palavras."
        }
    },
    {
        "id": "q42_topic1",
        "text": "Você está a utilizar o assistente de Importação de Dados (Data import wizard) para importar registos de contas a partir de um ficheiro CSV. O mapeamento é o seguinte:\n- A coluna 'Name' no CSV representa o nome da conta e mapeia para a coluna 'Account Name'.\n- A coluna 'Parent Name' no CSV representa a empresa holding (Conta Pai) com subsidiárias associadas.\nOs registos importados apenas têm relação com outros registos que também estão dentro do próprio ficheiro CSV.\n\nVocê precisa de configurar a importação para que as relações (pais e filhos) sejam criadas automaticamente entre estes registos.\nO que deve fazer?",
        "options": [
            "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Account Name' como critério de pesquisa (lookup criteria).",
            "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Parent Account' como critério de pesquisa.",
            "Criar uma chave alternativa (alternate key) na tabela usando 'Account Name'. Não mapear 'Parent Name' do ficheiro.",
            "Procurar os IDs dos registos no Dataverse. Adicionar os IDs como uma nova coluna no ficheiro e mapear essa coluna para 'Parent Account'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão técnica excelente sobre a importação de dados complexos (com relacionamentos na mesma tabela) usando o Assistente de Importação nativo.",
            "papoReto": "Tem um ficheiro Excel/CSV com uma lista de empresas. Algumas são 'filhas' de outras que também estão nessa mesma lista. Para o sistema ligar a filha à mãe durante a importação, tem de lhe dizer: 'A coluna *Parent Name* do Excel vai ligar-se à coluna *Parent Account* do sistema. E para encontrar qual é a empresa mãe certa dentro do ficheiro, procura pelo nome dela (*Account Name*)'.",
            "respostaCerta": "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Account Name' como critério de pesquisa (lookup criteria).",
            "puloDoGato": "Como os registos estão todos no mesmo ficheiro (pais e filhos), o Assistente de Importação de Dados do Dynamics é suficientemente inteligente para processar isto, mas precisa que o Lookup Criteria (critério de busca) seja exato. O campo 'Parent Account' é um Lookup. O Lookup precisa de saber que campo textual vai usar para encontrar o registo. Como no CSV só temos Nomes (não temos GUIDs), o critério de pesquisa TEM de ser o 'Account Name' (Nome da Conta principal).",
            "cascasDeBanana": [
                "Procurar IDs no Dataverse (opção D): Daria um trabalho infernal e nem funcionaria bem porque as contas mães ainda não existem no sistema (estão a ser importadas simultaneamente no mesmo ficheiro).",
                "Selecionar 'Parent Account' como critério de pesquisa (opção B): Errado. Você procura a empresa mãe pelo seu Nome (Account Name), e não pelo nome do pai da mãe."
            ],
            "dicaOuro": "Ao importar dados com relacionamentos internos (Conta Pai/Filho no mesmo CSV), mapeie a coluna do Pai para o campo Lookup e use SEMPRE o Campo Principal (Primary Name Column) como o Critério de Pesquisa (Lookup Criteria)."
        }
    },
    {
        "id": "q43_topic1",
        "text": "Você precisa de garantir que um utilizador possa executar tarefas administrativas. A solução deve utilizar o princípio do menor privilégio (least privilege).\n\nQual função (role) deve atribuir a cada requisito? Selecione a combinação correta para as seguintes ações, respetivamente:\n1. Criar novos utilizadores.\n2. Atribuir funções (roles) aos utilizadores dentro do sistema.\n3. Executar backups de uma instância.",
        "options": [
            "1. Administrador Global do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador de Serviço do Dynamics 365",
            "1. Administrador de Sistema do Dynamics 365 | 2. Administrador Global do Office 365 | 3. Administrador de Serviço do Dynamics 365",
            "1. Administrador Global do Office 365 | 2. Administrador de Serviço do Dynamics 365 | 3. Administrador de Sistema do Dynamics 365",
            "1. Administrador de Serviço do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador Global do Office 365"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Nota: Esta questão testa o mesmo conceito da Questão 15! A Microsoft repete frequentemente perguntas de segurança fundamentais nos seus bancos de exames.",
            "papoReto": "Criar utilizadores e pagar as suas licenças é feito no portal geral (Office 365 / Microsoft Entra). Dar permissões de leitura/escrita a esses utilizadores no Dataverse é trabalho do Administrador do Sistema do Dynamics. Por fim, quem faz cópias de segurança (backups) do ambiente é o Administrador de Serviço do Dynamics (ou Power Platform Admin), que gere a infraestrutura sem aceder necessariamente aos dados dos clientes.",
            "respostaCerta": "1. Administrador Global do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador de Serviço do Dynamics 365",
            "puloDoGato": "Criação de Identidade (Utilizador) = Microsoft 365 / Entra ID. Atribuição de Permissões de Dados = Dynamics 365 / Dataverse. Gestão de Ambientes/Backups = Service Admin / Power Platform Admin.",
            "cascasDeBanana": [
                "Pensar que o Administrador do Dynamics consegue criar novos utilizadores do zero. O Dynamics apenas 'lê' os utilizadores que já foram criados e licenciados no Microsoft 365."
            ],
            "dicaOuro": "Criação de conta = Office 365. Permissões de Tabela = Dynamics System Admin. Backups = Service Admin."
        }
    },
    {
        "id": "q44_topic1",
        "text": "Você está a configurar um ambiente no Microsoft Dataverse.\nVocê precisa de garantir que os acessos estão configurados corretamente para os seguintes requisitos:\n1. Garantir que um utilizador consiga aceder a um aplicativo (App) específico.\n2. Garantir que um utilizador consiga visualizar uma entidade (Tabela) específica.\n\nQuais ações deve executar, respetivamente?",
        "options": [
            "1. Gerir Funções (Manage Roles) do aplicativo | 2. Atribuir um direito de acesso (Security Role) ao utilizador",
            "1. Atribuir um direito de acesso (Security Role) ao utilizador | 2. Partilhar o registo (Share record)",
            "1. Partilhar o registo (Share record) | 2. Gerir Funções (Manage Roles) da entidade",
            "1. Adicionar o utilizador a uma Equipa de Acesso (Access Team) | 2. Gerir Funções (Manage Roles) do aplicativo"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão fundamental sobre a diferença entre a visibilidade de um Aplicativo (App) e a visibilidade de Dados (Tabelas/Entidades).",
            "papoReto": "Se um colega não vê o ícone do aplicativo na página inicial, você tem de ir às configurações do App e ligá-lo à função dele (Gerir Funções / Manage Roles). Se ele consegue abrir o aplicativo, mas não vê a tabela 'Clientes' lá dentro (ou recebe um erro de permissão), ele precisa de um Direito de Acesso (Security Role) que lhe dê permissão de Leitura nessa entidade.",
            "respostaCerta": "1. Gerir Funções (Manage Roles) do aplicativo | 2. Atribuir um direito de acesso (Security Role) ao utilizador",
            "puloDoGato": "O acesso à Interface (o Model-driven app em si) é gerido partilhando o aplicativo e associando-o a Security Roles (Manage Roles). O acesso aos Dados (as Tabelas/Entidades) é gerido através da atribuição desses mesmos Security Roles diretamente ao Utilizador ou à sua Equipa.",
            "cascasDeBanana": [
                "Partilhar o registo (Share record): Isto dá acesso a uma única linha de dados (ex: o cliente João), mas não dá acesso à Entidade inteira de forma estrutural nem ao Aplicativo."
            ],
            "dicaOuro": "Acesso ao App = Manage Roles (no App). Acesso à Entidade/Tabela = Assign Security Role (ao Utilizador)."
        }
    },
    {
        "id": "q45_topic1",
        "text": "Uma empresa utiliza o Microsoft Dynamics 365 Customer Service.\nVocê precisa de recomendar tipos de pesquisa aos utilizadores baseando-se nas suas necessidades.\nQual tipo de pesquisa deve recomendar para cada cenário? (Selecione a combinação correta na ordem)\n1. Encontrar registos que contêm erros ortográficos (misspellings) de nomes de Contactos e Contas.\n2. Encontrar texto específico dentro de um anexo (attachment).",
        "options": [
            "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa de Relevância (Relevance Search)",
            "1. Pesquisa Categorizada (Categorized Search) | 2. Localização Rápida (Quick Find)",
            "1. Localização Rápida (Quick Find) | 2. Pesquisa de Relevância (Relevance Search)",
            "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa Categorizada (Categorized Search)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão confirma a supremacia da Pesquisa do Dataverse (anteriormente Relevance Search) face aos métodos de pesquisa antigos.",
            "papoReto": "Se a pessoa escreveu 'Andssson' em vez de 'Anderson', a única pesquisa inteligente o suficiente para entender o erro ortográfico é a Pesquisa de Relevância (impulsionada por IA do Azure). Da mesma forma, se quiser pesquisar o texto que está escrito DENTRO de um PDF ou Word anexado a um cliente, só a Pesquisa de Relevância consegue ler dentro dos ficheiros.",
            "respostaCerta": "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa de Relevância (Relevance Search)",
            "puloDoGato": "A 'Relevance Search' (agora chamada Dataverse Search) é o único mecanismo nativo que suporta tolerância a erros ortográficos (fuzzy logic / fuzzy matching), lematização e pesquisa profunda dentro de documentos e anexos nas tabelas do Dataverse.",
            "cascasDeBanana": [
                "Localização Rápida e Pesquisa Categorizada: Ambas exigem que a ortografia esteja correta (ou que se usem asteriscos *) e nenhuma das duas consegue 'ler' o conteúdo dentro de anexos de ficheiros."
            ],
            "dicaOuro": "Erros ortográficos (Fuzzy matching), flexões verbais ou Pesquisa em Anexos = Relevance Search (Dataverse Search)."
        }
    },
    {
        "id": "q46_topic1",
        "text": "Você está a criar um aplicativo para uma clínica de massagens.\nOs registos de Contacto representam os pacientes da clínica. Os formulários devem cumprir os seguintes requisitos:\n- Tipo de Caso A: Um utilizador visualiza informações detalhadas sobre um registo principal.\n- Tipo de Caso B: Um utilizador visualiza registos num formulário que se adapta (escala) para ser usado num dispositivo móvel.\n- Tipo de Caso C: Um utilizador cria rapidamente um registo sem sair do ecrã atual.\n\nQual o tipo de formulário que deve utilizar para cada requisito? Selecione a combinação correta na ordem (A, B e C):",
        "options": [
            "1. Formulário Principal (Main) | 2. Formulário Principal (Main) | 3. Criação Rápida (Quick Create)",
            "1. Formulário Principal (Main) | 2. Formulário Móvel (Mobile Form) | 3. Criação Rápida (Quick Create)",
            "1. Formulário Principal (Main) | 2. Visualização Rápida (Quick View) | 3. Criação Rápida (Quick Create)",
            "1. Visualização Rápida (Quick View) | 2. Formulário Principal (Main) | 3. Cartão (Card)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão essencial sobre os tipos de formulários disponíveis no Model-driven App e as suas responsabilidades.",
            "papoReto": "Se precisa de ver toda a informação da Conta, usa o formulário 'Principal' (Main). E se for para usar no telemóvel? Hoje em dia não precisa de criar um formulário à parte! A Interface Unificada (Unified Interface) faz com que o formulário 'Principal' se adapte automaticamente ao telemóvel. E se quiser criar um registo super rápido sem sair do ecrã onde está? 'Criação Rápida' (Quick Create).",
            "respostaCerta": "1. Formulário Principal (Main) | 2. Formulário Principal (Main) | 3. Criação Rápida (Quick Create)",
            "puloDoGato": "Historicamente, o Dynamics exigia o design de um 'Mobile Form'. Hoje, com a Unified Interface, o Formulário Principal (Main Form) é totalmente responsivo e escala para baixo (scales down) para caber num ecrã de dispositivo móvel. Já para pop-ups laterais ou superiores que não fecham a janela principal, usa-se o Quick Create Form.",
            "cascasDeBanana": [
                "Formulário Móvel (Mobile Form): É uma pegadinha que apanha quem estudou por documentação antiga do Dynamics CRM. Na arquitetura atual, o Main Form resolve o mobile.",
                "Visualização Rápida (Quick View): Serve apenas para visualizar dados de um registo *relacionado* em modo de leitura (read-only), não para detalhar o registo principal."
            ],
            "dicaOuro": "Ver detalhes = Main Form. Responsivo para telemóvel = Main Form. Criar sem sair da página = Quick Create Form."
        }
    },
    {
        "id": "q47_topic1",
        "text": "Você é um programador/configurador do Dynamics 365 Customer Service.\nUm vendedor cria uma nova Oportunidade. Você precisa de garantir que o vendedor preenche todos os campos necessários antes de guardar o registo. Você precisa de exibir uma mensagem de aviso/erro aos utilizadores se um campo específico for deixado em branco.\n\nVocê deve impor este requisito sem escrever código personalizado. Quais as DUAS ações que deve executar em sequência?",
        "options": [
            "1. Criar um Fluxo de Trabalho (Workflow) e configurar a condição. 2. Selecionar a ação 'Parar Fluxo de Trabalho' com o status Cancelado.",
            "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Mostrar Mensagem de Erro' (Show error message).",
            "1. Criar um Fluxo do Power Automate e configurar o gatilho. 2. Selecionar a ação 'Enviar E-mail'.",
            "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Definir Recomendação' (Set Recommendation)."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão foca na forma correta de validar a entrada de dados (data validation) diretamente na interface do utilizador, sem recurso a código (JavaScript).",
            "papoReto": "O vendedor esqueceu-se de preencher um campo crítico? Não precisa de chamar um programador para colocar um aviso. Basta abrir o 'Regras de Negócios' (Business Rules), dizer ao sistema 'Se o campo X estiver vazio' (Condição), e depois puxar o bloco 'Mostra um erro na cara dele' (Show Error Message). O formulário não deixa guardar até o erro sumir.",
            "respostaCerta": "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Mostrar Mensagem de Erro' (Show error message).",
            "puloDoGato": "Para exibir mensagens de erro bloqueantes na interface (formulário) em tempo real, a ferramenta nativa é a Business Rule com a ação 'Show Error Message'. Isso é executado no lado do cliente (client-side) e impede imediatamente que o utilizador grave (save) o registo inválido.",
            "cascasDeBanana": [
                "Definir Recomendação (Set Recommendation): Uma recomendação coloca um 'i' azul (informação) que sugere um valor, mas NÃO bloqueia a gravação e não avisa obrigatoriamente de um erro.",
                "Usar Fluxo de Trabalho (Workflow): Um Workflow em tempo real também poderia bloquear a gravação (parando o fluxo e dando erro), mas é menos eficiente e amigável que a Regra de Negócios para ações visuais em tempo real no formulário."
            ],
            "dicaOuro": "Exigir preenchimento ou mostrar erro no formulário sem código = Regra de Negócios + Mostrar Mensagem de Erro (Show Error Message)."
        }
    },
    {
        "id": "q48_topic1",
        "text": "Você implementa uma Grelha Editável (Editable Grid) para a entidade Conta (Account). A equipa de negócio fornece a seguinte lista de funcionalidades que gostariam que fossem implementadas na grelha:\n1. Agrupar por instância de registo (Group by).\n2. Configurar uma regra de negócios para mostrar uma mensagem de erro.\n3. Editar o campo composto 'Endereço' (Address composite field).\n4. Utilizar a grelha editável em telemóveis (mobile phones).\n\nQuais destas funcionalidades PODEM ser realizadas na Editable Grid? Selecione a opção que indica corretamente Sim/Não para cada ponto respetivamente:",
        "options": [
            "1. Sim | 2. Sim | 3. Não | 4. Sim",
            "1. Sim | 2. Não | 3. Sim | 4. Sim",
            "1. Não | 2. Sim | 3. Não | 4. Não",
            "1. Sim | 2. Sim | 3. Sim | 4. Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conhecer as capacidades e, principalmente, as limitações do controlo 'Grelha Editável' (Editable Grid) é um tópico muito comum no exame PL-200.",
            "papoReto": "A Grelha Editável é como ter um mini-Excel dentro do Dynamics. Pode agrupar linhas por país? Sim. As regras de negócio (como dar erro) funcionam lá dentro? Sim. Funciona no telemóvel? Sim. Mas pode editar um campo 'Composto' (aqueles campos que juntam Rua, Cidade e Código Postal num só, como o Endereço)? Não! A grelha confunde-se com campos misturados, você tem de os editar campo a campo separadamente.",
            "respostaCerta": "1. Agrupar: Sim | 2. Regras: Sim | 3. Editar campo composto: Não | 4. Telemóvel: Sim",
            "puloDoGato": "Editable Grids suportam agrupamento (Grouping), execução de Business Rules no cliente, e são compatíveis com mobile. No entanto, NÃO suportam a edição nativa de 'Composite Fields' (Campos Compostos, como o Nome Completo ou Endereço Completo), nem campos de Estado (State/Status) ou campos do tipo Cliente (Customer/PartyList).",
            "cascasDeBanana": [
                "Achar que a Editable Grid suporta campos compostos (Composite Fields). Este é o erro mais comum. Para editar uma morada na grelha, tem de colocar as colunas individuais (Rua 1, Cidade, País) em vez da coluna agrupada (Endereço Completo)."
            ],
            "dicaOuro": "Grelhas Editáveis suportam quase tudo (Regras, Agrupamentos, Mobile), EXCETO: Campos Compostos, Status, e campos de Cliente."
        }
    },
    {
        "id": "q49_topic1",
        "text": "Você é um gestor de atendimento ao cliente (customer service manager). Precisa de recolher informações dos clientes garantindo o seguinte:\n- Deve usar formulários baseados em entidades específicas.\n- Deve garantir que os dados estão ligados diretamente à entidade.\n- Deve poder partilhar os formulários de forma segura com os clientes.\n\nQual componente deve utilizar para cada um dos seguintes requisitos (respetivamente)?\n1. Recolher o feedback dos clientes (Customer feedback).\n2. Utilizar informações de negócio existentes para capturar dados de forma segura (Leverage existing business information).",
        "options": [
            "1. Dynamics 365 Customer Voice | 2. Portal do Power Apps (Power Pages)",
            "1. Portal do Power Apps (Power Pages) | 2. Microsoft Forms",
            "1. Microsoft Forms | 2. Dynamics 365 Customer Voice",
            "1. Dynamics 365 Customer Voice | 2. Microsoft Excel Online"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a sua capacidade de distinguir entre as ferramentas de recolha de dados viradas para o exterior na Power Platform.",
            "papoReto": "Se só quer enviar um questionário para saber se o cliente gostou do atendimento (Avaliação/Feedback), a melhor ferramenta nativa é o Dynamics 365 Customer Voice. Mas se quer que o cliente aceda a uma área segura, veja as faturas dele e atualize dados vitais com base nas tabelas do sistema, tem de lhe dar um website a sério, autenticado. Para isso usamos o Portal do Power Apps (hoje chamado Power Pages).",
            "respostaCerta": "1. Dynamics 365 Customer Voice | 2. Portal do Power Apps (Power Pages)",
            "puloDoGato": "A palavra 'feedback' (ou 'survey' / questionário) é o gatilho automático para 'Dynamics 365 Customer Voice' (antigo Forms Pro). Já 'leveraging existing business information' num ambiente seguro com formulários baseados nas entidades do Dataverse remete exclusivamente a um 'Power Apps Portal' (Power Pages).",
            "cascasDeBanana": [
                "Microsoft Forms: Embora recolha dados, não liga automaticamente e de forma robusta às entidades (tabelas) do Dynamics com a segurança exigida para processos de negócios complexos, além de não fornecer a área autenticada do Portal."
            ],
            "dicaOuro": "Inquéritos e Feedback = Dynamics 365 Customer Voice. Website autenticado ligado diretamente às tabelas do Dataverse = Power Apps Portal (Power Pages)."
        }
    },
    {
        "id": "q50_topic1",
        "text": "Tem um formulário que exibe um campo personalizado (custom field) de uma entidade. Um cliente quer restringir os utilizadores de filtrarem dados por esse campo personalizado.\nPrecisa de impedir que os utilizadores filtrem por esse campo na ferramenta de Localização Avançada (Advanced Find).\n\nO que deve modificar?",
        "options": [
            "Campos na opção Editar Critérios de Filtro (Edit Filter Criteria) da vista de Localização Rápida (Quick Find).",
            "A propriedade 'Pesquisável' (Searchable) no formulário de Propriedades do Campo (Field Properties).",
            "Campos na opção Adicionar Colunas de Pesquisa (Add Find Columns) da vista de Localização Rápida.",
            "As funções de segurança (Security Roles) na tabela para ocultar o campo."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre como esconder campos das pesquisas avançadas do Dataverse sem necessariamente removê-los do formulário.",
            "papoReto": "Se não quer que os utilizadores consigam procurar ou criar relatórios usando um campo específico (por exemplo, um campo de 'Número de Calçado' num cliente), basta ir às propriedades de configuração desse campo exato na tabela e desligar a opção 'Searchable' (Pesquisável). Ele desaparece do ecrã de filtros avançados magicamente.",
            "respostaCerta": "A propriedade 'Pesquisável' (Searchable) no formulário de Propriedades do Campo (Field Properties).",
            "puloDoGato": "A propriedade 'Searchable' (Pesquisável) no Dataverse não apaga o campo da base de dados nem o esconde dos formulários na interface. O seu único objetivo é ocultar o campo das listas pendentes (dropdowns) quando os utilizadores tentam criar filtros na Localização Avançada (Advanced Find) ou noutros criadores de consultas (Query Builders).",
            "cascasDeBanana": [
                "Alterar as definições do Quick Find (Localização Rápida): Isto afeta apenas o que é pesquisado ativamente na barra de pesquisa global da vista, mas não impede que os utilizadores selecionem o campo manualmente na ferramenta de Localização Avançada."
            ],
            "dicaOuro": "Bloquear filtros em pesquisas avançadas num campo específico = Colocar 'Searchable' (Pesquisável) como 'Não' nas Propriedades do Campo."
        }
    },
    {
        "id": "q51_topic1",
        "text": "Você está a desenhar um aplicativo de tela (canvas app) que se liga ao Common Data Service (Dataverse). Precisa de configurar o aplicativo para cumprir os requisitos e garantir que ele fica disponível offline.\n\nQue funções Power Fx deve implementar para cada requisito, respetivamente?\n1. Passar valores do ecrã atual ao mover-se para outro ecrã.\n2. Exibir dados a um utilizador quando o aplicativo está offline.",
        "options": [
            "1. Back() | 2. SaveData()",
            "1. Navigate() | 2. LoadData()",
            "1. MovePrevious() | 2. ShowDataOffline()",
            "1. Navigate() | 2. SaveData()"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda duas funcionalidades centrais dos Canvas Apps: navegação com passagem de contexto e funcionalidades offline nativas.",
            "papoReto": "Quando quer saltar do 'Ecrã A' para o 'Ecrã B' num Canvas App e levar um dado consigo (tipo o ID do cliente), utiliza a função Navigate. Se o utilizador ficar sem internet (offline) e quiser que ele veja os dados que foram previamente gravados na cache do telemóvel, tem de pedir à app para 'carregar os dados' com a função LoadData.",
            "respostaCerta": "1. Navigate() | 2. LoadData()",
            "puloDoGato": "A função `Maps` aceita um argumento de contexto opcional (UpdateContextRecord), que é o método exato para passar variáveis entre ecrãs (ex: `Maps(EcraDetalhes, ScreenTransition.None, {IDCliente: 123})`). Para as aplicações offline, usamos `SaveData` para gravar informações na cache local do dispositivo e `LoadData` para puxar (exibir) essas coleções de volta ao ecrã quando estamos sem rede.",
            "cascasDeBanana": [
                "Back(): Regressa ao ecrã anterior, mas NÃO permite passar novas variáveis de contexto.",
                "ShowDataOffline(): É uma função inventada que não existe na linguagem Power Fx.",
                "SaveData() para exibir: O SaveData serve para *guardar* o ficheiro localmente, não para o *exibir* (LoadData)."
            ],
            "dicaOuro": "Passar dados para novo ecrã = Navigate. Mostrar dados guardados offline = LoadData. Guardar dados para o offline = SaveData."
        }
    },
    {
        "id": "q52_topic1",
        "text": "Tem um aplicativo de tela (canvas app) que permite aos utilizadores visualizar, selecionar e comprar produtos.\nO aplicativo utiliza um controlo de Galeria (Gallery) para exibir os produtos e caixas de seleção (checkboxes) para os utilizadores os selecionarem.\nQuando os utilizadores selecionam itens do catálogo, eles movem-se para outro ecrã para concluir a compra. Os utilizadores devem conseguir limpar todas as seleções de produtos ao clicarem num botão 'Limpar Seleções'.\n\nComo deve configurar a ação deste botão?",
        "options": [
            "Utilizar a função Reset() e passar o controlo da galeria como parâmetro: Reset(Gallery1).",
            "Utilizar a função Reload() e passar a galeria como parâmetro.",
            "Utilizar a função ForAll() para iterar por cada item da Galeria e limpar as seleções.",
            "Definir a propriedade OnCheck para preencher uma coleção e o OnUncheck para remover. Usar Clear() na coleção ao clicar no botão."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão de desenvolvimento Canvas Apps. Atenção: O gabarito oficial desta prova, muitas vezes espalhado pela internet, costumava dar como certa a limpeza da coleção (Clear), mas a forma técnica correta e recomendada em Power Fx é a utilização da função Reset.",
            "papoReto": "Imagine que o utilizador marcou 10 produtos numa lista (Galeria) clicando naquelas 'caixinhas de seleção' (checkboxes). De repente, desiste e clica num botão 'Limpar tudo'. Como apagar todos os 'vistos' das caixinhas de uma só vez? Basta mandar a galeria inteira reiniciar para o seu estado original de fábrica usando a função Reset().",
            "respostaCerta": "Utilizar a função Reset() e passar o controlo da galeria como parâmetro: Reset(Gallery1).",
            "puloDoGato": "No Power Fx, a função `Reset(Control)` descarta todas as alterações feitas pelo utilizador num controlo e restaura os seus valores padrão (default). Quando o Reset é invocado para uma Galeria inteira (`Reset(Gallery1)`), a plataforma reinicia todos os controlos dentro da galeria (incluindo as checkboxes) para o seu valor inicial (que normalmente é 'false' / desmarcado). Esta é a forma mais performática sem ter de usar ciclos for.",
            "cascasDeBanana": [
                "Usar Clear() na coleção: O `Clear(Colecao)` apagaria os dados nos bastidores (memória), mas NÃO tiraria o 'visto' visual da checkbox que o utilizador marcou na galeria no ecrã. Para forçar a limpeza visual, teria de usar o Reset de qualquer forma.",
                "Usar Reload(): Essa função não existe para este contexto em Power Fx."
            ],
            "dicaOuro": "Limpar o estado visual de todos os controlos inseridos numa Galeria com um só clique = Reset(NomeDaGaleria)."
        }
    },
    {
        "id": "q53_topic1",
        "text": "Tem um aplicativo de tela (canvas app) que contém os seguintes campos de entrada de texto: Id, FirstName, LastName. O aplicativo também tem um botão chamado Button1. A propriedade OnSelect do Button1 contém a seguinte expressão:\nCollect(People, {Id: Id.Text, FirstName: FirstName.Text, LastName: LastName.Text})\n\nAvalie se as seguintes afirmações são Verdadeiras (Sim) ou Falsas (Não), respetivamente:\n1. A coleção 'People' é criada automaticamente se ainda não existir.\n2. Quando o Button1 é premido, se um registo com o valor atual de Id.Text já existir na coleção, os valores FirstName e LastName são atualizados.\n3. Se atualizar a expressão Collect para incluir o valor de um novo campo chamado 'Age' (Idade), isso resultará num erro.",
        "options": [
            "1. Sim | 2. Sim | 3. Sim",
            "1. Sim | 2. Não | 3. Não",
            "1. Não | 2. Não | 3. Sim",
            "1. Sim | 2. Não | 3. Sim"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão clássica sobre o comportamento da função `Collect` e coleções dinâmicas no Power Apps.",
            "papoReto": "Se mandar o Power Apps 'Colecionar' dados numa lista que não existe, ele cria-a na hora (Sim). Se mandar colecionar um ID que já lá está, ele não atualiza o antigo, simplesmente cria uma linha nova repetida, porque o Collect só adiciona no final da fila (Não). E se decidir adicionar uma coluna nova como a 'Idade' do nada? O Power Apps aceita na boa, porque as coleções são flexíveis e adaptam-se aos novos dados (Não dá erro).",
            "respostaCerta": "1. Sim | 2. Não | 3. Não",
            "puloDoGato": "A função `Collect` APENAS adiciona novos registos ao final de uma fonte de dados/coleção. Nunca atualiza registos existentes (para atualizar, usa-se o `Patch` ou `UpdateIf`). Além disso, as coleções locais no Canvas App não têm esquemas rígidos: pode adicionar colunas on-the-fly sem causar erros.",
            "cascasDeBanana": [
                "Achar que o Collect atualiza registos caso a chave primária (ID) seja a mesma. O Power Apps Canvas não assume que o campo 'Id' é uma chave primária exclusiva a menos que se use a função Patch diretamente conectada a uma base de dados estruturada."
            ],
            "dicaOuro": "Collect = Sempre Adiciona (Create). Patch = Adiciona ou Atualiza (Upsert)."
        }
    },
    {
        "id": "q54_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service.\nUm utilizador precisa de conseguir visualizar as publicações do sistema (system posts) e as atividades (activities) num dashboard.\nTem de criar o dashboard para o utilizador.\n\nQue componentes deve utilizar para cada requisito? Selecione a combinação correta na ordem:\n1. Exibir publicações do sistema (Display system posts).\n2. Exibir atividades (Display activities).",
        "options": [
            "1. Linha do Tempo (Timeline) | 2. Listas (Lists)",
            "1. Insights da Organização (Organization Insights) | 2. Relações (Relationship Insights)",
            "1. iFrame | 2. Listas (Lists)",
            "1. Linha do Tempo (Timeline) | 2. Insights Sociais (Social Insights)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na construção de Dashboards no Dynamics 365 e na escolha correta dos componentes visuais.",
            "papoReto": "Num dashboard do Dynamics, se quiser mostrar o mural onde o sistema avisa quem criou o quê ou as notas rápidas (system posts), usa o controlo 'Timeline' (Linha do Tempo). Agora, se quiser uma tabela simples a mostrar as 'Minhas Tarefas' ou 'Os Meus Emails Pendentes' (Atividades), atira para lá um componente de Lista (List / View).",
            "respostaCerta": "1. Linha do Tempo (Timeline) | 2. Listas (Lists)",
            "puloDoGato": "O componente 'Timeline' é o controlo padrão da Interface Unificada para centralizar Posts, Atividades e Anotações de um contexto específico ou de atualizações gerais. No entanto, num Dashboard de alto nível, para ver as grelhas estruturadas das Atividades abertas de um utilizador, usa-se o componente 'List' (que consome uma Vista/View de Atividades).",
            "cascasDeBanana": [
                "iFrame: Serve para incorporar páginas web externas, não para exibir nativamente os posts do sistema.",
                "Organization Insights: É um dashboard analítico para os administradores verem a adoção do sistema, não para o utilizador comum ver as suas tarefas diárias."
            ],
            "dicaOuro": "Dashboards clássicos para utilizadores comuns são maioritariamente construídos usando Listas (Views) e Gráficos (Charts). Para o 'feed de notícias' (Posts), use a Timeline."
        }
    },
    {
        "id": "q55_topic1",
        "text": "Uma empresa está a implementar o Power Apps e o Power Automate.\nVários componentes são criados dentro do Power Apps, Microsoft Dataverse e Power Automate. Estes componentes têm de ser promovidos do ambiente de desenvolvimento (development environment) para o ambiente de testes de aceitação do utilizador (UAT) num único pacote de solução (solution package).\n\nPrecisa de criar o pacote de solução para a promoção. Onde deve criar o pacote?",
        "options": [
            "Azure DevOps",
            "Designer do Power Apps (Maker Portal / Power Apps designer)",
            "Centro de administração da Power Platform (Power Platform admin center)",
            "Centro de administração do Office 365"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão fundamental sobre Gestão do Ciclo de Vida da Aplicação (ALM) e Soluções no Power Platform.",
            "papoReto": "Quer juntar as tabelas do Dataverse, os ecrãs do Power Apps e os fluxos do Power Automate num 'pacote' só para enviar para o ambiente de testes? Esse pacote chama-se 'Solução'. E o único sítio nativo onde se constroem e exportam Soluções manuais é na prancheta de desenho do Power Apps, ou seja, no Power Apps Designer (também conhecido como Maker Portal / make.powerapps.com).",
            "respostaCerta": "Designer do Power Apps (Maker Portal / Power Apps designer)",
            "puloDoGato": "As Soluções (Solutions) são os contentores usados para transportar componentes entre ambientes. São criadas, populadas e exportadas exclusivamente na secção 'Soluções' do Maker Portal (Power Apps designer).",
            "cascasDeBanana": [
                "Azure DevOps: O DevOps é uma ferramenta excelente usada para automatizar (pipelines CI/CD) a movimentação do pacote, mas o pacote em si tem de existir e ser criado primeiramente no Maker Portal.",
                "Centro de administração da Power Platform: Serve para gerir os ambientes físicos (criar, copiar, fazer backup), não para desenhar ou agrupar os pacotes de Solução que vão lá dentro."
            ],
            "dicaOuro": "Criar ou Exportar pacotes de Solução (Solution Packages) = Power Apps Designer (Maker Portal / make.powerapps.com)."
        }
    },
    {
        "id": "q56_topic1",
        "text": "Uma empresa está a criar uma solução no Power Apps para uma instalação de produção. A solução atual está em Inglês.\nOs componentes personalizados têm de ser traduzidos para vários idiomas.\nVocê precisa de extrair (exportar) o texto para tradução. Em que local pode atingir este objetivo?",
        "options": [
            "Nas tabelas (tables) individuais no aplicativo web.",
            "No ambiente selecionado dentro do Microsoft Power Platform admin center.",
            "Na Solução (Solution) no aplicativo web.",
            "Nos componentes individuais da solução no aplicativo web."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão avalia o conhecimento sobre localização e tradução de componentes de interface no Dataverse.",
            "papoReto": "Fez uma app toda em Inglês e agora o cliente quer em Português e Espanhol. Como extrair todos os textos dos botões, menus e colunas para enviar para o tradutor? Você não vai campo a campo ou componente a componente. Vai à página principal da Solução (onde agrupou tudo), clica no botão 'Exportar Traduções', e o sistema cospe um ficheiro Excel mágico com todos os rótulos de texto lá dentro.",
            "respostaCerta": "Na Solução (Solution) no aplicativo web.",
            "puloDoGato": "A funcionalidade 'Exportar Traduções' (Export Translations) só está disponível ao nível da Solução (Solution level). Você seleciona a Solução Não Gerida (Unmanaged) que contém os seus componentes e escolhe a opção para exportar as traduções. Depois de o tradutor preencher o Excel, volta ao mesmo menu da Solução para fazer a 'Importação das Traduções'.",
            "cascasDeBanana": [
                "Nos componentes individuais: Não existe um botão para exportar traduções olhando isoladamente para um botão ou tabela. O processo é aglomerado no nível do 'pacote' da Solução.",
                "Microsoft Power Platform admin center: O centro de administração ativa e instala pacotes de idiomas base (Language Packs da Microsoft), mas extrair as SUAS traduções personalizadas é feito dentro do Maker Portal, na Solução."
            ],
            "dicaOuro": "Exportar/Importar Traduções de customizações = É feito SEMPRE ao nível da Solução (Solution level)."
        }
    },
    {
        "id": "q57_topic1",
        "text": "[Atenção: Variação da Q53] Tem um aplicativo de tela (canvas app) que permite aos utilizadores visualizar, selecionar e comprar produtos.\nO aplicativo utiliza um controlo de Galeria (Gallery) para exibir os produtos e caixas de seleção (checkboxes) para os utilizadores os selecionarem.\nQuando os utilizadores selecionam itens do catálogo, eles movem-se para outro ecrã para concluir a compra. Os utilizadores devem conseguir limpar todas as seleções de produtos ao clicarem num botão.\n\nComo deve configurar a ação deste botão?",
        "options": [
            "Utilizar a função Reload(Control) e passar a galeria como parâmetro.",
            "Utilizar a função Reset(Control) e passar a caixa de seleção (checkbox) como parâmetro para limpar as seleções.",
            "Definir a propriedade OnCheck para preencher uma coleção e o OnUncheck para remover da coleção. Usar Clear() na coleção.",
            "Utilizar a fórmula Reset() e passar o controlo da galeria (gallery control) como parâmetro à fórmula."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma ótima oportunidade para revermos o mesmo conceito testado na questão 53. A Microsoft sabe que as coleções geram confusão visual no Power Apps.",
            "papoReto": "Mais uma vez: o utilizador marcou 10 produtos numa lista (Galeria) com aquelas 'caixinhas de seleção'. O utilizador desiste e clica em 'Limpar'. A forma mais limpa, rápida e correta de apagar todos os 'vistos' visuais das caixinhas numa só pancada é dizer à galeria inteira: 'Faz Reset para o estado inicial'.",
            "respostaCerta": "Utilizar a fórmula Reset() e passar o controlo da galeria (gallery control) como parâmetro à fórmula.",
            "puloDoGato": "No Power Fx, a função `Reset(NomeDaGaleria)` restaura todos os controlos dentro dessa galeria aos seus valores predefinidos (default). Como o padrão de uma checkbox é estar desmarcada (false), todas perdem o visto imediatamente. É infinitamente mais performático do que tentar manipular coleções manualmente apenas para atualizar o aspeto visual no ecrã.",
            "cascasDeBanana": [
                "Limpar a Coleção (Clear): Tal como explicado na Q53, limpar a coleção de dados não desmarca visualmente a checkbox que o utilizador clicou no ecrã. Teria de usar o Reset na mesma para apagar a marca visual.",
                "Reset(Checkbox): O Reset afeta apenas o controlo passado como parâmetro. Se passar apenas o controlo Checkbox de uma linha específica, não vai limpar as das outras linhas. Ao passar a Galeria inteira, resolve tudo."
            ],
            "dicaOuro": "Limpar o estado visual de todos os controlos numa Galeria inteira (como Checkboxes e TextInputs) com um só clique = Reset(NomeDaGaleria)."
        }
    },
    {
        "id": "q58_topic1",
        "text": "Um cliente regista eventos utilizando uma entidade personalizada (custom entity).\nA entidade personalizada inclui um campo personalizado para o 'local' (venue) dos eventos. O cliente tem de conseguir visualizar os eventos agrupados por local num formato de calendário.\nVocê precisa de garantir que todos os eventos são apresentados por local no calendário.\n\nEm que componente deve adicionar o controlo (Calendar control)?",
        "options": [
            "Formulário (Form)",
            "Subgrelha (Subgrid)",
            "Gráfico (Chart)",
            "Vista (View)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre onde aplicar Controlos Personalizados (Custom Controls) num Model-driven App para alterar drasticamente a experiência do utilizador.",
            "papoReto": "Se tem uma lista gigantesca de eventos debaixo da tabela 'Eventos' e quer deixar de ver isso como uma tabela do Excel para passar a ver num formato bonito de Calendário visual... onde aplica essa mudança? Aplica-a na 'Vista' (View) principal dessa tabela. Ao adicionar o controlo de Calendário à Vista, a lista transforma-se automaticamente numa agenda interativa.",
            "respostaCerta": "Vista (View)",
            "puloDoGato": "Controlos nativos que alteram a visualização de conjuntos de dados (como Calendário, Grelha Editável ou Kanban) são configurados ao nível da Tabela (Table/Entity) ou ao nível de Vistas (Views) específicas. Como o requisito diz 'exibir os eventos no formato de calendário', a View é o componente central para listar múltiplos registos em formatos variados.",
            "cascasDeBanana": [
                "Formulário (Form): Um formulário de um Model-driven App exibe o detalhe de APENAS UM registo de cada vez. Um calendário, por definição, precisa de uma lista de múltiplos registos para populá-lo.",
                "Subgrelha (Subgrid): Poderia tecnicamente colocar um controlo de calendário numa subgrelha dentro do formulário de um cliente específico. Mas o requisito pede para visualizar 'todos os eventos' no calendário, o que denota uma vista principal de tabela."
            ],
            "dicaOuro": "Transformar uma lista de registos globais num Calendário, num quadro Kanban ou numa Grelha Editável = Adicionar o controlo na Vista (View) ou Entidade (Table)."
        }
    },
    {
        "id": "q59_topic1",
        "text": "Você está a criar um aplicativo de tela (canvas app).\nUm utilizador irá clicar num botão em cada ecrã de uma aplicação Power Apps para avançar para o ecrã seguinte.\nVocê precisa de implementar a ação que direciona o utilizador para o próximo ecrã. Qual evento (propriedade) deve manipular?",
        "options": [
            "ScreenTransition",
            "OnSelect",
            "OnLoad",
            "OnCheck"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão básica mas fundamental sobre a interatividade e navegação nos Canvas Apps.",
            "papoReto": "Onde é que você coloca a fórmula (o código) para fazer um botão funcionar quando alguém clica nele? Na propriedade 'OnSelect'. É a tradução do Power Apps para o clássico 'Ao Clicar'. Lá dentro, escreveria algo como 'Navigate(Ecra2)'.",
            "respostaCerta": "OnSelect",
            "puloDoGato": "A propriedade `OnSelect` é o gatilho principal para botões, ícones e formas nos aplicativos de tela. É nela que inserimos a função `Maps()` para transitar entre ecrãs.",
            "cascasDeBanana": [
                "ScreenTransition: Isto é um parâmetro usado *dentro* da função Navigate (ex: ScreenTransition.Fade), mas não é um evento/propriedade do botão.",
                "OnCheck: É a propriedade disparada quando uma caixa de seleção (Checkbox) ou Toggle é marcada, não um botão de avanço padrão.",
                "OnLoad: Não existe nos botões do Power Apps (o mais próximo seria o OnVisible ao nível do ecrã)."
            ],
            "dicaOuro": "Clicar num botão no Canvas App = Evento OnSelect."
        }
    },
    {
        "id": "q60_topic1",
        "text": "Uma empresa tem um canvas app que inclui os seguintes ecrãs: Screen1 e Screen2.\nA propriedade OnVisible do Screen1 contém a seguinte expressão:\nSet(AgeGroups, [\"1-25\", \"26-54\", \"55+\"])\n\nAvalie se as seguintes afirmações são Verdadeiras (Sim) ou Falsas (Não), respetivamente:\n1. AgeGroups pode ser acedida a partir do Screen1 e do Screen2.\n2. AgeGroups é uma coleção (collection).\n3. Você pode usar a função Update para alterar valores dentro de AgeGroups.",
        "options": [
            "1. Sim | 2. Sim | 3. Não",
            "1. Sim | 2. Não | 3. Não",
            "1. Não | 2. Não | 3. Sim",
            "1. Não | 2. Sim | 3. Sim"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "ATENÇÃO: Muitos gabaritos na internet mostram a resposta errada para esta pergunta. Vamos focar-nos no funcionamento real e técnico do Power Fx para não cair em rasteiras.",
            "papoReto": "1º: A função 'Set' cria variáveis GLOBAIS. Se é global, funciona em qualquer ecrã? Sim! \n2º: O 'Set' criou uma coleção? Não. Ele criou uma variável global que guarda uma pequena tabela (array). Coleções criam-se com 'Collect' ou 'ClearCollect'. \n3º: Pode usar a função 'Update' nela? Não. A função 'Update' serve para modificar dados em Coleções ou Fontes de Dados, não em variáveis globais.",
            "respostaCerta": "1. Sim | 2. Não | 3. Não",
            "puloDoGato": "Regra de ouro do Power Fx: `Set()` cria variáveis Globais (acessíveis em toda a app). `UpdateContext()` cria variáveis Locais (acessíveis só no ecrã atual). `Collect()` cria Coleções. O código `[\"a\", \"b\"]` gera uma tabela de uma única coluna (single-column table), mas como foi guardada via `Set`, é tecnicamente uma variável global a armazenar uma tabela, e não uma Collection na definição estrita da plataforma (não aparece na aba 'Collections' e não aceita funções exclusivas de coleções).",
            "cascasDeBanana": [
                "Confiar nos gabaritos vazados que dizem 'Não, Não, Sim'. Isso indicaria que a variável não seria global (falso, pois usou Set) e que poderia usar o Update (falso, pois o Update pede uma Collection ou Data Source)."
            ],
            "dicaOuro": "Set = Variável Global (todos os ecrãs). Collect = Coleção. Update = Só se aplica a Coleções ou Fontes de Dados."
        }
    },
    {
        "id": "q61_topic1",
        "text": "Você é um programador do Dynamics 365 Customer Service.\nUm vendedor cria um gráfico (chart) pessoal no sistema.\nVocê precisa de garantir que esse gráfico fica disponível para ser visualizado por todos os utilizadores da equipa desse vendedor. O que deve fazer?",
        "options": [
            "Partilhar (Share) o gráfico com a equipa.",
            "Atribuir (Assign) o gráfico a cada pessoa da equipa.",
            "Exportar o gráfico do utilizador para o Power BI e importá-lo como uma visualização.",
            "Exportar o gráfico para ser importado como um gráfico de utilizador noutras contas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora as capacidades de colaboração e visualização de dados (dashboards e gráficos) no Dynamics 365 / Dataverse.",
            "papoReto": "Se um vendedor montou um gráfico de vendas espetacular e quer que os colegas da equipa o consigam ver e usar, ele não precisa de dar o gráfico aos outros (Atribuir) nem de fazer malabarismos a exportar ficheiros. Ele só precisa de clicar no gráfico e escolher 'Partilhar' (Share) com a equipa. Simples e direto.",
            "respostaCerta": "Partilhar (Share) o gráfico com a equipa.",
            "puloDoGato": "Os Gráficos Pessoais (User Charts) e Vistas Pessoais (Personal Views) pertencem a quem os cria (são user-owned). O proprietário pode partilhá-los (Share) facilmente com outros utilizadores ou equipas do Dataverse. Partilhar concede direitos de leitura (ou outros, se especificados) sem alterar a propriedade do registo.",
            "cascasDeBanana": [
                "Atribuir (Assign): O 'Assign' muda o dono (proprietário) do gráfico. Se o vendedor A atribuir o gráfico à equipa, ele deixa de ser o dono individual do gráfico, o que não é o objetivo (ele só quer que os outros vejam).",
                "Exportar/Importar: Uma solução absurdamente trabalhosa para um problema que o sistema resolve nativamente com o botão 'Partilhar'."
            ],
            "dicaOuro": "Permitir que outros vejam os seus gráficos/vistas pessoais = Partilhar (Share). Transferir a propriedade do seu gráfico para outra pessoa = Atribuir (Assign)."
        }
    },
    {
        "id": "q62_topic1",
        "text": "Você está a criar um aplicativo (model-driven app).\nVocê precisa de criar o mapa do site (Site Map) para o aplicativo.\nQuais são as três ações que deve executar em sequência para construir a navegação? Selecione a ordem correta:",
        "options": [
            "1. Adicionar um grupo (Add a group) -> 2. Adicionar uma área (Add an area) -> 3. Adicionar uma subárea (Add a subarea)",
            "1. Adicionar uma área (Add an area) -> 2. Adicionar uma subárea (Add a subarea) -> 3. Adicionar uma visualização (Add a view)",
            "1. Adicionar uma área (Add an area) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma subárea (Add a subarea)",
            "1. Adicionar uma subárea (Add a subarea) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma área (Add an area)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão visual e arquitetónica sobre como construir o menu lateral (Site Map) de um aplicativo orientado por modelo.",
            "papoReto": "Construir o menu de um Model-driven App é como construir uma casa. Primeiro compra o terreno (Área). Dentro do terreno, constrói as divisões (Grupos). E dentro das divisões, coloca os móveis (Subáreas - que são os links reais para as tabelas ou dashboards).",
            "respostaCerta": "1. Adicionar uma área (Add an area) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma subárea (Add a subarea)",
            "puloDoGato": "O Site Map Designer exige uma hierarquia estrita: Area > Group > Subarea. A 'Área' é o seletor principal no fundo do ecrã (ex: Vendas vs Serviço). O 'Grupo' é o título do menu (ex: Clientes). A 'Subárea' é o link clicável (ex: Contas, Contactos). Não é possível adicionar uma subárea sem ter primeiro um grupo, nem um grupo sem ter uma área.",
            "cascasDeBanana": [
                "Adicionar uma visualização (Add a view): As vistas (views) são adicionadas nas configurações da Entidade (Tabela) dentro do App Designer, e não na estrutura esqueleto de navegação do Site Map."
            ],
            "dicaOuro": "Decore a hierarquia de cima para baixo: Área (Area) -> Grupo (Group) -> Subárea (Subarea)."
        }
    },
    {
        "id": "q63_topic1",
        "text": "Você está a configurar um novo portal do Power Apps (Power Pages). Mantém as funções da web (web roles) predefinidas: uma para utilizadores autenticados e outra para utilizadores anónimos. Você concede a função de Utilizadores Anónimos aos utilizadores.\nUm utilizador de teste relata que consegue aceder à página inicial (home page), mas não consegue visualizar uma página vinculada a partir da página inicial.\nVocê precisa de determinar o motivo pelo qual o utilizador de teste não consegue visualizar a página do portal. Qual é a causa do problema?",
        "options": [
            "A configuração para tornar a página 'disponível para todos' (available to everyone) está desmarcada.",
            "As permissões herdadas (Inherited permissions) não estão ativadas para a página vinculada.",
            "A função web de Utilizadores Autenticados (Authenticated Users) não tem permissões para ver a página.",
            "O modo de manutenção (Maintenance mode) está ativado no portal."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão excelente sobre resolução de problemas (troubleshooting) de permissões em Portais (Power Pages).",
            "papoReto": "O seu utilizador não fez login (é anónimo). Ele entrou na página Home sem problemas. Clicou num link para ir para a 'Página B' e deu erro. O que aconteceu? A 'Página B' está trancada. No Portal do Power Apps, existe um botão (toggle) nas configurações da página que diz 'Página disponível para todos' (Page available to everyone). Se isso estiver desligado, os anónimos ficam à porta.",
            "respostaCerta": "A configuração para tornar a página 'disponível para todos' (available to everyone) está desmarcada.",
            "puloDoGato": "No Power Pages Design Studio, cada página web tem configurações de permissão. Se a opção 'Page available to everyone' for desmarcada, a página passa a exigir permissões específicas (Page Permissions) vinculadas a Web Roles de utilizadores autenticados. Logo, os anónimos perdem o acesso a essa sub-página específica, mesmo que tenham acedido à Home.",
            "cascasDeBanana": [
                "Utilizadores Autenticados não têm permissão (Opção C): O enunciado foca-se num utilizador de teste a aceder como 'Anónimo', logo, o que acontece com o papel de Autenticados é irrelevante para este teste específico.",
                "Modo de manutenção (Opção D): Se estivesse em modo de manutenção, o utilizador nem a página Home conseguiria ver (veria apenas o ecrã de manutenção)."
            ],
            "dicaOuro": "Página anónima com erro de acesso isolado = A opção 'Disponível para todos' (Available to everyone) foi desativada nessa página."
        }
    },
    {
        "id": "q64_topic1",
        "text": "Você está a criar um novo portal do Power Apps (Power Pages) para uma pequena empresa. O portal é um site interno. Apenas utilizadores autenticados podem aceder ao conteúdo. Você precisa de configurar a autenticação e as permissões.\n\nQual componente deve configurar para cada requisito, respetivamente?\n1. Necessário para cada utilizador autenticado antes que a segurança lhe possa ser atribuída.\n2. Necessário para que utilizadores autenticados acedam a páginas restritas do portal.",
        "options": [
            "1. Registo da tabela Contacto (Contact table record) | 2. Função web (Web role)",
            "1. Utilizador Local (Local user) | 2. Registo da tabela Contacto (Contact table record)",
            "1. Conta Microsoft (Microsoft account) | 2. Função web (Web role)",
            "1. Registo da tabela Contacto (Contact table record) | 2. Azure Active Directory"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a compreensão fundamental de como as identidades são armazenadas e geridas num Portal (Power Pages).",
            "papoReto": "Num Portal, não existe a entidade 'Utilizador do Portal'. Toda a gente que faz login no seu site é gravada na base de dados como um 'Contacto' (Contact). Depois de ter o Contacto guardado, como é que lhe dá acesso à página secreta VIP? Associando esse Contacto a uma 'Função Web' (Web Role) que tenha as permissões corretas.",
            "respostaCerta": "1. Registo da tabela Contacto (Contact table record) | 2. Função web (Web role)",
            "puloDoGato": "No ecossistema Power Pages / Power Apps Portals, qualquer identidade autenticada (seja via Azure AD, Google, Facebook ou local) é mapeada para um registo na tabela 'Contact' no Dataverse. A gestão de permissões para ver páginas específicas ou registos de tabelas é sempre feita através das 'Web Roles'.",
            "cascasDeBanana": [
                "Utilizador Local (Local user) / Conta Microsoft: Isto são 'Identity Providers' (Provedores de Identidade), ou seja, como a pessoa faz login. Mas a pergunta foca no que o sistema *precisa de ter criado* internamente antes de atribuir segurança, que é o registo do Contacto."
            ],
            "dicaOuro": "Utilizador do Portal = Registo de Contacto. Permissões no Portal = Web Role."
        }
    },
    {
        "id": "q65_topic1",
        "text": "Você cria um portal para fornecer um website para os clientes. O negócio exige que um tema personalizado seja aplicado à interface do portal.\n\nVocê precisa de identificar os locais para realizar configurações específicas. Qual opção de configuração deve usar para cada requisito, respetivamente?\n1. Gerar/Aplicar o tema padrão (Standard theme generated).\n2. Configurar o URL para aceder ao site (URL to access the site).",
        "options": [
            "1. Estúdio dos Portais (Portals Studio) | 2. Centro de administração de portais do Power Apps (Power Apps portals admin center)",
            "1. Aplicação de Gestão do Portal (Portal management app) | 2. Estúdio dos Portais (Portals Studio)",
            "1. Estúdio dos Portais (Portals Studio) | 2. Definições de sistema do Dataverse (Dataverse system settings)",
            "1. Definições de sistema do Dataverse | 2. Centro de administração de portais do Power Apps"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão sobre as diferentes interfaces de administração e configuração de um Portal.",
            "papoReto": "Onde mexe nas cores, no layout e no tema do site? Numa interface visual e intuitiva chamada 'Estúdio dos Portais' (Portals Studio / Power Pages Design Studio). Onde mexe no endereço da web (URL), reinicia o servidor ou adiciona certificados SSL? Numa interface mais técnica de TI: o Centro de Administração de Portais do Power Apps.",
            "respostaCerta": "1. Estúdio dos Portais (Portals Studio) | 2. Centro de administração de portais do Power Apps (Power Apps portals admin center)",
            "puloDoGato": "A arquitetura de Portais divide as ferramentas de criação: o 'Portals Studio' (agora evoluído para Design Studio no Power Pages) é focado na Interface do Utilizador (temas, componentes de ecrã). Já o 'Power Apps Portals admin center' é focado no alojamento do site (Hostname, URL personalizados, modo de manutenção, chaves e reinício do site).",
            "cascasDeBanana": [
                "Aplicação de Gestão do Portal (Portal Management app): É um model-driven app usado para configurações avançadas de dados (criar Web Roles, trechos de código, definições de site), mas não gera temas padronizados visualmente nem altera o URL base no servidor."
            ],
            "dicaOuro": "Visual e Temas = Portals Studio. Domínio, URL e Servidor = Power Apps portals admin center."
        }
    },
    {
        "id": "q66_topic1",
        "text": "Uma empresa vende produtos utilizando um portal do Power Apps. Você precisa de criar um novo aplicativo de tela (canvas app) que listará todos os utilizadores do portal. O aplicativo será usado por todos os colaboradores para gerir o acesso ao portal.\n\nVocê precisa de criar o aplicativo. O que deve fazer?",
        "options": [
            "Criar o aplicativo utilizando a tabela Conta (Account) como fonte de dados.",
            "Utilizar o aplicativo Gestão do Portal (Portal Management app).",
            "Criar o aplicativo utilizando a tabela Contacto (Contact) como fonte de dados.",
            "Criar um aplicativo orientado por modelo (model-driven app) usando a tabela Contacto."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta é a continuação prática do conceito ensinado na Questão 67, focada no desenvolvimento de apps internas.",
            "papoReto": "Se lhe pedirem para criar uma App que lista as pessoas que têm login no seu site/portal de clientes, a que tabela é que a sua App se tem de ligar? À tabela 'Contacto' (Contact). O portal guarda todos os seus membros como contactos comuns no Dataverse.",
            "respostaCerta": "Criar o aplicativo utilizando a tabela Contacto (Contact) como fonte de dados.",
            "puloDoGato": "O requisito explícito da pergunta é 'criar um novo canvas app' que liste os 'utilizadores do portal'. Como sabemos que a identidade de um utilizador de portal no Dataverse reside na tabela Contact, o Canvas App deve utilizar a tabela Contact como a sua fonte de dados primária.",
            "cascasDeBanana": [
                "Criar um model-driven app (Opção D): A questão pede expressamente para criar um 'canvas app' (aplicativo de tela). Escolher o model-driven estaria a ignorar o requisito direto.",
                "Utilizar o Portal Management app: Isto é uma app existente (nativa) gerida por administradores e não um 'novo canvas app' que você iria construir para a equipa."
            ],
            "dicaOuro": "Listar ou gerir Utilizadores de um Portal/Power Pages num Power App = Conectar à tabela Contacto (Contact)."
        }
    },
    {
        "id": "q67_topic1",
        "text": "Você gere um portal para uma empresa que permite aos utilizadores agendar eventos.\nO portal deve permitir que utilizadores externos iniciem sessão usando as suas contas Microsoft pessoais (Ex: Hotmail, Outlook). Além disso, os colaboradores devem iniciar sessão através do Microsoft Entra ID (Azure AD).\nQuando os utilizadores externos iniciam sessão pela primeira vez, o seu registo de contacto deve ser criado automaticamente, sem exigir um código de convite.\n\nComo deve definir as seguintes configurações de autenticação (Sim/Não)?\n1. Início de sessão externo (External sign-in)\n2. Registo aberto (Open registration)",
        "options": [
            "1. Sim | 2. Sim",
            "1. Sim | 2. Não",
            "1. Não | 2. Sim",
            "1. Não | 2. Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de configuração de Autenticação em Portais. Teste direto aos conceitos de External Login e Open Registration.",
            "papoReto": "A questão diz: 'Podem entrar com o Hotmail?' Sim, isso é login externo ('External sign-in: Sim'). A questão diz também: 'Eles podem entrar e o sistema cria a conta sozinhos sem precisar de convite do administrador?' Sim, qualquer pessoa na internet com um Hotmail pode registar-se. A porta está aberta ('Open registration: Sim').",
            "respostaCerta": "1. Sim | 2. Sim",
            "puloDoGato": "No Power Pages: \n'External sign-in' = Permitir provedores de identidade que não sejam o login local do site (como Azure AD B2C, Microsoft Account, LinkedIn, etc).\n'Open registration' = Se estiver ativado (Yes), qualquer utilizador autenticado externamente é automaticamente adicionado como Contacto sem precisar de um convite prévio do CRM. É ideal para portais de consumo público.",
            "cascasDeBanana": [
                "Colocar 'Open registration' como 'Não': Se estivesse configurado como 'Não', o utilizador precisaria de receber um e-mail da sua empresa com um Código de Convite (Invitation Code) para só depois resgatá-lo no portal e vincular a sua conta Microsoft."
            ],
            "dicaOuro": "Criar o contacto automaticamente ao fazer login sem código de convite = Open Registration: YES."
        }
    },
    {
        "id": "q68_topic1",
        "text": "Está a configurar a autenticação de um portal do Power Apps (Power Pages) destinado apenas a utilizadores internos e parceiros pré-aprovados. Não quer que qualquer pessoa na internet consiga criar uma conta livremente, nem quer permitir logins através de redes sociais (como o Facebook ou Google).\n\nComo deve configurar as opções 'Registo Aberto' (Open Registration) e 'Início de Sessão Externo' (External Sign-in)? (Selecione a combinação correta)",
        "options": [
            "Registo Aberto: Não | Início de Sessão Externo: Não",
            "Registo Aberto: Sim | Início de Sessão Externo: Sim",
            "Registo Aberto: Não | Início de Sessão Externo: Sim",
            "Registo Aberto: Sim | Início de Sessão Externo: Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre o controlo de acessos e criação de contas em Portais (Power Pages).",
            "papoReto": "Se o site é privado e por convite, você tranca a porta para não entrar qualquer um (Registo Aberto = Não). E se não quer que usem o Facebook/Google para entrar, desliga as opções externas (External Sign-in = Não).",
            "respostaCerta": "Registo Aberto: Não | Início de Sessão Externo: Não",
            "puloDoGato": "'Open Registration' permite que um utilizador crie o seu próprio registo de Contacto no Dataverse sem intervenção do administrador. Para cenários corporativos estritos, isto deve estar em 'No', exigindo um código de convite (Invitation Code). Desativar o 'External Sign-in' bloqueia provedores de identidade comerciais, forçando o login local ou via Azure AD exclusivo (dependendo da configuração base).",
            "cascasDeBanana": [
                "Deixar o Open Registration como 'Sim' permitiria a criação de utilizadores fantasma ou indesejados na base de dados do Dataverse, sujando a tabela de Contactos."
            ],
            "dicaOuro": "Portal Exclusivo/Fechado = Open Registration 'No'."
        }
    },
    {
        "id": "q69_topic1",
        "text": "A sua empresa criou um portal do Power Apps (Power Pages) e precisa de garantir que o portal corresponde exatamente à identidade visual da marca (branding).\nUm web designer forneceu-lhe um ficheiro CSS personalizado com os estilos da empresa.\n\nComo deve aplicar este ficheiro CSS personalizado ao portal?",
        "options": [
            "Aceder ao Estúdio dos Portais (Portals Studio / Design Studio), abrir o painel de Temas (Themes) e fazer o upload do ficheiro CSS personalizado.",
            "No Power Platform Admin Center, selecionar o portal e carregar o ficheiro no separador de Branding.",
            "Abrir a Aplicação de Gestão do Portal (Portal Management app) e colar o código CSS na página inicial.",
            "Criar um Fluxo do Power Automate para injetar o CSS no cabeçalho do portal."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão prática sobre personalização avançada de Interface de Utilizador (UI) no Power Pages / Portais.",
            "papoReto": "Tem um ficheiro CSS pronto? Não precisa de complicar. Abre o estúdio de design do portal, vai à secção onde escolhe as cores (Temas) e clica em 'Carregar CSS'. O portal assume logo o estilo por cima do que já existe.",
            "respostaCerta": "Aceder ao Estúdio dos Portais (Portals Studio / Design Studio), abrir o painel de Temas (Themes) e fazer o upload do ficheiro CSS personalizado.",
            "puloDoGato": "No Design Studio do Power Pages (antigo Portals Studio), o espaço de trabalho 'Estilo' (Styling / Themes workspace) permite nativamente fazer o upload de ficheiros `.css` personalizados. Ele substitui ou complementa o Bootstrap padrão (theme.css) usado pelo portal.",
            "cascasDeBanana": [
                "Aplicação de Gestão do Portal (Portal Management app): Embora permita adicionar 'Web Files' (Ficheiros Web) manuais, a forma direta, moderna e correta exigida pela Microsoft para aplicar *Temas CSS globais* é o upload via Design Studio.",
                "Power Platform Admin Center: Este painel gere infraestrutura (servidor, certificados, URLs), não lida com ficheiros de estilo de front-end (CSS)."
            ],
            "dicaOuro": "Aplicar CSS personalizado global ao Portal = Fazer upload via Portals Studio (Painel de Temas / Styling)."
        }
    },
    {
        "id": "q70_topic1",
        "text": "Você precisa de criar uma nova tabela personalizada (custom table) no Dataverse para gerir 'Projetos'.\nOs requisitos de segurança ditam que cada Projeto deve pertencer a um utilizador específico ou a uma equipa, para que possa restringir o acesso com base na unidade de negócios.\nAlém disso, os utilizadores precisam de conseguir associar e-mails, tarefas e reuniões telefónicas diretamente a estes Projetos.\n\nQue definições deve selecionar ao criar a tabela? (Selecione a combinação correta de Propriedade e Ativação)",
        "options": [
            "Propriedade: Utilizador ou Equipa (User or team) | Ativar: Fazer desta tabela uma tabela de Atividades (Make this table an activity table).",
            "Propriedade: Organização (Organization) | Ativar: Criar uma nova atividade (Create a new activity).",
            "Propriedade: Utilizador ou Equipa (User or team) | Ativar: Ativar para atividades (Enable for activities).",
            "Propriedade: Organização (Organization) | Ativar: Ativar para atividades (Enable for activities)."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Modelação básica e fundamental de dados no Dataverse, avaliando propriedades estruturais que NÃO podem ser alteradas depois de a tabela ser criada.",
            "papoReto": "Quem é o dono do projeto? Se é uma pessoa específica (o Gestor de Projeto), a propriedade tem de ser 'Utilizador ou Equipa'. Como é que eu guardo os e-mails do Outlook e as tarefas colados à ficha deste projeto? Tenho de ligar a opção 'Ativar para atividades'. Pronto, as duas caixas estão verificadas!",
            "respostaCerta": "Propriedade: Utilizador ou Equipa (User or team) | Ativar: Ativar para atividades (Enable for activities).",
            "puloDoGato": "'Ownership' (Propriedade) define o modelo de segurança. Se precisa de acesso baseado no dono (Owner) ou na sua Unidade de Negócios (BU), tem de ser 'User or team'. Para permitir que a tabela receba e agrupe atividades relacionadas (via campo 'Regarding' / 'Referente a'), DEVE marcar a caixa 'Enable for activities'. Atenção: ambas as definições são permanentes!",
            "cascasDeBanana": [
                "Fazer desta tabela uma tabela de Atividades (Make this table an activity table): ISTO É UMA ARMADILHA CLÁSSICA! Ligar esta opção transformaria o próprio 'Projeto' num tipo de atividade (como se fosse um e-mail ou um compromisso na agenda), em vez de ser uma tabela de negócio que *recebe* atividades."
            ],
            "dicaOuro": "Registo com dono específico = User or Team. Registo que recebe/agrega e-mails e tarefas = Enable for activities."
        }
    },
    {
        "id": "q71_topic1",
        "text": "Está a criar um canvas app e um model-driven app para gerir contas de clientes. O canvas app requer uma regra de negócios (business rule) para definir a coluna 'Tipo de Negócio' como 'Grande' se o tamanho do cliente for superior a um valor específico. O model-driven app requer uma regra de negócios para recomendar a reavaliação da classificação da conta quando esta for suspensa por crédito apenas neste formulário específico do aplicativo.\n\nQual o escopo (scope) que deve configurar para cada regra de negócios, respetivamente?",
        "options": [
            "1. Tabela (Table/Entity) | 2. Formulário Específico (Specific form)",
            "1. Todos os Formulários (All forms) | 2. Tabela (Table)",
            "1. Formulário Específico (Specific form) | 2. Todos os Formulários (All forms)",
            "1. Tabela (Table) | 2. Todos os Formulários (All forms)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma excelente questão para diferenciar como as Regras de Negócios se aplicam dependendo do tipo de aplicativo e da necessidade.",
            "papoReto": "Se a regra vai rodar num Canvas App, ela tem de rodar no motor da base de dados (no servidor), logo o escopo é 'Tabela'. Se a regra é para rodar *apenas* num ecrã/formulário específico de um Model-driven app, o escopo é 'Formulário Específico'.",
            "respostaCerta": "1. Tabela (Table/Entity) | 2. Formulário Específico (Specific form)",
            "puloDoGato": "Canvas apps não interpretam regras de negócios aplicadas à Interface de Utilizador (como 'Todos os Formulários'). Para um Canvas App respeitar uma Business Rule, o escopo TEM de ser 'Entity' (Tabela), pois assim a regra é validada no lado do servidor antes de gravar o dado. Para o model-driven app, como o requisito diz 'apenas neste aplicativo' (referindo-se a um formulário dedicado), aplica-se ao 'Formulário Específico'.",
            "cascasDeBanana": [
                "Todos os Formulários (All forms): Usar isto para o Canvas App não funcionaria. Usar isto para o Model-driven app violaria a regra de aplicar a reavaliação *apenas* àquele formulário específico."
            ],
            "dicaOuro": "Regra a funcionar num Canvas App ou Integração = Escopo de Entidade/Tabela (Entity Scope)."
        }
    },
    {
        "id": "q72_topic1",
        "text": "Planeia criar fluxos de interface de utilizador (UI flows / Power Automate Desktop) para automatizar vários processos de negócio baseados na web que atualmente executa manualmente. Precisa de garantir que os utilizadores conseguem criar e executar estes fluxos.\n\nQuais os três componentes que deve instalar e configurar nos dispositivos dos utilizadores?",
        "options": [
            "Power Automate Desktop, Última versão do Microsoft Edge, Gateway de dados no local (On-premises data gateway).",
            "Selenium IDE, Última versão do Mozilla Firefox, Gateway de dados no local (On-premises data gateway).",
            "Power Automate Desktop, Selenium IDE, Gateway de dados no local.",
            "Última versão do Microsoft Edge, Última versão do Mozilla Firefox, Selenium IDE."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda a arquitetura de RPA (Robotic Process Automation) da Microsoft para automações locais.",
            "papoReto": "Para pôr o seu computador a clicar em botões e preencher formulários web sozinho a partir da nuvem, precisa de três coisas: O programa que grava e executa os cliques (Power Automate Desktop), um browser compatível e atualizado (Edge ou Chrome), e a 'ponte' que liga a nuvem da Microsoft ao seu PC físico (Gateway de dados no local).",
            "respostaCerta": "Power Automate Desktop, Última versão do Microsoft Edge, Gateway de dados no local (On-premises data gateway).",
            "puloDoGato": "A infraestrutura de 'UI Flows' (agora chamados de Desktop Flows) requer o Power Automate Desktop instalado na máquina local, uma extensão num browser moderno (o Edge é o preferencial/nativo da Microsoft) e o 'On-premises data gateway' para que os fluxos da Cloud (Power Automate web) consigam desencadear os fluxos na máquina física com segurança.",
            "cascasDeBanana": [
                "Selenium IDE: No início dos UI Flows (versões antigas do Power Automate), o Selenium IDE era usado para automatizar a web. Hoje em dia, a Microsoft construiu os seus próprios gravadores web integrados no Power Automate Desktop, tornando o Selenium obsoleto para este processo nativo."
            ],
            "dicaOuro": "Automação no PC físico a partir da Cloud = Power Automate Desktop + Browser (Edge/Chrome) + On-premises Data Gateway."
        }
    },
    {
        "id": "q73_topic1",
        "text": "Está a desenhar um fluxo de interface de utilizador (UI flow / Desktop flow) para automatizar um software legado (legacy software). Precisa de capturar (preparar) dados do ecrã do software legado para os transferir para uma lista do Microsoft SharePoint.\n\nQuais são as quatro ações que deve executar em sequência para capturar a informação do ecrã antigo?",
        "options": [
            "1. Iniciar a gravação do fluxo -> 2. No menu Outputs, escolher 'Selecionar texto no ecrã' -> 3. Selecionar a informação a passar para o SharePoint -> 4. Inserir um nome e descrição para o output.",
            "1. Iniciar a gravação do fluxo -> 2. Selecionar a informação a passar para o SharePoint -> 3. Copiar e colar o texto na janela de definição de output -> 4. Inserir um nome e descrição.",
            "1. No menu Outputs, escolher 'Selecionar texto no ecrã' -> 2. Iniciar a gravação do fluxo -> 3. Selecionar a informação -> 4. Parar a gravação.",
            "1. Inserir nome e descrição do output -> 2. Iniciar a gravação -> 3. Selecionar informação no ecrã -> 4. Copiar e colar o texto."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão sobre a operação prática do gravador do Power Automate Desktop (RPA).",
            "papoReto": "Vai ensinar o computador a copiar um texto de um programa velho. Primeiro, clica em 'Gravar' (Start recording). Depois, diz à ferramenta que quer extrair e guardar um texto que está no ecrã (Outputs > Select text on screen). A seguir, com o rato, faz a seleção da área que tem a informação. Por fim, dá um nome a esse pedaço de texto (ex: 'NomeDoCliente') para poder usá-lo mais à frente e mandar para o SharePoint.",
            "respostaCerta": "1. Iniciar a gravação do fluxo -> 2. No menu Outputs, escolher 'Selecionar texto no ecrã' -> 3. Selecionar a informação a passar para o SharePoint -> 4. Inserir um nome e descrição para o output.",
            "puloDoGato": "A captura de dados em fluxos RPA (Desktop flows) para uso posterior na cloud (SharePoint, Dataverse, etc.) é feita definindo 'Outputs' (Saídas). Durante a gravação, você sinaliza ao gravador que uma determinada área da interface do utilizador contém um texto que você quer ler. O gravador gera uma variável de output dinamicamente.",
            "cascasDeBanana": [
                "Copiar e colar o texto na janela de definição de output: Errado. Em RPA, você não 'copia e cola' manualmente para definir a estrutura; você usa a ferramenta de seleção visual de elementos da interface (UI elements) para que o robô saiba onde tem de ler o dado na próxima vez que correr."
            ],
            "dicaOuro": "Gravar ações RPA -> Avisar que quer um Output -> Clicar no elemento visual -> Nomear a variável de Output."
        }
    },
    {
        "id": "q74_topic1",
        "text": "Você possui um fluxo de processo empresarial (business process flow).\nVocê precisa de atualizar o fluxo de processo empresarial (BPF) enquanto minimiza os esforços de administração e manutenção.\n\nQue funcionalidade deve utilizar para cada requisito? (Selecione a combinação correta na ordem)\n1. Permitir que os utilizadores naveguem para a fase (stage) anterior apenas a partir de fases específicas.\n2. Criar registos de checklist em fases específicas a pedido (on demand).",
        "options": [
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Passo de Ação (Action step)",
            "1. Passo de Ação (Action step) | 2. Fluxo Clássico (Classic workflow)",
            "1. Fluxo Clássico (Classic workflow) | 2. Passo de Ação (Action step)",
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Fluxo Clássico (Classic workflow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na extensibilidade dos Fluxos de Processo Empresarial (BPFs).",
            "papoReto": "Se quiser criar um botão dentro da fase do processo para a pessoa clicar e gerar uma checklist na hora, usa um 'Passo de Ação' (Action step). Mas se precisar de uma lógica complexa nos bastidores que force o processo a voltar atrás automaticamente dependendo de onde o utilizador está, a melhor forma com menos manutenção é usar um fluxo do Power Automate acionado por eventos do BPF.",
            "respostaCerta": "1. Fluxo do Power Automate (Power Automate flow) | 2. Passo de Ação (Action step)",
            "puloDoGato": "Um 'Action Step' permite adicionar um botão diretamente numa fase do BPF para desencadear um fluxo on-demand. Para automatizar o recuo de fases baseado em lógica condicional sem código pesado, o Power Automate pode aceder às tabelas do BPF (tabela de histórico do processo) e atualizar a 'Active Stage' (Fase Ativa) de forma automática e dinâmica.",
            "cascasDeBanana": [
                "Fluxos clássicos (Classic workflows) também podem interagir com BPFs, mas o enunciado pede para *minimizar os esforços de administração e manutenção*. A Microsoft recomenda sempre o Power Automate em detrimento dos workflows clássicos para novas automações complexas de BPFs."
            ],
            "dicaOuro": "Botão on-demand dentro do BPF = Action Step. Automação de salto de fases/lógica complexa no BPF = Power Automate Flow."
        }
    },
    {
        "id": "q75_topic1",
        "text": "Você está a criar um novo fluxo de processo empresarial (BPF) para qualificar leads.\nVocê cria uma 'Ação' (Action / Processo clássico), mas repara que ela não está disponível para ser selecionada dentro do 'Passo de Ação' (Action Step) do seu BPF.\nVocê precisa de disponibilizar a ação para o Action Step. Quais são as DUAS configurações que deve realizar?",
        "options": [
            "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Adicionar pelo menos um passo à ação.",
            "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Selecionar 'Executar como um processo a pedido' (Run as an on demand process) na Ação.",
            "A) Selecionar 'Executar como um processo a pedido' na Ação. E B) Ativar (Activate) a ação.",
            "A) Ativar a ação. E B) Adicionar pelo menos um passo à ação."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão de troubleshooting ao tentar ligar um Processo Clássico (Ação/Workflow) a um Fluxo de Processo Empresarial (BPF).",
            "papoReto": "Criou uma ação e quer colocá-la como botão no seu BPF? Se não aparece na lista, é porque falhou em duas regras de ouro: 1) O botão está na fase do 'Lead'? Então a Ação também tem de ter o 'Lead' como entidade principal. 2) O botão é clicado 'quando o utilizador quer', ou seja, a Ação tem de estar configurada para correr 'A Pedido' (On Demand).",
            "respostaCerta": "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Selecionar 'Executar como um processo a pedido' (Run as an on demand process) na Ação.",
            "puloDoGato": "Para um workflow clássico ou 'Ação' aparecer num 'Action Step' (Passo de Ação) de um BPF, ele tem de partilhar a mesma entidade primária da fase (stage) onde está a ser inserido, e a opção 'Run as an on demand process' (Executar como processo a pedido) DEVE estar obrigatoriamente ativada nas propriedades do processo.",
            "cascasDeBanana": [
                "Ativar a ação (Activate): É verdade que um processo tem de estar ativo para ser *utilizado*, mas mesmo antes de o ativar, se ele for On Demand e da mesma entidade, ele já aparece disponível para ser *selecionado* durante a configuração do BPF no editor. O bloqueio de visibilidade resolve-se com o On Demand e o match de entidades."
            ],
            "dicaOuro": "Processos não aparecem no BPF? Verifique: 1) Mesma Entidade. 2) Marcado como 'On Demand'."
        }
    },
    {
        "id": "q76_topic1",
        "text": "Você planeia automatizar vários processos diferentes utilizando o Power Automate (RPA / UI Flows).\nCada processo tem características únicas. Precisa de recomendar o tipo de fluxo para cada processo.\n\nSelecione a combinação correta para os seguintes processos, respetivamente:\n1. Aceder a dados de uma aplicação web interna (sem API REST nativa) como parte de uma tarefa em lote noturna (nightly batch job).\n2. Aceder a dados de um site público (sem API) usando um processo através de uma fila a pedido (on-demand queue).",
        "options": [
            "1. Fluxo de IU Assistido (Attended UI flow) | 2. Fluxo de IU Não Assistido (Unattended UI flow)",
            "1. Fluxo de IU Não Assistido (Unattended UI flow) | 2. Fluxo de IU Assistido (Attended UI flow)",
            "1. Fluxo que usa conector personalizado | 2. Fluxo de IU Não Assistido",
            "1. Fluxo de IU Não Assistido | 2. Fluxo que usa conector padrão"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa a distinção entre os dois modos de operação dos Fluxos de Interface de Utilizador (RPA / Desktop Flows).",
            "papoReto": "Se é um robô a correr de madrugada (nightly batch job) sem ninguém a olhar para o ecrã, é 'Não Assistido' (Unattended). Se é um robô que dispara 'a pedido' (on-demand) para ajudar um operador a ir buscar dados a um site público no momento em que ele precisa, é 'Assistido' (Attended).",
            "respostaCerta": "1. Fluxo de IU Não Assistido (Unattended UI flow) | 2. Fluxo de IU Assistido (Attended UI flow)",
            "puloDoGato": "UI Flows (atualmente Power Automate Desktop) resolvem a falta de APIs interagindo diretamente com a interface. O modo 'Unattended' (Não Assistido) executa em máquinas virtuais ou PCs bloqueados sem intervenção humana, ideal para tarefas agendadas ('nightly batch'). O modo 'Attended' (Assistido) executa na máquina do utilizador ativo, ideal para cenários iniciados a pedido ('on-demand').",
            "cascasDeBanana": [
                "Conectores personalizados/padrão: O enunciado diz claramente 'sem API REST' (without a REST API). Sem API, nenhum conector cloud tradicional vai funcionar, sendo obrigatório o uso de RPA (UI flows / Desktop flows)."
            ],
            "dicaOuro": "Sem API = UI Flow / RPA. Tarefa noturna autónoma = Unattended. A pedido de um utilizador local = Attended."
        }
    },
    {
        "id": "q77_topic1",
        "text": "[Nota: Esta é uma variação da Questão 4] Você cria fluxos de trabalho (workflows) para automatizar processos de negócios. Precisa de criar um fluxo de trabalho que envie e-mails automaticamente com base num modelo de mala direta (mail merge template). O fluxo de trabalho deve conter as seguintes configurações:\n1. Executar imediatamente.\n2. Validar quando uma condição é cumprida.\n3. Executar uma ação quando a condition é cumprida.\n\nSelecione as opções de configuração corretas na ordem solicitada:",
        "options": [
            "1. Configurar o fluxo de trabalho para executar agora (run now) | 2. Assunto contém dados | 3. Enviar um e-mail",
            "1. Aprovar o fluxo de trabalho | 2. Publicar fluxo de trabalho | 3. Ver gráfico",
            "1. Configurar o fluxo de trabalho para executar agora | 2. Disparar quando um botão do Power Automate for premido | 3. Atualizar um direito de acesso",
            "1. Configurar fluxo filho para executar agora | 2. Assunto contém dados | 3. Enviar um e-mail"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Como a Microsoft adora testar a sua atenção, esta é a mesma questão 4 que vimos anteriormente, mas os requisitos foram apresentados numa ordem diferente!",
            "papoReto": "Pediram-lhe para enviar o e-mail na mesma hora? Então configura para 'executar agora'. O envio só deve acontecer se houver uma condição válida? Então verifique se o 'Assunto contém dados'. O que acontece no fim? 'Enviar um e-mail'. Simples e cronológico.",
            "respostaCerta": "1. Configurar o fluxo de trabalho para executar agora | 2. Assunto contém dados | 3. Enviar um e-mail",
            "puloDoGato": "A opção 'Configurar o fluxo de trabalho para executar agora' (Configure the workflow to run now) garante a execução imediata (síncrona / Real-time workflow). A validação de condição é o passo de 'Verificação' (ex: Assunto contém dados). A ação resultante é a operação final (Enviar um e-mail).",
            "cascasDeBanana": [
                "Configurar fluxo filho (child workflow): Não há necessidade de chamar um fluxo secundário se o próprio fluxo principal pode correr em tempo real e enviar o e-mail sozinho.",
                "Disparar quando um botão é premido: É uma trigger manual do Power Automate, não responde à premissa de avaliar uma condição automaticamente do workflow clássico."
            ],
            "dicaOuro": "Mala direta imediata = Workflow Clássico em tempo real (Run Now) -> Condição -> Ação."
        }
    },
    {
        "id": "q78_topic1",
        "text": "Você está a desenvolver um aplicativo de tela (canvas app).\nPrecisa de aplicar regras de negócios (business rules) ao aplicativo sem escrever código.\nQuais as três ações que pode utilizar? (Selecione a combinação correta que apresenta as três ações válidas para um Canvas App)",
        "options": [
            "Validar dados e mostrar mensagens de erro | Definir níveis de obrigatoriedade de campos | Definir valores de campos.",
            "Mostrar ou ocultar campos | Ativar ou desativar campos | Validar dados e mostrar mensagens de erro.",
            "Definir níveis de obrigatoriedade de campos | Mostrar ou ocultar campos | Definir valores de campos.",
            "Ativar ou desativar campos | Definir níveis de obrigatoriedade de campos | Validar dados e mostrar mensagens de erro."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão extremamente comum no exame para testar as limitações das Business Rules quando aplicadas a Canvas Apps.",
            "papoReto": "Num Canvas App, as Regras de Negócios não conseguem mexer na interface visual (o ecrã). Ou seja, elas NÃO conseguem esconder (hide), mostrar (show), bloquear (disable) ou desbloquear (enable) campos. Isso tem de ser feito com fórmulas no próprio Canvas. O que a Regra de Negócios consegue fazer num Canvas App? Apenas regras de DADOS: dizer se o campo é obrigatório, meter um valor por defeito lá dentro, ou atirar um erro se o dado for inválido.",
            "respostaCerta": "Validar dados e mostrar mensagens de erro | Definir níveis de obrigatoriedade de campos | Definir valores de campos.",
            "puloDoGato": "As Regras de Negócios no Dataverse, quando ativadas com o escopo 'Entity' (Entidade), funcionam nos Canvas Apps apenas ao nível do servidor/backend. Ações que manipulam o DOM/Interface de Utilizador (como Mostrar/Ocultar colunas, Ativar/Desativar colunas, ou Criar Recomendações Visuais) SÓ funcionam nativamente em Model-driven apps.",
            "cascasDeBanana": [
                "Mostrar ou ocultar campos (Show or hide fields): Inválido em Canvas Apps.",
                "Ativar ou desativar campos (Enable or disable fields): Inválido em Canvas Apps."
            ],
            "dicaOuro": "Canvas App + Business Rule = Só valida DADOS (Valores, Obrigatoriedade, Erros). NÃO manipula o aspeto VISUAL (Mostrar, Ocultar, Bloquear)."
        }
    },
    {
        "id": "q79_topic1",
        "text": "Uma empresa planeia utilizar o Power Automate para aumentar a eficiência dos colaboradores.\nVocê precisa de recomendar os tipos de fluxos que a empresa deve usar.\nQual tipo de fluxo deve recomendar para as seguintes tarefas, respetivamente?\n1. Executar ações repetitivas num aplicativo existente que NÃO possui uma API.\n2. Enviar um e-mail a um contacto no dia do seu aniversário.",
        "options": [
            "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Agendado (Scheduled flow)",
            "1. Fluxo Automatizado (Automated flow) | 2. Fluxo Instantâneo (Instant flow)",
            "1. Fluxo de Processo Empresarial (Business process flow) | 2. Fluxo Agendado (Scheduled flow)",
            "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Automatizado (Automated flow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de correspondência entre cenários de negócio e os tipos de fluxos disponíveis no Power Automate.",
            "papoReto": "O sistema não tem API (forma de comunicar com a nuvem)? Então precisa de um robô a imitar cliques de rato e teclado na máquina local. Isso é um Desktop Flow (RPA). E quer mandar uma mensagem exatamente no dia do aniversário? É um robô com hora e data marcadas no calendário, ou seja, um Scheduled Flow.",
            "respostaCerta": "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Agendado (Scheduled flow)",
            "puloDoGato": "Qualquer menção a 'sistemas antigos', 'software legado' ou 'sem API' (without an API) direciona automaticamente a resposta para RPA, que no ecossistema da Microsoft se chama 'Desktop flow' (antigo UI flow). Eventos baseados numa data ou periodicidade (como nascimentos, final do mês, todas as sextas-feiras) são geridos de forma impecável pelos 'Scheduled flows' (Fluxos Agendados).",
            "cascasDeBanana": [
                "Fluxo Automatizado para o aniversário: Os fluxos automatizados disparam mediante um evento num sistema (ex: 'Quando um registo é criado'). Um aniversário não é um 'evento' do sistema que dispara no dia, é um dado estático. Requer uma verificação periódica no calendário (Scheduled)."
            ],
            "dicaOuro": "Sem API = Desktop Flow. Datas e horas específicas = Scheduled Flow."
        }
    },
    {
        "id": "q80_topic1",
        "text": "Uma empresa está a criar um Fluxo de Processo Empresarial (BPF) para analisar a probabilidade de um cliente comprar um produto. As classificações vão de 0 a 100. As probabilidades atribuídas são:\n- 0-35: Baixa (Low)\n- 36-60: Média (Medium)\n- 60-75: Alta (High)\n- Mais de 75 (75+): Muito Alta (Very High)\n\nVocê precisa de definir os passos do BPF sabendo que *toda a lógica deve ser incluída numa única instrução de avaliação (single evaluation statement)*.\n\nQue passo deve usar para os intervalos 0-35, 36-60 e 75+ respetivamente?",
        "options": [
            "1. Ação Padrão (Default Action) | 2. Ramificação Condicional (Conditional Branch) | 3. Ramificação Condicional (Conditional Branch)",
            "1. Verificar Condição (Check Condition) | 2. Ação Padrão (Default Action) | 3. Ramificação Condicional (Conditional Branch)",
            "1. Passo Personalizado (Custom Step) | 2. Ramificação Condicional | 3. Verificar Condição",
            "1. Ação Padrão | 2. Verificar Condição | 3. Ação Padrão"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é uma questão sobre lógica de ramificação (Branching Logic) dentro dos Fluxos de Processo Empresarial (BPF).",
            "papoReto": "Se estamos a criar uma condição grande com vários 'E se...' (If... Else If...), a regra final, aquela que sobra quando nenhuma das outras é verdadeira, chama-se 'Ação Padrão' (Default Action). Neste caso, as pontuações mais altas vão sendo apanhadas pelas Ramificações Condicionais. O que sobrar (o fundo do poço, 0-35), cai na Ação Padrão.",
            "respostaCerta": "1. Ação Padrão (Default Action) | 2. Ramificação Condicional (Conditional Branch) | 3. Ramificação Condicional (Conditional Branch)",
            "puloDoGato": "No design de BPFs, quando se adiciona uma Condição, é possível criar lógicas complexas (If / Else If / Else). As cláusulas intermédias ('Else If' > 75, > 60, > 35) são construídas usando 'Conditional Branches'. O caminho que é executado caso nenhuma condição anterior seja satisfeita (o 'Else' puro) é modelado com a 'Default Action' (Ação Padrão).",
            "cascasDeBanana": [
                "Verificar Condição (Check Condition): O 'Check condition' é o nó global, não o conector/passo interno de cada linha de ramificação. O exercício pede o tipo de passo para os intervalos específicos dentro do nó de avaliação único."
            ],
            "dicaOuro": "Em ramificações complexas no BPF: If/Else If = Conditional Branch (Ramificação Condicional). O último Else (sobra) = Default Action (Ação Padrão)."
        }
    },
    {
        "id": "q81_topic1",
        "text": "Você está a criar uma solução na Power Platform. Precisa de ajudar os utilizadores finais a compreender quais as ações a tomar a seguir e garantir que a interação do utilizador ocorre em passos geríveis.\n\nQuais as ações que deve executar? Selecione a combinação correta para os seguintes requisitos, respetivamente:\n1. Guiar o utilizador sobre as ações a tomar.\n2. Garantir que a interação do utilizador ocorre em passos geríveis.",
        "options": [
            "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar cada fase (stage) com as ações que precisam de ser concluídas.",
            "1. Configurar fluxos de trabalho (workflows) | 2. Configurar a linha do tempo (timeline) ou o formulário.",
            "1. Configurar vistas e gráficos (views and charts) | 2. Configurar insights.",
            "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar a linha do tempo (timeline) ou o formulário."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca no propósito conceptual dos Fluxos de Processo Empresarial (Business Process Flows - BPFs).",
            "papoReto": "Se quer pegar num processo complexo (como vender um carro) e dividi-lo em partes fáceis para o utilizador não se perder, cria aquela barrinha no topo do ecrã (Fluxo de Processo Empresarial). Para garantir que ele faz as coisas certas aos poucos, divide essa barra em 'Fases' (Stages) e, dentro de cada fase, coloca as 'Tarefas' (Steps/Actions) obrigatórias.",
            "respostaCerta": "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar cada fase (stage) com as ações que precisam de ser concluídas.",
            "puloDoGato": "Os Business Process Flows servem exatamente para 'guiar o utilizador' (guide the user). Eles são divididos em 'Stages' (Fases - ex: Qualificar, Propor, Fechar) e cada Stage é composto por 'Steps' ou 'Data Steps' (Passos geríveis), garantindo que o utilizador preenche a informação correta na hora certa.",
            "cascasDeBanana": [
                "Configurar a linha do tempo (timeline): A timeline serve para registar o histórico de atividades (e-mails, notas, tarefas), não para criar um caminho estruturado de etapas obrigatórias de negócio."
            ],
            "dicaOuro": "Palavras-chave: 'Guiar o utilizador' + 'Passos/Fases geríveis' = Business Process Flow (BPF) > Stages > Steps."
        }
    },
    {
        "id": "q82_topic1",
        "text": "Você está a desenvolver um aplicativo.\nTem de acionar uma notificação móvel sempre que uma hashtag específica for publicada no Twitter (X). A notificação enviará um e-mail com os detalhes para a equipa de redes sociais da empresa.\nPrecisa de criar uma ligação ao serviço do Twitter e construir a solução.\n\nQuais são as quatro ações que deve realizar em sequência?",
        "options": [
            "1. Iniciar sessão no Power Automate e criar um novo fluxo em branco -> 2. Selecionar o conector do Twitter e usar as credenciais do utilizador -> 3. Criar um gatilho (trigger) para pesquisar novas publicações com a hashtag -> 4. Criar uma ação para enviar um e-mail.",
            "1. Criar um gatilho para enviar um e-mail -> 2. Iniciar sessão no Power Automate -> 3. Selecionar o conector do Twitter -> 4. Criar uma ação para pesquisar a hashtag.",
            "1. Iniciar sessão no centro de administração da Power Platform -> 2. Criar uma ação para pesquisar a hashtag -> 3. Selecionar o conector do Twitter -> 4. Criar um gatilho para enviar e-mail.",
            "1. Selecionar o conector do Twitter e gerar uma chave de autenticação -> 2. Criar um fluxo em branco -> 3. Criar uma ação para enviar e-mail -> 4. Criar um gatilho para pesquisar a hashtag."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão muito lógica sobre a construção básica de um Cloud Flow no Power Automate.",
            "papoReto": "Como se faz um fluxo do zero? Primeiro, abre o Power Automate e cria um fluxo em branco. Segundo, escolhe a ferramenta com que vai falar (o Twitter) e faz login (credenciais). Terceiro, diz ao fluxo o que o vai fazer acordar (o Gatilho: 'Alguém usou a hashtag!'). Quarto, diz-lhe o que fazer a seguir (a Ação: 'Manda um e-mail').",
            "respostaCerta": "1. Iniciar sessão no Power Automate... -> 2. Selecionar o conector do Twitter... -> 3. Criar um gatilho (trigger)... -> 4. Criar uma ação para enviar um e-mail.",
            "puloDoGato": "A anatomia universal de um fluxo do Power Automate é: Criação do Flow -> Autenticação do Conector (Connection) -> Configuração do Gatilho (Trigger - O QUANDO) -> Configuração da Ação (Action - O QUE FAZER).",
            "cascasDeBanana": [
                "Inverter Trigger e Action (ex: Criar gatilho para enviar e-mail): O envio de e-mail é a consequência, logo é uma Ação (Action). A publicação no Twitter é o que inicia o fluxo, logo é o Gatilho (Trigger)."
            ],
            "dicaOuro": "Ordem sagrada do Power Automate: Iniciar -> Autenticar -> Gatilho (Trigger) -> Ação (Action)."
        }
    },
    {
        "id": "q83_topic1",
        "text": "Você gere aplicativos da Microsoft Power Platform para uma empresa.\nPrecisa de ocultar o botão 'Fluxo' (Flow / Power Automate) na interface de utilizador.\n\nQual definição de configuração deve alterar?",
        "options": [
            "O Mapa do Site (The SiteMap)",
            "A secção de Personalizações nas Definições do Sistema (The Customizations section of System Settings)",
            "O componente de Entidade da solução padrão (The Entity component of the default solution)",
            "O separador Botões (The Buttons tab) do Flow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta é uma daquelas questões de 'decoração de menu' que testa se o candidato já navegou a fundo nas configurações clássicas de sistema do Dynamics/Dataverse.",
            "papoReto": "Sabe aquele botão 'Power Automate' (antigo Flow) que aparece por defeito no topo das vistas e formulários nos Model-driven apps? Se a sua empresa não quiser que os utilizadores cliquem lá, tem de ir às definições antigas do sistema, no separador 'Personalização' (Customizations) e desmarcar a caixa 'Mostrar botão Flow'.",
            "respostaCerta": "A secção de Personalizações nas Definições do Sistema (The Customizations section of System Settings)",
            "puloDoGato": "Para ocultar o botão 'Flow' (agora muitas vezes referido como 'Power Automate') globalmente na Interface Unificada, o administrador deve aceder às Definições Avançadas > Definições do Sistema (System Settings) > Separador Personalizações (Customizations tab) e definir 'Enable Microsoft Flow' ou 'Show Microsoft Flow button' para Não (No).",
            "cascasDeBanana": [
                "O Mapa do Site (SiteMap): O SiteMap controla o menu lateral esquerdo (áreas e subáreas), não os botões da barra de comandos (Command Bar / Ribbon).",
                "O separador Botões do Flow: Não existe um 'separador botões' nas configurações do Power Automate para controlar a interface do Dataverse."
            ],
            "dicaOuro": "Ocultar globalmente o botão 'Flow/Power Automate' no Model-driven App = System Settings > Customizations Tab."
        }
    },
    {
        "id": "q84_topic1",
        "text": "Você configura e testa um fluxo de interface de utilizador (UI flow / Desktop flow). Planeia executar o fluxo como um fluxo agendado (scheduled flow).\nO fluxo tem de correr num dispositivo Windows 10. Como parte da automação, o fluxo deve iniciar sessão no Windows 10 com as credenciais de uma conta de utilizador chamada User1.\nVocê precisa de garantir que o fluxo corre fora das horas de ponta e não requer intervenção física do utilizador (unattended).\n\nO que deve fazer?",
        "options": [
            "Garantir que a conta User1 tem uma sessão de utilizador ativa no dispositivo.",
            "Garantir que todas as sessões de utilizador têm a sessão terminada (signed out).",
            "Garantir que não existem sessões de utilizador ativas no dispositivo.",
            "Garantir que todas as sessões de utilizador têm a sessão terminada, exceto as sessões bloqueadas."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão avalia os rigorosos pré-requisitos para correr um robô RPA no modo 'Não Assistido' (Unattended).",
            "papoReto": "Se o robô (Power Automate Desktop) vai trabalhar de madrugada sozinho, ele precisa de 'ligar o ecrã' e fazer o login com o utilizador e a password dele. Se alguém tiver deixado a sessão aberta (mesmo que bloqueada com o ecrã preto), o robô não consegue entrar e o fluxo falha. A máquina tem de estar completamente 'limpa' no ecrã de login inicial.",
            "respostaCerta": "Garantir que todas as sessões de utilizador têm a sessão terminada (signed out).",
            "puloDoGato": "Para que um fluxo de ambiente de trabalho (Desktop Flow) corra em modo Unattended, o On-premises Data Gateway precisa de fazer o login na máquina do zero. Se existir *qualquer* sessão com o status 'Sign in' (iniciada ou bloqueada), o serviço aborta a execução.",
            "cascasDeBanana": [
                "Exceto sessões bloqueadas (Locked sessions): Uma sessão bloqueada continua a consumir recursos de um perfil de utilizador e impede o robô de assumir o controlo total para injetar credenciais.",
                "Sessão ativa do User1: Isso seria para o modo 'Assistido' (Attended), onde o utilizador já está logado a ver o ecrã."
            ],
            "dicaOuro": "Modo Unattended RPA = A máquina TEM de ter todas as sessões com 'Sign Out' (Sessão Terminada)."
        }
    },
    {
        "id": "q85_topic1",
        "text": "Uma empresa planeia enviar e-mails de escalonamento (escalation) a todos os clientes com faturas em atraso. Você está a criar um fluxo do Microsoft Power Automate para determinar se deve enviar um e-mail de escalonamento.\nO sistema tem de enviar um alerta para todas as faturas que tenham sete dias ou mais de atraso.\n\nVocê precisa de configurar o fluxo. Qual expressão deve utilizar?",
        "options": [
            "@greaterOrEquals(triggerOutputs()?['OverdueDate'], 7)",
            "'OverdueDate' >= 7 || triggerBody(); false",
            "triggerBody() = 'OverdueDate' >= 7;",
            "@equals(triggerBody()?['OverdueDate'], 7)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma introdução à Workflow Definition Language (WDL), as fórmulas utilizadas nos bastidores do Power Automate.",
            "papoReto": "Para verificar se um valor é 'maior ou igual a 7', o Power Automate não usa os símbolos matemáticos normais (>=) dentro destas expressões avançadas. Ele usa a palavra descritiva '@greaterOrEquals'. Entre parênteses coloca de onde vem o valor (os outputs do gatilho), a vírgula, e o número com o qual quer comparar (7).",
            "respostaCerta": "@greaterOrEquals(triggerOutputs()?['OverdueDate'], 7)",
            "puloDoGato": "As expressões lógicas no Power Automate seguem uma sintaxe baseada em funções. Para comparações, utilizam-se funções como `equals`, `less`, `greater`, `lessOrEquals` e `greaterOrEquals`. As opções que utilizam operadores como `>=` ou `||` num formato JavaScript/C# puro estão incorretas dentro do editor de expressões do Power Automate.",
            "cascasDeBanana": [
                "'OverdueDate' >= 7 || triggerBody(): Esta sintaxe é uma misturada que geraria um erro imediato no Expression Builder do Power Automate."
            ],
            "dicaOuro": "Condições e comparações no Power Automate usam funções textuais precedidas de @ em formato raw (ex: @greaterOrEquals) e não símbolos matemáticos tradicionais (>=)."
        }
    },
    {
        "id": "q86_topic1",
        "text": "Você adiciona um fluxo de processo empresarial (Business Process Flow - BPF) à tabela Conta (Account). O fluxo tem três fases (stages).\nVocê precisa de garantir que um fluxo de trabalho (workflow) possa ser executado quando um utilizador conclui a fase final.\n\nQual a opção que deve utilizar na configuração desse workflow?",
        "options": [
            "Iniciar quando (Start when): O estado do registo for alterado (Record status changes)",
            "Disponível para executar (Available to run): Executar este fluxo de trabalho em segundo plano (Run this workflow in the background)",
            "Disponível para executar (Available to run): Como um processo a pedido (As an on demand process)",
            "Disponível para executar (Available to run): Como um processo subordinado (As a child process)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Alerta de conceito vital! Esta é exatamente a mesma regra que vimos na Questão 78, mas aplicada à transição de fases (Stage Exit/Entry).",
            "papoReto": "Sempre que quiser enfiar um Workflow Clássico para dentro da barra do Business Process Flow (seja num botão Action Step ou para disparar sozinho quando muda de fase), o sistema de segurança do Dynamics obriga a que esse Workflow tenha a caixa 'A Pedido' (On Demand) ativada. Ponto final.",
            "respostaCerta": "Disponível para executar (Available to run): Como um processo a pedido (As an on demand process)",
            "puloDoGato": "Para que um fluxo de trabalho (Workflow) fique disponível no editor do Fluxo de Processo Empresarial (BPF) como um 'Workflow Step' (seja Trigger de Entry ou Trigger de Exit de uma Stage), ele DEVE ser marcado como 'Run as an on demand process' e partilhar a mesma entidade da fase (stage) onde está a ser configurado.",
            "cascasDeBanana": [
                "Executar em segundo plano (Run in the background): Embora os workflows associados a BPFs possam correr em background, essa marcação isoladamente não o faz aparecer no editor do BPF. Apenas o 'On Demand' destranca essa funcionalidade."
            ],
            "dicaOuro": "Para ligar Workflows Clássicos a BPFs (seja Stage Entry, Stage Exit ou Action Step) = Marcar 'Run as an on demand process'."
        }
    },
    {
        "id": "q87_topic1",
        "text": "Você precisa de criar um fluxo de ambiente de trabalho do Power Automate (Power Automate Desktop flow).\n\nQuais são as duas formas possíveis de criar o fluxo? (Selecione a combinação correta que apresenta os dois métodos completos)",
        "options": [
            "1. Gravar eventos de rato e teclado E 2. Usar ações pré-construídas (pre-built actions).",
            "1. Configurar um modelo pré-construído E 2. Usar ações pré-construídas.",
            "1. Gravar eventos de rato e teclado E 2. Criar modelos utilizando o Microsoft Visio.",
            "1. Usar ações pré-construídas E 2. Criar modelos utilizando o Microsoft Visio."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia a sua experiência básica com a ferramenta Power Automate Desktop (PAD) para automação robótica (RPA).",
            "papoReto": "Como é que se ensina um robô a fazer tarefas no seu PC? Tem duas formas oficiais: Ou clica no botão 'Gravar' (Recorder) e deixa o sistema filmar onde você clica e o que você escreve; Ou vai à caixa de ferramentas do lado esquerdo, pega nos blocos já feitos (tipo Lego) de 'Abrir Excel', 'Clicar Botão', 'Enviar Email', e arrasta para o meio do ecrã.",
            "respostaCerta": "1. Gravar eventos de rato e teclado E 2. Usar ações pré-construídas (pre-built actions).",
            "puloDoGato": "O Power Automate Desktop permite desenhar fluxos manualmente arrastando e soltando 'pre-built actions' (centenas de ações de ficheiros, UI, Web, Excel, etc.) do painel esquerdo, OU usando o 'Recorder' (gravador de Desktop/Web) para capturar automaticamente os cliques do rato e eventos do teclado. Os dois métodos são frequentemente usados em conjunto.",
            "cascasDeBanana": [
                "Criar modelos utilizando o Microsoft Visio: O Visio pode ser usado (através de um Add-in) para mapear processos para o Power Automate na *cloud* (Cloud Flows), mas NÃO é uma ferramenta usada para gerar RPA (Desktop Flows) que dependem de seletores de UI locais do computador."
            ],
            "dicaOuro": "Criação de Desktop Flows (RPA) = Gravador (Recorder) + Ações Pré-construídas (Drag and Drop UI Elements)."
        }
    },
    {
        "id": "q88_topic1",
        "text": "Você está a usar o Power Automate para criar uma lista de clientes a partir de um ficheiro do Microsoft Excel.\nA lista deve conter clientes que cumpram UM dos seguintes critérios:\n- Vendas (sales) inferiores a 500.000 €\n- Clientes que têm o crédito suspenso (credit hold).\nVocê precisa de criar uma condição para filtrar a lista de clientes.\n\nComo deve completar a condição de filtro (expressão WDL)? Selecione as duas partes corretas, respetivamente:\n\n@[ _____ ](less(item()?['sales'], 500000), \n  [ _____ ])",
        "options": [
            "1. and | 2. equals(item()?['credithold'], 'true')",
            "1. or | 2. equals(item()?['credithold'], 'true')",
            "1. or | 2. empty(item()?['credithold'], 'true')",
            "1. not | 2. not(equals(item()?['credithold'], 'true'))"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão de sintaxe avançada do Power Automate (WDL - Workflow Definition Language).",
            "papoReto": "O problema diz que queremos clientes com menos de 500 mil em vendas OU que tenham o crédito cortado. A palavra mágica é 'OU'. Na linguagem do Power Automate, isso traduz-se para a função lógica `or(...)`. E para ver se o crédito cortado é verdadeiro? Verificamos se é igual a 'true' utilizando a função `equals(...)`.",
            "respostaCerta": "1. or | 2. equals(item()?['credithold'], 'true')",
            "puloDoGato": "A função `or` recebe dois argumentos e retorna verdadeiro se *pelo menos um* for verdadeiro. A função `equals` verifica a igualdade exata entre dois valores. A expressão completa formatada seria `@or(less(item()?['sales'], 500000), equals(item()?['credithold'], 'true'))`.",
            "cascasDeBanana": [
                "Usar 'and': Exigiria que o cliente tivesse vendas baixas E estivesse com o crédito suspenso simultaneamente, o que contraria o requisito 'um dos seguintes critérios'.",
                "Usar 'empty': A função `empty` apenas verifica se o campo está vazio/nulo, não avalia se o seu valor é especificamente 'true'."
            ],
            "dicaOuro": "Lógica 'Um ou Outro' = função or(). Verificar se contém um valor específico = função equals()."
        }
    },
    {
        "id": "q89_topic1",
        "text": "Uma quinta (farm) utiliza um aplicativo de tela (canvas app) para gerir os calendários de plantação de sementes. A quinta utiliza inteligência de negócio (business intelligence) para fornecer recomendações de alterações de calendário com base em dados meteorológicos.\nVocê deve implementar uma regra de negócios (business rule) que altere a informação em vários formulários no canvas app com base nos dados de business intelligence.\n\nQual o escopo (scope) que deve usar na regra de negócios?",
        "options": [
            "Tabela (Table / Entity)",
            "Todos os Formulários (All Forms)",
            "Formulário específico (Form specific)",
            "Global"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Alerta máximo de repetição! Este conceito já foi testado nas Questões 7 e 74. A Microsoft não quer mesmo que se esqueça disto.",
            "papoReto": "Quantas vezes a Microsoft quer que saiba isto? Se a regra vai rodar num Canvas App, o Canvas App não entende os 'Formulários' clássicos do Dynamics. Para a regra funcionar lá, tem de ser atirada diretamente para o 'motor' da base de dados. O nome desse escopo é 'Tabela' (antigamente chamado 'Entidade').",
            "respostaCerta": "Tabela (Table / Entity)",
            "puloDoGato": "Regras de negócio com escopo 'All Forms' ou 'Specific Form' funcionam exclusivamente no lado do cliente (client-side) dentro de Model-driven apps. Para que a lógica corra no servidor (server-side) e seja respeitada por Canvas Apps, Portais (Power Pages) ou integrações por API, o escopo TEM obrigatoriamente de ser 'Table' (Entity).",
            "cascasDeBanana": [
                "Todos os Formulários (All Forms): Esta é a casca de banana perfeita. Como o enunciado diz 'vários formulários no canvas app', o instinto é escolher 'All Forms'. Mas lembre-se: os formulários do Canvas não são reconhecidos pelo motor de Business Rules do Dataverse!"
            ],
            "dicaOuro": "Regra de Negócio a funcionar num Canvas App ou API = Escopo 'Table' (Entidade)."
        }
    },
    {
        "id": "q90_topic1",
        "text": "Você faz as seguintes personalizações num ambiente do Microsoft Dataverse:\n- Cria uma nova tabela.\n- Adiciona dados a essa nova tabela.\n- Elimina uma área não utilizada do mapa do site (site map).\n\nOs componentes devem ser transportados para um ambiente diferente. Você precisa de determinar o método correto para transportar cada componente.\nQual a ferramenta/método que deve utilizar para cada um, respetivamente (1. Nova tabela | 2. Dados para a nova tabela | 3. Mapa do Site)?",
        "options": [
            "1. Solução | 2. Ferramenta de Migração da Configuração (Configuration Migration tool) | 3. Solução",
            "1. Solução | 2. Solução | 3. Ferramenta SolutionPackager",
            "1. Ferramenta de Migração da Configuração | 2. Solução | 3. Solução",
            "1. Ferramenta SolutionPackager | 2. Ferramenta de Migração da Configuração | 3. Solução"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de ALM (Application Lifecycle Management) sobre como mover estrutura (metadados) versus mover dados transacionais entre ambientes.",
            "papoReto": "Se é estrutura da casa (como uma Tabela Nova ou o Menu/Site Map), você empacota isso numa 'Solução' e manda para o outro ambiente. Mas as Soluções não transportam os móveis (os dados normais)! Para passar as linhas e registos que inseriu na tabela, tem de usar uma carrinha de mudanças específica chamada 'Configuration Migration tool'.",
            "respostaCerta": "1. Solução | 2. Ferramenta de Migração da Configuração (Configuration Migration tool) | 3. Solução",
            "puloDoGato": "Soluções no Dataverse são usadas unicamente para mover metadados e estrutura (Tabelas, Campos, Vistas, Dashboards, Site Maps, Fluxos, etc.). Os *dados transacionais/cadastrais* reais dentro dessas tabelas NÃO viajam dentro da solução. Para mover registos de configuração ou dados de base entre ambientes de forma relacional, a Microsoft fornece a 'Configuration Migration tool'.",
            "cascasDeBanana": [
                "SolutionPackager tool: Esta é uma ferramenta de linha de comandos avançada usada para extrair ficheiros zip de soluções para ficheiros XML individuais com o objetivo de fazer controlo de versões (Git/DevOps). Não é usada na interface gráfica para empacotar o site map."
            ],
            "dicaOuro": "Mover Estrutura (Tabelas, Menus/Site Maps) = Solução (Solution). Mover Linhas de Dados reais (Records/Data) = Configuration Migration Tool."
        }
    },
    {
        "id": "q91_topic1",
        "text": "Uma empresa planeia adicionar outro idioma a um ambiente do Microsoft Dataverse. Foram adicionados ou modificados vários componentes no ambiente. Você precisa de garantir que esses componentes sejam traduzidos. Qual método deve utilizar para cada tipo de componente? Selecione a combinação correta, respetivamente, para:\n1. Vista (View)\n2. Modelo de e-mail (Email template)\n3. Relatório (Report)",
        "options": [
            "1. Exportar e reimportar texto traduzido | 2. Criar uma versão separada para cada idioma | 3. Utilizar rótulos incorporados (embedded labels)",
            "1. Utilizar rótulos incorporados | 2. Exportar e reimportar texto traduzido | 3. Criar uma versão separada para cada idioma",
            "1. Criar uma versão separada para cada idioma | 2. Utilizar rótulos incorporados | 3. Exportar e reimportar texto traduzido",
            "1. Exportar e reimportar texto traduzido | 2. Utilizar rótulos incorporados | 3. Criar uma versão separada para cada idioma"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão prática sobre a tradução e localização de diferentes tipos de componentes no Dataverse.",
            "papoReto": "Para traduzir as tabelas e ecrãs do sistema (Vistas), nós exportamos um ficheiro mágico (Excel), traduzimos, e reimportamos. Mas os Modelos de E-mail não suportam essa magia, logo temos de criar 'à mão' uma versão do e-mail para PT, outra para EN, etc. Já para os velhos Relatórios do SSRS, a tradução tem de estar colada (incorporada) no próprio ficheiro do relatório.",
            "respostaCerta": "1. Exportar e reimportar texto traduzido | 2. Criar uma versão separada para cada idioma | 3. Utilizar rótulos incorporados (embedded labels)",
            "puloDoGato": "Vistas (Views) fazem parte dos metadados da Solução, por isso suportam a funcionalidade nativa 'Export/Import Translations'. Os Modelos de E-mail (Email templates) são tratados como registos de dados (data records) com a sua própria flag de idioma, pelo que deve criar um template separado por idioma. Relatórios antigos baseados em SSRS (Reports) não integram nativamente com as traduções do Dataverse, exigindo rótulos incorporados no RDL ou múltiplas versões.",
            "cascasDeBanana": [
                "Tentar usar 'Exportar Traduções' para Email Templates: O sistema de exportação da solução apenas extrai nomes de colunas, botões da fita, títulos de formulários e opções, não o conteúdo de texto dos modelos de e-mail."
            ],
            "dicaOuro": "Vistas/Formulários = Export/Import Translations. Email Templates = Separated version per language."
        }
    },
    {
        "id": "q92_topic1",
        "text": "Uma empresa utiliza o Power Apps. Os utilizadores devem conseguir visualizar APENAS as colunas 'address1' na tabela Conta (Account). Você precisa de garantir que outras colunas de endereço não sejam visíveis para os utilizadores quando estes criarem vistas (views) e filtros.\n\nO que deve fazer?",
        "options": [
            "Eliminar as outras colunas de endereço da tabela.",
            "Desativar a opção de Pesquisa (Search) para as colunas.",
            "Utilizar segurança ao nível da coluna (Column-level security) para remover o acesso de leitura a todos os utilizadores.",
            "Criar regras de negócios (business rules) para ocultar as outras colunas de endereço."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "A questão de ouro sobre como restringir de forma absoluta o acesso a dados no Dataverse.",
            "papoReto": "Se quer proibir de vez que alguém veja uma coluna (mesmo que tente fazer filtros espertos ou exportar para o Excel), não basta esconder no ecrã (Regra de Negócios) nem tirar da pesquisa. Tem de colocar um 'cadeado' na própria coluna da base de dados! Isso chama-se Segurança ao nível da coluna (Column-level security).",
            "respostaCerta": "Utilizar segurança ao nível da coluna (Column-level security) para remover o acesso de leitura a todos os utilizadores.",
            "puloDoGato": "Column-level security (antigo Field Level Security) restringe o acesso aos dados (Leitura, Criação, Atualização) diretamente no motor do Dataverse. Quando o acesso de leitura é revogado, a coluna desaparece magicamente de Vistas, Localização Avançada, Relatórios, Filtros e Formulários para todos os utilizadores não autorizados.",
            "cascasDeBanana": [
                "Criar regras de negócios (Business Rules): Uma regra de negócios apenas esconde o campo visualmente dentro do Formulário. O utilizador ainda conseguiria adicionar a coluna numa exibição pessoal ou na Pesquisa Avançada e ver os dados.",
                "Desativar a opção de Pesquisa: Apenas impediria de usar a coluna como filtro rápido, mas a coluna ainda poderia ser adicionada à vista para ler os dados."
            ],
            "dicaOuro": "Impedir utilizadores de ver uma coluna específica EM TODO O LADO (vistas, exportações, formulários) = Column-Level Security."
        }
    },
    {
        "id": "q93_topic1",
        "text": "Uma empresa utiliza o Power Apps. Você cria uma tabela personalizada (custom table) e configura um relacionamento de tabela filha (child table) com a tabela Contacto (Contact).\nVocê precisa de configurar o comportamento em cascata (cascading behavior) para cada ação.\n\nQue comportamento deve utilizar para cada ação, respetivamente?\n1. O registo da tabela personalizada (pai) é eliminado.\n2. O registo da tabela personalizada (pai) é partilhado.",
        "options": [
            "1. Tudo em Cascata (Cascade All) | 2. Restringir (Restrict)",
            "1. Restringir (Restrict) | 2. Nenhuma em Cascata (Cascade None)",
            "1. Tudo em Cascata (Cascade All) | 2. Tudo em Cascata (Cascade All)",
            "1. Restringir (Restrict) | 2. Tudo em Cascata (Cascade All)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre os comportamentos em cascata (Cascading Behaviors) dos relacionamentos no Dataverse.",
            "papoReto": "Se apagar o 'Pai', o que acontece aos 'Filhos'? Para este requisito (e de acordo com o gabarito de ações da Microsoft), se a tabela personalizada for apagada, tudo vai junto (Cascade All / Tudo em Cascata). Se a tabela personalizada for partilhada com alguém, não queremos partilhar automaticamente os contactos filhos (Restrict / Restringir).",
            "respostaCerta": "1. Tudo em Cascata (Cascade All) | 2. Restringir (Restrict)",
            "puloDoGato": "Em relacionamentos 1:N, o comportamento de eliminação 'Cascade All' (Tudo em cascata) garante que os registos filhos são eliminados quando o pai é eliminado, mantendo a base de dados limpa. O comportamento de partilha 'Restrict' (Restringir) impede que a ação de partilha do registo pai conceda automaticamente acesso aos registos filhos associados, garantindo a segurança dos Contactos.",
            "cascasDeBanana": [
                "Usar 'Cascade None' na eliminação: Deixaria registos orfãos (contactos sem a tabela pai associada) na base de dados, o que é má prática de modelação neste cenário."
            ],
            "dicaOuro": "Eliminação do Pai apaga o Filho = Cascade All. Partilha do Pai não partilha o Filho = Restrict."
        }
    },
    {
        "id": "q94_topic1",
        "text": "Planeia adicionar um aplicativo do Power Apps ao Microsoft Teams.\nUm ambiente do Microsoft Dataverse for Teams ainda não foi aprovisionado (provisioned).\nVocê precisa de criar um ambiente do Dataverse for Teams. Quais são as DUAS ações que pode executar para que o ambiente seja criado?",
        "options": [
            "A) Criar um novo ambiente no Power Platform Admin Center. E B) Criar um novo aplicativo no Teams.",
            "A) Criar uma política de permissão de aplicativos no Teams admin center. E B) Criar um novo ambiente no Power Platform Admin Center.",
            "A) Instalar um aplicativo existente no Teams. E B) Criar uma política de permissão de aplicativos no Teams admin center.",
            "A) Criar um novo aplicativo no Teams. E B) Instalar um aplicativo existente no Teams."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Como é que nasce um ambiente do Dataverse for Teams? Esta questão testa o conceito de provisão automática.",
            "papoReto": "Não precisa de ir ao painel de administração (Admin Center) para clicar em 'Novo Ambiente'. O Dataverse for Teams é inteligente: no momento em que cria a sua primeira App dentro de uma equipa do Teams, ou quando instala uma App (Power App) lá dentro pela primeira vez, o sistema percebe que precisa de uma base de dados e cria o ambiente automaticamente nos bastidores.",
            "respostaCerta": "A) Criar um novo aplicativo no Teams. E B) Instalar um aplicativo existente no Teams.",
            "puloDoGato": "A provisão de um ambiente do Microsoft Dataverse for Teams acontece de forma 100% automática (seamless) quando os utilizadores executam uma de duas ações diretamente no cliente do Microsoft Teams: criar uma nova app ou instalar uma app existente na equipa. Não requer acesso nem passos manuais no Power Platform Admin Center.",
            "cascasDeBanana": [
                "Criar um novo ambiente no Power Platform Admin Center: Apesar de poder gerir ambientes do Teams lá (como upgrades para o Dataverse completo ou cópias de segurança), a *criação inicial* (provisão) é desencadeada exclusivamente a partir da interface do Teams."
            ],
            "dicaOuro": "Criação do Dataverse for Teams é Automática ao: 1) Criar App no Teams OU 2) Instalar App no Teams."
        }
    },
    {
        "id": "q95_topic1",
        "text": "Uma empresa utiliza o Power Apps com o Microsoft Dataverse.\nA empresa ativou a auditoria (auditing) na base de dados do Dataverse. A empresa está a atingir a capacidade máxima de armazenamento e precisa de eliminar alguns dados de auditoria.\n\nQuais as três opções de eliminação (deletion options) que deve usar? (Selecione a combinação com as 3 opções corretas)",
        "options": [
            "Entre duas datas especificadas, Por tabela e Por coluna.",
            "Por registo (by record), Por tabela (by table) e Mais antigo que uma data especificada (older than a specified date).",
            "Por coluna, Por registo e Mais antigo que uma data especificada.",
            "Por registo, Entre duas datas especificadas e Por coluna."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Gestão de capacidade (Capacity Management) e limpeza de logs de auditoria no Dataverse.",
            "papoReto": "A base de dados encheu com históricos antigos? O Dataverse permite limpar o lixo de auditoria de três formas precisas: apagar os logs de uma Tabela inteira, apagar os logs de um Registo específico, ou apagar todos os logs que sejam mais antigos do que uma determinada data. Não dá para apagar 'só de uma coluna' ou 'entre duas datas exatas' de forma nativa pela interface de retenção.",
            "respostaCerta": "Por registo (by record), Por tabela (by table) e Mais antigo que uma data especificada (older than a specified date).",
            "puloDoGato": "Na interface moderna de gestão de retenção de auditoria e bulk delete do Dataverse, as três opções granulares nativas suportadas para libertar espaço de log são: 'By record' (Por registo), 'By table' (Por tabela) e 'Older than a specified date' (Mais antigo que a data especificada).",
            "cascasDeBanana": [
                "Por coluna (by column): O Dataverse não suporta a eliminação do histórico de auditoria ao nível individual da coluna. Se a auditoria for eliminada para a tabela ou registo, vai tudo junto."
            ],
            "dicaOuro": "Apagar Auditoria: Por Tabela (Table), Por Registo (Record), ou Mais antigo que uma Data (Older than date)."
        }
    },
    {
        "id": "q96_topic1",
        "text": "Uma empresa utiliza um aplicativo do Power Apps com o Microsoft Dataverse.\nA empresa exige a importação de registos para o Dataverse. Os registos duplicados nos dados importados devem ser descartados (discarded/deleted) sem intervenção do utilizador.\nVocê cria uma regra de deteção de duplicados (duplicate detection rule).\nVocê precisa de configurar a regra para atuar na importação de dados. Que opção deve configurar na regra?",
        "options": [
            "Ativar a opção Modelos para Importação de Dados (Templates for Data Import).",
            "Desativar a opção Permitir Duplicados (Allow Duplicates).",
            "Ativar a opção Quando um registo é criado ou atualizado (When a record is created or updated).",
            "Ativar a opção 'Durante a importação de dados' (During data import)."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Configuração de regras de deteção de duplicados focadas na importação de dados em massa.",
            "papoReto": "Quando se carrega um ficheiro Excel/CSV com milhares de linhas para o Dataverse, queremos que o sistema deite fora automaticamente os repetidos. Mas para o sistema saber que tem de fazer essa vigia durante uma importação, a própria Regra de Deteção de Duplicados precisa de ter a caixa 'Durante a importação de dados' ativada nas suas propriedades. Sem isso, a regra fica cega durante a importação.",
            "respostaCerta": "Ativar a opção 'Durante a importação de dados' (During data import).",
            "puloDoGato": "Uma regra de deteção de duplicados no Dataverse tem gatilhos específicos (quando deve ser executada). Para que a regra atue no 'Data Import Wizard' e descarte registos duplicados automaticamente (desde que o utilizador escolha não permitir duplicados no assistente), a regra DEVE obrigatoriamente ter a propriedade 'During data import' selecionada no ecrã de configuração da regra.",
            "cascasDeBanana": [
                "Desativar a opção Permitir Duplicados (Allow Duplicates): Esta é uma opção do Assistente de Importação (Import Wizard), mas a pergunta pede o que deve ser configurado *na própria regra* (rule) de deteção de duplicados que você acabou de criar."
            ],
            "dicaOuro": "Para a regra funcionar num upload de Excel/CSV = Marcar 'During data import' nas definições da Duplicate Detection Rule."
        }
    },
    {
        "id": "q97_topic1",
        "text": "Uma empresa possui um aplicativo orientado por modelo (model-driven app) que utiliza o Microsoft Dataverse.\nOs utilizadores precisam de adicionar um número de telefone alternativo ao introduzir as informações da conta. Os utilizadores também solicitam uma funcionalidade que filtre/oculte os clientes que não têm um número de telefone alternativo preenchido.\n\nQue funcionalidade deve utilizar para cada requisito? (Selecione a combinação correta na ordem)\n1. Adicionar o número de telefone alternativo.\n2. Listar clientes sem número de telefone alternativo.",
        "options": [
            "1. Coluna (Column) | 2. Vista (View)",
            "1. Tabela (Table) | 2. Relacionamento (Relationship)",
            "1. Relacionamento (Relationship) | 2. Vista (View)",
            "1. Coluna (Column) | 2. Tabela (Table)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão fundamental sobre a modelação e apresentação de dados básica no Dataverse.",
            "papoReto": "Se precisa de um sítio novo para o utilizador escrever e guardar o número de telefone, tem de criar um campo novo na base de dados (uma Coluna). Se quer ver uma lista no ecrã apenas com os clientes que têm esse campo vazio, tem de criar um filtro gravado dessa tabela (uma Vista).",
            "respostaCerta": "1. Coluna (Column) | 2. Vista (View)",
            "puloDoGato": "Para recolher um novo ponto de dados num formulário, adicionamos uma 'Column' (anteriormente chamada de Field/Campo) à tabela. Para apresentar um subconjunto de registos com base em critérios de filtragem (ex: 'Telefone Alternativo Não Contém Dados'), configuramos uma 'View' (Vista).",
            "cascasDeBanana": [
                "Usar Tabela/Relacionamento: Um relacionamento cria uma ligação a outra tabela, mas um telefone alternativo é apenas um texto simples, não justifica uma tabela separada. E para filtrar listas não usamos tabelas ou relacionamentos diretamente, usamos Vistas."
            ],
            "dicaOuro": "Novo dado para guardar = Column (Coluna). Lista filtrada de registos = View (Vista/Visualização)."
        }
    },
    {
        "id": "q98_topic1",
        "text": "Você está a criar um model-driven app para um help desk de peças de automóveis.\nUm agente utiliza um formulário para recolher informações sobre os automóveis dos clientes em duas tabelas personalizadas: 'Cliente' (Client) e 'Automóvel' (Automobile).\nO formulário deve pré-preencher (prepopulate) a seguinte informação sobre o cliente a partir da tabela Cliente: Primeiro Nome, Último Nome.\nO agente deve conseguir introduzir a seguinte informação na tabela Automóvel: Marca do automóvel, Modelo do automóvel.\n\nO que deve configurar para cada requisito, respetivamente?\n1. Pré-preencher as informações do cliente.\n2. Introduzir as informações do automóvel.",
        "options": [
            "1. Fluxo de Dados (Dataflow) | 2. Vista (View)",
            "1. Chave Alternativa (Alternate key) | 2. Conector (Connector)",
            "1. Relacionamento (Relationship) | 2. Tabela (Table)",
            "1. Tabela Virtual (Virtual table) | 2. Fluxo do Power Automate (Power Automate Flow)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Questão clássica de arquitetura relacional que aborda o mapeamento de campos nativo do Dataverse.",
            "papoReto": "Como é que, ao criar o carro do cliente, o nome dele já vem preenchido? Quando existe uma ligação de 'Relacionamento' (1:N) entre o Cliente e o Automóvel, o Dynamics permite 'mapear' campos do Pai para o Filho. E onde é que o agente vai preencher a marca e o modelo do carro? Nos campos que pertencem à 'Tabela' do Automóvel.",
            "respostaCerta": "1. Relacionamento (Relationship) | 2. Tabela (Table)",
            "puloDoGato": "O pré-preenchimento nativo de dados na criação de um registo filho (a partir do contexto de um registo pai) é alcançado através do 'Field Mapping' (Mapeamento de Colunas), que só pode ser configurado dentro das propriedades de um 'Relationship' (Relacionamento 1:N). O armazenamento das informações a serem introduzidas (Marca, Modelo) dita a criação das colunas correspondentes na própria 'Table' (Tabela).",
            "cascasDeBanana": [
                "Tabela Virtual (Virtual table): Serve para integrar dados que moram fora do Dataverse (ex: SQL Server) em tempo real, não serve para pré-preencher campos entre tabelas internas."
            ],
            "dicaOuro": "Pré-preencher (Prepopulate) dados do Pai para o Filho sem código = Mapeamento de Campos dentro de um Relacionamento (Relationship)."
        }
    },
    {
        "id": "q99_topic1",
        "text": "Uma empresa utiliza o Power Apps. Você ativa a auditoria (auditing) no Microsoft Dataverse.\nOs utilizadores relatam os seguintes problemas ao visualizar os logs de auditoria:\n- Problema A: Não é possível visualizar os logs de auditoria de acesso de leitura (read access audit logs).\n- Problema B: Não é possível visualizar os logs de auditoria da tabela Conta (Account).\n\nQuais são as causas destes problemas, respetivamente?",
        "options": [
            "A: O armazenamento do tenant está acima da capacidade | B: A auditoria está desativada ao nível do aplicativo",
            "A: A auditoria não está ativada ao nível do ambiente (environment level) | B: A auditoria está desativada ao nível da tabela (table level)",
            "A: A auditoria para acesso de leitura não está ativada | B: O armazenamento do tenant está acima da capacidade",
            "A: A auditoria está desativada ao nível da tabela | B: A auditoria não está ativada ao nível do ambiente"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa o seu conhecimento sobre a hierarquia das configurações de Auditoria no Dataverse.",
            "papoReto": "A auditoria no Dataverse tem 3 disjuntores. O disjuntor principal (Global/Ambiente), o disjuntor da divisão (Tabela) e o das tomadas (Colunas). Auditar quem *lê* dados (Read Access) gera uma quantidade astronómica de logs, pelo que é uma opção especial e pesada ativada apenas no disjuntor principal (Nível do Ambiente). Se a auditoria da 'Conta' não funciona, é porque o disjuntor da divisão dessa tabela (Nível da Tabela) está desligado.",
            "respostaCerta": "A: A auditoria não está ativada ao nível do ambiente (environment level) | B: A auditoria está desativada ao nível da tabela (table level)",
            "puloDoGato": "A funcionalidade de 'Auditoria de Acesso de Leitura' (Read Access Auditing) é controlada globalmente nas System Settings do Power Platform Admin Center (ao nível do Ambiente/Environment). Se não estiver ativada aí, os logs de leitura não funcionam em lado nenhum. Se os logs normais falham apenas para a tabela Conta (Account), é porque a caixa 'Auditing' está desmarcada nas propriedades dessa Tabela específica.",
            "cascasDeBanana": [
                "Achar que a auditoria tem um nível de 'aplicativo' (app level): Não existe configuração de auditoria ao nível de um Model-driven app; a auditoria aplica-se na raiz da base de dados (Dataverse)."
            ],
            "dicaOuro": "Auditoria de Leitura (Read Access) = Nível do Ambiente (Environment). Falha de auditoria numa tabela isolada = Nível da Tabela (Table level)."
        }
    },
    {
        "id": "q100_topic1",
        "text": "Uma empresa utiliza um ambiente Microsoft Power Platform e planeia implementar um aplicativo Power Apps. A aplicação deve cumprir os seguintes requisitos:\n- Auditar toda a atividade do utilizador e reter os logs de auditoria apenas por um ano.\n- Remover anualmente os produtos que foram criados há mais de um ano.\n\nVocê precisa de configurar os processos automatizados. Qual configuração deve utilizar para cada requisito, respetivamente?\n1. Retenção de logs de auditoria.\n2. Remoção de produtos.",
        "options": [
            "1. Auditoria de Tabela (Table auditing) | 2. Auditoria de Ambiente (Environment auditing)",
            "1. Auditoria de Ambiente (Environment auditing) | 2. Trabalho de eliminação em massa (Bulk deletion job)",
            "1. Trabalho de eliminação em massa (Bulk deletion job) | 2. Vista filtrada (Filtered view)",
            "1. Auditoria de Ambiente (Environment auditing) | 2. Auditoria de Tabela (Table auditing)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão sobre manutenção preventiva e governança de dados no Dataverse.",
            "papoReto": "Para começar a gravar quem faz o quê e definir quanto tempo guardamos essas provas, temos de mexer no disjuntor geral: a 'Auditoria do Ambiente'. Agora, se o patrão quer que o sistema limpe sozinho o stock velho todos os anos, criamos um 'faxineiro' automático chamado 'Trabalho de eliminação em massa' (Bulk deletion job).",
            "respostaCerta": "1. Auditoria de Ambiente (Environment auditing) | 2. Trabalho de eliminação em massa (Bulk deletion job)",
            "puloDoGato": "A retenção global de logs e a ativação da auditoria são feitas ao nível do 'Environment'. Para ações de limpeza recorrente de registos de negócio (como produtos obsoletos) baseadas em critérios de data, a ferramenta padrão é o 'Bulk Deletion Job', que pode ser agendado para correr periodicamente.",
            "cascasDeBanana": [
                "Auditoria de Tabela: Ativa a auditoria apenas para os dados daquela tabela, mas não gere a política de retenção global nem limpa registos de produtos."
            ],
            "dicaOuro": "Limpeza automática e agendada de lixo ou dados velhos = Bulk Deletion Job."
        }
    },
    {
        "id": "q101_topic1",
        "text": "Uma empresa criou um aplicativo de tela (canvas app) que solicita aos utilizadores o número da segurança social. O aplicativo deve exibir apenas os últimos quatro dígitos quando o utilizador mudar de coluna (perder o foco do campo).\n\nQual opção deve utilizar para configurar esta lógica?",
        "options": [
            "Regra de Negócios (Business Rule)",
            "Fluxo de Processo Empresarial (Business Process Flow)",
            "Power BI DAX",
            "Power Fx"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre manipulação de texto e interface em Canvas Apps.",
            "papoReto": "Quer fazer 'magia' com o texto no ecrã (tipo transformar 123456789 em *****6789)? No Canvas App, a ferramenta para isso são as fórmulas. E o nome da linguagem dessas fórmulas é Power Fx.",
            "respostaCerta": "Power Fx",
            "puloDoGato": "As Business Rules em Canvas Apps são muito limitadas (só mexem em obrigatoriedade, valores simples e erros). Para fazer manipulação de strings (usar funções como `Right`, `Len` ou `Concatenate`) e criar máscaras dinâmicas de exibição, a única solução é utilizar expressões Power Fx diretamente nas propriedades do controlo.",
            "cascasDeBanana": [
                "Business Rule: Muitos pensam que a Regra de Negócio resolve tudo, mas em Canvas Apps elas não suportam manipulação complexa de strings/texto.",
                "Power BI DAX: Embora parecida, o DAX é para relatórios; no Power Apps, a linguagem é Power Fx."
            ],
            "dicaOuro": "Lógica complexa, cálculos ou formatação de texto num Canvas App = Power Fx."
        }
    },
    {
        "id": "q102_topic1",
        "text": "Uma empresa utiliza o Power Apps e planeia criar um aplicativo de tela (canvas app) que utilize um design responsivo.\nQuais as duas ações que deve executar como parte da solução? (Selecione as duas ações corretas)",
        "options": [
            "A) Desativar a definição 'Dimensionar para ajustar' (Scale to fit) E B) Configurar as propriedades de altura e largura utilizando fórmulas.",
            "A) Ativar a definição 'Bloquear orientação' E B) Configurar a altura e largura usando as alças de arrastamento manuais.",
            "A) Desativar a definição 'Dimensionar para ajustar' E B) Ativar a definição 'Bloquear proporção'.",
            "A) Configurar altura e largura usando fórmulas E B) Ativar a definição 'Bloquear orientação'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conceitos fundamentais para criar Apps que funcionam bem tanto no telemóvel como no PC.",
            "papoReto": "Para a App ser responsiva (esticar e encolher conforme o ecrã), a primeira coisa a fazer é 'cortar as amarras': desativamos o 'Scale to fit' (Dimensionar para ajustar), senão ela só faz zoom. Depois, em vez de dizer que um botão tem 100 pixels de largura, dizemos que ele tem 'Largura do Ecrã / 2' usando fórmulas.",
            "respostaCerta": "A) Desativar a definição 'Dimensionar para ajustar' (Scale to fit) E B) Configurar as propriedades de altura e largura utilizando fórmulas.",
            "puloDoGato": "O 'Scale to fit' força a app a manter um aspeto de imagem fixa, criando barras pretas nas laterais. Ao desativá-lo, a app ocupa o espaço real disponível. A responsividade real é obtida ligando as propriedades `Width` e `Height` dos controlos a variáveis ou propriedades do `Parent` (ex: `Parent.Width`), o que exige o uso de fórmulas Power Fx.",
            "cascasDeBanana": [
                "Bloquear orientação (Lock orientation): Isto impede a responsividade, pois obriga o utilizador a usar o telemóvel sempre na mesma posição, ignorando a adaptação do ecrã."
            ],
            "dicaOuro": "Design Responsivo em Canvas App = Scale to fit OFF + Fórmulas no Width/Height."
        }
    },
    {
        "id": "q103_topic1",
        "text": "[Série de Questões] Uma empresa utiliza um aplicativo orientado por modelo (model-driven app). Um utilizador adiciona uma conta a partir do aplicativo. O utilizador precisa de encontrar um registo específico no aplicativo e abrir o registo diretamente.\n\nSolução: Utilizar a Pesquisa de Relevância (Relevance Search / Dataverse Search).\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca na utilidade da Pesquisa de Relevância para a navegação direta entre registos.",
            "papoReto": "Se quer encontrar algo rapidamente e 'saltar' para dentro do registo, a Pesquisa de Relevância é a melhor ferramenta. Ela pesquisa em várias tabelas ao mesmo tempo e os resultados são links diretos para os formulários.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Pesquisa do Dataverse (anteriormente Relevance Search) fornece resultados globais ordenados por relevância. Uma das suas principais vantagens de UX é permitir que o utilizador clique no resultado e seja levado imediatamente para o formulário de edição do registo, cumprindo o requisito de 'abrir o registo diretamente'.",
            "cascasDeBanana": [],
            "dicaOuro": "Pesquisa global + Acesso direto ao registo = Relevance Search / Dataverse Search."
        }
    },
    {
        "id": "q104_topic1",
        "text": "Você constrói um aplicativo Power Apps para exibir um catálogo de produtos para os utilizadores. Os utilizadores devem ter permissão para visualizar o aplicativo no Microsoft Teams através do Dataverse for Teams. Você deve especificar quem pode aceder ao aplicativo.\n\nO que deve fazer?",
        "options": [
            "Partilhar o aplicativo com um grupo de segurança utilizando o Portal do Criador (Maker portal).",
            "Publicar o aplicativo num portal SharePoint.",
            "Enviar um e-mail com um link que convida a abrir o aplicativo no Teams.",
            "Partilhar o aplicativo com um grupo de segurança no Teams (Share the app with a security group in Teams)."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre a governação e partilha de aplicações dentro do ecossistema Microsoft Teams.",
            "papoReto": "Se a App foi feita 'dentro' do Teams (usando o Dataverse for Teams), a gestão de quem a vê é feita no próprio Teams. Não precisa de ir ao Portal do Criador externo; você partilha com a equipa ou com grupos de segurança diretamente na interface do Teams para que os membros vejam o catálogo.",
            "respostaCerta": "Partilhar o aplicativo com um grupo de segurança no Teams.",
            "puloDoGato": "No Dataverse for Teams, o modelo de segurança é simplificado e integrado. Embora possa usar o Maker Portal para certas tarefas, a recomendação para aplicações de catálogo destinadas a utilizadores do Teams é utilizar a funcionalidade de partilha interna do Teams, associando a App a grupos de segurança que já existam no ambiente da colaboração.",
            "cascasDeBanana": [
                "Maker portal: Embora tecnicamente possível para apps standalone, a filosofia do Dataverse for Teams foca na gestão via Teams.",
                "SharePoint portal: O SharePoint pode alojar listas, mas não é o local de publicação ou gestão de permissões para Power Apps integradas no Teams."
            ],
            "dicaOuro": "Dataverse for Teams = Gestão de acesso integrada no cliente Teams."
        }
    },
    {
        "id": "q105_topic1",
        "text": "Você está a criar um aplicativo de tela (canvas app) e precisa de realizar operações com coleções de dados.\nSelecione a função Power Fx correta para cada requisito:\n1. Criar uma nova variável de coleção (Create a new collection variable).\n2. Remover todos os valores da tabela de uma coleção (Remove table values from a collection).",
        "options": [
            "1. Set | 2. Clear",
            "1. Collect | 2. Clear",
            "1. Collect | 2. Reset",
            "1. AddColumns | 2. DropColumns"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Diferenciação de funções fundamentais para manipulação de coleções locais no Power Apps.",
            "papoReto": "Quer criar uma lista de dados na memória do telemóvel? Usa o 'Collect'. Quer esvaziar essa lista toda para começar de novo? Usa o 'Clear'.",
            "respostaCerta": "1. Collect | 2. Clear",
            "puloDoGato": "A função `Collect` adiciona registos a uma fonte de dados e, se a coleção ainda não existir, cria-a automaticamente. A função `Clear` elimina todos os registos de uma coleção, mas mantém a estrutura da mesma para novas inserções.",
            "cascasDeBanana": [
                "Set: O `Set` cria variáveis globais simples (um valor, um registo), mas não é a função primária para instanciar coleções de tabelas de dados.",
                "Reset: O `Reset` serve para limpar a entrada visual de um controlo (como uma caixa de texto), não para manipular os dados dentro de uma coleção/tabela."
            ],
            "dicaOuro": "Manipular listas na memória = Collect (Add) / Clear (Remove All) / Remove (Specific)."
        }
    },
    {
        "id": "q106_topic1",
        "text": "Está a configurar uma nova tabela no Dataverse e precisa de definir os tipos de coluna corretos para os seguintes requisitos:\n1. Dados de texto com 100 caracteres, renderizados como um controlo de múltiplas linhas (multi-line).\n2. Dados de texto até 8.000 caracteres, renderizados como múltiplas linhas.\n3. Controlo de entrada que guarda uma referência a uma Conta ou um Contacto.\n4. Lista de opções predefinidas onde o utilizador escolhe apenas uma.",
        "options": [
            "1. Text Area | 2. Multiline Text | 3. Customer | 4. Choice",
            "1. Multiline Text | 2. Text Area | 3. Lookup | 4. Choice",
            "1. Text Area | 2. Multiline Text | 3. Lookup | 4. Choices",
            "1. Text Area | 2. Text Area | 3. Customer | 4. Lookup"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conhecimento técnico sobre os limites e comportamentos visuais dos tipos de colunas no Dataverse.",
            "papoReto": "Precisa de uma caixa de texto um pouco maior que o normal mas com limite curto? Use 'Text Area'. Precisa de um texto gigante (como uma descrição de contrato)? Use 'Multiline Text'. Quer um campo que aceite tanto Empresa como Pessoa? O nome desse campo especial é 'Customer'. E uma lista onde só se escolhe um? É 'Choice' (Escolha).",
            "respostaCerta": "1. Text Area | 2. Multiline Text | 3. Customer | 4. Choice",
            "puloDoGato": "A diferença técnica é o limite: 'Text Area' é usado para textos médios (até 4000 caracteres, mas muitas vezes configurado para 100 como no exemplo). 'Multiline Text' suporta volumes muito maiores (até 1.048.576 caracteres, embora o requisito mencione 8.000). A coluna 'Customer' é um lookup especial polimórfico que aponta para Accounts ou Contacts simultaneamente.",
            "cascasDeBanana": [
                "Lookup vs Customer: Um 'Lookup' normal aponta para apenas UMA tabela específica. O 'Customer' é o único que aponta para as duas tabelas base de pessoas/empresas por defeito.",
                "Choice vs Choices: 'Choice' (singular) permite apenas uma seleção. 'Choices' (plural) permite selecionar várias opções (vistos)."
            ],
            "dicaOuro": "Texto Curto Multi-linha = Text Area. Texto Longo = Multiline Text. Conta/Contacto = Customer."
        }
    },
    {
        "id": "q107_topic1",
        "text": "Você planeia implementar um aplicativo orientado por modelo (model-driven app). A empresa irá introduzir dados através da app e tem os seguintes requisitos:\n- Os utilizadores devem conseguir pesquisar dados dentro da app.\n- Os utilizadores devem conseguir pesquisar dados da app a partir de fora da app (ex: no Bing ou Office.com).\n\nQue soluções de pesquisa deve configurar para cada requisito, respetivamente?",
        "options": [
            "1. Pesquisa Categorizada | 2. Pesquisa de Relevância",
            "1. Pesquisa do Dataverse (Dataverse Search) | 2. Microsoft Search",
            "1. Localização Rápida | 2. Pesquisa de Conteúdo",
            "1. Pesquisa do Dataverse | 2. Pesquisa Moderna"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão sobre os novos padrões de pesquisa na Power Platform e a sua integração com o ecossistema Microsoft 365.",
            "papoReto": "Quer pesquisar em tudo dentro do Dynamics de forma inteligente? Use a Pesquisa do Dataverse (Dataverse Search). Quer que os dados da sua app apareçam quando o utilizador faz uma busca geral no portal do Office.com ou no Bing da empresa? Use o Microsoft Search.",
            "respostaCerta": "1. Pesquisa do Dataverse (Dataverse Search) | 2. Microsoft Search",
            "puloDoGato": "A 'Dataverse Search' é a experiência de pesquisa global e inteligente dentro das apps. O 'Microsoft Search' é o conector que permite indexar os dados do Dataverse para que fiquem disponíveis nas barras de pesquisa globais do Windows, Office e Bing, permitindo encontrar informações de negócio 'fora' da aplicação específica.",
            "cascasDeBanana": [
                "Pesquisa Categorizada: É o modelo antigo (por colunas separadas), que não oferece a inteligência necessária para o primeiro requisito nem integração externa.",
                "Localização Rápida (Quick Find): Pesquisa apenas numa tabela de cada vez, não sendo a solução para 'pesquisar dados (gerais) na app'."
            ],
            "dicaOuro": "Pesquisa inteligente 'dentro' = Dataverse Search. Pesquisa 'fora' (M365/Bing) = Microsoft Search."
        }
    },
    {
        "id": "q108_topic1",
        "text": "Você construiu um canvas app. Planeia tornar a app disponível no Microsoft Teams para que todos os colaboradores a possam utilizar. Precisa de adicionar a app ao Teams.\n\nQuais as três ações que deve executar em sequência? (Selecione a ordem correta)",
        "options": [
            "1. Iniciar sessão no Maker Portal -> 2. Selecionar e descarregar a Power App -> 3. Adicionar a app ao Teams.",
            "1. Iniciar sessão no Power Platform Admin Center -> 2. Selecionar a app -> 3. Publicar no Teams.",
            "1. Iniciar sessão no Teams Admin Center -> 2. Carregar o pacote da app -> 3. Partilhar com a equipa.",
            "1. Abrir o Power Apps Studio -> 2. Guardar a app como ficheiro zip -> 3. Enviar por e-mail para o administrador do Teams."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Processo de publicação de uma Power App 'standalone' (independente) dentro do cliente do Microsoft Teams.",
            "papoReto": "Como levar uma app que fez no portal para o Teams? Primeiro, vai ao Maker Portal (make.powerapps.com). Segundo, encontra a sua app e faz o download dela (o sistema gera um ficheiro próprio para o Teams). Terceiro, vai ao Teams e faz o upload desse ficheiro na secção de Apps. Já está!",
            "respostaCerta": "1. Iniciar sessão no Maker Portal -> 2. Selecionar e descarregar a Power App -> 3. Adicionar a app ao Teams.",
            "puloDoGato": "Este é o fluxo clássico de 'Add to Teams' disponível no menu de contexto das aplicações no Maker Portal. O Power Apps gera automaticamente o manifesto necessário para o Teams reconhecer a aplicação como uma 'Tab' ou App pessoal.",
            "cascasDeBanana": [
                "Teams Admin Center: É usado para gerir políticas de quem pode ver que apps, mas não é onde o 'maker' inicia o processo de exportação da sua app para o Teams.",
                "Power Platform Admin Center: Não lida com o download ou publicação individual de apps para o Teams."
            ],
            "dicaOuro": "Levar app para o Teams = Maker Portal > Download > Upload no Teams."
        }
    },
    {
        "id": "q109_topic1",
        "text": "Uma empresa utiliza o Microsoft Dataverse for Teams. Você precisa de configurar os acessos para os utilizadores que necessitam de utilizar a app e os seus dados.\n\nQue ações deve realizar para cada requisito, respetivamente?\n1. Acesso aos dados (Access to the data).\n2. Acesso ao aplicativo (Access to the app).",
        "options": [
            "1. Criar uma função de segurança e atribuir permissões por tabela | 2. Partilhar com um grupo de segurança.",
            "1. Partilhar os dados e atribuir permissões | 2. Publicar a app num canal do Teams.",
            "1. Atribuir um conjunto de permissões para cada utilizador | 2. Partilhar com utilizadores individuais.",
            "1. Criar uma função de segurança | 2. Publicar a app num canal do Teams."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Gestão de segurança e permissões no modelo simplificado do Dataverse for Teams.",
            "papoReto": "Mesmo sendo no Teams, as regras de dados são parecidas com o Dataverse grande: para ver o que está nas tabelas, precisa de uma 'Função de Segurança' (Security Role) com as permissões certas. Para conseguir abrir o ícone da App, o melhor é partilhá-la com um 'Grupo de Segurança' onde os membros da equipa já estejam.",
            "respostaCerta": "1. Criar uma função de segurança e atribuir permissões por tabela | 2. Partilhar com um grupo de segurança.",
            "puloDoGato": "Embora o Dataverse for Teams tenha uma interface de permissões simplificada, por baixo do capot ele utiliza Security Roles. A gestão de acesso à aplicação em larga escala deve ser sempre feita através de Grupos de Segurança para facilitar a administração.",
            "cascasDeBanana": [
                "Publicar num canal do Teams: Isto torna a app *visível* como uma aba, mas não garante que o utilizador tem *permissão* de segurança para a abrir ou ler os dados se não tiver sido partilhada corretamente.",
                "Partilhar com utilizadores individuais: Funciona para 2 ou 3 pessoas, mas a Microsoft recomenda sempre Grupos de Segurança para cumprir o requisito de forma profissional."
            ],
            "dicaOuro": "Segurança de Dados = Security Roles. Segurança de App = Security Groups."
        }
    },
    {
        "id": "q110_topic1",
        "text": "Uma empresa pretende implementar o Power Pages e solicita a criação de sites de demonstração com base nos seguintes requisitos:\n1. Um site que suporte agendamento automatizado (automated scheduling).\n2. Um site que suporte o registo em eventos (event registration).\n3. Um site que possa ser estendido através da utilização da marca da empresa (branding).\nO desenvolvimento personalizado deve ser mínimo.\n\nQue modelos (templates) do Power Pages deve utilizar para cada requisito? (Selecione a combinação correta)",
        "options": [
            "1. Financial Institution | 2. After school program | 3. Blank page",
            "1. Building permit | 2. After school program | 3. Blank page",
            "1. After school program | 2. Financial institution | 3. Building permit",
            "1. Financial Institution | 2. Building permit | 3. After school program"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre a escolha de modelos prontos (out-of-the-box) do Power Pages para acelerar o desenvolvimento.",
            "papoReto": "A Microsoft criou modelos que já vêm com tabelas e páginas prontas. O modelo de 'Instituição Financeira' já tem a lógica de marcar reuniões (agendamento). O de 'Programa Pós-Escola' foca em inscrever alunos em atividades (registo). E se quer total liberdade para meter o branding da empresa do zero, começa com uma 'Página em Branco'.",
            "respostaCerta": "1. Financial Institution | 2. After school program | 3. Blank page",
            "puloDoGato": "O modelo 'Financial Institution' inclui uma funcionalidade pré-configurada de agendamento de consultas. O 'After School Program' é o modelo padrão para cenários de inscrição e registo de utilizadores em cursos ou eventos. A 'Blank Page' fornece a estrutura mínima necessária para que o branding personalizado seja aplicado sem ter de 'limpar' designs anteriores.",
            "cascasDeBanana": [
                "Building permit (Licença de construção): Este modelo foca-se na submissão de formulários e acompanhamento de processos/pedidos, não em agendamento ou registo de eventos puro."
            ],
            "dicaOuro": "Agendamento = Financial Institution. Inscrições/Eventos = After School Program. Branding total = Blank Page."
        }
    },
    {
        "id": "q111_topic1",
        "text": "Você está a modificar uma tabela num ambiente Microsoft Power Platform. Configura um formulário com as seguintes colunas: 'País/Região' (Country/region - tipo Escolhas), 'Posse de Passaporte' (Passport ownership - tipo Escolha Sim/Não) e 'Data de validade do passaporte' (Passport expiration date - tipo Texto).\n\nO formulário deve:\n- Preencher a coluna 'País/Região' como 'EUA' quando o idioma escolhido for Inglês.\n- Mostrar a coluna 'Data de validade' apenas se o utilizador selecionar 'Sim' na posse de passaporte.\n\nQue componentes deve utilizar para cumprir os requisitos com o mínimo esforço? (Selecione a combinação correta)",
        "options": [
            "País/Região: Fórmula (Formula) | Data de validade: Regra de Negócio (Business Rule)",
            "País/Região: Power Automate | Data de validade: Regra de Negócio",
            "País/Região: Regra de Negócios | Data de validade: Fluxo de Processo Empresarial (BPF)",
            "País/Região: Fórmula | Data de validade: Script de formulário (JavaScript)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa as novas colunas de fórmula (Power Fx) vs. as tradicionais Regras de Negócio.",
            "papoReto": "Se quer que um campo mude de valor sozinho baseado numa lógica simples ('Se for inglês, põe EUA'), a forma mais moderna e rápida é usar uma coluna de 'Fórmula'. Para esconder ou mostrar campos no ecrã (visibilidade dinâmica), a ferramenta padrão 'sem código' continua a ser a Regra de Negócio.",
            "respostaCerta": "País/Região: Fórmula (Formula) | Data de validade: Regra de Negócio (Business Rule)",
            "puloDoGato": "As colunas de tipo 'Formula' permitem usar Power Fx diretamente no Dataverse para calcular valores. É mais eficiente que uma Business Rule para *preenchimento* de dados. No entanto, as fórmulas não conseguem controlar a *visibilidade* de outros campos; isso é a especialidade das Business Rules (ação Show/Hide field).",
            "cascasDeBanana": [
                "Usar Power Automate: Funciona, mas não é o 'mínimo esforço' para algo que uma fórmula de coluna resolve instantaneamente.",
                "Usar JavaScript: Exige código, o que viola o princípio de 'mínimo esforço' e no-code da prova."
            ],
            "dicaOuro": "Cálculo/Lógica de valor no campo = Coluna de Fórmula. Mostrar/Esconder campos no ecrã = Regra de Negócio."
        }
    },
    {
        "id": "q112_topic1",
        "text": "Você tem um aplicativo de tela (canvas app). O aplicativo deve armazenar dados numa variável que esteja disponível APENAS para o ecrã atual.\n\nQuais as duas funções que pode utilizar para este objetivo? (Cada resposta correta apresenta uma solução completa)",
        "options": [
            "A) UpdateContext E B) Navigate",
            "A) Set E B) UpdateContext",
            "A) Collect E B) Set",
            "A) UpdateContext E B) SaveData"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão vital sobre o âmbito (scope) das variáveis em Canvas Apps.",
            "papoReto": "Variável que só funciona num ecrã é como um post-it colado na página: chama-se Variável de Contexto. Você cria esse post-it com a função 'UpdateContext'. Mas sabia que quando você viaja de um ecrã para o outro com a função 'Navigate', também pode levar um post-it novo para colar no ecrã de destino? Por isso as duas estão certas.",
            "respostaCerta": "A) UpdateContext E B) Navigate",
            "puloDoGato": "A função `UpdateContext` cria variáveis de contexto (locais ao ecrã). O que muitos esquecem é que a função `Maps` tem um terceiro parâmetro opcional que permite passar um registo de contexto para o ecrã de destino, criando ou atualizando variáveis locais lá.",
            "cascasDeBanana": [
                "Set: O `Set` cria variáveis GLOBAIS. Se usar Set, o dado estará disponível em todos os ecrãs da app, o que viola o requisito de estar disponível 'apenas para o ecrã atual'.",
                "Collect: Cria coleções (tabelas), que por padrão são globais na app."
            ],
            "dicaOuro": "Variável Global = Set. Variável Local (apenas um ecrã) = UpdateContext ou Navigate."
        }
    },
    {
        "id": "q113_topic1",
        "text": "Você planeia criar um aplicativo de tela (canvas app) com vários ecrãs. O aplicativo precisa de armazenar dados temporários enquanto está a ser executado e tem os seguintes requisitos:\n1. Cada ecrã deve manter uma cópia separada dos dados e passar os mesmos para outro ecrã.\n2. O aplicativo deve ser capaz de atualizar linhas separadas de uma tabela de forma independente.\n\nQue tipo de variável deve utilizar para cada requisito, respetivamente?",
        "options": [
            "1. Variável de contexto (Context variable) | 2. Coleção (Collection)",
            "1. Variável global (Global variable) | 2. Variável de contexto",
            "1. Coleção (Collection) | 2. Variável global",
            "1. Variável de contexto | 2. Variável global"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aprofunda os tipos de armazenamento temporário no Power Apps Canvas.",
            "papoReto": "Post-it colado na página (ecrã) que pode ser passado para a próxima? Variável de Contexto. Uma tabela inteira guardada na memória para editar linha a linha? Coleção.",
            "respostaCerta": "1. Variável de contexto (Context variable) | 2. Coleção (Collection)",
            "puloDoGato": "A variável de contexto (`UpdateContext`) é específica de um ecrã, mas a função `Maps` permite passar esses valores para o ecrã seguinte. Para manipular conjuntos de dados (tabelas) onde se pretende adicionar ou atualizar linhas individuais sem afetar a fonte de dados original imediatamente, utilizamos as `Collections`.",
            "cascasDeBanana": [
                "Variável Global (Set): Funciona em toda a App, mas o requisito 1 foca especificamente no isolamento por ecrã e passagem de dados entre eles, o que aponta para o contexto do ecrã."
            ],
            "dicaOuro": "Dados de um só ecrã = Context. Dados em formato de tabela/lista = Collection."
        }
    },
    {
        "id": "q114_topic1",
        "text": "Você planeia criar um aplicativo de tela (canvas app) para gerir ordens de serviço. Precisa de configurar os seguintes requisitos:\n1. Enviar um e-mail automático assim que um registo for guardado.\n2. Mostrar a coluna 'Expiração' apenas se a data de criação do registo for superior a 30 dias.\n\nQue funcionalidades deve utilizar para cada requisito?",
        "options": [
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Fórmula (Formula)",
            "1. Regra de Negócio (Business Rule) | 2. Fórmula",
            "1. Conector (Connection) | 2. Coleção (Collection)",
            "1. Fluxo do Power Automate | 2. Regra de Negócio"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Automação e lógica de interface em aplicativos Canvas.",
            "papoReto": "Mandar e-mail quando algo acontece? Power Automate. Esconder ou mostrar um campo com base numa data num Canvas App? Fórmula na propriedade Visible.",
            "respostaCerta": "1. Fluxo do Power Automate (Power Automate flow) | 2. Fórmula (Formula)",
            "puloDoGato": "Canvas Apps não utilizam as Business Rules tradicionais do Dataverse para esconder campos (embora possam ler algumas validações). A forma padrão de fazer visibilidade dinâmica em Canvas é usar uma Fórmula na propriedade `Visible`. Notificações complexas como e-mails são delegadas ao Power Automate.",
            "cascasDeBanana": [
                "Regra de Negócio (Business Rule): Funciona maravilhosamente para visibilidade em Model-driven apps, mas não é a ferramenta usada no Canvas App para este fim."
            ],
            "dicaOuro": "Notificações/Emails = Power Automate. Visibilidade no Canvas = Fórmulas."
        }
    },
    {
        "id": "q115_topic1",
        "text": "Uma empresa está a implementar a Power Platform. Um dos aplicativos exige um layout de controlos personalizado (pixel-perfect) sem utilizar código. O outro aplicativo será utilizado principalmente por utilizadores externos (clientes).\n\nQue tipos de aplicativo deve recomendar, respetivamente?",
        "options": [
            "1. Aplicativo de tela (Canvas app) | 2. Portal do Power Apps (Power Pages)",
            "1. Aplicativo orientado por modelo (Model-driven app) | 2. Canvas app",
            "1. Power Pages | 2. Model-driven app",
            "1. Canvas app | 2. Power BI"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Escolha da tecnologia correta para cada público e necessidade visual.",
            "papoReto": "Quer desenhar tudo ao pixel sem saber programar? Canvas App. Quer um site para clientes externos fazerem login? Portal (Power Pages).",
            "respostaCerta": "1. Aplicativo de tela (Canvas app) | 2. Portal do Power Apps (Power Pages)",
            "puloDoGato": "O Canvas App brilha no design de interface livre ('pixel-perfect'). O Power Pages (antigo Portals) é a única solução nativa da Power Platform desenhada especificamente para acesso de utilizadores externos anónimos ou autenticados via B2C/Redes Sociais.",
            "cascasDeBanana": [
                "Model-driven app para clientes externos: Licenciar utilizadores externos para Model-driven apps é complexo e a interface é rígida, não sendo o ideal para portais públicos."
            ],
            "dicaOuro": "Design livre = Canvas. Público Externo = Power Pages."
        }
    },
    {
        "id": "q116_topic1",
        "text": "Uma empresa está a implementar soluções da Power Platform e necessita de informações sobre a linguagem Power Fx.\n\nQual das seguintes é uma característica fundamental do Power Fx?",
        "options": [
            "É uma linguagem compilada para aplicativos nativos.",
            "Utiliza fórmulas semelhantes às fórmulas do Microsoft Excel.",
            "Suporta apenas operações de dados síncronas.",
            "É usada exclusivamente para tradução de idiomas em Model-driven apps."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Definição oficial e estratégica do Power Fx.",
            "papoReto": "O Power Fx foi feito para quem já sabe Excel. É a mesma lógica de fórmulas que usamos nas folhas de cálculo, trazida para o mundo das Apps e do Dataverse.",
            "respostaCerta": "Utiliza fórmulas semelhantes às fórmulas do Microsoft Excel.",
            "puloDoGato": "O Power Fx é uma linguagem 'low-code' declarativa e fortemente baseada no Excel. O seu objetivo é permitir que 'citizen developers' consigam criar lógicas complexas sem precisar de aprender C# ou JavaScript.",
            "cascasDeBanana": [
                "Dizer que é exclusiva para tradução ou apenas síncrona: O Power Fx é a linguagem padrão de toda a plataforma (Canvas, Dataverse columns, etc.) e lida com processos assíncronos constantemente."
            ],
            "dicaOuro": "Power Fx = O 'Excel' da Power Platform."
        }
    },
    {
        "id": "q117_topic1",
        "text": "Uma empresa está a avaliar as capacidades do Dataverse e os cenários para utilização de tabelas virtuais (virtual tables).\n\nQual é uma capacidade fundamental das tabelas virtuais?",
        "options": [
            "As tabelas virtuais armazenam dados no ambiente do Dataverse.",
            "As tabelas virtuais recuperam dados de uma fonte de dados externa (external data source).",
            "As tabelas virtuais podem ser configuradas para auditoria de leitura.",
            "As tabelas virtuais suportam a auditoria nativa do Dataverse."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa o conceito básico de virtualização de dados no Dataverse.",
            "papoReto": "Uma tabela virtual é como um 'espelho' ou um atalho. Os dados não moram dentro do Dynamics/Dataverse; eles ficam guardados lá fora (num SQL Server, num SharePoint, etc.). A tabela virtual apenas permite que o Power Apps veja e use esses dados como se estivessem dentro de casa.",
            "respostaCerta": "As tabelas virtuais recuperam dados de uma fonte de dados externa.",
            "puloDoGato": "O principal objetivo das tabelas virtuais é a integração sem replicação de dados. Elas agem como um proxy, executando consultas em tempo real contra a fonte externa sempre que um utilizador abre um registo ou uma vista no aplicativo.",
            "cascasDeBanana": [
                "Armazenam dados no Dataverse: Errado. Se armazena no Dataverse, é uma tabela normal. A virtual apenas 'aponta' para fora.",
                "Suportam auditoria: A maioria das capacidades nativas do Dataverse que dependem do motor de armazenamento (como auditoria ou pesquisa de relevância profunda) não funcionam em tabelas virtuais."
            ],
            "dicaOuro": "Tabela Virtual = Dados EXTERNOS em tempo real. Sem cópia no Dataverse."
        }
    },
    {
        "id": "q118_topic1",
        "text": "[Série 1 de 3] Uma empresa utiliza o Dataverse. O ambiente contém uma tabela com as seguintes colunas: Nome, Empresa, Contactado em.\nA empresa exige que a tabela não contenha quaisquer linhas duplicadas quando os utilizadores criam dados no ambiente.\n\nSolução proposta: Criar uma chave alternativa (alternate key) para as colunas.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Série sobre integridade de dados e prevenção de duplicados.",
            "papoReto": "Se quer proibir (impedir fisicamente) que entrem nomes repetidos na base de dados, tem de pôr um cadeado no nível do banco de dados. A 'Chave Alternativa' faz exatamente isso: ela diz ao sistema que aquela combinação de colunas é única e não aceita duplicados de forma alguma.",
            "respostaCerta": "Sim",
            "puloDoGato": "As Alternate Keys criam um índice de unicidade no SQL por baixo do Dataverse. Se alguém tentar inserir um registo que viole esta chave (mesmo via API ou Importação), o sistema bloqueia a transação com um erro. É o método mais forte de prevenção.",
            "dicaOuro": "Prevenir/Impedir duplicados de forma rigorosa = Alternate Key."
        }
    },
    {
        "id": "q119_topic1",
        "text": "[Série 2 de 3] Uma empresa utiliza o Dataverse. A tabela contém as colunas: Nome, Empresa, Contactado em. A empresa exige que a tabela não contenha duplicados.\n\nSolução proposta: Criar um fluxo do Microsoft Power Automate para as colunas.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Tentativa de usar automação para limpeza de dados.",
            "papoReto": "Um fluxo (Power Automate) só acorda *depois* que o erro já foi feito (o registo já foi criado). Ele até podia tentar apagar o duplicado depois, mas o requisito é que a tabela 'não contenha' duplicados, o que implica prevenção na entrada. O fluxo não é uma ferramenta de bloqueio de base de dados.",
            "respostaCerta": "Não",
            "puloDoGato": "Fluxos são assíncronos por natureza. Até o fluxo correr e validar o dado, o duplicado já existe na base de dados. Além disso, não é uma forma eficiente nem padrão de gerir unicidade.",
            "dicaOuro": "Power Automate = Reação. Alternate Key = Prevenção."
        }
    },
    {
        "id": "q120_topic1",
        "text": "[Série 3 de 3] Uma empresa utiliza o Dataverse. A tabela contém as colunas: Nome, Empresa, Contactado em. A empresa exige que a tabela não contenha duplicados.\n\nSolução proposta: Criar uma regra de deteção de duplicados (duplicate detection rule) para as colunas.\n\nEsta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "A maior rasteira do exame: Regra de Deteção vs Chave Alternativa.",
            "papoReto": "A 'Regra de Deteção de Duplicados' é apenas um aviso educado na tela. O utilizador pode clicar em 'Guardar mesmo assim'. Além disso, se o dado vier por uma App de telemóvel ou por código, a regra muitas vezes nem aparece. Por isso, ela não garante que a tabela não terá duplicados.",
            "respostaCerta": "Não",
            "puloDoGato": "Duplicate Detection Rules são para UX (experiência do utilizador) e não impõem restrições de integridade ao nível dos dados (database-level constraints). Elas 'detetam', mas não 'impedem' de forma absoluta como uma Chave faz.",
            "dicaOuro": "Regra de Deteção = Alerta/Aviso. Chave Alternativa = Bloqueio/Unicidade."
        }
    },
    {
        "id": "q121_topic1",
        "text": "Você cria um aplicativo de tela (canvas app). O aplicativo deve ser capaz de exibir uma lista de registos que são ordenados por categoria. O aplicativo também deve expandir ou ocultar detalhes como subcategorias.\n\nQue componente deve utilizar?",
        "options": [
            "Cartão (card)",
            "Expressão (expression)",
            "Galeria (gallery)",
            "Dashboard do Power BI"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Questão sobre componentes de interface em Canvas Apps.",
            "papoReto": "Sempre que precisar de mostrar uma lista de coisas (com fotos, títulos, botões e até sub-listas que abrem e fecham), a ferramenta de eleição é a Galeria. É o componente mais flexível para repetir elementos visualmente.",
            "respostaCerta": "Galeria (gallery)",
            "puloDoGato": "Galerias permitem aninhamento (uma galeria dentro de outra para subcategorias) ou o uso de variáveis para alterar a altura de itens dinamicamente, permitindo o efeito de 'expandir/recolher' (accordion effect) solicitado no requisito.",
            "cascasDeBanana": [
                "Cartão (card): Cartões pertencem a Formulários e mostram um campo específico de um único registo, não servem para listar categorias e subcategorias.",
                "Dashboard do Power BI: Serve para análise de dados, não é um componente de interface de entrada/navegação nativo para listas expansíveis dentro de uma app de transações."
            ],
            "dicaOuro": "Listar dados repetitivos com design livre = Galeria (Gallery)."
        }
    }
];
