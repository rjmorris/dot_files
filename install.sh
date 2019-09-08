cd $HOME

ln -sf $HOME/.dot_files/bash/bashrc .bashrc
ln -sf $HOME/.dot_files/bash/inputrc .inputrc
ln -sf $HOME/.dot_files/bash/bash_profile .bash_profile
ln -sf $HOME/.dot_files/Xmodmap .Xmodmap
ln -sf $HOME/.dot_files/R/Rprofile .Rprofile

mkdir -p .config/git
ln -sf $HOME/.dot_files/git/config .config/git/config
ln -sf $HOME/.dot_files/git/ignore .config/git/ignore
