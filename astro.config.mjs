// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://FernandoAlmaraz.github.io',
    base: '/PortafolioFernandoAlmaraz',
    output: 'static',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});