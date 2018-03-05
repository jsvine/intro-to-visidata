================
Summarizing Data
================

VisiData makes it pleasantly easy to summarize your data. There are three main types of summaries: Frequency tables, one-off calculations, and the Describe Sheet.


Frequency tables
----------------

Frequency tables are dead-simple, but also quite powerful. For the dead-simple usage: Navigate to any column, and then press :kbd:`Shift-F`. If you did that on the first column ("OPERATOR") of the FAA dataset, you should get something like this:

.. raw:: html
    :file: ../../terminal/output/faa-operator-frequency.output.html

With just one keystroke, VisiData has already told us something useful about the dataset: That the "operators" associated with 31% of the wildlife strikes are, according to the FAA, "unknown." We have also learned, from the "bins" mini-report at the bottom-right of the screen, that there are 282 distinct values in the "OPERATOR" column.

Multi-column frequencies
^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes you want to count how often **combinations** of columns occur. VisiData also makes this easy. First, turn the columns you want to count into "key" columns, using the :kbd:`!` button. Then, type :kbd:`gF`.

For instance, if we wanted to count the combinations of the "OPERATOR" and "PERSON" fields, we'd hit :kbd:`!` on each of those columns — either from the main data sheet or in the Columns Sheet. Once you've done that, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/summarizing-00-keyed.output.html

Then, type :kbd:`gF`, which should result in something like this:

.. raw:: html
    :file: ../../terminal/output/summarizing-01-multifreq.output.html

To make it easier to read, type :kbd:`g_`, which will expand the column widths:

.. raw:: html
    :file: ../../terminal/output/summarizing-02-multifreq-wider.output.html

With just a few more keystrokes, we've learned something else: Virtually all wildlife strikes with "unknown" operators were identified based on carcasses found at the airport (rather than reports from pilots, for example).


Adding "aggregators"
--------------------

By default, frequency tables just count the number of times each value appears. But in VisiData, you can specify additional calculations by setting the column's "aggregators". (You might remember this field from the Columns Sheet.) In VisiData, there are eight main aggregators:

- ``min``
- ``max``
- ``avg`` / ``mean``
- ``median``
- ``sum``
- ``distinct``
- ``count``
- ``keymax``

To add an aggregator to a column, navigate to that column and press :kbd:`+`. VisiData will then prompt you to specify *which* aggregator you would like to add. You can repeat the process to add as many aggregators as you'd like to any column. Make sure, though, that you've assigned the proper type (``#`` for integer columns, etc.) to those columns, so that they're calculated properly.

Once you've set your aggregators, those calculations will appear in your frequency tables.

For example, let's go back to the original FAA data sheet. Let's navigate to the "COST_REPAIRS" column, and then do the following:

- Press :kbd:`#` to tell VisiData this is an integer column
- Press :kbd:`+` to tell VisiData you want to add an aggregator
- Type ``sum`` and then hit :kbd:`Enter` to add the summation aggregator
- Navigate to the "AIRPORT" column, and press :kbd:`Shift-F`

You should see something like this:

.. raw:: html
    :file: ../../terminal/output/summarizing-03-freq-aggregated.output.html

By default, frequency tables are sorted by the "count" column, but you can sort them by any other column.


One-off calculations
--------------------

From any data sheet, you can also run a single calculation on all rows — or all selected rows — in a column. To do that, navigate to the column and type :kbd:`z+`, which will bring up the same aggregator-choice prompt as above. Type the aggregator you want, and press :kbd:`Enter`. At the bottom of the screen, you'll see the result of the calculation.

You can try this on the FAA data sheet we've been working with. Navigate to the "COST_REPAIRS" column, and then do the following:

- Press :kbd:`#` to tell VisiData this is an integer column (if you haven't already)
- Type :kbd:`z+` to see the result of an aggregator
- Type ``sum`` and then hit :kbd:`Enter`

At the bottom of the screen, you should see something like this, indicating that the total *reported* cost of repairs is $161,868,071:

.. raw:: html
    :file: ../../terminal/output/summarizing-04-one-off-calcs.output.html


Summarizing all columns
-----------------------

To get a bird's-eye view of your entire dataset, press :kbd:`Shift-I`, which will provide summary statistics for each of your columns:


.. raw:: html
    :file: ../../terminal/output/summarizing-05-describe-sheet.output.html

In VisiData, this is called the "Describe Sheet". You'll notice that there are only min/max/median/etc. calculations for the columns we've given types — just the ``COST_REPAIRS`` column so far. If we go back to the data sheet and tell VisiData that the ``HEIGHT``, ``SPEED``, and ``BIRDS_STRUCK`` fields are numbers, too, then pressing :kbd:`Shift-I` will result in something like this:

.. raw:: html
    :file: ../../terminal/output/summarizing-06-describe-sheet-typed.output.html

