/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Apidog",
    tagline: "Apidog are cool",
    baseUrl: "/help/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    breadcrumbs: false,
                },
                theme: {
                    // customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                hideOnScroll: false,
                items: [],
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                },
            },
            colorMode: {
                defaultMode: "light",
                disableSwitch: false,
                respectPrefersColorScheme: true,
            }
        }),
};

module.exports = config;
