<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <script>    
            (function() {
                var theLaravel =  Object.freeze({                            
                    base_url : "{{ url('/') }}",                  
                    csrf_token : "{{ csrf_token() }}",                    
                    is_login : "{{ auth()->user() ? 'true' : 'false' }}",
                    is_mobile : "{{ config('app.isMobile') ? 'true' : 'false'}}"
                });

                window.laravel = theLaravel;
            })();
        </script>
    </head>
<body>
    <div id="app"></div>    
    <script src="{{asset('assets/js/user.js')}}"></script>
</body>
</html>