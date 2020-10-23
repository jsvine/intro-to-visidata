INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/dedupe-example.csv" --enter
AWAIT "5 rows  $"
CAPTURE terminal/output/extending-00-example.output

SEND " dedupe-rows"
CAPTURE terminal/output/extending-01-longname.output

ENTER
AWAIT "4 rows  $" --start-line -1
CAPTURE terminal/output/extending-02-deduped.output

SEND " open-plugins" --enter
AWAIT "\d+ plugins  $" --start-line -1
CAPTURE terminal/output/extending-03-installer.output
