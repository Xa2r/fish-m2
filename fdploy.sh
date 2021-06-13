#!/bin/bash
echo "starting deployment"
echo "remove var" 
rm -rf var/di var/generation/ var/page_cache/ var/report/ var/view_preprocessed var/cache/ var/tmp/
echo "stating deploy static files" 
rm -rf pub/static/*
php7.2 bin/magento setup:upgrade
php7.2 bin/magento setup:di:compile
#php7.2 bin/magento setup:static-content:deploy --area adminhtml 
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --area adminhtml --language en_AU en_US -f
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --area adminhtml --language en_US
 # php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Pearl/weltpixel --language en_AU
#php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Pearl/weltpixel --language en_US
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Pearl/weltpixel_custom --language en_AU
#php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Pearl/weltpixel_custom --language en_US
php7.2 bin/magento setup:static-content:deploy -f en_US id_ID
#php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme ForcastPearl/default --language en_US
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Forcast/default --language en_AU
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Forcast/default --language en_US
# php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy --theme Magento/luma --language en_AU en_US -f
#php7.2 -dmemory_limit=512M bin/magento setup:static-content:deploy en_AU
echo "clear cache" 
# php7.2 bin/magento weltpixel:less:generate
# php7.2 bin/magento weltpixel:css:generate --store=default
php7.2 bin/magento cache:flush
chmod -R 777 pub/ var/ generated/
echo "Deployment done" 
echo 'Deployment Forcast done' 
