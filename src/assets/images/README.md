# Imágenes del portfolio (WebP responsivas)

Todas las imágenes deben ser **WebP** y existir en **varias dimensiones** para que el sitio sea responsivo. El navegador elige la medida adecuada según el tamaño de pantalla.

## Convención de nombres

Cada imagen se define por una **base** y varios **anchos** en píxeles. Los archivos se nombran: `{base}-{ancho}.webp`.

### 1. Foto de perfil (Hero y About)

- **Base:** `hero-profile`
- **Anchos:** 400, 800, 1200  
- **Archivos:** `hero-profile-400.webp`, `hero-profile-800.webp`, `hero-profile-1200.webp`  
- **Ruta:** `assets/images/`

Puedes generar estos WebP desde tu foto (por ejemplo desde `L:\30993\Google_Photos\imagenes\Mis Fotoss`).

### 2. Proyectos

- **Base por proyecto:** `club51`, `ado`, `donaciones`, `weedapolis`, `lumbini`, `cumbres`, `cuautepec`, `auriga`
- **Anchos:** 320, 640, 960  
- **Archivos por proyecto:** `{id}-320.webp`, `{id}-640.webp`, `{id}-960.webp`  
- **Ruta:** `assets/images/projects/`

Ejemplo: `club51-320.webp`, `club51-640.webp`, `club51-960.webp`.

### 3. Avatares de testimonios

- **Bases:** `avatar-1`, `avatar-2` (en carpeta `avatars/`)
- **Anchos:** 72, 144  
- **Archivos:** `avatar-1-72.webp`, `avatar-1-144.webp`, `avatar-2-72.webp`, `avatar-2-144.webp`  
- **Ruta:** `assets/images/avatars/`

Si no tienes fotos de clientes, puedes reutilizar las mismas que el perfil (p. ej. copiar `hero-profile-72.webp` y `hero-profile-144.webp` como `avatar-1-*` y `avatar-2-*`).

## Cómo generar WebP en varias dimensiones

Con ImageMagick (ejemplo en consola):

```bash
# Perfil: 400, 800, 1200
magick mi-foto.jpg -resize 400x hero-profile-400.webp
magick mi-foto.jpg -resize 800x hero-profile-800.webp
magick mi-foto.jpg -resize 1200x hero-profile-1200.webp

# Proyecto: 320, 640, 960
magick captura-proyecto.png -resize 320x projects/club51-320.webp
magick captura-proyecto.png -resize 640x projects/club51-640.webp
magick captura-proyecto.png -resize 960x projects/club51-960.webp
```

O con herramientas online / scripts que exporten a WebP en varios tamaños.

Si falta algún archivo, el navegador mostrará la imagen rota hasta que añadas el WebP correspondiente.
