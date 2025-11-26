# FewLines Website

Sitio web oficial de FewLines desarrollado con Hugo - Framework de generación de sitios estáticos.

## 🚀 Características

- **Framework**: Hugo (v0.121.1+)
- **Diseño**: Moderno, responsive y optimizado para conversión
- **Esquema de colores**: Alineado con el logo de la compañía
  - Azul primario: #3f51b5
  - Naranja acento: #f58b1f
  - Grises complementarios
- **Despliegue**: Optimizado para GitHub Pages
- **Contenido**: Textos de ventas enfocados en servicios personalizados y soluciones adaptables

## 📁 Estructura del Proyecto

```
FewLines_WEB/
├── hugo_site/              # Directorio principal de Hugo
│   ├── archetypes/         # Plantillas de contenido
│   ├── content/            # Contenido del sitio
│   ├── data/               # Archivos de datos
│   ├── layouts/            # Plantillas HTML (si se necesitan override)
│   ├── static/             # Archivos estáticos (favicon, imágenes)
│   ├── themes/             # Temas personalizados
│   │   └── fewlines-theme/ # Tema personalizado de FewLines
│   │       ├── layouts/    # Plantillas del tema
│   │       │   ├── _default/
│   │       │   │   └── baseof.html
│   │       │   ├── partials/
│   │       │   │   ├── header.html
│   │       │   │   ├── footer.html
│   │       │   │   └── floating-elements.html
│   │       │   └── index.html
│   │       └── static/     # Assets del tema
│   │           ├── css/
│   │           │   └── style.css
│   │           └── js/
│   │               └── site.js
│   └── hugo.toml           # Configuración de Hugo
├── docs/                   # Sitio generado (GitHub Pages)
├── IdleTime/               # Directorio preservado (no modificar)
├── vcard/                  # Directorio preservado (no modificar)
├── .github/
│   └── workflows/
│       └── hugo-deploy.yml # Workflow de despliegue automático
└── CNAME                   # Configuración de dominio personalizado
```

## 🛠️ Instalación y Desarrollo Local

### Prerrequisitos

- Hugo Extended v0.121.1 o superior
- Git

### Instalación de Hugo

#### Linux/WSL:
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.121.1/hugo_extended_0.121.1_linux-amd64.tar.gz
tar -xzf hugo_extended_0.121.1_linux-amd64.tar.gz
sudo mv hugo /usr/local/bin/
hugo version
```

#### macOS:
```bash
brew install hugo
```

#### Windows:
```bash
choco install hugo-extended
```

### Desarrollo Local

1. **Clonar el repositorio:**
```bash
git clone https://github.com/DiegoMinetti/FewLines_WEB.git
cd FewLines_WEB
```

2. **Iniciar servidor de desarrollo:**
```bash
cd hugo_site
hugo server -D
```

3. **Ver el sitio:**
Abrir en el navegador: `http://localhost:1313`

El servidor se recargará automáticamente con los cambios realizados.

## 🏗️ Construcción del Sitio

### Construcción Manual

Para generar el sitio estático:

```bash
cd hugo_site
hugo --cleanDestinationDir
```

Esto generará el sitio en el directorio `docs/` listo para despliegue.

### Post-construcción

Después de construir, se deben copiar los directorios preservados:

```bash
cd ..
cp -r IdleTime docs/
cp -r vcard docs/
cp CNAME docs/
```

## 🚢 Despliegue en GitHub Pages

### Configuración Inicial (Una sola vez)

1. **Ir a Settings del repositorio en GitHub**
2. **Navegar a Pages**
3. **Configurar:**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Save

### Despliegue Automático

El sitio se despliega automáticamente cuando:
- Se hace push a la rama `main`
- Se ejecuta manualmente el workflow

El workflow de GitHub Actions (`.github/workflows/hugo-deploy.yml`):
1. Clona el repositorio
2. Instala Hugo
3. Construye el sitio
4. Preserva los directorios IdleTime y vcard
5. Copia CNAME
6. Despliega a GitHub Pages

