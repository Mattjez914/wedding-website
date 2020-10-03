cd /home/ubuntu/wedding-website
git reset --hard
git pull origin master

sudo npm i
sudo npm run build 
pm2 restart server