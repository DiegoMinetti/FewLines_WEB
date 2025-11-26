# Guía Rápida - FewLines Website

Comandos y tareas más comunes para trabajar con el sitio.

## 🚀 Inicio Rápido

### Ver el sitio localmente

```bash
cd hugo-src
hugo server
# Visita http://localhost:1313/
```

### Construir para producción

```bash
cd hugo-src
hugo --gc --minify
# Los archivos estarán en hugo-src/public/
```

## 📝 Tareas Comunes

### Cambiar textos del sitio

**Ubicación**: `hugo-src/themes/fewlines/layouts/index.html`

```bash
# Editar contenido principal
nano hugo-src/themes/fewlines/layouts/index.html

# Probar cambios
cd hugo-src && hugo server
```

### Modificar colores

**Ubicación**: `hugo-src/themes/fewlines/assets/css/main.css`

```css
/* Busca las variables CSS al inicio del archivo */
:root {
    --color-primary: #3f51b5;      /* Azul principal */
    --color-secondary: #f58b1f;    /* Naranja */
    --color-dark-gray: #37474f;    /* Gris oscuro */
}
```

### Cambiar información de contacto

**Ubicación**: `hugo-src/hugo.toml`

```toml
[params]
  whatsapp = "5491165177711"
  teamviewerExpress = "https://get.teamviewer.com/fewlinesexpress"
  teamviewerHost = "https://get.teamviewer.com/fewlineshost"
  wsup = "https://wsup.fewlines.com.ar"
```

### Actualizar logo o imágenes

```bash
# Copiar nuevas imágenes
cp nueva-imagen.png hugo-src/static/images/

# Usar en el sitio
# En index.html: src="{{ .Site.BaseURL }}images/nueva-imagen.png"
```

## 🔧 Mantenimiento

### Limpiar archivos generados

```bash
cd hugo-src
hugo --cleanDestinationDir
```

### Actualizar Hugo

```bash
# Verificar versión actual
hugo version

# Descargar nueva versión
wget https://github.com/gohugoio/hugo/releases/download/v0.XXX.X/hugo_extended_0.XXX.X_Linux-64bit.tar.gz
tar -xzf hugo_extended_0.XXX.X_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin/
```

### Ver logs de GitHub Actions

1. Ve a: https://github.com/DiegoMinetti/FewLines_WEB/actions
2. Haz clic en el último workflow
3. Revisa los logs

## 📦 Desplegar Cambios

```bash
# 1. Hacer cambios en los archivos
# 2. Probar localmente
cd hugo-src && hugo server

# 3. Commit y push
git add .
git commit -m "Descripción de cambios"
git push origin main

# El sitio se despliega automáticamente ✨
```

## 🐛 Problemas Frecuentes

### "Hugo not found"
```bash
# Instalar Hugo
wget https://github.com/gohugoio/hugo/releases/download/v0.121.1/hugo_extended_0.121.1_Linux-64bit.tar.gz
tar -xzf hugo_extended_0.121.1_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin/
```

### Estilos no se ven
```bash
# Limpiar y reconstruir
cd hugo-src
hugo --cleanDestinationDir
hugo --gc --minify
```

### Sitio no actualiza en GitHub Pages
```bash
# Espera 2-5 minutos después del push
# O ejecuta manualmente el workflow:
# GitHub → Actions → "Deploy Hugo site" → Run workflow
```

## 📞 Enlaces Útiles

- **Sitio en producción**: https://www.fewlines.com.ar/
- **Repositorio**: https://github.com/DiegoMinetti/FewLines_WEB
- **GitHub Actions**: https://github.com/DiegoMinetti/FewLines_WEB/actions
- **Documentación Hugo**: https://gohugo.io/documentation/

## 🎨 Estructura de Archivos

```
hugo-src/
├── hugo.toml           # Configuración principal
├── content/            # Contenido del sitio
├── static/             # Archivos estáticos (imágenes, etc.)
├── themes/fewlines/    # Tema personalizado
│   ├── layouts/        # Plantillas HTML
│   │   └── index.html  # Página principal
│   └── assets/         # CSS y JavaScript
│       ├── css/main.css    # Estilos
│       └── js/main.js      # Scripts
└── public/             # Sitio generado (no editar)
```

## ✅ Checklist Antes de Desplegar

- [ ] Cambios probados localmente con `hugo server`
- [ ] Sin errores en la construcción
- [ ] Todos los enlaces funcionan
- [ ] Imágenes se cargan correctamente
- [ ] Responsive design funciona (probar en móvil)
- [ ] Commit descriptivo realizado
- [ ] Push a la rama `main`

---

**Tip**: Guarda esta guía para referencia rápida. Para más detalles, consulta README.md o DEPLOYMENT.md.
