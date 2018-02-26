#!/bin/bash
for file in "$@"; do
    echo "<div class='ansi2html'>" > "$file".html;
    echo "<pre>" >> "$file".html;
    ansi2html -p < "$file" >> "$file".html;
    echo "</pre>" >> "$file".html;
    echo "</div>" >> "$file".html;
done
