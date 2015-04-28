<?php
header('Content-disposition: attachment; filename=../doc/cv.pdf');
header('Content-type: application/pdf');
readfile('../doc/cv.pdf');
?>
