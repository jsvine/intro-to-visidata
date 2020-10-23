INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "rows  $" --start-line -1

SEND cCOST --enter
SEND "#"
SEND ]
AWAIT "6500000" --end-line 3
AWAIT "sort-desc\s+73448 rows  $" --start-line -1
CAPTURE terminal/output/sorting-00-descending.output
