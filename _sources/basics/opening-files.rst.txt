=============
Opening Files
=============

The first skill we'll learn is the most basic: How to open (and close) a dataset in VisiData.

How to open a file
------------------

The easiest way to open a dataset in VisiData is to specify it directly when invoking ``vd``, like so:

::

    vd faa-wildlife-strikes.csv

If you've downloaded the :download:`faa-wildlife-strikes.csv <../../datasets/faa-wildlife-strikes.csv>` file, and you run the command above, you should see this:

.. raw:: html
    :file: ../../terminal/output/faa-opened.output.html

Let's break it down:

- Top row
    - Displays your dataset's columns — at least as many as can fit on your screen.
- Bottom row
    - Tells you what dataset you're viewing (``faa-wildlife-strikes`` on the far left), some status information, and the number of rows.

- Highlighted column and row
    - Indicate your current position in the dataset.

.. note::

    Depending on the width and height of your terminal, you'll see more/fewer columns and rows.


How to close a file
-------------------

If you've just opened a single file, you can close it by typing :kbd:`q`.

If you've opened a collection of files — more on that later — you can close them all at once by typing :kbd:`gq`.


How to specify the file's format
--------------------------------

VisiData guesses which kind of file you're trying to open based on the file's extension. For instance, it will try to open ``my-csv-data.xlsx`` as an Excel file. To override that default, specify the filetype with the ``--filetype`` flag. For instance:

::

    vd my-csv-data.xlsx --filetype csv


You can also use the shorter ``-f`` flag:

::

    vd my-csv-data.xlsx -f csv


.. _compatible-filetypes:

Compatible filetypes
--------------------

VisiData can open a range of filetypes, including:

Tabular data
^^^^^^^^^^^^

- CSV files, and any other delimiter-separated formats
- Excel spreadsheets (requires ``pip3 install xlrd openpyxl``)
- Fixed-width files
- SQLite databases
- Postgres databases (requires ``pip3 install psycopg2``)
- HDF5 files (requires ``pip3 install h5py``)
- .sas7bdat files (requires ``pip3 install sas7bdat``)
- .xpt files (requires ``pip3 install xport``)
- .sav files (requires ``pip3 install savReaderWriter``)
- .dta files (requires ``pip3 install pandas``)

Geospatial data
^^^^^^^^^^^^^^^

- Shapefiles (requires ``pip3 install pyshp``)
- MBTiles (requires ``pip3 install mapbox-vector-tile``)

Directories
^^^^^^^^^^^

- Standard Unix directories
- ZIP files

Misc.
^^^^^

- JSON / JSONL
- HTML (looks for ``<table>`` tags; requires ``pip3 install lxml``)
- Website URLs (downloads the HTML, and then looks for ``<table>`` tags; requires ``pip3 install lxml``)
