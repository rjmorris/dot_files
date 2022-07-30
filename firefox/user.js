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

//------------------------------------------------------------------------------
// Preferences that can be changed in the Settings UI

// General > Startup > Open previous windows and tabs
user_pref("browser.startup.page", 3);

// General > Language > Check your spelling as you type
user_pref("layout.spellcheckDefault", 0);

// General > Downloads > Always ask you where to save files
user_pref("browser.download.useDownloadDir", false);

// General > Browsing > Use autoscrolling
// Autoscrolling lets you click the middle mouse button to enter autoscroll
// mode, then scroll by moving the mouse up and down. However, I use the middle
// mouse button to paste URLs. I don't want it to autoscroll.
user_pref("general.autoScroll", false);

// General > Browsing > Recommend extensions as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// General > Browsing > Recommend features as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Home > New Windows and Tabs > Homepage and new windows
user_pref("browser.startup.homepage", "about:blank");

// Home > Firefox Home Content > Web Search
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// Home > Firefox Home Content > Shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// Home > Firefox Home Content > Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Home > Firefox Home Content > Recent activity
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);

// Home > Firefox Home Content > Snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Search > Search Suggestions > Provide search suggestions
user_pref("browser.search.suggest.enabled", false);

// Privacy & Security > Enhanced Tracking Protection
user_pref("network.cookie.cookieBehavior", 1);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Privacy & Security > Logins and Passwords > Ask to save logins and passwords for websites
user_pref("signon.rememberSignons", false);

// Privacy & Security > Forms and Autofill > Autofill addresses
user_pref("extensions.formautofill.addresses.enabled", false);

// Privacy & Security > Forms and Autofill > Autofill credit cards
user_pref("extensions.formautofill.creditCards.enabled", false);

// Privacy & Security > History > Firefox will: Use custom settings for history
user_pref("privacy.history.custom", true);

// Privacy & Security > History > Remember search and form history
user_pref("browser.formfill.enable", false);

// Privacy & Security > Address Bar - Firefox Suggest > Browsing history
user_pref("browser.urlbar.suggest.history", false);

// Privacy & Security > Address Bar - Firefox Suggest > Bookmarks
user_pref("browser.urlbar.suggest.bookmark", false);

// Privacy & Security > Address Bar - Firefox Suggest > Open tabs
user_pref("browser.urlbar.suggest.openpage", false);

// Privacy & Security > Permissions > Location > Block new requests asking to access your location
user_pref("permissions.default.geo", 2);

// Privacy & Security > Permissions > Camera > Block new requests asking to access your camera
user_pref("permissions.default.camera", 2);

// Privacy & Security > Permissions > Microphone > Block new requests asking to access your microphone
user_pref("permissions.default.microphone", 2);

// Privacy & Security > Permissions > Notifications > Block new requests asking to allow notifications
user_pref("permissions.default.desktop-notification", 2);

// Privacy & Security > Permissions > Autoplay > Default for all websites: Block audio and video
user_pref("media.autoplay.default", 5);

// Privacy & Security > Firefox Data Collection and Use > Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);


//------------------------------------------------------------------------------
// Preferences that aren't available in the Settings UI

// Disable accessibility services, because they can be abused by malware. A
// drawback is that when this is disabled, the Accessibility panel in Dev Tools
// is unavailable.
user_pref("accessibility.force_disabled", 1);

// Don't show a warning when visiting about:config
user_pref("browser.aboutConfig.showWarning", false);

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

// When searching from the context menu (right-click text, choose "Search Google
// for ...), don't activate the tab where the search is run.
user_pref("browser.search.context.loadInBackground", true);

// Don't close the window when the last tab is closed.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Don't hide http:// in URLs. (Note that this doesn't apply to https://, only http://.)
user_pref("browser.urlbar.trimURLs", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable the built-in screenshot tool.
user_pref("extensions.screenshots.disabled", true);

// Handle a middle-button mouse click in the content area by loading the
// clipboard contents as a URL.
user_pref("middlemouse.contentLoadURL", true);

// Don't resolve domain names for URLs before I click on them.
user_pref("network.dns.disablePrefetch", true);

// Fallback methods to block speculative loading in case I missed disabling any
// speculative loading preferences explicitly.
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);

// Don't download "prefetch" links (<link rel="prefetch" href="...">) before I
// click on them.
user_pref("network.prefetch-next", false);

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// Apply customizations found in [profile]/chrome/userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
