const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const postCssPlugin = require('esbuild-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fs = require('fs');
const path = require('path');

// Function to copy HTML template and inject script and style tags
function copyHtmlTemplate() {
  const templatePath = path.resolve(__dirname, 'src/template.html');
  const outputPath = path.resolve(__dirname, 'public/index.html');

  let templateContent = fs.readFileSync(templatePath, 'utf8');
  templateContent = templateContent.replace('</head>', '<link rel="stylesheet" href="main.css"></head>');
  templateContent = templateContent.replace('</body>', '<script src="main.js"></script></body>');

  fs.writeFileSync(outputPath, templateContent, 'utf8');
}

esbuild.build({
  entryPoints: ['src/main.ts'], // Change entry point to TypeScript file
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'public',
  plugins: [
    sassPlugin(), // Add the SCSS plugin
    postCssPlugin({
      plugins: [
        autoprefixer(),
        cssnano()
      ],
      extract: true,
      minimize: true,
    })
  ],
  loader: {
    '.ts': 'ts', // Specify that TypeScript files should be handled by esbuild
    '.tsx': 'tsx', // If you use TypeScript with JSX (React)
  }
}).then(() => {
  copyHtmlTemplate();
  console.log('Build completed!');
}).catch(() => process.exit(1));
