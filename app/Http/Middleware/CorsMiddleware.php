<?php

namespace CodeShopping\Http\Middleware;

use Closure;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->is('api/*')) {
            header('Access-Control-Allow-Origin: http://localhost:4200' );
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE');
            header('Access-Control-Request-Headers: Content-Type, Authorization');
            header('Access-Control-Request-Method: GET, POST, PUT, PATCH, DELETE');
            header('Access-Control-Expose-Header: Authorization');
        }
        return $next($request);
    }
}
