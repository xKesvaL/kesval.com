import { email } from '$lib/utils/data';
import type { LayoutServerLoad } from './$types';

const load: LayoutServerLoad = async function ({ url }) {
  return {
    email,
    url: url.pathname,
  };
};

export { load };
