INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND js
PAUSE 0.25
CAPTURE terminal/output/rows-00-select-single.output

SEND gu
SEND ghgg
SEND cSTATE
ENTER
SEND |TX
ENTER
PAUSE 0.25
CAPTURE terminal/output/rows-01-select-pattern.output
