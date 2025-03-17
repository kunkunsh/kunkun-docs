// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightBlog from "starlight-blog";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightImageZoom from "starlight-image-zoom";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

const googleAnalyticsId = "G-0CV6E8FN6E";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Kunkun",
      editLink: {
        baseUrl: "https://github.com/kunkunsh/kunkun-docs/edit/main",
      },
      lastUpdated: true,
      logo: {
        // src: "./src/assets/kunkun-logo-gray.svg"
        light: "./src/assets/kunkun-logo.svg",
        dark: "./src/assets/kunkun-logo-inverted.svg",
      },
      social: {
        github: "https://github.com/kunkunsh/kunkun",
        discord: "https://discord.gg/7dzw3TYeTU",
        youtube: "https://www.youtube.com/@huakun",
      },
      plugins: [
        // starlightBlog(),
        starlightHeadingBadges(),
        starlightImageZoom(),
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },
        }),
      ],
      components: {
        MarkdownContent: "./src/components/overrides/MarkdownContent.astro",
        ThemeProvider: "./src/components/overrides/ThemeProvider.astro",
        Header: "./src/components/overrides/Header.astro",
      },
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://assets.onedollarstats.com/stonks.js",
            defer: true,
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "34fb8d86-d0d1-4813-a727-ac7d2ab639a7",
            defer: true,
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://umami.huakunshen.com/script.js",
            "data-website-id": "c20c027b-285c-4724-9146-f2cf797b22a0",
            defer: true,
          },
        },
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          },
        },
        {
          tag: "script",
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
          `,
        },
        {
          tag: "script",
          attrs: {
            "is:inline": true,
          },
          content: `
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init(
            'phc_xdePopsl0NZOIROIOF0Dh5QLzMJyTv65KewhuIkm4wy',
            {
              api_host:"https://us.i.posthog.com",
            }
          )
          `,
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Guides",
              autogenerate: {
                directory: "guides",
              },
            },
            {
              label: "Milestones",
              autogenerate: {
                directory: "milestones",
              },
              collapsed: true,
            },
            {
              label: "Extensions",
              autogenerate: {
                directory: "extensions",
              },
              collapsed: false,
            },
            {
              label: "Developer",
              autogenerate: {
                directory: "developer",
              },
              collapsed: false,
            },
            {
              label: "Reference",
              autogenerate: {
                directory: "reference",
              },
              collapsed: false,
            },
          ],
        },
        {
          label: "Blog",
          autogenerate: {
            directory: "blog",
          },
          collapsed: false,
        },
      ],
      customCss: ["./src/tailwind.css", "./src/app.css"],
    }),
    tailwind({ applyBaseStyles: true }),
    svelte(),
    react(),
    vue(),
  ],
  image: {
    service: passthroughImageService(),
  },
});
