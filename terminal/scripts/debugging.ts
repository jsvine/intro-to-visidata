INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "73448 rows"

SEND C
PAUSE 0.25
SEND q

SEND cHEIGHT
ENTER
SEND llhh
SEND "#"
AWAIT '#\s+type-int\s+73448 rows' --start-line -1
# Note: First capture in debugging chapter comes from columns.ts script

SEND j
SEND z
AWAIT '\s+4 lines' --start-line -1
CAPTURE terminal/output/debugging-01-cell-error.output
SEND q

SEND gh
SEND "=("
ENTER
AWAIT 'never closed' --start-line -4
CAPTURE terminal/output/debugging-02-general-error-status.output --start-line -6

SEND 
PAUSE 0.1
SEND G
AWAIT 'compiledExpr'
CAPTURE terminal/output/debugging-03-general-error-sheet.output
SEND q
