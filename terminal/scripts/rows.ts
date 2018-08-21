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
AWAIT "73448 rows"
CAPTURE terminal/output/rows-01-select-pattern.output

SEND gu
SEND 'z|OPERATOR == "BUSINESS" and STATE == "FL"'
ENTER
AWAIT search wr --start-line -1
CAPTURE terminal/output/rows-02-select-expr.output
