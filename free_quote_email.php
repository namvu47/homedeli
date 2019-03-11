<?php

include 'smtp.php';

if (!isset($_REQUEST['safety_key'])) {

    die();
}

// Admin Email.

$to = "cskh@homedeli.vn"; // write your email address in here.
// Fetching Values from URL.

$email_subject = "[HomeDeli] Thông tin Yêu cầu";

$move_from = isset( $_POST['move_from'] ) ? $_POST['move_from'] : '';
$move_to = isset( $_POST['move_to'] ) ? $_POST['move_to'] : '';
$moving_size = isset( $_POST['moving_size'] ) ? $_POST['moving_size'] : '';
$your_date = isset( $_POST['your_date'] ) ? $_POST['your_date'] : '';
$your_name = isset( $_POST['your_name'] ) ? $_POST['your_name'] : '';
$your_date = isset( $_POST['your_date'] ) ? $_POST['your_date'] : '';
$your_email = isset( $_POST['your_email'] ) ? $_POST['your_email'] : '';
$your_phone = isset( $_POST['your_phone'] ) ? $_POST['your_phone'] : '';
$your_comment = isset( $_POST['your_comment'] ) ? $_POST['your_comment'] : '';

 
$your_name = $_POST['your_name'];
$your_email = $_POST['your_email'];
$your_phone = $_POST['your_phone'];

$template = '<div>HomeDeli Kính chào Anh/ Chị ' . $your_name . ',<br/>'
        . '<br/>Xin chân thành cảm ơn Anh chị vì đã quan tâm tới dịch vụ của HomeDeli<br/><br/>'
        . 'Điểm đi:' . $move_from . '<br/>'
        . 'Điểm đến:' . $move_to . '<br/>'
        . 'Kích thước căn hộ:' . $moving_size . '<br/>'
        . 'Ngày giờ chuyển:' . $your_date . '<br/>'
        . 'Họ tên:' . $your_name . '<br/>'
        . 'Email:' . $your_email . '<br/>'
        . 'Số điện thoại:' . $your_phone . '<br/><br/>'
        . 'Mô tả chi tiết: ' . $your_comment . '<br/><br/>'
		. 'Mô tả chi tiết: ' . $your_comment . '<br/><br/>'
$message = "<div>" . $template . "</div>";


$headers = 'MIME-Version: 1.0' . "\r\n";
$headers.='Content-type: text/html; charset=utf-8; charset=iso-8859-1' . "\r\n";
$headers.='From:' . $your_email . "\r\n"; // Sender's Email
$headers .= 'Cc:' . $your_email . "\r\n";
SendMail($your_email, $to,  $email_subject, $message,$header);

$data = array(
    'status' => 1,
    'msg' => "Cảm ơn Quý khách hàng đã quan tâm và sử dụng dịch vụ của HOMEDELI. Nhân viên của chúng tôi sẽ liên hệ lại với Quý khách để tư vấn và cung cấp dịch vụ sau ít phút."
);

echo json_encode($data);