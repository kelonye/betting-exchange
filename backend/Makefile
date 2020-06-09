run:
	cargo build --release
	./target/release/node-template --dev --ws-external

purge:
	rm -rf target
	./target/release/node-template purge-chain --dev

.PHONY: purge run