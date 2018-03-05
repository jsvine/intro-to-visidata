=====================
Understanding Columns
=====================

Columns in VisiData behave much (though not entirely) like they do in spreadsheet programs and statistical computing environments. Getting a solid grasp of them will put you well on your way to mastering VisiData.


Basic column attributes
-----------------------

Every column in VisiData has the following basic properties, all of which can be modified:

- Name
    - Self explanatory.
- Width
    - The number of characters the column occupies on the screen.
- Type
    - The kind of data — text, integer, float, currency, or date — that the column will be interpreted as.

We'll get to a few other properties later.


How to view all columns and their attributes
--------------------------------------------

To see all the columns in your dataset, press :kbd:`Shift-C`. This will open the "Columns Sheet," which lists each column and its attributes. For the FAA dataset we've been using, it should look like this:

.. raw:: html
    :file: ../../terminal/output/columns-00-column-sheet.output.html

The Columns Sheet is handy for quickly getting a sense of your dataset's structure. You can navigate the sheet as if it were just another dataset. And just like you can do with a standard data sheet, you can leave this column sheet by pressing :kbd:`q`. 

.. note::

   The Columns Sheet is one of several "metasheets" in VisiData; the Sheets Sheet from the previous chapter is another example. You'll encounter a few other metasheets in this tutorial.


How to set column types
-----------------------

Rather than guess at your column's data types, VisiData assumes that they're all plain-old text.

If a column of really is just text, then great.

But if that column is a number or date, and you want to do any math-y operations on your column (e.g., sorting, summing, averaging, et cetera), you'll have to specify its type.

To set a column's type, navigate over to that column and press one of the following keys:

============  ============  =======================
Keystroke     Column type   Examples
============  ============  =======================
:kbd:`#`      Integer       ``0``, ``-1``, ``5000000``
:kbd:`%`      Float         ``0.5``, ``-3.14``, ``23.45557``
:kbd:`$`      Currency      ``$4.99``, ``€20``, ``₹ 100 100``
:kbd:`@`      Date          ``2018-04-06``, ``April 6, 2018``, ``04/06/2018``
:kbd:`~`      Text          *anything!*
============  ============  =======================

When you do so, the corresponding symbol (e.g., ``$`` for currency) will appear in the column's heading.

For instance, here's what you should see if you navigate to the wildlife-strike database's ``HEIGHT`` column, and then press :kbd:`#` to tell VisiData that the height values are integers:

.. raw:: html
    :file: ../../terminal/output/columns-00a-type-assigned.output.html

.. note::

   As you can see above, if a cell cannot be converted into the type you've assigned it, VisiData will display ``?`` in the right-side margin of that cell.

How to rename columns
---------------------

- Navigate to the column that you want to rename:

.. raw:: html
    :file: ../../terminal/output/columns-01-column-nav.output.html

- Press :kbd:`^`, which enters column-name-editing mode (evident by the underscores and change in background highlighting):

.. raw:: html
    :file: ../../terminal/output/columns-02-column-caret.output.html

- Then, type what you want the column to be renamed:

.. raw:: html
    :file: ../../terminal/output/columns-03-column-renaming.output.html

- And then press :kbd:`Enter` to complete the process:

.. raw:: html
    :file: ../../terminal/output/columns-04-column-renamed.output.html



How to expand, shrink, and remove columns
-----------------------------------------

When you load a dataset, VisiData will try to choose reasonable widths for your columns. You can adjust them in a few ways:


==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`_`            Expands the width of **current column** to fit text in all visible rows
:kbd:`g_`           Expands the width of **all columns** to fit text in all visible rows
:kbd:`z_` + *n*     Sets the current column's width to *n* characters
:kbd:`-`            Hides the current column by setting its width to ``0``
:kbd:`z-`           Shrinks the current column's width in half
==================  ============

.. note::

   **What's the deal with "z"?**

   Much like with ``g``, you'll notice that many VisiData commands can be prefixed with ``z``. The effect is typically to narrow or specify the scope of the action; e.g., :kbd:`-` hides a column entirely, while :kbd:`z-` only shrinks it to half-width.


How to move columns' positions
------------------------------

Sometimes you want to view a dataset's columns in a different order than they appear in the dataset. To do that in VisiData, use the following keystrokes:

==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`Shift-H`      Moves column one position to the left
:kbd:`Shift-L`      Moves column one position to the right
==================  ============

.. note::

    Similarly, you can use :kbd:`Shift-J` to move a row down one position, and :kbd:`Shift-K` to move a row up one position.


How to designate "key" columns
------------------------------

For any sheet, you can designate any number of columns as "key" columns. They serve two functions:

- They stay **pinned to the left-hand side** of the sheet when you scroll horizontally.
- They get **special treatment** for certain commands, such as when joining sheets. (More on this later.)

To turn a column into a key column (or vice-versa), navigate to that column and press :kbd:`!`.

For example, say we've navigated to the ``AIRPORT`` column of the FAA dataset. Pressing :kbd:`!` will turn this:

.. raw:: html
    :file: ../../terminal/output/columns-05-pre-key.output.html

... into this:

.. raw:: html
    :file: ../../terminal/output/columns-06-post-key.output.html


Manipulating columns from the Columns Sheet
-------------------------------------------

You can do nearly all of the above from the Columns Sheet (:kbd:`Shift-C`). When you're dealing with datasets with a particularly large number of columns, doing it this way can often be easier; you can see more of the columns at once, and you can adjust multiple columns at once.

- **Moving columns**: In the Columns Sheet, each column is represented as a row; you can reposition them using :kbd:`Shift-J` and :kbd:`Shift-K`.

- **Editing column names**: In the Columns Sheet, you can edit each column's name like you would any other row cell. Just navigate to the name, and press :kbd:`e` to start editing.

- **Setting column types**: You can select multiple rows of the Columns Sheet and type :kbd:`g$`, for example, to set all of the selected columns' types to ``currency``. 

- **Setting column widths**: You can edit the ``width`` field of the Columns Sheet to adjust any column's width. You can also give multiple columns to the same width by selecting each of their rows, and typing :kbd:`ge` + *number*, where *number* is the desired width. 


For instance, here's the Columns Sheet for the FAA dataset before we've made any changes:

.. raw:: html
    :file: ../../terminal/output/columns-sheet-00-before-changes.output.html

Next, we use the :kbd:`s` key to select the four columns we'd like to change:

.. raw:: html
    :file: ../../terminal/output/columns-sheet-01-select-columns.output.html

We'd like to make them all numeric columns, so we type :kbd:`g#`, which results in this:

.. raw:: html
    :file: ../../terminal/output/columns-sheet-02-assign-type.output.html

And we'd like to make them uniformly narrow, so we navigate to the width column and type :kbd:`ge8` + :kbd:`Enter`, which gives us this:

.. raw:: html
    :file: ../../terminal/output/columns-sheet-03-assign-width.output.html

To see how these changes have affected your data sheet, press :kbd:`q` to exit the Columns Sheet, and then navigate over to the ``HEIGHT`` column:

.. raw:: html
    :file: ../../terminal/output/columns-sheet-04-after-changes.output.html
