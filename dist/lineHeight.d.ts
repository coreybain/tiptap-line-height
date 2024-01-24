import { Extension } from "@tiptap/core";
export interface LineHeightOptions {
    types: string[];
    heights: string[];
    defaultHeight: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        lineHeight: {
            /**
             * Set the line height attribute
             */
            setLineHeight: (height: string) => ReturnType;
            /**
             * Unset the text align attribute
             */
            unsetLineHeight: () => ReturnType;
        };
    }
}
export declare const LineHeight: Extension<LineHeightOptions, any>;
