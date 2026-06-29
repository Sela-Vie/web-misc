## CHECK PREREQUISITES
| prerequisite | version |
| -------- | -------- |
| php |  8.2-8.4 |
| composer | any ¯\\_(ツ)_/¯ (latest is g i think) |
```
php --version
composer --version
```

## SETUP
#### creating the project

```
composer create-project laravel/laravel <project-name>
```
or
```
composer global require laravel/installer
laravel new <project-name>
```
#### setting up config
```
cd <project-name>

composer install

# copy the .env.example to a .env file
# commands on Windows and Linux/Mac OS respectively
copy .env.example .env
cp .env.example .env

php artisan key:generate
php artisan db:seed
```
#### starting the project
```
php artisan serve
```

## UTILS
#### file templates
```
# making templates for migration, model, and controller with api
php artisan make:model Post -mcr --api

# making migration, model, and controller templates respectively
php artisan make:migration create_posts_table
php artisan make:model Post
php artisan make:controller PostController --api
```
for naming conventions:
***models*** and ***controllers*** use pascal case and singular tense
***migrations*** use snake case and plural tense
stored in 

#### migration

```
# migrate all unmigrated files
# laravel takes note on what files have been migrated already
php artisan migrate

# undos the latest migration set using the down function
php artisan migrate:rollback

# drops all tables and performs all up functions in date sequence
php artisan migrate:refresh
```
#### seeding
```
php artisan db:seed
php artisan db:seed --class=<ClassName>
```

#### libraries
```
# first we add the library
# then we publish it to the vendor
composer require laravel/<package name ex: "sanctum"> 
php artisan vendor:publish --provider=<Provider\ClassPath ex: "Laravel\Sanctum\SanctumServiceProvider">
```

| package | description |
| -------- | -------- |
| sanctum | lightweight authentication package |

```
# alternatively
# this installs sanctum 
# and makes the api file automatically
php artisan install:api
```

---
## CODING
#### API SETUP
add this into the bootstrap/app.php
```
api: __DIR__.'/../routes/api.php'
```

then add this into /database/api.php
```
<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ExampleController;

Route::apiResource('example', ExampleController::class);
```

# phpMyAdmin
i simply used this command and accessed it through localhost:8080

```
docker run -d \
  --name phpmyadmin \
  --network host \
  -e PMA_HOST=127.0.0.1 \
  -e PMA_PORT=3306 \
  -e APACHE_PORT=8080 \
  phpmyadmin:latest
```
im on debian so port 80 wont work for me, it has to be put in port 8080
PMA_PORT is the MySQL port

## LEARNING LARAVEL

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

In addition, [Laracasts](https://laracasts.com) contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

You can also watch bite-sized lessons with real-world projects on [Laravel Learn](https://laravel.com/learn), where you will be guided through building a Laravel application from scratch while learning PHP fundamentals.

## AI AGENTS

Laravel's predictable structure and conventions make it ideal for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install [Laravel Boost](https://laravel.com/docs/ai) to supercharge your AI workflow:

```bash
composer require laravel/boost --dev

php artisan boost:install
```

