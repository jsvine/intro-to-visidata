INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND C
PAUSE 0.25
CAPTURE terminal/output/columns-sheet-00-before-changes.output

SEND "/HEIGHTs"
SEND "/SPEEDs"
SEND "/BIRDS_STRUCKs"
SEND "/COST_REPAIRSs"
PAUSE 0.25
CAPTURE terminal/output/columns-sheet-01-select-columns.output

SEND "g#"
PAUSE 0.25
CAPTURE terminal/output/columns-sheet-02-assign-type.output

SEND lge8
ENTER
PAUSE 0.25
CAPTURE terminal/output/columns-sheet-03-assign-width.output

SEND q
AWAIT " rows" --start-line -1
SEND cHEIGHT
ENTER
SEND lllhhh
PAUSE 1
CAPTURE terminal/output/columns-sheet-04-after-changes.output