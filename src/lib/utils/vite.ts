// https://github.com/tabler/tabler-icons/issues/669
// THIS CUTS BUILD TIME BY 65%

import MagicString from 'magic-string';
import type { Plugin } from 'vite';

function camelToKebab(str: string) {
	// Replace positions where:
	// 1. A letter is immediately followed by a digit, or
	// 2. A lowercase letter or digit is immediately followed by an uppercase letter.
	// The "$&" represents the matched character, and "-$&" adds a dash after it.
	return str.replace(/([a-zA-Z])(?=[0-9])|([a-z0-9])(?=[A-Z])/g, '$&-').toLowerCase(); // Convert the entire string to lowercase.
}

function componentNameToFilename(name: string) {
	// Remove the "Icon" prefix if present
	if (name.startsWith('Icon')) {
		name = name.slice(4); // Remove the first 4 characters ("Icon")
	}
	return `${camelToKebab(name)}.svelte`;
}

// Transformation plugin:
export const tablerIconsTreeShakePlugin = () => {
	return {
		name: 'tabler-icons-tree-shake',
		enforce: 'pre', // Run this plugin before other plugins during the build process
		transform(code: string) {
			// 'code' is the content of the file being processed.
			// 'id' is the file's path (provided by Vite's plugin API. We don't use it here, but leaving it as its part of the signature).

			// Check if the file contains an import from '@tabler/icons-svelte'; if not, do nothing.
			if (!code.includes('@tabler/icons-svelte')) return null;

			// Define a regular expression to find import statements that import from '@tabler/icons-svelte'.
			const importRegex = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@tabler\/icons-svelte['"];/g;
			let match; // Variable to hold each regex match result.
			let s; // Variable to hold our MagicString instance for code modifications.

			// Loop through all matches of the import statement in the code.
			while ((match = importRegex.exec(code)) !== null) {
				// If we haven't created a MagicString instance yet, create one with the original code.
				// We reuse it throughout the loop to apply all the modifications. This way, all changes are tracked on the same instance, which helps in generating a single source map for the transformed code.
				if (!s) s = new MagicString(code);

				// Destructure the match result:
				// 'fullMatch' is the entire matched import statement.
				// 'imports' is the list of icon names inside the curly braces.
				const [fullMatch, imports] = match;
				const start = match.index; // Get the starting index of the matched import statement.
				const end = start + fullMatch.length; // Calculate the ending index of the matched import statement.

				// Process each icon name by splitting the string on commas,
				// then mapping each to a new import statement pointing to its specific file.
				const newImports = imports
					.split(',')
					.map((name) => {
						const iconName = name.trim(); // remove any leading or trailing whitespace
						// Convert the component name to its corresponding filename (e.g., IconLoader2 -> loader-2.svelte).
						const fileName = componentNameToFilename(iconName);
						// console.log(fileName) YAY! this is working!!
						// Return the new import statement for this icon.
						return `import ${iconName} from '@tabler/icons-svelte/icons/${fileName}';`;
					})
					.join('\n'); // Join all new import statements with a newline between each.

				// Replace the original import statement in the code with the new set of import statements.
				s.overwrite(start, end, newImports);
			}
			// If no modifications were made (i.e., the MagicString instance was never created), return null.
			if (!s) return null;

			// Return the transformed code and a generated source map.
			return {
				code: s.toString(),
				map: s.generateMap({ hires: true })
			};
		}
	} satisfies Plugin;
};
