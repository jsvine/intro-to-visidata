default:

clean:
	rm -rf build/*

html:
	sphinx-build -b dirhtml docs build

html-full:
	find build -maxdepth 1 -mindepth 1 -exec rm -r {} \;
	sphinx-build -a -b dirhtml docs build

serve:
	cd build && python3 -m http.server --bind localhost 7154

gh-pages:
	git subtree push --prefix build origin gh-pages

terminal/output: Pipfile.lock terminal/scripts
	rm terminal/output/*
	./scripts/termscript_all.sh
	./scripts/output2html_all.sh
