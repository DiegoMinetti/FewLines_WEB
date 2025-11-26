# FewLines Logo Files

This directory contains the official FewLines logo in multiple formats for different use cases.

## Files

### Logo Files
- **Logo_AzulGrisOscuro.svg** - Vector format (recommended)
  - Scalable to any size without quality loss
  - Best for web, print, and high-resolution displays
  - File size: ~2KB
  - Colors: #4455a5 (blue icon), #2a2c2a (dark gray text)

- **Logo_AzulGrisOscuro.png** - Standard resolution PNG (761x191px)
  - Suitable for general web use
  - File size: ~13KB
  - Use when SVG is not supported

- **Logo_AzulGrisOscuro_2x.png** - High resolution PNG (1522x382px)
  - 2x resolution for retina/high-DPI displays
  - File size: ~29KB
  - Best quality for high-resolution screens

### Other Images
- **DATAWEB.jpg** - AFIP fiscal QR code image

## Logo Design Specifications

### Colors
- **Icon (3D F)**: #4455a5 (blue/indigo)
- **Text (FEWLINES)**: #2a2c2a (dark gray)

### Design Features
- Uniform 1px stroke width throughout
- No blur or shadow effects for crisp rendering
- 3D perspective "F" icon on the left
- Bold "FEWLINES" text
- Professional, clean appearance
- Excellent legibility at small sizes

### Usage Guidelines
1. **Preferred**: Use SVG format for best quality and scalability
2. **Fallback**: Use PNG format when SVG is not supported
3. **High-DPI**: Use 2x PNG for retina displays when needed
4. **CSS**: No filters should be applied (no blur, drop-shadow, etc.)
5. **Background**: Logo works best on dark backgrounds (gradient blue/purple)

### Technical Implementation
The logo is implemented with:
- `image-rendering: crisp-edges` for sharp pixel rendering
- No CSS filters applied
- SVG with PNG fallback using `onerror` attribute
