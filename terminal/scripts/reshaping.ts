INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows" --start-line -1

SEND cSPECIES --enter
SEND "!"
CAPTURE terminal/output/reshaping-00-keycol.output

SEND cREMAINS --enter
CAPTURE terminal/output/reshaping-01-navigate.output

SEND W
AWAIT "641 grouped rows" --start-line -1
CAPTURE terminal/output/reshaping-02-pivot.output

SEND g_
AWAIT "Unknown bird - small"
CAPTURE terminal/output/reshaping-03-pivot-adj.output

SEND qgh! # Remove keycol
SEND M
AWAIT "1175168 melted values" --start-line -1
CAPTURE terminal/output/reshaping-04-simple-melt.output

SEND q
SEND !l!
PAUSE 0.25
CAPTURE terminal/output/reshaping-05-keyed.output

SEND l-ll-----------gh
AWAIT "AIRPORT\s+║" --end-line 1
CAPTURE terminal/output/reshaping-06-hidden.output

SEND M
AWAIT "146896 melted values"
CAPTURE terminal/output/reshaping-07-melted.output

SEND q
SEND gh!!gv # Reset structure
SEND T
AWAIT "16 rows"
CAPTURE terminal/output/reshaping-08-transpose.output

SEND q
SEND F
AWAIT "282 bins"
CAPTURE terminal/output/reshaping-09-freq.output

SEND T
AWAIT "3 rows"
CAPTURE terminal/output/reshaping-10-freq-trans.output
