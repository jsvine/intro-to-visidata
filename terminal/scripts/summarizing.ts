INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"

SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows" --start-line -1

SEND !
SEND cPERSON --enter
SEND !
CAPTURE terminal/output/summarizing-00-keyed.output

SEND gF
AWAIT "879 bins" --start-line -1
CAPTURE terminal/output/summarizing-01-multifreq.output

SEND g_
AWAIT "Air Transport Operations"
CAPTURE terminal/output/summarizing-02-multifreq-wider.output

SEND q
SEND cCOST --enter
SEND "#"
SEND +
CAPTURE terminal/output/summarizing-03a-agg-prompt.output

SEND sum --enter
SEND cAIRPORT --enter
SEND F
AWAIT "1512 bins" --start-line -1
CAPTURE terminal/output/summarizing-03b-freq-aggregated.output

SEND q
SEND cCOST --enter
SEND z+
SEND sum --enter
AWAIT '161868071' --start-line -1
CAPTURE terminal/output/summarizing-04-one-off-calcs.output --start-line -3

SEND I
AWAIT "16 columns •0 $" --start-line -1
CAPTURE terminal/output/summarizing-05-describe-sheet.output

SEND q
SEND cSPEED --enter
SEND "#"
SEND cHEIGHT --enter
SEND "#"
SEND cSTRUCK --enter
SEND "#"
SEND I
AWAIT "16 columns •0 $" --start-line -1
CAPTURE terminal/output/summarizing-06-describe-sheet-typed.output
