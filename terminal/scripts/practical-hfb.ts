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

SEND =HEIGHT > 0
ENTER
AWAIT '=\s+73' --start-line -1
CAPTURE terminal/output/practical-hfb-02-new-col.output

SEND lF
AWAIT 'bins' --start-line -1
CAPTURE terminal/output/practical-hfb-03-new-col-freq.output --end-line 6

SEND j
PAUSE 0.25
CAPTURE terminal/output/practical-hfb-04-new-col-freq-true.output --end-line 6

ENTER
AWAIT 'rows' --start-line -1
CAPTURE terminal/output/practical-hfb-04-new-col-true-only.output

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

SEND =count >= 20
ENTER
AWAIT '=\s+42' --start-line -1
CAPTURE terminal/output/practical-hfb-08-new-count-col.output

SEND lF
AWAIT '\s+2 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-09-new-count-col-freq.output

SEND j
ENTER
AWAIT '\s75 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-10-limited.output

SEND g_
AWAIT 'g_\s+75 bins' --start-line -1
CAPTURE terminal/output/practical-hfb-11-col-expanded.output