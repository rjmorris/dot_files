cd $HOME

ln -sf $HOME/.dot_files/bash/bashrc .bashrc
ln -sf $HOME/.dot_files/bash/inputrc .inputrc
ln -sf $HOME/.dot_files/bash/bash_profile .bash_profile

mkdir -p .config/git
ln -sf $HOME/.dot_files/git/ignore .config/git/ignore

# TODO: Install firefox userChrome.css

