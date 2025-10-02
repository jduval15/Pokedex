# 🎮 Pokédex App

Una aplicación web moderna para explorar el mundo Pokémon, construida con React y la PokéAPI.

## ✨ Características

- 🔍 **Búsqueda avanzada**: Busca Pokémon por nombre o ID
- 🏷️ **Filtrado por tipo**: Filtra Pokémon por sus tipos elementales
- 📄 **Paginación**: Navegación eficiente a través de todos los Pokémon
- 📱 **Responsive**: Diseño adaptable para todos los dispositivos
- ⚡ **Performance optimizada**: Carga rápida con estados de loading
- ♿ **Accesibilidad**: Navegación por teclado y lectores de pantalla
- 🎨 **UI moderna**: Diseño atractivo con animaciones fluidas

## 🚀 Mejoras Implementadas

### Código

- ✅ Manejo de errores robusto con try-catch
- ✅ Estados de carga para mejor UX
- ✅ Validación de formularios
- ✅ Optimización con useMemo
- ✅ Código más limpio y mantenible
- ✅ Componentes más reutilizables

### UI/UX

- ✅ Animaciones y transiciones suaves
- ✅ Loading states con pokébola animada
- ✅ Página 404 personalizada
- ✅ Feedback visual en interacciones
- ✅ Mejores estilos con variables CSS
- ✅ Diseño consistente y moderno

### Accesibilidad

- ✅ Atributos ARIA apropiados
- ✅ Navegación por teclado
- ✅ Etiquetas semánticas
- ✅ Alt text en imágenes
- ✅ Contraste de colores adecuado

### Performance

- ✅ Lazy loading de imágenes
- ✅ Memorización de cálculos costosos
- ✅ Peticiones async/await optimizadas
- ✅ Prevención de re-renders innecesarios

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **React Router DOM** - Enrutamiento
- **Redux Toolkit** - Gestión de estado
- **Axios** - Cliente HTTP
- **Vite** - Build tool
- **CSS3** - Estilos modernos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [tu-repo]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── home/
│   │   └── FormHome.jsx
│   ├── pokedex/
│   │   ├── CardPoke.jsx
│   │   ├── InputSearch.jsx
│   │   └── SelectByType.jsx
│   ├── pokedexId/
│   │   ├── Pokemon404.jsx
│   │   └── PokemonMoves.jsx
│   ├── pagination/
│   │   └── Pagination.jsx
│   └── shared/
│       └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Pokedex.jsx
│   ├── PokedexById.jsx
│   └── ProtectedRoutes.jsx
├── store/
│   ├── index.js
│   └── slices/
│       └── userName.slice.js
└── App.jsx
```

## 🎯 Funcionalidades Principales

### Home

- Formulario de entrada con validación
- Animaciones de bienvenida
- Protección de rutas

### Pokédex

- Lista de todos los Pokémon
- Búsqueda por nombre/ID
- Filtrado por tipo
- Paginación (8 por página)
- Cards interactivas con hover effects

### Detalle de Pokémon

- Información completa del Pokémon
- Estadísticas visuales con barras
- Lista de movimientos con búsqueda
- Tipos y habilidades
- Medidas (altura y peso)

## 🎨 Paleta de Colores por Tipo

Cada tipo de Pokémon tiene su propia paleta de colores:

- 🌿 Grass - Verde
- 💧 Water - Azul
- 🔥 Fire - Rojo/Naranja
- ⚡ Electric - Amarillo
- 🧊 Ice - Cyan
- Y más...

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## ⚠️ Dependencias a Considerar Remover

El proyecto tiene algunas dependencias instaladas pero no utilizadas:

- `@mui/material` - No se usa en el proyecto
- `emoji` - No se usa en el proyecto

Puedes removerlas con:

```bash
npm uninstall @mui/material @emotion/react @emotion/styled emoji
```

## 🌐 API

Este proyecto utiliza [PokéAPI](https://pokeapi.co/) v2:

- GET `/pokemon` - Lista de Pokémon
- GET `/pokemon/{id}` - Detalle de Pokémon
- GET `/type` - Lista de tipos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Tu nombre - [@tu_usuario]

## 🙏 Agradecimientos

- [PokéAPI](https://pokeapi.co/) por la API gratuita
- Nintendo/Game Freak por Pokémon
- La comunidad de React

---

Hecho con ❤️ y ☕
