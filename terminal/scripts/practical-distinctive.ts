INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv\n"
AWAIT "rows"
CAPTURE terminal/output/practical-distinctive-00-open.output

SEND cSPECIES
ENTER
SEND "|unknown"
ENTER
AWAIT '25988 matches' --start-line -1
CAPTURE terminal/output/practical-distinctive-01-unknown.output

SEND gt
AWAIT '\sgt\s' --start-line -1
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-02-toggled.output

SEND '"'
AWAIT '"' --start-line -1
CAPTURE terminal/output/practical-distinctive-03-filtered.output

SEND gu
AWAIT '\sgu\s' --start-line -1
AWAIT ' rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-03b-unselected.output

SEND S_j
SEND eknown_species
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-04-edit-sheet-name.output --end-line 6
ENTER
SEND k
ENTER
SEND cSTATE
ENTER
AWAIT "\sc\s" --start-line -1
CAPTURE terminal/output/practical-distinctive-05-on-state-col.output

SEND F
AWAIT "bins" --start-line -1
CAPTURE terminal/output/practical-distinctive-06-state-freq.output

SEND ccount
ENTER
SEND ^state_total
ENTER
SEND _l--
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-07-state-freq-trimmed.output

SEND Sjj
ENTER
SEND cSTATE
ENTER
SEND !
SEND cSPECIES
ENTER
SEND !
AWAIT "!" --start-line -1
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-08-known-keyed.output

SEND gF
AWAIT "bins" --start-line -1
CAPTURE terminal/output/practical-distinctive-09-state-species-freq.output

SEND lll--
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-10-state-species-freq-trimmed.output

SEND ghl!
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-11-state-species-freq-rekeyed.output

SEND S_
AWAIT sheets --start-line -1
CAPTURE terminal/output/practical-distinctive-12-sheets-sheet.output

SEND jsjs
AWAIT "selected 1 more rows" --start-line -1
CAPTURE terminal/output/practical-distinctive-13-sheets-selected.output

SEND &inner
CAPTURE terminal/output/practical-distinctive-14-sheets-join-prompt.output

ENTER
AWAIT rows --start-line -1
CAPTURE terminal/output/practical-distinctive-15-sheets-joined.output

SEND gl
SEND "=count * 100 / state_total"
ENTER
AWAIT '"count \* 100' --start-line -1
CAPTURE terminal/output/practical-distinctive-16-new-col.output

SEND l
SEND ^pct_of_state
ENTER
PAUSE 0.25
SEND %_
AWAIT "_" --start-line -1
CAPTURE terminal/output/practical-distinctive-16b-new-col-clean.output

SEND ]
AWAIT "]" --start-line -1
CAPTURE terminal/output/practical-distinctive-17-new-col-typed-and-sorted.output

SEND =count >= 20
ENTER
AWAIT "= 20" --start-line -1
CAPTURE terminal/output/practical-distinctive-18-new-col-cutoff.output

SEND lF
AWAIT "bins" --start-line -1
SEND j
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-19-new-col-cutoff-freq.output --end-line 6

ENTER
AWAIT rows --start-line -1
CAPTURE terminal/output/practical-distinctive-20-limited.output