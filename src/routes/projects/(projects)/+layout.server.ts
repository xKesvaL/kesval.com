import type { LayoutServerLoad } from './$types';

const load: LayoutServerLoad = async ({ url }) => {
  return {
    url: url.pathname,
  };
};

export { load };
