===============================
Working With Excel Spreadsheets
===============================

Working with Excel spreadsheets in VisiData isn't *much* different than working with CSV files or other tabular data. There are two main differences:

- When you open an Excel file, the first thing you'll see is a listing of the sheets it contains. (Navigate to the sheet you want to explore, and then press :kbd:`Enter` to open it.)

- For a range of reasons, VisiData sheets loaded from Excel won't initially have column names.

How to auto-name unnamed columns
--------------------------------

As previously noted, you can manually edit a column's name by pressing :kbd:`^`, or by editing it from the Columns Sheet. But you can also auto-populate all column names at once by doing the following:

- Navigate to the row that contains your desired column names
- Type :kbd:`g^` to hoist the names into the column header
- Press :kbd:`d` to delete the row
