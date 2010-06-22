APP         = ProtoJS
BUILD_STYLE = simple

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

#############################################################################
# boilerplate to kickstart common.make

have-common := $(wildcard lib/common.make/Makefile.inc)
ifeq ($(strip $(have-common)),)
all:
	@echo "*** one-time initialization of common.make"
	@git submodule -q init
	@git submodule -q update
	@$(MAKE) -s $@
endif

-include lib/common.make/Makefile.inc
