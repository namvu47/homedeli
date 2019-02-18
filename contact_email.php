<?php

if (!isset($_REQUEST['safety_key'])) {

    die();
}

// Admin Email.

$to = "cskh@homedeli.vn"; // write you email address in here.
// Fetching Values from URL.

$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];
$user_email = $_POST['user_email'];
$user_phone = $_POST['user_phone'];
$email_subject = $_POST['email_subject'];
$email_message = $_POST['email_message'];

$template = '<div>Hello ' . $user_name . ',<br/>'
        . '<br/>Thank you...! For Contacting Us.<br/><br/>'
        . 'Name:' . $user_name . '<br/>'
        . 'Phone:' . $user_phone . '<br/>'
        . 'Email:' . $user_email . '<br/>'
        . 'Message:' . $email_message . '<br/><br/>'
        . 'This is a Contact Confirmation mail.'
        . '<br/>'
        . 'We Will contact You as soon as possible .</div>';
$message = "<div>" . $template . "</div>";


$headers = 'MIME-Version: 1.0' . "\r\n";
$headers.='Content-type: text/html; charset=utf-8; charset=iso-8859-1' . "\r\n";
$headers.='From:' . $user_email . "\r\n"; // Sender's Email
mail($to, $email_subject, $message, $headers, '');

$data = array(
    'status' => 1,
    'msg' => "Cảm ơn Quý khách hàng đã quan tâm và sử dụng dịch vụ của HOMEDELI. Nhân viên của chúng tôi sẽ liên hệ lại với Quý khách để tư vấn và cung cấp dịch vụ sau ít phút."
);

echo json_encode($data);