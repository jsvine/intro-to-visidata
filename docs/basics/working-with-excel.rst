===============================
Working With Excel Spreadsheets
===============================

Working with Excel spreadsheets in VisiData isn't *much* different than working with CSV files or other tabular data, but when you open an Excel file, the first thing you'll see is a listing of the sheets it contains. (Navigate to the sheet you want to explore, and then press :kbd:`Enter` to open it.)



How to fix funky spreadsheets' column names
-------------------------------------------

By default, VisiData considers the first row of a tabular dataset to be its columns' names. That's a safe assumption for many formats, but Excel spreadsheets often buck that trend, with titles, notes, or other cruft coming before the actual column names.

As previously noted, you can manually edit a column's name manually by pressing :kbd:`^`, or by editing it from the Columns Sheet. But you can also auto-populate column names by doing the following:

- Navigate to the row that contains your desired column names.

- Type :kbd:`g^` to name all *unnamed* columns with the values in this row, or :kbd:`gz^` to name *all* columns (regardless of whether they're already named) with the values in this row.

If you'd like to have VisiData *not* to load the first row as the header, you can do one of the following:

- Pass the ``--header 0`` option when you launch ``vd`` from the command line.

- From within VisiData, do this:

   - Press :kbd:`O` to open the Options Sheet
   - Set the ``header`` option cell to ``0``
   - Press :kbd:`q` to return to your spreadsheet
   - Press :kbd:`Control-r` to reload it
