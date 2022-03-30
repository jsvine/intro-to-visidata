INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "cd datasets\n"
SEND "vd faa-wildlife-strikes.csv\n"
AWAIT "73448 rows"

SEND " rename-sheet"
ENTER
SEND strikes
ENTER
SEND cAIRPORT
ENTER
PAUSE 0.1
SEND F
AWAIT "1512 bins\s+•0 $" --start-line -1
SEND jjjjjs
PAUSE 0.1
CAPTURE terminal/output/cmdlog-00-freq.output

SEND D
AWAIT "logged commands\s+•0 $" --start-line -1
AWAIT "faa-wildlife-stri" --end-line 3
CAPTURE terminal/output/cmdlog-01-simple-log.output

SEND 
AWAIT "_cmdlog\.vd\s+" --start-line -1
CAPTURE terminal/output/cmdlog-02-save-ctrl-s.output
SEND example-cmdlog.vd
ENTER
SEND y
ENTER

SEND q
AWAIT "1512 bins\s+•1 $" --start-line -1
SEND 
AWAIT "_freq\.vd\s+" --start-line -1
# CAPTURE terminal/output/cmdlog-03-save-ctrl-d.output
SEND 

SEND gq
AWAIT "\$\s+$"
SEND "vd --play example-cmdlog.vd\n"
AWAIT "1512 bins\s+•1 $" --start-line -1
CAPTURE terminal/output/cmdlog-03-replay-all.output

# SEND gq
# SEND "vd example-cmdlog.vd\n"
# AWAIT "4 logged commands"
# CAPTURE terminal/output/cmdlog-05-load-cmdlog.output
# 
# SEND x
# AWAIT "73448 rows"
# CAPTURE terminal/output/cmdlog-06-cmdlog-individual-result.output
