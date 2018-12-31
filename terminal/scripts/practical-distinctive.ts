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
AWAIT '73448 rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-02-toggled.output

SEND '"'
AWAIT '47460 rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-03-filtered.output

SEND " rename-sheet"
ENTER
SEND known_species
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-04-edit-sheet-name.output --start-line -4
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

SEND S
SEND gk # Make sure that we're starting at the top
SEND jj
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
SEND gk # Make sure that we're starting at the top
AWAIT "known_species_STATE-SPECIES_freq"
AWAIT "5 sheets"
PAUSE 0.25
CAPTURE terminal/output/practical-distinctive-12-sheets-sheet.output

SEND jsjs
# No longer works: AWAIT "selected 1 more sheets" --start-line -1
PAUSE 0.25
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
AWAIT "pct_of_state%‖"
CAPTURE terminal/output/practical-distinctive-16b-new-col-clean.output

SEND ]
AWAIT "].* rows" --start-line -1
CAPTURE terminal/output/practical-distinctive-17-new-col-typed-and-sorted.output

SEND z|count >= 20
AWAIT "z|count >= 20" --start-line -1
CAPTURE terminal/output/practical-distinctive-18-select-expr-input.output

ENTER
AWAIT '"count >= 20".* rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-19-select-expr-result.output

SEND '"'
AWAIT 498 rows
CAPTURE terminal/output/practical-distinctive-20-limited.output
