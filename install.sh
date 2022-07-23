cd $HOME

ln -sf $HOME/.dot_files/bash/bashrc .bashrc
ln -sf $HOME/.dot_files/bash/inputrc .inputrc
ln -sf $HOME/.dot_files/bash/bash_profile .bash_profile
ln -sf $HOME/.dot_files/X/Xmodmap .Xmodmap
ln -sf $HOME/.dot_files/X/Xresources .Xresources
ln -sf $HOME/.dot_files/R/Rprofile .Rprofile

mkdir -p .config/direnv
ln -sf $HOME/.dot_files/direnv/direnv.toml .config/direnv/direnv.toml
ln -sf $HOME/.dot_files/direnv/direnvrc .config/direnv/direnvrc

mkdir -p .config/git
ln -sf $HOME/.dot_files/git/config .config/git/config
ln -sf $HOME/.dot_files/git/ignore .config/git/ignore

mkdir -p .config/gtk-3.0
ln -sf $HOME/.dot_files/gtk/settings.ini .config/gtk-3.0/settings.ini
