/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TablerButton {
        /**
          * 是否独占一行
         */
        "block": boolean;
        /**
          * 是否圆形按钮
         */
        "circle": boolean;
        /**
          * 是否禁用状态
         */
        "disabled": boolean;
        /**
          * 图标类名
         */
        "icon": string;
        /**
          * loading
         */
        "loading": boolean;
        /**
          * 是否朴素按钮
         */
        "plain": boolean;
        /**
          * 是否圆角按钮
         */
        "round": boolean;
        "size": string;
        /**
          * 类型
         */
        "type": string;
    }
    interface TablerCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "label": string;
    }
}
declare global {
    interface HTMLTablerButtonElement extends Components.TablerButton, HTMLStencilElement {
    }
    var HTMLTablerButtonElement: {
        prototype: HTMLTablerButtonElement;
        new (): HTMLTablerButtonElement;
    };
    interface HTMLTablerCheckboxElement extends Components.TablerCheckbox, HTMLStencilElement {
    }
    var HTMLTablerCheckboxElement: {
        prototype: HTMLTablerCheckboxElement;
        new (): HTMLTablerCheckboxElement;
    };
    interface HTMLElementTagNameMap {
        "tabler-button": HTMLTablerButtonElement;
        "tabler-checkbox": HTMLTablerCheckboxElement;
    }
}
declare namespace LocalJSX {
    interface TablerButton {
        /**
          * 是否独占一行
         */
        "block"?: boolean;
        /**
          * 是否圆形按钮
         */
        "circle"?: boolean;
        /**
          * 是否禁用状态
         */
        "disabled"?: boolean;
        /**
          * 图标类名
         */
        "icon"?: string;
        /**
          * loading
         */
        "loading"?: boolean;
        /**
          * 是否朴素按钮
         */
        "plain"?: boolean;
        /**
          * 是否圆角按钮
         */
        "round"?: boolean;
        "size"?: string;
        /**
          * 类型
         */
        "type"?: string;
    }
    interface TablerCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
    }
    interface IntrinsicElements {
        "tabler-button": TablerButton;
        "tabler-checkbox": TablerCheckbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tabler-button": LocalJSX.TablerButton & JSXBase.HTMLAttributes<HTMLTablerButtonElement>;
            "tabler-checkbox": LocalJSX.TablerCheckbox & JSXBase.HTMLAttributes<HTMLTablerCheckboxElement>;
        }
    }
}
