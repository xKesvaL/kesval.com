import fr from './messages/fr.json';
import en from './messages/en.json';

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

function isPlainObject(value: unknown): value is JsonObject {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function collectLeafStringKeys(value: JsonValue, prefix = ''): string[] {
	const results: string[] = [];
	if (typeof value === 'string') {
		results.push(prefix);
		return results;
	}
	if (Array.isArray(value)) {
		// Treat arrays as leafs (rare in i18n). We don't compare inside arrays.
		return results;
	}
	if (isPlainObject(value)) {
		for (const key of Object.keys(value)) {
			const child = (value as JsonObject)[key];
			const nextPrefix = prefix ? `${prefix}.${key}` : key;
			results.push(...collectLeafStringKeys(child as JsonValue, nextPrefix));
		}
	}
	return results;
}

function diffKeys(source: JsonObject, target: JsonObject) {
	const excludePrefixes = ['$schema'];
	const filterExcluded = (k: string) =>
		!excludePrefixes.some((p) => k === p || k.startsWith(`${p}.`));

	const sourceKeys = collectLeafStringKeys(source).filter(filterExcluded);
	const targetKeys = collectLeafStringKeys(target).filter(filterExcluded);

	const sourceSet = new Set(sourceKeys);
	const targetSet = new Set(targetKeys);

	const missingInTarget = sourceKeys.filter((k) => !targetSet.has(k)).sort();
	const extraInTarget = targetKeys.filter((k) => !sourceSet.has(k)).sort();

	return { missingInTarget, extraInTarget };
}

function printList(title: string, items: string[]) {
	console.log(`${title} (${items.length})`);
	if (items.length === 0) {
		console.log('  - None');
		return;
	}
	for (const item of items) {
		console.log(`  - ${item}`);
	}
}

function main() {
	const { missingInTarget, extraInTarget } = diffKeys(fr as JsonObject, en as JsonObject);
	printList('Missing in EN (present in FR, absent in EN)', missingInTarget);
	console.log('');
	printList('Extra in EN (present in EN, absent in FR)', extraInTarget);
}

main();
