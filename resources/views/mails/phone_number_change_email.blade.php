@component('mail::message')
# Mudança de número de telefone

Uma mudança de número de telefone foi solicitada.
Clique no link abaixo para validar.

@component('mail::button', ['url' => $url])
Validar Telefone
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
