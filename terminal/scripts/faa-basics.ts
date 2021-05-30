INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"

SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows" --start-line -1
CAPTURE terminal/output/faa-opened.output

SEND F
AWAIT "282 bins" --start-line -1
CAPTURE terminal/output/faa-operator-frequency.output

SEND 
AWAIT "a terminal utility"
CAPTURE terminal/output/faa-manpage.output

SEND q
PAUSE 0.1
SEND q
AWAIT "VERO BEACH"

SEND S
AWAIT "2 sheets •0 $" --start-line -1
CAPTURE terminal/output/faa-simple-sheets-sheet.output
