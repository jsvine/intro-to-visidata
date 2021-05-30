INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "73448 rows"

SEND cSPECIES --enter
SEND |hawk --enter
AWAIT "2164 ma" --start-line -1
CAPTURE terminal/output/filtering-00-search.output

SEND '"'
AWAIT "Hawks" --end-line 2
CAPTURE terminal/output/filtering-01-push.output

SEND q
AWAIT "73448 rows" --start-line -1
SEND gu
SEND cSTATE --enter
SEND F
AWAIT "63 bins •0 $" --start-line -1
SEND jj
PAUSE 0.25
CAPTURE terminal/output/filtering-02-freq-before.output

ENTER
AWAIT "rows" --start-line -1
CAPTURE terminal/output/filtering-03-freq-after.output

SEND S
SEND /faa-wildlife-strikes$ --enter
ENTER
AWAIT "73448 rows" --start-line -1
SEND gu
SEND cAIRPORT --enter
SEND F
AWAIT "1512 bins" --start-line -1
CAPTURE terminal/output/filtering-04-freq-airport.output

SEND jsssss
PAUSE 0.25
CAPTURE terminal/output/filtering-05-freq-multiselect.output

SEND g --enter
AWAIT "9250 rows" --start-line -1
CAPTURE terminal/output/filtering-07-freq-filter-post-multiselect.output
