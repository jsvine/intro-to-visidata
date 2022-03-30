==================
Debugging VisiData
==================

Not everything goes according to plan. To oversimplify somewhat, you may encounter three sources of errors in VisiData:

- **Expected errors**, the result of doing something you know will fail in certain situations.
- **User-generated errors**, the result of issuing commands that are invalid in some way.
- **Bugs**, which stem from problems in VisiData's own source code.

These errors can occur in two different scopes:

- **Cell errors** pertain to specific, individual cells. These are often (but not always) expected errors.
- **General errors** relate not to the data itself, but to broader usage patterns. These are often (but not always) user-generated errors.

This chapter describes how to investigate errors at both scopes. A quick guide:

=================================  =======================
Keystroke(s)                       Action
=================================  =======================
:kbd:`Control-e`                   Examine the latest general error
:kbd:`g` + :kbd:`Control-e`        Examine all general errors encountered
:kbd:`z` + :kbd:`Control-e`        Examine the cell-specific error under your cursor
=================================  =======================


Examining cell errors
---------------------

In the `Understanding Columns <../../basics/understanding-columns/>`_ chapter, we've already seen an example of what a cell-specific error looks like, when we told VisiData that the ``HEIGHT`` column values of the wildlife-strikes dataset should be integers (using :kbd:`#`):

.. raw:: html
    :file: ../../terminal/output/columns-00a-type-assigned.output.html

VisiData obeyed but marked some cells with a ``!`` error/warning annotation — specifically the empty cells, because Python considers it impossible to convert nothingness a whole number.

In some cases, we can intuit why a cell is marked with a ``!``. In other cases, we might want to know more. To do so, navigate to the cell and type :kbd:`z` + :kbd:`Control-e`. If we do this on the second cell of the ``HEIGHT`` column, here's what we'll see:

.. raw:: html
    :file: ../../terminal/output/debugging-01-cell-error.output.html

If you use Python frequently, this output may look familiar; it's the "stack traceback" for the error that VisiData encountered while trying to convert the blank cell (an empty string) to an integer. If you don't use Python frequently or at all, you may still be able to get a sense of the issue at hand; the final line is usually the most descriptive.

The error sheet is like any other sheet in VisiData, so you can quit it and return to the previous sheet by pressing :kbd:`q`.

.. note::

   There are, in fact, two types of cell errors:

   - Errors caused by type conversions, as demonstrated above. VisiData flags these with a **yellow** exclamation mark.
   - Errors stemming from dynamic column expressions, such as ``=HEIGHT / 0``. VisiData flags these with a **red** exclamation mark.


Examining general errors
------------------------

Let's try creating a general error on purpose. Say we want to find all ``OPERATOR`` values with parentheses in them. We might navigate over to that column, press :kbd:`|` to select rows by a pattern, and type ``(`` at the prompt. If we did so, we'd be greeted by an error message at the bottom of the screen:


.. raw:: html
    :file: ../../terminal/output/debugging-02-general-error-status.output.html


Why's that? In Python, these patterns ("regular expressions") treat parentheses as special characters that group other characters, rather than literal parentheses. For every opening parenthesis, valid patterns require a closing parenthesis to match it. Hence, the error message we see at the bottom of the screen, suggesting that we have an "unterminated" pattern that lacks a closing parenthesis. (Python's built-in module for processing regular expressions is named ``re``, hence the ``re.error`` in the message.)

To examine this general error in greater detail, we can press :kbd:`Control-e` — now, or at any point until you trigger another error — to reveal its full traceback in a VisiData text sheet:

.. raw:: html
    :file: ../../terminal/output/debugging-03-general-error-sheet.output.html


.. tip::

   You can type :kbd:`g` + :kbd:`Control-e` to open a sheet listing all general errors you have encountered during your current VisiData session.


How to report a bug
-------------------

If you encounter an error that seems to come from a bug within VisiData itself (rather than an invalid command), follow `VisiData's "Help and Support" instructions <https://github.com/saulpw/visidata#help-and-support>`_. The developers ask that bug reports include a "command log" that reproduces the issue, so that they can investigate it with more precision. The next chapter demonstrates how to do so.
