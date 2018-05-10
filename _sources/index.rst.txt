===========================
An Introduction to VisiData
===========================

`VisiData <http://visidata.org/>`_ is a free, open-source tool that lets you **quickly open, explore, summarize, and analyze** datasets in your computer's terminal. VisiData works with CSV files, Excel spreadsheets, SQL databases, and `many other data sources <basics/opening-files/#compatible-filetypes>`_. The interface looks like this:

.. raw:: html
    :file: ../terminal/output/faa-operator-frequency.output.html

Very quickly, VisiData has become the tool I reach for first when I encounter a new dataset. I think you might enjoy it, too.


About This Tutorial
-------------------

.. note::

    This tutorial is not officially affiliated with VisiData, and is not intended as a comprehensive reference. You can learn more about VisiData from these official sources:

    - `VisiData.org <http://visidata.org/>`_
    - `VisiData's GitHub repository <https://github.com/saulpw/visidata>`_


Tutorial Structure
^^^^^^^^^^^^^^^^^^

This tutorial is divided into five sections:

====================== ==================================== ================
Section                Description                          Status
====================== ==================================== ================
The Big Picture        If you read nothing else ...         Draft complete
Basic Usage            All you need to know to get started  Draft complete
Intermediate Usage     Some of the handiest power-features  First three chapters drafted
Advanced Usage         How to bend VisiData to your whims   No draft yet
Practical Examples     Step-by-step walkthroughs            Two examples drafted
====================== ==================================== ================

To be notified of new material and/or major updates, `sign up here <https://tinyletter.com/intro-to-visidata/>`_.

Tutorial Status
^^^^^^^^^^^^^^^

======================  ================
Tutorial last updated   ``2018-05-10``
VisiData version        ``1.2``
======================  ================

About the author
----------------

`Jeremy Singer-Vine <https://www.jsvine.com/>`_ is the `data editor <https://github.com/BuzzFeedNews/everything>`_ at `BuzzFeed News <https://www.buzzfeed.com/news>`_. He also publishes `Data Is Plural <https://tinyletter.com/data-is-plural>`_, a weekly newsletter of useful/curious datasets.

Feedback / questions / corrections?
-----------------------------------

`File an issue on GitHub <https://github.com/jsvine/intro-to-visidata/issues>`_ or email the author at `jsvine@gmail.com <mailto:jsvine@gmail.com>`_.

Acknowledgments
---------------

Many thanks to the following people for their feedback and suggestions: `Saul Pwanson <http://saul.pw/>`_, `Anja Kefala <https://github.com/anjakefala>`_, `John Templon <https://twitter.com/jtemplon>`_, `Scott Pham <https://twitter.com/scottpham>`_.


.. toctree::
    :maxdepth: 1
    :hidden:

    About This Tutorial <self>

.. toctree::
    :caption: The Big Picture
    :maxdepth: 1
    :hidden:

    the-big-picture/what-is-visidata
    the-big-picture/installation
    the-big-picture/visidata-in-60-seconds

.. toctree::
    :caption: Basic Usage
    :maxdepth: 1
    :hidden:

    basics/getting-out-of-trouble
    basics/opening-files
    basics/navigating-visidata
    basics/understanding-sheets
    basics/understanding-rows
    basics/understanding-columns
    basics/sorting-and-filtering
    basics/summarizing-data
    basics/working-with-excel
    basics/saving-sheets

.. toctree::
    :caption: Intermediate Usage
    :maxdepth: 1
    :hidden:

    intermediate/creating-new-columns
    intermediate/joining-sheets
    intermediate/large-files
    intermediate/reshaping-data
    intermediate/reformatting-columns
    intermediate/graphing-in-visidata
    intermediate/the-command-log

.. toctree::
    :caption: Advanced Usage
    :maxdepth: 1
    :hidden:

    advanced/configuring-visidata
    advanced/extending-visidata
    advanced/debugging-visidata

.. toctree::
    :caption: Practical Examples
    :maxdepth: 1
    :hidden:

    practical/high-flying-birds
    practical/distinctive-birds
