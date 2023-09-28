/// <amd-module name="@scom/scom-thread/index.css.ts" />
declare module "@scom/scom-thread/index.css.ts" {
    export const spinnerStyle: string;
    export const avatarStyle: string;
    export const labelStyle: string;
    export const cardStyle: string;
    export const imageStyle: string;
    export const multiLineTextStyle: string;
    export const overlayStyle: string;
    export const gridLayoutStyle: string;
    export const customStyles: string;
    export const modalStyle: string;
    export const editorStyle: string;
}
/// <amd-module name="@scom/scom-thread/interface.ts" />
declare module "@scom/scom-thread/interface.ts" {
    import { IconName } from "@ijstech/components";
    export interface IThread {
        cid: string;
    }
    interface IPostAnalytics {
        reply: string | number;
        repost: string | number;
        like: string | number;
        bookmark: string | number;
        view: string | number;
    }
    export interface IPostData {
        username: string;
        owner?: string;
        description?: string;
        dataUri?: string;
        publishDate?: number;
        replies?: IReply[];
        analytics?: IPostAnalytics;
    }
    export interface IReply {
        cid: string;
    }
    export interface IAnalytic {
        name: string;
        value: number | string;
        icon: IconName;
        class?: string;
        onClick?: () => void;
    }
}
/// <amd-module name="@scom/scom-thread/store/index.ts" />
declare module "@scom/scom-thread/store/index.ts" {
    export const state: {
        ipfsGatewayUrl: string;
    };
    export const setDataFromJson: (options: any) => void;
    export const setIPFSGatewayUrl: (url: string) => void;
    export const getIPFSGatewayUrl: () => string;
}
/// <amd-module name="@scom/scom-thread/global/utils.ts" />
declare module "@scom/scom-thread/global/utils.ts" {
    const getImageIpfsUrl: (url: string) => string;
    const formatNumber: (value: number | string, decimal?: number) => string;
    const getDuration: (date: number) => string;
    export { getImageIpfsUrl, formatNumber, getDuration };
}
/// <amd-module name="@scom/scom-thread/global/localData/data.json.ts" />
declare module "@scom/scom-thread/global/localData/data.json.ts" {
    const _default: {
        username: string;
        description: string;
        dataUri: string;
        owner: string;
        publishDate: number;
        analytics: {
            reply: number;
            repost: number;
            like: number;
            bookmark: number;
            view: number;
        };
        replies: {
            cid: string;
        }[];
    };
    export default _default;
}
/// <amd-module name="@scom/scom-thread/global/localData/scconfig.json.ts" />
declare module "@scom/scom-thread/global/localData/scconfig.json.ts" {
    const _default_1: {
        sections: ({
            id: string;
            row: number;
            elements: {
                id: string;
                column: number;
                columnSpan: number;
                properties: {
                    content: string;
                };
                module: {
                    name: string;
                    path: string;
                    category: string;
                    imgUrl: string;
                };
            }[];
        } | {
            id: string;
            row: number;
            elements: {
                id: string;
                column: number;
                columnSpan: number;
                properties: {
                    showHeader: boolean;
                    showFooter: boolean;
                    url: string;
                    photoId: string;
                };
                module: {
                    name: string;
                    path: string;
                    category: string;
                    disableClicked: boolean;
                    imgUrl: string;
                };
            }[];
        })[];
        config: {
            backgroundColor: string;
            margin: {
                x: string;
                y: string;
            };
            sectionWidth: number;
            textColor: string;
            customBackgroundColor: boolean;
            customTextColor: boolean;
            customTextSize: boolean;
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-thread/global/API.ts" />
declare module "@scom/scom-thread/global/API.ts" {
    const fetchDataByCid: (cid: string) => Promise<any>;
    const getWidgetData: (dataUri: string) => Promise<any>;
    export { fetchDataByCid, getWidgetData };
}
/// <amd-module name="@scom/scom-thread/global/const.ts" />
declare module "@scom/scom-thread/global/const.ts" {
    export const EVENTS: {
        SHOW_REPLY_MODAL: string;
    };
}
/// <amd-module name="@scom/scom-thread/global/index.ts" />
declare module "@scom/scom-thread/global/index.ts" {
    export * from "@scom/scom-thread/global/utils.ts";
    export * from "@scom/scom-thread/global/API.ts";
    export * from "@scom/scom-thread/global/const.ts";
}
/// <amd-module name="@scom/scom-thread/data.json.ts" />
declare module "@scom/scom-thread/data.json.ts" {
    const _default_2: {
        ipfsGatewayUrl: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-thread/commons/analytic/index.css.ts" />
declare module "@scom/scom-thread/commons/analytic/index.css.ts" {
    export const analyticStyle: string;
}
/// <amd-module name="@scom/scom-thread/commons/analytic/index.tsx" />
declare module "@scom/scom-thread/commons/analytic/index.tsx" {
    import { ControlElement, Module } from '@ijstech/components';
    import { IAnalytic } from "@scom/scom-thread/interface.ts";
    interface ScomAnalyticsElement extends ControlElement {
        data?: IAnalytic[];
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-analytics']: ScomAnalyticsElement;
            }
        }
    }
    export class ScomAnalytics extends Module {
        private gridAnalysis;
        private _data;
        setData(value: IAnalytic[]): void;
        getData(): IAnalytic[];
        private renderUI;
        init(): void;
        render(): void;
    }
}
/// <amd-module name="@scom/scom-thread/commons/post/index.css.ts" />
declare module "@scom/scom-thread/commons/post/index.css.ts" {
    export const spinnerStyle: string;
    export const avatarStyle: string;
    export const labelStyle: string;
    export const customStyles: string;
}
/// <amd-module name="@scom/scom-thread/commons/post/index.tsx" />
declare module "@scom/scom-thread/commons/post/index.tsx" {
    import { ControlElement, Module, Container, Markdown } from '@ijstech/components';
    import { IPostData } from "@scom/scom-thread/interface.ts";
    type IPostType = 'reply' | 'post';
    interface ScomPostElement extends ControlElement {
        cid?: string;
        type?: IPostType;
        showAnalytics?: boolean;
        theme?: Markdown["theme"];
    }
    interface IPostConfig {
        cid: string;
        type?: IPostType;
        showAnalytics?: boolean;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post']: ScomPostElement;
            }
        }
    }
    export class ScomPost extends Module {
        private imgAvatar;
        private lblOwner;
        private lblUsername;
        private pnlLoader;
        private lblDate;
        private pageViewer;
        private analyticEl;
        private pnlAvatar;
        private pnlMore;
        private pnlReplyTo;
        private _data;
        private _config;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomPostElement, parent?: Container): Promise<ScomPost>;
        get cid(): string;
        set cid(value: string);
        get type(): IPostType;
        set type(value: IPostType);
        get showAnalytics(): boolean;
        set showAnalytics(value: boolean);
        set theme(value: Markdown["theme"]);
        setData(data: IPostConfig): Promise<void>;
        getData(): IPostData;
        private fetchData;
        clear(): void;
        private renderUI;
        private onShowMore;
        private renderReplies;
        private renderReplyTo;
        init(): Promise<void>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-thread/commons/status/index.css.ts" />
declare module "@scom/scom-thread/commons/status/index.css.ts" {
    export const spinnerStyle: string;
    export const avatarStyle: string;
    export const labelStyle: string;
    export const customStyles: string;
    export const editorStyle: string;
}
/// <amd-module name="@scom/scom-thread/commons/status/index.tsx" />
declare module "@scom/scom-thread/commons/status/index.tsx" {
    import { ControlElement, Module, Container, Markdown } from '@ijstech/components';
    import { IPostData } from "@scom/scom-thread/interface.ts";
    interface ScomStatusElement extends ControlElement {
        cid?: string;
        theme?: Markdown["theme"];
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-status']: ScomStatusElement;
            }
        }
    }
    export class ScomStatus extends Module {
        private imgAvatar;
        private lblOwner;
        private lblDate;
        private lblUsername;
        private lbViews;
        private pnlPostFrom;
        private pnlLoader;
        private pageViewer;
        private analyticEl;
        private pnlStatusReplies;
        private replyEditor;
        private _data;
        private _cid;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomStatusElement, parent?: Container): Promise<ScomStatus>;
        get cid(): string;
        set cid(value: string);
        set theme(value: Markdown["theme"]);
        setData(cid: string): Promise<void>;
        getData(): IPostData;
        private fetchData;
        clear(): void;
        private renderUI;
        private renderPostFrom;
        private renderReplies;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-thread/commons/index.ts" />
declare module "@scom/scom-thread/commons/index.ts" {
    export { ScomAnalytics } from "@scom/scom-thread/commons/analytic/index.tsx";
    export { ScomPost } from "@scom/scom-thread/commons/post/index.tsx";
    export { ScomStatus } from "@scom/scom-thread/commons/status/index.tsx";
}
/// <amd-module name="@scom/scom-thread" />
declare module "@scom/scom-thread" {
    import { ControlElement, Module, Container, Markdown } from '@ijstech/components';
    import { IThread } from "@scom/scom-thread/interface.ts";
    interface ScomThreadElement extends ControlElement {
        cid?: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-thread']: ScomThreadElement;
            }
        }
    }
    export default class ScomThread extends Module {
        private mdReply;
        private mdPost;
        private mainStatus;
        private replyEditor;
        private btnReply;
        private $eventBus;
        private _data;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomThreadElement, parent?: Container): Promise<ScomThread>;
        get cid(): string;
        set cid(value: string);
        set theme(value: Markdown["theme"]);
        setData(value: IThread): Promise<void>;
        getData(): IThread;
        clear(): void;
        private renderUI;
        private onClosedReplyMd;
        private onShowReplyMd;
        private initEvents;
        init(): void;
        render(): any;
    }
}
