import { projects } from '$lib/utils/data';

export async function load() {
  return {
    projects,
  };
}
