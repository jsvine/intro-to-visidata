=================
Distinctive Birds
=================

This chapter uses VisiData to answer this question: What birds account for the *largest percentages* of their state's collisions?

In the process, we'll cover the following skills:

- Selecting rows that match a phrase
- Toggling selected rows
- Creating filtered sheets
- Renaming sheets and columns
- Creating frequency tables
- Creating and removing key columns
- Creating new columns
- Joining sheets

.. note::

    If you haven't already, download :download:`faa-wildlife-strikes.csv <../../datasets/faa-wildlife-strikes.csv>`, a dataset of all aircraft-wildlife collisions `reported to the Federal Aviation Adminsitration <https://wildlife.faa.gov/database.aspx>`_ between 2010 and mid-2016.

Open the wildlife-strikes dataset in VisiData
---------------------------------------------

Run this command in your terminal:

::

    vd faa-wildlife-strikes.csv


If it worked, you should see something like this:

.. raw:: html
    	:file: ../../terminal/output/practical-distinctive-00-open.output.html

Select only known species
-------------------------

For many of the wildlife strikes in the dataset, species is "unknown". We want to focus just on the known species, so we'll filter out the unknowns in this step.

First, navigate to the ``SPECIES`` column. Then, do the following:

- Press :kbd:`|` to raise the select-by-search prompt
- Type ``unknown``
- Press :kbd:`Enter`

Once you do that, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-01-unknown.output.html

Now, all the unknown species are selected. But we want the *opposite* of that: only known species selected. To do that, let's toggle the selection-ing for all rows, by typing :kbd:`gt` (mnemonic: "global toggle"). Once you do that, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-02-toggled.output.html

Now that we've selected our desired columns, let's create a new sheet containing *only* those columns, by pressing :kbd:`"`. The result should look something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-03-filtered.output.html

Finally, let's un-select all the rows in our filtered sheet, by typing :kbd:`gu` (mnemonic: "global unselect"):

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-03b-unselected.output.html

Rename the filtered sheet
-------------------------

By default, our sheet will be titled "faa-wildlife-strikes_selectedref". To make it slightly easier to distinguish from other sheets, let's rename it. To rename a sheet, do the following:

- Press :kbd:`Shift-S` to open the Sheets Sheet
- Press :kbd:`_` to widen the ``name`` column so that we read all the names
- Navigate down to our sheet of interest
- Press :kbd:`e` to begin editing the name
- Type the new name we want; in this case ``known_species``

At this point, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-04-edit-sheet-name.output.html

When you've entered the name, press :kbd:`Enter` to complete the edit (or :kbd:`Control-c` to cancel the edit).

Then, either (a) press :kbd:`q` to leave the Sheets Sheet, or (b) navigate back to the row representing our ``known_species`` and press :kbd:`Enter` to return to it.

Count the number of collisions per state
----------------------------------------

To get the denominator for our calculations, we'll want to know the total number of reported collisions for each state.

Back in our ``known_species`` sheet, navigate to the ``STATE`` column:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-05-on-state-col.output.html

Then, to create a frequency table for the column, press :kbd:`Shift-F`. Once you do, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-06-state-freq.output.html

Spruce up the frequency table
-----------------------------

Because we'll later be joining this sheet to another sheet, let's spruce it up a bit by doing the following:

- Navigate to the ``count`` column. Rename it by pressing :kbd:`^`, typing ``state_total``, and then pressing :kbd:`Enter`
- Press :kbd:`_` to resize column slightly, so that the full column name can be seen
- Hide the ``percent`` and ``histogram`` columns by navigating to each and pressing :kbd:`-`.

After those steps, the sheet should look something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-07-state-freq-trimmed.output.html


Count the number of collisions per state *and* species
------------------------------------------------------

Now that we have the denominator — collisions per state — let's calculate the numerator: collisions *per species* per state.

To do that, we'll want to create a frequency table for the *combination* of the ``STATE`` and ``SPECIES`` columns. Here's how:

- Use the Sheets Sheet (:kbd:`Shift-S`) to navigate back to the ``known_species`` sheet
- Navigate to the ``STATE`` column, and press :kbd:`!` to make it a "key" column
- Do the same thing for the ``SPECIES`` columns  

At this point, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-08-known-keyed.output.html

Now, type :kbd:`gF`, which will create a frequency table of all keyed columns. Once you do, you should see something like this:


.. raw:: html
	:file: ../../terminal/output/practical-distinctive-09-state-species-freq.output.html

