/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ConfigProvider {
        "prefixCls": string;
    }
    interface TablerCheckbox {
        "checked": boolean;
        "disabled": boolean;
    }
    interface TablerToast {
    }
}
export interface TablerCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTablerCheckboxElement;
}
declare global {
    interface HTMLConfigProviderElement extends Components.ConfigProvider, HTMLStencilElement {
    }
    var HTMLConfigProviderElement: {
        prototype: HTMLConfigProviderElement;
        new (): HTMLConfigProviderElement;
    };
    interface HTMLTablerCheckboxElement extends Components.TablerCheckbox, HTMLStencilElement {
    }
    var HTMLTablerCheckboxElement: {
        prototype: HTMLTablerCheckboxElement;
        new (): HTMLTablerCheckboxElement;
    };
    interface HTMLTablerToastElement extends Components.TablerToast, HTMLStencilElement {
    }
    var HTMLTablerToastElement: {
        prototype: HTMLTablerToastElement;
        new (): HTMLTablerToastElement;
    };
    interface HTMLElementTagNameMap {
        "config-provider": HTMLConfigProviderElement;
        "tabler-checkbox": HTMLTablerCheckboxElement;
        "tabler-toast": HTMLTablerToastElement;
    }
}
declare namespace LocalJSX {
    interface ConfigProvider {
        "prefixCls"?: string;
    }
    interface TablerCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onChange"?: (event: TablerCheckboxCustomEvent<boolean>) => void;
    }
    interface TablerToast {
    }
    interface IntrinsicElements {
        "config-provider": ConfigProvider;
        "tabler-checkbox": TablerCheckbox;
        "tabler-toast": TablerToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "config-provider": LocalJSX.ConfigProvider & JSXBase.HTMLAttributes<HTMLConfigProviderElement>;
            "tabler-checkbox": LocalJSX.TablerCheckbox & JSXBase.HTMLAttributes<HTMLTablerCheckboxElement>;
            "tabler-toast": LocalJSX.TablerToast & JSXBase.HTMLAttributes<HTMLTablerToastElement>;
        }
    }
}
