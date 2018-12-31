==============
Reshaping Data
==============

VisiData provides several ways to reshape your data:

- Creating pivot tables
- Melting datasets
- Transposing columns and rows

Creating pivot tables
---------------------

VisiData's pivot tables are similar to pivot tables you might have created in various spreadsheet programs. Pivot tables create a cross-tabulation of two or more columns in a dataset.

In VisiData, creating a pivot table involves the following steps:

- Use :kbd:`!` to designate the column(s) you want to serve as the pivot table's rows.
- *Optional*: Use :kbd:`+` to specify additional metrics you want the pivot table to calculate. (By default, the pivot table's sole metric will be the overall count for each grouping.)
- Navigate to the column you want to serve as the pivot table's columns.
- Press :kbd:`Shift-W`

Let's say we want to cross-tabulate species by whether their remains were collected. First, let's designate the ``SPECIES`` column as a key column:

.. raw:: html
    :file: ../../terminal/output/reshaping-00-keycol.output.html

Then, navigate to the ``REMAINS_COLLECTED`` column, either by tapping :kbd:`l` or the right-arrow until we get there, or by typing :kbd:`c` followed by ``REMAINS`` and then :kbd:`Enter`:

.. raw:: html
    :file: ../../terminal/output/reshaping-01-navigate.output.html

Now, press :kbd:`Shift+W` to create the pivot table:

.. raw:: html
    :file: ../../terminal/output/reshaping-02-pivot.output.html

... and :kbd:`g_` to auto-adjust the column widths:

.. raw:: html
    :file: ../../terminal/output/reshaping-03-pivot-adj.output.html

The rows of the pivot table represent each species, while the columns represent the number of rows for each species that fall into each ``REMAINS_COLLECTED`` category, plus a grand total.

This is a simple pivot table, since ``REMAINS_COLLECTED`` can only be either ``0`` or ``1``, but pivot tables on more complex columns can end up much wider.

.. note::

   The order of the columns in a pivot table is based on the order the relevant values appear in the source sheet. If you want them to appear, instead, in alphabetical order, sort the source sheet's relevant column(s) first.


Melting datasets
----------------

To "melt" a dataset is to reshape it from a "wide" format to a "long" one, specifically by converting each value in each column into its own row. If that concept is unfamiliar, the example below should help clarify.

Melting a dataset in VisiData involves the following steps:

- *Optional*: Use :kbd:`!` to designate the column(s) you want to keep unmelted.
- *Optional*: Use :kbd:`-` to hide the columns you don't want to appear, at all, in the melted sheet.
- Press :kbd:`Shift+M`

If you skip the optional steps, pressing :kbd:`Shift-M` on the original ``faa-wildlife-strikes.csv`` dataset creates this melted sheet:

.. raw:: html
    :file: ../../terminal/output/reshaping-04-simple-melt.output.html

Now let's examine how the optional steps affect melting. Press :kbd:`q` to return to the source sheet, and press :kbd:`!` on each of the first two columns (``OPERATOR`` and ``ATYPE``):

.. raw:: html
    :file: ../../terminal/output/reshaping-05-keyed.output.html

Then use :kbd:`-` (or the Columns Sheet) to hide all the other columns except for ``STATE`` and ``AIRPORT``:

.. raw:: html
    :file: ../../terminal/output/reshaping-06-hidden.output.html

Now press :kbd:`Shift-M`. In the resulting melted sheet, ``OPERATOR`` and ``ATYPE`` (the columns you keyed with :kbd:`!`) are preserved as standard columns while ``STATE`` and ``AIRPORT`` have been converted to ``Variable-Value`` pairs:

.. raw:: html
    :file: ../../terminal/output/reshaping-07-melted.output.html


Transposing columns and rows
----------------------------

In VisiData, you can press :kbd:`Shift-T` to "transpose" any given sheet, essentially rotating the struture 90 degrees, so that the rows are represented as columns (and vice versa).

Pressing :kbd:`Shift-T` on the original ``faa-wildlife-strikes.csv`` dataset should give you this result:

.. raw:: html
    :file: ../../terminal/output/reshaping-08-transpose.output.html

If your source sheet has a key column, the values in that column will become the headers for the transposed sheet. For instance, here's the frequency table (with :kbd:`Shift-F`) for the dataset's ``OPERATOR`` column:

.. raw:: html
    :file: ../../terminal/output/reshaping-09-freq.output.html

It has ``OPERATOR`` as its key column, so transposing this sheet should result in something like this:

.. raw:: html
    :file: ../../terminal/output/reshaping-10-freq-trans.output.html

.. note::

   If your source sheet has *multiple* key columns, VisiData will join together the columns' values with the ``_`` character to create the header names.
