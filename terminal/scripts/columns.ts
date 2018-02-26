INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND C
PAUSE 0.25
CAPTURE terminal/output/columns-00-column-sheet.output
SEND q

SEND cHEIGHT
ENTER
SEND llhh
SEND "#"
AWAIT '#\s+73' --start-line -1
CAPTURE terminal/output/columns-00a-type-assigned.output
SEND ~

SEND ghl
PAUSE 0.25
CAPTURE terminal/output/columns-01-column-nav.output --end-line 3

SEND ^
PAUSE 0.25
CAPTURE terminal/output/columns-02-column-caret.output --end-line 3

SEND Aircraft
PAUSE 0.25
CAPTURE terminal/output/columns-03-column-renaming.output --end-line 3

ENTER
PAUSE 0.25
CAPTURE terminal/output/columns-04-column-renamed.output --end-line 3

SEND gh
SEND cAIRPORT
ENTER
PAUSE 0.25
CAPTURE terminal/output/columns-05-pre-key.output

SEND !
PAUSE 0.25
CAPTURE terminal/output/columns-06-post-key.output
