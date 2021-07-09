INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows" --start-line -1

SEND js
CAPTURE terminal/output/rows-00-select-single.output

SEND gu
SEND ghgg
SEND cSTATE --enter
SEND |TX --enter
AWAIT "•7309 $" --start-line -1
CAPTURE terminal/output/rows-01-select-pattern.output

SEND gu
SEND 'z|OPERATOR == "BUSINESS" and STATE == "FL"' --enter
AWAIT "•625 $" --start-line -1
CAPTURE terminal/output/rows-02-select-expr.output
