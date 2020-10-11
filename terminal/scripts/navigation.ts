INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "73448 rows  $"
CAPTURE terminal/output/navigation-00-start.output

SEND jl
PAUSE 0.25
CAPTURE terminal/output/navigation-01-single.output

SEND gggh # Go to top-left

SEND /
PAUSE 0.25
CAPTURE terminal/output/navigation-02-search-prompt.output --start-line -1

SEND united
PAUSE 0.25
CAPTURE terminal/output/navigation-03-search-text.output --start-line -1

ENTER
PAUSE 0.25
CAPTURE terminal/output/navigation-04-search-result.output
