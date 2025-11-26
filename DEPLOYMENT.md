# Guía de Despliegue - FewLines Website

Esta guía detalla cómo desplegar el sitio FewLines en GitHub Pages usando Hugo.

## 📋 Prerequisitos

- Repositorio en GitHub
- Permisos de administrador en el repositorio
- Dominio personalizado configurado (opcional)

## 🚀 Configuración Inicial de GitHub Pages

### Paso 1: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/DiegoMinetti/FewLines_WEB`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source** (Origen), selecciona **GitHub Actions**

![GitHub Pages Configuration](https://docs.github.com/assets/cb-66207/mw-1440/images/help/pages/source-github-actions.webp)

### Paso 2: Configurar el Dominio Personalizado

Si deseas usar tu dominio personalizado (`www.fewlines.com.ar`):

1. En la página de **Settings** > **Pages**
2. En **Custom domain**, ingresa: `www.fewlines.com.ar`
3. Haz clic en **Save**
4. Marca la casilla **Enforce HTTPS** (una vez que el DNS esté configurado)

### Paso 3: Configurar DNS

En tu proveedor de DNS, configura los siguientes registros:

```
Tipo: CNAME
Nombre: www
Valor: diegominetti.github.io
TTL: 3600 (o el valor predeterminado)
```

**Nota**: El archivo `CNAME` en la raíz del repositorio se copiará automáticamente durante el despliegue.

## 🔄 Proceso de Despliegue Automático

El sitio se despliega automáticamente cuando haces push a la rama `main`. El workflow hace lo siguiente:

### Flujo de Trabajo (`.github/workflows/hugo-deploy.yml`)

```yaml
1. Instalación de Hugo
   └─> Descarga e instala Hugo Extended v0.121.1

2. Checkout del Código
   └─> Clona el repositorio con historial completo

3. Construcción del Sitio
   └─> Ejecuta `hugo --gc --minify` en hugo-src/
   └─> Genera archivos optimizados en hugo-src/public/

4. Preparación del Despliegue
   └─> Copia archivos de hugo-src/public/ a directorio temporal
   └─> Preserva carpetas IdleTime y vcard
   └─> Copia archivo CNAME para dominio personalizado

5. Upload de Artefactos
   └─> Sube el sitio completo como artefacto

6. Despliegue a GitHub Pages
   └─> Publica el sitio en GitHub Pages
```

## 📦 Despliegue Manual (Opcional)

Si necesitas desplegar manualmente:

### Opción 1: Usar GitHub Actions Manualmente

1. Ve a **Actions** en tu repositorio
2. Selecciona el workflow "Deploy Hugo site to GitHub Pages"
3. Haz clic en **Run workflow**
4. Selecciona la rama `main`
5. Haz clic en **Run workflow**

### Opción 2: Construcción y Despliegue Local

```bash
# 1. Construir el sitio localmente
cd hugo-src
hugo --gc --minify

# 2. Preparar directorio de despliegue
mkdir -p /tmp/deploy
cp -r public/* /tmp/deploy/
cp -r ../IdleTime /tmp/deploy/
cp -r ../vcard /tmp/deploy/
cp ../CNAME /tmp/deploy/

# 3. Crear rama gh-pages (si no existe)
git checkout --orphan gh-pages

# 4. Limpiar el directorio
git rm -rf .

# 5. Copiar archivos de despliegue
cp -r /tmp/deploy/* .
git add .

# 6. Commit y push
git commit -m "Deploy site"
git push -f origin gh-pages

# 7. Volver a main
git checkout main
```

**Nota**: No se recomienda el despliegue manual ya que el proceso automático es más confiable.

## 🔍 Verificación del Despliegue

### 1. Verificar el Workflow

1. Ve a **Actions** en tu repositorio
2. Verifica que el último workflow se haya completado exitosamente
3. Si hay errores, haz clic en el workflow para ver los logs

### 2. Verificar el Sitio

1. Visita: `https://diegominetti.github.io/FewLines_WEB/` (URL temporal)
2. O tu dominio personalizado: `https://www.fewlines.com.ar/`
3. Verifica que:
   - ✅ El sitio cargue correctamente
   - ✅ Los estilos se apliquen
   - ✅ Los enlaces funcionen
   - ✅ Las carpetas IdleTime y vcard estén accesibles:
     - `https://www.fewlines.com.ar/IdleTime/`
     - `https://www.fewlines.com.ar/vcard/`

### 3. Verificar Funcionalidades

- **WhatsApp**: Probar enlaces de contacto
- **TeamViewer**: Verificar enlaces de descarga
- **vCard**: Probar `?vcard=diegominetti` en la URL
- **AFIP QR**: Verificar enlace al código QR fiscal

## 🐛 Solución de Problemas

### El sitio no se despliega

**Problema**: El workflow falla en GitHub Actions

**Solución**:
1. Revisa los logs en **Actions** > workflow fallido
2. Verifica que Hugo esté instalado correctamente
3. Asegúrate de que todos los archivos necesarios estén en el repositorio

### Error 404 en el sitio

**Problema**: El sitio muestra error 404

**Solución**:
1. Verifica que GitHub Pages esté habilitado
2. Confirma que el workflow se haya ejecutado exitosamente
3. Espera unos minutos (el despliegue puede tardar hasta 10 minutos)
4. Limpia la cache del navegador

### Estilos no se cargan

**Problema**: El sitio se ve sin estilos

**Solución**:
1. Verifica que `baseURL` en `hugo.toml` sea correcto
2. Asegúrate de que los archivos CSS estén en `hugo-src/themes/fewlines/assets/css/`
3. Reconstruye el sitio: `hugo --gc --minify`

### IdleTime o vcard no accesibles

**Problema**: Las carpetas protegidas no están disponibles

**Solución**:
1. Verifica que las carpetas existan en la raíz del repositorio
2. Confirma que el workflow las copie correctamente (revisa `.github/workflows/hugo-deploy.yml`)
3. Ejecuta el workflow manualmente si es necesario

### Dominio personalizado no funciona

**Problema**: El dominio personalizado no resuelve

**Solución**:
1. Verifica la configuración DNS (puede tardar hasta 48 horas)
2. Confirma que el archivo `CNAME` esté presente en el directorio de despliegue
3. En GitHub Pages settings, vuelve a ingresar el dominio personalizado

## 🔒 Seguridad

### HTTPS

- GitHub Pages proporciona HTTPS automáticamente
- Para dominios personalizados, marca **Enforce HTTPS** en Settings > Pages
- Espera a que el certificado SSL se provisione (puede tardar hasta 24 horas)

### Archivos Sensibles

- No incluyas credenciales en el código
- El archivo `.gitignore` excluye archivos de construcción
- Las carpetas IdleTime y vcard se copian tal cual (sin modificar)

## 📊 Monitoreo

### Google Analytics

El sitio incluye Google Analytics (ID: `G-SV98YPCGVW`). Para cambiar:

1. Edita `hugo-src/hugo.toml`
2. Modifica el parámetro `googleAnalytics`
3. Haz commit y push

### Logs de Despliegue

Para ver logs detallados:
1. Ve a **Actions** en GitHub
2. Selecciona el workflow de despliegue
3. Haz clic en el job "build" o "deploy"
4. Revisa los logs paso a paso

## 🔄 Actualización del Sitio

Para actualizar el contenido:

1. **Editar contenido**: Modifica archivos en `hugo-src/`
2. **Probar localmente**: `hugo server` en `hugo-src/`
3. **Commit y push**: Los cambios se desplegarán automáticamente
4. **Verificar**: Revisa el sitio en producción

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa esta guía completa
2. Consulta la documentación oficial de Hugo: https://gohugo.io/documentation/
3. Revisa la documentación de GitHub Pages: https://docs.github.com/pages

## ✅ Checklist de Despliegue

- [ ] GitHub Pages habilitado con source "GitHub Actions"
- [ ] DNS configurado correctamente (si usa dominio personalizado)
- [ ] Workflow de GitHub Actions ejecutándose correctamente
- [ ] Sitio accesible en la URL de producción
- [ ] Todos los estilos y scripts cargando
- [ ] Enlaces funcionando correctamente
- [ ] Carpetas IdleTime y vcard accesibles
- [ ] HTTPS habilitado y funcionando
- [ ] Google Analytics configurado (opcional)
- [ ] Dominio personalizado resolviendo (si aplica)

---

**Última actualización**: 2024-11-26
**Versión**: 2.0.0
