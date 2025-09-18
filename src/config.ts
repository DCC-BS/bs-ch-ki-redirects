export type AppConfig = {
	homepageUrl: string;
	redirects: [
		{
			relativePath: string;
			checkUrl: string;
			to: string;
			appName: string;
		},
	];
};

export const config = {
	homepageUrl: "https://www.bs.ch/ki",
	redirects: [
		{
			relativePath: "/textmate",
			to: "https://textmate.uvk8sbswc19.cmp.bs.ch",
			checkUrl: "https://textmate.uvk8sbswc19.cmp.bs.ch/api/ping",
			appName: "TextMate",
		},
		{
			relativePath: "/transcribo",
			to: "https://transcribo.uvk8sbswc19.cmp.bs.ch",
			checkUrl: "https://transcribo.uvk8sbswc19.cmp.bs.ch/api/ping",
			appName: "Transcribo",
		},
		{
			relativePath: "bs-uebersetzer",
			to: "https://bs-uebersetzer.uvk8sbswc19.cmp.bs.ch/",
			checkUrl: "https://bs-uebersetzer.uvk8sbswc19.cmp.bs.ch/api/ping",
			appName: "BS Übersetzer",
		},
	],
};