### Despliegue Manual

Si prefieres desplegar manualmente:

1. Construir el sitio:
```bash
cd hugo_site
hugo --cleanDestinationDir
cd ..
```

2. Copiar directorios preservados:
```bash
cp -r IdleTime docs/
cp -r vcard docs/
cp CNAME docs/
```

3. Commit y push:
```bash
git add docs/
git commit -m "Update site"
git push origin main
```

## 📝 Modificación de Contenido

### Editar Página Principal

Editar el archivo: `hugo_site/themes/fewlines-theme/layouts/index.html`

Este archivo contiene todas las secciones:
- Hero (presentación principal)
- Servicios
- Características
- Herramientas
- Contacto

### Editar Estilos

Editar el archivo: `hugo_site/themes/fewlines-theme/static/css/style.css`

Variables CSS principales:
```css
--primary-blue: #3f51b5;
--accent-orange: #f58b1f;
--dark-gray: #333333;
--light-gray: #f5f5f5;
```

### Agregar Nuevas Páginas

```bash
cd hugo_site
hugo new nombre-pagina.md
```

Editar el archivo generado en `content/nombre-pagina.md`

### Modificar Configuración

Editar `hugo_site/hugo.toml` para cambiar:
- URL base
- Título del sitio
- Parámetros (WhatsApp, descripción, etc.)

## 🔒 Directorios Preservados

**IMPORTANTE:** Los siguientes directorios NO deben modificarse:

- `IdleTime/` - Utilizado por otros proyectos
- `vcard/` - Utilizado por otros proyectos

Estos directorios se copian automáticamente al directorio `docs/` durante el proceso de construcción.

## 🎨 Personalización del Tema

### Estructura del Tema

```
themes/fewlines-theme/
├── layouts/
│   ├── _default/
│   │   └── baseof.html        # Plantilla base
│   ├── partials/
│   │   ├── header.html        # Encabezado/navegación
│   │   ├── footer.html        # Pie de página
│   │   └── floating-elements.html  # Elementos flotantes
│   └── index.html             # Página principal
└── static/
    ├── css/
    │   └── style.css          # Estilos principales
    └── js/
        └── site.js            # JavaScript
```

### Agregar Secciones

1. Editar `layouts/index.html`
2. Agregar nueva sección con estructura:
```html
<section id="nombre" class="nombre-clase">
    <div class="container">
        <!-- Contenido -->
    </div>
</section>
```
3. Agregar estilos en `static/css/style.css`

## 🔧 Herramientas y Enlaces

### Enlaces de Asistencia Remota
- TeamViewer Express: `https://get.teamviewer.com/fewlinesexpress`
- TeamViewer 24/7: `https://get.teamviewer.com/fewlineshost`

### Herramientas Adicionales
- WhatsApp sin Agendar: `https://wsup.fewlines.com.ar`
- IdleTime: `/IdleTime/`
- vCard: `/vcard/diegominetti.vcf`

## 📊 Analytics

El sitio incluye Google Analytics (ID: G-SV98YPCGVW) configurado en `layouts/_default/baseof.html`

## 🆘 Solución de Problemas

### El sitio no se actualiza en GitHub Pages

1. Verificar que el workflow se ejecutó correctamente en Actions
2. Verificar que los archivos están en el directorio `docs/`
3. Verificar configuración de Pages en Settings

### Errores de construcción de Hugo

```bash
# Limpiar y reconstruir
cd hugo_site
hugo --cleanDestinationDir --verbose
```

### Problemas con directorios preservados

Verificar que se ejecutó el script post-construcción:
```bash
ls -la docs/IdleTime
ls -la docs/vcard
ls -la docs/CNAME
```

## 📞 Soporte

Para soporte técnico:
- WhatsApp: +54 9 11 6517-7711
- Email: info@fewlines.com.ar
- Sitio web: https://www.fewlines.com.ar

## 📄 Licencia

© 2024 FewLines. Todos los derechos reservados.

---

**Última actualización:** Noviembre 2024
