run:
	@./target/release/node-template --dev --ws-external

build:
	@cargo build --release

purge:
	@rm -rf target
	@./target/release/node-template purge-chain --dev

.PHONY: \
	run \
	build \
	purge
