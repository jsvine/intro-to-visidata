INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd -h\n"
AWAIT "a terminal utility for exploring"
CAPTURE terminal/output/configuring-00-vd-h.output
SEND q

SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "73448 rows\s+•0 $" --start-line -1

SEND O
AWAIT "\d+ options\s+•0 $" --start-line -1
SEND /visidata_dir
ENTER
SEND le
SEND ~/.visidata/
ENTER
SEND hRq

SEND O
AWAIT "\d+ options\s+•0 $" --start-line -1
CAPTURE terminal/output/configuring-01-global-options.output

SEND /default_width
ENTER
SEND l
SEND e10
ENTER
PAUSE 0.1
CAPTURE terminal/output/configuring-02-global-edited.output
SEND e20
ENTER
SEND q

SEND zO
AWAIT "\d+ options\s+•0 $" --start-line -1
SEND /visidata_dir
ENTER
SEND le
SEND 
ENTER
SEND hRq

# These next two commands just get around an edge-case bug
SEND S
SEND q

SEND zO
AWAIT "\d+ options\s+•0 $" --start-line -1
CAPTURE terminal/output/configuring-03-sheet-options.output
