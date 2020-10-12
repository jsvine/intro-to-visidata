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

   Pressing :kbd:`d` on a Sheets Sheet row will send the corresponding sheet to the "sheets graveyard".



How to rename a sheet
---------------------

There are two ways to rename a sheet:

- Go to the **Sheets Sheet**, and navigate to the row representing the sheet you want to rename. Press :kbd:`e` to go into editing mode, type the new name, and then press :kbd:`Enter` to complete the renaming.

- Alternatively, while **in the sheet you want to rename**, press :kbd:`Space` to raise the type-a-command prompt. Then, type ``rename-sheet`` and press :kbd:`Enter`. At the next prompt, type the new name, and press :kbd:`Enter` to complete the renaming.


How to close/remove a sheet
---------------------------

To close the current sheet (removing it from VisiData), press :kbd:`q`.

To close all sheets (and, hence, quitting VisiData in its entirety), type :kbd:`gq`.

To access the "sheets graveyard", a listing of recently-closed sheets, type :kbd:`gS`.


Quickly toggling between sheets
-------------------------------

To flip back and forth between your current sheet and the previous one, press :kbd:`Control-^`.

Additionally, VisiData assigns every sheet a numeric shortcut, visible at the bottom-left corner of the interface. You can jump to a sheet by pressing :kbd:`Alt` plus the shortcut number — for instance :kbd:`Alt-1` to go to the first sheet you loaded.

