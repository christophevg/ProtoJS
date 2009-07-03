COMPRESSOR-VERSION=2.4.2
COMPRESSOR-DIST=yuicompressor-${COMPRESSOR-VERSION}.zip
COMPRESSOR-URL=http://www.julienlecomte.net/yuicompressor/${COMPRESSOR-DIST}
COMPRESS-JAR=lib/yuicompressor-${COMPRESSOR-VERSION}/build/yuicompressor-${COMPRESSOR-VERSION}.jar

MAKE=make
FETCH=wget -q
GIT-PULL=git pull -q
GIT-CLONE=git clone -q
ZIP=zip -qr
UNZIP=unzip -q
UNTAR=tar -zxf
COMPRESS=java -jar ${COMPRESS-JAR} --type js
PATCH=patch -N -s

APP=ProtoJS
TARGETS=build/${APP}.min.js
SRCS=src/ProtoJS.js \
     src/Event.js \
     src/Mixin.js \
     src/Object.js \
     src/String.js \
     src/Number.js \
     src/Class.js \
     src/Array.js \
     src/Hash.js \
     src/Function.js \
     src/Ajax.js

VERSION=$(shell git describe --tags | cut -d'-' -f1,2)
LIBS=

DIST=${APP}-${VERSION}.zip
DISTSRCS=${TARGETS} examples/*.html LICENSE README

DIST-SRC=${APP}-${VERSION}-src.zip
DIST-SRCSRCS=LICENSE README examples Makefile doc src

all: build

build: .check-deps ${TARGETS}

.check-deps:
	@echo "*** checking dependencies"
	@echo "    (if you get errors in this section the cmd right before"
	@echo "     the error, is not found in your PATH)"
	@echo "    - zip"; which zip >/dev/null
	@echo "    - touch"; which touch >/dev/null
	@echo "    - unzip"; which unzip >/dev/null
	@echo "    - wget";  which wget >/dev/null
	@echo "    - git"; which git >/dev/null
	@echo "    - patch"; which patch >/dev/null
	@echo "    - java";  which java >/dev/null
	@echo "*** FOUND all required commands on your system"
	@touch $@

dist: dist/${DIST} dist/${DIST-SRC} dist/${DIST-EXT}

update-libs:

${COMPRESS-JAR}:
	@echo "*** importing yuicompressor"
	@mkdir -p lib
	@(cd lib; ${FETCH} ${COMPRESSOR-URL}; ${UNZIP} ${COMPRESSOR-DIST})
	@(cd lib/yuicompressor-${COMPRESSOR-VERSION}; ant > /dev/null)

build/${APP}.js: ${SRCS}
	@echo "*** building $@"
	@mkdir -p build
	@cat ${SRCS} > $@
	@echo "\nProtoJS.version = \"${VERSION}\";\n" >> $@;

build/${APP}.min.js: build/${APP}.js ${COMPRESS-JAR}
	@echo "*** building $@"
	@${COMPRESS} build/${APP}.js > $@

dist/${DIST}: ${DISTSRCS}
	@echo "*** packaging ${APP} distribution"
	@mkdir -p dist/js/${APP}/{examples,build}
	@for f in ${DISTSRCS}; do \
	    cat $$f | sed -e 's/\.\.\/build/../' > dist/js/${APP}/$$f; done
	@mv dist/js/${APP}/build/* dist/js/${APP}/; rm -rf dist/js/${APP}/build
	@(cd dist/js; ${ZIP} ../${DIST} ${APP})

dist/${DIST-SRC}: ${DIST-SRCSRCS}
	@echo "*** packaging ${APP} src distribution"
	@mkdir -p dist/src/${APP}
	@cp -r ${DIST-SRCSRCS} dist/src/${APP}
	@(cd dist/src; ${ZIP} ../${DIST-SRC} ${APP})

clean:
	@find . | grep "~$$" | xargs rm -f
	@rm -f lib/*.rej
	@rm -rf build dist

mrproper: clean
	@rm -rf lib
