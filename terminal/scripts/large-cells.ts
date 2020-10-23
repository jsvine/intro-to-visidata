INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT "73448 rows  $" --start-line -1

SEND cREMARKS --enter
SEND z-z-
SEND hh
SEND ll
AWAIT <PERSON --end-line 1
PAUSE 0.25
CAPTURE terminal/output/large-cells-00-initial.output

SEND v
AWAIT "THE PILOT DID NOT REPORT A BIRD STRIKE"
CAPTURE terminal/output/large-cells-01-multiline.output

SEND v
AWAIT "Aircraft reported bird strike" --start-line -3 --end-line -2
CAPTURE terminal/output/large-cells-02-before-scroll.output

SEND zl
AWAIT "bird strike to the left wing" --end-line 2
CAPTURE terminal/output/large-cells-03-after-scroll.output

SEND gzh
SEND z --enter
AWAIT "1 lines  $" --start-line -1
CAPTURE terminal/output/large-cells-04-dive-cell.output
