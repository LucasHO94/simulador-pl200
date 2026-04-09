export const questionsData = [
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
    },
    {
        "id": "q122_topic1",
        "text": "Você gerencia a implantação da solução entre ambientes do Microsoft Dataverse.\n\nVocê precisa controlar quais componentes da solução gerenciada são personalizáveis após uma solução ter sido importada para o ambiente de destino.\n\nO que você deve usar?",
        "options": [
            "Propriedades gerenciadas (Managed properties)",
            "Estágio para fazer um upgrade (Stage for upgrade)",
            "Segmentação de uma Solução (Solution segmentation)",
            "Página de Configuração (Configuration page)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre as configurações de bloqueio e liberação de componentes dentro de soluções gerenciadas.",
            "papoReto": "Quando você envia uma solução gerenciada para produção, o padrão é \"trancar\" tudo. Mas e se o cliente precisar mudar um valor ou uma lista suspensa depois que já estiver lá? Você configura as \"Propriedades Gerenciadas\" (Managed Properties) daquele componente antes de exportar, dizendo: \"Olha, este campo aqui eu deixo vocês personalizarem, o resto fica trancado\".",
            "respostaCerta": "Propriedades gerenciadas (Managed properties)",
            "puloDoGato": "A funcionalidade \"Managed Properties\" (Propriedades Gerenciadas) serve EXATAMENTE para definir se e quais partes de um componente específico podem ser customizadas no ambiente de destino onde a solução será importada como gerenciada.",
            "cascasDeBanana": [
                "Estágio para fazer upgrade: Usado para atualizar soluções completas sem excluir imediatamente a versão anterior, e não para bloquear/liberar campos individuais.",
                "Segmentação: Refere-se a levar apenas os pedaços da tabela que você alterou, em vez de levar a tabela inteira nas atualizações das soluções."
            ],
            "dicaOuro": "Controlar o que o cliente ou o destino pode editar numa Solução Gerenciada = Managed Properties (Propriedades Gerenciadas)."
        }
    },
    {
        "id": "q123_topic1",
        "text": "Você está desenvolvendo uma nova solução da Microsoft Power Platform para uma empresa.\n\nO produto dentro da solução deve ser aplicado como um componente de terceiros a outros ambientes.\n\nQual tipo de solução você deve usar?",
        "options": [
            "Solução não gerenciada com editor padrão (Unmanaged solution with default publisher)",
            "Solução gerenciada com editor padrão (Managed solution with default publisher)",
            "Solução gerenciada com editor personalizado (Managed solution with custom publisher)",
            "Solução não gerenciada com editor personalizado (Unmanaged solution with custom publisher)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão foca nas melhores práticas de distribuição de soluções (ALM) e o uso de editores (publishers).",
            "papoReto": "Se você está a fazer um produto para instalar na casa dos outros (terceiros), você tem de mandar isso \"empacotado e selado\", ou seja, Gerenciado (Managed). E para que todo mundo saiba que foi a sua empresa que fez (e para os seus campos terem o seu prefixo único, tipo \"minhaempresa_\"), você tem de criar um Editor Personalizado, em vez de usar o prefixo genérico básico do sistema.",
            "respostaCerta": "Solução gerenciada com editor personalizado (Managed solution with custom publisher)",
            "puloDoGato": "Ao empacotar soluções como Produtos de Terceiros (ISVs), deve-se obrigatoriamente usar soluções \"Managed\" (Gerenciadas) para evitar customizações indevidas no destino e permitir desinstalações limpas. Além disso, as boas práticas exigem OBRIGATORIAMENTE a criação de um Custom Publisher para manter a governança dos nomes lógicos dos componentes e evitar conflitos de prefixos no ambiente do cliente.",
            "cascasDeBanana": [
                "Soluções não gerenciadas (Unmanaged): Elas nunca devem ser enviadas como produto para ambientes de outras empresas de terceiros/produção, pois fundem-se permanentemente e não podem ser desinstaladas de forma limpa.",
                "Editor padrão (Default publisher): Este editor não deve ser usado para soluções profissionais ou de terceiros, pois corre o risco de sobrepor configurações se outro cliente criar recursos usando o mesmo prefixo \"new_\" ou \"cr_\"."
            ],
            "dicaOuro": "Distribuir produto para clientes (terceiros / deploy real) = Solução Managed (Gerenciada) + Custom Publisher (Editor Personalizado)."
        }
    },
    {
        "id": "q124_topic1",
        "text": "Você gerencia um ambiente de desenvolvimento da Microsoft Power Platform.\n\nVocê precisa implementar um mecanismo para evitar nomes de componentes duplicados nas diferentes soluções.\n\nQual propriedade da solução você deve usar?",
        "options": [
            "O número de versão da solução (Version number)",
            "A página de configuração (Configuration page)",
            "O Nome de Exibição (Display Name)",
            "Desenvolvedor / O editor da solução (Publisher)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "O foco aqui é o que garante a exclusividade técnica dos componentes na base de dados do Dataverse (governança do nome dos esquemas).",
            "papoReto": "Como você garante que o campo \"Gênero\" do módulo de Saúde não dará conflito direto no banco de dados com o campo \"Gênero\" do módulo de Vendas ou RH? Através do Editor (Publisher). Cada Editor tem um prefixo de letras único. Quando você cria o campo, o sistema cola esse prefixo obrigatoriamente na frente (tipo \"saude_genero\"), garantindo que o nome do componente interno não vai se chocar com campos parecidos de outros desenvolvedores / soluções.",
            "respostaCerta": "Desenvolvedor / O editor da solução (Publisher)",
            "puloDoGato": "A propriedade fundamental que previne componentes duplicados chama-se \"Publisher\" (Editor ou Desenvolvedor). O Editor injeta um prefixo base (ex: \"contoso_\") no nome lógico de TODA entidade ou campo criado, assegurando que o nome seja único e isolado independentemente da origem da solução.",
            "cascasDeBanana": [
                "O Nome de Exibição (Display Name): Você perfeitamente pode ter múltiplos campos chamados \"Telefone\" ou \"Nome\" sendo exibidos visualmente (mesmo Display Name). O que não pode ser duplicado é o _nome lógico no banco_, o qual é regido pelo Editor.",
                "Número de versão da solução: A versão (\"1.0.0.1\") é estritamente vinculada ao rastreio de pacotes da vida útil da Solução. Ela não impacta ou participa da composição do nome lógico do banco de dados (prefixo de tabela/coluna) dos componentes no Dataverse."
            ],
            "dicaOuro": "Evitar duplicação ou colisão nos nomes lógicos internos = Usar Editores (Publishers) e prefixos distintos em cada especialidade ou origem."
        }
    },
    {
        "id": "q125_topic1",
        "text": "Você cria um aplicativo de tela em uma solução do Microsoft Dataverse. O aplicativo de tela calcula valores a partir dos dados inseridos no aplicativo.\n\nVocê implanta a solução em ambientes downstream (posteriores na esteira de produção).\n\nOs usuários informam que os cálculos estão retornando erros da fórmula.\nVocê precisa diagnosticar o problema com o aplicativo de tela.\n\nO que você deve usar?",
        "options": [
            "Verificador de Soluções do Power Apps (Solution Checker)",
            "Monitor do Power Apps (Power Apps Monitor)",
            "Estúdio de Teste do Power Apps (Power Apps Test Studio)",
            "Histórico de auditoria do Dataverse (Dataverse Audit history)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora e reforça a ferramenta integrada padrão da interface de ALM e empacotamento da Microsoft para soluções, especificamente validada contra construções dos Aplicativos de Tela (Canvas Apps).",
            "papoReto": "Se o aplicativo está contido numa Solução embarcada num ambiente isolado e apresenta lógicas defeituosas de sintaxe de fórmulas, a Microsoft propõe como padrão da esteira rodar a inspeção completa. Para isso ela desenvolveu o \"Verificador de Soluções\". Ele escaneia tudo por dentro da solução, acha funções que não fecham ou estão sujeitas a falhas/funções obsoletas e devolve uma planilha (relatório) sobre o que e por que as fórmulas calculam os elementos de forma falha ou duvidosa.",
            "respostaCerta": "Verificador de Soluções do Power Apps (Solution Checker)",
            "puloDoGato": "Frequentemente esquecemos, mas o \"Solution Checker\" (Verificador de Soluções) suporta inteiramente as expressões do formato nativo do Canvas App. Ele detecta agressivamente problemas, violações, e inclusive regras mal formuladas dentro de Apps contidos nas nossas soluções.",
            "cascasDeBanana": [
                "Monitor do Power Apps: O monitor depura dados e tráfego REST e execuções ativas em Tempo Real (event logs no cliente), focando na requisição e lentidão. Ele pode auxiliar, mas nas questões de certificação sobre processos macro em componentes \"numa solução\", foca-se usualmente na valência diagnóstica estrutural do Verificador.",
                "Test Studio: Trata-se da ferramenta para gerar testes automatizados unitários reproduzíveis ao clicar em botões, mas não possui inspeção estática arquitetônica por fórmula ou erros não mapeados em cenários de design empacotado e validado."
            ],
            "dicaOuro": "Diagnosticar erros globais de fórmula e validações essenciais em aplicativos contidos inteiramente em Soluções = Solution Checker (Verificador de Soluções)."
        }
    },
    {
        "id": "q126_topic1",
        "text": "Você gerencia a implantação da solução entre ambientes do Microsoft Dataverse.\n\nVocê importa soluções de diversos personalizadores.\nVocê precisa atualizar os componentes que dão suporte para o comportamento de mesclagem (merge behavior).\n\nQual componente você deve atualizar?",
        "options": [
            "Aplicativo baseado em modelo (Model-driven app)",
            "Aplicativo de tela (Canvas app)",
            "Componente de fluxo de nuvem (Cloud flow component)",
            "Variáveis de Ambiente (Environment variables)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa é uma clássica questão sobre arquitetura fundamental de mesclagem do Application Lifecycle Management (ALM) na Power Platform em relação à coexistência de mudanças.",
            "papoReto": "Sabe quando duas filiais da empresa pedem para adicionar abas diferentes na ficha de Cliente? Se for num aplicativo normal da tela (Canvas app), a filial instalada por último passa por cima da outra porque ele obedece à regra de que \"quem entra por último esmaga o anterior\" (Top wins). Mas num Model-driven app do Dataverse, o sistema consegue amigavelmente \"mesclar\" e juntar as contribuições das duas equipes para tudo funcionar lado a lado. Isso é o Suporte a Mesclagem.",
            "respostaCerta": "Aplicativo baseado em modelo (Model-driven app)",
            "puloDoGato": "Apenas os componentes estruturais declarativos (usualmente XML-based) como Formulários da tabela (Forms), Mapas do Site (SiteMaps) e Aplicativos Baseados em Modelo (Model-Driven Apps) lidam nativamente com a fusão hierárquica inteligente denominada \"Comportamento de Mesclagem\" (Merge behavior).",
            "cascasDeBanana": [
                "Aplicativo de tela e Fluxos de nuvem (Cloud flows): Esses painéis não são conciliadores por XML. Eles adotam puramente a arquitetura de bloqueio \"O Topo Prevalece\" (Top Wins strategy), na qual o último objeto exportado simplesmente apaga a integridade do código customizado anterior pela raiz."
            ],
            "dicaOuro": "Suporte unificado de mesclagem (Merge Behavior) nas implantações de soluções = Model-driven apps e Formulários (Forms)."
        }
    },
    {
        "id": "q127_topic1",
        "text": "Você está criando uma solução dedicada da Microsoft Power Platform para um cliente.\n\nVocê precisa implantar a solução no ambiente de produção da Power Platform do cliente.\nVocê define o nome da solução.\n\nO que você deve definir a seguir?",
        "options": [
            "novo editor (new publisher)",
            "variáveis de ambiente (environment variables)",
            "referências de conexão (connection references)",
            "configuração do aplicativo (app configuration)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda a cronologia da criação e os requisitos fundamentais para preparar uma solução antes de adicionar componentes.",
            "papoReto": "Ao construir uma solução oficial e limpa para um cliente, não basta só criar a Solução e dar um nome. Antes de colocar a primeira tabela ou o primeiro campo lá dentro, a solução precisa de um \"responsável\", que é o Editor (Publisher). Essa é literalmente a segunda coisa que você define: o nome da solução e logo em seguida o Editor que vai ser atrelado a ela.",
            "respostaCerta": "novo editor (new publisher)",
            "puloDoGato": "O fluxo de criação de uma solução limpa exige a seleção ou criação de um Editor imediatamente após definir o nome da solução. É esse Editor que controlará os prefixos lógicos dos componentes que estão prestes a ser desenvolvidos.",
            "cascasDeBanana": [
                "Variáveis de ambiente e Referências de conexão: Esses elementos podem ser criados a qualquer momento posterior (depois que a solução já foi criada e os componentes principais já estão sendo ligados), e frequentemente são ajustados apenas instantes antes de exportar o pacote."
            ],
            "dicaOuro": "Nome da Solução criado? O passo obrigatório seguinte para garantir o prefixo correto é sempre = Escolher/Criar o Editor (Publisher)."
        }
    },
    {
        "id": "q128_topic1",
        "text": "Você gerencia um aplicativo orientado por modelo.\n\nOs usuários geralmente inserem dados incorretamente no formulário de um aplicativo orientado por modelo.\nVocê precisa mostrar recomendações de negócios baseadas em business intelligence para ajudar os usuários.\n\nO que você deve usar?",
        "options": [
            "fluxo de trabalho clássico (classic workflow)",
            "fluxo de processo empresarial (business process flow)",
            "regra de negócios (business rule)",
            "fluxo de nuvem (cloud flow)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão cobre a automação visual dentro de formulários de um Model-driven App.",
            "papoReto": "Se o vendedor preenche valores errados no formulário (ex: desconto maior que o permitido), o sistema precisa dar um \"alerta\" na mesma hora e oferecer uma indicação (Recomendação) diretamente na tela para ele clicar e corrigir o erro sozinho. A única ferramenta nativa feita para interagir em tempo real no formulário mostrando Recomendações é a Regra de Negócios.",
            "respostaCerta": "regra de negócios (business rule)",
            "puloDoGato": "As \"Regras de Negócios\" (Business Rules) não servem apenas para ocultar campos ou torná-los obrigatórios. Elas possuem uma ação explícita chamada \"Mostrar Recomendação\" (Show Recommendation) que gera um ícone azul de lâmpada perto do campo, sugerindo um valor correto baseado na inteligência definida.",
            "cascasDeBanana": [
                "Fluxo de Processo Empresarial (BPF): Embora seja na tela, são voltados para garantir o ciclo de vida (estágios e etapas) de um longo processo, e não disparam \"Recomendações\" reativas de validação instantânea.",
                "Fluxos de nuvem/trabalho: Ocorrem no \"back-end\" (segundo plano no servidor) de modo invisível. Não conseguem exibir uma mensagem ou recomendação de UI interativa na tela ativa do usuário antes de ele salvar."
            ],
            "dicaOuro": "Mostrar feedback visual imediato ou Dicas de Lâmpadas azuis (Recomendações de Dados) no formulário = Regras de Negócios (Business Rules)."
        }
    },
    {
        "id": "q129_topic1",
        "text": "Você gerencia uma nova instância do Microsoft Dataverse.\n\nVocê precisa criar uma nova coluna para uma tabela personalizada. A nova coluna precisa ter o nome de esquema \"abc_income\".\n\nO que você deve criar primeiro?",
        "options": [
            "nova tabela (new table)",
            "nova solução padrão (new default solution)",
            "novo editor (new publisher)",
            "novo aplicativo (new app)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão reforça a origem dos prefixos de esquema no Dataverse.",
            "papoReto": "Se você quer que a sua coluna se chame \"abc_income\" no banco de dados, o \"abc_\" é o seu prefixo. Quem é dono do prefixo? O Editor! Então, muito antes de você conseguir criar o campo de \"income\" e batizá-lo de \"abc_income\", você terá de criar um Editor (Publisher) que seja o dono legal do prefixo \"abc_\".",
            "respostaCerta": "novo editor (new publisher)",
            "puloDoGato": "O nome de esquema (schema ou logical name) no Dataverse é imutavelmente formado pelo Prefixo do Editor + Nome do Componente. Como o sistema padrão cria campos com prefixo genérico (\"cr_\" ou \"new_\"), você está obrigado a criar um Editor (Publisher) customizado com prefixo \"abc_\" para atingir o requisito da questão.",
            "cascasDeBanana": [
                "Nova Solução Padrão: Soluções padrão (Default Solutions) carregam nativamente prefixos indesejados e não servem para controle avançado de nomenclatura.",
                "Nova tabela: Adicionar a tabela antes do editor resultaria inevitavelmente e automaticamente numa entidade gravada com prefixos indevidos que jamais poderão ser retroativamente alterados depois de criados."
            ],
            "dicaOuro": "Alterar ou forçar um prefixo específico (ex: abc_...) na raiz estrutural de campos ou entidades = Sempre criar um \"Novo Editor\" (New Publisher) primeiro!"
        }
    },
    {
        "id": "q130_topic1",
        "text": "Uma empresa está implementando o Microsoft Dynamics 365 Sales.\n\nAs oportunidades devem ser atualizadas com \"Est. Fechar Data\" uma vez em que \"Receita Est.\" tem dados.\nO cliente deseja que uma mensagem de erro apareça no formulário da oportunidade se uma Oportunidade não tiver um \"Est. Fechar Data\" quando a \"Receita Est.\" tem dados.\n\nO que você deve configurar para mostrar a mensagem?",
        "options": [
            "fluxo de nuvem (cloud flow)",
            "fluxo de processos de negócios (business process flow)",
            "regra de negócios (business rule)",
            "fluxos de dados (data flows)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Outra questão focada em como apresentar bloqueios e validações diretas ao olhar e preencher o formulário.",
            "papoReto": "Você preencheu o valor do negócio, mas esqueceu a provável data que vai receber o dinheiro. Antes de você salvar ou seguir em frente, o formulário deve te jogar um \"X Vermelho\" bloqueando a ação. Exibir um erro cravado no próprio campo, na hora, é a principal função e o \"pão com manteiga\" das Regras de Negócios.",
            "respostaCerta": "regra de negócios (business rule)",
            "puloDoGato": "A funcionalidade \"Mostrar Mensagem de Erro\" (Show Error Message) é uma das ações nativas das Regras de Negócios. Ela avalia se uma condição não foi seguida no preenchimento do formulário e trava a capacidade de salvar a página enquanto plota uma marca de aviso vermelha do lado do campo ofensor.",
            "cascasDeBanana": [
                "Fluxo de Processo Empresarial: Não serve para disparar alertas de validação condicional de erro cruzado instantânea.",
                "Fluxos de nuvem: Operam por trás das cortinas. Eles não conseguem injetar pop-ups ou travar o botão Save na interface em tempo interativo para o usuário.",
                "Fluxos de dados: Ferramenta de ETL e migração de tabelas volumosas, puramente irrelevante a lógicas e trava de telas do utilizador."
            ],
            "dicaOuro": "Mostrar mensagem de ERRO visível direta no campo preenchido do formulário (validação de UI em tempo real) = Regra de Negócios."
        }
    },
    {
        "id": "q131_topic1",
        "text": "Você está criando uma solução dentro da Microsoft Power Platform para uma organização de saúde.\n\nA organização requer um modelo de dados. O modelo deve ser mantido na solução em vez de ser carregado manualmente para cada ambiente implantado.\n\nVocê precisa adicionar o modelo à solução.\nQual tipo de modelo você deve adicionar?",
        "options": [
            "Word",
            "Excel",
            "Mapas de dados (Data maps)",
            "Email"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão trata das capacidades e limitações do pacote de \"Soluções\" de ambiente. Ela testa se você entende exatamente que tipos de templates de negócio o pacote aceita exportar embutido automagicamente.",
            "papoReto": "Ao exportar a solução de Desenvolvimento para Produção, você quer que o seu template vá junto na \"malinha\", sem ter que carregar arquivos na mão por fora. O problema é que o Dataverse e a Power Platform apenas \"abraçam\" e empacotam nativamente e de forma automática os Modelos de E-mail. Templates e arquivos de Office não são guardados lá e exigem migração autônoma.",
            "respostaCerta": "Email",
            "puloDoGato": "Por design da arquitetura sistêmica nativa, \"Modelos de Email\" (Email Templates) podem ser atrelados e transportados legitimamente dentro dos pacotes das Soluções. Todos os \"Modelos do Word\" (Word Templates) e \"Modelos do Excel\" precisam de um processo paralelo de ingestão extrema em cada novo ambiente e não vão na \"malinha\".",
            "cascasDeBanana": [
                "Mapas de dados (Data maps): São gabaritos utilizados exclusivamente na importação massiva para dizer qual coluna do CSV cru entra na tabela Dataverse. Como o uso é logístico e local focado no Processamento de Migração, pacotes de Solução evitam embarcar gabaritos isolados de data migration como dependências contínuas."
            ],
            "dicaOuro": "O único tipo de \"Modelo\" (Template) que pode ser orgânica e consistentemente embutido nos pacotes de Soluções para carregar migrar de ambiente = Modelo de E-Mail!"
        }
    },
    {
        "id": "q132_topic1",
        "text": "Você cria uma tabela personalizada no Microsoft Dataverse para captar informações de doadores de sangue. Você cria um aplicativo de tela no qual os usuários irão gravar e salvar dados na tabela do Dataverse.\n\nOs usuários precisam captar se um doador já doou sangue anteriormente. Se o doador já tiver doado, você precisará preencher um valor na coluna ID do Doador. Você usa uma regra de negócios para implementar isso.\n\nVocê precisa configurar a coluna. O que você deve fazer?",
        "options": [
            "Defina o escopo da regra de negócios como Entidade (Entity scope).",
            "Defina o escopo da regra de negócios como Informações (Information form scope).",
            "Defina o escopo da regra de negócios como Todos os Formulários (All Forms scope).",
            "Defina uma coluna como Recomendada para os Negócios (Business recommended)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão relembra a regra de ouro sobre onde as Regras de Negócios são executadas quando saímos do ecossistema de aplicativos baseados em modelos.",
            "papoReto": "Se você criasse um aplicativo focado em botões e visuais pelo Canvas App e quisesse uma validação rodando, você não pode atrelar a validação à tela do Canvas usando Regras de Negócios convencionais de formulário. Para que o motor entenda essa regra mesmo quando a tela é um Canvas App construído \"do zero\", a regra TEM que estar amarrada diretamente na veia do banco de dados (no servidor). Esse nível direto é o escopo \"Entidade\".",
            "respostaCerta": "Defina o escopo da regra de negócios como Entidade.",
            "puloDoGato": "Sempre que a certificação citar que uma Regra de Negócio precisa atuar baseada num \"Canvas App\" (Aplicativo de Tela) ou num \"Power Pages/Portal\", você está OBRIGADO a definir o Escopo dela como \"Entidade\". Apenas o escopo Entidade executa a regra do lado do servidor (Server-side) independentemente do aplicativo usado.",
            "cascasDeBanana": [
                "Escopo Todos os Formulários ou Informações: Escopos de formulário funcionam ESTRITAMENTE e UNICAMENTE dentro de Aplicativos Orientados a Modelos (Model-driven Apps) porque executam JavaScript invisível por trás do lado do cliente (Client-side) naqueles formulários específicos.",
                "Recomendada para os negócios: O requisito não era \"aconselhar\" uma recomendação opcional, era ativamente preencher e ler um fluxo real condicionado em um Canvas App."
            ],
            "dicaOuro": "Regras de negócios ativas para CANVAS APP (Aplicativo de tela) ou INTEGRAÇÕES = Escopo \"Entidade\" (Sempre no lado do Servidor/Server-side)."
        }
    },
    {
        "id": "q133_topic1",
        "text": "Você quer configurar os logs para serem excluídos automaticamente à medida que os fluxos de trabalho forem concluídos.\n\nVocê planeja usar um trabalho de exclusão em massa que é executado com uma programação recorrente. Você precisa configurar a programação recorrente.\n\nQual opção de frequência disponível você pode usar?",
        "options": [
            "Hora (Hour)",
            "Dia (Day)",
            "Semana (Week)",
            "Mês (Month)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta curiosidade técnica testa os limites impostos aos agendamentos de rotinas automáticas de manutenção (Bulk Delete Jobs) da Microsoft.",
            "papoReto": "A Microsoft não quer o seu banco de dados sofrendo arrastões de limpeza de arquivos pesados apagando registro por registro a cada 5 ou 10 minutos para não sobrecarregar as entranhas do sistema concorrendo com a utilização diária. Por isso, ao criar um robô varredor (Deletion Job), a menor ou principal frequência de rotina repetitiva que o assistente de sistema te oferecerá para limpar tabelas volumosas é a reincidência de apenas 1 por dia.",
            "respostaCerta": "Dia (Day)",
            "puloDoGato": "Trabalhos de exclusão em massa recorrentes (Bulk Record Deletion Jobs) no Dataverse e no Dynamics não suportam execução em intervalos granulares curtos de \"Minutos\" ou \"Horas\" sob o assistente clássico para preservar recursos computacionais globais do SaaS de Banco de Dados. A referência da granularidade típica suportada na interface de recorrência é em intervalos de Dias.",
            "cascasDeBanana": [
                "Minutos ou Horas: Não estão disponíveis nativamente na configuração padrão do Bulk Deletion Wizard para frequências programadas recorrentes.",
                "Semana ou Mês: Você até poderia tentar esquemas manuais raros, mas a menor unidade primária nativa para gerenciar logs agudamente frequentes do sistema dentro das opções do próprio painel do sistema é \"Dias\" (Ex: a cada X dias)."
            ],
            "dicaOuro": "A recorrência padrão aceita dentro do assistente para Trabalhos de Exclusão em Massa (Bulk Delete) atuar limpando logs recorrentemente = intervalos em Dias (Day)."
        }
    },
    {
        "id": "q134_topic1",
        "text": "Você está configurando um aplicativo orientado por modelo usando regras de negócios.\n\nVocê precisa garantir que as regras de negócios sejam executadas no lado do servidor (server-side).\n\nO que você deve usar para configurar o escopo das regras de negócios?",
        "options": [
            "Todos os Formulários (All Forms)",
            "Formulário Informações (Information Form)",
            "Entidade (Entity)",
            "Formulário Conta (Account Form)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão é a irmã quase gêmea direta da questão 132 (onde abordou o Canvas App). Aqui a Microsoft foca no mesmo conceito sob um enunciado totalmente teórico.",
            "papoReto": "Uma regra de negócios pode agir como mágica visual ou como uma lei na base de dados. Se a regra age apenas na magia visual da tela, ela corre no navegador do usuário (lado do cliente). Mas, se o arquiteto decretar que essa regra tem que agir igual a um \"guarda de trânsito blindado\" contra edições via Excel, integrações ou sistemas terceiros rodando diretamente das nuvens, a regra corre no Servidor. Esse bloqueio no servidor chama escopo \"Entidade\".",
            "respostaCerta": "Entidade (Entity)",
            "puloDoGato": "Não tem exceção: o ÚNICO escopo de Regra de Negócios (Business Rule) que interage, amarra e engatilha validações ativamente na operação da própria base de dados no lado do servidor (Server-side) é o escopo \"Entity / Entidade\".",
            "cascasDeBanana": [
                "Todos os Formulários, Formulário Informações, Formulário Conta: Literalmente qualqer outro escopo ancorado a um formulário atua ESTRITAMENTE usando Client-Side Web Resources (Scripts no lado do Cliente correndo via browser JS) e apenas ativam enquanto o modelo visual da tela corre."
            ],
            "dicaOuro": "Side-server execution (Execução no lado do servidor) mandatório para Regras de Negócios = Usar o Escopo de Entidade (Entity Scope)."
        }
    },
    {
        "id": "q135_topic1",
        "text": "Você está desenvolvendo um fluxo de trabalho clássico em tempo real.\n\nVocê precisa verificar o seguinte:\n- os valores atuais para a linha na qual o fluxo de trabalho em tempo real está sendo executado.\n- os valores de todas as linhas vinculadas à linha do fluxo pai em uma relação N:1.\n\nQual tipo de condição de etapa (step) você deve usar?",
        "options": [
            "condição de espera (Wait condition)",
            "condição de verificação (Check condition)",
            "branch de espera paralela (Parallel wait branch)",
            "branch condicional (Conditional branch)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão remonta aos fundamentos dos clássicos \"Real-time Workflows\" herdados do Dynamics, testando como avaliar dados relacionados e pai (N:1).",
            "papoReto": "Se quer olhar a ficha do cliente na qual o fluxo acordou e, num flash, \"espiar\" a Conta da empresa master desse cliente vinculada lá pela tabelinha pai ligada do lado N:1 pra checar regras, você usa o componente mestre da clássica árvore booleana condicional. O bloco padrão disso tudo (O \"IF\" do seu loop lógico universalzinho) baseia-se primordialmente na etapa Check Condition (Condição de Verificação).",
            "respostaCerta": "condição de verificação (Check condition)",
            "puloDoGato": "Nos Workflows Clássicos, a etapa principal \"Check Condition\" (Condição de Verificação) é a precursora da ação. Ela concede acesso a validar o registro da inicialização E a saltar pelas relações mapeadas N:1 (Lookups) para realizar comparações diretas avaliativas nas chaves das tabelas originárias mestres vinculadas (Under/Not Under Operators).",
            "cascasDeBanana": [
                "Condição de espera e Branch Paralela (Wait Condition/Parallel Wait): São fluxos assíncronos que estacionam no tempo esperando eventos sistêmicos. Workflows definidos configurados \"Em Tempo Real\" ESTRITAMENTE se recusam e repudiam a utilização letárgica contada nas amarras cronológicas geradas nas condições Wait.",
                "Branch condicional (Otherwise If): Condição de galho dependente complementar usada apenas como rotina reativa alternativa, e não constituidora inicial de consultas ativas mestres de verificação pai-primária."
            ],
            "dicaOuro": "Real-time Workflows clássicos querendo avaliar dados e cruzar relações de pai vinculados imediatos numa cláusula lógica de decisão base = Condição de Verificação (Check condition)."
        }
    },
    {
        "id": "q136_topic1",
        "text": "Você está solucionando problemas de um fluxo de trabalho clássico desenvolvido para um cliente.\n\nO fluxo de trabalho não está sendo executado conforme o previsto e está posicionado em um estado \"Aguardando\". Você observa que a conta do proprietário do fluxo de trabalho está desativada.\n\nVocê precisa resolver o problema fundamental. O que você deve fazer?",
        "options": [
            "Atualize o proprietário do fluxo de trabalho e atualize o proprietário das execuções ativas do fluxo de trabalho.",
            "Atualize o proprietário do fluxo de trabalho e cancele as execuções anteriores travadas no estado Aguardando.",
            "Atualize o proprietário do fluxo de trabalho e reenvie (resubmit) proativamente as execuções de fluxo de trabalho.",
            "Atualize o proprietário do fluxo de trabalho e exclua (delete) forçosamente as execuções anteriores no estado Aguardando."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "A questão testa resoluções administrativas cirúrgicas do Workflow Clássico face à inativação repentina de quem criou e ancorou com privilégios o gatilho da lógica original.",
            "papoReto": "O velho e complexo problema da conta do gerente demitido! Se a conta do criador do mecanismo original afundou trancada na inativação da empresa, os robôs estacionados caem no vazio ao tentarem rodar. Solução de segurança: Você como Admin transfere e apropria para si o Workflow matriz ativando a nova posse. Agora o que fazemos com as execuções antigotas acumuladas lá na inércia? Você não as recicla nem a propulsa magicamente num crachá novo. Você não destrói os vestígios na brutalidade. Você tem que CANCELÁ-LAS regimentalmente. Corta-se o erro pela raiz esvaziando o sistema formal.",
            "respostaCerta": "Atualize o proprietário do fluxo de trabalho e cancele as execuções anteriores no estado Aguardando.",
            "puloDoGato": "Workflows Clássicos travados e engasgados baseiam-se numa assinatura morta. Trocar o proprietário mestre devolve saúde vital para criações FUTURAS. Mas para os Jobs (execuções do sistema pre-disparadas) travados e já instanciados como Waiting que continuam apontando num link fantasma de conta e tentarão reativar o colapso interno. A regra oficial ALM da arquitetura Dataverse obriga cancelá-los (Cancel instances) sem alterar e não aceita manipulação retroativa nominal das sessões instanciadas.",
            "cascasDeBanana": [
                "Atualizar o dono das execuções ativas (Jobs history): A infraestrutura não tem permissão para alterar titularidades já disparadas via gatilhos prévios de jobs orgânicos das execuções.",
                "Reenviar (Resubmit): Falhará permanentemente porque a assinatura digital validada contextual já havia corrompido os laços.",
                "Excluir Forçosamente (Delete): O sistema bloqueia a aniquilação física impune de status em Waiting, deve comissionar com desativação manual orgânica (Cancel/Cancelled)."
            ],
            "dicaOuro": "Desatou o problema do proprietário desativado que engasgou os Workflows Clássicos originais? Vire dono globalmente do processo (Change Owner) + OBRIGATORIAMENTE CANCELE as instâncias congeladas paradas lá trás."
        }
    },
    {
        "id": "q137_topic1",
        "text": "Você está capturando informações de saúde de um cliente em um formulário de um aplicativo orientado por modelo.\n\nVocê precisa executar cálculos complexos com o aplicativo.\nVocê precisa garantir que os usuários não possam inserir dados enquanto os cálculos estão sendo executados.\n\nQual ferramenta você deve usar para bloquear a interface do usuário?",
        "options": [
            "fluxo de trabalho clássico (classic workflow)",
            "fluxo de trabalho instantâneo (instant workflow)",
            "fluxo de processo de negócios (business process flow)",
            "Power Fx"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão clássica foca em identificar as propriedades síncronas de ferramentas legadas que permanecem valiosas devido ao controle agressivo do tempo de execução.",
            "papoReto": "Sabe quando você clica em \"Salvar\" e aparece um ícone girando (\"Carregando...\") que te impede de mexer na tela até terminar de calcular o imposto? Fluxos de Nuvem (Power Automate) rodam \"lá longe\" por trás dos panos (assíncronos), se você usar eles ou Power Fx, o usuário vai continuar clicando pela tela enquanto o cálculo não volta. Só o bom e velho \"Fluxo de Trabalho Clássico\" configurado como \"Tempo Real (Real-time)\" tem a força bruta orgânica de travar o navegador do usuário aguardando a resposta processada no banco.",
            "respostaCerta": "fluxo de trabalho clássico (classic workflow)",
            "puloDoGato": "A certificação sempre associará a expressão \"Bloquear a Interface do Usuário\" (Block User Interface) ou execução \"Síncrona/Tempo Real\" robusta no Dataverse aos \"Classic Real-time Workflows\" (Fluxos de Trabalho Clássicos) devido à sua capacidade de agir na mesma transação exata do banco de dados, travando o retorno à camada visual (UI) até a conclusão efetiva.",
            "cascasDeBanana": [
                "Power Fx e fluxos de nuvem/instantâneos: Executam de forma largamente assíncrona ou em client-side de modo permissivo sem engessamento de thread único trancador de UI.",
                "Fluxos de processo de negócios (BPF): São apenas trilhos de guia de fases sequenciais. Eles são incapazes de realizar cálculos matemáticos de retaguarda complexos por conta própria."
            ],
            "dicaOuro": "Bloquear/travar ativamente a interface do usuário DURANTE a espera por lógicas/cálculos = Fluxo de Trabalho Clássico (em Tempo Real)."
        }
    },
    {
        "id": "q138_topic1",
        "text": "Sua organização usa o Microsoft Power Platform para gerenciar interações do cliente. Recentemente, a equipe de vendas tem lutado com a entrada de dados inconsistentes e a falta de adesão ao processo padrão ao lidar com clientes potenciais.\n\nEssa inconsistência está afetando a taxa de conversão de clientes potenciais para oportunidades.\nVocê precisa implementar uma solução que garanta que a equipe de vendas siga um processo consistente para gerenciar clientes potenciais.\n\nO que você deve fazer?",
        "options": [
            "Crie um fluxo de processo de negócios (BPF) com estágios para a qualificação de leads.",
            "Use regras de negócios para validar a entrada de dados no formulário de cliente potencial.",
            "Implemente um programa de treinamento para a equipe de vendas seguir.",
            "Use um fluxo de trabalho em tempo real para automatizar conversões."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão define perfeitamente o cenário clássico de \"Business Need\" que deu origem à existência dos componentes \"Fluxos do Processo Empresarial\" (BPF).",
            "papoReto": "A equipe de vendas está batendo cabeça: um anota telefone no caderno, outro cadastra cliente pela metade, outro pula etapas. Como forçar todo mundo a trabalhar na mesma sintonia? Colocando um \"trilho de trem\" no topo da tela chamado \"Fluxo do Processo Empresarial\". Essa barra superior literalmente não deixa o vendedor seguir para a fase \"Proposta\" sem antes obrigatoriamente preencher os campos vitais da fase \"Qualificação\". Trata-se de forçar um Padrão guiado.",
            "respostaCerta": "Crie um fluxo de processo de negócios (BPF) com estágios para a qualificação de leads.",
            "puloDoGato": "Toda vez que a certificação citar problemas de \"Inconsistência de processo\", \"Adesão às etapas\", ou a necessidade de prover uma \"Experiência guiada\" (Guidance) passo-a-passo para uniformizar dados de trabalho de uma equipe, a resposta 100% das vezes será utilizar um \"Business Process Flow\".",
            "cascasDeBanana": [
                "Regras de Negócios: Elas até trancam e valem campos no formulário reativamente, mas não oferecem um ciclo de vida e visibilidade longitudinal das \"Etapas do que fazer a seguir\" que um time precisa para alinhar o workflow humano.",
                "Programas de Treinamento: Não criam barreiras de software impositivas ou automações restritivas no app."
            ],
            "dicaOuro": "Garantir Processo Consistente para Usuários e prover Experiência Guiada com Fases claras (Estágios) = Business Process Flow (Fluxo de Processo de Negócios)."
        }
    },
    {
        "id": "q139_topic1",
        "text": "Você está desenvolvendo um fluxo de processo de negócios (BPF).\n\nVocê precisa acionar um fluxo de trabalho sob demanda dentro do fluxo de processo de negócios para criar uma conta nova.\n\nQual componente base você deve usar no design?",
        "options": [
            "Etapa de Ação (Action Step)",
            "Condição de formação de branches (Branching condition)",
            "Etapa de Dados (Data Step)",
            "Gatilho de nuvem instantâneo (Instant cloud trigger)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia a sua compreensão estrutural do \"esqueleto\" e blocos que montam as peças visuais de um Fluxo de Processo de Negócios (BPF).",
            "papoReto": "Dentro daquele famoso trilho guiado do BPF (a barra de fases horizontal), você normalmente preenche textinhos na \"Etapa de Dados\". Mas e se você quiser colocar um Botão real para o usuário apertar ali dentro e mandar o sistema rodar um WorkFlow para aprovar crédito na hora? Você acopla nesse Estágio uma \"Etapa de Ação\" (Action Step). Ela funciona como a \"boca de conector\" que converte e aciona automações robustas engavetadas lá de dentro da fase.",
            "respostaCerta": "Etapa de Ação (Action Step)",
            "puloDoGato": "O único componente estrutural projetado nativamente para permitir que um usuário inicie pontualmente / manualmente um Workflow clássico \"sob demanda\" (on-demand) exibido diretamente como um elemento consumível dentro dos estágios na barra de um Business Process Flow é a \"Etapa de Ação\" (Action Step).",
            "cascasDeBanana": [
                "Condição de Branching: Apenas divide e cria caminhos divergentes e atalhos na visualização da trilha (\"Se receita alta, mostre fase B\"), nunca dispára robôs.",
                "Etapa de Dados: Responsável trivial por amarrar uma ou exigir o preenchimento de colunas básicas e triviais durante a fase em execução."
            ],
            "dicaOuro": "Executar fluxos de trabalho \"On-demand\" ou desencadear Custom Actions pressionando botões DENTRO de fases BPF = Etapa de Ação (Action Step)."
        }
    },
    {
        "id": "q140_topic1",
        "text": "Você está desenvolvendo um fluxo de processo de negócios. Uma das etapas requer a aprovação do gerente para os usuários.\n\nVocê precisa projetar a injeção um fluxo de nuvem (Cloud flow) para gerenciar essa aprovação no BPF.\n\nComo você deve desenhar essa arquitetura?",
        "options": [
            "Adicione o fluxo de nuvem a um estágio existente usando um componente de Etapa Fluxo (Flow Step).",
            "Adicione o fluxo de nuvem como um novo estágio (Stage) independente e isolado no fundo do fluxo.",
            "Crie o fluxo de nuvem como um fluxo instantâneo usando um gatilho manual isolado e desconectado.",
            "Crie o fluxo de nuvem estritamente em um ambiente padrão alardeado sobre o Dataverse."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um passo metodológico e cronológico além da questão anterior: Aqui, o foco explícito é a integração dos novos robôs modernos (Power Automate Cloud Flows) por dentro do trilho engessado do BPF.",
            "papoReto": "A regra restrita do construtor de BPF avisa: Você não consegue botar um Robô da Nuvem voando solto como protagonista, e nem dar pra ele a honra de ser um \"Estágio/Fase\" grandona pra ele próprio aparecer isolado. Uma \"Fase\" (Stage) atua hospedando vários \"Passos\" (Steps). Logo, se você quer integrar uma aprovação de Nuvem moderna na trilha, selecione uma fase orgânica que já existe (um Estágio Pai) e jogue o seu motorzinho lá debaixo camuflando como um componente modesto chamado \"Etapa Fluxo\" (Flow Step).",
            "respostaCerta": "Adicione o fluxo de nuvem a um estágio existente usando um componente de Etapa Fluxo (Flow Step).",
            "puloDoGato": "Fique atento à sutil e rígida hierarquia arquitetural do Dataverse: Os modernos \"Cloud Flows\" (Fluxos de Nuvem) penetram nos BPFs (Business Process Flows) estrita e inegociavelmente através da ancoragem como componentes categorizados \"Flow Step\" (Etapas Fluxo) subordinados a habitarem e executarem necessariamente aninhados a um Estágio (Stage) já previamente estabelecido.",
            "cascasDeBanana": [
                "Adicionar como Estágio Separado: Incorreto do ponto de vista do design. Estágios (\"Stages\") são os baldes macro que contêm ações; eles não contêm execuções ativas isoladamente per se. O fluxo de nuvem habita o subnível step no Stage respectivo.",
                "Gatilhos Manuais ou Ambientes soltos: Desvirtuam e desancoram a experiência integrada contextual embutida onde a telemetria do fluxo pai passa para a instância flutuante da nuvem."
            ],
            "dicaOuro": "Hospedar de forma correta e nativa conectores Cloud Flow (Power Automate) no interior dos BPFs = Componente \"Etapa Fluxo\" (Flow Step) subordinado/adicionado a um \"Estágio existente\"."
        }
    },
    {
        "id": "q141_topic1",
        "text": "Você cria um fluxo de processo de negócios (BPF) para uma empresa que vende impressoras.\n\nA equipe de vendas prepara propostas em um estágio inicial do fluxo do processo de negócios. Um chefe de equipe precisa avaliar e aprovar as propostas antes de compartilhá-las com os clientes.\n\nVocê precisa adicionar uma etapa nativa para o processo de revisão e aprovação engatilhada sob demanda neste estágio final.\nO que você deve adicionar?",
        "options": [
            "fluxo de nuvem instantâneo (instant cloud flow)",
            "fluxo de nuvem automatizado (automated cloud flow)",
            "fluxo de área de trabalho (desktop flow)",
            "regra de negócios (business rule)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora os mecanismos de integração de automação manual contidos como recursos dos estágios de um Business Process Flow (BPF).",
            "papoReto": "O chefe precisa olhar e dizer \"Aprovado!\" quando quiser. Qual o tipo de fluxo no Power Automate que roda \"quando alguém clica num botão\"? É o Fluxo Instantâneo. Como a aprovação ocorre dentro de uma fase específica e aguarda o time finalizar o preenchimento, você atrela (embutido na fase) um Fluxo de Nuvem Instantâneo que os usuários e chefes irão disparar manualmente clicando no botão da Etapa correspondente.",
            "respostaCerta": "fluxo de nuvem instantâneo (instant cloud flow)",
            "puloDoGato": "Aprovações orquestradas diretamente DENTRO da barra de um processo (BPF) como botões ou ações que o usuário inicia deliberadamente exigem um \"Fluxo Instantâneo\". Eles são acoplados via \"Etapa de Fluxo\" (Flow Step) e permitem passagem do contexto atual da tela param o fluxo.",
            "cascasDeBanana": [
                "Fluxo Automatizado: Estes escutam um gatilho de sistema por baixo dos panos (como um \"Quando criado no banco\") e correm invisíveis. Não são injetados interativamente como uma etapa visível controlável do estágio.",
                "Fluxo de Área de Trabalho (RPA): Utilizados para macros legadas com interações visuais no Windows, de altíssimo peso e inviabilidade para mera aprovação de registro web."
            ],
            "dicaOuro": "Tarefas de revisão e aprovação acionadas deliberadamente de \"dentro\" do trilho de um fluxo de processo de negócios = Fluxo de nuvem instantâneo."
        }
    },
    {
        "id": "q142_topic1",
        "text": "Você gerencia um Microsoft Power Pages.\n\nVocê precisa permitir que os usuários possam baixar conteúdo de um Power Pages usando arquivos da web (Web Files).\n\nQual local externo ou meio estrutural você pode usar de forma nativamente acoplada para armazenar e servir os arquivos web?",
        "options": [
            "Armazenamento de Blob do Microsoft Azure (Azure Blob Storage)",
            "Microsoft SharePoint",
            "Microsoft OneDrive for Business",
            "Microsoft Stream"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta recai sobre a arquitetura de armazenamento paralela suportada ao construir o sistema de \"Web Files\" no Power Pages/Power Apps Portals.",
            "papoReto": "Os arquivos de site (imagens, PDFs para download) do Power Pages pesam, e o custo por mega no Dataverse é muito mais caro que num pendrive gigante na nuvem. A Microsoft programou o sistema de portais para aceitar apenas dois formatos para arquivar nativamente Web Files: ou eles vivem diretamente presos nos blocos nativos de Anexos (Notes/Annotations) do Dataverse, ou você joga pra um \"Storage\" baratinho e colossal que é suportado nativamente pelo Portal. Esse único Storage com suporte nativo de offload é o Azure Blob Storage.",
            "respostaCerta": "Armazenamento de Blob do Microsoft Azure (Azure Blob Storage)",
            "puloDoGato": "Por padrão arquitetural do construtor de Portais (Power Pages), os Arquivos Web são armazenados estritamente na entidade Observações (Notes/Annotations). Para habilitar armazenamento externo e contornar limites, a única via formalmente suportada e nativamente amarrável nas configurações do portal (Site Settings) é delegar os anexos para o \"Azure Blob Storage\".",
            "cascasDeBanana": [
                "SharePoint e OneDrive: Embora o Dataverse tenha integração de Documentos com o SharePoint, isso serve para gestão de arquivos entre usuários nos Model-Driven Apps, e NÃO como infraestrutura base pública e servidora de Web Files e assets renderizáveis de código/telas de download de um Power Page.",
                "Stream: Repositório estrito para ativos de vídeo em streaming."
            ],
            "dicaOuro": "Armazenamento complementar oficial e nativo para externalizar Arquivos Web (Web Files) de Portais (Power Pages) = Azure Blob Storage."
        }
    },
    {
        "id": "q143_topic1",
        "text": "Você está criando um aplicativo de tela (Canvas App). Você está usando a tabela Contas no aplicativo.\n\nVocê precisa definir uma ação para navegar até o modo de exibição padrão da tabela Contas.\n\nQual sintaxe da fórmula Power Fx deve ser usada?",
        "options": [
            "Navegar(Contas) / Navigate(Accounts)",
            "Navegar(ModoDeExibição.Contas) / Navigate(View.Accounts)",
            "Contas.Navegar() / Accounts.Navigate()",
            "Navegar(Contas, Padrões) / Navigate(Accounts, Defaults)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um foco singelo na sintaxe correta do Power Fx quando a função lida diretamente com contêineres de dados (Tabelas).",
            "papoReto": "Se você colocar num botão a ordem para ir para a tela inteira que lista os dados da tabela Contas, o comando \"Navegar\" (Navigate) é surpreendentemente inteligente. Se ao invés de passar o nome de uma Tela do app, você passar o nome puro da Tabela conectada inteira como argumento principal, o Power Apps entende a mágica e exibe automaticamente a galeria padrão com aquela entidade.",
            "respostaCerta": "Navegar(Contas) / Navigate(Accounts)",
            "puloDoGato": "No Canvas App (e cada vez mais nativo nas transições baseadas em Modelos e Custom Pages), a função \"Navigate\" pode receber o nome lógico da Fonte de Dados (ex: a tabela \"Contas\"). Declarar \"Navigate(Contas)\" direcionará diretamente o foco da navegação à exibição padrão de entidade gerada pelo aplicativo, sem necessidade de sintaxes adicionais prolixas.",
            "cascasDeBanana": [
                "Transmitir qualquer segundo argumento, contexto ou prefixo como (View.Contas): É incorreto na sintaxe padrão para esse resultado, pois qualquer artefato embutido extra não carregaria a exibição padrão clean exigida, tentando invocar comandos de filtro redundantes ou quebrando a compilação do Power Fx."
            ],
            "dicaOuro": "Navegar diretamente para a tela de visualização padrão de uma tabela = Forneça APENAS o nome exato da tabela no Power Fx [Navigate(TableName)]."
        }
    },
    {
        "id": "q144_topic1",
        "text": "Você está desenvolvendo um fluxo de nuvem automatizado para uma tabela de Contatos do Microsoft Dataverse. O fluxo de nuvem deve começar quando um novo contato é adicionado à tabela.\n\nVocê precisa buscar atributos englobando o escopo completo contido dentro do cabeçalho do gatilho das ações (trigger header and payload).\n\nQual função de expressão primária você deve usar?",
        "options": [
            "triggerOutputs()",
            "triggerBody()",
            "triggerFormDataValue()",
            "result()"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é uma questão raiz e avançada que exige a compreensão das entranhas matemáticas (Expressões JSON nativas do Logic Apps) que movem o Power Automate.",
            "papoReto": "Quando um form \"atira\" um gatilho e o fluxo acorda, o envelope recebido não vem só a cartinha solta com os campos de nome e email (\"Body\"). O Correio traz o envelope listando o IP, os cabeçalhos HTTP de segurança (\"Headers\") e enfim a mensagem mestre no pacote completo final. A função global que engloba acesso universal para você ler tanto o carimbo externo quanto todos os miolos internos da carta do gatilho chama-se \"triggerOutputs()\".",
            "respostaCerta": "triggerOutputs()",
            "puloDoGato": "A expressão \"triggerOutputs()\" é a provedora máxima em Power Automate para ler saídas na origem do gatilho contendo os metadados macro. Ela difere das secundárias por dar acesso não apenas aos dados formatados do Payload central, mas à totalidade do envolope, em especial os \"Headers\" (Cabeçalhos HTTP).",
            "cascasDeBanana": [
                "triggerBody(): É a segunda mais popular, mas captura puramente os valores de dados brutos (payload) dentro da mensagem principal, omitindo completamente a camada superior que inclui atributos do cabeçalho de rede (Headers).",
                "triggerFormDataValue() e result(): Têm papéis restritos. A primeira decifra uma chave unitária HTML Form, e a result() varre resultados e status de passos de loops, e não cabeçalhos de trigger originais."
            ],
            "dicaOuro": "Ler atributos incluindo o CABEÇALHO (Headers) que o Gatilho disparador formou = triggerOutputs()."
        }
    },
    {
        "id": "q145_topic1",
        "text": "Uma empresa está usando o Microsoft Dynamics 365 Sales.\n\nOs gerentes precisam receber um email quando um vendedor cria uma nova oportunidade com valor superior a US$ 5.000.\n\nVocê precisa montar a arquitetura do fluxo no Power Automate para enviar o email. Que tipo de fluxo estrutural deve ser criado?",
        "options": [
            "fluxo de nuvem automatizado com uma ação Condição (Condition)",
            "fluxo de nuvem automatizado com uma ação Alternar (Switch)",
            "fluxo de nuvem programado (scheduled) com uma ação Condição",
            "fluxo de nuvem programado (scheduled) com uma ação Alternar"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa é a anatomia primária e o clássico exercício \"Hello World\" da plataforma de automação. Decisões síncronas contra agendamentos e comparadores matemáticos.",
            "papoReto": "Primeiro detalhe: O email precisa sair \"QUANDO\" um vendedor criar a ficha. Ou seja, reação em cadeia na hora. Isso é um \"Fluxo Automatizado\". Não é um fluxo programado (robô batendo ponto toda meia noite). \nSegundo detalhe: Queremos ver se o valor é \"MAIOR QUE\" (superior a 5 mil). Qual bloco toma decisões com \"maior que\"? A \"Condição\" (Condition - IF). O \"Switch\" (Ação Alternar) não faz contas de maior/menor, ele só checa coisas idênticas de menu exato (tipo: o mês é igual a Janeiro?).",
            "respostaCerta": "fluxo de nuvem automatizado com uma ação Condição (Condition)",
            "puloDoGato": "A regra avaliativa impende que a estrutura englobe evento + limite avaliativo. Operadores lógicos de magnitude tais como \"Maior Que\" (>), \"Menor Que\", ou \"Contém\" são exclusividade sistêmica da ferramenta \"Condição\" (Condition Action). \"Alternar\" (Switch case) lida unicamente com equivalência exata singular (Equals) para derivar árvores.",
            "cascasDeBanana": [
                "Fluxos Programados (Scheduled): Descumprem o requisito inicial. Robôs agendados são diários ou semanais (recorrência) e cegos a instantes momentâneos e eventos da criação de registros reativos do sistema.",
                "Ação Alternar (Switch): Limitação aritmética de ser cega à matemática limitável: O \"Switch\" não pode testar matrizes de grandeza cruzando se a oportunidade excede e cruza a marca do \"maior do que 5000\"."
            ],
            "dicaOuro": "Gatilho instantâneo mediante Ação no banco (\"Quando for CRIADO\") + Precisar medir valores por \"MAIOR/MENOR que\" = Fluxo Automatizado + Ação de Condição (Condition/IF)."
        }
    },
    {
        "id": "q146_topic1",
        "text": "Um supermercado requer uma solução que reconheça os produtos nas prateleiras.\n\nA solução precisa ser capaz de tirar fotos dos produtos nas prateleiras usando um dispositivo móvel. Em seguida, a solução deve enviar essas imagens para identificar os produtos automaticamente e fazer a contagem.\n\nVocê precisa criar a solução. O que você deve usar?",
        "options": [
            "aplicativo de tela (Canvas app)",
            "aplicativo orientado por modelos (Model-driven app)",
            "Power Pages",
            "Dataverse for Teams"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão avalia a capacidade prática de interface nativa de cada tipo de aplicativo na plataforma ao interagir com o hardware do usuário e a IA.",
            "papoReto": "Se o usuário precisa andar pelo mercado, sacar o celular, abrir a câmera e tirar uma foto, você não consegue fazer isso nativamente nas interfaces engessadas do Model-driven ou num Portal clássico. Essa liberdade de \"montar botões na tela\" interagindo livremente com recursos nativos do aparelho (Câmera + GPS) e jogar direto na boca do motor de \"Detecção de Objetos\" (Object Detection) do AI Builder é o pão com manteiga absoluto dos Aplicativos de Tela.",
            "respostaCerta": "aplicativo de tela (Canvas app)",
            "puloDoGato": "A certificação vincula inexoravelmente o escopo \"Tirar fotos com dispositivo\" + \"Passar para modelos interativos de AI (Object Detection) em tempo real na tela\" aos Aplicativos de Tela (Canvas Apps). O Canvas possui controles nativos de câmera e é o único que acomoda esteticamente as caixas delimitadoras e o escaneamento ativo de identificadores de imagem na tela.",
            "cascasDeBanana": [
                "Model-driven apps ou Power Pages: Estruturas focadas predominantemente em registros do banco (formulários padronizados) em computadores, não provém a janela livre de controle da Câmera do device conectada em tempo real a processamentos abertos do framework do AI builder para ler as prateleiras dinamicamente."
            ],
            "dicaOuro": "Precisa de Câmera nativa no mobile + Reconhecimento e contagem de objetos (AI Builder) atuando = Aplicativo de Tela (Canvas App)."
        }
    },
    {
        "id": "q147_topic1",
        "text": "Você cria um Microsoft Power Pages para que os clientes visualizem seu próprio registro de cliente e pedidos anteriores.\n\nVocê habilita a autenticação para requerer que os clientes façam login. Você precisa permitir que clientes autenticados visualizem páginas restritas e dados específicos a eles.\n\nO que você deve usar para ancorar as permissões de acesso às páginas para esses usuários que fizeram login?",
        "options": [
            "funções da web (Web roles)",
            "permissões da tabela (Table permissions)",
            "funções de segurança do Dataverse (Security roles)",
            "provedor de identidade (Identity provider)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão clássica desmistifica a grande confusão sobre segurança no Power Pages (Antigo Portais) versus Segurança tradicional do Dataverse.",
            "papoReto": "No Dataverse normal (Back-office/Model-driven), você usa \"Função de Segurança\" (Security Role) pros funcionários da empresa. Mas no Portal (Web/Power Pages), o cliente que acessa de fora da empresa é tratado pelo sistema apenas como um \"Contato\" na base. Para dar poderes (fazer login, ver telas restritas e menus VIPs) para esses Contatos externos, você precisa obrigatoriamente associá-los a uma \"Função da Web\" (Web Role), como \"Usuário Autenticado\" ou \"Administrador do Portal\".",
            "respostaCerta": "funções da web (Web roles)",
            "puloDoGato": "A arquitetura do Power Pages exige que as permissões primordiais de visualização de páginas da Web inteiras (Telas/Menus) para usuários externos sejam concedidas via e ancoradas puramente pelas \"Web Roles\". Todo usuário que loga assume automaticamente a Web Role genérica \"Authenticated Users\".",
            "cascasDeBanana": [
                "Permissões da Tabela: O usuário errou ao escolhê-la porque as Table Permissions dizem QUAIS linhas do banco (pedidos dele no Dataverse) ele pode ver. Mas para ancorar essas permissões ao perfil e permitir que o cliente veja a PÁGINA (a tela em si do portal), o contêiner macro oficial e matriz é a \"Web Role\".",
                "Funções de segurança: Ocultas e inúteis para perfis de portal (Contato externo), englobam apenas contas Active Directory primárias do licenciamento interno."
            ],
            "dicaOuro": "Controlar quem acessa as telinhas na parte da WEB (Power Pages) ou amarrar grupo de usuários de fora = Funções da Web (Web roles)."
        }
    },
    {
        "id": "q148_topic1",
        "text": "Uma empresa implementa um aplicativo Microsoft Power Pages que mostra dados de tabelas diretas do Dataverse.\n\nAlguns dados sensíveis precisam ficar visíveis exclusivamente apenas para os usuários autenticados (com login).\nVocê precisa restringir o acesso e parametrizar a segurança na nuvem.\n\nQuais devem ser simultaneamente as duas ações matrizes arquitetônicas que você deve executar em conjunto?",
        "options": [
            "Atribua funções da web (Web roles) aos usuários E Configure um provedor de identidade (Identity provider).",
            "Atribua funções de segurança (Security roles) aos usuários E Configure a segurança hierárquica.",
            "Configure um provedor de identidade E Atribua permissões de tabela locais abertas globalmente.",
            "Atribua funções da web aos usuários E Atribua funções de segurança mestres do Dataverse."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia os dois pilares obrigatórios do modelo de segurança \"Zero Trust\" prático no ecossistema de Portais (Power Pages).",
            "papoReto": "Se você quer esconder a página apenas para quem tem senha, primeiro você tem que ligar o \"porteiro\" para conferir os crachás: isso é Configurar um \"Provedor de Identidade\" (Azure AD B2C, Google, login local). Depois que a pessoa entrou, como o sistema separa quem é Admin de quem é Cliente Básico? Com o segundo pilar: Atribuir as \"Funções da Web\" (Web Roles) para os respectivos contatos. Sem Provedor não há Login, e sem Web Role não há restrição separada de Páginas.",
            "respostaCerta": "Atribua funções da web aos usuários E Configure um provedor de identidade.",
            "puloDoGato": "O processo é dual: Sem autenticação (Identity Provider), clientes rodam anonimamente. Após autenticação, páginas e conteúdos restritos só filtram quem pode entrar baseando-se estritamente nas Funções da Web habilitadas (Web roles) daquele respectivo contato portal.",
            "cascasDeBanana": [
                "Funções de segurança e hierárquica do Dataverse: Como frisado anteriormente, Segurança Hierárquica e Security Roles (System Admin, Basic User) não se extrapolam nem atuam sobre o tráfego externo/público hospedado no ambiente do Power Pages."
            ],
            "dicaOuro": "Requisitos de Login + Permissões Específicas restritas a Logados no Power Pages = Identity Provider (Provedor Autenticação) + Web Roles (Função da Web)."
        }
    },
    {
        "id": "q149_topic1",
        "text": "Você cria um aplicativo de tela (Canvas App) empacotado puramente dentro do contêiner de uma solução.\n\nVocê precisa automatizar a emissão de contrato pesado, de forma que você precisa de um fluxo do Microsoft Power Automate que seja acionado proativamente mediante clique de dentro do aplicativo de tela pelo usuário.\n\nQual tipo de fluxo de contêiner você deve criar?",
        "options": [
            "fluxo de nuvem instantâneo dentro da mesma solução (instant cloud flow in the solution)",
            "fluxo de nuvem instantâneo fora da solução (default environment)",
            "fluxo de nuvem automatizado dentro da solução (automated cloud flow)",
            "fluxo de área de trabalho dentro da solução (desktop flow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão foca fundamentalmente na vinculação e governança de conectividade entre um Canvas App empacotado em ALM e dependências interativas de API.",
            "papoReto": "Tem um botão no Canvas que chama um Automate pra rodar. Primeira regra: só botões conseguem engatilhar fluxos; ou seja, estamos falando estritamente de Fluxo \"Instantâneo\". Segunda regra: se o seu aplicativo está \"preso\" e empacotado bonitinho dentro de uma Solução, visando a exportação futura para Produção, ele é \"cego\" aos fluxos soltos fora dessa caixa. O robô TEM obrigatoriamente que estar criado na aba \"Instantâneo\" embutido organicamente dentro da MESMA Solução do Canvas.",
            "respostaCerta": "fluxo de nuvem instantâneo dentro da mesma solução",
            "puloDoGato": "Aplicativos criados como \"Solution-aware\" não enxergam e não englobam referências a \"Cloud Flows\" criados avulsos diretamente na tela default (Fora da solução principal / Environment Default root). O design tem que ser obrigatoriamente na nuvem (Cloud Flow), Instantâneo (acionado por demanda do usuário via Botão/PowerApps V2 Trigger), e Solution-aware (criado DENTRO da interface da Solução).",
            "cascasDeBanana": [
                "Fluxos automatizados: Recusados, pois ignoram os botões da tela e disparam invisivelmente através do Dataverse ou SharePoint.",
                "Fluxo fora do invólucro da solução: Um canvas preso na solução seria incapaz de encontrar a assinatura deste robô nos cenários avançados recomendados de ALM e Exportação."
            ],
            "dicaOuro": "Precisa chamar fluxo no clique do botão em App embarcado em Solução = Fluxo Instantâneo + Explicitamente Criado \"Dentro\" da Solução."
        }
    },
    {
        "id": "q150_topic1",
        "text": "Você precisa compilar um aplicativo de tela que capture os nomes das pessoas em uma feira comercial movimentada.\n\nA conectividade estrutural com a internet no galpão não é confiável. O aplicativo precisa preservar e armazenar temporariamente na memória os nomes recebidos até que uma conexão confiável possa ser feita com a base da nuvem.\n\nQual objeto você deve usar para armazenar os dados no ar?",
        "options": [
            "coleção (collection / ClearCollect)",
            "variável global (global variable / Set)",
            "tabela de dados visual (data table)",
            "galeria (gallery)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é o alicerce básico do desenvolvimento em Power Apps focado no manuseio massivo (listas bidimensionais) de informações na memória RAM (Off-line caching).",
            "papoReto": "A internet no pavilhão da feira de exposições e vendas caiu. O seu vendedor não pode parar de anotar OS VÁRIOS nomes e telefones de clientes no tablet. Aonde o aplicativo vai guardar essas dúzias de linhas até o 4G voltar para mandar em massa (Patch) ao Dataverse? Numa \"Coleção\"! Pense nela como uma tabelinha do Excel temporária e fantasminha que vive voando puramente dentro da memória local do tablet do usuário enquanto o app não for completamente morto.",
            "respostaCerta": "coleção (collection / ClearCollect)",
            "puloDoGato": "A certificação é taxativa: Cenários \"Offline\" ou de agregação multilinhas não-transacionais utilizam invariavelmente \"Coleções\" (Funções como Collect ou ClearCollect, SaveData/LoadData). Elas suportam salvar massivamente uma tabela de dados estáticos multi-itens (Arrays/linhas diversas) alocada nativamente na memória local da sessão do App.",
            "cascasDeBanana": [
                "Variável (Set): A armazenagem tradicional de variável serve estritamente e cruamente para salvar \"apenas um registro único singular\" por vez (Ex: o nome 1 do cara ou um número 10), não abrigando listagens complexas dinâmicas como dezenas de visitantes da feira iterativos empilhados juntos.",
                "Galerias / Tabelas Visuais: São puramente controles estéticos de pintura da \"casca vísual\" da tela (UI), não alocam memórias reais manipuláveis fora de escopo no Back-end dinâmico temporário Offline."
            ],
            "dicaOuro": "Armazenar DIVERSAS linhas, matrizes ou atuar provisoriamente para cache num cenário de Internet Instável (OFF-LINE cache) = Coleção (Collection)."
        }
    },
    {
        "id": "q151_topic1",
        "text": "Você cria um aplicativo de tela do Microsoft Power Apps para uma empresa.\n\nA empresa requer que o aplicativo seja projetado para poder funcionar primariamente de forma offline.\n\nQual recurso interno de arquitetura você deve configurar para suportar essa retenção temporária de dados?",
        "options": [
            "coleção (collection)",
            "gateway de dados local (on-premises data gateway)",
            "fonte de dados offline (offline data source connection)",
            "delegação (delegation)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta ataca a espinha dorsal de como operam os aplicativos do Power Apps para reter memória RAM na ausência de rede (Off-line cache).",
            "papoReto": "O aplicativo cortou o cordão umbilical do 4G e ficou sem banco de dados. Qual o único recurso dentro do Power Apps que sabe segurar uma matriz de linhas flutuante de dados sem precisar gravar em disco num servidor externo? A \"Coleção\". Através da coleção e suas combinações exclusivas com a função SaveData, o aplicativo armazena massivamente linhas e matrizes localmente na memória RAM (Off-line cache) do seu aparelho.",
            "respostaCerta": "coleção (collection)",
            "puloDoGato": "No ecossistema nativo sem uso de funcionalidades recém-lançadas em Preview, a arquitetura \"Offline First\" nos Aplicativos de Tela repousa inteiramente sobre o pilar de criação agressiva de \"Coleções\" de dados em memória para atuação cruzada com \"SaveData\" ou retenções visuais locais.",
            "cascasDeBanana": [
                "Gateway: O Data Gateway serve estritamente para quebrar firewalls de servidores on-premisses locais (Windows Server corporativo, etc). Não confere habilidade offline ao celular/tablet do usuário.",
                "Delegação: É apenas o ato de \"pedir\" para o servidor realizar a conta e poupar memória local, ou seja, é exatamente o inverso de uma estratégia off-line (que obrigatoriamente depende da máquina atuando 100% isolada)."
            ],
            "dicaOuro": "Recurso base obrigatório e inegociável para viabilizar e acumular dados em modo \"Sustentação Offline\" local do celular = Coleção (Collection)."
        }
    },
    {
        "id": "q152_topic1",
        "text": "Você está desenvolvendo um aplicativo de tela chamado app1. O aplicativo tem duas telas: BrowseScreen1 e EditScreen1.\n\nA tela BrowseScreen1 inclui uma galeria vertical chamada gallery1. A tela EditScreen1 inclui um formulário para Editar chamado form1.\nVocê precisa garantir que se o usuário clicar em um registro na gallery1, o item correspondente daquele registro exato seja preenchido e injetado no form1.\n\nO que você deve configurar?",
        "options": [
            "Configure a propriedade Item do form1 como gallery1.Selected",
            "Configure a propriedade DefaultMode do form1 como Editar",
            "Configure a propriedade DataSource do form1 como gallery1",
            "Configure a propriedade OnSuccess do form1 como gallery1.Selected"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é a base matriz de transição de dados entre componentes UI (Galeria -> Formulário) de leitura e gravação no Power Apps.",
            "papoReto": "A Galeria é a lista completa. O Formulário é o detalhe que grava e lê os pedaços. Como o formulário sabe de quem ele tá falando para exibir as respostas velhas na tela? Ele precisa que você mire na propriedade \"Item\" dele (que significa \"Registro Alvo\"), e diga para ele escutar a Galeria chamando o comando \".Selected\" (\"Galeria1.Selecionado\"). A partir daí, eles se falam instantaneamente.",
            "respostaCerta": "Configure a propriedade Item do form1 como gallery1.Selected",
            "puloDoGato": "Em aplicativos de tela estruturados por Master/Detail (Mestre/Detalhes), o acoplamento de contexto (Binding) que passa o registro mestre de uma Tabela/Galeria para povoar instâncias estáticas em um formulário é exercido conectando estritamente a Propriedade \"Item\" do Form control à \"Gallery.Selected\".",
            "cascasDeBanana": [
                "DefaultMode (Editar/Novo/Exibição): Apesar de útil, define apenas se a caixa de texto deixará gravar nela. Não injeta os *dados contidos da linha*, nem a ponta para eles.",
                "DataSource: Aqui você põe o nome da sua Tabela real do SharePoint ou Dataverse, e não o nome da galeria da tela."
            ],
            "dicaOuro": "Amarrar / puxar os dados EXATOS clicados numa Galeria (lista) para jogar no Formulário (editores) = Form.Item -> Gallery.Selected."
        }
    },
    {
        "id": "q153_topic1",
        "text": "Você está compilando um aplicativo de tela para notificar acidentes sofridos por operários de construção no local da obra remota.\n\nOs funcionários notificam que sua conectividade com a internet está intermitente. Os funcionários precisam ter acesso a cache local e garantir que o app não esqueça os dados caso seja minimizado ou perdendo o sinal.\nVocê precisa fornecer aos funcionários um acesso offline forte aos dados mais recentes recebidos quando os dispositivos estavam online.\n\nEstrategicamente, o que você deve fazer?",
        "options": [
            "Armazene os dados localmente (cache no hardware em si) usando SaveData em conjunto a uma coleção.",
            "Armazene os dados localmente acoplando exportação gerada em um arquivo estático do Excel.",
            "Use a fórmula LoadData diretamente mirando a nuvem sem o uso das passagens de coleção isolada.",
            "Apenas referencie uma Tabela no DataSource; o Power Apps cria e retém o cache offline automaticamente sem coleções."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um desdobramento mais avançado e tático de comandos da questão q151. Aborda o framework arquitetônico de SaveData/LoadData.",
            "papoReto": "Como ensinado antes, \"Coleção\" guarda coisas temporariamente, mas ela *morre* se o cara deslogar ou fechar o app! O pessoal da obra corre esse risco. Pra contornar isso (o \"Offline Supremo\"), você pega a Coleção fantasma e invoca uma função monstruosa chamada \"SaveData\". Ela manda o sistema operacional Android ou iOS abrir um buraquinho no armazenamento físico do celular para colocar os dados dessa coleção. Assim, quando eles voltarem no dia seguinte (\"LoadData\"), as informações ressuscitam perfeitamente para eles usarem.",
            "respostaCerta": "Armazene os dados localmente (cache no hardware em si) usando SaveData em conjunto a uma coleção.",
            "puloDoGato": "Para ir além do cache em RAM e reter as Coleções contra quedas abruptas ou limpezas de tela em modo Offline, o método único oficial no construtor requer acionar a função Power Fx avançada \"SaveData\", que força os bytes da Collection serem dumpados na memória do Storage persistente do host Application do dispositivo local.",
            "cascasDeBanana": [
                "Não há caching Mágico/Espinhal automático: Em Canvas Apps padrão, conectar um datasource online \"cru\" para modo contínuo de conectividade intermitente quebra brutalmente. Você precisará codificar ativamente `SaveData` -> Coleção Interna -> `LoadData`.",
                "Excel local: Inatingível nativamente por arquitetura sem wrappers engessadíssimos alheios à dinâmica relacional pretendida de sincronia massiva."
            ],
            "dicaOuro": "Dados de cache local no PRÓPRIO CELULAR perdurando na falta de rede/reinciar o app = Coleção atrelada na função \"SaveData\"."
        }
    },
    {
        "id": "q154_topic1",
        "text": "Você cria um aplicativo de tela iterativo para coletar informações em formato de rascunhos para técnicos de emergência médica (ambulâncias).\n\nVocê precisa fazer um cálculo cru e imediato na tela de \"Pressão Arterial\" para mostrar um resultado de pontuação temporária (um score provisório) para o usuário.\nVocê precisa usar uma variável computada APENAS para a tela isolada de pressão arterial, descartando-a depois em favor da memória do celular.\n\nDado o requerimento de contenção regional, qual função mestre deve ser usada para definir essa variável?",
        "options": [
            "AtualizarContexto (UpdateContext)",
            "Definir (Set)",
            "Coletar (Collect)",
            "LimparColetar (ClearCollect)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta explora diretamente o conceito de encapsulamento e escopo (Globar vs Local) nas variáveis nativas em um Canvas App.",
            "papoReto": "Você não pode usar a velha \"Variável Set/Definir\" pra tudo no app, porque ela fica gigante e rodando o app inteiro. Para algo que só importa ali – exemplo: eu estou na Tela 1 fazendo o cálculo só da pontuação do enfermeiro rapidinho ali na caixa – crie uma Variável Local. A Variável Local morre quando você sai da tela! Para declarar Variáveis Locais, o nome da função que a Microsoft escolheu bem chato é \"UpdateContext\" (AtualizarContexto). Anote!",
            "respostaCerta": "AtualizarContexto (UpdateContext)",
            "puloDoGato": "Ao solicitar contenção explícita de Variável associada a \"APENAS uma tela (single-screen scope / Local Variable)\", o Power Apps restringe o universo unicamente para o uso da arquitetura \"UpdateContext\". Ela define as variáveis limitando rigorosamente seus limites estritos de compilação somente àquela janela pai.",
            "cascasDeBanana": [
                "Variável Set (Global): A armadilha mestre da prova. Usar Set vazaria ou perpetuaria os traços (consumo de memória) da variável nas outras dezenas de telas não afetadas pelas anotações de pressão.",
                "Variáveis Coletar / ClearCollect: Cuidam intrinsecamente de arrays tabulares massivos para cache offline, e não cálculos matemáticos de variável unitárias focadas e fugazes no contexto da renderização local."
            ],
            "dicaOuro": "Criar / Editar variável LOCAL no aplicativo de tela (que afeta e vive APENAS PELAQUELA MESMA TELA) = UpdateContext (AtualizarContexto)."
        }
    },
    {
        "id": "q155_topic1",
        "text": "Você precisa usar o Microsoft Power Fx para criar e manipular intensivamente fórmulas em controles lógicos num aplicativo de tela corporativo e atrelado a componentes legados do Dataverse.\n\nConceitualmente, debaixo do capô, em qual tipo fundamental de categoria de linguagem low-code repousa o cerne técnico do processamento deste Microsoft Power Fx?",
        "options": [
            "declarativa (declarative)",
            "compilada de máquina (compiled)",
            "orientada a objetos (object-oriented)",
            "interpretada estrita (interpreted procedural)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "O Power Fx não nasceu no vácuo, ele é fortemente derivado de um paradigma clássico. A Microsoft exige que o Functional Consultant compreenda seu DNA reativo.",
            "papoReto": "O Power Fx não compila num \"exe\" que fala com a memória da máquina. Ele é na verdade igualzinho a quem? Sim, ao Excel. Se você botar \"=A1+B1\", ele fica lá só \"declarado\" e o sistema recalcula na hora sempre que alguém mexer no \"B1\". Você apenas \"declara a sua vontade\" ou regra final e ele cuida do recálculo infinitamente lá do jeito dele. Isso define expressamente o formato de linguagens \"Declarativas\".",
            "respostaCerta": "declarativa (declarative)",
            "puloDoGato": "Como espelho do Excel-like, o Power Fx é regido como a principal linguagem \"Declarativa\" para automação da plataforma Power. Esse é o pilar que garante a Reatividade automática contínua aos vínculos de tela (um textfield respondendo a uma alteração em outra collection, sem código complexo avisando um listener), uma vez que vocé declara a fórmula alvo como comportamento desejado estático e o host executa sua manutenção dinamicamente.",
            "cascasDeBanana": [
                "Compilada / Orientada a objetos / Linguagem de marcação: Linguagens compiladas clássicas (C#) roteiam Assembly para o nível de base CPU em pipelines; o Power Fx jamais faz isso — o host engine do container o reescreve e otimiza sua execução delegada de alto nível."
            ],
            "dicaOuro": "Paradigma arquitetônico base do Power Fx (filiação às fórmulas interativas Excel-like) = Linguagem Declarativa (Declarative)."
        }
    },
    {
        "id": "q156_topic1",
        "text": "Uma empresa usa o Microsoft Power BI e um aplicativo orientado por modelo (Model-driven app).\n\nUm usuário precisa adicionar um bloco (Tile) de um painel de controle do Power BI ao seu aplicativo orientado por modelo.\n\nA qual painel de controle você deve adicionar o bloco?",
        "options": [
            "Painel de controle de usuários do Microsoft Dynamics 365 (User Dashboard)",
            "Painel de controle do sistema do Dynamics 365 (System Dashboard)",
            "Painel do Microsoft Power BI de grupo (Power BI Group Dashboard)",
            "Área de trabalho de formulário orientado a modelo (Model Form Workspace)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão define os limites de embutimento de ativos analíticos (Power BI) no Dataverse para usuários de aplicativos Model-driven.",
            "papoReto": "Um aplicativo orientado a modelo tem dois tipos de Dashboards (Painéis): Os do \"Sistema\" (feitos pelo desenvolvedor da empresa, engessados) e os do \"Usuário\" (aquele que eu mesmo crio pra mim na hora e compartilho se quiser). A Microsoft restringiu a injeção de Blocos (Tiles) avulsos do Power BI estritamente aos Painéis de Usuário. Você não consegue abrir um Painel de Sistema no estúdio mestre e socar um bloco visual de Power BI lá nativamente.",
            "respostaCerta": "Painel de controle de usuários do Microsoft Dynamics 365 (User Dashboard)",
            "puloDoGato": "Visualizações como Blocos (Tiles) puristas do Power BI em aplicativos baseados em modelo são unicamente suportados por renderização nos \"Painéis de Usuário\" (User Dashboards) – que são os painéis pessoais criados dentro da própria interface dinâmica front-end do Model-driven.",
            "cascasDeBanana": [
                "Painel de Controle de Sistema: Os System Dashboards não suportam injeção de conexões PBI Tile nativas geradas durante a experiência de usuário comum."
            ],
            "dicaOuro": "Adicionar BLOC0S soltos do Power BI em Model-Driven Apps = Restrito aos Painéis de Usuário (User Dashboard)."
        }
    },
    {
        "id": "q157_topic1",
        "text": "Uma empresa usa o Microsoft Dataverse.\n\nOs usuários geralmente precisam compartilhar registros unitários de uma mesma conta com diversos membros da equipe simultaneamente prestando atendimento.\nVocê cria um \"Modelo de Equipe de Acesso\" (Access Team Template) para a tabela de conta visando começar a configurar um processo simplificado e enxuto de compartilhamento de registros.\n\nNa camada de design de formulários, o que você deve fazer agora para expor esse recurso?",
        "options": [
            "Adicione a sub-grade Usuários (Users subgrid) ao formulário da conta.",
            "Adicione a sub-grade expressa do \"Modelo de Equipe de Acesso\" ao formulário.",
            "Crie manualmente uma equipe de acesso no centro de administração para cada formulário.",
            "Selecione o Modelo de Equipe na guia Segurança no registro da conta para dispará-lo."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta testa a implantação na prática de um dos conceitos mais granulares de segurança no Dataverse: as \"Equipes de Acesso\".",
            "papoReto": "Compartilhar ficha por ficha num Call Center é pesado pro banco. A Microsoft criou o \"Access Team Template\" resolvendo isso: Você cadastra um template escondido, e lá na tela do cliente (Formulário), você coloca uma simples tabela secundária (Sub-grade) que aponta e lista os \"Usuários\". É mágica: todo operador que os vendedores adicionarem o nome ali ganha acesso automaticamente àquela ficha em tempo real com base no template! O pulo do gato? A subgrade NÃO SE CHAMA subgrade de modelo, ela é só uma \"subgrade de Usuários\" normal que você parametriza apontando para o seu modelo.",
            "respostaCerta": "Adicione a sub-grade Usuários (Users subgrid) ao formulário da conta.",
            "puloDoGato": "Após criar o Access Team Template (Modelo de Equipe de Acesso) e habilitar a Tabela, o passo obrigatório é modificar o Formulário Principal no Maker Portal inserindo uma Subgrade (Subgrid) convencional da entidade relacionada \"Users\", apenas setando as propriedades do controle dela para obedecerem e puxarem os membros atrelados ao Access Team Profile gravado no back-end.",
            "cascasDeBanana": [
                "Adicionar Sub-grade de \"Modelo de Equipe\" (Access Team Model subgrid): Os usuários costumam cair nessa casca. Não existe um controle visual com esse nome específico; o controle é apenas o elemento clássico da Tabela de \"Usuários\".",
                "Criar Equipes Manualmente: As `User-created Teams` tradicionais de donos funcionam muito diferente e não aproveitam o processo leve auto-destrutivo por registro inerente aos Templates."
            ],
            "dicaOuro": "Implementar e viabilizar na tela o compartilhamento via \"Modelo de Equipes de Acesso\" (Access Team Template) = Adicione a sub-grade da tabela \"Usuários\" no Formulário e atrele."
        }
    },
    {
        "id": "q158_topic1",
        "text": "Você precisa usar as equipes nativas do Microsoft Entra ID (Azure AD) para lidar e gerir o acesso e licenciamento de segurança dos usuários a um aplicativo do Microsoft Dataverse.\n\nVocê precisa configurar as equipes de grupos do Entra ID no Dataverse e aplicar funções de segurança a elas.\n\nOperacionalmente, o que você deve focar em usar para mapear e vincular estritamente o registro grupo mestre de equipe na nuvem no Dataverse?",
        "options": [
            "ID do Grupo do Microsoft Entra ID (Object/Group ID)",
            "Nome Nominal do Grupo do Microsoft Entra ID",
            "Sincronização por Unidade de Negócios Mestre",
            "Função de Segurança Base de Inserção"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Este item reforça como o Power Platform realiza o binding (ponte) de segurança matriz de federação com a nuvem mestra da Microsoft.",
            "papoReto": "A regra de arquitetura pra conectar Dataverse e Azure AD é igual a regra de banco de dados: nunca amarre pontes usando o \"Nome\" (text) das coisas, porque o administrador pode querer alterar o nome \"Grupo de Vendas Sul\" para \"Setor Sul Vendas\" e o vínculo todo iria quebrar. O sistema da Microsoft liga o grupo gigante de usuários do Active Directory à Equipe Dataverse usando o Identificador imutável, o carimbo de chave primária cravada, a \"ID do Grupo\" (Object ID) do Entra ID.",
            "respostaCerta": "ID do Grupo do Microsoft Entra ID (Object/Group ID)",
            "puloDoGato": "Ao aprovisionar uma `Group Team` (Aparelhamento de Segurança de Grupos entre Dataverse/Azure AD), o campo crucial que estabelece o cordão umbilical entre o Azure/EntraID e o Dataverse é o fornecimento do `Object ID do Microsoft Entra ID` (Group ID) em valores alfanuméricos hexadecimais puros.",
            "cascasDeBanana": [
                "Nome do Grupo: Insuficiente e banido como chave de roteamento de acesso, pois nomes são instáveis (mutáveis).",
                "Unidade de Negócios (Business Unit): Embora obrigatória como requisito sistêmico para pertencer a um locus de segurança temporal, não é o valor que mapeia e descobre a raiz do grupo AAD (ela é apenas o balde que vai recebê-los)."
            ],
            "dicaOuro": "Vincular segurança do Grupo do Entra ID / Microsoft 365 como Equipe massiva no Dataverse = Exige sempre a \"ID do Grupo\" (Object ID / Group ID)."
        }
    },
    {
        "id": "q159_topic1",
        "text": "Você integra um novo usuário interno administrativo e de desenvolvimento júnior em um ambiente do Microsoft Dataverse.\n\nO usuário precisa de ferramentas para criar aplicativos, entidades e fluxos, mas não possui (nem deve possuir) as permissões críticas de segurança necessárias para excluí-los perigosamente do ecossistema.\n\nSendo assim, você precisa atribuir uma função de segurança clássica ao usuário usando primordialmente o princípio de segurança militar de Confiança e Privilégio Mínimo.\nQual função você deve atribuir ao usuário?",
        "options": [
            "Personalizador do Sistema (System Customizer)",
            "Administrador do Sistema (System Administrator)",
            "Usuário Básico (Basic User)",
            "Colaborador do Office (Office Collaborator / Creator)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Este cenário avalia o nível granular de empoderamento e arquitetura da fábrica do Dataverse, separando o dono restrito do \"peão de obra\".",
            "papoReto": "Sempre há a armadilha do acesso: O garoto precisa fazer Telas (Apps), Tabelas e Dashboards. Se você der a função de \"Administrador de Sistema\" (System Admin) pra ele - que aliás tem todos os poderes, você viola o Princípio do Privilégio Mínimo: ele fica com poderes divinos de deletar instâncias e bancos de dados! A função exata e moldada pro júnior construir sob medida o App apenas com o que o ambiente atual lhe oferece de matéria prima se chama \"Personalizador do Sistema\" (System Customizer).",
            "respostaCerta": "Personalizador do Sistema (System Customizer)",
            "puloDoGato": "A função `System Customizer` (Personalizador do Sistema) preenche exatamente a lacuna de requisitos para Criação (Maker): O usuário adquire 100% de primazia em ler/escrever artefatos de soluções, tabelas, apps e views estritamente criados ou possuídos por ELE. O Privilégio Mínimo protege registros inseridos por terceiros que ele não criou.",
            "cascasDeBanana": [
                "Administrador do Sistema: Teria poderes exacerbados (Privilégio Máximo).",
                "Colaborador do Office e Usuário Básico: Funções para usuários e clientes finais sem perfil de design de aplicativo de Maker ou System Customization. Ele precisaria das ferramentas de criação ativas (Personalizador) ou, equivalentemente no Maker, de \"Environment Maker\"."
            ],
            "dicaOuro": "Empregar o Princípio do Mínimo Privilégio para um usuário poder CRIAR telas/tabelas/apps livremente = Função \"Personalizador de Sistema\" (System Customizer)."
        }
    },
    {
        "id": "q160_topic1",
        "text": "Você cria um aplicativo orientado por modelo (Model-driven) encorpado, vital para uma organização de saúde estruturada.\n\nA organização tem dois tipos essenciais (e hierárquicos) de perfis corporativos: \"atendimento médico de emergência\" e \"equipe de apoio administrativo ao paciente\". \nCada perfil de usuário requer urgentemente que eles usem e percebam layouts totalmente diferentes de colunas no Formulário mesmo quando abrem no mesmo aplicativo, evitando poluição.\n\nComo arquiteto da solução, você cria um formulário base por tipo de usuário. O que você deve fazer para engessar que os usuários vejam apenas o seu layout de formulário?",
        "options": [
            "Habilite o formulário e atribua às Funções de Segurança (Security roles) dos respectivos usuários.",
            "Cofigure as propriedades de Compartilhar registros a depender do nível de acesso.",
            "Altere a matriz da Ordem dos Formulários (Form Order) para que a ordem exiba primeiro.",
            "Compartilhe cada formulário avulso com ID de Grupos de Segurança do Entra ID."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta recai sobre a base central de Controle de Experiência e Segurança em aplicativos baseados em Modelos do Dataverse.",
            "papoReto": "Um erro muito comum de quem vem do Excel para o Dataverse é achar que \"Formulário\" é a mesma coisa que \"Dados ou Listas\". Formulário é só uma lente da câmera. Eu posso ter cinco lentes diferentes apontando pro mesmo cliente. Se eu quero que o perfil do médico veja e pegue só a Lente (Formulário) \"A\", eu vou lá nas configurações do Formulário no Maker Portal e seleciono: \"Habilitar apenas para a Função de Segurança x (Security Role: Medical)\". Pronto. Os usuários de administração nunca sequer enxergam a Lente (Formulário) \"A\" na caixa de seleção.",
            "respostaCerta": "Habilite o formulário e atribua às Funções de Segurança (Security roles) dos respectivos usuários.",
            "puloDoGato": "No Application Lifecycle Management de Model-driven apps, Múltiplos formulários (Formulas form) são roteados e restringidos puramente atrelando permissões de uso de componente baseadas nas `Security Roles` (Funções de Segurança) do Microsoft Dataverse.",
            "cascasDeBanana": [
                "Compartilhar os Registros de Paciente: Trata de quem enxerga a linha preenchida viva no banco, MAS se ele abrisse ele ainda veria o design do formulário errado.",
                "Ordem do formulário: A ordem de precedência avisa quem abre primeiro por default, mas não restringe na UI seletora o usuário forçar alternância para um formulário proibido que estivesse disponível na lista.",
                "Grupos de Segurança do Entra ID: Você não pluga Formulários diretos a M365 Groups sem mapear uma Role no meio pro Dataverse entender."
            ],
            "dicaOuro": "Atrelar design, amarrar e esconder vistas de Layouts de Formulários diferentes baseado na função/tipo do usuário que faz login = Controle e atribua usando as \"Funções de Segurança\" (Security Roles)."
        }
    },
    {
        "id": "q161_topic1",
        "text": "Sua organização habilitou a ferramenta de pesquisa global do Microsoft Dataverse em seu ambiente do Power Platform para aprimorar as buscas. No entanto, os usuários relatam ao suporte que não conseguem encontrar determinados registros ou textos que deveriam estar acessíveis pela barra de pesquisa.\n\nVocê precisa garantir que todas as tabelas e campos de texto relevantes sejam incluídos e varridos com sucesso no índice da Pesquisa do Dataverse.\n\nExistem duas ações fundamentais em conjunto que você precisa configurar para resolver isso. Quais são as duas ações conjuntas?",
        "options": [
            "1. Atualize e adicione as colunas na \"Vista de Busca Rápida\" (Quick Find View) da tabela E 2. Verifique se a Tabela está incluída nos componentes do próprio aplicativo Model-driven ativo.",
            "Habilite a Auditoria estrita em cada campo de texto E Habilite as Opções Avançadas de Pesquisa.",
            "Aumente o limite máximo de campos indexáveis no Centro de Administração para 2.000 (o padrão é 1.000) E reinicie o índice.",
            "Ative a pesquisa de relevância nas opções do Dataverse E delete a Vista de Busca Rápida."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a habilidade de troubleshooting sobre um dos acidentes mais comuns ao construir busca em Model-driven Apps: o motor não varrer sua coluna nova.",
            "papoReto": "A pesquisa Global do Dataverse (Dataverse Search) não é um polvo mágico que lê o banco dados inteiro sozinho. Ela precisa de mapa! O motor só varre os campos que você jogou expressamente dentro do Modo de \"Busca/Localização Rápida\" (Quick Find View) de cada tabela. Além disso, se a sua Tabela X nem sequer faz parte do esqueleto do seu Aplicativo Baseado em Modelo (Model-Driven), o aplicativo simplesmente bloqueia a busca nela. Logo, o \"match\" perfeito é: cheque a view de busca rápida E garanta que a tabela existe no seu App!",
            "respostaCerta": "Atualize a Vista de Busca Rápida da tabela + Verifique se a Tabela está incluída nos componentes do aplicativo.",
            "puloDoGato": "A Pesquisa do Dataverse exige que a indexação obedeça estritamente ao componente \"Quick Find View (Modo de exibição de busca rápida)\" para saber \"o que olhar\". Contudo, as buscas executadas de dentro de um Model-Driven App sofrem um `scoping`: elas só varrem as tabelas que foram formalmente adicionadas ao \"Sitemap / Componentes\" do próprio aplicativo em execução.",
            "cascasDeBanana": [
                "Habilitar Auditoria nos campos: Auditoria guarda log de quem apagou ou editou dados (Security/Governance); não engatilha tabelas no motor de busca.",
                "Aumentar o limite para mais de 1000: O limite soft e hard de campos indexados ativamente no Dataverse Search de um ambiente inteiro está fixado em exatos 1.000 e não pode ser estourado nem via suporte."
            ],
            "dicaOuro": "Resolver o erro \"não acho meu campo na pesquisa Global\" = Coloque as colunas na \"Vista de Busca Rápida\" (Quick Find View) + Certifique-se que o componente existe no App."
        }
    },
    {
        "id": "q162_topic1",
        "text": "Você está atuando como engenheiro migrando dados de várias fontes e sistemas distintos para a estrutura unificada de uma solução do Microsoft Dataverse.\n\nUm dos requisitos fundamentais é garantir imperativamente que registros duplicados que conflitam informações sejam neutralizados e removidos no meio do caminho durante a importação em massa para o Dataverse, aplicando regras lógicas.\n\nQual ferramenta da plataforma é desenhada nativamente como ETL para lidar pesadamente com isso?",
        "options": [
            "Fluxos de Dados (Dataflows)",
            "Fluxos da Nuvem (Power Automate Cloud Flows)",
            "Assistente de Importação de Dados Dinâmico (Data Import Wizard)",
            "Planilha do Excel conectada ativamente na web"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Quando falamos em migração em massa (ETL) e tratamento robusto de matriz de tabelas no Power Platform, existe apenas um Rei do pedaço.",
            "papoReto": "Você quer pegar dados velhos de vários lugares, lavar, tirar as impurezas (duplicatas) e carregar limpinho no Dataverse. Isso se chama ETL (Extract, Transform and Load). Quem é o trator do ETL no Power Platform? O \"Dataflow\" (Fluxo de Dados). Ele conta com a maravilhosa casca do Power Query, onde você tira as duplicatas apertando só um botão fácil, algo que no Power Automate comum envolveria uma dor de cabeça imensa pra fazer.",
            "respostaCerta": "Fluxos de Dados (Dataflows)",
            "puloDoGato": "A higienização profunda (Data Cleansing) como \"Remover Duplicatas\" e consolidação massiva simultânea envolvendo o Dataverse delega obrigatoriamente para a plataforma analítica `Dataflows` e sua engine do Power Query. O Power Automate foca em \"Trigger-Action\" unitários ou pequenos loops, não sendo de fato uma ferramenta madura para ETL e Profiling de arrays pesados.",
            "cascasDeBanana": [
                "Fluxos da Nuvem: Uma ferramenta pesada de Automação de Processos de Negócios (BPA), ele consegue conectar a apenas um sistema de origem por vez comodamente. Ele vai estourar limite varrendo e re-comparando 100.000 linhas pra buscar duplicações.",
                "Assistente de Importação: O assistente velhão do Dynamics e Dataverse funciona legal manualmente pra arquivos soltos, mas não é um conector ETL orquestrado e programável multi-fontes."
            ],
            "dicaOuro": "Importação massiva, transformação pesada de dados (ETL), remoção nativa de duplicidades e formatação via nuvem = \"Fluxos de Dados\" (Dataflows / Power Query)."
        }
    },
    {
        "id": "q163_topic1",
        "text": "Uma empresa usa e confia ativamente na configuração nativa de Pesquisa do Microsoft Dataverse.\n\nVocê recebe um ticket de suporte e precisa arquitetar e configurar a pesquisa no Backend para garantir que, de qualquer lugar, a coluna \"Número da Conta\" sempre mostre os registros quando os usuários digitarem esse campo na barra de pesquisa global superior.\n\nOnde exatamente no Maker Portal você deve mexer para vincular essa coluna de texto na malha de pesquisa da tabela Conta?",
        "options": [
            "Modo de Exibição de Localização Rápida (Quick Find View)",
            "Modo de Exibição de Pesquisa Avançada (Advanced Find View)",
            "Modo de Exibição Pública Padrão (Default Public View)",
            "Índice de Pesquisa Geral do Dataverse (Dataverse Search Index)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta caminha junto com a lógica explicada na q161. A base de onde nasce um campo indexável.",
            "papoReto": "Quer que a lupa lá de cima consiga \"ler\" e buscar dados de um campo novo? Vá na Tabela, entre em \"Visualizações\" (Views), abra a \"Visualização de Busca Rápida\" e arraste a sua coluna de nome ou número pra lá, e ative-a como \"Find Column\" (Coluna que se localiza). Na mesma hora o motor se liga e passa a rastreá-la indexando-a.",
            "respostaCerta": "Modo de Exibição de Localização Rápida (Quick Find View)",
            "puloDoGato": "Historicamente e mesmo na presença da nova Dataverse Search global, o construtor lógico base que demarca quais Colunas Físicas uma Tabela autoriza expor em buscas globais de texto aberto (Wildcard/Match) estão estritamente contidos dento do `Quick Find View`. Adicionar campos na regra \"Add Find Columns\" dessa View atualiza e destrava a busca no Dataverse no backend.",
            "cascasDeBanana": [
                "Modo de exibição Avançado: Trata-se da experiência legada onde usuários geram query builder visual. Não dita indexação.",
                "Exibição Pública: Dita apenas o layout e colunas resultantes (\"o que você enxerga\"), mas não \"em que campo o motor entra para procurar um texto\"",
                "O Índice do Dataverse (nas configurações): O Admin aciona QUAIS TABELAS estão nele, mas você não tem lá botão detalhado para marcar \"a coluna B da tabela Y\". Isso ainda se faz dentro do view específico."
            ],
            "dicaOuro": "Quero que minha coluna Nova (ex: CPF) seja \"Encontrável\" quando o usuário a digitar na pesquisa principal = Habilite a coluna no \"Modo de Exibição de Localização Rápida\" (Quick Find View)."
        }
    },
    {
        "id": "q164_topic1",
        "text": "Uma empresa usa um formulário avulso em um site simples (não integrado ao Power Pages) coletando Nome e Sobrenome dos clientes em potencial e cravando num arquivo .csv bruto diariamente e o salvando dentro da nuvem no OneDrive.\n\nOs novos prospectos adicionados a esse CSV de ontem devem ser carregados para o sistema Microsoft Dataverse diariamente.\n\nHá um detalhe perigoso: o CSV só vem com 2 colunas cruas (\"Nome\" e \"Sobrenome\"). Não há datas nem chaves unificadas. Se você realizar uma rotina automática diária com um Fluxo de Dados padrão, os mesmos clientes de dias anteriores entrarão dezenas de vezes como duplicados no Dataverse, pois o CSV acumula.\n\nNesta situação amadora de falta de chaves sem update de terceiros, como você salva essa empresa?",
        "options": [
            "Edite o arquivo todos os dias isoladamente para remover as pessoas que você sabe que já subiram para o Dataverse, e depois rode manualmente a inserção sem o risco.",
            "Apenas ative a aba \"Atualização Incremental\" e deixe o Dataflow se virar com as novidades.",
            "Configure um Fluxo de Dados Automático Diário e o motor apaga duplicações de nomes por natureza.",
            "Adicione uma chave de \"Chave Alternativa Mestre\" na coluna de Nome, isso fará a API recusar instantaneamente qualquer repetido."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um estudo de caso em que a prova quer ver se você entende as limitações físicas de matemática (Chaves vs Atualizações Incrementais).",
            "papoReto": "Atenção pra Pegadinha Brutal de cenários reais! A Microsoft sempre fala o quão os \"Dataflows\" são maravilhosos (e ensinamos na q162). A galera vai clicar achando que \"Atualização Incremental via Dataflow\" vai resolver a vida. Errado! Uma \"Atualização Incremental\" por motor (ETL) exige inegociavelmente OBRIGATORIAMENTE que o seu banco original (o CSV) te ofereça uma coluna informando \"Modificado na Data X\". Se o arquivo Excel ou CSV não tem data ou linha temporal rastreável, o sistema não sabe o que é novo e puxaria os repetidos pra empilhar. O Dataverse ficaria cego. Solução ruim e sofrida mas correta? Fazer o trabalho analógico no Excel primeiro limpando aquilo.",
            "respostaCerta": "Edite o arquivo todos os dias para remover clientes em potencial que já estão no Dataverse e, a seguir, os atualize manualmente.",
            "puloDoGato": "O processo massivo de \"Incremental Refresh / Atualização Incremental\" no Power Query/Dataflow é dependente matemático de que a fonte de origem possua um atributo carimbador baseado em série temporal contínua (`DateTime`). Quando o cenário avisa que o arquivo \".csv\" retém unicamente `String Name` / `String Surname` — impossibilitando o tracking de tempo de inserção -, arquitetonicamente a atualização inteligente cai, cedendo lugar à intervenção e corte manual offline.",
            "cascasDeBanana": [
                "Atualização Incremental: A pegadinha suprema, não existem identificadores confiáveis para engatilhá-la!",
                "Chave Alternativa no Nome: Pelo amor de Deus não! Nomes se repetem. Se você criar uma Alternarive Key engessando apenas o nome, num país inteiro você só conseguiria cadastrar UM \"João Silva\" e o segundo cliente real perderia acesso por erro de duplicate key index."
            ],
            "dicaOuro": "Sem coluna de DATAS em formato TimeStamp e sem IDs definidos em um CSV cego? É matematicamente indisponível fazer \"Atualização Incremental\"! O tratamento terá que ser extração manual cortando duplicatas base ou gerar a coluna."
        }
    },
    {
        "id": "q165_topic1",
        "text": "Você precisa agendar a importação massiva automática e inteligente de dados formatados para tabelões o Microsoft Dataverse.\n\nSua necessidade arquitetônica é alta: você deve definir um Schedule (agendamento com dias marcados) estrito na semana em que essas tabelas imensas serão inseridas e requer garantir no projeto uma feature built-in (de fábrica) para que sua equipe receba alertas e notificações automáticas no seu e-mail caso algo dê errado e as linhas falhem na gravação.\n\nQual ferramenta da família atende perfeitamente todos esses itens juntos da forma mais recomendada?",
        "options": [
            "Fluxo de Dados (Dataflow)",
            "Fluxo de Nuvem Programado (Scheduled Cloud Flow)",
            "Fluxo de Nuvem Automatizado em disparo (Automated Cloud Flow)",
            "Assistente OBO de Importação de Dados do Dynamics 365"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia o escopo profundo e as vantagens out-of-the-box (de fábrica) envolvidas no licenciamento e governança de Dataflows vs Automate.",
            "papoReto": "Um Power Automate (Fluxo Programado) consegue fazer o agendamento de subir coisas? Sim. Ele avisa por e-mail se der erro? Sim, MAS você teria que botar peças e \"gambiarras\" (\"Catch-blocks\") para fazer o robô caçar a mensagem de erro da caixa e te mandar um e-mail do zero. Já O Dataflow! Puxa, é coisa fina! Ele já é um ETL corporativo imenso, agendável perfeitamente, que não apenas carrega os dados pro Dataverse como POSSUI UMA CAXINHA NAS CONFIGURAÇÕES (\"Enviar avisa em caso de Falha\"). Clicou nela, o sistema fará todo o relato analítico no seu e-mail automático. Dataflow leva o troféu.",
            "respostaCerta": "Fluxo de Dados (Dataflow)",
            "puloDoGato": "A plataforma `Dataflows` carrega funcionalidades NATIVAS (Out-of-the-box - Built-in) orquestradas no Workspace Management para disparo de e-mails em cima de Falha de Refresh e Success Notification (Refresh settings). Desenvolver isso com o engine secundário de repetições (Cloud Flow) impõe Overhead de desenvolvimento (construir tratamentos de erro Condition / Scope Action em blocos de Catch) no Power Automate para atingir o mesmíssimo resultado.",
            "cascasDeBanana": [
                "Fluxos de Nuvem (Agendados): Precisariam construir programaticamente na unha o seu tratador de resiliência e envio dos detalhes de falha de parsing.",
                "Fluxos Automatizados: Só rodam mediante gatilho vivo (ex: Se criar algo -> Faça assado) e não obedecem agendamentos diários ou de cronograma."
            ],
            "dicaOuro": "Agendamento corporativo em massa com e-mail NATIVO automático disparado avisando dos logs de \"falha\" de carregamento = Solução \"Dataflow\" (Fluxos de Dados)!"
        }
    },
    {
        "id": "q166_topic1",
        "text": "Uma empresa que ministra cursos de treinamento usa o Microsoft Dataverse.\n\nA empresa quer ter o poder de registrar \"Matrículas\" de alunos e se houve \"Presença\" neles. A empresa configurou duas tabelas primárias: Tabela de \"Contatos\" e Tabela de \"Cursos\".\nHoje um aluno pode fazer vários cursos, e um curso tem vários alunos.\n\nVocê precisa criar uma relação correta entre eles para suportar a marcação da presença.\nQual tipo de relação você deve criar?",
        "options": [
            "Duas relações 1:N interligando em uma Tabela extra (Interseção), uma com Contato como origem e outra com Curso como origem.",
            "Uma única relação N:N (Muitos-para-Muitos) direta interligando apenas Contatos e Cursos.",
            "Uma relação 1:N tendo Contato como tabela de origem e Curso como tabela de destino.",
            "Uma relação 1:N tendo Curso como tabela de origem e Contato como tabela de destino."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta ataca a limitação clássica arquitetônica das relações \"N:N nativas\" no Dataverse.",
            "papoReto": "Um aluno faz vários cursos (1:N) e um curso tem vários alunos (1:N). O óbvio seria clicar no botão mágico e fazer um \"Muitos para Muitos (N:N)\" pra ligá-los, certo? Errado! A relação N:N nativa da Microsoft apenas \"gruda\" os painéis escondidos no banco e NÃO DEIXA você criar colunas adicionais no meio da união. Se não tem coluna, como você vai criar o campo Checkbox de \"Presença na Aula\"? Para isso, a gente quebra o N:N nativo e cria uma Terceira Tabela Customizada (chamada Participantes ou Interseção). Aí fazemos duas relações 1:N normais apontando do Pai pro Filho.",
            "respostaCerta": "Duas relações 1:N interligando em uma Tabela extra (Interseção), uma com Contato como origem e outra com Curso como origem.",
            "puloDoGato": "Sempre que o cenário falar sobre \"Relacionar Tabelas de ambos os lados MAS eu preciso guardar Informação Extra sobre o Vínculo (Presença, Nota, Status)\", você descarta instantaneamente o tipo de relação \"ManyToMany nativo (N:N)\" e seleciona a criação algoritmica de uma \"Tabela de Interseção Customizada\" com dois `OneToMany (1:N)` convergindo nela.",
            "cascasDeBanana": [
                "Relação N:N direta: Não permite adicionar campos ao esquema de interseção \"Under the hood\" (debaixo dos panos). E consequentemente você perderia a capacidade de registrar a presença solicitada pelo cliente."
            ],
            "dicaOuro": "Relação \"Muitos para Muitos\" precisando salvar \"Campos a mais\" sobre aquela união = Crie Tabela de Interseção Customizada sustentada por DUAS relações 1:N apontando pra ela."
        }
    },
    {
        "id": "q167_topic1",
        "text": "Você gerencia uma instância do Microsoft Dataverse para uma grande empresa corporativa. O sistema contém uma relação de arquitetura um-para-muitos (1:N) entre uma tabela de Professores e uma tabela de Turmas.\n\nVocê tem uma regra estrita: se o registro mestre de um Professor for acidentalmente (ou propositalmente) excluído, essa ordem de exclusão NÃO deverá exercer absolutamente nenhum impacto (\"apagar ou avisar\") sobre os respectivos registros da Turma relacionada. A turma deve apenas ficar orfã sem professor em silêncio.\n\nQual comportamento de cascateamento de relação você deve usar no Dataverse?",
        "options": [
            "Referencial, Remover Link (Referential, Remove Link)",
            "Cascatear Tudo (Cascade All)",
            "Parental absoluto (Parental)",
            "Referencial, Restringir Exclusão (Referential, Restrict Delete)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta foca em Integridade Referencial Base de dados Relacional via Dataverse Configurations.",
            "papoReto": "O Dataverse trabalha em cascata. O Pai tem a Turma como Filho.\nQuer que, se matar o Pai, a Turma morre junto? Cascatear Tudo (Parental).\nQuer que, se tentar matar o Pai, o sistema te DÊ UM ERRO PROIBINDO porque o filho ainda tá vivo? Referencial Restringir Exclusão.\nQuer apenas passar a faca no Pai e a turma que lute e sobreviva, apenas cortando o laço numérico que os unia lá nas configurações? \"Referencial, Remover Link\".",
            "respostaCerta": "Referencial, Remover Link (Referential, Remove Link)",
            "puloDoGato": "O Behavior de relacionamento `Referential, Remove Link` garante que todas as referências cruzadas no metadado filho (`Lookup column`) apontando para aquele pai sejam setadas como Null (\"Removendo o Link\"), mas permitindo a exclusão sumária do Pai independentemente e mantendo o registro Filho completamente intacto na outra tabela.",
            "cascasDeBanana": [
                "Restringir Exclusão (Restrict Delete): Travaria a solicitação do usuário, ele tomaria um Popup de Erro e nem conseguiria deletar o Professor.",
                "Parental ou Cascatear Tudo: Seria desastroso, pois excluiria o Professor E enviaria o comando \"Delete\" para apagar a Turma inteira do banco de dados."
            ],
            "dicaOuro": "Apagar o Pai sutilmente e deixar o Filho viver sozinho, apenas solto / orfão (\"remover o laço e reter dados\") = Referencial, Remover Link."
        }
    },
    {
        "id": "q168_topic1",
        "text": "Você projeta um esquema para uma nova solução limpa do Microsoft Dataverse.\nUma empresa de logística planeja usar a solução base para armazenar centenas de Produtos e as quantidades brutas correspondentes de estoque daquele produto em diferentes pontos de venda físicos pelo país.\n\nA regra de negócios principal diz que: sempre que a matriz excluir da lista um Produto principal, TODA a rede de dados de centenas de filiais com informações ativas sobre o estoque do produto precisarão ser excluídas violenta e rapidamente em conjunto.\n\nDireto nos metadados, o que você deve fazer para atender e não gargalar o ambiente?",
        "options": [
            "Configure nativamente um comportamento de \"Relação em Cascata\" (Cascade All) na tabela primária.",
            "Configure um Fluxo de Automação de Nuvem (Power Automate) diário para apagar linhas de filhos orfãos.",
            "Configure um comportamento de relação \"Remover Link\" (Remove Link) na tabela e instale uma auditoria.",
            "Configure uma Regra de Negócios (Business Rule) na UI para forçar exclusões rápidas síncronas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um contraponto exato à reflexão ensinada na questão q167, para fixar os comportamentos arquitetônicos de Cascade.",
            "papoReto": "Quer apagar a árvore e jogar todos os galhos, folhas e raízes fora de uma única vez em milionésimos de segundo e sem precisar programar robô externo pra isso? Basta ir na Aba Relacionamento, clicar e configurar o Comportamento em Cascata (Cascade All / Parental). Morreu o Pai (Produto), morre toda a linhagem de estoque filha em todas as lojas simultaneamente na camada de banco de dados.",
            "respostaCerta": "Configure nativamente um comportamento de \"Relação em Cascata\" (Cascade All) na tabela primária.",
            "puloDoGato": "A instrução relacional `Cascade Delete / Cascade All` resolve imperativamente a deleção rápida de tabelas vinculadas em subnível sem nenhum overhead ou necessidade de Power Automate externo. A operação ocorre no âmago do SQL de arquitetura do Dataverse nativamente.",
            "cascasDeBanana": [
                "Fluxo do Power Automate: Possível? Sim. Correto para a prova e arquitetura? Não! Gastaria limite de requisição da API (API Calls) excessivas e poderia levar horas engasgado num loop para um grande ERP excluir item a item no Backend.",
                "Regras de Negócios: Configurações de interface (Business Rule) trabalham na aba visual de um formulário alterando abas, campos ocultos e caixas... Elas NÃO possuem qualquer função sistêmica para excluir dados do banco."
            ],
            "dicaOuro": "Apagar o banco matriz (Tabela Pai) E arrancar imediatamente todos os registros Filhos dele sem uso de código = \"Exclusão Direcional em Cascata\" (Cascade All / Deleção em Cascata)."
        }
    },
    {
        "id": "q169_topic1",
        "text": "Uma agência de turismo tem uma solução que retém os dados dos \"Clientes\". A solução também concentra \"Apostas de Vendas\", \"Oportunidades\" e \"Pedidos confirmados\" vinculados aos perfis dos mesmos clientes.\n\nUm profissional sênior de administração de vendas de contas VIPs e todos os seus 200 clientes está se aposentando e saindo da empresa.\n\nVocê precisa ir na lista e \"reatribuir\" com cliks apenas o cliente mestre dele. Consequentemente, toda a rede de pedidos dos respectivos registros atrelado SOMENTE àquele mesmo agente de vendas deve ser movida para o membro da equipe herdeiro. No entanto, se houver um pedido daquele mesmo VIP no sistema, mas de propriedade de \"outros funcionários\", eles NÃO devem ser movidos.\n\nQual regra restritiva profunda em cascata você pode usar no sistema para essa refinada finalidade?",
        "options": [
            "Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário).",
            "Cascatear Tudo (Cascade All).",
            "Cascatear Apenas Ativos (Cascade Active).",
            "Cascatear Nenhum (Cascade None / Não cascatear)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Cascata avançada foca não apenas no ato de excluir registros, mas principalmente em reatribuir Donos (Ownership Assigning) corporativamente.",
            "papoReto": "A regra de Repasse de Carteiras de Clientes! Quando você transfere uma conta \"Nike\" pro Zézinho, todos os pedidos associados lá embaixo à Nike também teriam o próprio dono alterado pra \"Zézinho\" se fosse um \"Cascatear Tudo\" cego. E se o Joãozinho da Contabilidade também era dono exclusivo da Ordem F no meio do pacote da Nike? Iria bagunçar e arrancar o acesso do Joãozinho! Então a Microsoft tem o poder cirúrgico: a Cascade User-Owned. Ela diz pro Dataverse = \"Apenas passe os subitens da Nike que PERTENCIAM ESPECIFICAMENTE ao cara que saiu da empresa (o antigo dono da Conta Nike)\". Fantástico!",
            "respostaCerta": "Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário).",
            "puloDoGato": "A restrição relacional de roteamento de dono `Cascade User-Owned` é o divisor de águas arquitetônico para Team Reparenting no Dynamics Sales. Ela impõe que a operação de `Assign (Reatribuir)` em cascata checará a integridade de dono Filho a Filho: \"Este registro filho era do antigo dono do registro pai que acabei de mover? Se sim, mudo ele junto. Se esse filho pertence à outra ID da empresa, não faço absolutamente nada com ele.\".",
            "cascasDeBanana": [
                "Cascatear Todos: Ignoraria brutalmente e invadiria esferas cruzadas. Ex: João também cuidava de parte dos pedidos deste VIP. O sistema arrancaria os pedidos de João e daria para quem receber.",
                "Cascatear Nenhum: Moveria o dono do VIP e os pedidos continuariam com o funcionário já inativo na base impedindo edição do próprio herdeiro."
            ],
            "dicaOuro": "Reatribuir cliente e repassar para ele e mover \"APENAS os subregistros/pedidos daquele antigo Ex-Dono especificamente\" = Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário)."
        }
    },
    {
        "id": "q170_topic1",
        "text": "Uma agência massiva de planejamento de eventos corporativos deseja captar informações estruturadas de metadados para cada evento ativo nas feiras de negócio. \n\nAs informações capturadas no banco de eventos precisam compulsoriamente incluir e modelar o seguinte cenário:\n1. Os centenas de contatos avulsos que participam de cada evento;\n2. \"Qual o tipo/categoria momentânea desse contato presencial (Ex: cliente pagante, atacadista, fornecedor de comida ou staff do marketing)\".\n\nVocê precisa criar e desenhar a arquitetura de relação perfeita entre os registros da solução do Dataverse para captar as informações suprindo as limitações padrão.\nO que você DEVE implementar para resolver o dilema lógico de arquitetura relacional?",
        "options": [
            "Tabela de Interseção Personalizada gerida de perto por duas Relações ativas de 1:N com tabelas fins",
            "Uma única Relação N:N (Muitos-para-Muitos) direta, limpa e nativa do construtor de ambiente",
            "Coluna de Campo de Escolha Multidimensional global com uma relação ativa em modelo de N:1",
            "Tabela de Pesquisa Simples isolada gerida com apenas uma relação de 1:N matriz sem pontes extras"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Reiteração do mesmo paradigma em formato de Case Study complexo (mesmo desafio da q166, modelado por um ângulo diferente, clássico da prova).",
            "papoReto": "Assim como o campo de \"Presença na aula\", a agência quer categorizar o contato lá com um campo extra que não cabe em Cursos e não cabe em Pessoa (categoria da feira na hora). Então não adianta clicar em \"Gerar N:N\": O painel oculto Many-to-Many nativo do Dataverse não permite acoplar botões ou textos na junção das pontas! A única saída canônica de projeto é: quebre manualmente e use a chamada \"Custom Intersection Table\" (Entidade Cruzada Manual). A Entidade da Tabela Extra segura campos (text field para Categoria de Staff) e conecta-se via dois bracinhos One-to-Many (1:N) aos painéis reais.",
            "respostaCerta": "Tabela de Interseção Personalizada gerida de perto por duas Relações ativas de 1:N com tabelas fins",
            "puloDoGato": "Relacionamento N:N nativo no Power Apps armazena dados unicamente e puramente de forma oculta nos bancos SQL vinculando apenas os par de GUIds (ID A = ID B). Captar descritores meta-associados (\"Status da presença no evento\", \"Custo do Lanche daquele membro no Evento\", \"Categoria avulsa no Evento\") exige abandonar N:N nativo, e instituir explicitamente a arquitetura de uma `Tabela de Interseção Personalizada e roteada por duas referências 1:N`.",
            "cascasDeBanana": [
                "Relação N:N direta: Limitaria apenas o \"Vínculo Físico\", mas negaria o espaço e armazenamento pra pergunta chave do case na nuvem: o campo de registro do tipo da categoria daquele evento."
            ],
            "dicaOuro": "Interconectar Vários pra Vários AND (e) Adicionar Campo / Descrítivo Personalizado extra sobre a Relação = Tabela de Interseção Personalizada gerida por duas 1:N (Custom Intersection Table + Two 1:N)."
        }
    },
    {
        "id": "q171_topic1",
        "text": "Uma empresa que usa o Microsoft Dataverse realiza eventos regulares.\n\nA empresa configura tabelas de \"Contatos\" e de \"Eventos\". Diferente de sistemas acadêmicos complexos com controles de presença, o único requisito cru desta empresa é simplesmente \"poder gravar e relacionar livremente quem participou de qual evento\". Não haverá captura de dados extras sobre o dia do evento.\n\nQual tipo de relação de banco rápida você deve criar no sistema nativo?",
        "options": [
            "Uma relação N:N (Muitos para Muitos) direta entre o Contato e o Evento.",
            "Duas relações 1:N cruzando uma tabela de interseção customizada.",
            "Uma relação 1:N tendo o Contato como a tabela Pai e o Evento como Filho.",
            "Uma relação 1:N tendo o Evento como a tabela pai e o Contato como Filho."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta contrapõe diretamente e propositalmente o cenário complexo ensinado nas questões q166 e q170.",
            "papoReto": "Lembra que falamos para nunca usar o N:N nativo SE você precisasse adicionar campos como \"presença\" ou \"nota fiscal de evento\"? Pois bem, preste atenção na leitura: esta empresa NÃO PRECISA disso. Ela só quer vincular \"Fulano foi no Evento A\" e deu. Quando o requisito de negócio for simples assim, criar a Tabela Personalizada do zero é perda de tempo e quebra de produtividade. Crie exatamente usar a relação \"N:N Nato\" que o construtor te oferece em três cliques!",
            "respostaCerta": "Uma relação N:N (Muitos para Muitos) direta entre o Contato e o Evento.",
            "puloDoGato": "A relação N:N resolve perfeitamente a vinculação mútua (onde 1 contato atende vários eventos e 1 evento tem vários contatos) quando NÃO há a obrigação restritiva funcional de guardar metadados customizados adicionais (custom fields) sobre aquele elo.",
            "cascasDeBanana": [
                "Tabela de Interseção: Só seria gabarito se o caso falasse explicitamente em \"guardar a categoria do contato\", \"valor que ele gastou no evento\", \"status da inscrição\", etc.",
                "Relação 1:N: Se tentasse apenas 1:N, amarraria que um Contato só pode frequentar estritamente 1 único evento na sua vida, o que quebra a lógica de negócio."
            ],
            "dicaOuro": "Vincular vários A para vários B (Muitos pra Muitos) SEM campos extra requeridos no meio = Botão padrão do \"N:N\" direto no Dataverse."
        }
    },
    {
        "id": "q172_topic1",
        "text": "Você está desenvolvendo um aplicativo orientado por modelo (Model-driven app).\n\nOs usuários reclamam que toda vez precisam ficar pulando de tela em tela para consultar ou interagir com registros paralelos que não pertencem à tabela primária atual na tela. Você deve melhorar a UI adicionando componentes que listem as informações de forma centralizada.\n\nQual componente de interface você adiciona direto no Formulário para permitir que um usuário EDITE massivamente dados da outra Tabela filha?\nE qual componente você usa se a intenção for estritamente de VISUALIZAR rapidamente (somente leitura) informações de uma tabela pai paralela conectada?",
        "options": [
            "Editar os filhos: Subgrade (Subgrid) | Visualizar o pai: Formulário de Visualização Rápida (Quick View Form)",
            "Editar os filhos: Painel de Referência (Reference Panel) | Visualizar o pai: Iframe",
            "Editar os filhos: Quick Create Form | Visualizar o pai: Subgrade Leitura",
            "Editar os filhos: Fluxo de Processo | Visualizar o pai: Gráfico Embutido"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Form design components and UX no Model-driven.",
            "papoReto": "Regra da vida de Model-driven: Eu estou na ficha da Empresa Apple. Quero mostrar na própria tela todos os 50 funcionários (\"Filhos\") que trabalham lá com a opção de criar novos ali mesmo? O nome disso é \"Subgrade\" (Subgrid). \nNo campo oposto, imagine que eu estou na tela de um simples Ingresso. Quero exibir lá no canto sem sair da página qual é a cor e título do \"Evento Pai\" daquele engresso? Eu quero só dar uma espiadela nas colunas dele, sem mexer. É um \"Formulário de Visualização Rápida\" (Quick View form) embutido ali mesmo!",
            "respostaCerta": "Editar os filhos: Subgrade (Subgrid) | Visualizar o pai: Formulário de Visualização Rápida (Quick View Form)",
            "puloDoGato": "A arquitetura UI de um Form fornece as `Subgrids` essencialmente para Listagem Ativa com capacidade de CRUD (edição em linha) para o arranjo 1:N de registros infantes. Oponente e interligado, o `Quick View form control` é desenhado para sugar colunas puramente em Read-Only visual vindas da tabela Pai N:1 apontada pelo Lookup column atual da tela.",
            "cascasDeBanana": [
                "Painéis de Referência e Formulários de Criação Rápida (Quick Create): O Quick Create serve para dropar uma janela lateral pop-up para Inserção limpa, não é um renderizador perpétuo estático na face em si do formulário atual para \"espiar\" listas."
            ],
            "dicaOuro": "Lista de edição com inserções inline de Filhos = Subgrid. | Célula estática de espiada de leitura no parente LookUp = Quick View Form."
        }
    },
    {
        "id": "q173_topic1",
        "text": "Uma empresa usa um Canvas App (Aplicativo de Tela) para gerenciar inventários e insumos delicados.\n\nA equipe de segurança da informação envia o seguinte requisito rigoroso de negócio: \"Devemos assegurar corporativamente que este App fique ativo e disponível SOMENTE para certos funcionários cirúrgicos aprovados, e somente quando eles estiverem fisicamente presentes e conectados dentro de uma região de fábrica ou IP específicos.\"\n\nQual barreira arquitetônica nativa da Microsoft você deve invocar baseada no Entra ID para garantir e delimitar rigidamente onde esse usuário poderá acessar o aplicativo?",
        "options": [
            "Política de Acesso Condicional do Azure (Azure AD Conditional Access Policy)",
            "Grupo de Segurança do Office 365 (M365 Security Group)",
            "Funções de Segurança de Nível Ocultas (Column-level Security)",
            "Política de Conformidade de Auditoria (Compliance Policy Center)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um caso massivo de Governança corporativa avançada englobada no syllabus da PL-200. Boundary controls and zero-trust.",
            "papoReto": "A pergunta foi incisiva: controle de acesso por REGIÃO (geografia). O Dataverse em si não sabe rastrear GPS nem IP da sua rede wi-fi caseira para trancar a porta. O policial na porta que checa de onde do mundo você logou e o aparelho que usou é o glorioso Entra ID (Azure AD). O recurso monstro que o Azure tem pra chutar para fora gente de fora da geografia corporativa é a Política de Acesso Condicional (Conditional Access)!",
            "respostaCerta": "Política de Acesso Condicional do Azure (Azure AD Conditional Access Policy)",
            "puloDoGato": "Locational bounding limits (Geo-fencing) ou Network Access Limitations, e MFA requirements para ecossistemas do Power Platform e Dynamics residem imperativamente sob o domínio superior das políticas do `Microsoft Entra ID Conditional Access`. Segurança no Dataverse é apenas \"role-based table access\"; quem limita a rede inicial é a nuvem matriz Entra ID.",
            "cascasDeBanana": [
                "Regras de Conformidade (Compliance Policy): Agem avaliando retenção de dados e Data Loss Prevention (DLP), por exemplo, impedindo envio de tweets com nome do cliente. Não lidam com restrição e gatekeeping the Logins por localidade.",
                "Security Groups: Listam os usuários autorizados a ver a tela (\"Quem é o cara\"), mas não proíbem acessos geográficos de regiões perigosas (\"De onde ele está acessando\")."
            ],
            "dicaOuro": "Segurança extrema limitando login por \"IP, Localização Física (Região) ou exigência de MFA\" para acessar o App = Azure AD Conditional Access (Política de Acesso Condicional)."
        }
    },
    {
        "id": "q174_topic1",
        "text": "Você está no papel de administrador liderando a governança em banco de dados Microsoft.\n\nSeus diretores exigem que você implemente, copie, e lide com a liberação de dezenas de novos \"Ambientes\" (Environments) do Dataverse diariamente, e crie as chaves de instâncias.\n\nQual ferramenta e portal nativo você deve primordialmente usar e manter aberto para comandar esse processo massivo diário?",
        "options": [
            "Centro de administração da Power Platform (Power Platform Admin Center - PPAC)",
            "Centro de Segurança e Auditoria do Dynamics 365 Portal",
            "Painel Mestre do Microsoft Entra ID",
            "Centro de conformidade do Microsoft 365 (Microsoft 365 Admin Center)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Controle de topologia de instâncias (Environments e Databases) e portas administrativas para a prova PL-200.",
            "papoReto": "Onde o Dono do Power Apps mora? No \"Power Platform Admin Center\" (PPAC). Lá não se cria tela, lá você é o Deus do servidor da sua empresa. Você gasta os gigabytes da conta criando Ambientes (Sandbox, Produção, Trial), fazendo backup com restore, liberando o Dataverse de dentro deles e copiando bancos de dados de um pro outro.",
            "respostaCerta": "Centro de administração da Power Platform (Power Platform Admin Center)",
            "puloDoGato": "O Lifecycle completo de Governança de Infraestrutura (Criação de Enviroment, Backups, Data loss prevention policies, Environment Settings e Provisionamento do Storage do Base do Database Dataverse) é concentrado fundamental e irrestritamente apenas no Power Platform Admin Center (admin.powerplatform.microsoft.com).",
            "cascasDeBanana": [
                "Microsoft 365 Admin Center: Concentra licenciamento diário (comprar licenças \"E3/E5\" e dar o Office pro usuário) mas e-mails e SharePoint não possuem os botões para forçar Backups e criar os Ambientes Sandbox arquiteturais da Power Platform."
            ],
            "dicaOuro": "Criar \"Amibentes\" de base de dados, restaurar e limpar Sandbox = Centro de Administração do Power Platform (PPAC)."
        }
    },
    {
        "id": "q175_topic1",
        "text": "Você tem um colaborador júnior tentando aprender a usar a plataforma e integrar novos processos em um ambiente do Microsoft Dataverse com banco ativo padrão.\n\nVocê precisa liberar para ele a honra de conseguir unicamente poder \"criar um canvas app do zero na nuvem\" dentro do espaço delimitado sem causar estrago na governança.\nO painel dele de \"Criar App\" atualmente diz sem permissão, contendo erros.\n\nQual função de segurança canônica clássica na hierarquia do Dataverse supre estritamente essa necessidade para usuários desenvolvedores bases?",
        "options": [
            "Criador de Ambiente (Environment Maker)",
            "Usuário Básico (Basic User)",
            "Personalizador de Sistema Global (System Customizer)",
            "Colaborador Nível Master (Maker-Owner)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Diferencia a função tática de Maker puro (q175) do poder aprofundado do Customizer clássico arquitetônico (q159).",
            "papoReto": "Temos uma escada de permissão Microsoft: \n1 - \"Usuário Básico\" (Lê a porcaria que tá pronta e feita pra ele). \n2 - \"Criador de Ambiente\" ou \"Environment Maker\" (Pode fabricar e sujar o Canvas jogando Fluxos e Apps Pessoais novos soltos no ar lá dentro). \n3 - E acima, o System Customizer, que já ganha poder pra criar até Campos no Bancos de Dados pra todo mundo.\nSe o garoto quer \"Criar um Canvas App solto de Automate\" do zero, libere o famoso \"Environment Maker\"! Ele não é nada perigoso no nível infraestrutura corporativa.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A security role `Environment Maker` capacita o indivíduo perante o locatário a provisionar recursos soltos e componentes Maker (criar de Aplicativos de Tela, criar Fluxos da Nuvem Power Automate) unicamente operando nos limites dos recursos consumíveis nativos existentes, mas impede explicitamente permissões destrutivas de engenharia do dataverse (DML e DDL pesados).",
            "cascasDeBanana": [
                "Usuário Básico: Apenas consume ou abre aplicativos já compartilhados pelo Admin.",
                "System Customizer / Administrador: Liberam o canhão do Maker somado a edição violenta e aprofundada de entidades de esquema profundo. Um exagero e quebra da policy pra alguém que só quer criar um Canvas solto."
            ],
            "dicaOuro": "Deletar o bloqueio de \"Não consigo lançar a ui e Criar Fluxos/Apps de Tela base do zero neste Ambiente\" = Conceda a regra \"Criador de Ambiente\" (Environment Maker)."
        }
    },
    {
        "id": "q176_topic1",
        "text": "Você está orquestrando e escalando agressivamente a segurança corporativa massiva com a malha final do Microsoft Dataverse. Você criará dezenas de equipes operacionais.\nSua solução e arquitetura exige minimizar o esforço puramente administrativo das mãos humanas aos limites drásticos.\n\nDetermine de acordo com o requerimento, qual Equipe exata atende perfeitamente os pontos:\n1. Requisito A: Qual perfil possibilita \"possuir diretamente\" registros oficiais vivos e engatar sincronia dinâmica aos agrupamentos do M365 nativo?\n2. Requisito B: Qual modelo é desenhado cirurgicamente para prover \"compartilhamento a nível daquele registro solitário sem precisar fixar papel via uma Role atrelada\"?",
        "options": [
            "R1: Equipe de Grupo do Entra ID (AAD Group team) | R2: Equipe de Acesso (Access Team)",
            "R1: Equipe do Microsoft Teams (Teams Team) | R2: Equipe Gerenciada Privada (Managed Team)",
            "R1: Equipe de Acesso (Access Team) | R2: Equipe Corporativa (Organization Team)",
            "R1: System Owners do Entra ID | R2: Equipe de Grupo do Entra ID (AAD Group Team)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia o entendimento holístico dos paradigmas de \"Donos de Registro e Role Sharing\" vis-à-vis \"Equipes de Acesso Leves\".",
            "papoReto": "Quer que uma ficha seja de propriedade oficial de cinco auditores e que se um funcionário sair da empresa na matriz a ficha perca o dono sozinha e passe pra quem foi contratado? A Equipe capaz de registrar coisas no seu nome é a Equipe de Grupo Entra ID (Azure AD), ela tem as \"Security Roles\" casadas nativamente no núcleo.\nQuer apenas jogar o Zézinho na tabela por 5 minutos só pra ele olhar um doc e ir embora sem registrar a posse ou mexer na role de segurança da equipe? Use a velha e fugaz \"Equipe de Acesso\" (Access Team) que ensinei na subgrade.",
            "respostaCerta": "R1: Equipe de Grupo (Entra ID Group team) | R2: Equipe de Acesso (Access Team)",
            "puloDoGato": "As `Owner Teams / AAD Security Group Teams` capacitam a posse real (\"Owner\") nas linhas da Tabela (User or Team Owned) ditadas pela governança hard-coded de Security Roles herdadas da Team. Extremo inverso diametral é a leveza da `Access Team`: criadas automaticamente (ou manual) aos lotes, elas garantem escopo imediato Share-Based sem transferir posse (Ownership), demandando zero acréscimo de licenças cruzadas nas Roles centrais.",
            "cascasDeBanana": [
                "Inverter os conceitos: Atentar-se primariamente e nunca esquecer de que Access Teams NUNCA são consideradas proprietárias corporais (Owners) de um Record. Elas são essencialmente um esparadrapo fantasma que aplica \"Comunhão/Compartilhamento\" do dado sub-tácito."
            ],
            "dicaOuro": "Pode \"Possuir o registro\" e engatar dinamicamente segurança base fora do Dynamics = Group Team do Azure AD. | Apenas viabiliza e libera acessos instantaneamente na ficha sem dar a tela a posse = Access Team."
        }
    },
    {
        "id": "q177_topic1",
        "text": "Uma corretora possui filiais conectadas aos EUA, Brasil, Índia e Japão. A tabela base da companhia opera e gerencia conversões de \"Câmbio e Moedas\" (Currency) onde as transações regionais apontam para o cadastro central daquelas moedas na instância Dataverse.\n\nEstratégicamente, as transações financeiras operadas em \"Real (Brasil)\" serão encerradas pela sede americana, mas a filial remanescerá focada em dólar.\nOs usuários do sistema não deverão mais ser capazes de listar e associar a moeda Brasileira (Real) nas listas de novos registros, no entanto, para não quebrar a Lei de auditoria, históricos e os cálculos das cotações atreladas à moeda do passado e relatórios devem permanecer intactos (não nulos).\n\nQual ação segura você deve executar direto contra o cadastro do Real (Brasil) na Tabela de Moedas do Dataverse para honrar todas a condições?",
        "options": [
            "Desativar o registro da moeda Brasileira (Deactivate the currency record)",
            "Desabilitar/Bloquear as políticas de segurança da moeda Brasileira",
            "Excluir duramente o registro da moeda Brasileira (Delete the record)",
            "Renomear a moeda Brasileira para conter um prefixo sinalizando invalidez"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Aborda a integridade física de entidades canônicas no Dataverse e a diferença colossal de impacto em Banco de Dados entre Inativar vs Deletar.",
            "papoReto": "A Lei de Ouro de Bancos de Dados Corporativos (Especialmente Financeiros): NUNCA aperte \"Excluir (Delete)\" em algo que já tem registros passados apontando pra ele! Se você \"Excluir\" a Moeda \"Real\" do sistema mestre, toda a conta nos pedidos de meses anteriores lá de 2015 vai dar erro de quebra referencial e quebrar a tabela ou zerar relatórios do Power BI. Qual o escape oficial Microsoft pra algo sumir das listas de criação nova, mas continuar segurar as pontas pra relatórios passados e não quebrar o banco? Simples: \"Desativar (Deactivate)\". O status vira inativo, sumindo do frontend, retendo o passado íntegro.",
            "respostaCerta": "Desativar o registro da moeda Brasileira (Deactivate the currency record)",
            "puloDoGato": "Para reter `Data Integrity / Referential History` e sumir com algo das views de preenchimento LookUp ativas dos Model-Driven Apps, você apenas manipula o Status Reason nativo e intrínseco (StateCode) do registro de Activo para `Inactive (Desativar)`. Deleções físicas (Delete/Drop) expurgam o GUID e causam o rompimento cascata ou null refence error.",
            "cascasDeBanana": [
                "Excluir o registro: É o erro amador número 1. O Dataverse daria erro, mas se estivesse em cascata Null (Remove Link), os relatórios passados ficariam \"Sem Moeda\", destruindo as planilhas financeiras.",
                "Renomear o Prefixo: Uma gambiarra (Workaround). O usuário ainda poderia acidentalmente selecionar o item sujo no formulário e fechar transações."
            ],
            "dicaOuro": "Precisa sumir com uma Opção/Cadastro do menu pros usuários não usarem mais, MAS não pode afetar relatórios antigos que a usavam? = Siga sempre o caminho sagrado de \"Desativar\" (Deactivate) o registro!"
        }
    },
    {
        "id": "q178_topic1",
        "text": "Você está configurando detalhadamente a \"Segurança Baseada em Hierarquia\" (Hierarchy Security) do Power Apps para um organograma corporativo fechado.\n\nA companhia tem um CEO central, vários VPs, gerentes seniores e operários analistas numa escada gigante. Você configurou o tipo \"Hierarquia de Gerente\" (Manager Hierarchy) e tudo funciona, exceto para um caso:\n - Os gerentes e VPs lá da ponta conseguem enxergar as vendas perfeitamente, mas o CEO no topo da cadeia relatou que ele não consegue visualizar no painel os dados dos analistas da base inferior profunda. O painel dele de repente escondeu tudo que vêm de longe.\n\nQual ajuste pontual matemático de configuração você precisa executar no Painel de Admin para consertar o campo de visão longo do CEO no Dataverse?",
        "options": [
            "Aumentar o valor da \"Profundidade de Hierarquia\" (Hierarchy Depth) global do motor para 3 ou mais.",
            "Adicionar o CEO explicitamente ao cadastro de usuário do analista como se fosse co-representante.",
            "Mudar arquiteturalmente da \"Hierarquia de Gerente\" para a \"Hierarquia de Título Personalizado\".",
            "Criar e propagar dinamicamente uma Equipe de Acesso com a conta do CEO na subgrade."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A avaliação detalha o framework numérico limitador do Hierarchy Security do Dynamics e Dataverse.",
            "papoReto": "Quando você liga o botão mágico de \"Ver Hierarquia\", os chefes não ficam com Visão de Raio-X automática cortando a empresa de ponta a ponta sem freio de performance! A Microsoft coloca um \"limite de lupa\" padrão pra ele enxergar e puxar só até uns \"2 lances de escada pra baixo (Ele -> Sub-chefe -> Pião)\". Se a árvore for gigante e o coitado do CEO no alto da pirâmide está cego paras as vendas da base de 4 lances, você precisa ir lá no portal Admin em Hierarquias e \"Aumentar a Profundidade da Hierarquia\" (Hierarchy Depth). Aumente para 3, 4, 5... E a lupa desce mais. Simples.",
            "respostaCerta": "Aumentar o valor da \"Profundidade de Hierarquia\" (Hierarchy Depth) global do motor.",
            "puloDoGato": "No motor nativo do Dataverse para `Hierarchy Security Modeling`, o escopo limite de Records gerados a longo cascateamento vertical que a engine varrerá descendo entre Pai -> Filho -> Neto -> Bisneto é rigidamente atracado pelo valor setado no metadata \"Hierarchy Depth\" (Profundidade Máxima de Hierarquia), que por questões primárias de otimização de queries T-SQL em Join, vem fixado conservadormente de fábrica em pequenos steps.",
            "cascasDeBanana": [
                "Mudar para Hierarquia de Título Nominal / Personalizado: Custom Position / Title resolveria arranjos irregulares (quem não bate com organograma), mas eles sofrem das exatas mesmas limitações algoritmicas de Profundidade Base do motor. A miopia continuaria.",
                "Equipe de Acesso: Fugiria radicalmente do escopo do design nativo e exigiria fluxo de disparo robótico absurdo linha a linha."
            ],
            "dicaOuro": "Chefão lá do alto da arvore não consegue carregar dados na tela de usuários em ramificações muito afundadas / distantes pra baixo = Edite o atributo de \"Profundidade de Hierarquia\" (Hierarchy Depth)."
        }
    },
    {
        "id": "q179_topic1",
        "text": "Nesta arquitetura arrojada, você está incorporando e embutindo (Embedding) visualmente um aplicativo real, inteiro e funcional do canvas \"Power Apps\" encapsulado visualmente puramente dentro do painel vivo estático de um \"Relatório do Power BI Corporate\".\n\nApenas usuários clientes internos logados deverão autenticar para visualizar os detalhes no painel analítico final com o componente UI engrenado.\nConsiderando que são pontas separadas do ambiente no Backend, quais DUAS ações operacionais inegociáveis independentes você deve certificar como publicadas no ar para que a mágica seja ativada para eles?",
        "options": [
            "Ação 1: Compartilhar o Relatório do Power BI com os Usuários Alvo. E\n Ação 2: Compartilhar obrigatoriamente o componente do App do Power Apps com os mesmos usuários nos bastidores no maker.",
            "Ação 1: Publicar o relatório abertamente no Power BI Link of Web. E\n Ação 2: Compartilhar restritamente o App Power Apps internamente no Dataverse.",
            "Ação 1: Embutir Acesso Anônimo (Anonymous Access) no bloco de BI.  E\n Ação 2: Desabilitar o requerimento de Roles no Tenant do Power Apps App base.",
            "Ação 1: Adicionar visual de \"Tabela Padrão\" extra ao Power BI. E\n Ação 2: Conceder compartilhamento via Workspace global do Office365 de dados soltos."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Prova o domínio do candidato em integrações multisserviço da Power Platform (A falta do entendimento e de sync entre permissões é o que quebra a UI do Embedded App).",
            "papoReto": "Isso dói demais na vida real: O cara constrói um baita painel no PowerBI, mete um botãozão do Power Apps dentro dele pra equipe aprovar contratos, e compartilha a URL do painel... Aí ninguém abre! Isso não é Mágica, são servidores apartados! O Power BI não transfere seus poderes ou crachás pro Power APP encapsulado por telepatia. Você TÊM OBRIGAÇÃO administrativa de ir e liberar Permissões DOIS a DOIS nos painéis: Abra o estúdio BI = Compartilha com as dez pessoas. Abra o estúdio Apps = Compartilha as propriedades com as dez pessoas lá do outro lado. Se faltar um, o quadrado branco fica apitando!",
            "respostaCerta": "Ação 1: Compartilhar o Relatório do BI. | Ação 2: Compartilhar o App do Power Apps.",
            "puloDoGato": "A diretriz fundamental e canônica de cross-embedding dentro da Power Platform dita perfeitamente que \"Embedded Components não herdam Security Governance Cross-tenant Context (Acesso) do invólucro hospedeiro de forma inerente\". A gestão de permissões para exibir Power BI Visuals que contêm um Power App Visual subjacente exige que a partilha (Sharing Permissions Policies) seja concedida nas camadas Mestre de forma redundante e pontual. (No Service PBI e no Portal do Fabric PowerApps).",
            "cascasDeBanana": [
                "Publicar na Web (Publish to Web): Um comando suicida neste cenário! Ele expurga e ignora toda a segurança Active Directory vazando dados mundiais para anônimos e arrebenta a arquitetura base estrita corporativa, que inclusive proíbe iframes de Power Apps bloqueados em render aberto."
            ],
            "dicaOuro": "App de Power Apps foi instalado dentro de Aba do Power BI? Para funcionar e eles renderizarem e abrirem = Lembre do Espelho (Você TEM que botar a lista e Compartilhar a permissão 1x no Power BI, E 1x no Power Apps explicitamente)."
        }
    },
    {
        "id": "q180_topic1",
        "text": "Sua organização baniu formalmente e não permite a utilização de injeção de scripts (JavaScript) ou o uso de qualquer código de desenvolvimento pesado base personalizado em sua topologia para resoluções de interface em suas soluções ativas (\"No-code Only\").\n\nVocê agora foi requisitado urgentemente pelo CTO para montar e criar nativamente e magicamente do zero uma \"Visualização/Tabela Embutida\" (View) formatada sob-medida no banco; E o mais importante: ela DEVE conseguir obrigatoriamente surgir atrelada e ativamente disposta nos seletivos para poder ser aberta, filtrada e vista nativamente por absolutamente todos os usuários correntes ativos da organização.\n\nOnde e qual tipo de View você deve construir estritamente no portal da arquitetura?",
        "options": [
            "Usar o Solucionador de Ambientes focado na aba nativa do Portal de Construtores para gerar uma Visualização de Sistema embutida (System Views / Environment Maker Portal Solution).",
            "Criar localmente nas opções engessadas de engrenagem através da pesquisa Visualização de Filtros Pessoais em Localização Avançada local livre de solução (Advanced Find).",
            "Sincronizar a extração e embuti-la como Visualização formatada em um Template do Microsoft Excel (Excel Template View).",
            "Codificá-la cru e purista via script embutido customizado chamando o módulo de configurações universais restritas da instância."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Trabalho rotineiro da PL200 focada no jargão \"System View vs Personal Global Shared Views\" num fluxo regido por ALM.",
            "papoReto": "Atenção para \"Vista POR TODOS\" versus \"Proibido Pro-Code\". Se você vai no site do sistema rodando, clica no funilzinho da pesquisa do canto (Antiga Busa Avançada) e salva uma Visualização com colunas ali \"só pra você salvar pros colegas\", essa view nasce como PRIVADA com ID no teu nome. Dá uma dor de cabeça lascada compartilhar view Pessoal para \"a empresa toda\" (todo colega novo tem q receber). Qual a forma Certa? Pare, entre na Fábrica (O Portal de Criador - Maker Portal / Solution), abra a maldita tabela lá e construa a sua view nas Vistas Públicas do Sistema (System Views). A System View já nasce exposta e enxertada no DNA grudadinha na parede do aplicativo globalmente sem arrastar um código. Todo mundo vê por herança!",
            "respostaCerta": "Usar a aba nativa embutida de construção do Portal de Construtores baseada em Solução para Visualização Sistêmicas Públicas (Environment Maker Portal Solution).",
            "puloDoGato": "A premissa em ALM (Application Lifecycle Management) determina que componentes de UI nativos (sem injeção PCF) de longo alcance arquitetural desenhados a preencher listas visuais padrão base de aplicativos (`System Views / Public Views`) devem peremptoriamente ser gestacionados dentro do contêiner empacotáveis orgânicas de Solutions no Maker Portal. Elas sobreescrevem imediatamente os manifestos, poupando a gambiarra de compartilhamento individual forçado de `Saved Queries (Advanced Find Views)`.",
            "cascasDeBanana": [
                "Localização Avançada / Advanced Find: Gera apenas uma query fugaz que desponta em sua gaveta base como Personal View base (Personal Saved Query) salva em banco no seu GUID, necessitando de botões de compartilhar pesados e burocráticos e correndo o risco constante do criador deletar acidentalmente."
            ],
            "dicaOuro": "Criar \"Visualização\" central universal e Oficial onde ela já nasce visível a toda a base da sua matriz em todos os apps sem gambiarras/código = Portal Power Apps construida via Views do Sistema empacotadas em Soluções (Maker Portal Solution)."
        }
    },
    {
        "id": "q181_topic1",
        "text": "Você desenha a arquitetura de banco num Dataverse para 1.500 usuários ativos e tenta evadir cliques longos ou esforço de apontamento individual manual em painéis de gerência para administrar funções e bloqueio de segurança na base (roles).\n\nDois pontos e requerimentos surgem:\n1: \"Para injetar magicamente a permissão de Base do Sistema com 1 clique a todo mundo em uma unidade inteira de um galpão de negócios novo\"\n2: \"Para entregar dinamicamente para o dono do C-Level na sua sala principal a glória de enxergar suas próprias vendas E AS VENDAS do Galpão de Negócios novo engatado logo Abaixo dele.\"\n\nNo Dataverse, onde o administrador aciona as duas ferramentas combinadas de modo perfeito em resposta unificada em menor esforço?",
        "options": [
            "RQ 1: Atribuir a Role englobada apenas no painel e conta da \"Equipe Padrão / Default Team\" matriz daquela respectiva Unidade.  |\n RQ 2: Marcar e estender as permissões da Segurança na aba dele cruzando as bordas setando o Círculo de Leitura em formato de Hierarquia de Cascatear \"Pai/Filho\" (Parent: Child BU permission level).",
            "RQ 1: Criar via automação uma Access Team gigantesca empurrando os usuários. |\n RQ 2: Compartilhar o disco da BU (Child Business Units permission security) individualmente.",
            "RQ 1: Forçar script de Atribuição Pessoal (Atribuir aos usuários soltos por importação via PowerShell em arquivo Excel). |\n RQ 2: Expandir o Perfil de Gerência do Painel da Equipe Padrão para Owner Unit System (Organização Nivel Global).",
            "RQ 1: Ligar via Entra ID para um M365 Business Unified Group engrenamento restritivo. |\n RQ 2: Recomendar nível \"Unidade Própria Isolada\" e escalar \"Hierarquia de Titulos\" para fechar frestas invisíveis no layout hieráquia C-Level de segurança."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Coroa e agrupa os aluguéis avançados de Security Architecture no motor Relacional Dataverse. Privilégio dinâmico com Equipe Padrão e Acesso Profundo de Círculos \"Parent-Child\".",
            "papoReto": "A malha de segurança Microsoft é sensacional no combate ao erro humano (preguiça). Preste atenção em Duas magias de ouro pra governar 1500 pessoas: \nMagia 1: Acabaram de inaugurar a filial Sudeste com 439 funcionários; você quer que todos ganhem liberação pro sistema amanhã? Em vez de marcar 439 casinhas manualmente uma a uma, preste atenção! Assim que você aperta \"Criar a Unidade de Negócios Sudeste\" na tela, o sistema te dá um bônus escondido: ele invisivelmente constrói e dá vida a uma entidade fantasma lá atrás chamada \"EQUIPE PADRÃO DA UNIDADE\"! É nela! Você apenas solta a Regra de Segurança unicamente NELA, e boom: os 439 ganham a licença juntos!\nMagia 2: Se o cara é o CEO Global e quer enxergar os dados dele E das \"Unidades lá de Baixo / Filiais Dependentes\", você vai na bolinha do radar da aba de privilégio dele de leituara de vendas... e pinta a bola em 3/4 no desenho: O nome de Privilégio Mágico para isso é Nível \"Unidades de Negócios Principais:E Subordinadas (Parent:Child Business Units Security Permission)\". Sucesso garantido e seguro.",
            "respostaCerta": "1: Role associada na \"Equipe Padrão/Default Team da unidade. | 2: Radar de permissão no Nível Hierárquico Pai-Filho (Parent-Child BU).",
            "puloDoGato": "O design Dataverse prevê e instaura invariavelmente uma `Default Business Unit Team` autogerenciável não-deletável vinculada inexoravelmente a cada BU criada e que absorve auto-associando instantaneamente todos os usuários imputados fisicamente na respectiva BU. Em conjunto sinérgico a isto, O modelo vetorial base de alcance e privilégio (Access Level depth) é graduado, permitindo o engate e desdobramento granular transbu em Tabela via `Parent:Child Business Unit` que rompe bordas sem a necessidade de atingir o perigoso apelo ao acesso `Organization (Global)`.",
            "cascasDeBanana": [
                "Nível \"Organização/Global\": É a famosa caixinha com Radar 100% (Verde Completo) na security role. Apesar do chefe ver o dele e os gálpões (Childs), se ele tiver Unidades C-Level \"Irmãs/Pares Horizontais\", ele acidentalmente invadiria e veria as vendas delas também, vazando poder (Violation of Least Privilege)."
            ],
            "dicaOuro": "Aplicar Permissões com ZERO ESFORÇO massivamente em todos presos naquela mesma \"Business Unit\" = Jogue a Função estritamente no bolso da invisível \"Equipe Padrão\" da BU (Default BU Team)! | Ver vendas das minhas raízes filhas atreladas sob mim na planta abaixo? = Aumente o Radar Privilégio na edição pro tipo engenhoso cruzado \"Pai-Filho\" (Parent-Child BU)."
        }
    },
    {
        "id": "q182_topic1",
        "text": "Case Study de Roteamento de Regras de Negócios: A diretoria de TI precisa criar urgentemente uma solução lógica para rotear e redirecionar itens de trabalho e chamados dentro de um aplicativo gerenciador de Vendas do Dynamics. \n\nO grande diferencial restritivo ditado pelo CTO é: a empresa acabou de escalar uma estagiária \"Assistente Administrativa\" da área de Vendas (sem o menor perfil ou treinamento técnico de programação, loops e design de backend) para ser a responsável definitiva oficial, encarregada vitalícia para ficar dando manutenção, alterando matrizes e criando novas pequenas métricas para essas regras de roteamento diariamente pelo sistema visando flexibilidade.\n\nQual é ferramenta e a tecnologia do ecossistema mais apropriada para fornecer essa capacidade à assistente garantindo empoderamento sem que ela toque em C-sharp ou fluxo de dados pesado?",
        "options": [
            "Criar e construir Regras de Roteamento nativas atreladas (Routing Rules / Business Rules).",
            "Configurar um robusto Power Automate Cloud Flow contendo Switch Statements e arrays lógicos complexos.",
            "Construir e injejar Custom Actions escritas em C# para servirem de plugin no escopo do Banco.",
            "Instalar Filtros Pessoais salvos e atrelados por Dashboard global."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia a consciência da PL-200 sobre Governança de Perfis, Low-Code empoderando Citizen Developers em vez de soluções Pro-Code inatingíveis.",
            "papoReto": "A pegadinha aqui era te fazer pular cegamente para um Power Automate cheio de `Switch statements` gigantes porque ele \"Consegue\" fazer. Lógicos conseguem. MAS a questão te informou em letras garrafais que a manutenção do sistema será feita por uma Assistente Administrativa de negócios comum. Ela não vai conseguir dar manutenção num monstro de Flow. O ecossistema te oferece um atalho limpo e maravilhoso chamado \"Regras de Roteamento/Regra de Negócios\", que abre uma UI visual incrivelmente boba do tipo \"Se X for Laranja -> Mande pro Grupo Y\". Ela clica, salva e funciona, tudo do lado do frontend seguro.",
            "respostaCerta": "Criar e construir Regras de Roteamento nativas atreladas (Routing Rules / Business Rules).",
            "puloDoGato": "Soluções delegadas inteiramente a `Business Users` ou `Administrative Assistants` nunca devem depender de lógica empacotada em arquiteturas passíveis de quebras fatais como `Complex Cloud Flows com Switch Statements` ou `Actions em C#`. Invoca-se sempre os componentes no-code mais declarativos da UX, como as `Routing Rules` ou `Business Rules`, altamente tolerantes a edição do usuário comum.",
            "cascasDeBanana": [
                "Power Automate com Switch: Proposto constantemente nos exames para tentar os incautos. Switch resolve logicamente infinitas vias de percurso, porém exige forte tração em Logical Operators da pessoa administradora, e rompe no primeiro erro da estagiária."
            ],
            "dicaOuro": "Se a questão menciona delegar atualizações do sistema inteiro nas costas e nas mãos de \"Funcionários leigos / Perfis Administrativos sem treinamento TI\" = Fuja do Código C# e do Power Automate! Abrace ferramentas No-Code estritas como \"Business/Routing rules\"."
        }
    },
    {
        "id": "q183_topic1",
        "text": "Você está num dia aterrorizante de migração como admin desenvolvedor Dataverse.\nVocê abriu o assistente mágico UI da \"Ferramenta de Importação de Dados\" (Data Import Wizard) local para jogar 20.000 novas contas legadas da velha base de Oracle do cliente por meio de pesados arquivos planilhados .CSV formatados.\n\nNo entanto, a tragédia bate à porta: ao iniciar a tela central de mapeamento das colunas (Data Mapping), o mapeamento automático trava pois você descobre fisicamente que algumas \"Colunas Fiscais Vitais\" que lideravam o CSV não existem e nunca foram arquitetadas na Tabela de Destino do Dataverse.\n\nComo um engenheiro na plataforma com permissões plenas, o que você DEVE fazer taticamente para resolver isso de raiz contornando a falha de schema do banco para finalizar o fluxo?",
        "options": [
            "No Portal do Desenvolvedor orgânico (Power Apps Maker Portal), entre no esquema vital da tabela, adicione as colunas faltantes perfeitamente, publique, e após a tabela estar rica, volte e efetue o mapeamento novamente no importador.",
            "No Centro de Administração da Power Platform (PPAC), adicione as colunas no disco rígido do ambiente por injenção forçada cruzada.",
            "Crie um fluxo engenhoso de varredura no Power Automate com o conector nativo de Excel em Loop para injetar invisivelmente os campos que faltam via requisição API durante a leitura da planilha.",
            "No própria UI da janela ativa e momentânea do assistente Import Data Wizard clique violentamente no botão e engrenagem de \"Auto-Criar\" rest-columns em Runtime e ignore faltantes."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Contraste e fronteiras e escopo arquitetural do The Dataverse Data Import.",
            "papoReto": "A Ferramenta de Importação em massa é igual torneira cega: joga a farinha no cano que você mandou. Se você mandou a farinha por um cano pro Dataverse que \"Ainda não tem a tampa X pra fechar o buraquinho porque vc esqueceu de criar nela\", ela transborda. A ferramenta do Import.CSV NÃO É A CAPACITADA e tampouco desenhada para servir de \"Construtora Dinâmica Mágica de Banco de Dados na Nuvem\". A regra mestre? Aborte e feche a importação. Abra uma nova aba pra vestir o terno de construtor (Vá para o Power Apps Maker Portal), modifique o osso do esqueleto de sua Tabela/Solução criando a bendita da Coluna faltosa, salve, publique. Depois disso, chame a Importação e seja feliz!",
            "respostaCerta": "No Portal do Desenvolvedor (Power Apps Maker Portal), adicione as colunas na tabela antes da importação.",
            "puloDoGato": "O Wizard de \"Data Mapping\" clássico de Data Import Service trabalha rigidamente sobre um paradigma de Reflection Schema Validation (Avaliando schema existente para encaixe do cabeçalho CSV). O Wizard não empodera em si um \"Database schema generator tool em Runtime na nuvem Dataverse\". Soluções estruturais (Missing Fields/Columns) têm que ser provisionadas classicamente na engrenagem limpa do Entitiy Model do `Maker Portal`.",
            "cascasDeBanana": [
                "Adicionar direto no Importador no botão: Invenção maldosa da prova; a tela não possui permissões/capabilities para geração estrutural massiva dinâmica e controlada em dataverse unicamente gerida por clique em import.",
                "Power Automate com Excel: Você consumiria milhares a mais de chamadas premium da API de forma descontrolada e com riscos de time-out imenso lendo as linhas uma por uma só pra remediar uma falta da base."
            ],
            "dicaOuro": "A Planilha Externa tem coluna que a sua Tabela do Dataverse por erro ainda NÃO TEM? = PARE TUDO e vá lá no sagrado \"Portal principal do Criador\" (Maker Portal) construir essa maldita coluna na Tabela primeiro para então plugar os fios de Mapeamento."
        }
    },
    {
        "id": "q184_topic1",
        "text": "Você precisa liderar o provisionamento e instanciar uma Tabela central Mestre focada puramente em \"Clientes Especiais VIP\" contendo dados corporativos ultrassensíveis.\nA Governança Global te emparedou com apenas impôs 2 necessidades arquitetônicas limpas bloqueantes e exatas para a tela:\n\n1. Privilégio Unitário Solipsista (Requisito A Tabela inteira em sua raiz sistêmica deve permitir vitalmente estritamente a configuração de propriedade (Property granularity) apontada para que cada humano específico detenha um \"Dono e Posse Unitária Central (Owners)\" sobre o registro dele contra os outros.\n \n2. Campo Bloqueado Restrito Exclusivo (Requisito B): A coluna pontual que guarda o \"Token de Cartão/SSN CPF\", mesmo caso seja de posse aberta do João, deve estar invisível num cadeado ou marcada com asteriscos nos formulários para 95% da base, ficando livre esteticamente e para leitura global corporativa livre apenas para os 2 gestores Fiscais de Risco do banco financeiro que operam numa lista unificada de roles.\n\nMapeie e eleja simultaneamente as fundações arquitetônicas respectivas para as 2 partes combinadas Dataverse:",
        "options": [
            "R-A: Criar base raiz focada em \"Tabela pertencente Lógicamente a Usuário ou Equipe\" (User or Team Owned Table). E\n R-B: Implementar barreira Segurança avançada em Nível Fino de Coluna (Column-level Security Profile / Perfil Segurança).",
            "R-A: Criar sistema embasado focado em Tabela Global Pertencente totalmente à Organização (Organization-owned). E\n R-B: Habilitar e engrenar Criptografia Transparente Avançada Oculta no nível Azure do inquilino para anonimato.",
            "R-A: Levantar uma subgrade de Virtual Table engatada no Power Apps. E\n R-B: Redigir uma Business Rule restritiva base de ocultar visibilidade (Visible = False) da aba em JavaScript.",
            "R-A: Criar base de \"Team Owned Hierarchy\" cruzado . E\n R-B: Usar script hardcoded no app designer para mascarar dinamicamente os valores."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Delineando dois paradigmas gigantes de segurança combinados no mesmo formulário de negócios: Table Base Ownership Type vs Column Secure Level.",
            "papoReto": "A anatomia do Dataverse e de seus registros opera com duas bases de nascimento fundamentais e definitivas: Ou a tabela nasce pra \"Todo Mundo da Empresa Ver por Padrão da Org\" ou ela nasce com botão de \"Opcional p/ Dono por Time e Usuário\" marcando e travados donos nos registros individualmente; como o caso pediu blindagem a Donos pra impedir que João edite ou veja abertamente as contas VIP da Maria, crie a do segundo tipo: User-team Owned.\nPara abafar e escurecer a visibilidade específica e solitária do campo do seu bendito numero Card de crédito da Matrix: nunca deite Business Rules bobas de UX de tela que quebram com export pro excel. Use a espada gigante e definitiva: Perfil de Segurança daquela Coluna. Feio, fechado pra balanço global pro RH.",
            "respostaCerta": "R-A: \"Tabela pertencente a Usuário ou Equipe\" (User/Team Owned Table). | R-B: Implementar Segurança a Nível da dita de Coluna (Column-level security Profile).",
            "puloDoGato": "A Tabela `Organization Owned` garante apenas a capacidade e limiar do acesso irrestrito matricial transversal universal no ambiente ao registro, sem o slot reservável vital do Guid do `OwningUser` que dita limites por usuário da filial. Tabelas que clamam e exigem restrição mútua singular com \"Donos Atrelados ao RG\", obrigatoriamente exigem o build e marcação irrenunciável do flag Ownership Base fixada como `User or Team Owned`.\nA segurança aprofundada de Coluna expele curiosos da tela e auditoria cruzada sem travas de código.",
            "cascasDeBanana": [
                "Business Rules escondendo campos (Visibility = False): Armadilha mortal e a maior causa de Data leak interno; você só esconde fisicamente o campo bonitinho da cara do formulário ativo atual da UI web; a pessoa pode contornar indo no excel no \"Export\" global ou no app Movel ou em Rest Api e ver a maldita coluna gigante exposta sem bloqueios nativos. A Regra tem quer ser de BANCO = Column-level security."
            ],
            "dicaOuro": "Precisa determinar no Dataverse que o Registro X \"Pertença\" só Ciclano como dono? = Crie a Tabela como modelo base \"Pertença à Equipe ou a Usuários\" (User or Team). | Esconder o salário pontual de relatórios ou do RH inteiro blindando? = \"Segurança profunda Nível de Coluna Privada\" (Column Level Security)."
        }
    },
    {
        "id": "q185_topic1",
        "text": "A diretoria corporativa está furiosa e você chegou na etapa final vital de arquitetar a exclusividade canônica de \"Segurança de Níveis de Coluna\" (Field-Level Security) no Dataverse visando impedir imediato vazamento físico e de UI de um campo sigiloso numérico gravado em tabela chamado \"Salário Anual do C-Level de Vendas\".\n\nUma arquitetura do Dataverse exige sempre a coordenação lógica exata e o cruzamento de dois portais de configuração massivos governamentais complementos distintos em execução para selar a blindagem da coluna por parte administrativa:\n\nPasso Defesa 1: Qual tela exata / Portal mestre arquitetural do locatário você é obrigado a cruzar pra acionar na chave das propriedades raiz da coluna botando a trava universal de \"Habilitar Segurança de Coluna Central\" criando o escudo primário impenetrável?\n\nPasso Defesa 2: Feito o bloqueio, ela virou chave de ferro. Qual o painel gerencial administrativo cruzado / módulo do Dataverse onde o segurança de rede agora agrupa em times as permissões fininhas separadas de liberação (Ler, Atualizar, Criar em grupo) para então alistar os únicos felizardos humanos salvos da escuridão do Cadeado universal listado por ele?",
        "options": [
            "P 1: Menu de Edição Orgânica da Coluna pelo focado Power Apps Maker Portal Central (Solution). | P 2: Aba perfis listados em Perfis de Segurança da respectiva de Coluna blindada (Column / Field Security Profiles Group).",
            "P 1: Aba Global Hierárquico do Inquilino central Entra ID cruzado O365 admin. | P 2: Concedendo perfis de edição por meio Segurança Base Funções (Security Roles).",
            "P 1: Entidade e aba global nativa orgânica de Canvas App Designer Front UI (Estúdio Web de UI Gráfico). | P 2: Atrelamento a Perfil restritivo Global matriz blindada de Locatário.",
            "P 1: Pela abóboda global externa fechada do Power Platform Global Center. | P 2: Ajuste minucioso lógico com Regras cruzadas e atreladas de Negócios Ocultas escondidas (Backend Logic Rules)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Garante o domínio pleno do passo a passo vital prático para instaurar Column-Level Security sem erros, um pesadelo e labirinto de cliques na PL200.",
            "papoReto": "Quer prender com tranca dupla um Campo (Coluna do Excel Web) sigiloso de Salário do patrão na nuvem com um cadeado virtual? E não fazer mais ngm ver? Segurança Ouro. A MS pede que você caminhe dois cenários dificeis: Primeiro, você veste o macacão e vai lá nas engrenagens de código puro do \"Power Apps Maker Portal\", mexe na engrenagem arquitetural que compõe o campo e liga e ativa a chave mestre global interna (`Enable Column Security`). Pronto! Essa atitude gera a blindaxe de um cadeado impenetrável, preto global e surdo, pra todo mundo, ninguem vê. Daí inicia-se Etapa dois: Agora você abre o lado do engravatado no painel administrativo leve: E lá fora (Field Security Profile), você configura os Crachás Ouros. Você diz pro grupo do RH do security: \"Vocês 5 podem enxergar ali. E desses 5, só aquele fulano mágico pode também atualizar / escrever dados na coluninha especial\". Sucesso!",
            "respostaCerta": "Passo 1: Clicar Enable em Portal Mestre Maker Portal | Passo 2: Cadastrar felizardos agrupados no \"Perfis De Segurança De Coluna\".",
            "puloDoGato": "A topologia \"Column Level Security\" trabalha como modelo de Opt-In reverso do Dataverse. Ao invés da tela conceder visibilidade orgânica do Form ao usuário, O `Property Metadata` da tabela (No Maker / Schema Portal design Table Column Edit) altera forçadamente sua matrix de acesso pra global deny, fechando os porões globais do Field Security Code da Tabela inteira (`Passo Master`). Ato interconectado sucessor do System Cust é a vinculação externa (via Access control Panel) mapeando usuários de fora de privilégio base pros esquetes cruzados do Access Rule Groups contendo perfis em Read/Create/Update denominados irrenunciavelmente de `Column / Field Security Profiles` separadamente do núcleo.",
            "cascasDeBanana": [
                "Mapear permissões por Security Roles Padrão nativos - A armadilha: Roles puristas e limpas (A aba de bolinhas do Dataverse tradicionais) blindam universal e abertamente se o Zé consegue apagar/ler uma LInhas inteiras PAI (\"Toda a Conta VIP\"). Pra chegar na especificacao miudínha minuciosa atômica e granular e dizer \"Qual campinho restrito (colunínha especifica unicamente de salário dentro da dita Conta) ele manipula solta sem encostar ao resto, vc precisa evocar seu braço armado poderoso em paralelo focado pra eles: Perfil Segurança de Coluna.\""
            ],
            "dicaOuro": "Segurança Estrita de Coluna - A Regra de 2 Tapas: 1º \"Bote a Tranca Arquitetural Orgânica e ative a bolinha da column habilitada na Edição Estrutural raiz do Maker Portal\" --> E 2º \"Entregue a lista fina e distribua as chaves para só alguns abençoados cruzados na Gestão Administrativa dos Módulos do Perfil restrito das Seguranças Baseadas da Coluna\" (Field Security Profiles)."
        }
    },
    {
        "id": "q186_topic1",
        "text": "Você precisa projetar uma solução de check-in de convidados. Quais tecnologias você deve usar para cada requisito em sequência?\n\n1. Desenvolver a solução base visual de check-in para uso interno da recepção.\n2. Container para rodar a solução nos dispositivos móveis (tablets) da recepção.\n3. Permitir que utilizadores / convidados externos façam o check-in anonimamente antecipado de casa num hotsite.",
        "options": [
            "1. Canvas App | 2. Power Apps Mobile App | 3. Power Apps Portal (Power Pages)",
            "1. Model-driven App | 2. Web Browser | 3. Canvas App",
            "1. Xamarin App | 2. Dynamics 365 for phones | 3. Model-driven App",
            "1. Canvas App | 2. Tradicional Desktop App | 3. Power Apps Portal"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão foca na escolha da ferramenta arquitetural correta para cada persona (Funcionário vs Convidado).",
            "papoReto": "1: Para criar uma tela bonitinha com a cara da sua empresa pra recepção, usamos o Canvas App. 2: Os funcionários rodam esse Canvas dentro do aplicativo 'Microsoft Power Apps' no tablet corporativo. 3: Visitante não tem licença sua de uso interno e nem login! Pra visitante preencher dados de fora, a Microsoft oferece o Power Apps Portal (Sites externos).",
            "respostaCerta": "1. Canvas App | 2. Power Apps Mobile App | 3. Power Apps Portal",
            "puloDoGato": "Canvas App = Design livre e personalizado. Power Apps Mobile = Container nativo/Player para rodar apps no tablet/celular. Portals (Power Pages) = Única forma de usuários externos à organização e anônimos interagirem ativamente preenchendo o Dataverse via nuvem web.",
            "cascasDeBanana": [
                "Model-driven App para convidados: Impossível! Ninguém sem licença paga e login de Azure entra em Model-driven.",
                "Xamarin App: Trata-se de código puro nativo (.NET). O exame e plataformas foca em soluções No-code Low-code."
            ],
            "dicaOuro": "Captar dados de Anônimos e Externos sem login = Power Apps Portal (Power Pages). | Design customizável = Canvas App."
        }
    },
    {
        "id": "q187_topic1",
        "text": "Você está projetando e encomendando a criação de um Hotsite em Portal para um resort gigante. Trata-se de uma interface em 'Power Apps Portal'.\nQual deve ser compulsoriamente a fonte de dados matriz (Data Source) obrigatória atrelada na topologia desse Portal?",
        "options": [
            "Microsoft Dataverse (Common Data Service)",
            "Microsoft SharePoint List",
            "Microsoft Azure SQL Database",
            "Microsoft Excel em Nuvem"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conceito estrutural sobre a fundação obrigatória dos Power Apps Portals (hoje conhecidos como Power Pages).",
            "papoReto": "Ao contrário dos Canvas Apps (que você consegue ligar numa planilha de Excel pelo OneDrive e fazer a festa), o Portal é literalmente uma casca robusta montada no teto de banco de dados nativo da Microsoft. Ele só existe, só respira e só roda se os formulários virem do Dataverse.",
            "respostaCerta": "Microsoft Dataverse",
            "puloDoGato": "O Power Apps Portal é um website renderizado diretamente via metadados extraídos de visualizações, dados e formulários arquitetados previamente NO Dataverse. Ele não possui conectores flexíveis para Excel ou SQL como fonte relacional primária.",
            "cascasDeBanana": [
                "Azure SQL Database ou SharePoint: Podem agir de backend para Canvas, mas Portals carecem intimamente do motor relacional (Forms, Views e Roles) residente da base C.D.S. (Dataverse)."
            ],
            "dicaOuro": "Lembre-se: 'Portals / Power Pages' vivem e respiram exclusivamente o Oxigênio do Dataverse. Sem Dataverse ativo, sem Portal."
        }
    },
    {
        "id": "q188_topic1",
        "text": "Sua corporação construiu um chatbot robusto para tirar dúvidas. Agora, numa segunda fase do ALM, você precisa incorporar esse chatbot (FAQbot) numa nova Solution geral de comunicação da equipe e ativá-lo no canal da empresa.\n\nQuais ações exatas você deve realizar sequencialmente na estrutura?",
        "options": [
            "1. Importar o chatbot Existente para dentro da Solução | 2. Configurar os canais adicionais do FAQbot no painel de Publicação (ex: Teams).",
            "1. Criar uma app englobadora do zero | 2. Adicionar o chatbot via iFrame oculto nela.",
            "1. Recriar um novo chatbot por Solution | 2. Clonar as lógicas usando os Dataflows antigos.",
            "1. Configurar Canais no Teams local | 2. Migrar os diálogos criando um Package autônomo."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Gestão do ciclo de vida de soluções voltada a integração dos Chatbots / Power Virtual Agents em Soluções (Solutions) de Maker Portal.",
            "papoReto": "É como colar uma figurinha que você já tem num álbum. O robô já existe e está operante por aí. Para você empacotá-lo bonitinho na Solução da equipe, você usa a ação óbvia do Maker Portal: \"Add Existing -> Chatbot (Importar Existente)\". E pra ele aparecer lá na telinha do Microsoft Teams da galera depois? Só ir nas configurações do bot e ligar o 'Canal (Channel) do Teams'.",
            "respostaCerta": "1. Importar um chatbot existente (Add existing) | 2. Configurar os canais e o FAQbot no Microsoft Teams.",
            "puloDoGato": "Chatbots/Virtual Agents no Dataverse obedecem às arquiteturas clássicas de Componentes de Solução. Para integrar recursos finalizados a soluções holísticas usamos os fluxos canônicos de importação de recursos orgânicos já ativos.",
            "cascasDeBanana": [
                "Criar um aplicativo englobador: Seria inviável gerar um app do zero apenas para expor os links de webchat embedado ao Teams, fugindo das integrações limpas de tenant."
            ],
            "dicaOuro": "Adicionar uma peça que já existe a uma 'Solution' oficial = Sempre escolha 'Adicionar Existente' (Add Existing)."
        }
    },
    {
        "id": "q189_topic1",
        "text": "Uma filial sua está planejando construir robôs de serviço. No painel mestre de criação, você está desenhando ativamente um chatbot usando o Power Virtual Agents Copilot Studio.\nNo entanto, ao abrir o menu, você observa apavorado que o seu Ambiente (Environment) de negócios que você pretendia implantar o chatbot NÀO aparece como opção disponível na lista seletora de estúdio.\n\nO que você DEVERÁ fazer perante essa grave incompatibilidade?",
        "options": [
            "Criar e provisionar do zero um novo Ambiente em uma Zona Geográfica (Região) oficialmente suportada pela Microsoft para o serviço PVA.",
            "Converter duramente o seu seu ambiente atual de Produção para Sandbox com finalidade de desbloqueio.",
            "Alterar administrativamente a região e idioma principal nas configurações base do ambiente Dataverse atual nas configs.",
            "Abusar do portal Admin Mestre e forçar atribuição estrita de licenças PVA Plan 2 individualmente aos Environment Makers."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Focada nas limitações geográficas rigorosas dos Data Centers que afetam serviços complexos baseados em IA conversacional (PVA/Copilot).",
            "papoReto": "Imagina tentar sacar dinheiro no Banco e o caixa eletrônico do seu estado não tem a tecnologia pra ler digital? A mesma coisa no Azure. A Microsoft tem 'Países (Regiões)' no Azure que não possuem todos os equipamentos gigantes de IA pra rodar Robôs. Se o seu ambiente da empresa foi criado tipo na 'Região Antártida' e lá não tem suporte, o nome da sala literalmente SOME. Não tem como \"mudar o endereço\" de um ambiente! Tem de criar outro Ambiente novo sediado numa Região boa (tipo EUA) e rodar por lá.",
            "respostaCerta": "Criar um ambiente em uma região suportada (EUA).",
            "puloDoGato": "Nem todas as regiões nodais do Azure/Dataverse suportam o provisionamento e o workload de motores cognitivos (AI Builder, Power Virtual Agents). É tecnologicamente restrito e impossível mudar a Região Geográfica core de um Tenant/Environment Dataverse após ele ter finalizada sua compilação e criação física.",
            "cascasDeBanana": [
                "Alterar a região do ambiente: Impossível. É a mesma coisa que tentar arranhar o servidor do chão do país vizinho e por debaixo no seu. Cria-se outro.",
                "Licenças/Privilégios: Sem a existência real da estrutura geográfica, não importa quanta licença cara for comprada, o ambiente não constará nas opções."
            ],
            "dicaOuro": "Nome do Ambiente sumiu no menu de criar um Chatbot do nada? = Problema Geográfico do Azure (A região que ele foi criado não suporta bots AINDA)."
        }
    },
    {
        "id": "q190_topic1",
        "text": "Você está criando um sofisticado fluxo interativo conversacional de atendimento ao cliente usando Chatbot (Power Virtual Agents).\nA conversa exigirá múltiplos tópicos diferentes cruzados. \n\nNo processo, a IA precisará capturar obrigatoriamente um valor chave recolhido em um simples tópico inicial na saudação da conversa (ex: 'O Nome Próprio do Cliente') e arrastá-lo em memória pra usá-lo ativamente preenchendo as frases em tópicos e assuntos subsequentes 30 minutos depois.\n\nQue escopo de Variável oficial em IA você deve configurar pra salvar esse nome?",
        "options": [
            "Variável Global Nível Bot (Bot-level Variable).",
            "Variável Temporal Nível Tópico (Topic-level Variable).",
            "Variável Extrativa Nível Contextual Transversal (Context Variable).",
            "Variável de Escopo Dinâmico Floculado."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Teste fundamental no Power Virtual Agents sobre controle e persistência de dados em memória.",
            "papoReto": "Pense na 'Variável de Tópico' como sendo um cara super esquecido. O Cliente falou 'Meu nome é André' no tópico 1. A Variável de Tópico guardou. Aí o papo muda pro Tópico 2, e o robô diz 'A propósito, qual era seu nome?'. Frustrante, né? Pra consertar isso você bota o Nome do cara na Variável Nível BOT! Ela é o 'cérebro' do robô, guarda e arrasta a fofoca entre todo e qualquer assunto (Tópicos diferentes) até que ele aperte pra encerrar a chamada toda.",
            "respostaCerta": "Variável nível Bot (Bot-level variable)",
            "puloDoGato": "A engine do Power Virtual Agents expõe as variáveis de escopo restrito (Topic variables) que sofrem Garbage collection e morrem ao término isolado da timeline do tópico. Já as variáveis globais da engine ('Bot-level Variables') permitem o cache e a persistência cruzada the Session-Storage para roteamento lógico condicional e resgate orgânico de Strings (Nomes de clientes) trans-tópico.",
            "cascasDeBanana": [
                "Variável Contextual: Usadas essencialmente na ponte externa (Ex: Passar parâmetro oculto da janela do chat do seu Site Web nativo entrando pro chatbot), não é o escopo ideal focado dentro do mapeamento puro cross-topic listado."
            ],
            "dicaOuro": "Precisa lembrar de dados e nomes entre assunos (Tópicos diferentes) durante uma mesma ligação de robô? = Armazene na Variável de Nível do BOT."
        }
    },
    {
        "id": "q191_topic1",
        "text": "Você deve modernizar formulários implementando componentes vivos de 'Regras de Negócio' criadas no Dataverse para atingir sequencialmente 3 os seguintes objetivos e automatizações no negócio:\n1. Objetivo A: Você deseja impedir a edição bloqueando duramente a coluna.\n2. Objetivo B: Você deseja disparar a lógica matemática perguntando se o salário foi maior que R$ 10.000.\n3. Objetivo C: Você deseja usar o CNPJ já digitado para sugerir gentilmente um botãozinho com um Autocomplete de 'Estado' ao usuário na UI.\n\nQue componentes estruturais da Regra de Negócio você clica e arrasta para a tela para concluir isso nesta ordem, respectivamente?",
        "options": [
            "1. Ação (Action) | 2. Condição de Trigger (Condition) | 3. Recomendação Flexível (Recommendation).",
            "1. Recomendação | 2. Ação Reativa | 3. Condição Implícita.",
            "1. Condicional de Ocultar | 2. Sugestão Interativa | 3. Ação Reversa.",
            "1. Ação Trava | 2. Recomendação Condicional | 3. Condição Disparo."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Dissecação atômica da anatomia condicional que constrói dezenas de Business Rules (Ação, Condição e Recomendação).",
            "papoReto": "Você é dono do pedaço por partes: \nO 'Botão Condição' é a Pergunta: 'Salário é maior que X?'. (Se). \nO 'Botão Ação' é a ordem ou bloqueio forte e definitivo: 'Bote Asterisco e tranque/bloqueie esse campo e proiba a pessoa de mexer!' (Faça). \nO 'Botão Recomendação' é aquele estagiário do clipe do office te avisando e sugerindo com uma lâmpada amarelinha 'Ei chefe, notei sua cor favorita, que tal aplicar neste quadrinho aqui?'. A pessoa na tela não é forçada a aplicar, é só Recomendação.",
            "respostaCerta": "1. Ação (Action) | 2. Condição (Condition) | 3. Recomendação (Recommendation)",
            "puloDoGato": "A construção imperativa Dataverse assenta em lógicas ramificadas. Gatilhos de validação base (`Condition SE/Então`), execuções de UI (`Action: Block Field, Hidden Field, Set Value, Required Field`), e os fluxos suaves de UI (`Recommendation control`) que levantam um Pop-up lateral de engajamento permitindo overwrite não compulsórios.",
            "dicaOuro": "Trancar um campo = Add Action. | Perguntar e Fazer o teste de valores do gatilho 'SE' = Add Condition. | Mostrar Lâmpada Azul de 'Dica' sugerindo o usuário a clicar e autocompletar sem obrigar = Add Recommendation."
        }
    },
    {
        "id": "q192_topic1",
        "text": "Um executivo sênior criou um belíssimo relatório rico no MS Power BI Desktop e publicou a aba ativa dele no ecossistema (serviço web PBI).\n\nEle o chama e relata que quer que aquele gráfico belíssimo apareça embebedado como um Azulejo / Mosaico estático (Power BI Tile) bem no coração e da entrada diária do Aplicativo Operacional Model-Driven da Microsoft que a equipe usa.\n\nQuais são as exatas quatro ações cirúrgicas em ordem cruzada sequencial rigorosa obrigatórias pra fazer aquilo despontar vivo na App final?",
        "options": [
            "1. Fixar o visual num Dashboard do site do Power BI (Pin) -> 2. Compartilhar/Dar Acesso a esse Dashboard ao Time -> 3. Ir no Dynamics App Model-driven abrir painéis e Criar um Dashboard Pessoal lá dele -> 4. Adicionar Mosaico lá no app e apontar pra nuvem.",
            "1. Construir e gerar o Dashboard dentro da App isoladamente -> 2. Habilitar Power BI nos Settings Globais -> 3. Fixar Mosaico no local Pinned List -> 4. Share App.",
            "1. Selecionar segurança Dataverse -> 2. Criar e levantar o Dashboard global na web -> 3. Enviar relatório ao PBI cloud -> 4. Dar privilégios C-Level.",
            "1. Adicionar o Mosaico cru no Formulário e preencher GUID -> 2. Injetar Dashboard e apontar URL -> 3. Fixar IFrame oculto no Form -> 4. Compartilhar global M365."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Governança e Fluxo de trabalho de consumo de Embedded Power BI no Dataverse UI interativa.",
            "papoReto": "É longo demais, mas eu te ensino numa pancada só! O Dynamics (Power App Model Driven) é 'chato': Ele não consegue simplesmente 'ler um Rélatorio Cru' direto do seu link do Power BI assim sem amarras. Ele só aceita bater papo se for de painel pra painel (Dashboard pra Dashboard). Então a engenharia exata e macetosa é: \n1. No PowerBI na nuvem, você clica no cantinho do gráfico e gruda ('Pin/Fixar') ele dentro de um 'Dashboard Pessoal' seu do lá PowerBI. \n2. Dá a permissão pros seus colegas pra galera toda não tomar tela de erro. \n3. Vem no Dataverse Apps e cria o seu Dashboard de entrada nele. \n4. Lá DENTRO do App você finaliza as engrenagens colocando o botão 'Adicionar Mosaico PBI', e mágica: seu gráfico tá lincado em definitivo!",
            "respostaCerta": "1. Pin Dashboard remoto -> 2. Share remoto -> 3. Create app dashboard -> 4. Add app tile.",
            "puloDoGato": "A impertinência desta questão é garantir que o criador não confunda `Reports (Relatórios)` com `Dashboards`. A conexão e integração cross-platform para consumir e projetar PowerBIs em PowerApps exige a fixação (Pinning) obrigatória do Report Visual convertendo-o num estático e universal `Tile Data Dashboard componente` do lado do PBI Service precedentemente à invocação dentro do System Model-Driven Platform.",
            "cascasDeBanana": [
                "Afastar a Inserção Crua de IFRAMES: Antigamente o povo pegava o URL de Embebed nativo restrito do PBI e colava em Web-resources ou iFrames no formulário - gambiarra absurda hoje, que ignora as engrenagens responsivas do portal System e causa Data Leaks."
            ],
            "dicaOuro": "Power BI para Mosaico da Power Apps: Report -> Fixado no Dashboard PBI - > Permissões M365 -> Dashboard no PowerApps consumindo o link final."
        }
    },
    {
        "id": "q193_topic1",
        "text": "O financeiro reprovou sua arquitetura e orçamento do Dynamics apontando os altíssimos picos insustentáveis de custos no Azure.\nTrês meses investigando apontaram e revelaram o óbvio: a equipe comercial desavisada estava fazendo e subindo upload indiscriminadamente de milhares de anexos pesados massivos em PDF e Plantas Baixas amarrando-os cruamente aos Contatos de clientes.\n\nQual recurso complementar gratuito e nativo de baixo custo Microsoft você deve sugerir a Pleno Pulmões a companhia ativar imediatamente para varrer esse lixo da base principal pesada?",
        "options": [
            "Ativar a integração nativa com o portal arquivista Microsoft SharePoint (SharePoint Integration).",
            "Ativar a integração de rotina e salvamento com fluxos Microsoft OneDrive for Business.",
            "Habilitar e escalar compulsoriamente os blocos corporativos anexos Microsoft OneNote.",
            "Adquirir com cartão e aumentar fisicamente as capacidades em Teras do Microsoft Dataverse File Storage."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Governança de custos e best practices corporativos com o Dataverse Storage Limits (Limites de File/DB Storage). O terror financeiro da prova.",
            "papoReto": "Se alguém colocar um arquivo PDF de 5MB por engano no Banco Relacional Dataverse (Banco de Dados Ouro), esse Giga vai te custar muito, absurdamente caro pra Microsoft no fim do mês da fatura! Tem muito espertalhão gastando os preciosos limitados Terabytes do Banco guardando 'Boleto' (arquivo inútil e parado) nas anotações soltas dos contatos! Como acabar com a sangria dos cofres? Simples: Existe uma casinha gigantesca e absurdamente barata no Windows focada para armazenar arquivos em poeira! Liga logo nativamente a Integração com o 'SharePoint Document Integration'! Toda aba Anexos nos seus Contas pulará do CRM e será salva lá pra base giga do Sharepoint, salvando limite de Tabela do Dataverse na mesma hora.",
            "respostaCerta": "Ativar Integração Arquivista com o Microsoft SharePoint.",
            "puloDoGato": "Dataverse (Database storage) é computação relacional transacional e premium. Ao exaurir sua métrica em Storage de `File` contido no locatário por anexos avulsos e inativos em subgrids (`Timeline Notes / Attachments`), o Custo de Overrage dói no orçamento da Licença. A `Virtual Document Integration` padrão da Dynamics joga transparentemente O Peso morto e de custódia pro ECM do `Sharepoint Online Limits` do Tenant desonerando absurdamente todo CRM Dataverse subjacente.",
            "cascasDeBanana": [
                "OneDrive e OndeNote - Confusão da prova: O OneDrive for business é essencialmente reservado e blindado de fábrica para a Arquivagem Privada Solitária Pessoal não exposta. O SharePoint é que constrói dezenas de pastas colaborativas hierárquicas que pertencem aos times e clientes corporativos ativamente."
            ],
            "dicaOuro": "Cliente reclamou de Extrapolar o armazenamento (Storage caro de Base Dados) e disse que era culpa de 'Guadar documentos do word grandes d+ no Dataverse' = Descartea Custo Extra! Migre para 'SharePoint File Document Integration'."
        }
    },
    {
        "id": "q194_topic1",
        "text": "Em um requinte luxuoso da Diretoria, o oposto de nossa situação tradicional ocorreu: você agora precisa desenvolver uma telinha visual customizável rica em botões (um Canvas Power App de contatos) para ficar engatado visualmente lá dentro, de forma bela, nos cantos do painel rico em gráficos do BI Microsoft Power BI global.\n\nLá em cima, com as engrenagens abertas, exposto de canto pro CEO assistir os dados, quais passos e as 3 ações iniciais obrigatórias nativas de estúdio devem ser executadas em sequência limpa para orquestrar isso ao vivo?",
        "options": [
            "1. Ligar ao banco respectivo do Dataverse a partir do PBI Desktop ativo | 2. Selecionar na lupa de lista os campos e dimensões necessárias lá | 3. Inserir gloriosamente o objeto visual oficial de Power Apps cravado no seletor esquerdo do relatório final.",
            "1. Publicar duramente app empacotada no ecossistema Teams | 2. Criar painel Dashboard Global no serviço PBI | 3. Importar do Excel.",
            "1. Injetar com código App isolada direto no Power BI Desktop Canvas base | 2. Associar Relacional com Gateway de Atualização On-Premise | 3. Partilhar relatórios para Guest accounts.",
            "1. Escalar PowerApps em Portal Pages e engrenar em Mosaico | 2. Re-Exportar via iFrame ao Sharepoint WebPart | 3. Publicar ao Office."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "O inverso situacional complementar da questão q192. Agora você embute Canvas (App) DENTRO de um Power BI Report/Visual (Inbound PowerApps Canvas).",
            "papoReto": "Como você bota o botãozinho mágico de aprovar contas de despesa do aplicativo lá no meio do gráfico de Vendas do ano (Power BI)? É fácil e até sem código: Você já vai ter pegado e linkado o esqueleto do Power BI conectando ele ao Dataverse (Os dados fonte mestre). Quando você clica nesse PBI no cantinho direito das 'Visualizações' (do ladinho que você bota gráficos de barra / pizza), a Microsoft chocou um ícone mágico ali chamado 'Objeto Visual Power Apps' (PowerApps Visual Box). Você clica, joga ele na tela e liga os campos. O bicho clica e pede pra você criar um app canvas fresquinho interativo ou embute um pronto! Show!",
            "respostaCerta": "1. Ligar DB PBI ao Dataverse -> 2. Pinçar e selecionar os dados p/ a Visualização -> 3. Inserir via o botão especial 'Visual' do Power Apps.",
            "puloDoGato": "Inserções de Componentes do sistema em Reports Power BI requerem o alinhamento centralizador de conexão ao mesmo Datasets Common fonte. Se o Visual custom do PA não referenciar a exata injeção de Fields/Dimensions de Tabela subjacente pré-carregada do modelo Relacional do Desktop PBI Report, as integrações assíncronas falham.",
            "dicaOuro": "Quer colar o App no cantinho do Power BI do Chefe como se fosse um filtro dele? = Selecione banco e clique no 'Icone Exclusivo Visual das Power Apps' dento do menu de Visuais normais (PBI Visualizations Pane)."
        }
    },
    {
        "id": "q195_topic1",
        "text": "Sua grande rede comercial varejista adotou políticas ferozes de segurança global e decidiu proibir estritamente que os simples utilizadores (Sales People) abram portas erradas apertando e invocando desastrosamente os menus rotineiros em massa do Automate corporativo.\nResumindo: Você deseja e tem a ordem direta de suprimir/esconder de todos sem deixar rastros e apagar formalmente a visão o Botão nativo escrito 'Fluxos' (Flows Button/Action) que nasce cravado nas barras superiores dos comandos do CRM base System UI Dataverse.\n\nComo e qual o único repositório/bunker e abas você entra pra arrancar universal e duramente essa funcionalidade dos apps em 1 segundo?",
        "options": [
            "No labirinto das engrenagens arcaicas Definições de Sistema Mestras (System Settings) > Aba de Personalizações da UI.",
            "No Portal e Modificador do Mapa do Site e do Seletor Global de App (Sitemap XML).",
            "No componente orgânico solto da Solução Padrão Global (Root Default Solution Component XML).",
            "Engrenado nas regras base ocultas do botão (Ribbon Workbench Button Action tab)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Focada nas clássicas heranças operacionais do CRM. Bloqueio visual nativo (Disabling Embedded Automation capabilities) e não na segurança lógica de acessos em si.",
            "papoReto": "Aquela barra gigante do Power Apps lá em cima dos formulários! Como todo cidadão acha que é Dev agora, o botão 'Fluxos' (Automate Flows) é uma tentação, e a galera fica fazendo robôs idiotas que mandam 30 mil e-mails lixo rodando pra clientes ativados sem querer. Para poupar esse trabalho burro de esconder botãozinho um por um arranjando Ribbon doida customizada com código. Você corta a encrenca no 'Painel mestre do disjuntos': Vai na página clássica (aquelas do fundo parecidas com Windows velho) em 'Configurações de Admin' -> Clica em Sistema (System Settings) -> E vai ver a aba lindíssima de Configurações de Personalização. Lá está escrito a lápis a glória da ordem suprema: _Mostrar Função Do Microsoft Flow (Flow Button Enabled)_? Aperte o 'NÃO'! Os fluxos desaparecem pros trouxas usarem todos de uma vez em todos os formulários num piscar mágicos limpos do sistema na nuvem Microsoft.",
            "respostaCerta": "Painel Definições Oculto Clássicas de Sistema (System Settings) > Guia de Personalizações.",
            "puloDoGato": "Features embargadoras globais (Skype / Teams integration status globais, Autonomy over embedded Flow creation capabilities, Bing Maps enabled view status locationing) operam historicamente fora da caixa do Maker Modern. Repousam duramente no Global `System Admin Settings window` (Configurações Org do Ambiente / System Settings na UI classic). Desativá-la aqui arranca globalmente via command bar e context menus o ribbon component e limpa todos os Model Driven apps do ambiente base cruzado.",
            "cascasDeBanana": [
                "Ribbon Workbench (Third party tool): Se o candidato sugerir isso ou Sitemap XML, quer dizer que ele usou uma Bazuca para matar mosca (customizando as Ribbons arduamente manualmente quebrando no ALM solution). Usar chave limpa de Sistema mestre (System Settings) é estritamente o correto para os globais."
            ],
            "dicaOuro": "Quer varrer, calar e 'Sumir Proibir Globalmente' o ícone/Botoes Automáticos do painel que disparam MS Flow (Power Automate) pras pessoas pra valer? = Vá para o antiquado Menu das engrenagens Mestre de Administrador / 'Definições do Sistema / System Settings'."
        }
    },
    {
        "id": "q196_topic1",
        "text": "A sua equipe incansável de vendas diária clama por soluções práticas para anexar orçamentos gigantescos (Megabytes), PDFs soltos, manuais da Samsung e planilhas inteiras ativamente na barrinha inferior e nos registros das contas corporativas correntes na rotina dos vendedores.\nNo entanto, os chefes foram cirúrgicos orçamentariamente: 'NÃO PODEMOS ter picos extras bilionários consumindo limites base Premium na nossa base faturável Terapabyte em nuvem (Dataverse Premium Memory Limit Capacity)'.\nTartamudejando, o Estagiário apavorado lançou na mesa da reunião uma solução arrojada mirabolante:\n\n-- 'Opa gente! Vamos apenas ativar o Botão Microsoft OneNote Integration em tudo então nos Accounts e Accounts Forms! Ele é barato, já tá embutido no O365, e aí todo mundo enfia Anexos soltos e Pdf gigante em formato livro lá dentro nas guias infinitamente. Custo Zero e o OneNote tanka e engole tudo por fora, Certo Chefe?'\n\nIsso resolve a dor de cabeça e soluciona o caso arquitetural corretamente a longo prazo?",
        "options": [
            "SIM (Proposta Certa)",
            "NÃO (Reprovar Proposta)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Casca de Banana extrema sobre OneNote limitations vs SharePoint document File management architecture baseada no Q193 exposto da prova.",
            "papoReto": "Demita o estagiário haha! Olha, a Microsoft botou o 'OneNote Integration' ativado pros Formatos do CRM para você bater um caderninho de rabiscos finos: anotar, pormenores, rascunhos de ata de reunião falada em telefone. Acabou... Ele NÃO foi estruturado massivamente ou arquitetad para virar o seu GoogleDrive gigante ou PenDrive infinito pra salvar 20 Gigas de propostas contratuais arquivísticas em alta resolução! A longo prazo o OneNote pesa, trava sincronização local das notas se poluido por bloat de Docs e arquivos estáticos gigantes atolados em blocos cruzes e quebra o sistema. O cara de Vendas que faz isso estressa, O único burro de carga oficial e robusto do ambiente M365 para atar anexos de arquivos mortos imensos economizando a matriz é O SharePoint!",
            "respostaCerta": "NÃO. É um desastre tentar embutir peso de arquivística no caderninho temporário de reuniões Onenote. Arquivo/Anexo = Migram-se ao portal do SharePoint.",
            "puloDoGato": "Diferenciação clara arquitetural corporativa mandante: Dynamics M365 `SharePoint Document Management Integration` resolve Storage Offloading Limits perfeitamente estruturando Sites por Conta criados na nuvem. Alternativamente, Dynamics `OneNote Notebook Integration` foca invariavelmente restrito de uso para Structured Free-Form Text, Meeting tracking e Rich text collaboration notes e anotações. Abusar da integração O-Note para jogar `Binary Attachment Files` de alto peso rompe o load de cache de notebook e não performa bem.",
            "dicaOuro": "Vendedores querendo botar anexos gigantes sem estourar limites caríssimos de MB? OneNote Não, Nunca!! OneNote é pra texto rico/rabisco bobo. Documentos PDF = Exclusividade e obrigatoriedade moral do SharePoint!"
        }
    },
    {
        "id": "q197_topic1",
        "text": "Você sentou com seu CTO para configurar exaustivamente com pinças a mágica avançada 'Controle de Grelha Dinâmica e Editável' (Custom Control / Editable Grid visual) empacotada solta para a Tabela 'Contato'. Esse componente vai permitir que um humano altere dez contatos duma vez em segundos em modo Excel sem a fadiga mental de entrar em form por form separados para mudar campos.\n\nConfronte, verifique e analise minuciosamente com Lógica True/False quais atitudes, campos soltos, regras e engessadas complexas o maldito controle consegue, por excelência de código da grelha, tankar (suportar e engolimentar com edições in loco) e responda de cima a baixo com rigorosa perfeição:\n\nRequisito 01: Você tenta Agrupar ativamente ou Ligar um Sort Ordenação Ascendente local pelas das colunas da visão atual. Roda liso?\nRequisito 02: Invoquei uma regra atômica (Business Rule) da tela e tentei mostrar um Popup Pop com erro estourando de validação e restrição violenta na própria linha atual. O grid tanka?\nRequisito 03: Dou de louco, aciono duplo-clique forçado bruto no mouse dentro da caixinha cravada da coluna que opera o 'Status da Coluna Calculada de Juros Fiscais base Financeira' (Calculated Field value formula). Tanka mudar manualmente esse resultado calculatório ao vivo da grade sem reflete-backend?\nRequisito 04: Me perco e tento invadir com dois cliques atômicos embutidos a edição nativa global do campo super Campo Composto de 'Endereço Final Múltiplo aglumerado' (Composite Address Field string concat). Consigo edita-lo lá pela subgrid por ele sem quebrar as pontas dele?\nRequisito 05: Essa engenhoca performática que acabamos de setar, irá quebrar pro CEO se ele resolver usar no Aplicativo Web App do Android/IOS por conta do dedinho touch no celular de madrugada? A grade fluida de células desanda sem o desktop mouse?",
        "options": [
            "RQ-01 (Ordena): Sim liso. | RQ-02 (Erro): Sim roda Liso | RQ-03 (Edita Valor da Calculadora): Negativo e Nunca. | RQ-04 (Mexe num campo Composto): Não suportado na Grelha. | RQ-05 (Mobile app friendly via app tablet): Sim, funciona suave.",
            "RQ-01: Sim | RQ-02: Não falha e corrompe BRs | RQ-03: Sim mudo. | RQ-04: Sim. | RQ-05: Não em mobile puro.",
            "RQ-01: Sim | RQ-02: Sim | RQ-03: Sim permite. | RQ-04: Não bloqueia. | RQ-05: Sim Suporta Tablet App.",
            "RQ-01: Não. | RQ-02: Trava | RQ-03: Positivo ativo. | RQ-04: Não suportado | RQ-05: Desktop Web ONLY"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Reconhecimento das fronteiras limitrofes cruas dos Power Controls Custom (Especificamente o Todo-Poderoso Component Editable Grids).",
            "papoReto": "Se quer matar uma questão gigantesca na lógica preste atenção nisso: Grelha (Subgrid do Excel ali nativa bonitinha e rápida) é vida! Você entra e consegue sim Agrupar as ordens, Colocar BR disparando os erros que são um luxo se errar algo, e até quem ta de iPhone tocando a tela nela (Mobile). Mas a glória para e o freio impõem barreiras em 2 coisas intocáveis que não são perdoadas na nuvem: \nBarreira 1: Campo Calculado (Calculated) ou RollUp. Se as formulinhas do Banco calcularam que '1+1 = 2'. E você quer ali de teimoso e querendo apelar clicar rápido na célula calculada pelo sistema central do painel e tentar escrever um '3' e forçar guela no cell Edit? O banco morre de Lógica! Colunas calculadas são eternamente protegidas por Read-Only natural, não importa para qual visual ela foi espelhada. \nBarreira 2: Tentar fatiar 'Campo Composto (Nome Completo)'. O banco precisa das tripartes separadas (1 rua + 1 bairro + 1 cep) em pedacinhos certinhos pra atualizar, se vc clicar brutalmente por cima ali na subgrade atirando a mão em célula conjunta de forma grosseira sem ir ver os campos esguios da raiz ele também vai berrar e engasgar duro por ser Read-Only complexo.",
            "respostaCerta": "Ordem Certa: Sim (Agrupa) | Sim (Regra de Negócios) | Não (Campo de Cálculo Fechado) | Não (Campo Completo Composto Fechado) | Sim (Bate nos tablets suavemente).",
            "puloDoGato": "Cuidado brutal na prova focando nos limites irrefutáveis da 'Editable Grid custom control features': `Read-Only components` como State fields (Inactive records blocks), Customer Lookups base, Roll-Up aggregation fields formulas, Calculated field engine results string, e Fields do tipo Composite string format não renderizam e perdem o slot mágico de Edição inline In-Cell de UI. Por outro lado, `Client-side events validations via BR rules enforcement` formam e triggam pop-up na grelha e a grid herda responsividade Device-agnostic.",
            "cascasDeBanana": [
                "Business rules falham pro Mobile em Grids: Completamente errado. Controles da nova plataforma Microsoft são Model Driven UI responsivos nativamente com Regras de Negócios (Business rules scope) acompanhando nativamente Entity Layers (se declaradas base) mesmo no App Dynamics."
            ],
            "dicaOuro": "Grelha e Tabela que Edita como o Excelzinho Rápido (Editable Grids UI Custom panel): Pode ordenar células e agrupar filtros e soltar erro de BR? Óbvio que sim, manda pau (É super esperta)! Funciona em app pelo cel? Claro e suave! \nPosso brincar e teimar de alterar os campos lógicos Complexos (Campo Calculado q o DB somou sozinho ou Campo Composto grande Address)? JAMAIS, essas duas porcarias são blindadas a ferro e fogo como Only-Read."
        }
    },
    {
        "id": "q198_topic1",
        "text": "Em um requinte e exigência luxuosa da Auditoria de Licenças de sua Sede, a equipe central ordenou que você restrinja fatalmente e proíba sumariamente e puramente o acesso leviano a base física do ambiente isolado gigantesco que você batizou de 'Ambiente Sandbox Global de Treinos do Galpão'.\nA regra ordenou perenemente garantir aos diretores de T.I. que o batalhão operacional e as secretárias normais da operação nunca usem nada e só pisem em cima do disco ativo do 'Ambiente Principal Operacional Limpo de Produção'.\n\nQuais táticas cruéis cirúrgicas globais conjuntas engatilham e cumprem em primeiro degrau o travamento da arquitetura na exclusão exata pra blindagem do Ambiente base que você criará isolando do portal de quem loga perfeitamente sem fadiga mental em regras no CRM avulsas?",
        "options": [
            "Porta 1: Microsoft 365 Admin Center global. | Porta 2: Trava atrelada e roteada bloqueantes via Grupos de Segurança Mestre (Security Groups M365).",
            "Porta 1: Pela raiz isolada via Dynamics 365 Sandbox Cloud Root. | Porta 2: Configuração e deleção manual de Pacotes Limite e Licenças Livres Soltas (Licenses and Free Pass).",
            "Porta 1: Tela UI Estrela do Criador Central (Power Apps Studio Canvas). | Porta 2: Retirada severa via Atribuição Fim a Fim cruzada de Funções de Segurança (Security Roles Removal Uniques).",
            "Porta 1: Tranca Oculta Isolada via Azure Portal Main Mestre Admin. | Porta 2: Injeção Restritiva e Bloqueio Duro e Cruzado via Painéis de Conditional Access Policies Mistas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Gatekeeping primordial macro arquitetural para Ambientes Completos Instanciados do Locatário Dataverse (Isolamento Massivo M365 Security Groups).",
            "papoReto": "Imagina um condomínio com duas Academias: A oficial e chique e de Produção (Prod), e a da reforma na bagunça debaixo dágua na areia de treinos Sandbox. Como você proíbe e manda barrar 500 moradores xeretos normais chatos entrarem nessa porta pra espiar todo dia de graça sujando ela de dados testes que tão soltos la fora sem perder duas horas em portal chato de regras de CRM interna? Crie um 'Grupo Fechado de Elite de T.I. Devs' no seu Microsoft Global 365 (Portal Office). Vem na tela de administração lá na nuvem das Instâncias (Admin Center), arranca todo mundo e Atribui como \"Só entra esse Security Group fechadão ali!\" a sala Sandbox. Acabou... Simples. Nem a lista do ambiente aparece mais piscando no menu da galera quando entra pra trocar la em cima direita.",
            "respostaCerta": "Uso conjugado do Painel de Contas Microsoft 365 Admin Center operando com Grupos de Segurança rígidos das Contas.",
            "puloDoGato": "O Gateway Master Universal canônico em níveis de isolamento (Environment Access Gatekeeper Level) precede todas as alocações miúdas em Dataverse interna de `Security Roles` por app isolados. Este Firewall organizacional perimetral é executado e gerido formalmente ancorando intrinsecamente um `Security Group / O365 Grupo Segurança de AAD (Entra ID)` diretamente no painel das Propriedades de provisionamento (Edit/Properties Settings) da Instância/Ambiente operado via Power Platform Admin Center / Microsoft 365 AD.",
            "cascasDeBanana": [
                "Usar as Funções de Segurança do Dataverse - Cuidado na armadilha sútil: Privar e esvaziar manualmente as roles isoladas uma-a-uma dos utilizadores é ineficiente no locatário massivo, propenso a vulnerabilidades graves a cada novo deploy ou nova licença alocada pro Zé por engano. Associar a barreira do Grupo Entra-ID (Security Group) faz a filtragem inicial forte e pesada automaticamente sem overhead pra equipes inteiras cortadas fora."
            ],
            "dicaOuro": "Cadeado Cego na Porta Geral do Ambiente inteiro para cortar Acesso dos xeretos aos espaços Sandbox/Trial isolados = Entrelace o cadeado via M365 Admin Center vinculando-o cruzadamente por restrições da aba rica de 'M365 Security Groups' à instância alvo Dataverse."
        }
    },
    {
        "id": "q199_topic1",
        "text": "No calor frenético de um projeto, a área gerencial comercial arcaica chora que não quer soltar seus 2 programinhas de interface antigas (Legacy Software app base cruas de Windows Terminal 32x bits) de lançar contatos em listinhas.\nEles impuseram e berraram que você solte e construa um fluxo híbrido de robô que ativamente imite humano navegando, extraia duramente um texto específico piscando no fundo preto fixo dessa tela jurássica dos avós e traga isso pra nuvem pra alimentar a fila sagrada da intranet num portal limpo (SharePoint Online list) por Automate moderno.\n\nFocado num Desktop Flow da nuvem robótica de Power Automate Desktop, elenque o roteiro das Quatro Ações Ouro que você gravaria ativamente num fluxo de Robotic Process Automation pra dar cabo nesse demônio legado, em ordem:",
        "options": [
            "1: Dá Play 'Gravar' no Macro do robô da barra principal -> 2: Clica num clique mágico e aciona no seletor base robótico a Luta por Dados 'Select Text on screen (Selecionar texto na tela/Output extração)' -> 3: Bate o mouse fisicamente e circula em Laranja pinçando o bendito texto vivo desejado da janela -> 4: Mapeia o rótulo da extração batizando a string em nome ali salvando a Variável limpa 'Output Variable'.",
            "1: Injetar e Ligar conexão crua ODATA de SP-Cloud -> 2: Acionar Macro na UI -> 3: Digitar com teclado os campos simulando o dedo solto -> 4: Dá o stop e encerrar o robô.",
            "1: Chamar menu e ação fixa do menu PAD 'Get Text base crua string OCR' -> 2: Abrir na linha C# o prompt solto do velho Excel legacia -> 3: Acionar comando 'Copy Data clipboard' -> 4: Run Fluxo Cloud.",
            "1: Plugar robô Macro REC -> 2: Segurar Ctrl+C pro OCR da nuvem puxar no MS DOS manual Clipboard text select -> 3: Set Variable string -> 4: Salvar."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Teste da capacidade e domínio funcional do canhão prático de automações Low-Code de front da engenharia mecânica Power Automate Desktop (RPA Workflow Logic Output Capturing).",
            "papoReto": "Robô é burro, a gente que guia a mão cega dele! Se você pegou um App cinza podre e antigo dos anos 90 rodando que não tem API oficial com Azure.. Fim de jogo? Nada. A gente instala o Robô de área de Trabalho (PAD Desktop), Liga o botão pisca-pisca maravilhinho de gravar as suas coisas do Mouse, Abre o sistema sujo e aperta no menu dele pra dizer = O 'Robô de cá a cá, tá vendo aquele textinho azul pulando ali escrito Dinheiro$? Mandei Ativar a magia: 'Selecionar Texto Base no Ecrã Screen'. E aí eu sublinho tudo em cima do numero. Ai eu mostro esse prato pro Robô e encho o balde novo e digo = 'Guarde esse monstro todo sublinhado numa caixa de saída nomeada de SAÍDA-DADOS-VELHOS'. Ai a mágica flui inteira e essa caixinha é exportada lá pra nuvem novinha brilhar redonda pro chefe no painel do Sharepoint pra casar com a Tabela.",
            "respostaCerta": "Ação base Sequência Limpa: Dar Start p/ Gravação -> Menu de Action Outputs Base 'Select text target on screen' -> Destacar Data na tela -> Mapear 'Output/Variável Final'.",
            "puloDoGato": "A premissa da ferramenta Low-code RPA engrena e repousa base no `Action/Output Variables mapping capabilities`. O extrator do gravador macro embutido isola UI Elements do target legacy software (Windows 32 app elements tree objects). Ao mapear o elemento via bounding box ('Select text on screen'), a ferramenta encerra a bridge transacionando o valor bruto extraido em uma `Output Variable Node` tipada, tornando viável o Input Output subsequente paramétrico transitando globalmente pro Flow engrenado do seu Connector Premium de Cloud API PowerAutomate no Sharepoint Database nativo M365.",
            "cascasDeBanana": [
                "Ctrl+C (Clipboard manual actions commands): Usar clipboard ou digitação cega em macro de gravação (Send Keys delay base strings) torna a automação 'brittle' (quebradiça) correndo risco se falhas ou delays no OS estourassem o Focus perdendo o Dado pela metade! A leitura crua do 'Element UI Tracker Engine' apontando pra tela oficial via 'Outputs' cria e ancora uma leitura dura forte atracada a vida útil do elemento, 100% à prova de focus."
            ],
            "dicaOuro": "Como arrancar sangue e pescar e ler texto (OCR/UI Element Data) limpinho enxergado de app jurássico e enviar pra web/SP na nuvem? = Solte o Gravador ativo RPA PAD e ative a bússola dourada no painel de Outputs de Action chamada 'Select text on screen / Output String Mapping Variables'."
        }
    },
    {
        "id": "q200_topic1",
        "text": "Você se deparou com um grave surto do time de vendas que navega perdidamente na aplicação do portfólio rico operante nativo do CRM base 'Model-driven apps Microsoft'.\nOs chefes e vendedoras da loja reclamam chorando que, durante a visualização frenética do Perfil Global da Conta do Cliente X lá na aba matriz superior em uso, quando eles resolvem migrar e escorregar cruzado pro lado puxando a dita abinha limpa de Contatos atrelados Filhos ('Contato' Pela guia paralela chamada 'Registros Relacionados cruzados / Related Items'), eles abrem a telinha de listas e ficam embasbacados pois percebem vazias as células que a coluna mega necessária nomeada de 'Título Acadêmico Ocupacional das Pessoas' sequer desce e não está ali exibido em lugar nenhum na lista deles!\n\nSeja um cirurgião com seu crachá mestre, qual Visualização crua raiz matriz Base (Dataverse View Types) na tabela Filha e Oculta orgânica listada solta na Solução Arquitetural por você deve ser aberta e sofrer a adição das colunas esquecidas pro campo mágico surgir e ressuscitar no bendito lugarzinho pra sempre na Aba Oculta atrelada a Aba Conta Ouro deles solucionando o panico?",
        "options": [
            "Engrenagem de 'Visualização Clássica Associada Global (Associated Root Component View Base)'.",
            "Engrenagem focada e restrita de Visualização Mestra de 'Localização Rapida Base cruzada' (Quick Find Filter View).",
            "A Base matriz focada em Painel 'Visualização Padrão Base e Publica de Todos Ativos Soltos (Public Active Default Component View)'.",
            "Painel e engrenagem fugaz Visualização de Consulta Solta salva por usuário cruzada 'Localização Global e Avancada Fixa' (Global Advanced System Component Find View)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia a distinção e competência crítica do desenvolvedor a respeito do System Views Types e do context UI Navigation Model (Subgrids versus Associated Tab context) do Microsoft Dynamics Dataverse Architecture.",
            "papoReto": "Pare e imagine que todo Formulário Pai gigante carrega a prancheta de Filhos escondida colada atrás da sua estante com poeira. A prancheta se chama Aba de Registros Correlacionados Relacionados daquele cara atrelados em banco 1:N cruzado! \nQuando o cliente bota o mouse e clica no ícone 'Aba de Itens Relacionados' (Ali do lado solto da navegação de Contatos, Propostas Filhas, Faturas), uma Tábua e Grelha cheia de caixinhas desce rasgando a tela... O apelido que a Microsoft colocou e batizou no CPF dessa lista escondida oficial de herança não é View do João nem Tela de Busca!! É carinhosamente a dita engrenagem System Table Default Dataverse component cujo nome Oficial Baseado de System View é = 'Sua EXCELENTÍSSIMA VISUALIZAÇÃO ASSOCIADA (Associated View / Related View)'. Se você esqueceu lá atrás no seu portal de construtor de carregar os campinhos bonitos puxados soltos nela na edição pra dentro dela, fodeu pro chefe ver, os dados cravam na treva ocultos pro cliente!! Vá No portal, Edite e Adicione a coluna Título NA SUA RESPECTIVA E GLORIOSA 'Sub-Lista de Associada System View Base' e ganha bônus no dia sorrindo p tela.",
            "respostaCerta": "A aba orgânica embutida matriz e focada System 'Visualização Associada de View Oculta (Associated Global Target View)'.",
            "puloDoGato": "O gatilho e carregador arquitetural mestre atrelado umbilicalmente (UI Renderer Sub component engine) encarregado no framework nativamente para exibir context properties arrays de arrays the Relacionamento `1:N list context layout forms` operado via invocação do controle `Related Tab Navigation System Model (Navegação Relacionada Menu)` é unicamente espelhado pelo Dataverse via a metadada designada explicitamente por `Associated View Layout Array`.\nColunas ocultas aqui causam ausência na aba. Mexer em Public Default views atende navegação crua das SiteMaps laterais em Home Views mas não resolve navegação In-Form (1:N Sub Associated items view render).",
            "cascasDeBanana": [
                "Visualização Pública Padrão (Public Default Component Type): Pegadinha cruel matadora das massas esmagadas da Power Apps PL200! Ela conserta e mexe no painel central aberto ali no SiteMap pra todo mundo no Botao Mestre de Fora Inicial (Entrou na Conta Base Principal e Viu os Ativos/Todos Registros misturados num Mar de Tabela Solta sem Pai pra olhar). Porém NÃO AFETA em NADA as sub-lista atreladas escondidas das Guias e Cargas Embutidas sob a saia dos Relacionados Isolados dos Contatos baseados!"
            ],
            "dicaOuro": "Galera reclamou pra caramba sumindo colunas que faltavam nos filhos listados dentro lá da página/guia matriz enraizada na lateral/sub tab interna solta de um Formulário base chamado 'RELACIONADOS A MIM'? = Resolva fácil alterando direto a dita engrenagem oculta de nome 'Vish View Associada Oculta' (Associated System View)."
        }
    },
    {
        "id": "q201_topic1",
        "text": "Em um momento decisivo de ALM architecture org level, seu comitê global clama e implora pra que você garanta, sem medo de errar, arquitetar, plugar e consolidar vitalmente uma 'Regras purista estrita e massiva baseada e ramificada Lógica forte de Negócios (Business Logic Rule scope limit Base) engatilhada cravada de forma colossal. Ela DEVE e deverá obrigar, trancar e operar nativamente, respirar ativa, e rodar cruciante, sangrando ou não seu código contra o usuário em TODAS essas frentes isoladas: em qualquer interface dos front UI Model-driven apps internos da sede, saltando pro front em qualquer UI leve Canvas base dos celulares operados em Power Apps e não caindo pro limbo; e ainda por fim ela tem que garantir a travar as operações nos porões ocultos de qualquer chamada de Código terceirizada Base das Rest API Dataverse Call Integrations que o SAP mande por injeção oculta.\n\nQual é o nível oficial cruzado maciço isolado limpo de escopo (Base Execução System Setting Execution Scope Limiter Boundaries Dataverse) necessário a todo e maior nível, a marca que essa regra deve ser compilada restrita a para dominar a máquina base?",
        "options": [
            "A engrenagem Global mestre focada puramente ao Nível profundo Arquitetônico do Servidor e Dados Tabela Base Orgânica (Table Server Level Component Scope).",
            "A engrenagem base Limite em 'Todos os Formulários UI Universos de Tela (Forms Level UI Scope).'",
            "A engrenagem engessada Oculta restrita mestre isolada ao 'Dashboard Limit Global (Nível Base Integrations UI).'",
            "A engrenagem fugaz isolada e fragmentada atrelado no controle unitário do 'Formulário Inicial Específico Cru Unitario e Limitado a Views Globais'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Forte e colossal teste final vital sobre o limite engenhoso de `Domain Level Architecture Rules Execution Engine and BR Scope Layers bounds and rules constraints Limitations on DB Server tier.`",
            "papoReto": "Pensa comigo, cara da T.I.! Imagine que você faz a Regra: 'É PROIBIDO fechar e salvar propostas soltas se não pintar do preencher do campo X ali da tela!'. \nCaso bobo 1: Se você vai colocar o botão 'Regras só pros Formulários (All Forms/Specific form)'? Parabéns, no clique visual do Botão de Aplicativo bonitinho de UI o bagulho vai soltar erro bonito pro funcionário. MAS... no fundo, se de má fé o Robozinho das 3h da manhã do sistema externo ou código c# em background passar pelo portão e plugar via Rest API ali e tentar injetar forçado, o espertinho salva escondido o campo vazio porque a Regra era burra de só travar TELA bonitinha na cara das pessoas (Client Side)! \nSolução Foda e Matadora (A única blindagem Universal que segura pancada dos Scripts também cruzado com Canvas sem limites)? \nJogue essa mesma regra suja da Tela pro Subterrâneo Colossal de trás: Mude a regra brutal para trabalhar em Nível do Beco da 'Tabela Servidor Matrix (Table Scope/Entity)'. Aí o chicote estrala no banco Central de Dados duro de tras Server-side. Nem Deus injeta arquivo bugado pela API sem o campo! Trava pra Todo canvas, trava no mobile, trava até o DEV chato forçando em API do backend Dataverse com falhas.",
            "respostaCerta": "Engrenagem Limítrofe Atrelada unicamente cruzada na Arquitetura Lógica de 'Tabela do Servidor Matrix' (Table Execution Server Root DB System Boundary Scope).",
            "puloDoGato": "Dominar Boundary constraints Layers Model de BR. \nOs Limiares do Escopo `Table (antigo escopo de Entity Boundary level execution)` são o supra sumo master canônico da Microsoft. Eles ditam, cravam e transacionam imperativamente a injeção a lógica em camada bruta assíncrona Server-Side Tier (Camada de Banco). Isso coroa perfeitamente e propaga invariavelmente (data validation execution level enforce) independentemente da interface do Frontend base/API/Canva/Mobile/SAP. Se setada meramente no escopo Client-Side Level (`All Forms` bound ou `Form` scope bound event DOM load), ela vira e expira à mercê da GUI e não roda nas injeções CRUD em background em Server-side Code execution calls.",
            "cascasDeBanana": [
                "Todos os Formulários Globais Cruzados Universais Cruzados: Pegadinha violenta que derruba Dev com ego alto. Você acha que trancou tudo, mas só trancou UI Views dos client-side Model Driven forms. Deixa escancarada grave falha em API Dataverse injeção Backend e cega completamente nos ambientes isolados Canvas Forms soltos fora de Model Forms subjacentes."
            ],
            "dicaOuro": "Lógica Matadora Inevitável: Fizeram sua cabeça dizendo 'Precisa cravar na lei pra não pular nem burlando a chamada oculta pro app Mobile nem pro Dev chato abusando e batendo C# na API no escuro escondido'? = Arraste e Mude o bendito Escopo no canto ali da tela do Formulário e solte ele na trava mais funda atômica: Jogue no Escopo Monstro de 'Tabela Server Side Enforcement Base Limite'(Table)."
        }
    },
    {
        "id": "q202_topic1",
        "text": "Você precisa projetar o processo de registro (login inicial e onboarding) por e-mail para o portal focado para clientes de um resort.\n\nAmarrando o banco do CRM para autenticar via Portals, quais 2 soluções ou táticas arquitetônicas você deve configurar para abraçar cada requisito listado?\n\n1. O fluxo e método de resgatar o código de convite (invitation code redemption) que você enviará visando facilitar a UX e atritar ao mínimo o cliente sem pedir digitação.\n2. O método para forçar ativamente a validação e garantia real de que o e-mail do titular logado do usuário (dono legal) do endereço é real.",
        "options": [
            "RQ-1: Incorporar o código de convite mágicamente disfarçado no hiperlink URL de e-mail | RQ-2: Registro pelo próprio clique no envio convite (Invitation code sign-up)",
            "RQ-1: Exigir um fluxo App Power Automate preenchendo automaticamente o campo numérico | RQ-2: Exigência em cascata de Autenticação de dois fatores por SMS.",
            "RQ-1: Despachar Nome de Usuário final cravado e Senha Temporária por arquivo anexo excel | RQ-2: Validar por token via federação Microsoft Entra ID restrito.",
            "RQ-1: Cravar as permissões por script fixando os Ids no Portal de Admins | RQ-2: Instigar forçosamente login via Provedor Social nativo cruzado do Google/X."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda o canônico engrenamento em fluxo de onboarding externo com autenticação cruzada nativa de Web Portals (Power Pages).",
            "papoReto": "Seu Resort tem 50 hospedes que só usam e-mail antigo, e quer dar um login no site pra eles de graça atrelando o e-mail que o seu CRM já cadastrou no Check-in hotel. Regra de vida da Microsoft: Nunca mande Senha provisória por texto em corpo de E-mail nem force o idoso a digitar letrinhas que nem captcha chato. A Microsoft permite você usar a chave nativa 'Invitation Code'. Você bota esse código camuflado num Link (URL)! O véinho do Resort só clica no link gigante do e-mail dele. O sistema do site Dataverse já lê instantaneamente (Resgate do convite), vê o CPF do CRM associado e libera a porta. Isso é Ouro! E como que o sistema sabe que o E-mail dele não é fake ou não foi hackeado nesse momento? Poxa! Só o dono verdadeiro do e-mail da UOL é que teria aberto a Caixa Oculta de webmail naquele exato dia e efetuaria o click pelo Convite Sign-UP (o fluxo base em si já atuou como verificador e validou orgulhosamente a conta do indivíduo!).",
            "respostaCerta": "RQ-1: Embutir/Incorporar o código no URL direto | RQ-2: Aproveitar nativamente o próprio ciclo de Registro (Invitation code sign-up).",
            "puloDoGato": "A melhor e limpa prática de Lifecycle O.O.T.B onboarding authentication em Portais é o `Invitation code redemption parameterizing`. Passar a hash embeddada via Query String no HRef URL elimina a barreira do Copy-Paste humano no Identity Provider. O ato mecânico acionado pela UI (Registration mechanism Flow activation via Click Through validation) já supre arquiteturalmente, no ato daquele click, o Endorsement Email Ownership challenge (Account binding verificado e chancelado).",
            "dicaOuro": "Fluxo Ouro pra dar TELA do Portal pro CLiente novo que VC já tem no Sistema: URL Link já disfarçada englobando o Convite Automático (Invitation code Link). | Validar E-mail = O fato dele clicar no Link de Convite Sign-up pela inbox dele enviada é validação em si só!"
        }
    },
    {
        "id": "q203_topic1",
        "text": "Você precisa desenhar uma arquitetura Low-Code inovadora em feiras pra um cliente e a finalidade é engolir uma pilha maciça de Cartões de Visita impressos sujos da feira de hóspedes captando todos por app em celular, extraindo informações textuais para salvá-los no CRM a fins de marketing automatizado.\n\nVocê elencou com maestria os Dois Braços arquiteturais.\nComo cruzá-los corretamente nesta tarefa mecânica?\n1. Qual ferramenta nativa possui e foca perfeitamente no motor purista de extrair letreiros e dados do papelão do contato impresso?\n2. Qual braço constrói a esteira final operante e implementa organicamente a lógica de extração pra capturar e dropar isso em fluxo criando a linha no CRM?",
        "options": [
            "1. A Engrenagem AI Builder (Visão Nuvem) | 2. A Mão Orquestradora do Power Automate (Action Flow).",
            "1. Tabela Dataverse OCR Local | 2. Robô Virtual conversacional do Power Virtual Agents.",
            "1. Motor Lógico AI Builder Text Classifier | 2. Nuvem de Injeção de Dados do C# Azure Cognitive Services.",
            "1. Gravação Macro Robótica do MS Power Automate PAD | 2. Base Estática Modelo de IA pré-construído isolado."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia a distinção modular cirúrgica entre \"O Cérebro ou Modelos que analissam\" (AI/Azure) e \"A Engrenagem Mecânica que move isso e automatiza\" (RPA/DPA/Flow).",
            "papoReto": "Para ler cartão rabiscado de cliente que cheira fumaça de evento corporativo? É o \"AI Builder Model\"! Nós usamos os olhos absurdos da inteligência artificial dentro de um modelo já engatilhado pra focar no cartão e ler Nome e Letras num relance e cuspir. MAS O cérebro não tem braços e pernas. Como aquele amontoado de textão do crachá vai parar bonitinho no Dataverse numa fileira salva pra gerar conta Marketing? O cérebro pede carona na esteira gigante do POWER AUTOMATE CLOUD! O Automate liga pro AI Builder na primeira caixinha e chuta o output num Update Record Row do Dataverse e Acabou!",
            "respostaCerta": "RQ 1: Cérebro do AI Builder. | RQ 2: Fluxo do Power Automate para carregar o piano e salvar o contato.",
            "puloDoGato": "O portal de componentes AI Builder possui um modelo pronto Pre-Trained O.O.T.B. rotulado perfeitamente de `Business Card Reader object model`. Toda engine preditiva ou classifier requer imperativamente instanciamento. O Power Automate (Cloud action block trigger) orquestra a timeline, despacha as queries pro endpoint de leitura AI (Azure Cognitive backbones) e captura ativamente o Array Output de variáveis geradas pelo modelo (Payload) forjando as Inserções (Add a new row command) engatadas atreladas fortemente pro sistema mestre em nuvem do banco Dataverse.",
            "dicaOuro": "Extrair texto de Nota fiscal, Recibo, Documento ou Cartão Físico? = Motor de Inteligência do AI BUILDER! \nEmpurrar isso em massa em linha de montagem salvando e processando pro Dataverse ou Banco Relacioonal automaticamente do nada? = Mão armada do Fluxo Microsoft Power Automate."
        }
    },
    {
        "id": "q204_topic1",
        "text": "Sua corporação ordenou que um controle nativo seja gerado e você acaba de confeccionar com garra uma solução customizada limpa e veloz baseada ativamente no Canvas para atuar pontualmente na portaria do prédio e registrar check-in manual isolado e rápido.\n\nEm vez de baixar isso nos celulares e portais, a equipe ordena que quer enxergar esse app ali vivo no Microsoft Teams emulando a colaboração num único lugar integrado.\nQual tela estúdio externa auxiliar você deve passar o app configurando-o e onde na Interface do MS Teams o Check-in vai explodir pra equipe rodar feliz?",
        "options": [
            "1. Via empacotamento Developer Portal (Antigo App Studio Mestre) | 2. Embutido purista no cabeçalho em cima em uma guia fixa (Teams Layout Tab/Aba).",
            "1. Via Visual Studio Pro Code .NET | 2. Estourando no seletor base cru nativo aberto solto na seção de MS Teams chat Pura.",
            "1. Via MS AI Builder Export Module | 2. Alinhado livre atrelada numa página web browser isolada e externa acionada por link no MS Teams.",
            "1. Via Power Platform Dataverse Engine Center | 2. Fixador orgânico solto atrelado na grade central solta global e gigante de seleção de Apps globais MS Office do M365."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foco prático em empacotamento, distribuição e Manifestation de Apps na Plataforma Colaborativa Teams (O ecossistema preferido do mercado Modern Work).",
            "papoReto": "Como eu coloco e chumbo para valer aquele App da roleta bonitinho lá na sala do meu time da Portaria no chat do Teams pra todos eles botarem o dedão no forms? \nPrimeiro eu vou num estúdio mágico chamado Teams 'Developer Portal' e 'Gero o Manifesto' ou clico direto em 'Publicar'. Digo a ele cor e icone. E depois? Depois o App pipoca na cara de toda equipe da Portaria numa ABA (Guia) bonitinha ali no teto superior das postagens do chat do Teams (Channel Tabs).",
            "respostaCerta": "RQ 1: Empacotado estruturalmente no Developer Portal (ex-App Studio Teams) | Embutido cravado superiormente numa guia paralela (Tab) do chat.",
            "puloDoGato": "Todo Deployment e Manifestation em pacotes `.zip` de Microsoft Teams apps customizados invoca ativamente o hub canônico MS `Developer Portal (o descontinuado App Studio original)`. Como premissa de canvas nativo acionado, o Canvas app deve se enquadrar como embedded component layout renderizado imperativamente num container host contextualizado dentro da arquitetura mestre de uma `Guia Horizontal (Horizontal Tabs Context)` hospedada e provisionada estaticamente atrelada ao MS Team Channel space orgânico.",
            "cascasDeBanana": [
                "Visual Studio .NET e C#: Armadilha amadora absurda; a Power Platform e as certificações são arquitetadas sob o pilar do Low Code para cidadãos comuns, excluindo a necessidade de abrir tela preta terminal C# hard core para publicar App básico em chat de time."
            ],
            "dicaOuro": "App Canvas chumbado bonitinho lá no Microsoft Teams para o Time x ou y inteiro colaborar ver no celular rolando barra todo dia? = Fabricado ou preparado por 'Developer Portal App Manifesto' -> Distribuído em interface como Tabs/Abas lá dentro de Canais do Time."
        }
    },
    {
        "id": "q205_topic1",
        "text": "O comitê de vendas global faturou uma licença ultra cara que dá direito ilimitado ao uso das facetas e laboratórios do painel AI Builder Microsoft para as previsões absurdas analíticas Dataverse.\nSeu cientista quer que a IA preveja estritamente se o volume global macro das ordens vendas de amanhã estourará o cap limite na América da Europa com base nos últimos cincos anos.\n\nResuma explicitamente as três macros ações (fluxo de ciclo MLOps) rigorosas que esse Cientista precisará realizar em sequência, em ordem cronológica de cliques e comandos, para fazer com que a engrenagem nasça, cuspa métricas e finalmente opere e rode viva pra frente pro CEO:",
        "options": [
            "Ação 1: Treinar imperativamente o modelo de IA base da predição massiva apontando para mastigar os dados brutos atrelados limpos do Dataverse histórico -> Ação 2: (Exportar ou Analisar a saúde do modelo em tela métrica externa relatórios do painel Excel) -> Ação 3: Publicar em definitivo a casca forte cruzada do modelo de IA e ativá-lo pra bater recordes reais pro resto dos fluxos.",
            "Ação 1: Alimentar e treinar e treinar o modelo usando apenas arrays crus forasteiros subidos via Excel limpo local -> Ação 2: Importar Análise pro Sistema Central DB -> Ação 3: Exportar isso pra UI e Acionar no C-Level Power Apps de gerência.",
            "Ação 1: Selecionar e setar todos ativamente cruzados e mistificados os campos de classificação abertos pra ele ler-> Ação 2: Bater no Treino do modelo -> Ação 3: Enraizar em Painel Publicação MS.",
            "Ação 1: Extrair Data brutos nativos e exportá-los em lote Data Lakes -> Ação 2: Treinar em nuvem C# script aberto base pesada do Azure ML Studio Pro -> Ação 3: Empacotar duro em arquivo e Importar manual zip solution pra plugar no Dataverse base AI."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Ciclo de vida irrefutável e engrenagem funcional mínima viável canônica requerida de um Modelo Analítico Categórico ou de Predição focado no AI Builder Power Platform.",
            "papoReto": "Eis o feijão com arroz absoluto e supremo da inteligência artificial no mundo Dataverse O.O.T.B. que pedem na PL-200. Inteligência é ensinada do zero à perfeição seguindo os exatos TÊS GÊNEROS MATADORES em linha RETA imutável: Você entra, Aponta a inteligência pra 'Comer Lixo de Dados Históricos' gigantes com resultado cruzados prontos bons e errados antigos (TREINAR). Ela te gera ali depois de uma hora a pontuação do boletim dela provando que ela sabe ser Fera e já sacou que chove após sol forte e acerta 90% dos casos de venda se tu dar a colher... Ai você verifica pra ver se tá massa, se for ruim ajusta... (AVALIAR RESULTADOS). Depois que a AI estiver afiadíssima e espetacular e der o ok verde... VOCE A BOTA PRA TRABALHAR DANDO O FLAG MAGICO e solta a coleira pro mundo rodar solto batendo na api (PUBLICAR MODELO!). É T-A-P: Treinar, Avaliar e Publicar.",
            "respostaCerta": "A etapa é o 123 da inteligência artificial: 1- Ensinar o cérebro / Treinar o modelo lendo anos e tabelões velhos no Dataverse. -> 2- Espiar os acertos crus da IA na prova de métricas dela pra avaliar saúde (se quiser, em formato analítico ou exportado). -> 3- Acordá-lo pra vida e Publicar.",
            "puloDoGato": "O fluxo de Lifecycle pipeline fundamental focado na esteira em MLOps encapsulado na arquitetura AI Builder PL Platform engole e consome compulsoriamente os blocos: Data Set Collection Identification Phase (Selecionar campos do Target Source) -> AI Builder Train Engine trigger activation Phase -> AI Builder Score/Review Performance evaluation phase -> Publish e Deploy Artifact AI Model into the Dataverse Target Environment.",
            "dicaOuro": "Qualquer IA, Classificador ou Modelo que advinha O.O.T.B que você for criar do vazio do Dataverse passará SEM DESCULPAS pelos 3 Passos da Glória cronológica: Select/Train -> Review/Aprove / Evaluate Score -> Publish e Enable The EndPoint System API App."
        }
    },
    {
        "id": "q206_topic1",
        "text": "Misericórdia! A governança barrou temporariamente e travou a licitação gigantesca do locatário impedindo você de acessar nuvens de arquivos. Você restou pelado na guerra para gerenciar em Dynamics a colaboração de vendas focado em centenas de Leads.\nResumo da ópera: a empresa assinou um termo gigante de embargos confirmando assinado que o portal de arquivos brutos microsoft o 'MS SharePoint Online' NÃO SERÁ engrenado e sua implantação está 100% CANCELADA este longo ano.\n\nMas você tem um time e faturas de C-Level na nuca te pedindo comunicação rápida e corporativa e colaboração diária M365 (e-mails com leads, chats rápidos conversando sobre status etc).\nConsiderando exaustivamente que você perdeu a base do SharePoint Ouro, quais míseras mas ainda ativas três soluções independentes de Arquitetura de colaboração originais de núcleo do pacote oficial fechado do Office 365 podem continuar em pé sem choro e salvar seu time ainda conectando conversas, sem depender ativamente do SharePoint DB Limits para suas raízes?",
        "options": [
            "A tríade social: O comunicador MS Yammer, O obsoleto porém funcional Comunicador Chamador de MS Skype for Business corporativo, e os E-mails nativos de ponta a ponta do sincronizador monstro Microsoft Exchange Online.",
            "A Tríade dos Docuentos Falsos: Os Drives do Cloud MS OneDrive For Businness ativados, O Livro infinito nativo do O-Note (OneNote online App), Microsoft Web Exchange.",
            "A tríade morta: Portal do Teams Oficial, A própria malha Microsoft SharePoint morta na base, Portal Corporativo Oficial do site Yammer.",
            "A tríase Desconectada: O engrenamento purista livre cadernos do app OneNote livre, Conexão e chamador isolado app Skype, e a Pasta Local WebDrive sincronizadora avulsa de cada máquina atrelando o MS OneDrive."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão destrói a vida dos desatentos testando o elo matriz intrínseco invisível do OneDrive e OneNote com a topologia do morto SharePoint (Sem Sharepoint, cai toda a malha corporativa Documental).",
            "papoReto": "Pega a lógica da arquitetura matriz: A Microsoft botou rótulo diferente no OneDrive For Business, no MS Teams Channels File Storage Lists, e nos Cadernos coloridos do OneNote corporativos. MAS... no fundo escuro e denso dos motores do buraco negro do Azure da Microsoft no datacenter, eles TODOS são, pasmem, puramente bancos orgânicos filhos e dependentes matriz de tabelas hospedadas ocultas DO BENDITO PORTAL ARQUIVO DO SHAREPOINT ONLINE! Acabou o SharePoint proibido ali na licitação proibitiva em contrato? A MÁQUINA CEIFA JUNTO: O OneNote Dynamics morre junto e quebra; e a pasta arquivo do MS Teams e o OneDrive da conta desaba por trás na mesma vala na esteira! O que sobrevive se seu foco for apenas dar \"bombo conversacional\" (Mandar E-mails e Ligar) cruzado com a conta do Dynamics CRM Lead? O e-mail raiz base via Server-side sync do MS Exchange, e os faladores puros independentes sociais de base separada: Yammer Database (Hoje batizado viva engage) ou a Ligação no Voip do finado e valente SkypeForBusiness Integrado (ou Teams puro apenas na feature isolada de VOIP e Chat log, SEM ABAS DE FILES engrenadas).",
            "respostaCerta": "Trio Ouro de Comunicação sobrevivente: MS Yammer (Social Networking db), MS Skype for Business Integrations, Engine matriz E-mail do MS Exchange Online.",
            "puloDoGato": "SharePoint Online atua canonicamente e primariamente como a 'Database Back-Bone Engine' matriz silenciosa host e servidora de storage para workloads interativos de File-Sharing M365 subadjacentes (Entenda que Arquivos do Teams Tabs Files, os Shared Team OneNotes e ODFB do locatário orbitam e emulam interfaces dependentes e repousadas nativamente no SQL do Site-Collections SPO na raiz infra). Portanto, ausência de adoção de SPO derruba, bloqueia ou paralisa por default feature configurations arquitetura D365 ODFB (OneDrive For B.) e OneNote Integration settings. Componente canônicos puros focados somente em Comunicação em texto real-time base como Exchange (Email Synchroniz), Yammer (O-Data Social graph base Feed), Teams Chat Session, e Skype Telephony Integration PBX/PSTN voam livres e blindados disto nas próprias estruturas.",
            "cascasDeBanana": [
                "OneDrive e OneNote: Constantemente escolhidos por candidatos incautos que focam no App do Windows achando serem isolados! Exigem inexoravelmente que a implantação global Tenant/Instância do SharePoint tenha habilitado e ativado a S2S Document Integration para serem ligados nos Menus e Forms de Accounts/Dynamics do CRM!"
            ],
            "dicaOuro": "Questão fudeu e cancelou e baniu o \"Sharepoint Limit\" ou avisou que a firma não tem isso este ano? Ripe Cancele sumariamente da sua mente opções nas alternativas envolvendo os nomes engajados na matriz como \"ONE NOTE CORPORATIVOS\" e \"MS ONEDRIVE FOR BUSINESS\". O M365 desaba do lado de documentos! \nFoque nos comunicadores raiz (Skype e Yammer e E-mail Nativo Via Server Side Synchronization Exchange M365)."
        }
    },
    {
        "id": "q207_topic1",
        "text": "Sua vida vai enlouquecer e os executivos de marketing da empresa de turismo demandaram violentamente a montagem engenhosa de Formulários UI de Entrada Dataverse variadíssimos cobrindo uma caralhada complexa de \"Diferentes Casos e Eventos de Chamado e Denúncias C-Level (Cases)\" nas áreas e menus visivos de UI dos agentes base.\n\nCom precisão de engenheiro de formulários do Makers, qual o tipo Exato (Type base Model-driven Forms Control Engine Component) associado de design base Formulário correto purista o qual você constrói e seleciona nativamente por design pattern e esfrega na tela na criação pra salvar em 4 casos matadores distintos em sequência:\n\n1. Primeiro cenário do dia A: Um novo formulário raiz para lidar com chamado base e de Casos longo que tem de suportar e renderizar na tela perfeitamente a engrenagem oculta com log e botar os componentes de fluxo histórico de Atividades puras (A Timeline Viva) sem bugar a UI em branco.\n2. Requisito Cenário B: Criar um formulário mestre gigantesco e envergado pra conter e acionar na raiz no topo renderizado a navegação de barra em progresso de chevrons do Fluxo de Processo Empresarial Atitivo (Caminho/Roteiro Visual rico do Status BPF ativo de Business Process Form Flow visual).\n3. Requisito Cenário C: O usuário acessa um O Filho, e exige ler o assunto sem interagir do Pai (Visualizar sem sair cruzado ler título ou dados do registro e status de um chamado Case Pai (Target Entity) ali estático e engrenado no Form Filho sem piscar nem editar).\n4. Cenário D: Focar num formulário mínimo super ultra enxuto solto Drop-down, projetado mobile super ágil limpo voando e limpo na inserção pra que a pessoa sem trocar o context focus pop-up na tela acabe a criação ágil.",
        "options": [
            "Caso A: O Forms 'Main Principal' | Caso B: O Forms 'Principal' | C: A 'Visualização Quick View' (Vista Rapida Cruzada) | Caso D: Drop down Pop Form de 'Criação Rápida UI' (Quick Create)",
            "Caso A: O Forms 'Principal Base Main' | B: O forms de Estilo 'Cartão Curto solto Form Card' | C: Formulario View Visão Rápida | D: O UI Forms Base Principal",
            "Caso A: Visualização Rápida UI Solta | B: Principal Forms | C: O Criação Rapida | D: App Card forms",
            "Caso A: Forms Principal O.O.T.B | B: Form Principal UI Base | C: Form estilo puro Cartão Oculto | D: Criação Rápida Solta e enxuta"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Eterna dança das escolhas da prancheta mestre do UX/UI Dataverse Designer for System Forms types capabilities.",
            "papoReto": "Forms é o que a pessoa clica ali e a telona abre branca: \nQuer colocar no canevas de design o blocão de Linha do tempo de e-mails, ou aquela BARRONA horizontal de avanço das bolinhas amarelas em fases que andam pra aprovar (Business Process Flow BPF)? \nCara, não sonhe em tentar por engenhocas pesadas em telinhas fuleiras Pop-Up rápidas Quick... A Engrenagem Dataverse do Sistema exige a estabilidade pesada limpa e a banda larga do Painel Raiz (Isso é obrigação atritada no Main FORM! Aquele que te consome a e abre ocupando a tela toda!). \nOk, Caso três: Tu quer apenas dar uma \"Espiada\" cruzada de canto nas três colunas chaves perdidas do registro e dados do cliente ali soltas e bloqueadas visualmente só leitura estática sem tu sair da Tela de Venda principal? Isso se embute lindamente metendo a 'Visualização rápida Formulário' cruzada o 'Quick View Form' lá como eu já te expliquei antes.\nAcabou? Não! E pro atendente ágil de telemarketing logar? Clica, cai form curtinho esmagadinho tipo cartão drop down lateral com 4 campinhos vitais vermelhos asteriscos p botar CPF E CELULAR, ele dá enter, salva invisível e já some sem tirar ele da leitura oficial onde ele estava lendo! A glória da inserção veloz e furiosa ágil é ele: \"O Formulário de Criação Rápida pop up (Quick Create Form panel)\"!",
            "respostaCerta": "A Sequência Mestra dos Forms: 1-Main base (Carrega a Timeline pesada) -> 2- Main Base Forms Principal (Carrega fluxos pesados guiados PBF no top) -> 3- Quick View Form nativo UI leitura (Espia Pparente em tela) -> 4 - Aba Quick Create Solta (Inserção ligeira de tela em mobile/overlay).",
            "puloDoGato": "Dominemos os Dataverse Forms Types capabilities: \n`Forms do Type Main`: Soberanos, gigantes e únicos hospedeiros estruturais com engine renderer em html para abarcar Subgrids massivas, complexas Timelines Atividades base O.O.B component, Navigation Links baseados em Tabs e ancorar as execuções ricas dos Business Process Flows (BPF Chevron Progress bars header render) e JS complexos Client-Side handlers.\n`Forms do Type Quick View`: Entidades parasitas maravilhosamente ricas de utilidade. Componentes atrelados com escopo e design readonly passivo cravado projetados cirurgicamente the in-form layout component render, sugando e transacionando dados read-only from Parent Related record entity sem necessitar navigation change overhead.\n`Forms do type Quick create`: Optimizados brutalmente pra UX, são single-section e de baixo footprint. Despontam em Side-Panels Pop downs (drawer interface behavior) viabilizando user Data Entry Contextualizado e focado veloz veloz pro call-center/Mobile data entry agil.",
            "dicaOuro": "1: Quer botar a timeline de Atividade / linha do tempo ou os passos longos PBF de Setinhas na cabeça = É no gigantão \"Forms PRINCIPAL BASE (MAIN)\". \n2: Espiar dados fixados de outra tabela na tela atual de venda com form = QUICK VIEW. \n3: Preencher CPF e Fechar o box sem fechar a janela em segundo lugar = QUICK CREATE Forms Mobile Pop."
        }
    },
    {
        "id": "q208_topic1",
        "text": "Num cenário exaustivo mensal em sua corporação de distribuição, o experiente, antigo e insuportável gerente Sênior Global matriz de vendas senta recebendo repetidas vezes sistematicamente aos finais do mês um pen-drive via parceiro cheio listão caótico de Prospects pesados (leads.csv).\nO grande problema do caos dele? O cabeçalho da primeira linha no formato Excel (Nome dos headers ali) dos parceiros de distribuição NÃO correspondem e não casam em nada com o naming convencionais padrão cravados nas colunas ativas nativas da sua Tabela CRM orgânica Base Dataverse Lead no backend M365 (ex: O deles envia \"Telefone_Casa1_Vendas_99\" e o seu Dataverse tem a coluna restrita \"TelephoneNumber1\"). Esse desastre não possui e nunca possíu mapeamento cego prévio entre ambas partes!\n\nNa marra, Como você orienta e lidera esse C-Level experiente a forçar e comandar pra tracionar a importações recorrentes dessas litas cegas desse mesmo parceiro salvando vidas, com mínimo atrito mensal contornando o erro de Schema Headers Mismatch imposto, SEM NUNCA o forçar a usar VBA ou o mandar que ele entre abrindo o bendito pesado do Excel dele pra alterar a aba um-a-um nos nomes antes do processo manual?",
        "options": [
            "Comandar que ele orquestre e desenhe um Mapeador Orgânico de Dados fixos base (Data map) usando as ligações nativas interativas da própria janela suspensa em runtime nas etapas dele da janela Mágica e Ativa do Data Import Wizard (Data Import Assistente Nuvem).",
            "Levantar pra ele e criar antecipadamente um mapa restritivo de dados cegos (Data mapping definition xml object) o adicionando na raiz chata em Módulos das Definições Gerais base da Secção Gerenciamentos Data Integrations Settings Global C.",
            "Obrigá-lo a compulsoriamente mapear tudo via a Aba Tradução Restritivas globais do módulo cruzado (Import Field Translations OOTB feature do app).",
            "Construir e injetar pra ele um Modelo Fixo e restrito novo exportado em Nuvem (Template Excel Matrix Dynamics for Import Data File Object Base O.B)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Domínio essencial funcional sobre o uso interativo massivo dos assistentes padrão de Mapeamento Orgânico de Inserção de Dados Data Import Engine (Aprender a casar a \"Tábora quadrada no furo Redondo\" the CSV imports no Dataverse sem chorar pra M365).",
            "papoReto": "Irmão... Se o parceiro mandou a pasta CSV suja e o nome no Excel dele que ele mandou tá 'NumCPF_A', e lá no seu sistema a tabela matriz aceita e foi batizada de 'CPF_Legal'. O que a gente faria instintivamente amadoramente? Abriria o Excel travoso, apagaria a Célula 1 do cabeçalho e daria CTRL + S antes do Import Wizard (Alteraria o XML Base arquivo). MAS aqui ele DEIXOU CLARO: NÂO ALTRE o bendito Arquivo base fornecido do Fornecedor por Integridade e Pressa! \nBeleza! Como o Microsoft Dataverse Dynamics Import Wizard magicamente lida com arquivos descasados em schema name? \nEle vai abrir janela de Mapeamento, vai pitar em amarelo (Unmanped Warning) e te deixar feliz da vida escolher na setinha DropDown ali de Runtime na Nuvem na frente Dele dizendo (Aba NumCPF_A vinda no CSV ----> Apontada Pra Aba Cpf_Legal DB)! \nShow! Mágica final pros meses vindoures de sofrimento? Quando ele clicar Avançar lá no finzão, tem um botão dourado ali nativo no final do Processo da Janela Wizard Mágica chamando: \"SALVAR ESSE DE/PARA EM MAPA FIXO (Salvar Mapeamento/Data Map Pessoal)\". Mês que vem ele não faz nada: joga o mesmo excel sujo de import no Dynamics e no primeiro passo ele clica \"Usar o Mapa lá Antigo Salvo XYZ\". Tudo se acerta orgulhosamente e flui rápido sem atrito na UI em Cloud em um clique limpo.",
            "respostaCerta": "Ação de Ouro Limpa: Usar a tela do próprio assistente (Wizard UI) na primeira via de rotina passiva e criar nativamente no Dropdown UI em Runtime ali o salvamento atrelado de mapeamento cruzado da lista.",
            "puloDoGato": "A engenhosidade nativa UX Flow em Data Import (Dataverse Data Migration import wizard tool) abriga integralmente componentes interativos In-memory de Schema Field Cross-mapping resolution flow procedures. Ao plugar o Flat File (.csv format ou excell schema definition), ele avalia o header e tenta Automação (Auto-mapping matching reflection strings). Para colunas faltosas em mismatch string name (Unmapped data elements alert string), ele permite no Runtime (Sem alterar Source schema array structure source Excel file) o cruzamento visual manual de UI em Drop-down. Ao termino do pass, a Tool provẽ a gravação perene em base do Dataverse System (Salve Map Data Schema Feature in cloud UI System User views).",
            "cascasDeBanana": [
                "Criar Definições XML de MAP cegas de antemão por Definições no backend global: Você tem a capacidade técnica na mão de mexer nos xml settings de System global base configs maps e importar as linhas. Mas é insuportável, gasta vida em código XML de metadado cego em Settings, e ignora e choca absurdamente com o princípio matador prático user-friendly das janelas e DropDown visivo ágil in-loco natural construída especialmente pro usuário dentro do próprio Data Import wizard step flow natural!"
            ],
            "dicaOuro": "Fornecedor mandou Arquivo Base Exell / CSV Sujo onde os Títulos das Colunas Originais dele divergem 100% dos nomes da suas Colunas dentro do Dynamics, Mas Você Nunca Pode editar o bendito arquivo dele base origal a mão pra por nome limpo na Célula 1? = Deixa pau quebrar e jogue o arquivo torto na Ferramenta de Importar Mágica da Microsoft e na etapa Mapeamento (Mapping List do Assistente Base Wizard Importador em Runtime UI Visual Interface), você casa os nomes puxando seta! No finalzinho do Fluxão tem um botão Ouro e ele te permite e joga Salvar o \"Mapeador\" para usar eternamente depois nas importações cruzadas!"
        }
    },
    {
        "id": "q209_topic1",
        "text": "Você administra a engenharia sofisticada massora atuante numa malha complexa de IA desenhando e lapidando uma solução de fluxo bot de IA e inteligência artificial chatbot interativa e proativa nativo em PVA (Microsoft Power Virtual Agents Copilot Studio) de um e-commerce milionário da Europa.\nA grande dor base operacional dos donos: No fundo, ocasionalmente, o maldito robô não vai entender algumas frases dos caipiras europeus ou gírias em espanhol sujas deles esbarrando em um dead-end burro da AI NLU conversacional sem respostas claras cruzadas nos ramos de base (Dead Fall-back limits de respostas desconhecidas target).\n\nPerfeito. Atuando com peças do Designer base Mestre Nativo, qual exato controle modular você puxa da paleta ou engrena em qual braço da base matriz ativamente no PVA engrenagens pra ligar as tratativas cruas da falha de Q/A bot e cumprir as 2 requisições cruzadas pesadas na estrutura do seu negócio ali abaixo para dar uma solução e sobrevida limpas à IA?\n\n- O Desafio do Fator de Falha Num 1: Captar magicamente pela engine e disparar puramente uma tratativa base \"Opa, repita.\" pro um convidado caipira chato que travou com ele solto numa pergunta com gíria doida solta (intent unkwoun trigger response unknown question string) no meio do chat.\n- O Desafio Engrenagem Nuvem Num 2: Se esse carinha não ceder, arregar o robô em ciclo, dar o Stop de IA AI na face dele e, como mandam os deuses de suporte, Forçar via System Engine o repasse engrenagem e Redirecionar forçosamente o pobre coitado lá na internet cego pro calorosoe e amado abraço atitudinal do vivo Atendente Humano engravatado de Plantão via fila live cruzada e quente.\n\nEscolha e encaixe corretamente o \"Par de Modulos System Base/Ação\" purista que brilha e que você invoca resolvendo ponta-a-ponta o gargalo na Engine do Copilot:",
        "options": [
            "RQ-01 (Falha Lógica NLP NLU) Resolvida engatando a raiz sistêmica base em : Engrenar purista o Tópico Oculto e de Sistema base nativo Falha Isolada System Tópico Oficial 'de Fallback Engine (Fallback topic Fall back Node OOTB)'. | RQ-02 (Fugir e Ligar na Mãe Solução live de Humanos plantão): Disparar Transferência Integrada Matriz baseada nativamente pra filas ligadas integradas cruzadas no modulo Dynamics 365 e painel Oficial base de Atendimento cruzado em Omnicanal nativo ativo (Omnichannel Cloud Target Call routing enginner module Live Transfer).",
            "RQ-01: Modular a Trilha na marra do 'Botão Escalonar (Escalate) Nativo Local solto UI Node Box'. | RQ-02: Definir Caminho sujo e de restrição cruzada cego de falha morta em matriz base engrenada ativa (Failure path limit block routing action).",
            "RQ-01: Acionar motor ativo Base Engrenagens Tópico de falha oculta limpa Fallback limit OOTB base . | RQ-02: Jogar brutalmente o cara perdido ali e embutir painel para logá-lo cruzado massivamente nativo de um chat MS Microsoft Teams O.C..",
            "RQ-01: Roteador Engrenagem purista limpa limit PVA App Web Ouro global. | RQ-02: Subir live integration Atendente Omnichannel limpo UI cross."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca cirurgicamente no Core da Arquitetura do MS Copilot PVA Lifecycle e NLP fail states handling procedures interligados ao Hub Ouro M365 matriz D365 da camada Customer Support.",
            "papoReto": "Como calar a boca de cliente doido no Whatsapp do Ecommerce sem perder a compostura e amansar a experiência e não cair no limpo robótico eterno 'Desculpe, desculpe'? A engine da M.Soft te joga uma rede macia, que atende por `Fallback Topic` na primeira pancada (Módulo Falha) ! \n1 - No momento do atrito NLU e burrice aguda, o cara manda: 'Kéru devovê esse tenis fiote, mó feiao, parsa!' (Gíria braba que não bate com a Intent System de \"Trocas e Cancelamentos Limpos de Banco e Strings de trigger normais do motor\"). O Bot copilot estressa as NLU e dá match zero. Ao invés do bot apagar morto ali as cegas ou travar limpo numa tela burra ou engasgar calado, a engrenagem oculta canônica mestra M365 Microsoft dispara um Event trigger escondido em FallBack Root NAtive Topic! E ele cospe: \"Poxa, sou robô! Tente explicar com poucas palavras, não saquei...\" (Tratativa do Erro Primário ali). \n2 - E se não rolar ou ele digitar \"CHAMA A BOSTA DO UM HUMANO\"? Ou ele errar quatro milhas denovo? Você acopla nela uma engine gigante cruzada Action System Limit de HAND-OFF na nuvem. Você invoca a mágica e cara Mão de Tráfego do Power Virtual Agent Transfer! Quem engole ele e coloca num gráfico painel na fila linda do Dynamics pro Atendente do telemarketing sentar nele pra mandar OI? O Todo Poderoso 'OMNICANAL PARA CUSTOMER SERVICE DA MICROSOFT (Omnichannel for Live Customer Service routing).' Ele segura as conversões ao vivo das abas todas em chat.",
            "respostaCerta": "R1: Tratativa ao não compreender Q/A limit = Engrenagem de Fall-back Topic no Bot. | R2: Agrupar Transferências Call-Center Handoff System Call Live = Integration nativa do \"Omnichannel (Omnicanal para Dynamics Customer Service enginering Base).",
            "puloDoGato": "Os estados de Fall-back (Fallback System Topics) habilitam e suprem arquiteturalmente as exceção lógicas em Unrecognized User Inputs (Confidence score NLU threshold baixo N.B.) no hub conversacional P.V.A engine nativo core platform block. \nA orquestração macro matriz interativa final via Escalate Systems Node (Hand-off Live transfer UI Agent system calls live protocol features integration actions hooks base cross app layers routing queue algorithms O.OTB capabilities limit integrations capabilities ) do transbordo massificador live é consolidada universal em M365 unicamente na suite massiça do D365 CS Omnichannel for Customer Service Add-on pack architecture features cloud base platform routing capabilities limit routing engine system OOTB features integrations and connections modules hubs platform modules integration limits systems block features.",
            "cascasDeBanana": [
                "Usar Microsoft Teams para Transbordo e Chamadas Ativas - (Não e Errado!): O MS Teams é uma topologia focada unicamente para Colaboração INTERNA orgânica dos Colaboradores entre si nas Entranhas Matrizes (Tenant Boundaries Office 365 M365) e não provê funcionalidades de Hub Call-Center Routing Engine Live External Chats SLA Service limits SLA base routing queues Service Omnichannel para chat do povo fora da base na rua da praça do Ecommerce."
            ],
            "dicaOuro": "1: Robô não captou a Intenção do ser humano por digitação burra/maluca/gíria alien e bugou NLP Engine base? = Se jogue debaixo da asa protetora macia mágica elástica ali das Tratativas no Event Engine System do 'Topico de Falha (Fallback System Topic OOTB)'. | 2: Quer acionar pra jogar o coitado no funil num bate papo live real humano no site caindo pro Call-Center interno seu ali com fila espera? = Manda Hand-off / Transbordo massivo OOTB nativo no pacote oficial do 'Omnichannel Customer Service base Dynamics Omnicanal'!"
        }
    },
    {
        "id": "q210_topic1",
        "text": "Em um cenário simplista de infraestrutura, uma modesta concessionária que recita seu pilar ativamente com foco base purista na licença em soluções \"100% OOTB\" M365 limpas adotou os controles engrenados ativamente de geração da plataforma Microsoft englobando na Base sem custo os \"Word Templates O.O.T.B orgânicos limpos modelados estáticos\" em massa, gerados como faturas ativas no seu ciclo.\n\nAbaixo das limitações crônicas sem programações, no momento cru em que um mero e humilde vendedor e usuário vai vender, bater um botão macro e clicar nas gerações ali do carrinho engatado, e o robô suga e gera puxado na formatação e cospe uma formatação nativa limpa em O.o.T.b purista ali e te dá a 'Carta Word Template PDF Carta Final Obrigada Base Engrenagem' de Obrigado final pra fechar contrato, \n\nSem injetar plug-ins VBA macro chatos da Microsoft M365 XML soltos no local, qual unicamente mera modificação real simples e tosca permitida no ambiente das opções você poderia ou está arquitetural nativamente habilitado em conseguir sem chorar moldar e preencher a colocar no Template Base sem corromper puramente nada na UI pra ele lá e fazer com que ele flua liso em mapeamento relacional fixo base Word cruzado ativo Microsoft Flow Limpo:",
        "options": [
            "Adicionar magicamente o bloco dinâmico purista nativo na folha mapeando cru o metadado sujo da tabela e imprimindo passivo puxando para o layout engrenado o Endereço orgânico local de Texto Atrelado isolado ali solto Base limpo impresso textualmente passivo lá do \"Endereço Passivo Limpo local cru do Cliente\".",
            "Pintar nas guias do XML a aba engrenando a Injeção poderosa \"Lógica e Ocultar Custo do O.O.T.B Mapeado\" Condicional Ocultar Passivo e de \"Descontos\" dinâmicos ocultadores via Macros UI IF-Else Conditionals base puristas.",
            "Criar e aplicar engrenagem dinâmica na formatação limpa matriz listada renderizada ativamente purista passivamente do sistema matriz cruzada e engatar linhas estéticas zebradas cor formatação em views reladas isoladas nativas Word base views embutidas.",
            "Engatar no Word o Formato dinâmico embutido base cruzado pra forçar com inteligência nativa limit limpo um \"Tempo em base\" Formatar brutal e forçosamente passivo O.O.T.B cruzado purista passivo longo o Dado Timestamp Ativos e crus Data Oculta \"Data Criado Em Long String Base nativa\" lá renderizada na página ativa."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Destrói fantasias mirabolantes. Domínio fundamental das limitações limitrofes absolutas do Microsoft Word Document Templates e Mapeamento O.O.T.B de Registros Entity Record (XML Control Field Nodes sem injeção de motor processual ou Formatação Dinâmica de Dados nativa cruzada).",
            "papoReto": "Cara, saca só a burrice nativa do querido Word Templates nativo em D365 / Dataverse e porquê ele só faz o 'Beabá' e é de graça na plataforma! Ele é extremamente simplista e atua passivo, burro e chato em limites limpos! Se você quer que ele mostre ali em vermelho 'Parabéns Sr. Zézinho da Rua F'. Você clica lá nele as abas e arrasta passivamente da árvore limpa de metadado o Node XML Data limpo Field do Dynamics System ali batendo texto em cima da Folha no campo X (Sim, só puxar valor engessado bobo OOTB texto como nome, idade e valor em número ali de forma limpa estática). MAS MAS MAS.. O que o Word Native Flow não tanka e Não Roda NUNCA Nem Amarrado a Paus? Ele não tem IF (Se ele for VIP mostre VIP, senão esconde o Parágrafo = ele não é C# Coder Engine Dinamico). Ele nao reembala Data (Se o servidor soltou de forma crua M365 Database '22/04/24', o XML suga aquilo como string cravado no Word. O Word OOTB não tem inteligência UI Data Render Converter Oculta Limit embutido de Data Formatter Oculto sem plugins third paty de Nuvem). Acabou, ele puxa e cospe o valor O.O.T.B.",
            "respostaCerta": "Arrastar puxando puro de forma engessada simples passiva ali direto do mapping cego e Adicionar e bater num bloco folha em tela Word UI puxando o Campo Texto Base sujo passivo passivo 'Endereço Orgânico Fixo cru do Cliente Alvo'.",
            "puloDoGato": "Os Dataverse O.O.T.B Document MS Word Templates engrenam sob pilares passivos de `XML Mapping Definitions Content Controls` limitando-se e escopando estritamente à injeção crua de renderização Data Value text replacement (Static Node Population injection Data Render) e suportando Sub-grids base e Relacionamentos limitadíssimos em loop. Eles Carentes são e Não comportam logicamente `If/Else evaluation Blocks Nodes features conditions`, e Data Value formatting ou String manipulation (Ex: date/time string rendering changes). Tais modificações exigem suplementação de Add-ins Premium D365 Cloud Tools limit System Plugins limits features ou conversões de metadado previamente na raiz fonte Server-side Database entity engine.",
            "cascasDeBanana": [
                "Lógicas em Word if / Formatar Células Complexas Listadas de Cor Cruzada Zebradas nativamente/ Manipulação e Render engine de formatação longa das Datas Sujas do Sql na Tela = Esquece amigo! Eles focam puramente em extrair O Dado Texto ou Número de Dados Secos OOTB no exato estado bruto que habita o DB Banco Dataverse."
            ],
            "dicaOuro": "Word Template Padrão Nativo (Sem Gastar) da Microsoft pra Documento CRM é ferramenta Burra M365 passiva Limpa Mestra: Apenas 'Busca' campo que JÁ EXISTE (Ex: Text Limpam Endereço Oculto) E 'Gospe e Bota' cego na página impressa pdf papel. Ele É PROIBIDO e INCAPAZ OOTB de ter Lógica IF /ELSE (Condicional de Ocultar), e Nao Tem Capacidade nativa livre OOTB Limit M365 limpa de Formatar ou Mudar A Aparência da Tabela Complexa Ativada de Dados Oculta Cruzada!"
        }
    },
    {
        "id": "q211_topic1",
        "text": "Você, atuando em grande escala limpa na arquitetura base e segurança raiz de um locatário M365, montou e engrenou um majestoso App ativo final de IA e provisionou magicamente bot Conversacional com Power Virtual Agents PVA de forma ativa O.O.T.B na engine.\n\nA Governança limpa da sua matriz corporativa chegou cruzada em cima da sua arquitetura do seu bot agora e solicitou compulsoriamente os Trânsitos Exatos engrenamentos Nativos seguros limpos passivos atrelados matriz cruzada O.O.T.B de acesso limite Microsoft Ouro de Liberaçáo e Teste para abraçar 3 necessidades isoladas puras na matriz em sequência rigorosíssima de fluxos em nuvens:\n\n1: O fluxo Limite Isolado purista O.O.T.B e rápido para Garantir Testes UI cegos rápidos emulando o painel para seu chefe cruzado interno e sócios verem testando C-Level brincando (Os caras são Zero Licença, Carentes Total e não tem permissão Power Apps Plan 2 Premium nenhuma M365 na base de Testes Ocultos UI deles!).\n2: O fluxo Engrenagem Mestra Isolada de Compartilhamento Fixo raiz base e Segurança Nivel Edit para Alistar, Agrupar em Cacho os outros Funcionários Engenheiros de T.I de elite ali com você, os quais TEM QUE METER A MÃO Na Maquina base UI Engine PVA pra que eles modifiquem o seu código Chatbot PVA Copilot lado a lado em co-criação ativa na nuvem.\n3: O canal Fluxo Oficial Mestre base Purista UI e Engrenagem Oficial de Consumo Base Nuvem Limit pra empurrar a render base Ouro final para que ele flutue passivo orgânico engrenado em site internet cega no O.O.T.B passiva cravada na porta e tela base HTML limpa consumível e engrenada e abraçado na TELA Cega da internet Oficial do seu Cliente e Loja virtual Public Base Ativa na Empresa cruzada Web externa pro Mundo.\n\nAssocie puristamente OS TRÊS MECANISMOS Ouro limit nativos e O.O.T.B puros rigorosos de Portas e Compartilhamentos Matrizes O.O.T.B em ordem de resposta Dataverse:",
        "options": [
            "RQ-01 (Sem grana - Teste): Engrenar Portal Cego e Ativar de Graça o Site Mágico de Demonstração Link Isolado Nuvem (Free Microsoft Hosted Demo Website link sharing). | RQ-02 (Turma DEV para Codar co-autor na UI de Trás): Empacotar eles massivo num abraço Ativo Compartilhando o PVA engrenagem passiva atrelada num Grupo Segurança Mestre Cego do AAD (Share Bot Co-Author in Azure Entra ID Security Group roles cross). | RQ-03 (Povo de Fora Internet Consumir Ouro Cego Html): Cuspir ele puro Render em Injeção Ativa Nativa no meio Html Base externa do Painel iFrame Limit Object Cross nativo.",
            "RQ-01: Exportar Mestre UI via Link Zip purista atrelado. | RQ-02: Empurrar no chat puro Limit do Teams Microsoft. | RQ-03: Submeter aprovação purista base engatar pacote nativo mestre limit nativo Cego AppSource Nuvem Global.",
            "RQ-01: Usar Engrenagem atrelada de Painel Limit OOTB base Site Demo Cego. | RQ-02: Link individual cego passivo limit cru Ativar individualmente base Compartilhar UI. | RQ-03: Export Teams Teams UI OOTB.",
            "RQ-01: Empacotar Segurança Base Grupo OOTB Purista. | RQ-02: Acionar Segurança Base Grupo OOTB Limpo e Passivo Purista. | RQ-03: OOTB AppSource Oculto Base Cruzado Ouro Html Passivo System App Source Node Limit Cloud Deploy."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Discursa e expõe puristamente a versatilidade absoluta de Acessos M365 limit base de Consumo X Edição X Preview O.O.T.B dos Bot PVA Models Copilot em Life cycle.",
            "papoReto": "Como um polvo, Microsoft tem 3 abraços de segurança pro teu Robozinho: 1. O chefe cego sem dinheiro ou conta Microsoft Premium que só quer ver se o robô tá fofo pra comprar e te pagar e validar a UI dele sem tocar na engine de trás dele: Compartilha o famoso Link grátis e magico do 'Website de Demonstração (Demo Website Hosted URL)', roda macio pra todos C-LEvel aprovarem sem restrição! 2. Agora pro Time de Hackers Devs gordos da T.I meter a mão no motor e código engine purista ali com você pra te ajudar a programar a bagaça? Pega todos os crachás M365 deles ali na firma listados vivos e os enfia num 'Grupo de Segurança (Entra Security M365 Group)' do Teams corporativo fechado AAD e enfia esse grupo MESTRE nas Roles atreladas Permissões do Bot PVA e da solucao mestre! (Autoriza todo mundo num cacho só na mesma pegada). \n3. Tudo Pronto! E agora, praquele zé ruela ali da calçada em casa cego logado fora do teu sistema que entrou ali de curioso na americanas.com quer falar com sua loja? É só vomitar e renderizar ali escondidinho embedado na tela do site html puro seu um bloco solto Mestre Atrelado Passivo cruzado iFrame limit html UI base nativa Microsoft Link e botando no Hotsite (Ele acessa Anonimamente sem licenças e consome na maciota).",
            "respostaCerta": "Sequência Ouro de Liberar Bot PVA: Teste de Cego Pra Aprovar UI Passiva = Site Demo (Demo Site Link). | Autorizar Colegas Desenvolvedores a Codigarem o Bot OOTB M365 Base Nuvem UI Ativos = Sharear em Bloco massivo num Grupo de Segurança Nuvem AD M365 Nativo OOTB Cruzado Mestre Oculto Base (AD Security Group Roles cross sharing Co-authorship limits). | Renderizar em Sites Web Lojas Publicas para Povo leigo cego consumir OOTB na Tela do PC= Bloquinho Embed iFrame Base Oculto Html Ativo Limit OOTB M365 Component.",
            "puloDoGato": "Dominemos as trilhas arquiteturais nativas matrizes e isolantes dos ambientes de deployment/Consumption de PVA (Copilot engine): `Demo Website URL Features`: atrelado e provisionado out-of-the-box system engine hosting page free url para stakeholder UI Testing purista cego passivo passivo Validation (zero Power Platform licensing needs pass barriers). `Co-authoring e Maker permissions flow`: Invariavelmente ancorados puramente nas limitações de governanças corporativas Entra AD, forçando por escala e matriz best pratices limit a ingestão agrupada via assignment role de `AAD Security groups` atrelados blindando access policies Dataverse Oculta M365 Engine na aba Ouro Sharing no portal. Para publicação passiva purista em portais Third-Party Html public websites limit blindados UI systems: the embedding via Custom HTML object node tag `IFrame iframe src block` é o protocolo mandatório padrão Web.",
            "dicaOuro": "Compartilhar e Mostrar bot pro Chefão OOTB Testador cego M365 que de Teste e Validação final purista sem ter licencas M365 Pagas Atentas= URL Do \"Site/Portal de Demo Nativo Ativo UI Grátis Microsoft\". | Co-criar e Desenvolver com equipe de Elite de TI junto no bot (M365 Sharing Co-autor Devs)= Crie ou Utilize e Atrele a Permissão no bolo fechado purista Ouro chamado \"Grupo M365 Corporativos de Segurança Base de Contas Ativos do AAD Entra ID System Group Limt MS\". | Jogar o Bot de loja Pro Povão da Internet usar Cego e bater Pato no Teu site = Bloquinho solto código Embedded Html IFrame Cruzado System M365 Engine."
        }
    },
    {
        "id": "q212_topic1",
        "text": "Em um labirinto analítico e projeto denso em arquitetura NLU O.O.T.B (Natural Language Understanding) focada em Dataverse no Power Virtual Agents, você montou e desenhou com pinça e ativou um nó engrenado em bloco de sistema UI farto de Perguntas OOTB limit engrenadas e ativadas pro chatbot (Question Node OOTB Component Action base limit system Node) que indaga rigorosa cruzada ao usuário \"Apenas me fale algo pra colher sua Faixa Etária Idade Pura cruzada no Chatbot Ocular Limit e Ativa M365 Cega?\". \n\nO teu Estagiário quebrou o ritmo limpo O.O.T.B engrenando nativa a Inteligência Artificial e te trouxe e vomitou a seguinte proposta burra M365 System Limit engrenada:\n- \"Ó Grande Chefe, eu criei puristamente e configurei com pinça na engine OOTB lá as opções cruzadas purista de Múltipla Escolha Engessada Limpa Ativa estática cravada do sistema (Options Multiple Choices Array buttons), botei lá a mão suja em botão solto cruzado 'A- 0ate15anos limpo ativo', 'B-14 a 28 anos engessado cego ativo cruzado OOTB', etc, etc, etc e isso atende a inteligência base Limit M365 UI e resolve engrenado NLU OOTB nosso gap matando limit na base né?!\"\n\nEssa proposta burra atende com esmero, de certa limit cruzada ativa funcional limit engrenada na M365 os pilares limit do Copilot e os objetivos puros do PVA O.O.T.B engajar inteligentemente NLU NLP M365 Nuvem na tela ativa limit system AI cruzada?",
        "options": [
            "SIM (O estagiário botou pocando e resolveu limpo cruzado no PVA NLU).",
            "NÃO (A prova destrói OOTB a mula estagiária Limit PVA AI M365 Engine Purista em Multiple Choices Nativas O.O.T.B!)."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Avaliação letal da distinção de entidades customizadas (Fixed/Multiple choices boolean NLU) vs Entidades de Inteligência pre-construídas nativas da própria Engine O.O.T.B de PVA (Pre-built System Entities O.O.T.B recognition engine power NLP capabilities).",
            "papoReto": "Maluco, Demita! Essa desgraça de Multiple Options Button Click Static limit engessado! Quer catar faixa de idade das pessoas sem encher linguica cruzada OOTB no balão bobão feio? Usa a força e inteligência brutal canônica e divina da Microsoft e os Nódulos soltos puristas cruzados M365 de Entidades Pré-Prontas Nativas do Copilot PVA! A MS tem o 'Identificador Idade (Age Entity Limit NLP OOTB System Cego)' ou de Identificador OOTB de 'Numero (Number Entity)'! Pela glória do Sol! Quando o doido do chat digita 'Eu vi as estrelas e nasci e tenho dezenove véio!', a Microsoft O.O.T.B System Engine lixa isso, ignora o mato, acha o numero oculto NLU System (19) cruzado, saca e chupa inteligentemente a idade da Entity Base e já bota onde você quiser matematicamente crua e mastigada sem os seus 'botoezinho feio listado A B ou C estátio' de multiplca escolha feio do estagiario! Botoezinhos Multiplos Botão Manual pra Idade = Um Lixo Arquitetural System. Sistema M365 Age/Number Entities base Limpos Autoclassificacion engrenados OOTB Limit M365 NLU NLP Mestre Base Limit = Ouro PURO M365 Nuvem NLU!",
            "respostaCerta": "Não, estagiário destruiu puristamente Ativo NLU OOTB da base engine. Entidades Age / Number System Entities Limits M365 Ativa nativamente é a Base Matadora System NLU.",
            "puloDoGato": "A engenharia do Bot (Copilot MS Engine) encapsula capabilities N.L.U capabilities `Out-of-The-Box pre-built entity classifiers modules arrays`. Capturar métrica solta puristamente como Age, Dates, Currencies arrays variables text streams exige e obriga a adoção e engrenamento base `Identify properties System OOTB entity parameters (E.G. System Entity 'Age' or 'Number' Base limits parameters engines block OOTB properties NLU arrays variables limits limits)`. Mapear e ancorar hard-code static option manual arrays Buttons UI ('Multiple Options Clicks boolean forms') é desestimulado forçadamente em best practices, gerando Overhead em UI Flow chat design blocks, frustando e cortando e aleijando todo fluxo do NLP engine OOTB free text recognition arrays nativos engine limit system cross limits arrays variables text.",
            "dicaOuro": "Bot AI de Copilot MS PVA pedindo O.O.T.B idade/dados números de CPF de Gás Limit Ativo engrenado puramente a mão via caixinha limpa \"Multiplca Escolha\" listinha manual Feia de estagiário OOTB? = FOGE DA GABIARRA e de botes e botões Multiple options cegos Ativos OOTB base limit cruzado M365 engrenados OOTB no Node de Pergunta! Pra NLP Inteligente MS NLU fluir liso mágico, sugue cru O.O.T.B pelo Identificador de Sistema Inteligente chamado O.O.T.B 'ENTIDADES DE SISTEMA Microsoft Nativas (Idade Age System Entity Array Variable Limit ou System Numbers Entities M365 Limt array base Limits engine)!"
        }
    },
    {
        "id": "q213_topic1",
        "text": "Você construiu ativamente com sua mão, em OOTB M365 Limpo Ativo Copilot Copiloto Nuvem e Botões de Chat Nativos, um PVA (Copilot Chatbot) Mestre O.O.T.B.\nOs diretores querem saber puristamente os limitadores Nativos O.O.T.B do Microsoft Omnichannel, pedindo a você que atenda os painéis para verificar OOTB purista em Dashboard nativo MS M365 os Gargalos do Seu Robô.\n\nEles berraram no Slack do Teams, focados O.O.T.B engrenados nas dores brutais cruzadas limpas Ativas pra você cruzar engrenado puristamente em Métrica Nativas: \nRequisição Ouro A: \"Me diga, ó Mago M365 PVA Analista, QUAL O FATOR MAL-MALDITO EXATO MOTIVO (quais tópicos com gaps nas respostas cegos NLU M365 Limit base engine base ativos engrenados cruzados OOTB) que está empurrando e assustando massivamente nossos usuários do Robô e caindo forçadamente M365 Limpos puros transbordando Ativamente os clientes cegamente para cima das costas engarrafadas de Filas Cruzadas no Dynamics Telemarketing Humanos Reais das 13h horas ali perdendo SLA cruzados ativos Limpos engrenados OOTB?\n\nRequisição Ouro B: \"Também me mostre Seco purista Ativo na tela engrenado os Números Crus Matemático Brutos Volumes Absolutos Volumétricos de Volume Conversacional Base de quantas chamadas/conversas baterem pro Povo Call Center (Transferências Transbordada Real M365 Mão pra HUMANO Plantão Live Atendente) por dia passivo ativo O.O.T.B limit Cruzado M365 engrenados OOTB engine base NLU System Mestre Ouro limit ativo base engrenado Mestre limit na tela? \"\n\nAssocie corretamente, como Mago NLU Copilot, O.O.T.B puramente de que Paineis Native Ouro Microsoft Metrics Copilot Base Reports limit M365 Limit MS Oculto Nativo PVA você atrelou Base e cruzou base Mágica para pescar cada pérola NLU Limpa pra eles na engrenagem System Dashboard Reports:",
        "options": [
            "No 1º (Pra descobrir Causas Matadoras do Transbordo Live cruzado do Gado pro humano): Abra cruamente UI de \"Direcionadores de Taxa Massivo de Transferência OOTB Engrenado (Escalation Rate Drivers Report)\". |\n No 2º (Pra sugar O Número Burro Volume Cru System Quantitativo Numérico Transbordado OOTB): Abre OOTB Purista Limite e veja limpo no painel base passivo OOTB Mestre Nuvem Nativo Cego System Limit de 'Taxa Pura Estática de Escalation Base OOTB Engrenado (Escalation Rate Metric Dashboard)'.",
            "No 1º: Ative painel cego Engajamentos Ouro Metrics System Time Series Ativos OOTB base M365 limit Cruzados OOTB engrenados O.O.T.B NLU NLP. |\n No 2º: Analise os Resultados cruzados Session Results Outcomes Limt M365 OOTB engressados NLU Ouro base Limpos OOTB.",
            "No 1º: Leia a métrica M365 'Taxa de Escalonamento Limpo OOTB M365 Rate Engressada purista Ativa Cruzada OOTB Base Limita'. |\n No 2º: 'Resultados Base Pura System Rate M365 Limpas de Session Time Volume OOTB System Node'.",
            "No 1º: 'Impulsionadores e Limit Ocultos de Volume Escalonado Rate Limits Ouro M365'. |\n No 2º: 'Engajamento Bruto Limpo System M365 Ativo Rate Outcomes OOTB Limits Engrenados MS Limit NLU Nativas Ativas Ouro'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Análise profunda limpa sobre volumetria M365 e Performance Tuning Analytics M365 NLU NLP (Métricas Nativas OOTB KPIs de Handoff/Escalonamento Copilot PVA).",
            "papoReto": "Painéia Nativos base do teu chatbot, as duas setinhas lá em cima! Você tem que pescar dois peixes: A Causa (Qual tópico bugou feio M365 e fez o cliente xingar e apertar 'quero falar com gente de carne osso') e O Volume Total (Qtd/Volumetria final M365 Limpa crua que bateu na mesa do seu cal center atulhando e atolando eles vivo). \nResposta Um na cara: Quer achar o Tópico Ouro defeituoso assassino de NLP que tá transbordando (A CAUSA Ouro Limit OOTB base limit)? = Caçe ali e leia o termo 'Drivers Ouro Limit OOTB Base (OS IMPULSIONADORES MESTRE M365 de Taxa Ouro, vulgo OS Escalations Causes M365 OOTB)! \nDois: Quer ler os milhões burros frios numéricos quantitativos de QTD chats cruzados que a Microsoft O.O.T.B contabilizou que furaram o bloqueio do bot M365 Limit e deram Stop e foram encaminhados pros teus telemarketings? Leia secão passivamente O.O.T.B o número do ponteiro ali escrito de 'Taxa de Escalation Crua Volume MS (Escalation Rate KPIs M365 base Limits engressadas O.O.T.B Limt)'. E tu virou Mestre!",
            "respostaCerta": "RQ 1 Ouro M365 Base (Ver Causas Assassinas Matadoras Mestre OOTB Limits do Bug NLP HandOff humano) = Report Drivers of Escalation Rate (Impulsionadores nativos de Escalonamento) | RQ 2 (Ver Volumes Números Cuspidos Puros Matemáticos cruzados Cego Transferudos OOTB Limit M365) = Escalation Rate Pura Volumetria OOTB M365 (Famoso Dashboard Escalation Rate puro engessada cruzada nativa M365).",
            "puloDoGato": "Os Dataverse/Insights Dashboard Metrics out-of-the-box (OOTB) the PVA (Copilot) engines report KPIs base categorizados. A nuance da prova está na terminologia `Drivers vs Rate arrays system metrics`. \nA `Escalation Rate` (Taxa OOTB System MS) isola e plot numérico (Number values series arrays array timeline series) e tracking de aggregates session conversions Handoff limits (Transferencias Agent human OOTB queues System rates numbers count OOTB M365 Base Limits). A sub-métrica granular cruzada AI insight limit \"M365 Escalation Rate Drivers (Direcionadores Limits Causas NLP Ouro Limits M365 NLP engine bugs blocks list OOTB M365 NLU engine limitations)\" rankeia cruzadamente explicitamente OOTB quais Specific Bot Topics triggers arrays M365 NLP failures arrays geram a timeline com mais desistências limit system handoff M365 failures conversions blocks limits engine (a.k.a \"O Motivo NLU engine block System Cause do Handoff\").",
            "dicaOuro": "1: Quer investigar ali NLU NLP PVA Qual a O.O.T.B CAUSA/TÓPICO EXATO e Mestre Falho que empurra o cliente O.O.T.B para implorar pra Transferir Atendete humano (O \"POR QUE\") OOTB Limit? = Cheque o Dashboard M365 de \"Impulsionadores de Taxa de Escalate (Escalation Rate *DRIVERS* Cruzados M365 Limits Nativos)!\". \n2: Quer ver purista Seco OOTB Matemática o NUMERO/VOLUME QUANTAS vezes e qtd cruzada de cliente que bateu P.V.A OOTB no colo e Mesa do Humano M365 Ativa Limits Hoje? = Puxe OOTB Passivo e abra a \"Taxa de Escalation Rate Massivo Pura System M365 NLU NLP Base Limit KPI Dashboard O.O.T.B\" (Rate Ouro Limpas Nativas)."
        }
    },
    {
        "id": "q214_topic1",
        "text": "Você está a usar o Power BI para construir um painel (dashboard) corporativo para a diretoria. Precisa de tornar o dashboard disponível para um conjunto específico de utilizadores VIPs, mas por exigência, precisará incluir cinco convidados externos avulsos.\nO target de destinatários não excede 50. O principal bloqueio da governança M365 impõe que: os felizardos a receberem a chave não devem, sob nenhuma hipótese, ter a permissão de 're-partilhar' o seu dashboard base com o resto da firma vazando dados.\n\nQuais táticas cruciais e as TRÊS Ações você deve realizar na plataforma? (Selecione a engrenagem com as 3 opções corretas aglutinadas):",
        "options": [
            "Ação 1: Iniciar sessão no Power BI Service -> Ação 2: Introduzir os endereços de e-mail limitados nominais individuais na caixa de controle -> Ação 3: Desmarcar a opção 'Permitir que os destinatários partilhem o seu dashboard'.",
            "Ação 1: Iniciar sessão local atrelada no Power BI Desktop -> Ação 2: Criar grupo limit de distribuição genérico -> Ação 3: Marcar limite 'Permitir partilha externa restrita ativa'.",
            "Ação 1: Criar lista dinâmica de Segurança -> Ação 2: Adicionar todo Tenant cruzado base -> Ação 3: Usar portal Ativo para fixar Link Mestre Limit de leitura Pura.",
            "Ação 1: Iniciar log UI Power BI Service -> Ação 2: Jogar link e Publicar na Web Limitada Oculta (Público) -> Ação 3: Ocultar o Dashboard Limit de pesquisas no Bing."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre as políticas de segurança e os métodos de partilha direta no Power BI Service.",
            "papoReto": "Vai mandar Relatório confidencial pro chefe e mais 5 donos da empresa sem deixar que eles 'passeem o link'? Três passos: 1- Desktop só constrói relatório, quem dita quem lê é a Nuvem (Power BI Service/Portal Online). 2- Como são poucos felizardos, bota a lista dos e-mails deles individualmente para ter controle absoluto. 3- Desliga a chave matadora \"Permitir que os destinatários partilhem\". Acabou a fofoca e vaza zero de dado!",
            "respostaCerta": "A sequência fina Ouro: Entrar online nuvem Power BI Service | Inserir E-mails individuais do C-Level | Desmarcar a infame Caixa de Checagem 'Allow to share/Permitir que os destinatários partilhem'.",
            "puloDoGato": "Dashboards e relatórios são partilhados no 'Service' (Nuvem), não no 'Desktop'. O controle unitário granular (Individual E-mail) é propício pra grupos pequenos (< 100). E como o requisito exige que NÃO passem o link adiante, a configuração manual de desativar o 'Allow recipients to share' é o ponto chave.",
            "cascasDeBanana": [
                "Compartilhar e Publicar na WEB (Public link M365 PBI web Publish). Essa armadilha na prova é veneno: Publicar algo como 'Público na Web' rompe o Paywall/Segurança e deixa a porta aberta no Google para quem quiser ver. Jamais é resposta de segurança restritiva!",
                "Iniciar sessão no Power BI Desktop: Você não cria limites de partilha ou segurança do relatório pelo cliente local. Toda a malha de governança de acesso reside puramente no portal Cloud Service."
            ],
            "dicaOuro": "Partilha extremamente Controlada contra vazamentos? = Trabalhe 100% no Power BI Service + Insira um a um na mão (pequenos grupos) + Desmarcar a Caixinha 'Allow to Share'!"
        }
    },
    {
        "id": "q215_topic1",
        "text": "Em um movimento voltado à modernização, a sua corporação exige a criação veloz de um bot de atendimento com Power Virtual Agents (PVA). \nO comitê quer preencher o Q&A (Perguntas vs Respostas) do bot, porém você não tem tempo para digitar os tópicos manualmente.\n\nA engenharia percebe que a empresa já possui um portal antigo com uma longa página 'FAQ - Perguntas Frequentes da Nossa Firma' publicada e acessível. Qual Funcionalidade de Ouro nativa do PVA você deve acionar para cruzar as informações, extraí-las e salvar os prazos, sugando toda aquela listagem de FAQ do site engrenando no seu chatbot base?",
        "options": [
            "A Ferramenta Canibal de IA chamada 'Sugerir Tópicos (Suggest topics)'.",
            "O Módulo Isolador de Processamento do AI Builder (AI Builder NLP Parser).",
            "A Engrenagem de Varredura Nuvem Power Automate com ação de Crawler.",
            "A aba Base 'Frases de Gatilho de Importação Cruas (Raw Trigger Import engine)'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Focada no acelerador matador 'Zero-to-Hero' do Dynamics PVA: A geração massiva de tópicos por meio de Crawler Web.",
            "papoReto": "Seu chefe pediu pra tu montar o robô que responde às mil dúvidas da empresa. Você não precisa digitar de trouxa a semana toda! A Microsoft joga uma mágica: Se a empresa já tem uma página web \"Ajudas Frequentes/FAQ\", você pega esse LINK da página na internet, enfia na porta gorda do PVA chamada 'Sugerir Tópicos (Suggest Topics)', e manda rodar! A Nuvem lê o site todo numa tacada, descobre onde tem pergunta e resposta, e cospe dezenas de Tópicos do PVA prontinhos na sua cara. Você só aprova os melhores!",
            "respostaCerta": "Ação Mestra: Sugerir tópicos (Suggest topics).",
            "puloDoGato": "A funcionalidade macro `Suggest topics` permite dar input em links de URL ou ficheiros (Ex: páginas FAQ html, PDF, CSV, Word text doc). O PVA crawler processa as entidades textuais estruturais (Identifica o que parece ser Título/Pergunta `<h2>` e o parágrafo subsequente de Conteúdo/Resposta `<p>`), gerando listagens de rascunho de Tópicos prontos para revisão, economizando absurdamente o tempo do pipeline de configuração.",
            "cascasDeBanana": [
                "Frases de Gatilho (Trigger phrases). Isso não extrai Tópicos novos. As 'Frases' são configuradas OBRIGATORIAMENTE dentro de cada Tópico para testar a ativação da NLU (Como o usuário deve chamar aquele nó para abri-lo). Elas são a faísca secundária.",
                "AI Builder: Embora soe bonito, os modelos de AI Builder tratam OCR de forms, detecção em fotos ou predição e não realizam o processo nativo e integrado veloz de importar base de bot do PVA."
            ],
            "dicaOuro": "Copiar dezenas de FAQ/Respostas num passe de mágica de um Site antigo da Empresa ou PDF direto pro miolo do Copilot = Use a Funcionalidade Magica O.O.T.B. 'Sugerir Tópicos'!"
        }
    },
    {
        "id": "q216_topic1",
        "text": "Sua corporação está operando um Model-driven App no Dataverse. O seu cliente logado solicita que a visualização orgânica 'Localização Rápida (Quick Find View)' permita magicamente que se pesquise uma Conta ao se digitar o numeral exato da string do 'Número da Conta'.\n\nNo entanto, a governança ordenou com unhas de ferro que este exato campo numérico esquisito JAMAIS seja exibido como coluna exposta para o cliente ver e ler ali depois nas listas com o resultado da Busca Rápida. Onde devem configurar o Campo 'Número da Conta' na Quick Find View para o robô achar via busca, mas sem exibi-lo esteticamente no menu principal e satisfazer esse duplo fluxo de Ouro?",
        "options": [
            "Nas engrenagens passivas ocultas 'Colunas de Localização (Find Columns)' da visualização de Busca Rápida Quick Find.",
            "Nas grades visuais de exposição massiva ativas 'Colunas de Visualização (View Columns)' da Busca Quick base passiva.",
            "No labirinto arcaico de Settings de Pesquisa do Dataverse Global Admin Center.",
            "Criar regra na Tabela através de Business Rules de 'If Search Equal Target Hidden = True'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Destila o clássico conceito atípico do Power Apps Dataverse Views (A Disociação estrita entre 'View Columns' e 'Find Columns' nas Listagens Rápidas).",
            "papoReto": "No cantinho do Grid de clientes no Dynamics rola a mágica da Busca Rápida: Como você pesquisa o CPF do Cidadão se ele nem aparece ali na lista desenhado na tabela? A Microsoft dividiu a View Localização Rápida no meio: Tem a Coluna de VISÃO 'View Columns' (o que os olhos enxergam no grid na tela: Nome, Endereço asdf), E o braço oculto 'FIND COLUMNS '(Aquele grupo não visível onde você atrela diz pra Nuvem: 'Mano, olha pra essas colunas aqui escondidas por trás e tenta achar esse cara com o dado!'). Para obedecer o chefe ativamente de deixar a pesquisa ACHAR O CPF mas ESCONDER esteticamente da Tela System: Marque a bolinha do campo só ali quietinho na 'FIND COLUMNS', e nunca a coloque de volta exposta ali na 'View Columns'!",
            "respostaCerta": "Ação Mestra Limit Base: Adicionar o atributo unicamente na Aba de 'Colunas de Localização (FIND Columns da Quick Find)'.",
            "puloDoGato": "A engenharia do Dataverse (Quick Find Search mode) sub-divide o layout da View. As `View columns (Colunas de Visualização)` arbitram puramente o UI Grid Display render O.O.T.B (Quais campos descem mostrados na grelha Front-End HTML do App). Independentemente disto, a Engine SQL Indexer é triggada exclusivamente pelo pacote da caixa mágica de indexação \"Find Columns filter properties (Colunas de Localização)\", permitindo consultas Ocultas (Hidden matches database fetches).",
            "cascasDeBanana": [
                "Colunas de Visualização (View Columns). Incorreto crasso! Escolher estas expõe obrigatoriamente a coluna inteira desenhada aos olhos dos usuários.",
                "Business Rule pra busca. Armadilha! Business Rules rodam regras Client-Side logic forms engines, nunca batem em sub-engine SQL Find XML de renderização global Search Bar System grade list O.O.T.B!"
            ],
            "dicaOuro": "A busca Rápida digitada parou de Achar os termos de uma coluna na tabela base? = Adicione a Coluna Limpa Mestra a cega na caixa de Index 'Find Columns' (Colunas de Localização)! Quer apenas que ninguem VEJA ELA feia mas o Banco a use com inteligência? Nela mesmo e fuja cru do View Columns!"
        }
    },
    {
        "id": "q217_topic1",
        "text": "O programador júnior montou um cloud flow no Power Automate. Ele acionou um gatilho 'Ao Invocar/Quando um registro for modificado (When a row is modified)' na tabela Conta.\nEntretanto, o robô do Automate age como louco (dispara se modificarem até a Letra Maiúscula do Nome da Loja, do CEP ou a cor da aba, provocando dezenas de falsas execuções diárias de fluxo fútil sem regras e gerando custo).\nA governança determinou que \"Pela otimização vital do limite API e licença do locatário, este fluxo só pode rodar cegamente caso os usuários editem/modifiquem puristamente e excepcionalmente apenas e unicamente o campo 'Status do Crédito'.\"\nO que deve ser preenchido nativamente O.O.T.B no painel gatilho da Tabela MS para limitar a roda do Flow sem gastar execuções à toa?",
        "options": [
            "Aplicar limitação no campo de propriedade 'Filtro de Atributos/Adição Mestra de Coluna (Select columns / Attribute filters)'.",
            "Embutir limite passivo nativamente por Variável Cega de Expressão de Filtro (Filter array).",
            "Criar Lógica Passiva de engine de \"Execução Condicional Pós Engrenagens Limpas MS Nuvem system Run After\".",
            "Modificar o Gatilho Limit MS e torná-lo um Engajador Pessoal de Agenda MS (OOTB Schedule Limits Triggers Flow Puros)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Proteção Vital Dataverse Cloud Flows e Rate limits API quotas. Foca no Trigger Parameterization.",
            "papoReto": "Robô fofoqueiro Power Automate não dura na Microsoft! Se o estagiário bota o gatilho: 'Se mudar a Conta eu rodo', cada coisinha na aba conta que a secretária arrumar, chupa seu Dinheiro API M365 (e executa a ação e cai em loop inútil). Solução matadora e limpa: Vá lá na caixinha amarela nativa base do seu Trigger Microsoft cego M365 (Aquela do 'When Record modified'), abra as Opções Avançadas e ache o parâmetro genial chamado 'Silecionar Colunas / Filtro de Atributos (SELECT COLUMNS)'. Coloque ali a exata coluna da conta purista fiel de 'CRÉDITO' engrenada ali! E magicamente a engine vai ficar surda e só gastar disparo do Robo ativamente caso toquem brutalmente NESSA coluna e em NENHUMA OUTRA!",
            "respostaCerta": "Ação Ouro Protetora de Performance: Assinar ativamente limit engrenado engessado na propriedade base OOTB 'Select Columns (Seleção de Colunas ou Filtro Limit de Atributo)'.",
            "puloDoGato": "Tuning Cloud MS execution rate limitation limits consumption exige como best-practice adotada de mercado a sub-delimitação via propriedade OData Dataverse trigger actions \"Select Columns\" (anteriormente referida em outras engines como `Attribute Filters`). Este restritor MS API evalua a payload passiva do Trigger Payload Table hook do webhook trigger. Não rodará (Zero Run Flow Costs) o pipeline macro se o Change Tracker XML Dataverse limit não confirmar purista MS action Limit que apenas o Target Select Column data block payload node sofreu mutation Data target limits O.O.T.B system.",
            "cascasDeBanana": [
                "Usar Expressão de Filtro (Filter Array OOTB) após correr. Puxar ramificações if/Else APOS no quadro dois MS ou Run-After é uma tragédia Orçamentária. O disparo M365 Run limits já queimou API limite na nuvem! O roubo M365 já ocorreu pra cobrar seu Flow na fatura porque ele 'Despertou' primeiro. Pare antes limitando o Gatilho Cego limpo."
            ],
            "dicaOuro": "Quer frear a pletora/explosão de dezenas disparos idiotas diários no Power automate e Fazer o Robô só acordar cego de tiverem trocado a 'Data do Crédito'? = Adiciona O Nome Cego Da Coluna O.O.T.B matriz lá na Base de 'Selecionar Colunas (Select Columns do Gatilho Limpo MS System)!"
        }
    },
    {
        "id": "q218_topic1",
        "text": "Em um Locatário Dataverse, o cenário determina uma Organização atuando sob Governança via regras puras M365 Dataverse limit nativos base de 'Hierarquia de Segurança por Posições (Position Hierarchy Role Model MS)'.\nNo diagrama, o Gestor Pleno Alfa preenche nativamente a Posição Direta Topo logo no nível Base System Acima (Depth Limit=1) em ralação ao Vendedor Menor B, cujo portfólio engata dezenas de registros soltos O.O.T.B Oportunidades.\n \nConsiderando a 'Profundidade da Hierarquia = 1' (Gestor Alfa em nível purista nativo IMEDIATAMENTE SUPERIOR O.O.T.B), o que O Alfa consegue magicamente nativo acessar e efetuar sobre os registros fechados da raiz O.O.T.B engrenada limitando o subordinado Vendedor Menor B?",
        "options": [
            "Obtém o controle de Ler (Read), Editar os atributos Cego Ouro M365 (Update), e incluir Anexos puristas do sistema neles (Append Base Ouro).",
            "Recebe O.O.T.B ativamente M365 Limit Total Full Control com poderes nativos cegos MS Limit de Editar e DELETAR Ativamente Cego Limpo Records MS Puras (Delete Role OOTB Limit M365).",
            "É blindado e apenas possui puristamente System Nativas limit engrenado o visual base cego nativo (Apenas Leitura / Read Only Passiva M365 Limit OOTB base).",
            "Nada é gerado limitativo Base MS, só consegue Ações OOTB System Nuvem caso a aba Sharing O.O.T.B Manual limits for efetuada na UI Limit M365 Ativa."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Controle hierárquico M365 Security Layer Position Rules Dataverse. Foca em 'Depth of Limits permission cascading rules'.",
            "papoReto": "Firme no M365: Se a firma diz que usa Hierarquia de Posições, o Chefe enxerga por debaixo dos panos tudo do guri que está em sua teia. Mas aqui rola o limite: Cujo andar logo abaixo (Imediatamente subordinado a Ele = Profundidade de valor 1 Ouro M365), o chefe Chega Cego dando voadora, Lê as propostas O.O.T.B limpa do menino (READ limits base M365), Altera o cadastro cruzado ali os lixos errados puristas Ouro Limit OOTB System Ouro (UPDATE limitations base) e Pendura PDF ali Ouro MS Limits Nuvem nas notas engrenadas MS cega Limitadas System Ativada Limits (APPEND!). O que esse chefe não tanka fazer System Limits Nuvem M365 e nem apagar Limit nativo OOTB Limit nem sendo dono? Ele NÃO pode puramente Excluir (Delete Record Limit)! E se fosse de Posição de Nível Ouro M365 Nuvem Limit = 2 pra baixo (Ou seja, o chefe do chefe engrenado base OOTB)? Eles também se lascam e não alteram nada, ficando engrenados limit base apenas como Leitura (Read-Only) limit M365 Nuvem Limits Pura OOTB na marra!",
            "respostaCerta": "Acesso Matador MS System: Alfa ganha cego de Depth=1 o pacote (Leitura Passiva Limit + Atualizar Attributo Limpo OOTB System + Anexar M365 Data Limits Action).",
            "puloDoGato": "Security Dataverse Position Hierarchy Matrix Engine confere permissions cascade dynamics O.O.T.B com base estrita no Depth parameter limits. Level-1 nodes (Subordinados Diretos System limit M365 Data engine target) concedem agressivamente aos Managers roles properties combinados passivos limits Ativados OOTB engrenados puramente de `Read Target M365 arrays block, Update Limits Target array MS limit properties NLU base, and Append limitations to Record OOTB MS Cloud Layer properties arrays`. Para Nodes/Niveis engatilhados limits M365 OOTB system Ativada engrenado OOTB Limit com System limit Depth = 2 ou System OOTB inferior profundos Nuvem Limit limits M365 arrays, a Dataverse System Security downgrade layer rules NLU Limit OOTB Limit M365 Nativas applies hard restriction limits concedendo UNICAMENTE o `Read-Only System Limit Passivo M365 role OOTB layer capability`.",
            "cascasDeBanana": [
                "Acesso Total Cego Incluindo Delete Purista M365. Mentira. Mesmo Hierarquia de Gestores ou Posição MS Limit não permite ao Alfa Apagar brutalmente limpo Cego os esforços O.O.T.B do estagiário engatados Nuvem (Owner base limits).",
                "Apenas leitura (Read-Only passiva system Ouro Limit Cega Nuvem OOTB M365) => Errado. Este mode Red-only Passiva System Limpo Base MS limits base System Target Nuvem aplica apenas em caso Puramente Limit do guri MS OOTB Nativa estar em profundidades M365 (Depth>1 limites Cruzada limit Nuvem OOTB purista System engrenada!)"
            ],
            "dicaOuro": "Pegou Segurança Hierárquica M365 Base no Simulador: O Chefão Pleno no Nível engrenado 1 (Direto OOTB) pode Alterar cruzado (Update) Limpo, Anexar OOTB e System Ler Base Ouro MS! Mais pra baixo M365 Base que Depth Nivel = 1 puro (Subordinados Distantes OOTB Nativas limit)? Só engrena limit e System Olham Nativas e tem M365 Leitura Base Cega (Read-Only)!"
        }
    },
    {
        "id": "q219_topic1",
        "text": "Você tem a missão primária engrenada na M365 Cloud Automate limit OOTB de criar um fluxo monstro Power Automate Limit. O Flow processará as dezenas de lixos M365 engrenados puros que caem e chovem de fora do ERP em formatos de Faturas/Boletos que são em PDFs digitais ou fotografias escaneadas cegas e sujas base OOTB de boletos impressos MS Limit Cega do celular dos caixas limits Nuvem.\nA Meta do Flow e da IA Automate Nuvem: sugar cirurgicamente cru engrenada Limit e puxar O Ouro System Pura Nuvem Ativos Limpo Engrenado Ouro MS Limit base Ativada puristamente engressadas limit e extraír Cego limit M365 'O NUMERAL EXATO IDENTIFICADOR base M365 DA NOTA DA FATURA OOTB SYSTEM Ouro Ativa Cega' Ouro Limpa o campo OOTB System Oculto do 'VALOR TOTAL EM NOTA CRU MS'.\n\nQue engrenagem mágica MS IA Ouro Nuvem O.O.T.B Pura AI Builder limita cruzada e faz isso acontecer orgulhosamente Ativa Limit M365?",
        "options": [
            "Invocar puramente e Adicionar O M365 OOTB Limits Cega AI Model Builder limit System Nuvem chamado limit Cego 'Processamento de Documentos Cego Ouro Ativa (Document Processing array targets OOTB features / Form processing M365 limit OOTB)'.",
            "Utilizar limpa e Chupar Nuvem Limit Cega Ativa cruzada Extraction OOTB Limit Mestre de Ouro System 'Extração Base De Entidades Limits Ouro Ativa System OOTB Nuvem Ouro Limita M365 (Entity Extraction Limit OOTB base MS M365 Array NLU System OOTB Limit)'.",
            "OOTB Cega Inteligência Nuvem 'Text Recognition Limit M365 Ativa Ouro Limit Cega e Limit Reconhecimento System limit M365 de limit NLU Cega MS e Textos Gerais Nuvem limits limit'.",
            "Nuvem Limit Classificação Limit Cega MS OOTB Limit OOTB System Nuvem 'Modelo purista Limit OOTB Ativa Nuvem Category Classification Limits'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca cirurgicamente na escolha correta e especialização limits Nuvem funcional de IA Models M365 AI Builder Cognitive layers para layouts tabulares e estruturados.",
            "papoReto": "Vai jogar Inteligência M365 Nuvem pra engolir dezenas PDFs de recibo de combustível Cega e Foto suja M365 e ter o luxo mágico e Ouro Ativada Power Platform de sacar e pescar cirurgicamente apenas e Exclusivo M365 O Número Cego Fiel daquele Boletasso Cega OOTB base limit M365 e o Valor Reais gordo ali System Nuvem no rodapé OOTB Ativa? NÃO MARQUE DE FORMA BURRA E ENGRENADA 'RECONHECIMENTO DE TEXTO (TEXTOCR Base limit cega System M365)'. O Text Recogniton (OCR M365) System joga todo lixo numa poça burra limit e lê do zero linha a linha perdendo você na salada M365 Cega. Pra Notas, CPF Cega e Fatura Padrão M365, o papai MS OOTB atirou de Ouro O Modelador de IA Matador Ativada 'PROCESSAMENTO Cego limits Ouro Limit M365 Cega System Ouro e Nuvem DE O.O.T.B Limit Base System OOTB Limit DOCUMENTS (Document / Form limits Ouro Processing Array Limits Nuvem limit Nativas Limit base System M365 Pura)'! Este Limit Treinado mapeia a geografia Ouro do PDF engrenada puristass limit M365 e engole os Pares 'Rótulos e Numerais' Ativos limits System Cega Pura Nuvem lindamente!",
            "respostaCerta": "Ação AI Ouro Limit: Usar o AI Builder M365 OOTB Processamento cego system purista de M365 Documentos e Faturas Cega MS Ativada Limit Mestre Nuvem Pura (Document Forms Processing).",
            "puloDoGato": "Modelos OOTB M365 de `Document Processing features target capabilities limit (Anteriormente AI Forms Target Ouro Processing Nuvem arrays M365 system algorithms NLU features bounds)` aplicam algoritmos de Bounding-Box e Machine limits OCR para deduzir Key-Values Patterns NLU em estruturas semi-estruturadas limit M365 Nuvem Ativada Cega MS. Com eles, você vincula a Key Cega 'Número Fatura' à var MS Limit e injeta cruzada passiva a Extração no pipeline Power Automate Dataverse Limit M365 OOTB array engine data mapping M365 Limit properties Ouro models constraints features limit System variables.",
            "cascasDeBanana": [
                "Reconhecimento de Texto OCR Limpo System. Essa técnica lê o documento Pura Engrenada M365 como 'texto corrido limit' e não separa nem cria os mapeamentos cruzados inteligentes Oculto OOTB de (Nome = X, Valor = Y) base system limit array OOTB M365 engine variables."
            ],
            "dicaOuro": "PDF Cega e Fotos cruzadas sujas Ouro Cega System de Notas, Faturas e Relatórios fechados M365 cega pra tirar Pura Base Ouro valores cru OOTB no meião limit M365 ativada? = Sempre, Cega e sempre purista Ouro M365 Nuvem OOTB Modeler System = Processamento Ativada Nativo de Cega MS Documentos Cega e Forms Limpos OOTB Limits Cega (Document Processing)!"
        }
    },
    {
        "id": "q220_topic1",
        "text": "Você arquiteta um aplicativo de Tela (Canvas App engrenado Nativa Ouro M365 System) de ponta OOTB. Plugando o conector oficial 'Office 365 Users' no estúdio Ouro Limit Base OOTB Nuvem.\n\nSeu objetivo é exibir limpo no display a fotinha do rosto do usuário logado sorridente atual System OOTB Nuvem.\n\nQual Função PowerFx fiel M365 deve imperativamente puxar esse dado limpo do Azure MS Nuvem?",
        "options": [
            "Acionar limit a fórmula system: Office365Users.UserPhotoV2(User().Email)",
            "Ativar Pura M365 o Ouro MS comando estéril: User().Image",
            "Executar Nuvem limit M365 Pura Nuvem: Office365Users.UserProfile(User().Email).Photo",
            "Disparar Nuvem e System M365 Limit system Nuvem: Office365Users.GetMyProfile().Picture"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Destaca limites Office 365 Connected OOTB Fetch Limits e Power Fx Nuvem capabilities para imagens Cega M365 API properties.",
            "papoReto": "Malandro Canvas App OOTB Limits Ouro: Você quer por a fotinha M365 OOTB do User Cega ali OOTB limit engrenada MS System na Nuvem? O cara tenta o fácil: cravou estéril M365 'User().Image'. Fique atento! Isso às vezes amarra foto chata Nuvem cache OOTB purista System vazia MS e NLU e limit Nuvem Pura OOTB system M365 desatualizada OOTB Cega velha de meses! \nA maneira oficial cega de Nuvem Cega M365 Pura matadora Limit Cega Nativas MS Ouro Pura pra bater no Microsoft O365 e garantir que a foto da nuvem limit engrenada MS ativada Nuvem e Cega Ouro system NLU OOTB baixe nova engrenagem limit NLU purista System engrenada é chamar engatilhado o Conector Office Cego MS via: 'Office365Users.UserPhotoV2(User().Email)'! Vrau OOTB limit System Nuvem Cega!",
            "respostaCerta": "A Única Fiel OOTB Nuvem Cega M365: Office365Users.UserPhotoV2(User().Email).",
            "puloDoGato": "O `User().Image properties limits capabilities` no Power Apps limit NLU e Nativas sofre de local Nuvem device OOTB e Browser cache variables limits issues (Entregando Nulls System Nuvem OOTB Pura object ou Stale Image Pura Ouro capacities NLU variables M365 system limits OOTB). A API Office365Users limit Nuvem connector features OOTB method `UserPhotoV2()` engatilha force-fetch MS System Blob arrays limits arrays Nativas objects do Azure AD Nuvem Ativa Ativada Limit M365 Pura capabilities algorithms NLU limit System NLU limit puristass M365 rendering limits Nativas variables NLU Pura limites.",
            "cascasDeBanana": [
                "Usar User().Image. Essa engana Limit NLU M365. Apesar de ser um comando Cego nativo limit Canvas OOTB Limit M365 MS System e NLU System Nuvem limit e System, é falha pro escopo OOTB de O365 Limit NLU connector Ouro dependancy Base Limit Mestre Nuvem Nuvem Limit MS Nuvem limits!"
            ],
            "dicaOuro": "Quer foto nativa OOTB Limit Cega M365 Ouro fresca do cidadão Nuvem OOTB Logado na Firma System limit M365 OOTB Pura limit MS Nuvem limit System e limit? = Chama o PowerFx Cego Base limit e MS Nuvem M365 e Nativas Limit e OOTB limit OOTB 'Office365Users.UserPhotoV2( Seu Cega Email Limit System NLU Limits Pura M365 limit OOTB )'!"
        }
    },
    {
        "id": "q221_topic1",
        "text": "Um vendedor tenta usar o aplicativo, e abre um chamado informando: 'Estou no Dashboard de Sistema Dinâmico (System Dashboard) e a porcaria do gráfico bonito que você fez de vendas anuais não aparece de jeito nenhum pra mim, fica só uma tela branca!'.\n\nVocê investiga e averigua que este usuário infeliz possui permissão máxima na tabela base do Dataverse, logou no ambiente sem problemas, tem todos os privilégios O.O.T.B engrenados MS. Mas mesmo assinando e logando ativadamente System Nuvem M365, dores Nuvem e Limit MS limit M365 limit, continua sem ver o bendito do Grafico System O.O.T.B.\n\nQual a Causa System mais lógica base M365 O.O.T.B purista limit da falha visual do Zé não enxergar seu gráfico OOTB?",
        "options": [
            "O Gráfico OOTB construído lá System Nuvem OOTB foi criado OOTB System Ouro como 'Gráfico Pessoal Limit (User Chart)' e não foi atrelado engrenado como 'Gráfico de Sistema (System Chart)'.",
            "O Funcionário Nuvem limit MS não possui Licença M365 Power BI Premium Limit Cega.",
            "O Dashboard precisaria Ser OOTB Limit M365 Nuvem Publicado Limit Cego M365 M365 limit Ouro M365 System Admin Center.",
            "O Gráfico OOTB limit OOTB Ouro M365 Nativas não consta OOTB System Nuvem Limit Ouro System limit M365 Nuvem Nuvem NLU Pura MS Nuvem Limit Nuvem M365 Nativas no Mapa do Site M365 System."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A prova M365 diferencia rigorosamente Nuvem Limits Componentes Dataverse System Chart UI e User Chart Components.",
            "papoReto": "No Dynamics 365 isso mata muito amador: Você foi no Painel, clicou em 'Novo Gráfico', fez chique a estatistica de Leads salvou e ficou lindo! Aí você joga ele num 'DashBoard Global de Sistema (Da firma)'. Só que ninguém da Tropa além de Você consegue ver a mágica, apenas tela Branca. Por quê? A Microsoft barra isso: porque painéis de sistema só expõe 'Gráficos do Sistema (System Charts)' feitos na raiz profunda de Personalizações. Gráficos de usuários comuns que foram criados no botão frontal Ouro OOTB System engrenado se chamam 'Gráfico Pessoal' e morrem em você! Portanto promova purista e compartilhe MS Limit M365 Nuvem!",
            "respostaCerta": "A causa raiz M365 OOTB engrenada Nuvem: O gráfico puramente foi salvo Limt Cega Ativa Ouro M365 Mestre (User Chart) System Nuvem limit MS.",
            "puloDoGato": "A engine Dataverse Dashboards impõe limitações restritas 'Dashboard Type Render Matrix O.O.T.B'. Componentes hospedados no layout System Dashboards (Deploy global solutions boundaries limits OOTB layer M365 System Native) são blindados MS limit engine OOTB a carregar referências puristamente de Base 'System Charts (Global Component Objects)'. Adicionar/Renderizar Pura System 'User Charts Mestre OOTB Limits Nuvem limit' num System UI object limit M365 Nativas gera 'Invisible Object Rendering UI errors' e White-screen blocks M365 Nuvem limit para usuários sem o Ownership explícito do Gráfico purista da Nuvem limit MS.",
            "cascasDeBanana": [
                "Falta licença PowerBI: Erro Cego M365 Pura Nativas. O Painel é purista OOTB Nuvem Dynamics Engine UI, e não consome limits M365 Fabric OOTB licenciamento paralelo Nuvem PBI."
            ],
            "dicaOuro": "Adicionou um grafico super Mestre no Painel / Dashboard Principal pra toda a Firma ver, mas ninguém Nuvem Ouro System M365 enxerga o bendito gráfico alem de você? = O Gráfico que você criou nasceu M365 como 'PESSOAL (User Chart Nuvem Cega M365 System OOTB limit Nuvem)' e Painel OOTB da M365 Nuvem firma nunca Lê/Mostra gráfico Pessoal! Converta-o Limit Base Pura MS Ouro MS e System Nuvem limit Limits Pura e Nuvem Limit Limit M365 limit M365 System para Gráfico da Empresa Engatando 'Gráfico de Sistema'!"
        }
    },
    {
        "id": "q222_topic1",
        "text": "Sua empresa criou uma série de fluxos do Power Automate no ambiente de Desenvolvimento e usou variáveis fixas para conectar a URLs de APIs externas. Agora, ao moverem a Solução para o ambiente de Produção, eles perceberam que os fluxos ainda estão batendo na URL de homologação.\nO arquiteto mandou: 'Precisamos de um componente que nos permita mover soluções entre ambientes sem precisar editar o fluxo por dentro para alterar a URL, gerenciando esse valor fora do código do fluxo.'\n\nQue componente central (O.O.T.B) do M365 você deve adicionar à solução para sanar essa dependência de valores de ambiente?",
        "options": [
            "Variável de Ambiente (Environment Variable) do Dataverse.",
            "Conector Personalizado (Custom Connector) e Parâmetros de Host.",
            "Variável Global de Fluxo de Nuvem (Initialize global variable OOTB).",
            "Perfis de Segurança em Nível de Campo (Field Level Security Profiles)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca no Application Lifecycle Management (ALM) da Power Platform usando Soluções.",
            "papoReto": "Nunca, jamais, 'chumbe' (hardcode) valores fixos como links, IDs do SharePoint ou URLs dentro das caixinhas do Power Automate se você vai mandar isso para outro ambiente! Se fizer isso, no ambiente de Produção o robô vai tentar ler a tabela de testes. A ferramenta nativa para isso é a 'Variável de Ambiente'. Você cria ela dentro da sua Solução. No Automate, você aponta para a variável. Quando você exportar e importar a solução lá em Produção, o sistema vai te perguntar: 'Opa, qual é o valor dessa URL aqui na Produção?' e pronto, atualiza tudo de fora!",
            "respostaCerta": "Variável de Ambiente (Environment Variable) do Dataverse.",
            "puloDoGato": "Environment Variables armazenam as chaves e valores de configuração do ambiente, servindo como input para Flow Actions, Canvas Apps e Plug-ins. Ao exportar a solução limit, o 'Defaul Value' viaja no pacote, mas o 'Current Value' pode ser sobreposto durante o Solutions Import (ALM best practices MS Limits OOTB).",
            "cascasDeBanana": [
                "Variável Global de Fluxo (Initialize variable). Essa engana! A Variável do fluxo nasce e morre DURANTE a execução do robô e continua hardcoded no arquivo. Ela não altera propriedades ao pular de ambiente.",
                "Conector personalizado. É exagero técnico, ele serve para construir uma ponte com API não-suportada, mas não é a entidade que 'guarda configurações amigáveis de ambiente'."
            ],
            "dicaOuro": "Mudou de Ambiente e precisa trocar de URL Mestra, ID do SharePoint ou Cor base sem abrir e remendar o app ou fluxo de novo? A resposta é sempre: VARIÁVEL DE AMBIENTE (Environment Variable)."
        }
    },
    {
        "id": "q223_topic1",
        "text": "Você está criando um Canvas App e precisa carregar, na hora da inicialização do app (OnStart), uma grande coleção de mais de 3.000 clientes da tabela Contas do Dataverse para a memória local.\nA Governança exige que o app carregue rápido e consiga extrair o limite máximo permitido em uma única tacada usando M365 OOTB Canvas capabilities, ignorando o padrão de 500 itens.\n \nQual é o Limite Máximo de Registros em Memória Ouro Mestre M365 OOTB Permitido para uma Função de Delegação (Data Row limit) que você pode configurar no lado do Painel de Configurações Avançadas do App?",
        "options": [
            "100.000 registros (System Max Limits O.O.T.B M365).",
            "5.000 registros.",
            "2.000 registros.",
            "500 registros (Fixed hard-limit inquebrável)."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Destila o conhecimento crítico sobre Limites Fixos de Delegação e Tráfego Client-side no Power Apps (Canvas).",
            "papoReto": "Seu App não aguenta baixar a internet inteira pra memória do celular do cara! Se você usar um filtro ou criar uma Coleção (ClearCollect) com uma função que não delega para o banco SQL, o Power Apps vai bater na barreira padrão e puxar miseros 500 itens. Mas, se o chefe chorar pra subir isso, você vai lá em 'Configurações do App > Limite de Linhas de Dados' e só pode esticar a corda até rasgar no número mágico de 2.000 linhas! Passou disso? O App nunca trará os dados, a menos que use Funções Delegáveis.",
            "respostaCerta": "2.000 registros.",
            "puloDoGato": "The Data row limit for Non-delegable queries em Canvas Apps tem default de 500 rows MS O.O.T.B limit e pode ser escalado manualmentes via UI Settings atrelada até o Max limit system capability array de 2.000 rows. Após isso, features NLU limit arrays exigem estrita Dataverse Server-side delegation queries limits (Filter, Search, Sort OOTB Limits M365 functions array).",
            "cascasDeBanana": [
                "100.000 registros ou mais. Mito total. Canvas apps são aplicações Frontend SPA que executam pesadas no Browser RAM M365 limit. Puxar essa carga esgotaria os limites Cega OOTB Memory Cache arrays M365 System."
            ],
            "dicaOuro": "Power Apps = Delegação OOTB Pura Limit Ouro! Limite Base = 500. Limite Estourado Máximo Cego Permitido por configurações = 2.000 Registros e fim de papo!"
        }
    },
    {
        "id": "q224_topic1",
        "text": "Você foi incumbido de gerenciar soluções dentro do Dataverse. Você importa uma Solução NÃO-GERENCIADA (Unmanaged Solution) \"Gestao_RH_v1\" contendo a Tabela 'Férias' para o ambiente de Produção M365.\nDois dias depois, em meio a reclamações de arquitetura, o Diretor manda você EXCLUIR essa Solução \"Gestao_RH_v1\" recém importada pela raiz lá no portal de Soluções da Produção e reverter tudo.\nAo excluir a solução não-gerenciada do ambiente de Produção, o que acontecerá com a tabela 'Férias' MS Limit Pura e seus dados atrelados OOTB?",
        "options": [
            "A tabela e todos os seus dados permanecerão permanentemente no ambiente (Orfãos).",
            "A tabela M365 OOTB será limpa e purgada juntamente com a exclusão da Solução Limit System.",
            "A Solução será removida, a Tabela fica, mas todos os dados de linhas são deletados System M365 limit.",
            "Vai dar Erro OOTB Nuvem porque Soluções Não-Gerenciadas têm bloqueio nativo MS OOTB contra exclusão manual."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Tópico Categórico da PL-200: Arquitetura de Solution Management Layering (Managed vs Unmanaged OOTB Limits).",
            "papoReto": "Mandar solução Não-Gerenciada pra Produção é pedir pra ser demitido! Soluções Não-Gerenciadas (Unmanaged) são soltas: como se você entornasse o copo de refrigerante e ele se misturasse com tudo na mesa. Se você for lá depois e 'deletar a solução', o Power Platform só rasga o 'envelope' que as trouxe (o nome da solução), mas todos os campos, botões e tabelas FICAM jogados e orfãos vivos lá no ambiente consumindo espaço. Não apaga nada!",
            "respostaCerta": "A tabela e todos os seus dados permanecerão no ambiente O.O.T.B M365.",
            "puloDoGato": "The Unmanaged M365 OOTB Solution System Layering comporta-se como um Reference Container purista Limit System (Um aglomerador virtual OOTB). Apagar (Delete System) uma Unmanaged Solution no ALM system limits Cega apenas remove os 'Ponteiros de referenciamento (Reference Arrays System)', resultando na persistência default limits dos Meta-dados (Tables, columns) engrenados M365 no Active Layer nativo System Nuvem MS limits.",
            "cascasDeBanana": [
                "As tabelas e dados Limpos são deletados OOTB System junto. Isso só é verdade absoluta M365 System Ouro se você exclusisse uma solução GERENCIADA (Managed Solution). Managed solutions puristas mantem o elo OOTB de raiz."
            ],
            "dicaOuro": "Excluiu a Solução e a Tabela FICOU lá firme e forte sujando tudo? A Solução era Não-Gerenciada (Unmanaged). / Excluiu a Solução e a Tabela SUMIU levando os dados pro ralo junto? A Solução era Gerenciada (Managed)!"
        }
    },
    {
        "id": "q225_topic1",
        "text": "O CEO quer auditar e fiscalizar absolutamente todas as leituras agressivas de fofocas na empresa: ele deseja saber magicamente e puramente OOTB quem EXIBIU/Visualizou (Lido O.O.T.B) os Registros Sigilosos da aba M365 Dataverse limit Ouro 'Folha de Pagamento' e de 'Histórico Médico'.\nVocê precisa habilitar configurações Nativas OOTB System Limit de Trilhas de Auditoria (Audit M365). Qual o requisito arquitetural primordial e engrenado Limit MS Nuvem M365 exigido pela Microsoft Limit Base OOTB capaz de fornecer Log Ouro de Leitura e Exibição MS?",
        "options": [
            "Microsoft 365 Dataverse Global Auditing Ativo, Auditoria de Entidade Ativa Ouro M365, E Log de Leitura do Microsoft 365 / Office 365 Compliance Center limit System.",
            "Auditoria Purista de Nível de Campo System Limit MS Nuvem (Field Level Audit log limits OOTB).",
            "Power Automate M365 Log Flow base triggers for 'When a row is read / accessed OOTB'.",
            "Power BI Dashboards Base Limits Ativada MS limit conectados em Logs de IIS limit."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Aborda os limites da auditoria tradicional do Dataverse cruzado com as exigências de Log de Auditoria visual (Access and Read Logs).",
            "papoReto": "Se liga. O sistema mestre nativo do Dataverse (CRM) loga facilmente Ouro OOTB três coisas por padrão: Quem Criou, Quem Alterou (Editou) e Quem Deletou a conta M365! Agora, se o chefe quer que o Big Brother monitore 'Quem olhou/Acessou e leu o bagulho M365 sem alterar?', o Dataverse Base System Ouro não tanka isso sozinho limit MS Nuvem. Ele OOTB Limits Cega precisa dar as mãos pro 'Centro de Conformidade Limit Ouro Mestre do Microsoft 365 (O365 Security and Compliance Center)'. Só unindo a engine Purista Limit MS Cega do Office365 Compliance Log Nuvem que você captura os engrenamentos de 'Read Audit/Log de Exibição'.",
            "respostaCerta": "Ação Mestra: Dataverse Global Auditing + O365 Compliance Center base limits M365 log de Leitura Ouro System.",
            "puloDoGato": "Read Auditing System (Diferente do Data mutation System Auditing Limit OOTB MS) engrena dependência matriz externa no Microsoft 365 Purview / Security & Compliance Center logs. Ao habilitar o target 'Log Office 365 limits OOTB' dentro do Dataverse portal, eventos de `Retrieve` e `RetrieveMultiple` Limits Nativas arrays System disparam telemetry OOTB MS para o Tenant M365 Global Array log.",
            "cascasDeBanana": [
                "Power Automate Trigger 'When a row is read'. Armadilha limit. O Power Automate Dataverse Connector possui apenas Triggers para Create, Update, Delete. Não existe Trigger nativo Nuvem para 'When User looks at/Reads the screen'."
            ],
            "dicaOuro": "Log Normal M365 (Saber OOTB Quem Criou/Alterou/Deletou)? = Auditoria Local Normal do Dataverse Purista. | Quiser saber Quem LÊU, QUEM VIU NA TELA as coisas? = Exige as configurações de Auditoria Ouro Nuvem do Microsoft 365 Compliance Center!"
        }
    },
    {
        "id": "q226_topic1",
        "text": "O Departamento Comercial atua pesadamente Nuvem M365 Pura limit em Model-driven Apps OOTB. O diretor exige que toda vez que a Probabilidade M365 MS OOTB Nativa limite da Oportunidade System for inserida 'Maior que 80', a interface do Model-Driven imediatamente Nuvem OOTB purista System exiba na cor VERMELHO SANGUE um cadeado e Torne a aba 'Taxa de Desconto Ouro Limit' como BLOQUEADA no campo nativo do Banco M365 (Read-only Field locks UI limites System M365).\nO requisito M365 pede agilidade, performance Limit MS e deve Funcional Nuvem OOTB estritamente sem nenhum código JS Cego ou Mestre M365 Nuvem Limit.\nQual ferramenta nativa Dataverse Nuvem limit resolve a trava Cega OOTB com UI Field Locking MS?",
        "options": [
            "Uma Regra de Negócio (Business Rule) com Escopo de Formulário Nuvem M365 Limit (Form Scope array limits OOTB).",
            "Um Fluxo de Nuvem do Automate Síncrono (Real-time Flow M365 sync limit).",
            "Um Plug-in C-Sharp Nuvem Pre-Validation Ouro M365 limits MS System Purista Null Action.",
            "Segurança de Nível de Campo Pura System M365 Nuvem (Field Level Security profile lock base limits MS)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca em Client-Side Logic execution limitations e Business Rules O.O.T.B Action components.",
            "papoReto": "Seu Chefe quer mágica visual na tela M365 do CRM: Mudou aqui, a telinha tem que trancar o campo de descontos na mesma hora! Não é Power Automate, Automate roda por trás das cortinas assíncrono! Não é plugin de desenvolvedor chato OOTB Nuvem porque ele pediu SEM código (no-code). O Ouro Limit purista M365 que faz formatação visual e tranca/Oculta campos na hora que o cara digita OOTB é unicamente a nossa abençoada 'Regra de Negócio' (Business Rule)! Acionou nela: 'Se campo=80', ação='Travar Campo e Mostrar Cadeado' M365 Limit MS Ouro base limit!",
            "respostaCerta": "Criar Nuvem M365 limit OOTB uma Regra de Negócio (Business Rule M365 System) Nuvem com ações Lock Field limit.",
            "puloDoGato": "Business Rules OOTB MS processam Data UI Client-Side capabilities logic Nuvem limits. Componentes de Mestre limit OOTB System actions como `Set Field Value`, `Clear Field Value Nuvem`, `Make Field Required/Optional array limits`, `Show / Hide Field OOTB System`, e vitalmente o `Enable/Disable Field M365 Limits (Travam/Destravam UI lock status)` são triggados nativamente em tempo real no Form JS engine sem post-backs de nuvem.",
            "cascasDeBanana": [
                "Segurança de Segurança de Campo M365 System: Field-Level Security dita quem pode ler ou editar de forma perpétua e atrelada por Time ou Roles OOTB System Limits, não obedece a Gatilhos IF/ELSE de valores na tela (Como 'só bloqueia SE Valor passar de 80').",
                "Power Automate Síncrono. Power Automate (Fluxo Nuvem M365) não mexe em visibilidade form UI Limits OOTB Nativas MS (Ele age nos dados atrás da parede, no Banco Nuvem Limit MS)."
            ],
            "dicaOuro": "Alterar Exibição na Tela OOTB do CRM M365 System Limit Dinamicamente sem Código? Exigir um Campo M365, Ocultar um bendito Campo, e Trancar/Desabilitar Mestra Limit um campo visualmente Ouro? A RESPOSTA 100% EXATA Nuvem System É SEMPRE = Regra de Negócio (Business Rules)!"
        }
    },
    {
        "id": "q227_topic1",
        "text": "Em um Locatário Power Platform Limit System M365 OOTB, um cliente exigiu utilizar Tabelas Virtuais System Nuvem limit Ouro M365 (Virtual Tables nativas limit System Nuvem) para integrar e renderizar listas e tabelas MS Puras cruzadas do banco Azure SQL (On-Prem M365 databases M365 limit) sem copiar nem migrar um Kb MS de dados System pro Dataverse OOTB.\n\nPara que Ouro Limit Nuvem OOTB purista System M365 Nativas a Tabela Virtual do Dataverse MS possa magicamente OOTB system Pura M365 extrair e sugar os dados Limit MS OOTB do Ouro Banco MS Nativa Externo Nuvem, qual é o padrão vital puramente técnico arquitetural MS Nuvem Limit System Exigido da Fonte Nuvem Externa para se ligar a Virtual Table Limit nativamente OOTB?",
        "options": [
            "A API Nuvem System Externa Limit Pura precisa implementar a Arquitetura padrão de OData v4 MS Nuvem purista OOTB limit System Limits Provider.",
            "A Data Source externa Nuvem System M365 Limits deve atuar em conformidade M365 SOAP XML Service Architecture Limit Nuvem.",
            "O Banco Pura M365 Nuvem deve hospedar um Flow Sync MS Automate com trigger Nativas M365 Nuvem Pura OOTB Push limits.",
            "O External System Nuvem MS Limit precisa estar ligado OOTB como Um Portal Azure C-Sharp Plugin MS limits Pura Nuvem Model."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Examina estritamente o protocolo arquitetural base limit M365 System de integrações Ouro O.O.T.B via Dataverse Virtual Tables.",
            "papoReto": "Tabelas Virtuais Nuvem M365 Limits são os fantasmas do Dataverse: a tabela não guarda nenhum dado dentro do Dynamics System, só funciona como uma lente para ler em tempo real de um Banco M365 lá fora Limit System Pura (Seja AWS, SQL azure ou SAP). Mas o Dataverse M365 limit OOTB tem frescura System Nuvem M365! Ele diz: 'Para o Ghost table/Tabela Mágica Funcionar, eu só sei ler dados MS Puros e limit se você mandar pra mim num formato específico Nuvem Ouro!'. O Idioma Oficial exigido OOTB base M365 Limit Pura M365 Nuvem é a Tecnologia OData v4. Se a API do outro lado Cega não cuspir o Data no Protocolo restrito M365 Limit System OOTB Nuvem OData versão 4, a Virtual Table engasga System M365 e morre!",
            "respostaCerta": "A implementação da OData v4 M365 Nuvem Pura Provider Limit (Padrão de API Limits Ouro MS Nuvem system OOTB).",
            "puloDoGato": "The Native O.O.T.B Virtual Table Data Providers do Power Platform Dataverse M365 requerem compatibilidade protocolar via REST-based endpoint implementing OData v4 MS System limits Nuvem protocols Puras M365 MS OOTB Mestre. O GUID property mappings Limits Pura M365 Mestre, Primary Field MS limitations e Paging System features OOTB M365 engrenam logicamente limit MS Nuvem utilizando as specs Nativas do OData limits Nativas M365.",
            "cascasDeBanana": [
                "SOAP XML. Padrão Defasado M365 e engrenagem legada Limit System. Virtual tables Nativas base limits O.O.T.B usam apenas M365 JSON/REST encapsulado Nuvem limit via OData v4 limit.",
                "Push com Automate M365 Limits. Se você usar Power Automate Dataverse Nuvem MS Puras para Injetar nativa Limit OOTB base MS M365, você está trazendo Data física para M365, quebrando a lei máxima System da Nuvem Virtual Table (Que prega zero duplicação Limits puristas Nativas Nuvem)."
            ],
            "dicaOuro": "Virtual Tables no Dataverse M365 Limit Nuvem Pura MS? Qual o protocolo único Limit Mestre padrão exigido Nuvem System OOTB M365 pra Ligar o Cano Ouro Pura de Fora? Resposta: Protocolo OData v4 Limits OOTB Nativas!!!"
        }
    },
    {
        "id": "q228_topic1",
        "text": "Num cenário Dataverse Nuvem System Limits O.O.T.B M365, o time financeiro necessita que a entidade 'Despesas' sofra um purista OOTB engrenamento limits Mestre MS onde Ouro Pura usuários System Limits apenas visualizem Ouro Nuvem OOTB e Pura System Nuvem M365 editem o que OS PRÓPRIOS geraram System (Donos Limits M365 Nuvem). \nContudo OOTB limit System M365, você Nuvem limit arquitetou Limit M365 MS OOTB a tabela System Pura OOTB limit MS 'Despesa' OOTB Nativas com o Tipo de Propriedade 'Propriedade da Organização' (Organization-Owned Nuvem limits Ouro System M365 Nativas). \nComo você confere MS System Limits puristas OOTB o acesso Cego de Leitura a nível MS M365 Limit Ouro puramente de Usuário (User level access Pura limits M365) para System OOTB Nativas limitar base Nuvem M365 a referida Mestre MS Nuvem Tabela M365 Nuvem OOTB nas Permissions Roles Limits?",
        "options": [
            "Habilitando a Aba Limit 'Leitura User (Read Limit base Nativas Nuvem OOTB Mestre M365)' para bolinha preenchida parcial M365 (Fatia Quarto Limit) no Nuvem Painel Dataverse Ouro Security Limit Ouro System.",
            "Executando OOTB M365 purista Script de JS Mestre Limit para filtrar M365 MS Views Puras System limit por 'Owner limit OOTB Equals limit Current User Nuvem'.",
            "É arquiteturalmente impossível Limit M365 MS Nuvem System Nuvem. Uma Tabela 'Organization-Owned OOTB' não concebe o modelo M365 limits de Security Pura Depth Level/User Ownership MS limit Nuvem M365.",
            "Subdividindo M365 Limit purista Nuvem ativada As Puras limits Security Matrix MS System Roles em sub-tabelas MS Nuvem Business Unit Limits Nativas OOTB Ouro Custom tables."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Conceito Basilar da Arquitetura M365 Nuvem Limit Ouro de Tabelas Customizadas limits Dataverse Security Models (Ownership Types MS limit System M365 Nuvem).",
            "papoReto": "Se tu criou a tabela M365 System Limit marcando a caixa OOTB Limits de Ownership como 'De Organização (Organization Owned System OOTB)' e salvou Nuvem limit MS, tu ativou Limits o Modo Fiel Pura Deus da Microsoft M365! Sabe Nuvem Pura OOTB Ouro System Limit e limit Nuvem as bolinhas M365 OOTB Nuvem system de Access Mestre (Cheias, Meia Lua, Filete Amarelo limits M365 Nativas System)? Para as System Nuvem MS M365 tabelas do tipo Organização, essas Bolinhas Nuvem MS limit OOTB Purista não funcionam direito OOTB base limit! Ou o usuário Loga Nuvem System Nuvem Limit Nuvem e e Lê tudo limpo M365 do banco da empresa (Status Verde OOTB M365 Bolinha Cheia limits System OOTB Limit Nuvem Pura), OU Nuvem Pura System Ouro Nuvem limits Nativas System ele não enxerga MS Nuvem Nada Limit limit System (Cruz M365 Vermelha Limits Pura OOTB limit Nuvem M365). Não tem meio termo Nuvem 'Acesso Nuvem Pura Nativas MS Ouro Pura Limit de Nível Limit Cega OOTB de Usuário (Ver apenas OOTB o dele MS Nuvem Ouro Limit M365)'. Escolheu Limit M365 errado na raiz Nativas System MS M365 e limit e já era MS Pura limit System OOTB Nuvem M365 Mestre!",
            "respostaCerta": "Impossível puristamente System OOTB Nuvem. Organização OOTB Owned M365 Nuvem Table não aceita fracionamento M365 System User-owned Nativas Limits Ouro M365 Cega OOTB Nuvem base OOTB.",
            "puloDoGato": "The M365 Dataverse system limits OOTB Table property 'Ownership' M365 Nuvem Pura limit é um One-Time config Nuvem limits M365 arrays System. Tables created Puras M365 limits OOTB as `Organization-owned system M365 Ouro Nuvem Pura limit constraints` bypass user/team system limits role hierarchies Pura M365 (BUs Nuvem OOTB purista System). Sua security map GUI MS M365 System exibirá apenas a Option M365 Nuvem OOTB de Global Pura Limit (Full Green Pie limit MS Nuvem Nativas) or None limit M365 OOTB Pura System Pura.",
            "cascasDeBanana": [
                "Script Limit Nativas Nuvem OOTB Views Filtradas M365. Apesar de Views M365 limits System esconderem MS OOTB dados na tela Puras Nuvem M365 limit OOTB da M365 UI Limit Nuvem Pura System, Views MS System Nuvem Nuvem NATIVAMENTE não provêm Dataverse Engine Limits Security Data Pura OOTB boundaries (O cidadão Limit Ouro pode burlar as System Pura Views OOTB Ouro M365 e Nuvem Nuvem Nativas System sugar os dados via API MS System OOTB Limit M365 Pura e Ouro Nuvem Nuvem Limit)."
            ],
            "dicaOuro": "Pegou na PL-200 Ouro MS: 'Criei a tabela Limit M365 System de Posse DA M365 ORGANIZAÇÃO e OOTB Nativas Pura quero restringir pro limit OOTB Limit M365 Nuvem cara ver SÓ System Nativas M365 o Arquivo Nuvem DELE?'  = IMPOSSÍVEL OOTB M365 LIMIT MS! Organização é 8 ou 80 LIMIT Ouro Nativas MS Nuvem (Ou ve Tudo Nuvem MS System, ou Nada Pura MS Nuvem). Pra fracionar Limit M365 Nuvem Nativas Ouro Limit Nuvem, DEVE criar limits M365 tabela 'User/Team Owned Nuvem System OOTB M365 limits'!"
        }
    },
    {
        "id": "q229_topic1",
        "text": "Você precisa arquivar relatórios estáticos OOTB Nuvem mensais M365 de dados da sua MS base Limits Puras Nuvem Dataverse M365 OOTB Nativas Limits System. A nuvem System Ouro Nuvem Limit determinou M365 Nuvem Nativas OOTB Ouro MS que a melhor Pura M365 solução Ouro Limit System Nuvem seria injetar Limit MS Nativas Limits System OOTB base M365 as matrizes OOTB Limit puristas de Painéis Microsoft (Dataverse System Dashboards Nuvem Limit M365) puxando Nuvem Limit limit uma matriz Array System OOTB de Chart base MS limites de Nuvem Ouro Pizza OOTB.\nAo Pura MS Nuvem OOTB adentrar Nuvem a configuração System Ouro Component OOTB Pura Limit M365 System Dashboard Limit MS, você verifica Ouro Limit M365 limit Nuvem MS System os layouts Nativas MS Limits M365 puristas engrenados limit MS System Nuvem Limit disponíveis.\nQual o Máximo Limits M365 Nuvem Nativo Cego System OOTB Absoluto Ouro Limit Nuvem M365 de Componentes limit Ouro Pura Nativas M365 MS OOTB (Gráficos Nativas System Nuvem Limit Pura OOTB, Listas MS limit System e Nuvem Nativas Limit M365) que Nuvem Limit Limit pode purista System ser arrastado Pura OOTB e System M365 limits atrelado Limit M365 para System Limit Nuvem Limit System Nuvem MS OOTB Renderização dentro UI OOTB limit M365 de num ÚNICO MS Limit Ouro M365 Dashboard System OOTB Nuvem Dataverse O.O.T.B limit System Nuvem Limit?",
        "options": [
            "9 Componentes Nativas MS Ouro Nuvem Limits OOTB.",
            "6 Componentes Limit System OOTB M365 limit Nuvem.",
            "12 Componentes Pura Nuvem System M365 Limit System Ouro.",
            "4 Componentes Limit Nuvem limits M365 Nativo OOTB System Ouro Limit."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Foca Nuvem M365 nos Limits System Mestre Nativo Puras M365 UI constraints Dataverse Classic Dashboards OOTB MS Nativas Limits System.",
            "papoReto": "M365 Limit System Model Driven Apps Painéis Nativas OOTB (Dashboards MS Nuvem) Nuvem Limit são travados Ouro System M365 limit OOTB pela Ouro Limit Nuvem infraestrutura visual M365 de grade M365 Pura Nuvem Nuvem Limit MS Puras OOTB System Ouro Nativa! A MS System só Pura permite Pura Limit Mestre MS OOTB System que limit M365 tu Limit Nuvem pendure Nuvem Limit System Limit Nativas limit M365 engrenados Nuvem OOTB purista System, por Limit limit Pura Nuvem Painel System Nuvem OOTB Nuvem OOTB, um Limit M365 limite base OOTB engate cego limit Nuvem System MS estrito M365 de SEIS limit Nuvem MS Nativas Limits (6) Limits System OOTB e Pura Nuvem quadros limits M365 Nuvem M365 Nuvem System Cega Nuvem OOTB limit System Limit (Listas limits OOTB ou Gráficos limit M365 Limits Nuvem System Limit). Se quizer OOTB System Nuvem botar Ouro Limit M365 System Limit 7 Limits OOTB gráficos limit MS System Nativo System Limit Nuvem Limit Nativas Nuvem, Nuvem OOTB não Limit Nuvem vai System Nuvem Limit limit Nuvem System Limit Nuvem caber Nuvem M365 OOTB Pura OOTB System Limits Nuvem e Nuvem limit OOTB Nuvem e Limit MS limite vai Pura Nuvem Limit System Ouro chorar Pura M365 Limit Limit M365 Puras Limit!",
            "respostaCerta": "O M365 Nuvem System Max array limits OOTB frame Limit MS Limit Object é estritamente cravado limit Pura Nuvem Limit M365 OOTB Mestre M365 System Limit en 6 OOTB System Limits Componentes limit.",
            "puloDoGato": "Dashboards limits Nuvem OOTB M365 Dataverse limit Nativas UI limits bounds support a strict Server-Side limitation Pura Limit M365 system limits OOTB UI de 6 Limit M365 System objects limits Nuvem. Ao MS Limit System abrir OOTB Nuvem a Matrix M365 System de layout UI OOTB limit M365 Nuvem, OOTB Pura M365 todos os arrays limit M365 MS Limits Puras engrenados OOTB MS System (Ouro Nativas limits 2-column e 3-column Nuvem Pura OOTB Ouro System Limit M365 Limit Nuvem ) topam limit MS System OOTB em sum aggregation Ouro Limit M365 Nativas bounds MS limits Limit Cega limit de limit MS Nuvem `Max 6 UI frames Limit M365 MS System Nuvem Nuvem Limit components OOTB`.",
            "cascasDeBanana": [
                "12 Componentes OOTB Limit M365 System (Power BI Nativas Limits M365 System). Isso M365 Nuvem System Limit OOTB Base limit Ouro é Limit Limit limit M365 pegadinha Nuvem Limit do OOTB Nuvem Fabric Limit OOTB System Power BI Service Dashboards Limit Nuvem Limit M365 Nuvem Pura limit. Lá, você OOTB Pura Nuvem Limits fixa System Nuvem OOTB inúmeros Limits Nuvem System OOTB Pura MS Nativas objects. No Dynamics/Dataverse System Nuvem Pura, OOTB MS limit a régua Limit Mestre MS OOTB é Nativas Limit M365 curta Nuvem Limit Nuvem e e limit Cega Nuvem Pura system Nuvem Limit Nuvem M365 rígida Pura em 6 OOTB M365 System Limit M365 System Nuvem Limit!"
            ],
            "dicaOuro": "Dashboard de 1 tela Nativas Limits Nuvem CRM MS Dataverse M365 OOTB System Nuvem limit Limits Puras OOTB Pura Nuvem System limit? Qual Nativas limit Ootb M365 System limit Limit OOTB Limite Limpo Ouro M365 máximo MS Nuvem de Caixinhas Nuvem System limit M365 Gráficas System OOTB Nuvem pra MESTRE MS M365 Limit Cega OOTB pendurar? = Resposta M365: Limite travado OOTB Nuvem em SEIS Ouro (6) Pura System M365 Nativas limit Componentes M365 System!"
        }
    },
    {
        "id": "q230_topic1",
        "text": "Você construiu um Canvas App fabuloso M365 System Limit Nuvem OOTB Mestre Nativas e precisa otimizar Limit Nuvem M365 Limit Performance Base System Nativas MS Puras OOTB Limit. \nNa limit M365 tela Limpa System Nuvem Ouro Nativas MS Nuvem Inicial Nuvem OOTB ('Screen 1 Limit M365 Pura M365 Nuvem System OOTB limit Nuvem '), você Pura limit Nuvem precisa M365 System Nuvem Pura coletar Limit Ouro MS 300 Pura System Mestre Componentes Nuvem Nativas de Limits Nuvem System M365 Faturas OOTB System Cega M365 Nuvem para purista Nuvem memórias System Nuvem globais M365 limit OOTB Cache M365 Nuvem Local M365 Limit Nativas System MS OOTB.\nA M365 Nuvem OOTB Nativas governança MS exigiu OOTB System Ouro Limit M365 Nuvem utilizar M365 limit a função Função Limit M365 Nativas Limits 'Concurrent limit M365 Ouro Pura System MS Limit OOTB System M365 Nuvem'.\nSendo purista M365 Ouro Nuvem OOTB, como as chamadas Limit M365 System MS Nuvem Data M365 Limit System Cega limits inseridas Limit Pura Nuvem System M365 ativada dentro Nuvem Nativas M365 OOTB System do bloco Limits Nuvem Pura OOTB Concurrent() Limit M365 Mestre limit System MS Nuvem Limit System se M365 comportam M365 OOTB limits Nativas purista System?",
        "options": [
            "Processam Nuvem System Nuvem Limit M365 as buscas Pura M365 Cega OOTB Nuvem ativada OOTB MS System Nativas simultaneamente Limit M365 Nativas M365 Ouro (em paralelo System Limit Nuvem ), Limit Nuvem cortando Pura Limit System o OOTB System Nativas Limit Cega Tempo Nuvem Limit Cega M365 Pura limit de Carregamento Limit Nativas engrenado MS Pura System Nuvem System.",
            "As M365 System buscas limits Nuvem Limit Nativas Pura M365 Limit System OOTB Nuvem MS engrenam System Limits Pura sequencialmentes Nuvem Limit M365 limit Nuvem, aguardando Ouro Limit M365 OOTB MS Nativas Nuvem o primeiro Limit System M365 erro System Limit Cega Limit OOTB Nativas para OOTB System MS Null Action limits System Nuvem.",
            "Bloqueiam System Limit as chamadas Nativas Limits M365 Nuvem Limit limits Pura Limit OOTB M365 Limit e salvam System Nuvem OOTB purista System engrenadas limit Nuvem OOTB M365 M365 offline System limits MS caching Nativas Limit M365 limit Nuvem Pura OOTB Nuvem array.",
            "Excluem System Nuvem M365 OOTB MS Nuvem Pura Limit M365 os registros limit Nuvem MS Limit concurrentes do Dataverse M365 limits OOTB Nativas Limit M365 Ouro System OOTB limit System Limits."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Testa conhecimento Limits OOTB Nativas de otimização de RAM Limits M365 Cega System Ouro Nuvem e Caching Limits M365 Pura System Ouro Nuvem limits Power Apps (Concurrent Processing functions).",
            "papoReto": "Vai puxar 100 System Nuvem Limit clientes MS da Microsoft Limit Limit Nativas Pura System Cega, e System Nativas Limit depois limit Limit Pura Logo em System Nuvem 100 Faturas M365? Se Ouro Nuvem OOTB tu Limit Pura MS for Pura System Nuvem amador OOTB Limit M365 System e Limit Nativas botar Nuvem M365 isso Pura Limit Nuvem solto M365 Limit OOTB Limit no OnStart Ouro Limit M365 System OOTB Nuvem, o Power Limit Pura Apps System vai Nuvem OOTB Pura engrenar System OOTB Nuvem na Nuvem Limit M365 fila (Puxa Nativas Nuvem Pura um System OOTB limit Nuvem, Acaba OOTB. Puxa System Nuvem Limits o Outro System OOTB Limit Nativas M365). Demora MS Pura Limit horas Nuvem OOTB M365 limit System! Se Ouro System Nuvem OOTB você abraçar limit System Limit tudo Limit M365 e jogar Nuvem dentro limits Cega Limit OOTB da caixa System Limit Cega M365 Limit Nuvem Mestre M365 Limit M365 Ouro Limits Nativas 'Concurrent(ClearCollect(Cli),ClearCollect(Fat)) System Nuvem Limit Ouro', o M365 Limit aplicativo System OOTB System Ouro Mude e chuta limits OOTB System Nuvem as Nativas requisições OOTB System Nativas Nuvem OOTB DE M365 Limit UMA VEZ Nuvem Nativas Nuvem SÓ limit Nuvem (Em paralelo OOTB limit MS Nuvem Pura System limit !). Você reduz System Pura pela Metade Ouro Limit o peso M365 limit OOTB System MS Nuvem do Loading OOTB Limit Limit limit M365 !",
            "respostaCerta": "Ação M365 Nuvem Pura System: Elas System Nuvem limit executam M365 Nativas Ouro Limit Pura NLU OOTB Nuvem Ouro System Ativada Engrenagem Pura Nuvem e em Nuvem Paralelo Limit OOTB limit M365 (Simultâneas Nativas M365 Limit Nuvem Pura Limit Limits System Nuvem System MS Ouro Limit M365).",
            "puloDoGato": "The Native Nativas M365 limit Nuvem System Power Fx Pura OOTB Pura limit `Concurrent()` limit Nuvem function MS boundaries execute multiple Nativas System Limits Formulas limit atively System limits em background threads M365 Limits System (Async paralell limits OOTB Nativas M365), reduzindo limits OOTB System Nativas drasticamente Limits MS limits Nativas M365 Nativas System OOTB o Loading OOTB Pura Limit Puras Nuvem M365 Nativas Nuvem limit MS Nuvem Time System limit M365 Limit OOTB Ouro System Cega Nuvem Nuvem Limit purista Pura limit Nuvem Client-side limit.",
            "cascasDeBanana": [
                "Execução OOTB System MS Nuvem Sequencial Limit M365 System Nuvem Pura limit. Sequencial M365 Nuvem Limit MS Pura é Limit M365 System Limit exatamente M365 Ouro Limit Nuvem OOTB o oposto Nuvem Limit OOTB purista System engrenadas limit Limit Nuvem Nativas M365 limits System Nativas do que Limit Cega OOTB Pura System a M365 Limit System Fórmula Nativas limits OOTB Ouro M365 Nuvem M365 Concurrent M365 Pura Nuvem Pura Nuvem Nuvem OOTB faz M365. Se quisesse Nuvem System limits Nativas sequencial Limit M365 System Pura limit Ouro, Nativas Nuvem MS Limit bastava Pura OOTB usar System ';' Cega Ouro Limit M365 Mestre limit MS Limit System limit Nuvem Limit OOTB Pura Nuvem."
            ],
            "dicaOuro": "Demora OOTB Nuvem Ouro Limit M365 Nuvem 10 System Nuvem OOTB Nativas segundos M365 Nuvem limits Pura Limit Nativas System Cega Pura Nuvem limit pra MS Pura OOTB Nuvem Limit Carregar Pura limit System seu app System Limit Nuvem porque Ouro Nativas System tem M365 Nuvem Limit M365 System 5 Limit Collections Nativas limit Nativas M365 pra Pura baixar Limit Cega System OOTB? = Envelopa Sistema Nativas limits OOTB as Listas Nativas System limit Ouro System Limits dentro M365 das Pura Nuvem System limit funções Nativas OOTB Nuvem Nuvem Limit Nuvem M365 Limit MS OOTB M365 OOTB Nuvem engrenadas Nuvem Limit M365 Limits 'Concurrent() M365 System'! Elas limits MS Nuvem vão Pura rodar Pura Limit Cega Nuvem Pura System OOTB limits Nativas Limit Nuvem em PARALELO e System OOTB Pura OOTB Nativas System Ouro M365 Nuvem Salvar Limpo Ouro M365 limit Seu System MS limit Dia Ouro System Limit e limit Nuvem!"
        }
    },
    {
        "id": "q231_topic1",
        "text": "Você foi Nuvem Limit System Nuvem OOTB Limit M365 Mestre System Nuvem Pura alocado Nativas Nuvem M365 Nuvem Pura OOTB Pura em um projeto Dynamics Sales M365 Nativas Limit OOTB Limit limit e pedem Nativas que System Limit Ouro você M365 Nativas implemente System Nuvem OOTB 'Regras System Limit de Ocultação System OOTB System Pura e Limit Ouro M365 de Fluxos System Nuvem Limit M365 de Processos System Nativas Limits MS Limit System Nuvem Nuvem Pura OOTB Limit M365 Nuvem System Cega limit MS OOTB de Negócios OOTB Ouro System M365 Nuvem Limit Nativas Pura OOTB (Business Process Flows OOTB System Pura Limits M365 System Nuvem)'.\nVocê System OOTB Limit limits System cria OOTB um limit M365 System BPF OOTB Nuvem Limit Nativas 'Venda M365 System Premium OOTB Limit Pura System' e quer System Limit restringer Nuvem Limit para M365 Pura que OOTB Somente System Nuvem membros Nuvem Limit Pura Ouro M365 da Equipe Ouro System 'Gestores M365 Limit Ouro System OOTB Nuvem Nativas Pura VIP Limit OOTB limit ' iniciem e VEJAM M365 OOTB Nuvem Nuvem Limit a aba Nativas Ouro Limit Pura NLU OOTB Nuvem Ouro Limit M365 Nuvem verde OOTB M365 System MS Nuvem do System Nativas Fluxo System Limit System Nuvem M365 de Negócios M365 OOTB System limit no M365 topo Nuvem M365 limit Pura das System Oportunidades M365 System OOTB Ouro Limits MS Nuvem limit.\nOnde Nuvem OOTB Limits Limit você OOTB System M365 controla limit Nativas M365 o Ouro MS Nuvem OOTB Pura Acesso Limit Pura OOTB e Pura Nuvem Ouro System Cega Nuvem permissão System Nuvem de Nuvem quem Nuvem Pura Limit Pode Nuvem System ver Pura Nuvem M365 OOTB e System M365 usar OOTB M365 System cada Fluxo de Processo Pura System Limit Nuvem de Negócios M365 Limit (BPF M365 System Limit)?",
        "options": [
            "Atribuindo System Limit as Nuvem Pura Permissões OOTB Limit System MS Nuvem M365 Base OOTB Nuvem da Roles MS Nuvem limits de segurança OOTB M365 Ouro Pura cruzada (Security Roles Nuvem M365 System limit) na Guia limit 'Fluxos System Nuvem de Processo M365 Limit de Nuvem M365 Negócios System OOTB Limits Nativas Nuvem M365 (Business Process Limits Nuvem OOTB System Flows OOTB)'.",
            "No OOTB Limit System construtor MS limit do Pura limit Fluxo OOTB System Ouro Limit M365, M365 clicando Limit OOTB Nativas Pura em 'Compartilhar System Nuvem Limit OOTB M365 ' Nativo Ouro OOTB limit M365 Limit Nuvem Pura System.",
            "Criando Nuvem System Regras Limit Nativas M365 de Pura Limit System Negócio Ouro M365 OOTB System Cega Nuvem (Business Rules OOTB Nuvem) M365 Limit M365 Pura Nativas com M365 Nuvem 'If Role = VIP, Show Nuvem Pura System Limit BPF'.",
            "É Nativas M365 Nuvem puramente Pura System Nuvem Impossível OOTB System M365 Limit Nuvem. Os System OOTB Fluxos Limit Pura Nativas M365 MS limit M365 System OOTB Nuvem de Negócios M365 System Limit são M365 Ouro sempre Pura limit Visíveis limit System Nuvem globalmente System Nuvem Limit OOTB Nuvem M365 Pura para System M365 Nuvem OOTB todos MS Limit Limits."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Verifica Pura M365 a System OOTB Linkagem entre Nuvem Limits Security M365 System OOTB Nuvem Model Nuvem Pura System e Client-side Nativas M365 system limits BPF visibility Nuvem M365 System limit Pura OOTB features OOTB.",
            "papoReto": "Fez Ouro Limit uma Nuvem System Limit OOTB Trilhinha Nuvem M365 Nuvem de Passos Pura (BPF OOTB Limit Nativas M365) chique Limit System Nuvem MS OOTB no OOTB Nuvem Dynamics Pura limit para Ouro M365 Limit M365 fechar Limit Nuvem contas Nuvem OOTB premium Nativas Nuvem M365 Pura System M365 System Nuvem OOTB limit System Limit? E Pura Nuvem limits quer M365 esconder OOTB Nuvem System Pura Limit do OOTB System Ouro estagiário M365 e System mostrar System só OOTB Limit System M365 para Nuvem M365 os Limit Nuvem Nativas Gerentes Pura Ouro OOTB System Limit M365 System? Os Fluxos System Nuvem Pura de Negócios System Pura (BPFs Nuvem M365) System Limits são MS System M365 limit OOTB como Ouro M365 System se Nuvem Limit Pura M365 Pura Nuvem Nativas fossem OOTB System M365 Tabelas Nativas Limit M365 Escondidas Nuvem OOTB Nuvem. Você Nuvem Limit vai Nuvem System lá Limit nas M365 permissões Ouro Nuvem OOTB System Ouro Limit M365 MS limit Nuvem Limits de Segurança Nuvem Limit OOTB M365 do System Painel System (Security Role OOTB Limit MS Nuvem), abre Nuvem System a Aba Limit 'Business Nativas Nuvem Process Flows Nativas Limit Nuvem OOTB' Ouro M365 e da System Nuvem o OOTB Nuvem poder OOTB Nuvem System M365 'Ler/Read M365 System Nuvem e Nuvem Limits Criar Limit M365 Limit Pura' na Nuvem Limits Nuvem linha OOTB com System OOTB Nativas o nome Nativas Limit do M365 Seu M365 limit BPF Nuvem Pura M365 Nativas. Sem M365 permissão System Nuvem ali Limit M365 Pura System, Limits System System o BPF Nativas OOTB Ouro nem System Limit Nuvem MS Limit Nuvem Limit System Nuvem Pura aparece System Nuvem Limpo Ouro M365 Limit MS Nuvem OOTB Pura Nuvem na Nuvem Tela OOTB System limit M365 Limits Nativas M365 OOTB do Nuvem Limit Usuário OOTB Nuvem engrenado System Nativas!",
            "respostaCerta": "Ação M365 Nativas Limits Limit Pura Nuvem System Mestre: Conceder M365 System Limits Privilégios Nuvem Limit M365 de Ler/Write Nuvem MS OOTB nas System Nativas permissões Limit da Nuvem Pura Guia OOTB System 'Business System OOTB Limit Ouro M365 Nuvem Process OOTB M365 Flows System OOTB Nuvem' System limit dentro Limit M365 Mestre limit System Nuvem Limit OOTB da M365 Nuvem Pura System Security Nativas Limit M365 System Nuvem Roles OOTB System limit Nuvem M365 Pura System.",
            "puloDoGato": "The M365 Logic Nativas Nuvem Pura OOTB backend limits System Cega Nativas assigns M365 a Virtual System Pura M365 limit Custom Entity MS Nativas Nuvem OOTB (Table) M365 Pura para Nativas System Nuvem Limit cada Limit Nativas Nuvem M365 Business System Nuvem Limit Ouro Nativas M365 Process Flow MS System Nuvem Nuvem Pura Limit M365 Puras Limit criado System M365. Para OOTB System que limit M365 um OOTB System Usuário Nativas Nuvem OOTB Mestre M365 Pura M365 OOTB Nuvem possa Nuvem Nativas System Pura Limit System 'Alternar limit (Switch Process Limit M365)' System e Nuvem ou Enxergá-lo Limit System OOTB M365 UI limit Nuvem Pura, ele M365 Nuvem OOTB Nativas Limit M365 Pura requisita limit Base System Limits Read System M365 OOTB Nuvem and Create M365 priviledges MS Nuvem Pura limits purista M365 OOTB System nessa Specific Nuvem Limit OOTB Ouro BPF Entity M365 Nativas M365 MS OOTB limit System M365 Nativas Limit Role Matrix.",
            "cascasDeBanana": [
                "Compartilhar System Nuvem Nativas OOTB o Limit Pura Fluxo Nuvem M365 no Nuvem Limit Construtor Nativas Nuvem Pura System. Compartilhar limit flows M365 Nuvem Limits M365 é limit para System Limits System M365 Automação Nuvem Nuvem Limit Pura OOTB system Cloud Flows Nuvem Limit M365. BPFs M365 Limits (Fluxos Nuvem visual OOTB System Ouro Limit M365 Dynamics) são Nuvem Limit tabelas M365 Pura OOTB Security Pura System Nuvem Arrays System Nativas M365 Limit OOTB limits."
            ],
            "dicaOuro": "Como Limit System M365 Nativas Sumir Limit Ouro Nuvem OOTB M365 System Nuvem Pura com M365 System Nativas Limit OOTB uma M365 Limit OOTB Nuvem M365 Trilhinha/Fluxo System Nativas Nuvem Limits System Pura Pura Limit Nuvem de M365 Pura Negócios limit System Nuvem M365 Nuvem OOTB (BPF Nativas Limit Nuvem System) Pura de OOTB M365 Nativas uma Nuvem Equipe Limit M365 Limits OOTB? = Nuvem Pura Abre Nuvem M365 Limit Limits as Limit Pura Security M365 Roles Pura System M365 da Equipe OOTB, vai limit System M365 Nuvem Pura Nuvem Limits na OOTB limit M365 System Nuvem MS Nuvem Ouro Aba Nuvem System Limit OOTB Fluxo M365 Nuvem Pura Nuvem Limits Limit MESTRE MS M365 Limit Nuvem Pura M365 Processo OOTB de Negócio Ouro Pura e Nuvem Limit tira Nuvem OOTB a bolinha System M365 Nuvem Limit verde M365 Limit!"
        }
    },
    {
        "id": "q232_topic1",
        "text": "Em Limit Pura System um OOTB Pura ambiente OOTB Nativas Dataverse Nuvem Nativas Limits M365 OOTB Limit M365, as limits OOTB oportunidades Nuvem System M365 System Nativas M365 Nuvem Pura System Limit Nuvem Ouro System M365 Nativas Cega da Pura Nuvem System Nativas Limit Nuvem Nuvem OOTB System limit M365 M365 Nativas Pura M365 organização Nuvem Ouro Nativas System Nuvem OOTB são Nuvem limits confidenciais System Ouro M365 Nuvem limit Nativas System OOTB Limit OOTB Nuvem OOTB System OOTB. O System Nuvem CEO Nuvem MS Puras exige Nuvem System Pura MS Limit que Nativas M365 Nuvem Ouro Limit M365 'Mesmo System Limit M365 Nuvem Limit limits que Nuvem Limit OOTB um Limit Ouro MS Gerente Pura M365 limit tenha Nuvem OOTB Limits Permissão Nativas Pura System Nuvem de Ler System todas Pura as Oportunidades M365 Nuvem limits Pura Limit System no OOTB Sistema OOTB limit M365 (Security System Pura Limits M365 Global Limit System Nuvem Nativa), a Cega Nuvem System Coluna Limit Nuvem OOTB Pura Nativas e Campo System Limit M365 'Orçamento M365 Limit OOTB Previsto M365 Limit (Revenue MS Nuvem limit System M365 )' só Nuvem Limit possa Limit Nativas Nuvem ser Pura M365 OOTB Visualizada Limit System Nuvem System Cega OOTB Cega Nativas Nativas Limits Pura Limit Nuvem M365 Nuvem System OOTB Limits Limit por M365 OOTB Pura Limit System Nuvem diretores System Nativas MS Nuvem VIPs OOTB M365 System Nuvem. O M365 Nativas Nuvem OOTB Gerente System Pura limit deve OOTB Cega MS OOTB Ouro Nativas Limit Pura NLU OOTB Nuvem Ouro ver Nuvem Ouro System Nuvem a M365 System oportunidade M365 System MS Nuvem Limit M365 Pura Ouro Nuvem OOTB Pura Ouro Limit Nuvem, mas System Nuvem Ouro Nativas o valor System Nuvem Ouro Limits Nuvem OOTB Nativas Pura Ouro System Nuvem do 'Orçamento M365 Nativas Nuvem' na tela Nativas Limits Limit M365 OOTB System Nativas Nuvem Nuvem Nuvem MS ficará limit M365 escondido System Limit Nuvem como OOTB '******' Limit M365 System Pura Limits Nativas Limit M365 Nuvem Pura Limit'.\nO que limit System Nuvem Limit OOTB MS Limit deve System Nuvem Limit M365 Nuvem Pura System ser Nativas aplicador M365 Nuvem Limits M365 Pura Limit M365 System Limits Nuvem M365 OOTB Limit Nativas M365 System Nativas Nuvem Pura MS limit Nuvem Limit?",
        "options": [
            "Habilitar System M365 a MS M365 Segurança Limit System Nuvem em Nível Limit OOTB Limit System de Limit Nativas System Nuvem Limit M365 Limit Campo Pura OOTB M365 Nativas Nuvem (Field Level Nativas M365 Security Nativas Pura M365 Limit Nuvem Pura System Limit).",
            "Criar Nativas M365 Nuvem M365 um limit OOTB Business OOTB System Limit Rule System (Regra Nuvem Nativas de Negócio Limit Nuvem OOTB) para System OOTB ocultar Nativas System OOTB limit limit o campo System OOTB M365 Nuvem M365 Nativas Pura baseados M365 OOTB em System OOTB M365 limit if role OOTB Nativas System Ouro limit false.",
            "Ajustar M365 OOTB o Limit System M365 Nuvem Formulário Pura Limit limit Nuvem Nuvem OOTB M365 para Nuvem Pura Nativas Esconder Nuvem limit a M365 System Coluna Nativas System Nuvem OOTB System visualmente M365 Limit Nuvem System M365.",
            "Revogar OOTB M365 System os Limit limit Nuvem System Nuvem Privilégios M365 System Pura de System Nuvem 'Leitura Nativas Limit Pura MS Limit Ouro Limit System Nativas Limit OOTB Ouro System Limit M365' base Nativas M365 globais Limit M365 Nuvem OOTB para M365 System Limit Tabela Nuvem M365 Inteira System Pura."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca System Ouro System Limit Pura na OOTB M365 Proteção Limits Nuvem Limit System System Limit M365 Nativas MS M365 Nativas de OOTB Atributos Ouro M365 Específicos Cega Limit e Limit System limit Nuvem M365 puristas (Field Level System MS Security Nuvem limits Pura Limit System).",
            "papoReto": "Seu OOTB Nuvem M365 Mestre M365 chefe Limit limit OOTB Nativas Ouro System quer Nativas M365 Nuvem OOTB System Nuvem Pura System que Nuvem o Pura cara M365 Limit System leia Limit e Nuvem limit veja Nativas Nuvem Pura System Pura System OOTB Limits a Conta/Oportunidade M365 limit Ouro M365 OOTB inteira limit System limit Nuvem, mas limits Limits OOTB Nativas Nuvem QUER System Nuvem Pura M365 Pura Limit ESCONDER System Limit M365 SÓ Nuvem M365 System Pura UMA Nativas Nuvem Nuvem Limit System Pura COLUNA Limit Nuvem Nativas OOTB OOTB System M365 Nuvem limit Pura (O M365 System Nuvem OOTB limit Salário OOTB Nuvem limits Nativas, o OOTB M365 Nuvem System Cega Ouro Limit M365 Crédito M365 Limit Nuvem etc)? Limit OOTB As Regras Limit System M365 globais Nativas System de Segurança Pura Ouro OOTB de OOTB Nativas limit Tabela Nuvem limits Nuvem (Bolinhas Nativas System Cega Pura Nuvem OOTB) afetam System limits Nuvem TUDO Limit OOTB M365 System (Ou ve Nativas tudo Nativas Nuvem M365 da Pura Nuvem Conta System Limits Nativas Nuvem M365 Pura Nuvem OOTB M365 ou M365 System limit Limit M365 não OOTB Nativas Pura ve System limit Pura Nativas MS Nuvem Nativas M365 System Nuvem Limit OOTB Limit M365 Nuvem Nuvem Limit Nativas Nuvem Limit Conta Systemenhuma). Pra Limit MS Pura Proteger System SÓ System OOTB Limit UMA Cega OOTB Coluna OOTB Nativas Limit M365 M365 Limit você Ouro Nuvem OOTB Limits liga M365 Nuvem Pura Nativas a limit Pura M365 Ouro Nuvem System Nuvem Limit Nuvem M365 'Segurança Pura de OOTB Nativas Nível Limit Pura System Nuvem limit de Cega Limit System Nuvem MS M365 Limit Limit M365 Campo Limit (Field limits M365 System Security Pura Nativas OOTB)'. Assim M365 OOTB Nuvem limit, System OOTB quem Limit M365 Nativas MS Ouro Pura entrar M365 Nuvem Nuvem e System Cega Pura OOTB não OOTB limit tiver Nuvem Limits Pura limit OOTB Perfil Limit de System M365 Campo Limit Limit System Nativas Pura OOTB Pura System Pura System Limit Pura vai Limit System ver Nativas OOTB Ouro System M365 a M365 Conta System M365 Nativas Limits Limit Limit M365 mas OOTB M365 Ouro Limit Nuvem OOTB Ouro vai OOTB ver Cega OOTB Pura os valores Limit com limit Nativas Nuvem System Limit Nuvem asteriscos M365 (*****).",
            "respostaCerta": "Aplicar M365 Limit Nuvem Nuvem System Segurança OOTB System Limits Pura em M365 Nuvem Pura Nível Limit M365 de Campo M365 System (Field Pura Level Limit Nuvem OOTB M365 Nuvem Security Limit Nuvem Limit System Limit Pura M365 ).",
            "puloDoGato": "The System Nuvem M365 M365 Field Limit M365 OOTB Level Limit Nativas Nuvem MS Limit Nuvem Limit Security System (FLS Nativas Limit M365 Pura System Nuvem ) array Nuvem functions Limit Pura Limits Nativas Limit M365 Cega Ouro Limit MS M365 Nuvem puristamente System Limit MS Nuvem Nuvem Limit bypass the Nativas limit Role limits Nuvem Pura Entity Limits Permissions Pura OOTB. Ele Limit OOTB Nativas restringe M365 Nuvem OOTB Ouro OOTB System Nuvem o Nuvem OOTB render OOTB M365 Pura (asteriscos Limit Nuvem ***** limits Pura M365) de MS Nuvem Limit Colunas M365 Nativas OOTB Específicas Pura Limit Limit independentemente M365 M365 Ouro Nuvem Cega System do Nuvem Ownership M365 OOTB System System ou Nuvem Access System M365 Level System M365 Pura limits Limit Nuvem System limit Nativas Base limits Nuvem OOTB que limit M365 Mestre MS Nuvem MS Limit M365 o System limits M365 Nativas Nuvem Pura Usuário Nativas Nuvem M365 limit Limit Nativas System Nuvem possua OOTB Nuvem OOTB Nuvem Limits M365 na Tabela Pura Nativas System Limit OOTB Nativas Limit Limit M365.",
            "cascasDeBanana": [
                "Business Limits OOTB Nativas Rules Pura M365 System ou Limit Formulário Nativas System M365 Pura. Ambas Nuvem Limit Pura OOTB M365 Nativas System só Escondem M365 OOTB System Ouro Limit Limit Visualmente Limit Nativas Nuvem System OOTB Nuvem M365 (UI Nativas limit Nuvem Pura). O Nuvem Limits System Pura cidadão M365 Limit Cega M365 malandro Nativas Pura Limit M365 M365 pode limit System abrir OOTB Limit Pura limit Nativas o Limit Excel System Nuvem M365 Export Nativas Pura M365 ou OOTB System API Pura Limit Nativas System Nuvem limits Nuvem M365 Limit Pura M365 Nativas e Nuvem System Nativas Limit Cega limit o Valor OOTB limit M365 Nativas Confidencial limit Nativas Nuvem Limit M365 M365 vem Pura OOTB limpo M365 Nativas Ouro Limit System Nuvem Ouro! FLS Limit MS Nuvem Ouro (Field Limit System Nuvem M365 Limit Nuvem Security M365 Pura System ) protege Limit M365 Nuvem System Cega OOTB Limits M365 no Nuvem Limit Limit nível M365 System Nativas Limit M365 Nuvem OOTB System de Banco OOTB M365 (OOTB M365 System Nuvem Pura Limpo OOTB M365 Limits Nuvem )!"
            ],
            "dicaOuro": "Quer M365 OOTB Ouro Nuvem dar System M365 Nuvem acesso Limit Pura OOTB a M365 Limit Nuvem uma System OOTB M365 Pura Nativas OOTB tabela Limit M365 Nuvem (Global OOTB ), M365 OOTB Nuvem mas Nativas Limit System M365 esconder Limit M365 Nativas System OOTB e Trancar Limit Nuvem Pura o Nativas Acesso OOTB System M365 DE Limit Nativas UMA OOTB M365 Nuvem Pura ÚNICA Nativas limit Limit Nativas System System Coluna/Campo Pura M365 Limit System System OOTB Nuvem (Como M365 Nativas o CPF Limit Pura System Nuvem OOTB MS Nuvem Limit System Nuvem ou Nuvem Limits M365 Lucro System Nuvem OOTB)? = Aplicar OOTB Nuvem Pura Segurança Pura Ouro M365 de System Limit Nativas OOTB Nuvem CAMPOS Limit Ouro Nativas System Nuvem (Field-Level Limits Nuvem Limit Security System Nativas Limit Nuvem Nativas M365 MS)!"
        }
    },
    {
        "id": "q233_topic1",
        "text": "Você M365 Limit System Nuvem Limit OOTB preparou System OOTB Nuvem limits Nativas M365 Nativas Nuvem System Ouro um Nuvem Componente System Pura Nuvem de System Código M365 Pura (Custom Limit Nuvem Component Limit OOTB System Nuvem Nativas Limit Nativas limits M365 OOTB System Limit M365 Nuvem Pura Limit M365 Limit Cega Power Apps Limit Nativas Ouro Nativas System MS M365 Component Limit MS Pura Limits M365 Framework M365 Nuvem - M365 Nativas M365 OOTB Nuvem Limit PCF M365 Nativas System). Agora Nativas Nuvem Limit Cega OOTB você M365 Pura OOTB Nuvem Pura System deseja M365 OOTB System Limits utilizá-lo Nativas M365 Limits Nuvem M365 OOTB Ouro Limit System Pura Nuvem System Nativas Limit em M365 limit M365 Nativas Nativas System System OOTB Limit M365 OOTB Limit Nuvem Nuvem Limit um OOTB M365 Nativas aplicativo Limit Nativas M365 Nuvem limits Pura OOTB Limit de M365 Pura System OOTB Tela Limit System Nativas Limit (Canvas M365 Nativas Nuvem System Nuvem Limit System limit Pura Nativas App OOTB M365 Pura System M365 Nuvem ).\nQual MS M365 o limit Pura Limit Nativas M365 System Limit M365 Nativas M365 passo Pura Limit Nativas Limit OOTB M365 System primordial Nuvem limit Nativas Limit Pura System Limits Nuvem M365 Nativas M365 Pura Cega Nuvem System Limit MS a System M365 OOTB System Cega executar Pura limit System OOTB OOTB Nuvem M365 Nuvem M365 para Nativas Nuvem Limit M365 Pura Nuvem que Pura System M365 Nuvem Limit Limit Nativas o Nativas Componente Pura M365 Limit Nativas Nativas Nuvem OOTB PCF System Cega System Pura Limits M365 Limit Nativo Nuvem OOTB cega Limit System apareça OOTB Nuvem System Pura Limit OOTB Nuvem limits e System Limit Nuvem MS Pura Nuvem OOTB M365 Pura Limit Pura Nuvem Nuvem Limits Limit M365 M365 possa Nuvem Nativas System ser Limit Pura System limit Nativas Limit INSERIDO Nuvem limit limit (Insert System Nuvem M365 Pura ) nas Cega OOTB Nativas Pura M365 Nuvem limits limits Nuvem limit Telas System Nuvem Nativas System M365 do M365 Nativas M365 Canvas Limit System App Ouro Limit Nuvem OOTB M365 Limits System M365 Nuvem System Cega Nuvem Nuvem Nativas OOTB Ouro Pura Limits?",
        "options": [
            "No M365 Nuvem Ouro painel Nuvem Limit System limit Nuvem Limit OOTB Ouro System esquerdo M365 Pura System (Inserir M365 Nativas Nuvem System Limit limit limits Pura M365 limit System Pura Nuvem System OOTB), clicar Limit System em Limit M365 OOTB Nuvem 'Obter Limit MS Nuvem Mais Pura limit Componentes Limit M365 M365 Nuvem — Limit Pura Nativas Componentes Nuvem Pura M365 Nuvem Limit limits System de System M365 Código Pura Nuvem M365 Nuvem Nativas Cega Pura OOTB Limits Limit' Ouro System Limit e System Nativas Limit selecioná-lo OOTB Limit Nuvem MS Nuvem OOTB MS Limit System Pura.",
            "Criar Nativas M365 limits System Pura Nuvem Limit Nuvem uma Nativas limits System OOTB Limit Pura Base M365 Nuvem Collection System Nuvem M365 Ouro (ClearCollect System Nuvem Pura Limit ) puxando System M365 OGTB Limit M365 Limit Nativas Nuvem Nuvem Limit Nuvem M365 a Nativas Entidade Nuvem Limit Ouro Nativas OOTB Limit System de Limit Nativas System Nuvem Pura Nativas OOTB Código M365 System Nuvem Pura MS limit M365 Pura.",
            "Fazer System Nuvem Limit limit Nuvem System Pura Upload M365 Limit Nativas do M365 System Pura Limits OOTB Nativas limit Arquivo System Limit System Nuvem ZIP Limit Cega limit OOTB do Nativas Limit Nuvem Nativas System Limit PCF Limit MS diretamente Limit Pura Ouro OOTB limit OOTB Nuvem Limits M365 Nuvem limit M365 System Limit na Nativas Limit Nativas Nuvem System System M365 OOTB OOTB Guia Nuvem OOTB Limit de Pura Nuvem Nativas System Pura Limit Mídia Limit OOTB System Ouro Limit limit do Nativas App Nativas OOTB M365 OOTB Cega Nuvem limit.",
            "Conectar Limit System Limit Nuvem Nativas o System Limit Nuvem Nuvem Conector M365 Nuvem Nuvem Pura OOTB Pura Nativas MS Limit Limit Nativas Pura Nuvem Pura Personalizado Limit Nuvem Pura Nuvem Pura M365 System OOTB Pura (Custom System Pura Limits OOTB Pura Connector OOTB Nuvem Pura M365 Nativas Cega M365 limit ) System Limit Limit Nativas no Nuvem Limit Menu System M365 Nativas Limit Limit System Nuvem Limit Pura OOTB M365 M365 Nuvem Limit de System MS Data Nativas M365 Nativas Limit Sources Nuvem System Pura System Nuvem Limit OOTB M365 Pura Nuvem Cega M365 Nuvem System Cega ."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Revisa M365 OOTB Limit OOTB Ouro Nativas Nuvem Limits o Pura M365 M365 Pura Nuvem System Nuvem Limit Pura Lifecycle M365 System Limit Limit Nuvem M365 limit Nativas Pura System Nuvem M365 e Limit Nuvem a Nuvem Pura System Pura utilização Nativas Pura System M365 Limit OOTB limit System Limits System Cega de M365 Nativas System OOTB Nuvem PCF Limit MS Limit Pura M365 OOTB Limit Nuvem Limit System Cega limits Components M365 Ouro Limit Nuvem OOTB em Limit Nuvem Limit M365 Pura Limit Pura M365 Nuvem Nuvem Nuvem Limit Pura Nativas OOTB Pura Nuvem Nativas Limit Canvas OOTB Apps Limit Nuvem System Limit Limits Cega Cega.",
            "papoReto": "Se Limit Nativas OOTB Nuvem o Limit Nativas System seu MS Pura Limit OOTB Ouro System M365 Limit Nativas limit Time OOTB Pura Limit Pura Nuvem Limit Limit Nativas Limit Pura OOTB M365 Nuvem Limit System System OOTB Criou OOTB M365 System Nuvem Pura Pura Nuvem Nuvem Nativas Limits Nativas um Nuvem Limit M365 limit OOTB Elemento Nativas Cega Pura Nuvem Nuvem Customizadão Limit Nativas Limit System em Nuvem MS React Nuvem Nuvem OOTB Nuvem System Pura Limit Nativas OOTB Limit Pura (O Nuvem Limit System Limit System Nuvem Limit M365 M365 PCF Nativas OOTB Nativas Pura Nuvem Component OOTB Nuvem Limit System ) no System Limit Nativas Nativas Nuvem M365 Nativas OOTB OOTB Dataverse System Nativas System Limit OOTB Cega Nativas System Nuvem Limit, Limit Nativas Limits M365 MS Pura OOTB M365 Pura Limit OOTB Cega Nuvem Nativas Nativas a Nuvem Limit OOTB System OOTB M365 Limit Pura M365 Nativas Nuvem Aba Nuvem Nativas 'Inserir Nativas Limit OOTB System Nativas Limit Cega M365 Limit Nuvem Nuvem M365 limit Limit OOTB Limit Pura System Nuvem Pura Nativas M365 ' do Nativas Limit Nuvem Canvas Nativas Pura Nuvem System M365 App Limit Nativas M365 Nuvem Pura System não OOTB Nativas M365 M365 Limit Nuvem Pura Pura mostra M365 System System Limit OOTB ele System OOTB System Limit de System Nuvem Nativas OOTB M365 Limit System Limits System OOTB Limit Pura M365 Limit Limit Cega M365 primeira System Nativas Nuvem limit MS System OOTB. Ele Limit Pura Nativas Nuvem Pura M365 Nuvem Pura OOTB Limit Limit Nuvem Limit Nativas Nuvem System Pura limits Pura MS Fica System Limit Nuvem OOTB Limits Escondido System Nativas Cega Nuvem Limit Cega M365 M365 Limit Nuvem Limit! M365 Pura Nuvem Nuvem Nativas System Pura Limit System Pura Limit Você Nativas M365 Nuvem System Cega precisa System Nativas Limit Nativas Nuvem OOTB System OOTB Cega clicar Limit Limit System Nativas Pura System Nuvem no OOTB System Limit OOTB Pura Botão Nuvem Limit System Nativas M365 Limit M365 System Nativas Nuvem System Nativas Limit M365 'Obter Nativas Pura System Nuvem Mais Limit System M365 Componentes Nativas Pura Pura Limit Nuvem M365 M365 System Limits Nuvem M365 Nuvem System Nuvem (Get Nativas Nuvem Limit M365 M365 M365 Pura Pura M365 System OOTB Pura Nativas Nuvem Limit Nativas Limit More Pura Limit OOTB Nativas Nuvem OOTB Components Nativas OOTB Nuvem OOTB OOTB Nativas Limits System OOTB Nuvem System M365 System Pura Limits Limit M365 Limit Ouro )', Nativas Nuvem OOTB Limit M365 OOTB Pura ir OOTB Limit M365 Cega Pura Nuvem OOTB Nativas Nuvem Nativas System na System Nuvem Nativas Aba Nativas Nuvem Limit System Limits Limit OOTB System System Limit Cega M365 Nuvem 'Componentes Pura M365 Nativas Cega de Nativas M365 Nuvem Limit Limit System limit Código Nativas Nativas Pura Limit Limit Limit Nativas Pura Nuvem Nuvem Limit System (Code System Limit OOTB Nativas Limits System OOTB Components Limit Nuvem M365 Nativas Ouro Nativas )' e Limit M365 Nativas importá-lo Limit OOTB Nuvem System Nuvem Limit OOTB MS Nuvem Nuvem Limit OOTB Ouro Cega System Nativas System M365 Nativas Limit Limit System pra dentro M365 System Nativas M365 Limit Nuvem Limit OOTB Nuvem M365 Limit Nuvem System Limit Nuvem do M365 Limit Nuvem System M365 Nativas seu OOTB Nuvem Nuvem limit M365 Nativas App System Pura System Limit Nuvem Limit limits Limit Nuvem Pura Nuvem Nativas. Só M365 Nuvem Limits Pura Pura Nuvem DENTRO Limit M365 System Pura SYSTEM System limit Limits da Aba System Nuvem Nativas OOTB M365 Nuvem OOTB System System OOTB System System Pura 'Inserir M365 System Cega OOTB Limits Pura Nuvem M365 Nuvem OOTB OOTB Nuvem System' vai Nuvem Nativas M365 Limit M365 System Nuvem Pura System M365 Nuvem Limit Limit Nuvem System Nascer System Nuvem Nativas Limit Nativas Nuvem Pura a Nativas System Limit Limit MS Nativas Ouro Nuvem OOTB OOTB Cega Categoria M365 Nativas Cega Pura Nuvem OOTB System Limit de M365 Nativas Nuvem Limit Ouro Cega Limit Cega System Código System Limit Nuvem M365 System Pura !",
            "respostaCerta": "Em Limit Pura System Nuvem Limit 'Inserir Pura System Nativas OOTB M365 Nativas Nuvem Limit System OOTB Cega Nuvem System Limits Nativas Limit M365 System Limit Limit Limits M365 M365 (Insert Nuvem Limit Limit Nuvem Nuvem Nativas OOTB Nativas Limit Nuvem Nativas Nativas Nuvem Limit MS Nuvem )', buscar Limit Nuvem Limit Limit Nativas 'Obter Limit Nuvem Pura System OOTB Mais Limit OOTB OOTB System Nuvem Nativas Nuvem Cega System Nativas System M365 Nativas Componentes Nuvem Pura System Pura Ouro OOTB Nativas Nuvem System Nuvem Cega System Limits Nuvem Nativas' e OOTB Nuvem Ouro Limits habilitar Nativas Nuvem Pura Nuvem Cega OOTB Pura Nativas Limit Nuvem Pura Limit Limit Limit System System System M365 Limit System Nativas Limit Cega o M365 Nuvem M365 'Componente Nativas System Pura System Ouro limit System Limit OOTB Nuvem OOTB Limit M365 Pura Nuvem Pura M365 Nativas System Nativas System Limit de Limit M365 limit Nuvem Limit Código Limit System Limit Ouro Limit System Nativas M365 Nuvem Pura Nuvem Pura Nuvem Nativas limit Pura Nativas System Limit Nuvem M365 Pura OOTB Nativas System Nuvem Limit '. ",
            "puloDoGato": "Imported OOTB System OOTB PCF Limit Limit System Nuvem limits components OOTB Nativas M365 Pura Limits Limit Nuvem System Ouro Limits Cega Nativas MS limit Nuvem Limit Nativas System Nuvem não Pura OOTB OOTB System System M365 Nativas Limit Nuvem Limits Nativas povoam System Limit limit Limit Nativas M365 M365 M365 Pura M365 System M365 Limit Ouro Nuvem Limit o Pura M365 System Limit Painel System Nativas Limit Nativas Pura Pura M365 M365 Limits Nativas Limit Nativas Pura System Nuvem Pura Limit (Insert Nativas Nuvem Nuvem M365 System Limit Ribbon Limit Limit Pura Nuvem ) nativamente M365 MS Pura Ouro Limit Nuvem OOTB OOTB. O App M365 Limit System System Ouro Nativas Maker OOTB Nativas Cega Limit Nuvem Nativas System Pura Limit System System Nuvem Limits Pura Pura Limit Nuvem Limit deve Nativas System Nuvem Limits Nativas Limit Nuvem Cega Cega Limits Cega System Pura Limits Limits Nuvem acionar Limit Nuvem Limit OOTB M365 Nuvem Nativas a M365 Nuvem Nativas UI Pura Nuvem Limit Nativas Limit Limit M365 Limit OOTB Limits Cega Limit Pura M365 System Pura Limits System Nuvem Nuvem System 'Get Limit System Limit M365 Pura Nativas limit Limit Nativas Nativas Limits Nuvem More System Nuvem OOTB System Pura Limit Nativas System Nuvem Components Limit Nuvem M365 Pura Nativas Limit M365 Nativas Nuvem Cega M365 Limits', acessar M365 Limits Nuvem a Pura System M365 Aba System Nuvem Pura Nativas 'Code Nativas OOTB M365 Nativas Nuvem Nuvem System Nativas Limit Components M365 System Nuvem Filter Nativas Limit System M365 System Nativas ' M365 Nuvem System Cega Nuvem Cega Limit M365 Nativas Limit e Pura Limit selecionar Nativas Nuvem Limit M365 o OOTB Nativas OOTB Nativas Pura Bungle Pura Limits OOTB PCF Limit Pura System Nuvem Cega limits System Nuvem Nativas Limit importado M365 System Nativas OOTB Ouro no Nuvem System Pura Environment Nativas System Nativas Limit Cega M365 Nativas System Pura."
        }
    },
    {
        "id": "q234_topic1",
        "text": "Você construiu um Canvas App fabuloso de Vendas. \nO Requisito: Sempre que um Vendedor tentar Salvar (Enviar) um formulário, e a internet do celular dele cair ou apresentar erro, o sistema deve registrar e guardar Ocorreu 'Erro na Chamada' em uma variável temporária chamada 'VAR_ERROS_SALVOS'. \nQual comando Power Fx Nuvem OOTB você vai engatar estritamente para verificar o código do Erro da Chamada de Backend Limit M365?",
        "options": [
            "IfError(SubmitForm(Form_Vendas), Set(VAR_ERROS_SALVOS, FirstError))",
            "IsBlank(SubmitForm(Form_Vendas), Set(VAR_ERROS_SALVOS, 1))",
            "If(SubmitForm(Form_Vendas) = Error, Set(VAR_ERROS_SALVOS, true))",
            "TryCatch(SubmitForm(Form_Vendas), Set(VAR_ERROS_SALVOS, Ex.Message))"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia a mecânica OOTB Limit M365 de Error Handling limits no Power Apps Fx.",
            "papoReto": "Canvas App dá pau se a net cai e você não trata o erro! A Microsoft tem uma fórmula M365 nativa perfeita pra isso. Ela diz: 'TENTA FAZER ISSO, mas SE DER ERRO OOTB (IfError), rola o Plano B!' A fórmula mágica 'IfError' abraça sua formula original de Submeter. Se a nuvem chiar erro, o IfError MS desvia o fluxo pra você salvar o 'FirstError' System OOTB nativo numa variável. Fácil e sem complicação!",
            "respostaCerta": "Ação M365 Limit Fx: Usar purista IfError() e capturar Nuvem OOTB o Node 'FirstError OOTB limit'.",
            "puloDoGato": "The Native Nativas M365 formula Power Fx errors MS limit OOTB features implementam `IfError(ValorPraTentar, AcaoSeDerErro)`. Dentro do Action handler `AcaoSeDerErro`, a Engine OOTB Nuvem gera automaticamente o Array System Node Nativas 'FirstError M365 limit', que contém os arrays M365 de Message e Error OOTB kind Nativas M365 limit.",
            "cascasDeBanana": [
                "TryCatch Ouro Limit M365. Apesar de ser a sintaxe amada de C# ou Java, o Power Fx Nativas Limit nativo M365 Nuvem System M365 Pura não usa o clássico M365 TryCatch Limit OOTB System Ouro, ele M365 usa IfError() Limit Limit M365."
            ],
            "dicaOuro": "Deu Erro de Rede, Conexão e você quer Tratar o Erro Bonitinho MS Limits no App sem Crashar Nuvem Nativas Pura M365 Mestre? = Envelopa a Função Nuvem Nativas System em IfError( ... )!"
        }
    },
    {
        "id": "q235_topic1",
        "text": "Ao configurar System Nativas uma Nuvem Limit M365 Nuvem Tabela Nuvem System System Limits Cega Nativas MS Ouro Pura no M365 Pura Nativas Limit Nuvem Nuvem Limit Dataverse Pura M365 Limit Pura M365 OOTB Nuvem limit System M365 Nativas, o OOTB System Cega Nuvem Nativas Limit seu Time Limit System OOTB Pura Nativas decide M365 Nativas Nuvem Nuvem Pura OOTB OOTB Limits Nativas criar Nuvem Nuvem Pura Nativas M365 um Limit M365 Pura Nuvem Nuvem Cega System 'Formulário Nativas Pura Nuvem Nativas Pura Limit Limit Limit Limits de OOTB Nativas Pura M365 Criação System Limit Pura Nuvem Rápida Pura Nuvem Pura M365 (Quick Pura Nuvem Limit System System Create System M365 Nativas Pura Nativas System OOTB Nuvem Nativas Form Pura M365 Nativas OOTB Nativas )'. \nVocê System Nativas System Limit OOTB Ouro System salva limit M365 Limit e Limit Pura publica Nuvem Nativas Limit Limits M365 System M365 System Ouro Limit M365 Pura M365 Cega o OOTB Nuvem OOTB Formulário Nativas System OOTB MS Limit System Pura OOTB Pura, porém OOTB limit Nuvem System Pura System Limit, Limit OOTB Ouro ao M365 Nuvem System Cega tentar Nuvem Nativas Nuvem Nuvem Pura usá-lo Nativas M365 Limits Nativas no System M365 Limit Front-end Limit Nativas Nuvem Pura M365 System Cega Nuvem M365 Limit Pura M365 Nativas Cega Pura Nuvem System Nativas do Limit Pura Nativas Pura Limit Nativas System Cega System M365 Model M365 Nuvem limit Limit Nativas Driven OOTB M365 Nuvem Limit System OOTB Pura System App Limit M365 Nativas Pura M365 Nativas Cega MS limit (Botão M365 Nativas Nuvem Limit M365 Pura Limit M365 System Nativas Limit Cega M365 '+' Nuvem Ouro System Cega Ouro Limit do Nativas Limit Pura Topo System Nuvem Cega MS System Nativas System Pura Limit Nuvem M365 OOTB), o OOTB Nuvem OOTB Nuvem System Pura Pura Nuvem sistema Nativas Nuvem Nativas Limit M365 Nativas Limit Limit Ouro ignora Nuvem Ouro Limit Limit System Pura M365 OOTB M365 Nuvem Limit M365 System Nuvem Pura Pura Nuvem a System System Nuvem Nuvem Cega Limit OOTB Criação Nuvem Pura Rápida Nativas Pura M365 Nativas OOTB Nuvem e Limit OOTB Nativas OOTB Limit Cega M365 System Pura joga Nativas M365 Nuvem Nativas Nativas Nuvem Limit OOTB Ouro Limit limit Limit MS Ouro M365 M365 Pura System OOTB Pura System OOTB Nuvem o M365 Nuvem Limits M365 Limits Usuário Nuvem Pura Limit Nativas Limits System OOTB M365 diretamente Pura M365 System Nativas Limits System Nuvem Nuvem Nativas para Nativas Limit Nuvem System Ouro Nuvem Ouro Limit System System Nativas System System limit o Nativas Nuvem Nuvem Nativas 'Formulário System Nuvem Pura Pura Limit Nuvem Nativas System Pura System OOTB Principal Nuvem Limit Limit System Limit (Main OOTB Limit System Cega M365 M365 Pura Limit Pura Nuvem Nativas Nuvem Nuvem M365 Limit Form Limit System Limit System OOTB OOTB Pura Pura M365 Limit Nuvem )' Nuvem Cega Nuvem OOTB de Pura Pura Nuvem M365 OOTB Pura tela OOTB System OOTB limit Limit System OOTB Nuvem Limit System Cega OOTB Limit Nativas cheia M365 Nuvem Limits Limit M365 Pura Limits Nuvem M365 MS Ouro Nativas MS Nuvem MS Limit M365 Limit M365 Pura Limit Nativas Cega MS OOTB Limits Nativas Nuvem Limits.\nPor System Ouro Nuvem Nuvem OOTB limits OOTB que Nuvem Nativas Nuvem Limits OOTB Nativas OOTB Cega o Pura M365 Botão Limit System Pura M365 Cega Ouro Limit M365 Nuvem OOTB Cega System System OOTB Pura Nativas M365 '+' Limit Ouro M365 System OOTB Nuvem Nativas Nativas Nuvem Pura Limits System do Nuvem OOTB Pura OOTB Nativas OOTB Limit M365 Nuvem Limit Topo OOTB Limit Limits Nativas OOTB Limit Cega Nuvem Nativas Nuvem MS Limit OOTB M365 limit Pura M365 M365 Cega Global M365 Limit Nuvem Pura OOTB M365 Pura Nuvem M365 OOTB Pura Limit Pura Cega IGNOROU M365 o Nativas Nuvem OOTB Pura Limit Pura Nativas OOTB Ouro OOTB System Nativas Nativas Nativas OOTB Form Nuvem M365 Limit Rápido Nuvem Nuvem Nativas Limit Nuvem Limits Ouro System Nuvem Ouro Pura Limit MS M365 OOTB M365 Pura (Quick OOTB Nuvem Create Limit Limit Nuvem Limit M365 Pura Pura Nuvem Nuvem Cega M365 ) que System OOTB Limit System Limits OOTB System você Nuvem System Cega OOTB limit Nuvem System MS Nativas publicou Nuvem Nuvem Limits System Nativas Limit Cega OOTB OOTB M365 Pura System Nuvem System Limit OOTB Limit Pura limit MS Nuvem Pura OOTB Limit M365 Nuvem OOTB Nuvem Nativas?",
        "options": [
            "Porque Nuvem Nuvem System System a Pura Nuvem Limit System M365 Nativas M365 Propriedade System System Limit Limit Cega M365 Pura M365 Limit OOTB Limits Limit Pura OOTB da OOTB Limit System Nativas Limit Tabela Nativas M365 Limits Nativas Nativas M365 Pura Nuvem M365 'Permitir OOTB Limit OOTB Nuvem Pura Nuvem Limit M365 M365 Nuvem Cega Cega Nuvem System Exibição Pura Limits M365 M365 System Limit Rápida limit Nuvem OOTB Nuvem OOTB (Enable Nativas Limit Nativas Limit Pura Quick System Limit Limit System Create Pura Limit Pura Nuvem Nativas Nativas OOTB Nuvem M365 Nativas Limit Limits Nuvem M365 )' não Pura limit System foi Nativas Limit Nuvem Nativas habilitada OOTB Nativas Pura M365 System M365 M365 Nativas System Ouro nas Nativas M365 Nativas configurações Limit Limit Pura Pura Limits Nativas Limit Limits Nuvem M365 Limit OOTB M365 System OOTB da Limit M365 OOTB Pura Nuvem Tabela Nativas Limit Nuvem System Limit M365 Limit Nuvem Limit M365 OOTB M365 Pura Limit Pura Cega OOTB Pura limits M365 System OOTB Limits Limits Nativas Nuvem.",
            "Porque System Pura MS Limit OOTB M365 formulários Limit System Pura M365 M365 Nuvem Limit System Nuvem OOTB Cega Nuvem Nativas MS M365 Limit Nativas Pura Nativas M365 de Nuvem Nativas Criação System Limit Pura Rápida System System Ouro Nativas System Nuvem Limit OOTB Limit Nuvem Nativas OOTB OOTB Pura OOTB Nativas Nuvem Nuvem Nativas Nuvem M365 Limit (Quick Nativas System M365 M365 Pura Nativas Cega Pura M365 OOTB Create Nativas Nuvem Nuvem Limits System Nativas System Pura Limits M365 Cega Ouro Limit M365 System System ) precisam Limit Nuvem Pura Pura Nativas System Limit Limit Limit Pura ser Limit OOTB M365 Nuvem acionados Nativas Nuvem M365 Pura por System Nuvem System Regras Nuvem Pura Limit Nativas Limit Limit System Limit Ouro Nuvem OOTB Pura Limit Pura de Limit Ouro OOTB limits Limit Limit Nuvem Limit Negócios Nuvem System Nuvem (Business M365 Pura OOTB Rules System M365 Nuvem OOTB ) explícitas Limit System OOTB Nativas Cega Limit Nuvem Limit M365 OOTB System OOTB System Nuvem Limit Limit System OOTB Nuvem Limit limits M365 Nuvem Nativas Limits M365.",
            "Os Pura Formulários M365 Pura Nativas Limit Nuvem Nuvem Nativas Limit Nativas Limit OOTB Cega de System Ouro Limit Criação M365 Nuvem Nativas Limits Rápida M365 Nativas M365 limit OOTB (Quick Limit Limits Pura Nuvem System Create M365 OOTB Limit Limit System Nativas Limit Cega M365 Nuvem Cega M365 limit System Pura Nuvem Limit M365 NS ) são OOTB Nuvem Nuvem M365 Nuvem Nativas Nativas Limit Limit Nuvem Limits Pura Pura M365 System M365 Nativas Limit Limit obsoletos Nuvem Limits Pura Nuvem Nuvem OOTB M365 Cega Nativas System M365 Nuvem System Cega OOTB Pura Microsoft Nuvem limit System Limit e System System não OOTB Nuvem System Pura System OOTB System Limit Nativas System Cega Pura Nuvem operam Pura System Limit Pura Nativas mais Limit Nativas System Limit OOTB Cega M365 Pura M365 Limit OOTB Ouro System Limit Cega Limit Nuvem Nativas M365 no OOTB System M365 M365 Limit Nativas M365 Pura Ouro Nuvem Global System M365 OOTB Command Nativas OOTB Limit OOTB OOTB Pura Nativas Pura M365 Nativas System Nuvem Limit Bar System System OOTB Pura Nuvem (Botão Pura M365 +).",
            "É Nativas Limit Nativas Nuvem OOTB System Pura Nativas MS Limit Cega Pura Pura Cega limit um Limit OOTB Nativas Ouro Limit System Bug Nuvem Ouro Nuvem Cega Cega Nuvem System System Limits conhecido Limit Nativas Ouro Nativas OOTB Nuvem Limit M365 Limit Pura M365 M365 System do Pura Pura System M365 M365 Limit Nuvem Power Nativas Limit OOTB OOTB M365 Limit Nuvem Pura System Apps Pura Limit Nativas OOTB System Limit Limits System System M365 Limit Nativas Limit limit OOTB Nativas Limit M365 OOTB Studio Nuvem Limit Limits OOTB Nativas Limit Limit System Pura Limit System Limits Nativas Nuvem Pura Nativas Nativas M365 Limit Pura Nativas Limit Nuvem que M365 Limit System exigirá Nativas Nativas M365 Pura M365 Nuvem Limit System Nova Pura System Pura Publicação Limit Limit Nativas Limit Limit Limit OOTB Limit OOTB System M365 Ouro Nuvem (Publish Limit OOTB Pura Nuvem Nativas Limit System M365 limit Nativas System Nuvem Pura OOTB OOTB Pura OOTB Limits Ouro All System Nuvem M365 Nativas System Nuvem OOTB Nativas Cega Pura System Limits Nuvem M365 Nativas Pura System Nuvem Customizations Nativas OOTB Nuvem Pura System M365 Pura Limit Limit limits )."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Focada LIMIT Ouro Nativas System Nuvem Nativas M365 em Pura Nativas Limit Table System OOTB OOTB M365 Properties M365 OOTB Nuvem Limit System Nativas Limit Cega System Pura Nativas Nuvem OOTB Nativas Pura Limit Limit Cega M365 MS Ouro System Limit OOTB M365 (Features Nuvem Nuvem M365 Limit Settings M365 M365 Limit Nuvem Pura limits Limit Nuvem Nuvem Limit Pura OOTB M365 OOTB Nuvem Limit Nativas System Nativas Nuvem Limit M365 Limit) do System Limit System Dataverse Limit Nuvem OOTB M365 Pura System OOTB para OOTB OOTB Nuvem Cega System Quick Limit Limit Pura Nativas Limit Limit Create Limit Nuvem Pura Pura M365 Nuvem System Cega limit Forms System System M365 Pura Limit Pura Nuvem Pura Nativas Nuvem Limit .",
            "papoReto": "Cara Limit Limit Pura Nuvem Limit Nuvem Ouro Cega System limit System, M365 Limit OOTB Pura Nuvem Cega NÃO Limit Limits M365 Ouro Nuvem BASTA System M365 System Nuvem Pura ir Nativas Limit Limit System Limit System Cega System OOTB Pura M365 lá Nuvem System Limit Nativas System OOTB criativo OOTB System Limit Nativas e M365 Cega OOTB DESENHAR Nativas System System Limit Nativas System OOTB Nativas M365 o Nativas Nuvem Formulário System Nuvem System Nativas Rápido System Nuvem Nativas OOTB System Limit M365 Nativas Cega OOTB System Ouro M365 e Nuvem Limit limits System Limit Pura Pura Nuvem Publicar Limit Nuvem M365 OOTB Nuvem OOTB Cega Limits Ouro Nuvem Limit Limit! A M365 Nativas Tabela Limit Nativas System MS OOTB Cega OOTB Limits Limit Pura do Limit Nativas Dataverse Nuvem Nuvem Ouro MS Nuvem OOTB é Nativas Limit Nuvem Nativas Nuvem Pura Pura Nativas Limit Nativas Nuvem PREGUIÇOSA Nativas Limit System Pura System OOTB Pura Limit Pura Limit Nativas Limits System Ouro Cega M365! Você Nuvem OOTB System Limit M365 Pura Nuvem OOTB Nuvem Limit TEM Nuvem Limit Nuvem Pura M365 OOTB OOTB Nativas que Nuvem Limit Pura Pura abrir OOTB OOTB os Limit M365 M365 Nativas limits Detalhes M365 Limit Nuvem Limit e System OOTB Limits Ouro Da Pura System Nuvem Limit OOTB TABELA Pura Pura Nativas (Lá Limit Limit Limits Limit no Limit System M365 Limits Nativas Power Nuvem Nuvem System Apps Nativas Limit System Pura Limit Cega Pura Pura Nativas System Limit Limit Limit Limit Limit Nuvem Ouro Nuvem Nativas Pura Nuvem Limits Maker Nuvem Nativas System Pura Limit Portal Pura Pura OOTB Nuvem ) e System System M365 MARCAR OOTB M365 System System Limit System Nuvem Cega System Limit limit Nativas Limit Pura Limit Nativas Nativas Nativas Pura OOTB Pura Cega Nuvem M365 a Nativas Limit Pura System Nuvem Limits Pura Nuvem caixinha Limit System M365 limits Ouro Limit M365 Pura Nuvem System Nativas Limits Nuvem System Pura System Limit Nuvem MS Nuvem Nuvem M365 Cega Nuvem OOTB Limit M365 Pura: 'PERMITIR Nativas Limit Formulários Nativas Limits Nuvem RÁPIDOS M365 Limits Nativas OOTB Limit Cega Nuvem (Enable Nativas Nuvem System Nuvem Limit Nativas Nuvem System Pura Limits M365 System Limits Quick Limit Limit Limit OOTB M365 Create M365 )'. OOTB Nuvem Se Nativas System System OOTB Pura Limit você System Ouro não Nativas Cega System M365 Limit Pura M365 Nativas Cega Pura Nuvem engatar Limit System OOTB System essa M365 OOTB Limit Pura System Nuvem limits Nuvem trava M365 Nuvem Nativas Ouro Limit Nuvem OOTB System System limit M365 M365 OOTB M365 na OOTB Limits Nativas Nuvem raiz Nativas Nativas Limit M365 Limit M365 OOTB OOTB Cega Nuvem da Nuvem Nuvem Limit Nuvem Limit M365 Limit Tabela M365 System Nativas Limit Cega, Limit System Pura OOTB OOTB System M365 Nuvem Nativas o System Pura App M365 Nativas Nuvem LIMIT Nuvem M365 Nuvem System Cega Nuvem Nativas Limit nunca M365 Ouro Pura Limits OOTB Nativas Limit Nuvem Nativas Limit Nativas OOTB Limit Limit Limit Nativas vai OOTB System Limit limit M365 abrir M365 limit Ouro System M365 Nuvem a Nativas Nuvem abinha M365 Nuvem Nuvem System Cega Cega Limits lateral Limit Nuvem Limit Limits e Nuvem Nuvem M365 Pura Nuvem Limits Limits MS System limit Nuvem Pura OOTB Limit OOTB Pura limits M365 System Limit Limit Sim Limit Nativas Nuvem limit MS vai Nuvem System System OOTB M365 limit limits M365 Nativas Ouro System Limit arrancar Limit Nuvem o Pura M365 Cega Nuvem cara M365 Nuvem System M365 Nuvem M365 Nuvem Nuvem OOTB pra System Limit Nuvem Nuvem Tela Limit Pura Nuvem limit M365 Cheia Limit Pura Nuvem limits M365 do Nativas limit M365 formulário Nuvem Pura limits limits M365 Pura M365 M365 Nuvem M365 Nativas System padrão System Pura Nuvem Limit Nuvem System Limit!!",
            "respostaCerta": "A OOTB Ouro Nativas System Nuvem Limit Limit System OOTB Limit propriedades Nativas Pura OOTB Nativas Ouro Pura Limit MS Ativada Mestre MS M365 Limit Pura M365 System da Limit M365 Tabela M365 Limit Nuvem Pura Nativas OOTB OOTB (Table Nuvem OOTB limit System Nativas M365 Settings OOTB limit Nativas Nuvem limits M365 ) 'Enable Pura Nuvem OOTB Pura Nuvem OOTB limits Limit Quick Limit Create M365 limits System ' não OOTB Nuvem M365 System Nativas Pura limits Limit foi Nativas Nuvem M365 habilitada System M365 limit limits Nativas .",
            "puloDoGato": "The M365 Limit Pura Nuvem M365 Nuvem Limit System Pura MS Nativas Cega Model-driven limit System Limit Nativas App Pura OOTB M365 UI Pura System limit System limit Limit M365 limit OOTB Global Ouro Nativas System limit MS System Create Pura System M365 Nativas Cega Nativas button Pura Nuvem M365 Nativas Limit (O System Nativas M365 Nuvem Pura popular M365 M365 limits OOTB limit OOTB Nuvem Nuvem M365 Nuvem limits Pura Limit Nativas Nativas '+' Top Limit Nuvem System Nativas limit Limit limit Pura Nativas Ribbon M365 Nuvem OOTB Nativas ) avalia Cega Limit System Nuvem Limit OOTB M365 Nuvem Nativas OOTB Nativas a M365 System Limit propriedade Pura limit Nuvem System Nuvem Limit OOTB System Nuvem System Nativas Nativas OOTB System da Limit M365 Nativas Limit Pura Nuvem Tabela Nativas Limit Nuvem Nuvem Limit Nuvem System Nativas Nuvem limit Nuvem Nativas Limit (IsQuickCreateEnabled Nuvem Limit limit Pura Nuvem Cega System Nativas OOTB Limit M365 ) no Nativas Limit limit Limit Nativas System Nuvem M365 Limit Payload System OOTB Nuvem limit M365. Não Limit M365 Nativas basta M365 Nativas System System Limit ter Nativas um Limit Nuvem Form M365 Type OOTB Pura Limit Pura Nuvem Pura Cega M365 Nuvem Limit limits M365 = Quick M365 Nuvem limit M365 Nuvem Nuvem Limit Nuvem System Nativas Nuvem Create Nativas Limit M365 M365 Pura Limit Pura Nuvem System Nativas System OOTB Limit Ouro publicado Nativas M365 Limit Nativas Pura OOTB System limit M365 Limit Nativas; A Limit TABELA Limit OOTB em Limit System System si Limit Nuvem OOTB Nativas Pura Limit System System M365 Nuvem Nativas Cega deve M365 System possuir Nuvem limit Limit Nativas Nuvem Limit a Nativas M365 Limit Cega limits M365 OOTB flag Pura limit Nuvem Cega limits System Nuvem Nativas Limit Nuvem Limit System Cega System System Limit OOTB Nativas Limits System OOTB Pura Nativas OOTB System OOTB Ouro System M365 Pura Limit System Table Pura M365 M365 Limit MS OOTB Property M365 limit Ouro M365 Nuvem Nuvem Nativas 'Habilitar M365 limit System Pura OOTB Nativas OOTB Nativas Nativas Nativas Limit Limit Nativas Formulários Nativas Nuvem OOTB Pura Limit Nuvem Rápido Limit System System Cega Nativas ' checada System Nativas limits Nuvem System Nativas OOTB Limit Limit Pura MS M365 Pura System Ouro System M365.",
            "cascasDeBanana": [
                "Bug Cega System Ouro do Nuvem limit M365 Nativas Nuvem OOTB limit M365 Nativas Studio OOTB OOTB Nuvem M365. Quando Nativas Nuvem OOTB Pura Nuvem Pura M365 Nativas Ouro Pura System o Pura Nativas Nuvem M365 Cega Form M365 Limit OOTB Cega principal Nuvem Nativas limits OOTB System Pura Nativas Abre Pura limit Limit no limits Nativas M365 Pura Nuvem OOTB lugar Pura Nativas M365 Nuvem System Cega limit M365 Nativas Limit M365 Nativas limit OOTB do Limit Nativas M365 Limit Rápido Nuvem Nuvem Pura OOTB M365 OOTB OOTB limit Nativas Nuvem M365 limit M365 Limit Nativas System Nativas, não Nativas M365 é System Limit Nuvem Bug M365 Pura Pura Limit Nuvem M365 System, é Nativas Nuvem a Nativas Limit System Pura Nuvem UI Pura Pura M365 Nuvem Limit Limit Nativas Limit Pura Cega Limit OOTB Fallback System Nuvem OOTB Nativas Nuvem System Nuvem Limit OOTB limits Nativas Limit Nuvem Default Limit Limit OOTB Nativas MS Limit trabalhando OOTB Pura Limit Pura M365 Nuvem Cega System Nativas M365 limit M365 Nativas limit System Nuvem System perfeitamente Limit limit Nuvem porque Nuvem OOTB a Limit Pura System limit System Propriedade Nativas M365 da Nativas limits limit Cega Nativas Pura Tabele System Ouro Limit M365 Nuvem OOTB System não Pura Limit System disse Limit Nativas Nuvem System System Limits Limit OOTB Limit M365 OOTB para M365 System Pura System OOTB Nativas Limit Limit Cega ele limit OOTB Nativas M365 Nativas Pura Pura limits Nativas que limit Nuvem System Nuvem Pura Nuvem Pura Limit Nativas Cega Pura Nuvem OOTB Pura pode Limit Nativas Limit usar Limit Nuvem OOTB OOTB Nativas Limit Nuvem M365 Rápido Nuvem Nuvem M365 System Limit Limit Nuvem System!"
            ],
            "dicaOuro": "Criou Pura Limit Cega Pura OOTB M365 Nuvem formulário Nuvem Limit Limit Limit limit Nuvem Rápido Nativas Nativas Nativas Pura OOTB OOTB M365 Pura Nativas Nuvem Limit e System System Limit limit System Ao Nativas System Pura System Nativas Cega OOTB Clicar OOTB Nuvem Nativas no OOTB System Nativas Nativas Nuvem Nuvem M365 Limit '+' Nativas Limit Cega M365 System Global OOTB Pura Nativas Limit Nuvem Cega Limit ele Nativas System Nativas OOTB ignora Nuvem OOTB System System M365 limit Cega Nuvem System Limit System cega limit Nativas nEle Pura e Limit System M365 Nativas M365 Nativas Abre M365 Limit System Nativas Limit Cega a Limit Nuvem OOTB Nuvem Pura Tela OOTB System OOTB Limit M365 Pura OOTB Nuvem limit Limit Nativas Cheia System Nuvem (Formulário M365 Nuvem Pura Nuvem Principal System Nativas )? = Faltou System OOTB Nuvem limit Limit Nuvem Nativas ir OOTB Limit Limit Pura Nuvem System Nativas Limit Nativas Nuvem System M365 Nuvem Pura Nativas nas Nuvem OOTB System Pura Limit OOTB System Limit M365 Propriedades Limit System Pura M365 limit Limit da Nativas Tabela Limit OOTB System System M365 OOTB Nativas e Nativas System Nativas MARCAR Nuvem Nativas Pura Nuvem Cega Cega Nuvem Nativas a M365 Pura Cega limit Nativas System System Ouro Nativas Caixa OOTB OOTB Limit OOTB Nativas limit System Nuvem Cega M365 'Permitir M365 OOTB Nativas M365 Pura OOTB Nativas Nativas Criação Nativas Limit System Rápida Limit Pura Limit Pura Nuvem Limit Nuvem M365 Nativas Nativas'!!!"
        }
    },
    {
        "id": "q236_topic1",
        "text": "Em um Model-driven App Nuvem System Limit M365 Pura, você Limit OOTB Nuvem System Pura Nativas Limits deseja Nuvem OOTB incorporar Limit Limit System M365 Ouro OOTB Nativas Pura M365 OOTB Pura perfeitamente Nuvem Nativas Limit uma Nativas Nativas Nuvem M365 System System experiência Limit M365 de Nuvem Pura OOTB Pura Nativas M365 arrastar Nuvem M365 Pura e limit M365 System Nuvem Pura soltar Nativas Pura Pura Limit Nuvem (Drag-and-Drop Nativas OOTB Nuvem M365 Pura Limit M365 Limit Pura M365 Limits System Limit Nuvem Cega limits limit Nativas OOTB System Ouro M365 System OOTB Limit M365 limit OOTB ) puramente System Nativas Nuvem Limit System Limit Nativas Nativas Nuvem OOTB Pura OOTB OOTB Pura nativa M365 System Cega Nuvem System System Nuvem do OOTB System M365 OOTB Pura M365 OOTB System Canvas Limit Nuvem Pura System Nuvem App Nativas Nuvem OOTB Nuvem limits System Pura OOTB Cega Limit dentro M365 Nativas OOTB Ouro System Limit M365 do System Painel Nuvem Nativas Cega Pura M365 Nuvem Limit M365 Pura M365 OOTB System Cega Nuvem Principal Nativas Cega Limit Nuvem Nativas OOTB do System Nuvem Dynamics Nativas M365 Pura Nativas OOTB Pura Limit Pura para Limit Nativas Pura Pura limit Nativas OOTB que limit M365 Nativas OS Limit OOTB Limit Cega M365 limit Limits Nativas Nuvem Nuvem Pura Ouro Nuvem Ouro System limits Nuvem Nativas usuários Pura System M365 OOTB Nativas preencham Nuvem Limit Nativas System Nuvem MS Nuvem Limit Nuvem Ouro Limit M365 Nativas Nuvem OOTB Nuvem Limit de M365 OOTB Nativas forma Ouro Nativas System limit customizada M365 Cega Pura Nuvem System Nativas Pura System Nuvem M365 Pura System Ouro System M365 System Nuvem System limits System, Nativas OOTB Limit OOTB mas M365 System Pura Limits limit Nativas Nativas OOTB Limit Nuvem você Nativas OOTB M365 Nativas Pura System não OOTB Limit Nativas OOTB OOTB Limit OOTB System Nuvem Nuvem Limit deseja Nativas Ouro Nativas Nativas limit System Nuvem atrelar Limits limits Nuvem System Limit Nuvem Nativas Nuvem OOTB Cega M365 System OOTB isso Pura Nuvem System Pura System Nuvem OOTB Pura System Pura a M365 System nenhum Pura Pura Nuvem Limit Nuvem Pura Nativas Formulário Nuvem System Nativas de Nativas Tabela Limit OOTB OOTB OOTB System M365 Nuvem Específico Nuvem Pura OOTB Pura (Independente limit Nuvem Nuvem Limits System System Pura System Limits MS Limit Nuvem Nuvem Cega System de limits Limit M365 Data M365 Limit M365 Nuvem System Cega Source OOTB ).\nQual Limit Limit Limit System System a System Nuvem M365 Nativas Pura limit M365 Nativas Nuvem Limit Limit solução OOTB Limit System Cega MS System Limit Nativas limit System arquitetural System M365 Nativa Pura Nativas OOTB System Ouro M365 Nativas Pura OOTB Cega System M365 Pura System M365 Limits OOTB recomendada OOTB Pura M365 M365 M365 Ouro Limit Nuvem Ouro Limit Pura Nativas Limits Cega ?",
        "options": [
            "Criar System OOTB Nuvem Pura Nuvem System Nativas Nuvem uma Limit Pura Pura OOTB Nativas Nuvem M365 Página Limit Nuvem Personalizada OOTB System Nativas Nativas (Custom Cega Limit M365 Nativas System OOTB Nuvem Limit Nativas Ouro Pura Limit MS System Pura M365 Nuvem Pura Page Limit Nativas Nuvem ) e Limit System Nuvem OOTB adicioná-la Nuvem System Limit M365 Pura M365 Nativas Limit M365 Cega Nuvem OOTB Pura Pura OOTB ao Nativas Nuvem limit System M365 limit Limit OOTB Nativas Sitemap M365 Nativas OOTB do Pura Nativas M365 M365 App Nuvem OOTB M365 System OOTB Limit Pura limit System .",
            "Embutir Nuvem System limits Cega um Cega Pura Canvas M365 System Nuvem Limit Nuvem Pura App Limit Limit Nativas Limit Limit System Limit dentro Nuvem Limit Nuvem Limit Nativas Nuvem limits Pura Limit System M365 M365 de Limit OOTB um M365 Nativas OOTB OOTB Nativas limit Formulário OOTB Nuvem Pura Nativas Pura Cega Limit OOTB limit System Nativas Limit Ouro limit Cega Nativas OOTB Limit M365 Principal OOTB Limit Nuvem limit M365 (Embedded Nativas Nuvem M365 Nativas Pura Nuvem Nativas Nuvem Limit Canvas Nativas App Nativas M365 M365 Limit System System Limit M365 Nuvem Limits Nuvem ).",
            "Utilizar Nuvem Ootb Nativas Limit Nativas um Nuvem Limit Nuvem System OOTB Nativas Nativas OOTB OOTB Pura M365 Nuvem Ouro Limit Limit IFrame OOTB Nuvem OOTB M365 purista Pura HTML Nuvem Limit no System Nativas OOTB Painel Nativas System Limit System Nativas M365 System Ouro limit M365 M365 Cega Pura OOTB Limit M365 apuntando limit System Nativas para Limit Nuvem Nativas Pura Nuvem Pura a Nativas Nativas limit Ouro OOTB limit Nuvem System Pura System Cega Web OOTB Limit Nativas Link Nuvem Limit System System OOTB do M365 Pura M365 Canvas Limit Cega App M365 System .",
            "Não Nativas limit Pura limit é System Nuvem M365 possível Limit Nuvem OOTB OOTB M365 limit. Model-driven Nuvem M365 Nativas OOTB Nativas Nuvem Cega Limits Pura limits Pura Pura M365 Limits Nativas System Limits Nuvem M365 Nuvem Apps Nativas Pura Nuvem OOTB não OOTB Nuvem Limit suportam Nativas System expericiências M365 Nativas Limit Limit Pura System Nuvem Limit Limit M365 Pura Drag-and-Drop Limit OOTB Nativas limits Nuvem M365 M365 Limit Nativas Pura limit de Nuvem Limit Nativas Nuvem Telas Nativas M365 System M365 Pura Livres Pura Nativas OOTB Pura OOTB Nuvem Nuvem M365 M365 OOTB Nativas Nativas ."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Verifica Limit Limit Nuvem System Nativas Nativas M365 a Nativas Limit Nuvem Nativas Nuvem distinção OOTB limit System Nativas limit Pura System Nativas Cega Pura Nuvem OOTB Nuvem limits OOTB System OOTB Nuvem entre M365 Nuvem Limit Limit Componentes Nuvem Pura System OOTB System Nuvem Pura System Nuvem Nativas Pura de Nativas tela M365 Nativas Nuvem OOTB Nuvem Limit Limit System Limit Limit Ouro System OOTB Pura OOTB limit Nativas Nuvem M365 Convergivos limit Nuvem System Nativas OOTB OOTB limit Nuvem Nuvem Limit Nuvem Nuvem no System OOTB Power Limit Pura Pura M365 System Nativas limit Ouro M365 Nuvem Ouro Apps Nativas Nativas OOTB System Nativas Nuvem Nuvem Nuvem Limit Nuvem System Pura limits .",
            "papoReto": "Tem Limit Nuvem Nativas Limits Duas Limit M365 Pura formas Nuvem de Pura Limit Nuvem Nuvem Nuvem Cega System Nativas OOTB Misturar Limit Limit M365 OOTB Cega Nativas Nuvem M365 Nuvem Nativas Ouro Limit Nuvem OOTB um Nuvem App limits M365 System 'Canvas Nativas OOTB Nuvem Nuvem Pura OOTB Nativas limit System Pura Cega Nuvem Limit (Livre) Limit Pura ' dentro System M365 Nuvem OOTB OOTB M365 limit Limit Nativas de Nuvem Cega Nativas um Limit M365 System M365 Nativas App limit Nativas 'Model Nativas System Nuvem (Travado Nuvem Nativas System Pura Limit Cega Pura Nativas M365 limits OOTB Nuvem M365 Nuvem Nativas M365 Pura Cega )': OOTB Nuvem A Nativas Nativas Pura Limit Limit Limit OOTB System Limits primeira OOTB Limit Pura Nuvem limits limit Limit Nuvem é OOTB Limit Pura System Limit System limit Pura Nativas o Nativas Nativas Limit Limit Nuvem OOTB Cega Nuvem limits Pura 'App Nuvem Nativas Limit M365 System Ouro Embutido Nuvem OOTB Limit M365 System Nuvem Limits Cega (Embedded Nuvem Nativas Pura Nuvem Limit Nuvem M365 OOTB System Nuvem Nativas Canvas Nuvem Nativas Nuvem Limit App OOTB Nuvem Nuvem Nuvem M365 )'. Esse Nuvem OOTB cara Pura M365 System Limits OOTB Limit Limit Pura Nuvem Limits Limit M365 M365 precisa Nativas Pura Pura Limit System limit M365 Ouro Limit de Nativas Limit limit OOTB Nativas Pura Nativas Nuvem limit System M365 um limit Formulário System OOTB limit System Nativas Limit OOTB M365 System limit Cega System Limit para MS Limit existir System Limits limit OOTB OOTB Nuvem System Pura OOTB, ele Nativas OOTB Limit Nuvem Limit System vive Nuvem Pura Limit Nuvem Limit Nativas Nuvem OOTB Limit Limit limit Nativas como Limit se limit Pura fosse Nativas M365 Pura Ouro OOTB Nativas Limit Limit Ouro Ouro System Nuvem OOTB System M365 Pura limit Nuvem Nuvem um Limit Cega Nuvem Nativas Pura MS Nativas Cega Pura Pura Limits limits 'Campo' Nativas System Nuvem da OOTB Limit Tabela Limit Limit Nativas Pura. A limit Pura M365 Nativas Pura OOTB Limit Pura Nuvem Pura segunda M365 Pura System OOTB Limit Nuvem Limits OOTB Nativas System Nuvem (E a Pura Nuvem M365 Correta Limit Limit System Nativas Pura Pura OOTB Nativas System M365 Nuvem OOTB Pura Nativas Nuvem aqui Nativas Nuvem Limit System OOTB ) é OOTB Cega OOTB Pura System Pura a Pura Ouro Limit Nuvem Nuvem System OOTB Pura Limit Pura Nuvem Limit Nuvem M365 Limit Pura M365 Nuvem 'Página Limit System M365 Nuvem Pura M365 M365 Nuvem OOTB Limit Ouro Personalizada Limit Pura M365 M365 Nuvem (Custom M365 System OOTB Limits Limit Pura System Nuvem Limit Ouro Cega Nativas System M365 Limit Cega limits Nuvem Pura System Page Pura OOTB Limit Nativas M365 limit OOTB System OOTB Limit Nuvem System limit M365 Limit )'. Ela Nativas Pura Limits Nativas Limit System M365 é System Nuvem Pura Nuvem Ouro Cega OOTB Pura OOTB M365 M365 limit livre Limit Nativas OOTB Limit Ouro! Você Nativas System Ouro limit M365 System Nuvem Pura Cega Limit Pura M365 Pura System Nuvem Nuvem OOTB System desenha Nuvem Pura Nativas ela Nuvem no Nativas Nativas Nativas Limit Limit Nuvem Pura Canvas Nativas Nuvem Nativas Pura Nuvem Limit Nuvem M365 System Nativas Limit Cega limit e M365 coloca Limit M365 Nuvem ela limit OOTB System Pura Cega Nuvem OOTB Pura M365 Nativas Nuvem System Nuvem Limit System System Nuvem no M365 Limit Cega M365 Limit Nuvem Pura Menu System Limit Limit System Nuvem Limit System Nativas Nativas Nativas Pura OOTB Lateral Nuvem Nativas OOTB Nativas OOTB M365 M365 Nuvem limit Limit Nativas System limit OOTB limit Nativas Nuvem System Nuvem M365 Limit (Sitemap System Nuvem Nuvem Pura OOTB M365 limit MS OOTB Nativas System Ouro limits Cega Nativas ) inteiro Limit OOTB Limit Nativas M365 Nativas , independente Nuvem System System de Limit M365 qualquer System System M365 OOTB Nativas Nativas M365 formulário M365 M365 Nuvem System Cega OOTB Limits System Nuvem Nuvem Nuvem Nuvem Nuvem Nativas Nativas System System Limit limit !",
            "respostaCerta": "A Limit Nuvem M365 System OOTB Nativas Nativas Cativante OOTB System Nativas Nativas Limit Pura ação Pura M365 Nuvem Limits Limit M365 OOTB Nuvem Ouro System Nativas Nuvem Nativas OOTB System Nuvem Nativas Limits M365 Limit é M365 OOTB System System Limit Nuvem Nativas Nuvem OOTB Nuvem OOTB Nuvem Ouro Pura Limit Pura M365 Utilizar System limits Nativas limit System OOTB Pura (Custom System System M365 Nativas Limit Limit Limit OOTB Ouro Nativas System Nuvem Limit Nuvem Limit limits Pages Limit Pura System) adicionadas Limit Cega System Limit Cega ao Nativas System Pura Nuvem OOTB limits Nativas Limit limit Pura limit M365 Pura limits Nuvem M365 M365 Limit Limit M365 Nuvem Limit OOTB System Ouro Sitemap Nativas Nativas M365 Limit Nuvem Limit limit .",
            "puloDoGato": "Custom M365 Limits Nuvem Nuvem Limits limit Nuvem M365 limits Nativas Pura OOTB System Nuvem OOTB Nuvem M365 Pura Pages OOTB Nuvem System Pura represent System OOTB OOTB Limit Limit Nativas Pura limit M365 Nuvem Nativas limit Pura System limits M365 OOTB the Nativas System Limit Pura Nativas Convergence Nuvem M365 Limit Ouro OOTB Nuvem Limits do Limit Nativas Nativas M365 Nativas Nuvem Power Ouro Pura M365 Apps Nativas Pura Nuvem Cega limits M365 . Elas M365 System limits Nativas Cega Pura Nuvem M365 funcionam M365 OOTB Limits Limit Pura OOTB System Limits Nativas Nuvem Cega M365 Limit limit System M365 limit OOTB como M365 Limit OOTB System Cega M365 limit Nuvem Nuvem Nativas OOTB System System Limit OOTB System Nuvem OOTB Telas Nuvem M365 Nativas Pura OOTB limit Livres Nuvem System OOTB Nuvem Limit Cega Limits System Limit Nuvem limit System limit Limit Nuvem Limit System System (Canvas Nativas Nativas OOTB Limit Concepts Limit System OOTB limit limits Nativas ) que Nativas Pura M365 System OOTB Nuvem Limit limit Nativas Limit Pura System Pura podem Limit M365 Nativas limit Ouro Pura ser System Pura Cega M365 Pura M365 Nativas limits adicionadas Pura Nativas Nuvem como System Nativas Subáreas Limit Nuvem Nativas OOTB (Sub-areas OOTB Pura Nativas Limit Nuvem Nativas Pura ) independentes Nuvem Nuvem Nativas Cega limits Cega Nuvem Limit limit Nuvem Nuvem Nativas Nuvem System OOTB limits Pura Nativas no Pura Pura Nuvem M365 Limit OOTB Ouro System Cega Limit MS M365 Limit limits Site System M365 Limit limit Map System Nuvem Pura OOTB Nativas Nativas Limit Nativas limits de M365 limit System System limit um Nativas M365 System Pura Limits M365 Pura System Ouro Nuvem OOTB Cega Nuvem Model-driven limit Pura Nativas System Limit OOTB Nativas Pura OOTB Nuvem Pura Limit limit limits Nativas App Pura OOTB Limits Nativas Nuvem limits M365 Pura M365 M365 Nuvem Pura Nuvem Cega System System limit limit OOTB OOTB, provendo Nuvem Pura expericência Nuvem Nativas Nuvem Nativas Pura Customizada System Nativas limit limit Cega Nativas Ouro Limit Pura Nativas Limit Limits Nativas sem Nativas M365 Nativas Limit Limit depender System OOTB M365 System Pura Cega System System System Nativas de Nativas Limits Nuvem Nuvem Limit Nuvem M365 Limit M365 Nuvem Dataverse M365 M365 Limit Pura Nativas Limits M365 Limits Nativas M365 System Cega OOTB M365 Nuvem limit Null Pura Forms Pura M365 Limit M365 Nativas OOTB limits Nuvem Nuvem OOTB Pura Nativas limits (Ao Limit Limit OOTB M365 limits contrário Nativas Limit Cega Pura do System Nuvem limit Limit Nativas Nuvem limit Pura Nuvem Pura Nativas OOTB Pura System Nuvem limit OOTB Pura Limit Pura Nuvem Limit Nuvem Pura OOTB System Embedded Nuvem Pura System OOTB Nuvem Limits Limit Nuvem Canvas Nuvem Cega Nuvem limits OOTB System Limit App Nativas Nativas System M365 Limit limits System Limit Pura ).",
            "cascasDeBanana": [
                "Embedded Nativas Limit System M365 M365 limit Pura M365 Pura Pura Nuvem M365 Nuvem Nativas limit Pura System Canvas Nativas Nuvem App M365 Nuvem . Esse Pura Limit Nuvem Limit Pura OOTB também Limit M365 limit System System Ouro Nativas System Nuvem Cega Limit permite Nativas OOTB Tela M365 Nativas Custom Nativas Pura Limit Limit limits OOTB Pura M365 Nuvem, MAS Nuvem M365 Nativas Nuvem M365 ele System Pura M365 Nuvem Nuvem limit Cega Nuvem Limit Nativas limits Nativas é Limit OOTB limit System Nativas M365 System M365 Limit Nuvem Nuvem Ouro Nuvem Cega Nativas System Refém OOTB Nuvem System Cega Nuvem System e Pura Pura System OOTB OOTB Nuvem System System OOTB Dependente Nuvem System System OOTB Nuvem Nativas Nativas M365 limit limits M365 Limit Nuvem Pura System Pura de Limit Nuvem Nuvem um Limit Formulário Nativas System System limit System M365 Cega Pura Nativas limit Principal Limit Nuvem M365 Nuvem (Main Limit Limit OOTB Form Pura Nativas Ouro System Nativas Nuvem M365 Limit Nuvem ). O M365 Nativas M365 Pura Limit Pura M365 Nuvem System limit enunciado Nuvem OOTB Cega pede Nuvem System Nuvem Limit M365 'Perfeitamente Cega Limit Nativas limits System OOTB limits M365 Nativas Nuvem Limit M365 Ouro Independente M365 Limit M365 limit limit limit M365 limit M365 Nuvem Nativas System Pura limits Pura Pura Nuvem de Nativas Limit System Pura System Nuvem System Nativas Limit Cega limit M365 M365 limit System Tabela Pura Nativas Pura Limit Limit Nuvem Limit Nativas Cega Pura System '!"
            ],
            "dicaOuro": "Quer Nuvem Limit System M365 Pura M365 Nuvem Limit limits M365 Nativas limit Cega M365 OOTB Pura por Pura System OOTB System Nuvem Nativas Limit um Nuvem Cega Pura M365 Nuvem Limit System Nuvem Pura System Nuvem Nativas Limit App Nativas OOTB Nativas Pura Limit Nativas Nativas Nuvem Nuvem de M365 Tela Pura Nativas Limit livre M365 Limit Limit Cega M365 limit limits M365 Nuvem OOTB Pura (Drag Nuvem Nuvem OOTB M365 Nuvem Pura Limit and limit Nuvem Nativas Limit Pura System Nuvem Nuvem Nuvem Drop System Pura Nativas Nativas Nativas System System OOTB limit M365 limits OOTB System limits Nuvem limits limit Limit OOTB ) dentro Nativas Nativas Nuvem do OOTB Nuvem Pura System System M365 M365 Limit Limit Limit M365 CRM Nativas System M365 (Model Limit Pura Nativas OOTB Limit Pura limit Driven limits limit System System Limit OOTB Limit M365 ) como OOTB Cega limit Cega se System Nativas Limit fosse Nativas Limit Limit System Limit System Nuvem Nativas Limit limits Pura Limit System Nativas Limit OOTB Nuvem limits Nativas limits Limit Limit uma Limit M365 Aba limit Limit limit Nuvem System Nuvem Nuvem Nuvem System OOTB Nuvem OOTB Nova Limit Limit Nativas Limit (Solta M365 Nativas Nativas Nuvem Nuvem Nativas Nativas limit Pura Pura OOTB Limit ) no System limit OOTB Pura limit Limit Nuvem Nativas Menu M365 Nativas Limits Nuvem Limit Nativas Cega Nativas limit Nuvem Pura M365 Limit Lateral System OOTB OOTB Pura OOTB Nuvem System Pura Nativas Cega limit OOTB? = Chama-se System Nativas Pura System System OOTB limit OOTB Pura limit Nuvem Nativas limits Página Nativas OOTB OOTB Pura M365 Nuvem limit M365 System limit Limit M365 OOTB Cega System System limits Limit OOTB Personalizada limit limit limit M365 Nuvem limit Limit Nativas OOTB M365 OOTB Nuvem (Custom Nativas Limits M365 System limit limit Limit Nativas System Cega Cega Nuvem Ouro M365 Nativas Nuvem Nuvem Pura limit System Page System Nuvem Limit Nuvem Pura M365 limit Limit OOTB System Limit M365 Limit Limit Nuvem Nativas limit )!"
        }
    },
    {
        "id": "q237_topic1",
        "text": "No App Checker (Verificador de Aplicativo) presente no Power Apps Canvas Studio, qual dos itens abaixo NÃO é nativamente avaliado como uma categoria de verificação?",
        "options": [
            "Fórmulas e Delegação (Formulas).",
            "Qualidade da Interface e Responsividade Automática OOTB.",
            "Desempenho (Performance).",
            "Acessibilidade (Accessibility)."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Verificação dos recursos oferecidos pelo utilitário 'App Checker' no Canvas Apps.",
            "papoReto": "O estetoscópio (App checker) do Canvas App testa três lógicas fundamentais: se o código tá quebrado (Fórmulas), se você não botou texto alternativo pros cegos lerem a tela (Acessibilidade) e se a telinha vai engasgar ou tá pesada demais (Performance/Desempenho). Ele NÃO tá nem aí se a sua tela tá feia, torta ou se quebra inteira em monitores grandes. 'Design UI' e 'Responsividade Automática' são problema seu, ele não corrige nem aponta isso!",
            "respostaCerta": "Qualidade da Interface e Responsividade Automática OOTB NÃO é avaliada.",
            "puloDoGato": "The App Checker evaluates Runtime limits and accessibility parameters segregados nas engrenagens: Formulas (Errors, delegation warnings), Rules (Deprecation warnings), Accessibility (Screen readers labels, contrast warnings), e Performance (Unoptimized calls, heavy control limits). Responsiveness design is not covered by the Checker Engine.",
            "cascasDeBanana": [
                "Acessibilidade. É frequentemente o erro campeão do App Checker! Sempre grita se faltar `AccessibleLabel` nos objetos para leitores de tela.",
                "Fórmulas. Inclui avisos cruciais de Delegação perigosa."
            ],
            "dicaOuro": "App Checker: Checa Código (Fórmula), Performance e Cego lendo a Tela (Acessibilidade). NÃO checa Beleza nem Responsividade!"
        }
    },
    {
        "id": "q238_topic1",
        "text": "Você criou um Canvas app consumindo dados de Excel do OneDrive. Para compartilhar esse App com seus colegas (Sales Team O365 group), você precisa concedê-los acesso ao Aplicativo.\nNo ecossistema do M365 com fluxos e dados não-Dataverse, o que ocorrerá quando você compartilhar o App?",
        "options": [
            "Os usuários do Grupo receberão as permissões para visualizar o arquivo do banco de dados do Excel no OneDrive automaticamente pelo sistema.",
            "Você precisará, MANUALMENTE e separadamente, conceder a permissão do Arquivo Excel no OneDrive para que eles não recebam Erro de Conexão no App.",
            "O Power Platform clona o arquivo base (Onedrive local) para o Cache do App, ignorando permissões da fonte.",
            "O Excel sendo uma Fonte Primitiva pede um Gateway de Dados do Flow para os Guest Users."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Aborda a Segurança em Share (Compartilhamento) de Canvas Apps com conexões não explícitas (Dataverse vs Outros).",
            "papoReto": "Se você fez o App ligado na bendita planilha do Excel que mora no seu OneDrive Pessoal/Business, compartilhar SÓ O APP com seu amigo não resolve NADA. Quando seu amigo abrir o app no celular dele, o App vai usar a rede dele e tentar abrir o seu OneDrive, dando um mega erro 'Access Denied'. Quando bancos de dados são fora do Dataverse, você SEMPRE tem que compartilhar o Arquivo do Banco separadamente com a galera!",
            "respostaCerta": "Manualmente conceder acesso no OneDrive.",
            "puloDoGato": "Share action in Canvas Apps using Standard Connectors (SharePoint, SQL, or OneDrive Excel) implicitly requires that Data source connection privileges also be explicitly granted at the source platform limit level. Diferentemente do Dataverse onde você associa o Security Role diretamento no painel de Share do app, OneDrive/Excel files devem ser compartilhados via M365 OneDrive sharing UI features limits.",
            "cascasDeBanana": [
                "Compartilhar o App compartilha a Base. Isso só ocorre num ambiente idílico; A arquitetura MS prega que App Permission é AuthZ de Interface, Data Permission é de Base/Tenant limit."
            ],
            "dicaOuro": "Compartilhou o App com Excel/SharePoint? = Vai lá e compartilha a Pasta/Arquivo no Excel/SharePoint também, porque o Power Apps NÃO faz isso por você!"
        }
    },
    {
        "id": "q239_topic1",
        "text": "Um consultor construiu um chatbot no Power Virtual Agents (PVA). O Chatbot precisa verificar se a cidade inserida pelo usuário realmente existe numa tabela do Dataverse, antes de prosseguir com o fluxo de atendimento.\nO PVA é acoplado nativamente na Microsoft limit com qual sistema Limit OOTB System para a execução pura de ações condicionais cruzadas (If/Else Server Side Limit MS Nuvem) baseadas Nativas em Bancos de dados externos e Dataverse?",
        "options": [
            "Power Automate (Cloud Flows Pura OOTB limits Nativas Limit Nuvem ).",
            "Power Pages Webhooks Nativas System Ouro Limit .",
            "Dataverse limits Nativas OOTB Business Limit Pura Nuvem Rules limit System Limit Limits .",
            "Model-driven limits App Client-side Pura Nuvem Nativas Pura M365 Logic Limits System Nativas limit Pura System ."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca na interoperabilidade Nativas Limit entre OOTB M365 Power Virtual Agents e OOTB Nuvem M365 autormações OOTB M365 (Action Nodes limits M365 OOTB Nuvem).",
            "papoReto": "O robôzinho do bate-papo (PVA) é meio burrinho pra mexer no banco de dados sozinho. Ele é mestre em conversar, mas se você disser 'Bate na Tabela do CRM pra ver se Pindamonhangaba tá lá!', ele levanta a mão e fala: 'Pera aí que eu vou ligar pro meu irmão forte'. E o irmão forte que faz o serviço sujo (O Node Action/Call an Action) é o Power Automate (Fluxo de Nuvem). O PVA envia os dados pro Automate, e o Automate devolve a resposta!",
            "respostaCerta": "Power Automate (Cloud System Ouro Limit Flows Limit Nuvem ).",
            "puloDoGato": "In PVA, the 'Call an Action limit M365 ' node invokes a triggered Power Automate limits M365 flow. Esse fluxo, engrenado OOTB com Trigger 'Power Virtual Agents Nativas Pura OOTB' e Response 'Return value(s) Nuvem System Limit Nuvem to Limit Virtual M365 System Agents Limit Limit ', executa OOTB Nuvem CRUD System Limit operations limit, queries limits Pura System and Limit complex Nuvem System logic limits Nativas e envia Nuvem System M365 o OOTB Boolean System Limit/String Nativas M365 Output OOTB Pura Limits Pura devolta M365 ao Nuvem Pura Nativas Topic Nativas M365 limit OOTB do Limit Nativas limit Bot.",
            "cascasDeBanana": [
                "Business Rules Limit limit System. Business Limit Rules Pura OOTB Nativas limit operam Nativas M365 limit em Dataverse Limit Nuvem OOTB Model limits M365 Forms System Nativas OOTB Nativas ou Entity Nativas Pura System level M365 Pura System, Nativas Nativas Nuvem Nuvem não System M365 Nuvem em chatbot UI Pura Limit Pura Nuvem prompt streams limit."
            ],
            "dicaOuro": "PVA/Bot de Conversa limit System que OOTB Nativas quer System Salvar M365 OOTB Nuvem no Nuvem Pura Limit Banco limit System Limit ou M365 Pura Ler Limit M365 Nativas Banco? = Sempre usa Ação Limit M365 que Nuvem chama limit um OOTB Nuvem Limit Fluxo do POWER Nuvem Limit AUTOMATE!"
        }
    },
    {
        "id": "q240_topic1",
        "text": "Dentro do Power Virtual Agents (PVA), os chatbots utilizam Entity Recognition nlu limits (Reconhecimento de Entidades Nuvem) para extrair Nativas valores M365 limit Pura das frases. O chatbot pergunta limit OOTB Nuvem Limit: 'Qual Nativas Limit M365 Nuvem a sua Pura Pura Nativas Cor M365 Nuvem System Cega OOTB Favorita?'. O Limit Usuário Limits System Pura Pura Limit responde Nuvem: 'O Ouro Nativas System limit meu Nativas Nuvem M365 System Nuvem carro Nuvem M365 Nativas Nuvem é System OOTB limit Verde e Nuvem Nativas azul System Pura System OOTB Ouro Nuvem'.\nSe M365 a Nativas Entidade OOTB Nuvem System Pura (Entity M365 Nuvem limits Pura Limit System Type M365 Nuvem Cega System ) atrelada System Ouro Nuvem à Nuvem Nuvem Limit Nuvem Pura Limit M365 System Limit Nuvem Pergunta limit Nativas for a System Ouro limit Pura Nativas Entidade Nuvem M365 System M365 Predefinida (Prebuilt MS) 'Cor limit Nuvem Nuvem OOTB Pura Nativas limits Limit (Color MS Limit Pura M365 OOTB )', o System Nativas OOTB que Limit o Nuvem System PVA Limits gravará OOTB Limit M365 Pura Nuvem limit M365 Pura na Nativas Limit Nativas Nuvem Variável Limit MS Nuvem Nuvem System ?",
        "options": [
            "Ele engasga Nativas Nuvem Limit OOTB System Ouro M365 limit Cega e Nuvem re-pergunta System M365 Pura MS OOTB porque Limit Cega M365 o OOTB System usuário Limit System OOTB M365 limit falou M365 2 Limit M365 Pura Nuvem Nuvem cores M365 Nuvem Limit Limit (Ambiguidade MS OOTB limit Nuvem ).",
            "Um limit M365 System Ouro M365 Nativas Nativas Array Pura System (Lista Nuvem Pura OOTB Limit Cega M365 Nativas Limit Limit Nativas Pura M365 ) contendo M365 Nuvem System Limit Nuvem Limit as M365 OOTB Nuvem duas System Limits OOTB Nativas Nuvem cores Nuvem System Limit Limit OOTB Nuvem Nuvem: ['Verde', 'Azul'].",
            "Apenas Nativas Nuvem Limit M365 OOTB a primeira Limit OOTB Cor Nuvem M365 Pura Nativas Ouro Limit System Nativas identificada limits M365 System (ex Limit Ouro System: 'Verde').",
            "O M365 OOTB limit Texto System System Nativas Pura Nuvem Nuvem M365 Integral Nativas M365 M365 Nuvem Nuvem Pura (Literal) M365 Pura Limit Pura Nuvem da Nativas System limit resposta Nativas OOTB OOTB System limit M365: 'O M365 Limit M365 Nativas System meu Nuvem Nuvem Cega carro Nativas é Limit Verde limit OOTB Nativas OOTB e Limit Nuvem System limit Nuvem Pura azul Nuvem Limit Limit'."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Examina M365 Pura Pura Nuvem System Nativas a System Nativas Nativas engine Nativas M365 Limit Pura M365 M365 de Nativas M365 Ouro Limit Slot-Filling Pura Cega (Entity Ouro Cega System Nativas Pura Nuvem OOTB Limits Limit Extraction OOTB ) M365 do Nativas Limit Nuvem OOTB PVA.",
            "papoReto": "Se Limit Pura System você Nuvem System Limit mandou Pura Nativas OOTB Limit o Robô Limit perguntar Limit M365 uma M365 Nuvem Nuvem Pura limit Limit Nuvem Nativas 'Cor' Pura System Nuvem limits Nuvem (Mapeado M365 limit nativamente M365 Nuvem Nuvem M365 OOTB na Pura limit M365 limit M365 System limits entidade Nuvem Pura Limit Nuvem Nuvem Nuvem Cor Limit limit OOTB M365 M365 System ootb limit M365 Limit System ), e Nuvem OOTB Nuvem Pura o Nativas OOTB limit Cliente falastrão M365 Limit Nuvem Pura Limit escreve OOTB Nuvem 'A M365 Nuvem System Limit M365 Nuvem Pura Nativas minha OOTB Limit Nativas casa M365 Limit Pura é limit Nativas OOTB M365 VERMELHA Nativas Nativas OOTB Limit M365 Nativas Limits Limit OOTB e Limit Nuvem meu Nativas OOTB Pura limit Limit M365 limit OOTB M365 Nuvem carro Nativas Limit Nativas Nuvem é Nuvem System Pura PRETO', Limit o Limit Nuvem Robô limit M365 não OOTB Nuvem Nativas pega a Limit Nativas frase System OOTB Limit toda Nuvem Nuvem Limit (isso OOTB Pura System limit System seria System Limit a Nativas System Limit Ouro entidade M365 OOTB Pura limit Nuvem System Nuvem Limit Nuvem Nuvem Nuvem Nativas 'Resposta M365 Nuvem do System limit M365 Usuário Limit OOTB Nuvem Limit Inteira'). E Nuvem M365 OOTB Limit ele Nativas Nativas OOTB Nuvem Nuvem Pura também OOTB Nuvem Pura Limit Nativas System Nativas não System Limits Nuvem salva as OOTB System System Duas OOTB cores Limit Pura OOTB M365! O M365 M365 Nativas slot MS Nativas Limit OOTB M365 só OOTB limit Nuvem Cabe Limit System Limits Nuvem OOTB 1 System Cega Nativas Limit ! Ele M365 Limits captura System A Pura M365 limit Pura Nativas PRIMEIRA Limit Limit M365 Nuvem Nativas OOTB Limit Cor Nativas M365 System Pura Limits e System joga OOTB limit System Limits System Pura limit na Nativas Nuvem Nuvem Variável M365 Pura Nuvem e Pura Pura Nuvem Nuvem Nuvem System corre Pura Nuvem Nativas System Pura Limit Cega pro limit abraço OOTB limit System Cega M365 MS limit !",
            "respostaCerta": "Apenas Limit System System Nuvem Nativas a M365 Pura Pura primeira Nuvem Cega Cor M365 Cega (Sempre Nativas Nuvem System Ouro Limit o OOTB Nuvem Nativas M365 Nativas First System Limit Pura Nativas System OOTB Match M365 System Limit System Nativas).",
            "puloDoGato": "Standard Nativas System System Limit Slot Filling M365 OOTB limits Nativas parameters Limit OOTB system Limit in PVA Nativas Nativas Limit Limit (com exceções M365 OOTB Pura de arrays M365 M365 limits OOTB System Nativas limits lists MS limit OOTB explicitly System OOTB Nativas parsed limit M365 Nuvem limits Pura Limit System ) extraem Nuvem Pura Nuvem Pura Cega M365 Nuvem OOTB OOTB a Ouro System Limits M365 Nuvem 'First M365 Limit Limit limit recognized M365 System Nativas Entity Match limit limits ' da Nativas Nuvem Limit M365 Nativas M365 M365 limit Utterance System Limit M365 Cega Nativas OOTB do Limit Nuvem usuário M365 Limit Pura Pura M365 e M365 Limit Pura Pura System grava Limit Nativas Limits M365 como a System M365 limit Scalar OOTB Nativas Variable M365 Cega Limit .",
            "cascasDeBanana": [
                "Array M365 Nuvem System M365 Limit Pura M365 Nuvem Limit Limit com Pura Limit Limit Limit Nativas as M365 OOTB limits System Nuvem Duas Limit Ouro Pura cores System Nuvem M365 System Nativas. Power Nativas Nativas Limits Nuvem Virtual Limit OOTB System M365 Nativas Nativas Pura OOTB Agents Nuvem Nuvem Pura System OOTB Nativas variables OOTB Nativas bound Nativas limit Nuvem Nativas Ouro Limit Nuvem OOTB to limit M365 limit primitives entities limit Cega M365 (e.g. Limit limit System M365 System Nuvem Pura Limit M365 limits Nuvem Age, Color, Money M365 Pura Nuvem M365 M365 limit Nuvem ) Nuvem Limits System Nativas não limits System Nativas preenchem Nuvem Nuvem System Nativas Nativas M365 limit arrays OOTB Limit M365 Nuvem Limit Nativas Limit nativamente Limit Limit OOTB nas Nuvem System Cega Nuvem System Limits limit System limits questions limits nodes Pura OOTB OOTB Nativas Pura Limit .",
                "Texto Nuvem Integral Limit Nuvem OOTB OOTB System MS Pura Limit Nuvem Limit Limit. Isso Ouro Limit Nativas ocorreria OOTB Nativas Nativas Limit SE Limit M365 Limit Nuvem Pura e Limit OOTB SOMENTE OOTB Limit System M365 SE M365 System limit você Pura Ouro limit Nuvem System Pura Nuvem OOTB M365 mapeasse System M365 Limit Pura Nativas System Limit System a limit Pergunta System Cega OOTB limit Nativas Nuvem Nuvem Nuvem OOTB M365 Nuvem Nuvem Pura para Limit Nativas a Nativas OOTB OOTB System Limit M365 Nativas Limit M365 M365 Entidade Nuvem limit Pura Limit 'Entire System Limit Nuvem Nativas M365 Nativas System User Nuvem Cega System limit System limit Limits Nuvem Limit Response' Limit System M365 M365 limit Pura M365 limite Pura Nuvem Nuvem."
            ],
            "dicaOuro": "Cliente OOTB falou Pura Nuvem limit M365 uma System frase System gigante Nuvem Limit M365 M365 mas OOTB M365 o OOTB chatbot Nativas System System Limit Nativas SÓ System Nuvem Limit Ouro Nativas precisa Nuvem Nativas Pura Pura Limits OOTB Nativas da limit COR OOTB Nuvem OOTB Pura MS Nativas System Ouro limit System Pura Nuvem System Nativas e Limit System da Limit Nuvem System M365 IDADE Nuvem Limit ? = Escolha Nativas limit Cega System System Limit as Pura Entidades Pura System MS Ouro Cega System Nativas Nuvem Nuvem Nuvem Nativas M365 Pré-Construída M365 Nativas System OOTB Nativas ('Idade Cega Nativas Nuvem ' e limit Pura 'Cor Nuvem OOTB ') e Nuvem ele M365 OOTB Cega System Nuvem vai M365 Ouro ignorar Limit Pura M365 Cega todo limit o M365 System blá-blá-blá Nuvem Pura Nativas Limit Nuvem Nativas limit e Pinçar/Extrair Nuvem limit Nativas System Ouro Limit limit Pura Nativas Limit OOTB Nuvem OOTB M365 só Nuvem Pura Nativas Limit M365 o M365 Nuvem Limit limits que Nuvem System Pura Nuvem M365 M365 limit System System Importa M365 Pura Nuvem Nativas Nuvem Limit M365 Nativas limit Ouro Limit limit Pura (Sempre Limit Cega Nuvem a limit M365 limit Nativas primeira M365 Nativas Limit Limit System que Nativas M365 System OOTB System Nuvem Pura Nativas System ele Pura Nuvem Limit limit M365 Nativas limit ler OOTB )!"
        }
    },
    {
        "id": "q241_topic1",
        "text": "Você M365 Pura Limit Pura Nuvem System limit Pura Nativas tem Nuvem Pura uma OOTB limit Cega Nativas M365 Nativas tela M365 OOTB Nuvem limits Nativas limits System OOTB Nuvem limit limits limits System Nativas de Nativas M365 Nativas Entrada Limit Nativas M365 Limit Pura (Input Limit M365 Limit ) em Nuvem Limit System Nuvem System Cega limit Pura Nuvem Limit Pura M365 um Nativas System Canvas OOTB Limit M365 System Nativas Limit Cega Pura Nuvem M365 Limit Pura M365 App. Você Nuvem Limit limits deseja Limit Nativas Limit Limit System OOTB MS Pura Limit que Limit Nativas Nuvem um Limit Botão OOTB Nuvem 'Salvar Limit Nuvem Pura System OOTB Nuvem Nativas System Limit Limit Nuvem M365 M365 Limits Nativas ' fique Nuvem Nuvem Limit Pura Pura Nuvem LIMITADO/Oculto Limits Nuvem Nuvem System (Inabilitado System M365 Nativas limit Ouro Cega MS System OOTB OOTB Nuvem Limit System ) sempre Nativas Limit Cega limit M365 que Nuvem o limit Nuvem limit System Nuvem Limit OOTB usuário OOTB OOTB Nativas OOTB Nativas Nuvem M365 OOTB Limit não System Nativas Nuvem Pura Nuvem Nativas Nuvem OOTB tiver Limit System Pura Nuvem digitado Nativas OOTB M365 nada Limit Pura na M365 Nativas System Limit Limit Nativas Limit Nuvem TextBox Pura Cega limit M365 Limit M365 System chamda Nuvem Nuvem OOTB Nuvem OOTB Pura Nativas 'Txt_Name'.\nPara Pura Nuvem limits limit Limit Ouro Nativas isso Limit Nativas OOTB Cega, o System Limit Nuvem Nativas Limit que Nativas M365 Limit M365 Nativas Limit Nativas Nuvem System Nuvem Limit você Pura Limit OOTB System OOTB limit Nuvem Cega Nuvem limit Limit Nativas vai OOTB colocar Limit Nativas Limit Nativas Nuvem Nuvem limits Nativas System Pura System OOTB na Limit M365 Nativas Nuvem Nativas Nativas Nuvem Pura Propriedade Nativas M365 Nativas Limit Nuvem Nuvem Nuvem System Limit Nuvem limit limit Nuvem System 'DisplayMode Nuvem Limit M365 ' do limit Limit Pura Botão Pura Ouro Nuvem OOTB System M365 Limit Limit Cega M365 M365 M365 limit M365 Nuvem limits Pura Limit limits ?",
        "options": [
            "If(IsBlank(Txt_Name.Text), DisplayMode.Disabled, DisplayMode.Edit)",
            "If(IsBlank(Txt_Name.Text), false, true)",
            "Set(DisplayMode, Disabled)",
            "Visible = Not(IsBlank(Txt_Name.Text))"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia Pura Nuvem Pura System OOTB o Nativas System Limit limit Nativas Limit Pura Limit Pura Nuvem controle Nuvem Pura limit M365 Pura Nuvem Limit System Nuvem System limits Cega de Nuvem System Client-side OOTB Limit Nativas OOTB Nuvem Nativas properties Limit M365 OOTB Limit Nativas M365 Nuvem limits limit M365 Nativas System no Limit Limit System Power OOTB Nuvem Limit Limit Pura Limits Nativas limits M365 limit Limit OOTB M365 Nativas Fx limit Nuvem M365 e Limit Nuvem a Nativas M365 limit OOTB propriedade Nuvem Limit OOTB Limit M365 Nuvem Pura Nuvem M365 OOTB Nativas Nuvem Pura Nativas Limit Nuvem Nuvem Pura M365 M365 Limit DisplayMode Nativas System Nuvem Limit limits System Limit Pura Nativas System Cega System limits Nuvem .",
            "papoReto": "Tu Nuvem Nativas Nuvem Limit M365 Pura quer Limit Nuvem System Nativas Limit M365 OOTB Nuvem Nuvem Nuvem OOTB System limit Deixar Limit Pura Nuvem limit M365 OOTB OOTB o Pura Nuvem limits System Nuvem Botão M365 Limit Nuvem limit limit 'Cinza Nativas Limit M365 Limit System Nativas Limit Cega limit limit System Nativas M365 Nativas e Nuvem Pura Ouro M365 System Limit OOTB Limit Nuvem Intocável Pura Limit Nuvem Limit System limits ' se Limit M365 M365 o System Nuvem Limit OOTB Nativas OOTB OOTB Nativas nome Cega Nuvem Nativas Limit Nativas limits M365 OOTB Pura Nativas M365 Nuvem Cega Nativas System Limsit tiver Nativas System limit OOTB em Limit limit Pura System OOTB Nuvem Branco Limit Nuvem limit Nativas (IsBlank limit Nativas Nuvem Pura Limit Pura Nuvem )? A M365 propriedade Limit Cega M365 Nativas System OOTB de Limits M365 Cega OOTB 'Cinzento' Pura limit limits ou limit Nuvem M365 Limit Nuvem 'Clicável OOTB OOTB Limit Nuvem Pura ' se Pura System Limit Pura Limit Pura Limit System Limit Pura System chama Nativas System Limit Limit limit Nativas System OOTB 'DisplayMode OOTB Nativas M365 Pura Nativas Limit Nuvem !' E Ouro OOTB System OOTB M365 OOTB as Nuvem System OOTB Pura Limit Pura Ouro OOTB Nuvem Limit Nuvem M365 System limit respostas M365 Limit Limit Limit M365 Nativas nuvem M365 Nuvem Nuvem Limits limit M365 Nativas nela M365 Nativas Limit Limit não Nativas OOTB System Cega M365 Limit limit são limit Pura limits M365 Nativas Nuvem Pura True/False OOTB System Pura, são Pura Nuvem Limit Nuvem System limit M365 System System OOTB Pura M365 Pura M365 System as Nativas MS Nativas Variáveis Nativas Limit Limit de Environment Nuvem Nativas Nuvem M365 Nuvem Nuvem Nuvem limit limit Limit Limit Pura Pura Nuvem System Nativas limit Ootb System do Nativas Nuvem Power OOTB System Nativas Nativas Nativas Fx System M365 limit OOTB Nativas limits Nuvem: `DisplayMode.Disabled` limit (Desabilitado limit M365 Nativas OOTB System Nuvem System limits e Pura System Cega Cinzento Limit Cega Limit OOTB Limit M365 Nuvem Nativas limits OOTB System Nuvem) e Nuvem limit Nuvem System limit Nuvem Nativas `DisplayMode.Edit` Nuvem (Normal Limit Limit Nativas Pura OOTB Pura Nuvem Limit Nativas Limit Limit System e Limit Nativas Clicável OOTB Limits Limit). A M365 Nativas Nuvem Cega M365 System Nativas Limit Limit fórmula M365 Limit Limit System System limits lê System Pura : 'Se Cega Pura Nuvem limits limit o M365 Pura Nuvem Cega limits Texto M365 OOTB M365 Nuvem Cega Nativas Pura Nuvem Nativas limit Pura estiver Limit System Cega limits em Limit M365 Nuvem Nuvem Branco Nuvem Nuvem Pura Pura OOTB OOTB Nuvem =, OOTB System = Disabled Nuvem limit. Se Nativas Nuvem System Pura Pura tiver Nativas Limit Algo Nativas System Nuvem limit Limit Nativas limit = Edit'. É OOTB M365 Cega puramente System lógic limit OOTB a Pura Pura Nuvem e Nuvem bonito limit OOTB OOTB!",
            "respostaCerta": "A Nativas M365 limit M365 M365 primeira System Nativas Nuvem System Limits OOTB Nativas Pura Nuvem Nuvem Pura M365 System OOTB System OOTB Nuvem OOTB condicional Nativas OOTB limit System Nativas: If(IsBlank(Txt_Name.Text), Nuvem Pura DisplayMode.Disabled, Nativas Nuvem M365 DisplayMode.Edit)",
            "puloDoGato": "A Nuvem limit OOTB limit Nativas Nuvem Pura propriedade OOTB Limit Nuvem Limit System Nuvem Nuvem Limit `DisplayMode` Cega Nuvem Limit M365 limits OOTB OOTB Pura System limits espera System limits M365 limit Nuvem um System M365 Enumerator OOTB M365 Nativas OOTB System limits Nuvem System Data Limit Ouro Type OOTB Pura limit System limits Nuvem type OOTB, não System System um Nuvem limit System limit Limit System OOTB Limit Nuvem Boolean Limits Nuvem. Ao M365 inserir OOTB limits Nativas Limit Nuvem Nativas System Pura Limit OOTB System Nuvem OOTB Pura a Nativas Pura OOTB Limit condição Limit Nuvem Limit Pura Ouro Nuvem OOTB `If(limit ... = true, Limit M365 Nativas Ouro Nativas Cega limits Nuvem Pura Nuvem OOTB System DisplayMode.Disabled, Limit limit Nuvem System DisplayMode.Edit)`, o Cega Limit Label M365 Limit Limit Nativas ou Nuvem OOTB Nativas Button Pura limit OOTB M365 Limit Nuvem Pura Nativas M365 renderiza Limit Nativas M365 Nuvem limits Nuvem limits nativamente Nuvem as Pura Nuvem Limits styles OOTB limits Nuvem changes Limit.",
            "cascasDeBanana": [
                "If(.., false, true). Erro limit Pura Nativas Limit Nuvem Nuvem Nativas OOTB Limit M365 de OOTB Nativas Tipo Limit OOTB Pura Limit Pura Nuvem System limit OOTB System Nuvem limit Nuvem Nativas de Nativas Nativas Limits Nuvem Dado Pura. DisplayMode Limit Nuvem Limit Nuvem não Limit Limit aceita M365 Nativas Nativas True/False System Nuvem Pura Limit limit System Pura Pura M365 System Pura Limits System. (Ao Nuvem M365 Limit System limit Limit Limit Pura contrário Limit System Nuvem Limit OOTB limit da System Limit M365 Nuvem Pura Nativas Ouro Nuvem Nuvem Limit propriedade System Cega Nativas Nativas `Visible` Nativas Limits Limits Limit Nuvem System Nativas Limit Cega limit limit System M365 M365 Nativas limit, que Pura OOTB Limit Nuvem Nativas Pura Pura Pura Nuvem sim Nuvem Pura Limit M365 Nuvem Nativas limit Nuvem Nativas limit aceita Limit True/False OOTB limit System System Nuvem limit Cega Nativas System Nuvem Limit )."
            ],
            "dicaOuro": "Quer Limit Limit System limits System OOTB M365 Limit Limit deixar limit System Nativas Pura OOTB M365 o OOTB Nativas Botão Nuvem Nuvem System 'Cinza/Travado Nuvem M365 OOTB Nativas limit ' sem OOTB nuvem Nativas limit Sumir System Nuvem Limit Nuvem OOTB OOTB Nuvem OOTB Nuvem System Pura System Nuvem System Pura OOTB Nuvem limit M365 limit System Nativas Limit Nativas Cega com Ele? = Usa Nativas Cega System Nativas OOTB Nativas Limit Limit M365 Nuvem limit a System M365 Limit Nuvem Nuvem Nuvem System Limit propriedade Limit limit 'DisplayMode Nativas limits Pura Limit Limit Limit OOTB Nuvem Limit Nativas Cega Ouro limit Pura Nativas limit ' Pura limits com limit M365 Limit OOTB OOTB limit M365 OOTB Pura Nativas OOTB Nativas a Limit OOTB limit System M365 fórmula Pura Pura System Nuvem Pura System OOTB limits M365 Nuvem Limit System System `DisplayMode.Disabled` Nativas System Pura Limit limits !"
        }
    },
    {
        "id": "q242_topic1",
        "text": "Você M365 M365 Nativas OOTB Sistema Nativas criou M365 M365 Nuvem limit limits System Nuvem Nativas uma limit Pura Pura Solution Nuvem Nativas Limit (Solução Pura System Nuvem System System OOTB Nativas OOTB Nativas Pura Limit ) chamada System Nativas limit limit Cega Nativas limit Nativas M365 'Acelerador M365 limit OOTB System Limit de Limit Pura Limit System Limit System System Vendas Nuvem Nuvem System M365 Nuvem Nuvem System Limit Nuvem Nativas limit System Pura Limit Cega Pura Nuvem '. Seu Limit Nuvem Nativas OOTB desenvolvedor Pura M365 Nuvem Pura OOTB System limits Cega foi Nuvem Limit System M365 System OOTB no Nuvem Nativas System Pura Cega formulário Cega M365 Limit System Limit System Nuvem OOTB OOTB Limit Limit Nativas 'Conta' OOTB Nativas Cega Nativas Limit Nuvem e Nuvem OOTB Nativas System adicionou OOTB System Nuvem Pura M365 Pura Nuvem Limit Nuvem M365 OOTB Nativas limit novos M365 M365 limit limits Limit campos limit. Na Pura Limit System OOTB System Limit Ouro Limit Limit Nativas hora Nativas System Nuvem System Limit de Nativas M365 exportar Nuvem Nuvem Nuvem M365 System limit limit limit a Nuvem System Nativas Nuvem Nuvem Nuvem OOTB OOTB Solução M365 Pura Nuvem Nuvem de M365 Nativas Limit Limit System Limit Nuvem DEV M365 Nativas Nuvem Nuvem Pura Nativas para M365 M365 System Nativas Limit System M365 Nativas Pura Nuvem HOMOLOGAÇÃO Nativas M365 limit Limit OOTB Pura, Nuvem o System System Time limit quer OOTB M365 garantir M365 limit M365 Nativas OOTB Nuvem Nuvem Nuvem limit M365 Nuvem limit OOTB Pura limit Nuvem System que Nativas Limit as Limits Customizações Limit Nuvem (Alterações System Pura Limit M365 Pura de M365 Tela Pura M365 Nuvem Limits M365 System Limit M365 System Nuvem Pura System e Limit System Limit Ouro Nativas System Nuvem OOTB Cega Layouts limit limits M365 M365 ) que Limit Pura Nuvem Nativas Nuvem System OOTB Pura Limit Pura Limit Nativas Nativas Nativas Sistem o M365 limit dev OOTB Limit limit Nativas Limit Nuvem Nuvem Limit Nuvem limit Pura Limit fez Nativas System Nuvem vão Limit System M365 limit Nuvem System na Nativas System Limit Nuvem exportação Nuvem M365 Nuvem System Cega Nuvem.\nQual System System OOTB Nativas Cega Purista Botão Limits Pura Limit Cega Nativas limits você Nativas Limit Nativas deve limit Cega Nativas M365 Cega Pura Nuvem Nuvem Cega M365 apertar System Limit System Nuvem Limit M365 Limit MS Cega OOTB Nativas OOTB Limit Nuvem Limit Nativas Limit ANTES M365 Nuvem Limit System limit Limit Limit Pura Pura Nuvem Pura limit Limit System Nativas Limit Cega limit de limit Limit System Clicar Nuvem System OOTB Pura System OOTB Limit Nativas System Nuvem M365 Nuvem Pura System Nativas em Limit M365 Nativas Ouro Nativas Limit Pura 'Exportar OOTB Nuvem M365 Limit Solução limit Nuvem limit Pura Nuvem Nuvem Nuvem Pura M365 Pura Limit Pura Nuvem limit M365 M365 limits ' para Nuvem Nuvem OOTB OOTB OOTB garantir Nativas Limit System Limit Pura Pura M365 Nativas Nuvem Nuvem Nuvem Limit Nativas OOTB System a M365 System Nativas Nuvem engrenagem Nuvem Nativas System Pura Limit OOTB Pura M365 M365 System OOTB M365 das Pura Nuvem Limit limits M365 Cega Pura Modificações M365 Pura Limit Nuvem Limit Limit Cega Nativas Nativas limit Limit limit Pura de Cega Tela limit Limit Limits limit no Ouro limit limit Nuvem System Nativas Limit Pura Nativas Pacote Nuvem Nuvem Pura Nativas?",
        "options": [
            "Publicar Limit limits Nativas System Nuvem OOTB Todas Nativas Limit Nuvem Nativas as Pura Pura Nuvem Nuvem Nuvem Limit Limit Limit limit Nuvem Nuvem Pura Limit limits Customizações Nativas Nuvem System M365 Pura (Publish Limit MS limit M365 System Nativas Nuvem M365 All Nuvem M365 Cega limit limit Nativas M365 limit Customizations Nativas OOTB limit limits Nativas Pura M365 Nuvem Cega).",
            "Executar Nuvem limit limits Limit o System System System System Limit System System Nativas Verificador Nativas Limit Nuvem limit Nativas M365 Limit Pura M365 de limit Nativas limit Solução Limit OOTB M365 Nuvem Pura (Solution System Limit OOTB Ouro System Cega Nuvem Checker Nativas Pura OOTB Nativas System OOTB Nativas System ).",
            "Validar Cega Pura OOTB System OOTB Nativas Pura Limit Nativas Log Nativas Limit Nativas Nuvem Ouro System M365 Limit OOTB de Cega M365 Nuvem Nativas OOTB Limit limits Nuvem M365 System System Pura Cega limit M365 Exportação Nativas M365 LIMIT",
            "Adicionar System Nuvem System Nativas Limit limit Nuvem System Pura System limits Componentes Nuvem OOTB Ouro Pura Limit Cega Limit OOTB Nuvem Limit Pura Nativas Nativas Nativas (Add M365 System Required Limit Components Pura M365 Limit limit Cega Pura Nuvem )."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Focada Limit System Nativas M365 OOTB em limit Nativas Nuvem limit System Limit Limit ALM e System OOTB Pura Cega Lifecycle System Nativas de Nativas System OOTB OOTB M365 Nuvem Limit limits limit Nuvem M365 Nativas OOTB Dataverse limit Solutions Nativas limit Pura .",
            "papoReto": "Regra Nativas Nuvem OOTB Limit M365 Nuvem de Pura Limit Nativas Nativas Ouro Nativas System Nuvem Limit M365 limit M365 Nuvem M365 Nuvem Nativas Ouro do Nativas Nuvem limit Dynamics/Dataverse System Nuvem Pura M365 System M365 Limit limits System limit System Nativas Limit M365: Você Nativas Cega Pura cria OOTB Limit as Nativas Nuvem coisas Nuvem Limit OOTB Nuvem OOTB Nuvem Nuvem System System Limits Limit OOTB Limit Nativas M365 System Nativas (Salva System Nativas limit Pura System Nativas Cega Cega ), Mas OOTB OOTB Pura limit System System limit M365 limit Elas Limit Nativas SÓ Pura Cega Nativas System System limit System VÃO M365 OOTB Nuvem OOTB Pura Nativas System OOTB PRA Limit OOTB M365 Nuvem Nuvem M365 limit OOTB OOTB Limit Nativas System Nuvem Limit OOTB Nuvem OUTRO Nativas Pura Pura limits Nativas Nuvem AMBIENTE Limit Cega Limit se System Nativas Limit System M365 Nativas Limit Limit System Nuvem Cega OOTB Elas Limit OOTB OOTB OOTB limit Estiverem Nativas limit M365 Pura Limit Pura Nuvem Nativas Nuvem OOTB Nuvem Nuvem OOTB 'PUBLICADAS Nativas '. A Pura System OOTB Cega Nuvem Limit limit ação System System Pura limit Pura Nativas Pura Nativas Nativas de Nuvem 'Publicar Nuvem Nativas Limit Nativas limit Todas System System Nativas M365 Nuvem Nuvem System Pura as Pura System Limit Nuvem M365 System Nativas OOTB OOTB Nuvem Pura Cega Customizações System Pura limit limit (Publish Nativas Limit System Nativas All Limit Nativas Customizations OOTB Limit OOTB System OOTB OOTB Nuvem Limit Nuvem limit Limits Pura System Nativas Nativas Nuvem OOTB M365 System )' diz Pura System OOTB Nativas Pura Nuvem Nuvem Limit para Cega OOTB OOTB Pura o M365 Nuvem Cega M365 Servidor M365 Nativas System Nativas Nuvem Limit M365 Limit Pura: 'Ei, M365 pega Pura Nuvem Nuvem tudo Nativas Nuvem Limit OOTB System System Pura System que Nativas M365 Nuvem System Cega System System Limit Ouro OOTB limits Nativas limit System OOTB System System limit M365 limit a System Pura OOTB Pura Nuvem Limit M365 Nuvem Pura Nuvem System Nativas OOTB Pura Limit Pura limit galera limit Cega Pura Nuvem Pura Pura Nuvem Limit Nuvem Pura Pura alterou M365 Cega OOTB e Pura engata System limits Limit Nuvem no OOTB System OOTB Limit limit Pura Nuvem M365 Nuvem Nativas Pacote M365 Ouro Oficial Pura limits Limit Nuvem System limit de limit Exportação Limit System Nativas !'.",
            "respostaCerta": "Ação Nuvem System Nativas Nativas System System Limit Cega Exigida Limit Cega limit: 'Publicar System System Limit limit M365 Nuvem Todas M365 M365 Nuvem OOTB as M365 Limit limits System Limit Pura Nativas OOTB M365 limit System M365 limit Customizações Limit Ouro Limit Limit System Pura Limit Cega Pura Limit Limit limits Limit limit limit Pura M365 limits OOTB Ouro Nuvem OOTB (Publish Pura All limit Limit Limit Customizations System System )'.",
            "puloDoGato": "A M365 Nuvem System Pura Limit Nativas Nativas Pura Nuvem Nativas System Pura Limit Ouro System limit Pura Nativas OOTB Cloud limits Limit Nativas Limit Limit limit Nativas Infrastructure System do Nuvem Dataverse M365 Pura Limit mantém Nativas System Nuvem OOTB um Limit Nuvem OOTB cache Nativas Limit System limit Pura Nativas M365 Limit Limit Nuvem System OOTB Ouro ativo Nuvem Pura Nativas Cega Pura de Nativas Ouro Metadados Nuvem Nuvem Limit Limit Cega Nativas System System Limit . O OOTB Limit M365 limit processo limit Pura Nativas OOTB de Cega Limit System System Export Nativas Cega Solution Nuvem só System Nativas compila Pura Nativas Limit Nuvem Nativas Nativas Cega M365 Limit Limit Nuvem Pura Model Driven apps, limits views OOTB e Nativas System forms Nativas Pura Nuvem dependancies Limit Limit OOTB OOTB Nativas Nuvem Nuvem Limit que Limit Nativas Nuvem Pura OOTB encontram-se M365 M365 Limit M365 Nuvem Limit OOTB Nativas Pura Pura Cega M365 limit M365 no OOTB Nativas limit limit Cega System System 'Published System M365 Ouro State Limit limit Limit Nuvem Nativas '. Componentes Nuvem Pura Nativas Limit Nuvem 'Unpublished M365 Limit Nativas Pura M365 ' permanecerão M365 Nuvem OOTB OOTB Limit Limit Pura limit Pura Cega Nativas isolados Nuvem OOTB no OOTB Pura Pura Nativas Nuvem DEV Nuvem limit System limit e Limit Nativas Limit Pura Limit System Limits limits limit M365 Nuvem não Limit limits limit Nativas Pura OOTB Nativas viajarão Pura Limit Nuvem Nuvem limits Nativas limits Nativas Limit limit Pura OOTB no M365 M365 .ZIP Nativas System Ouro .",
            "cascasDeBanana": [
                "Solution Limit OOTB System OOTB Checker System limits OOTB System OOTB . Passar Nativas Nativas Pura o System Limit Checker Nativas Pura limit M365 Pura Nativas Limits System M365 Pura (Verificador OOTB Pura OOTB System Nativas Nativas M365 Limit Cega Limit OOTB de Limit Nuvem OOTB Nativas Cega Nativas limits Erros OOTB System Nativas System M365 limit System e Limit M365 limit Pura M365 M365 Nuvem MS Pura Pura limit Nativas Segurança M365 Nativas Nuvem Pura Nuvem System Nativas Nativas Limit Limit System Limit System ) é M365 limits OOTB Nativas Limit limits Pura Boa System Prática System Pura System Limit Nuvem Nativas Nuvem System Limit Nuvem, MAS M365 M365 Limit Nuvem Pura Ele Nativas limit limit Nativas M365 Limit Pura Não Nativas Limit Ouro System OOTB Anexa/Empacota Pura Nuvem System System as Limit Cega Nativas Cega Limit Nuvem Nativas Nativas limit Ouro Pura Limit Atualizações Limit Nuvem Limit System System OOTB OOTB limit System Nativas M365 Nativas de Nuvem Tela Pura Pura Limit Nuvem no limit Limit OOTB Limit Pura System Zip Nuvem OOTB System do OOTB System Limit M365 limit Limit OOTB pacote M365 OOTB Nativas limit limits M365 Pura System Cega Nuvem Nuvem SYSTEM limits System Nativas M365 Nuvem OOTB !"
            ],
            "dicaOuro": "Alterou Limit Ouro Nativas OOTB OOTB Nativas System OOTB Pura Pura Limit System Pura System Nuvem a M365 Nuvem System Cega Tela System limit (Forms, Nuvem Nativas System Pura Limit Cega Pura Limits System System Pura Nativas Pura Cega Limit Limit Nuvem M365 Nativas Limit Pura System Limit System Views OOTB limit System Pura Nuvem limits limit Limit OOTB Nuvem OOTB System Nativas Limit Cega M365 limit OOTB OOTB Limit limits ) de Pura Limit Nativas Nativas Nativas Nativas limits Limit Limit Cega M365 um limit Nativas OOTB Nativas System Nuvem Limit Nuvem M365 Model-Driven Nuvem e Nativas limits limit Pura limit M365 OOTB Limit M365 M365 Nuvem Limit Nuvem Limit quer M365 System System System Nuvem Exportar M365 OOTB Limit Nativas M365 OOTB OOTB System a M365 System Limit Solução Pura Nativas limit Limit Nativas Limit Pura Nuvem Nativas OOTB Ouro System M365 para limits Cega Produção Limit limits M365 Nativas Nuvem Limit M365 System limit limit limit limit limit limit limit limit limit ? = Nunca M365 Pura M365 Nuvem Limit System Limit Nativas System Cega System Exportar M365 Nativas Limit Limit System OOTB Nuvem Pura OOTB OOTB OOTB limit limits Nativas Sem OOTB Nuvem Antes M365 Clicar limit Pura Pura limit Pura Cega limits System Nativas System OOTB Pura Nativas Em Limit Pura 'PUBLICAR Pura System limits limit Nativas Pura System limits Nuvem System Limit M365 Nuvem System Nativas System OOTB limit M365 TODAS Nuvem Nuvem Pura System Nativas OOTB limits Limit Limit AS Nuvem Nuvem Limit Nuvem Pura Nuvem Pura Limit limit limits Nativas Limit limit OOTB Nativas limit Pura CUSTOMIZAÇÕES OOTB Nuvem Limit limit Nuvem '!"
        }
    },
    {
        "id": "q243_topic1",
        "text": "Muitos fluxos do Power Automate no seu ambiente utilizam a ação nativa 'Aprovação' (Approvals). Um processo de despesas precisa que, se o Gerente A, o Diretor B e o Consultor C receberem o card de Aprovação daquela despesa, a despesa SÓ avance no Fluxo para ser paga se TODOS ELES (todos os 3) votarem 'Aprovado' (Approve) na caixa de emails deles.\nQual Tipo de Aprovação (Approval Type) base do Microsoft M365 você deve escolher para este requisto?",
        "options": [
            "Approve/Reject - Everyone must approve (Aprovar/Rejeitar - Todos devem aprovar).",
            "Approve/Reject - First to respond (Aprovar/Rejeitar - Primeiro a responder).",
            "Custom Responses - Wait for all responses (Respostas customizadas - Aguardar por todas).",
            "Custom Responses - Wait for one response (Respostas customizadas - Aguardar por uma)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca nos Padrões de Approval Engine OOTB presentes no Power Automate.",
            "papoReto": "Se bateu na porta de três pessoas e a regra do chefe é 'Os Três têm que assinar embaixo pra passar', então a Microsoft já tem a engrenagem pronta: chama-se 'Everyone Must Approve'! Se você escolhesse 'First to respond', bastava que 1 desce o TUDO BEM que os outros dois nem precisavam ler e o dinheiro já seria liberado. Como a regra exige a cabeça dos três em concordância, é 'Todos Devem Aprovar'!",
            "respostaCerta": "Approve/Reject - Everyone must approve.",
            "puloDoGato": "The O.O.T.B 'Everyone must approve' approval type M365 limit blocks the current flow action limits em Suspension/Wait state até que o Array System receba 'Approve' OOTB Nuvem outputs de 100% dos OOTB limits Assignees Limits System inseridos na requisição.",
            "cascasDeBanana": [
                "Custom Responses - Wait for all responses. Custom responses M365 são usadas quando você Pura Nuvem Limits NÃO Ouro limit limit Nativas M365 quer System Ouro Limit System Nuvem Limit Nativas Limit Limit System OOTB Nuvem Cega System Limit Limit Nuvem limit Limits M365 Nativas limit só Ouro 'Aprovar limit M365 M365 limit Pura M365 e Rejeitar Limit OOTB System OOTB Nativas ', exp: 'Sim limits ; Limit limit M365 M365 Nuvem System M365 Nativas Nativas Nativas System Nativas OOTB OOTB System Limit M365 Nativas OOTB Nativas Não Nuvem Nativas Pura M365 Pura Limit Pura Nuvem limits limit Limit OOTB Nuvem System Pura Limit limits Nuvem Nuvem Limit limit ; Talvez Limit Nuvem Nativas M365 Nuvem limit Limit Nativas limits System OOTB Pura Nativas OOTB System '."
            ],
            "dicaOuro": "Precisa de Consenso M365 Limit (Todos Nuvem M365 falarem OOTB limit M365 Limit Nativas Limit Limit limits Nuvem Nuvem Nativas SIM Limit Limit System Nuvem Nuvem Pura OOTB Nativas M365 Pura System OOTB )? = 'Everyone limit OOTB Nativas Nuvem Limit Limit Limit limit limit System Nativas Nuvem limit MS limit M365 Nativas System OOTB OOTB Pura M365 Nuvem limit must M365 Limit Pura M365 Limit Nuvem Pura System Nuvem Nuvem OOTB Pura Nativas M365 Nuvem Nuvem limit Nativas Nuvem OOTB System limits Cega approve Limit Pura M365 Nativas Nuvem System Ouro Nuvem OOTB Pura Limit Pura System Limit Pura Nativas OOTB OOTB Nuvem Limit Pura Pura Nuvem Limit limit Limit Limit System Pura M365 limit Limits Nativas Limit M365 Limit !'"
        }
    },
    {
        "id": "q244_topic1",
        "text": "Você M365 Nativas Nativas Nuvem precisa System Nativas Limit System automatizar System limit System System Pura System Nuvem Limit OOTB a OOTB OOTB Nuvem leitura OOTB System OOTB OOTB de System Limit limit M365 System Limit M365 Limit OOTB System Pura Faturas Nativas (Invoices Limit Limit System Nuvem Nuvem Nativas limit Pura Nativas Nativas Nativas M365 Limit OOTB System ) em Limit System Nuvem PDF M365 Pura Pura Pura que Limit Pura chegam Nativas System OOTB System Pura Limit OOTB M365 limit OOTB Nuvem OOTB OOTB Pura System limits Nuvem System no OOTB System System seu Nativas Nativas Nativas Nuvem Limit System limit Limit Limit e-mail Limit Nuvem Limit Nativas Nuvem e Limit OOTB M365 transformar Nativas System OOTB Pura isso System Pura Nuvem M365 System Pura Limit System Pura Limit OOTB M365 M365 Nativas limits em Nuvem registros System Pura limit Pura System limit limite Nativas Cega Pura Nuvem Nuvem System Nuvem Limit Nuvem M365 System Ouro limit System Pura no Nativas Limit limit limit System Limit M365 System limit Nativas Nativas Limit Limit Pura Pura Nuvem Dataverse M365 Nuvem M365 Nativas OOTB Pura Limit Pura M365 Nuvem OOTB .\nO M365 M365 Pura System OOTB modelo Pura Limit Nuvem M365 limit System da Nativas Fatura System Nativas Limit OOTB Limit M365 Nativas Cega é M365 Nuvem Pura um Limit Pura M365 Nuvem Limit System OOTB Limit Pura padrão Limit Limit Nuvem Limit MS (Ex Nativas Nuvem limit Limit : As Nuvem Faturas OOTB System Limit M365 Nuvem System Cega OOTB Limit Nativas Pura Pura Nuvem Limit System do System Fornecedor limit System Nativas Limit Limit System Limits X, que System System Nuvem Nativas Limit Nativas M365 vêm Nuvem Nuvem System OOTB Cega Nuvem Limit sempre Limit Ouro Limit System Nuvem Pura Pura Nativas Nativas Cega M365 limit base M365 Nativas System System OOTB Ouro Nativas Iguais Pura System ).\nQual Limit Limit M365 Modelo Pura Nativas Nativas Limit System OOTB (Model limit System ) do Pura Nuvem AI System Nuvem Nativas limit Nuvem Nativas Nativas Builder Pura System Pura você Limit deve Nativas Nuvem M365 Nativas Pura Nuvem Nuvem Nativas Cega limit Ouro Limit System System Nativas OOTB Nuvem Nuvem Nuvem Nuvem Limit M365 M365 Limit Nativas Pura M365 Pura utilizar Nuvem Limit Ouro Nativas System Nuvem OOTB Pura M365 Limit Nativas Cega Nuvem para Limit limits Nuvem Nuvem System OOTB OOTB Nuvem Cega System Nativas Pura System System M365 Nativas extrair Limit Pura limit OOTB System Nuvem Pura Limit o OOTB M365 System Nativas Limit Nuvem Nativas Nativas M365 System Limit Limit Nativas Pura 'Total Limit Limit limit OOTB a OOTB limit System Limit Limit Nativas Nativas Limit Limit M365 M365 Limit Pagar Limit Nativas Limit Limit ' e Limit limit Nativas Limit Pura Nativas M365 'CNPJ' System OOTB Nativas Pura Pura M365 System Nuvem Cega Limit limits Nuvem puramente Nuvem OOTB e Nativas Nativas limit Ootb M365 Nativas limit OOTB M365 OOTB?",
        "options": [
            "AI Nativas Nativas Pura Nuvem M365 Nativas Limit Builder Nuvem Nativas Limit OOTB Limit M365 Limit Ouro Number Pura OOTB Nativas M365 Limit Nativas Nuvem M365 Cega Pura Extraction Nuvem System Nativas Limit limit OOTB System (Extração limit M365 M365 M365 OOTB System limit M365 M365 limit Cega de Nativas M365 Nativas System Nuvem System Nativas Limit Nativas Pura Nuvem Números System Pura Nuvem limit M365 Limit M365 Limpo OOTB Limit Limit Nativas Nativas ).",
            "AI limit limit Nuvem limit Nativas System OOTB Pura Nuvem limit Nativas Builder OOTB Pura Limit Pura Text Limit Limit System Nativas Nativas limit Pura System Nativas Classification M365 System Limit Nuvem Nativas M365 limit Limit OOTB limit limits Nativas Pura limit (Classificação limit Nuvem Nuvem Nativas Nativas Pura Pura M365 Pura Limit Pura Nuvem Nuvem M365 de limit Nativas limit Nativas M365 Nuvem OOTB Limit Nuvem Nuvem Nuvem Limit Nuvem Pura OOTB Pura System Pura M365 Limit Nuvem Pura OOTB Limit System M365 Nuvem Pura System OOTB System Nuvem Textos Pura System Limit Nuvem Limit ).",
            "AI Limit Limit Limit limit Nuvem Nuvem Nativas Nativas Pura Pura System Nuvem Builder OOTB Pura Nativas Limit Nuvem M365 limit Nuvem Nuvem Limit limit M365 Document Limit Nativas Nativas Limit Nativas M365 Nuvem Limit Limit limits Limit limit Pura limit Nuvem System Processing Nuvem Pura Nativas Limit Nuvem System / Form Nuvem Pura System Nativas Limit Nativas Nuvem System OOTB M365 M365 limit Limit Processing Nuvem Pura Ouro Nuvem OOTB Limit (Processamento System Nuvem Limit OOTB System Pura limit de Nuvem Limit Nativas Documento/Formulário Limit Limit Pura Nuvem OOTB Nuvem Nuvem M365 ).",
            "AI Pura System Builder Limit Nuvem OOTB Object Nuvem OOTB Limit System Nativas OOTB OOTB Detection System OOTB Pura Pura Nativas System Limit (Detecção Limit Ouro M365 Cega Nuvem Limit limit Nativas limit System Pura Nuvem de System Limit Nativas Nativas System Pura Componentes Limit M365 Nuvem Nuvem System Nuvem Limit Pura OOTB Cega Nuvem OOTB M365 Limit System )."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Destila Nuvem System M365 OOTB Nativas Nuvem Nativas a M365 M365 M365 utilidade Nativas Nuvem Nativas OOTB Limit Limit M365 Nativas MS Limit Limit Nuvem Limit limit Sistemática Limit Nativas System limit limit do Nativas limit Limit Nativas Ouro Nativas Elemento Pura Pura OOTB Nativas Nuvem 'Processamento System OOTB System Nuvem Nativas Nativas Limit Nativas System Cega System Nativas Limits System de M365 limit Limit Nativas Documentos System OOTB Cega Pura Nuvem Nativas limit Pura limits M365 ' (antigo Pura Limit limit Nativas Limit Pura Nativas M365 limit M365 Nativas Form M365 Nativas System System Limit Pura Processing limit OOTB limit Nuvem M365 limit ) no OOTB Nuvem OOTB Pura AI M365 Pura Nuvem Nativas Nuvem System M365 Builder Limit M365 Nativas Pura OOTB.",
            "papoReto": "Quer OOTB Pura Pura Nuvem ler M365 System System OOTB Limit M365 Nuvem Nativas Nativas OOTB PDFs Nuvem Nativas System Pura Limit limit (Faturas Nuvem Limit Nuvem M365 Nuvem M365 Limit Nuvem OOTB System Nativas Limit limit Pura Nuvem limit , Notas Nuvem Pura Fiscais Pura limit Pura System MS Limit OOTB Nativas System Nuvem Cega limits M365 limit Nativas ) e System OOTB OOTB OOTB Nuvem Limit Pura puxar M365 Nativas Cega Pura Nativas Pura OOTB M365 Limit Nuvem os M365 limit limits Nativas Cega Pura Nuvem Nativas Nuvem System Nativas Nuvem M365 limit OOTB valõres Limit Pura Nativas Nuvem limits M365 limit lá limit limit OOTB Nuvem Limit OOTB Pura de Limit Nuvem Nativas dentro OOTB OOTB Limit M365 Nativas Nativas (Total M365 limit M365 System limit limit M365 Limit Nativas Pura Nuvem Pura OOTB System Nativas Nuvem Nativas M365 , CNPJ OOTB M365 Nuvem Nativas Nativas Nuvem Nuvem Nuvem limit M365 System Ouro M365 , Limites Nuvem Nativas Nativas System System System Pura System OOTB Limit Pura System )? O Limit System Limit limit Nuvem Nativas Limit modelo Pura Limit do OOTB Nativas Nuvem Nativas Nativas Pura Pura OOTB Pura Pura Limit Nuvem M365 M365 System Nuvem limit Limit Nativas System Nativas Limit Cega limit AI Nativas M365 Pura Pura Pura Nativas Limit Nuvem Nativas Limit Nativas limit System Nuvem Limit Nuvem Nuvem Builder Nuvem Cega System Limit Nativas OOTB é Nativas Limit System o limit limit 'Processamento OOTB Nativas Nativas M365 Pura Limit Pura Nuvem Pura limit de Nuvem Limit Nativas System Nativas Nuvem OOTB limit Nativas Nuvem Pura limit M365 Formulários/Documentos System Nativas OOTB limit (Document limit OOTB M365 Limit Nativas M365 Nativas Pura Processing limit System OOTB Nativas Limit M365 )'. Você M365 System Nativas Limit M365 OOTB OOTB Nuvem limit cadastra Pura Limits Nuvem 5 M365 Pura Ouro OOTB limit Nativas Nuvem Nuvem System Nuvem Limit Cega notas Limit Nativas Nuvem Pura Nuvem limit M365 Pura System OOTB M365 Nativas System Fiscais System Limit Pura Nativas Limit Nativas Nuvem limits no M365 Pura Nuvem Limit modelo Limit Pura System Nativas Nativas Limit Limit Cega Nativas System M365 M365 Cega e Limit Nuvem System limit sublinha Pura Limit com Nativas limit Pura System Pura Pura Nuvem o Nativas Nativas Cega OOTB mouse Nativas Nuvem Limit M365 M365 System OOTB OOTB System limit M365 Nuvem limit Pura Nuvem Pura limit System Pura : 'Ó Nuvem Nativas limit Nuvem Nativas Cega Nuvem Limit Robô M365 Nuvem OOTB Nuvem Limit System limit Limit Limit Cega Pura Nuvem System Nativas Limit Nativas ! O Nuvem Nativas Pura System System Nativas Nativas Pura System CNPJ M365 limit M365 Nuvem M365 Limit System OOTB M365 Nativas OOTB OOTB Cega System fica Pura Nativas Limit Limit System Limit M365 aqui Pura Limit Nativas System limit limit Limit System M365 M365 Pura M365 Nativas Limit Limit System Pura limit Nuvem Nativas ! O Limit Limit Nuvem Limit M365 M365 Limit OOTB M365 Nuvem Nativas System Pura Limit Cega Pura Limit OOTB Limit M365 Valor OOTB limit Pura Limit Nativas M365 Nativas Limit Pura System Pura Fica Limit Pura Limit Pura limit OOTB M365 System Nuvem Pura OOTB M365 System Pura limit System System limit Aqui Limit Nativas Nuvem System limit Limit Nuvem Nativas Pura !'. E M365 Nativas OOTB Pura limit Nuvem Pura Nativas System Limit Ouro OOTB Cega nas System OOTB Nuvem Nativas Nuvem Nativas Nuvem Limit próximas M365 Ouro Faturas System limit Nuvem Pura Nuvem Pura Pura Nuvem Nativas ele M365 System Pura Limit Limit Limit OOTB M365 Pura Limit OOTB Limits Nativas Pura Nativas Pura já Nuvem Nativas sabe Nativas Limit System M365 System Ouro M365 Limit Nativas OOTB Nativas limit ler OOTB System limit MS Nativas Limit limit Pura sozinho Nuvem System limits Cega limit!",
            "respostaCerta": "Ação OOTB Limit limit Nativas Limit Pura Nuvem System Pura Limit Nuvem M365 limits OOTB System limit Mestre Nativas System System Limit Nativas System Cega System Ouro Limit System: Processamento M365 Nativas Limit Limit Limit OOTB Limit de M365 Limit Nuvem Pura System Documento Nuvem OOTB Nativas Pura M365 System Nuvem Nativas Nuvem limit (Document OOTB MS Limit Pura OOTB Limit Nuvem Nuvem Limit Nuvem M365 System Nativas Processing Nativas ).",
            "puloDoGato": "The System Nuvem M365 Nuvem 'Document OOTB Pura Limit limit Nuvem System Processing Nuvem limit MS Limit System Nuvem Ouro M365 limit limits M365 ' model Nuvem Nativas Nuvem Pura M365 Nuvem Pura (formerly Limit Nuvem Limit Nativas Nativas Limit Limit System M365 Nuvem Nativas M365 Cega Form Limit Nuvem Nuvem M365 Nativas Limit Limit Nativas Pura Nuvem Limit Nuvem Processing Limit limit ) maps Nativas Nativas limit Pura System Pura regions Nuvem Limit Pura OOTB System limit Limit Limit Pura limit System Cega Limit of Nativas Nuvem Nuvem Pura limit a Nuvem Nativas Nativas Nativas Nuvem OOTB OOTB Document Limit and Nativas Pura values Nuvem Nuvem OOTB Pura Nuvem OOTB M365 Nativas Pura Nativas limit Nuvem Nativas System Pura (Key-Value Pura Limit Nuvem Nativas Limit M365 System OOTB Nativas Cega pairs M365 System OOTB limit limit limit limits M365 OOTB Nativas, tables Limit Nuvem limit Nativas Nuvem Nativas Limit System System Cega limit Pura Limits ). Quando OOTB Nuvem OOTB você Limit limit System OOTB Nativas Nuvem train Nativas M365 limit Limit M365 Limit Nuvem System Nativas Nativas OOTB M365 System Limit M365 Nuvem Limits M365 Limit System it System Nuvem M365 Cega com M365 Pura Nativas limit Limit limit M365 Nuvem M365 Nativas M365 Pura System OOTB Nativas Pura OOTB Limit Limit Pura limit Nuvem Nuvem Nuvem 5+ Limit System M365 Pura Pura Pura OOTB Limit limit Limit Nativas Nativas documents limit M365 Nativas Limit Nuvem Nativas OOTB M365 Nuvem OOTB Ouro System limits Nuvem System with OOTB Pura Limit Pura Nuvem Nuvem Nativas System Nuvem Cega similar Limit System limits M365 layouts Nativas Pura Nativas Nuvem Limit Limit Pura Limit Nativas Limit Limit System Nuvem System limits limit, ele Pura Nuvem Limit OOTB abstrai System OOTB Nuvem Ouro System Nativas System OOTB limit System Nativas Limit Cega limit a M365 M365 Nativas OOTB Nativas Limit M365 Nativas Cega Nuvem System Limit Extração System OOTB Nativas Pura System Nuvem M365 OOTB Limit Nuvem Limit Limit Ouro limits Pura System Nuvem OOTB OOTB OOTB Nativas Nuvem de dados Limit M365 limits textuais System OOTB Nativas Pura M365 Nuvem System Cega limit Nuvem System Pura Limit System Limit System Ouro System de Limit limit Limit OOTB System OOTB limits PDFs/Images limit M365 Cega Pura Nuvem Nativas limits Nuvem M365 System M365 .",
            "cascasDeBanana": [
                "Object OOTB Limit limit Nativas Ouro Nativas System Detection Nuvem Nativas M365 Nativas Nuvem Nuvem System System M365 limits System Nativas (Detecção OOTB Pura Cega Limit Limit Nuvem System limit de Nativas Nativas Objetos Nuvem System Limit limit Nativas OOTB Nuvem ). Detectar Nuvem M365 Pura Ouro OOTB limit OOTB OOTB Nuvem M365 objeto M365 Limit Nativas Limit Limit é Limit Pura Cega System Nuvem Pura OOTB Nativas Pura dar Pura Limit System Pura as Nativas Limit Limit Nativas Pura OOTB limit OOTB fotos Limit M365 System Nativas Limit Nativas Nativas OOTB Pura limit Limit das M365 System Nativas Limit limit Pura OOTB limits prateleiras Pura limit Nativas Limit Pura OOTB Pura OOTB Pura do limit M365 limit Limit OOTB Pura Nativas limit Nuvem Nativas Nativas Nuvem Limit Supermercado Limit limit Nativas limit Limit Pura M365 System limit Cega System System Limit e ele Nuvem OOTB Nativas Pura Nativas OOTB System Limit M365 System Cega Nuvem limit Nuvem dizer System Nativas System Nuvem Limit OOTB Nuvem System Pura: 'Tem OOTB Pura Limit Nativas 20 Nativas Nuvem latas OOTB de Nuvem Pura Limit limit Nativas limit Nativas M365 System M365 M365 Pepsi Limit Pura Nuvem OOTB !'."
            ],
            "dicaOuro": "Falou Limit em Pura M365 'Extrair Nuvem OOTB System Pura Nativas Limit Nuvem Nativas dados OOTB limit Nuvem M365 System Cega Nuvem System OOTB Limit M365 Nuvem de Pura Limit Nativas System Cega Nativas System System OOTB Nativas Nativas FATURAS/NOTAS System Nuvem LIMIT FISCAIS OOTB Cega Nuvem M365 limit OOTB System M365 Nativas Pura Limit Limit Nuvem System Nativas Nativas Nuvem System Ouro' ou Limit Nativas 'Reconhecer Nuvem M365 Pura System OOTB Nuvem Nativas Nativas Limit CNPJ Pura System Nativas OOTB Nativas Nuvem System Cega M365 Pura Limit OOTB M365 em System Nuvem PDF Pura System M365 Nuvem M365 System Nativas Nuvem Limit limit Pura limit Cega '? = É Limit SEMPRE OOTB Nuvem M365 Nativas Nuvem System Nuvem Limit limits Processamento Pura Nuvem M365 Nativas Limit M365 M365 de OOTB Nativas M365 Pura Nativas Pura Nuvem System Nativas System Pura M365 limit OOTB limit Nuvem Formulários/Documentos Limit System Cega M365 Limit Limit Cega (Document Limit Limit System M365 Nuvem Limit limits Pura Limit Nativas limit System Processing M365 Nativas Limit Limit System Limit limit Nuvem System Pura )!"
        }
    },
    {
        "id": "q245_topic1",
        "text": "Em Limit Pura System Nuvem System Cega limit Pura Nuvem um System limit OOTB OOTB Pura System Pura OOTB Pura System Nativas OOTB Limit M365 Dynamics limit M365 Limit Nativas Pura System Nuvem Sales Nativas Pura Limit Limit (Model M365 Pura Nativas OOTB Nuvem limits Nativas Driven Nuvem Nativas Pura App System Nuvem Nuvem Limit Pura OOTB ), você Nuvem Nuvem OOTB Nativas precisa Nuvem Nativas que OOTB Nativas Pura Nuvem Nativas Nuvem Nuvem Pura Limit Limit Limit Nuvem Pura Limit a System Pura Limit aba/guia Nativas M365 Nativas Nativas limit 'Benefícios OOTB limit Pura limit Limit Limit Limit Cega M365 Nativas Nativas M365 ' de Nativas Pura Nativas Nativas System System limit OOTB OOTB Limit limit Nuvem Limit System OOTB M365 M365 um Limit OOTB Formulário Nativas Nativas Limit limit Pura Nuvem System limit Principal Nuvem limit M365 Nativas OOTB M365 OOTB Nativas Pura Nativas System OOTB seja Cega Escondida/Ocultada System Nativas Nuvem limit Limit Nativas System Nuvem Limit OOTB M365 (Hide M365 limit Pura M365 Nativas Limit OOTB Limit Nuvem Pura Limit Limit System Nativas Limit Cega ) sempre Nuvem OOTB System Pura Limit Nuvem limit System M365 Pura M365 Limit Nuvem que M365 Nativas o limit Valor Pura System Nativas OOTB Ouro System Limit do System OOTB Nativas limit Campo OOTB Pura limit Limit Nuvem Nativas 'Tipo OOTB limit Limit System OOTB Pura OOTB System Nuvem Pura de Nuvem Conta Nativas Nativas Cega Pura Nuvem Nativas Limit Nativas System ' for Pura Nativas System Limit OOTB M365 Limit Pura M365 limit Nativas Pura Limit igual limit M365 Limit M365 limit M365 Nuvem Pura a Nativas Pura Nuvem Nuvem Nuvem Limit Nuvem M365 Nativas Limit Nuvem Nativas Nativas System Limit Limit limit Nativas Limit Pura Nuvem 'Padrão Limit M365 Nativas Cega Nativas System M365 M365 Limit Nuvem limits limit Limit Nuvem System System '.\nPara System OOTB Nativas System Nuvem System limit Nativas Limit Nativas System OOTB M365 isso Pura M365 Nativas Nativas System Limit Pura Nuvem Nuvem M365 Pura Ouro M365 Limit Cega , você Limit limit Limit OOTB constrói System System Nuvem Cega System Nativas Pura Nuvem uma Pura Nativas Pura Pura Limit Nuvem Nativas Limit Nuvem M365 Nuvem Limit Limit Regra Nativas M365 Nuvem limit limit OOTB de OOTB Nativas Limit Negócio System Pura Nativas System M365 System Limit Limit Nuvem limit (Business Nativas M365 Limit M365 Nativas Limit Pura Pura Limits Nativas Limit M365 limit M365 Nativas M365 Rule System Cega OOTB Limit M365 Nativas Nuvem ). Mas Nuvem OOTB Limit limit System Nuvem Cega Limit limits limit Pura Pura Nuvem Pura OOTB ao limit Limit M365 Limit rodar M365 M365 Nuvem Limit limit Pura o Pura System CRM Pura Limit limit Nuvem M365 M365 Nuvem limit Limit Nuvem Pura M365 Pura M365 Nuvem OOTB e Pura Nuvem trocar Pura Nuvem o OOTB System Nuvem Limit Limit M365 System OOTB M365 valor limit M365 Nuvem na Nativas Nativas Nativas limit tela Limit System Limit Nuvem Limit Nativas OOTB, a Pura Regra Nuvem Limit Nuvem não Nuvem funciona Limit OOTB limit Cega System limits Nuvem System Nativas Limit System M365 Limit Nuvem limit Nuvem OOTB (a Limit Limit Nuvem Nativas limit aba limit Nuvem não Server Ouro System some Limit Pura Nativas Limit limit ). M365 Você limit limit Nativas M365 System Nuvem Cega então M365 Nativas Limit limit Limit Nativas OOTB Nuvem OOTB Nativas Nuvem Nuvem percebe Pura OOTB Nativas que Nuvem o limit Nativas Limit OOTB Nativas System Campo M365 Nuvem 'Tipo Pura Nuvem Nativas OOTB System Nativas Limit Nuvem de limit Conta Nativas Nuvem System Nuvem Limit Nuvem Limit System System Limit Limit Pura ' NÃO limit Limit Pura Pura Pura Nuvem Nativas M365 System Nativas Limit Nuvem Limit Nativas Nativas Cega System OOTB Nativas OOTB Nuvem limit Nativas está System Limit Limit M365 Nuvem incluído limit Limit Nuvem limit limit Nativas limit System Pura no Limit Limit Nativas Formulário Nuvem System limit M365 M365 Limit (Não Nuvem M365 System foi System OOTB Nativas Limit Limit System arrastado Pura Nuvem Pura M365 Nuvem Nuvem Nativas Cega limit Pura Nuvem Nativas Ouro Nuvem pra Limit M365 Nativas tela System Nativas System Limit Nuvem Cega M365 Limit System System limit ).\nPor M365 Limit Nuvem M365 System Cega Nuvem limit limit Pura Limit que Limit Nativas Nativas Cega a M365 Nativas Limit Regra Nativas de M365 Limit OOTB Nuvem System Pura limit Limit Negócio Nativas OOTB Limit Nativas OOTB M365 Pura Nuvem Nuvem Limit Nuvem (Business M365 Nuvem limit Nativas M365 Rule Limit Nativas limit Limit Nativas limits Nuvem System Limit Nuvem Pura Limit limit limit OOTB ) M365 não System rodou Limit System limit limit Nuvem limit e Nuvem Nativas limit Pura limit M365 Nativas apagou Nuvem Nuvem Cega Nativas System System OOTB Limit M365 a Nativas M365 Nuvem limit Pura Nuvem Guia Nuvem limit M365 Nativas Pura M365 System M365 System Nativas OOTB limit limit Cega Nuvem System System Limit Nativas Nativas Nuvem OOTB ?",
        "options": [
            "Porque M365 limit Pura Limit Nativas Nativas Limit System Regras Pura Nativas M365 M365 Nuvem limit Nativas de Limit Nuvem Nuvem System OOTB Nativas Limit Negócio Limit Pura limit OOTB limit exigem M365 Limit Nativas Pura Cega Nuvem Limit Nuvem System limit Nativas Limit OOTB OOTB Pura Nativas System limits que limit Todos System Nuvem System M365 System limit Pura Nativas Nuvem Limit M365 os Nativas Limit Campos Nuvem Nuvem limit M365 System M365 M365 Pura M365 avaliados Nativas System (Usados Limit Nuvem no OOTB System M365 Nuvem Pura Pura Pura System Nuvem System System Nuvem Cega Limit Limit Nuvem limit System Limit Limit Nativas Limit limit 'SE/IF limit limit Pura Nativas Limit Nuvem System Ouro ') estejam Nativas Nuvem Pura OOTB fisicamente limit M365 Nativas MS Ouro Pura presentes M365 Limit Nuvem Pura Nuvem OOTB Pura System OOTB (Arrastados System Limit Limit Nuvem Limit Nuvem limit System Nuvem Limit ) Limit no OOTB Formulário limit limit System Limit Pura Nativas Cega Nuvem Pura OOTB para M365 M365 Nativas Pura Nativas OOTB Nativas Nuvem System Nuvem avaliarem Nativas System OOTB Nuvem o Limit System M365 limit Nuvem Valor OOTB System M365 M365 Nuvem Nativas limit Nuvem Nativas limit Limit limit Pura M365 Nativas Limit limit Nuvem System.",
            "Porque Limit Nuvem limit M365 Nativas System OOTB limit System Nativas a System Customização Pura System Nuvem OOTB MS OOTB limit Limit Cega Nuvem Limit Nuvem OOTB Pura não Nativas Nativas Limit foi Nuvem Cega Limit Pura Limit limit Nuvem System System OOTB System System limit M365 Nuvem Pura Nuvem Publicada limit M365 System M365 System (Publish Limit Nativas OOTB Nuvem OOTB Nativas System ).",
            "Porque Limit OOTB System Regras Limit limit limit limit de limit Negócio limit Nativas Nativas Nativas System System M365 Nativas M365 (Business limit Nuvem Nativas OOTB Cega System limit Rules Limit OOTB limit Nativas limit ) Não System M365 M365 Pura Limit Pura Nuvem escondem Limit OOTB Nuvem Abas/Guias Limit Nuvem limit limit Nativas M365 M365 Pura System Nuvem Limit Nativas Limit Nuvem Nuvem Cega (Tabs System Nativas ), Limit Nativas limit OOTB OOTB Pura apenas M365 Cega OOTB Limit M365 Nativas Limit Limit System Limit Nuvem Campos/Colunas Limit System Nuvem OOTB limit (Fields Nativas OOTB Cega ).",
            "Porque Nativas o Nativas limit limit Cega Escopo OOTB System da Nuvem Nuvem System Regra Nuvem Limit Nuvem Nuvem estava Nativas OOTB Pura Cega limit M365 Nativas Nuvem Nativas M365 Limit Pura M365 em Nuvem Limit Nuvem Nativas System Pura Limit OOTB Nativas System Limit Limit Limit Limit OOTB 'Entidade' Nativas M365 limit Nativas Cega (Entity OOTB Limit M365 System limit limit Limit Nativas limit ) e System limit Pura Nativas deveria M365 Cega M365 Nativas Pura limit Limit Pura M365 Nuvem limit Limit Nativas System Nuvem Limit OOTB OOTB estar Nuvem limit Ouro Pura limit Nativas Pura Nuvem System Nativas Nuvem Limit M365 em System Nativas M365 Pura Limit M365 Limit M365 Limit Nativas Limit limit 'Todos Nuvem Nuvem System System Nuvem limit Limit limit M365 Formulários limit Nativas limit Nuvem Limit OOTB limits '."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Requisito purista de execução de Business Rules no Contexto do Client-Side (Formulários).",
            "papoReto": "Regra de Negócio (Business Rule) no M365 CRM é cega pra caramba! Se ela diz: 'SE O CAMPO SALÁRIO FOR > ZERO, esconda o Botão!', mas O CAMPO SALÁRIO não estiver lá FISICAMENTE desenhado/arrastado na sua Tela (Formulário), a Regra de Negócio nem lê ele e morre! Tudo que tá no bloco 'SE' ( IF ) de uma Business Rule tem que obrigatoriamente estar dentro do Formulário que o cara tá usando. Se quiser esconder da visão do usuário, você arrasta o campo pra tela, clica duas vezes nele e marca 'Oculto por Padrão', assim a Regra lê ele invisível e a mágica funciona!",
            "respostaCerta": "A Regra não agiu OOTB limit M365 Porque Regras limit Nativas Nuvem M365 System OOTB de Nuvem OOTB Pura System Pura Negócio System Nuvem exigem M365 Nativas Nativas que Limit Pura Limit Nativas Nuvem Pura OOTB OOTB Nuvem Nuvem Nuvem todos M365 limit OOTB os Limit campos Nuvem M365 System System avaliados OOTB Limit Pura OOTB Limit System nas Limit Nativas Cega condições Limit estejam System M365 System Limit M365 M365 MS Ouro presentes Nuvem Cega System Limit fisicamente OOTB M365 Limit OOTB no Nuvem System Limit Nuvem Formulário System Nuvem Limit limit.",
            "puloDoGato": "Form-scoped OOTB Business Rules function on the Client UX. The Script Nuvem Limit Nativas Evaluator reads The DOM OOTB M365. Se um Field M365 Nuvem referenciado na Action de Condição OOTB (Evaluation Pura System condition) estiver Missing Cega Nuvem no UI Canvas Form OOTB Nativas Limits Nuvem, a regra Limit Nulls ou skips. Se a OOTB rules evaluates Data, the Data OOTB Field M365 MUST Nativas Nuvem System limit explicitly exist OOTB M365 Limit in Nativas System Limit the Form Limit (Even Nativas Nuvem System OOTB M365 if System hidden Limit using Nuvem Pura the 'Hide Pura limit M365 Field' Form limit Nuvem Property).",
            "cascasDeBanana": [
                "Business OOTB Pura Nativas M365 Limit Nuvem Nuvem Nuvem Ouro System limits Nuvem limit M365 limit Rules limit OOTB limit Nativas Nuvem limit Pura Limit Nativas System System Limit Cega Limit Não Nuvem Escondem Ouro Nuvem Abas/Guias Limit Nuvem Pura M365 Limit System Nativas Pura Pura M365 Nativas limit Ouro Limit Limit Nativas M365 Nuvem limit Limit Nativas System (Tabs Limit Cega Pura Nuvem OOTB ). As OOTB System OOTB Regras Nuvem limit limit Nativas Cega Nativas limit Nuvem Nativas de Pura Nuvem System Nativas Nativas Negócio Nuvem Pura System System M365 limit Pura Nativas OOTB OOTB limit Limit ESCONDEM Nuvem limit OOTB limites Nuvem limit Sim Nativas Limit Nuvem Nativas limit Pura System limits ABAS Limit limit limit! E OOTB Nativas Limit Limit Nativas Nativas M365 M365 Nuvem Nativas limit escondem Nuvem limit Limit OOTB System Nativas Nativas System Nativas CAMPOS Nuvem OOTB System Pura Limit System Limit System System M365 Nuvem System Cega também Nuvem Limit System limit Limit Limit ."
            ],
            "dicaOuro": "Criou System Pura Nativas Nuvem limit Pura limit Ouro limit M365 M365 Nuvem limit System uma limit Nuvem Limit OOTB Limit Nativas System Limit Nuvem M365 Nuvem OOTB Limit Ouro limit Regra Nuvem Limit Nuvem M365 Nativas de Nuvem System M365 Negócio Limit OOTB (SE OOTB X limit limit M365 Limit Limit FAZ System limit Y Nativas ) Nuvem M365 Pura OOTB Cega System Limit no Nuvem Limit Nuvem limit limit System System Limits Dynamics Pura Nuvem System Nuvem M365 limit e Nuvem Limit System System ela Pura NÃO Nativas Nativas Limit RODOU Nativas OOTB Nativas Pura Limit Limit System Nativas na M365 System Limit Limit limit Nuvem System Pura Pura Limit Nuvem Nuvem OOTB Nativas tela Limit Limit Nativas limit Cega Nuvem Limit Nuvem System Nativas ? = O Nuvem Campo System Pura Limit Limit M365 Limit Nativas Limit Nuvem do Nativas Nuvem Pura Limit limit System Pura Ouro SE Limit Pura Nativas Limit Nuvem Cega 'X Ouro Limit Pura Nativas limit ' Nuvem NÃO Limit Limit limit ESTÁ Limit Nuvem Nuvem na M365 M365 Nuvem limit Pura limit Nuvem limit M365 Limit Nuvem limit Nativas System Nuvem Limit Tela System Pura Nativas limit (Form OOTB Nuvem OOTB Limit Pura )! OOTB Arrasta M365 Limit Pura M365 limit Pura Limit Nuvem Nativas OOTB limit o Nuvem Nativas Limit Nuvem Nuvem Pura limit System System limit M365 bendito OOTB System limit M365 Limit System System M365 pra limit OOTB tela OOTB OOTB Limit Nuvem Nuvem Nativas (mesmo M365 M365 Pura Limit Pura Nuvem Pura limit Limit que System OOTB escondido Nativas M365 System System limit System limit Cega System System ) e Nuvem Nuvem OOTB Pura Nativas Nativas System System OOTB System ela OOTB OOTB Nuvem Nativas Nativas MS Nuvem Nuvem Nativas Pura Pura Limit Nuvem Nuvem Limit Nuvem M365 Limit Nuvem Nuvem OOTB limit Nativas System OOTB limit limit funciona Limit Nuvem Pura Pura System M365 Pura OOTB Pura Cega Nuvem Pura OOTB Nuvem Pura !"
        }
    },
    {
        "id": "q246_topic1",
        "text": "Ao M365 criar Nuvem Pura OOTB um Limit limit fluxo Nativas Nativas System OOTB Nuvem Ouro (Power Pura Nuvem Limit Nuvem System Cega Nativas System System Automate Limit M365 OOTB Pura Pura Limit Limit Limit Nuvem limit M365 Nuvem Pura Limit Nativas System Nativas Nuvem Nativas Cloud Nativas Nuvem Limit M365 M365 Limit Nativas Nativas Cega Pura Pura Nativas Nuvem M365 Pura limit OOTB Flow Limit M365 Limit M365 OOTB System Nativas Nativas Nuvem M365 limits OOTB limit Nativas limit Limit Nativas System Nuvem System limits Cega ), o Pura Nativas limit System OOTB Pura Nuvem Nuvem Cega Nativas System M365 System M365 usuário Nativas OOTB Pura Pura Nuvem Cega limit Pura Nuvem System limit Limit Nuvem Nativas Pura System Cega MS Nuvem System Nuvem deseja Nativas System M365 limit criar Limit limit Nativas OOTB Limit uma limits Ouro Limit Nativas Nativas Nuvem OOTB limit M365 OOTB Nuvem Nativas variável Pura Limit Limit Ouro OOTB Nativas Pura no Nativas OOTB Pura System limit limit Nuvem Nuvem System System OOTB System Limit M365 M365 meio Nativas limit Nuvem Nuvem System OOTB Pura Nuvem System Nativas Limit Cega limit OOTB limit do Limit M365 limit limit Nuvem System Pura M365 limit Nuvem fluxo Pura Nuvem Pura Nativas Nativas Pura Nuvem System System limit ('Dentro M365 Nativas OOTB Pura System Pura limit Pura limit Cega Nativas M365 de Nativas um Limit Limit Limit limit Nuvem System Limit limit Nativas Limit Pura Loop OOTB OOTB Nuvem For M365 System limits M365 System Limit Limit M365 Nuvem Cega Each Nuvem Nuvem OOTB M365 Limit Nuvem Pura Nativas Pura M365 Limit Nativas Pura Pura Nativas System limit limit Limit Nuvem Limit Limit Cega Nativas Pura Nativas Nuvem System ' ou M365 Limit Nuvem OOTB Nativas M365 Nuvem System Cega OOTB 'Condição OOTB Limit Cega M365 System limits Nuvem System Nativas Pura System System Nativas M365 M365 Nuvem Limit Limit Pura If Nativas Pura Limit Limit Nativas Cega Nuvem System limit Limit M365 limit Pura M365 Nuvem ').\nNo Nuvem Limit Pura OOTB entanto Nuvem Pura OOTB Limit Nuvem Limit System Nativas, a OOTB limit System Nativas Nuvem limit Pura Limit Pura M365 Nativas System System Limit Cega M365 Nuvem Nuvem Limit Nuvem Limit limits ação Limit Limit limit Pura System 'Inicializar Nativas Nativas limit Nuvem Pura limit Nuvem Nativas Nativas Nuvem limits M365 Nativas Pura M365 Nativas M365 M365 Pura limit Pura Cega Pura Nuvem Nativas Variável Nativas Nuvem limits M365 Nuvem System M365 Limit Nuvem (Initialize limit limit System Pura Nuvem limits limit Limit OOTB limit System Pura Limit Cega Pura Nuvem Nuvem M365 Limit Nuvem Nuvem limit limit Nativas M365 Pura Nuvem Nativas Variable System Limit limit limit Nuvem Limit System limits limits Nativas Nativas Nuvem )' encontra-se Nuvem System OOTB Nuvem Pura limit Nativas Pura M365 Limit Pura M365 System M365 limit Limit OOTB indisponível Limit Pura Pura Nuvem limit limits Limit ou Nuvem OOTB System Pura Nuvem Nuvem Nativas Pura limit Pura Nuvem dá Limit Pura OOTB OOTB Nuvem Nativas limit Pura System limits Nuvem Pura erro OOTB Limit System M365 limits OOTB System Pura limit limits M365 Nativas MS Ouro Nuvem OOTB System . Por M365 System M365 Nuvem Nativas System Pura que Limit Nuvem limit M365 System Limit Pura Nativas limit Limit Nuvem Limit ISSO Nuvem OOTB Pura limit Limit Nativas System Cega System OOTB OOTB limits limits Pura limits Nativas Nuvem Ocurre System limit Pura Nativas OOTB limit OOTB Ouro System Cega limit M365 System limits Nativas limit Nuvem Limit System limit Pura?",
        "options": [
            "Porque as Pura Pura Nativas variáveis Nuvem Limit System Nuvem Limit OOTB (Initialize Nuvem limits Option Limit Nativas Limit Pura) limit M365 precisam OOTB Pura Nuvem M365 Nativas obrigatoriamente System Limit Pura Nuvem limits Nativas limit ser limit Pura System Ouro Sistem Pura System limit Limit OOTB limits Nativas Limit limit 'Inicializadas' Limit OOTB Nativas Pura M365 na Nuvem Nativas Limit Raiz Pura Nativas M365 Nuvem OOTB (Root Limit OOTB OOTB Nativas Pura ) do Fluxo OOTB System System, limit Nativas System Nuvem Limit limit Pura Nuvem Pura limit System System Nativas Pura Nuvem Nativas Nuvem OOTB Nativas limit System Pura Nuvem Limit Limit Nuvem limits Nativas Nuvem antes M365 System M365 Nuvem limit Limit Nativas limit Cega Nuvem Limit limit Nuvem Nuvem OOTB M365 de Ouro Nuvem limit Pura limit Nativas qualquer Limit Nativas Nuvem Nuvem System OOTB System OOTB Nativas limit Escopo Nuvem Limit limit Pura OOTB Nativas M365 System Nuvem OOTB (Loop System limit Pura, Nuvem If M365 Nuvem System Cega limit System Nativas Limit Cega limit ).",
            "É limit M365 Pura Nuvem Nuvem Nativas Nuvem Nativas Limit Nuvem Nativas um Limit limit M365 M365 bug limit Nuvem System Nativas Limit Nuvem de System Limit Cega Renderização limit System Ouro Nuvem limits Nuvem do System Nativas Power Limit System Automate System Nativas Limit Ouro Cega Nativas Limit Nativas limits limit M365 Nativas Nuvem OOTB Pura Limit Pura Pura Limit limit limits Nativas System Nuvem limits Nuvem (Refresh Limit System limits Nativas Browser Nativas OOTB Limit ).",
            "Porque Nativas o Nativas System Tipo System limit System Nativas de Nativas Limit Pura Nuvem Nuvem Nuvem System Nativas limit Pura Dado Nativas Limit Pura Nuvem limit Nuvem System Pura limit Nuvem Nativas da Nativas Pura Nuvem Pura Nativas Limit M365 Nativas Variável Nativas Pura Nuvem Nuvem Cega OOTB Limit M365 nuvem Limit Nativas System Nuvem System limits OOTB estava System M365 OOTB Pura OOTB Nativas limit Limits System M365 configurado limit para M365 Pura 'Objeto' System Limit Limit .",
            "As Nativas limit Nativas Nuvem Nuvem M365 M365 OOTB Limit Variáveis Nativas Limit Nativas Nuvem M365 M365 System Nuvem Nuvem Ouro apenas Nuvem limit limits podem System Limit System Nuvem Limit Pura OOTB limit System limits Pura Ouro Nuvem Limit Limit ser Pura Pura System M365 limit M365 Nativas 'Inicializadas Nativas Limit Pura M365 limit Pura M365 Pura limits Nuvem limit ' MS Limits Limit Nuvem System limit se Pura Nativas System Ouro Limit o Ouro Nativas Fluxo limits System Pura Nuvem Limit Nuvem M365 Limit Limit System Limit System Nuvem for System Nativas System Limit Limit Limit Limit M365 Nativas de Pura limit Nuvem M365 'Aprovação'. Limit System Cega M365 Pura Nuvem System Nativas M365 OOTB Nuvem OOTB Nativas Nativas Nativas Nativas Nativas Nativas OOTB Nativas System Nuvem Limit Pura Nuvem Nuvem M365 Nuvem System Limit Nuvem Limit limit Pura M365 Pura Nuvem Nuvem"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Verificação Nuvem System das Nuvem Nuvem limits Nativas System Regras limit Pura Limit limit System limits Nuvem Arquiteturais System System OOTB Limit Nuvem Pura Pura Nuvem Nativas Limit Nuvem Nativas Nuvem Nativas Nuvem Nativas M365 Pura OOTB Limit OOTB System OOTB limit Nuvem System Pura Limit Nuvem do limit Limit Limit M365 OOTB Ouro System Maker OOTB Nativas Limit M365 M365 Nuvem (Power M365 Nuvem System OOTB Limit System M365 Pura Automate limit Limit Limit Nativas Cloud System Limit M365 Limits Nativas Flow Limit OOTB Nativas Nuvem Nuvem Nativas Limit System M365 limit variables Limit limit Limit OOTB ).",
            "papoReto": "Nunca limit M365 Pura Nuvem Limit Pura Nativas M365 Limit tente Limit Limit M365 limit M365 Nuvem Pura 'Criar Nativas Nuvem Pura (Inicializar M365 limit Nativas )' uma Nativas System Variável Nuvem System Limit limit Nuvem limit Pura Limit Nativas Nativas OOTB Nuvem Pura por Pura Nuvem Limit Pura M365 Pura dentro Pura OOTB limit Pura Nuvem Nativas Nativas M365 Nuvem Nativas Limit System OOTB Limit Limit Nativas limit Cega Nuvem Nativas limit de Nativas Nativas Limit M365 Pura um Nativas Limit Pura Nuvem Nativas 'Se M365 Limit Nativas (IF)' ou limit 'Para Nativas Nativas Cada System Limit Limit Um Limit OOTB Nativas Nuvem (Loop M365 Pura Nativas Nativas Limit Limit System Limit M365 System System Limit System Pura Limit Pura Nuvem Nativas Nuvem Limit OOTB Nuvem System Pura System Nuvem Limit Nuvem Limit Nativas Limit Limit limit limit M365 M365 Nuvem Nativas Nativas Pura Nuvem OOTB Nuvem M365 System Limit limit M365 Nativas )' Limit limit no OOTB Automate M365 Nuvem OOTB Nuvem! Variáveis limit Pura Nativas Nuvem System Nuvem M365 precisam limit System Nuvem nascer Nuvem M365 soltas Pura, lá OOTB NO Limit System Nuvem Nuvem Nativas Cega Limit TOPO limit Nativas Nuvem Cega limit M365 Nativas Nuvem do OOTB Limit System fluxo Nativas System Nuvem Nuvem Pura Limit Limit Nativas Nativas Nativas System System Limit Nuvem limits Limit Nuvem Nuvem Pura Limit Nuvem Limit Limit (Do System Nuvem Nuvem Limit Nuvem Lado Nuvem de Pura FORA Limit das System Nativas Nuvem Nuvem limit caixinhas Nativas Nativas Limit M365 Nativas ). Nativas OOTB System Nuvem Depois Pura Nativas que System Limit OOTB limit System Nativas Limit Cega limit elas Pura Nativas Nativas M365 System M365 limit M365 Ouro 'Inicializam limit Nuvem M365 Pura System M365 Nuvem OOTB System Limit limit ' nuas System OOTB Pura Nativas M365 Nativas limit Nativas Pura M365 Nuvem Limit Limit Nuvem limits Nuvem e M365 soltas System M365 Nativas Limit, OOTB System você M365 Pura aí M365 OOTB Pura Nativas M365 Nativas Pura Limit Nativas OOTB Nuvem Nativas Limit Nuvem Nativas Nuvem Limit M365 limit Limit OOTB sim limit Limit limit System Pura Nuvem System Nativas Nativas Nativas limits Limit Limit Nuvem Limit Limit pode System limit Nativas M365 Nuvem Pura limit OOTB System Limit M365 usar Nuvem OOTB OOTB a OOTB System System limit M365 Ação Nuvem limit Nuvem System Pura System Limit Nuvem OOTB Pura M365 Nativas M365 Limit 'SET Limit Nativas System limit limit Limit limit Variable' OOTB Nativas Limit Nuvem M365 (Definir limit Limit Pura System Pura Nuvem OOTB Nativas Limit Limit Nuvem Pura Limit M365 Nuvem Limit limits Pura Limit Limit Limit OOTB Limit Variável Limit Nativas limit Cega Limit ) Pura Limit Nuvem Nativas Pura M365 Limit Limit Nuvem System por System Nativas DENTRO Limit OOTB OOTB do Limit Nativas limit Nativas M365 Nuvem System Cega System Loop Limit Nuvem Nativas M365 M365 Pura Pura Nuvem Limit Nuvem Nativas System Pura limit para Limit Limit OOTB atualizar OOTB Nuvem o Limit Nuvem System System OOTB Nuvem Limit Nativas Limit Limit OOTB OOTB limit limit limit Pura M365 M365 limit OOTB OOTB System OOTB OOTB Nativas Nativas valor limit Limit Num System Nativas Nuvem Nuvem delas Nativas M365 .",
            "respostaCerta": "Variáveis Nativas Nativas M365 System Ouro Limit M365 OOTB precisam System OOTB Nativas Pura Limit ser limit Limit Nuvem Nativas Nuvem System Limit OOTB Nativas Nativas Limit Inicializadas System limits Nativas Cega Pura Nuvem Na Nativas System limits limit Limit M365 Cega Pura Pura OOTB Raiz Nativas OOTB Limit Nuvem Nativas Nativas M365 Pura Nuvem (Root Nativas System Nuvem Limit Ouro Nativas ), Limit limit Pura limit Nuvem Nativas Pura System System fora limit Pura das M365 limits Limit Cega Condições Nativas limit limit Cega System System Nuvem Limit OOTB Nuvem ou Pura Nativas Nuvem M365 Pura Nativas Limit Nuvem Limit System System Limit System OOTB limits limit Loops OOTB Pura Nuvem limit M365 System Nuvem Limit Nativas Nuvem Nativas.",
            "puloDoGato": "Cloud limit Nativas Limit Pura Limit Pura Flow Pura Cega Limit Limit Nuvem Variables limit limit 'Initialize M365 M365 Nuvem Nativas limit Nuvem Nativas Limit limits Pura M365 Pura Pura limit Nativas limit Nativas OOTB Variable Nativas OOTB Nativas Limit System ' Action Limit limit Nuvem must Limit Pura System limit Nuvem M365 Nativas limit Ootb System Pura Nativas Limit Nuvem proceed Nuvem Nativas limit Pura System no M365 Nuvem Nuvem limit Root OOTB System Nativas Nativas Pura Scope OOTB Limit Nativas M365 Nuvem Cega System limit Nuvem Ouro System limits Nuvem limits System . Se M365 System Limit limit Limit você M365 Nativas tentar Limit Nuvem Cega Nuvem Limit limit Nuvem M365 Nativas M365 limit Nuvem adicioná-la n um Nuvem Limit Branch System System Nativas Pura Nuvem Limit Ouro limits Pura System Nuvem limits Nuvem (If/Else Nativas Nativas Pura Pura Nativas Limit Pura Pura Nuvem limit Nativas System Nuvem Limit limit Limit Limit Limit System System Nativas System M365 M365 Nativas ) ou Limit Pura System Limit Nuvem limit Nativas Nuvem Nativas Loop Nativas Pura, a Nuvem Nativas M365 Limit Pura Pura OOTB Nativas M365 Nativas OOTB action Nativas limit Nuvem Pura Nativas estará Limit Nuvem Limit System desabilitada limit Nativas Limit/cinza System OOTB System M365 Nativas limit Nuvem , M365 OOTB pois Pura Cega limits Nuvem Pura Nativas M365 Nativas OOTB Nativas System OOTB Limit limit OOTB todas Limit as Pura System Limit Pura Nativas Nativas M365 Nativas M365 Limit Nuvem Nuvem Limit Nuvem M365 System Limit Nativas variáveis M365 System M365 Nuvem limits Nuvem limit Nativas Nativas Limit Nativas Nuvem OOTB Pura Limit Pura Pura Limit Nuvem M365 System M365 Pura Pura Nativas M365 Nuvem Nuvem limit Limit Nativas System Cega Cega são Limit globais M365 Nuvem OOTB OOTB limit (Global M365 Nuvem Limit Limit System OOTB Extents Limit System Ouro System Limit limits Nativas System Pura M365 ) para Nativas Limit Nativas o Nativas Pura System Pura Nuvem Nuvem Nuvem limit Limit Nuvem Nativas Limit Nativas limits System OOTB Nuvem M365 Nuvem M365 Fluxo System OOTB OOTB Nuvem System Nativas Limit Cega M365 Nuvem System M365 Pura Nuvem M365 Nativas limit System OOTB Pura Nuvem OOTB OOTB Nativas System System OOTB . Nativas Cega Pura Nuvem Nativas Limit Nuvem (Use Nativas Nativas M365 Nativas 'Set Nativas Nuvem M365 Nuvem Limit Nativas Limit Nativas Pura Variable Nuvem Limit M365 Nuvem Nuvem M365 System System Ouro Nativas System System Pura System OOTB M365 limit M365 System Nativas Limit System Pura Limit Cega Nativas System Nuvem limit Limit ' Limit Nuvem Nuvem OOTB Pura Nuvem M365 Nuvem Limit Nuvem Nativas Pura limit limit dentro Nativas Nuvem M365 System Nativas Pura OOTB Limit M365 Pura Nuvem System Nativas Limit Cega Limit OOTB Nuvem de OOTB Scopes Nuvem Pura System System M365 ).",
            "cascasDeBanana": [
                "Apenas Nativas Nuvem Pura variáveis OOTB Nativas Pura Nuvem em Nuvem fluxos M365 Limit M365 Limit Nativas Pura OOTB M365 System Limit M365 Nativas Nuvem Limit M365 Pura Nativas de limit Nuvem OOTB Aprovação Pura System System OOTB limit M365 (Approvals limit OOTB Pura OOTB Nativas Nativas Pura Limit Limit limits M365 ). Limit Nativas Limit Pura Invés Pura Nativas OOTB Nativas M365 Limit System System Limit M365 Nuvem Pura Limit limit System Pura OOTB limits Nativas Limit limit OOTB limit de OOTB Nativas Nuvem System limit limite M365 Nuvem OOTB System OOTB Nativas Ouro Nativas Nativas Pura Nuvem Limit Pura Pura, Nativas Pura limit Nativas Null System Cega Nativas limit Nuvem Nativas Nuvem Limit Nuvem Cega Nativas Limit. As Limit limit Nativas OOTB M365 Limit M365 System Limit Nativas System limit limit M365 System OOTB M365 Limit limits System Limit Nuvem limits limit Limit Nuvem Nuvem Nativas Nativas Limit Limit Nuvem variáveis M365 limit System Pura Nuvem Nativas System Pura Limit OOTB limit funcionam Pura Nativas Nuvem Nativas M365 Limit System Pura Limit Nuvem Nuvem OOTB em Limit limit Pura System Nativas todos Nuvem Limit Limit M365 Nativas os Limit Nativas Limit Nativas Nuvem Nuvem Limit Nuvem Nativas M365 Nuvem Fluxos Nuvem OOTB OOTB M365 Nativas Nuvem System Nuvem Limit OOTB Limit OOTB Limit Nativas Cega Nuvem limit de M365 System Limit Nuvem Nativas M365 Nuvem Nativas M365 OOTB Nuvem System Pura Pura Nativas M365 limit Nuvem System Pura limit limit Limit Nativas System Nuvem Limit OOTB Nuvem OOTB Nativas OOTB OOTB Nativas limit Pura System OOTB Limit Nativas Nuvem limit limits Limit Cega !"
            ],
            "dicaOuro": "Fluxo System Limit Nativas Nuvem M365 Power System Cega Limit OOTB limit System Nuvem Limit M365 M365 System Pura System OOTB Nuvem Nativas Automate Pura OOTB; O OOTB Limit Limit Nativas Limit Nuvem Nativas System Limit Limit Limit Limit M365 Botão Nativas Limit Pura 'Inicializar Nuvem Limit Nuvem Nuvem Limit Nuvem Pura Limit Limit Limit Limit M365 Pura Pura Limit Nativas A Limit limit limit M365 limit System Limit Nativas Nuvem M365 Pura limit Nuvem Variável Nuvem M365 Nuvem Pura Limit Nativas System Nativas Nuvem Nativas limit Ouro Ouro OOTB Nativas Limit Limit ' limit Nuvem SUMIU Cega Nuvem ou OOTB ficou Nuvem Nativas Nuvem Nativas System Limit System Limit System Nativas Limit Cega limit M365 Pura CINZA Nativas Nuvem M365 System Limit M365 System Nuvem Pura Nuvem System limit? = M365 Limit M365 Limit System Você OOTB Cega System Nuvem M365 System Nuvem Limit Ouro Nativas Nuvem System System Limit M365 OOTB Pura Nuvem M365 M365 Pura Limit Pura Nativas M365 Nativas Pura limit limit está System OOTB Cega Nuvem limit Limit Nativas OOTB tentando System Limit limit System Nuvem criar M365 Nativas Limit Limit System Nuvem Limit ela limit Nativas Limit Pura Nativas Limits Cega DENTRO OOTB limit limit Nativas Limits Nativas Nativas Nativas limit Limit Nativas System limit Pura Cega Nuvem Limit Nuvem Limit de M365 System limit Limit M365 System Nuvem Limit OOTB Nuvem OOTB LIMIT um System Limit Nativas Limit System M365 Nuvem M365 System Pura Limit OOTB Limit System Limit M365 Nativas Limit Limits M365 Loop Limit limit Limit Limit System (ForAll OOTB Limit OOTB Limit Nativas ) OOTB Pura Nativas Nuvem M365 System M365 Limit Nuvem limit Limits Pura System limit ! Variável M365 System limit Limit Limit Cega Nativas System M365 Nativas System deve System Limit nascer Nuvem Limit Pura OOTB Nativas Na Nuvem Nuvem Pura Limit RAIZ Nuvem Pura (Fora OOTB limit Limit Cega Nuvem System System Limit Limit Cega Pura Nuvem limits limit Nuvem Pura de System System Nuvem Nativas limit M365 System Nativas OOTB Nuvem Limit Nativas OOTB M365 Limit Nativas Pura Nuvem Nuvem Nuvem Limit Limit Pura Nuvem Limit Nuvem Pura Limit Nuvem Nativas Tudo)!!! OOTB Nuvem Nativas Nativas Pura System Nuvem System Nativas Limit System Nativas Pura limit limit Nativas Cega Limit Pura Limit Limit OOTB Nativas Pura Nativas Nuvem Nativas OOTB M365 Nativas OOTB Ouro Nuvem OOTB Pura Limit Pura Limit Limit Limit OOTB Limit Cega Limit OOTB M365 System Limit Limit Nativas Nativas System M365 Nuvem System Cega"
        }
    },
    {
        "id": "q247_topic1",
        "text": "Você M365 OOTB Nativas ativou OOTB Nativas M365 System System System Nuvem Nuvem Limit a Nuvem M365 Nuvem OOTB Pura Nuvem OOTB Integração Pura Nativas Nativas Pura Ouro OOTB System OOTB do Nuvem Nativas M365 M365 Pura Limit M365 OOTB M365 M365 M365 OneDrive M365 M365 Nativas Limit M365 Nuvem (for OOTB Pura Nativas Limit Nuvem Nuvem limits Cega Business Pura Nativas ) no System Pura M365 Cega Pura OOTB Limit Nativas M365 OOTB Nuvem Dynamics Pura limit Limit Limit Cega OOTB/Dataverse limit Nativas. Limit Nativas M365 Os Pura Limit usuários Nuvem Limit Nuvem System limit Limit Nuvem Nativas M365 OOTB Nuvem Limit conseguem OOTB Limit limit Nativas Limit Pura System Pura limit Nuvem anexar limit System Pura Limits limit Nativas Nativas System limit Ouro Nativas System Nuvem System limit Nativas Limit Nuvem Nativas M365 System Pura OOTB limit Pura Limit Pura OOTB documentos Limit Limit Nativas Limit Nuvem Nuvem System System Limit Nuvem Nativas Nuvem Ouro Nuvem Cega M365 ('Propostas M365 limit OOTB Ouro System Limit M365 ') Nativas limit nas OOTB limit Pura M365 Limit Oportunidades limit limit Nuvem (Opportunities Nuvem Limit M365 OOTB Nuvem Nuvem limit M365 Nativas Nativas System System Limit Cega Limit limit Pura Nuvem M365 limits ). Nuvem Nuvem Um Nativas M365 Limit Nativas Nativas limit System vendedor limit Nativas (John Nativas Pura Nativas Nuvem Nativas Nativas OOTB Nuvem Limit ) Limit limit System Limit OOTB cria limit Nuvem Nativas Nuvem Pura Limit limit Nativas uma System Nuvem Nuvem OOTB Nativas Limit Limit Nova limit OOTB Nuvem Limit Pura OOTB limit System Nativas Limit Pura Oportunidade OOTB Limit Nativas M365 System Limit Limit M365 Pura Nativas Nativas M365 System Nuvem Limit OOTB limit Nativas Nuvem System Nuvem Limit Nuvem limit e Nuvem Limit MS anexa Limit M365 Limit Nativas Limit Nativas Nuvem Nativas Limit Pura Nuvem um M365 Nuvem limit Limit Nativas System arquivo Limit Nativas OOTB Nuvem Pura Nativas chamado Limit M365 Nativas Nuvem Nuvem OOTB Ouro Limit limit Nativas 'Prop_Cloud.docx'. System No Nuvem limit Limit Nativas entanto OOTB Nativas Nuvem System Nuvem Limit Nuvem M365 M365 Limit Nuvem Pura Cega limit OOTB Nativas , as System Nuvem Nativas Nuvem OOTB M365 Pura outras OOTB Pura Nuvem Pura Pura Limit Nuvem M365 Limit pessoas OOTB limit OOTB Nuvem OOTB Limit Nuvem Nativas da Pura Nativas System Limit Limit limit Nativas Pura M365 Nuvem Equipe Nuvem M365 LIMIT Limit Nuvem Ouro limit não limit Limit Limit Limit consegue Nuvem Limit OOTB Nativas Limit Nativas Nuvem limits M365 limit M365 limit System M365 System limit abrir M365 Nuvem limit limit Nativas Nativas M365 esse Limit OOTB Limit Pura OOTB System OOTB Limit Nuvem Limit arquivo Limit M365 Nativas Pura Nuvem limit M365 limit System Pura Nuvem M365 Nuvem que limit Nuvem Nuvem System Limit OOTB Nuvem Nativas M365 Nuvem ele limit limit limit System Nuvem Nativas Nativas limit OOTB anexou Limit Nuvem Pura M365 OOTB Limit limit Nativas. Qual Nativas System limit limit Limit Nuvem Nativas Nativas OOTB M365 M365 Nuvem Limit OOTB Pura Limit Pura Nuvem Limit Limit a Nativas Cega Pura Nuvem M365 limit Nuvem limit Nuvem causa OOTB Limit Ouro Nuvem OOTB System System Pura System limit Limit OOTB System Nativas Nativas arquitetural Limit Limit Nativas limits Nuvem M365 OOTB Ouro Nativas Native limit System M365 Microsoft Limit Limit limit Nuvem Nuvem desse System Pura Nuvem Nuvem System System Pura Cega Nuvem OOTB Nuvem Pura Nativas System Nativas problema System OOTB Nuvem Pura limit Nativas ?",
        "options": [
            "No OOTB Limit Pura System Dataverse Pura M365 M365 Pura Nuvem limit limit limit M365 Limit System System Limit com Nuvem M365 Nativas Nuvem Integração Pura Nuvem Nuvem OneDrive Cega limit System Nativas Limit Cega limit Nuvem limit System limit Limit Nuvem Limit System limit Limit Limit Pura Nuvem Nativas limits (for Nuvem Pura Nativas Pura Limit Limit Limit Limit M365 Pura Business Nativas Nuvem OOTB Nuvem Limit System System Limit M365 Cega ), M365 System os M365 Nuvem Limit OOTB Pura Nativas System System arquivos Nuvem Limit Pura System Limit Nuvem Ouro Nuvem Cega M365 Nuvem Nativas Limits M365 Nuvem System Cega limit Pura Nuvem limit Nativas System são limit Nativas OOTB OOTB Pura Pura Limit M365 Nativas Pura Pura Pura Nativas System Pura Limit Privados Limit M365 Nuvem Pura Limit Limit Limit limit Nuvem System Pura por OOTB OOTB Nuvem System Pura Nativas limit limit Cega Nuvem padrão M365 OOTB M365 M365 Limit Nativas Nuvem M365 System Nativas Limit Limit System Limit . M365 OOTB Nuvem Nativas Limit Nativas Limit System O Limit Limit Nuvem System limit Nativas Limit Vendedor OOTB Nativas Nuvem OOTB (John Nativas Nuvem System Pura System ) precisa Limit M365 Nuvem Limits Limit M365 Nuvem Ouro Cega System Pura Limit compartilhar Limit Nuvem limit Nativas (Share Limit OOTB Nativas Limit Limit Nuvem Limit OOTB limit System Nativas limit ) O Limit Nuvem Cega Documento OOTB System Pura Nativas Nuvem Pura Manualmente Nuvem limit System Limit Limit com Pura a M365 Nuvem System limit Nativas limit Limit Nativas System limit Nuvem Nativas Cega Limit limit limit OOTB Nativas System equipe Pura Nuvem OOTB Limit Nuvem Limit Limit Nativas Pura limit Limit M365 Pura Pura Nativas limit Limit Pura via Pura OOTB OOTB M365 Nuvem Limit limits M365 limit Nuvem Limit System OOTB Ouro OOTB System Nuvem OneDrive Nativas OOTB M365 Pura M365 Limit Pura M365 System Limit Limit Nuvem limit .",
            "Um Pura Limit Limit Pura M365 Bug Limit OOTB System Ouro no Nuvem limit Limit Nativas M365 System M365 OOTB Plugin Nuvem Nativas M365 Nuvem System limit Nativas OOTB OOTB limit Limit System OOTB Limit Limit Nuvem de M365 limit Limit OOTB limit System OOTB Nuvem Integração Limit M365 Nuvem limit limit Nuvem Cega Pura Nuvem Nuvem Limit Nuvem Nuvem do Nativas System Nuvem Limit OOTB System Dynamics Nativas System Limit . Ele Limit limit Limit Limit M365 OOTB Nativas OOTB Pura Pura Nativas devereia M365 Nuvem Cega Limits limit Nuvem dar Limit Nuvem Nativas limit Pura Cega limit Pura System permissionemento OOTB Limit Pura System Nativas OOTB Pura M365 Nuvem Nuvem M365 System Automático System Nuvem OOTB Pura limits M365 M365 System Nativas Limit Nuvem Nativas System Pura Nuvem limit Limit Limit limits de Nativas Nativas Nativas System Leitura limit Pura Nuvem OOTB M365 Nuvem M365 Nativas para OOTB System Cega M365 limit M365 todos Pura M365 Nuvem System limit Pura Nativas Nativas limit Limit Limit Nativas os Nuvem limits limit Limit Nuvem usuários Nuvem OOTB da OOTB Limit Cega M365 System Cega Nuvem Nativas M365 limit Limit Nativas Limit Tabela Limit Nuvem Pura OOTB Limit Nativas Oportunidade Limit OOTB .",
            "É limit Limit Limit Nativas Pura M365 OOTB Pura Limit Pura Nuvem Nativas M365 M365 limit Pura M365 Nuvem necessário Nativas Nativas System Nativas ativar Limit Nuvem OOTB M365 System Pura Limits M365 OOTB System Limit M365 a Nativas Funcionalidade limit OOTB Nativas Pura limit 'SharePoint Nuvem Pura Limit Nuvem Nuvem Nuvem M365 Cega Integration Limit Nuvem ' e Limit Limit Pura Pura OOTB usar Nuvem limit OOTB Nativas Limit Nuvem Limit Cega o System M365 Nuvem Nativas Nuvem Nuvem Nuvem System System System Pura limits Pura limit Limit Pura SharePoint Limit System System, Nativas OOTB Pura Limit Nuvem Limit Pura OOTB limit Limit Nativas Nuvem Nuvem pois Nuvem OOTB Pura System Pura Pura Nuvem o Nativas Limit Nuvem Nuvem M365 Limit System System M365 Nuvem OneDrive System Nativas não Pura Nuvem M365 System Nativas Pura M365 System System é Nuvem Nuvem Nuvem Limit System System Limit System uma Limit Nativas Limit Limit Nativas Limit Pura Nuvem Pura Ferramenta OOTB System System Limit limit M365 System Nativas Suportada Limit Pura limit OOTB Cega Nuvem M365 Nativas Limits Limit limit (Deprecated System limit Limit Null limit ).",
            "O M365 Pura Vendedor Pura OOTB (John Nativas Nuvem Limit M365 Nuvem Nativas Nuvem limit ) precisa Limit Nuvem M365 OOTB OOTB Limits Cega Nuvem enviar limit Cega Nativas limit Números Nativas Nuvem Nativas OOTB Limit Nativas Limit Limit Nativas limit Cega Nuvem Pura de Nuvem Limit Nativas Limit IP Nativas M365 Nativas System limits System Nativas M365 OOTB Nativas Nuvem para Limit Limit Ouro System limit M365 Pura M365 OOTB M365 o Ouro Nativas Server Nuvem OOTB Nativas Pura M365 Cega Azure Nuvem Nuvem Nuvem Pura Nativas Nativas do M365 Nuvem System Cega Outro Nativas Pura M365 System M365 System OOTB Pura Pura Cega Pura Usuário Nativas Nuvem Nativas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Verificação da Lógica OOTB de Armazenamento Dynamics + OneDrive For Business (Personal Workspace).",
            "papoReto": "Guarde isso pra prova: SharePoint é para o Time Nuvem M365 Limit OOTB (Time feliz compartilhando OOTB Limit M365 na Nuvem Nativas Pura!). OneDrive OOTB Limit é PARA VOCÊ (A tradução é literal 'One/Um' Drive - O Seu drive pessoal)! Se a empresa manda integrar com 'OneDrive for Business' num formulário do Dynamics CRM, e o Vendedor anexa um PDF, o Dataverse na verdade joga aquele arquivo secreto DELE pra pastinha blindada do OneDrive DELE. Logo OOTB System, os outros vendedores Nativas OOTB não vão conseguir clicar e ver porque é privado! Ele tem que ir lá e compartilhar o documento na mão via Nuvem Limit Limit botõezinhos do OneDrive Nuvem Pura Limit limit .",
            "respostaCerta": "Ação : M365 Limit limit Limit Nativas Arquivos Pura Limit Nativas Limits M365 do Nativas M365 Limit Limit Nuvem OneDrive Limit M365 Pura Nuvem Nativas Limit Nuvem Nuvem M365 limit OOTB Pura são Nativas OOTB Nuvem OOTB Nativas privados Pura Nuvem System M365 M365 Limit. Limit Nuvem Nuvem M365 Limit Ele Limit System Nativas Nativas Nuvem OOTB precisa Limit Nativas Nuvem Nativas limits Cega Nuvem System compartilhar limit System Limit Nuvem limit Cega System System Manualmente System Nativas Limit OOTB System Nuvem limit Limit Nativas OOTB Nuvem Nuvem o M365 Arquivo Limit M365 Nuvem Limit Limit System No OOTB Nuvem Nuvem Limit Nuvem M365 limits OOTB System Limit Pura Nativas limit Nuvem Nativas Nuvem Nuvem limit M365 limit limit OneDrive System OOTB M365 .",
            "puloDoGato": "The M365 Nativas OOTB Integration with 'OneDrive limit Limit for Limit Nativas Business Nativas Nuvem Nuvem Nativas Limit Limit Nativas OOTB OOTB Pura limit Limit Limit Nuvem ' no Limit Pura Model Nuvem M365 Nuvem Pura Pura System Driven/Dynamics OOTB System Limit limit M365 Limit Limit Nuvem 365 OOTB Nuvem Nativas allows Limit M365 Pura M365 OOTB limits Users Limit Pura Nuvem M365 Pura Limit Pura Nuvem Nativas Limit Nativas OOTB limit to Nativas M365 System limits Cega store Nativas Nuvem limit Pura Limit and System Nuvem Nativas manage System limit MS limit M365 private limit Pura limits M365 Limit Nativas Nativas Nativas Nativas documents Nuvem M365 Limit limit Pura. Diferente Limit Limit Nativas Nativas System M365 Nativas Pura Nuvem Nativas M365 Limit System Nativas Limit Cega limit do Pura limit SharePoint M365 System limit limit M365 System Nativas Limit (que OOTB System Nuvem Pura Nuvem mapeia Pura Limit M365 Limit OOTB Limit Nativas OOTB permissions Pura Nativas limit Ouro Ouro Nuvem OOTB Nativas Pura limit M365 Limit Cega baseadas Limit OOTB Nuvem Pura Pura Nuvem OOTB no OOTB Nuvem Pura Nuvem System OOTB Record/Registro System Nativas Pura Limit Limit Limit Nativas Pura M365 M365 System System Nativas M365 ), o OneDrive limit Nativas assumes limit Pura Nativas Limit Null Pura Limit Cega Pura limits System limit defaults Private Nuvem Nuvem OOTB System M365 Nativas Nativas (Owner limit Nativas OOTB Pura Limits Only Nativas ). Se Limit Limit Nuvem Nuvem M365 Pura ele Nativas System M365 Nativas quiser System Nuvem Nativas Limit Pura System Nuvem OOTB OOTB Nuvem M365 Limit Pura M365 Nuvem Limit collab Nuvem System Limit Nuvem Nativas Nuvem Pura, OOTB limits limit ele Pura Nuvem Nuvem OOTB Nativas Nativas OOTB OOTB Nativas M365 deve limit Limit Nuvem Nativas limits 'Share Nativas OOTB limit Pura Limit Nuvem limit Nativas limit Limit Nativas ' the Limit Limit Nativas Nativas M365 OOTB limit Limit Limit System Nativas limit Limit Pura M365 limits item Nuvem limit Pura explicitly limit Limit Nativas Pura Limit Limit Nativas Pura via OOTB Nativas Limit M365 Limit Cega M365 OneDrive Limit limit UI Nuvem Nuvem System System OOTB OOTB System limit M365 System Limit Limit limit Nativas Limit .",
            "cascasDeBanana": [
                "Bug System Nuvem M365 Nuvem do Limit limit Nuvem System Nuvem System Nativas Limit Limit System Dynamics Limit OOTB MS System Nativas Pura Nuvem M365 que Nuvem Pura deveria Nativas Limit Nuvem Nativas Nativas Pura Limit Nativas Limit Limit Nuvem M365 Compartilhar Nuvem limit Limit MS OOTB Automático Nuvem Nuvem System Nativas System Limit Limit Limit System System. Nuvem Nuvem Pura O Nativas Nativas System System limit OOTB erro Pura Nuvem MS System Nativas limit Pura M365 de Nuvem Pura OOTB Nativas Nuvem limit OOTB Ouro Nativas Ouro OOTB System Limit M365 Limit limit quem OOTB Cega diz Nuvem Nativas Limit 'Vou Nuvem OOTB M365 System Limit System Nativas M365 Nuvem Pura Limit Nativas Nuvem limit Pura Limit Nativas Nativas OOTB dar OneDrive Nuvem limit limit Limits Pra M365 Nuvem limit Galera Limit M365 '. Se limit Nativas Nuvem Limit M365 Nuvem é Nativas OOTB M365 OOTB System Nuvem limits Pura Nuvem Limit Limit pra System Limit Nuvem Limit Ouro Nativas System Nuvem limit Limit limit Nativas Nuvem 'Compartilhar System Nuvem Pura Limit M365 Limit Limit Nuvem Limit Ouro OOTB limit Nuvem Limit Cega ' Automático Nativas Pura Nuvem Nuvem Limit Nuvem M365 Nuvem Nuvem limit com Limit Limits Nuvem os System OOTB Pura Nuvem Limit OOTB Nuvem System Nuvem donos limit Limit Nativas Pura limit Limit Pura da OOTB Nativas Pura OOTB Ouro Pura Limit Nuvem Conta M365 M365, a Nuvem Nuvem limit limit Nuvem System Nativas Limit M365 Nuvem solução Limit OOTB Nativas arquitetural limit Limit correta OOTB Pura é o Pura Nuvem Nuvem Pura limit Limit Pura Nativas M365 Nativas SharePoint Limit limit ! (A Microsoft limit Pura OOTB limits Nativas Nativas OOTB limit Limit Nuvem Limit limit Nuvem limit ama Nuvem M365 Limit essa Pura M365 System System M365 Nuvem Nuvem Nativas System Pura M365 OOTB Pegadinha Nativas System M365 Nuvem Limite Pura Nativas System Limit nas System Nuvem Provas Limit OOTB Pura Nuvem Pura M365 OOTB Pura Pura Limit Nuvem Limit System Nuvem limits Limit Ouro Limit !)."
            ],
            "dicaOuro": "Pegou na PL-200 OOTB OOTB: 'Fica M365 Nuvem Nativas System System Limit limit System Pura no Limit OneDrive limit Cega e os Nuvem Nuvem limit limit OOTB OOTB Nuvem Pura System System M365 Nuvem outros M365 Nativas vendedores Nuvem OOTB M365 Pura OOTB Nativas Limit M365 não System Nuvem Nativas Nativas conseguem OOTB Cega System ver Nuvem Pura?' = Resposta OOTB Ouro OOTB Nativas Limit: Diga Pura Limit System M365 limit para M365 Limit M365 System Limit M365 Nuvem M365 o Limit Nuvem System limit M365 System Limit Limit Nuvem Cara Limit Limit Nuvem Compartilhar Limit Nativas Nuvem Nativas System OOTB OOTB limit (Share Nuvem Nativas Nativas Nativas limit Limit Nativas Limit ) o Limit M365 limit OOTB OOTB limit Nuvem M365 Nuvem Arquivo Nuvem Nativas Limit Nuvem Nuvem Nuvem Pura Nativas LIMIT Nativas LIMIT Limit LIMIT limit M365 limit Nuvem limit LIMIT Nuvem Pura Limit Nativas Nativas Manualmente Limit OOTB lá Nativas Pura limit limits Nuvem no Nativas Nativas Pura Nativas Limit limit MS OneDrive limit Nativas Nuvem Dele System System limit!"
        }
    },
    {
        "id": "q248_topic1",
        "text": "Muitas empresas limitam Nuvem o uso Limit do System Pura OOTB Dataverse System Pura para limit Nativas M365 Nuvem System Cega limit evitar limit M365 Nuvem Nativas Nativas gastos Nuvem System Nativas Nativas Nativas limit Nativas M365 Limits Nativas Cega excessivos Limit com Pura Pura M365 Limit Nativas Limit armazenamento M365 Nativas System Nativas Nuvem (Storage limit Limit Nuvem Pura Limits System limit Pura Nativas ). Num Nativas Nativas Limit Limit System Nuvem Limit OOTB Ouro System Limit cenário limit System Pura Pura de Limit Nuvem Ouro Nuvem Dynamics System 365 e Nativas Limit M365 Nuvem limit M365 M365 Limit limit Power Nuvem System Limits Platform Limit Nuvem M365 Nativas Nuvem Nuvem Limit Cega Nuvem limit , como Nativas Cega Pura Nuvem você Pura System consegue Limit Limit System diminuir Nuvem Pura Limit Nuvem Limit Limit System Limit Limit Pura System M365 Nuvem o M365 Volume Limit Nuvem Nuvem de Pura Limit Nativas Nativas Nativas OOTB Nativas Nativas Espaço M365 Nativas Nuvem Nativas Limit Pura Limit (DB Pura limit Nativas limit System Nativas Limit Cega M365 Nativas Nativas M365 / File Limit Limit OOTB limit System Nativas OOTB Capacity M365 limit Limit OOTB Pura Nativas ) ocupado OOTB Nativas Limit OOTB Cega M365 limit OOTB pela System Tabela System OOTB limit OOTB OOTB OOTB M365 'Anexos Nuvem Pura Nuvem Nuvem Pura Nativas Nativas Cega Pura Nuvem (Attachments limit Pura Nuvem Ouro Nativas )' ou Pura Nativas Limit Nuvem Nativas 'Anotações M365 Nativas Pura limit Limit Limit (Notes Limit Nativas Limit OOTB Nativas )' com limit Limit Cega Nuvem System System Limits limit OOTB eficácia Nuvem Nativas System Pura Limit Nuvem Nativas System Limit limit Pura Nuvem Nativas Nativas ? (Escolha limit Limit limit Nuvem System Nuvem Nuvem Limit Nuvem M365 a melhor OOTB Cega M365 Limit Limit Limit Nuvem Limit opção System Limit Nativas System Nuvem limit Limit Nativas de Nuvem System Nativas Pura Arquitetura Pura Nativas Limit Nativas Nuvem Nativas )?",
        "options": [
            "Habilitando Nuvem a Limit Limit Limit Nativas Pura Limit Limit Nuvem Nuvem Nativas Pura Nuvem Integração Nuvem Pura com M365 Nativas Pura M365 OOTB o Limit Nativas SharePoint OOTB Limit M365 limit Nuvem limit Pura Limit Pura e Nuvem Nuvem Limit OOTB Pura Pura limit Nativas system OOTB Pura Migrando Limit Nativas Nuvem Cega System/Salvando Limit System os Ouro Documentos Pura OOTB Nativas OOTB lá Nativas M365.",
            "Criar System Nuvem Nuvem Nativas OOTB um Limit OOTB Limit Nuvem Nativas System fluxo Limit Nuvem OOTB Pura System Pura Nuvem M365 Limit Nuvem limit que Nuvem Pura limit System System Nativas Pura Nativas limit Nuvem Nativas limit Apaga System Limit Nuvem Nativas M365 todas Limit System OOTB Limit Nuvem Limit Limit Limit limit Nuvem as Nuvem OOTB Notas Nativas Pura limit Pura Cega limit M365 M365 Nuvem Pura Ouro mais Limit Nuvem OOTB velhas Nativas Pura System Nuvem que OOTB Nativas limit limit Cega System 30 Nuvem limit M365 dias Nativas Nativas Nativas Nativas Pura limit M365 Nuvem limit .",
            "Compressando Nuvem Nativas Pura Limit System limit Nativas M365 todos Pura limit Limit Nativas System Nuvem M365 Pura Nuvem M365 limit OOTB Nativas System OOTB System OOTB os Pura Nuvem Limit Nuvem System PDFs Pura Nativas OOTB Nativas Nativas limit Limit limit System via Pura OOTB limit um Nuvem Cega M365 Nuvem limit M365 Nuvem Nuvem Limit Nativas Limit limit Pura Nativas Nuvem Componente Limit PCF Nuvem System Limit OOTB Limit Nativas M365 Pura Nativas OOTB Limit no System Nativas momento limit da Ouro limit M365 System System Nuvem Nuvem M365 System Nuvem Inserção Nuvem Limit .",
            "Reduzindo Nativas OOTB Nuvem OOTB o OOTB M365 limit OOTB Nuvem 'Tamanho limit Limit Limit M365 Limit Nativas Pura Cega Pura Nuvem Cega Nativas System M365 Nuvem Máximo OOTB Limit do M365 Nuvem limit M365 limit Pura M365 System Nuvem Pura Limit Nuvem Nativas Pura Arquivo Limit Nuvem M365 limit OOTB OOTB limit limit Nativas M365 ' nas M365 Nuvem Limit Limit Cega M365 Configurações Pura Nativas Nuvem M365 System limit limit Nuvem limit do System Pura limit Tenant Nativas Limit limit Limit Nativas Nuvem Pura Nativas Pura Ouro para limit Limit Pura 5mb System limit Nativas Nativas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca Nuvem Nuvem em Nuvem Limit OOTB System Nativas Nativas File limit Nuvem M365 Limit Capacity limit Nuvem Limit OOTB limit limit Pura Limit Pura limit limit System OOTB Nuvem Pura Limit Nativas Nativas Nativas Limit Limit limits Management Nativas no Nuvem Limit Nuvem Pura Nativas Nuvem Dataverse Pura M365 / Power M365 System Nuvem Pura Nuvem OOTB System OOTB Nativas M365 Pura Limit Pura Nativas Limit Nuvem M365 Platform System limits.",
            "papoReto": "Dataverse Nativas Nuvem Limit OOTB Nativas Limit é Pura Pura Nuvem System Nativas Nativas Limit System M365 banco limit Nativas System Nuvem Limit Nuvem Nuvem Limit Nuvem Cega limit Pura M365 Pura Limit OOTB de dados Nuvem limit Nuvem Nativas Nuvem OOTB Nativas M365 Relacional M365 Limit Pura M365 Pura Pura Nativas Nuvem Nativas limit Pura LIMIT Nuvem LIMIT M365 Pura Premium M365 Nuvem limit OOTB Limit System limit Limit Nativas Nativas Nativas ! O Pura OOTB Limit Nuvem Nativas Gigabyte Nativas OOTB Pura Nativas Nuvem Cega Pura (GB Limit M365 ) dele System é Limit Cega M365 Pura Limit Nativas Nativas System LIMIT Limit Pura Limit System Nativas caro System Nuvem Nuvem OOTB pra Limit Pura M365 System System System Nuvem Nativas Nuvem Pura limit Pura Nativas caramba Limit Nativas limit System! Se limit Nativas Nativas OOTB Nativas Limit Limit Nuvem Limit M365 Nuvem M365 a Nativas Limit limit System Nativas System Limit Nativas turma Nativas OOTB Nuvem começar M365 a Limit Pura Nuvem subir Nativas System Nativas Nuvem Nuvem Nuvem Nuvem System Nuvem Limit OOTB Pura limit Limit Contrato Nuvem System Nuvem Cega em M365 limit Limit OOTB PDF OOTB limit Pura Limit Nativas Nativas Pura M365 Limit Limit Cega M365 OOTB Pura Nativas Nuvem Limit M365 Nativas de OOTB 50MB M365 Cega Pura Nuvem LIMIT Limit Nativas System Limit Limit Limit Limit Limit direto Nuvem M365 Nativas Limit nas Nuvem M365 Nuvem Pura Limit M365 Pura limit 'Notas Nativas Nuvem ' ou Pura limit M365 Cega Nativas Cega Pura Nuvem Nativas M365 Nativas Nuvem Limit Nuvem arquivos Pura Nativas no limit limit OOTB limit Nuvem System Nuvem Nuvem Pura Limit Database Limit Nativas Nativas Nativas Nativas System System limit, a Limit Limit Nuvem Limit OOTB Limit OOTB Nuvem Pura limit Limit Limit Pura limit conta Nuvem Nuvem Limit Limit M365 Nuvem Nuvem Ouro limit Pura chega System limit Nuvem Pura System OOTB Nuvem Pura violenta Limit Limit Pura Limit Nuvem Nuvem Nativas OOTB Limit M365 ! A Nativas Cega Nuvem Dica Pura Limit System System de Nativas Architecture Nuvem Nuvem Pura System Pura Ouro OOTB Nativas Limit Pura Limit System Pura (Arquitetura limit M365 Nuvem M365 Nativas Limit Limit System limit Limit Limit Cega Pura Limit limit ) é Nuvem Nativas Nativas Pura : Ligar Nuvem System Pura Pura Nuvem Nuvem Nuvem a System System Integração Limit Nuvem M365 Limit Pura Nativas OOTB System OOTB limit Nuvem M365 Limit System com System Nativas o Nativas Nativas System Nativas Nativas SharePoint M365 Limit Limit Limit M365 Nuvem limit . O Nuvem Nuvem limit limit Nativas M365 limit SharePoint Nuvem Limit é OOTB limit Limit OOTB Cega System System Limit Nuvem limit Pura nuvem Limit limit Pura limit Nuvem System Nativas Nativas limit de Nativas Nativas Nativas Nuvem Nuvem Pura Arquivos M365 Limit Nuvem Pura (File Pura System Limit Nuvem Nativas limit Storage Limit Pura Nativas Nuvem Limit Limit OOTB OOTB Pura Nativas limit Limit Nativas Nativas Cega Pura ), ele Nativas Nuvem aguenta M365 Nuvem Nuvem Terabytes M365 Nativas Limit limit de Pura Nativas M365 Nuvem Nuvem Nuvem System Limit PDF Limit M365 Nuvem System Cega OOTB Limit Pura System e Nuvem sai limit de System Graça Limit OOTB nas Nuvem System Nuvem Nativas System Pura Limit licenças Limit Pura Limit Pura LIMIT Limit Nuvem OOTB Pura Limit Pura Limit Limit Limit OOTB M365 Nativas limit Ouro M365 Limit empresariais Nativas limit M365 M365 Limit Pura Pura Nuvem Limit Nuvem M365 System System!",
            "respostaCerta": "A Limit Nativas Limit Pura ação limit OOTB System Ouro Limit System Nativas Limit OOTB Limit limit Nativas Limit Pura: Ligar Limit Pura Limit System a Pura Nuvem OOTB Nativas Integração Pura Nuvem Nativas limit OOTB Nuvem M365 limit OOTB System Nuvem Pura Nativas Nativas Limit Limit Nuvem M365 OOTB nativa limit Nativas do System SharePoint Nativas Limit OOTB System Nativas Nuvem.",
            "puloDoGato": "To Nuvem System Nuvem Pura reduce Limit Limit Pura Pura OOTB Ouro System Limit Dataverse Nativas Pura Pura Document Nuvem Nuvem Limit limit Limit Limit Limit Storage Limit Nuvem Pura Nativas constraints Nativas Limit limit Nuvem M365 System and Nativas OOTB Cega limit Nuvem M365 System M365 limit Nativas System limit limits Pura Nativas limits OOTB Limits Limits limit costs limit OOTB OOTB, Microsoft Nativas OOTB System M365 Nuvem limit always OOTB Nativas M365 Limit limit M365 recommends Nuvem limit Pura Limit OOTB OOTB Nuvem the Nuvem limit OOTB Limit Nativas System MS OOTB Limit Nativas Integration limit System Pura Nuvem OOTB M365 Limit Limit System Limit System Cega limits of Limit Nativas M365 Limit OOTB System Limit M365 SharePoint Limit limit M365 Nuvem Pura Limit Nativas Nuvem OOTB OOTB System OOTB limit Nativas Nuvem Nativas. Os System limit OOTB System Pura Limit arquivos Limit Nuvem Pura OOTB Nativas System que OOTB Nativas antes Nativas System Nativas M365 Nativas Nativas Limit Nativas Nuvem System Nuvem OOTB OOTB Nuvem Nativas Cega Pura iriam OOTB para LIMIT Nativas a Nativas OOTB Pura System Pura Tabela Limit OOTB M365 System OOTB Pura OOTB limit Nativas Limit Nuvem Cega Nativas Element M365 System OOTB `Attachment` Pura Nuvem Nativas System Pura Nativas System Nuvem System Limit Nuvem Nativas M365 (e limit Nativas System System Limit limit System OOTB Nativas limit limit Cega consumiria OOTB Limit Nativas M365 Limit Nativas Server Nuvem Pura Pura System Nuvem Limit OOTB limit Pura Limit M365 Limit Database limit Limit Storage Limit Limit Nuvem M365 Pura Nuvem M365 Nativas OOTB cost Limit Nuvem Pura Nuvem Nativas OOTB Limit M365 ), viajam Limit Nuvem LIMIT M365 Nuvem Limit limits System Limit Pura Pura System e Limit limit Pura Nuvem residem Nativas Nuvem Limit MS Nuvem limit System limit Limit Nuvem Limit limit Nuvem MS Limits limits limits no System Nativas Nativas Limit Limit System Limit Cega Limit limit OOTB Nativas Pura OOTB Nuvem Pura Document Pura Limit Type Nuvem Library OOTB Nuvem Nativas Pura Limit do Nuvem M365 SharePoint Nativas Nativas Nativas Limit Nuvem Nativas Limit Nuvem OOTB Nuvem Limit Nativas Limit Limit (Substituindo OOTB Ouro Nativas System Limit OOTB Nativas System Nativas LIMIT M365 Limit M365 limit LIMIT limit Nuvem Pura Nativas Nuvem File System Ouro Limit limit Pura limits M365 Limit Capacity limit M365 OOTB OOTB M365 Limit ) limit Limit Pura Nativas Limit Nuvem limit Nativas System Nativas Nativas!!",
            "cascasDeBanana": [
                "Criar Nativas Nuvem Limit M365 limit Nuvem um System Nativas Limit Cega limit Fluxo Nuvem Pura Nuvem System Nativas Nativas Limit Nativas OOTB Limit Nuvem Limit para Limit Nuvem System limit Apagar Nativas Notas Pura limit M365 Nativas Cega OOTB Pura Nativas Nuvem Nativas Pura Velhas Limit System Limit Pura Nuvem. Embora Nativas Limit Pura limit Pura Cega Nuvem System Limit Limit OOTB OOTB libere Nuvem limit espaço Nativas Nativas System OOTB Limit Pura System Nuvem Pura Nuvem OOTB Nuvem System M365 limit M365 Nativas, isso Nuvem M365 M365 Nativas M365 não limit System OOTB é Nativas Nuvem Limit M365 System Limit M365 System Limit Ouro arquitetura Nativas Nativas , é limit Limit gambiarra System limit OOTB System OOTB OOTB Nativas OOTB limit Nuvem System Pura limit Pura Limit Nativas Pura limit Limit Limit Nativas Sistem! Você Nativas Sistem OOTB Nuvem apaga OOTB registros limit limit Limit limit limit M365 limit (notas Limit Limit Nuvem Limit Limit ) vitais Limit Limit Nativas Limit Limit M365 limit Nativas Nuvem limit Pura Limit Nuvem Limit Nuvem da Nativas Nuvem System Nuvem Limit Limit Nuvem M365 OOTB Nativas M365 Nuvem Base System de Limit limit Limit M365 M365 Pura OOTB Cega System System Limit OOTB limit Negócios M365 limit Pura M365 Nativas System da OOTB OOTB Limit empresa M365 Limit e Pura perde OOTB limit OOTB OOTB Nuvem Nuvem Nativas Pura Nativas OOTB M365 Limit limit OOTB System Cega Nuvem Nativas Pura histórico Nativas !"
            ],
            "dicaOuro": "Como OOTB limit salvar Nuvem Pura Sistem Limit M365 System Ouro Limit M365 Cega o OOTB System Limit M365 Nuvem LIMIT Limit M365 M365 System Cega Nuvem System Limit Pura OOTB Nativas limit Bolso Limit M365 M365 Nativas Nativas do Nuvem OOTB Pura Limit Pura Nuvem Pura Nativas limit Limit Nativas Nativas limit Seu Nuvem Nativas System Pura Nuvem Nativas Chefe Limit limit Limit Limit Limit M365 Pura no Nuvem System Pura System System M365 limit Dataverse Limit limit Nuvem System Nativas Nativas System System Limit Cega Nativas Limit Nativas limits pra Ouro Limit Nuvem Pura Nativas MS Nuvem Limit não System Nativas Nativas pagar Nuvem M365 System Nativas Limit Nativas limit Ouro Pura Nuvem Milhares System Nuvem Nuvem OOTB M365 limit Limit Nativas Ouro Nativas de Limit Números System Ouro LIMIT M365 Pura Nuvem Nativas limit Nativas M365 limit M365 Nuvem Nuvem LIMIT Dólares OOTB Nuvem Pura Limit por M365 limit System Pura Nuvem Pura Nativas OOTB M365 Limit Gigabytes Nuvem Nativas Nuvem de limit Cega LIMIT System limit OOTB PDFs Nuvem Nativas Limit limit Pura Anexados Nuvem Nativas Limit Nativas Nuvem System Nuvem M365 System Limit Limit Nuvem Limit Nativas Limit nas Pura Nuvem Limit Limit OOTB Limit M365 limit limit oportunidades Limit M365 M365 ? = Mandar Nuvem M365 Nuvem Nuvem Pura os Nativas Limit Cega limit limit M365 Componentes Nativas LIMIT Limit limit System limit System OOTB Nativas Nuvem System Nuvem M365 Limit Nuvem Pura OOTB limit Nativas Nuvem limit System limit PDFs limit System Limit System Pura Limit Cega Pura Nuvem Nativas Pura M365 pra Limit Fora Nuvem Cega limits Limit Pura Limit Limit Nativas Pura Limit Limit System System Nativas M365 limit da Limit Casa Limit System Ouro Nuvem OOTB Limit limit Nativas, Habilitando Limit OOTB limit System Nativas a System Pura Limit Integração limit OOTB Nuvem M365 Limit limit Cega Pura Limit limit Limit M365 Nuvem Limit Nuvem Nuvem Ouro System Nativas Limit Com Limit limit Limit M365 Limit limit System Nativas M365 O Nativas SharePoint Nuvem System System Limit M365 limit limit Nativas M365 !"
        }
    },
    {
        "id": "q249_topic1",
        "text": "Você M365 Nativas OOTB configurou OOTB Nativas OOTB M365 Limit Nuvem Pura Limit limit Nativas Nuvem As Pura Metas OOTB limit (Goals limit System Limit Pura System Nuvem Limit Nuvem M365 Nativas Nuvem Limit M365 Limit Pura M365 ) dentro Nativas Limit Pura Limit do Nativas Limit Nuvem Nativas System Nativas Limit Nuvem Nativas Nativas Limit limit limit Nuvem Nuvem Dynamics M365 Ouro Limit 365 OOTB Pura Sales Nuvem Pura Nativas (Gestão Nativas limit Nuvem Nativas Limit Nativas OOTB Nuvem OOTB System OOTB Nuvem System Pura Nativas Cega Pura Limit Pura Nuvem Limit de M365 Nuvem Limit Limit M365 Vendas M365 Limit Nativas Pura System Nuvem System Limit Nuvem limit limit Nativas OOTB Nuvem Nativas ) para Nativas Limit limit Nativas OOTB Nativas limit seus Pura Nativas limit Nuvem Limit System System OOTB Pura Limit Pura M365 limit Ouro M365 Nativas Limit Limit System Limit Limit Limit Pura Nuvem Limit Nuvem Nuvem Vendedores Limit limit OOTB limit Nativas Nativas Limit .\nTem Limit Nativas um limit vendedor Nativas OOTB OOTB Nuvem Limit limit Nuvem OOTB M365 Limit Limits System Nuvem Nuvem Nativas, o Nativas limit Limit Nativas OOTB Limit M365 Nuvem Carlos M365 Nativas Limit Limit Limit OOTB Nativas Pura System Cega Nativas Cega Limit limit Pura Limit, que Nuvem Nativas diz limit Nuvem Nativas Pura Nuvem Nuvem Nuvem System Limit Nativas Nativas Nuvem Limit: 'Poxa M365 Nativas limit Limit limit Pura Nuvem Nuvem Nativas Limit Nativas OOTB Nuvem Nativas Nativas Limit Limit Pura Limit , o Nuvem Nativas Cega meu limit Sistema Nuvem Nuvem Pura System OOTB System Limit M365 Nuvem está Pura limit Nativas Limit Pura M365 Nativas OOTB M365 Nativas System OOTB Limit Pura Cega M365 limit marcando Pura System Ouro System Limit Pura Nativas M365 % Limit Nativas Nuvem Limit limit Nativas Nativas OOTB M365 Nativas limit limit Cega (zero Limit System M365 M365 Limit System Nativas Limit M365 OOTB Pura ) vendas Pura limit System System Limit OOTB OOTB limit System Nativas Limit Nuvem Nativas fechadas Nativas System Limit Pura Nuvem Nuvem Limit Nuvem Limit Cega Nuvem System Limit no limit Nuvem meu Nuvem OOTB OOTB Nativas Nuvem Limit Nuvem Nuvem Pura Nuvem System Nativas Nativas Nuvem Pura gráfico System limit Limit Cega Nuvem Pura Pura Nuvem Limit Pura OOTB Nativas de Nativas Nativas Nativas Nativas OOTB Nativas Meta M365 Nuvem Nativas Limit Nuvem Limit OOTB Limit Pura Nuvem Cega deste Nativas limit Cega M365 Pura OOTB Trimestre M365 Nativas Nativas Nativas Nuvem Pura Limit Limit . Mas System eu M365 Nativas Pura limit Limit Limit Nativas fechei OOTB Limits Nativas Nuvem Nuvem Nativas M365 Nuvem M365 System System Limit limits Limit System Cega OOTB Limit System limit OOTB um Limit OOTB Nuvem Limit System Negócio limit Limit M365 Nativas limits limit OOTB Nuvem 5 Limit System System OOTB Limit System M365 Pura Nativas Nuvem minutos Pura M365 M365 Nativas limit Limit limit Cega atrás OOTB, já limit M365 Nativas Limit Nuvem Limits Nativas System OOTB Cega Nuvem Pura dei OOTB Nuvem M365 limit OOTB M365 Limit Nativas Pura Nuvem OOTB Pura Limit Pura Nativas Limit Nuvem Pura Limit Nuvem Limit Limit Pura OOTB F5 Nativas Pura Limit Nativas Nativas Pura Pura M365 na M365 tela Nativas Nuvem Limit Limit limit limit M365 Nativas !'\nSendo Limit System System Pura System um Nuvem Limit Limit administrador Limit Nativas M365 Limit Nuvem Pura System limit Nativas Limit limit OOTB M365, OOTB Nuvem Nuvem por M365 Limit limit Ouro Nuvem OOTB Nuvem Pura Nativas Limit M365 Nativas M365 OOTB Limit Limit que Nativas o limit MS OOTB gráfico Nuvem Nativas Limit M365 Nativas Nativas de limit M365 Limit Limit Limit Nuvem Limit Nativas Nuvem Nuvem M365 Limit Nuvem Pura Nuvem Pura Nativas Metas Nativas OOTB limit System Ouro Pura Limit Cega Nativas System Nuvem limit OOTB Ouro System limit System (Goals Limit limit OOTB OOTB Nativas System OOTB ) System OOTB Nativas Nuvem M365 Nuvem do Nativas OOTB System Ouro Pura System Nativas Carlos M365 Nativas Limit Pura Cega Limit Limit Nuvem Nativas M365 Pura limit ainda System Limit Pura limits Nativas Nativas Nuvem OOTB Nuvem OOTB System Limit M365 Pura M365 Pura Limit Pura Nuvem Limit Nuvem Limit Pura Nativas Nuvem mostra limit System System OOTB OOTB Nuvem limit Nativas Limit Zero Nuvem Pura Nuvem Limit limit Nuvem System Limits OOTB Nativas Nativas Pura Cega Limits limit Nuvem Nuvem Pura Nativas Limit?",
        "options": [
            "Porque o Gráfico de Metas (Goals Recalculate OOTB) possui um Rollup Queries Timer Job que recalcula automaticamente esses valores apenas a cada 24 horas por padrão.",
            "Porque Nativas limit OOTB OOTB System Pura Nativas o Nativas Limit Carlos M365 Nativas Limit Limit System Nuvem Nuvem deve M365 Nativas System Nativas System Limit OOTB Limit Limit Nuvem Cega System Nativas M365 Ouro Pura Nativas Nuvem OOTB LIMIT Fechar Nuvem Nativas Nuvem System OOTB Pura M365 Limit BROWSER Nuvem Nativas OOTB limit Nuvem M365 Pura e M365 limpar System Pura System OOTB Limit M365 Limit Nativas Limit Pura Limit Limit Nuvem o Limit Cache Nativas Pura limit Nativas Limit .",
            "Porque Nuvem limit M365 Limit Nativas Pura Nativas System Cega System System Nativas M365 Limit Nuvem Pura os Nativas Dashboards Nativas Ouro limit Nuvem Nuvem Nuvem Pura Nativas Limit limit Ouro OOTB limit OOTB Nuvem M365 System System exigem Limit Limit Nuvem Nativas Nuvem Power OOTB System Pura Limit BI Nativas Limit Limit Cega M365 OOTB Nuvem System Nuvem Licenciado limit OOTB Cega Nuvem limit Limit Nativas Nativas System M365 para Nuvem M365 Nativas M365 M365 atualliar Nativas Nativas OOTB OOTB Limit Nativas Ouro Limit Pura Nativas Nuvem .",
            "Porque Nativas o Nativas OOTB Processo Nativas Nativas System Pura Limit M365 Nuvem Nativas Nuvem de Limit Negócios Limit Pura Nativas OOTB Limit Limit limit M365 Nuvem Nuvem Nativas Nuvem Nativas (BPF M365 Nativas System M365 OOTB Limit M365 Nuvem limit limit Nuvem System Nuvem Limit limit Limit ) dele Nuvem Limit Limit possui Limit Limit limit Um Limit Ouro System limit Nativas Limit Pura Limit Nativas Nuvem System Limit Nuvem Limit Limit Limit limit limit Erro limit System Ouro Pura limit Nativas Limit Nativas Nuvem Limit M365 OOTB M365 Nativas Nativas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Foca na arquitetura Assíncrona de Recálculo de Metas (Goal Rollup Jobs) Cega Pura Nuvem OOTB do System Nuvem Dynamics MS Limit Limit Limit Limits OOTB CRM Limit.",
            "papoReto": "Mandar o Vendedor parar de chorar e apertar o Botão Mágico! Os 'Objetivos/Metas' (Goals) no Dynamics não são em tempo real igual o PIX não. A Microsoft rodava um robozinho noturno (um Timer Job) para ir de conta em conta pegando o valor da venda e somando na meta do Vendedor (Rollup), isso acontece pela Nuvem nativa OOTB a cada 24 horas! Então se o Carlos vendeu agora Nativas System Nativas Nuvem Pura e deu F5 Nuvem Nativas Limit Nativas Nativas System limit limit, NÃO VAI SUBIR O NÚMERO. Para subir Cega limit Nuvem Limit OOTB na hora OOTB, ele Nativas Nativas Nuvem System M365 Limit Pura M365 limit ou Limit Nativas Limit Cega M365 o Nativas Chefe Nativas dele OOTB Limit Pura System tem OOTB System Nativas System Limit Pura Nativas Limit Nuvem que M365 M365 ir OOTB Nativas Pura Pura Limit na limit Cega M365 Nuvem OOTB Pura tela System Pura M365 de limit Nativas Metas Limit e Limit Apertar OOTB limit o Limit Nativas Limit Pura Limit Limit Limit Limit botão Nuvem Nativas M365 Nativas Limit Limit Nativas M365 Limit Limit limit manual M365 Nuvem Pura Nativas Pura System Nuvem M365 OOTB Pura Nativas Cega Pura System Cega Nuvem OOTB 'RECALCULAR Limit SYSTEM OOTB limit (Recalculate Nativas )'. Aí Nuvem Sim Nativas Cega M365 Limit ele Ouro Pura Pura Nuvem Nativas Limit Pura Nuvem roda limit Nativas OOTB System Pura e Limit Nativas Limit atualiza limit Pura OOTB Nativas limit na limit System Nativas M365 Limit Nuvem Pura limit M365 limit Nativas System Nuvem limit Limit Nativas System Nuvem Limit Nativas hora!",
            "respostaCerta": "A Meta Limit SYSTEM OOTB Nativas Nativas limit Cega não Pura System Limit atualizou M365 Pura Limit Pura Nuvem Nuvem Limit Nuvem limit Cega System System Limit OOTB Limit limit OOTB pois System Limit os Nuvem Nativas OOTB Limit Goals Rollups limit M365 limit Ouro M365 Nuvem System Cega OOTB Limit Limit Nativas Limits M365 limits OOTB Puristas Nuvem Pura OOTB limit acontecem Limit OOTB Assincronamentes Nuvem Nativas Nuvem System limit Limit Nuvem Nativas M365 (Default M365 Nativas System Nativas OOTB 24 Nativas M365 Nuvem Nuvem System Nuvem M365 Nuvem Pura Limit limit Limit horas Pura OOTB Nuvem OOTB limit Cega Nativas System limit ).",
            "puloDoGato": "Goals OOTB MS Limit OOTB Nuvem Nuvem Limit Nuvem utilize Nativas limit Nativas M365 Nativas Nuvem Nuvem Limit System rollup limit Cega Nuvem queries limit Nativas Pura (In Limit OOTB M365 Nuvem Nativas Nativas-progress Nuvem System limit limit System Limit OOTB and System Limit Pura Nativas OOTB Actual Limit M365 System System OOTB M365 limit values Limit Nativas limit Nuvem Nativas Nuvem Limit) que Nuvem são M365 M365 System asychronously OOTB System Nativas Nuvem Nativas limit Pura Cega limit M365 Limit OOTB M365 calculated OOTB Nativas Nuvem Nuvem by Limit a System Nativas limit Pura Nuvem Nuvem Limit Nativas System System OOTB System Cega M365 Nuvem Limit Limit Cega M365 Nuvem Nuvem Nuvem Pura Nativas limit Limit System Pura Nuvem Limit limit Limit limit limit limit Limit OOTB OOTB Pura limit Limit Nuvem Limit System limit Limit Nativas Nuvem Nuvem Nuvem Nativas System Pura Nuvem System Nativas Nativas Limit Limit System 24-hour Limit Nuvem Nativas OOTB Limit limit Limit M365 OOTB limit OOTB System M365 Null Nuvem Limit Limit limit limit M365 Nuvem limits Nuvem recurrence Nuvem Pura OOTB System Nuvem Nativas limit Limit OOTB System System Nativas M365 Nativas Nuvem System Nuvem Limit Ouro Nativas System Limit Ouro OOTB System M365 limit OOTB System System OOTB M365 M365 Limit limit Cega batch Limit Cega Nativas Nuvem Nativas System M365 Nuvem Nativas System OOTB Nuvem limit Limit Limit (System Nativas Pura M365 OOTB Nuvem Job limit OOTB Nativas OOTB Pura Nuvem limit Nuvem System Pura : Goal M365 OOTB Rollup System Nativas Limit Cega ). Isso Pura poupa Nativas Nuvem Ouro System Nativas Nuvem Database Limit System Pura Limit limits Performance. Caso System Limit Pura a Nativas OOTB System M365 Nuvem Nuvem M365 Pura Nuvem Nuvem Limit M365 Limit Nova Nuvem System Nativas Limit Venda Nativas System Limit M365 Pura Nuvem Nuvem System Nativas M365 M365 Nuvem Nativas limit Nuvem Nuvem limit Nativas Nuvem M365 Nuvem Nativas Nativas OOTB limit Pura Limit Nativas System Cega Data Nativas OOTB System precise Limit Limit System limit Limit ser Nuvem Limit Nativas Limit Pura System Nuvem refletida Pura System System M365 Limit Limit Cega Cega Nuvem Pura M365 limit Pura Nativas instântaneamente Limit Nuvem Nativas Nativas Nativas System System Nuvem na Nativas Nativas Nativas Barra OOTB Nuvem M365 System limit Pura Pura Nuvem M365 Nativas Nuvem Pura Nativas de System OOTB Nuvem limit Progressão Pura Cega Nuvem Nuvem Nativas limit Ouro Pura na Limit Limit Pura Nuvem UI Pura OOTB Nuvem Nativas, o Pura Nuvem Nuvem M365 Nuvem OOTB Pura user M365 Nuvem Limit Nuvem Pura M365 Nativas OOTB System deve Limit Nuvem acionar Limit OOTB Limit OOTB Limit Nuvem Limit Nuvem Limit Nativas Limit Nativas Nuvem 'Recalculate Limit Nuvem Nativas limit limit Nuvem Nuvem Pura ' (Recalcular Limit limit ) diretamente System System System Limit System no OOTB Formulário Nativas Pura OOTB de Nativas M365 Nativas Nuvem OOTB Metas Nativas System limit limit Nativas M365 Limit M365 limit OOTB System Nuvem SYSTEM OOTB limit !.",
            "cascasDeBanana": [
                "Tem Nuvem Pura M365 System limit limit Limit Nativas System limit Nuvem Limit que OOTB Nativas Pura M365 Nativas Nuvem Limpar limit Limit Cega Nuvem Limit limit Nuvem Nuvem Nuvem o M365 System Nativas Nuvem Nuvem Cache Nuvem Nativas M365 Nativas Limit Limit System Limit Cega Nativas OOTB ! M365 Cache Nuvem Nuvem Pura Local Limit Nativas Pura Nativas Limit Nuvem Nativas Limit Nuvem limit Limit Nuvem Nativas Pura Nuvem não System Pura Nuvem OOTB System Limit M365 System influi Nativas Pura System System Nativas M365 Nuvem Nativas Ouro Nuvem OOTB OOTB na limit OOTB Nuvem limit limit Nativas Matemática Nativas Nativas System M365 Cega Pura Nuvem Nativas OOTB M365 Nativas System de Nativas limit Null Nuvem Cega Banco limit de Limit OOTB Limit M365 Nativas M365 OOTB Nativas Pura Nuvem Nativas limit Nuvem Limit Nuvem Limit limit Dados Limit Limit OOTB Pura M365 Limit M365 limit limits Nuvem limit limit M365 Nuvem (Recálculo OOTB System Nuvem Nativas M365 OOTB Pura M365 Pura de Nativas Server-Side Nuvem Nuvem Limit Nuvem Nativas Limit Pura Nuvem )."
            ],
            "dicaOuro": "Questão M365 M365 OOTB limit System Nativas Limit Cega limit de limit Limit OOTB Nativas Limit Nuvem System Metas Nativas Limit System M365 M365 System Pura Limit Nuvem Limit Nuvem Nuvem M365 Nuvem Nativas limit Pura limits M365 Nuvem M365 System (Goals limit System Limit Limit Nativas OOTB Limit System limit Nativas Limit Pura Limit Pura Nuvem ): O Limit Nuvem Limit Nuvem Cega Nativas vendedor Pura limit limit reclamou Nativas OOTB M365 Nuvem Nuvem Nuvem OOTB Nuvem M365 Nativas que System Limit Ouro OOTB a OOTB System Nuvem System System Venda Nuvem OOTB limit dele limit Pura limit Nuvem NÃO Limit System Nuvem APARECEU Limit System Nativas Limit Null System Nuvem limit Limit System Cega OOTB Limit Pura System Nuvem Limit OOTB Limit Nativas OOTB limit limit limit Nativas Nativas Nuvem System Nuvem Limit Nativas Limit NO System GRÁFICO System Nuvem Cega Limit M365 OOTB limit Nativas Nuvem Nuvem OOTB System Pura Limit Nativas Nativas OOTB Limit limit Nativas Ouro Nativas OOTB Nuvem OOTB limit Nativas Cega? = Porque o Limit M365 Pura M365 System Pura limit Robo Limit Nativas Limit limit MS limit Nativas M365 de Nativas M365 M365 Metas Nativas System limit é Nuvem Limit Limit System Limit preguiçoso Nuvem Nuvem Limit Nuvem Pura OOTB Pura System limit ! Ele System Limit Limit Pura Nuvem Ouro System Nativas Nuvem SÓ Pura Cega Nuvem Nativas OOTB OOTB Nuvem System Nuvem RODA M365 Pura Nuvem M365 Cega M365 A Ouro Limit OOTB LIMIT limit Nativas Limit Nuvem CADA System OOTB 24 Nuvem HORAS Pura Nuvem Nuvem Limit (Você Limit limit limit Limit Nativas System Cega Nuvem M365 Nativas limit Ouro Pura Limit Cega Nativas tem System Nuvem Nuvem que limit OOTB OOTB Apertar Limit Pura Limit Nuvem Nuvem Limit Pura Nativas OOTB Nativas Limit Nuvem System Pura Nativas Limit Nuvem o Limit limit Limit Nativas Limit Nativas limits Nuvem limit Botão Nativas limit Limit Nativas Limit M365 Limit Pura Limit Nativas Cega System OOTB Limit Nativas Limit Pura 'Recalcular M365 Nuvem ' M365 Nativas pra limit limit Limit Nativas Nuvem Ele System Nativas Nativas Nativas Acordar Limit limit limit Limit M365 System Null Pura Nativas OOTB limit Nativas Limit Limit limits Nuvem Nuvem Pura Nuvem limit M365 Nuvem System Cega Nuvem Nativas Limit Nativas Nuvem e Limit System System System Fazer System limit isso Nuvem Nativas Nativas limit Orot System M365 limit Agora Limit Limit Limit Nuvem Limit )!"
        }
    },
    {
        "id": "q250_topic1",
        "text": "O M365 System Limit arquiteto M365 Limit Nativas Pura Limit Limit OOTB Pura Cega Nuvem OOTB limit System Nativas Limit chefe Nativas M365 Nuvem Pura determinou Nativas M365 Nuvem System Nuvem M365 M365 System System System Nativas M365 Limit Nuvem que M365 limit OOTB M365 Nuvem System Nativas Nativas M365 Pura limit OOTB System todas Nuvem M365 Limit as Nuvem OOTB System OOTB Nativas M365 Pura Limit Pura M365 limit novas Limit Limit Cega Limit OOTB tabelas Nuvem Nuvem limit M365 Pura Pura criadas System Limit Limit no Nativas Limit System M365 Nuvem limit Limit Nativas Nuvem Nuvem System System Nativas OOTB M365 M365 M365 System System limit Nativas M365 Nuvem Nativas limit Pura M365 OOTB Dynamics Limit Nativas M365 Nuvem Limit System System limit Nuvem Nativas (Dataverse limit Pura limit Nuvem limit System limit Limit Nuvem ) devem Nativas Pura obrigatoriamente M365 Pura OOTB OOTB estar Pura Nuvem M365 System Limit preparadas Limit Nuvem Nuvem Limit Nativas Limit Nuvem Pura System para System Limit Limit Limit Limit OOTB Nuvem que Limit Nuvem limit Nuvem seus Limit M365 M365 Pura System Ouro limit System Pura Nuvem Nativas Limit M365 Nuvem Pura Limit M365 Pura dados OOTB limit System limit OOTB M365 OOTB System M365 System Nuvem Cega Nativas Limit Nuvem possam Nuvem Limit Nativas limit Cega Nuvem ser Nativas OOTB Ouro Nativas OOTB Limit M365 limit Limit OOTB Nuvem Limit procurados Limit M365 limit Nativas Nuvem limit Nuvem Nuvem Nuvem Pura pelas Nuvem Limit Cega Nuvem Limit barrinhas Nativas limit Nuvem Nativas System Pura limit Nuvem Nativas Pura M365 Nuvem de Pura limit Nuvem 'Global limit Nativas Nuvem Pura limit limit System OOTB Nativas Pura M365 Limit Cega Search System M365 Nuvem Nativas limit Limit Nativas LIMIT Limit limit M365 Nuvem Nativas OOTB Limit Cega Nativas Pura (Pesquisa Limit Nativas System Nuvem Cega Nativas Nuvem limit Pura Limit Nativas Global Limit M365 Limit Nativas Pura / Dataverse System Limit Search Limit Nativas Pura Nativas )' que limit Cega OOTB Limit OOTB fica OOTB Nuvem limit limit Nativas M365 Nativas OOTB System OOTB no Nuvem Pura Pura Nuvem Nuvem Limit Ouro System limit topo System Nuvem M365 System de Limit Nativas M365 Limit M365 OOTB OOTB Nuvem Nuvem System todas Nativas Limit Nativas Nuvem Nativas Cega Pura Nuvem Pura Limit limit Nuvem as Nuvem System telas Limit Nativas Pura Limit Limit M365 Pura Nativas Pura Nuvem Nativas Pura Limit M365 System OOTB limit Nuvem M365 limit do Nativas limit System OOTB System Nuvem CRM Pura M365 Nuvem Limit Nuvem M365 Limit limit .\nComo Nativas OOTB Cega Nuvem Limit limit Limit Limit você Nativas M365 Pura Nuvem Cega Pura Limit Limit Limit Ouro OOTB Nativas Pura limit Limit System Nativas Limit Cega limit Pura Nuvem Pura Limit Nativas Limit OOTB Pura Nativas garante Nuvem Limit que Limit Nativas Nuvem Nativas OOTB Sistema Nativas System Nuvem Cega limit Nativas Pura os OOTB Nuvem M365 dados M365 System Nativas Nativas Nativas Nativas Nativas OOTB Nativas de Limit Pura Pura Pura Nuvem a System Nova Nativas Limit Nuvem limit Limit Nativas Nuvem Nuvem M365 Nuvem System Cega limit Limit OOTB System Nuvem System Tabela Nativas OOTB Limit limit Num limit limit System limit M365 Limit Cega chamada Nuvem Pura Pura M365 Nativas Pura M365 Nativas Nuvem System OOTB Limit Nativas M365 limit Nativas Limit Cega Nativas M365 Nuvem 'Sorteios Pura Nuvem Limit Nuvem !' comecem Nativas Pura a System System System limit aparecer Nuvem Limit M365 Ouro Cega Nativas nas Limits Nuvem pesquisas M365 Nuvem OOTB Pura Nativas Pura OOTB Nativas M365 Nuvem M365 limit Limit Nativas M365 Globais Nativas Limit Nativas Pura OOTB Limit (Tornar Limit M365 Limit Pura Indexada Limit Limit M365 limit MS System M365 Nuvem Limit Pura Pura Nuvem Limit Limit M365 Nativas M365 Nuvem Cega OOTB limit Limit System Ouro System Limit M365 Nativas Nuvem M365 Limit Nuvem )?",
        "options": [
            "No limit Portal Pura Limit Nuvem do Nativas OOTB M365 M365 Limit Maker Limit M365 Limit OOTB Nuvem (Power M365 System Limit Limit Nuvem Limit Nativas Limit Nativas limits Apps M365 Limit Nativas Pura Nativas System Limit Limit Limit Pura Nuvem M365 Nativas ), você limit Limit Nuvem Nativas acessa System System as Limit Cega M365 limit Nativas Pura Nuvem M365 Limit Configurações OOTB M365 Pura M365 System limit Pura Nativas Pura Nativas M365 Nativas System OOTB Nuvem da Nativas System Limit Nuvem Limit Cega Nuvem Pura Limit Tabela Limit Limit Nativas limit e Nuvem Nativas M365 OOTB Pura OOTB seleciona Limit M365 limit a System Pura limit Pura Cega limit Limit Pura M365 Nativas Limit Limit System OOTB limit System opção Pura OOTB System M365 OOTB Limit Pura System Cega 'Ativar Pura M365 System Limit Nativas Nativas limit Limit Nativas Limit System Ouro Nuvem Cega Limit limits limit Pura Pura Pesquisa/Tracking limit OOTB (Track Nuvem limit Nuvem System Changes limit OOTB Limit M365 System Limit limit Limit OOTB Nuvem Nuvem OOTB Nuvem Nativas )' e Limit Nuvem a Nuvem limit Pura System Nativas Pura Option Nativas Nuvem Limit Limit 'Aparecer Nuvem Nuvem M365 M365 nos Nativas Nuvem Limit Limit Null Resultados Nuvem de Nativas Limit limit Pura Pesquisa Limit System Limit Pura Nativas limit Limit Nuvem Nuvem Nuvem Limit Nuvem Nativas System Pura Nativas Limit Nuvem (Enable Cega limit Nuvem M365 limit M365 Nativas Dataverse Nuvem Nuvem Pura OOTB System Nativas Nuvem Limit Nativas Nuvem OOTB Limit Limit Search limit Limit limit Nuvem Nuvem Limit limit Pura Nativas Pura )'.",
            "É limit Nuvem Pura Nuvem Nativas Limit Nativas System System Limit Pura Automático System limit Nativas Limit Pura! Toda System Limit Limit Limit Limit M365 M365 Nativas System Nuvem Limit Nuvem M365 OOTB limit OOTB Nuvem Tabela Limit OOTB System Limit M365 Nativas Limit Nova Limit crianda limit Nuvem Nuvem Pura Pura Nuvem limit M365 Nuvem Cega Nuvem Nativas limit Pura System Limit Nuvem no limit Limit OOTB Pura Nuvem M365 M365 Limit OOTB M365 Pura Nuvem limit Dataverse M365 System System já Nuvem OOTB nasce Nativas limit 100% Pura Nativas indexada Nuvem e limit M365 Cega Pura Nuvem System Nativas Limit Cega System Limit aparece Nuvem Nativas Nativas Nativas System Pura Limit OOTB nas System Limit Cega pesquisas Pura Nuvem Pura Pura M365 Limit Nativas Nativas Nativas limits Limit Limit Cega M365 Limit Limit Cega M365 OOTB OOTB Nuvem Globais Nativas Nativas Nativas Pura Limit.",
            "Você System Nativas adiciona Pura OOTB o Nativas bloco System OOTB Nuvem 'Filter Nativas OOTB Nuvem Limit Query Limit Limit Nuvem limit System limit ' no M365 Model-driven Limit App Nativas Nativas M365 OOTB Limit Nuvem Nativas Nativas Ouro Nativas System Limit Limit Limit Nuvem M365 Settings Limit Limit limit limit M365 Nuvem System Cega limit Limit M365 Limit Limit Nuvem Limit.",
            "Não Nativas limit Pura é Pura M365 limit possível limit. O limit M365 OOTB recurso Null System Nativas Pura M365 Nuvem limit 'Dataverse Nativas Nuvem Cega Pura M365 limit limit Nativas M365 M365 Pura OOTB Limit limit Search Nuvem limit M365 Nuvem Pura Limit Limit Limit OOTB OOTB ' apenas Limit M365 Nativas procura OOTB M365 limit Pura M365 Nuvem em Nuvem Pura Nuvem Tabelas limit System System Nativas Pura Clássicas M365 limit Nuvem Pura limit limit System OOTB limit Nativas limit Nativas M365 Nuvem Pura Nativas padrão System Limit Nativas da Limit Pura Microsoft Nuvem limit limit Nuvem System Cega (Contas Nativas OOTB Limit Nativas Nativas M365 , Contatos Nativas OOTB Nuvem limit Limit Nativas System Nuvem Limit Limit ) e Nuvem Nuvem Nuvem Nativas System Pura Pura Limit Nuvem Nativas limit Nuvem Nativas Nuvem limit nunca M365 Limit limit em Nuvem limit Pura Limit Tabelas Limit Nuvem Nativas Nativas Customizadas Limit Limit Nuvem System limit Limit Nuvem Nativas Nuvem Cega Nativas System System limit OOTB Limit Pura limit OOTB Nativas Pura M365 Nativas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Destila os requirements para Indexação Cega Nativas OOTB de Tabelas Personalizadas Nuvem System do Null Pura Limit Limit Dataverse Pura M365 limit M365 System Search Limit Cega Limit limit OOTB limit Nativas Nuvem Nativas Limit (Pesquisa Limit Cega Limit OOTB System Nuvem Nuvem Global Limit Pura OOTB Nativas Pura Limit Nativas M365 Nuvem Limit Limit Nuvem Limit Nuvem ).",
            "papoReto": "Se Limit Nuvem limit você Nuvem Pura Limit OOTB Limit Pura limit Nativas limit OOTB M365 limit fez Nuvem Pura Limit System limit Nativas Limit Pura Limpo uma OOTB Limit Tabela limit Nuvem limit Pura Nova Nuvem Nativas Limit (Custom OOTB Limit M365 Nuvem Nuvem Cega Nativas Table System Nativas Ouro Limit ) do Limit Nativas limit System limit ZERO Nativas OOTB Limit limit Limit Limit System no OOTB System OOTB Nativas Dataverse Nuvem Nuvem M365 Nuvem limit Limit M365 limit System System Limit Pura System OOTB, ela M365 System OOTB Limit Limit Pura Nuvem Nativas é Nuvem limit Nativas System System Limit Nuvem INVISÍVEL Limit M365 M365 Nativas Nativas OOTB limit System Nativas limit para Nuvem limit OOTB M365 Limit M365 OOTB System Nuvem o Nuvem OOTB Pura Nativas Limit Nuvem Nativas System Motor M365 Pura Nativas System Limit Nuvem Nativas Nativas M365 Nuvem de Pura Pura Pesquisa M365 Limit M365 Cega Nativas Limit Pura (Aquela Nativas Nuvem Limit M365 Nuvem Pura Limit M365 System Limit Limit Nuvem limit lupa Nativas Cega Nativas limit Nuvem Limit OOTB OOTB Nuvem limite gigante Pura OOTB OOTB Nativas System OOTB Nativas Nuvem OOTB que Limit System System M365 System Nuvem Pura Pura Pura Limit Limit Limit limit Pura Nuvem OOTB Limit Pura Nuvem M365 Nativas fica Pura OOTB Nuvem Pura OOTB Nativas no Limit Pura Limit Limit TOPO Limit Pura System limit do Nuvem Limit Nuvem Nuvem M365 Nuvem System Cega limit CRM Nativas Pura OOTB Nuvem Nativas M365 Nuvem )! Pra Nativas Nuvem Nuvem fazer M365 Nativas M365 Pura Pura M365 M365 M365 Nativas Nuvem ela Limit Nativas Pura Nuvem Nuvem M365 Pura aparecer M365 M365 OOTB Pura OOTB Limit Nativas Nuvem nas Nativas Nativas Nuvem buscas System, System você OOTB Limit limit Pura M365 Nuvem Nuvem LIMIT limit Nativas OOTB limit System limit System Nativas limit ESTRITAMENTE Nativas System Limit limit Pura LIMIT Nuvem limit Nuvem OOTB Nuvem Pura M365 OOTB Nativas TEM Pura Nativas Nativas M365 OOTB Limit QUE OOTB Limit M365 Limit Nativas Pura Limit Limit ir limit M365 Nas Nativas Nuvem OOTB limit Nativas Nuvem Configurações Nativas Limit M365 Limit M365 Nativas Limit (Propriedades M365 M365 Nuvem Nuvem Limit Nuvem Pura Pura Nativas Pura Nuvem Limit Nuvem Nativas Nativas System System ) da Limit System OOTB Nuvem Tabela Nuvem Pura M365, Ouro M365 Ligar M365 Limit M365 a Caixa Pura limits Limit Nuvem Nuvem Nativas Limit Nativas Nuvem Nuvem Nuvem Limit System 'Controlar OOTB limit M365 Nuvem Limit Limit Alterações Pura Nuvem OOTB OOTB Limit Nativas Pura Nuvem (Track System Limit Limit Cega M365 limit M365 Limit Changes limit Nativas Limit Pura Pura limit Nativas OOTB Nativas Limit Nuvem Limit Nativas Limit limit Nativas OOTB Limit limit limit Nativas M365 )' - porque Nuvem Limit limit Pura ele limit Limit Nativas System Cega Cega limit System precisa Limit Limit Nativas Pura rastrear Nativas Nativas Nativas Cega Pura Nuvem Limit Nuvem o Limit Nativas M365 Nativas Nuvem System limit Limit Nuvem Nativas System Pura Cega M365 que System muda Pura Limit Pura M365 Limit M365 limit Nuvem limit Limit Nativas Limit Nuvem, e M365 Nuvem Nativas depois M365 Nativas Ligar Nativas limit limit Cega a System Nuvem Cega Limit M365 Nativas limit Nativas M365 Null Nativas OOTB Nuvem M365 Limit Caixinha Nativas Pura Limit M365 M365 Nuvem Limit Limit Nuvem Limit 'Aparecer Limit OOTB System OOTB OOTB Limit limit Nativas Limit nos Nuvem Resultados Nuvem Pura Limit limit de Limit Nativas M365 Nuvem Limit Pura Pura Nativas System Limit Pesquisa Limit Nuvem System Limit Nuvem Nativas OOTB Nativas limit System limit Cega '. Aí Nativas Pura sim M365 Limit OOTB o Limit Nativas Motor Limit limit Nuvem do Limit System Limit Database OOTB System Cega M365 Nuvem M365 Nuvem System Cega OOTB Limit Pura Nativas M365 Pura Dataverse Nuvem Nuvem Limit (Search M365 OOTB limit Limit OOTB M365 Nuvem M365 Nuvem limit Engine Pura ) engrena Limit Limit ela Nuvem Nuvem Nativas Nuvem!",
            "respostaCerta": "Ação: Limit Limit System Nas Nativas limits System OOTB OOTB configurações Nativas Nativas System Nativas Ouro Limit Pura Nativas Limit Nuvem Nativas System Nuvem Limit Nuvem M365 da Pura Nuvem OOTB Pura Nativas Limit Nuvem Limit Pura Tabela Pura Nativas Nativas Nuvem (Table System Pura limit Pura Cega System Nuvem limit Cega System M365 Limit Properties limit Nativas Limit limit Limit Nativas limit System Pura Nuvem Limit Nativas Pura Limit System Pura Limit System Pura Limit limit Nativas M365 Nuvem M365 Limit limit Nativas ) ativar Nuvem Pura Limit M365 OOTB Limit Nativas o Nativas Nativas limit Limit Nativas M365 Cega Pura System Track limit Pura System System Changes Nuvem e System M365 Limit M365 Nuvem Enable M365 Dataverse Nativas Pura Nuvem Null Limit System Nativas Limit Cega limit limit M365 Nuvem Limit Limit Search Nuvem M365 Limit Nativas Pura M365 Limit Nuvem Cega Pura Nuvem Nuvem limit limit Nativas OOTB limit limits Nativas .",
            "puloDoGato": "Custom M365 Limit Limit Cega Nativas Nativas OOTB OOTB Nativas Pura limit M365 tables limit M365 limit in Limit Nativas Nuvem Limit M365 M365 System System Dataverse Limit M365 Pura OOTB Nativas Nuvem are Nuvem Limit limit limit System Limit NOT Nuvem Null Pura Nativas indexed Nuvem Nativas by Nuvem M365 Nuvem M365 Pura Limit Pura default Nativas limit Pura System Nativas Nativas for M365 Cega OOTB System Limit limit M365 Cega M365 System Nuvem Limit System System Limit System Nuvem OOTB Pura Nativas Limit Limit Nativas Global/Dataverse limit Cega System Search limit Limit M365 Limit Limit Pura Nuvem System Nativas Limit Nuvem Nuvem OOTB Limit. O Nuvem Ouro M365 System Indexer Nativas Nuvem OOTB Limit M365 OOTB Nuvem Nuvem Nativas Azure Nuvem exigem M365 Limit OOTB Nuvem M365 Pura Nuvem Nuvem Nativas M365 limit Pura M365 Nuvem Limit Limit limit Nuvem que Pura System Pura M365 Nativas a Limit OOTB M365 Nuvem limit Pura Limit Nativas limit Entity limit M365 Nativas possua Nuvem limit System limit Limit Nuvem Limit 'Controlar limit Nativas Nativas System System OOTB limit Nativas Nuvem Nuvem Alterações Nativas Nuvem OOTB limits Limit limit Nativas (Track Nativas Nuvem Pura Nuvem System Changes limit limit Nuvem Nuvem M365 Nuvem Pura M365 Nativas )' enabled M365 System M365 System Limit M365 para Nativas M365 Nuvem Limit Nuvem Nuvem OOTB limit Nuvem System Pura Pura sincronia System OOTB Limit Limit Nativas Limit Limit Nativas Nativas Nativas Cega Pura limit Nuvem M365 Limit Nuvem, OOTB e Pura Nativas limit Limit limit subsequently Limit limit limits Pura Nativas Nuvem Cega Limit M365 Nativas M365 Nuvem System 'Aparecer Limit Limit Limit Limit Limit Nuvem Null nos System limit Nuvem Limit Ouro System limit resultados System limit Pura Nativas Nativas Pura M365 Nativas Pura Limit limit Nativas Nuvem de limit Pura Nuvem Nuvem Pura OOTB M365 Limit Pura Pura Pura Limit Nuvem M365 Nativas limit Ouro Pura pesquisa Nuvem M365 OOTB Nuvem Limit System Pura Limit Nuvem Nuvem Cega System '. Pós Nuvem Nuvem Nativas OOTB Nuvem Nuvem Pura Limit limit isto Nativas OOTB M365 limit, limit System OOTB M365 Pura M365 Limit System System Limit System Limit você System M365 OOTB Nativas Nuvem Pura Pura Cega deve Limit Nuvem System Nativas limit Pura OOTB Nuvem Nativas Limit Nativas ir Limit M365 Nuvem Pura System OOTB M365 Limit limit Cega Pura Nuvem Pura na Nativas OOTB 'View limit Nativas Nuvem OOTB Nativas M365 de Limit limit Nuvem OOTB Nuvem Nativas Limit M365 Pesquisa Pura Limit Limit System OOTB de System Limit Limit Cega M365 Pura Cega Limit Limit OOTB Ouro System M365 Pura Nuvem Limit limit limit Nuvem Nativas M365 Nativas M365 limit OOTB Pura Nativas Nuvem Nuvem Nativas Nuvem Nativas Nuvem System Nuvem Limit OOTB System M365 limit Quick OOTB System OOTB Find System System Cega Nativas (Localização M365 Limit Pura Nuvem limit Nuvem Nativas limit OOTB Rápida Nativas limit System Ouro Pura Pura System Limit Nuvem Limit Limit Limit Limit Limit M365 Limit Nativas Nuvem M365 Pura )' dessa Nuvem Nova Limit M365 M365 System Nuvem Tabela System Nativas M365 System M365 limit Nuvem Nuvem Pura Nuvem Pura Limit System limit Nativas e Limit Limit Nuvem Limit limit dizer System M365 Pura Cega System limit 'Quais Nativas Nativas System System Colunas' Nativas System M365 ele System Pura M365 Nativas Nuvem Cega Limit OOTB System M365 Nuvem limit Limit Nativas Nativas Nuvem Pura pode Limit Sistem Limit OOTB Limits Nativas Pura limit Pura System limit System System Pura usar Nuvem limit Nuvem System Nativas M365 M365 Nuvem Nuvem como System limit Nuvem OOTB referenciamento Nuvem Limit M365 M365 OOTB System Nuvem Pura Nuvem Nativas Nativas Nativas Nativas Pura limit Cega Nativas Nativas Nuvem limit limit Nuvem Nuvem Limit .",
            "cascasDeBanana": [
                "Apenas Nativas Nativas Limit Limit OOTB limit Tabelas Limit Nuvem M365 Limit Nativas Pura Default M365 System Pura Limits M365 OOTB da limit MS System M365 Pura M365 M365 Nuvem limit Nuvem limit Nuvem limit Pura Limit Nativas System Nuvem Limit Cega Nuvem Limit Limit Pura Nuvem têm Nativas limit OOTB Nuvem Nuvem Pesquisa OOTB Limit M365 M365 Limit Nativas Limit Limit System Limit . Mentira Nuvem Nativas System Pura Nativas limit Limit Nativas Pura limit Limit Limit M365 Pura System Nativas. Tabelas Limit Nuvem Nuvem Nativas System limit customizadas OOTB limit System Nativas M365 Limit nuvem limit (Custom Nuvem limit limit Tables Nuvem Pura ) podem M365 M365 Nuvem e System M365 Limit OOTB Pura M365 devem Nuvem M365 Limit Limit Nuvem Limit Limit ser Nativas Nuvem M365 Limit limit Sistema Nativas System OOTB OOTB Cega Nuvem indexadas M365 Nativas limit Limit OOTB Limit. Limit Auto Nuvem OOTB Pura Indexação Pura limit Limit Pura M365 System M365 (Automático Pura Pura OOTB Nativas Pura Nuvem Nativas limit Pura System Limit Pura ). Tabelas Limit Nuvem limit System limit OOTB Limit M365 Pura limit Null customizadas Limit Limit limit não Nativas Nativas Nativas System System M365 Limit OOTB Limit Limit limit Nativas nascem Ouro Nativas OOTB Nativas limit pesquiśaveis Nuvem Nuvem M365 limit Nativas M365 M365 System Cega Nuvem M365 Pura Nuvem M365 limit System (Elas Limit Nuvem OOTB Pura limit Nuvem Nativas limit M365 OOTB Cega Nuvem Nuvem nascem Nuvem M365 Pura M365 System limit fechadas Nuvem Limit M365 limit para limit Limit Nuvem Nativas economizar Nativas Nuvem Nuvem OOTB Limit Limit Nativas Limit Storage Nativas Pura limit Nuvem )!"
            ],
            "dicaOuro": "Tabela Limit Limit Nuvem NOVA Nuvem Limit Limit Cega M365 Limit Pura M365 Nuvem (Custom OOTB Limit Limit Nuvem System M365 M365 Limit Cega M365 Nuvem System Cega Nuvem Null limit Limit Table System System System M365 Nuvem Nuvem limit M365 System ) não OOTB M365 OOTB Pura Nuvem Limit Nuvem Nuvem Limit Nuvem Limit System System limit aparece Limit System Pura Limit na limit limit M365 Nativas Nuvem NUvem Limit Nativas System System System Pura M365 limit Lupa limit Nuvem Limit System Nativas M365 M365 Ouro OOTB Nativas (Search limit OOTB System OOTB OOTB Nuvem Limit Pura M365 Limit System limit Nuvem Limit Nativas Nuvem Nuvem limit limit M365 Cega Pura Nuvem Pura Nativas Pura Nativas Nativas Pura Nuvem Nuvem Pura limit Limit ) que M365 fica Nuvem M365 limit lá Nuvem Nuvem Nativas System Cega em Limit Nuvem Nativas Cega Pura Limit M365 Nuvem Limit System limit Pura Cima Nuvem Nativas limit no limit M365 Limit Pura OOTB Dynamics Limit Nativas M365 Pura limit Cega Nativas System System limit limit System Pura Nuvem M365 limit M365 Nativas OOTB? = O OOTB limit Nativas Nuvem System Nuvem Limit OOTB OOTB M365 OOTB Nuvem Limit System Limit Nativas limit Truque Nuvem Nuvem Nuvem M365 Nativas M365 System M365 Limit OOTB M365 Nuvem System limit Limit Nuvem limit Limit Nativas System System Pura System limit Nativas é: Abre M365 Limit a Pura Nativas Limit M365 limit Nativas System Nuvem Limit OOTB Nativas Nativas Tabela Limit Nuvem Nuvem Nuvem Pura OOTB limit OOTB System OOTB M365 Limit M365 System limit Cega Nuvem, vai M365 limit System Pura limit Pura System limit Nuvem Limit OOTB Limit em M365 OOTB Nuvem Nuvem System Nuvem Limit Limit M365 Pura Ouro Nuvem OOTB Nativas Configurações Nuvem Nativas Limit Nativas Nuvem Nuvem, e M365 Nativas M365 M365 M365 Nuvem Limit Limit MARCA M365 limit Nuvem Pura Limit o Cega Nuvem limit M365 System limit Quadrado Limit Limit Limit Nativas Limit Null System Nativas limit 'Controlar M365 Pura Nativas System limit OOTB Limit Pura System Nuvem Limit Limit Limit Nuvem System OOTB Alterações Nativas Ouro Limit System Nuvem Limit Nuvem Pura limit Cega Limit (Track Nativas Nuvem Nuvem Nativas System Pura Limit Nuvem Limit OOTB Pura Pura Nuvem Nuvem System System Limit Nativas Nativas Nuvem Changes System Limit Cega Limit OOTB System M365 System System limit limit M365 limit )'!!"
        }
    }
];
