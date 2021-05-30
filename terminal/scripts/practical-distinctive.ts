INIT --shell "bash --rcfile terminal/misc/clean-bash.bashrc" --width 100
AWAIT "\$\s+$"
SEND "vd datasets/faa-wildlife-strikes.csv" --enter
AWAIT '73448 rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-00-open.output

SEND cSPECIES --enter
SEND "|unknown" --enter
AWAIT '259.* select-col-regex' --start-line -1
CAPTURE terminal/output/practical-distinctive-01-unknown.output

SEND gt
AWAIT '•47460 $' --start-line -1
CAPTURE terminal/output/practical-distinctive-02-toggled.output

SEND '"'
AWAIT '"\s+47460 rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-03-filtered.output

SEND " rename-sheet" --enter
SEND known_species
CAPTURE terminal/output/practical-distinctive-04-edit-sheet-name.output --start-line -4
ENTER

SEND cSTATE --enter
AWAIT '"STATE"' --start-line -1
CAPTURE terminal/output/practical-distinctive-05-on-state-col.output

SEND F
AWAIT "F\s+63 bins •0 $" --start-line -1
CAPTURE terminal/output/practical-distinctive-06-state-freq.output

SEND ccount --enter
SEND ^state_total --enter
SEND _l--
AWAIT "state_total♯║\s*$"
CAPTURE terminal/output/practical-distinctive-07-state-freq-trimmed.output

SEND S
SEND gk # Make sure to start at the top
SEND jj
ENTER # Select 'known_species' sheet
SEND cSTATE --enter
SEND !
SEND cSPECIES --enter
SEND !
AWAIT "!" --start-line -1
CAPTURE terminal/output/practical-distinctive-08-known-keyed.output

SEND gF
AWAIT "5135 bins •0 $" --start-line -1
CAPTURE terminal/output/practical-distinctive-09-state-species-freq.output

SEND lll--
AWAIT "count♯║\s*$"
CAPTURE terminal/output/practical-distinctive-10-state-species-freq-trimmed.output

SEND ghl!
AWAIT "!" --start-line -1
CAPTURE terminal/output/practical-distinctive-11-state-species-freq-rekeyed.output

SEND S_
SEND gk # Make sure that we're starting at the top
AWAIT "known_species_STATE-SPECIES_freq"
AWAIT "5 sheets"
CAPTURE terminal/output/practical-distinctive-12-sheets-sheet.output

SEND jsjs
AWAIT "selected 1 more sheets" --start-line -1
CAPTURE terminal/output/practical-distinctive-13-sheets-selected.output

SEND &
CAPTURE terminal/output/practical-distinctive-14-sheets-join-prompt.output

SEND inner
ENTER
AWAIT "5135 rows" --start-line -1
CAPTURE terminal/output/practical-distinctive-15-sheets-joined.output
SEND " rename-sheet" --enter
SEND joined --enter

SEND gl
SEND "=count * 100 / state_total" --enter
AWAIT 'addcol-expr\s+5135 rows' --start-line -1
CAPTURE terminal/output/practical-distinctive-16-new-col.output

SEND l
SEND ^pct_of_state --enter
SEND %_
AWAIT "pct_of_state%" --end-line 1
CAPTURE terminal/output/practical-distinctive-16b-new-col-clean.output

SEND ]
AWAIT "]  sort-desc\s+5135 rows" --start-line -1
CAPTURE terminal/output/practical-distinctive-17-new-col-typed-and-sorted.output

SEND z|count >= 20
AWAIT "z|count >= 20" --start-line -1
CAPTURE terminal/output/practical-distinctive-18-select-expr-input.output

ENTER
AWAIT 'selected' --start-line -1
CAPTURE terminal/output/practical-distinctive-19-select-expr-result.output

SEND '"'
AWAIT 498 rows
CAPTURE terminal/output/practical-distinctive-20-limited.output
