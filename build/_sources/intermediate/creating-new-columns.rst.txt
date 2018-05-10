====================
Creating New Columns
====================

In any VisiData sheet, you can create new columns based on pre-existing columns. These are three of the most useful ways:

- Expressions (like functions in Excel, etc.)
- Splits (breaking up one text column into several)
- Captures (extracting one chunk of a text column)

How to create an expression column
----------------------------------

Expression columns **evaluate** a given Python expression for every row in your dataset. They can reference any column in your dataset.

.. note::

   If you're unfamiliar with Python, no worries. You can find an overview of simple and handy expressions `here <https://docs.python.org/3/tutorial/introduction.html>`_.

You can create an expression column by pressing :kbd:`=`. Once you do so, you'll see a prompt at the bottom of the screen. Then, type your desired expression and press :kbd:`Enter`.

Perhaps the simplest expression column would be ``=1``; for every row, the column's value would be ``1``. Let's see how that looks:

.. raw:: html
    :file: ../../terminal/output/newcols-00-simple.output.html

.. note::

   By default, the name of your new columns will be the expression you entered. As always, you can edit the column name by pressing :kbd:`^` and typing the new name.

   Also by default, the column will appear directly to the right of the column that was active when you pressed :kbd:`=`. As always, you can move the column left or right using :kbd:`Shift-J` and :kbd:`Shift-K`.

Now, let's try creating a column *based on another column*. Let's say we want to identify wildlife strikes that were reported to have occurred at least 100 feet above ground. We could do the following:

- Navigate to the ``HEIGHT`` column
- Press :kbd:`#` to tell VisiData the column's values should be interpreted as integers
- Press :kbd:`=` to bring up the "new column expr=" prompt
- In the prompt, type ``HEIGHT >= 100``
- Press :kbd:`Enter`

You should see something like the following:

.. raw:: html
    :file: ../../terminal/output/newcols-01-operator.output.html

.. note::

   If VisiData encounters an error for the computation of a new cell (e.g., if you try to add ``"dog" + 42``), VisiData will display that cell's value as ``!``.


How to create new columns by splitting another one
--------------------------------------------------

You can split the text in any column in VisiData into two or more columns, based on a pattern (i.e., a "regular expression" a.k.a. "regex") that you provide. 

To split a column, navigate to that column, and press :kbd:`:`. At the bottom of the screen, VisiData you'll see a ``split regex:`` prompt. Enter your desired splitting pattern, and press :kbd:`Enter`.

For a simple example, let's say we want to split the ``INCIDENT_DATE`` column into the date and time. Because the date and time are separated by a space, we can do this:

- Navigate to the ``INCIDENT_DATE`` column
- Press :kbd:`:`
- At the prompt, type :kbd:` ` (a space), and then hit :kbd:`Enter`

Once you do that, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/newcols-02-split.output.html

.. note::

   The number of new columns created will be determined by the active row. E.g., splitting on ``-`` would create two new columns if the column's value for the active row was ``see-saw``, but three columns if it were ``merry-go-round``.


How to create a new column by "capturing" it from another column
----------------------------------------------------------------

.. note::

   This approach requires a bit more knowlege of "regular expressions". If you're unfamiliar with regular expressions and don't want to learn them right now, feel free to skip to the next chapter.

Just like you can split a column by using :kbd:`:`, you can extract part of a column into a new column by using :kbd:`;`.

For instance, if you want to extract the first string of numbers from each aircraft type, (e.g., ``28`` from ``PA-28``, ``46`` from ``PA-46 MALIBU``, and ``717`` from ``B-717-200``). To do that, take the following steps:

- Navigate to the ``ATYPE`` column
- Press :kbd:`;`
- At the prompt, type ``(\d+)`` (with one set of parentheses for each capture group), and then hit :kbd:`Enter`

Once you do that, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/newcols-03-capture.output.html
