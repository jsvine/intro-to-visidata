INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"
CAPTURE terminal/output/practical-hfb-00-open.output

SEND cHEIGHT
ENTER
SEND "llhh#"
AWAIT '#\s+73' --start-line -1
CAPTURE terminal/output/practical-hfb-01-integer.output

SEND z|HEIGHT > 0
AWAIT "z|HEIGHT > 0" --start-line -1
CAPTURE terminal/output/practical-hfb-02-select-expr-input.output

ENTER
AWAIT '"HEIGHT > 0".* rows' --start-line -1
CAPTURE terminal/output/practical-hfb-03-select-expr-result.output

SEND '"'
AWAIT '"\s+ 22883 rows' --start-line -1
CAPTURE terminal/output/practical-hfb-04-filtered.output

SEND cHEIGHT
ENTER
SEND +mean
PAUSE 0.25
CAPTURE terminal/output/practical-hfb-05-mean.output --start-line -3
ENTER

SEND cSPECIES
ENTER
SEND F
AWAIT 'bins' --start-line -1
CAPTURE terminal/output/practical-hfb-06-species-freq.output

SEND cHEIGHT
ENTER
SEND ]
AWAIT ']\s+42' --start-line -1
CAPTURE terminal/output/practical-hfb-07-sorted.output

SEND z|count >= 20
AWAIT "z|count >= 20" --start-line -1
CAPTURE terminal/output/practical-hfb-08-select-expr-input.output

ENTER
AWAIT '"count >= 20".* rows' --start-line -1
CAPTURE terminal/output/practical-hfb-09-select-expr-result.output --start-line -3

SEND '"'
AWAIT 75 bins
CAPTURE terminal/output/practical-hfb-10-limited.output

SEND g_
AWAIT 'g_\s+75 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-11-col-expanded.output
