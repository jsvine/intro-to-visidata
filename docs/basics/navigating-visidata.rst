===================
Navigating VisiData
===================

VisiData is a keyboard-driven program. Although you can use your mouse for some tasks, your keyboard will be your workhorse. Moving among a dataset's rows and columns is no exception.

How to move one row/column at a time
------------------------------------

You can use your keyboard's arrow keys to navigate between columns.

Alternatively, you can use the :kbd:`h`/:kbd:`j`/:kbd:`k`/:kbd:`l` keys to move left/down/up/right. (That convention, like several others in VisiData, is `borrowed from the vim text editor <http://www.catonmat.net/blog/why-vim-uses-hjkl-as-arrow-keys/>`_.)

When you first open a dataset in VisiData, you'll start in the top-left corner:

.. raw:: html
    :file: ../../terminal/output/navigation-00-start.output.html

If you press the down-arrow and then the right-arrow (or, correspondingly, :kbd:`j` and then :kbd:`l`), you should see the row and column selectors move:

.. raw:: html
    :file: ../../terminal/output/navigation-01-single.output.html

How to move faster
------------------

You can use these keystrokes to move more than one column or row at a time:

=================================  =======================
Keystroke(s)                       Moves cursor ...
=================================  =======================
:kbd:`gj`                          to last row
:kbd:`gk`                          to first row
:kbd:`gh`                          to leftmost column
:kbd:`gl`                          to rightmost column
:kbd:`PageDown`/:kbd:`Control-F`   one page down (forward)
:kbd:`PageUp`/:kbd:`Control-B`     one page up (backward)
=================================  =======================

.. note::

   **What's the deal with "g"?**

   As you learn to use VisiData, you'll notice that many commands can be prefixed with ``g``. In general, prefixing a command with ``g`` applies it more broadly. (You can think of ``g`` as shorthand for "global.")

   Hence the above: :kbd:`h` navigates one column to the left, while :kbd:`gh` moves *all the way* to the left.



How to move via searching
-------------------------

In VisiData you can hop between columns using `regular expressions <http://2017.compciv.org/guide/topics/regular-expressions/regex-early-overview.html>`_. (If you're not familiar with regular expressions, don't worry; for the purposes here, you can just think of them as "search terms.")

.. note::

    Searches in VisiData are, by default, *case-insensitive*. You can change this in `VisiData's options <../../advanced/configuring-visidata>`_.

To **find a row**, type these commands, followed by :kbd:`Enter`:

===================  =======================
Keystroke(s)         Action
===================  =======================
:kbd:`/` + *regex*   Search forward in *current* column
:kbd:`?` + *regex*   Search backward in *current* column
:kbd:`g/` + *regex*  Search forward in *all* columns
:kbd:`g?` + *regex*  Search backward in *all* columns
===================  =======================

Some VisiData commands, like the ones directly above, will prompt you to enter some text.

To demonstrate, move to the first column of the FAA dataset (if you're not already there) and type :kbd:`/`. At the bottom-left of the screen, you'll see a ``/``:

.. raw:: html
    :file: ../../terminal/output/navigation-02-search-prompt.output.html

Then, type ``united``:

.. raw:: html
    :file: ../../terminal/output/navigation-03-search-text.output.html

Then, press :kbd:`Enter`. Your cursor should now be at the first row matching "united":

.. raw:: html
    :file: ../../terminal/output/navigation-04-search-result.output.html


Once you've executed a search, you can **cycle through all the matching rows**:

===================  =======================
Keystroke(s)         Action
===================  =======================
:kbd:`n`             Move to next matching row
:kbd:`N`             Move to previous matching row
===================  =======================

You can also jump between **columns**:

===================  =======================
Keystroke(s)         Action
===================  =======================
:kbd:`c` + *regex*     Jump to the next matching column
===================  =======================

How to move to a specific row/column number
-------------------------------------------

To jump to the *nth* row or column, you can use these commands:

===================  =======================
Keystroke(s)         Action
===================  =======================
:kbd:`zr` + *n*      Jump to row number *n*
:kbd:`zc` + *n*      Jump to column number *n*
===================  =======================

How to move with your mouse
---------------------------

In addition to using your keyboard, you can use your mouse or trackpad to navigate between rows:

- **Click** a row to move the VisiData cursor to it
- **Scroll** to scroll through the rows

.. tip::

   Feeling lost in a sheet? Press :kbd:`Control-g` to display your cursor's row and column number at the bottom of VisiData's interface.
