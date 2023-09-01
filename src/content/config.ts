import { defineCollection } from 'astro:content';

const infoCollection = defineCollection({
    type: "content"
})

export const collections = {
    'info': infoCollection
}