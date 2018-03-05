========================
Working With Large Files
========================

VisiData handles moderately large files reasonably well. But if a particularly large file is slowing VisiData down, the tips and tricks below can help.


Select a random sample of rows
------------------------------

In VisiData, you can create a randomly-sampled copy of any sheet. To create a random-sample sheet, press :kbd:`Shift-R`. At the the prompt, type the number of rows you'd like to include, and then press :kbd:`Enter`.



Only load part of the file
--------------------------

If you're only using VisiData to preview a dataset, consider loading just the beginning of the file.


From the command-line
^^^^^^^^^^^^^^^^^^^^^

If you're working with a simple CSV file, you can accomplish this by using ``head`` on the command-line, combined with ``vd -f csv`` e.g.,:

::

   head -n 1000 faa-wildlife-strikes.csv | vd -f csv

That will load the first 1,000 lines of the file. (Because the ``REMARKS`` column contains some newline characters, the 1,000 lines correspond to slightly fewer than 1,000 rows.)

By halting the loading process
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also just press :kbd:`Control-c` while the data is loading, which will halt the loading process. VisiData handles this gracefully, and you can continue using the program just as you would if you hadn't halted the loading proces.

This approach works well if you're using a data source that's more complex than a CSV file, and if you don't care exactly how many lines are loaded.


Caching dynamic columns
-----------------------

Dynamic columns (for instance, those created with the :kbd:`=` command) are calculated "lazily" — i.e., only when they're needed.

If you're running a lot of operations on a dynamic column — perhaps calculating its average, median, and sum — you can save some time by first "caching" it. When you cache a dynamic column, VisiData calculates its current state and never recomputes it.

To cache (or re-cache) a column, navigate to it in your sheet and type :kbd:`z'`.
