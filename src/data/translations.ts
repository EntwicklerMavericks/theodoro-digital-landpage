export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: {
      solutions: "Soluções",
      methodology: "Metodologia",
      engineering: "Engenharia",
      cta: "Iniciar"
    },
    hero: {
      badge: "ENG. DE SOFTWARE & DESIGN PREMIUM",
      headline: "A Base Tecnológica do seu <br/><span class='gradient-text animated-gradient'>Próximo Nível.</span>",
      description: "Não uso templates. Não entrego o básico. Arquitetura de ponta, design system exclusivo e alta performance para quem entende que <strong>tecnologia é o coração das vendas.</strong>",
      cta: "Iniciar Projeto",
      explore: "Explore"
    },
    problems: {
      badge: "SCANNER DE MERCADO",
      title: "O seu crescimento está sendo <span class='text-gradient'>sabotado?</span>",
      description: "Empresas travam quando a tecnologia não acompanha a operação. Você se identifica com algum desses cenários?",
      cards: [
        {
          question: "Sua empresa precisa atrair mais clientes pela internet?",
          solution: "Crio landing pages e sites focados em conversão e captação de leads."
        },
        {
          question: "Você ainda depende de planilhas para organizar a operação?",
          solution: "Desenvolvo sistemas de gestão sob medida, centralizando suas informações."
        },
        {
          question: "Sua equipe perde tempo com tarefas manuais?",
          solution: "Automatizo fluxos repetitivos, integrando os sistemas que você já usa."
        },
        {
          question: "Seus clientes precisam entrar em contato para obter informações básicas?",
          solution: "Crio portais e catálogos digitais acessíveis 24/7 para seus clientes."
        },
        {
          question: "Você precisa integrar sistemas que não se comunicam?",
          solution: "Construo APIs e conecto diferentes plataformas de forma segura."
        },
        {
          question: "Tem uma ideia de aplicativo ou plataforma e precisa desenvolvê-la?",
          solution: "Transformo sua ideia em um MVP real, robusto e escalável."
        }
      ],
      bannerTitle: "Pronto para otimizar sua operação?",
      bannerDesc: "Cada negócio tem suas particularidades. Vamos entender o seu cenário e arquitetar a solução ideal para os seus desafios.",
      bannerBtn: "Quero conversar sobre meu negócio"
    },
    services: {
      badge: "O QUE EU FAÇO",
      title: "Engenharia de Software para <span class='text-gradient'>Alavancar seu Negócio</span>",
      description: "Esqueça os 'criadores de site'. Eu construo a base tecnológica que a sua empresa precisa para vender mais e operar sem gargalos.",
      items: [
        {
          title: "Sites e Landing Pages",
          desc: "Plataformas web ultrarrápidas, otimizadas para SEO e desenhadas cientificamente para conversão de leads e posicionamento premium."
        },
        {
          title: "E-commerce de Alta Performance",
          desc: "Lojas virtuais escaláveis que não travam em picos de acesso. Arquitetura focada na experiência do usuário e finalização de carrinho sem atrito."
        },
        {
          title: "Sistemas Web e ERPs",
          desc: "Automação da sua operação interna. Desenvolvo painéis de controle, CRMs e ERPs sob medida para eliminar planilhas e trabalho manual."
        },
        {
          title: "Aplicativos (Web e Mobile)",
          desc: "Desenvolvimento de aplicações que seus clientes ou colaboradores podem acessar de qualquer dispositivo, com a mesma fluidez de um app nativo."
        },
        {
          title: "Modernização de Sistemas Legados",
          desc: "Seu sistema antigo está lento e difícil de manter? Eu refatoro a arquitetura, implemento novas features e conecto o legado com APIs modernas."
        },
        {
          title: "Identidade Visual de Produto (UI/UX)",
          desc: "O design do seu software vende o seu software. Crio identidades visuais focadas em interfaces digitais premium que geram confiança imediata."
        }
      ]
    },
    process: {
      badge: "METODOLOGIA",
      title: "Do Diagnóstico ao <span class='text-gradient'>Deploy de Alta Performance</span>",
      description: "Um processo de engenharia transparente, ágil e focado no retorno comercial do seu investimento.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico e Arquitetura",
          desc: "Mapeamento profundo do seu modelo de negócio, gargalos operacionais e definição da arquitetura ideal antes de escrever qualquer código."
        },
        {
          number: "02",
          title: "Design System & Prototipagem",
          desc: "Construção de interfaces modernas no Figma, focadas em usabilidade cirúrgica, psicologia de conversão e identidade de marca premium."
        },
        {
          number: "03",
          title: "Engenharia & Desenvolvimento",
          desc: "Codificação limpa, segura e escalável utilizando as tecnologias mais modernas do mercado global. Zero dependência de plugins pesados."
        },
        {
          number: "04",
          title: "Deploy & Otimização Contínua",
          desc: "Publicação em servidores de borda (Edge Network) com latência quase nula, testes de segurança e monitoramento de performance em tempo real."
        }
      ]
    },
    about: {
      badge: "A ENGENHARIA",
      title: "Sistemas construídos para <span class='text-gradient animated-gradient'>performance e escala.</span>",
      p1: "O mercado está saturado de soluções lentas e agências que dependem de templates genéricos. Atuamos como o <strong>braço de engenharia tecnológica</strong> do seu negócio.",
      p2: "Seja para modernizar uma operação travada, lançar um produto digital imbatível ou automatizar processos internos, aplicamos os mesmos padrões de segurança e arquitetura utilizados por grandes players de tecnologia.",
      stack1: "Arquitetura Resiliente",
      stack2: "UI/UX Premium",
      stack3: "Código Escalável",
      stack4: "Deploy Contínuo",
      badge1: "Segurança Nível A",
      badge2: "Latência Zero",
      terminalHeader: "visitante@theodoro-digital: ~",
      terminalInit: "TheodoroOS v2.0.4 - Sistema Inicializado",
      terminalHelpPrompt: "Digite 'ajuda' ou 'help' para ver os comandos disponíveis. Clique aqui para digitar.",
      terminalPromptUser: "visitante@theodoro:~$"
    },
    faq: {
      badge: "BASE DE CONHECIMENTO",
      title: "Dúvidas <span class='text-gradient'>Frequentes</span>",
      description: "Tudo o que você precisa saber sobre o modelo de desenvolvimento e entrega.",
      items: [
        {
          q: "Quais serviços de engenharia vocês oferecem?",
          a: "Desenvolvimento de aplicações web, landing pages de alta conversão, ERPs personalizados, automações de processos complexos e integração de APIs corporativas. Tudo projetado com arquitetura escalável."
        },
        {
          q: "Atendem empresas de diferentes segmentos?",
          a: "Sim. Nossos frameworks de arquitetura são agnósticos. Atendemos desde startups buscando tração até indústrias e clínicas precisando modernizar sistemas legados."
        },
        {
          q: "Como funciona a segurança dos dados?",
          a: "Seguimos protocolos estritos. Implementamos criptografia de ponta a ponta, autenticação segura (JWT/OAuth), proteção contra injeções SQL e XSS, e adequação nativa à LGPD."
        },
        {
          q: "Qual é o tempo médio de desenvolvimento?",
          a: "Depende do escopo técnico. Landing pages avançadas levam de 1 a 2 semanas, enquanto sistemas complexos levam de 4 a 8 semanas. Após a fase de Discovery, fornecemos um cronograma exato."
        },
        {
          q: "Vocês assumem projetos legados de outros desenvolvedores?",
          a: "Sim. Fazemos uma auditoria de código (Code Review) inicial. Se a base for recuperável, refatoramos e modernizamos. Se estiver muito comprometida, propomos uma reescrita gradual."
        },
        {
          q: "Como funciona o suporte pós-entrega?",
          a: "Oferecemos SLAs para garantir tempo de resposta imediato a incidentes, além de pacotes de suporte e evolução contínua para novas features."
        }
      ]
    },
    cta: {
      title: "O próximo passo da sua <br/><span class='text-gradient'>evolução tecnológica.</span>",
      description: "Abrace a engenharia de software de ponta e deixe seus concorrentes lutando com sistemas lentos. O momento de escalar é agora.",
      button: "Iniciar Projeto Agora"
    },
    contact: {
      title: "Faça seu orçamento <span class='text-gradient'>sem compromisso.</span>",
      description: "Conte um pouco sobre o que você precisa. Vamos entender sua ideia e conversar sobre a melhor solução para o seu negócio.",
      directTitle: "Prefere chamar direto?",
      directBtn: "Falar diretamente pelo WhatsApp",
      nameLabel: "Nome *",
      namePlaceholder: "Seu nome",
      companyLabel: "Nome da empresa (opcional)",
      companyPlaceholder: "Sua empresa",
      phoneLabel: "WhatsApp para contato *",
      phonePlaceholder: "(00) 00000-0000",
      serviceLabel: "Tipo de serviço desejado *",
      servicePlaceholder: "Selecione uma opção...",
      services: [
        "Criação de site",
        "Landing page",
        "Página de vendas ou captura de leads",
        "Sistema de gestão ou ERP",
        "Aplicação web ou mobile",
        "Automação de processos",
        "Integração entre sistemas",
        "Manutenção ou melhoria de sistema existente",
        "Consultoria tecnológica",
        "Outro / Ainda não sei qual solução preciso"
      ],
      descLabel: "Descrição da necessidade (opcional)",
      descPlaceholder: "Conte-nos um pouco sobre o seu projeto...",
      submitBtn: "Solicitar orçamento pelo WhatsApp",
      errorName: "Por favor, informe seu nome.",
      errorPhone: "Por favor, informe um WhatsApp válido.",
      errorService: "Por favor, selecione um serviço."
    },
    footer: {
      desc: "Engenharia de software e design system premium para operações que precisam de escala, segurança e alta performance.",
      col1Title: "Soluções",
      col2Title: "Empresa",
      rights: "Todos os direitos reservados.",
      terms: "Termos de Uso",
      privacy: "Política de Privacidade"
    }
  },

  en: {
    nav: {
      solutions: "Solutions",
      methodology: "Methodology",
      engineering: "Engineering",
      cta: "Start"
    },
    hero: {
      badge: "SOFTWARE ENG. & PREMIUM DESIGN",
      headline: "The Technological Foundation for Your <br/><span class='gradient-text animated-gradient'>Next Level.</span>",
      description: "I don't use templates. I don't deliver the basics. Cutting-edge architecture, bespoke design systems, and extreme performance for those who understand that <strong>technology is the core of revenue.</strong>",
      cta: "Start Project",
      explore: "Explore"
    },
    problems: {
      badge: "MARKET SCANNER",
      title: "Is your business growth being <span class='text-gradient'>sabotaged?</span>",
      description: "Companies stall when technology fails to keep up with operations. Do you recognize any of these bottlenecks?",
      cards: [
        {
          question: "Does your business need to attract more clients online?",
          solution: "I engineer high-converting landing pages focused on lead generation."
        },
        {
          question: "Are you still dependent on spreadsheets to run operations?",
          solution: "I develop bespoke management systems and dashboards to centralize data."
        },
        {
          question: "Is your team wasting hours on manual repetitive tasks?",
          solution: "I automate workflows, seamlessly connecting the tools you already use."
        },
        {
          question: "Do clients need to contact you for basic inquiries?",
          solution: "I create self-service digital portals accessible 24/7 for your customers."
        },
        {
          question: "Need to connect systems that don't communicate with each other?",
          solution: "I build robust APIs and securely integrate fragmented platforms."
        },
        {
          question: "Have an app or platform idea and need to build it right?",
          solution: "I turn your concept into a robust, battle-tested, scalable MVP."
        }
      ],
      bannerTitle: "Ready to optimize your operation?",
      bannerDesc: "Every business has unique complexities. Let's analyze your scenario and architect the ideal solution for your challenges.",
      bannerBtn: "Let's discuss my business"
    },
    services: {
      badge: "WHAT WE BUILD",
      title: "Software Engineering to <span class='text-gradient'>Scale Your Business</span>",
      description: "Forget generic web design agencies. We engineer the technological core your business needs to accelerate sales and operate without friction.",
      items: [
        {
          title: "Websites & Landing Pages",
          desc: "Lightning-fast platforms, optimized for top-tier SEO and engineered for maximum lead conversion and premium positioning."
        },
        {
          title: "High-Performance E-Commerce",
          desc: "Scalable online stores that never crash during traffic spikes. Built for friction-free checkouts and high user retention."
        },
        {
          title: "Web Systems & Custom ERPs",
          desc: "Automation for your internal operations. Bespoke admin panels, CRMs, and ERPs designed to eradicate messy spreadsheets."
        },
        {
          title: "Mobile & Web Applications",
          desc: "Fast, responsive web and mobile apps your clients and teams can access from any device with native-app smoothness."
        },
        {
          title: "Legacy System Modernization",
          desc: "Is your current software slow and hard to maintain? We refactor architectures, introduce modern APIs, and eliminate tech debt."
        },
        {
          title: "Digital Product Identity (UI/UX)",
          desc: "Your software's visual polish sells your software. We design enterprise-grade digital interfaces that command instant trust."
        }
      ]
    },
    process: {
      badge: "METHODOLOGY",
      title: "From Deep Diagnosis to <span class='text-gradient'>High-Performance Deploy</span>",
      description: "A transparent, agile engineering cycle focused strictly on the commercial return of your investment.",
      steps: [
        {
          number: "01",
          title: "Diagnosis & Architecture",
          desc: "In-depth mapping of your operational bottlenecks, business model, and technology stack before writing a single line of code."
        },
        {
          number: "02",
          title: "Design System & Prototyping",
          desc: "Precision interactive prototypes built in Figma, anchored in conversion psychology and high-end visual aesthetics."
        },
        {
          number: "03",
          title: "Engineering & Clean Code",
          desc: "Scalable, secure, and type-safe development using industry-standard global frameworks. Zero bloated plugins."
        },
        {
          number: "04",
          title: "Edge Deploy & Optimization",
          desc: "Global distribution across Edge CDN networks with sub-second latency, rigorous automated testing, and active monitoring."
        }
      ]
    },
    about: {
      badge: "THE ENGINEERING",
      title: "Systems built for <span class='text-gradient animated-gradient'>extreme performance and scale.</span>",
      p1: "The market is saturated with sluggish solutions and agencies reliant on cheap templates. We serve as the <strong>dedicated technological engineering arm</strong> of your business.",
      p2: "Whether modernizing an aging architecture, launching a premier digital product, or automating internal workflows, we enforce the security and architectural standards used by leading global tech companies.",
      stack1: "Resilient Architecture",
      stack2: "Premium UI/UX",
      stack3: "Scalable Codebase",
      stack4: "Continuous Delivery",
      badge1: "Grade A Security",
      badge2: "Zero Latency",
      terminalHeader: "guest@theodoro-digital: ~",
      terminalInit: "TheodoroOS v2.0.4 - System Initialized",
      terminalHelpPrompt: "Type 'help' to view available commands. Click here to type.",
      terminalPromptUser: "guest@theodoro:~$"
    },
    faq: {
      badge: "KNOWLEDGE BASE",
      title: "Frequently Asked <span class='text-gradient'>Questions</span>",
      description: "Everything you need to know about our engineering approach and delivery model.",
      items: [
        {
          q: "What software engineering services do you offer?",
          a: "Full-stack web applications, high-converting landing pages, custom ERPs, complex process automations, and enterprise API integrations. All built with scalable, resilient architecture."
        },
        {
          q: "Do you work with businesses across different industries?",
          a: "Yes. Our architectural frameworks are tech-agnostic. We work with everything from startups seeking market traction to established firms and clinics needing legacy system modernizations."
        },
        {
          q: "How do you ensure data security and privacy?",
          a: "We adhere to rigorous security standards: end-to-end encryption, robust authentication (JWT/OAuth), proactive defense against SQL injections & XSS, and full data compliance."
        },
        {
          q: "What is the average development timeline?",
          a: "It depends on scope. Strategic landing pages typically take 1 to 2 weeks, while custom enterprise systems take 4 to 8 weeks. After our Discovery phase, we provide an exact sprint roadmap."
        },
        {
          q: "Can you take over legacy code from other developers?",
          a: "Yes. We begin with a comprehensive Code Review. If the codebase is recoverable, we refactor and modernize it. If it is beyond salvage, we propose a modular rewrite."
        },
        {
          q: "How does post-launch support and maintenance work?",
          a: "We provide SLAs for rapid incident response, alongside ongoing engineering retainers for continuous feature evolution, automated backups, and performance monitoring."
        }
      ]
    },
    cta: {
      title: "The next stage in your <br/><span class='text-gradient'>technological evolution.</span>",
      description: "Adopt world-class software engineering and leave competitors wrestling with slow systems. The moment to scale is now.",
      button: "Start Project Now"
    },
    contact: {
      title: "Request a custom proposal <span class='text-gradient'>without commitment.</span>",
      description: "Tell us a bit about your goals. We'll evaluate your challenge and recommend the ideal software architecture for your business.",
      directTitle: "Prefer instant messaging?",
      directBtn: "Chat Directly on WhatsApp",
      nameLabel: "Name *",
      namePlaceholder: "Your full name",
      companyLabel: "Company name (optional)",
      companyPlaceholder: "Your business",
      phoneLabel: "Phone / WhatsApp *",
      phonePlaceholder: "+1 (000) 000-0000",
      serviceLabel: "Required Service *",
      servicePlaceholder: "Select an option...",
      services: [
        "High-performance Website",
        "Strategic Landing Page",
        "Lead Capture & Sales Page",
        "Custom Management ERP / System",
        "Web or Mobile Application",
        "Workflow Automation",
        "System & API Integration",
        "Legacy Code Modernization",
        "Technology Consulting",
        "Other / Unsure what solution is needed"
      ],
      descLabel: "Project Description (optional)",
      descPlaceholder: "Tell us a bit about your business goals and requirements...",
      submitBtn: "Send Proposal Request via WhatsApp",
      errorName: "Please provide your name.",
      errorPhone: "Please enter a valid phone number.",
      errorService: "Please select a service."
    },
    footer: {
      desc: "Software engineering and premium design systems for high-growth operations requiring scale, security, and top-tier speed.",
      col1Title: "Solutions",
      col2Title: "Company",
      rights: "All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  },

  es: {
    nav: {
      solutions: "Soluciones",
      methodology: "Metodología",
      engineering: "Ingeniería",
      cta: "Iniciar"
    },
    hero: {
      badge: "ING. DE SOFTWARE Y DISEÑO PREMIUM",
      headline: "La Base Tecnológica para su <br/><span class='gradient-text animated-gradient'>Próximo Nivel.</span>",
      description: "No utilizo plantillas. No entrego lo básico. Arquitectura de vanguardia, sistema de diseño exclusivo y alto rendimiento para quienes comprenden que <strong>la tecnología es el corazón de las ventas.</strong>",
      cta: "Iniciar Proyecto",
      explore: "Explorar"
    },
    problems: {
      badge: "ESCÁNER DE MERCADO",
      title: "¿Su crecimiento empresarial está siendo <span class='text-gradient'>saboteado?</span>",
      description: "Las empresas se estancan cuando la tecnología no acompaña la operación. ¿Se identifica con alguno de estos cuellos de botella?",
      cards: [
        {
          question: "¿Su empresa necesita captar más clientes por internet?",
          solution: "Construyo landing pages y sitios de alta conversión enfocados en generación de clientes."
        },
        {
          question: "¿Todavía depende de hojas de cálculo para organizar la operación?",
          solution: "Desarrollo sistemas de gestión a medida y paneles que centralizan su información."
        },
        {
          question: "¿Su equipo pierde horas en tareas manuales y repetitivas?",
          solution: "Automatizo flujos de trabajo e integro las plataformas que ya utiliza."
        },
        {
          question: "¿Sus clientes deben contactarlo para obtener información básica?",
          solution: "Creo portales digitales accesibles 24/7 con autoservicio para sus clientes."
        },
        {
          question: "¿Necesita comunicar sistemas que no dialogan entre sí?",
          solution: "Construyo APIs y conecto diferentes plataformas de forma segura y veloz."
        },
        {
          question: "¿Tiene una idea de aplicación o plataforma y necesita construirla?",
          solution: "Transformo su idea en un MVP robusto, escalable y listo para el mercado."
        }
      ],
      bannerTitle: "¿Listo para optimizar su operación?",
      bannerDesc: "Cada negocio tiene complejidades únicas. Analicemos su escenario y diseñemos la solución tecnológica ideal para sus desafíos.",
      bannerBtn: "Quiero hablar sobre mi negocio"
    },
    services: {
      badge: "LO QUE CONSTRUIMOS",
      title: "Ingeniería de Software para <span class='text-gradient'>Impulsar su Negocio</span>",
      description: "Olvídese de las agencias de plantillas genéricas. Construimos la base tecnológica que su empresa necesita para vender más y operar sin fricción.",
      items: [
        {
          title: "Sitios Web y Landing Pages",
          desc: "Plataformas web ultrarrápidas, optimizadas para SEO y diseñadas para máxima conversión de prospectos y autoridad de marca."
        },
        {
          title: "E-Commerce de Alto Rendimiento",
          desc: "Tiendas virtuales escalables que no se caen en picos de tráfico. Experiencia de compra fluida y checkout sin fricciones."
        },
        {
          title: "Sistemas Web y ERPs a Medida",
          desc: "Automatización de su operación interna. Paneles de control, CRMs y ERPs diseñados para eliminar hojas de cálculo desordenadas."
        },
        {
          title: "Aplicaciones Web y Móviles",
          desc: "Aplicaciones rápidas a las que sus clientes y colaboradores pueden acceder desde cualquier dispositivo con fluidez nativa."
        },
        {
          title: "Modernización de Sistemas Legados",
          desc: "¿Su sistema actual es lento y difícil de mantener? Refactorizo arquitecturas, implemento nuevas APIs y elimino deuda técnica."
        },
        {
          title: "Identidad Visual de Producto (UI/UX)",
          desc: "El diseño de su software vende su software. Interfaces digitales premium que generan confianza y credibilidad inmediata."
        }
      ]
    },
    process: {
      badge: "METODOLOGÍA",
      title: "Del Diagnóstico Profundo al <span class='text-gradient'>Despliegue de Alta Performance</span>",
      description: "Un ciclo de ingeniería transparente, ágil y centrado estrictamente en el retorno comercial de su inversión.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico y Arquitectura",
          desc: "Mapeo exhaustivo de su modelo de negocio, cuellos de botella y definición de la arquitectura óptima antes de escribir código."
        },
        {
          number: "02",
          title: "Sistema de Diseño y Prototipado",
          desc: "Prototipos interactivos en Figma basados en psicología de conversión, usabilidad impecable y estética visual premium."
        },
        {
          number: "03",
          title: "Ingeniería y Código Limpio",
          desc: "Desarrollo seguro, escalable y tipado con las tecnologías más modernas del mercado global. Cero plugins pesados."
        },
        {
          number: "04",
          title: "Despliegue Edge y Optimización",
          desc: "Distribución global en redes Edge CDN con latencia casi nula, pruebas automatizadas de seguridad y monitoreo continuo."
        }
      ]
    },
    about: {
      badge: "LA INGENIERÍA",
      title: "Sistemas construidos para <span class='text-gradient animated-gradient'>rendimiento extremo y escala.</span>",
      p1: "El mercado está lleno de soluciones lentas y agencias que dependen de plantillas prediseñadas. Actuamos como el <strong>brazo de ingeniería tecnológica</strong> de su empresa.",
      p2: "Ya sea modernizando un sistema heredado, lanzando un producto digital de primer nivel o automatizando operaciones internas, aplicamos los estándares de seguridad y arquitectura de las grandes tecnológicas globales.",
      stack1: "Arquitectura Resiliente",
      stack2: "UI/UX Premium",
      stack3: "Código Escalable",
      stack4: "Despliegue Continuo",
      badge1: "Seguridad Grado A",
      badge2: "Cero Latencia",
      terminalHeader: "invitado@theodoro-digital: ~",
      terminalInit: "TheodoroOS v2.0.4 - Sistema Inicializado",
      terminalHelpPrompt: "Escriba 'ayuda' o 'help' para ver los comandos disponibles. Haga clic aquí para escribir.",
      terminalPromptUser: "invitado@theodoro:~$"
    },
    faq: {
      badge: "BASE DE CONOCIMIENTO",
      title: "Preguntas <span class='text-gradient'>Frecuentes</span>",
      description: "Todo lo que necesita saber sobre nuestra metodología de desarrollo y entrega.",
      items: [
        {
          q: "¿Qué servicios de ingeniería de software ofrecen?",
          a: "Desarrollo de aplicaciones web completas, landing pages de alta conversión, ERPs a medida, automatizaciones de procesos complejos e integración de APIs empresariales. Todo con arquitectura escalable."
        },
        {
          q: "¿Atienden empresas de diferentes industrias?",
          a: "Sí. Nuestros marcos arquitectónicos son agnósticos. Trabajamos desde startups en fase de tracción hasta industrias y clínicas que necesitan modernizar sistemas legados."
        },
        {
          q: "¿Cómo garantizan la seguridad de los datos?",
          a: "Seguimos protocolos estrictos: cifrado de extremo a extremo, autenticación robusta (JWT/OAuth), protección contra inyecciones SQL y XSS, y cumplimiento normativo."
        },
        {
          q: "¿Cuál es el tiempo promedio de desarrollo?",
          a: "Depende del alcance técnico. Landing pages avanzadas toman de 1 a 2 semanas, mientras que sistemas empresariales toman de 4 a 8 semanas. Tras la fase de Discovery, entregamos un cronograma exacto."
        },
        {
          q: "¿Pueden asumir proyectos legados de otros desarrolladores?",
          a: "Sí. Realizamos una auditoría de código (Code Review) inicial. Si la base es recuperable, la refactorizamos y modernizamos. Si está muy comprometida, proponemos una reescritura modular."
        },
        {
          q: "¿Cómo funciona el soporte posterior al lanzamiento?",
          a: "Ofrecemos SLAs para garantizar respuesta inmediata ante incidentes, además de paquetes de soporte continuo para incorporación de nuevas funciones y monitoreo de infraestructura."
        }
      ]
    },
    cta: {
      title: "El siguiente paso en su <br/><span class='text-gradient'>evolución tecnológica.</span>",
      description: "Adopte ingeniería de software de primer nivel y deje a sus competidores lidiando con sistemas lentos. El momento de escalar es ahora.",
      button: "Iniciar Proyecto Ahora"
    },
    contact: {
      title: "Solicite su presupuesto <span class='text-gradient'>sin compromiso.</span>",
      description: "Cuéntenos sobre sus objetivos. Analizaremos su caso y diseñaremos la arquitectura de software ideal para su negocio.",
      directTitle: "¿Prefiere hablar directo?",
      directBtn: "Conversar Directamente por WhatsApp",
      nameLabel: "Nombre *",
      namePlaceholder: "Su nombre completo",
      companyLabel: "Nombre de la empresa (opcional)",
      companyPlaceholder: "Su empresa",
      phoneLabel: "WhatsApp / Teléfono *",
      phonePlaceholder: "+00 00000-0000",
      serviceLabel: "Tipo de servicio deseado *",
      servicePlaceholder: "Seleccione una opción...",
      services: [
        "Creación de sitio web",
        "Landing page estratégica",
        "Página de ventas o captura de leads",
        "Sistema de gestión o ERP a medida",
        "Aplicación web o móvil",
        "Automatización de procesos",
        "Integración entre sistemas y APIs",
        "Modernización de sistema legado",
        "Consultoría tecnológica",
        "Otro / Aún no sé qué solución necesito"
      ],
      descLabel: "Descripción de la necesidad (opcional)",
      descPlaceholder: "Cuéntenos un poco sobre su proyecto y metas...",
      submitBtn: "Solicitar presupuesto por WhatsApp",
      errorName: "Por favor, ingrese su nombre.",
      errorPhone: "Por favor, ingrese un número de WhatsApp válido.",
      errorService: "Por favor, seleccione un servicio."
    },
    footer: {
      desc: "Ingeniería de software y sistemas de diseño premium para operaciones que exigen escala, seguridad y alto rendimiento.",
      col1Title: "Soluciones",
      col2Title: "Empresa",
      rights: "Todos los derechos reservados.",
      terms: "Términos de Uso",
      privacy: "Política de Privacidad"
    }
  }
};
