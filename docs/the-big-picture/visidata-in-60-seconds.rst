======================
VisiData In 60 Seconds
======================

TL;DR? Here's a three-step introduction to VisiData.


Step 1: Use ``vd`` to open a data file
--------------------------------------

Download :download:`faa-wildlife-strikes.csv <../../datasets/faa-wildlife-strikes.csv>`, a dataset of all aircraft-wildlife collisions `reported to the Federal Aviation Administration <https://wildlife.faa.gov/database.aspx>`_ between 2010 and mid-2016. 

From your terminal, move into the directory where you downloaded the dataset. Then run the following command:

::

    vd faa-wildlife-strikes.csv


If it worked, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/faa-opened.output.html


Step 2: Test-drive a frequency table
------------------------------------

One of VisiData's strengths is how quickly it lets you summarize your data. Frequency tables are a great example. To create one, press :kbd:`Shift+F`.

If it worked, you should see something like this:

.. raw:: html
    :file: ../../terminal/output/faa-operator-frequency.output.html


Step 3: Read VisiData's manual page
-----------------------------------

VisiData's "`quick reference guide <http://visidata.org/man/>`_" enumerates all of VisiData's commands and features. You can `read it online <http://visidata.org/man/>`_ or access it from anywhere within VisiData by pressing the :kbd:`F1` key or typing :kbd:`Control-h`:

.. raw:: html
    :file: ../../terminal/output/faa-manpage.output.html

.. note::

    If you open the manual from within VisiData it will launch in your terminal's "pager" program — typically the `less program <https://en.wikipedia.org/wiki/Less_(Unix)>`_. To move around:
    
    =======================================  =======================
    Keystroke(s)                             Action
    =======================================  =======================
    :kbd:`Space` / :kbd:`b`                  Scroll forward/backward
    :kbd:`/` + *search term* + :kbd:`Enter`  Search for *search term*
    :kbd:`n` / :kbd:`N`                      Go to next/previous search match
    :kbd:`q`                                 Exit and return to VisiData
    =======================================  =======================

    You can find additional commands `here <https://en.wikipedia.org/wiki/Less_(Unix)#Frequently_used_commands>`_.
