====================
Understanding Sheets
====================

VisiData's workflow revolves around "sheets." As with traditional spreadsheet programs, VisiData's sheets are composed of **columns** and **rows**.

But VisiData's takes the sheet concept to the next level: In VisiData, nearly *everything* — even the program's own settings panel — is a sheet. 

In VisiData, there are three types of sheets:

- Source sheets
  - The data you've loaded directly into VisiData

- Derived sheets
  - Sheets that are based on data in your source sheets. E.g., a frequency table, or a filtered subset of rows.

- Metasheets
  - These are sheets that help you navigate and customize VisiData. Two of the most powerful are the Sheets Sheet (discussed below) and the Columns Sheet (discussed in the "Understanding Columns" chapter).


How to use the Sheets Sheet
---------------------------

VisiData's "Sheets Sheet" lists all currently-open sheets and makes it easy to jump between sheets.

From anywhere in VisiData, you can open the Sheets Sheet by pressing :kbd:`Shift-S`.

If you've just launched VisiData with a single dataset, pressing :kbd:`Shift-S` will open a Sheets Sheet that looks something like this:

.. raw:: html
   :file: ../../terminal/output/faa-simple-sheets-sheet.output.html

Not very exciting. But as you start juggling more sheets — frequency tables, multiple datasets, et cetera — the Sheets Sheet becomes very handy.

You can navigate the Sheets Sheet just like you would any other sheet, with one main difference: Pressing :kbd:`Enter` takes you to whatever sheet you've highlighted.

.. warning::

   Pressing :kbd:`d` on a Sheets Sheet row will permanently close that row's sheet.

Quickly toggling between sheets
-------------------------------

To flip back and forth between your current sheet and the previous one, press :kbd:`Control-^`.

How to close/remove a sheet
---------------------------

To close the current sheet (removing it from VisiData), press :kbd:`q`.

To close all sheets (and, hence, quitting VisiData in its entirety), type :kbd:`gq`.
