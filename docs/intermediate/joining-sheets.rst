==============
Joining Sheets
==============

Much like in SQL, VisiData lets you join multiple sheets together.

.. note::

   If this concept is unfamiliar, you can read more about joins `here <https://www.w3schools.com/sql/sql_join.asp>`_ and `also here <https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/>`_.


The sheet-joining three-step
----------------------------

To join two or more sheets in VisiData, you'll do the following:

1. In the sheets you want to join, **mark the shared columns as "keys"**
2. In the Sheets Sheet, **select the sheets you want to join**
3. Press :kbd:`&` to open the join-choice prompt, **navigate to your desired join type** and press :kbd:`Enter`

VisiData supports seven types of joins:

================  ===================  =======================
Join command      SQL equivalent       Description
================  ===================  =======================
inner             ``LEFT INNER JOIN``  Keeps only rows which match keys on all sheets
outer             ``LEFT OUTER JOIN``  Keeps all rows from first selected sheet
full              ``FULL OUTER JOIN``  Keeps all rows from all sheets (union)
diff                                   Keeps only rows NOT in all sheets
append            ``UNION ALL``        Keeps all rows from all sheets (concatenation)
extend                                 Copies first selected sheet, keeping all rows and sheet type, and extends with columns from other sheets
merge                                  Merges differences from other sheets into first sheet
================  ===================  =======================

(Descriptions above come from VisiData's `Quick Reference <http://visidata.org/man/>`_.)


Practical example
-----------------

To see an example of joining in action, see the `Distinctive Birds <../../practical/distinctive-birds/>`_ chapter.
