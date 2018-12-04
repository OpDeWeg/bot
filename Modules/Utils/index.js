module.exports = {
	ClearServerStats: require("./ClearServerStats.js"),
	FilterChecker: require("./FilterChecker.js"),
	Gag: require("./Gag.js"),
	GetFlagForRegion: require("./GetFlagForRegion.js"),
	GetValue: require("./GetValue.js"),
	Gist: require("./GitHubGist.js"),
	GlobalDefines: require("./GlobalDefines.js"),
	IsURL: require("./IsURL.js"),
	MessageOfTheDay: require("./MessageOfTheDay.js"),
	ObjectDefines: require("./ObjectDefines.js"),
	PromiseWait: waitFor => new Promise(resolve => setTimeout(resolve, waitFor)),
	RankScoreCalculator: (messages, voice) => messages + voice,
	RegExpMaker: require("./RegExpMaker.js"),
	RemoveFormatting: require("./RemoveFormatting.js"),
	RSS: require("./RSS.js"),
	SearchiTunes: require("./SearchiTunes.js"),
	SetCountdown: require("./SetCountdown.js"),
	SetReminder: require("./SetReminder.js"),
	Stopwatch: require("./Stopwatch"),
	StreamChecker: require("./StreamChecker.js"),
	StreamerUtils: require("./StreamerUtils.js"),
	StreamingRSS: require("./StreamingRSS.js"),
	StructureExtender: require("./StructureExtender.js"),
	TitlecasePermissions: require("./TitlecasePermissions.js"),
};
