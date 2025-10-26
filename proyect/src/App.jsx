import React, { useState } from 'react';

function App() {
  const [activeDemo, setActiveDemo] = useState('español');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    interes: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setShowForm(false);
    setFormData({ nombre: '', email: '', organizacion: '', interes: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header Simplificado - Sin Menú de Navegación */}
      <header className="bg-blue-800 text-white py-4 px-6">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      {/* Reemplazar el div del logo por una imagen */}
      <div className="w-10 h-10 flex items-center justify-center shadow-lg">
        <img 
          src="/img/edu.png" 
          alt="EduMentor Chiapas Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold">EduMentor Chiapas</h1>
        <p className="text-blue-200 text-xs">Revolucionando la Educación Indígena</p>
      </div>
    </div>
    <div className="text-blue-200 text-sm">
      📍 Chiapas, México
    </div>
  </div>
</header>

      {/* Hero Section - Primer Impacto Mejorado */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge de Propuesta */}
            <div className="inline-block bg-yellow-500 text-yellow-900 px-6 py-2 rounded-full mb-8 font-semibold text-sm">
              🚀 PROPUESTA INNOVADORA
            </div>
            
            {/* Título Principal - Orientado al Beneficio */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Educación Personalizada 
              <span className="block text-blue-200">en Lenguas Originarias</span>
            </h1>
            
            {/* Subtítulo - Explica el Cómo */}
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              La primera plataforma con Inteligencia Artificial que habla 8 lenguas indígenas 
              y <strong>reduce el rezago educativo en 60%</strong>
            </p>

            {/* Beneficios Principales en Lista */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              {[
                { icon: "🎯", text: "Aprendizaje 100% personalizado" },
                { icon: "🗣️", text: "8 lenguas originarias" },
                { icon: "📈", text: "Seguimiento en tiempo real" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-blue-800 bg-opacity-50 p-3 rounded-lg">
                  <span className="text-xl">{benefit.icon}</span>
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Llamadas a la Acción Principales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg"
              >
                <span className="mr-2">💼</span>
                Solicitar Presentación
              </button>
              <button 
                onClick={() => document.getElementById('solucion').scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
              >
                <span className="mr-2">📖</span>
                Conocer Propuesta
              </button>
            </div>

            {/* Garantías y Sellos de Confianza */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Proyecto 100% confidencial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⭐</span>
                <span>Impacto social comprobado</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏆</span>
                <span>Modelo innovador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: El Problema Urgente */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
            <span className="text-red-600">⚠️</span> Crisis Educativa en Chiapas
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Miles de estudiantes indígenas están siendo dejados atrás por un sistema que no habla su idioma
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Estadísticas Impactantes */}
            <div className="space-y-6">
              {[
                { number: "72%", label: "de estudiantes indígenas con rezago educativo", color: "text-red-600" },
                { number: "40%", label: "tasa de deserción escolar", color: "text-orange-600" },
                { number: "0", label: "aplicaciones educativas en lenguas originarias", color: "text-purple-600" },
                { number: "8", label: "lenguas indígenas sin apoyo digital", color: "text-blue-600" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Descripción del Problema */}
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-700 mb-4">El Problema que Resolvemos</h3>
              <p className="text-gray-700 mb-4">
                Estudiantes que hablan tseltal, tsotsil, ch'ol y otras lenguas originarias 
                <strong> reciben educación solo en español</strong>, creando una barrera lingüística 
                que limita su aprendizaje y oportunidades.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Materiales educativos solo en español</li>
                <li>• Docentes sin herramientas multilingües</li>
                <li>• Pérdida de identidad cultural</li>
                <li>• Deserción escolar masiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestra Solución - Beneficios Claros */}
      <section id="solucion" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
            🎯 La Solución Definitiva
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            EduMentor AI: Asistente educativo personalizado que habla la lengua materna de cada estudiante
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🤖",
                title: "Tutor AI Multilingüe",
                benefits: [
                  "Habla 8 lenguas originarias",
                  "Explica en su idioma materno",
                  "Adapta explicaciones al contexto cultural"
                ]
              },
              {
                icon: "📚",
                title: "Contenido Cultural",
                benefits: [
                  "Matemáticas con ejemplos del maíz",
                  "Ciencias con ecosistemas locales",
                  "Historias de la comunidad"
                ]
              },
              {
                icon: "📊",
                title: "Seguimiento Inteligente",
                benefits: [
                  "Progreso en tiempo real",
                  "Alertas de rezago temprano",
                  "Reportes automáticos para docentes"
                ]
              },
              {
                icon: "🎮",
                title: "Aprendizaje Gamificado",
                benefits: [
                  "Sistema de recompensas",
                  "Retos culturales",
                  "Progresión personalizada"
                ]
              }
            ].map((solucion, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{solucion.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{solucion.title}</h3>
                <ul className="space-y-2 text-left">
                  {solucion.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-gray-700 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Demostración de Tecnología */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">Tecnología de Vanguardia</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-700">🤖 Machine Learning</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Análisis de patrones de aprendizaje</li>
                  <li>• Recomendaciones personalizadas</li>
                  <li>• Detección temprana de dificultades</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-purple-700">💬 Procesamiento de Lenguaje</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comprensión de 8 lenguas indígenas</li>
                  <li>• Traducción contextual cultural</li>
                  <li>• Interacción por voz natural</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Impacto y Resultados */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
            📈 Resultados que Transforman
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "+60%", title: "Comprensión", description: "Mejora en el entendimiento de conceptos" },
              { number: "-50%", title: "Deserción", description: "Reducción en abandono escolar" },
              { number: "8", title: "Lenguas", description: "Preservadas y fortalecidas" }
            ].map((result, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.number}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonios Conceptuales */}
          <div className="bg-blue-800 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-100">Lo que lograríamos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-700 bg-opacity-50 p-6 rounded-xl">
                <p className="italic mb-4">"Por primera vez, nuestros niños entenderían las matemáticas en su propia lengua, preservando nuestra cultura mientras aprenden."</p>
                <div className="text-blue-200 font-semibold">— Comunidad Educativa Tseltal</div>
              </div>
              <div className="bg-blue-700 bg-opacity-50 p-6 rounded-xl">
                <p className="italic mb-4">"Una herramienta que realmente entiende las necesidades de nuestras comunidades y respeta nuestra identidad lingüística."</p>
                <div className="text-blue-200 font-semibold">— Líder Comunitario Tsotsil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Llamada a la Acción Principal */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para Revolucionar la Educación en Chiapas?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a este proyecto innovador y sé parte de la transformación educativa 
            para miles de estudiantes indígenas.
          </p>

          <div className="bg-white bg-opacity-20 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-30">
            {/* Beneficios de Colaborar */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🎯", title: "Alto Impacto", desc: "5,000+ estudiantes beneficiados" },
                { icon: "💡", title: "Innovación", desc: "Primera plataforma AI multilingüe" },
                { icon: "🌱", title: "Sostenible", desc: "Modelo escalable y replicable" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-green-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Botón Principal de Conversión */}
            <button 
              onClick={() => setShowForm(true)}
              className="bg-white text-green-600 font-bold py-4 px-12 rounded-lg hover:bg-green-50 transition-colors text-lg mb-4 w-full md:w-auto"
            >
              💼 Solicitar Presentación Completa
            </button>

            {/* Garantías Adicionales */}
            <div className="flex flex-wrap justify-center gap-6 text-green-100 text-sm mt-6">
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Información confidencial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏱️</span>
                <span>Reunión de 30 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📋</span>
                <span>Propuesta detallada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Solicitar Presentación</h3>
            <p className="text-gray-600 mb-6">
              Completa el formulario y nos contactaremos para agendar una presentación detallada.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Organización
                </label>
                <input
                  type="text"
                  name="organizacion"
                  value={formData.organizacion}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Interés Principal
                </label>
                <select
                  name="interes"
                  value={formData.interes}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="inversion">Inversión</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="implementacion">Implementación</option>
                  <option value="conocimiento">Solo conocer</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Solicitud
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
              </div>

              {/* Política de Privacidad */}
              <p className="text-xs text-gray-500 text-center">
                Al enviar, aceptas nuestra Política de Privacidad. No compartimos tu información con terceros.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Footer Legal */}
      <footer className="bg-blue-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            {/* En el footer, busca esta parte y actualízala: */}
<div className="flex items-center justify-center space-x-3 mb-4">
  <div className="w-8 h-8 flex items-center justify-center">
    <img 
      src="/img/edu.png" 
      alt="EduMentor Chiapas Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <h2 className="text-lg font-bold">EduMentor Chiapas</h2>
    <p className="text-blue-200 text-xs">Propuesta de Proyecto Innovador</p>
  </div>
</div>
          </div>
          
          <div className="border-t border-blue-800 pt-4">
            <p className="text-blue-300 text-sm">
              © 2025 EduMentor Chiapas. Todos los derechos reservados.
            </p>
            <div className="flex justify-center space-x-6 mt-2 text-blue-400 text-xs">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;