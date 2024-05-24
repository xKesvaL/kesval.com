import { posts } from "$lib/data/posts";

export const prerender = true;

export async function load() {
  return {
    posts
  }
}