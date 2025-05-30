/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SvelteSyntaxHighlightingPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// loadPrismWithSvelte.ts
var import_obsidian = require("obsidian");
var applyPrismSvelte = (Prism) => {
  const blocks = "(if|else if|await|then|catch|each|html|debug)";
  Prism.languages.svelte = Prism.languages.extend("markup", {
    each: {
      pattern: new RegExp(
        "{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"
      ),
      inside: {
        "language-javascript": [
          {
            pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,
            lookbehind: true,
            inside: Prism.languages["javascript"]
          },
          {
            pattern: /(as[\s]*)[\s\S]*(?=\s*)/,
            lookbehind: true,
            inside: Prism.languages["javascript"]
          },
          {
            pattern: /(#each[\s]*)[\s\S]*(?=as)/,
            lookbehind: true,
            inside: Prism.languages["javascript"]
          }
        ],
        keyword: /[#/]each|as/,
        punctuation: /{|}/
      }
    },
    block: {
      pattern: new RegExp(
        "{[#:/@]/s" + blocks + "(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"
      ),
      inside: {
        punctuation: /^{|}$/,
        keyword: [new RegExp("[#:/@]" + blocks + "( )*"), /as/, /then/],
        "language-javascript": {
          pattern: /[\s\S]*/,
          inside: Prism.languages["javascript"]
        }
      }
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "language-javascript": {
          pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
          inside: Prism.languages["javascript"]
        },
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ],
            "language-javascript": {
              pattern: /{[\s\S]+}/,
              inside: Prism.languages["javascript"]
            }
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    "language-javascript": {
      pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
      lookbehind: true,
      inside: Prism.languages["javascript"]
    }
  });
  Prism.languages.svelte["tag"].inside["attr-value"].inside["entity"] = Prism.languages.svelte["entity"];
  Prism.hooks.add("wrap", (env) => {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism.languages.svelte.tag, "addInlined", {
    value: function addInlined(tagName, lang) {
      const includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      const inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      const def = {};
      def[tagName] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            tagName
          ),
          "i"
        ),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism.languages.insertBefore("svelte", "cdata", def);
    }
  });
  Prism.languages.svelte.tag.addInlined("style", "css");
  Prism.languages.svelte.tag.addInlined("script", "javascript");
};
var loadPrismWithSvelte = async () => {
  try {
    const Prism = await (0, import_obsidian.loadPrism)();
    applyPrismSvelte(Prism);
    return Prism;
  } catch (error) {
    console.error("Failed to load Prism:", error);
    throw error;
  }
};
var loadPrismWithSvelte_default = loadPrismWithSvelte;

// svelteHighlighter.ts
var import_view = require("@codemirror/view");
var import_state = require("@codemirror/state");
var SvelteHighlight = class {
  constructor(view) {
    this.decorations = import_view.Decoration.none;
    this.loadPrism().then(() => {
      this.decorations = this.buildDecorations(view);
      view.update([]);
    });
  }
  update(update) {
    if (update.viewportChanged || update.docChanged) {
      this.decorations = this.buildDecorations(update.view);
    }
  }
  async loadPrism() {
    this.prism = await loadPrismWithSvelte_default();
  }
  buildDecorations(view) {
    const builder = new import_state.RangeSetBuilder();
    if (!this.prism) {
      return import_view.Decoration.none;
    }
    const text = view.state.doc.toString();
    const regex = /```svelte(?:[\s:!?.;,@%&(){}[\]<>*~]*)([\s\S]*?)\n```/gi;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const codeBlock = match[0];
      const highlighted = this.prism.highlight(codeBlock, this.prism.languages.svelte, "svelte");
      const blockStart = match.index;
      this.applyHighlighting(highlighted, blockStart, builder);
    }
    return builder.finish();
  }
  applyHighlighting(highlighted, blockStart, builder) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(highlighted, "text/html");
    const tempEl = doc.body;
    let currentIndex = blockStart;
    const ranges = [];
    const traverse = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        currentIndex += text.length;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        const className = element.className;
        const start = currentIndex;
        element.childNodes.forEach((child) => {
          traverse(child);
        });
        const end = currentIndex;
        ranges.push({ start, end, className });
      }
    };
    tempEl.childNodes.forEach((child) => {
      traverse(child);
    });
    ranges.sort((a, b) => a.start - b.start);
    for (const range of ranges) {
      builder.add(
        range.start,
        range.end,
        import_view.Decoration.mark({ class: range.className })
      );
    }
  }
};

// main.ts
var import_view2 = require("@codemirror/view");
var SvelteSyntaxHighlightingPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    try {
      console.log("Loading Svelte Syntax Highlighting Plugin");
      this.obsidianPrism = await loadPrismWithSvelte_default();
      this.registerMarkdownPostProcessor((el, ctx) => {
        el.querySelectorAll("pre > code.language-svelte").forEach((block) => {
          this.obsidianPrism.highlightElement(block);
        });
      });
      this.registerEditorExtension(
        import_view2.ViewPlugin.fromClass(
          SvelteHighlight,
          {
            decorations: (plugin) => plugin.decorations
          }
        )
      );
      this.app.workspace.updateOptions();
    } catch (error) {
      console.error("Failed to load Prism: ", error);
    }
  }
  onunload() {
    console.log("Unloading Svelte Syntax Highlighting Plugin");
    if (this.obsidianPrism && this.obsidianPrism.languages.svelte) {
      delete this.obsidianPrism.languages.svelte;
    }
  }
};


/* nosourcemap */