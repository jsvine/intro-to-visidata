import dedupe
import visidata
import traceback
import re
import os
import sys
from pathlib import Path

#venv_path = Path.cwd() # / "venv"

# visidata_path = os.path.dirname(visidata.__path__[0])

def replace_paths(lines):
    def fn(match):
        path = os.path.abspath(match.group(1))
        base = os.path.commonpath([ path, sys.executable ])
        rel = os.path.relpath(path, base)
        return f'File "{rel}"'
    lines = [re.sub(r'File "([^"]+)"', fn, line, 1) for line in lines]
    return lines

def stacktrace(e=None):
    if not e:
        return replace_paths(traceback.format_exc().strip().splitlines())
    return replace_paths(traceback.format_exception_only(type(e), e).splitlines())

visidata.errors.stacktrace = stacktrace
