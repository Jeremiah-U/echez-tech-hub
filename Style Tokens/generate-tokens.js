const fs = require('fs');
const path = require('path');

function sanitizeKey(key) {
    // Convert camelCase to kebab-case
    let kebab = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    // Replace spaces, underscores, dots, and commas with hyphens
    kebab = kebab.replace(/[\s_\.,]+/g, '-');
    return kebab;
}

function parseTokens(obj, prefix = '') {
    let cssVars = {};
    
    for (const [key, val] of Object.entries(obj)) {
        // Skip metadata keys if any at the root level, but here we just process everything
        if (key === '$type') continue;

        const currentPath = prefix ? `${prefix}-${sanitizeKey(key)}` : sanitizeKey(key);
        
        if (val && typeof val === 'object') {
            if (val.$value !== undefined) {
                if (typeof val.$value === 'object') {
                    // Handle complex values like typography objects
                    for (const [prop, propVal] of Object.entries(val.$value)) {
                        const cssProp = sanitizeKey(prop);
                        let finalVal = propVal;
                        if (typeof finalVal === 'string' && finalVal.includes('{')) {
                            finalVal = finalVal.replace(/\{([^}]+)\}/g, (match, p1) => `var(--${sanitizeKey(p1)})`);
                        }
                        cssVars[`--${currentPath}-${cssProp}`] = finalVal;
                    }
                } else {
                    // Handle primitive or referenced values
                    let finalVal = val.$value;
                    if (typeof finalVal === 'string' && finalVal.includes('{')) {
                        finalVal = finalVal.replace(/\{([^}]+)\}/g, (match, p1) => `var(--${sanitizeKey(p1)})`);
                    }
                    cssVars[`--${currentPath}`] = finalVal;
                }
            } else {
                // Keep recursing
                Object.assign(cssVars, parseTokens(val, currentPath));
            }
        }
    }
    return cssVars;
}

// Read all three files
const primitivePath = path.join(__dirname, 'primitive color tokens.json');
const semanticPath = path.join(__dirname, 'semantic color tokens.json');
const textStylesPath = path.join(__dirname, 'text styles.json');

try {
    const primitiveStr = fs.readFileSync(primitivePath, 'utf8');
    const semanticStr = fs.readFileSync(semanticPath, 'utf8');
    const textStr = fs.readFileSync(textStylesPath, 'utf8');

    const primitive = JSON.parse(primitiveStr);
    const semantic = JSON.parse(semanticStr);
    const textStyles = JSON.parse(textStr);

    const allTokens = {};

    // Process primitive tokens
    Object.assign(allTokens, parseTokens(primitive));
    
    // Process semantic tokens
    Object.assign(allTokens, parseTokens(semantic));
    
    // Process text styles (prefix with 'text' to avoid generic names if desired, but here we just use the raw keys)
    Object.assign(allTokens, parseTokens(textStyles));

    // Generate CSS content
    let cssContent = '/* Auto-generated Design Tokens */\n\n:root {\n';
    
    // To make it structured, we can just sort the keys
    const sortedKeys = Object.keys(allTokens).sort();
    for (const variable of sortedKeys) {
        cssContent += `  ${variable}: ${allTokens[variable]};\n`;
    }
    cssContent += '}\n';

    // Write to a single CSS file
    const outputPath = path.join(__dirname, 'tokens.css');
    fs.writeFileSync(outputPath, cssContent);
    
    console.log(`Successfully generated CSS variables in ${outputPath}`);
} catch (error) {
    console.error('Error processing tokens:', error);
}
