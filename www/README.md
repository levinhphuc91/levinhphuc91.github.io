To run my project:
1. You must clone this repository to your local PC/server, ... .
2. Run bower install to add some dependency packages.
3. (*) If you're using Apache server, you can copy then paste below code into httpd-vhosts.conf

<VirtualHost *:80>
    ServerName fram.vn
    DocumentRoot D:/Frontend/Fram/www
    SetEnv APPLICATION_ENV "development"
    <Directory D:/Frontend/Fram/www>
        DirectoryIndex index.html
        Require all granted
        Order allow,deny
        Allow from all
		RewriteEngine on

        # Don't rewrite files or directories
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]

        # Rewrite everything else to index.html to allow html5 state links
        RewriteRule ^ index.html [L]
    </Directory>
</VirtualHost>

For ServerName fram.vn is local domain that you configure in C:\Windows\System32\drivers\etc\hosts
127.0.0.1 fram.vn
::1 fram.vn
D:/Frontend/Fram: put the source code here.

On Chrome browser (on PC) install this plugin:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog

(*) More information:
https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode