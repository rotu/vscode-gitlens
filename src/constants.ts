export const commandPrefix = 'gitlens';
export const configPrefix = 'gitlens';
export const quickPickTitleMaxChars = 80;

export const ImageMimetypes: Record<string, string> = {
	'.png': 'image/png',
	'.gif': 'image/gif',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.jpe': 'image/jpeg',
	'.webp': 'image/webp',
	'.tif': 'image/tiff',
	'.tiff': 'image/tiff',
	'.bmp': 'image/bmp',
};

export const enum CharCode {
	/**
	 * The `#` character.
	 */
	Hash = 35,
	/**
	 * The `/` character.
	 */
	Slash = 47,
	Digit0 = 48,
	Digit1 = 49,
	Digit2 = 50,
	Digit3 = 51,
	Digit4 = 52,
	Digit5 = 53,
	Digit6 = 54,
	Digit7 = 55,
	Digit8 = 56,
	Digit9 = 57,
	/**
	 * The `\` character.
	 */
	Backslash = 92,
	A = 65,
	B = 66,
	C = 67,
	D = 68,
	E = 69,
	F = 70,
	Z = 90,
	a = 97,
	b = 98,
	c = 99,
	d = 100,
	e = 101,
	f = 102,
	z = 122,
}

export const enum Colors {
	GutterBackgroundColor = 'gitlens.gutterBackgroundColor',
	GutterForegroundColor = 'gitlens.gutterForegroundColor',
	GutterUncommittedForegroundColor = 'gitlens.gutterUncommittedForegroundColor',
	TrailingLineBackgroundColor = 'gitlens.trailingLineBackgroundColor',
	TrailingLineForegroundColor = 'gitlens.trailingLineForegroundColor',
	LineHighlightBackgroundColor = 'gitlens.lineHighlightBackgroundColor',
	LineHighlightOverviewRulerColor = 'gitlens.lineHighlightOverviewRulerColor',
	ClosedAutolinkedIssueIconColor = 'gitlens.closedAutolinkedIssueIconColor',
	ClosedPullRequestIconColor = 'gitlens.closedPullRequestIconColor',
	OpenAutolinkedIssueIconColor = 'gitlens.openAutolinkedIssueIconColor',
	OpenPullRequestIconColor = 'gitlens.openPullRequestIconColor',
	MergedPullRequestIconColor = 'gitlens.mergedPullRequestIconColor',
	UnpublishedChangesIconColor = 'gitlens.unpublishedChangesIconColor',
	UnpublishedCommitIconColor = 'gitlens.unpublishedCommitIconColor',
	UnpulledChangesIconColor = 'gitlens.unpulledChangesIconColor',
}

