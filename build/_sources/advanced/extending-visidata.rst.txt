===============================
Extending VisiData With Plugins
===============================

VisiData allows users to extend the program's functionality through plugins. You can `write your own <https://www.visidata.org/docs/api/>`_, or use plugins other people have written. This chapter focuses on incorporating already-written plugins.

Using VisiData's plugin installer
---------------------------------

VisiData provides an interface for installing certain plugins. To open the interface, press :kbd:`Space` to raise the longname-command prompt, type ``open-plugins``, and press :kbd:`Enter`:

.. raw:: html
    :file: ../../terminal/output/extending-03-installer.output.html

To install and *activate* any of these plugins, navigate to its row and press :kbd:`a`. To *deactivate* a plugin, navigate to its row and press :kbd:`d`.


How to install a plugin manually
--------------------------------

You can also manually install plugins that are not available through the installer. Doing so involves two steps:

- First, make the plugin available to VisiData. Depending on the plugin, you'll do this either by saving the plugin file to your ``~/.visidata/`` directory, or by running ``pip install [plugin_package_name]``.

- Then, use your ``~/.visidatarc`` configuration file to import the plugin. If you've saved your plugin as ``~/.visidata/myplugin.py``, all you need to do is add a line that says ``import myplugin``.

Example
^^^^^^^

To demonstrate, let's install `a "dedupe" plugin <https://github.com/jsvine/visidata-plugins>`_:

- Open `this file <https://raw.githubusercontent.com/jsvine/visidata-plugins/master/plugins/dedupe.py>`_ in your browser and save it to ``~/.visidata/dedupe.py`` on your computer.
- Open your ``~/.visidatarc`` file, add ``import dedupe`` on a new line, and save the file.

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
- `ajkerrigan/visidata-plugins <https://github.com/ajkerrigan/visidata-plugins>`_
- `anjakefala/vd-plugins <https://github.com/anjakefala/vd-plugins>`_

.. warning::

   As with any software you download, plugins may contain malicious code. If you're unsure whether a plugin is safe to install, err on the side of caution.

