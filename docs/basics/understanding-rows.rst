==================
Understanding Rows
==================

Rows in VisiData are pretty straightforward. The most important things you need to know are how to select/unselect them, move them, and edit their cells.

Selecting and Unselecting Rows
------------------------------

Many VisiData commands — such as filtering — distinguish between selected and unselected rows. You can select and unselect rows in a few ways:

One row at a time
^^^^^^^^^^^^^^^^^

==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`s`            Select the current row
:kbd:`u`            Unselect the current row
:kbd:`t`            Toggle the current row between selected/unselected
==================  ============

For instance, pressing :kbd:`s` while on the second row of the FAA dataset should have the following effect:

.. raw:: html
   :file: ../../terminal/output/rows-00-select-single.output.html

VisiData has highlighted that row and incremented the selection indicator (in the bottom-right corner) from ``•0`` to ``•1``.

All rows at the same time
^^^^^^^^^^^^^^^^^^^^^^^^^

==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`gs`           Select all rows
:kbd:`gu`           Unselect all rows
:kbd:`gt`           Toggle all rows between selected/unselected
==================  ============

By matching patterns
^^^^^^^^^^^^^^^^^^^^

===================  ============
Keystroke(s)         Action
===================  ============
:kbd:`|` + *term*    Select all rows where *term* matches the **current column**
:kbd:`\\` + *term*   Unselect all rows where *term* matches the **current column**
:kbd:`g|` + *term*   Select all rows where *term* matches **any** column
:kbd:`g\\` + *term*  Unselect all rows where *term* matches **any** column
:kbd:`,`             Select all rows where the **current column** matches this row's value for that column
:kbd:`g,`            Select all rows matching **the current row** (for all non-hidden columns)
===================  ============

For instance, if you take the following steps:

- Navigate to the ``STATE`` column
- Press :kbd:`|`
- Type ``TX``
- Press :kbd:`Enter`

... you should see this:

.. raw:: html
   :file: ../../terminal/output/rows-01-select-pattern.output.html

Via expressions
^^^^^^^^^^^^^^^

In VisiData, you can select rows by evaluating a given Python **expression** for every row in your dataset.

.. tip::

   If you're unfamiliar with Python, no worries. You can find an overview of simple and handy expressions `here <https://docs.python.org/3/tutorial/introduction.html>`_.

These expressions can reference any column in your dataset (so long as the column name contains only letters, underscores, and numbers, and doesn't start with a number; in the next chapter, you'll learn how to rename columns). The two keystrokes for this are :kbd:`z|` and :kbd:`z\\`:

===================  ============
Keystroke(s)         Action
===================  ============
:kbd:`z|` + *expr*   Select all rows where *expr* evaluates to ``True``
:kbd:`z\\` + *expr*  Unselect all rows where *expr* evaluates to ``True``
===================  ============

For instance, if you take the following steps:

- Type :kbd:`gu` to unselect all rows
- Type :kbd:`z|`
- Type ``OPERATOR == "BUSINESS" and STATE == "FL"``
- Press :kbd:`Enter`

... you should see this:

.. raw:: html
   :file: ../../terminal/output/rows-02-select-expr.output.html

.. tip::

    Likewise, you can *search* via expressions using :kbd:`z/` (search forward) and :kbd:`z?` (search backward).

Moving Rows
-----------

You can move the position of row up or down using the following commands:

==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`Shift-J`      Move row up one spot
:kbd:`Shift-K`      Move row down one spot
==================  ============


Editing Row Cells
-----------------

Even if you don't want to edit your raw data in VisiData, knowing how to edit cells will still come in handy, since virtually *everything* — including settings — in VisiData is represented as columns and rows.

Here are the most basic commands:

==================  ============
Keystroke(s)        Action
==================  ============
:kbd:`e`            Begin editing current cell
:kbd:`Enter`        Finish editing
:kbd:`Control-c`    Cancel editing
:kbd:`Control-a`    Move to beginning of line
:kbd:`Control-e`    Move to end of line
:kbd:`Control-k`    Clear contents from cursor's position to end of line
==================  ============

Other keys — such as ``Delete``, standard characters, and the arrow keys — work as expected. You can find a handful of additional special commands in `VisiData's quick reference <http://visidata.org/man/>`_.