export const enum Commands {
	ActionPrefix = 'gitlens.action.',

	AddAuthors = 'gitlens.addAuthors',
	BrowseRepoAtRevision = 'gitlens.browseRepoAtRevision',
	BrowseRepoAtRevisionInNewWindow = 'gitlens.browseRepoAtRevisionInNewWindow',
	BrowseRepoBeforeRevision = 'gitlens.browseRepoBeforeRevision',
	BrowseRepoBeforeRevisionInNewWindow = 'gitlens.browseRepoBeforeRevisionInNewWindow',
	ClearFileAnnotations = 'gitlens.clearFileAnnotations',
	CloseUnchangedFiles = 'gitlens.closeUnchangedFiles',
	CloseWelcomeView = 'gitlens.closeWelcomeView',
	CompareWith = 'gitlens.compareWith',
	CompareHeadWith = 'gitlens.compareHeadWith',
	CompareWorkingWith = 'gitlens.compareWorkingWith',
	ComputingFileAnnotations = 'gitlens.computingFileAnnotations',
	ConnectRemoteProvider = 'gitlens.connectRemoteProvider',
	CopyAutolinkUrl = 'gitlens.copyAutolinkUrl',
	CopyCurrentBranch = 'gitlens.copyCurrentBranch',
	CopyDeepLinkToBranch = 'gitlens.copyDeepLinkToBranch',
	CopyDeepLinkToCommit = 'gitlens.copyDeepLinkToCommit',
	CopyDeepLinkToRepo = 'gitlens.copyDeepLinkToRepo',
	CopyDeepLinkToTag = 'gitlens.copyDeepLinkToTag',
	CopyMessageToClipboard = 'gitlens.copyMessageToClipboard',
	CopyRemoteBranchesUrl = 'gitlens.copyRemoteBranchesUrl',
	CopyRemoteBranchUrl = 'gitlens.copyRemoteBranchUrl',
	CopyRemoteCommitUrl = 'gitlens.copyRemoteCommitUrl',
	CopyRemoteComparisonUrl = 'gitlens.copyRemoteComparisonUrl',
	CopyRemoteFileUrl = 'gitlens.copyRemoteFileUrlToClipboard',
	CopyRemoteFileUrlWithoutRange = 'gitlens.copyRemoteFileUrlWithoutRange',
	CopyRemoteFileUrlFrom = 'gitlens.copyRemoteFileUrlFrom',
	CopyRemoteIssueUrl = 'gitlens.copyRemoteIssueUrl',
	CopyRemotePullRequestUrl = 'gitlens.copyRemotePullRequestUrl',
	CopyRemoteRepositoryUrl = 'gitlens.copyRemoteRepositoryUrl',
	CopyShaToClipboard = 'gitlens.copyShaToClipboard',
	CreatePullRequestOnRemote = 'gitlens.createPullRequestOnRemote',
	DiffDirectory = 'gitlens.diffDirectory',
	DiffDirectoryWithHead = 'gitlens.diffDirectoryWithHead',
	DiffWith = 'gitlens.diffWith',
	DiffWithNext = 'gitlens.diffWithNext',
	DiffWithNextInDiffLeft = 'gitlens.diffWithNextInDiffLeft',
	DiffWithNextInDiffRight = 'gitlens.diffWithNextInDiffRight',
	DiffWithPrevious = 'gitlens.diffWithPrevious',
	DiffWithPreviousInDiffLeft = 'gitlens.diffWithPreviousInDiffLeft',
	DiffWithPreviousInDiffRight = 'gitlens.diffWithPreviousInDiffRight',
	DiffLineWithPrevious = 'gitlens.diffLineWithPrevious',
	DiffWithRevision = 'gitlens.diffWithRevision',
	DiffWithRevisionFrom = 'gitlens.diffWithRevisionFrom',
	DiffWithWorking = 'gitlens.diffWithWorking',
	DiffWithWorkingInDiffLeft = 'gitlens.diffWithWorkingInDiffLeft',
	DiffWithWorkingInDiffRight = 'gitlens.diffWithWorkingInDiffRight',
	DiffLineWithWorking = 'gitlens.diffLineWithWorking',
	DisconnectRemoteProvider = 'gitlens.disconnectRemoteProvider',
	DisableDebugLogging = 'gitlens.disableDebugLogging',
	EnableDebugLogging = 'gitlens.enableDebugLogging',
	DisableRebaseEditor = 'gitlens.disableRebaseEditor',
	EnableRebaseEditor = 'gitlens.enableRebaseEditor',
	ExternalDiff = 'gitlens.externalDiff',
	ExternalDiffAll = 'gitlens.externalDiffAll',
	FetchRepositories = 'gitlens.fetchRepositories',
	GenerateCommitMessage = 'gitlens.generateCommitMessage',
	GetStarted = 'gitlens.getStarted',
	InviteToLiveShare = 'gitlens.inviteToLiveShare',
	OpenAutolinkUrl = 'gitlens.openAutolinkUrl',
	OpenBlamePriorToChange = 'gitlens.openBlamePriorToChange',
	OpenBranchesOnRemote = 'gitlens.openBranchesOnRemote',
	OpenBranchOnRemote = 'gitlens.openBranchOnRemote',
	OpenCurrentBranchOnRemote = 'gitlens.openCurrentBranchOnRemote',
	OpenChangedFiles = 'gitlens.openChangedFiles',
	OpenCommitOnRemote = 'gitlens.openCommitOnRemote',
	OpenComparisonOnRemote = 'gitlens.openComparisonOnRemote',
	OpenFileHistory = 'gitlens.openFileHistory',
	OpenFileFromRemote = 'gitlens.openFileFromRemote',
	OpenFileOnRemote = 'gitlens.openFileOnRemote',
	OpenFileOnRemoteFrom = 'gitlens.openFileOnRemoteFrom',
	OpenFileAtRevision = 'gitlens.openFileRevision',
	OpenFileAtRevisionFrom = 'gitlens.openFileRevisionFrom',
	OpenFolderHistory = 'gitlens.openFolderHistory',
	OpenOnRemote = 'gitlens.openOnRemote',
	OpenIssueOnRemote = 'gitlens.openIssueOnRemote',
	OpenPullRequestOnRemote = 'gitlens.openPullRequestOnRemote',
	OpenAssociatedPullRequestOnRemote = 'gitlens.openAssociatedPullRequestOnRemote',
	OpenRepoOnRemote = 'gitlens.openRepoOnRemote',
	OpenRevisionFile = 'gitlens.openRevisionFile',
	OpenRevisionFileInDiffLeft = 'gitlens.openRevisionFileInDiffLeft',
	OpenRevisionFileInDiffRight = 'gitlens.openRevisionFileInDiffRight',
	OpenWalkthrough = 'gitlens.openWalkthrough',
	OpenWorkingFile = 'gitlens.openWorkingFile',
	OpenWorkingFileInDiffLeft = 'gitlens.openWorkingFileInDiffLeft',
	OpenWorkingFileInDiffRight = 'gitlens.openWorkingFileInDiffRight',
	PullRepositories = 'gitlens.pullRepositories',
	PushRepositories = 'gitlens.pushRepositories',
	GitCommands = 'gitlens.gitCommands',
	GitCommandsBranch = 'gitlens.gitCommands.branch',
	GitCommandsCherryPick = 'gitlens.gitCommands.cherryPick',
	GitCommandsMerge = 'gitlens.gitCommands.merge',
	GitCommandsRebase = 'gitlens.gitCommands.rebase',
	GitCommandsReset = 'gitlens.gitCommands.reset',
	GitCommandsRevert = 'gitlens.gitCommands.revert',
	GitCommandsSwitch = 'gitlens.gitCommands.switch',
	GitCommandsTag = 'gitlens.gitCommands.tag',
	GitCommandsWorktree = 'gitlens.gitCommands.worktree',
	OpenOrCreateWorktreeForGHPR = 'gitlens.ghpr.views.openOrCreateWorktree',
	PlusHide = 'gitlens.plus.hide',
	PlusLearn = 'gitlens.plus.learn',
	PlusLoginOrSignUp = 'gitlens.plus.loginOrSignUp',
	PlusLogout = 'gitlens.plus.logout',
	PlusManage = 'gitlens.plus.manage',
	PlusPurchase = 'gitlens.plus.purchase',
	PlusResendVerification = 'gitlens.plus.resendVerification',
	PlusRestore = 'gitlens.plus.restore',
	PlusShowPlans = 'gitlens.plus.showPlans',
	PlusStartPreviewTrial = 'gitlens.plus.startPreviewTrial',
	PlusValidate = 'gitlens.plus.validate',
	QuickOpenFileHistory = 'gitlens.quickOpenFileHistory',
	RefreshGraph = 'gitlens.graph.refresh',
	RefreshFocus = 'gitlens.focus.refresh',
	RefreshHover = 'gitlens.refreshHover',
	RefreshTimelinePage = 'gitlens.refreshTimelinePage',
	ResetAvatarCache = 'gitlens.resetAvatarCache',
	ResetOpenAIKey = 'gitlens.resetOpenAIKey',
	ResetSuppressedWarnings = 'gitlens.resetSuppressedWarnings',
	ResetTrackedUsage = 'gitlens.resetTrackedUsage',
	RevealCommitInView = 'gitlens.revealCommitInView',
	SearchCommits = 'gitlens.showCommitSearch',
	SearchCommitsInView = 'gitlens.views.searchAndCompare.searchCommits',
	SetViewsLayout = 'gitlens.setViewsLayout',
	ShowBranchesView = 'gitlens.showBranchesView',
	ShowCommitInView = 'gitlens.showCommitInView',
	ShowCommitsInView = 'gitlens.showCommitsInView',
	ShowCommitsView = 'gitlens.showCommitsView',
	ShowContributorsView = 'gitlens.showContributorsView',
	ShowHomeView = 'gitlens.showHomeView',
	ShowFileHistoryView = 'gitlens.showFileHistoryView',
	ShowInCommitGraph = 'gitlens.showInCommitGraph',
	ShowInDetailsView = 'gitlens.showInDetailsView',
	ShowLastQuickPick = 'gitlens.showLastQuickPick',
	ShowLineHistoryView = 'gitlens.showLineHistoryView',
	ShowQuickBranchHistory = 'gitlens.showQuickBranchHistory',
	ShowQuickCommit = 'gitlens.showQuickCommitDetails',
	ShowQuickCommitFile = 'gitlens.showQuickCommitFileDetails',
	ShowQuickCurrentBranchHistory = 'gitlens.showQuickRepoHistory',
	ShowQuickFileHistory = 'gitlens.showQuickFileHistory',
	ShowQuickRepoStatus = 'gitlens.showQuickRepoStatus',
	ShowQuickCommitRevision = 'gitlens.showQuickRevisionDetails',
	ShowQuickCommitRevisionInDiffLeft = 'gitlens.showQuickRevisionDetailsInDiffLeft',
	ShowQuickCommitRevisionInDiffRight = 'gitlens.showQuickRevisionDetailsInDiffRight',
	ShowQuickStashList = 'gitlens.showQuickStashList',
	ShowRemotesView = 'gitlens.showRemotesView',
	ShowRepositoriesView = 'gitlens.showRepositoriesView',
	ShowSearchAndCompareView = 'gitlens.showSearchAndCompareView',
	ShowSettingsPage = 'gitlens.showSettingsPage',
	ShowSettingsPageAndJumpToBranchesView = 'gitlens.showSettingsPage#branches-view',
	ShowSettingsPageAndJumpToCommitsView = 'gitlens.showSettingsPage#commits-view',
	ShowSettingsPageAndJumpToContributorsView = 'gitlens.showSettingsPage#contributors-view',
	ShowSettingsPageAndJumpToFileHistoryView = 'gitlens.showSettingsPage#file-history-view',
	ShowSettingsPageAndJumpToLineHistoryView = 'gitlens.showSettingsPage#line-history-view',
	ShowSettingsPageAndJumpToRemotesView = 'gitlens.showSettingsPage#remotes-view',
	ShowSettingsPageAndJumpToRepositoriesView = 'gitlens.showSettingsPage#repositories-view',
	ShowSettingsPageAndJumpToSearchAndCompareView = 'gitlens.showSettingsPage#search-compare-view',
	ShowSettingsPageAndJumpToStashesView = 'gitlens.showSettingsPage#stashes-view',
	ShowSettingsPageAndJumpToTagsView = 'gitlens.showSettingsPage#tags-view',
	ShowSettingsPageAndJumpToWorkTreesView = 'gitlens.showSettingsPage#worktrees-view',
	ShowSettingsPageAndJumpToViews = 'gitlens.showSettingsPage#views',
	ShowSettingsPageAndJumpToCommitGraph = 'gitlens.showSettingsPage#commit-graph',
	ShowSettingsPageAndJumpToAutolinks = 'gitlens.showSettingsPage#autolinks',
	ShowStashesView = 'gitlens.showStashesView',
	ShowTagsView = 'gitlens.showTagsView',
	ShowWorktreesView = 'gitlens.showWorktreesView',
	ShowCommitDetailsView = 'gitlens.showCommitDetailsView',
	ShowTimelinePage = 'gitlens.showTimelinePage',
	ShowTimelineView = 'gitlens.showTimelineView',
	ShowGraphPage = 'gitlens.showGraphPage',
	ShowWelcomePage = 'gitlens.showWelcomePage',
	ShowFocusPage = 'gitlens.showFocusPage',
	StashApply = 'gitlens.stashApply',
	StashSave = 'gitlens.stashSave',
	StashSaveFiles = 'gitlens.stashSaveFiles',
	SwitchMode = 'gitlens.switchMode',
	ToggleCodeLens = 'gitlens.toggleCodeLens',
	ToggleFileBlame = 'gitlens.toggleFileBlame',
	ToggleFileBlameInDiffLeft = 'gitlens.toggleFileBlameInDiffLeft',
	ToggleFileBlameInDiffRight = 'gitlens.toggleFileBlameInDiffRight',
	ToggleFileChanges = 'gitlens.toggleFileChanges',
	ToggleFileChangesOnly = 'gitlens.toggleFileChangesOnly',
	ToggleFileHeatmap = 'gitlens.toggleFileHeatmap',
	ToggleFileHeatmapInDiffLeft = 'gitlens.toggleFileHeatmapInDiffLeft',
	ToggleFileHeatmapInDiffRight = 'gitlens.toggleFileHeatmapInDiffRight',
	ToggleLineBlame = 'gitlens.toggleLineBlame',
	ToggleReviewMode = 'gitlens.toggleReviewMode',
	ToggleZenMode = 'gitlens.toggleZenMode',
	ViewsCopy = 'gitlens.views.copy',
	ViewsOpenDirectoryDiff = 'gitlens.views.openDirectoryDiff',
	ViewsOpenDirectoryDiffWithWorking = 'gitlens.views.openDirectoryDiffWithWorking',

	Deprecated_DiffHeadWith = 'gitlens.diffHeadWith',
	Deprecated_DiffWorkingWith = 'gitlens.diffWorkingWith',
	Deprecated_OpenBranchesInRemote = 'gitlens.openBranchesInRemote',
	Deprecated_OpenBranchInRemote = 'gitlens.openBranchInRemote',
	Deprecated_OpenCommitInRemote = 'gitlens.openCommitInRemote',
	Deprecated_OpenFileInRemote = 'gitlens.openFileInRemote',
	Deprecated_OpenInRemote = 'gitlens.openInRemote',
	Deprecated_OpenRepoInRemote = 'gitlens.openRepoInRemote',
	Deprecated_ShowFileHistoryInView = 'gitlens.showFileHistoryInView',
}

