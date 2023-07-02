<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width">
  <link rel="apple-touch-icon" href="/img/common/apple-touch-icon.png">
  <title><?php echo $title; ?></title>
  <meta name="description" content="<?php echo $description; ?>">
  <meta property="og:title" content="<?php echo $title; ?>">
  <meta property="og:description" content="<?php echo $description; ?>">
  <meta property="og:url" content="<?php echo $siteData["siteInfo"]["siteUrl"] . $siteData["pages"][$pageId]["slug"]; ?>">
  <meta property="og:type" content="<?php echo $siteData["pages"][$pageId]["type"]; ?>">
  <meta property="og:local" content="ja_JP">
  <meta property="og:image" content="/common/og-image.jpg">
  <meta property="og:site_name" content="<?php echo $siteData["siteInfo"]["siteUrl"]; ?> ">
  <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>

<body>
  <script src="../js/index.js"></script>
</body>

</html>
