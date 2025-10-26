import React, { useState, useEffect } from 'react';

function App() {
  const [activeDemo, setActiveDemo] = useState('español');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Efecto para cambiar el estado activo de navegación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problema', 'tecnologia', 'solucion', 'impacto', 'demo'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header/Navbar */}
      <header className="bg-blue-800 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="font-bold text-white text-lg"></span>
            </div>
            <div>
              <h1 className="text-xl font-bold">EduMentor Chiapas</h1>
              <p className="text-blue-200 text-sm">Propuesta de Proyecto Educativo</p>
            </div>
          </div>
          
          {/* Menú para móviles */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Menú de navegación */}
          <nav className={`${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-blue-800 py-4' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 px-6 md:px-0">
              {[
                { id: 'hero', label: 'Inicio' },
                { id: 'problema', label: 'Problema' },
                { id: 'tecnologia', label: 'Tecnología' },
                { id: 'solucion', label: 'Solución' },
                { id: 'impacto', label: 'Impacto' },
                { id: 'demo', label: 'Prototipo' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`hover:text-blue-200 transition-colors font-medium ${
                      activeSection === item.id ? 'text-blue-300 border-b-2 border-blue-300' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section - Enfocada en la Propuesta */}
      <section id="hero" className="py-20 px-6 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-700 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-200 text-sm font-semibold">PROPUESTA DE PROYECTO</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                EduMentor AI Chiapas
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                La primera plataforma educativa con Inteligencia Artificial multilingüe para las comunidades indígenas de Chiapas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('problema')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span className="mr-2">📋</span>
                  Conocer Propuesta
                </button>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="bg-transparent hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">🎬</span>
                  Ver Prototipo
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Proyecto en fase de desarrollo - Buscando aprobación</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Mockup conceptual */}
                <div className="w-64 h-128 bg-gray-800 rounded-3xl p-4 shadow-2xl border-4 border-gray-700">
                  <div className="bg-blue-600 rounded-t-2xl p-3 text-white text-center">
                    <span className="font-bold">EduMentor AI</span>
                  </div>
                  <div className="bg-white h-full rounded-b-2xl p-4">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">AI</span>
                      </div>
                      <p className="text-gray-600 text-sm">Asistente educativo multilingüe</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <p className="text-blue-700 text-xs">¿En qué idioma prefieres aprender?</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Tseltal', 'Tsotsil', 'Español', 'Ch\'ol'].map((lang) => (
                        <button key={lang} className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-2 rounded-lg text-xs transition-colors">
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Badge de Propuesta */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">💡</span>
                    <span className="font-bold">PROPUESTA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: El Problema Educativo */}
      <section id="problema" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">La Crisis Educativa que Enfrentamos</h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            En Chiapas, la barrera lingüística está creando una generación perdida en el sistema educativo
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-700 mb-4">El Problema Central</h3>
              <p className="text-gray-700 mb-4">
                <strong>72% de estudiantes indígenas</strong> presentan rezago educativo significativo debido a que reciben enseñanza únicamente en español, 
                mientras que su lengua materna es tseltal, tsotsil, ch'ol u otras lenguas originarias.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Materiales educativos solo en español</li>
                <li>• Docentes sin herramientas para enseñanza multilingüe</li>
                <li>• Deserción escolar del 40% en comunidades indígenas</li>
                <li>• Pérdida de identidad cultural y lingüística</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Consecuencias</h3>
              <div className="space-y-4">
                {[
                  { number: "72%", text: "de estudiantes indígenas con rezago educativo" },
                  { number: "40%", text: "tasa de deserción escolar en comunidades" },
                  { number: "8", text: "lenguas originarias sin apoyo educativo digital" },
                  { number: "0", text: "aplicaciones educativas en lenguas chiapanecas" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold flex-shrink-0">
                      {item.number}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">⚠️ Urgencia Educativa</h3>
            <p className="text-yellow-700 text-center text-lg">
              Cada año que pasa, miles de estudiantes indígenas pierden oportunidades educativas debido a la falta de herramientas 
              que respeten su identidad lingüística y cultural.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Tecnología Propuesta */}
      <section id="tecnologia" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">Tecnología de Vanguardia para la Educación</h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Combinamos las últimas innovaciones en IA para crear una solución educativa realmente inclusiva
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">ML</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">Machine Learning</h3>
                  <p className="text-blue-600">Aprendizaje automático personalizado</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Análisis de patrones de aprendizaje individual en tiempo real",
                  "Sistema de recomendación adaptativa de contenidos",
                  "Detección temprana de rezago académico mediante predictores",
                  "Modelos entrenados con datos educativos de contextos chiapanecos",
                  "Algoritmos de gamificación basados en preferencias culturales"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">NLP</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-800">Procesamiento de Lenguaje Natural</h3>
                  <p className="text-purple-600">Comprensión multilingüe avanzada</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Modelos LLM especializados en 8 lenguas originarias",
                  "Sistema de traducción contextual preservando significado cultural",
                  "Reconocimiento de voz (speech-to-text) multilingüe",
                  "Síntesis de voz (text-to-speech) con acentos locales",
                  "Corpus lingüístico entrenado con hablantes nativos"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestra Solución */}
      <section id="solucion" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">Propuesta de Solución Integral</h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Cuatro pilares fundamentales para transformar la educación en Chiapas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "🌐",
                title: "Plataforma Multicanal",
                description: "App móvil ",
                features: ["Disponible 24/7", "Acceso multidispositivo"]
              },
              {
                icon: "🎯",
                title: "Tutor AI Personalizado",
                description: "Asistente educativo adaptativo",
                features: ["8 lenguas originarias", "Aprendizaje individual", "Plan de estudios personal"]
              },
              {
                icon: "📊",
                title: "Sistema de Monitoreo",
                description: "Seguimiento en tiempo real",
                features: ["Panel para docentes", "Alertas tempranas", "Analíticas de progreso"]
              },
              {
                icon: "🏫",
                title: "Contenido Cultural",
                description: "Educación contextualizada",
                features: ["Ejemplos locales", "Gamificación cultural", "Preservación lingüística"]
              }
            ].map((pilar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-200 p-6">
                <div className="text-4xl mb-4 text-center">{pilar.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">{pilar.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{pilar.description}</p>
                <ul className="space-y-2">
                  {pilar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fases de Implementación */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Fases de Desarrollo Propuestas</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { phase: "Fase 1", title: "Investigación", duration: "2 meses", tasks: ["Recopilación lingüística", "Diseño UX/UI", "Prototipo"] },
                { phase: "Fase 2", title: "Desarrollo Core", duration: "4 meses", tasks: ["Backend IA", "App móvil", "Modelos NLP"] },
                { phase: "Fase 3", title: "Piloto", duration: "3 meses", tasks: ["Pruebas", "Validación", "Ajustes"] },
                { phase: "Fase 4", title: "Escalado", duration: "3 meses", tasks: ["Lanzamiento", "Capacitación", "Soporte"] }
              ].map((fase, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-blue-800 mb-1">{fase.phase}</h4>
                  <p className="text-gray-700 font-semibold mb-2">{fase.title}</p>
                  <p className="text-blue-600 text-sm mb-3">{fase.duration}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {fase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>• {task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Impacto Esperado */}
      <section id="impacto" className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Impacto Social y Educativo Esperado</h2>
          <p className="text-xl text-center text-blue-200 mb-16 max-w-3xl mx-auto">
            Transformación educativa con beneficios medibles para las comunidades de Chiapas
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-4">+60%</div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Comprensión Educativa</h3>
              <p className="text-blue-200">Mejora en la comprensión de contenidos al aprender en lengua materna</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">-50%</div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Reducción de Deserción</h3>
              <p className="text-blue-200">Disminución en abandono escolar gracias al aprendizaje significativo</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400 mb-4">8</div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Lenguas Preservadas</h3>
              <p className="text-blue-200">Lenguas originarias integradas en la educación digital</p>
            </div>
          </div>

          {/* Beneficios a Largo Plazo */}
          <div className="bg-blue-700 bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm border border-blue-600">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-100">Beneficios a Largo Plazo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-300 mb-4">✅ Para Estudiantes</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>• Educación inclusiva y personalizada</li>
                  <li>• Fortalecimiento de identidad cultural</li>
                  <li>• Mejores oportunidades académicas</li>
                  <li>• Desarrollo de habilidades digitales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300 mb-4">✅ Para Comunidades</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>• Preservación lingüística y cultural</li>
                  <li>• Reducción de brecha digital</li>
                  <li>• Fortalecimiento educativo comunitario</li>
                  <li>• Modelo replicable para otras regiones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Prototipo Interactivo */}
      <section id="demo" className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">Prototipo Conceptual</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Experiencia interactiva que demuestra el funcionamiento propuesto
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 p-4 text-white text-center">
              <h3 className="text-xl font-bold">Simulador de EduMentor AI</h3>
              <p className="text-blue-200 text-sm">Prototipo de conversación multilingüe</p>
            </div>
            
            <div className="p-6">
              {/* Selector de idioma */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-3 font-semibold">Selecciona el idioma de interacción:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: 'español', name: 'Español', emoji: '🇲🇽' },
                    { code: 'tseltal', name: 'Tseltal', emoji: '🏔️' },
                    { code: 'tsotsil', name: 'Tsotsil', emoji: '⛰️' },
                    { code: 'chol', name: 'Ch\'ol', emoji: '🌄' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setActiveDemo(lang.code)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        activeDemo === lang.code
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <span className="mr-2">{lang.emoji}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat simulation */}
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        {activeDemo === 'español' && "¡Hola! Soy EduMentor AI. Estoy aquí para ayudarte con tus estudios. ¿Qué te gustaría aprender hoy?"}
                        {activeDemo === 'tseltal' && "¡K'uxi! EduMentor AI in. ¿Binti chaboli ta stujbil a'wok jich?"}
                        {activeDemo === 'tsotsil' && "¡K'usi! EduMentor AI in. ¿Binti ch'a stujbil awok otROj?"}
                        {activeDemo === 'chol' && "¡Ma'! EduMentor AI in. ¿Bajche' mi yambá tyi ich'el awok?"}
                      </p>
                      <p className="text-blue-600 text-sm">
                        Puedo explicarte matemáticas, ciencias, historia y más en tu idioma preferido.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">TÚ</span>
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder={
                          activeDemo === 'español' ? "Escribe tu pregunta aquí..." :
                          activeDemo === 'tseltal' ? "Aywojk'anej abi..." :
                          activeDemo === 'tsotsil' ? "Aywojk'anej abi..." :
                          "Aywojk'anej abi..."
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <div className="mt-2 flex gap-2">
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                          Enviar Pregunta
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center">
                          <span className="mr-1">🎤</span> Usar Voz
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ejemplos educativos */}
              <div className="mt-6">
                <p className="text-gray-600 text-sm mb-3">Ejemplos de interacción educativa:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Explícame las fracciones con ejemplos del maíz",
                    "¿Cómo funciona el ciclo del agua en nuestra región?",
                    "Cuéntame sobre los números mayas",
                    "¿Qué son los ecosistemas de Chiapas?"
                  ].map((ejemplo, index) => (
                    <button
                      key={index}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-lg text-sm text-left transition-colors border border-blue-200"
                    >
                      {ejemplo}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block max-w-2xl">
              <p className="text-yellow-800 text-sm">
                <strong>Nota para evaluadores:</strong> Este prototipo demuestra la capacidad de interacción multilingüe. 
                La versión final incluirá modelos de IA entrenados específicamente para cada lengua originaria, 
                con contenido culturalmente relevante y sistema de aprendizaje adaptativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Para Aprobación del Proyecto */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Aprobar este Proyecto?</h2>
          <p className="text-xl mb-8 opacity-90">
            Juntos podemos transformar la educación para miles de estudiantes indígenas en Chiapas
          </p>
          
          <div className="bg-white bg-opacity-20 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-30">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-bold text-lg mb-2">Impacto Inmediato</h3>
                <p className="text-green-100 text-sm">+5,000 estudiantes en el primer año</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-bold text-lg mb-2">Innovación</h3>
                <p className="text-green-100 text-sm">Primera plataforma AI multilingüe en México</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-bold text-lg mb-2">Sostenibilidad</h3>
                <p className="text-green-100 text-sm">Modelo escalable y replicable</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors w-full md:w-auto">
                💼 Solicitar Reunión de Presentación
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors w-full md:w-auto ml-0 md:ml-4">
                📋 Descargar Dossier Completo
              </button>
            </div>
            
            <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">Próximos Pasos</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-100 text-sm">
                <div>1. Aprobación del proyecto</div>
                <div>2. Fase de investigación (2 meses)</div>
                <div>3. Desarrollo del MVP (4 meses)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">EM</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold">EduMentor Chiapas</h2>
                  <p className="text-blue-200 text-sm">Propuesta de Proyecto Educativo</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Plataforma educativa con IA multilingüe para las comunidades indígenas de Chiapas.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-blue-100">Documentación</h3>
              <div className="space-y-2">
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">
                  📋 Propuesta Ejecutiva
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">
                  📊 Estudio de Impacto
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">
                  💻 Especificaciones Técnicas
                </a>
              </div>
            </div>
            
          
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-300">
              © 2025 EduMentor Chiapas. Propuesta de proyecto.
            </p>
            <p className="text-blue-400 text-sm mt-2">
              Desarrollado para transformar la educación en las comunidades indígenas de Chiapas
            </p>
          </div>
        </div>
      </footer>

      {/* Botones flotantes */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <button 
          onClick={() => scrollToSection('demo')}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          <span className="font-bold">🎬</span>
        </button>
        <button 
          onClick={() => scrollToSection('hero')}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;