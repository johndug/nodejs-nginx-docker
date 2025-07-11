FROM php:apache

RUN docker-php-ext-install pdo pdo_mysql

COPY ./app /var/www/html/

EXPOSE 80

CMD ["apache2-foreground"]