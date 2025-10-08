export const languageList = {
  es: "Español",
  pt: "Portugues",
  // Nota: Para agregar francés, añadir: fr: "Français"
};

export const labels = {
  es: {
    // Footer

    "footer.text": `
      <p class="text-sm text-gray-400 text-center md:text-right">
        © 2025 Diego Molina. Todos los derechos reservados.
      </p>    
    `,
    "footer.membresia": "Membresía",

    // Home

    "home.titlePage": "Diego Molina | Redes de Mercadeo",
    "home.descriptionPage":
      "Descubre tu oportunidad en redes de mercadeo junto a Diego Molina. Crecimiento personal, libertad financiera y visión de futuro.",

    "home.buttonContact.title":
      "¿Querés dar el primer paso hacia una nueva experiencia?",
    "home.buttonContact.subtitle":
      "Hablemos y coordinemos tu primera toma de contacto.",
    "home.buttonContact.buttonText": "Ir a Contacto",

    "home.hero.texto": `
            <div class="z-10 text-white text-center md:text-left">
                <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                    Descubre tu oportunidad en <br />
                    <span class="text-[#00ff7f]">Redes de Mercadeo</span>
                </h1>
                <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
                    <span class="text-[#00ff7f] font-semibold">Súmate a nuestro equipo</span> y comienza
                    tu camino hacia una nueva experiencia de crecimiento personal y financiero.
                </p>
            </div>
        `,

    "home.section.whatigonnafind": `
            <section class="py-16 sm:py-24 px-6 text-center text-white">
                <h2 class="text-3xl sm:text-4xl font-bold mb-8">
                    ¿Qué vas a encontrar en <span class="text-[#00ff7f]">diegomolina.ar</span>?
                </h2>
                <p class="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-12">
                    Este espacio está diseñado para que descubras
                    <span class="text-[#00ff7f] font-semibold"> nuevas oportunidades</span>, 
                    aprendas de <span class="font-semibold">liderazgo</span>, escuches
                    <span class="font-semibold"> audios de inspiración</span>
                    y encuentres el camino para construir tu
                    <span class="text-[#00ff7f] font-semibold"> libertad personal y financiera</span>.
                </p>


                <!-- Tarjetas -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    <!-- SOBRE MI -->
                    <a href="/sobre-mi"
                    class="block p-6 rounded-xl shadow bg-white/5 border border-[#00ff7f]/50 hover:scale-105 transition">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Sobre Mi</h3>
                        <p>
                            Conocé mi historia, mis aprendizajes y el camino que me llevó a dedicarme a las
                            <span class="font-semibold">redes de mercadeo</span>.
                        </p>
                    </a>

                    <!-- OPORTUNIDAD -->
                    <a href="/oportunidad"
                    class="block p-6 rounded-xl shadow-lg hover:scale-105 transition
                    bg-gradient-to-br from-[#00ff7f]/20 to-[#00ff7f]/5
                    border border-[#00ff7f]/50 ring-1 sm:ring-2 ring-[#00ff7f]/30
                    hover:ring-[#00ff7f]/70 hover:shadow-[#00ff7f]/50">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Oportunidad</h3>
                        <p>
                            Descubrí cómo las <span class="font-semibold">redes de mercadeo</span>
                            pueden abrirte un <span class="font-semibold">nuevo futuro</span>.
                        </p>
                    </a>

                    <!-- INSPIRACIÓN -->
                    <a href="/audios"
                        class="block p-6 rounded-xl shadow bg-white/5 border border-[#00ff7f]/50 hover:scale-105 transition">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Inspiración</h3>
                        <p>
                        Acceso a <span class="font-semibold">audios</span> y mensajes que te ayudan
                        a mantener la <span class="font-semibold">energía</span> enfocada.
                        </p>
                    </a>
                </div>
            </section>
        `,
    "home.section.benefits": `
        <section class="py-16 sm:py-24 px-6 text-white text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-8">Beneficios de sumarte</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Tiempo Parcial</h3>
                <p>Ganás <span class="font-semibold">flexibilidad</span> para compartir más momentos con quienes más querés.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Crecimiento Exponencial</h3>
                <p>Mejorás tu <span class="font-semibold">mentalidad</span>, desarrollás <span class="font-semibold">habilidades</span> y creás nuevas oportunidades.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Ingresos</h3>
                <p>Construís un <span class="font-semibold">plan B financiero</span> que puede transformarse en tu principal fuente de ingresos.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Comunidad</h3>
                <p>Formás parte de un <span class="font-semibold">equipo de apoyo</span> que crece y avanza junto a vos.</p>
            </div>
            </div>
        </section>        
    `,

    // Sobre Mi

    "about.pageTitle" : "Sobre mí | Diego Molina | Redes de Mercadeo",
    "about.pageDescription" : "Conoce la historia de Diego Molina: quién soy, qué hacía antes y por qué decidí emprender en redes de mercadeo para transformar mi vida y la de otros.",

    "about.buttonContact.title":"¿Te sentís identificado con mi historia?",
    "about.buttonContact.subtitle":"Podés escribirme y dar el primer paso para construir tu propio camino.",
    "about.buttonContact.buttonText" : "Contactame",

    "about.title" : 
    `
        <h1 class="text-2xl sm:text-5xl font-bold text-center mb-10 sm:mb-20 pt-6">
        Conocé <span class="text-[#00ff7f]">mi historia</span>
        </h1>    
    `,
    "about.whoAmI":
    `
      <!-- Quién soy -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 flex justify-center">
          <img src="/pageImages/diegoPerfilAhora.webp" alt="Diego Molina"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">¿Quién soy?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Soy <span class="font-semibold text-[#00ff7f]">Diego Molina</span>: esposo, papá y <span class="font-semibold">emprendedor</span>.
            Me mueve la <span class="font-semibold text-[#00ff7f]">mentalidad de crecimiento</span> y la convicción de que cada
            <span class="font-semibold">desafío</span> es una <span class="font-semibold">oportunidad</span>.
          </p>
        </div>
      </div>    
    `,
    "about.whatDidIDoBefore":
    `
      <!-- Qué hacía antes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">¿Qué hacía antes?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Trabajaba en un <span class="font-semibold">empleo tradicional</span>, con <span class="font-semibold text-[#00ff7f]">poco tiempo</span>
            para mi familia y sin un <span class="font-semibold">plan B</span>.
          </p>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoPerfilAntes.webp" alt="Diego antes"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
    "about.howIFoundOutAboutTheProject":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 flex justify-center">
          <img src="/pageImages/diegoConFabi.webp" alt="Cómo conocí el proyecto"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">¿Cómo conocí el proyecto?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Un día, casi por casualidad, encontré una publicación en internet sobre un modelo de negocio distinto.
            Al principio desconfié, pero pronto entendí la clave: con la capacitación correcta y una actitud positiva,
            es totalmente posible construir algo grande y alcanzar esa estabilidad financiera que tanto buscaba.
          </p>
        </div>
      </div>
    `,
    "about.whyDidIDecideToEnter":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoLiderando.webp" alt="Diego Molina Liderando"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">¿Por qué decidí entrar?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Tres frases marcaron mi vida:
          </p>
          <div class="mt-2 space-y-2 text-sm sm:text-base md:text-lg">
            <p>• <span class="text-[#00ff7f] font-semibold">¿Cómo te ves en cinco años?</span></p>
            <p>• <span class="font-semibold">No esperes resultados distintos</span> si haces siempre lo mismo.</p>
            <p>• Lo más valioso no es el dinero, sino el <span class="text-[#00ff7f] font-semibold">tiempo con tu familia</span>.</p>
          </div>
        </div>
      </div>
    `,
    "about.mentoringLeaders":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">Mentoría de líderes</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            No caminé este camino solo. Tuve la oportunidad de aprender directamente de <span class="font-semibold text-[#00ff7f]">líderes de la industria</span>,
            personas con resultados comprobados que me guiaron en cada paso.  
            Gracias a sus consejos entendí la importancia de rodearse de quienes ya recorrieron el camino y que hoy
            inspiran a miles de emprendedores a alcanzar sus propios sueños.
          </p>
        </div>
        <div class="order-1 md:order-1 flex justify-center">
          <img src="/pageImages/diegoConLideres.webp" alt="Mentoría de líderes"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
    "about.whatAmILookingToConvey":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">¿Qué busco transmitir?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Mi misión es <span class="font-semibold">inspirar</span> a que más personas construyan
            <span class="text-[#00ff7f] font-semibold"> libertad</span>, con <span class="font-semibold">visión</span> y <span class="font-semibold">actitud positiva</span>.
          </p>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoTransmitiendo.webp" alt="Diego transmitiendo"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
  },

  pt: {
    // Footer

    "footer.text": `
      <p class="text-sm text-gray-400 text-center md:text-right">
        © 2025 Diego Molina. Todos os direitos reservados.
      </p>    
    `,
    "footer.membresia": "Assinatura",

    // Home

    "home.titlePage": "Diego Molina | Redes de Marketing",
    "home.descriptionPage":
      "Descubra sua oportunidade em redes de marketing com Diego Molina. Crescimento pessoal, liberdade financeira e visão de futuro.",

    "home.buttonContact.title":
      "Quer dar o primeiro passo para uma nova experiência?",
    "home.buttonContact.subtitle":
      "Vamos conversar e agendar seu primeiro contato.",
    "home.buttonContact.buttonText": "Ir para Contato",

    "home.hero.texto": `
            <div class="z-10 text-white text-center md:text-left">
                <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                    Descubra sua oportunidade em <br />
                    <span class="text-[#00ff7f]">Redes de Marketing</span>
                </h1>
                <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
                    <span class="text-[#00ff7f] font-semibold">Junte-se à nossa equipe</span> e comece
                    sua jornada para uma nova experiência de crescimento pessoal e financeiro.
                </p>
            </div>
        `,

    "home.section.whatigonnafind": `
            <section class="py-16 sm:py-24 px-6 text-center text-white">
                <h2 class="text-3xl sm:text-4xl font-bold mb-8">
                    O que você vai encontrar em <span class="text-[#00ff7f]">diegomolina.ar</span>?
                </h2>
                <p class="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-12">
                    Este espaço foi criado para que você descubra
                    <span class="text-[#00ff7f] font-semibold"> novas oportunidades</span>, 
                    aprenda sobre <span class="font-semibold">liderança</span>, ouça
                    <span class="font-semibold"> áudios de inspiração</span>
                    e encontre o caminho para construir sua
                    <span class="text-[#00ff7f] font-semibold"> liberdade pessoal e financeira</span>.
                </p>

                <!-- Cartões -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    <!-- SOBRE MIM -->
                    <a href="/sobre-mi"
                    class="block p-6 rounded-xl shadow bg-white/5 border border-[#00ff7f]/50 hover:scale-105 transition">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Sobre Mim</h3>
                        <p>
                            Conheça minha história, meus aprendizados e o caminho que me levou a me dedicar às
                            <span class="font-semibold">redes de marketing</span>.
                        </p>
                    </a>

                    <!-- OPORTUNIDADE -->
                    <a href="/oportunidad"
                    class="block p-6 rounded-xl shadow-lg hover:scale-105 transition
                    bg-gradient-to-br from-[#00ff7f]/20 to-[#00ff7f]/5
                    border border-[#00ff7f]/50 ring-1 sm:ring-2 ring-[#00ff7f]/30
                    hover:ring-[#00ff7f]/70 hover:shadow-[#00ff7f]/50">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Oportunidade</h3>
                        <p>
                            Descubra como as <span class="font-semibold">redes de marketing</span>
                            podem abrir um <span class="font-semibold">novo futuro</span> para você.
                        </p>
                    </a>

                    <!-- INSPIRAÇÃO -->
                    <a href="/audios"
                        class="block p-6 rounded-xl shadow bg-white/5 border border-[#00ff7f]/50 hover:scale-105 transition">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-[#00ff7f]">Inspiração</h3>
                        <p>
                        Acesso a <span class="font-semibold">áudios</span> e mensagens que ajudam
                        a manter sua <span class="font-semibold">energia</span> focada.
                        </p>
                    </a>
                </div>
            </section>
        `,
    "home.section.benefits": `
        <section class="py-16 sm:py-24 px-6 text-white text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-8">Benefícios de participar</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Tempo Parcial</h3>
                <p>Você ganha <span class="font-semibold">flexibilidade</span> para compartilhar mais momentos com quem você mais ama.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Crescimento Exponencial</h3>
                <p>Você melhora sua <span class="font-semibold">mentalidade</span>, desenvolve <span class="font-semibold">habilidades</span> e cria novas oportunidades.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Renda</h3>
                <p>Construa um <span class="font-semibold">plano B financeiro</span> que pode se tornar sua principal fonte de renda.</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition">
                <h3 class="text-xl sm:text-2xl font-semibold text-[#00ff7f] mb-4">Comunidade</h3>
                <p>Faça parte de uma <span class="font-semibold">equipe de apoio</span> que cresce e avança junto com você.</p>
            </div>
            </div>
        </section>        
    `,

    // Sobre Mim

    "about.pageTitle" : "Sobre mim | Diego Molina | Redes de Marketing",
    "about.pageDescription" : "Conheça a história de Diego Molina: quem sou, o que fazia antes e por que decidi empreender em redes de marketing para transformar minha vida e a de outros.",

    "about.buttonContact.title":"Você se identifica com a minha história?",
    "about.buttonContact.subtitle":"Você pode me escrever e dar o primeiro passo para construir seu próprio caminho.",
    "about.buttonContact.buttonText" : "Fale comigo",

    "about.title" : 
    `
        <h1 class="text-2xl sm:text-5xl font-bold text-center mb-10 sm:mb-20 pt-6">
        Conheça <span class="text-[#00ff7f]">minha história</span>
        </h1>    
    `,
    "about.whoAmI":
    `
      <!-- Quem sou -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 flex justify-center">
          <img src="/pageImages/diegoPerfilAhora.webp" alt="Diego Molina"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">Quem sou?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Sou <span class="font-semibold text-[#00ff7f]">Diego Molina</span>: esposo, pai e <span class="font-semibold">empreendedor</span>.
            Sou movido pela <span class="font-semibold text-[#00ff7f]">mentalidade de crescimento</span> e pela convicção de que cada
            <span class="font-semibold">desafio</span> é uma <span class="font-semibold">oportunidade</span>.
          </p>
        </div>
      </div>    
    `,
    "about.whatDidIDoBefore":
    `
      <!-- O que eu fazia antes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">O que eu fazia antes?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Trabalhava em um <span class="font-semibold">emprego tradicional</span>, com <span class="font-semibold text-[#00ff7f]">pouco tempo</span>
            para minha família e sem um <span class="font-semibold">plano B</span>.
          </p>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoPerfilAntes.webp" alt="Diego antes"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
    "about.howIFoundOutAboutTheProject":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 flex justify-center">
          <img src="/pageImages/diegoConFabi.webp" alt="Como conheci o projeto"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">Como conheci o projeto?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Um dia, quase por acaso, encontrei uma publicação na internet sobre um modelo de negócio diferente.
            No começo desconfiei, mas logo entendi o segredo: com o treinamento certo e uma atitude positiva,
            é totalmente possível construir algo grande e alcançar aquela estabilidade financeira que tanto buscava.
          </p>
        </div>
      </div>
    `,
    "about.whyDidIDecideToEnter":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoLiderando.webp" alt="Diego Molina Liderando"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">Por que decidi entrar?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Três frases marcaram minha vida:
          </p>
          <div class="mt-2 space-y-2 text-sm sm:text-base md:text-lg">
            <p>• <span class="text-[#00ff7f] font-semibold">Como você se vê em cinco anos?</span></p>
            <p>• <span class="font-semibold">Não espere resultados diferentes</span> se você faz sempre o mesmo.</p>
            <p>• O mais valioso não é o dinheiro, e sim o <span class="text-[#00ff7f] font-semibold">tempo com sua família</span>.</p>
          </div>
        </div>
      </div>
    `,
    "about.mentoringLeaders":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-2 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">Mentoria de líderes</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Não caminhei esse caminho sozinho. Tive a oportunidade de aprender diretamente com <span class="font-semibold text-[#00ff7f]">líderes da indústria</span>,
            pessoas com resultados comprovados que me guiaram em cada passo.  
            Graças aos seus conselhos, entendi a importância de estar perto de quem já percorreu o caminho e que hoje
            inspira milhares de empreendedores a alcançar seus próprios sonhos.
          </p>
        </div>
        <div class="order-1 md:order-1 flex justify-center">
          <img src="/pageImages/diegoConLideres.webp" alt="Mentoria de líderes"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
    "about.whatAmILookingToConvey":
    `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div class="order-2 md:order-1 bg-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm hover:scale-[1.02] transition">
          <h2 class="text-xl sm:text-3xl font-semibold text-[#00ff7f] mb-3">O que busco transmitir?</h2>
          <p class="text-sm sm:text-base md:text-lg leading-relaxed">
            Minha missão é <span class="font-semibold">inspirar</span> mais pessoas a construírem
            <span class="text-[#00ff7f] font-semibold"> liberdade</span>, com <span class="font-semibold">visão</span> e <span class="font-semibold">atitude positiva</span>.
          </p>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <img src="/pageImages/diegoTransmitiendo.webp" alt="Diego transmitindo"
            class="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-full object-cover" />
        </div>
      </div>
    `,
  },
};
