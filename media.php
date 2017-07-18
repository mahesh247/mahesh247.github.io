<?php

$user = $_GET['user'];
$count = $_GET['count'];
if( isset( $_GET['max_id'] ) ) {
	$max_id = $_GET['max_id'];
}
//die($count);
$data = get_media( 'public', $user, $count, $max_id );
echo '<pre>'; print_r($data);

function get_media( $type, $user = null, $count = null, $max_id = null ) {
	//die('assdfsdf');
	$username = strtolower( $user );
	$public_url = 'http://instagram.com/';
	/*if ( isset( $_POST['pagination_link'] ) ) {
		$url = $_POST['pagination_link'];
	} else {
		$username = strtolower( $user ); // sanitization

		$url = $public_url . esc_html( $username ) . '/media?&count=' . absint( $count );
    }*/
    $max_id;

    if ( null != $max_id ) {
    	$max = 'max_id=' . $max_id;
    }
    //die($max_id);

    $url = $public_url . $username . '/media?' . $max;
	//die($url);

    $json = get_remote_data_from_instagram_in_json( $url, $count, $username );
    //echo '<pre>'; print_r($json); die();
    return $json;
}

function get_remote_data_from_instagram_in_json( $url, $count, $username ) {
	//die($url);
    $content = file_get_contents( $url );
    //echo '<pre>'; print_r( $content ); die();
    if ( isset( $content->errors ) ) {
        $content = array(
        	'meta' => array(
        		'error_message' => $content->errors['http_request_failed']['0'],
        		 ),
        	);
        return $content;
    } else if ( '404' == $content['response']['code'] ) {
    	$content = array(
        	'meta' => array(
        		'error_message' => 'Invalid User',
        		 ),
        	);
        return $content;
	} else {
		$response = ( $content );
		$json     = json_decode( $response, true );
		//print_r($json); die();
		$response = handle_json( $json, $count, $username );
		return $response;
    }
}

function handle_json( $json, $count, $username ) {
	$public_url   = 'http://instagram.com/';
	$offset = 0;
	$data = array_slice( $json['items'], $offset, $count );
	$post_returned = sizeof( $data );
	$max_id = $data[ $post_returned - 1 ]['id'];

	$get_more_link = $public_url . $username . '/media?count=' . $count . '&max_id=' . $max_id;
	$next_url = '//localhost/instagram/'. 'index.php?user=' . $username . '&count=' . $count . '&max_id=' . $max_id;
	$more = get_next( $get_more_link );
	if( 0 < $more ) {
		//echo '<pre>';
		$json['pagination']['next_url'] = $next_url;
	}
	unset($json['items']);
	$json['items'] = $data;
	/*print_r($json); die();*/
	return $json;
}

function get_next( $get_more_link ) {
	$content = file_get_contents( $get_more_link );
	$response = ( $content );
	$json     = json_decode( $response, true );
	return count( $json );
}