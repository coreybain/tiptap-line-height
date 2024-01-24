import { Extension } from '@tiptap/core';

const LineHeight = Extension.create({
    name: "lineHeight",
    addOptions() {
        return {
            types: ["heading", "paragraph"],
            heights: ["100%", "115%", "150%", "200%", "250%", "300%"],
            defaultHeight: "100%",
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    lineHeight: {
                        default: this.options.defaultHeight,
                        parseHTML: (element) => element.style.lineHeight || this.options.defaultHeight,
                        renderHTML: (attributes) => {
                            if (attributes.lineHeight === this.options.defaultHeight) {
                                return {};
                            }
                            return { style: `line-height: ${attributes.lineHeight}` };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setLineHeight: (height) => ({ commands }) => {
                if (!this.options.heights.includes(height)) {
                    return false;
                }
                return this.options.types.every((type) => commands.updateAttributes(type, { lineHeight: height }));
            },
            unsetLineHeight: () => ({ commands }) => {
                return this.options.types.every((type) => commands.resetAttributes(type, "lineHeight"));
            },
        };
    },
});

export { LineHeight, LineHeight as default };
//# sourceMappingURL=index.js.map
