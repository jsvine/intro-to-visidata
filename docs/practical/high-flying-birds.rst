=================
High-Flying Birds
=================

This chapter uses VisiData to answer this question: Which birds that are struck, on average, at the highest altitudes?

In the process, we’ll cover the following skills:

- Assigning "types" to columns
- Creating new columns
- Using frequency tables to filter sheets
- Calculating aggregate statistics

.. note::

    If you haven't already, download :download:`faa-wildlife-strikes.csv <../../datasets/faa-wildlife-strikes.csv>`, a dataset of all aircraft-wildlife collisions `reported to the Federal Aviation Adminsitration <https://wildlife.faa.gov/database.aspx>`_ between 2010 and mid-2016.

Open the wildlife-strikes dataset in VisiData
---------------------------------------------

Let's start from the very beginning.

Run this command in your terminal:

::

    vd faa-wildlife-strikes.csv


If it worked, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-00-open.output.html


Tell VisiData that ``HEIGHT`` is an integer column
--------------------------------------------------

Navigate to the ``HEIGHT`` column, and press :kbd:`#`.

You should see something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-01-integer.output.html


As you can see, many of the reported collisions are missing height data, or appear to have occurred on the ground (i.e., ``HEIGHT == 0``).

So, let's focus only on collsions reported to have occurred above the ground.


Select only rows where ``HEIGHT`` is greater than zero
------------------------------------------------------

To do that, we'll use :kbd:`z|`, VisiData's "select by expression" command. Type :kbd:`z|` and then, at the prompt, type ``HEIGHT > 0``. You should see something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-02-select-expr-input.output.html

Then press :kbd:`Enter`. Now you you should see the above-ground collisions selected:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-03-select-expr-result.output.html

Create a new sheet with only the selected rows
----------------------------------------------

To do so, press :kbd:`"`. Once you do that, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-04-filtered.output.html


Get the average collision height for each species
-------------------------------------------------

This is a two-step process. First, navigate to the ``HEIGHT`` column, and press :kbd:`+` to add an aggregator. At the prompt at the bottom of the screen, type ``mean`` ...

.. raw:: html
    :file: ../../terminal/output/practical-hfb-05-mean.output.html

\.\.\. and then press :kbd:`Enter`.

.. note::

   Adding an aggregator doesn't change the appearance of the sheet. But if you want to confirm that you've added an aggregator correctly, you can press :kbd:`Shift-C` to open up the Columns Sheet, and look at the ``aggregators`` field.

Then, to get the average for each animal, navigate to the ``SPECIES`` column, and press :kbd:`Shift-F` to create a frequency sheet. It should look something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-06-species-freq.output.html


Sort the species by collision height
------------------------------------

By default, frequency tables are sorted by the raw count of matching rows. To sort by the highest average collision height, navigate to the ``mean_HEIGHT`` column, and press :kbd:`]`.

You should see something like this:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-07-sorted.output.html

Hrrrm, it seems like a lot of these species show up just a few times — too few to be particularly informative. Let's do something about that.

Limit the results to relatively common species
----------------------------------------------

This step will seem familiar; it's a lot like how we selected only above-the-ground collisions.

First, type :kbd:`z|` to raise the "select by expression" prompt. Then, type ``count >= 20``:

.. raw:: html
	:file: ../../terminal/output/practical-hfb-08-select-expr-input.output.html

Next, press :kbd:`Enter` to complete the action. Because there are no high-count species in the visible part of the sheet, you won't notice much of effect at first; just a confirmation in the status bar at the bottom: 

.. raw:: html
	:file: ../../terminal/output/practical-hfb-09-select-expr-result.output.html

Now press :kbd:`"` to create a new sheet containing only the selected rows. Tada!:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-10-limited.output.html

Finally, type :kbd:`g_` to widen all the columns, so that you can read all the names:

.. raw:: html
    :file: ../../terminal/output/practical-hfb-11-col-expanded.output.html
