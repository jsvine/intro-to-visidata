INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/dedupe-example.csv\n"
AWAIT "rows"
CAPTURE terminal/output/extending-00-example.output

SEND " dedupe-rows"
PAUSE 0.1
CAPTURE terminal/output/extending-01-longname.output

ENTER
AWAIT "4 rows" --start-line -1
CAPTURE terminal/output/extending-02-deduped.output
