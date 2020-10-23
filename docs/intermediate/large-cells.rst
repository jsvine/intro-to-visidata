========================
Working With Large Cells
========================

Sometimes, values in a dataset are too large to display entirely in a single row. VisiData provides a few ways to view these large cells:

- Multiline mode
- Scrolling within cells
- Diving into cells

In the examples below, we'll examine the ``REMARKS`` column of the FAA dataset:

.. raw:: html
    :file: ../../terminal/output/large-cells-00-initial.output.html

Enabling multiline mode
-----------------------

By default, VisiData displays each row on a single line. You can switch to multiline mode (and toggle back out of it) by pressing :kbd:`v`. Here's what that looks like:

.. raw:: html
    :file: ../../terminal/output/large-cells-01-multiline.output.html

.. note::
   By default, the maximum row height is 10 lines, but you can adjust this through VisiData's ``default_height`` setting.


Scrolling within cells
----------------------

To see more of a cell in single-line mode, you can scroll back and forth within a column using the following commands:

==============  =======================
Keystrokes      Action
==============  =======================
:kbd:`zh`       Scroll text left
:kbd:`zl`       Scroll text right
:kbd:`zj`       Scroll text down
:kbd:`zk`       Scroll text up
:kbd:`gzh`      Scroll back to leftmost character
:kbd:`gzk`      Scroll back to topmost character
==============  =======================


Here's how it looks in practice, starting with the same view as above:

.. raw:: html
    :file: ../../terminal/output/large-cells-02-before-scroll.output.html

After typing :kbd:`zh`, the ``REMARKS`` column now looks like this:

.. raw:: html
    :file: ../../terminal/output/large-cells-03-after-scroll.output.html

Diving into cells
-----------------

Pressing :kbd:`z` + :kbd:`Enter` "dives" into your current cell, opening a "Text Sheet" that contains only that cell's value:

.. raw:: html
    :file: ../../terminal/output/large-cells-04-dive-cell.output.html

If your cell's value contains newlines, they'll appear as such in the Text Sheet. From a Text Sheet, you also can press :kbd:`Control-o` to open the cell in your terminal's default text editor.