Just like we did with the state-frequency table, let's simplify this table by removing the ``percent`` and ``histogram`` columns; navigate to each of those columns and press :kbd:`-`, which should result in something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-10-state-species-freq-trimmed.output.html

Prepare the state-species frequency table for joining
-----------------------------------------------------

There's just one step left before we can join the tables: making sure that the two frequency tables share the exact same key column. (VisiData uses each sheet's "key" columns to determine which rows to join.)

Because the key for the state-counts table is the ``STATE`` column, this table should also have ``STATE`` as its only key column. That means we need to un-key the ``SPECIES`` column. Luckily, that's easy. Just navigate to the ``SPECIES`` column and press :kbd:`!` to toggle it's status from keyed to un-keyed:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-11-state-species-freq-rekeyed.output.html

Join the two frequency tables
-----------------------------

Now, for the moment we've all been waiting for: Let's join the tables!

First, press :kbd:`Shift-S` to open the Sheets Sheet, and then press :kbd:`_` to widen the ``name`` column so that we read all the names:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-12-sheets-sheet.output.html

Then navigate to the ``known_birds_STATE-SPECIES_freq`` row, and press :kbd:`s` to select it. Do the same for the ``known_birds_STATE_freq``, so that the Sheets Sheet now looks like this: 

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-13-sheets-selected.output.html

Press :kbd:`&` to raise the sheet-joining prompt, and type ``inner`` to indicate that we want to perform an inner join (a.k.a. "left join", a.k.a. "INNER LEFT JOIN"):

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-14-sheets-join-prompt.output.html

Press :kbd:`Enter` to complete the action, after which you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-15-sheets-joined.output.html

Calculate each species' state-level percentages
-----------------------------------------------

Now that we have the numerator and denominator in the same sheet, let's calculate the percentage of known-species collisions to each species in each state.

Let's say we want the new column to appear as the last column in the sheet, so let's navigate to the currently-last column by typing :kbd:`gl`. Then let's create the new column by pressing :kbd:`=`, typing ``count * 100 / state_total``, and then pressing :kbd:`Enter`.

Once you do that, you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-16-new-col.output.html

It worked! But the column name is a bit wonky and literal. Let's make the following tweaks:

- Rename the column by navigating to it, pressing :kbd:`^` to enter the column-name-editing mode, typing ``pct_of_state``, and then pressing :kbd:`Enter`.
- Press :kbd:`%` to tell VisiData that it's a "float"-type numeric column. (By default, VisiData assumes that newly created columns are just plain-old text.)
- Press :kbd:`_` to resize the column to fit its contents more precisely

Now the sheet should look something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-16b-new-col-clean.output.html

Sort by percentage
------------------

Of course, to answer our main question, we'll need to sort the column. To sort it descendingly, press :kbd:`]`. Now you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-17-new-col-typed-and-sorted.output.html

Limit to rows with at least 20 collisions
-----------------------------------------

Hmmm, many of the highest-ranking species-state combinations seem to come from "states" — like the striped skunk that was struck in Nova Scotia — with very few reported collisions. So let's limit the results to species-state combinations with at least 20 reports.

To do that, we'll create a new ``True/False`` that indicates whether a row represents 20 or more reports, and then select only the rows for which that's true. Here's how:

First, press :kbd:`=` to raise the new-column prompt. Then, type ``count >= 20`` at the prompt, and then press :kbd:`Enter` to complete the action. Now you should see something like this:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-18-new-col-cutoff.output.html

Then, navigate to the new column and press :kbd:`Shift-F` to create a frequency table of it, and navigate to the ``True`` row:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-19-new-col-cutoff-freq.output.html

Finally, press :kbd:`Enter` to see just the rows for which ``count`` is at least 20:

.. raw:: html
	:file: ../../terminal/output/practical-distinctive-20-limited.output.html

There you have it! The `Yellow Bittern <https://en.wikipedia.org/wiki/Yellow_bittern>`_ accounted for more than 40% of the reported, known-species collisions in "PI" (the `FAA's abbreviation  <https://www.faa.gov/airports/airport_safety/wildlife/resources/media/2005_FAA_Manual_complete.pdf>`_  for "USA-possessed Pacific Islands," such as Guam). In Colorado, the Horned Lark has been nearly as collision-dominating, as has the Pacific Golden-Plover in Hawaii, and Mourning Doves in Arizona and Missouri.

Take it one step further
--------------------------

What if we want to find the species that are *disproportionately* involved in collisions in their state? How would you do that? (Hint: It involves just one more frequency table and one more join.)
