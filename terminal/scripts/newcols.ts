INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"

SEND =1
ENTER
AWAIT '1  #\| PA-28'
CAPTURE terminal/output/newcols-00-simple.output
SEND l-

SEND cHEIGHT
ENTER
SEND "#"
SEND llhh
SEND =HEIGHT >= 100
ENTER
AWAIT '=\s+73' --start-line -1
CAPTURE terminal/output/newcols-01-operator.output
SEND l-

SEND ghll
SEND ": "
ENTER
AWAIT ':\s+73' --start-line -1
CAPTURE terminal/output/newcols-02-split.output
SEND l-

SEND ghl
SEND ";(\d+)"
ENTER
AWAIT ';\s+73' --start-line -1
CAPTURE terminal/output/newcols-03-capture.output
