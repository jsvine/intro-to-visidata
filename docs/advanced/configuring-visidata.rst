====================
Configuring VisiData
====================

VisiData's behavior can be configured several ways:

- ``vd`` command-line arguments
- The global options sheet
- Sheet-specific options sheets
- The ``~/.visidatarc`` file

``vd`` command-line arguments
-----------------------------

When you launch ``vd``, you can specify certain behaviors via arguments on the command-line.

For instance, to tell VisiData to ignore the first three lines of your input file, you'd run the following:

::

   vd my-spreadsheet.csv --skip 3
   

To see the full list of configurable options, run ``vd -h``:


.. raw:: html
    :file: ../../terminal/output/configuring-00-vd-h.output.html

(Press :kbd:`Space` to scroll down the list.)

The global options sheet
------------------------

You can also set most of the same options, plus additional color/display options, through the "global options sheet". To launch that sheet, press :kbd:`Shift-O`. You should see something like this:

.. raw:: html
    :file: ../../terminal/output/configuring-01-global-options.output.html

To customize an option navigate to the ``global_value`` cell in the option's row, and press :kbd:`e` to edit it, like you would with any other cell in VisiData.

For example, to change VisiData's default column width from 20 to 10, navigate down to the ``default_width`` row, over to the ``global_value`` cell, press :kbd:`e`, type ``10``, and then press :kbd:`Enter`. Once you do, the global options sheet should look like this:

.. raw:: html
    :file: ../../terminal/output/configuring-02-global-edited.output.html

As with any other sheet, you can leave the global options sheet, and return to your previous sheet, by pressing :kbd:`q`.


Sheet-specific options sheets
-----------------------------

As the name suggests, the changes you make on the *global* options sheet affect your entire VisiData session. To change VisiData's behavior for just one sheet, type :kbd:`zO` to edit the "sheet options sheet":

.. raw:: html
    :file: ../../terminal/output/configuring-03-sheet-options.output.html

It the sheet options sheet operates just like the global options sheet, but applies only to the sheet you were on when you typed :kbd:`zO`.


The ``~/.visidatarc`` file
--------------------------

The approaches above all affect only your current VisiData session. When you quit VisiData, those customizations evaporate.

To persist your customizations from session to session, you can specify them in your computer's ``~/.visidatarc`` file.

Open that file in the editor of your choosing and, for each option you wish to modify, write ``options.my_example_option = my_custom_value``.

For instance:

::

   options.default_width = 10
   options.encoding = "latin-1"
   options.bulk_select_clear = True

... and then save the file. Next time you run VisiData, these options will take effect.

.. note::

   The ``~/.visidatarc`` file expects its commands to be written in Python. For basic options-setting, it doesn't matter too much whether you know Python, as long as you follow the pattern in the example above. Numbers can be written plainly, strings of characters should be wrapped in quotation marks, and ``True``/``False`` values need to be written exactly as such.

.. tip::

   If you know Python and are willing to acquaint yourself with `VisiData's architecture <https://github.com/saulpw/visidata/>`_, you can use your ``~/.visidatarc`` file to customize VisiData in ways far more powerful than simple option-setting — including `creating your own commands <https://github.com/saulpw/visidata/blob/stable/docs/customize.md#how-to-configure-commands>`_.