export const enum ContextKeys {
	ActionPrefix = 'gitlens:action:',
	KeyPrefix = 'gitlens:key:',
	WebviewPrefix = `gitlens:webview:`,
	WebviewViewPrefix = `gitlens:webviewView:`,

	ActiveFileStatus = 'gitlens:activeFileStatus',
	AnnotationStatus = 'gitlens:annotationStatus',
	Debugging = 'gitlens:debugging',
	DisabledToggleCodeLens = 'gitlens:disabledToggleCodeLens',
	Disabled = 'gitlens:disabled',
	Enabled = 'gitlens:enabled',
	FocusFocused = 'gitlens:focus:focused',
	HasConnectedRemotes = 'gitlens:hasConnectedRemotes',
	HasRemotes = 'gitlens:hasRemotes',
	HasRichRemotes = 'gitlens:hasRichRemotes',
	HasVirtualFolders = 'gitlens:hasVirtualFolders',
	PreRelease = 'gitlens:prerelease',
	Readonly = 'gitlens:readonly',
	Untrusted = 'gitlens:untrusted',
	ViewsCanCompare = 'gitlens:views:canCompare',
	ViewsCanCompareFile = 'gitlens:views:canCompare:file',
	ViewsCommitsMyCommitsOnly = 'gitlens:views:commits:myCommitsOnly',
	ViewsFileHistoryCanPin = 'gitlens:views:fileHistory:canPin',
	ViewsFileHistoryCursorFollowing = 'gitlens:views:fileHistory:cursorFollowing',
	ViewsFileHistoryEditorFollowing = 'gitlens:views:fileHistory:editorFollowing',
	ViewsLineHistoryEditorFollowing = 'gitlens:views:lineHistory:editorFollowing',
	ViewsRepositoriesAutoRefresh = 'gitlens:views:repositories:autoRefresh',
	ViewsSearchAndCompareKeepResults = 'gitlens:views:searchAndCompare:keepResults',
	Vsls = 'gitlens:vsls',

	Plus = 'gitlens:plus',
	PlusDisallowedRepos = 'gitlens:plus:disallowedRepos',
	PlusEnabled = 'gitlens:plus:enabled',
	PlusRequired = 'gitlens:plus:required',
	PlusState = 'gitlens:plus:state',
}

