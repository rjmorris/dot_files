This is a collection of my configuration files. The current installation procedure is very basic, may not cover some use cases, and may require some manual adjustment afterwards.

# Setup

```
$ cd $HOME
$ git clone git@github.com:rjmorris/dot_files.git .dot_files
$ cd .dot_files
$ ./install.sh
```

Manually link the Firefox files into the Firefox profile directory.

# TODO

- Create a backup of any existing file that `install.sh` overwrites.
- Add a step to `install.sh` that looks up the default Firefox profile in `~/.mozilla/firefox/profiles.ini` and installs links in there.
