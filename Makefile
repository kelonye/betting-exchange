nginx:
	@nginx -s reload

superv:
	@sudo brew services restart supervisor

superc:
	@sudo supervisorctl -c ~/homebrew/etc/supervisord.ini

setup-confs:
	@ln -sf $(PWD)/nginx/nginx.proxy.conf ~/homebrew/etc/nginx/servers/polkadot-betting-exchange.conf
	@mkdir -p ~/homebrew/etc/supervisor.d
	@ln -sf $(PWD)/supervisor/supervisord.ini ~/homebrew/etc/supervisord.ini
	@ln -sf $(PWD)/supervisor/supervisor.d/dev/* ~/homebrew/etc/supervisor.d/

.PHONY: \
	nginx \
	superv \
	superc \
	setup-confs
