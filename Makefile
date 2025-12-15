all: dev

dev: 
	rm -rf public/
	typst w resume/resume.typ
	hugo server --buildDrafts

build:
	hugo

archive:
	rm site.tar.gz
	tar -C public -cvz . > site.tar.gz

publish:

production: build archive publish
