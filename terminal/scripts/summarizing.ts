INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"

SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND !
SEND cPERSON
ENTER
SEND !
PAUSE 0.25
CAPTURE terminal/output/summarizing-00-keyed.output

SEND gF
AWAIT "bins"
CAPTURE terminal/output/summarizing-01-multifreq.output

SEND g_
PAUSE 0.25
CAPTURE terminal/output/summarizing-02-multifreq-wider.output

SEND q
SEND cCOST
ENTER
SEND "#"
SEND +sum
ENTER
SEND cAIRPORT
ENTER
SEND F
AWAIT "bins"
CAPTURE terminal/output/summarizing-03-freq-aggregated.output

SEND q
SEND cCOST
ENTER
SEND z+sum
ENTER
AWAIT '"sum"' --start-line -1
CAPTURE terminal/output/summarizing-04-one-off-calcs.output --start-line -3

SEND I
AWAIT columns
CAPTURE terminal/output/summarizing-05-describe-sheet.output

SEND q
SEND cSPEED
ENTER
SEND "#"
SEND cHEIGHT
ENTER
SEND "#"
SEND cSTRUCK
ENTER
SEND "#"
SEND I
AWAIT columns
CAPTURE terminal/output/summarizing-06-describe-sheet-typed.output
