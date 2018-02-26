INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND cCOST
SEND ENTER
SEND "#"
SEND ]
AWAIT "6500000" --end-line 3
CAPTURE terminal/output/sorting-00-descending.output
