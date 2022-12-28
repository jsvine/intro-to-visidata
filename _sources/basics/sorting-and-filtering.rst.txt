=====================
Sorting and Filtering
=====================

Now that you have a grasp of sheets, rows, and columns, let's move on to the most basic of dataset operations: sorting and filtering rows.

How to sort rows
----------------

The keys :kbd:`[` and :kbd:`]` sort rows in ascending and descending order, respectively.

For instance, you could do the following with the FAA dataset:

- Navigate to the ``COST_REPAIRS`` column
- Press :kbd:`#` (if you haven't already) to tell VisiData it's a numeric column
- Press :kbd:`]` to sort the column in descending order — i.e., from highest to lowest

After that, you should see something like the following:

.. raw:: html
    :file: ../../terminal/output/sorting-00-descending.output.html

.. tip::

    You can sort on multiple columns at once by "key"-ing those columns (via :kbd:`!`) and then typing either :kbd:`g[` (ascending) or :kbd:`g]` (descending).
   
How to filter rows
------------------

VisiData provides several ways to filter your datasets:

- Row selection + :kbd:`"`
- Frequency tables + :kbd:`Enter`
- Frequency tables + row selection + :kbd:`g` + :kbd:`Enter`

The sections below walk you through each approach.

Filtering selected rows with :kbd:`"`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In VisiData, pressing :kbd:`"` will create a copy of your current sheet — but one that contains only **selected** rows.

So, to view only wildlife strikes that involved hawks, you could do the following:

- Navigate to the ``SPECIES`` column
- Press :kbd:`|` to select by searching, then type ``hawk``, and then press :kbd:`Enter`

At this point, you should see something like the following:

.. raw:: html
    :file: ../../terminal/output/filtering-00-search.output.html
 
Then, press :kbd:`"`, which should give you something like the following:

.. raw:: html
    :file: ../../terminal/output/filtering-01-push.output.html


Filtering via frequency tables
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

From any row in any frequency table, you can press :kbd:`Enter` to create a new dataset containing only the rows that match that value.

For instance, to view only the wildlife strikes that occurred in California, we might do the following from the main data sheet:

- Navigate to the ``STATE`` column
- Press :kbd:`Shift-F` to create the frequency table
- Navigate down two rows, to the row for ``CA``

At which point, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/filtering-02-freq-before.output.html

From there, pressing :kbd:`Enter` should create the filtered sheet we wanted:

.. raw:: html
    :file: ../../terminal/output/filtering-03-freq-after.output.html


Using frequency tables to select (and filter) for multiple values
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The approach above is great if you want to drill down on rows where a field equals one particular value. But what if you want to include a few different values? Select the rows of the frequency table you want to include, then press :kbd:`g` + :kbd:`Enter`.

Here's a practical example, using the FAA dataset. Let's say you want to filter for wildlife strikes at the five airports with the most reported incidents. To achieve that, you could take these steps:

- On the main data sheet navigate to the ``AIRPORT`` column, and press :kbd:`Shift-F` to create a frequency table:

.. raw:: html
    :file: ../../terminal/output/filtering-04-freq-airport.output.html

- Then, select the top five entries (skipping ``UNKNOWN``) using :kbd:`s`:

.. raw:: html
    :file: ../../terminal/output/filtering-05-freq-multiselect.output.html

- Next, press :kbd:`g` + :kbd:`Enter`. The result should look like this, with 9,250 rows (the total of those five airports):
  
.. raw:: html
    :file: ../../terminal/output/filtering-07-freq-filter-post-multiselect.output.html
