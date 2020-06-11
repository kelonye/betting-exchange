run: node_modules
	@yarn start

deploy:
	@yarn build
	@surge -d https://betting-exchange-admin.surge.sh -p build

node_modules:
	@yarn

.PHONY: \
	run \
	deploy
