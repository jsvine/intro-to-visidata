INIT --width 80 --shell "bash --rcfile terminal/misc/clean-bash.bashrc"
SEND "vd --version" --enter
AWAIT "\$\s+$"
CAPTURE terminal/output/version.output
