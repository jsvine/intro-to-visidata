INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "73448 rows" --start-line -1

SEND i
AWAIT 'set 73448 cells to 73448 values' --start-line -3
CAPTURE terminal/output/newcols-00a-increment-basic.output
SEND U

SEND =1
ENTER
AWAIT '1\s+#\│ PA-28' --end-line 3
CAPTURE terminal/output/newcols-00-simple.output
SEND U

SEND cHEIGHT
ENTER
PAUSE 0.25
SEND "#"
SEND llhh
SEND =HEIGHT >= 100
ENTER
AWAIT '=\s+addcol-expr\s+73448' --start-line -1
CAPTURE terminal/output/newcols-01-operator.output
SEND l-

SEND ghll
SEND ": " --enter
AWAIT "INCIDENT_DATE_re" --end-line 3
CAPTURE terminal/output/newcols-02-split.output
SEND "("
AWAIT "INCIDENT_DATE_re\[1\]" --end-line 3
CAPTURE terminal/output/newcols-02a-split-expanded.output
SEND -
SEND -

SEND ghl
SEND ";(\d+)" --enter
SEND "("
AWAIT " 319 " --start-line -2
CAPTURE terminal/output/newcols-03-capture.output