export const enum CoreCommands {
	CloseActiveEditor = 'workbench.action.closeActiveEditor',
	CloseAllEditors = 'workbench.action.closeAllEditors',
	CursorMove = 'cursorMove',
	CustomEditorShowFindWidget = 'editor.action.webvieweditor.showFind',
	Diff = 'vscode.diff',
	EditorScroll = 'editorScroll',
	EditorShowHover = 'editor.action.showHover',
	ExecuteDocumentSymbolProvider = 'vscode.executeDocumentSymbolProvider',
	ExecuteCodeLensProvider = 'vscode.executeCodeLensProvider',
	FocusFilesExplorer = 'workbench.files.action.focusFilesExplorer',
	InstallExtension = 'workbench.extensions.installExtension',
	MoveViews = 'vscode.moveViews',
	Open = 'vscode.open',
	OpenFolder = 'vscode.openFolder',
	OpenInTerminal = 'openInTerminal',
	OpenWalkthrough = 'workbench.action.openWalkthrough',
	OpenWith = 'vscode.openWith',
	NextEditor = 'workbench.action.nextEditor',
	PreviewHtml = 'vscode.previewHtml',
	RevealLine = 'revealLine',
	RevealInExplorer = 'revealInExplorer',
	RevealInFileExplorer = 'revealFileInOS',
	SetContext = 'setContext',
	ShowExplorer = 'workbench.view.explorer',
	ShowReferences = 'editor.action.showReferences',
	ShowSCM = 'workbench.view.scm',
	UninstallExtension = 'workbench.extensions.uninstallExtension',
}

