// Copy this file to your Firefox profile directory, then restart the browser.
//
// A few tips for investigating the preferences:
//
// - Use searchfox.org to search the Firefox source code for a preference name.
//
// - Sometimes you can use the browser's dev tools to find the name of a
//   preference underlying an option in the Settings UI. Open dev tools, go to
//   the Inspector tab, choose the Element Picker button, and click a checkbox
//   or other element in the Setting UI. The HTML attributes for that element
//   may include the name of the underlying preference.
//
// - In your Firefox profile directory, copy `prefs.js` to `prefs.js.orig`, make
//   a change in the Settings UI, and then inspect the output of
//   `diff -u prefs.js.orig prefs.js` to see which preferences changed.

// Disable accessibility services, because they can be abused by malware. A
// drawback is that when this is disabled, the Accessibility panel in Dev Tools
// is unavailable.
user_pref("accessibility.force_disabled", 1);

// Privacy & Security > Firefox Data Collection and Use > Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);

// This should hide the Mobile Bookmarks menu item. However, I don't see that
// menu item in a fresh install, so this may be obsolete, and I'm commenting it
// out for now under that hypothesis.
// TODO: Delete
user_pref("browser.bookmarks.showMobileBookmarks", false);

// Don't autohide the Downloads button on the toolbar. By default, it starts out
// hidden in a new session, but it will appear after the first download. (Can I
// remove this setting if I remove the Downloads button from the toolbar using
// the Customize UI or userChrome.css?)
user_pref("browser.download.autohideButton", false);

// Default to most recent download directory when asking where to download a
// file. (0=Desktop, 1=Downloads, 2=recent). (Even with folderList=1, it still
// appears to default to the most recent download directory, so more
// investigation may be warranted here.)
user_pref("browser.download.folderList", 2);

// General > Downloads > Always ask you where to save files
user_pref("browser.download.useDownloadDir", false);

// Privacy & Security > History > Remember search and form history
user_pref("browser.formfill.enable", false);

// General > Browsing > Recommend extensions as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// General > Browsing > Recommend features as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Home > Firefox Home Content > Recent activity
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);

// Home > Firefox Home Content > Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Don't fetch the content on the Firefox Home screen before I click on a URL.
user_pref("browser.newtabpage.activity-stream.prerender", false);

// Home > Firefox Home Content > Web Search
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// Home > Firefox Home Content > Shortcuts
user_pref("browser.newtabpage.activity-stream.showTopSites", false);

// Home > Firefox Home Content > Snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Disable the onboarding tour. (The current onboarding process isn't too
// annoying, and it should only happen once for a new profile, so it isn't worth
// maintaining these preferences. I haven't checked to see if they're still
// valid.)
// TODO: Delete
user_pref("browser.onboarding.enabled", false);
user_pref("browser.onboarding.state", "watermark");
user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-performance.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", true);

// General > Performance > Use recommended performance settings
// (Unsure why I wanted to disable this.)
// TODO: Delete
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// When searching from the context menu (right-click text, choose "Search Google
// for ...), don't activate the tab where the search is run.
user_pref("browser.search.context.loadInBackground", true);

// Search > Search Suggestions > Provide search suggestions
user_pref("browser.search.suggest.enabled", false);

// Show a warning before quitting. (This preference was removed in version 94.)
// TODO: Delete
user_pref("browser.sessionstore.warnOnQuit", true);

// Home > New Windows and Tabs > Homepage and new windows
user_pref("browser.startup.homepage", "about:blank");

// General > Startup > Open previous windows and tabs
user_pref("browser.startup.page", 3);

// Don't close the window when the last tab is closed.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Don't show a warning when you try to close a window with multiple tabs.
// (false is now the default value, so it should be OK to remove this.)
// TODO: Delete
user_pref("browser.tabs.warnOnClose", false);

// Customize the toolbar widget placement. (This doesn't translate well between
// different platforms and installations, so it probably isn't worth
// maintaining. Customizing manually on a new install isn't too bad.)
// TODO: Delete
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"PersonalToolbar\":[\"personal-bookmarks\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"urlbar-container\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\",\"customizableui-special-spring6\",\"ublock0_raymondhill_net-browser-action\",\"_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action\"]},\"seen\":[\"developer-button\",\"webide-button\",\"ublock0_raymondhill_net-browser-action\",\"_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action\"],\"dirtyAreaCache\":[\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\"],\"currentVersion\":16,\"newElementCount\":6}");

// Don't try to autocomplete text entered in the address bar. (This preference
// was removed in version 65.)
// TODO: Delete
user_pref("browser.urlbar.autocomplete.enabled", false);

// Hide the "one-off" searches (letting you search via a different engine) in
// the address bar dropdown. (This preference was removed in version 77.)
// TODO: Delete
user_pref("browser.urlbar.oneOffSearches", false);

