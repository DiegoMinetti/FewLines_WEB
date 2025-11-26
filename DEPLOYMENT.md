# Guía de Despliegue - FewLines Website

## 🚀 Pasos para Implementación en GitHub Pages

### 1. Configuración Inicial de GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/DiegoMinetti/FewLines_WEB`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, selecciona **Pages**
4. Configura la fuente de despliegue:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
5. Haz clic en **Save** (Guardar)

### 2. Verificación del Despliegue Automático

El sitio se desplegará automáticamente mediante GitHub Actions cada vez que hagas push a la rama `main`.

Para verificar el estado del despliegue:

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy Hugo site to GitHub Pages"
3. Espera a que el workflow termine (marca verde ✓)
4. El sitio estará disponible en: `https://www.fewlines.com.ar`

### 3. Despliegue Manual (Alternativo)

Si prefieres construir y desplegar manualmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/DiegoMinetti/FewLines_WEB.git
cd FewLines_WEB

# 2. Construir el sitio con Hugo
cd hugo_site
hugo --cleanDestinationDir
cd ..

# 3. Copiar directorios preservados
cp -r IdleTime docs/
cp -r vcard docs/
cp CNAME docs/

# 4. Commit y push
git add docs/
git commit -m "Deploy site update"
git push origin main
```

### 4. Verificación Post-Despliegue

Una vez desplegado, verifica:

- ✅ Página principal: `https://www.fewlines.com.ar`
- ✅ IdleTime: `https://www.fewlines.com.ar/IdleTime/`
- ✅ vCard: `https://www.fewlines.com.ar/vcard/diegominetti.vcf`
- ✅ Favicon: `https://www.fewlines.com.ar/FL_gris.ico`
- ✅ Links de TeamViewer funcionando
- ✅ Links de WhatsApp funcionando
- ✅ QR Fiscal visible
- ✅ Diseño responsive en móvil

## 🔧 Mantenimiento y Actualizaciones

### Actualizar Contenido

1. Edita los archivos necesarios en tu copia local
2. Prueba localmente:
   ```bash
   cd hugo_site
   hugo server
   ```
3. Si todo está bien, construye el sitio:
   ```bash
   hugo --cleanDestinationDir
   cd ..
   cp -r IdleTime docs/
   cp -r vcard docs/
   cp CNAME docs/
   ```
4. Commit y push:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

### Archivos Principales a Editar

- **Contenido**: `hugo_site/themes/fewlines-theme/layouts/index.html`
- **Estilos**: `hugo_site/themes/fewlines-theme/static/css/style.css`
- **Configuración**: `hugo_site/hugo.toml`
- **Scripts**: `hugo_site/themes/fewlines-theme/static/js/site.js`

## 🛠️ Solución de Problemas

### El sitio no se actualiza

1. Verifica que el workflow de Actions se ejecutó correctamente
2. Limpia el caché del navegador (Ctrl+Shift+R)
3. Espera 2-3 minutos para propagación de cambios

### Error 404 en GitHub Pages

1. Verifica que la carpeta `docs/` existe y tiene contenido
2. Verifica que `docs/index.html` existe
3. Verifica la configuración de Pages en Settings

### Estilos no se aplican

1. Verifica que `docs/css/style.css` existe
2. Limpia caché del navegador
3. Verifica las rutas en el HTML generado

### IdleTime o vcard no funcionan

1. Verifica que existen en `docs/IdleTime/` y `docs/vcard/`
2. Si no existen, ejecútalos comandos de copia:
   ```bash
   cp -r IdleTime docs/
   cp -r vcard docs/
   ```

## 📞 Soporte

Si encuentras problemas durante el despliegue:

- **Email**: info@fewlines.com.ar
- **WhatsApp**: +54 9 11 6517-7711

## ✅ Checklist de Despliegue

- [ ] Hugo instalado (v0.121.1+)
- [ ] Repositorio clonado
- [ ] GitHub Pages configurado (Settings > Pages)
- [ ] Workflow de Actions configurado
- [ ] Sitio construido (`hugo --cleanDestinationDir`)
- [ ] Directorios preservados copiados
- [ ] CNAME copiado a docs/
- [ ] Cambios commiteados y pusheados
- [ ] Workflow de Actions ejecutado exitosamente
- [ ] Sitio verificado en https://www.fewlines.com.ar
- [ ] Links y funcionalidades probados

---

**Última actualización**: Noviembre 2024
