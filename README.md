## ======= To install and use laravel 8 with Vue ===========

composer create-project laravel/laravel example-app

### if php missing error

sudo apt install php-xml

cd /example-app

### The Bootstrap and Vue scaffolding provided by Laravel is located in the laravel/ui Composer package, which may be installed using Composer:

composer require laravel/ui

### to set up vue

php artisan ui vue

### to ensure vue router works

npm install vue-router

### to install the newly added dependencies and compile them

npm install && npm run dev

php artisan serve

### auto compile

npm run watch

### installing bootstrap vue so we can import it in our templates

npm install vue bootstrap bootstrap-vue

### when uploading to hostinger

make sure to `run npm prod`

upload new files to respective directories

and the new files created from running previous comman, `app.js` and `app.css`, to put them in `public_html/js` or `public_html/css` 