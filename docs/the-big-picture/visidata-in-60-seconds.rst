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


Step 3: Explore the menu
------------------------

Pressing :kbd:`Control-h` will open VisiData's menu system, where you can explore the most common commands:

.. raw:: html
    :file: ../../terminal/output/faa-menu.output.html

You can navigate the menu either with your arrow keys or by pointing and clicking with your mouse. To run a command from the menu, press :kbd:`Enter` or click a second time on the selected item.
