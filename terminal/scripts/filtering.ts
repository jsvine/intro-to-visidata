INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND cSPECIES
ENTER
SEND |hawk
ENTER
AWAIT "selected" --start-line -1
CAPTURE terminal/output/filtering-00-search.output

SEND '"'
AWAIT "Hawks" --end-line 2
CAPTURE terminal/output/filtering-01-push.output

SEND q
SEND gu
SEND cSTATE
ENTER
SEND F
AWAIT "bins"
SEND jj
PAUSE 0.25
CAPTURE terminal/output/filtering-02-freq-before.output

ENTER
AWAIT "rows"
CAPTURE terminal/output/filtering-03-freq-after.output

SEND S
SEND /faa-wildlife-strikes$
ENTER
ENTER
AWAIT rows
SEND gu
SEND cAIRPORT
ENTER
SEND F
AWAIT bins
CAPTURE terminal/output/filtering-04-freq-airport.output

SEND jsssss
PAUSE 0.25
CAPTURE terminal/output/filtering-05-freq-multiselect.output

SEND q
AWAIT rows
CAPTURE terminal/output/filtering-06-freq-data-post-multiselect.output

SEND '"'
AWAIT '"' --start-line -1
CAPTURE terminal/output/filtering-07-freq-filter-post-multiselect.output