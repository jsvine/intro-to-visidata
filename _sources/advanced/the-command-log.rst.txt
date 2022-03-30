===============
The Command Log
===============

As you use VisiData, it generates a temporary log of every modifying command you've run. This "command log" can assist you with a few things:

- Seeing what you've done during a VisiData session
- Saving that history (so that you can use it later or share it with others)
- Replaying those commands

This chapter walks you through each of these steps.


Viewing the command log
-----------------------

From anywhere within VisiData, you can press :kbd:`D` to view the command log relevant to your current sheet. It ignores actions you may have taken outside of the current sheet's direct lineage. Essentially, it answers the question: What steps did I take to get here?

Let's start with a simple example, following these steps:

- Initiate a fresh VisiData session with ``vd faa-wildlife-strikes.csv``
- Rename the sheet to ``strikes``: Press :kbd:`Space` to raise the type-a-command prompt, type ``rename-sheet``, press :kbd:`Enter`, and type ``strikes``, and then press :kbd:`Enter` again
- Navigate to the ``AIRPORT`` column
- Press :kbd:`F` to generate a frequency sheet of the ``AIRPORT`` columns
- Navigate to the sixth row, and press :kbd:`s` to select it

You should see something like this:

.. raw:: html
    :file: ../../terminal/output/cmdlog-00-freq.output.html

Now press :kbd:`D` to open the command log for this sheet:

.. raw:: html
    :file: ../../terminal/output/cmdlog-01-simple-log.output.html

Two things you'll see that you might not have expected:

- The command to open ``faa-wildlife-strikes.csv`` appears in the log, with "longname" ``open-file``. Passing filenames to VisiData on the command line is equivalent to opening them *within* the program via ``open-file`` or keyboard shortcut :kbd:`o`.
- Navigational commands do *not* appear in the command log. The reason: Navigating around a sheet doesn't alter its contents. For the frequency sheet (``freq-col``) and row-selection (``select-row``) commands, VisiData has captured the necessary context via the log's ``col`` and ``row`` columns.


Saving the command log
----------------------

The command log behaves *virtually* the same as any other sheet in VisiData. That means you can sort, filter, and otherwise edit its rows, columns, and cells. That also means you can save just like you'd save any other sheet, with :kbd:`Control-s`. Doing so with the example above should raise a prompt that looks like this:

.. raw:: html
    :file: ../../terminal/output/cmdlog-02-save-ctrl-s.output.html

As you'll see, VisiData suggests its own ``.vd`` file extension. That helps distinguish command logs from other files, but it's not necessary. It's just a tab-separated-values file, and you can save it with the ``.tsv`` extension if you prefer. For the sake of the subsequent steps in this tutorial, let's save it as ``example-cmdlog.vd``, in the same directory as ``faa-wildlife-strikes.csv``.


Replaying the full command log
------------------------------

To fully replay the ``example-cmdlog.vd`` log we saved in the section above, run the following command from your computer's terminal:

::

    vd --play example-cmdlog.vd

Note that, this time, we don't point VisiData to the dataset itself, since that information (the path to the dataset) is now specified within the command log. If the replay worked, you should see VisiData advance through each step (some more quickly than others), ultimately arriving at the result you previously obtained manually:

.. raw:: html
    :file: ../../terminal/output/cmdlog-03-replay-all.output.html

You can adjust the replay behavior via various command line arguments, such as:

::

   vd --play example-cmdlog.vd --replay-wait 2

... which will pause two seconds between each of the logged steps. And:

::

   vd --play example-cmdlog.vd --batch --output cmdlog-results.csv

... which will replay the command log in "batch" mode (displaying status messages but not the full VisiData interface) and, when complete, will save the final sheet to ``cmdlog-results.csv``.


Sharing command logs on GitHub
------------------------------

Command logs can help you demonstrate specific VisiData behavior to others, especially if that behavior involves more than a few steps. You'll want to do this, for instance, when filing potential bug reports `via VisiData's GitHub repository <https://github.com/saulpw/visidata/#help-and-support>`_. Some advice for doing so:

- When attaching a command log to a GitHub issue or comment, you'll need to change the file extension, since GitHub will reject fileames ending in ``.vd``. The developers recommend appending ``.txt`` to the filename; in the example above, that would be ``example-cmdlog.vd.txt``. 

- If replaying the command log requires a specific dataset, attach that dataset in the same message and aim to make it as simple as possible. Alternatively, you can use a dataset from VisiData's `sample_data directory <https://github.com/saulpw/visidata/tree/stable/sample_data>`_ (for instance, as done in `this issue <https://github.com/saulpw/visidata/issues/1315>`_).
