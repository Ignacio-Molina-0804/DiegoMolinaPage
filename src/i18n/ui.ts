export const languageList = {
  es: "Español",
  pt: "Portugues",
  // Nota: Para agregar francés, añadir: fr: "Français"
};

export const labels = {
  es: {

    // Footer

    "footer.text": 
    `
      <p class="text-sm text-gray-400 text-center md:text-right">
        © 2025 Diego Molina. Todos los derechos reservados.
      </p>    
    `,

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
  },

  pt: {
    // Footer

    "footer.text": 
    `
      <p class="text-sm text-gray-400 text-center md:text-right">
        © 2025 Diego Molina. Todos os direitos reservados.
      </p>    
    `,

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
  },
};
