import { PDWindow, getFiles, openLink } from "../../src/DeskUI.js";

const temp_folder = {
    pardnchiu: {
        type: "folder",
        directory: "pardnchiu",
        is_folder: true,
        icon: "../../dist/icons/folder.svg",
        files: {
            photo: {
                type: "folder",
                directory: "pardnchiu/photo",
                is_folder: true,
                icon: "../../dist/icons/folder.svg",
                files: {
                    "launcher.svg": {
                        type: "image",
                        directory: "pardnchiu/photo/launcher.svg",
                        is_folder: false,
                        icon: "../../dist/icons/launcher.svg"
                    },
                    "broswer.svg": {
                        type: "image",
                        directory: "pardnchiu/photo/broswer.svg",
                        is_folder: false,
                        icon: "../../dist/icons/broswer.svg"
                    },
                    "folder.svg": {
                        type: "image",
                        directory: "pardnchiu/photo/folder.svg",
                        is_folder: false,
                        icon: "../../dist/icons/folder.svg"
                    },
                    "note.svg": {
                        type: "image",
                        directory: "pardnchiu/photo/note.svg",
                        is_folder: false,
                        icon: "../../dist/icons/note.svg"
                    }
                }
            },
            video: {
                type: "folder",
                directory: "pardnchiu/video",
                is_folder: true,
                icon: "../../dist/icons/folder.svg",
                files: {

                }
            },
            note: {
                type: "folder",
                directory: "pardnchiu/note",
                is_folder: true,
                icon: "../../dist/icons/folder.svg",
                files: {

                }
            },
        }
    }
};

const temp_shortcut = {
    "Website": {
        type: "folder",
        icon: "../../dist/icons/folder.svg",
        files: {
            "網頁前端框架": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/QuickUI",
                href: "https://quickui.pardn.io"
            },
            "網頁前端擴展": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/RenderJS",
                href: "https://renderjs.pardn.io"
            },
            "Markdown 編輯器": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/NanoMD",
                href: "https://nanomd.pardn.io"
            },
            "JSON 編輯器": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/NanoJSON",
                href: "https://nanojson.pardn.io"
            },
            "模組化播放器": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/flexplyr",
                href: "https://flexplyr.pardn.io"
            },
            "PDF 轉圖片": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/pdf2image",
                href: "https://pardn.io/pdf2image"
            },
            "架站工具": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/website-builder",
                href: "https://pardn.io/website-builder"
            },
            "AdminUI": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/AdminUI",
                href: "https://demo-admin.pardn.io/"
            },
            "網站範例合輯": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/web-template",
                href: "https://pardn.io/web-template"
            },
            "CSS 繪圖": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/pokemon-quest-css-drawing",
                href: "https://pardnchiu.github.io/pokemon-quest-css-drawing"
            },
        }
    },
    "iOS / macOS": {
        type: "folder",
        icon: "../../dist/icons/folder.svg",
        files: {
            "聲明式語法擴展": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/ExSwift",
                href: "https://github.con/pardnchiu/ExSwift",
                taget: "_blank"
            },
            "Markdown 擴展": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/MarkdownKit",
                href: "https://github.con/pardnchiu/MarkdownKit",
                taget: "_blank"
            },
            "Pintrest 設計實現": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/swift-UI-Reality",
                href: "https://github.con/pardnchiu/swift-UI-Reality",
                taget: "_blank"
            },
            "鍵盤滑鼠點擊紀錄": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/WorklyticsTracker",
                href: "https://github.con/pardnchiu/WorklyticsTracker",
                taget: "_blank"
            },
            "（範例）記帳軟體": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/ios-moneybook",
                href: "https://pardnchiu.github.io/ios-moneybook",
                taget: "_blank"
            },
            "（範例）即時訊息": {
                type: "link",
                icon: "https://opengraph.githubassets.com/1/pardnchiu/ios-firebase-messaging",
                href: "https://pardnchiu.github.io/ios-firebase-messaging",
                taget: "_blank"
            },
        }
    },
}

document.addEventListener("DOMContentLoaded", _ => {

    const page = new PD({
        id: "page",
        event: {
            openFolder: e => {
                const dom = new PDWindow({
                    title: "檔案管理",
                    icon: "../../dist/icons/folder.svg",
                    width: 512,
                    height: 320,
                    content: "section"._({ "data-mode": "grid" },
                        getFiles(temp_folder, "pardnchiu")
                    )._dragenter(function (e) {
                        dragOverFolder = this;
                    })
                });
                document.body._child([
                    dom.body
                ]);
            },
            openBroswer: e => {
                const dom = new PDWindow({
                    title: "Google",
                    icon: "https://joball.tw/logo.png",
                    top: 0,
                    left: (vw - 1024) / 2,
                    width: 1024,
                    height: vh,
                    content: "section"._([
                        "iframe"._({
                            src: "https://pardn.io"
                        })
                    ])
                });
                document.body._child([
                    dom.body
                ]);
            },
            openNode: e => {
                const dom = new PDWindow({
                    title: "文字編輯器",
                    icon: "../../dist/icons/note.svg",
                    width: 480,
                    height: 320,
                    content: "section"._({ "data-mode": "list" }, [
                        "textarea.editor"._()
                    ])
                });
                document.body._child([
                    dom.body
                ]);
            }
        },
        next: _ => {
            "page".$.$sel("section.shortcut")._child(
                temp_shortcut.$keys._$(key1 => {
                    const type = temp_shortcut[key1].type;

                    if (type == "folder") {
                        return "div"._([
                            "img"._(temp_shortcut[key1].icon),
                            "span"._(key1)
                        ])._dblclick(_ => {
                            const dom = new PDWindow({
                                title: key1,
                                icon: "../../dist/icons/folder.svg",
                                width: 512,
                                height: 320,
                                content: "section"._({ "data-mode": "grid" },
                                    getFiles(temp_shortcut, key1)
                                )._dragenter(function (e) {
                                    dragOverFolder = this;
                                })
                            });
                            document.body._child([
                                dom.body
                            ]);
                        })
                    }
                    else if (type == "link") {
                        return "div"._([
                            "img"._(temp_shortcut[key1].icon),
                            "span"._(key1)
                        ])._dblclick(_ => {
                            openLink(key1, temp_shortcut[key1].href);
                        })
                    }
                })
            )
        }
    })
});
