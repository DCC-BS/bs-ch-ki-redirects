export type AppConfig = {
    homepageUrl: string;
    redirects: {
        relativePath: string;
        checkUrl: string;
        to: string;
        appName: string;
    }[];
};

export const config = {
    homepageUrl: "https://www.bs.ch/ki",
    redirects: [
        {
            relativePath: "textmate",
            to: "https://textmate.kdkp.intranet.bs.ch",
            checkUrl: "https://textmate.svc.kdkp-kiw.bsucsk8sa019.cmp.bs.ch/api/ping",
            appName: "TextMate",
        },
        {
            relativePath: "transcribo",
            to: "https://transcribo.kdkp.intranet.bs.ch",
            checkUrl: "https://transcribo.svc.kdkp-kiw.bsucsk8sa019.cmp.bs.ch/api/ping/",
            appName: "Transcribo",
        },
        {
            relativePath: "bs-uebersetzer",
            to: "https://bs-uebersetzer.kdkp.intranet.bs.ch",
            checkUrl: "https://bs-uebersetzer.svc.kdkp-kiw.bsucsk8sa019.cmp.bs.ch/api/ping",
            appName: "BS Übersetzer",
        },
        {
            relativePath: "extern",
            to: "https://extern.kdkp.intranet.bs.ch",
            checkUrl: "https://no-exist/api/ping",
            appName: "Extern Test",
        },
    ],
} satisfies AppConfig;
