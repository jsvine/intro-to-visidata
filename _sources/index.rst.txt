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

    - `VisiData.org <https://visidata.org/>`_
    - `VisiData's GitHub repository <https://github.com/saulpw/visidata>`_
    - `Saul Pwanson's Patreon page <https://www.patreon.com/saulpw>`_
    - `Saul Pwanson's case studies on YouTube <https://www.youtube.com/playlist?list=PLxu7QdBkC7drrAGfYzatPGVHIpv4Et46W>`_


Tutorial Structure
^^^^^^^^^^^^^^^^^^

This tutorial is divided into five sections:

====================== ==================================== ================
Section                Description                          Status
====================== ==================================== ================
The Big Picture        If you read nothing else ...         Draft complete
Basic Usage            All you need to know to get started  Draft complete
Intermediate Usage     Some of the handiest power-features  Draft complete
Advanced Usage         How to bend VisiData to your whims   Four chapters drafted
Practical Examples     Step-by-step walkthroughs            Two examples drafted
====================== ==================================== ================

To be notified of new material and/or major updates, `sign up here <https://buttondown.email/intro-to-visidata>`_.

Tutorial Status
^^^^^^^^^^^^^^^

======================  ================
Tutorial last updated   ``2024-03-08``
VisiData version        ``3.0.2``
======================  ================

About the author
----------------

`Jeremy Singer-Vine <https://www.jsvine.com/>`_ is a journalist, computer programmer, and data editor based in New York City. 

Feedback / questions / corrections?
-----------------------------------

`File an issue on GitHub <https://github.com/jsvine/intro-to-visidata/issues>`_ or email the author at `jsvine@gmail.com <mailto:jsvine@gmail.com>`_.

Acknowledgments
---------------

Many thanks to the following people for their feedback, suggestions, and fixes: `Saul Pwanson <http://saul.pw/>`_, `Anja Kefala <https://github.com/anjakefala>`_, `John Templon <https://twitter.com/jtemplon>`_, `Scott Pham <https://twitter.com/scottpham>`_, `Andrea Borruso <https://github.com/aborruso>`_, `Felix Rosencrantz <https://github.com/frosencrantz>`_, `Ram Rachum <https://github.com/cool-RR>`_, `Ezequiel Garzon <https://github.com/ezequiel-garzon>`_, `Joseph Reagle <https://github.com/reagle>`_, `David Wales <https://github.com/daviewales>`_, `@rschwiebert <https://github.com/rschwiebert>`_, `Martin Häcker <https://github.com/dwt>`_.


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
    intermediate/reshaping-data
    intermediate/large-cells
    intermediate/large-files

.. toctree::
    :caption: Advanced Usage
    :maxdepth: 1
    :hidden:

    advanced/configuring-visidata
    advanced/extending-visidata
    advanced/debugging-visidata
    advanced/the-command-log

.. toctree::
    :caption: Practical Examples
    :maxdepth: 1
    :hidden:

    practical/high-flying-birds
    practical/distinctive-birds
