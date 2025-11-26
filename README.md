# FewLines Website

Sitio web corporativo de FewLines desarrollado con Hugo, un generador de sitios estáticos de alto rendimiento.

## 🚀 Características

- **Framework**: Hugo (versión 0.121.1 extended)
- **Diseño**: Moderno y responsivo
- **Colores**: Esquema alineado al logo de la compañía (Indigo #3f51b5, Naranja #f58b1f, Gris Oscuro #37474f)
- **Optimizado**: Para despliegue en GitHub Pages
- **Preserva**: Carpetas `IdleTime` y `vcard` intactas (utilizadas por otros proyectos)

## 📁 Estructura del Proyecto

```
FewLines_WEB/
├── hugo-src/              # Código fuente de Hugo
│   ├── content/          # Contenido del sitio
│   ├── themes/           # Tema personalizado 'fewlines'
│   │   ├── layouts/     # Plantillas HTML
│   │   ├── assets/      # CSS y JavaScript
│   │   └── static/      # Archivos estáticos
│   ├── static/          # Archivos estáticos globales
│   ├── hugo.toml        # Configuración de Hugo
│   └── public/          # Sitio generado (no versionado)
├── IdleTime/            # Carpeta preservada (no tocar)
├── vcard/               # Carpeta preservada (no tocar)
├── CNAME                # Dominio personalizado
└── .github/workflows/   # Automatización de despliegue
```

## 🛠️ Desarrollo Local

### Requisitos Previos

1. **Instalar Hugo Extended** (versión 0.121.1 o superior):

```bash
# En Linux
wget https://github.com/gohugoio/hugo/releases/download/v0.121.1/hugo_extended_0.121.1_Linux-64bit.tar.gz
tar -xzf hugo_extended_0.121.1_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin/

# En macOS (con Homebrew)
brew install hugo

# En Windows (con Chocolatey)
choco install hugo-extended
```

### Ejecutar el Servidor de Desarrollo

```bash
# Navegar al directorio de Hugo
cd hugo-src

# Iniciar el servidor de desarrollo
hugo server --buildDrafts

# El sitio estará disponible en http://localhost:1313/
```

### Construir el Sitio

```bash
# Navegar al directorio de Hugo
cd hugo-src

# Generar el sitio estático (optimizado para producción)
hugo --gc --minify

# Los archivos generados estarán en hugo-src/public/
```

## 🚢 Despliegue en GitHub Pages

### Configuración Automática

El sitio se despliega automáticamente a GitHub Pages cuando se hace push a la rama `main`. El flujo de trabajo de GitHub Actions:

1. ✅ Instala Hugo
2. ✅ Construye el sitio desde `hugo-src/`
3. ✅ Preserva las carpetas `IdleTime` y `vcard`
4. ✅ Copia el archivo `CNAME` para el dominio personalizado
5. ✅ Despliega a GitHub Pages

### Configuración Inicial de GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. El workflow `hugo-deploy.yml` se ejecutará automáticamente en cada push

### Dominio Personalizado

El archivo `CNAME` contiene el dominio personalizado `www.fewlines.com.ar`. Asegúrate de configurar los registros DNS:

- Tipo: CNAME
- Nombre: www
- Valor: DiegoMinetti.github.io

## 📝 Editar Contenido

### Modificar el Contenido Principal

Edita el archivo de plantilla principal:
```
hugo-src/themes/fewlines/layouts/index.html
```

### Personalizar Estilos

Los estilos están en:
```
hugo-src/themes/fewlines/assets/css/main.css
```

### Actualizar Scripts

Los scripts JavaScript están en:
```
hugo-src/themes/fewlines/assets/js/main.js
```

### Cambiar Configuración

Edita la configuración del sitio en:
```
hugo-src/hugo.toml
```

## 🎨 Diseño y Características

### Secciones del Sitio

1. **Hero**: Presentación principal con logo y tagline
2. **Servicios**: Grid de servicios ofrecidos
3. **Por qué elegirnos**: Características destacadas
4. **Call to Action**: Invitación a contactar
5. **Footer**: Enlaces a herramientas y AFIP QR

### Colores del Tema

- **Primary (Indigo)**: `#3f51b5` - Color principal de marca
- **Secondary (Naranja)**: `#f58b1f` - Color de acento
- **Dark Gray**: `#37474f` - Texto y elementos oscuros
- **Light Gray**: `#eceff1` - Fondos y elementos claros

### Funcionalidades Especiales

- ✨ Animaciones suaves al cargar
- 📱 Diseño completamente responsivo
- 🔗 Redirección de vCard con parámetro `?vcard=nombre`
- 📊 Google Analytics integrado
- 🔍 SEO optimizado

## 🔧 Personalización Avanzada

### Agregar Nuevas Páginas

```bash
cd hugo-src
hugo new content/nombre-pagina.md
```

### Crear Nuevas Secciones

1. Agregar nuevo layout en `themes/fewlines/layouts/`
2. Crear contenido correspondiente en `content/`
3. Actualizar navegación si es necesario

### Modificar Variables de Configuración

En `hugo.toml`, puedes actualizar:
- `baseURL`: URL del sitio
- `title`: Título del sitio
- `params.*`: Parámetros personalizados (WhatsApp, TeamViewer, etc.)

## 📦 Mantenimiento

### Actualizar Hugo

Descarga la última versión de Hugo Extended y reemplaza el binario:
```bash
hugo version  # Verificar versión actual
# Seguir pasos de instalación para la nueva versión
```

### Limpiar Archivos Generados

```bash
cd hugo-src
hugo --cleanDestinationDir
```

### Verificar Enlaces Rotos

```bash
cd hugo-src
hugo server
# Usar herramientas como broken-link-checker
```

## 🐛 Solución de Problemas

### El sitio no se genera correctamente

1. Verifica que Hugo Extended esté instalado: `hugo version`
2. Limpia la cache: `hugo --cleanDestinationDir`
3. Revisa los logs de construcción

### Los estilos no se cargan

1. Verifica que los archivos CSS estén en `themes/fewlines/assets/css/`
2. Confirma que Hugo procese los assets correctamente
3. Limpia la cache del navegador

### Las carpetas IdleTime/vcard no se preservan

El workflow de GitHub Actions debe copiar estas carpetas. Verifica:
1. El archivo `.github/workflows/hugo-deploy.yml`
2. Los logs de GitHub Actions
3. Que las carpetas existan en la raíz del repositorio

## 📞 Contacto y Soporte

Para soporte o consultas sobre el sitio:
- WhatsApp: +54 9 11 6517-7711
- Web: https://www.fewlines.com.ar

## 📄 Licencia

© 2024 FewLines. Todos los derechos reservados.

## 🔄 Historial de Versiones

### v2.0.0 (2024)
- ✨ Migración a Hugo
- 🎨 Nuevo diseño moderno y atractivo
- 📱 Mejoras en responsividad
- ⚡ Optimización de rendimiento
- 🚀 Despliegue automatizado con GitHub Actions

### v1.0.0 (Anterior)
- 📄 Sitio estático con HTML/CSS/JS
- 🎨 Diseño con Materialize CSS
