// ========================================
// BCP Corredora de Seguros - Asistente Virtual Inteligente
// Base de conocimiento completa de toda la web
// ========================================

(function() {
    'use strict';

    // ========================================
    // CONFIGURACIÓN DEL ASISTENTE
    // ========================================
    const ASSISTANT_CONFIG = {
        name: 'Sofía',
        role: 'Asistente Virtual BCP',
        typingDelay: { min: 600, max: 1500 },
        greetingDelay: 500,
        version: '2.0'
    };

    // ========================================
    // BASE DE CONOCIMIENTO COMPLETA
    // ========================================
    const KNOWLEDGE_BASE = {

        // --- INFORMACIÓN GENERAL DE LA EMPRESA ---
        empresa: {
            nombre: 'BCP Corredora de Seguros',
            tipo: 'Corredora de seguros independiente',
            descripcion: 'Somos una corredora de seguros independiente, lo que significa que trabajamos para ti y no para las compañías aseguradoras. Nuestro objetivo es asesorarte de forma transparente, comparar alternativas reales y acompañarte antes, durante y después de la contratación del seguro, especialmente al momento de un siniestro.',
            propuesta: 'Comparamos las mejores aseguradoras del mercado para entregarte la cobertura correcta, al mejor precio y con respaldo real en cada etapa.',
            experiencia: '15+ años de experiencia en el mercado chileno',
            clientes: '25,000+ familias protegidas',
            satisfaccion: '98% de satisfacción de clientes',
            aseguradoras: 5,
            respuesta: 'Menos de 24 horas para cotizaciones',
            atencion: '24/7',
            valores: [
                'Asesoría Personalizada: Cada cliente es único. Entendemos tus necesidades específicas.',
                'Transparencia Total: Sin letra pequeña ni sorpresas. Te explicamos claramente qué cubre y qué no cubre tu seguro.',
                'Comparación Real de Pólizas: Trabajamos con múltiples aseguradoras para encontrar la mejor alternativa.',
                'Acompañamiento en Siniestros: Cuando ocurre un imprevisto, no te dejamos solo. Gestionamos con la aseguradora y defendemos tus intereses.',
                'Confianza y Cercanía: Construimos relaciones de largo plazo basadas en la confianza y el respeto.'
            ]
        },

        // --- CONTACTO ---
        contacto: {
            telefono: '600 6000 292',
            celular: '226 799 700',
            whatsapp: '+56600600292',
            whatsappUrl: 'https://wa.me/56600600292?text=Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20seguros',
            email: 'info@bcp.cl',
            emailCotizaciones: 'cotizaciones@bcp.cl',
            horario: 'Lunes a Viernes de 8:00 a 18:00 hrs. Sábados de 9:00 a 14:00 hrs.',
            formularioContacto: 'pages/contacto.html'
        },

        // --- SEGUROS AUTOMOTRIZ ---
        seguroAuto: {
            nombre: 'Seguro Automotriz',
            descripcion: 'Protege tu vehículo frente a accidentes, robo y daños a terceros con coberturas adaptadas a tu uso y presupuesto.',
            coberturas: [
                'Daños Propios: Cobertura para reparaciones de tu vehículo por accidentes de tránsito, choque, vuelco y otros eventos.',
                'Robo: Protección frente al robo total o parcial de tu vehículo, incluyendo accesorios y equipamiento.',
                'Responsabilidad Civil: Cobertura por daños materiales y lesiones causadas a terceros en caso de accidente.',
                'Asistencia en Ruta: Servicio de grúa, mecánico a domicilio, carga de batería y cambio de neumáticos 24/7.',
                'Auto de Reemplazo: Vehículo de reemplazo mientras el tuyo está en reparación por un siniestro cubierto.'
            ],
            url: 'pages/seguro-auto.html',
            cotizarUrl: 'pages/cotizador.html?type=auto'
        },

        // --- SEGURO HOGAR ---
        seguroHogar: {
            nombre: 'Seguro Hogar',
            descripcion: 'Tu casa es tu patrimonio y tu tranquilidad. Protegemos tu vivienda y bienes frente a los principales riesgos.',
            coberturas: [
                'Incendio y Daños Estructurales: Protección contra incendios, explosiones y daños a la estructura.',
                'Robo e Intento de Robo: Cobertura contra robo de contenido, daños por intento de robo y vandalismo.',
                'Daños por Agua: Protección frente a filtraciones, roturas de cañerías e inundaciones.',
                'Sismo y Eventos Naturales: Cobertura ante terremotos, temporales y otros fenómenos naturales.',
                'Responsabilidad Civil Familiar: Protección por daños que tú o tu familia puedan causar a terceros.',
                'Asistencia Hogar: Servicios de cerrajería, plomería, electricidad y más disponibles 24/7.'
            ],
            idealPara: ['Propietarios', 'Arrendatarios', 'Crédito Hipotecario'],
            url: 'pages/seguro-hogar.html',
            cotizarUrl: 'pages/cotizador.html?type=home'
        },

        // --- SEGUROS PARA PERSONAS ---
        segurosPersonas: {
            nombre: 'Seguros para Personas',
            descripcion: 'Protegemos tu salud, tu vida y tu tranquilidad con coberturas claras y flexibles.',
            tipos: {
                vida: {
                    nombre: 'Seguros de Vida',
                    descripcion: 'Protección financiera para ti y tu familia frente a eventos inesperados.',
                    subtipos: [
                        'Seguro de Vida Tradicional: Entrega respaldo económico a tus beneficiarios en caso de fallecimiento.',
                        'Seguro de Vida con Ahorro: Combina protección y ahorro a largo plazo, ideal para planificación financiera, metas futuras o complemento de jubilación.',
                        'Seguro de Accidentes Personales: Cobertura frente a accidentes que puedan generar invalidez, incapacidad o fallecimiento.'
                    ]
                },
                salud: {
                    nombre: 'Seguro de Salud',
                    descripcion: 'Cobertura médica para consultas, exámenes, hospitalizaciones y tratamientos. Accede a consultas médicas, exámenes de laboratorio, hospitalizaciones y tratamientos especializados con cobertura adaptada a tus necesidades.'
                },
                viaje: {
                    nombre: 'Seguro de Viaje',
                    descripcion: 'Protección ante emergencias médicas, pérdida de equipaje, cancelaciones de vuelo y más. Cobertura nacional e internacional.'
                },
                mascotas: {
                    nombre: 'Seguro de Mascotas',
                    descripcion: 'Cobertura veterinaria completa, incluyendo consultas, cirugías, medicamentos y asistencia integral para perros y gatos.'
                }
            },
            url: 'pages/seguros-personas.html'
        },

        // --- SEGUROS EMPRESARIALES ---
        segurosEmpresas: {
            nombre: 'Seguros para Empresas y Comunidades',
            descripcion: 'Soluciones integrales para proteger operaciones, contratos, activos y responsabilidades legales.',
            tipos: [
                'Seguro Complementario de Salud: Beneficio clave para atraer y retener talento. Complementa la cobertura de salud de tus colaboradores.',
                'Seguro de Vida Colectivo: Protección económica para colaboradores y sus familias ante eventos inesperados.',
                'Seguro de Accidentes: Cobertura frente a accidentes laborales y extra laborales.',
                'Seguro de Responsabilidad Civil: Protege a la empresa frente a daños a terceros derivados de su actividad.',
                'Seguro Multirriesgo Empresa: Cobertura integral para oficinas, bodegas, locales comerciales e instalaciones productivas.',
                'Seguro de Flota de Vehículos: Cobertura especializada para flotas empresariales (camiones, furgones, camionetas, vehículos de transporte y reparto).',
                'Seguro de Garantía: Respalda obligaciones contractuales. Incluye fiel cumplimiento, seriedad de la oferta, anticipos y correcta ejecución.',
                'Seguro Todo Riesgo de Construcción: Protección integral para obras en ejecución incluyendo daños a la obra, robo de materiales, errores de ejecución, eventos naturales y responsabilidad civil.'
            ],
            comunidades: {
                nombre: 'Seguro de Comunidad (Edificios y Condominios)',
                descripcion: 'Seguro obligatorio conforme a la Ley de Copropiedad. Asesoramos a administradores y comités para contratar la cobertura correcta.',
                coberturas: ['Incendio del edificio', 'Daños estructurales', 'Sismo (según póliza)', 'Responsabilidad civil', 'Bienes y áreas comunes']
            },
            url: 'pages/seguros-empresas.html'
        },

        // --- PROCESO DE COTIZACIÓN ---
        comoCotizar: {
            pasos: [
                '1. Analizamos tu necesidad: Escuchamos qué quieres proteger y entendemos tu situación.',
                '2. Comparamos opciones reales: Cotizamos con múltiples aseguradoras para encontrar la mejor alternativa.',
                '3. Te explicamos en lenguaje simple: Sin letra chica ni términos confusos. Todo claro y directo.',
                '4. Tú decides: Eliges la opción que más te convenga, con toda la información sobre la mesa.',
                '5. Te acompañamos siempre: Antes, durante y después de la contratación. Especialmente en siniestros.'
            ],
            beneficios: [
                'Cotización gratuita y sin compromiso',
                'Comparamos múltiples aseguradoras',
                'Asesoría personalizada',
                'Respuesta en menos de 24 horas',
                'Mejores precios del mercado'
            ],
            url: 'pages/cotizador.html'
        },

        // --- SINIESTROS ---
        siniestros: {
            descripcion: 'Cuando ocurre un imprevisto, no te dejamos solo. Te orientamos en el proceso, gestionamos con la aseguradora y defendemos tus intereses para que el seguro responda como corresponde.',
            telefonoFijo: '600 6000 292',
            celular: '226 799 700',
            whatsapp: 'https://wa.me/56600600292?text=Hola%2C%20necesito%20reportar%20un%20siniestro'
        },

        // --- FAQ ---
        faq: [
            {
                pregunta: '¿Tiene costo contratar a través de una corredora?',
                respuesta: 'No. El precio es el mismo que contratar directo con la aseguradora. Nuestro servicio de asesoría no tiene costo adicional para ti.'
            },
            {
                pregunta: '¿Trabajan con varias compañías?',
                respuesta: 'Sí, somos independientes. Trabajamos con las principales compañías aseguradoras del mercado para ofrecerte las mejores opciones.'
            },
            {
                pregunta: '¿Me ayudan en un siniestro?',
                respuesta: 'Sí, ese es uno de nuestros principales valores. Te orientamos en el proceso, gestionamos con la aseguradora y defendemos tus intereses.'
            },
            {
                pregunta: '¿Puedo cambiar mi seguro actual?',
                respuesta: 'Sí, revisamos tu póliza actual y te asesoramos para encontrar una mejor alternativa si la hay.'
            }
        ],

        // --- COMPAÑÍAS ASEGURADORAS ---
        aseguradoras: ['BCP Seguros', 'BNP Paribas', 'Penta Security', 'EuroAmérica', 'Bice Vida']
    };

    // ========================================
    // SISTEMA DE DETECCIÓN DE INTENCIONES
    // ========================================
    const INTENTS = [
        {
            id: 'saludo',
            keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'que tal', 'buenas', 'hi', 'hello', 'ola', 'buen dia'],
            priority: 10
        },
        {
            id: 'despedida',
            keywords: ['adios', 'adiós', 'chao', 'bye', 'hasta luego', 'nos vemos', 'gracias por todo', 'me despido'],
            priority: 10
        },
        {
            id: 'agradecimiento',
            keywords: ['gracias', 'muchas gracias', 'te agradezco', 'genial', 'excelente', 'perfecto', 'super', 'buenisimo'],
            priority: 9
        },
        {
            id: 'quienes_somos',
            keywords: ['quienes son', 'quién es', 'quien es', 'sobre ustedes', 'empresa', 'corredora', 'independiente', 'nosotros', 'bcp', 'que hacen', 'qué hacen', 'a que se dedican'],
            priority: 7
        },
        {
            id: 'seguro_auto',
            keywords: ['auto', 'automovil', 'automóvil', 'vehiculo', 'vehículo', 'carro', 'coche', 'automotriz', 'moto', 'camioneta', 'seguro auto', 'seguro de auto'],
            priority: 8
        },
        {
            id: 'seguro_hogar',
            keywords: ['hogar', 'casa', 'departamento', 'depto', 'vivienda', 'propiedad', 'arriendo', 'arrendatario', 'propietario', 'hipotecario', 'incendio casa'],
            priority: 8
        },
        {
            id: 'seguro_vida',
            keywords: ['vida', 'fallecimiento', 'beneficiarios', 'vida tradicional', 'vida con ahorro', 'seguro de vida'],
            priority: 8
        },
        {
            id: 'seguro_salud',
            keywords: ['salud', 'medico', 'médico', 'hospital', 'clinica', 'clínica', 'enfermedad', 'consulta medica', 'examen', 'hospitalizacion'],
            priority: 8
        },
        {
            id: 'seguro_viaje',
            keywords: ['viaje', 'viajar', 'vuelo', 'avion', 'avión', 'equipaje', 'vacaciones', 'turismo', 'exterior', 'internacional'],
            priority: 8
        },
        {
            id: 'seguro_mascotas',
            keywords: ['mascota', 'mascotas', 'perro', 'gato', 'veterinario', 'veterinaria', 'animal', 'regalon', 'regalón'],
            priority: 8
        },
        {
            id: 'seguro_empresa',
            keywords: ['empresa', 'empresarial', 'corporativo', 'negocio', 'pyme', 'flota', 'construccion', 'construcción', 'garantia', 'garantía', 'colectivo', 'complementario salud', 'responsabilidad civil empresa'],
            priority: 7
        },
        {
            id: 'seguro_comunidad',
            keywords: ['comunidad', 'edificio', 'condominio', 'copropiedad', 'administrador', 'comite', 'comité', 'areas comunes', 'áreas comunes'],
            priority: 8
        },
        {
            id: 'cotizar',
            keywords: ['cotizar', 'cotizacion', 'cotización', 'precio', 'valor', 'costo', 'cuanto', 'cuánto', 'cuanto cuesta', 'cuánto vale', 'presupuesto', 'contratar', 'comprar', 'adquirir', 'quiero un seguro'],
            priority: 9
        },
        {
            id: 'siniestro',
            keywords: ['siniestro', 'accidente', 'denuncia', 'denunciar', 'choque', 'robo', 'incendio', 'daño', 'daños', 'reclamo', 'me robaron', 'tuve un accidente', 'me chocaron'],
            priority: 9
        },
        {
            id: 'contacto',
            keywords: ['contacto', 'contactar', 'llamar', 'telefono', 'teléfono', 'whatsapp', 'email', 'correo', 'escribir', 'comunicar', 'hablar con alguien', 'asesor', 'ejecutivo', 'numero', 'número'],
            priority: 8
        },
        {
            id: 'horario',
            keywords: ['horario', 'hora', 'abierto', 'atencion', 'atención', 'cuando atienden', 'disponible', 'lunes', 'sabado', 'sábado'],
            priority: 7
        },
        {
            id: 'proceso',
            keywords: ['como funciona', 'cómo funciona', 'proceso', 'pasos', 'como cotizar', 'cómo cotizar', 'que hago', 'qué hago', 'como empiezo', 'cómo empiezo'],
            priority: 7
        },
        {
            id: 'costo_corredora',
            keywords: ['costo corredora', 'cobran', 'comision', 'comisión', 'gratis', 'gratuito', 'es gratis', 'tiene costo', 'hay que pagar'],
            priority: 8
        },
        {
            id: 'cambiar_seguro',
            keywords: ['cambiar', 'cambio', 'migrar', 'mejorar', 'otra poliza', 'otra póliza', 'ya tengo seguro', 'tengo un seguro', 'renovar', 'renovacion'],
            priority: 7
        },
        {
            id: 'aseguradoras',
            keywords: ['aseguradora', 'aseguradoras', 'compañia', 'compañía', 'companias', 'compañías', 'con quien trabajan', 'que aseguradoras', 'qué compañías'],
            priority: 7
        },
        {
            id: 'seguros_general',
            keywords: ['seguro', 'seguros', 'que seguros', 'qué seguros', 'tipos de seguro', 'opciones', 'que ofrecen', 'qué ofrecen', 'productos', 'servicios'],
            priority: 5
        },
        {
            id: 'faq',
            keywords: ['pregunta', 'duda', 'consulta', 'faq', 'preguntas frecuentes', 'información', 'informacion'],
            priority: 4
        }
    ];

    // ========================================
    // RESPUESTAS DEL ASISTENTE
    // ========================================
    function getResponse(intentId, userMessage) {
        const kb = KNOWLEDGE_BASE;
        const lowerMsg = userMessage.toLowerCase();

        switch(intentId) {
            case 'saludo':
                return {
                    text: `¡Hola! Soy ${ASSISTANT_CONFIG.name}, la asistente virtual de BCP Corredora de Seguros. Estoy aquí para ayudarte con cualquier consulta sobre nuestros seguros, cotizaciones, siniestros o información general.\n\n¿En qué puedo ayudarte hoy?`,
                    suggestions: ['Quiero cotizar un seguro', '¿Qué seguros ofrecen?', '¿Cómo funciona el proceso?', 'Necesito reportar un siniestro']
                };

            case 'despedida':
                return {
                    text: `¡Fue un gusto ayudarte! Recuerda que en BCP estamos siempre disponibles para ti. Si necesitas algo más, no dudes en escribirme.\n\n📞 600 6000 292\n💬 WhatsApp disponible\n📧 info@bcp.cl\n\n¡Que tengas un excelente día!`,
                    suggestions: []
                };

            case 'agradecimiento':
                return {
                    text: '¡De nada! Me alegra poder ayudarte. ¿Hay algo más en lo que pueda asistirte? Estoy aquí para lo que necesites.',
                    suggestions: ['Quiero cotizar un seguro', 'Tengo otra consulta', 'Quiero hablar con un asesor']
                };

            case 'quienes_somos':
                return {
                    text: `**BCP Corredora de Seguros** es una corredora independiente, lo que significa que trabajamos para ti y no para las aseguradoras.\n\n🎯 **Nuestro objetivo:** Asesorarte de forma transparente, comparar alternativas reales y acompañarte antes, durante y después de la contratación.\n\n✅ Más de 15 años de experiencia\n✅ 25,000+ familias protegidas\n✅ 98% de satisfacción\n✅ Trabajamos con 5 aseguradoras líderes\n\nNuestros valores: asesoría personalizada, transparencia total, comparación real de pólizas, acompañamiento en siniestros, y confianza y cercanía.`,
                    suggestions: ['¿Qué seguros ofrecen?', '¿Tiene costo su asesoría?', '¿Cómo puedo cotizar?', '¿Con qué aseguradoras trabajan?']
                };

            case 'seguro_auto':
                return {
                    text: `🚗 **Seguro Automotriz BCP**\n\nProtege tu vehículo frente a accidentes, robo y daños a terceros con coberturas adaptadas a tu uso y presupuesto.\n\n**Coberturas habituales:**\n• **Daños Propios** — Reparaciones por accidentes, choque, vuelco\n• **Robo** — Robo total o parcial, accesorios y equipamiento\n• **Responsabilidad Civil** — Daños a terceros en caso de accidente\n• **Asistencia en Ruta 24/7** — Grúa, mecánico, batería, neumáticos\n• **Auto de Reemplazo** — Vehículo mientras el tuyo se repara\n\nComparamos entre las mejores aseguradoras para encontrar la cobertura ideal para ti.`,
                    suggestions: ['Cotizar seguro automotriz', '¿Cuánto cuesta?', 'Ver otros seguros', 'Hablar con un asesor'],
                    link: { text: 'Ver detalles del Seguro Automotriz', url: getPageUrl('seguro-auto.html') }
                };

            case 'seguro_hogar':
                return {
                    text: `🏠 **Seguro Hogar BCP**\n\nTu casa es tu patrimonio y tu tranquilidad. Protegemos tu vivienda y bienes frente a los principales riesgos.\n\n**Coberturas:**\n• **Incendio y Daños Estructurales** — Incendios, explosiones, daños a la estructura\n• **Robo e Intento de Robo** — Contenido, vandalismo\n• **Daños por Agua** — Filtraciones, roturas de cañerías, inundaciones\n• **Sismo y Eventos Naturales** — Terremotos, temporales\n• **Responsabilidad Civil Familiar** — Daños que tú o tu familia causen a terceros\n• **Asistencia Hogar 24/7** — Cerrajería, plomería, electricidad\n\n**Ideal para:** Propietarios, Arrendatarios y quienes tienen Crédito Hipotecario.`,
                    suggestions: ['Cotizar seguro hogar', '¿Cubre terremotos?', 'Ver otros seguros', 'Hablar con un asesor'],
                    link: { text: 'Ver detalles del Seguro Hogar', url: getPageUrl('seguro-hogar.html') }
                };

            case 'seguro_vida':
                return {
                    text: `❤️ **Seguros de Vida BCP**\n\nProtección financiera para ti y tu familia frente a eventos inesperados.\n\n**Tipos disponibles:**\n\n🛡️ **Seguro de Vida Tradicional**\nEntrega respaldo económico a tus beneficiarios en caso de fallecimiento.\n\n🐖 **Seguro de Vida con Ahorro**\nCombina protección y ahorro a largo plazo. Ideal para planificación financiera, metas futuras o complemento de jubilación.\n\n🏥 **Seguro de Accidentes Personales**\nCobertura frente a accidentes que puedan generar invalidez, incapacidad o fallecimiento, tanto en el ámbito personal como laboral.`,
                    suggestions: ['Cotizar seguro de vida', '¿Cuál me conviene?', 'Ver seguros de salud', 'Hablar con un asesor'],
                    link: { text: 'Ver Seguros para Personas', url: getPageUrl('seguros-personas.html') }
                };

            case 'seguro_salud':
                return {
                    text: `🏥 **Seguro de Salud BCP**\n\nCobertura médica para consultas, exámenes, hospitalizaciones y tratamientos.\n\nAccede a:\n• Consultas médicas\n• Exámenes de laboratorio\n• Hospitalizaciones\n• Tratamientos especializados\n\nCobertura adaptada a tus necesidades. Comparamos entre las mejores opciones del mercado para encontrar el plan perfecto para ti y tu familia.`,
                    suggestions: ['Cotizar seguro de salud', 'Ver seguro de vida', 'Ver todos los seguros', 'Hablar con un asesor'],
                    link: { text: 'Ver detalles del Seguro de Salud', url: getPageUrl('seguro-salud.html') }
                };

            case 'seguro_viaje':
                return {
                    text: `✈️ **Seguro de Viaje BCP**\n\nProtección completa para viajar con tranquilidad, ya sea dentro de Chile o al extranjero.\n\n**Cobertura incluye:**\n• Emergencias médicas\n• Pérdida de equipaje\n• Cancelaciones de vuelo\n• Asistencia legal\n• Cobertura nacional e internacional\n\n¡No viajes sin protección! Cotiza tu seguro de viaje y viaja tranquilo.`,
                    suggestions: ['Cotizar seguro de viaje', 'Ver seguro de mascotas', 'Ver todos los seguros', 'Hablar con un asesor'],
                    link: { text: 'Ver detalles del Seguro de Viaje', url: getPageUrl('seguro-viaje.html') }
                };

            case 'seguro_mascotas':
                return {
                    text: `🐾 **Seguro de Mascotas BCP**\n\nProtege a tu mejor amigo con cobertura veterinaria completa.\n\n**Incluye:**\n• Consultas veterinarias\n• Cirugías\n• Medicamentos\n• Asistencia integral\n• Cobertura para perros y gatos\n\nPorque tu mascota es parte de tu familia y merece la mejor protección.`,
                    suggestions: ['Cotizar seguro de mascotas', 'Ver otros seguros', 'Hablar con un asesor'],
                    link: { text: 'Ver detalles del Seguro de Mascotas', url: getPageUrl('seguro-mascotas.html') }
                };

            case 'seguro_empresa':
                return {
                    text: `🏢 **Seguros para Empresas BCP**\n\nSoluciones integrales para proteger tu negocio:\n\n• **Complementario de Salud** — Beneficio para atraer y retener talento\n• **Vida Colectivo** — Protección para colaboradores y familias\n• **Accidentes Laborales** — Cobertura laboral y extra laboral\n• **Responsabilidad Civil** — Daños a terceros por actividad comercial\n• **Multirriesgo Empresa** — Oficinas, bodegas, locales\n• **Flota de Vehículos** — Camiones, furgones, camionetas\n• **Garantía** — Fiel cumplimiento, anticipos, correcta ejecución\n• **Todo Riesgo Construcción** — Obras en ejecución\n\nNuestros asesores especializados te ayudarán a encontrar la solución ideal.`,
                    suggestions: ['Cotizar seguro empresarial', 'Seguro de comunidad', 'Hablar con un asesor'],
                    link: { text: 'Ver Seguros para Empresas', url: getPageUrl('seguros-empresas.html') }
                };

            case 'seguro_comunidad':
                return {
                    text: `🏗️ **Seguro de Comunidad BCP**\n(Edificios y Condominios)\n\nSeguro **obligatorio** conforme a la Ley de Copropiedad. Asesoramos a administradores y comités para contratar la cobertura correcta.\n\n**Coberturas:**\n• Incendio del edificio\n• Daños estructurales\n• Sismo (según póliza)\n• Responsabilidad civil\n• Bienes y áreas comunes\n\n¿Eres administrador de un edificio o condominio? Podemos ayudarte con la cotización y asesoría.`,
                    suggestions: ['Cotizar seguro de comunidad', 'Ver seguros empresariales', 'Hablar con un asesor'],
                    link: { text: 'Ver Seguros para Comunidades', url: getPageUrl('seguros-empresas.html') }
                };

            case 'cotizar':
                return {
                    text: `¡Perfecto! Cotizar con nosotros es **gratis y sin compromiso**. Tienes varias opciones:\n\n📋 **Cotizador Online** — Completa nuestro formulario y recibe tu cotización en menos de 24 horas.\n\n📞 **Llámanos** — 600 6000 292 o 226 799 700\n\n💬 **WhatsApp** — Escríbenos directamente\n\n📧 **Email** — cotizaciones@bcp.cl\n\n¿Qué tipo de seguro te interesa cotizar?`,
                    suggestions: ['Seguro Automotriz', 'Seguro Hogar', 'Seguro de Vida', 'Seguro de Salud', 'Seguro de Viaje', 'Seguro Empresarial'],
                    link: { text: 'Ir al Cotizador Online', url: getPageUrl('cotizador.html') }
                };

            case 'siniestro':
                return {
                    text: `🛡️ **Reportar un Siniestro**\n\nEstamos contigo cuando más lo necesitas. Te orientamos en el proceso, gestionamos con la aseguradora y defendemos tus intereses.\n\n**Contacto directo para siniestros:**\n\n📞 **Teléfono fijo:** 600 6000 292\n📱 **Celulares:** 226 799 700\n💬 **WhatsApp:** Disponible para enviar tu reporte\n\nTe recomendamos tener a mano tu número de póliza y los detalles del incidente. Nuestro equipo te guiará paso a paso.`,
                    suggestions: ['Llamar por teléfono', 'Escribir por WhatsApp', 'Tengo otra consulta'],
                    link: { text: 'Contactar por WhatsApp para siniestro', url: kb.siniestros.whatsapp, external: true }
                };

            case 'contacto':
                return {
                    text: `📞 **Canales de Contacto BCP**\n\n• **Teléfono fijo:** 600 6000 292\n• **Desde celulares:** 226 799 700\n• **WhatsApp:** Escríbenos directamente\n• **Email general:** info@bcp.cl\n• **Email cotizaciones:** cotizaciones@bcp.cl\n• **Formulario web:** Disponible en nuestra página de contacto\n\n⏰ **Horario:** Lun-Vie 8:00-18:00 | Sáb 9:00-14:00\n\n¿Prefieres que un asesor te contacte? Solo dime y te guío.`,
                    suggestions: ['Escribir por WhatsApp', 'Ir al formulario de contacto', 'Quiero cotizar un seguro'],
                    link: { text: 'Ir a la página de Contacto', url: getPageUrl('contacto.html') }
                };

            case 'horario':
                return {
                    text: `⏰ **Horarios de Atención BCP**\n\n📅 **Lunes a Viernes:** 8:00 a 18:00 hrs\n📅 **Sábados:** 9:00 a 14:00 hrs\n📅 **Domingos y festivos:** Cerrado\n\nSin embargo, nuestro servicio de **asistencia en siniestros y ruta opera las 24 horas, los 7 días de la semana**.\n\nFuera de horario puedes dejarnos un mensaje por WhatsApp o email y te contactaremos a primera hora.`,
                    suggestions: ['Quiero cotizar un seguro', 'Necesito reportar un siniestro', '¿Cómo los contacto?']
                };

            case 'proceso':
                return {
                    text: `📋 **¿Cómo funciona cotizar con BCP?**\n\nEs muy sencillo, solo 5 pasos:\n\n**1️⃣ Analizamos tu necesidad**\nEscuchamos qué quieres proteger y entendemos tu situación.\n\n**2️⃣ Comparamos opciones reales**\nCotizamos con múltiples aseguradoras para encontrar la mejor alternativa.\n\n**3️⃣ Te explicamos en lenguaje simple**\nSin letra chica ni términos confusos. Todo claro y directo.\n\n**4️⃣ Tú decides**\nEliges la opción que más te convenga, con toda la información sobre la mesa.\n\n**5️⃣ Te acompañamos siempre**\nAntes, durante y después de la contratación. Especialmente en siniestros.\n\n¡Y todo esto sin costo adicional para ti!`,
                    suggestions: ['Quiero cotizar ahora', '¿Tiene costo?', '¿Con qué aseguradoras trabajan?', 'Hablar con un asesor']
                };

            case 'costo_corredora':
                return {
                    text: `💰 **¿Tiene costo contratar a través de BCP?**\n\n**¡No!** El precio es exactamente el mismo que si contratas directo con la aseguradora. Nuestro servicio de asesoría **no tiene costo adicional** para ti.\n\nLo que sí ganas contratando con nosotros:\n✅ Comparación entre múltiples aseguradoras\n✅ Asesoría experta y personalizada\n✅ Acompañamiento en caso de siniestros\n✅ Un aliado que defiende tus intereses\n\nEs decir, pagas lo mismo pero recibes mucho más valor.`,
                    suggestions: ['Quiero cotizar', '¿Cómo funciona el proceso?', '¿Qué seguros ofrecen?']
                };

            case 'cambiar_seguro':
                return {
                    text: `🔄 **¿Quieres cambiar o mejorar tu seguro actual?**\n\n¡Por supuesto que podemos ayudarte! Revisamos tu póliza actual y te asesoramos para encontrar una **mejor alternativa** si la hay.\n\n**¿Cómo lo hacemos?**\n1. Nos envías tu póliza actual (o los datos básicos)\n2. Comparamos con las opciones del mercado\n3. Te presentamos alternativas con mejor precio o cobertura\n4. Tú decides si quieres cambiar\n\nTodo sin costo y sin compromiso. ¿Quieres que un asesor revise tu caso?`,
                    suggestions: ['Sí, quiero que revisen mi póliza', 'Quiero cotizar uno nuevo', 'Hablar con un asesor']
                };

            case 'aseguradoras':
                return {
                    text: `🏦 **Compañías con las que trabajamos**\n\nSomos independientes y trabajamos con las principales aseguradoras del mercado chileno:\n\n• BCP Seguros\n• BNP Paribas\n• Penta Security\n• EuroAmérica\n• Bice Vida\n\nAl ser independientes, podemos comparar objetivamente y recomendarte la **mejor opción** según tu caso específico, sin estar atados a ninguna compañía en particular.`,
                    suggestions: ['Quiero cotizar', '¿Tiene costo la asesoría?', 'Ver tipos de seguros']
                };

            case 'seguros_general':
                return {
                    text: `📋 **Nuestros Seguros**\n\nOfrecemos soluciones de protección adaptadas a cada etapa de tu vida:\n\n**Para Personas:**\n🚗 Seguro Automotriz\n🏠 Seguro Hogar\n❤️ Seguros de Vida\n🏥 Seguro de Salud\n✈️ Seguro de Viaje\n🐾 Seguro de Mascotas\n\n**Para Empresas:**\n🏢 Seguros Empresariales (salud, vida colectivo, RC, multirriesgo, flota, garantía, construcción)\n\n**Para Comunidades:**\n🏗️ Seguro de Comunidad (edificios y condominios)\n\n¿Sobre cuál te gustaría saber más?`,
                    suggestions: ['Seguro Automotriz', 'Seguro Hogar', 'Seguros de Vida', 'Seguros Empresariales'],
                    link: { text: 'Ver todos nuestros seguros', url: getPageUrl('seguros.html') }
                };

            case 'faq':
                return {
                    text: `❓ **Preguntas Frecuentes**\n\nEstas son las consultas más comunes de nuestros clientes:\n\n**¿Tiene costo contratar a través de una corredora?**\nNo. El precio es el mismo que directo con la aseguradora.\n\n**¿Trabajan con varias compañías?**\nSí, somos independientes y trabajamos con las principales del mercado.\n\n**¿Me ayudan en un siniestro?**\nSí, te orientamos, gestionamos y defendemos tus intereses.\n\n**¿Puedo cambiar mi seguro actual?**\nSí, revisamos tu póliza y buscamos mejores alternativas.\n\n¿Tienes alguna otra pregunta? Estoy aquí para ayudarte.`,
                    suggestions: ['Quiero cotizar', '¿Cómo funciona el proceso?', 'Contactar un asesor']
                };

            default:
                return getDefaultResponse(userMessage);
        }
    }

    function getDefaultResponse(userMessage) {
        const lowerMsg = userMessage.toLowerCase();

        // Intentar detectar temas parciales
        if (lowerMsg.includes('seguro') || lowerMsg.includes('proteg') || lowerMsg.includes('cobertura')) {
            return {
                text: `Entiendo que tienes una consulta sobre seguros. Te puedo ayudar con información sobre cualquiera de nuestros productos:\n\n🚗 Automotriz | 🏠 Hogar | ❤️ Vida | 🏥 Salud | ✈️ Viaje | 🐾 Mascotas | 🏢 Empresas\n\n¿Sobre cuál te gustaría saber más? O si prefieres, puedo conectarte directamente con un asesor.`,
                suggestions: ['Seguro Automotriz', 'Seguro Hogar', 'Seguros de Vida', 'Cotizar un seguro', 'Hablar con un asesor']
            };
        }

        if (lowerMsg.includes('ayuda') || lowerMsg.includes('necesito') || lowerMsg.includes('quiero')) {
            return {
                text: `¡Claro! Estoy aquí para ayudarte. Puedo asistirte con:\n\n• Información sobre nuestros seguros\n• Cotizaciones y precios\n• Proceso de contratación\n• Reportar siniestros\n• Contacto con asesores\n\n¿Qué necesitas?`,
                suggestions: ['Quiero cotizar un seguro', '¿Qué seguros ofrecen?', 'Reportar un siniestro', 'Hablar con un asesor']
            };
        }

        // Respuesta por defecto amigable
        return {
            text: `Gracias por tu mensaje. Déjame ayudarte mejor. Puedo asistirte con:\n\n📋 **Información de seguros** — Auto, Hogar, Vida, Salud, Viaje, Mascotas, Empresas\n💰 **Cotizaciones** — Gratis y sin compromiso\n🛡️ **Siniestros** — Acompañamiento y gestión\n📞 **Contacto** — Teléfono, WhatsApp, Email\n\nTambién puedes escribirme sobre cualquier duda relacionada con seguros y haré lo posible por resolverla. ¿En qué te puedo ayudar?`,
            suggestions: ['¿Qué seguros ofrecen?', 'Quiero cotizar', 'Reportar un siniestro', 'Contactar un asesor']
        };
    }

    // ========================================
    // FUNCIONES AUXILIARES
    // ========================================
    function getPageUrl(page) {
        // Detectar si estamos en la raíz o en /pages/
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return page;
        }
        return 'pages/' + page;
    }

    function detectIntent(message) {
        const lowerMessage = normalizeText(message);
        let bestMatch = null;
        let bestScore = 0;

        for (const intent of INTENTS) {
            let score = 0;
            for (const keyword of intent.keywords) {
                if (lowerMessage.includes(keyword)) {
                    score += keyword.split(' ').length * intent.priority;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = intent.id;
            }
        }

        return bestMatch;
    }

    function normalizeText(text) {
        return text.toLowerCase()
            .normalize('NFD').replace(/[\u0301\u0300\u0302\u0303\u0308]/g, '') // Remover acentos
            .replace(/[¿?¡!.,;:()]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function formatMessage(text) {
        // Convertir markdown básico a HTML
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    function getRandomTypingDelay() {
        const { min, max } = ASSISTANT_CONFIG.typingDelay;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // ========================================
    // INTERFAZ DEL CHAT
    // ========================================
    let chatWindowElement = null;
    let isOpen = false;
    let conversationHistory = [];

    function createChatWidget() {
        // Remover el widget de WhatsApp existente si existe
        const existingWidget = document.querySelector('.chat-widget');
        if (existingWidget) {
            existingWidget.style.display = 'none';
        }

        // Crear el botón del chat
        const chatBtn = document.createElement('div');
        chatBtn.className = 'bcp-chat-widget';
        chatBtn.id = 'bcpChatWidget';
        chatBtn.innerHTML = `
            <div class="bcp-chat-btn" id="bcpChatBtn">
                <div class="bcp-chat-btn-icon">
                    <i class="fas fa-comment-dots"></i>
                </div>
                <div class="bcp-chat-btn-close" style="display:none;">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="bcp-chat-tooltip" id="bcpChatTooltip">
                <span>¡Hola! ¿Necesitas ayuda?</span>
                <button class="bcp-tooltip-close" aria-label="Cerrar">&times;</button>
            </div>
        `;
        document.body.appendChild(chatBtn);

        // Event listeners
        document.getElementById('bcpChatBtn').addEventListener('click', toggleChatWindow);

        const tooltipClose = chatBtn.querySelector('.bcp-tooltip-close');
        if (tooltipClose) {
            tooltipClose.addEventListener('click', function(e) {
                e.stopPropagation();
                document.getElementById('bcpChatTooltip').style.display = 'none';
            });
        }

        // Mostrar tooltip después de un retraso
        setTimeout(() => {
            const tooltip = document.getElementById('bcpChatTooltip');
            if (tooltip && !isOpen) {
                tooltip.classList.add('show');
            }
        }, 3000);
    }

    function toggleChatWindow() {
        if (isOpen) {
            closeChatWindow();
        } else {
            openChatWindow();
        }
    }

    function openChatWindow() {
        isOpen = true;

        // Ocultar tooltip
        const tooltip = document.getElementById('bcpChatTooltip');
        if (tooltip) tooltip.classList.remove('show');

        // Cambiar ícono
        const btnIcon = document.querySelector('.bcp-chat-btn-icon');
        const btnClose = document.querySelector('.bcp-chat-btn-close');
        if (btnIcon) btnIcon.style.display = 'none';
        if (btnClose) btnClose.style.display = 'flex';

        // Crear ventana
        if (!chatWindowElement) {
            chatWindowElement = document.createElement('div');
            chatWindowElement.className = 'bcp-chat-window';
            chatWindowElement.id = 'bcpChatWindow';
            chatWindowElement.innerHTML = `
                <div class="bcp-chat-header">
                    <div class="bcp-chat-header-info">
                        <div class="bcp-chat-avatar">
                            <img src="https://ui-avatars.com/api/?name=S&background=c9a43e&color=0f2942&size=80&bold=true&font-size=0.45" alt="${ASSISTANT_CONFIG.name}">
                            <span class="bcp-chat-status-dot"></span>
                        </div>
                        <div class="bcp-chat-header-text">
                            <h4>${ASSISTANT_CONFIG.name}</h4>
                            <span class="bcp-chat-status">En línea</span>
                        </div>
                    </div>
                    <div class="bcp-chat-header-actions">
                        <button class="bcp-chat-action-btn bcp-chat-whatsapp-btn" title="Continuar en WhatsApp" onclick="window.open('${KNOWLEDGE_BASE.contacto.whatsappUrl}', '_blank')">
                            <i class="fab fa-whatsapp"></i>
                        </button>
                        <button class="bcp-chat-action-btn bcp-chat-minimize-btn" title="Minimizar" onclick="window.BCPChat.close()">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="bcp-chat-messages" id="bcpChatMessages">
                </div>
                <div class="bcp-chat-suggestions" id="bcpChatSuggestions"></div>
                <div class="bcp-chat-input-area">
                    <div class="bcp-chat-input-container">
                        <input type="text" class="bcp-chat-input" id="bcpChatInput" placeholder="Escribe tu mensaje..." autocomplete="off">
                        <button class="bcp-chat-send-btn" id="bcpChatSend">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="bcp-chat-powered">
                        Asistente virtual de <strong>BCP Corredora de Seguros</strong>
                    </div>
                </div>
            `;
            document.body.appendChild(chatWindowElement);

            // Event listeners
            document.getElementById('bcpChatSend').addEventListener('click', handleUserMessage);
            document.getElementById('bcpChatInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') handleUserMessage();
            });

            // Enviar saludo inicial
            setTimeout(() => {
                const greeting = getResponse('saludo', 'hola');
                addBotMessage(greeting.text, greeting.suggestions, greeting.link);
            }, ASSISTANT_CONFIG.greetingDelay);
        }

        chatWindowElement.classList.add('open');
        setTimeout(() => {
            const input = document.getElementById('bcpChatInput');
            if (input) input.focus();
        }, 400);
    }

    function closeChatWindow() {
        isOpen = false;

        // Cambiar ícono
        const btnIcon = document.querySelector('.bcp-chat-btn-icon');
        const btnClose = document.querySelector('.bcp-chat-btn-close');
        if (btnIcon) btnIcon.style.display = 'flex';
        if (btnClose) btnClose.style.display = 'none';

        if (chatWindowElement) {
            chatWindowElement.classList.remove('open');
        }
    }

    function handleUserMessage() {
        const input = document.getElementById('bcpChatInput');
        const message = input.value.trim();
        if (!message) return;

        input.value = '';
        addUserMessage(message);

        // Ocultar sugerencias
        const suggestionsEl = document.getElementById('bcpChatSuggestions');
        if (suggestionsEl) suggestionsEl.innerHTML = '';

        // Mostrar indicador de escritura
        showTypingIndicator();

        // Detectar intención y responder
        setTimeout(() => {
            hideTypingIndicator();
            const intentId = detectIntent(message);
            const response = getResponse(intentId, message);
            addBotMessage(response.text, response.suggestions, response.link);

            conversationHistory.push({ user: message, intent: intentId });
        }, getRandomTypingDelay());
    }

    function addUserMessage(text) {
        const messagesEl = document.getElementById('bcpChatMessages');
        if (!messagesEl) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = 'bcp-msg bcp-msg-user';
        msgDiv.innerHTML = `
            <div class="bcp-msg-bubble">
                <div class="bcp-msg-text">${escapeHtml(text)}</div>
                <div class="bcp-msg-time">${getCurrentTime()}</div>
            </div>
        `;
        messagesEl.appendChild(msgDiv);
        scrollToBottom();
    }

    function addBotMessage(text, suggestions, link) {
        const messagesEl = document.getElementById('bcpChatMessages');
        if (!messagesEl) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = 'bcp-msg bcp-msg-bot';

        let linkHtml = '';
        if (link) {
            const target = link.external ? ' target="_blank" rel="noopener"' : '';
            linkHtml = `<a href="${link.url}" class="bcp-msg-link"${target}><i class="fas fa-external-link-alt"></i> ${link.text}</a>`;
        }

        msgDiv.innerHTML = `
            <div class="bcp-msg-avatar">
                <img src="https://ui-avatars.com/api/?name=S&background=c9a43e&color=0f2942&size=40&bold=true&font-size=0.45" alt="${ASSISTANT_CONFIG.name}">
            </div>
            <div class="bcp-msg-bubble">
                <div class="bcp-msg-text">${formatMessage(text)}</div>
                ${linkHtml}
                <div class="bcp-msg-time">${getCurrentTime()}</div>
            </div>
        `;
        messagesEl.appendChild(msgDiv);

        // Mostrar sugerencias
        if (suggestions && suggestions.length > 0) {
            showSuggestions(suggestions);
        }

        scrollToBottom();
    }

    function showSuggestions(suggestions) {
        const suggestionsEl = document.getElementById('bcpChatSuggestions');
        if (!suggestionsEl) return;

        suggestionsEl.innerHTML = suggestions.map(s =>
            `<button class="bcp-suggestion-chip">${s}</button>`
        ).join('');

        // Event listeners para sugerencias
        suggestionsEl.querySelectorAll('.bcp-suggestion-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                const text = this.textContent;
                const input = document.getElementById('bcpChatInput');
                if (input) {
                    input.value = text;
                    handleUserMessage();
                }
            });
        });
    }

    function showTypingIndicator() {
        const messagesEl = document.getElementById('bcpChatMessages');
        if (!messagesEl) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'bcp-msg bcp-msg-bot bcp-typing-indicator';
        typingDiv.id = 'bcpTyping';
        typingDiv.innerHTML = `
            <div class="bcp-msg-avatar">
                <img src="https://ui-avatars.com/api/?name=S&background=c9a43e&color=0f2942&size=40&bold=true&font-size=0.45" alt="${ASSISTANT_CONFIG.name}">
            </div>
            <div class="bcp-msg-bubble">
                <div class="bcp-typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        messagesEl.appendChild(typingDiv);
        scrollToBottom();
    }

    function hideTypingIndicator() {
        const typingEl = document.getElementById('bcpTyping');
        if (typingEl) typingEl.remove();
    }

    function scrollToBottom() {
        const messagesEl = document.getElementById('bcpChatMessages');
        if (messagesEl) {
            setTimeout(() => {
                messagesEl.scrollTop = messagesEl.scrollHeight;
            }, 50);
        }
    }

    function getCurrentTime() {
        return new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ========================================
    // INICIALIZACIÓN
    // ========================================
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createChatWidget);
        } else {
            createChatWidget();
        }
    }

    // API pública
    window.BCPChat = {
        open: openChatWindow,
        close: closeChatWindow,
        toggle: toggleChatWindow
    };

    init();
})();
