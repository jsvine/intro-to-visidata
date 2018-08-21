INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"

SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"
CAPTURE terminal/output/faa-opened.output

SEND F
AWAIT "bins"
CAPTURE terminal/output/faa-operator-frequency.output

SEND 
AWAIT "a terminal utility"
CAPTURE terminal/output/faa-manpage.output

SEND qq
AWAIT "VERO BEACH"

SEND S
AWAIT "2 sheets"
CAPTURE terminal/output/faa-simple-sheets-sheet.output
