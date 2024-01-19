import { getPosts } from "$lib/data/posts"
import { languageTag } from "$paraglide/runtime"

export const load = async () => {
    const posts = await getPosts(languageTag())

    return {
        posts,
    }
}