// Privacy & Security > Address Bar - Firefox Suggest > Bookmarks
user_pref("browser.urlbar.suggest.bookmark", false);

// Privacy & Security > Address Bar - Firefox Suggest > Browsing history
user_pref("browser.urlbar.suggest.history", false);

// Privacy & Security > Address Bar - Firefox Suggest > Open tabs
user_pref("browser.urlbar.suggest.openpage", false);

// Don't hide http:// in URLs. (Note that this doesn't apply to https://, only http://.)
user_pref("browser.urlbar.trimURLs", false);

// Change the number of processes used to render content. (This preference
// doesn't appear to be respected, and I think it's a holdover from the days
// when the default was 1, and I wanted to bump it up. The default is 8 now. I
// should probably delete this.) TODO: Delete
user_pref("dom.ipc.processCount", 4);

// Don't provide support for autofilling forms. (This preference has been
// removed in favor of extensions.formautofill.creditCards.supported and
// extensions.formautofill.addresses.supported. However, instead of adding
// those, I think setting extensions.formautofill.creditCards.enabled and
// extensions.formautofill.addresses.enabled to false is sufficient. Those
// settings appear in the UI and are stored elsewhere in this file.)
// TODO: Delete
user_pref("extensions.formautofill.available", "off");

// Privacy & Security > Forms and Autofill > Autofill addresses
user_pref("extensions.formautofill.addresses.enabled", false);

// Privacy & Security > Forms and Autofill > Autofill credit cards
user_pref("extensions.formautofill.creditCards.enabled", false);

// Don't try to detect the field type using attributes and regular expressions.
// (It probably isn't worth maintaining this setting since I've disabled
// autofill. I haven't found a good reason for disabling it in this case, but I
// suspect people recommend it for performance reasons, which I doubt is a big
// deal.)
// TODO: Delete
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable the built-in screenshot tool.
user_pref("extensions.screenshots.disabled", true);

// Override the fallback serif font with a sans-serif font. (I'm not sure now
// why I wanted to do this.)
// TODO: Delete
user_pref("font.name.serif.x-western", "DejaVu Sans");

// Don't show a warning when visiting about:config
// TODO: Change to browser.aboutConfig.showWarning
user_pref("general.warnOnAboutConfig", false);

// General > Language > Check your spelling as you type
user_pref("layout.spellcheckDefault", 0);

// Don't allow muted videos to autoplay. (This preference has been removed, and
// its behavior should be covered by setting media.autoplay.default=5, as set
// elsewhere in this file.)
// TODO: Delete
user_pref("media.autoplay.allow-muted", false);

// Privacy & Security > Permissions > Autoplay > Default for all websites: Block audio and video
user_pref("media.autoplay.default", 5);

// Handle a middle-button mouse click in the content area by loading the
// clipboard contents as a URL.
user_pref("middlemouse.contentLoadURL", true);

// Block all 3rd-party cookies.
user_pref("network.cookie.cookieBehavior", 1);

// Don't resolve domain names for URLs before I click on them.
user_pref("network.dns.disablePrefetch", true);

// Fallback methods to block speculative loading in case I missed disabling any
// speculative loading preferences explicitly.
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);

// More settings to block speculative loading in case I missed disabling any
// explicitly.
user_pref("network.prefetch-next", false);

// Privacy & Security > Permissions > Camera > Block new requests asking to access your camera
user_pref("permissions.default.camera", 2);

// Privacy & Security > Permissions > Notifications > Block new requests asking to allow notifications
user_pref("permissions.default.desktop-notification", 2);

// Privacy & Security > Permissions > Location > Block new requests asking to access your location
user_pref("permissions.default.geo", 2);

// Privacy & Security > Permissions > Microphone > Block new requests asking to access your microphone
user_pref("permissions.default.microphone", 2);

// Privacy & Security > History > Firefox will: Use custom settings for history
user_pref("privacy.history.custom", true);

// Privacy & Security > Enhanced Tracking Protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// Privacy & Security > Logins and Passwords > Ask to save logins and passwords for websites
user_pref("signon.rememberSignons", false);

// Disable UI animations like new tabs sliding in. (This setting is obsolete,
// having been replaced by ui.prefersReducedMotion if you don't want to follow
// the OS settings. However, I'm not currently seeing any annoying animations,
// so I don't think it's worth adding the new setting.)
// TODO: Delete
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Apply customizations found in [profile]/chrome/userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Don't show the hidden menu bar when pressing the Alt key. (I don't hide my
// menu bar, so this setting shouldn't matter. I'm not sure why I ever set it in
// the first place.)
user_pref("ui.key.menuAccessKeyFocuses", false);
