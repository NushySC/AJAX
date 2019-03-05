
<!-- JS function ajax that would accept 4 arguments: method, url, data, callback function and perform an ajax request. -->


<?php
sleep(2);

$response = [
    'status' => 'error',
    'errors' => [
        'The name must be submitted',
        'I am really tired'
    ]
];
echo json_encode($response);