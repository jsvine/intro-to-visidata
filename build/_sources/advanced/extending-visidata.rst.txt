===============================
Extending VisiData With Plugins
===============================

As of `version 1.5 <https://github.com/saulpw/visidata/releases/tag/v1.5>`_, VisiData now supports plugins, which let you easily incorporate features that other people have written, and to write your own. This chapter focuses on incorporating already-written plugins.

How to install a plugin
-----------------------

Installing a plugin involves two main steps.

First, make the plugin available to VisiData. Depending on the plugin, you'll do this either by saving the plugin file to your ``~/.visidata/`` directory, or by running ``pip install [plugin_package_name]``.

Then, use your ``~/.visidatarc`` configuration file to import the plugin. If you've saved your plugin as ``~/.visidata/myplugin.py``, all you need to do is add a line that says ``import myplugin``.

Example
^^^^^^^

To demonstrate, let's install `the "vddedupe" plugin <https://github.com/jsvine/visidata-plugins>`_:

- Open `this file <https://raw.githubusercontent.com/jsvine/visidata-plugins/master/plugins/vddedupe.py>`_ in your browser and save it to ``~/.visidata/vddedupe.py`` on your computer.
- Open your ``~/.visidatarc`` file, add ``import vddedupe`` on a new line, and save the file.

That's it. Next time you start VisiData, you should have access to two new commands: ``select-duplicate-rows`` and ``dedupe-rows``.

Let's give the plugin a spin. Download :download:`dedupe-example.csv <../../datasets/dedupe-example.csv>` and open it in VisiData:

::

   vd dedupe-example.csv

You should see this:

.. raw:: html
    :file: ../../terminal/output/extending-00-example.output.html

Press :kbd:`Space` to initiate the longname-command prompt, and type ``dedupe-rows``:

.. raw:: html
    :file: ../../terminal/output/extending-01-longname.output.html

Press :kbd:`Enter` to execute the command. Now you should see a new copy of the sheet, but with the duplicate row removed:

.. raw:: html
    :file: ../../terminal/output/extending-02-deduped.output.html


Where to find plugins
---------------------

Plugin support is a relatively new feature of VisiData, so there aren't many public plugins yet available. Here is a (likely incomplete) list of resources:

- `jsvine/visidata-plugins <https://github.com/jsvine/visidata-plugins>`_
- `anjakefala/vd-plugins <https://github.com/anjakefala/vd-plugins>`_

.. warning::

   As with any software you download, plugins may contain malicious code. If you're unsure whether a plugin is safe to install, err on the side of caution.

