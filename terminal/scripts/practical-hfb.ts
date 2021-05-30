INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows" --start-line -1
CAPTURE terminal/output/practical-hfb-00-open.output

SEND cHEIGHT --enter
SEND "llhh#"
AWAIT 'type-int' --start-line -1
CAPTURE terminal/output/practical-hfb-01-integer.output

SEND z|HEIGHT > 0
CAPTURE terminal/output/practical-hfb-02-select-expr-input.output

ENTER
AWAIT 'selected' --start-line -1
CAPTURE terminal/output/practical-hfb-03-select-expr-result.output

SEND '"'
AWAIT '22883 rows' --start-line -1
CAPTURE terminal/output/practical-hfb-04-filtered.output

SEND cHEIGHT --enter
SEND +mean
CAPTURE terminal/output/practical-hfb-05-mean.output
ENTER

SEND cSPECIES --enter
SEND F
AWAIT '420 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-06-species-freq.output

SEND cHEIGHT
ENTER
SEND ]
AWAIT 'sort-desc\s+420 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-07-sorted.output

SEND z|count >= 20
AWAIT "z|count >= 20" --start-line -1
CAPTURE terminal/output/practical-hfb-08-select-expr-input.output

ENTER
AWAIT '•75 $' --start-line -1
CAPTURE terminal/output/practical-hfb-09-select-expr-result.output --start-line -3

SEND '"'
AWAIT "75 bins"
CAPTURE terminal/output/practical-hfb-10-limited.output

SEND g_
AWAIT 'resize-cols-max\s+75 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-11-col-expanded.output
