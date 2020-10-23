INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"

SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "rows  $"

SEND !
SEND cPERSON --enter
SEND !
CAPTURE terminal/output/summarizing-00-keyed.output

SEND gF
AWAIT "bins  $"
CAPTURE terminal/output/summarizing-01-multifreq.output

SEND g_
AWAIT "Air Transport Operations"
CAPTURE terminal/output/summarizing-02-multifreq-wider.output

SEND q
SEND cCOST --enter
SEND "#"
SEND +
AWAIT "choices  $" --start-line -1
CAPTURE terminal/output/summarizing-03a-agg-prompt.output

SEND /sum --enter
ENTER
SEND cAIRPORT --enter
SEND F
AWAIT "bins  $"
CAPTURE terminal/output/summarizing-03b-freq-aggregated.output

SEND q
SEND cCOST --enter
SEND z+/sum --enter
ENTER
AWAIT '161868071' --start-line -1
CAPTURE terminal/output/summarizing-04-one-off-calcs.output --start-line -3

SEND I
AWAIT "columns  $"
CAPTURE terminal/output/summarizing-05-describe-sheet.output

SEND q
SEND cSPEED --enter
SEND "#"
SEND cHEIGHT --enter
SEND "#"
SEND cSTRUCK --enter
SEND "#"
SEND I
AWAIT "columns  $"
CAPTURE terminal/output/summarizing-06-describe-sheet-typed.output
