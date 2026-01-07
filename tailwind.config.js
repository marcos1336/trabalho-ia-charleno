/** 
 * Configuração do Tailwind CSS
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  // Define os arquivos onde o Tailwind deve procurar por classes CSS
  // Isso permite que o Tailwind remova classes não utilizadas (tree-shaking)
  content: [
    // Procura em todos os arquivos HTML dentro da pasta templates
    "./app/templates/**/*.html",
    // Procura em todos os arquivos JavaScript dentro da pasta static/js
    "./app/static/js/**/*.js"
  ],
  // Configuração do tema do Tailwind (cores, fontes, espaçamentos, etc.)
  theme: {
    // Permite estender o tema padrão do Tailwind com valores customizados
    extend: {},
  },
  // Lista de plugins do Tailwind CSS (nenhum plugin adicional configurado)
  plugins: [],
}