export const enum CoreGitCommands {
	Publish = 'git.publish',
	Pull = 'git.pull',
	PullRebase = 'git.pullRebase',
	Push = 'git.push',
	PushForce = 'git.pushForce',
	UndoCommit = 'git.undoCommit',
}

export const enum CoreGitConfiguration {
	AutoRepositoryDetection = 'git.autoRepositoryDetection',
	RepositoryScanMaxDepth = 'git.repositoryScanMaxDepth',
	FetchOnPull = 'git.fetchOnPull',
	UseForcePushWithLease = 'git.useForcePushWithLease',
}

export const enum GlyphChars {
	AngleBracketLeftHeavy = '\u2770',
	AngleBracketRightHeavy = '\u2771',
	ArrowBack = '\u21a9',
	ArrowDown = '\u2193',
	ArrowDownUp = '\u21F5',
	ArrowDropRight = '\u2937',
	ArrowHeadRight = '\u27A4',
	ArrowLeft = '\u2190',
	ArrowLeftDouble = '\u21d0',
	ArrowLeftRight = '\u2194',
	ArrowLeftRightDouble = '\u21d4',
	ArrowLeftRightDoubleStrike = '\u21ce',
	ArrowLeftRightLong = '\u27f7',
	ArrowRight = '\u2192',
	ArrowRightDouble = '\u21d2',
	ArrowRightHollow = '\u21e8',
	ArrowUp = '\u2191',
	ArrowUpDown = '\u21C5',
	ArrowUpRight = '\u2197',
	ArrowsHalfLeftRight = '\u21cb',
	ArrowsHalfRightLeft = '\u21cc',
	ArrowsLeftRight = '\u21c6',
	ArrowsRightLeft = '\u21c4',
	Asterisk = '\u2217',
	Check = '✔',
	Dash = '\u2014',
	Dot = '\u2022',
	Ellipsis = '\u2026',
	EnDash = '\u2013',
	Envelope = '\u2709',
	EqualsTriple = '\u2261',
	Flag = '\u2691',
	FlagHollow = '\u2690',
	MiddleEllipsis = '\u22EF',
	MuchLessThan = '\u226A',
	MuchGreaterThan = '\u226B',
	Pencil = '\u270E',
	Space = '\u00a0',
	SpaceThin = '\u2009',
	SpaceThinnest = '\u200A',
	SquareWithBottomShadow = '\u274F',
	SquareWithTopShadow = '\u2750',
	Warning = '\u26a0',
	ZeroWidthSpace = '\u200b',
}

export const enum Schemes {
	DebugConsole = 'debug',
	File = 'file',
	Git = 'git',
	GitHub = 'github',
	GitLens = 'gitlens',
	Output = 'output',
	PRs = 'pr',
	Vsls = 'vsls',
	VslsScc = 'vsls-scc',
	Virtual = 'vscode-vfs',
}
