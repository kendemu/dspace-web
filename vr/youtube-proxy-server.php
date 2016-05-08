<?php

  ytVideoUrlMatcher = 'url_encoded_fmt_stream_map=url=([^&]*)&';
  ytVideoInfoUrlBase = 'http://www.youtube.com/get_video_info?html5=1&video_id=';

  function getHTML5VideoFileFromYouTube($videoId){
    $curl = curl_init();
    $videoInfoUrl = $ytVideoInfoUrlBase + $videoId;
    curl_setopt ($curl, CURLOPT_URL, $videoInfoUrl);
    $result = curl_exec ($curl);
    videoInfo = urldecode($result);

    $vidMatch = preg_match_all(ytVideoUrlMatcher, videoInfo);
    $videoUrl = $vidMatch[0][0];
    $videoUrl = urldecode($videoUrl);

    curl_setopt($curl, CURLOPT_URL, $videoUrl);
    return curl_exec($videoUrl);
  }

?>
