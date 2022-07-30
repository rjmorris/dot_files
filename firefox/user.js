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

// Home > Firefox Home Content > Web Search
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// Home > Firefox Home Content > Shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// Home > Firefox Home Content > Snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// When searching from the context menu (right-click text, choose "Search Google
// for ...), don't activate the tab where the search is run.
user_pref("browser.search.context.loadInBackground", true);

// Search > Search Suggestions > Provide search suggestions
user_pref("browser.search.suggest.enabled", false);

// Home > New Windows and Tabs > Homepage and new windows
user_pref("browser.startup.homepage", "about:blank");

// General > Startup > Open previous windows and tabs
user_pref("browser.startup.page", 3);

// Don't close the window when the last tab is closed.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Privacy & Security > Address Bar - Firefox Suggest > Bookmarks
user_pref("browser.urlbar.suggest.bookmark", false);

// Privacy & Security > Address Bar - Firefox Suggest > Browsing history
user_pref("browser.urlbar.suggest.history", false);

// Privacy & Security > Address Bar - Firefox Suggest > Open tabs
user_pref("browser.urlbar.suggest.openpage", false);

// Don't hide http:// in URLs. (Note that this doesn't apply to https://, only http://.)
user_pref("browser.urlbar.trimURLs", false);

// Privacy & Security > Forms and Autofill > Autofill addresses
user_pref("extensions.formautofill.addresses.enabled", false);

// Privacy & Security > Forms and Autofill > Autofill credit cards
user_pref("extensions.formautofill.creditCards.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable the built-in screenshot tool.
user_pref("extensions.screenshots.disabled", true);

// Don't show a warning when visiting about:config
user_pref("browser.aboutConfig.showWarning", false);

// General > Language > Check your spelling as you type
user_pref("layout.spellcheckDefault", 0);

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

// Apply customizations found in [profile]/chrome/userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
