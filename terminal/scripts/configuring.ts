INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd -h | less\n"
AWAIT "usage:"
CAPTURE terminal/output/configuring-00-vd-h.output
SEND q

SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND O
AWAIT "\d+ options"
CAPTURE terminal/output/configuring-01-global-options.output

SEND /default_width
ENTER
SEND l
SEND e10
ENTER
PAUSE 0.1
CAPTURE terminal/output/configuring-02-global-edited.output
SEND e20
ENTER
SEND q

SEND zO
AWAIT "\d+ options"
CAPTURE terminal/output/configuring-03-sheet-options.output
